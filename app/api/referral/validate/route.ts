import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { PLANS, effectivePrice } from "@/app/lib/plans";
import { isTestEmail } from "@/app/lib/utils/otp";
import { applyReferral, normaliseCode } from "@/app/lib/referral/server";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ valid: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as { code?: string; planId?: string } | null;
  if (!body?.code || !body?.planId) {
    return NextResponse.json({ valid: false, error: "Missing code or planId" }, { status: 400 });
  }

  const plan = PLANS.find((p) => p.id === body.planId);
  if (!plan) {
    return NextResponse.json({ valid: false, error: "Unknown plan" }, { status: 400 });
  }

  const user = await db.getUserById(userId);
  if (!user) {
    return NextResponse.json({ valid: false, error: "Unauthorized" }, { status: 401 });
  }

  // Test users get the test price; discount preview must match it.
  const basePaise = Math.round(effectivePrice(plan, isTestEmail(user.email))) * 100;
  const result = await applyReferral({
    code: normaliseCode(body.code),
    refereeUserId: userId,
    basePaise,
  });

  if (!result.ok) {
    const msgMap: Record<typeof result.error, string> = {
      not_found: "Invalid code",
      inactive: "Code is inactive",
      expired: "Code expired",
      self_referral: "Cannot use your own code",
      invalid_state: "Code misconfigured — contact support",
    };
    return NextResponse.json({ valid: false, error: msgMap[result.error] }, { status: 200 });
  }

  return NextResponse.json({
    valid: true,
    code: result.code,
    description: result.description,
    discountPaise: result.discountPaise,
    finalPaise: result.finalPaise,
  });
}
