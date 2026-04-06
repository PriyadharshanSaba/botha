import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { generateOTP, isTestEmail } from "@/app/lib/utils/otp";
import { sendOtpEmail } from "@/app/lib/email/send";


export async function POST(req: Request) {
  const { firstName, lastName, email } = await req.json();
  console.log("[signup] attempt:", { email, firstName, lastName });

  if (!firstName || !lastName || !email) {
    console.log("[signup] missing fields");
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = await db.getUserByEmail(email);
  console.log("[signup] existing user:", existing ? { id: existing.id, verified: existing.verified } : null);

  if (existing?.verified) {
    console.log("[signup] rejected — user already verified");
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const { allowed, attemptsLeft } = await db.checkRateLimit(email);
  console.log("[signup] rate limit:", { allowed, attemptsLeft });

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Try again tomorrow." },
      { status: 429 }
    );
  }

  // Reuse unverified account or create new
  const user = existing ?? await db.createUser({ firstName, lastName, email });
  console.log("[signup] user ready:", { id: user.id, reused: !!existing });

  const otp = generateOTP(email);
  const expiry = Date.now() + 5 * 60 * 1000; // 5 mins

  await db.saveOTP(email, otp, expiry);
  console.log("[signup] OTP saved");

  await db.recordOtpAttempt(email);

  if (!isTestEmail(email)) {
    try {
      await sendOtpEmail(email, otp, firstName);
      console.log("[signup] email sent to:", email);
    } catch (err) {
      console.error("[signup] email send failed:", err);
      return NextResponse.json({ error: "Failed to send OTP email" }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true, userId: user.id, attemptsLeft: attemptsLeft - 1 });
}
