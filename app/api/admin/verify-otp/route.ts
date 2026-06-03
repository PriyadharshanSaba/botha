import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdminEmail } from "@/app/lib/admin";

export async function POST(req: NextRequest) {
  const { email: rawEmail, otp } = await req.json();
  const email = rawEmail?.trim().toLowerCase();

  if (!email || !otp) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!isAdminEmail(email)) {
    return NextResponse.json({ error: "not_authorized" }, { status: 403 });
  }

  const user = await db.getUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const success = await db.verifyOTP(email, otp);
  if (!success) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  await db.markUserVerified(email);

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "uid",
    value: user.id,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  response.cookies.set({
    name: "admin",
    value: "1",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
