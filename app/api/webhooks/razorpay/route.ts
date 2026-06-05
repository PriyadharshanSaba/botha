import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { eq } from "drizzle-orm";
import { db } from "@/app/lib/db";
import { db as drizzle } from "@/app/lib/db/connection";
import { invoices } from "@/app/lib/db/schema";
import { issueInvoice } from "@/app/lib/billing/issue";
import { recordRedemptionForSubscription } from "@/app/lib/referral/server";
import { sendInvoiceEmail } from "@/app/lib/email/send";
import { getPlan, type PlanId } from "@/app/lib/plans";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature");

  // Webhook secret is different from key_secret
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret || !signature) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const expected = crypto
    .createHmac("sha256", webhookSecret)
    .update(body)
    .digest("hex");

  // Timing-safe comparison
  const expectedBuf = Buffer.from(expected, "hex");
  const signatureBuf = Buffer.from(signature, "hex");
  if (expectedBuf.length !== signatureBuf.length || !crypto.timingSafeEqual(expectedBuf, signatureBuf)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body);

  switch (event.event) {
    case "payment.captured": {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      if (orderId) {
        try {
          await db.activateSubscription(orderId, payment.id);
        } catch (e) {
          console.error("[webhook] activation failed:", e);
        }
        // Dual-write: issue invoice in new table too (Phase 2). Idempotent
        // with /orders/verify — whichever fires first wins, the second no-ops.
        let issued: Awaited<ReturnType<typeof issueInvoice>> = null;
        try {
          issued = await issueInvoice(orderId, payment.id);
        } catch (e) {
          console.error("[webhook] issueInvoice failed:", e);
        }
        // Record referral redemption (idempotent via UNIQUE razorpay_order_id).
        let sub: Awaited<ReturnType<typeof db.getSubscriptionByOrderId>> = null;
        try {
          sub = await db.getSubscriptionByOrderId(orderId);
          if (sub) await recordRedemptionForSubscription(sub);
        } catch (e) {
          console.error("[webhook] redemption insert failed:", e);
        }
        // Send invoice email — only fire if this invocation actually issued the
        // invoice (alreadyIssued=false). If /orders/verify already issued + sent,
        // skip to avoid duplicate email.
        if (issued && !issued.alreadyIssued && sub) {
          try {
            const user = await db.getUserById(sub.userId);
            if (user) {
              const invRows = await drizzle
                .select()
                .from(invoices)
                .where(eq(invoices.id, issued.invoiceId))
                .limit(1);
              const inv = invRows[0];
              if (inv && issued.invoiceNumber) {
                const plan = getPlan(sub.planId as PlanId);
                await sendInvoiceEmail(user.email, {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  planName: plan.name,
                  orderId,
                  paymentId: payment.id,
                  totalRs:    inv.totalPaise / 100,
                  taxableRs:  inv.taxableTotalPaise / 100,
                  cgstRs:     inv.cgstPaise / 100,
                  sgstRs:     inv.sgstPaise / 100,
                  igstRs:     inv.igstPaise / 100,
                  placeOfSupply: inv.placeOfSupply,
                  activatedAt: (inv.issuedAt ?? inv.invoiceDate).toISOString(),
                  invoiceNumber: issued.invoiceNumber,
                  pdfObjectKey: inv.pdfObjectKey,
                });
              }
            }
          } catch (e) {
            console.error("[webhook] invoice email failed:", e);
          }
        }
      }
      break;
    }
    // payment.failed — no action needed (subscription stays pending)
    // payment.refunded / dispute — revoke access (future enhancement)
  }

  // Always return 200 so Razorpay doesn't retry
  return NextResponse.json({ received: true });
}
