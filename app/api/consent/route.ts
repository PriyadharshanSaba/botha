import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CURRENT_POLICY_VERSION } from "@/app/lib/consentVersion";
import { getAuthenticatedUser } from "@/app/lib/auth";

// GET /api/consent — returns current consent for the logged-in user
export async function GET(req: NextRequest) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = user.id;

  const consent = await db.getConsent(userId, CURRENT_POLICY_VERSION);
  return NextResponse.json({
    consent,
    policyVersion: CURRENT_POLICY_VERSION,
    needsConsent: !consent || !!consent.withdrawnAt,
  });
}

// POST /api/consent — save or update consent choices
export async function POST(req: NextRequest) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = user.id;

  const body = await req.json();
  const { analytics, marketing, withdraw } = body;

  if (withdraw) {
    await db.withdrawConsent(userId, CURRENT_POLICY_VERSION);
    return NextResponse.json({ success: true, withdrawn: true });
  }

  if (typeof analytics !== "boolean" || typeof marketing !== "boolean") {
    return NextResponse.json({ error: "Invalid consent values" }, { status: 400 });
  }

  const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0].trim()
    ?? req.headers.get("x-real-ip")
    ?? undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;

  const consent = await db.saveConsent({
    userId,
    analytics,
    marketing,
    policyVersion: CURRENT_POLICY_VERSION,
    ipAddress,
    userAgent,
  });

  return NextResponse.json({ success: true, consent });
}
