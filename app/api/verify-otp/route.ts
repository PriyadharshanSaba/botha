import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CURRENT_POLICY_VERSION } from "@/app/lib/consentVersion";

export async function POST(req: NextRequest) {
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

  // Migrate anonymous consent cookie → DB, then clear it
  const anonCookie = req.cookies.get("bodha_anon_consent")?.value;
  if (anonCookie) {
    try {
      const anon = JSON.parse(anonCookie);
      if (anon.policyVersion === CURRENT_POLICY_VERSION) {
        const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0].trim()
          ?? req.headers.get("x-real-ip")
          ?? undefined;
        const userAgent = req.headers.get("user-agent") ?? undefined;
        await db.saveConsent({
          userId: user.id,
          analytics: Boolean(anon.analytics),
          marketing: Boolean(anon.marketing),
          policyVersion: CURRENT_POLICY_VERSION,
          ipAddress,
          userAgent,
        });
      }
    } catch {
      // malformed cookie — ignore, user will be prompted after login
    }
    response.cookies.set({
      name: "bodha_anon_consent",
      value: "",
      maxAge: 0,
      path: "/",
    });
  }

  return response;
}
