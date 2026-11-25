import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { db } from "@/app/lib/db";
import type { WeeklyHours } from "@/app/lib/db/types";

export const dynamic = "force-dynamic";

const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;
const HHMM_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

function validateWeeklyHours(v: unknown): v is WeeklyHours {
  if (!v || typeof v !== "object") return false;
  const obj = v as Record<string, unknown>;
  for (const key of DAY_KEYS) {
    const windows = obj[key];
    if (!Array.isArray(windows)) return false;
    for (const w of windows) {
      if (!w || typeof w !== "object") return false;
      const win = w as { start?: unknown; end?: unknown };
      if (typeof win.start !== "string" || typeof win.end !== "string") return false;
      if (!HHMM_RE.test(win.start) || !HHMM_RE.test(win.end)) return false;
      if (win.start >= win.end) return false;
    }
  }
  return true;
}

export async function GET(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const settings = await db.getMeetingSettings();
  return NextResponse.json(settings);
}

export async function PUT(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { weeklyHours, slotMinutes, timezone } = body;

  if (!validateWeeklyHours(weeklyHours)) {
    return NextResponse.json({ error: "Invalid weeklyHours — each window needs start < end as HH:MM" }, { status: 400 });
  }
  if (typeof slotMinutes !== "number" || slotMinutes < 5 || slotMinutes > 240) {
    return NextResponse.json({ error: "slotMinutes must be between 5 and 240" }, { status: 400 });
  }
  if (typeof timezone !== "string" || !timezone) {
    return NextResponse.json({ error: "timezone is required" }, { status: 400 });
  }

  const saved = await db.saveMeetingSettings({ weeklyHours, slotMinutes, timezone });
  return NextResponse.json(saved);
}
