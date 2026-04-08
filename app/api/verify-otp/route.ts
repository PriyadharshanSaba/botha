import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { CURRENT_POLICY_VERSION } from "@/app/lib/consentVersion";

export async function POST(req: Request) {
  const { email, otp } = await req.json();

  const user = await db.getUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const success = await db.verifyOTP(email, otp);
  if (!success) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  await db.markUserVerified(email);

  const [progress, consent] = await Promise.all([
    db.getLastCompletedChapter(user.id),
    db.getConsent(user.id, CURRENT_POLICY_VERSION),
  ]);

  const needsConsent = !consent || !!consent.withdrawnAt;

  const response = NextResponse.json({ success: true, progress, needsConsent });

  response.cookies.set({
    name: "uid",
    value: user.id,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
