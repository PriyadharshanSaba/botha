/**
 * Public landing for the Bodha Personal Finance Program Guide PDF.
 *
 * Auth model mirrors gated blogs:
 *   - read uid cookie
 *   - if verified user → render hero + <DownloadButton>
 *   - else render hero + <PaywallGate> (email → OTP → cookie → refresh)
 *
 * PDF itself is served by /api/guide/download from private/guide/ —
 * outside /public so the URL cannot be shared.
 */

import type { Metadata } from "next";
import { cookies } from "next/headers";
import { db } from "@/app/lib/db";
import PaywallGate from "@/app/components/PaywallGate";
import DownloadButton from "./DownloadButton";
import "@/app/blogs/paywall.css";
import "./guide.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Bodha Personal Finance Program Guide",
  description:
    "A free guide to Bodha's structured personal finance program — what's covered, how it works, and how to get started.",
};

export default async function Page() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const user = uid ? await db.getUserById(uid) : null;
  const authed = !!user;

  return (
    <div className="guide-page">
      <div className="guide-page-inner">
        <div className="guide-eyebrow">Free Guide</div>
        <h1 className="guide-title">The Bodha Personal Finance Program Guide</h1>
        <p className="guide-sub">
          A structured walkthrough of Bodha&apos;s personal finance program —
          what&apos;s inside, how the modules build on each other, and how to
          use it to take control of your money.
        </p>

        {authed ? (
          <div className="guide-card">
            <h2 className="guide-card-title">You&apos;re signed in</h2>
            <p className="guide-card-sub">
              Download the full guide as a PDF. Save it, share it, come back to it.
            </p>
            <DownloadButton />
          </div>
        ) : (
          <PaywallGate
            slug="guide"
            title="Get the guide"
            subtitle="Sign in or create a free account to download the PDF."
          />
        )}
      </div>
    </div>
  );
}
