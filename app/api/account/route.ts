import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [user, identity, sub] = await Promise.all([
    db.getUserById(userId),
    db.getReferralIdentity(userId),
    db.getUserSubscription(userId),
  ]);

  if (!user) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const stats = identity.canRefer
    ? await db.getReferralStats(userId)
    : { count: 0, totalDiscountPaise: 0 };

  return NextResponse.json({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    subscribed: sub?.status === "active",
    planId: sub?.status === "active" ? sub.planId : null,
    referral: {
      canRefer: identity.canRefer,
      code: identity.referralCode,
      offer: identity.offer
        ? {
            description: identity.offer.description,
            discountPercent: identity.offer.discountPercent,
            discountFlatPaise: identity.offer.discountFlatPaise,
            active: identity.offer.active,
            expiresAt: identity.offer.expiresAt?.toISOString() ?? null,
          }
        : null,
      stats,
    },
  });
}
