/* eslint-disable @typescript-eslint/no-unused-vars */
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
      canRefer: false,
      referralCode: null,
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
    return false;
  },

  async getLastCompletedChapter(userId) {
    console.log("Mock getLastCompletedChapter for:", userId);
    return { moduleId: null, chapterNumber: 0 };
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
    return { id: "mock-sub", userId: input.userId, planId: input.planId, status: "pending", razorpayOrderId: input.razorpayOrderId, razorpayPaymentId: null, amountPaise: input.amountPaise, createdAt: new Date(), activatedAt: null, referralCode: input.referralCode ?? null, originalAmountPaise: input.originalAmountPaise ?? null };
  },
  async activateSubscription(_orderId: string, _paymentId: string): Promise<void> { /* no-op */ },
  async getUserSubscription(_userId: string): Promise<Subscription | null> { return null; },
  async getSubscriptionByOrderId(_orderId: string): Promise<Subscription | null> { return null; },
  async getSubscriptionCount(_planId: string): Promise<number> { return 34; },

  async getReferralOffer(_code: string) { return null; },
  async getReferralIdentity(_userId: string) { return { canRefer: false, referralCode: null, offer: null }; },
  async recordRedemption(_input) { /* no-op */ },
  async getReferralStats(_referrerUserId: string) { return { count: 0, totalDiscountPaise: 0 }; },

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

  /* Blogs — mock returns empty / null. Real implementation lives in PostgresDB. */
  async listPublishedBlogs() { return []; },
  async listAllBlogs() { return []; },
  async getBlogBySlug(_slug: string) { return null; },
  async upsertBlog(input) {
    const now = new Date();
    return {
      slug: input.slug,
      kicker: input.kicker,
      title: input.title,
      titleHtml: input.titleHtml,
      deck: input.deck,
      heroSub: input.heroSub,
      heroBadge: input.heroBadge ?? null,
      topbarBrand: input.topbarBrand ?? "Markets & Macro",
      topbarTag: input.topbarTag,
      dateLabel: input.dateLabel,
      readTime: input.readTime,
      previewHtml: input.previewHtml,
      gatedHtml: input.gatedHtml,
      customCss: input.customCss ?? null,
      statRow: input.statRow ?? null,
      status: "draft",
      authorId: input.authorId,
      createdAt: now,
      updatedAt: now,
      publishedAt: null,
    };
  },
  async publishBlog(_slug: string) { /* no-op */ },
  async unpublishBlog(_slug: string) { /* no-op */ },
  async deleteBlog(_slug: string) { /* no-op */ },
};
