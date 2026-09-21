import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { computeAvailableSlots, IST_OFFSET_MS } from "@/app/lib/meetings/slots";
import { buildMeetingICS } from "@/app/lib/meetings/ics";
import { insertMeetingEvent, getGoogleBusyRanges } from "@/app/lib/google/calendar";
import { sendMeetingBookedEmails } from "@/app/lib/email/send";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** IST calendar date "YYYY-MM-DD" for the given UTC instant. */
function istDateString(d: Date): string {
  const ist = new Date(d.getTime() + IST_OFFSET_MS);
  return `${ist.getUTCFullYear()}-${String(ist.getUTCMonth() + 1).padStart(2, "0")}-${String(ist.getUTCDate()).padStart(2, "0")}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" && body.phone.trim() ? body.phone.trim() : null;
  const note = typeof body.note === "string" && body.note.trim() ? body.note.trim().slice(0, 1000) : null;
  const startIso = typeof body.start === "string" ? body.start : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Enter your name" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email" }, { status: 400 });
  }
  const start = new Date(startIso);
  if (isNaN(start.getTime())) {
    return NextResponse.json({ error: "Invalid slot" }, { status: 400 });
  }

  const settings = await db.getMeetingSettings();
  const end = new Date(start.getTime() + settings.slotMinutes * 60 * 1000);

  // Re-validate the slot is still open — closes the race between fetching
  // slots and submitting the form.
  const date = istDateString(start);
  const [y, mo, d] = date.split("-").map(Number);
  const dayStartUTC = new Date(Date.UTC(y, mo - 1, d) - IST_OFFSET_MS);
  const dayEndUTC = new Date(dayStartUTC.getTime() + 24 * 60 * 60 * 1000);

  const [bookings, blackouts, googleBusy] = await Promise.all([
    db.listBookingsInRange(dayStartUTC, dayEndUTC),
    db.listBlackoutsInRange(dayStartUTC, dayEndUTC),
    getGoogleBusyRanges(dayStartUTC, dayEndUTC),
  ]);
  const busyRanges = [
    ...bookings.map((b) => ({ start: b.startAt, end: b.endAt })),
    ...blackouts.map((b) => ({ start: b.startAt, end: b.endAt })),
    ...googleBusy,
  ];
  const openSlots = computeAvailableSlots({
    date,
    weeklyHours: settings.weeklyHours,
    slotMinutes: settings.slotMinutes,
    busyRanges,
    now: new Date(),
  });
  const stillOpen = openSlots.some((s) => s.start.getTime() === start.getTime());
  if (!stillOpen) {
    return NextResponse.json({ error: "That slot was just taken. Please pick another." }, { status: 409 });
  }

  const booking = await db.createBooking({ name, email, phone, note, startAt: start, endAt: end });

  try {
    const googleEventId = await insertMeetingEvent({
      summary: `Bodha Ventures call — ${name}`,
      description: note ?? "Booked via bodhaventures.in/meet",
      start,
      end,
      attendeeEmail: email,
      attendeeName: name,
    });
    if (googleEventId) {
      await db.setBookingGoogleEventId(booking.id, googleEventId);
    }
  } catch (err) {
    console.error("[meetings/book] Google Calendar sync failed (booking still saved):", err);
  }

  const ics = buildMeetingICS({
    uid: `${booking.id}@bodhaventures.in`,
    start,
    end,
    summary: `Bodha Ventures call — ${name}`,
    description: note ?? "Booked via bodhaventures.in/meet",
    organizerEmail: "info@bodhaventures.in",
    organizerName: "Bodha Ventures",
    attendeeEmail: email,
    attendeeName: name,
  });

  await sendMeetingBookedEmails({ name, email, note, start, end, ics });

  return NextResponse.json({
    id: booking.id,
    start: start.toISOString(),
    end: end.toISOString(),
  });
}
