import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { CURRENT_POLICY_VERSION } from "@/app/lib/consentVersion";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { analytics, marketing } = await req.json();

  const consent = await db.saveConsent({
    userId,
    analytics: !!analytics,
    marketing: !!marketing,
    policyVersion: CURRENT_POLICY_VERSION,
    ipAddress: req.headers.get("x-forwarded-for") ?? undefined,
    userAgent: req.headers.get("user-agent") ?? undefined,
  });

  return NextResponse.json({ success: true, consent });
}
