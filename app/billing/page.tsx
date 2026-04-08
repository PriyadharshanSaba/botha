"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import "./billing.css";

type BillingData = {
  user: { firstName: string; lastName: string; email: string } | null;
  orderId: string;
  paymentId: string;
  planId: string;
  planName: string;
  status: string;
  activatedAt: string;
  breakdown: { baseRs: number; gstRs: number; gstRate: number; totalRs: number };
};

export default function BillingPage() {
  return (
    <Suspense>
      <BillingContent />
    </Suspense>
  );
}

function BillingContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  const [data, setData] = useState<BillingData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = ref ? `/api/billing?ref=${ref}` : "/api/billing";
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("not_found");
        return r.json();
      })
      .then(setData)
      .catch(() => setError("We couldn't load your receipt. Your payment is safe — contact support."));
  }, [ref]);

  if (error) {
    return (
      <div className="billing-page">
        <div className="billing-shell">
          <div className="billing-loading">{error}</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="billing-page">
        <div className="billing-shell">
          <div className="billing-loading">Loading your receipt…</div>
        </div>
      </div>
    );
  }

  const activatedDate = data.activatedAt
    ? new Date(data.activatedAt).toLocaleDateString("en-IN", {
        day: "numeric", month: "long", year: "numeric",
      })
    : "—";

  const shortOrderId = data.orderId?.replace("order_", "") ?? "—";
  const shortPaymentId = data.paymentId?.replace("pay_", "") ?? "—";

  return (
    <div className="billing-page">
      <div className="billing-shell">

        {/* ── Success header ── */}
        <div className="billing-success-badge">
          <div className="billing-check-circle">✓</div>
          <div className="billing-success-text">
            <h1>You're all set{data.user ? `, ${data.user.firstName}` : ""}!</h1>
            <p>Payment confirmed — your Bodha access is now active.</p>
          </div>
        </div>

        {/* ── Receipt card ── */}
        <div className="billing-receipt">

          {/* Header */}
          <div className="billing-receipt-header">
            <span className="billing-brand">Bodha</span>
            <span className="billing-invoice-label">Tax Invoice</span>
          </div>

          {/* Meta */}
          <div className="billing-meta">
            <div className="billing-meta-item">
              <label>Plan</label>
              <span>{data.planName}</span>
            </div>
            <div className="billing-meta-item">
              <label>Date</label>
              <span>{activatedDate}</span>
            </div>
            <div className="billing-meta-item">
              <label>Order ID</label>
              <span title={data.orderId}>#{shortOrderId}</span>
            </div>
            <div className="billing-meta-item">
              <label>Payment ID</label>
              <span title={data.paymentId}>#{shortPaymentId}</span>
            </div>
            {data.user && (
              <div className="billing-meta-item" style={{ gridColumn: "1 / -1" }}>
                <label>Billed to</label>
                <span>{data.user.firstName} {data.user.lastName} · {data.user.email}</span>
              </div>
            )}
          </div>

          {/* Line items */}
          <div className="billing-items">
            <div className="billing-item-row">
              <span>{data.planName} — course access</span>
              <span>₹{data.breakdown.baseRs.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="billing-item-row">
              <span>GST ({data.breakdown.gstRate}%)</span>
              <span>₹{data.breakdown.gstRs.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="billing-item-row total">
              <span>Total paid</span>
              <span>₹{data.breakdown.totalRs.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="billing-receipt-footer">
            <p>
              Bodha Ventures LLP · GSTIN 29AAXXX · Bengaluru, Karnataka · India
              <br />
              This is a system-generated invoice. For queries write to{" "}
              <a href="mailto:support@bodha.in" style={{ color: "var(--gold)" }}>support@bodha.in</a>.
            </p>
          </div>
        </div>

        {/* ── CTAs ── */}
        <div className="billing-cta">
          <Link href="/modules" className="billing-btn-primary">
            Start learning →
          </Link>
          <p className="billing-support">
            Questions? Email us at{" "}
            <a href="mailto:support@bodha.in">support@bodha.in</a>
          </p>
        </div>

      </div>
    </div>
  );
}
