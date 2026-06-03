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
      <h2 className="admin-h2">Enable referral</h2>
      <div className="admin-card">
        <form onSubmit={submit} className="admin-form">
          <div className="admin-field">
            <span className="admin-label">Identify user by</span>
            <div className="admin-radio-group">
              <label className="admin-radio">
                <input
                  type="radio"
                  checked={idKind === "email"}
                  onChange={() => setIdKind("email")}
                />
                Email
              </label>
              <label className="admin-radio">
                <input
                  type="radio"
                  checked={idKind === "id"}
                  onChange={() => setIdKind("id")}
                />
                User ID
              </label>
            </div>
            <input
              className="admin-input"
              required
              placeholder={idKind === "email" ? "user@example.com" : "uuid…"}
              value={idValue}
              onChange={(e) => setIdValue(e.target.value)}
            />
          </div>

          <div className="admin-field">
            <label className="admin-label" htmlFor="ref-code">Code</label>
            <input
              id="ref-code"
              className="admin-input"
              required
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              pattern="[A-Z0-9_-]{3,20}"
              placeholder="PRIYA10"
            />
          </div>

          <div className="admin-field">
            <span className="admin-label">Discount</span>
            <div className="admin-radio-group">
              <label className="admin-radio">
                <input
                  type="radio"
                  checked={discountType === "percent"}
                  onChange={() => setDiscountType("percent")}
                />
                Percent (%)
              </label>
              <label className="admin-radio">
                <input
                  type="radio"
                  checked={discountType === "flat"}
                  onChange={() => setDiscountType("flat")}
                />
                Flat (₹)
              </label>
            </div>
            <input
              className="admin-input"
              required
              type="number"
              min={1}
              step={1}
              value={discountVal}
              onChange={(e) => setDiscountVal(e.target.value)}
              placeholder={discountType === "percent" ? "10" : "500"}
            />
          </div>

          <div className="admin-field">
            <label className="admin-label" htmlFor="ref-exp">Expires (optional)</label>
            <input
              id="ref-exp"
              className="admin-input"
              type="date"
              value={expires}
              onChange={(e) => setExpires(e.target.value)}
            />
          </div>

          <div className="admin-btn-row">
            <button type="submit" className="admin-btn" disabled={busy}>
              {busy ? "Saving…" : "Enable"}
            </button>
          </div>
        </form>
        {ok && <p className="admin-msg-ok">{ok}</p>}
        {err && <p className="admin-msg-err">{err}</p>}
      </div>
    </section>
  );
}
