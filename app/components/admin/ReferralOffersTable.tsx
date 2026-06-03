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
      <h2 style={{ marginBottom: 12 }}>Active offers</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #333" }}>
            <th style={{ padding: 8 }}>Owner</th>
            <th style={{ padding: 8 }}>Code</th>
            <th style={{ padding: 8 }}>Discount</th>
            <th style={{ padding: 8 }}>Expires</th>
            <th style={{ padding: 8 }}>Redemptions</th>
            <th style={{ padding: 8 }}></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: 8 }}>
                {r.ownerEmail}
                <br />
                <span style={{ color: "#666", fontSize: 12 }}>
                  {[r.ownerFirstName, r.ownerLastName].filter(Boolean).join(" ")}
                </span>
              </td>
              <td style={{ padding: 8, fontFamily: "monospace" }}>{r.code}</td>
              <td style={{ padding: 8 }}>{discountLabel(r)}</td>
              <td style={{ padding: 8 }}>
                {r.expiresAt ? new Date(r.expiresAt).toLocaleDateString("en-IN") : "—"}
              </td>
              <td style={{ padding: 8 }}>{r.redemptions}</td>
              <td style={{ padding: 8 }}>
                <button onClick={() => deactivate(r.code)}>Deactivate</button>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: 16, color: "#666" }}>
                No active offers.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
