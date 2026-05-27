/**
 * GET /api/billing/invoice/:id/pdf
 *
 * Auth-gated by uid cookie. Verifies the invoice belongs to the caller, then
 * 302-redirects to a signed R2 URL (1h TTL).
 *
 * Returns 404 if pdf_object_key is NULL (PDF gen failed at issuance).
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { eq } from "drizzle-orm";
import { db as drizzle } from "@/app/lib/db/connection";
import { invoices } from "@/app/lib/db/schema";
import { getAuthenticatedUser } from "@/app/lib/auth";
import { getSignedInvoicePdfUrl } from "@/app/lib/billing/storage";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const rows = await drizzle.select().from(invoices).where(eq(invoices.id, id)).limit(1);
  const invoice = rows[0];

  if (!invoice || invoice.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!invoice.pdfObjectKey) {
    return NextResponse.json({ error: "PDF not available" }, { status: 404 });
  }

  try {
    const url = await getSignedInvoicePdfUrl(invoice.pdfObjectKey, 3600);
    return NextResponse.redirect(url, 302);
  } catch (err) {
    console.error(`[invoice pdf] sign url failed for ${id}:`, err);
    return NextResponse.json({ error: "Could not generate download URL" }, { status: 500 });
  }
}
