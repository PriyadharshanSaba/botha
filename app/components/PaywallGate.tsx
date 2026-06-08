// app/components/PaywallGate.tsx
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useOtpInput } from "@/app/lib/hooks/useOtpInput";
import TermsModal from "./TermsModal";

interface Props {
  slug: string;
}

type Mode = "email" | "otp-login" | "name" | "otp-signup";

export default function PaywallGate({ slug }: Props) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("email");
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const otp = useOtpInput();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);

  // Trigger slide-up when sentinel becomes 70% visible.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.intersectionRatio >= 0.7)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.7, 1] }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Move focus into the appropriate input when the gate becomes visible or mode changes.
  useEffect(() => {
    if (!visible) return;
    if (mode === "email") emailInputRef.current?.focus();
    else if (mode === "name") firstNameRef.current?.focus();
    // OTP modes auto-focus the first box via inputProps (its `id` is set; we
    // explicitly focus the first OTP box below).
    else if (mode === "otp-login" || mode === "otp-signup") {
      document.getElementById("paywall-otp-0")?.focus();
    }
  }, [visible, mode]);

  async function submitEmail(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Try again.");
        return;
      }
      if (data.exists) {
        // Existing verified user → send login OTP.
        const loginRes = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!loginRes.ok) {
          const ld = await loginRes.json().catch(() => ({}));
          if (ld.error === "not_registered") {
            // Race: check-email said yes but login disagrees. Fall to signup.
            setMode("name");
            return;
          }
          setError(ld.error || "Could not send OTP.");
          return;
        }
        otp.reset();
        setMode("otp-login");
      } else {
        setMode("name");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function submitName(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: first, lastName: last, email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not create account.");
        return;
      }
      otp.reset();
      setMode("otp-signup");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function submitOtp(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError("");
    const code = otp.value;
    if (code.length !== 6) {
      setError("Enter all 6 digits.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: code }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Invalid OTP.");
        setLoading(false);
        return;
      }
      // Cookie is set. Re-render the server page to inline the gated content.
      // Do NOT clear loading — keep the button labelled "Verifying…" until
      // this component unmounts during the RSC reconciliation.
      router.refresh();
    } catch {
      setError("Network error. Try again.");
      setLoading(false);
    }
  }

  function backToEmail() {
    setMode("email");
    setError("");
    otp.reset();
  }

  return (
    <>
      <div ref={sentinelRef} className="paywall-sentinel" aria-hidden="true" data-slug={slug} />
      <div
        className={`paywall-gate${visible ? " is-visible" : ""}`}
        role="dialog"
        aria-modal={visible ? "true" : "false"}
        aria-labelledby="paywall-gate-title"
        aria-hidden={!visible}
      >
        <div className="paywall-gate-gradient" />
        <div className="paywall-gate-card">
          {mode === "email" && (
            <form onSubmit={submitEmail} className="paywall-gate-form paywall-gate-mode">
              <h2 id="paywall-gate-title" className="paywall-gate-title">Keep reading</h2>
              <p className="paywall-gate-sub">
                Sign in or create a free account to finish this article.
              </p>
              <label htmlFor="paywall-email">Email</label>
              <input
                id="paywall-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                ref={emailInputRef}
              />
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading}>
                {loading ? "Checking…" : "Continue"}
              </button>
            </form>
          )}

          {mode === "otp-login" && (
            <form onSubmit={submitOtp} className="paywall-gate-form paywall-gate-mode">
              <h2 id="paywall-gate-title" className="paywall-gate-title">Enter the code</h2>
              <p className="paywall-gate-sub">We sent a 6-digit code to {email}.</p>
              <div className="otp-container">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    className="otp-box"
                    {...otp.inputProps(i, "paywall-otp")}
                  />
                ))}
              </div>
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading}>
                {loading ? "Verifying…" : "Sign In"}
              </button>
              <button type="button" className="paywall-gate-back" onClick={backToEmail}>
                Use a different email
              </button>
            </form>
          )}

          {mode === "name" && (
            <form onSubmit={submitName} className="paywall-gate-form paywall-gate-mode">
              <h2 id="paywall-gate-title" className="paywall-gate-title">Create your account</h2>
              <p className="paywall-gate-sub">Free, 30 seconds.</p>
              <label htmlFor="paywall-first-name">First name</label>
              <input
                id="paywall-first-name"
                type="text"
                placeholder="John"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                required
                ref={firstNameRef}
              />
              <label htmlFor="paywall-last-name">Last name</label>
              <input
                id="paywall-last-name"
                type="text"
                placeholder="Doe"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                required
              />
              <div className="paywall-terms-row">
                <input
                  type="checkbox"
                  id="paywall-terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="paywall-terms">
                  I agree to the{" "}
                  <button type="button" onClick={() => setShowTerms(true)}>
                    Terms of Use
                  </button>
                </label>
              </div>
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading || !termsAccepted}>
                {loading ? "Creating…" : "Sign Up"}
              </button>
              <button type="button" className="paywall-gate-back" onClick={backToEmail}>
                Use a different email
              </button>
            </form>
          )}

          {mode === "otp-signup" && (
            <form onSubmit={submitOtp} className="paywall-gate-form paywall-gate-mode">
              <h2 id="paywall-gate-title" className="paywall-gate-title">Verify your email</h2>
              <p className="paywall-gate-sub">We sent a 6-digit code to {email}.</p>
              <div className="otp-container">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    className="otp-box"
                    {...otp.inputProps(i, "paywall-otp")}
                  />
                ))}
              </div>
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading}>
                {loading ? "Verifying…" : "Complete Signup"}
              </button>
            </form>
          )}
        </div>
      </div>

      {showTerms && (
        <div style={{ position: "relative", zIndex: 1020 }}>
          <TermsModal
            onAccept={() => {
              setTermsAccepted(true);
              setShowTerms(false);
            }}
            onClose={() => setShowTerms(false)}
          />
        </div>
      )}
    </>
  );
}
