import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Razorpay from "razorpay";
import type { Orders } from "razorpay/dist/types/orders";
import { db } from "@/app/lib/db";
import { PLANS, effectivePrice } from "@/app/lib/plans";
import { isTestEmail } from "@/app/lib/utils/otp";
import { CURRENT_SUPPLIER } from "@/app/lib/billing/supplier";
import { computeInvoiceTax } from "@/app/lib/billing/tax";
import { getStateCode } from "@/app/lib/billing/state-codes";
import { createDraftInvoice } from "@/app/lib/billing/issue";
import type { PlanId } from "@/app/lib/plans";
import { applyReferral, normaliseCode } from "@/app/lib/referral/server";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.getUserById(userId);
  const isTest = !!(user && isTestEmail(user.email));

  // Block double-purchase
  const existing = await db.getUserSubscription(userId);
  if (existing) {
    return NextResponse.json({ error: "Already subscribed" }, { status: 409 });
  }

  const { planId, referralCode: rawCode } = await req.json();
  const plan = PLANS.find((p) => p.id === planId);
  if (!plan || plan.waitlist) {
    return NextResponse.json({ error: "Plan not available" }, { status: 400 });
  }

  // Enforce seat limits
  if (plan.maxSeats !== null) {
    const taken = await db.getSubscriptionCount(plan.id);
    if (taken >= plan.maxSeats) {
      return NextResponse.json({ error: "No seats left for this plan" }, { status: 409 });
    }
  }

  const priceRs      = effectivePrice(plan, isTest);
  const taxablePaise = Math.round(priceRs) * 100;

  // Compute tax (pre-GST → tax = 0, total = taxable; post-GST → +18%)
  const buyerStateCode = getStateCode(user?.billingInfo?.state);
  const tax            = computeInvoiceTax(taxablePaise, buyerStateCode, CURRENT_SUPPLIER);
  const amount         = tax.totalPaise;

  // Discount on the pre-GST taxable base so GST is recomputed on the discounted amount.
  let finalTaxablePaise = taxablePaise;
  let appliedReferralCode: string | null = null;

  if (rawCode && !isTest) {
    const referral = await applyReferral({
      code: normaliseCode(rawCode),
      refereeUserId: userId,
      basePaise: taxablePaise,
    });
    if (referral.ok) {
      finalTaxablePaise = taxablePaise - referral.discountPaise;
      appliedReferralCode = referral.code;
    }
    // Invalid codes silently ignored — UI already validated.
  }

  const finalTax    = computeInvoiceTax(finalTaxablePaise, buyerStateCode, CURRENT_SUPPLIER);
  const finalAmount = finalTax.totalPaise;

  // Lazy init — only runs when env vars are confirmed present at request time
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error("[orders/create] Razorpay env vars not set");
    return NextResponse.json({ error: "Payment gateway not configured" }, { status: 503 });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  let order: Orders.RazorpayOrder;
  try {
    order = await razorpay.orders.create({
      amount: finalAmount,
      currency: "INR",
      notes: { planId, userId },
    });
  } catch (err) {
    console.error("[orders/create] Razorpay error:", err);
    return NextResponse.json({ error: "Payment gateway error" }, { status: 502 });
  }

  const sub = await db.createSubscription({
    userId,
    planId,
    razorpayOrderId: order.id,
    amountPaise: finalAmount,
    referralCode: appliedReferralCode,
    originalAmountPaise: amount,
  });

  // Source-of-truth invoice row (status='draft' until payment success).
  await createDraftInvoice({
    userId,
    subscriptionId: sub.id,
    razorpayOrderId: order.id,
    planId: planId as PlanId,
    taxablePaise: finalTaxablePaise,
  });

  return NextResponse.json({
    orderId: order.id,
    amount: finalAmount,
    currency: "INR",
    keyId: process.env.RAZORPAY_KEY_ID,
    planName: plan.name,
  });
}
