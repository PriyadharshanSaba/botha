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
      <h1 className="admin-h1">Subscribers ledger</h1>
      <p className="admin-sub">
        Latest {rows.length} paid signups · test emails excluded.
      </p>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date (IST)</th>
              <th>Name</th>
              <th>Email</th>
              <th>Plan</th>
              <th className="right">Amount</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.subscriptionId}>
                <td>{fmtDate(r.createdAt)}</td>
                <td>{[r.firstName, r.lastName].filter(Boolean).join(" ") || "—"}</td>
                <td className="mono">{r.email}</td>
                <td>{planName(r.planId)}</td>
                <td className="right mono">₹{rupees(r.amountPaise)}</td>
                <td>
                  {r.invoiceId ? (
                    <a
                      href={`/api/billing/invoice/${r.invoiceId}/pdf`}
                      target="_blank"
                      rel="noreferrer"
                      className="admin-table-link mono"
                    >
                      {r.invoiceNumber || "View"}
                    </a>
                  ) : (
                    <span className="muted">—</span>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="admin-table-empty">
                  No signups yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
