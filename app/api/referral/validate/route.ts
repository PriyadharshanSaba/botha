import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { normaliseCode } from "@/app/lib/referral/server";

/**
 * Validate a referral code without committing it.
 *
 * Plan-agnostic — returns the offer parameters so the client can show
 * per-plan discounted prices. orders/create re-validates and applies
 * the actual discount, so this endpoint is a UX hint only.
 */
export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ valid: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as { code?: string } | null;
  if (!body?.code) {
    return NextResponse.json({ valid: false, error: "Missing code" }, { status: 400 });
  }

  const code = normaliseCode(body.code);
  if (!code) {
    return NextResponse.json({ valid: false, error: "Invalid code" }, { status: 200 });
  }

  const offer = await db.getReferralOffer(code);
  if (!offer) {
    return NextResponse.json({ valid: false, error: "Invalid code" }, { status: 200 });
  }
  if (!offer.active) {
    return NextResponse.json({ valid: false, error: "Code is inactive" }, { status: 200 });
  }
  if (offer.expiresAt && offer.expiresAt.getTime() < Date.now()) {
    return NextResponse.json({ valid: false, error: "Code expired" }, { status: 200 });
  }
  if (offer.ownerUserId === userId) {
    return NextResponse.json({ valid: false, error: "Cannot use your own code" }, { status: 200 });
  }

  return NextResponse.json({
    valid: true,
    code: offer.code,
    description: offer.description,
    discountPercent: offer.discountPercent,
    discountFlatPaise: offer.discountFlatPaise,
  });
}
