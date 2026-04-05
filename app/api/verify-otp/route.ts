import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

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
  
  const progress = await db.getLastCompletedChapter(user.id);

  const response = NextResponse.json({ success: true, progress });

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
