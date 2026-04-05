import { pgTable, text, timestamp, integer, primaryKey, serial, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").unique().notNull(),

  otp: text("otp"),
  otpExpiry: timestamp("otp_expiry"),
  verified: boolean("verified").default(false).notNull(),
});

export const otpAttempts = pgTable("otp_attempts", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  attemptedAt: timestamp("attempted_at").defaultNow().notNull(),
});

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

