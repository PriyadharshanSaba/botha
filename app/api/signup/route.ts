import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

import { generateOTP } from "@/app/lib/utils/otp";


export async function POST(req: Request) {
  const { firstName, lastName, email } = await req.json();

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = await db.getUserByEmail(email);
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const newUser = await db.createUser({ firstName, lastName, email });

  const otp = generateOTP();
  const expiry = Date.now() + 5 * 60 * 1000; // 5 mins

  await db.saveOTP(email, otp, expiry);

  console.log("OTP for signup:", otp); // TODO: send email

  return NextResponse.json({ success: true, userId: newUser.id });
}
