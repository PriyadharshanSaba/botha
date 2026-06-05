import { NextResponse } from "next/server";
import { sendWaitlistEmail } from "@/app/lib/email/send";

export async function POST(req: Request) {
  const { firstName, lastName, email: rawEmail } = await req.json();

  if (!firstName || !lastName || !rawEmail) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const email = String(rawEmail).trim().toLowerCase();
  // Basic email shape check; mirrors signup leniency.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await sendWaitlistEmail({
      firstName: String(firstName).trim(),
      lastName:  String(lastName).trim(),
      email,
    });
  } catch (e) {
    console.error("[waitlist] email send failed:", e);
    return NextResponse.json({ error: "Could not submit. Try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
