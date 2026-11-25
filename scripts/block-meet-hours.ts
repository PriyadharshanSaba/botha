/**
 * Bulk-create /meet blackouts for a recurring IST daily window on chosen
 * weekdays — same path as the admin blackouts API (db.createBlackout +
 * Google Calendar block event), so blocked time shows on the real calendar.
 * Skips days that already have an identical blackout.
 *
 * Dry-run by default; pass --apply to write.
 *
 * Usage:
 *   npm run block-meet-hours -- --from=2026-10-29 --to=2026-12-29 --start=13:00 --end=23:00
 *   npm run block-meet-hours -- --from=2026-10-29 --to=2026-12-29 --start=13:00 --end=23:00 --apply
 *
 * Optional: --days=1,2,3,4,5 (0=Sun..6=Sat, default Mon–Fri), --reason="..."
 */
import { config } from "dotenv";
config({ path: ".env.local" });

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const HHMM_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;

function parseArgs(): Record<string, string | boolean> {
  const out: Record<string, string | boolean> = {};
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([^=]+)(?:=([\s\S]*))?$/);
    if (m) out[m[1]] = m[2] ?? true;
  }
  return out;
}

function istToUTC(y: number, mo: number, d: number, hhmm: string): Date {
  const m = HHMM_RE.exec(hhmm);
  if (!m) throw new Error(`Invalid time "${hhmm}" — expected HH:MM`);
  return new Date(Date.UTC(y, mo - 1, d, Number(m[1]), Number(m[2])) - IST_OFFSET_MS);
}

async function main() {
  const args = parseArgs();
  const from = DATE_RE.exec(String(args.from ?? ""));
  const to = DATE_RE.exec(String(args.to ?? ""));
  if (!from || !to || typeof args.start !== "string" || typeof args.end !== "string") {
    throw new Error("Usage: --from=YYYY-MM-DD --to=YYYY-MM-DD --start=HH:MM --end=HH:MM [--days=1,2,3,4,5] [--reason=...] [--apply]");
  }
  if (args.start >= args.end) throw new Error("--start must be before --end");

  const days = new Set(
    (typeof args.days === "string" ? args.days : "1,2,3,4,5").split(",").map(Number),
  );
  const reason = typeof args.reason === "string" ? args.reason : "Unavailable";
  const apply = args.apply === true;

  const { db } = await import("../app/lib/db");
  const { insertBlockEvent } = await import("../app/lib/google/calendar");

  const last = Date.UTC(Number(to[1]), Number(to[2]) - 1, Number(to[3]));
  const windows: { date: string; startAt: Date; endAt: Date }[] = [];
  for (
    let t = Date.UTC(Number(from[1]), Number(from[2]) - 1, Number(from[3]));
    t <= last;
    t += 24 * 60 * 60 * 1000
  ) {
    const day = new Date(t);
    if (!days.has(day.getUTCDay())) continue;
    const y = day.getUTCFullYear();
    const mo = day.getUTCMonth() + 1;
    const d = day.getUTCDate();
    windows.push({
      date: day.toISOString().slice(0, 10),
      startAt: istToUTC(y, mo, d, args.start),
      endAt: istToUTC(y, mo, d, args.end),
    });
  }

  const existing = await db.listBlackouts();
  const have = new Set(existing.map((b) => `${b.startAt.getTime()}-${b.endAt.getTime()}`));
  const todo = windows.filter((w) => !have.has(`${w.startAt.getTime()}-${w.endAt.getTime()}`));

  console.log(`${windows.length} matching days, ${windows.length - todo.length} already blocked, ${todo.length} to create`);
  if (!apply) {
    for (const w of todo) console.log(`  would block ${w.date} ${args.start}–${args.end} IST`);
    console.log("Dry run — re-run with --apply to write.");
    return;
  }

  let synced = 0;
  for (const w of todo) {
    const blackout = await db.createBlackout({ startAt: w.startAt, endAt: w.endAt, reason });
    try {
      const eventId = await insertBlockEvent({ summary: `Blocked — ${reason}`, start: w.startAt, end: w.endAt });
      if (eventId) {
        await db.setBlackoutGoogleEventId(blackout.id, eventId);
        synced++;
      }
    } catch (err) {
      console.error(`  ${w.date}: Google Calendar sync failed (blackout saved):`, err);
    }
    console.log(`  blocked ${w.date}`);
  }
  console.log(`Created ${todo.length} blackouts, ${synced} synced to Google Calendar.`);
}

main().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
