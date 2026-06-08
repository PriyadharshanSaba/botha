"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import TermsModal from "@/app/components/TermsModal";

export default function WaitlistPage() {
  const router = useRouter();

  const [first, setFirst] = useState("");
  const [last, setLast]   = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading]       = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState("");

  // Signup step (after waitlist submission)
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms]         = useState(false);
  const [signingUp, setSigningUp]         = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: first, lastName: last, email }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Could not submit. Try again.");
      return;
    }
    setSubmitted(true);
  }

  async function handleSignup() {
    setError("");
    setSigningUp(true);
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: first, lastName: last, email }),
    });
    setSigningUp(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Could not create account.");
      return;
    }
    // Hand off to /signin in signup-otp mode with email prefilled.
    router.push(`/signin?mode=signup-otp&email=${encodeURIComponent(email)}`);
  }

  return (
    <div className="page">
      <main className="card">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="title">{submitted ? "You're on the list" : "Join The Club"}</h1>

          <p className="hint" style={{ textAlign: "center", margin: "0 0 6px" }}>
            {submitted
              ? "Thanks! We've received your details. Create your account to continue."
              : "Tell us a bit about yourself and we'll be in touch with early access."}
          </p>

          <label>First name</label>
          <input
            type="text"
            placeholder="John"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            disabled={submitted || loading}
            className={submitted ? "disabled-input" : ""}
            required
          />

          <label>Last name</label>
          <input
            type="text"
            placeholder="Doe"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            disabled={submitted || loading}
            className={submitted ? "disabled-input" : ""}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted || loading}
            className={submitted ? "disabled-input" : ""}
            required
          />

          {!submitted && (
            <>
              {error && <div className="error">{error}</div>}
              <button className="btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </>
          )}

          {submitted && (
            <>
              <div className="terms-check-row" style={{ marginTop: 6 }}>
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

              <button
                type="button"
                className="btn"
                disabled={signingUp || !termsAccepted}
                onClick={handleSignup}
              >
                {signingUp ? "Creating account..." : "Sign Up"}
              </button>
            </>
          )}
        </form>
      </main>

      {showTerms && (
        <TermsModal
          onAccept={() => { setTermsAccepted(true); setShowTerms(false); }}
          onClose={() => setShowTerms(false)}
        />
      )}
    </div>
  );
}
