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
  canRefer: boolean;
  referralCode: string | null;
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
  createdAt: Date;
  activatedAt: Date | null;
  referralCode: string | null;
  originalAmountPaise: number | null;
};

export type CreateSubscriptionInput = {
  userId: string;
  planId: string;
  razorpayOrderId: string;
  amountPaise: number;
  referralCode?: string | null;
  originalAmountPaise?: number | null;
};

export type ReferralOffer = {
  code: string;
  ownerUserId: string;
  discountPercent: number | null;
  discountFlatPaise: number | null;
  description: string | null;
  active: boolean;
  createdAt: Date;
  expiresAt: Date | null;
};

export type ReferralIdentity = {
  canRefer: boolean;
  referralCode: string | null;
  offer: ReferralOffer | null;
};

export type ReferralStats = {
  count: number;
  totalDiscountPaise: number;
};

/* ──────────────────────────────────────────────────────────────────────── */
/* Invoice — immutable per-transaction record                              */
/* See: docs/superpowers/specs/2026-05-25-billing-invoice-design.md         */
/* ──────────────────────────────────────────────────────────────────────── */

export type InvoiceStatus = "draft" | "issued" | "paid" | "void";

/** Frozen at issue time. Independent of mutable users.billing_info. */
export type BuyerSnapshot = {
  name: string;
  email: string;
  phone?: string;
  address?: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  gstin?: string;
  pan?: string;
  stateCode?: string;     // GST state code, e.g. "29" for Karnataka
};

/** Frozen at issue time. Captures CURRENT_SUPPLIER at moment of issue. */
export type SupplierSnapshot = {
  legalName: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  email: string;
  pan: string;
  gstin?: string;          // undefined in pre-GST regime
  stateCode: string;
};

export type InvoiceLineItem = {
  description: string;
  hsnSac: string;          // e.g. "999293" for commercial training
  qty: number;
  unit: string;            // unit of measure, e.g. "Nos"
  unitPriceRs: number;     // pre-tax per unit (rupees, display only)
  taxableRs: number;       // qty * unitPriceRs (rupees, display only)
};

/** Freeform bookkeeping notes — narration, reverse-charge flag, etc. */
export type InvoiceNotes = {
  narration?: string;
  reverseCharge?: boolean;
  legacyBackfill?: boolean;
  missingBillingInfo?: boolean;
  [key: string]: unknown;
};

export type Invoice = {
  id: string;
  invoiceNumber: string | null;          // null while status='draft'
  userId: string;
  subscriptionId: string | null;
  invoiceDate: Date;
  status: InvoiceStatus;

  buyerSnapshot: BuyerSnapshot;
  supplierSnapshot: SupplierSnapshot;
  lineItems: InvoiceLineItem[];

  placeOfSupply: string;
  taxableTotalPaise: number;
  cgstPaise: number;
  sgstPaise: number;
  igstPaise: number;
  totalPaise: number;

  razorpayOrderId: string | null;
  razorpayPaymentId: string | null;

  notes: InvoiceNotes | null;
  voidedAt: Date | null;
  voidReason: string | null;

  pdfObjectKey: string | null;

  createdAt: Date;
  issuedAt: Date | null;
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

/* ──────────────────────────────────────────────────────────────────────── */
/* Blogs — DB-backed articles                                              */
/* ──────────────────────────────────────────────────────────────────────── */

export type BlogStatus = "draft" | "published";

/** One cell of the optional stat-row at the top of an article. */
export type BlogStatRowCell = {
  big: string;                              // "5.25%", "₹2.67L Cr", "~15 bps"
  tone?: "gold" | "red" | "green" | null;   // controls colour of the big number (default gold)
  label: string;                            // multi-line allowed via \n
};

export type Blog = {
  slug: string;
  kicker: string;
  title: string;
  titleHtml: string;
  deck: string;
  heroSub: string;
  heroBadge: string | null;
  topbarBrand: string;
  topbarTag: string;
  dateLabel: string;
  readTime: string;
  previewHtml: string;                      // sanitized
  gatedHtml: string;                        // sanitized
  statRow: BlogStatRowCell[] | null;
  status: BlogStatus;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
};

/** Fields shown on the public listing page — drops the heavy HTML columns. */
export type BlogListItem = {
  slug: string;
  kicker: string;
  title: string;
  deck: string;
  dateLabel: string;
  readTime: string;
  publishedAt: Date | null;
};

/** Admin listing — includes status + drafts. */
export type BlogAdminListItem = BlogListItem & {
  status: BlogStatus;
  updatedAt: Date;
};

/** Payload to upsert a blog. Slug is the natural key — same slug overwrites. */
export type BlogUpsertInput = {
  slug: string;
  kicker: string;
  title: string;
  titleHtml: string;
  deck: string;
  heroSub: string;
  heroBadge?: string | null;
  topbarBrand?: string;
  topbarTag: string;
  dateLabel: string;
  readTime: string;
  previewHtml: string;                      // MUST be pre-sanitized
  gatedHtml: string;                        // MUST be pre-sanitized
  statRow?: BlogStatRowCell[] | null;
  authorId: string;
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
  activateSubscription(razorpayOrderId: string, razorpayPaymentId: string): Promise<void>;
  getUserSubscription(userId: string): Promise<Subscription | null>;
  getSubscriptionByOrderId(razorpayOrderId: string): Promise<Subscription | null>;
  getSubscriptionCount(planId: string): Promise<number>;
  getReferralOffer(code: string): Promise<ReferralOffer | null>;
  getReferralIdentity(userId: string): Promise<ReferralIdentity>;
  recordRedemption(input: {
    code: string;
    referrerUserId: string;
    refereeUserId: string;
    razorpayOrderId: string;
    appliedDiscountPaise: number;
  }): Promise<void>;
  getReferralStats(referrerUserId: string): Promise<ReferralStats>;

  /* Blogs */
  listPublishedBlogs(): Promise<BlogListItem[]>;
  listAllBlogs(): Promise<BlogAdminListItem[]>;
  getBlogBySlug(slug: string): Promise<Blog | null>;
  upsertBlog(input: BlogUpsertInput): Promise<Blog>;
  publishBlog(slug: string): Promise<void>;
  unpublishBlog(slug: string): Promise<void>;
  deleteBlog(slug: string): Promise<void>;
}
