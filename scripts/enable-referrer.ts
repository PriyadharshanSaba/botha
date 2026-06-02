/**
 * Enable a user to give a referral code.
 *
 * Marks users.can_refer=true, sets users.referral_code, deactivates any
 * prior offer this user owned, and inserts the new offer row.
 *
 * Usage:
 *   npm run enable-referrer -- --user=<userId> --code=<CODE> --percent=10
 *   npm run enable-referrer -- --user=<userId> --code=<CODE> --flat=50000   (paise)
 *   [--description="Friends & family"] [--expires=2026-12-31]
 *
 * Re-running for the same user rotates them to a new code:
 *   • old offer set active=false (history preserved for redemptions)
 *   • new offer inserted active=true
 *   • users.referral_code updated to the new code
 */
import { config } from "dotenv";
// Load env BEFORE importing modules that read process.env at module-init.
config({ path: ".env.local" });

type Args = {
  user: string;
  code: string;
  percent?: number;
  flat?: number;
  description?: string;
  expires?: string;
};

function parseArgs(): Args {
  const out: Record<string, string> = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([^=]+)=(.*)$/);
    if (m) out[m[1]] = m[2];
  }
  if (!out.user || !out.code) {
    throw new Error("Missing required --user=<id> --code=<CODE>");
  }
  if (!out.percent && !out.flat) {
    throw new Error("Provide either --percent=<int> or --flat=<paise>");
  }
  if (out.percent && out.flat) {
    throw new Error("Provide only one of --percent or --flat");
  }
  return {
    user: out.user,
    code: out.code.trim().toUpperCase(),
    percent: out.percent ? Number(out.percent) : undefined,
    flat: out.flat ? Number(out.flat) : undefined,
    description: out.description,
    expires: out.expires,
  };
}

async function main() {
  const args = parseArgs();

  if (args.percent != null && (args.percent <= 0 || args.percent > 100)) {
    throw new Error("--percent must be 1..100");
  }
  if (args.flat != null && args.flat <= 0) {
    throw new Error("--flat must be > 0 paise");
  }
  if (args.code.length === 0 || args.code.length > 32) {
    throw new Error("Code must be 1..32 chars");
  }

  // Dynamic imports — ensure dotenv runs first.
  const { eq } = await import("drizzle-orm");
  const { db } = await import("../app/lib/db/connection");
  const { users, referralOffers } = await import("../app/lib/db/schema");

  // Verify user exists.
  const u = await db.select().from(users).where(eq(users.id, args.user)).limit(1);
  if (u.length === 0) {
    throw new Error(`User not found: ${args.user}`);
  }

  // Deactivate any prior active offer owned by this user.
  // History rows stay so existing redemption FKs remain valid.
  await db
    .update(referralOffers)
    .set({ active: false })
    .where(eq(referralOffers.ownerUserId, args.user));

  // Insert the new offer.
  await db.insert(referralOffers).values({
    code: args.code,
    ownerUserId: args.user,
    discountPercent: args.percent ?? null,
    discountFlatPaise: args.flat ?? null,
    description: args.description ?? null,
    active: true,
    expiresAt: args.expires ? new Date(args.expires) : null,
  });

  // Flip user flags.
  await db
    .update(users)
    .set({ canRefer: true, referralCode: args.code })
    .where(eq(users.id, args.user));

  console.log(`✓ ${u[0].email} can now give code: ${args.code}`);
  if (args.percent) console.log(`  discount: ${args.percent}%`);
  if (args.flat) console.log(`  discount: ₹${(args.flat / 100).toLocaleString("en-IN")}`);
  if (args.description) console.log(`  description: ${args.description}`);
  if (args.expires) console.log(`  expires: ${args.expires}`);

  process.exit(0);
}

main().catch((e) => {
  console.error("✗", e instanceof Error ? e.message : e);
  process.exit(1);
});
