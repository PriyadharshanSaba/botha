import { DBDriver, UserWithOTP, CreateUserInput, CookieConsent, SaveConsentInput, Subscription, CreateSubscriptionInput, BillingInfo } from "./types";
import { mockUsers } from "../mock/users";
import crypto from "crypto";

const users: UserWithOTP[] = [...mockUsers];

export const MockDB: DBDriver = {
  async createUser(data: CreateUserInput) {
    const user: UserWithOTP = {
      id: crypto.randomUUID(),
      ...data,
      otp: "000000",
      verified: false,
    };
    users.push(user);
    return user;
  },

  async getUserById(id: string) {
    return users.find(u => u.id === id) || null;
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
  },

  async checkRateLimit(_email) {
    return { allowed: true, attemptsLeft: 2 };
  },

  async recordOtpAttempt(_email) {
    // no-op
  },

  async markUserVerified(_email) {
    // no-op
  },

  async saveBillingInfo(_userId: string, _info: BillingInfo): Promise<void> {},

  async createSubscription(input: CreateSubscriptionInput): Promise<Subscription> {
    return { id: "mock-sub", userId: input.userId, planId: input.planId, status: "pending", razorpayOrderId: input.razorpayOrderId, razorpayPaymentId: null, amountPaise: input.amountPaise, gstPaise: input.gstPaise, createdAt: new Date(), activatedAt: null };
  },
  async activateSubscription(_orderId: string, _paymentId: string): Promise<void> {},
  async getUserSubscription(_userId: string): Promise<Subscription | null> { return null; },
  async getSubscriptionByOrderId(_orderId: string): Promise<Subscription | null> { return null; },
  async getSubscriptionCount(_planId: string): Promise<number> { return 34; },

  async saveConsent(input: SaveConsentInput): Promise<CookieConsent> {
    return {
      id: "mock-id",
      userId: input.userId,
      analytics: input.analytics,
      marketing: input.marketing,
      policyVersion: input.policyVersion,
      consentedAt: new Date(),
      withdrawnAt: null,
    };
  },

  async getConsent(_userId: string, _policyVersion: string): Promise<CookieConsent | null> {
    return null; // always prompts in mock
  },

  async withdrawConsent(_userId: string, _policyVersion: string): Promise<void> {
    // no-op
  },
};
