/**
 * Admin endpoint: re-render invoice PDF(s) and re-upload to R2.
 *
 * Use cases:
 *   - Template changes (palette tweak, layout fix) — re-render existing PDFs.
 *   - PDF gen previously failed (pdf_object_key NULL) — retry.
 *
 * Auth: x-admin-token header must match ADMIN_BACKFILL_TOKEN env var.
 *
 * Usage:
 *   # single invoice (by id)
 *   curl -X POST https://<app>/api/admin/regenerate-invoice-pdf \
 *        -H "x-admin-token: $ADMIN_BACKFILL_TOKEN" \
 *        -H "content-type: application/json" \
 *        -d '{"invoiceId":"inv_xxx","apply":true}'
 *
 *   # bulk (all issued/paid invoices)
 *   curl -X POST https://<app>/api/admin/regenerate-invoice-pdf \
 *        -H "x-admin-token: $ADMIN_BACKFILL_TOKEN" \
 *        -H "content-type: application/json" \
 *        -d '{"all":true,"apply":true}'
 *
 *   # bulk, only ones missing PDF
 *   curl ... -d '{"all":true,"onlyMissing":true,"apply":true}'
 *
 *   # dry-run (default): lists candidates, no writes
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq, isNull, inArray, and, or } from "drizzle-orm";
import { db as drizzle } from "@/app/lib/db/connection";
import { invoices } from "@/app/lib/db/schema";
import { renderInvoiceHtml } from "@/app/lib/billing/render/invoice-html";
import { htmlToPdfBuffer } from "@/app/lib/billing/render/invoice-pdf";
import { uploadInvoicePdf } from "@/app/lib/billing/storage";

export const dynamic = "force-dynamic";
export const maxDuration = 300;     // PDF gen is slow; allow up to 5 min

type Body = {
  invoiceId?: string;       // internal id (inv_xxx) OR invoice_number (BV/YYYY-YY/NNNN)
  invoiceNumber?: string;   // explicit invoice_number alias
  all?: boolean;
  onlyMissing?: boolean;
  apply?: boolean;
};

export async function POST(req: NextRequest) {
  const expected = process.env.ADMIN_BACKFILL_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { error: "ADMIN_BACKFILL_TOKEN not configured on server" },
      { status: 503 }
    );
  }
  const provided = req.headers.get("x-admin-token");
  if (!provided || provided !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Body = {};
  try { body = await req.json(); } catch { /* empty = dry-run all-missing */ }

  const dryRun = body.apply !== true;

  // Build candidate query.
  const conditions = [
    inArray(invoices.status, ["issued", "paid"]),
  ];
  const ref = body.invoiceNumber ?? body.invoiceId;
  if (ref) {
    // Match by either internal id OR invoice_number — accept both formats.
    conditions.push(or(eq(invoices.id, ref), eq(invoices.invoiceNumber, ref))!);
  } else if (!body.all) {
    // Neither ref nor all → default to only-missing as a safety
    conditions.push(isNull(invoices.pdfObjectKey));
  } else if (body.onlyMissing) {
    conditions.push(isNull(invoices.pdfObjectKey));
  }

  const candidates = await drizzle
    .select()
    .from(invoices)
    .where(and(...conditions));

  const stats = {
    dryRun,
    candidatesCount: candidates.length,
    succeeded: [] as string[],
    failed:    [] as { id: string; error: string }[],
  };

  if (dryRun) {
    return NextResponse.json({
      ok: true,
      stats,
      sample: candidates.slice(0, 10).map((c) => ({
        id: c.id,
        invoiceNumber: c.invoiceNumber,
        status: c.status,
        hadPdf: c.pdfObjectKey !== null,
      })),
    });
  }

  for (const inv of candidates) {
    try {
      const html = renderInvoiceHtml({
        invoiceNumber: inv.invoiceNumber,
        invoiceDate: inv.invoiceDate,
        buyerSnapshot: inv.buyerSnapshot,
        supplierSnapshot: inv.supplierSnapshot,
        lineItems: inv.lineItems,
        placeOfSupply: inv.placeOfSupply,
        taxableTotalPaise: inv.taxableTotalPaise,
        cgstPaise: inv.cgstPaise,
        sgstPaise: inv.sgstPaise,
        igstPaise: inv.igstPaise,
        totalPaise: inv.totalPaise,
        razorpayOrderId: inv.razorpayOrderId,
        razorpayPaymentId: inv.razorpayPaymentId,
      });
      const pdfBuf = await htmlToPdfBuffer(html);
      const key    = await uploadInvoicePdf(inv.id, pdfBuf);
      await drizzle.update(invoices).set({ pdfObjectKey: key }).where(eq(invoices.id, inv.id));
      stats.succeeded.push(inv.id);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[regenerate-invoice-pdf] failed for ${inv.id}:`, err);
      stats.failed.push({ id: inv.id, error: msg });
    }
  }

  return NextResponse.json({ ok: true, stats });
}
