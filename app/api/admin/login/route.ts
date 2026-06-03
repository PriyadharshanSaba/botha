import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { generateOTP, isTestEmail } from "@/app/lib/utils/otp";
import { sendOtpEmail } from "@/app/lib/email/send";
import { isAdminEmail } from "@/app/lib/admin";

export async function POST(req: Request) {
  const { email: rawEmail } = await req.json();
  const email = rawEmail?.trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  if (!isAdminEmail(email)) {
    // Same generic error as not_registered so non-admins can't enumerate.
    return NextResponse.json({ error: "not_authorized" }, { status: 403 });
  }

  // Upsert admin user row on first login.
  let user = await db.getUserByEmail(email);
  if (!user) {
    await db.createUser({ email, firstName: "Admin", lastName: "" });
    await db.markUserVerified(email);
    user = await db.getUserByEmail(email);
  }
  if (!user) {
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }

  // Rate limit: skip for test emails (mirrors /api/login).
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
    await sendOtpEmail(email, otp, user.firstName);
  }

  return NextResponse.json({ success: true });
}
