/**
 * Invoice issuance — single source of truth for write paths.
 *
 *   createDraftInvoice() — called by /api/orders/create.
 *     Inserts a status='draft' row with full snapshots + tax computed at the
 *     moment of order creation. No invoiceNumber assigned yet.
 *
 *   issueInvoice()       — called by /api/orders/verify AND the Razorpay webhook.
 *     Assigns the next sequential invoice number via the invoice_counters
 *     table (race-safe via Postgres PK row serialization), flips status to
 *     'issued', and stamps the payment id + issuedAt timestamp.
 *
 * Both functions are idempotent — replays return existing data, don't
 * double-write, don't bump the counter twice.
 */

import crypto from "crypto";
import { eq, sql } from "drizzle-orm";
import { db as drizzle } from "@/app/lib/db/connection";
import { invoices, users, subscriptions } from "@/app/lib/db/schema";
import { getPlan, type PlanId } from "@/app/lib/plans";
import { cloneSupplier, CURRENT_SUPPLIER } from "./supplier";
import { buildBuyerSnapshot } from "./snapshot";
import { computeInvoiceTax, type TaxBreakup } from "./tax";
import { indianFY, formatInvoiceNumber } from "./fy";
import { renderInvoiceHtml } from "./render/invoice-html";
import { htmlToPdfBuffer } from "./render/invoice-pdf";
import { uploadInvoicePdf } from "./storage";
import type { InvoiceLineItem } from "@/app/lib/db/types";

/* ──────────────────────────────────────────────────────────────────────── */
/* Draft creation                                                          */
/* ──────────────────────────────────────────────────────────────────────── */

export type CreateDraftInvoiceInput = {
  userId: string;
  subscriptionId: string;
  razorpayOrderId: string;
  planId: PlanId;
  taxablePaise: number;            // ex-tax (= base price * 100)
};

export type CreateDraftInvoiceResult = {
  invoiceId: string;
  tax: TaxBreakup;
};

export async function createDraftInvoice(
  input: CreateDraftInvoiceInput
): Promise<CreateDraftInvoiceResult> {
  // Idempotent: if a draft already exists for this order, return it.
  const existing = await drizzle
    .select()
    .from(invoices)
    .where(eq(invoices.razorpayOrderId, input.razorpayOrderId))
    .limit(1);

  if (existing[0]) {
    return {
      invoiceId: existing[0].id,
      tax: {
        taxableTotalPaise: existing[0].taxableTotalPaise,
        cgstPaise: existing[0].cgstPaise,
        sgstPaise: existing[0].sgstPaise,
        igstPaise: existing[0].igstPaise,
        totalPaise: existing[0].totalPaise,
        placeOfSupply: existing[0].placeOfSupply,
      },
    };
  }

  const userRows = await drizzle.select().from(users).where(eq(users.id, input.userId)).limit(1);
  const user = userRows[0];
  if (!user) throw new Error(`createDraftInvoice: user not found: ${input.userId}`);

  const plan = getPlan(input.planId);

  const buyer    = buildBuyerSnapshot(user, user.billingInfo ?? null);
  const supplier = cloneSupplier();
  const tax      = computeInvoiceTax(input.taxablePaise, buyer.stateCode, CURRENT_SUPPLIER);

  const lineItems: InvoiceLineItem[] = [
    {
      description: `${plan.name} — Bodha Personal Finance Program`,
      hsnSac: "999293",
      qty: 1,
      unit: "Nos",
      unitPriceRs: input.taxablePaise / 100,
      taxableRs:   input.taxablePaise / 100,
    },
  ];

  const invoiceId = `inv_${crypto.randomUUID()}`;

  // Insert invoice + link back from subscription in one transaction so the
  // FK is symmetric: invoices.subscription_id ↔ subscriptions.invoice_id.
  await drizzle.transaction(async (tx) => {
    await tx.insert(invoices).values({
      id: invoiceId,
      invoiceNumber: null,
      userId: input.userId,
      subscriptionId: input.subscriptionId,
      invoiceDate: new Date(),
      status: "draft",
      buyerSnapshot: buyer,
      supplierSnapshot: supplier,
      lineItems,
      placeOfSupply: tax.placeOfSupply,
      taxableTotalPaise: tax.taxableTotalPaise,
      cgstPaise: tax.cgstPaise,
      sgstPaise: tax.sgstPaise,
      igstPaise: tax.igstPaise,
      totalPaise: tax.totalPaise,
      razorpayOrderId: input.razorpayOrderId,
    });

    await tx
      .update(subscriptions)
      .set({ invoiceId })
      .where(eq(subscriptions.id, input.subscriptionId));
  });

  return { invoiceId, tax };
}

/* ──────────────────────────────────────────────────────────────────────── */
/* Issuance — assigns number, flips status to 'issued'                     */
/* ──────────────────────────────────────────────────────────────────────── */

export type IssueInvoiceResult = {
  invoiceId: string;
  invoiceNumber: string;
  alreadyIssued: boolean;
};

export async function issueInvoice(
  razorpayOrderId: string,
  razorpayPaymentId: string
): Promise<IssueInvoiceResult | null> {
  const rows = await drizzle
    .select()
    .from(invoices)
    .where(eq(invoices.razorpayOrderId, razorpayOrderId))
    .limit(1);

  const invoice = rows[0];
  if (!invoice) {
    // No draft was created — either an old subscription created before Phase 2
    // shipped, or some out-of-band order. Caller decides whether to error.
    return null;
  }

  // Idempotent replay: already issued → return existing number, no counter bump.
  if (invoice.invoiceNumber && invoice.status !== "draft") {
    return {
      invoiceId: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      alreadyIssued: true,
    };
  }

  const issuedAt = new Date();
  const fy       = indianFY(issuedAt);

  // Counter bump + invoice update inside one transaction → if anything throws,
  // counter rolls back, no gap.
  // Concurrency: /orders/verify and the Razorpay webhook can both call this
  // for the same order. SELECT ... FOR UPDATE serializes them on the invoice
  // row — the loser sees status='issued' and returns alreadyIssued=true
  // without bumping the counter or sending another email.
  const txResult = await drizzle.transaction(async (tx) => {
    const lockedRows = await tx.execute<{
      invoice_number: string | null;
      status: string;
    }>(sql`
      SELECT invoice_number, status FROM invoices
      WHERE id = ${invoice.id}
      FOR UPDATE
    `);
    const locked = lockedRows.rows[0];
    if (!locked) throw new Error(`issueInvoice: invoice vanished mid-txn: ${invoice.id}`);

    // Winner already flipped draft→issued in a concurrent txn — bail.
    if (locked.invoice_number && locked.status !== "draft") {
      return { invoiceNumber: locked.invoice_number, alreadyIssued: true as const };
    }

    const counterResult = await tx.execute(sql`
      INSERT INTO invoice_counters (fy, last_seq)
      VALUES (${fy}, 1)
      ON CONFLICT (fy) DO UPDATE SET last_seq = invoice_counters.last_seq + 1
      RETURNING last_seq
    `);

    const seq = (counterResult.rows[0] as { last_seq: number }).last_seq;
    const num = formatInvoiceNumber(fy, seq);

    await tx
      .update(invoices)
      .set({
        invoiceNumber: num,
        status: "issued",
        issuedAt,
        razorpayPaymentId,
      })
      .where(eq(invoices.id, invoice.id));

    return { invoiceNumber: num, alreadyIssued: false as const };
  });

  // Race loser — skip PDF gen, skip return (return same shape as earlier-bail
  // path above so caller's !alreadyIssued guard works).
  if (txResult.alreadyIssued) {
    return {
      invoiceId: invoice.id,
      invoiceNumber: txResult.invoiceNumber,
      alreadyIssued: true,
    };
  }

  const invoiceNumber = txResult.invoiceNumber;

  // Best-effort PDF generation + R2 upload. Failure does NOT block issuance —
  // pdf_object_key stays NULL, /billing falls back to "Download unavailable".
  try {
    const html = renderInvoiceHtml({
      invoiceNumber,
      invoiceDate: invoice.invoiceDate,
      buyerSnapshot: invoice.buyerSnapshot,
      supplierSnapshot: invoice.supplierSnapshot,
      lineItems: invoice.lineItems,
      placeOfSupply: invoice.placeOfSupply,
      taxableTotalPaise: invoice.taxableTotalPaise,
      cgstPaise: invoice.cgstPaise,
      sgstPaise: invoice.sgstPaise,
      igstPaise: invoice.igstPaise,
      totalPaise: invoice.totalPaise,
      razorpayOrderId: invoice.razorpayOrderId,
      razorpayPaymentId,
    });
    const pdfBuf = await htmlToPdfBuffer(html);
    const key    = await uploadInvoicePdf(invoice.id, pdfBuf);
    await drizzle.update(invoices).set({ pdfObjectKey: key }).where(eq(invoices.id, invoice.id));
  } catch (err) {
    console.error(`[issueInvoice] PDF gen/upload failed for ${invoice.id}:`, err);
  }

  return {
    invoiceId: invoice.id,
    invoiceNumber,
    alreadyIssued: false,
  };
}
