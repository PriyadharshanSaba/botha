import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getNetworth, appendEntry, validateEntry } from "@/app/lib/networth/server";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const data = await getNetworth(userId);
  return NextResponse.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}

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

  const raw = (body as { entry?: unknown })?.entry;
  const result = validateEntry(raw);
  if (!result.ok) {
    return NextResponse.json({ error: "invalid-entry", reason: result.reason }, { status: 400 });
  }

  try {
    const { updatedAt } = await appendEntry(userId, result.entry);
    return NextResponse.json(
      { entry: result.entry, updatedAt },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    if (e instanceof Error && e.message.startsWith("MAX_ENTRIES_EXCEEDED")) {
      return NextResponse.json({ error: "max-entries-exceeded" }, { status: 409 });
    }
    throw e;
  }
}
