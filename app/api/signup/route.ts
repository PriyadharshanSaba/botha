import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { generateOTP, isTestEmail } from "@/app/lib/utils/otp";
import { sendOtpEmail } from "@/app/lib/email/send";

export async function POST(req: Request) {
  const { firstName, lastName, email: rawEmail } = await req.json();

  if (!firstName || !lastName || !rawEmail) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const email = rawEmail.trim().toLowerCase();
  const existing = await db.getUserByEmail(email);

  // Already verified → send OTP silently (same response to prevent enumeration)
  if (existing?.verified) {
    const testUser = isTestEmail(email);
    if (!testUser) {
      const rateLimit = await db.checkRateLimit(email);
      if (!rateLimit.allowed) {
        return NextResponse.json(
          { error: "Too many attempts. Try again tomorrow." },
          { status: 429 }
        );
      }
      await db.recordOtpAttempt(email);
    }

    const otp = generateOTP(email);
    const expiry = Date.now() + 5 * 60 * 1000;
    await db.saveOTP(email, otp, expiry);

    if (!testUser) {
      await sendOtpEmail(email, otp, existing.firstName).catch(() => {});
    }

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
    attemptsLeft = rateLimit.attemptsLeft - 1;
  }

  // Reuse unverified account or create new
  const user = existing ?? (await db.createUser({ firstName, lastName, email }));

  const otp = generateOTP(email);
  const expiry = Date.now() + 5 * 60 * 1000;
  await db.saveOTP(email, otp, expiry);

  if (!testUser) {
    await db.recordOtpAttempt(email);
    try {
      await sendOtpEmail(email, otp, firstName);
    } catch {
      return NextResponse.json(
        { error: "Failed to send OTP email" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ success: true, attemptsLeft });
}
