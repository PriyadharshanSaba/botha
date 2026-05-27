"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { paiseToWords } from "@/app/lib/billing/words";
import type { BuyerSnapshot } from "@/app/lib/db/types";
import "./billing.css";

type BillingData = {
  user: { firstName: string; lastName: string; email: string } | null;
  orderId: string;
  paymentId: string;
  planId: string;
  planName: string;
  status: string;
  activatedAt: string;
  invoiceNumber: string | null;
  invoiceId: string;
  pdfAvailable: boolean;
  placeOfSupply: string;
  buyer: BuyerSnapshot;
  totalPaise: number;
  breakdown: {
    taxableRs: number;
    cgstRs: number;
    sgstRs: number;
    igstRs: number;
    totalRs: number;
  };
};

export default function BillingPage() {
  return (
    <Suspense>
      <BillingContent />
    </Suspense>
  );
}

function BillingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  const [data, setData] = useState<BillingData | null>(null);
  const [error, setError] = useState("");
  const [navigating, setNavigating] = useState(false);

  function startLearning() {
    if (navigating) return;
    setNavigating(true);
    router.push("/modules");
  }

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

  const { breakdown } = data;
  const words = paiseToWords(data.totalPaise);

  const fmt = (n: number) => "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2 });

  const activatedDate = data.activatedAt
    ? new Date(data.activatedAt).toLocaleDateString("en-IN", {
        day: "numeric", month: "long", year: "numeric",
      })
    : "—";

  const invoiceNum = data.invoiceNumber ?? "—";

  const shortOrderId  = data.orderId?.replace("order_", "") ?? "—";
  const shortPaymentId = data.paymentId && data.paymentId !== "bypass"
    ? data.paymentId.replace("pay_", "")
    : null;

  return (
    <div className="billing-page">
      <div className="billing-shell">

        {/* ── Success badge ── */}
        <div className="billing-success-badge">
          <div className="billing-check-circle">✓</div>
          <div className="billing-success-text">
            <h1>You're all set{data.user ? `, ${data.user.firstName}` : ""}!</h1>
            <p>Payment confirmed — your Bodha access is now active. We will send you the invoice copy to your email.</p>
          </div>
        </div>

        {/* ── Invoice ── */}
        <div className="inv-wrap">

          {/* Header */}
          <div className="inv-header">
            <div>
              <div className="brand-name">Bodha Ventures</div>
              <div className="brand-tag">LLP &nbsp;·&nbsp; Personal Finance &amp; Virtual CFO</div>
            </div>
            <div className="inv-title-block">
              <div className="inv-title">Invoice</div>
              <div className="inv-num">{invoiceNum}</div>
            </div>
          </div>

          <div className="accent-bar" />

          {/* Parties */}
          <div className="parties">
            <div className="party-block">
              <div className="party-label">Supplier</div>
              <div className="party-name">Bodha Ventures LLP</div>
              <div className="party-detail">
                29, 6th Cross, 9th Main,<br />
                Jalahalli Village,<br />
                Bengaluru — 560013<br />
                Karnataka, India<br />
                info@bodhaventures.in
              </div>
              <span className="gstin-badge">GSTIN: 29ABGFB6431R1ZT</span>
              <span className="gstin-badge" style={{ marginLeft: 6 }}>PAN: ABGFB6431R</span>
            </div>
            <div className="party-block">
              <div className="party-label">Bill To</div>
              <div className="party-name">{data.buyer.name}</div>
              <div className="party-detail">
                {data.buyer.address ? (
                  <>
                    {data.buyer.address.line1}
                    {data.buyer.address.line2 ? <><br />{data.buyer.address.line2}</> : null}
                    <br />
                    {data.buyer.address.city} — {data.buyer.address.pincode}<br />
                    {data.buyer.address.state}, {data.buyer.address.country}<br />
                  </>
                ) : null}
                {data.buyer.email ?? data.user?.email ?? ""}
              </div>
              {data.buyer.gstin ? (
                <span className="gstin-badge">GSTIN: {data.buyer.gstin}</span>
              ) : null}
            </div>
          </div>

          {/* Meta */}
          <div className="inv-meta">
            <div>
              <div className="meta-label">Invoice No.</div>
              <div className="meta-value">{invoiceNum}</div>
            </div>
            <div>
              <div className="meta-label">Invoice Date</div>
              <div className="meta-value">{activatedDate}</div>
            </div>
          </div>

          {/* Place of supply */}
          <div className="amount-words" style={{ marginBottom: 10 }}>
            <strong>Place of Supply:</strong> {data.placeOfSupply}
          </div>

          {/* Line items */}
          <div className="items-section">
            <table className="items-table">
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>Description</th>
                  <th>HSN/SAC</th>
                  <th>Qty</th>
                  <th>Unit</th>
                  <th>Rate (₹)</th>
                  <th>Taxable (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="item-name">{data.planName} — Bodha Personal Finance Program</div>
                    <div className="item-desc">
                      Written course — English + Kannada. Lifetime access.<br />
                    </div>
                  </td>
                  <td>999293</td>
                  <td>1</td>
                  <td>Nos</td>
                  <td>{breakdown.taxableRs.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                  <td>{breakdown.taxableRs.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="totals-wrap">
            <div className="amounts">
              <div className="amount-row">
                <span>Taxable Total</span>
                <span>{fmt(breakdown.taxableRs)}</span>
              </div>
              {breakdown.cgstRs > 0 || breakdown.sgstRs > 0 ? (
                <>
                  <div className="amount-row">
                    <span>CGST @ 9%</span>
                    <span>{fmt(breakdown.cgstRs)}</span>
                  </div>
                  <div className="amount-row">
                    <span>SGST @ 9%</span>
                    <span>{fmt(breakdown.sgstRs)}</span>
                  </div>
                </>
              ) : breakdown.igstRs > 0 ? (
                <div className="amount-row">
                  <span>IGST @ 18%</span>
                  <span>{fmt(breakdown.igstRs)}</span>
                </div>
              ) : null}
              <div className="amount-row total">
                <span>Grand Total</span>
                <span>{fmt(breakdown.totalRs)}</span>
              </div>
            </div>
          </div>

          {/* Amount in words */}
          <div className="amount-words">
            <strong>Amount in words:</strong> {words}
          </div>

          {/* Payment details */}
          <div className="info-section">
            <div className="info-title">Payment Details</div>
            <div className="info-row"><span>Payment Mode</span><span>Online (Razorpay)</span></div>
            <div className="info-row"><span>Order ID</span><span>#{shortOrderId}</span></div>
            {shortPaymentId && (
              <div className="info-row"><span>Payment ID</span><span>#{shortPaymentId}</span></div>
            )}
            <div className="info-row">
              <span>Payment Status</span>
              <span className="status-paid">Paid</span>
            </div>
          </div>

          {/* Declaration */}
          <div className="declaration-section">
            <div className="declaration-title">Declaration</div>
            <div className="declaration-text">
              We declare that this invoice shows the actual price of the goods / services described and that all particulars are true and correct. This is a computer-generated invoice. All sales are final — course purchases are non-refundable.
            </div>
          </div>

          {/* Invoice footer */}
          <div className="inv-footer">
            <div className="footer-brand">Bodha Ventures LLP</div>
            <div className="footer-note">Thank you for your trust &amp; business.</div>
          </div>

        </div>

        {/* ── CTA ── */}
        <div className="billing-cta">
          <button
            type="button"
            className="billing-btn-primary"
            onClick={startLearning}
            disabled={navigating}
            aria-busy={navigating}
          >
            {navigating ? (
              <>
                <span className="billing-btn-spinner" aria-hidden="true" />
                Loading your modules…
              </>
            ) : (
              <>Start learning →</>
            )}
          </button>
          {data.pdfAvailable ? (
            <a
              href={`/api/billing/invoice/${data.invoiceId}/pdf`}
              className="billing-btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download invoice (PDF)
            </a>
          ) : (
            <p className="billing-support" style={{ fontSize: 12 }}>
              PDF download unavailable — contact support if you need a copy.
            </p>
          )}
          <p className="billing-support">
            Questions? Email us at{" "}
            <a href="mailto:info@bodhaventures.in">info@bodhaventures.in</a>
          </p>
        </div>

      </div>
    </div>
  );
}
