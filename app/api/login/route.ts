import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { generateOTP, isTestEmail } from "@/app/lib/utils/otp";
import { sendOtpEmail } from "@/app/lib/email/send";

export async function POST(req: Request) {
  const { email: rawEmail } = await req.json();
  const email = rawEmail?.trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const user = await db.getUserByEmail(email);

  // Always return success to prevent account enumeration
  if (!user || !user.verified) {
    return NextResponse.json({ success: true });
  }

  const testUser = isTestEmail(email);
  let attemptsLeft: number | undefined;

  if (!testUser) {
    const rateLimit = await db.checkRateLimit(email);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many attempts. Try again tomorrow." },
        { status: 429 }
      );
    }
    await db.recordOtpAttempt(email);
    attemptsLeft = rateLimit.attemptsLeft - 1;
  }

  const otp = generateOTP(email);
  const expiry = Date.now() + 5 * 60 * 1000;
  await db.saveOTP(email, otp, expiry);

  if (!testUser) {
    await sendOtpEmail(email, otp, user.firstName);
  }

  return NextResponse.json({ success: true, attemptsLeft });
}
