import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { disconnectGoogleAccount } from "@/app/lib/google/calendar";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  await disconnectGoogleAccount();
  return NextResponse.json({ success: true });
}
