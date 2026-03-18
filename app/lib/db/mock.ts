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
    // Mocked out (no-op)
  },

  async verifyOTP(email, otp) {
    const user = users.find(u => u.email === email);
    if (!user) return false;

    console.log("\n\nilli nodappa :\n", { emailid: email, otpp: otp, storedotp: user.otp });

    if (user.otp !== otp) return false;

    return true;
  },

  async markChapterViewed(userId, moduleId, chapterNumber) {
    console.log("Mock markChapterViewed:", { userId, moduleId, chapterNumber });
    return;
  },

  async hasCompletedChapter(userId, moduleId, chapterNumber) {
    console.log("Mock hasCompletedChapter:", { userId, moduleId, chapterNumber });
    return false; // fake response
  },

  async getLastCompletedChapter(userId) {
    console.log("Mock getLastCompletedChapter for:", userId);
    return {
      moduleId: null,
      chapterNumber: 0,
    };
  },

  async getAllProgress(userId) {
    console.log("Mock getAllProgress for:", userId);
    return {};
  }
};
