import { pgTable, text, timestamp, integer, primaryKey, serial, boolean, unique, jsonb } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").unique().notNull(),

  otp: text("otp"),
  otpExpiry: timestamp("otp_expiry"),
  verified: boolean("verified").default(false).notNull(),
  billingInfo: jsonb("billing_info"),
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
  amountPaise: integer("amount_paise").notNull(),       // total incl. GST
  gstPaise: integer("gst_paise").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  activatedAt: timestamp("activated_at"),
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

    moduleId: text("module_id").notNull(),       // ← last active module
    chapterNumber: integer("chapter_number").notNull(), // ← last active chapter

    status: text("status").default("completed"),

    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    pk: primaryKey(table.userId), // ← ONLY ONE ROW PER USER
  })
);

