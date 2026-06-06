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
  const subscribed = sub?.status === "active";

  const response = NextResponse.json({
    loggedIn: true,
    id: userId,
    subscribed,
    isTestUser: user ? isTestEmail(user.email) : false,
    canRefer: user?.canRefer ?? false,
    referralCode: user?.referralCode ?? null,
    needsConsent,
    consent: consent
      ? { analytics: consent.analytics, marketing: consent.marketing }
      : null,
  });

  // Cookie recovery — user has active sub but missing `subscribed` cookie
  // (e.g. webhook activated the sub after a lost mobile UPI handler). Without
  // this, middleware bounces them from /modules → /plans on next visit.
  if (subscribed && !req.cookies.get("subscribed")) {
    response.cookies.set({
      name: "subscribed",
      value: "1",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365 * 10,
    });
  }

  return response;
}
