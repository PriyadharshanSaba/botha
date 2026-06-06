import { db } from "@/app/lib/db";
import type { Subscription } from "@/app/lib/db/types";
import type { ApplyResult } from "./types";

const MIN_FINAL_PAISE = 100; // ₹1 floor for Razorpay

export function normaliseCode(raw: string): string {
  return raw.trim().toUpperCase().slice(0, 32);
}

export async function applyReferral(opts: {
  code: string;
  refereeUserId: string;
  basePaise: number;
}): Promise<ApplyResult> {
  const code = normaliseCode(opts.code);
  if (!code) return { ok: false, error: "not_found" };

  const offer = await db.getReferralOffer(code);
  if (!offer) return { ok: false, error: "not_found" };
  if (!offer.active) return { ok: false, error: "inactive" };
  if (offer.expiresAt && offer.expiresAt.getTime() < Date.now()) {
    return { ok: false, error: "expired" };
  }
  if (offer.ownerUserId === opts.refereeUserId) {
    return { ok: false, error: "self_referral" };
  }

  let discountPaise = 0;
  if (offer.discountPercent != null) {
    discountPaise = Math.round((opts.basePaise * offer.discountPercent) / 100);
  } else if (offer.discountFlatPaise != null) {
    discountPaise = offer.discountFlatPaise;
  } else {
    return { ok: false, error: "invalid_state" };
  }

  let finalPaise = opts.basePaise - discountPaise;
  if (finalPaise < MIN_FINAL_PAISE) {
    finalPaise = MIN_FINAL_PAISE;
    discountPaise = opts.basePaise - MIN_FINAL_PAISE;
  }

  return {
    ok: true,
    code,
    description: offer.description,
    discountPaise,
    finalPaise,
  };
}

/**
 * Record a redemption for a paid subscription. Idempotent —
 * relies on UNIQUE(razorpay_order_id) + onConflictDoNothing inside recordRedemption.
 * Safe to call from both /api/orders/verify and the Razorpay webhook.
 */
export async function recordRedemptionForSubscription(sub: Subscription): Promise<void> {
  if (!sub.referralCode || !sub.razorpayOrderId) return;
  const offer = await db.getReferralOffer(sub.referralCode);
  if (!offer) return;
  const original = sub.originalAmountPaise ?? sub.amountPaise;
  const applied = Math.max(0, original - sub.amountPaise);
  await db.recordRedemption({
    code: sub.referralCode,
    referrerUserId: offer.ownerUserId,
    refereeUserId: sub.userId,
    razorpayOrderId: sub.razorpayOrderId,
    appliedDiscountPaise: applied,
  });
}
