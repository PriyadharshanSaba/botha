import { db as drizzle } from "@/app/lib/db/connection";
import { sql } from "drizzle-orm";

/**
 * Return all user emails for the weekly-insights CSV export.
 * Filters out any row whose email column does not contain '@' as a
 * defensive sanity check, then deduplicates by lowercase email so we
 * never hand the partner two copies of the same address.
 */
export async function getAllUserEmailsForCsv(): Promise<string[]> {
  const res = await drizzle.execute(sql`
    SELECT email
    FROM users
    WHERE email LIKE '%@%'
  `);

  const rows = res.rows as Array<{ email: string }>;
  const seen = new Set<string>();
  const out: string[] = [];
  for (const r of rows) {
    const email = (r.email ?? "").trim();
    if (!email.includes("@")) continue;
    const key = email.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(email);
  }
  return out;
}
