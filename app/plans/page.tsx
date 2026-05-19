"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { PLANS, type Plan, effectivePrice } from "@/app/lib/plans";
import type { BillingInfo } from "@/app/lib/db/types";
import "./plans.css";

declare global {
  interface Window { Razorpay: any; }
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
  const [step, setStep]             = useState<Step>("plans");
  const [selectedPlan, setSelected] = useState<Plan | null>(null);
  const [seatCounts, setSeatCounts] = useState<Record<string, number>>({});
  const [scriptReady, setScriptReady] = useState(false);
  const [isTestUser, setIsTestUser] = useState(false);
  const [billing, setBilling]       = useState<BillingInfo>(EMPTY_BILLING);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors]         = useState<Partial<BillingInfo>>({});

  useEffect(() => {
    fetch("/api/orders/seats").then(r => r.json()).then(setSeatCounts).catch(() => {});
    fetch("/api/me").then(r => r.json()).then(d => setIsTestUser(d.isTestUser === true)).catch(() => {});
  }, []);

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
      body: JSON.stringify({ planId: selectedPlan.id }),
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
      handler: async (response: any) => {
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
    opts: { placeholder?: string; optional?: boolean; type?: string } = {}
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
          onChange={ev => { setBilling(b => ({ ...b, [key]: ev.target.value })); setErrors(er => ({ ...er, [key]: undefined })); }}
        />
        {errors[key] && <span className="bf-error">{errors[key]}</span>}
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" onReady={() => setScriptReady(true)} />

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
                const taken   = seatCounts[plan.id] ?? (plan.id === "founding" ? 34 : 0);
                const pct     = plan.maxSeats ? Math.min((taken / plan.maxSeats) * 100, 100) : 0;
                const soldOut = plan.maxSeats !== null && taken >= plan.maxSeats;

                return (
                  <div key={plan.id} className={`plan-card ${plan.featured ? "featured" : ""}`}>
                    <span className={`plan-badge ${plan.badgeStyle}`}>{plan.badge}</span>
                    <p className="plan-name">{plan.name}</p>
                    <p className="plan-tagline">{plan.tagline}</p>

                    <div className="plan-price-row">
                      <span className="plan-price">₹{effectivePrice(plan, isTestUser).toLocaleString("en-IN")}</span>
                      {!isTestUser && plan.originalPriceRs && <span className="plan-price-orig">₹{plan.originalPriceRs.toLocaleString("en-IN")}</span>}
                    </div>
                    <p className="plan-seat-range">{plan.seatRange}</p>

                    {plan.maxSeats !== null && (
                      <>
                        <div className="plan-seats-bar">
                          <div className="plan-seats-fill" style={{ width: `${pct}%` }} />
                        </div>
                        <p className="plan-seats-txt">
                          {soldOut ? "All seats taken" : `${taken} of ${plan.maxSeats} seats taken`}
                        </p>
                      </>
                    )}

                    <hr className="plan-divider" />
                    <p className="plan-features-label">What's included</p>
                    <ul className="plan-features">
                      {plan.features.map((f, i) => (
                        <li key={i} className={f.highlight ? "highlight" : ""}>
                          <span className="plan-check">✓</span>{f.text}
                        </li>
                      ))}
                    </ul>

                    {plan.waitlist ? (
                      <button className="plan-btn waitlist" disabled>Join waitlist — coming soon</button>
                    ) : soldOut ? (
                      <button className="plan-btn" disabled>Sold out</button>
                    ) : (
                      <button
                        className={`plan-btn ${plan.featured ? "primary" : ""}`}
                        onClick={() => handleSelectPlan(plan)}
                        disabled={!scriptReady}
                      >
                        Enroll at ₹{effectivePrice(plan, isTestUser).toLocaleString("en-IN")}
                      </button>
                    )}
                  </div>
                );
              })}
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

            {/* Selected plan summary pill */}
            <div className="bf-plan-summary">
              <div>
                <span className={`plan-badge ${selectedPlan.badgeStyle}`} style={{ marginBottom: 0 }}>{selectedPlan.badge}</span>
                <span className="bf-plan-name">{selectedPlan.name}</span>
              </div>
              <div className="bf-plan-price">
                ₹{effectivePrice(selectedPlan, isTestUser).toLocaleString("en-IN")}
              </div>
            </div>

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
              {field("PAN", "pan", { placeholder: "ABCDE1234F", optional: true })}

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
                  🧪 Test account — ₹10 test payment
                </p>
              )}
            </form>
          </div>
        )}

      </div>
    </>
  );
}
