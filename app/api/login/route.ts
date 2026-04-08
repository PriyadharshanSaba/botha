import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { generateOTP, isTestEmail } from "@/app/lib/utils/otp";
import { sendOtpEmail } from "@/app/lib/email/send";

export async function POST(req: Request) {
  const { email } = await req.json();

  const user = await db.getUserByEmail(email);
  if (!user || !user.verified) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const { allowed, attemptsLeft } = await db.checkRateLimit(email);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Try again tomorrow." },
      { status: 429 }
    );
  }

  const otp = generateOTP(email);
  const expiry = Date.now() + 5 * 60 * 1000;

  await db.saveOTP(email, otp, expiry);
  await db.recordOtpAttempt(email);
  if (!isTestEmail(email)) {
    await sendOtpEmail(email, otp, user.firstName);
  }

  return NextResponse.json({ success: true, attemptsLeft: attemptsLeft - 1 });
}
