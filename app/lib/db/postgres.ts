import { DBDriver, CreateUserInput, User, SaveConsentInput, CookieConsent, Subscription, CreateSubscriptionInput, BillingInfo } from "./types";
import { db } from "./connection";
import { users, userProgress, otpAttempts, cookieConsents, subscriptions } from "./schema";
import { eq, and, gte, count, sql } from "drizzle-orm";
import crypto from "crypto";

const DAILY_OTP_LIMIT = 2;

export const PostgresDB: DBDriver = {
  /* --------------------------------
     CREATE USER
  ----------------------------------*/
  async createUser(data: CreateUserInput): Promise<User> {
    const id = crypto.randomUUID();

    await db.insert(users).values({
      id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });

    return { id, ...data, verified: false };
  },

  /* --------------------------------
     GET USER BY ID
  ----------------------------------*/
  async getUserById(id: string) {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0] || null;
  },

  /* --------------------------------
     GET USER BY EMAIL
  ----------------------------------*/
  async getUserByEmail(email: string) {
    const result = await db
      .select()
      .from(users)
      .where(sql`lower(${users.email}) = lower(${email})`)
      .limit(1);

    return result[0] || null;
  },

  /* --------------------------------
     OTP SAVE
  ----------------------------------*/
  async saveOTP(email, otp, expiry) {
    await db
      .update(users)
      .set({
        otp,
        otpExpiry: new Date(expiry),
      })
      .where(eq(users.email, email));
  },

  /* --------------------------------
     MARK USER VERIFIED
  ----------------------------------*/
  async markUserVerified(email: string) {
    await db
      .update(users)
      .set({ verified: true })
      .where(eq(users.email, email));
  },

  /* --------------------------------
     RATE LIMIT: Check
  ----------------------------------*/
  async checkRateLimit(email: string) {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);

    const result = await db
      .select({ total: count() })
      .from(otpAttempts)
      .where(and(eq(otpAttempts.email, email), gte(otpAttempts.attemptedAt, startOfDay)));

    const used = result[0]?.total ?? 0;
    return {
      allowed: used < DAILY_OTP_LIMIT,
      attemptsLeft: Math.max(0, DAILY_OTP_LIMIT - used),
    };
  },

  /* --------------------------------
     RATE LIMIT: Record attempt
  ----------------------------------*/
  async recordOtpAttempt(email: string) {
    await db.insert(otpAttempts).values({ email });
  },

  /* --------------------------------
     OTP VERIFY
  ----------------------------------*/
  async verifyOTP(email, otp) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    const user = result[0];
    if (!user) return false;
    if (user.otp !== otp) return false;

    if (!user.otpExpiry || Date.now() > new Date(user.otpExpiry).getTime()) {
      return false;
    }

    // Clear OTP after success
    await db
      .update(users)
      .set({ otp: null, otpExpiry: null })
      .where(eq(users.email, email));

    return true;
  },

  /* --------------------------------
     PROGRESS: Mark Chapter Completed
  ----------------------------------*/
  async markChapterViewed(userId, moduleId, chapterNumber) {
    await db
      .insert(userProgress)
      .values({
        userId,
        moduleId,
        chapterNumber,
        status: "completed",
      })
      .onConflictDoUpdate({
        target: userProgress.userId,
        set: {
          moduleId,
          chapterNumber,
          status: "completed",
          updatedAt: new Date(),
        },
      });
  },


  /* --------------------------------
     PROGRESS: Has User Completed?
  ----------------------------------*/
  async hasCompletedChapter(userId: string, moduleId: string, chapterNumber: number) {
    const res = await db
      .select()
      .from(userProgress)
      .where(
        and(
          eq(userProgress.userId, userId),
          eq(userProgress.moduleId, moduleId),
          eq(userProgress.chapterNumber, chapterNumber)
        )
      )
      .limit(1);

    return res.length > 0;
  },

  /* --------------------------------
     PROGRESS: Get Last Completed Chapter
  ----------------------------------*/
  async getLastCompletedChapter(userId) {
    const res = await db
      .select()
      .from(userProgress)
      .where(eq(userProgress.userId, userId))
      .limit(1);

    return {
      moduleId: res[0]?.moduleId ?? null,
      chapterNumber: res[0]?.chapterNumber ?? 0,
    };
  },

  /* --------------------------------
     PROGRESS: Get All Modules Progress
  ----------------------------------*/
  async getAllProgress(userId) {
    const rows = await db
      .select()
      .from(userProgress)
      .where(eq(userProgress.userId, userId));

    return Object.fromEntries(rows.map((r) => [r.moduleId, r.chapterNumber]));
  },

  /* --------------------------------
     BILLING INFO: Save to user record
  ----------------------------------*/
  async saveBillingInfo(userId: string, info: BillingInfo): Promise<void> {
    await db
      .update(users)
      .set({ billingInfo: info })
      .where(eq(users.id, userId));
  },

  /* --------------------------------
     SUBSCRIPTION: Create (pending)
  ----------------------------------*/
  async createSubscription(input: CreateSubscriptionInput): Promise<Subscription> {
    const id = crypto.randomUUID();
    await db.insert(subscriptions).values({
      id,
      userId: input.userId,
      planId: input.planId,
      status: "pending",
      razorpayOrderId: input.razorpayOrderId,
      amountPaise: input.amountPaise,
      gstPaise: input.gstPaise,
      createdAt: new Date(),
    });
    return (await db.select().from(subscriptions).where(eq(subscriptions.id, id)).limit(1))[0] as Subscription;
  },

  /* --------------------------------
     SUBSCRIPTION: Activate on payment
     Generates sequential invoice number: YYYYMMDD00001
  ----------------------------------*/
  async activateSubscription(razorpayOrderId: string, razorpayPaymentId: string): Promise<string> {
    const now = new Date();
    const datePrefix = now.getFullYear().toString()
      + String(now.getMonth() + 1).padStart(2, "0")
      + String(now.getDate()).padStart(2, "0");

    // Atomically count existing invoices for today and assign next sequence
    const result = await db.execute(sql`
      UPDATE subscriptions
      SET status = 'active',
          razorpay_payment_id = ${razorpayPaymentId},
          activated_at = ${now},
          invoice_number = ${datePrefix} || LPAD(
            (
              SELECT COALESCE(COUNT(*), 0) + 1
              FROM subscriptions
              WHERE invoice_number LIKE ${datePrefix + "%"}
            )::text, 5, '0'
          )
      WHERE razorpay_order_id = ${razorpayOrderId}
      RETURNING invoice_number
    `);

    return (result.rows[0] as { invoice_number: string }).invoice_number;
  },

  /* --------------------------------
     SUBSCRIPTION: Get active for user
  ----------------------------------*/
  async getUserSubscription(userId: string): Promise<Subscription | null> {
    const res = await db
      .select()
      .from(subscriptions)
      .where(and(eq(subscriptions.userId, userId), eq(subscriptions.status, "active")))
      .limit(1);
    return (res[0] as Subscription) ?? null;
  },

  /* --------------------------------
     SUBSCRIPTION: Get by Razorpay order ID
  ----------------------------------*/
  async getSubscriptionByOrderId(razorpayOrderId: string): Promise<Subscription | null> {
    const res = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.razorpayOrderId, razorpayOrderId))
      .limit(1);
    return (res[0] as Subscription) ?? null;
  },

  /* --------------------------------
     SUBSCRIPTION: Count active seats for a plan
  ----------------------------------*/
  async getSubscriptionCount(planId: string): Promise<number> {
    const res = await db
      .select({ total: count() })
      .from(subscriptions)
      .where(and(eq(subscriptions.planId, planId), eq(subscriptions.status, "active")));
    return res[0]?.total ?? 0;
  },

  /* --------------------------------
     CONSENT: Save (upsert by version)
  ----------------------------------*/
  async saveConsent(input: SaveConsentInput): Promise<CookieConsent> {
    const id = crypto.randomUUID();

    await db
      .insert(cookieConsents)
      .values({
        id,
        userId: input.userId,
        analytics: input.analytics,
        marketing: input.marketing,
        policyVersion: input.policyVersion,
        ipAddress: input.ipAddress ?? null,
        userAgent: input.userAgent ?? null,
        consentedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: [cookieConsents.userId, cookieConsents.policyVersion],
        set: {
          analytics: input.analytics,
          marketing: input.marketing,
          consentedAt: new Date(),
          ipAddress: input.ipAddress ?? null,
          userAgent: input.userAgent ?? null,
          withdrawnAt: null, // re-consenting clears any prior withdrawal
        },
      });

    const row = await db
      .select()
      .from(cookieConsents)
      .where(
        and(
          eq(cookieConsents.userId, input.userId),
          eq(cookieConsents.policyVersion, input.policyVersion)
        )
      )
      .limit(1);

    return row[0] as CookieConsent;
  },

  /* --------------------------------
     CONSENT: Get by user + version
  ----------------------------------*/
  async getConsent(userId: string, policyVersion: string): Promise<CookieConsent | null> {
    const res = await db
      .select()
      .from(cookieConsents)
      .where(
        and(
          eq(cookieConsents.userId, userId),
          eq(cookieConsents.policyVersion, policyVersion)
        )
      )
      .limit(1);

    return (res[0] as CookieConsent) ?? null;
  },

  /* --------------------------------
     CONSENT: Withdraw
  ----------------------------------*/
  async withdrawConsent(userId: string, policyVersion: string): Promise<void> {
    await db
      .update(cookieConsents)
      .set({ withdrawnAt: new Date() })
      .where(
        and(
          eq(cookieConsents.userId, userId),
          eq(cookieConsents.policyVersion, policyVersion)
        )
      );
  },
};

