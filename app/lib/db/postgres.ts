import { DBDriver, CreateUserInput, User, SaveConsentInput, CookieConsent, Subscription, CreateSubscriptionInput, BillingInfo, ReferralOffer, ReferralIdentity, ReferralStats } from "./types";
import { db } from "./connection";
import { users, userProgress, otpAttempts, cookieConsents, subscriptions, referralOffers, referralRedemptions } from "./schema";
import { eq, and, gte, count, sql } from "drizzle-orm";
import crypto from "crypto";

const DAILY_OTP_LIMIT = 5;

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

    return { id, ...data, verified: false, canRefer: false, referralCode: null };
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
      .where(sql`lower(${users.email}) = lower(${email})`);
  },

  /* --------------------------------
     MARK USER VERIFIED
  ----------------------------------*/
  async markUserVerified(email: string) {
    await db
      .update(users)
      .set({ verified: true })
      .where(sql`lower(${users.email}) = lower(${email})`);
  },

  /* --------------------------------
     RATE LIMIT: Check
  ----------------------------------*/
  async checkRateLimit(email: string) {
    // IST = UTC+5:30; find start of current IST day expressed in UTC
    const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
    const nowIST = new Date(Date.now() + IST_OFFSET_MS);
    const startOfISTDay = new Date(Date.UTC(nowIST.getUTCFullYear(), nowIST.getUTCMonth(), nowIST.getUTCDate()));
    const startOfDay = new Date(startOfISTDay.getTime() - IST_OFFSET_MS);

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
      .where(sql`lower(${users.email}) = lower(${email})`)
      .limit(1);

    const user = result[0];
    if (!user || !user.otp || !user.otpExpiry) return false;

    // Expired — clear and reject
    if (Date.now() > new Date(user.otpExpiry).getTime()) {
      await db
        .update(users)
        .set({ otp: null, otpExpiry: null })
        .where(eq(users.id, user.id));
      return false;
    }

    // Wrong OTP — clear to prevent brute-force (user must request a new one)
    if (user.otp !== otp) {
      await db
        .update(users)
        .set({ otp: null, otpExpiry: null })
        .where(eq(users.id, user.id));
      return false;
    }

    // Success — clear OTP (single-use)
    await db
      .update(users)
      .set({ otp: null, otpExpiry: null })
      .where(eq(users.id, user.id));

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
      referralCode: input.referralCode ?? null,
      originalAmountPaise: input.originalAmountPaise ?? null,
      createdAt: new Date(),
    });
    return (await db.select().from(subscriptions).where(eq(subscriptions.id, id)).limit(1))[0] as Subscription;
  },

  /* --------------------------------
     SUBSCRIPTION: Activate on payment
     Flips status to 'active' on the matching pending sub.
     Invoice number now lives on invoices.invoice_number (assigned by
     issueInvoice in app/lib/billing/issue.ts).
  ----------------------------------*/
  async activateSubscription(razorpayOrderId: string, razorpayPaymentId: string): Promise<void> {
    // Only activate pending subscriptions (idempotency + race condition guard)
    await db
      .update(subscriptions)
      .set({
        status: "active",
        razorpayPaymentId,
        activatedAt: new Date(),
      })
      .where(
        and(
          eq(subscriptions.razorpayOrderId, razorpayOrderId),
          eq(subscriptions.status, "pending")
        )
      );
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
      .where(and(
        eq(subscriptions.planId, planId),
        sql`${subscriptions.status} IN ('active', 'pending')`
      ));
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

  /* --------------------------------
     REFERRAL: Get offer by code
  ----------------------------------*/
  async getReferralOffer(code: string): Promise<ReferralOffer | null> {
    const rows = await db
      .select()
      .from(referralOffers)
      .where(eq(referralOffers.code, code))
      .limit(1);
    if (rows.length === 0) return null;
    const r = rows[0];
    return {
      code: r.code,
      ownerUserId: r.ownerUserId,
      discountPercent: r.discountPercent,
      discountFlatPaise: r.discountFlatPaise,
      description: r.description,
      active: r.active,
      createdAt: r.createdAt,
      expiresAt: r.expiresAt,
    };
  },

  /* --------------------------------
     REFERRAL: Get user's referral identity
  ----------------------------------*/
  async getReferralIdentity(userId: string): Promise<ReferralIdentity> {
    const user = await this.getUserById(userId);
    if (!user) return { canRefer: false, referralCode: null, offer: null };
    const offer = user.referralCode ? await this.getReferralOffer(user.referralCode) : null;
    return { canRefer: user.canRefer, referralCode: user.referralCode, offer };
  },

  /* --------------------------------
     REFERRAL: Record a redemption (idempotent per razorpay_order_id)
  ----------------------------------*/
  async recordRedemption(input: {
    code: string;
    referrerUserId: string;
    refereeUserId: string;
    razorpayOrderId: string;
    appliedDiscountPaise: number;
  }): Promise<void> {
    await db
      .insert(referralRedemptions)
      .values({
        code: input.code,
        referrerUserId: input.referrerUserId,
        refereeUserId: input.refereeUserId,
        razorpayOrderId: input.razorpayOrderId,
        appliedDiscountPaise: input.appliedDiscountPaise,
      })
      .onConflictDoNothing();
  },

  /* --------------------------------
     REFERRAL STATS — count + total discount given by this referrer
  ----------------------------------*/
  async getReferralStats(referrerUserId: string): Promise<ReferralStats> {
    const result = await db
      .select({
        count: count(),
        total: sql<number>`COALESCE(SUM(${referralRedemptions.appliedDiscountPaise}), 0)`,
      })
      .from(referralRedemptions)
      .where(eq(referralRedemptions.referrerUserId, referrerUserId));
    const row = result[0];
    return {
      count: Number(row?.count ?? 0),
      totalDiscountPaise: Number(row?.total ?? 0),
    };
  },
};

