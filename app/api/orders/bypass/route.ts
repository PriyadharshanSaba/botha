import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { isTestEmail } from "@/app/lib/utils/otp";
import { PLANS, type PlanId } from "@/app/lib/plans";
import { sendInvoiceEmail } from "@/app/lib/email/send";
import { createDraftInvoice, issueInvoice } from "@/app/lib/billing/issue";

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
    const sub = await db.createSubscription({
      userId,
      planId: plan.id,
      razorpayOrderId: orderId,
      amountPaise: 0,
    });
    await createDraftInvoice({
      userId,
      subscriptionId: sub.id,
      razorpayOrderId: orderId,
      planId: plan.id as PlanId,
      taxablePaise: 0,
    });
    const issued = await issueInvoice(orderId, "bypass");
    await db.activateSubscription(orderId, "bypass");

    // Fire invoice email for new bypass activations — non-blocking
    if (issued?.invoiceNumber) {
      sendInvoiceEmail(user.email, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        planName: plan.name,
        orderId,
        paymentId: "bypass",
        totalRs: 0,
        activatedAt: new Date().toISOString(),
        invoiceNumber: issued.invoiceNumber,
      }).catch((e) => console.error("[invoice] bypass send failed:", e));
    }
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
