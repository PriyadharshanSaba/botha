export type BillingInfo = {
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  gstin?: string;   // optional — business buyers
  pan?: string;     // optional
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  verified: boolean;
  billingInfo?: BillingInfo | null;
};

export type UserWithOTP = User & {
  otp?: string;
  otpExpiry?: number;
};

/**
 * Data passed in when creating a user
 * (no id yet — DB driver assigns it)
 */
export type CreateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
};

export type Subscription = {
  id: string;
  userId: string;
  planId: string;
  status: string;
  razorpayOrderId: string | null;
  razorpayPaymentId: string | null;
  amountPaise: number;
  gstPaise: number;
  invoiceNumber: string | null;
  createdAt: Date;
  activatedAt: Date | null;
};

export type CreateSubscriptionInput = {
  userId: string;
  planId: string;
  razorpayOrderId: string;
  amountPaise: number;
  gstPaise: number;
};

export type CookieConsent = {
  id: string;
  userId: string;
  analytics: boolean;
  marketing: boolean;
  consentedAt: Date;
  policyVersion: string;
  withdrawnAt: Date | null;
};

export type SaveConsentInput = {
  userId: string;
  analytics: boolean;
  marketing: boolean;
  policyVersion: string;
  ipAddress?: string;
  userAgent?: string;
};

export interface DBDriver {
  createUser(data: CreateUserInput): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  saveOTP(email: string, otp: string, expiry: number): Promise<void>;
  verifyOTP(email: string, otp: string): Promise<boolean>;
  checkRateLimit(email: string): Promise<{ allowed: boolean; attemptsLeft: number }>;
  recordOtpAttempt(email: string): Promise<void>;
  markUserVerified(email: string): Promise<void>;
  markChapterViewed(userId: string, moduleId: string, chapterNumber: number): Promise<void>;
  hasCompletedChapter(userId: string, moduleId: string, chapterNumber: number): Promise<boolean>;
  getLastCompletedChapter(userId: string): Promise<{ moduleId: string | null; chapterNumber: number }>;
  getAllProgress(userId: string): Promise<Record<string, number>>;
  saveConsent(input: SaveConsentInput): Promise<CookieConsent>;
  getConsent(userId: string, policyVersion: string): Promise<CookieConsent | null>;
  withdrawConsent(userId: string, policyVersion: string): Promise<void>;
  saveBillingInfo(userId: string, info: BillingInfo): Promise<void>;
  createSubscription(input: CreateSubscriptionInput): Promise<Subscription>;
  activateSubscription(razorpayOrderId: string, razorpayPaymentId: string): Promise<string>;
  getUserSubscription(userId: string): Promise<Subscription | null>;
  getSubscriptionByOrderId(razorpayOrderId: string): Promise<Subscription | null>;
  getSubscriptionCount(planId: string): Promise<number>;
}
