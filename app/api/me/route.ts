import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { CURRENT_POLICY_VERSION } from "@/app/lib/consentVersion";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ loggedIn: false });
  }

  const consent = await db.getConsent(userId, CURRENT_POLICY_VERSION);
  const needsConsent = !consent || !!consent.withdrawnAt;

  return NextResponse.json({
    loggedIn: true,
    needsConsent,
    consent: consent
      ? { analytics: consent.analytics, marketing: consent.marketing }
      : null,
  });
}
