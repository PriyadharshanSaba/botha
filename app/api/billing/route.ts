import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq, desc, and, ne } from "drizzle-orm";
import { db as drizzle } from "@/app/lib/db/connection";
import { invoices, subscriptions } from "@/app/lib/db/schema";
import { getPlan, type PlanId } from "@/app/lib/plans";
import { getAuthenticatedUser } from "@/app/lib/auth";

/**
 * Phase 3 of billing redesign: reads from the `invoices` table.
 * Response shape unchanged from the legacy (subscriptions-based) version so
 * the /billing page render does not need to change in this phase.
 *
 * Plan name is looked up via the invoice's linked subscription so this works
 * for both Phase 2+ newly-issued invoices and backfilled legacy invoices.
 */
export async function GET(req: NextRequest) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = user.id;

  const orderId = req.nextUrl.searchParams.get("ref");

  // Look up invoice. Drafts are not visible — only issued/paid/void.
  const invRows = orderId
    ? await drizzle
        .select()
        .from(invoices)
        .where(and(eq(invoices.razorpayOrderId, orderId), ne(invoices.status, "draft")))
        .limit(1)
    : await drizzle
        .select()
        .from(invoices)
        .where(and(eq(invoices.userId, userId), ne(invoices.status, "draft")))
        .orderBy(desc(invoices.invoiceDate))
        .limit(1);

  const invoice = invRows[0];

  if (!invoice || invoice.userId !== userId) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Plan name comes from the linked subscription's planId.
  // Backfilled rows and newly-issued rows both carry subscriptionId.
  let planId: PlanId = "regular";
  if (invoice.subscriptionId) {
    const subRows = await drizzle
      .select({ planId: subscriptions.planId })
      .from(subscriptions)
      .where(eq(subscriptions.id, invoice.subscriptionId))
      .limit(1);
    if (subRows[0]) planId = subRows[0].planId as PlanId;
  }
  const plan = getPlan(planId);

  return NextResponse.json({
    user: { firstName: user.firstName, lastName: user.lastName, email: user.email },
    orderId: invoice.razorpayOrderId,
    paymentId: invoice.razorpayPaymentId,
    planId,
    planName: plan.name,
    status: invoice.status,
    activatedAt: invoice.issuedAt ?? invoice.invoiceDate,
    invoiceNumber: invoice.invoiceNumber,
    invoiceId: invoice.id,
    pdfAvailable: invoice.pdfObjectKey !== null,
    placeOfSupply: invoice.placeOfSupply,
    buyer: invoice.buyerSnapshot,           // for full address render on /billing
    totalPaise: invoice.totalPaise,         // exact paise for amount-in-words
    breakdown: {
      taxableRs: invoice.taxableTotalPaise / 100,
      cgstRs:    invoice.cgstPaise / 100,
      sgstRs:    invoice.sgstPaise / 100,
      igstRs:    invoice.igstPaise / 100,
      totalRs:   invoice.totalPaise / 100,
    },
  });
}
