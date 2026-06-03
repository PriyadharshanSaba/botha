/**
 * Enable a user to give a referral code (CLI wrapper).
 *
 * Usage:
 *   npm run enable-referrer -- --user=<userId> --code=<CODE> --percent=10
 *   npm run enable-referrer -- --user=<userId> --code=<CODE> --flat=50000   (paise)
 *   [--description="Friends & family"] [--expires=2026-12-31]
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
  if (!out.user || !out.code) throw new Error("Missing required --user=<id> --code=<CODE>");
  if (!out.percent && !out.flat) throw new Error("Provide either --percent=<int> or --flat=<paise>");
  if (out.percent && out.flat) throw new Error("Provide only one of --percent or --flat");
  return {
    user: out.user,
    code: out.code,
    percent: out.percent ? Number(out.percent) : undefined,
    flat: out.flat ? Number(out.flat) : undefined,
    description: out.description,
    expires: out.expires,
  };
}

async function main() {
  const args = parseArgs();
  const { enableReferralOffer } = await import("../app/lib/admin/referrals");
  const result = await enableReferralOffer({
    identifier: { kind: "id", value: args.user },
    code: args.code,
    discount: args.percent
      ? { type: "percent", value: args.percent }
      : { type: "flat", valuePaise: args.flat! },
    description: args.description,
    expiresAt: args.expires ? new Date(args.expires) : null,
  });
  console.log(`✓ ${result.email} can now give code: ${result.offerId}`);
  process.exit(0);
}

main().catch((e) => {
  console.error("✗", e instanceof Error ? e.message : e);
  process.exit(1);
});


/**

  BEGIN;

  -- 1. Deactivate any prior offer owned by this user (preserves history).
  UPDATE referral_offers
  SET active = false
  WHERE owner_user_id = '<userId>';

  -- 2. Insert new offer — pick ONE of percent OR flat (paise), leave the other NULL.
  INSERT INTO referral_offers
    (code, owner_user_id, discount_percent, discount_flat_paise, description, active, expires_at)
  VALUES
    ('BODHA10', '<userId>', 10, NULL, 'Friends & family', true, NULL);
    --                      ^^ percent (1..100)
    -- For flat: (..., NULL, 50000, ...)   -- 50000 paise = ₹500

  -- 3. Flip user flags.
  UPDATE users
  SET can_refer = true, referral_code = 'BODHA10'
  WHERE id = '<userId>';

  COMMIT;

  Verify after:
  SELECT u.email, u.can_refer, u.referral_code, o.discount_percent, o.discount_flat_paise, o.active
  FROM users u
  LEFT JOIN referral_offers o ON o.owner_user_id = u.id AND o.active = true
  WHERE u.id = '<userId>';

  Find userId by email:
  SELECT id, email FROM users WHERE email = 'someone@example.com';

 */
