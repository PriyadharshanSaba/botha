import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { addDays, addMonth, firstOpenDate, monthGrid, weekdayOf, ymd } from "./calendar";

describe("booking calendar", () => {
  it("lays out November 2026 Monday-first: it starts on a Sunday, so six blanks", () => {
    assert.deepEqual(monthGrid(2026, 11), { blanks: 6, days: 30 });
  });

  it("handles a month that starts on Monday and a leap February", () => {
    assert.deepEqual(monthGrid(2026, 6), { blanks: 0, days: 30 });
    assert.deepEqual(monthGrid(2028, 2), { blanks: 1, days: 29 });
  });

  it("moves between months across year boundaries", () => {
    assert.deepEqual(addMonth(2026, 12, 1), { year: 2027, month: 1 });
    assert.deepEqual(addMonth(2026, 1, -1), { year: 2025, month: 12 });
  });

  it("adds days across month ends", () => {
    assert.equal(addDays("2026-10-30", 3), "2026-11-02");
    assert.equal(ymd(2026, 3, 5), "2026-03-05");
  });

  it("finds the first open weekday, skipping closed ones", () => {
    assert.equal(weekdayOf("2026-11-07"), 6); // Saturday
    // Mon–Fri open: from a Saturday the next open day is Monday 9 Nov.
    assert.equal(firstOpenDate("2026-11-07", [1, 2, 3, 4, 5], 30), "2026-11-09");
    assert.equal(firstOpenDate("2026-11-07", [], 30), null);
  });
});
