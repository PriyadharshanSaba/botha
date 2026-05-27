/**
 * One-shot backfill: creates an `invoices` row for every legacy active
 * subscription that doesn't already have one, then links them.
 *
 * Idempotent — safe to re-run. Skips subs that already have `invoice_id`.
 *
 * Post-Phase 5: subscriptions.invoice_number column is dropped, so legacy
 * invoice numbers can no longer be preserved here. New invoice rows are
 * inserted with invoiceNumber=NULL (status='paid' but unnumbered). If you need
 * to backfill *and* preserve legacy numbers, run before applying migration 003.
 *
 * Trigger via POST /api/admin/backfill-invoices.
 */

import crypto from "crypto";
import { eq, asc, and } from "drizzle-orm";
import { db as drizzle } from "@/app/lib/db/connection";
import { subscriptions, invoices, users } from "@/app/lib/db/schema";
import { getPlan, type PlanId } from "@/app/lib/plans";
import { cloneSupplier, CURRENT_SUPPLIER } from "./supplier";
import { buildBuyerSnapshot } from "./snapshot";
import type { InvoiceLineItem, InvoiceNotes } from "@/app/lib/db/types";

export type BackfillStats = {
  totalActive: number;
  alreadyLinked: number;
  inserted: number;
  skipped: { subId: string; reason: string }[];
  dryRun: boolean;
  sample: { subId: string; invoiceId: string; invoiceNumber: string | null }[];
};

export async function backfillInvoices(opts: { dryRun: boolean }): Promise<BackfillStats> {
  const stats: BackfillStats = {
    totalActive: 0,
    alreadyLinked: 0,
    inserted: 0,
    skipped: [],
    dryRun: opts.dryRun,
    sample: [],
  };

  // Fetch all active subs with their user details in one query.
  const rows = await drizzle
    .select({
      sub: subscriptions,
      user: users,
    })
    .from(subscriptions)
    .innerJoin(users, eq(users.id, subscriptions.userId))
    .where(eq(subscriptions.status, "active"))
    .orderBy(asc(subscriptions.activatedAt));

  stats.totalActive = rows.length;

  for (const { sub, user } of rows) {
    if (sub.invoiceId) {
      stats.alreadyLinked++;
      continue;
    }

    if (!sub.activatedAt) {
      stats.skipped.push({ subId: sub.id, reason: "active sub with NULL activatedAt" });
      continue;
    }

    const billing = user.billingInfo ?? null;
    const plan    = getPlan(sub.planId as PlanId);

    const buyer    = buildBuyerSnapshot(user, billing);
    const supplier = cloneSupplier();

    const lineItems: InvoiceLineItem[] = [
      {
        description: `${plan.name} — Bodha Personal Finance Program`,
        hsnSac: "999293",                                  // commercial training & coaching
        qty: 1,
        unit: "Nos",
        unitPriceRs: sub.amountPaise / 100,
        taxableRs:   sub.amountPaise / 100,
      },
    ];

    const notes: InvoiceNotes = { legacyBackfill: true };
    if (!billing) notes.missingBillingInfo = true;

    const invoiceId = `inv_${crypto.randomUUID()}`;

    if (!opts.dryRun) {
      await drizzle.transaction(async (tx) => {
        await tx.insert(invoices).values({
          id: invoiceId,
          invoiceNumber: null,                             // legacy column dropped in Phase 5
          userId: sub.userId,
          subscriptionId: sub.id,
          invoiceDate: sub.activatedAt!,
          status: "paid",
          buyerSnapshot: buyer,
          supplierSnapshot: supplier,
          lineItems,
          placeOfSupply: buyer.stateCode ?? supplier.stateCode,
          taxableTotalPaise: sub.amountPaise,
          cgstPaise: 0,
          sgstPaise: 0,
          igstPaise: 0,
          totalPaise: sub.amountPaise,
          razorpayOrderId: sub.razorpayOrderId,
          razorpayPaymentId: sub.razorpayPaymentId,
          notes,
          issuedAt: sub.activatedAt!,
        });

        await tx
          .update(subscriptions)
          .set({ invoiceId })
          .where(and(eq(subscriptions.id, sub.id), eq(subscriptions.status, "active")));
      });
    }

    stats.inserted++;
    if (stats.sample.length < 5) {
      stats.sample.push({
        subId: sub.id,
        invoiceId,
        invoiceNumber: null,
      });
    }
  }

  return stats;
}

/** Used in admin route response for sanity-check before non-dry-run apply. */
export function describeBackfillEnv() {
  return {
    supplier: {
      legalName: CURRENT_SUPPLIER.legalName,
      gstin: CURRENT_SUPPLIER.gstin ?? null,
      stateCode: CURRENT_SUPPLIER.stateCode,
    },
  };
}
