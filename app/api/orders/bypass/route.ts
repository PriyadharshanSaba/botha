import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { isTestEmail } from "@/app/lib/utils/otp";
import { PLANS, type PlanId } from "@/app/lib/plans";
import { sendInvoiceEmail } from "@/app/lib/email/send";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.getUserById(userId);
  if (!user || !isTestEmail(user.email)) {
    return NextResponse.json({ error: "Not a test account" }, { status: 403 });
  }

  const { planId } = await req.json().catch(() => ({}));
  const plan = PLANS.find((p) => p.id === planId && !p.waitlist);
  if (!plan) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  let orderId: string;

  const existing = await db.getUserSubscription(userId);
  if (existing) {
    orderId = existing.razorpayOrderId!;
  } else {
    orderId = `bypass_${userId}_${Date.now()}`;
    await db.createSubscription({
      userId,
      planId: plan.id,
      razorpayOrderId: orderId,
      amountPaise: 0,
      gstPaise: 0,
    });
    const invoiceNumber = await db.activateSubscription(orderId, "bypass");

    // Fire invoice email for new bypass activations — non-blocking
    sendInvoiceEmail(user.email, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      planName: plan.name,
      orderId,
      paymentId: "bypass",
      baseRs: 0,
      gstRs: 0,
      gstRate: 18,
      totalRs: 0,
      activatedAt: new Date().toISOString(),
      invoiceNumber,
    }).catch((e) => console.error("[invoice] bypass send failed:", e));
  }

  const response = NextResponse.json({ success: true, orderId });
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
