"use client";
import { useState } from "react";

export default function OnboardPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setResult(null);
    setBusy(true);
    const r = await fetch("/api/admin/users/create", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, firstName, lastName }),
    });
    setBusy(false);
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      if (j.error === "user_exists") {
        setErr(`Already onboarded (id: ${j.existingId}).`);
      } else {
        setErr(j.error || "Failed to create user");
      }
      return;
    }
    setResult(`Created user ${j.email}. They can sign in at /signin with OTP.`);
    setEmail("");
    setFirstName("");
    setLastName("");
  }

  return (
    <main>
      <h1 className="admin-h1">Onboard user</h1>
      <p className="admin-sub">
        Creates a verified user row. No emails sent. User signs in via normal OTP afterwards.
      </p>

      <div className="admin-card">
        <form onSubmit={submit} className="admin-form">
          <div className="admin-field">
            <label htmlFor="ob-email">Email</label>
            <input
              id="ob-email"
              className="admin-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="admin-field">
            <label htmlFor="ob-fn">First name</label>
            <input
              id="ob-fn"
              className="admin-input"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="admin-field">
            <label htmlFor="ob-ln">Last name</label>
            <input
              id="ob-ln"
              className="admin-input"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="admin-btn-row">
            <button type="submit" className="admin-btn" disabled={busy}>
              {busy ? "Creating…" : "Create user"}
            </button>
          </div>
        </form>
        {result && <p className="admin-msg-ok">{result}</p>}
        {err && <p className="admin-msg-err">{err}</p>}
      </div>
    </main>
  );
}
