import { DBDriver, UserWithOTP, CreateUserInput } from "./types";
import { mockUsers } from "../mock/users";
import crypto from "crypto";

const users: UserWithOTP[] = [...mockUsers];

export const MockDB: DBDriver = {
  async createUser(data: CreateUserInput) {
    const user: UserWithOTP = {
      id: crypto.randomUUID(),
      ...data,
      otp: "000000",
    };
    users.push(user);
    return user;
  },

  async getUserByEmail(email: string) {
    return users.find(u => u.email === email) || null;
  },

  async saveOTP(email, otp, expiry) {
    const user = users.find(u => u.email === email);
    // if (user) {
      // user.otp = otp;
      // user.otpExpiry = expiry;
    // }
  },

  async verifyOTP(email, otp) {
    const user = users.find(u => u.email === email);
    if (!user) return false;

    console.log("\n\nilli nodappa :\n", {emailid: email, otpp:otp, storedotp:user.otp})

    if (user.otp !== otp) return false;
    // if (!user.otpExpiry || Date.now() > user.otpExpiry) return false;

    // user.otp = undefined;  // todo: reqired in prod
    // user.otpExpiry = undefined;

    return true;
  }
};
