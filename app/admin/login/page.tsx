"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "@/app/components/admin/admin.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState<"email" | "otp">("email");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function sendOtp(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setBusy(false);
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      setErr(j.error || "Failed to send OTP");
      return;
    }
    setStage("otp");
  }

  async function verifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const r = await fetch("/api/admin/verify-otp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    setBusy(false);
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      setErr(j.error || "Invalid OTP");
      return;
    }
    router.push(next);
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-eyebrow">Botha · Admin</div>
        <h1 className="admin-login-title">Sign in</h1>
        <p className="admin-login-sub">Restricted access. Authorized emails only.</p>

        {stage === "email" && (
          <form onSubmit={sendOtp} className="admin-form">
            <div className="admin-field">
              <label htmlFor="admin-email" className="admin-label">Email</label>
              <input
                id="admin-email"
                className="admin-input"
                type="email"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="admin-btn" disabled={busy}>
              {busy ? "Sending…" : "Send OTP"}
            </button>
          </form>
        )}

        {stage === "otp" && (
          <form onSubmit={verifyOtp} className="admin-form">
            <p style={{ fontSize: 13, color: "#475569" }}>OTP sent to {email}</p>
            <div className="admin-field">
              <label htmlFor="admin-otp" className="admin-label">OTP</label>
              <input
                id="admin-otp"
                className="admin-input"
                type="text"
                inputMode="numeric"
                autoFocus
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="admin-btn-row">
              <button type="submit" className="admin-btn" disabled={busy}>
                {busy ? "Verifying…" : "Verify"}
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-outline"
                onClick={() => { setStage("email"); setOtp(""); }}
              >
                Back
              </button>
            </div>
          </form>
        )}
        {err && <p className="admin-msg-err">{err}</p>}
      </div>
    </main>
  );
}
