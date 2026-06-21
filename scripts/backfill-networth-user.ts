/**
 * One-off backfill: seed 20 monthly net-worth entries for a specific user
 * from the spreadsheet `Net_Worth_Tracker.xlsx` (Monthly History sheet).
 *
 * Usage:
 *   npx tsx scripts/backfill-networth-user.ts
 *
 * Notes:
 *   - Inserts directly into networth_data and sets import_used_at = now().
 *   - Assumes the user's networth_data row has been cleared beforehand.
 *   - Source columns: Bank+Cash, Stocks, Mutual Funds, EPF/PPF/NPS, LIC,
 *     WazirX (recov.), ESOP/Illiquid, Liabilities.
 *   - alloc buckets (6): cash, equity, mutualFunds, debt, gold, realestate.
 *     Equity = stocks + wazirxRT + esopIlliquid. Debt = epfPpfNps + lic.
 *     Cash = bankCash. MutualFunds = mutualFunds. Gold + realestate = 0.
 */
import { config } from "dotenv";
// Load env BEFORE importing modules that read process.env at module-init.
config({ path: ".env.local" });

import crypto from "node:crypto";
import type { NwtEntry } from "../app/lib/networth/types";

const USER_ID = "7f875cfc-4b48-43f5-ad91-c891a734f953";

const MONTH_MAP: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

function toIsoMonth(label: string): string {
  const [mon, yr] = label.split("-");
  const mm = MONTH_MAP[mon];
  if (!mm) throw new Error(`bad month label: ${label}`);
  return `${yr}-${mm}`;
}

// Rows from Monthly History sheet:
// [monthLabel, bankCash, stocks, mutualFunds, epfPpfNps, lic, wazirxRT, esopIlliquid, liabilityAmount]
// Liability label: 'creditCard' for Jun-2026 (matches source Net Worth sheet § 8);
// 'loans' for older non-zero months (sheet only carries aggregate column).
const ROWS: Array<[string, number, number, number, number, number, number, number, number]> = [
  ["Dec-2023",  113381,  959641, 149000, 152000, 540765, 122901, 33419, 247764],
  ["Jan-2024",  125072, 1025052, 152751, 154000, 552782, 123916, 33419, 217764],
  ["Feb-2024",  150551, 1024131, 155249, 212698, 564799, 173996, 33419, 189969],
  ["Mar-2024",   50159, 1026500, 161162, 216298, 576816, 184864, 33419, 157764],
  ["Apr-2024",  417336,  698139, 162213, 217160, 588833, 192274, 33419, 131058],
  ["May-2024",  607016,  704971, 164623, 217160, 600850, 186519, 33419, 101235],
  ["Jun-2024",  354103, 1068018, 177183, 217160, 612867, 189769, 33419,  71190],
  ["Jul-2024",  274818, 1307599, 238194, 217160, 624884, 145321, 33419,  40748],
  ["Aug-2024",  676900,  965506, 244995, 217160, 636901, 186985, 33419,  15748],
  ["Sep-2024",  769836,  967845, 252157, 217160, 648918, 186985, 33419,      0],
  ["Oct-2024",  717740,  872804, 241049, 217160, 660935, 186985, 33419,      0],
  ["Nov-2024", 1348109,  300122, 245249, 217160, 672952, 186985, 33419,      0],
  ["Dec-2024", 1305897,  333340, 245521, 217160, 684969, 186985, 33419,      0],
  ["Jan-2025", 1154640,  585389, 240945, 217160, 795986, 186985, 33419,      0],
  ["Feb-2025", 1154640,  585389, 240945, 217160, 795986, 186985, 33419,      0],
  ["Mar-2025", 1154640,  585389, 240945, 217160, 795986, 186985, 33419,      0],
  ["Apr-2025", 1761909,       0, 246523, 217160, 808003, 186973, 33419,      0],
  ["Nov-2025",  339000,  279224, 295484, 217160, 892122, 165205, 33419,      0],
  ["Jun-2026", 1054720,  369120, 338952, 382913, 905235,      0, 33419,  40448],
];

function buildEntries(): NwtEntry[] {
  const baseTs = new Date("2026-06-21T12:00:00Z").getTime();
  return ROWS.map(
    (
      [label, bankCash, stocks, mutualFunds, epfPpfNps, lic, wazirxRT, esopIlliquid, liabAmount],
      i,
    ): NwtEntry => {
      const equity = stocks + wazirxRT + esopIlliquid;
      const debt = epfPpfNps + lic;
      const cash = bankCash;
      const month = toIsoMonth(label);
      // For Jun-2026 the underlying source (Net Worth sheet § 8) is credit-card dues.
      // For older months the spreadsheet only carries an aggregate column — store as 'loans'.
      const liabs: Record<string, number> =
        liabAmount === 0
          ? {}
          : month === "2026-06"
            ? { creditCard: liabAmount }
            : { loans: liabAmount };
      return {
        id: crypto.randomUUID(),
        month,
        // Stagger createdAt by 1s per entry so insertion order is stable.
        createdAt: new Date(baseTs + i * 1000).toISOString(),
        assets: {
          bankCash,
          stocks,
          mutualFunds,
          epfPpfNps,
          lic,
          wazirxRT,
          esopIlliquid,
        },
        liabs,
        alloc: {
          equity,
          mutualFunds,
          debt,
          gold: 0,
          realestate: 0,
          cash,
        },
      };
    },
  );
}

async function main() {
  // Dynamic imports — defer module-init until after dotenv has populated process.env.
  const { sql } = await import("drizzle-orm");
  const { db } = await import("../app/lib/db/connection");
  const { SCHEMA_VERSION } = await import("../app/lib/networth/types");

  const force = process.argv.includes("--force");
  const entries = buildEntries();
  console.log(`Backfilling ${entries.length} entries for user ${USER_ID}${force ? " (force)" : ""}…`);

  const existing = await db.execute(sql`
    SELECT user_id, import_used_at, jsonb_array_length(entries) AS n
    FROM networth_data
    WHERE user_id = ${USER_ID}
  `);
  if (existing.rows.length > 0) {
    const row = existing.rows[0] as { import_used_at: string | null; n: number };
    if (Number(row.n) > 0 && !force) {
      console.error(
        `Refusing to backfill: networth_data already has ${row.n} entries for this user. ` +
          `Clear the row first, or re-run with --force to overwrite.`,
      );
      process.exit(1);
    }
  }

  const jsonbArray = JSON.stringify(entries);
  const result = await db.execute(sql`
    INSERT INTO networth_data (user_id, entries, schema_version, import_used_at, updated_at)
    VALUES (${USER_ID}, ${jsonbArray}::jsonb, ${SCHEMA_VERSION}, now(), now())
    ON CONFLICT (user_id) DO UPDATE
      SET entries = EXCLUDED.entries,
          schema_version = EXCLUDED.schema_version,
          import_used_at = now(),
          updated_at = now()
    RETURNING user_id, jsonb_array_length(entries) AS n
  `);

  const row = result.rows[0] as { user_id: string; n: number };
  console.log(`✓ Inserted ${row.n} entries for ${row.user_id}. import_used_at flag set.`);
  process.exit(0);
}

main().catch((err) => {
  console.error("Backfill failed:", err);
  process.exit(1);
});
