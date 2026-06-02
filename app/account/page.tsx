"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./account.css";

type AccountData = {
  user: { firstName: string; lastName: string; email: string };
  subscribed: boolean;
  planId: string | null;
  referral: {
    canRefer: boolean;
    code: string | null;
    offer: {
      description: string | null;
      discountPercent: number | null;
      discountFlatPaise: number | null;
      active: boolean;
      expiresAt: string | null;
    } | null;
    stats: { count: number; totalDiscountPaise: number };
  };
};

function formatOffer(offer: NonNullable<AccountData["referral"]["offer"]>): string {
  if (offer.discountPercent != null) return `${offer.discountPercent}% off`;
  if (offer.discountFlatPaise != null) {
    return `₹${(offer.discountFlatPaise / 100).toLocaleString("en-IN")} off`;
  }
  return "Discount";
}

export default function AccountPage() {
  const router = useRouter();
  const [data, setData] = useState<AccountData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/account", { credentials: "include" })
      .then((r) => {
        if (r.status === 401) {
          router.replace("/signin");
          return null;
        }
        if (!r.ok) throw new Error("load_failed");
        return r.json();
      })
      .then((d) => { if (d) setData(d); })
      .catch(() => setError("Couldn't load your account."));
  }, [router]);

  function copyCode() {
    if (!data?.referral.code) return;
    navigator.clipboard.writeText(data.referral.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }).catch(() => { /* ignored */ });
  }

  if (error) {
    return (
      <div className="account-page">
        <div className="account-shell">
          <p className="account-error">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="account-page">
        <div className="account-shell">
          <p className="account-loading">Loading…</p>
        </div>
      </div>
    );
  }

  const { user, subscribed, referral } = data;

  return (
    <div className="account-page">
      <div className="account-shell">
        <h1 className="account-title">Account</h1>

        <section className="account-card">
          <h2 className="account-card-title">Profile</h2>
          <dl className="account-list">
            <div className="account-list-row">
              <dt>Name</dt>
              <dd>{user.firstName} {user.lastName}</dd>
            </div>
            <div className="account-list-row">
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div className="account-list-row">
              <dt>Subscription</dt>
              <dd>{subscribed ? "Active" : <Link href="/plans" className="account-link">View plans →</Link>}</dd>
            </div>
          </dl>
        </section>

        {referral.canRefer && referral.code && (
          <section className="account-card">
            <h2 className="account-card-title">Your referral code</h2>
            <div className="account-referral-box">
              <div className="account-referral-code">{referral.code}</div>
              <button className="account-copy-btn" onClick={copyCode}>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            {referral.offer && (
              <p className="account-referral-meta">
                {formatOffer(referral.offer)}
                {referral.offer.description ? ` — ${referral.offer.description}` : ""}
                {!referral.offer.active && <span className="account-inactive"> · inactive</span>}
              </p>
            )}
            <div className="account-stats">
              <div className="account-stat">
                <div className="account-stat-value">{referral.stats.count}</div>
                <div className="account-stat-label">Redemptions</div>
              </div>
              <div className="account-stat">
                <div className="account-stat-value">
                  ₹{(referral.stats.totalDiscountPaise / 100).toLocaleString("en-IN")}
                </div>
                <div className="account-stat-label">Discount given</div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
