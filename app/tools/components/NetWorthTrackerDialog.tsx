"use client";

import { Fragment, useRef } from "react";
import SketchIcon from "@/app/components/SketchIcon";
import { CloseIcon } from "@/app/components/LineIcons";
import { useModalDialog } from "@/app/components/ui/useModalDialog";
import { refresh as refreshTracker } from "@/app/lib/networth/client";
import { formatInr as fmt } from "@/app/lib/tools/calculators";
import ImportModal from "../import-modal";
import { humanizeKey, monthNw, sumValues } from "./trackerFormat";
import TrackerHoverPopup from "./TrackerHoverPopup";
import type { NetWorthTracker } from "./useNetWorthTracker";
import "../tracker.css";

// Full-screen dialog around the existing tracker UI. The body below is the original markup.
export default function NetWorthTrackerDialog({
  open,
  onClose,
  title,
  eyebrow,
  closeLabel,
  tracker,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow: string;
  closeLabel: string;
  tracker: NetWorthTracker;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const {
    userId, tabLockState, nwtMonth, setNwtMonth, nwtSaveMsg, setNwtData, bootstrapping, serverReachable, saving, refreshing, pendingN, errorMsg, importUsedAt, setImportUsedAt, importOpen, setImportOpen, setHoveredEntry, setHoverPos, expandedIds, setExpandedIds, nwtFields, setNwtFields, sortedData, nwtLineRef, nwtBarRef, nwtDonutRef, handleAddNwtEntry, handleRefresh,
    hoveredEntry, hoverPos,
  } = tracker;
  useModalDialog(dialogRef, open, onClose, !importOpen);

  return (
    <div className="tl-overlay tl-overlay-full" hidden={!open}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="nwt-title" className="tl-tracker" tabIndex={-1}>
        <div className="tl-tracker-head">
          <div>
            <span className="ui-eyebrow">{eyebrow}</span>
            <h2 id="nwt-title" className="tl-tracker-title">{title}</h2>
          </div>
          <button type="button" className="tl-close tl-close-static" aria-label={closeLabel} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Two-pane body */}
        <div className="ft-tracker-2pane">

          {/* LEFT: tab-lock / bootstrap / entry form */}
          <div className="ft-tracker-pane-form">
            {tabLockState === "blocked" ? (
              <div className="ft-tracker-blocked">
                <h3 style={{ fontFamily: "inherit", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>Networth Tracker is open in another tab.</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.5, marginBottom: 16 }}>Switch to that tab to continue, or close it and click Retry here.</p>
                <button className="ft-calc-btn" style={{ margin: 0, fontSize: 13, padding: "12px 0" }} onClick={() => window.location.reload()}>
                  Retry
                </button>
              </div>
            ) : bootstrapping ? (
              <div className="ft-tracker-loading" style={{ fontSize: 13, color: "#888", padding: "20px 0" }}>Loading your data…</div>
            ) : errorMsg && !userId ? (
              <div className="ft-tracker-error" style={{ fontSize: 13, color: "#b85c38", padding: "20px 0" }}>{errorMsg}</div>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {pendingN > 0 && (
                      <span className="ft-pending-badge" title="Entries not yet synced to server" style={{ fontSize: 11, color: "#b85c38", fontWeight: 500 }}>
                        {pendingN} unsynced
                      </span>
                    )}
                    {!serverReachable && (
                      <span className="ft-offline-badge" style={{ fontSize: 11, color: "#888" }}>Offline — showing saved data</span>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {!importUsedAt && (
                      <button
                        className="ft-calc-btn"
                        onClick={() => setImportOpen(true)}
                        disabled={bootstrapping || refreshing || saving || pendingN > 0}
                        title={pendingN > 0 ? "Sync pending entries via Refresh first" : undefined}
                        style={{ margin: 0, fontSize: 12, padding: "8px 14px", minWidth: 100, background: "transparent", color: "#1f3a52", border: "1px solid #1f3a52" }}
                      >
                        Import history
                      </button>
                    )}
                    <button
                      className="ft-calc-btn"
                      onClick={handleRefresh}
                      disabled={refreshing}
                      style={{ margin: 0, fontSize: 12, padding: "8px 14px", minWidth: 100 }}
                    >
                      {refreshing ? "Refreshing…" : "Refresh"}
                    </button>
                  </div>
                </div>
                {errorMsg && (
                  <div className="ft-tracker-error" style={{ marginBottom: 12, padding: "10px 14px", background: "rgba(184,92,56,0.08)", borderRadius: 8, fontSize: 12, color: "#b85c38" }}>
                    {errorMsg}
                  </div>
                )}

                <details className="ft-tracker-form-drawer">
                  <summary>
                    <span>+ Add / update entry</span>
                  </summary>
                  <div className="ft-tracker-form-drawer-body">

                <div className="ft-form-group" style={{ marginBottom: 14 }}>
                  <label className="ft-form-label">Month</label>
                  <input className="ft-form-input" type="month" value={nwtMonth} onChange={e => setNwtMonth(e.target.value)} />
                </div>

                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#4a7fcb", margin: "16px 0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 18, height: 2, background: "#4a7fcb" }} />Equity
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Stocks / ETFs (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.stocks || ""} onChange={e => setNwtFields(p => ({ ...p, stocks: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>

                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#9b7fcb", margin: "16px 0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 18, height: 2, background: "#9b7fcb" }} />Mutual Funds
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Equity Mutual Funds (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.mfEquity || ""} onChange={e => setNwtFields(p => ({ ...p, mfEquity: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Debt Mutual Funds (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.mfDebt || ""} onChange={e => setNwtFields(p => ({ ...p, mfDebt: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>

                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#6a8fc8", margin: "16px 0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 18, height: 2, background: "#6a8fc8" }} />Debt
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Fixed Deposits (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.fd || ""} onChange={e => setNwtFields(p => ({ ...p, fd: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">PPF / Bonds / NPS (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.bonds || ""} onChange={e => setNwtFields(p => ({ ...p, bonds: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>

                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#c9a84c", margin: "16px 0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 18, height: 2, background: "#c9a84c" }} />Gold &amp; Silver
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Physical Gold / Jewellery (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.gold || ""} onChange={e => setNwtFields(p => ({ ...p, gold: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">SGB / Digital Gold / Silver (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.sgb || ""} onChange={e => setNwtFields(p => ({ ...p, sgb: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>

                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#a0785a", margin: "16px 0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 18, height: 2, background: "#a0785a" }} />Real Estate
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Property Value (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.property || ""} onChange={e => setNwtFields(p => ({ ...p, property: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>

                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#6abf7a", margin: "16px 0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 18, height: 2, background: "#6abf7a" }} />Cash &amp; Other
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Savings Account (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.savings || ""} onChange={e => setNwtFields(p => ({ ...p, savings: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Other Assets (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.otherAsset || ""} onChange={e => setNwtFields(p => ({ ...p, otherAsset: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>

                <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#b85c38", margin: "16px 0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-block", width: 18, height: 2, background: "#b85c38" }} />Liabilities
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Home Loan (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.homeLoan || ""} onChange={e => setNwtFields(p => ({ ...p, homeLoan: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Car Loan (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.carLoan || ""} onChange={e => setNwtFields(p => ({ ...p, carLoan: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>
                <div className="ft-form-group" style={{ marginBottom: 10 }}>
                  <label className="ft-form-label">Personal Loan (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.personalLoan || ""} onChange={e => setNwtFields(p => ({ ...p, personalLoan: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>
                <div className="ft-form-group" style={{ marginBottom: 16 }}>
                  <label className="ft-form-label">Credit Card Dues (₹)</label>
                  <input className="ft-form-input" type="number" value={nwtFields.cc || ""} onChange={e => setNwtFields(p => ({ ...p, cc: Number(e.target.value) || 0 }))} placeholder="0" />
                </div>

                <button
                  className="ft-calc-btn"
                  style={{ margin: 0, fontSize: 13, padding: "12px 0", background: "var(--gold)", color: "var(--ink)" }}
                  onClick={handleAddNwtEntry}
                  disabled={saving}
                >
                  {saving ? "Saving…" : "Save This Month →"}
                </button>
                {nwtSaveMsg && (
                  <div style={{ marginTop: 10, padding: "10px 14px", background: "rgba(45,122,58,0.1)", borderRadius: 8, fontSize: 12, color: "#2d7a3a", fontWeight: 500 }}>
                    ✓ Saved! Charts updated.
                  </div>
                )}

                  </div>
                </details>
              </div>
            )}
          </div>

          {/* RIGHT: charts + history */}
          <div className="ft-tracker-pane-charts">
            {!sortedData.length ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", opacity: 0.45, textAlign: "center" }}>
                <div style={{ marginBottom: 14, color: "var(--ink)", lineHeight: 0 }}><SketchIcon name="bar-chart" size={48} /></div>
                <div style={{ fontFamily: "inherit", fontSize: 18, fontWeight: 700, color: "var(--ink)" }}>Your charts will appear here</div>
                <div style={{ fontSize: 13, color: "#999", marginTop: 6 }}>Log your first month to get started</div>
              </div>
            ) : (() => {
              const latest = sortedData[sortedData.length - 1];
              const prev = sortedData.length > 1 ? sortedData[sortedData.length - 2] : null;
              const latestNw = monthNw(latest);
              const prevNw = prev ? monthNw(prev) : null;
              const change = prev ? latestNw - monthNw(prev) : null;
              const changePct = (change !== null && prevNw !== null && prevNw !== 0)
                ? (change / Math.abs(prevNw)) * 100
                : null;
              const [ly, lm] = latest.month.split("-");
              const latestLabel = new Date(+ly, +lm - 1, 1).toLocaleString("en-IN", { month: "long", year: "numeric" });
              const { equity = 0, mutualFunds = 0, debt = 0, gold = 0, realestate = 0, cash = 0 } = latest.alloc || {};
              const allocTotal = equity + mutualFunds + debt + gold + realestate + cash;
              const allocColors = ["#4a7fcb", "#9b7fcb", "#6a8fc8", "#e8c35a", "#a0785a", "#6abf7a"];
              const allocLabels = ["Equity", "Mutual Funds", "Debt", "Gold & Silver", "Real Estate", "Cash & Other"];
              const allocValues = [equity, mutualFunds, debt, gold, realestate, cash];
              return (
                <div>
                  {/* Summary strip */}
                  <div className="ft-tracker-summary">
                    <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, padding: "16px 18px" }}>
                      <div style={{ fontSize: 11, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Latest Net Worth</div>
                      <div style={{ fontFamily: "inherit", fontSize: 20, fontWeight: 700, color: latestNw >= 0 ? "var(--ink)" : "#b85c38" }}>{fmt(latestNw)}</div>
                      <div style={{ fontSize: 11, color: "#bbb", marginTop: 4 }}>{latestLabel}</div>
                    </div>
                    <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, padding: "16px 18px" }}>
                      <div style={{ fontSize: 11, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Month-on-Month Change</div>
                      <div style={{ fontFamily: "inherit", fontSize: 20, fontWeight: 700, color: change === null ? "#aaa" : change >= 0 ? "#2d7a3a" : "#b85c38" }}>
                        {change === null ? "—" : (change >= 0 ? "+" : "") + fmt(change)}
                        {changePct !== null && (
                          <span style={{ fontSize: 13, fontWeight: 500, marginLeft: 6, opacity: 0.85 }}>
                            ({changePct >= 0 ? "+" : ""}{changePct.toFixed(1)}%)
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 11, color: "#bbb", marginTop: 4 }}>{change === null ? "First entry" : "vs prev month"}</div>
                    </div>
                    <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, padding: "16px 18px" }}>
                      <div style={{ fontSize: 11, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Total Entries</div>
                      <div style={{ fontFamily: "inherit", fontSize: 20, fontWeight: 700, color: "var(--ink)" }}>{sortedData.length}</div>
                      <div style={{ fontSize: 11, color: "#bbb", marginTop: 4 }}>months tracked</div>
                    </div>
                  </div>

                  {/* Charts row */}
                  <div className={`ft-tracker-charts-row${allocTotal > 0 ? "" : " ft-tracker-charts-row--two"}`}>
                    <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, padding: "18px 20px" }}>
                      <div style={{ fontFamily: "inherit", fontSize: 14, fontWeight: 700, marginBottom: 2 }}>Net Worth Over Time</div>
                      <div style={{ fontSize: 11, color: "#aaa", marginBottom: 12 }}>Monthly trend (₹)</div>
                      <div style={{ position: "relative", height: 200 }}>
                        <canvas ref={nwtLineRef} />
                      </div>
                    </div>
                    <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, padding: "18px 20px" }}>
                      <div style={{ fontFamily: "inherit", fontSize: 14, fontWeight: 700, marginBottom: 2 }}>Monthly Breakdown</div>
                      <div style={{ fontSize: 11, color: "#aaa", marginBottom: 12 }}>Green = positive · Red = negative</div>
                      <div style={{ position: "relative", height: 200 }}>
                        <canvas ref={nwtBarRef} />
                      </div>
                    </div>
                    {allocTotal > 0 && (
                      <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, padding: "18px 20px" }}>
                        <div style={{ fontFamily: "inherit", fontSize: 14, fontWeight: 700, marginBottom: 2 }}>Asset Allocation</div>
                        <div style={{ fontSize: 11, color: "#aaa", marginBottom: 12 }}>Latest month · by category</div>
                        <div style={{ position: "relative", height: 160 }}>
                          <canvas ref={nwtDonutRef} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 12 }}>
                          {allocLabels.map((l, i) => allocValues[i] ? (
                            <div key={l} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <div style={{ width: 10, height: 10, borderRadius: "50%", background: allocColors[i], flexShrink: 0 }} />
                              <div>
                                <div style={{ fontSize: 12, fontWeight: 500 }}>{l}</div>
                                <div style={{ fontSize: 11, color: "#aaa" }}>{fmt(allocValues[i])} · {((allocValues[i] / allocTotal) * 100).toFixed(1)}%</div>
                              </div>
                            </div>
                          ) : null)}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Entry log */}
                  <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, overflow: "hidden", marginTop: 20 }}>
                    <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                      <div style={{ fontFamily: "inherit", fontSize: 15, fontWeight: 700 }}>Entry Log</div>
                    </div>
                    <div style={{ overflowX: "auto" }}>
                      <table className="ft-tracker-entry-log" style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                          <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                            {["Month", "Assets", "Liabilities", "Net Worth"].map(h => (
                              <th key={h} style={{ padding: "10px 20px", textAlign: "left", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: "#bbb", fontWeight: 500 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[...sortedData].reverse().map(d => {
                            const [y, m] = d.month.split("-");
                            const label = new Date(+y, +m - 1, 1).toLocaleString("en-IN", { month: "long", year: "numeric" });
                            const dAssets = sumValues(d.assets);
                            const dLiabs = sumValues(d.liabs);
                            const dNw = dAssets - dLiabs;
                            const isOpen = expandedIds.has(d.id);
                            const assetRows = Object.entries(d.assets || {}).filter(([, v]) => Number(v) !== 0);
                            const liabRows = Object.entries(d.liabs || {}).filter(([, v]) => Number(v) !== 0);
                            return (
                              <Fragment key={d.id}>
                                <tr
                                  style={{
                                    borderBottom: isOpen ? "1px solid rgba(0,0,0,0.04)" : "1px solid rgba(0,0,0,0.06)",
                                    cursor: "pointer",
                                    background: isOpen ? "rgba(201,168,76,0.06)" : undefined,
                                  }}
                                  onClick={() => {
                                    setExpandedIds(prev => {
                                      const next = new Set(prev);
                                      if (next.has(d.id)) next.delete(d.id); else next.add(d.id);
                                      return next;
                                    });
                                  }}
                                  onMouseEnter={(e) => {
                                    setHoveredEntry(d);
                                    setHoverPos({ x: e.clientX, y: e.clientY });
                                  }}
                                  onMouseMove={(e) => setHoverPos({ x: e.clientX, y: e.clientY })}
                                  onMouseLeave={() => setHoveredEntry(null)}
                                >
                                  <td style={{ padding: "11px 20px", fontSize: 13, fontWeight: 500 }}>
                                    <span style={{ display: "inline-block", width: 10, color: "#bbb", marginRight: 6, fontSize: 10 }}>{isOpen ? "▾" : "▸"}</span>
                                    {label}
                                  </td>
                                  <td style={{ padding: "11px 20px", fontSize: 13, color: "#2d7a3a" }}>{fmt(dAssets)}</td>
                                  <td style={{ padding: "11px 20px", fontSize: 13, color: "#b85c38" }}>{fmt(dLiabs)}</td>
                                  <td style={{ padding: "11px 20px", fontSize: 13, fontWeight: 700, color: dNw >= 0 ? "#2d7a3a" : "#b85c38" }}>{fmt(dNw)}</td>
                                </tr>
                                {isOpen && (
                                  <tr style={{ background: "#fdfcf9", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                                    <td colSpan={4} style={{ padding: "14px 24px 18px" }}>
                                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                                        <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: 1 }}>
                                          Breakdown · {label}
                                        </div>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            if (expandedIds.size > 1) {
                                              setExpandedIds(new Set());
                                            } else {
                                              setExpandedIds(prev => { const n = new Set(prev); n.delete(d.id); return n; });
                                            }
                                          }}
                                          style={{
                                            background: "transparent",
                                            border: "1px solid rgba(0,0,0,0.15)",
                                            borderRadius: 6,
                                            padding: "4px 10px",
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: "#555",
                                            cursor: "pointer",
                                          }}
                                        >
                                          {expandedIds.size > 1 ? "Collapse all" : "Collapse"}
                                        </button>
                                      </div>
                                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                                        {/* Assets */}
                                        <div>
                                          <div style={{ fontSize: 11, fontWeight: 600, color: "#2d7a3a", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                                            Assets
                                          </div>
                                          {assetRows.length === 0 ? (
                                            <div style={{ fontSize: 12, color: "#aaa" }}>No assets recorded.</div>
                                          ) : (
                                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                              <tbody>
                                                {assetRows.map(([k, v]) => (
                                                  <tr key={k} style={{ borderBottom: "1px dashed rgba(0,0,0,0.05)" }}>
                                                    <td style={{ padding: "5px 0", fontSize: 12, color: "#555" }}>{humanizeKey(k)}</td>
                                                    <td style={{ padding: "5px 0", fontSize: 12, textAlign: "right", fontWeight: 500, color: "#222" }}>{fmt(Number(v))}</td>
                                                  </tr>
                                                ))}
                                              </tbody>
                                            </table>
                                          )}
                                        </div>
                                        {/* Liabilities */}
                                        <div>
                                          <div style={{ fontSize: 11, fontWeight: 600, color: "#b85c38", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                                            Liabilities
                                          </div>
                                          {liabRows.length === 0 ? (
                                            <div style={{ fontSize: 12, color: "#aaa" }}>No liabilities recorded.</div>
                                          ) : (
                                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                              <tbody>
                                                {liabRows.map(([k, v]) => (
                                                  <tr key={k} style={{ borderBottom: "1px dashed rgba(0,0,0,0.05)" }}>
                                                    <td style={{ padding: "5px 0", fontSize: 12, color: "#555" }}>{humanizeKey(k)}</td>
                                                    <td style={{ padding: "5px 0", fontSize: 12, textAlign: "right", fontWeight: 500, color: "#222" }}>{fmt(Number(v))}</td>
                                                  </tr>
                                                ))}
                                              </tbody>
                                            </table>
                                          )}
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </Fragment>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
        {userId && importOpen && (
          <ImportModal
            open={importOpen}
            userId={userId}
            onClose={() => setImportOpen(false)}
            onCommitted={async (count) => {
              // Pull fresh data + flag from server; close modal.
              try {
                const { entries, importUsedAt: ts } = await refreshTracker(userId);
                setNwtData(entries);
                setImportUsedAt(ts);
              } catch {
                // Server unreachable; the next manual refresh will update.
              }
              setImportOpen(false);
              // count param is informational; could surface via a toast in future.
              void count;
            }}
          />
        )}
        {hoveredEntry && <TrackerHoverPopup entry={hoveredEntry} pos={hoverPos} />}
      </div>
    </div>
  );
}
