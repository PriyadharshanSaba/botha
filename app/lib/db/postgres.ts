import { DBDriver, CreateUserInput, User } from "./types";
import { db } from "./connection";
import { users } from "./schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

export const PostgresDB: DBDriver = {
  async createUser(data: CreateUserInput): Promise<User> {
    const id = crypto.randomUUID();

    await db.insert(users).values({
      id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });

    return { id, ...data };
  },

  async getUserByEmail(email: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    return result[0] || null;
  },

  async saveOTP(email, otp, expiry) {
    await db
      .update(users)
      .set({
        otp,
        otpExpiry: new Date(expiry),
      })
      .where(eq(users.email, email));
  },

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
};
