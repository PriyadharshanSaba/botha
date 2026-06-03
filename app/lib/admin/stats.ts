import { db as drizzle } from "@/app/lib/db/connection";
import { sql } from "drizzle-orm";
import { getTestEmails } from "@/app/lib/utils/otp";

export type DailyPoint = { date: string; count: number };

export type DashboardStats = {
  subscriberCount: number;
  moneyCollectedPaise: number;
  planBreakdown: { planId: string; count: number }[];
  paidSubsLast10Days: DailyPoint[];
  newSignupsLast10Days: DailyPoint[];
};

export async function getDashboardStats(): Promise<DashboardStats> {
  const testEmails = getTestEmails();
  // sql.raw is unsafe for user input; here values are env-controlled.
  // Build a SQL array literal of lowercased emails.
  const excludeList = sql.raw(
    testEmails.length === 0
      ? "('')"
      : "(" + testEmails.map((e) => `'${e.replace(/'/g, "''")}'`).join(",") + ")"
  );

  const subscriberRes = await drizzle.execute(sql`
    SELECT COUNT(DISTINCT s.user_id)::int AS count
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    WHERE s.status = 'active'
      AND LOWER(u.email) NOT IN ${excludeList}
  `);
  const subscriberRow = subscriberRes.rows[0] as { count: number } | undefined;

  const moneyRes = await drizzle.execute(sql`
    SELECT COALESCE(SUM(i.total_paise), 0)::bigint AS total
    FROM invoices i
    JOIN users u ON u.id = i.user_id
    WHERE i.status = 'paid'
      AND LOWER(u.email) NOT IN ${excludeList}
  `);
  const moneyRow = moneyRes.rows[0] as { total: number | string } | undefined;

  const planRes = await drizzle.execute(sql`
    SELECT s.plan_id, COUNT(*)::int AS count
    FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    WHERE s.status = 'active'
      AND LOWER(u.email) NOT IN ${excludeList}
    GROUP BY s.plan_id
    ORDER BY count DESC
  `);
  const planRows = planRes.rows as { plan_id: string; count: number }[];

  const paidSubsRes = await drizzle.execute(sql`
    WITH days AS (
      SELECT generate_series(
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata') - INTERVAL '9 days',
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata'),
        INTERVAL '1 day'
      )::date AS d
    )
    SELECT to_char(days.d, 'YYYY-MM-DD') AS d,
           COALESCE(COUNT(s.id), 0)::int AS count
    FROM days
    LEFT JOIN subscriptions s
      ON DATE(s.created_at AT TIME ZONE 'Asia/Kolkata') = days.d
     AND s.status = 'active'
    LEFT JOIN users u ON u.id = s.user_id
    WHERE (s.id IS NULL OR LOWER(u.email) NOT IN ${excludeList})
    GROUP BY days.d
    ORDER BY days.d ASC
  `);
  const paidSubsDays = paidSubsRes.rows as { d: string; count: number }[];

  const signupRes = await drizzle.execute(sql`
    WITH days AS (
      SELECT generate_series(
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata') - INTERVAL '9 days',
        (CURRENT_DATE AT TIME ZONE 'Asia/Kolkata'),
        INTERVAL '1 day'
      )::date AS d
    )
    SELECT to_char(days.d, 'YYYY-MM-DD') AS d,
           COALESCE(COUNT(u.id), 0)::int AS count
    FROM days
    LEFT JOIN users u
      ON DATE(u.created_at AT TIME ZONE 'Asia/Kolkata') = days.d
     AND u.verified = true
     AND LOWER(u.email) NOT IN ${excludeList}
    GROUP BY days.d
    ORDER BY days.d ASC
  `);
  const signupDays = signupRes.rows as { d: string; count: number }[];

  return {
    subscriberCount: Number(subscriberRow?.count ?? 0),
    moneyCollectedPaise: Number(moneyRow?.total ?? 0),
    planBreakdown: planRows.map((r) => ({ planId: r.plan_id, count: Number(r.count) })),
    paidSubsLast10Days: paidSubsDays.map((r) => ({ date: r.d, count: Number(r.count) })),
    newSignupsLast10Days: signupDays.map((r) => ({ date: r.d, count: Number(r.count) })),
  };
}
