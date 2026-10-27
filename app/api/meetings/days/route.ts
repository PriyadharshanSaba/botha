import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export const dynamic = "force-dynamic";

const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;

// Which weekdays (0 = Sunday) have working hours, so the calendar can grey out closed days.
// Cheap on purpose: it reads the weekly template only, not bookings or Google Calendar.
export async function GET() {
  const settings = await db.getMeetingSettings();
  const openWeekdays = DAY_KEYS.flatMap((key, i) => ((settings.weeklyHours[key] ?? []).length > 0 ? [i] : []));
  return NextResponse.json({ openWeekdays });
}
