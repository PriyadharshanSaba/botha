"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TermsModal from "@/app/components/TermsModal";
import CookieBanner from "@/app/components/CookieBanner";

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
  const [notRegistered, setNotRegistered] = useState(false);

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
    setNotRegistered(false);
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data.error === "not_registered") {
        setNotRegistered(true);
      } else {
        setError(data.error || "Something went wrong.");
      }
      return;
    }

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
  function handleOtpKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === "Backspace" && !otp6[index] && index > 0) {
      const next = [...otp6];
      next[index - 1] = "";
      setOtp6(next);
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  }

  function handleOtpInput(e: React.FormEvent<HTMLInputElement>, index: number) {
    const inputType = (e.nativeEvent as InputEvent).inputType;
    if (inputType === "deleteContentBackward" && !otp6[index] && index > 0) {
      const next = [...otp6];
      next[index - 1] = "";
      setOtp6(next);
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent<HTMLInputElement>, index: number) {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!digits) return;
    const next = [...otp6];
    for (let i = 0; i < digits.length; i++) {
      if (index + i < next.length) next[index + i] = digits[i];
    }
    setOtp6(next);
    document.getElementById(`otp-${Math.min(index + digits.length, next.length - 1)}`)?.focus();
  }

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
                onChange={(e) => { setEmail(e.target.value); setNotRegistered(false); }}
                required
              />

              {error && <div className="error">{error}</div>}
              {notRegistered && (
                <div className="error">
                  This email isn&apos;t registered.{" "}
                  <span
                    style={{ fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => { setMode("signup"); setNotRegistered(false); setError(""); }}
                  >
                    Sign up here
                  </span>
                </div>
              )}

              <button className="btn" disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>

              {/* --- Sign up link --- */}
              <p className="hint" style={{ textAlign: "center", marginTop: "10px" }}>
                New here?{" "}
                <span
                  style={{ fontWeight: 600, color: "#0f172a", cursor: "pointer" }}
                  onClick={() => { setMode("signup"); setError(""); setNotRegistered(false); }}
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
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="otp-box"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(e, i)}
                    onInput={(e) => handleOtpInput(e, i)}
                    onPaste={(e) => handleOtpPaste(e, i)}
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
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="otp-box"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(e, i)}
                    onInput={(e) => handleOtpInput(e, i)}
                    onPaste={(e) => handleOtpPaste(e, i)}
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
        <CookieBanner
          isLoggedIn={true}
          onSave={() => {
            setShowConsent(false);
            router.push(consentRedirect);
          }}
        />
      )}
    </div>
  );
}
