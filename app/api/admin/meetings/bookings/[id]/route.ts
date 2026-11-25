/**
 * DELETE /api/admin/meetings/bookings/[id] — cancel a booking.
 * Marks it cancelled, removes the Google Calendar event (if synced), and
 * emails the attendee a cancellation notice.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { db } from "@/app/lib/db";
import { deleteMeetingEvent } from "@/app/lib/google/calendar";
import { buildMeetingICS } from "@/app/lib/meetings/ics";
import { sendMeetingCancelledEmail } from "@/app/lib/email/send";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export async function DELETE(req: NextRequest, ctx: Ctx) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const { id } = await ctx.params;
  const booking = await db.getBookingById(id);
  if (!booking || booking.status === "cancelled") {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  if (booking.googleEventId) {
    await deleteMeetingEvent(booking.googleEventId);
  }
  const cancelled = await db.cancelBooking(id);

  const ics = buildMeetingICS({
    uid: `${booking.id}@bodhaventures.in`,
    start: booking.startAt,
    end: booking.endAt,
    summary: `Bodha Ventures call — ${booking.name}`,
    description: booking.note ?? "",
    organizerEmail: "info@bodhaventures.in",
    organizerName: "Bodha Ventures",
    attendeeEmail: booking.email,
    attendeeName: booking.name,
    method: "CANCEL",
  });
  await sendMeetingCancelledEmail({ name: booking.name, email: booking.email, start: booking.startAt, ics });

  return NextResponse.json({ booking: cancelled });
}
