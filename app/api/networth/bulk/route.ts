import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { NwtEntry } from "@/app/lib/networth/types";
import { bulkAppend, validateEntry } from "@/app/lib/networth/server";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const raw = (body as { entries?: unknown })?.entries;
  if (!Array.isArray(raw)) {
    return NextResponse.json({ error: "invalid-entries" }, { status: 400 });
  }

  const accepted: NwtEntry[] = [];
  const rejected: { id: string; reason: string }[] = [];
  for (const item of raw) {
    const v = validateEntry(item);
    if (v.ok) accepted.push(v.entry);
    else {
      const id =
        item && typeof item === "object" && "id" in item && typeof (item as { id: unknown }).id === "string"
          ? (item as { id: string }).id
          : "<unknown>";
      rejected.push({ id, reason: v.reason });
    }
  }

  try {
    const result = await bulkAppend(userId, accepted);
    return NextResponse.json(
      {
        accepted: result.accepted,
        rejected: [...rejected, ...result.rejected],
        updatedAt: result.updatedAt,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    if (e instanceof Error && e.message.startsWith("MAX_ENTRIES_EXCEEDED")) {
      return NextResponse.json({ error: "max-entries-exceeded" }, { status: 409 });
    }
    throw e;
  }
}
