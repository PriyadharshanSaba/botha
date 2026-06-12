import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";

// In-memory IP rate limit: 10 requests / minute / IP.
// Resets on server restart, which is acceptable for an enumeration brake.
const buckets = new Map<string, { count: number; windowStart: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (bucket.count >= MAX_PER_WINDOW) return false;
  bucket.count += 1;
  return true;
}

function isValidEmail(s: unknown): s is string {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Wait a minute." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body || !isValidEmail(body.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  const user = await db.getUserByEmail(email);
  const exists = !!user && user.verified;

  return NextResponse.json({ exists });
}
