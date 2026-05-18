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
  invoiceNumber: string | null;
  breakdown: { baseRs: number; gstRs: number; gstRate: number; totalRs: number };
};

function rupeesToWords(amount: number): string {
  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function inW(n: number): string {
    if (n === 0) return "";
    if (n < 20) return a[n] + " ";
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "") + " ";
    return a[Math.floor(n / 100)] + " Hundred " + inW(n % 100);
  }

  if (amount === 0) return "Rupees Zero Only";
  const crore = Math.floor(amount / 10000000);
  const lakh  = Math.floor((amount % 10000000) / 100000);
  const thou  = Math.floor((amount % 100000) / 1000);
  const rest  = Math.floor(amount % 1000);
  let r = "";
  if (crore) r += inW(crore) + "Crore ";
  if (lakh)  r += inW(lakh)  + "Lakh ";
  if (thou)  r += inW(thou)  + "Thousand ";
  if (rest)  r += inW(rest);
  return ("Rupees " + r.trim() + " Only").replace(/\s+/g, " ");
}

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

  const { breakdown } = data;
  const cgstRs   = breakdown.gstRs / 2;
  const sgstRs   = breakdown.gstRs / 2;
  const roundOff = Math.round((breakdown.totalRs - breakdown.baseRs - breakdown.gstRs) * 100) / 100;
  const words    = rupeesToWords(Math.round(breakdown.totalRs));

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
              <div className="inv-title">Tax Invoice</div>
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
                bodhaventures@gmail.com
              </div>
              <span className="gstin-badge">PAN: ABGFB6431R</span>
            </div>
            <div className="party-block">
              <div className="party-label">Bill To</div>
              {data.user ? (
                <>
                  <div className="party-name">{data.user.firstName} {data.user.lastName}</div>
                  <div className="party-detail">{data.user.email}</div>
                </>
              ) : (
                <div className="party-detail">—</div>
              )}
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
            <div>
              <div className="meta-label">Place of Supply</div>
              <div className="meta-value">Karnataka (29)</div>
            </div>
            <div>
              <div className="meta-label">Supply Type</div>
              <div className="meta-value">Intra-state</div>
            </div>
            <div>
              <div className="meta-label">Rev. Charge</div>
              <div className="meta-value" style={{ color: "#2d7a3a" }}>No</div>
            </div>
          </div>

          {/* Line items */}
          <div className="items-section">
            <table className="items-table">
              <thead>
                <tr>
                  <th style={{ width: "44%" }}>Description of Goods / Services</th>
                  <th>HSN/SAC</th>
                  <th>Qty</th>
                  <th>Rate (₹)</th>
                  <th>Taxable Value (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="item-name">{data.planName} — Bodha Personal Finance Program</div>
                    <div className="item-desc">
                      Written course — English + Kannada. Lifetime access.<br />
                      All tools included. WhatsApp community &amp; doubt support for 1 year.
                    </div>
                    <span className="item-hsn">SAC: 999293</span>
                  </td>
                  <td>999293</td>
                  <td>1</td>
                  <td>{fmt(breakdown.baseRs)}</td>
                  <td>{fmt(breakdown.baseRs)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="totals-wrap">
            <div>
              <div className="tax-title">GST Breakup</div>
              <table className="tax-table">
                <tbody>
                  <tr><td>Taxable Value</td><td>{fmt(breakdown.baseRs)}</td></tr>
                  <tr><td>CGST @ 9%</td><td>{fmt(cgstRs)}</td></tr>
                  <tr><td>SGST @ 9%</td><td>{fmt(sgstRs)}</td></tr>
                  <tr><td>Total GST</td><td>{fmt(breakdown.gstRs)}</td></tr>
                </tbody>
              </table>
              <div className="tax-note">
                * CGST + SGST applicable for intra-state supply.<br />
                * Tax payable on <strong>forward charge</strong> basis.
              </div>
            </div>
            <div className="amounts">
              <div className="amount-row"><span>Subtotal</span><span>{fmt(breakdown.baseRs)}</span></div>
              <div className="amount-row"><span>CGST (9%)</span><span>{fmt(cgstRs)}</span></div>
              <div className="amount-row"><span>SGST (9%)</span><span>{fmt(sgstRs)}</span></div>
              {roundOff !== 0 && (
                <div className="amount-row"><span>Round Off</span><span>{fmt(roundOff)}</span></div>
              )}
              <div className="amount-row total">
                <span>Total Amount</span>
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
            <div className="reverse-charge-box">
              <strong>Reverse Charge: <span style={{ color: "#2d7a3a" }}>Not Applicable</span></strong> — GST is payable by Bodha Ventures LLP under the forward charge mechanism per Section 9(3) &amp; 9(4) of CGST Act, 2017.
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
