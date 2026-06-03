import { getSignupsLedger } from "@/app/lib/admin/signups";
import { PLANS } from "@/app/lib/plans";

function rupees(paise: number) {
  return (paise / 100).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function planName(id: string) {
  return PLANS.find((p) => p.id === id)?.name ?? id;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function SignupsLedgerPage() {
  const rows = await getSignupsLedger({ limit: 100 });

  return (
    <main>
      <h1 style={{ marginBottom: 16 }}>Signups ledger</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>
        Latest {rows.length} paid signups, test emails excluded.
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ position: "sticky", top: 0, background: "#fff" }}>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #333" }}>
            <th style={{ padding: 8 }}>Date (IST)</th>
            <th style={{ padding: 8 }}>Name</th>
            <th style={{ padding: 8 }}>Email</th>
            <th style={{ padding: 8 }}>Plan</th>
            <th style={{ padding: 8, textAlign: "right", fontFamily: "monospace" }}>
              Amount
            </th>
            <th style={{ padding: 8 }}>Invoice</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.subscriptionId} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: 8 }}>{fmtDate(r.createdAt)}</td>
              <td style={{ padding: 8 }}>
                {[r.firstName, r.lastName].filter(Boolean).join(" ") || "—"}
              </td>
              <td style={{ padding: 8 }}>{r.email}</td>
              <td style={{ padding: 8 }}>{planName(r.planId)}</td>
              <td style={{ padding: 8, textAlign: "right", fontFamily: "monospace" }}>
                ₹{rupees(r.amountPaise)}
              </td>
              <td style={{ padding: 8 }}>
                {r.invoiceId ? (
                  <a
                    href={`/api/billing/invoice/${r.invoiceId}/pdf`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {r.invoiceNumber || "View"}
                  </a>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: 16, color: "#666" }}>
                No signups yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
