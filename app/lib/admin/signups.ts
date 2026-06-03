import { db as drizzle } from "@/app/lib/db/connection";
import { sql } from "drizzle-orm";
import { getTestEmails } from "@/app/lib/utils/otp";

export type SignupRow = {
  subscriptionId: string;
  createdAt: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  planId: string;
  amountPaise: number;
  invoiceId: string | null;
  invoiceNumber: string | null;
};

export async function getSignupsLedger({ limit = 100 }: { limit?: number } = {}): Promise<SignupRow[]> {
  const testEmails = getTestEmails();
  const excludeList = sql.raw(
    testEmails.length === 0
      ? "('')"
      : "(" + testEmails.map((e) => `'${e.replace(/'/g, "''")}'`).join(",") + ")"
  );

  const res = await drizzle.execute(sql`
    SELECT s.id AS subscription_id,
           s.created_at,
           u.first_name,
           u.last_name,
           u.email,
           s.plan_id,
           s.amount_paise,
           i.id AS invoice_id,
           i.invoice_number
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    LEFT JOIN invoices i
      ON i.subscription_id = s.id AND i.status IN ('issued', 'paid')
    WHERE s.status = 'active'
      AND LOWER(u.email) NOT IN ${excludeList}
    ORDER BY s.created_at DESC
    LIMIT ${sql.raw(String(Math.max(1, Math.min(500, limit))))}
  `);

  const rows = res.rows as Array<{
    subscription_id: string;
    created_at: string;
    first_name: string | null;
    last_name: string | null;
    email: string;
    plan_id: string;
    amount_paise: number;
    invoice_id: string | null;
    invoice_number: string | null;
  }>;

  return rows.map((r) => ({
    subscriptionId: r.subscription_id,
    createdAt: r.created_at,
    firstName: r.first_name,
    lastName: r.last_name,
    email: r.email,
    planId: r.plan_id,
    amountPaise: Number(r.amount_paise),
    invoiceId: r.invoice_id,
    invoiceNumber: r.invoice_number,
  }));
}
