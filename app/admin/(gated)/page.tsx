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
      <h1 className="admin-h1">Dashboard</h1>
      <p className="admin-sub">Live metrics, excluding test emails.</p>

      <section className="admin-metrics">
        <div className="admin-tile">
          <div className="admin-tile-label">Total subscribers</div>
          <div className="admin-tile-value">{stats.subscriberCount}</div>
        </div>
        <div className="admin-tile">
          <div className="admin-tile-label">Money collected</div>
          <div className="admin-tile-value">₹{rupees(stats.moneyCollectedPaise)}</div>
        </div>
      </section>

      <section>
        <h2 className="admin-h2">Active plans</h2>
        {stats.planBreakdown.length === 0 ? (
          <p className="admin-plan-empty">No active plans yet</p>
        ) : (
          <ul className="admin-plan-list">
            {stats.planBreakdown.map((p) => (
              <li key={p.planId} className="admin-plan-chip">
                {planName(p.planId)}
                <span className="admin-plan-chip-count">{p.count}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="admin-charts" style={{ marginTop: 32 }}>
        <DailyBarChart
          points={stats.paidSubsLast10Days}
          label="New paying subscribers"
          sub="Last 10 days"
        />
        <DailyBarChart
          points={stats.newSignupsLast10Days}
          label="New user signups"
          sub="Last 10 days"
        />
      </section>
    </main>
  );
}
