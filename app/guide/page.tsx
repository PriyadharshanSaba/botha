/**
 * Public landing for the 5-Bucket Cash Framework PDF.
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
  title: "The 5-Bucket Cash Framework",
  description:
    "A simple framework to organise your money into five buckets — so every rupee has a job and nothing gets lost between accounts.",
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
        <h1 className="guide-title">The 5-Bucket Cash Framework</h1>
        <p className="guide-sub">
          A simple way to split your money into five buckets — so every rupee
          has a job, your essentials are covered, and you always know what&apos;s
          safe to spend and what&apos;s meant to grow.
        </p>

        {authed ? (
          <div className="guide-card">
            <h2 className="guide-card-title">You&apos;re signed in</h2>
            <p className="guide-card-sub">
              Download the framework as a PDF. Save it, share it, come back to it.
            </p>
            <DownloadButton />
          </div>
        ) : (
          <PaywallGate
            slug="guide"
            title="Get the framework"
            subtitle="Sign in or create a free account to download the PDF."
          />
        )}
      </div>
    </div>
  );
}
