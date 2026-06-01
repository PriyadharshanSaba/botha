import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/app/lib/db/connection";
import { getNetworth, getExistingMonths } from "@/app/lib/networth/server";
import {
  IMPORT_LIMITS,
  parseEnvelope,
  stripFences,
  buildReport,
  validateImportEntry,
} from "@/app/lib/networth/import";
import { SCHEMA_VERSION, type NwtEntry } from "@/app/lib/networth/types";

const NO_STORE = { "Cache-Control": "no-store" } as const;

export async function POST(req: NextRequest) {
  try {
    const userId = req.cookies.get("uid")?.value;
    if (!userId) {
      return NextResponse.json({ error: "unauthenticated" }, { status: 401, headers: NO_STORE });
    }

    // 2. Body size guard via header (best-effort)
    const cl = req.headers.get("content-length");
    if (cl) {
      const n = parseInt(cl, 10);
      if (Number.isFinite(n) && n > IMPORT_LIMITS.MAX_BODY_BYTES) {
        return NextResponse.json(
          { error: "payload-too-large" },
          { status: 413, headers: NO_STORE },
        );
      }
    }

    // 3. Read body and re-check actual byte length
    const text = await req.text();
    if (Buffer.byteLength(text, "utf8") > IMPORT_LIMITS.MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "payload-too-large" },
        { status: 413, headers: NO_STORE },
      );
    }

    // 4. Parse outer JSON
    let body: unknown;
    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: "invalid-json" }, { status: 400, headers: NO_STORE });
    }
    const rawField = (body as { raw?: unknown } | null)?.raw;
    if (typeof rawField !== "string") {
      return NextResponse.json({ error: "invalid-json" }, { status: 400, headers: NO_STORE });
    }

    // 5. Early one-shot guard (applies to dryRun too)
    const current = await getNetworth(userId);
    if (current.importUsedAt !== null) {
      return NextResponse.json(
        { error: "import-already-used" },
        { status: 409, headers: NO_STORE },
      );
    }

    // 6. Strip fences + parse envelope
    const stripped = stripFences(rawField);
    let envelope;
    try {
      envelope = parseEnvelope(stripped);
    } catch (e) {
      const reason = e instanceof Error ? e.message : "invalid-envelope";
      const key = reason === "invalid-json" ? "invalid-json" : "invalid-envelope";
      return NextResponse.json({ error: key }, { status: 400, headers: NO_STORE });
    }

    // 7. Build report
    const existingMonths = await getExistingMonths(userId);
    const report = buildReport(envelope, existingMonths);

    // 8. dryRun branch
    const url = new URL(req.url);
    const dryRun = url.searchParams.get("dryRun") === "true";
    if (dryRun) {
      return NextResponse.json(
        { ...report, committed: false },
        { status: 200, headers: NO_STORE },
      );
    }

    // 9. Commit branch
    if (report.accepted.length === 0) {
      return NextResponse.json(
        { ...report, committed: false },
        { status: 200, headers: NO_STORE },
      );
    }

    // Recover raw assets/liabs/alloc by walking envelope.entries by row index.
    // ImportAccepted carries `row` which is the original envelope index.
    const entriesToInsert: NwtEntry[] = [];
    for (const a of report.accepted) {
      const rawEntry = envelope.entries[a.row];
      const v = validateImportEntry(rawEntry, a.row);
      if (!v.ok) {
        // Should not happen — buildReport already accepted this row.
        continue;
      }
      entriesToInsert.push({
        id: crypto.randomUUID(),
        month: v.entry.month,
        createdAt: new Date().toISOString(),
        assets: v.entry.assets,
        liabs: v.entry.liabs,
        alloc: v.entry.alloc,
      });
    }

    const jsonbArray = JSON.stringify(entriesToInsert);
    // Upsert: creates row on first use, appends + flags on subsequent existence.
    // DO UPDATE's WHERE clause enforces one-shot: a row with import_used_at IS NOT NULL
    // matches the conflict but skips the UPDATE, returning 0 rows → 409.
    const result = await db.execute(sql`
      INSERT INTO networth_data (user_id, entries, schema_version, import_used_at, updated_at)
      VALUES (${userId}, ${jsonbArray}::jsonb, ${SCHEMA_VERSION}, now(), now())
      ON CONFLICT (user_id) DO UPDATE
        SET entries = networth_data.entries || EXCLUDED.entries,
            import_used_at = now(),
            updated_at = now()
        WHERE networth_data.import_used_at IS NULL
      RETURNING user_id
    `);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "import-already-used" },
        { status: 409, headers: NO_STORE },
      );
    }

    return NextResponse.json(
      { ...report, committed: true },
      { status: 200, headers: NO_STORE },
    );
  } catch {
    return NextResponse.json({ error: "server-error" }, { status: 500, headers: NO_STORE });
  }
}
