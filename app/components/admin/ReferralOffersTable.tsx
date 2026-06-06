"use client";
import { useRouter } from "next/navigation";
import type { ActiveOfferRow } from "@/app/lib/admin/referrals";

function discountLabel(o: ActiveOfferRow) {
  if (o.discountPercent != null) return `${o.discountPercent}%`;
  if (o.discountFlatPaise != null) return `₹${(o.discountFlatPaise / 100).toLocaleString("en-IN")}`;
  return "—";
}

export default function ReferralOffersTable({ rows }: { rows: ActiveOfferRow[] }) {
  const router = useRouter();

  async function deactivate(code: string) {
    if (!confirm(`Deactivate ${code}? This cannot be undone (history preserved).`)) return;
    const r = await fetch("/api/admin/referrals/deactivate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      alert("Failed: " + (j.error || r.status));
      return;
    }
    router.refresh();
  }

  return (
    <section>
      <h2 className="admin-h2">Active offers</h2>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Code</th>
              <th>Discount</th>
              <th>Expires</th>
              <th className="right">Redemptions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.code}>
                <td>
                  {r.ownerEmail}
                  <br />
                  <span className="muted">
                    {[r.ownerFirstName, r.ownerLastName].filter(Boolean).join(" ")}
                  </span>
                </td>
                <td className="mono">{r.code}</td>
                <td>{discountLabel(r)}</td>
                <td>
                  {r.expiresAt
                    ? new Date(r.expiresAt).toLocaleDateString("en-IN")
                    : "—"}
                </td>
                <td className="right">{r.redemptions}</td>
                <td className="right">
                  <button
                    className="admin-btn-danger"
                    onClick={() => deactivate(r.code)}
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="admin-table-empty">
                  No active offers.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
