import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "crypto";
import { db } from "@/app/lib/db";
import { getPlan, type PlanId } from "@/app/lib/plans";
import { sendInvoiceEmail } from "@/app/lib/email/send";

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

  // Activate subscription — returns sequential invoice number
  const invoiceNumber = await db.activateSubscription(razorpay_order_id, razorpay_payment_id);

  // Fire invoice email — non-blocking, failure doesn't affect payment response
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
      baseRs: (sub.amountPaise - sub.gstPaise) / 100,
      gstRs: sub.gstPaise / 100,
      gstRate: 18,
      totalRs: sub.amountPaise / 100,
      activatedAt: new Date().toISOString(),
      invoiceNumber,
    });
  }).catch((e) => console.error("[invoice] send failed:", e));

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
