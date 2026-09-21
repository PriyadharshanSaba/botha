import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { computeAvailableSlots, IST_OFFSET_MS } from "./slots";
import type { WeeklyHours } from "@/app/lib/db/types";

const EMPTY: WeeklyHours = { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] };
const WEEKDAY_10_18: WeeklyHours = {
  ...EMPTY,
  mon: [{ start: "10:00", end: "18:00" }],
  tue: [{ start: "10:00", end: "18:00" }],
  wed: [{ start: "10:00", end: "18:00" }],
  thu: [{ start: "10:00", end: "18:00" }],
  fri: [{ start: "10:00", end: "18:00" }],
};

// 2026-09-14 is a Monday.
const MONDAY = "2026-09-14";
const FAR_PAST_NOW = new Date(Date.UTC(2020, 0, 1)); // so "min notice" never trims fixtures

function istToUTC(y: number, mo: number, d: number, hh: number, mm: number): Date {
  return new Date(Date.UTC(y, mo - 1, d, hh, mm) - IST_OFFSET_MS);
}

describe("computeAvailableSlots", () => {
  it("generates fixed-length slots across the full working window", () => {
    const slots = computeAvailableSlots({
      date: MONDAY,
      weeklyHours: WEEKDAY_10_18,
      slotMinutes: 30,
      busyRanges: [],
      now: FAR_PAST_NOW,
    });
    // 10:00-18:00 in 30-min steps = 16 slots
    assert.equal(slots.length, 16);
    assert.deepEqual(slots[0].start, istToUTC(2026, 9, 14, 10, 0));
    assert.deepEqual(slots[0].end, istToUTC(2026, 9, 14, 10, 30));
    assert.deepEqual(slots[15].start, istToUTC(2026, 9, 14, 17, 30));
    assert.deepEqual(slots[15].end, istToUTC(2026, 9, 14, 18, 0));
  });

  it("returns nothing on a day with no configured windows", () => {
    const slots = computeAvailableSlots({
      date: "2026-09-13", // Sunday
      weeklyHours: WEEKDAY_10_18,
      slotMinutes: 30,
      busyRanges: [],
      now: FAR_PAST_NOW,
    });
    assert.equal(slots.length, 0);
  });

  it("excludes slots overlapping a busy range, including partial overlap", () => {
    const slots = computeAvailableSlots({
      date: MONDAY,
      weeklyHours: WEEKDAY_10_18,
      slotMinutes: 30,
      busyRanges: [{ start: istToUTC(2026, 9, 14, 11, 15), end: istToUTC(2026, 9, 14, 12, 15) }],
      now: FAR_PAST_NOW,
    });
    const starts = slots.map((s) => s.start.getTime());
    // 11:00-11:30 overlaps [11:15,12:15) partially -> excluded
    assert.ok(!starts.includes(istToUTC(2026, 9, 14, 11, 0).getTime()));
    // 11:30-12:00 fully inside busy range -> excluded
    assert.ok(!starts.includes(istToUTC(2026, 9, 14, 11, 30).getTime()));
    // 12:00-12:30 overlaps tail of busy range -> excluded
    assert.ok(!starts.includes(istToUTC(2026, 9, 14, 12, 0).getTime()));
    // 12:30-13:00 free again
    assert.ok(starts.includes(istToUTC(2026, 9, 14, 12, 30).getTime()));
    // 10:30-11:00 untouched
    assert.ok(starts.includes(istToUTC(2026, 9, 14, 10, 30).getTime()));
  });

  it("drops slots inside the minimum-notice window from now", () => {
    const now = istToUTC(2026, 9, 14, 10, 45); // mid-morning on the same day
    const slots = computeAvailableSlots({
      date: MONDAY,
      weeklyHours: WEEKDAY_10_18,
      slotMinutes: 30,
      busyRanges: [],
      now,
      minNoticeMinutes: 60,
    });
    const starts = slots.map((s) => s.start.getTime());
    // earliest bookable start = now + 60min = 11:45 -> 11:30 slot excluded, 12:00 included
    assert.ok(!starts.includes(istToUTC(2026, 9, 14, 11, 0).getTime()));
    assert.ok(!starts.includes(istToUTC(2026, 9, 14, 11, 30).getTime()));
    assert.ok(starts.includes(istToUTC(2026, 9, 14, 12, 0).getTime()));
  });

  it("never returns a slot longer than the configured length", () => {
    const slots = computeAvailableSlots({
      date: MONDAY,
      weeklyHours: WEEKDAY_10_18,
      slotMinutes: 60,
      busyRanges: [],
      now: FAR_PAST_NOW,
    });
    for (const s of slots) {
      assert.equal(s.end.getTime() - s.start.getTime(), 60 * 60 * 1000);
    }
  });

  it("throws on a malformed date string", () => {
    assert.throws(() =>
      computeAvailableSlots({
        date: "14-09-2026",
        weeklyHours: WEEKDAY_10_18,
        slotMinutes: 30,
        busyRanges: [],
        now: FAR_PAST_NOW,
      })
    );
  });
});
