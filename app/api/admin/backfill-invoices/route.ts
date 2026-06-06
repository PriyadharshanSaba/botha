/**
 * One-shot admin endpoint: backfill legacy subscriptions into the invoices table.
 *
 * Auth: x-admin-token header must match ADMIN_BACKFILL_TOKEN env var.
 *       Single shared secret; rotate or remove the env var when backfill is complete.
 *
 * Usage:
 *   # dry-run (default) — counts only, no writes
 *   curl -X POST https://<app>/api/admin/backfill-invoices \
 *        -H "x-admin-token: $ADMIN_BACKFILL_TOKEN"
 *
 *   # apply
 *   curl -X POST https://<app>/api/admin/backfill-invoices \
 *        -H "x-admin-token: $ADMIN_BACKFILL_TOKEN" \
 *        -H "content-type: application/json" \
 *        -d '{"apply": true}'
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { backfillInvoices, describeBackfillEnv } from "@/app/lib/billing/backfill";

export const dynamic = "force-dynamic";

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

  let body: { apply?: boolean } = {};
  try {
    body = await req.json();
  } catch {
    // empty body = dry-run by default
  }

  const dryRun = body.apply !== true;

  try {
    const stats = await backfillInvoices({ dryRun });
    return NextResponse.json({
      ok: true,
      env: describeBackfillEnv(),
      stats,
    });
  } catch (err) {
    console.error("[backfill-invoices] failed:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "unknown error" },
      { status: 500 }
    );
  }
}
