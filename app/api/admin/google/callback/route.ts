import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { connectGoogleAccount } from "@/app/lib/google/calendar";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const admin = await getAuthenticatedAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const code = req.nextUrl.searchParams.get("code");
  const dest = new URL("/admin/meetings", req.nextUrl.origin);

  if (!code) {
    dest.searchParams.set("google", "error");
    return NextResponse.redirect(dest);
  }

  try {
    await connectGoogleAccount(code);
    dest.searchParams.set("google", "connected");
  } catch (err) {
    console.error("[admin/google/callback] connect failed:", err);
    dest.searchParams.set("google", "error");
  }
  return NextResponse.redirect(dest);
}
