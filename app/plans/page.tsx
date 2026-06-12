"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import { PLANS, type Plan, effectivePrice } from "@/app/lib/plans";
import type { BillingInfo } from "@/app/lib/db/types";
import { useLanguage } from "@/app/context/LanguageContext";
import SketchIcon from "@/app/components/SketchIcon";
import "./plans.css";

type ReferralStatus =
  | { state: "idle" }
  | { state: "checking" }
  | { state: "applied"; code: string; description: string | null; discountPercent: number | null; discountFlatPaise: number | null }
  | { state: "error"; message: string };

const MIN_PAISE = 100; // ₹1 Razorpay floor

/** Compute per-plan discounted price for the currently applied referral. */
function discountedFor(plan: Plan, isTest: boolean, ref: ReferralStatus) {
  const basePaise = Math.round(effectivePrice(plan, isTest)) * 100;
  if (ref.state !== "applied") {
    return { basePaise, discountPaise: 0, finalPaise: basePaise };
  }
  let discountPaise = 0;
  if (ref.discountPercent != null) {
    discountPaise = Math.round((basePaise * ref.discountPercent) / 100);
  } else if (ref.discountFlatPaise != null) {
    discountPaise = ref.discountFlatPaise;
  }
  let finalPaise = basePaise - discountPaise;
  if (finalPaise < MIN_PAISE) {
    finalPaise = MIN_PAISE;
    discountPaise = basePaise - MIN_PAISE;
  }
  return { basePaise, discountPaise, finalPaise };
}

type RazorpayPaymentResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: { contact?: string; name?: string; email?: string };
  theme?: { color?: string };
  handler: (response: RazorpayPaymentResponse) => void;
  modal?: { ondismiss?: () => void };
};

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (...args: unknown[]) => void) => void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand",
  "West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

type Step = "plans" | "billing";

const EMPTY_BILLING: BillingInfo = {
  phone: "", addressLine1: "", addressLine2: "", city: "", state: "", pincode: "", gstin: "", pan: "",
};

export default function PlansPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const [step, setStep]             = useState<Step>("plans");
  const [selectedPlan, setSelected] = useState<Plan | null>(null);
  const [seatCounts, setSeatCounts] = useState<Record<string, number>>({});
  const [scriptReady, setScriptReady] = useState(false);
  const [isTestUser, setIsTestUser] = useState(false);
  const [billing, setBilling]       = useState<BillingInfo>(EMPTY_BILLING);
  const [submitting, setSubmitting] = useState(false);
  const [finalizing, setFinalizing] = useState(false);
  const [errors, setErrors]         = useState<Partial<BillingInfo>>({});
  const [refInput, setRefInput]     = useState("");
  const [refStatus, setRefStatus]   = useState<ReferralStatus>({ state: "idle" });

  useEffect(() => {
    fetch("/api/orders/seats").then(r => r.json()).then(setSeatCounts).catch(() => {});
    fetch("/api/me").then(r => r.json()).then(d => setIsTestUser(d.isTestUser === true)).catch(() => {});
  }, []);

  // Prefill referral code from ?ref= query param
  useEffect(() => {
    const fromUrl = searchParams.get("ref");
    if (fromUrl) setRefInput(fromUrl.trim().toUpperCase().slice(0, 32));
  }, [searchParams]);

  async function applyReferralCode() {
    if (!refInput) return;
    setRefStatus({ state: "checking" });
    try {
      const r = await fetch("/api/referral/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: refInput }),
      });
      const j = await r.json();
      if (j.valid) {
        setRefStatus({
          state: "applied",
          code: j.code,
          description: j.description ?? null,
          discountPercent: j.discountPercent ?? null,
          discountFlatPaise: j.discountFlatPaise ?? null,
        });
      } else {
        setRefStatus({ state: "error", message: j.error ?? t("invalidCode") });
      }
    } catch {
      setRefStatus({ state: "error", message: "Network error" });
    }
  }

  // ── Step 1: pick a plan ──────────────────────────────────────────────
  function handleSelectPlan(plan: Plan) {
    setSelected(plan);
    setStep("billing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Step 2: validate billing form ────────────────────────────────────
  function validate() {
    const e: Partial<BillingInfo> = {};
    if (!billing.phone || !/^\d{10}$/.test(billing.phone))  e.phone = "Enter a valid 10-digit number";
    if (!billing.addressLine1)  e.addressLine1 = "Required";
    if (!billing.city)          e.city         = "Required";
    if (!billing.state)         e.state        = "Required";
    if (!billing.pincode || !/^\d{6}$/.test(billing.pincode)) e.pincode = "Enter a valid 6-digit PIN";
    if (billing.gstin && !/^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(billing.gstin)) {
      e.gstin = "Enter a valid 15-character GSTIN";
    }
    if (billing.pan && !/^[A-Z]{5}\d{4}[A-Z]$/.test(billing.pan)) {
      e.pan = "Enter a valid 10-character PAN";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Step 2 submit: save billing info, then payment or bypass ─────────
  async function handleBillingSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || !selectedPlan) return;
    setSubmitting(true);

    // Save billing info
    const saveRes = await fetch("/api/users/billing-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(billing),
    });
    if (!saveRes.ok) {
      setSubmitting(false);
      alert("Could not save billing details. Please try again.");
      return;
    }

    // Create Razorpay order (test users get ₹10 price server-side)
    const orderRes = await fetch("/api/orders/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        planId: selectedPlan.id,
        referralCode: refStatus.state === "applied" ? refStatus.code : undefined,
      }),
    });
    if (!orderRes.ok) {
      const err = await orderRes.json().catch(() => ({}));
      alert(err.error || "Could not start checkout. Please try again.");
      setSubmitting(false);
      return;
    }

    const { orderId, amount, currency, keyId, planName } = await orderRes.json();
    setSubmitting(false);

    const options = {
      key: keyId,
      amount,
      currency,
      name: "Bodha",
      description: planName,
      order_id: orderId,
      prefill: { contact: billing.phone },
      theme: { color: "#1D9E75" },
      handler: async (response: RazorpayPaymentResponse) => {
        setFinalizing(true);
        const verifyRes = await fetch("/api/orders/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        if (verifyRes.ok) {
          router.push(`/billing?ref=${orderId}`);
        } else {
          setFinalizing(false);
          alert("Payment verification failed. Contact support with payment ID: " + response.razorpay_payment_id);
        }
      },
      modal: { ondismiss: () => setSubmitting(false) },
    };

    new window.Razorpay(options).open();
  }

  function field(
    label: string,
    key: keyof BillingInfo,
    opts: { placeholder?: string; optional?: boolean; type?: string; uppercase?: boolean } = {}
  ) {
    return (
      <div className="bf-field">
        <label className="bf-label">
          {label}{opts.optional && <span className="bf-optional"> (optional)</span>}
        </label>
        <input
          className={`bf-input ${errors[key] ? "bf-input-error" : ""}`}
          type={opts.type ?? "text"}
          placeholder={opts.placeholder}
          value={(billing[key] as string) ?? ""}
          onChange={ev => {
            const v = opts.uppercase ? ev.target.value.toUpperCase() : ev.target.value;
            setBilling(b => ({ ...b, [key]: v }));
            setErrors(er => ({ ...er, [key]: undefined }));
          }}
        />
        {errors[key] && <span className="bf-error">{errors[key]}</span>}
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" onReady={() => setScriptReady(true)} />

      {finalizing && (
        <div className="plans-finalizing">
          <div className="plans-finalizing-card">
            <div className="plans-finalizing-spinner" />
            <div className="plans-finalizing-title">Confirming your payment…</div>
            <div className="plans-finalizing-sub">Setting up your access. Do not close this window.</div>
          </div>
        </div>
      )}

      <div className="plans-page">

        {/* ── STEP 1: Plan grid ── */}
        {step === "plans" && (
          <>
            <div className="plans-header">
              <span className="plans-eyebrow">Bodha Personal Finance Program</span>
              <h1 className="plans-title">Invest in your financial future</h1>
              <p className="plans-subtitle">
                One-time payment. Lifetime access. All courses, tools, and community — in English and Kannada.
              </p>
            </div>

            <div className="plans-grid">
              {PLANS.map((plan) => {
                const taken   = seatCounts[plan.id] ?? (plan.id === "founding" ? 0 : 0);
                const pct     = plan.maxSeats ? Math.min((taken / plan.maxSeats) * 100, 100) : 0;
                const soldOut = plan.maxSeats !== null && taken >= plan.maxSeats;
                const d       = discountedFor(plan, isTestUser, refStatus);
                const finalRs = d.finalPaise / 100;
                const baseRs  = d.basePaise / 100;
                const hasDiscount = d.discountPaise > 0;

                return (
                  <div key={plan.id} className={`plan-card ${plan.featured ? "featured" : ""}`}>
                    <span className={`plan-badge ${plan.badgeStyle}`}>{plan.badge}</span>
                    <p className="plan-name">{plan.name}</p>
                    {plan.tagline && <p className="plan-tagline">{plan.tagline}</p>}

                    <div className="plan-price-row">
                      <span className="plan-price">₹{finalRs.toLocaleString("en-IN")}</span>
                      {hasDiscount
                        ? <span className="plan-price-orig">₹{baseRs.toLocaleString("en-IN")}</span>
                        : (!isTestUser && plan.originalPriceRs && <span className="plan-price-orig">₹{plan.originalPriceRs.toLocaleString("en-IN")}</span>)}
                    </div>
                    <p className="plan-gst-note">
                      + 18% GST
                      <span className="plan-gst-incl">
                        (₹{Math.round(finalRs * 1.18).toLocaleString("en-IN")} inclusive of GST)
                      </span>
                    </p>

                    {plan.maxSeats !== null ? (
                      <>
                        <div className="plan-seats-bar">
                          <div className="plan-seats-fill" style={{ width: `${pct}%` }} />
                        </div>
                        <p className="plan-seats-txt">
                          {soldOut ? "All seats taken" : `${taken} of ${plan.maxSeats} seats taken`}
                        </p>
                      </>
                    ) : (
                      <div className="plan-seats-spacer" aria-hidden="true" />
                    )}

                    <hr className="plan-divider" />
                    <p className="plan-features-label">What&apos;s included</p>
                    <ul className="plan-features">
                      {plan.features.map((f, i) => (
                        <li key={i} className={f.highlight ? "highlight" : ""}>
                          <span className="plan-check">✓</span>{f.text}
                        </li>
                      ))}
                    </ul>

                    {plan.waitlist ? (
                      <button className="plan-btn waitlist" disabled>Join The Club — coming soon</button>
                    ) : soldOut ? (
                      <button className="plan-btn" disabled>Sold out</button>
                    ) : (
                      <button
                        className={`plan-btn ${plan.featured ? "primary" : ""}`}
                        onClick={() => handleSelectPlan(plan)}
                        disabled={!scriptReady}
                      >
                        Enroll at ₹{finalRs.toLocaleString("en-IN")}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Referral code — plan-agnostic; discount reflected on each card */}
            <div className="plans-referral">
              <div className="bf-referral-row">
                <input
                  type="text"
                  className="bf-input"
                  placeholder={t("referralCode")}
                  value={refInput}
                  onChange={(e) => {
                    setRefInput(e.target.value.toUpperCase().slice(0, 32));
                    if (refStatus.state !== "idle") setRefStatus({ state: "idle" });
                  }}
                  disabled={refStatus.state === "applied"}
                  style={{ flex: 1 }}
                />
                {refStatus.state === "applied" ? (
                  <button
                    type="button"
                    className="plan-btn"
                    onClick={() => { setRefInput(""); setRefStatus({ state: "idle" }); }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="plan-btn primary"
                    disabled={!refInput || refStatus.state === "checking"}
                    onClick={applyReferralCode}
                  >
                    {refStatus.state === "checking" ? "…" : t("applyCode")}
                  </button>
                )}
              </div>
              {refStatus.state === "applied" && (
                <div className="bf-referral-applied">
                  ✓ {refStatus.code} — {refStatus.description ?? t("codeApplied")}
                  {refStatus.discountPercent != null && ` (${refStatus.discountPercent}% off)`}
                  {refStatus.discountFlatPaise != null && ` (− ₹${(refStatus.discountFlatPaise / 100).toLocaleString("en-IN")})`}
                </div>
              )}
              {refStatus.state === "error" && (
                <div className="bf-referral-error">{refStatus.message}</div>
              )}
            </div>

            <p className="plans-already">
              Already enrolled? <a href="/signin">Sign in to continue learning →</a>
            </p>
          </>
        )}

        {/* ── STEP 2: Billing info form ── */}
        {step === "billing" && selectedPlan && (
          <div className="bf-shell">

            {/* Back */}
            <button className="bf-back" onClick={() => { setStep("plans"); setErrors({}); }}>
              ← Back to plans
            </button>

            {/* Selected plan summary pill — reflects applied referral discount */}
            {(() => {
              const d = discountedFor(selectedPlan, isTestUser, refStatus);
              const finalRs = d.finalPaise / 100;
              const baseRs  = d.basePaise / 100;
              const hasDiscount = d.discountPaise > 0;
              return (
                <div className="bf-plan-summary">
                  <div>
                    <span className={`plan-badge ${selectedPlan.badgeStyle}`} style={{ marginBottom: 0 }}>{selectedPlan.badge}</span>
                    <span className="bf-plan-name">{selectedPlan.name}</span>
                  </div>
                  <div className="bf-plan-price">
                    {hasDiscount && (
                      <span className="plan-price-orig" style={{ marginRight: 8 }}>
                        ₹{baseRs.toLocaleString("en-IN")}
                      </span>
                    )}
                    ₹{finalRs.toLocaleString("en-IN")}
                  </div>
                </div>
              );
            })()}

            {/* Applied referral indicator (input lives on step 1) */}
            {refStatus.state === "applied" && (
              <div className="bf-referral-applied" style={{ marginBottom: 12 }}>
                ✓ {refStatus.code} — {refStatus.description ?? t("codeApplied")}
                {refStatus.discountPercent != null && ` (${refStatus.discountPercent}% off)`}
                {refStatus.discountFlatPaise != null && ` (− ₹${(refStatus.discountFlatPaise / 100).toLocaleString("en-IN")})`}
              </div>
            )}

            {/* GST breakdown — updates live with state selection */}
            {!isTestUser && (() => {
              const taxable = Math.round(discountedFor(selectedPlan, isTestUser, refStatus).finalPaise / 100);
              const tax     = Math.round(taxable * 0.18);
              const total   = taxable + tax;
              const intra   = billing.state === "Karnataka";
              const half    = Math.floor(tax / 2);
              const cgst    = half;
              const sgst    = tax - half;
              return (
                <div className="bf-tax-breakdown">
                  <div className="bf-tax-row"><span>Taxable value</span><span>₹{taxable.toLocaleString("en-IN")}</span></div>
                  {billing.state === "" ? (
                    <div className="bf-tax-row bf-tax-muted"><span>GST @ 18% (select state for split)</span><span>₹{tax.toLocaleString("en-IN")}</span></div>
                  ) : intra ? (
                    <>
                      <div className="bf-tax-row"><span>CGST @ 9%</span><span>₹{cgst.toLocaleString("en-IN")}</span></div>
                      <div className="bf-tax-row"><span>SGST @ 9%</span><span>₹{sgst.toLocaleString("en-IN")}</span></div>
                    </>
                  ) : (
                    <div className="bf-tax-row"><span>IGST @ 18%</span><span>₹{tax.toLocaleString("en-IN")}</span></div>
                  )}
                  <div className="bf-tax-row bf-tax-total"><span>Total payable</span><span>₹{total.toLocaleString("en-IN")}</span></div>
                </div>
              );
            })()}

            <form className="bf-form" onSubmit={handleBillingSubmit} noValidate>
              <div className="bf-section-label">Billing details</div>

              {field("Phone number", "phone", { placeholder: "9876543210", type: "tel" })}

              {field("Address line 1", "addressLine1", { placeholder: "House / flat / street" })}
              {field("Address line 2", "addressLine2", { placeholder: "Landmark, area", optional: true })}

              <div className="bf-row">
                {field("City", "city", { placeholder: "Bengaluru" })}
                <div className="bf-field">
                  <label className="bf-label">State</label>
                  <select
                    className={`bf-input bf-select ${errors.state ? "bf-input-error" : ""}`}
                    value={billing.state}
                    onChange={ev => { setBilling(b => ({ ...b, state: ev.target.value })); setErrors(er => ({ ...er, state: undefined })); }}
                  >
                    <option value="">Select state</option>
                    {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <span className="bf-error">{errors.state}</span>}
                </div>
              </div>

              {field("PIN code", "pincode", { placeholder: "560001" })}

              <div className="bf-section-label" style={{ marginTop: 24 }}>Tax details <span className="bf-optional">(optional — for business purchase)</span></div>
              {field("GSTIN", "gstin", { placeholder: "29ABCDE1234F1Z5", optional: true, uppercase: true })}
              {field("PAN", "pan", { placeholder: "ABCDE1234F", optional: true, uppercase: true })}

              <button
                type="submit"
                className="plan-btn primary"
                style={{ marginTop: 28, height: 48, fontSize: 15 }}
                disabled={submitting}
              >
                {submitting ? "Please wait…" : "Continue to payment →"}
              </button>

              {isTestUser && (
                <p style={{ textAlign: "center", fontSize: 12, color: "#92400e", marginTop: 10 }}>
                  <span style={{ display: "inline-flex", verticalAlign: "middle", marginRight: 6, color: "#92400e", lineHeight: 0 }}><SketchIcon name="flask" size={14} /></span>Test account — ₹10 test payment
                </p>
              )}
            </form>
          </div>
        )}

      </div>
    </>
  );
}
