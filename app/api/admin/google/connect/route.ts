import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { getGoogleAuthUrl } from "@/app/lib/google/calendar";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  try {
    return NextResponse.redirect(getGoogleAuthUrl());
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Google OAuth not configured";
    return NextResponse.json({ error: msg }, { status: 503 });
  }
}
