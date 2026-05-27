import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "crypto";
import { db } from "@/app/lib/db";
import { getPlan, type PlanId } from "@/app/lib/plans";
import { sendInvoiceEmail } from "@/app/lib/email/send";
import { issueInvoice } from "@/app/lib/billing/issue";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: "Missing payment fields" }, { status: 400 });
  }

  // Verify HMAC-SHA256 signature
  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(body)
    .digest("hex");

  if (expected !== razorpay_signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Confirm the order belongs to this user
  const sub = await db.getSubscriptionByOrderId(razorpay_order_id);
  if (!sub || sub.userId !== userId) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  // Idempotent: if already active, return success without re-processing
  if (sub.status === "active") {
    const response = NextResponse.json({ success: true, orderId: razorpay_order_id, alreadyActive: true });
    response.cookies.set({
      name: "subscribed",
      value: "1",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365 * 10,
    });
    return response;
  }

  // Issue invoice (assigns BV/FY/NNNN number, flips status to 'issued').
  const issued = await issueInvoice(razorpay_order_id, razorpay_payment_id);
  const invoiceNumber = issued?.invoiceNumber ?? null;
  if (!issued) {
    console.warn("[orders/verify] no draft invoice for order:", razorpay_order_id);
  }

  // Flip subscription status to 'active'.
  await db.activateSubscription(razorpay_order_id, razorpay_payment_id);

  // Fire invoice email — non-blocking, failure doesn't affect payment response.
  // Skip if invoice issuance somehow returned no number (legacy edge case).
  if (invoiceNumber) {
    db.getUserById(userId).then((user) => {
      if (!user) return;
      const plan = getPlan(sub.planId as PlanId);
      return sendInvoiceEmail(user.email, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        planName: plan.name,
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        totalRs: sub.amountPaise / 100,
        activatedAt: new Date().toISOString(),
        invoiceNumber,
      });
    }).catch((e) => console.error("[invoice] send failed:", e));
  } else {
    console.warn("[orders/verify] skipped invoice email — no invoiceNumber for order:", razorpay_order_id);
  }

  const response = NextResponse.json({ success: true, orderId: razorpay_order_id });

  // Set subscribed cookie — middleware reads this to grant /modules access
  response.cookies.set({
    name: "subscribed",
    value: "1",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365 * 10, // 10 years (lifetime access)
  });

  return response;
}
