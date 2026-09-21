import type { WeeklyHours } from "@/app/lib/db/types";

/** India has no DST — a fixed UTC+5:30 offset is safe to hardcode. */
export const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;

export type BusyRange = { start: Date; end: Date };
export type Slot = { start: Date; end: Date };

function overlaps(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): boolean {
  return aStart < bEnd && aEnd > bStart;
}

/**
 * Converts an IST wall-clock "HH:MM" on the given IST calendar date into the
 * UTC instant it represents.
 */
function istWallClockToUTC(year: number, month: number, day: number, hhmm: string): Date {
  const [hh, mm] = hhmm.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hh, mm) - IST_OFFSET_MS);
}

/**
 * Computes bookable slots for one IST calendar date, given the weekly
 * availability template, an already-merged list of busy ranges (existing
 * bookings + Google Calendar busy + admin blackouts — the caller merges
 * these so this function stays a pure calendar/overlap computation), and
 * the current time (so past/too-soon slots are excluded).
 */
export function computeAvailableSlots(opts: {
  date: string; // "YYYY-MM-DD", an IST calendar date
  weeklyHours: WeeklyHours;
  slotMinutes: number;
  busyRanges: BusyRange[];
  now: Date;
  minNoticeMinutes?: number;
}): Slot[] {
  const { date, weeklyHours, slotMinutes, busyRanges, now } = opts;
  const minNotice = opts.minNoticeMinutes ?? 60;

  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!m) throw new Error(`computeAvailableSlots: invalid date "${date}"`);
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);

  const dayKey = DAY_KEYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  const windows = weeklyHours[dayKey] ?? [];
  const earliestStart = new Date(now.getTime() + minNotice * 60 * 1000);
  const slotMs = slotMinutes * 60 * 1000;

  const slots: Slot[] = [];
  for (const window of windows) {
    let cursor = istWallClockToUTC(year, month, day, window.start);
    const windowEnd = istWallClockToUTC(year, month, day, window.end);
    while (cursor.getTime() + slotMs <= windowEnd.getTime()) {
      const slotStart = cursor;
      const slotEnd = new Date(cursor.getTime() + slotMs);
      const free =
        slotStart >= earliestStart &&
        !busyRanges.some((b) => overlaps(slotStart, slotEnd, b.start, b.end));
      if (free) slots.push({ start: slotStart, end: slotEnd });
      cursor = slotEnd;
    }
  }
  return slots;
}
