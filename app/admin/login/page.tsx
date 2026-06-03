"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
    <main style={{ maxWidth: 420, margin: "10vh auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Admin sign in</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Restricted access. Authorized emails only.
      </p>
      {stage === "email" && (
        <form onSubmit={sendOtp}>
          <label>
            Email
            <input
              type="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: 10, marginTop: 6 }}
            />
          </label>
          <button type="submit" disabled={busy} style={{ marginTop: 16 }}>
            {busy ? "Sending..." : "Send OTP"}
          </button>
        </form>
      )}
      {stage === "otp" && (
        <form onSubmit={verifyOtp}>
          <p style={{ marginBottom: 12 }}>OTP sent to {email}</p>
          <label>
            OTP
            <input
              type="text"
              inputMode="numeric"
              autoFocus
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ width: "100%", padding: 10, marginTop: 6 }}
            />
          </label>
          <button type="submit" disabled={busy} style={{ marginTop: 16 }}>
            {busy ? "Verifying..." : "Verify"}
          </button>
          <button
            type="button"
            onClick={() => { setStage("email"); setOtp(""); }}
            style={{ marginLeft: 8 }}
          >
            Back
          </button>
        </form>
      )}
      {err && <p style={{ color: "crimson", marginTop: 12 }}>{err}</p>}
    </main>
  );
}
