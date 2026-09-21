import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { db } from "@/app/lib/db";
import { insertBlockEvent } from "@/app/lib/google/calendar";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const blackouts = await db.listBlackouts();
  return NextResponse.json({ blackouts });
}

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const startAt = new Date(body.startAt);
  const endAt = new Date(body.endAt);
  const reason = typeof body.reason === "string" && body.reason.trim() ? body.reason.trim().slice(0, 200) : null;

  if (isNaN(startAt.getTime()) || isNaN(endAt.getTime()) || startAt >= endAt) {
    return NextResponse.json({ error: "startAt must be a valid date before endAt" }, { status: 400 });
  }

  const blackout = await db.createBlackout({ startAt, endAt, reason });

  try {
    const googleEventId = await insertBlockEvent({
      summary: reason ? `Blocked — ${reason}` : "Blocked — Bodha Ventures",
      start: startAt,
      end: endAt,
    });
    if (googleEventId) {
      await db.setBlackoutGoogleEventId(blackout.id, googleEventId);
      blackout.googleEventId = googleEventId;
    }
  } catch (err) {
    console.error("[admin/meetings/blackouts] Google Calendar sync failed (blackout still saved):", err);
  }

  return NextResponse.json(blackout);
}
