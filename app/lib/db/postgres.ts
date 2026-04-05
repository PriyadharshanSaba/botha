import { DBDriver, CreateUserInput, User } from "./types";
import { db } from "./connection";
import { users, userProgress, otpAttempts } from "./schema";
import { eq, and, gte, count } from "drizzle-orm";
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
     GET USER BY EMAIL
  ----------------------------------*/
  async getUserByEmail(email: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
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
  }
};

