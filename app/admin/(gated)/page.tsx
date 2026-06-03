import { getDashboardStats } from "@/app/lib/admin/stats";
import DailyBarChart from "@/app/components/admin/DailyBarChart";
import { PLANS } from "@/app/lib/plans";

function rupees(paise: number) {
  return (paise / 100).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function planName(id: string) {
  const p = PLANS.find((p) => p.id === id);
  return p?.name ?? id;
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <main>
      <h1 style={{ marginBottom: 24 }}>Dashboard</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
          <div style={{ color: "#666", fontSize: 13 }}>Total subscribers</div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>
            {stats.subscriberCount}
          </div>
        </div>
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
          <div style={{ color: "#666", fontSize: 13 }}>Money collected</div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>
            ₹{rupees(stats.moneyCollectedPaise)}
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h3 style={{ marginBottom: 8 }}>Active plans</h3>
        <ul>
          {stats.planBreakdown.map((p) => (
            <li key={p.planId}>
              {planName(p.planId)} — {p.count}
            </li>
          ))}
          {stats.planBreakdown.length === 0 && <li style={{ color: "#666" }}>No active plans yet</li>}
        </ul>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        <DailyBarChart
          points={stats.paidSubsLast10Days}
          label="New paying subscribers (last 10 days)"
        />
        <DailyBarChart
          points={stats.newSignupsLast10Days}
          label="New user signups (last 10 days)"
        />
      </section>
    </main>
  );
}
