import type { NwtEntry } from "@/app/lib/networth/types";
import { formatInr as fmt } from "@/app/lib/tools/calculators";

// Hover card on an entry-log row: that month's asset allocation as horizontal bars.
export default function TrackerHoverPopup({ entry, pos }: { entry: NwtEntry; pos: { x: number; y: number } }) {
  const a = entry.alloc || {};
  const allocColors = ["#4a7fcb", "#9b7fcb", "#6a8fc8", "#e8c35a", "#a0785a", "#6abf7a"];
  const allocLabels = ["Equity", "Mutual Funds", "Debt", "Gold & Silver", "Real Estate", "Cash & Other"];
  const allocKeys = ["equity", "mutualFunds", "debt", "gold", "realestate", "cash"] as const;
  const allocValues = allocKeys.map((k) => Number(a[k] ?? 0));
  const total = allocValues.reduce((s, v) => s + v, 0);
  const [y, m] = entry.month.split("-");
  const monthLabel = new Date(+y, +m - 1, 1).toLocaleString("en-IN", { month: "long", year: "numeric" });
  const PAD = 14;
  const W = 280;
  const H = 220;
  const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  let left = pos.x + 16;
  let top = pos.y + 14;
  if (left + W + PAD > vw) left = pos.x - W - 16;
  if (top + H + PAD > vh) top = pos.y - H - 14;
  if (left < PAD) left = PAD;
  if (top < PAD) top = PAD;
  return (
    <div
      className="ft-tracker-hover-popup"
      style={{
        position: "fixed",
        left,
        top,
        width: W,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 12,
        boxShadow: "0 12px 32px rgba(0,0,0,0.14)",
        padding: "14px 16px",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div style={{ fontFamily: "inherit", fontSize: 13, fontWeight: 700, marginBottom: 2 }}>
        {monthLabel}
      </div>
      <div style={{ fontSize: 10, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
        Asset Allocation
      </div>
      {total === 0 ? (
        <div style={{ fontSize: 11, color: "#aaa" }}>No allocation recorded for this month.</div>
      ) : (
        allocLabels.map((l, i) => {
          const v = allocValues[i];
          if (!v) return null;
          const pct = (v / total) * 100;
          return (
            <div key={l} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, marginBottom: 3 }}>
                <span style={{ color: "#555", fontWeight: 500 }}>{l}</span>
                <span style={{ color: "#888" }}>{fmt(v)} · {pct.toFixed(1)}%</span>
              </div>
              <div style={{ height: 6, background: "rgba(0,0,0,0.05)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: pct + "%", height: "100%", background: allocColors[i], borderRadius: 3 }} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
