import { getAllUserEmailsForCsv } from "@/app/lib/admin/tools";

export default async function AdminToolsPage() {
  const emails = await getAllUserEmailsForCsv();

  return (
    <main>
      <h1 className="admin-h1">Tools</h1>
      <p className="admin-sub">Internal admin utilities.</p>

      <section className="admin-tile" style={{ marginTop: 16, maxWidth: 560 }}>
        <div className="admin-tile-label">User emails — weekly insights export</div>
        <div style={{ marginTop: 8, fontSize: 13, color: "#6B6460", lineHeight: 1.55 }}>
          Downloads a CSV of every email in the <code>users</code> table that
          contains an <code>@</code>. Deduplicated case-insensitively. Hand
          this file to the partner for the weekly insights blast.
        </div>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/api/admin/tools/emails-csv"
            className="admin-btn"
            download
          >
            Download CSV ({emails.length} emails)
          </a>
          <span style={{ fontSize: 12, color: "#6B6460" }}>
            Filename: <span className="mono">bodha-emails-YYYY-MM-DD.csv</span>
          </span>
        </div>
      </section>
    </main>
  );
}
