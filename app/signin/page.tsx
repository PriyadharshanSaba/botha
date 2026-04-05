"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

    if (!res.ok) return setError("Email not found.");

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

    router.push("/modules");
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

    if (data.progress?.moduleId) {
      router.push(`/modules/${data.progress.moduleId}?chapter=${data.progress.chapterNumber}`);
    } else {
      router.push("/modules");
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

              {error && <div className="error">{error}</div>}

              <button className="btn" disabled={loading}>
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
    </div>
  );
}
