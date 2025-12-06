import { DBDriver, UserWithOTP, User } from "./types";
import crypto from "crypto";

const users: UserWithOTP[] = [];

export const MemoryDriver: DBDriver = {
  async createUser(user: User) {
    const id = crypto.randomUUID();
    const newUser = { ...user, id };
    users.push(newUser);
    return newUser;
  },

  async getUserByEmail(email: string) {
    return users.find(u => u.email === email) || null;
  },

  async saveOTP(email: string, otp: string, expiry: number) {
    const user = users.find(u => u.email === email);
    if (user) {
      user.otp = otp;
      user.otpExpiry = expiry;
    }
  },

  async verifyOTP(email: string, otp: string) {
    const user = users.find(u => u.email === email);

    if (!user || user.otp !== otp) return false;
    if (!user.otpExpiry || Date.now() > user.otpExpiry) return false;

    // clear OTP after success
    user.otp = undefined;
    user.otpExpiry = undefined;
    return true;
  }
};
