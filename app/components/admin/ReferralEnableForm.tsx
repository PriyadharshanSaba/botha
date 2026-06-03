"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReferralEnableForm() {
  const router = useRouter();
  const [idKind, setIdKind] = useState<"email" | "id">("email");
  const [idValue, setIdValue] = useState("");
  const [code, setCode] = useState("");
  const [discountType, setDiscountType] = useState<"percent" | "flat">("percent");
  const [discountVal, setDiscountVal] = useState("");
  const [expires, setExpires] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setOk(null);
    const discount =
      discountType === "percent"
        ? { type: "percent" as const, value: Number(discountVal) }
        : { type: "flat" as const, valuePaise: Math.round(Number(discountVal) * 100) };
    const r = await fetch("/api/admin/referrals/enable", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        identifier: { kind: idKind, value: idValue },
        code,
        discount,
        expiresAt: expires || undefined,
      }),
    });
    setBusy(false);
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      setErr(j.error || "failed");
      return;
    }
    setOk(`Enabled ${j.offerId} for ${j.email}`);
    setIdValue("");
    setCode("");
    setDiscountVal("");
    setExpires("");
    router.refresh();
  }

  return (
    <section style={{ marginBottom: 32 }}>
      <h2 style={{ marginBottom: 12 }}>Enable referral</h2>
      <form onSubmit={submit} style={{ display: "grid", gap: 12, maxWidth: 480 }}>
        <div>
          <label style={{ marginRight: 12 }}>
            <input
              type="radio"
              checked={idKind === "email"}
              onChange={() => setIdKind("email")}
            />{" "}
            Email
          </label>
          <label>
            <input
              type="radio"
              checked={idKind === "id"}
              onChange={() => setIdKind("id")}
            />{" "}
            User ID
          </label>
          <input
            required
            placeholder={idKind === "email" ? "user@example.com" : "uuid…"}
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <label>
          Code
          <input
            required
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            pattern="[A-Z0-9_-]{3,20}"
            placeholder="PRIYA10"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <div>
          <label style={{ marginRight: 12 }}>
            <input
              type="radio"
              checked={discountType === "percent"}
              onChange={() => setDiscountType("percent")}
            />{" "}
            Percent (%)
          </label>
          <label>
            <input
              type="radio"
              checked={discountType === "flat"}
              onChange={() => setDiscountType("flat")}
            />{" "}
            Flat (₹)
          </label>
          <input
            required
            type="number"
            min={1}
            step={1}
            value={discountVal}
            onChange={(e) => setDiscountVal(e.target.value)}
            placeholder={discountType === "percent" ? "10" : "500"}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <label>
          Expires (optional)
          <input
            type="date"
            value={expires}
            onChange={(e) => setExpires(e.target.value)}
            style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <button type="submit" disabled={busy}>
          {busy ? "Saving..." : "Enable"}
        </button>
      </form>
      {ok && <p style={{ color: "green", marginTop: 12 }}>{ok}</p>}
      {err && <p style={{ color: "crimson", marginTop: 12 }}>{err}</p>}
    </section>
  );
}
