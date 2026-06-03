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
    <main style={{ maxWidth: 480 }}>
      <h1 style={{ marginBottom: 16 }}>Onboard user</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>
        Creates a verified user row. No emails sent. User signs in via normal OTP afterwards.
      </p>
      <form onSubmit={submit}>
        <label style={{ display: "block", marginBottom: 12 }}>
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 12 }}>
          First name
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 12 }}>
          Last name
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <button type="submit" disabled={busy}>
          {busy ? "Creating..." : "Create user"}
        </button>
      </form>
      {result && <p style={{ color: "green", marginTop: 16 }}>{result}</p>}
      {err && <p style={{ color: "crimson", marginTop: 16 }}>{err}</p>}
    </main>
  );
}
