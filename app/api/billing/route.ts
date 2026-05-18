import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { getPlan, type PlanId } from "@/app/lib/plans";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const orderId = req.nextUrl.searchParams.get("ref");

  const sub = orderId
    ? await db.getSubscriptionByOrderId(orderId)
    : await db.getUserSubscription(userId);

  if (!sub || sub.userId !== userId) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const user = await db.getUserById(userId);
  const plan = getPlan(sub.planId as PlanId);

  const baseRs  = (sub.amountPaise - sub.gstPaise) / 100;
  const gstRs   = sub.gstPaise / 100;
  const totalRs = sub.amountPaise / 100;

  return NextResponse.json({
    user: user ? { firstName: user.firstName, lastName: user.lastName, email: user.email } : null,
    orderId: sub.razorpayOrderId,
    paymentId: sub.razorpayPaymentId,
    planId: sub.planId,
    planName: plan.name,
    status: sub.status,
    activatedAt: sub.activatedAt,
    invoiceNumber: sub.invoiceNumber,
    breakdown: { baseRs, gstRs, gstRate: 18, totalRs },
  });
}
