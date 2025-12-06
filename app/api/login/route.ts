import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

import { generateOTP } from "@/app/lib/utils/otp";


export async function POST(req: Request) {
  const { email } = await req.json();

  const user = await db.getUserByEmail(email);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const otp = generateOTP();
  const expiry = Date.now() + 5 * 60 * 1000;

  await db.saveOTP(email, otp, expiry);

  console.log("Login OTP:", otp); // TODO send email

  return NextResponse.json({ success: true });
}
