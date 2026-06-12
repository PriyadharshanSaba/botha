import { pgTable, text, timestamp, integer, primaryKey, serial, boolean, unique, jsonb, index, uniqueIndex } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import type { BillingInfo, BuyerSnapshot, SupplierSnapshot, InvoiceLineItem, InvoiceNotes, BlogStatRowCell } from "./types";
import type { NwtEntry } from "@/app/lib/networth/types";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").unique().notNull(),

  otp: text("otp"),
  otpExpiry: timestamp("otp_expiry"),
  verified: boolean("verified").default(false).notNull(),
  billingInfo: jsonb("billing_info").$type<BillingInfo | null>(),

  canRefer: boolean("can_refer").notNull().default(false),
  referralCode: text("referral_code"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const otpAttempts = pgTable("otp_attempts", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  attemptedAt: timestamp("attempted_at").defaultNow().notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  planId: text("plan_id").notNull(),                   // 'founding' | 'early_access' | 'regular'
  status: text("status").notNull().default("pending"),  // 'pending' | 'active'
  razorpayOrderId: text("razorpay_order_id").unique(),
  razorpayPaymentId: text("razorpay_payment_id"),
  amountPaise: integer("amount_paise").notNull(),       // total charged (incl. tax if any)
  invoiceId: text("invoice_id").references(() => invoices.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  activatedAt: timestamp("activated_at"),

  referralCode: text("referral_code"),
  originalAmountPaise: integer("original_amount_paise"),
});

/**
 * invoices — immutable per-transaction record.
 * Source-of-truth for buyer + supplier + line items + tax + invoice number.
 * Once status='issued', no field except status/voidedAt/voidReason may change.
 */
export const invoices = pgTable(
  "invoices",
  {
    id: text("id").primaryKey(),
    invoiceNumber: text("invoice_number"),                                                     // NULL while draft; assigned at issue
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "restrict" }),
    subscriptionId: text("subscription_id"),                                                   // FK declared at DB level (avoids TS circular)

    invoiceDate: timestamp("invoice_date").notNull(),
    status: text("status").notNull(),                                                          // 'draft' | 'issued' | 'paid' | 'void'

    buyerSnapshot:    jsonb("buyer_snapshot").$type<BuyerSnapshot>().notNull(),
    supplierSnapshot: jsonb("supplier_snapshot").$type<SupplierSnapshot>().notNull(),
    lineItems:        jsonb("line_items").$type<InvoiceLineItem[]>().notNull(),

    placeOfSupply:     text("place_of_supply").notNull(),                                      // GST state code, e.g. "29"
    taxableTotalPaise: integer("taxable_total_paise").notNull(),
    cgstPaise:         integer("cgst_paise").notNull().default(0),
    sgstPaise:         integer("sgst_paise").notNull().default(0),
    igstPaise:         integer("igst_paise").notNull().default(0),
    totalPaise:        integer("total_paise").notNull(),

    razorpayOrderId:   text("razorpay_order_id"),
    razorpayPaymentId: text("razorpay_payment_id"),

    notes:      jsonb("notes").$type<InvoiceNotes>(),
    voidedAt:   timestamp("voided_at"),
    voidReason: text("void_reason"),

    pdfObjectKey: text("pdf_object_key"),                                                      // R2 object key; NULL if generation failed

    createdAt: timestamp("created_at").defaultNow().notNull(),
    issuedAt:  timestamp("issued_at"),
  },
  (table) => ({
    invoiceNumberUq:  uniqueIndex("idx_invoices_invoice_number")
                        .on(table.invoiceNumber)
                        .where(sql`${table.invoiceNumber} IS NOT NULL`),
    userDateIdx:      index("idx_invoices_user_date").on(table.userId, table.invoiceDate),
    razorpayOrderIdx: index("idx_invoices_razorpay_order").on(table.razorpayOrderId),
  })
);

/**
 * invoice_counters — race-safe sequential invoice numbering per Indian FY.
 * Read/write via INSERT ... ON CONFLICT DO UPDATE inside the issueInvoice() transaction.
 */
export const invoiceCounters = pgTable("invoice_counters", {
  fy:      text("fy").primaryKey(),       // e.g. "2026-27"
  lastSeq: integer("last_seq").notNull(),
});

export const cookieConsents = pgTable(
  "cookie_consents",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),

    analytics: boolean("analytics").notNull().default(false),
    marketing: boolean("marketing").notNull().default(false),

    consentedAt: timestamp("consented_at").defaultNow().notNull(),
    policyVersion: text("policy_version").notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    withdrawnAt: timestamp("withdrawn_at"),
  },
  (table) => ({
    unq: unique().on(table.userId, table.policyVersion), // one record per user per policy version
  })
);

export const userProgress = pgTable(
  "user_progress",
  {
    userId: text("user_id")
      .notNull()
      .unique()
      .references(() => users.id, { onDelete: "cascade" }),

    moduleId: text("module_id").notNull(),
    chapterNumber: integer("chapter_number").notNull(),

    status: text("status").default("completed"),

    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    pk: primaryKey(table.userId),
  })
);

export const networthData = pgTable("networth_data", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  entries: jsonb("entries")
    .$type<NwtEntry[]>()
    .notNull()
    .default(sql`'[]'::jsonb`),
  schemaVersion: integer("schema_version").notNull().default(1),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  importUsedAt: timestamp("import_used_at"),
});

export const referralOffers = pgTable("referral_offers", {
  code: text("code").primaryKey(),
  ownerUserId: text("owner_user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  discountPercent: integer("discount_percent"),
  discountFlatPaise: integer("discount_flat_paise"),
  description: text("description"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at"),
}, (table) => ({
  ownerIdx: index("idx_referral_offers_owner").on(table.ownerUserId),
}));

/**
 * blogs — DB-backed articles. Written by admin uploader; read by /blogs and /blogs/[slug].
 * preview_html / gated_html are pre-sanitized at write time — never trust raw input
 * to land here. See app/lib/blogs/sanitize.ts.
 */
export const blogs = pgTable("blogs", {
  slug:         text("slug").primaryKey(),

  kicker:       text("kicker").notNull(),
  title:        text("title").notNull(),
  titleHtml:    text("title_html").notNull(),
  deck:         text("deck").notNull(),

  heroSub:      text("hero_sub").notNull(),
  heroBadge:    text("hero_badge"),
  topbarBrand:  text("topbar_brand").notNull().default("Markets & Macro"),
  topbarTag:    text("topbar_tag").notNull(),

  dateLabel:    text("date_label").notNull(),
  readTime:     text("read_time").notNull(),

  previewHtml:  text("preview_html").notNull(),
  gatedHtml:    text("gated_html").notNull(),

  statRow:      jsonb("stat_row").$type<BlogStatRowCell[] | null>(),

  status:       text("status").notNull().default("draft"),          // 'draft' | 'published'
  authorId:     text("author_id").notNull().references(() => users.id, { onDelete: "restrict" }),
  createdAt:    timestamp("created_at").defaultNow().notNull(),
  updatedAt:    timestamp("updated_at").defaultNow().notNull(),
  publishedAt:  timestamp("published_at"),
}, (table) => ({
  statusPublishedIdx: index("idx_blogs_status_published").on(table.status, table.publishedAt),
  updatedIdx:         index("idx_blogs_updated").on(table.updatedAt),
}));

export const referralRedemptions = pgTable("referral_redemptions", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().references(() => referralOffers.code, { onDelete: "restrict" }),
  referrerUserId: text("referrer_user_id").notNull().references(() => users.id, { onDelete: "restrict" }),
  refereeUserId: text("referee_user_id").notNull().references(() => users.id, { onDelete: "restrict" }),
  razorpayOrderId: text("razorpay_order_id").notNull().unique(),
  appliedDiscountPaise: integer("applied_discount_paise").notNull(),
  redeemedAt: timestamp("redeemed_at").defaultNow().notNull(),
}, (table) => ({
  referrerIdx: index("idx_redemptions_referrer").on(table.referrerUserId),
  refereeIdx: index("idx_redemptions_referee").on(table.refereeUserId),
}));
