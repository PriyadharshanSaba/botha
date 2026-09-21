import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { computeAvailableSlots, IST_OFFSET_MS } from "@/app/lib/meetings/slots";
import { getGoogleBusyRanges } from "@/app/lib/google/calendar";

export const dynamic = "force-dynamic";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if (!date || !DATE_RE.test(date)) {
    return NextResponse.json({ error: "Query param `date` must be YYYY-MM-DD" }, { status: 400 });
  }

  const [y, mo, d] = date.split("-").map(Number);
  const dayStartUTC = new Date(Date.UTC(y, mo - 1, d) - IST_OFFSET_MS);
  const dayEndUTC = new Date(dayStartUTC.getTime() + 24 * 60 * 60 * 1000);

  const [settings, bookings, blackouts, googleBusy] = await Promise.all([
    db.getMeetingSettings(),
    db.listBookingsInRange(dayStartUTC, dayEndUTC),
    db.listBlackoutsInRange(dayStartUTC, dayEndUTC),
    getGoogleBusyRanges(dayStartUTC, dayEndUTC),
  ]);

  const busyRanges = [
    ...bookings.map((b) => ({ start: b.startAt, end: b.endAt })),
    ...blackouts.map((b) => ({ start: b.startAt, end: b.endAt })),
    ...googleBusy,
  ];

  const slots = computeAvailableSlots({
    date,
    weeklyHours: settings.weeklyHours,
    slotMinutes: settings.slotMinutes,
    busyRanges,
    now: new Date(),
  });

  return NextResponse.json({
    slotMinutes: settings.slotMinutes,
    slots: slots.map((s) => ({ start: s.start.toISOString(), end: s.end.toISOString() })),
  });
}
