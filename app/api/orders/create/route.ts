import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Razorpay from "razorpay";
import { db } from "@/app/lib/db";
import { PLANS, totalPaise, gstPaise } from "@/app/lib/plans";
import { isTestEmail } from "@/app/lib/utils/otp";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.getUserById(userId);

  // Server-side guard: test users must use the bypass route
  if (user && isTestEmail(user.email)) {
    return NextResponse.json({ error: "test_user" }, { status: 403 });
  }

  // Block double-purchase
  const existing = await db.getUserSubscription(userId);
  if (existing) {
    return NextResponse.json({ error: "Already subscribed" }, { status: 409 });
  }

  const { planId } = await req.json();
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

  const amount = totalPaise(plan.basePriceRs);
  const gst    = gstPaise(plan.basePriceRs);

  // Lazy init — only runs when env vars are confirmed present at request time
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error("[orders/create] Razorpay env vars not set");
    return NextResponse.json({ error: "Payment gateway not configured" }, { status: 503 });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  let order: Awaited<ReturnType<typeof razorpay.orders.create>>;
  try {
    order = await razorpay.orders.create({
      amount,
      currency: "INR",
      notes: { planId, userId },
    });
  } catch (err) {
    console.error("[orders/create] Razorpay error:", err);
    return NextResponse.json({ error: "Payment gateway error" }, { status: 502 });
  }

  await db.createSubscription({
    userId,
    planId,
    razorpayOrderId: order.id,
    amountPaise: amount,
    gstPaise: gst,
  });

  return NextResponse.json({
    orderId: order.id,
    amount,
    currency: "INR",
    keyId: process.env.RAZORPAY_KEY_ID,
    planName: plan.name,
  });
}
