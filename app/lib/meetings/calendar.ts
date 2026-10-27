// Month-grid maths for the booking calendar. All dates are IST calendar dates ("YYYY-MM-DD").

export function ymd(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Monday-first grid: how many empty cells precede day 1, and how many days the month has. */
export function monthGrid(year: number, month: number): { blanks: number; days: number } {
  const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay(); // 0 = Sunday
  return {
    blanks: (firstWeekday + 6) % 7,
    days: new Date(Date.UTC(year, month, 0)).getUTCDate(),
  };
}

export function addMonth(year: number, month: number, delta: number): { year: number; month: number } {
  const index = year * 12 + (month - 1) + delta;
  return { year: Math.floor(index / 12), month: (index % 12) + 1 };
}

/** Adds whole days to an IST date string. */
export function addDays(date: string, days: number): string {
  const [y, m, d] = date.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + days));
  return ymd(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate());
}

/** 0 = Sunday … 6 = Saturday, for an IST date string. */
export function weekdayOf(date: string): number {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

/** First date from `from` (inclusive) up to `horizonDays` ahead that falls on an open weekday. */
export function firstOpenDate(from: string, openWeekdays: number[], horizonDays: number): string | null {
  for (let i = 0; i <= horizonDays; i++) {
    const date = addDays(from, i);
    if (openWeekdays.includes(weekdayOf(date))) return date;
  }
  return null;
}
