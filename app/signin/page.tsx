"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TermsModal from "@/app/components/TermsModal";

export default function Page() {
  return (
    <Suspense>
      <SignInContent />
    </Suspense>
  );
}

function SignInContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- Modes ---
  const [mode, setMode] = useState<"login" | "login-otp" | "signup" | "signup-otp">(() =>
    searchParams.get("mode") === "signup" ? "signup" : "login"
  );

  // --- Form fields ---
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  // --- OTP fields ---
  const [otp6, setOtp6] = useState(["", "", "", "", "", ""]);

  // --- Misc ---
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --- Terms ---
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // --- Consent (re-ask after login if missing) ---
  const [showConsent, setShowConsent] = useState(false);
  const [consentRedirect, setConsentRedirect] = useState<string>("/modules");

  /* --------------------------------
    LOGIN: Send OTP
  ----------------------------------*/
  async function handleLogin(e: any) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return setError(data.error || "Email not found.");
    }

    // Switch to login OTP screen
    setMode("login-otp");
  }


  /* --------------------------------
    SIGNUP: Send OTP
  ----------------------------------*/
  async function handleSignup(e: any) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: first, lastName: last, email }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Could not create account.");
      return;
    }

    setMode("signup-otp");
  }

  /* --------------------------------
    SIGNUP: Verify OTP
  ----------------------------------*/
  async function handleVerifySignup(e: any) {
    e.preventDefault();
    const code = otp6.join("");

    if (code.length !== 6) return setError("Enter all 6 digits.");

    setLoading(true);
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp: code }),
    });

    setLoading(false);

    if (!res.ok) return setError("Invalid OTP.");

    // New users go to plan selection; they have no subscription yet
    router.push("/plans");
  }

  async function handleVerifyLogin(e: any) {
    e.preventDefault();
    const code = otp6.join("");

    if (code.length !== 6) return setError("Enter all 6 digits.");

    setLoading(true);
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp: code }),
    });

    setLoading(false);

    if (!res.ok) return setError("Invalid OTP.");

    const data = await res.json();

    const dest = data.progress?.moduleId
      ? `/modules/${data.progress.moduleId}?chapter=${data.progress.chapterNumber}`
      : "/modules";

    if (data.needsConsent) {
      setConsentRedirect(dest);
      setShowConsent(true);
    } else {
      router.push(dest);
    }
  }


  /* --------------------------------
    OTP Box Handler
  ----------------------------------*/
  function handleOtpChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp6];
    next[index] = value;
    setOtp6(next);

    if (value && index < next.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  }

  return (
    <div className="page">
      <main className="card">

        <div key={mode} className="auth-transition">
          {/* ------------------- LOGIN FORM ------------------- */}
          {mode === "login" && (
            <form onSubmit={handleLogin} className="form">
              <h1 className="title">Welcome back</h1>

              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {error && <div className="error">{error}</div>}

              <button className="btn" disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>

              {/* --- Sign up link --- */}
              <p className="hint" style={{ textAlign: "center", marginTop: "10px" }}>
                New here?{" "}
                <span
                  style={{
                    fontWeight: 600,
                    color: "#0f172a",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMode("signup");
                    setError("");
                  }}
                >
                  Sign Up
                </span>
              </p>
            </form>
          )}

          {/* ------------------- SIGNUP FORM ------------------- */}
          {mode === "signup" && (
            <form onSubmit={handleSignup} className="form">
              <h1 className="title">Create your account</h1>

              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>First name</label>
              <input
                type="text"
                placeholder="John"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                required
              />

              <label>Last name</label>
              <input
                type="text"
                placeholder="Doe"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                required
              />

              <div className="terms-check-row">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label className="terms-check-label" htmlFor="terms-checkbox">
                  I agree to the{" "}
                  <button type="button" onClick={() => setShowTerms(true)}>
                    Terms of Use
                  </button>
                </label>
              </div>

              {error && <div className="error">{error}</div>}

              <button className="btn" disabled={loading || !termsAccepted}>
                {loading ? "Creating..." : "Sign Up"}
              </button>
            </form>
          )}

          {/* ------------------- SIGNUP OTP ------------------- */}
          {mode === "signup-otp" && (
            <form onSubmit={handleVerifySignup} className="form">
              <h1 className="title">Verify your email</h1>

              <label>Email</label>
              <input value={email} disabled className="disabled-input" />

              <label>Enter OTP</label>
              <div className="otp-container">
                {otp6.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    maxLength={1}
                    className="otp-box"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                  />
                ))}
              </div>

              {error && <div className="error">{error}</div>}

              <button className="btn" disabled={loading}>
                {loading ? "Verifying..." : "Complete Signup"}
              </button>
            </form>
          )}

          {/* ------------------- LOGIN OTP ------------------- */}
          {mode === "login-otp" && (
            <form onSubmit={handleVerifyLogin} className="form">
              <h1 className="title">Enter OTP</h1>

              <label>Email</label>
              <input value={email} disabled className="disabled-input" />

              <label>Enter OTP</label>
              <div className="otp-container">
                {otp6.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    maxLength={1}
                    className="otp-box"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                  />
                ))}
              </div>

              {error && <div className="error">{error}</div>}

              <button className="btn" disabled={loading}>
                {loading ? "Verifying..." : "Sign In"}
              </button>
            </form>
          )}

        </div>
      </main>

      {showTerms && (
        <TermsModal
          onAccept={() => { setTermsAccepted(true); setShowTerms(false); }}
          onClose={() => setShowTerms(false)}
        />
      )}

      {showConsent && (
        <div className="terms-overlay">
          <div className="terms-modal" style={{ maxWidth: 440 }}>
            <div className="terms-header">
              <div>
                <h2 className="terms-title">Cookie & Data Consent</h2>
                <p className="terms-subtitle">We need your consent to continue</p>
              </div>
            </div>
            <div className="terms-body" style={{ padding: "20px 24px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <input type="checkbox" id="consent-analytics" defaultChecked />
                <span>Allow analytics cookies to help us improve the platform</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="checkbox" id="consent-marketing" />
                <span>Allow marketing communications</span>
              </label>
            </div>
            <div className="terms-footer">
              <div className="terms-footer-actions">
                <button
                  className="terms-btn-accept"
                  onClick={async () => {
                    const analytics = (document.getElementById("consent-analytics") as HTMLInputElement).checked;
                    const marketing = (document.getElementById("consent-marketing") as HTMLInputElement).checked;
                    await fetch("/api/consent", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ analytics, marketing }),
                    });
                    setShowConsent(false);
                    router.push(consentRedirect);
                  }}
                >
                  Accept & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
