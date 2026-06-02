import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { CURRENT_POLICY_VERSION } from "@/app/lib/consentVersion";
import { isTestEmail } from "@/app/lib/utils/otp";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ loggedIn: false });
  }

  const [user, consent, sub] = await Promise.all([
    db.getUserById(userId),
    db.getConsent(userId, CURRENT_POLICY_VERSION),
    db.getUserSubscription(userId),
  ]);

  const needsConsent = !consent || !!consent.withdrawnAt;

  return NextResponse.json({
    loggedIn: true,
    id: userId,
    subscribed: sub?.status === "active",
    isTestUser: user ? isTestEmail(user.email) : false,
    canRefer: user?.canRefer ?? false,
    referralCode: user?.referralCode ?? null,
    needsConsent,
    consent: consent
      ? { analytics: consent.analytics, marketing: consent.marketing }
      : null,
  });
}
