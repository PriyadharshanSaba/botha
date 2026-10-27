"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import type { NwtEntry } from "@/app/lib/networth/types";
import {
  initTracker,
  saveEntry,
  refresh as refreshTracker,
  pendingCount,
} from "@/app/lib/networth/client";
import { acquireTabLock } from "@/app/lib/networth/tab-lock";
import { formatInr as fmt } from "@/app/lib/tools/calculators";
import { monthNw } from "./trackerFormat";
ChartJS.register(...registerables);

// Net Worth Tracker state, sync and charts, moved unchanged from the old /tools page.
// Called at page level (as before) so the tab lock and data load start when /tools opens.
export function useNetWorthTracker() {
  const [userId, setUserId] = useState<string | null>(null);
  const [tabLockState, setTabLockState] = useState<"checking" | "owned" | "blocked">("checking");
  const [nwtMonth, setNwtMonth] = useState("");
  const [nwtSaveMsg, setNwtSaveMsg] = useState(false);
  const [nwtData, setNwtData] = useState<NwtEntry[]>([]);
  const [bootstrapping, setBootstrapping] = useState(true);
  const [serverReachable, setServerReachable] = useState(true);
  const [saving, setSaving] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [pendingN, setPendingN] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [importUsedAt, setImportUsedAt] = useState<string | null>(null);
  const [importOpen, setImportOpen] = useState(false);
  const [hoveredEntry, setHoveredEntry] = useState<NwtEntry | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const tabLockReleaseRef = useRef<() => void>(() => {});
  const [nwtFields, setNwtFields] = useState({
    stocks: 0, mfEquity: 0, mfDebt: 0, fd: 0, bonds: 0,
    gold: 0, sgb: 0, property: 0, savings: 0, otherAsset: 0,
    homeLoan: 0, carLoan: 0, personalLoan: 0, cc: 0,
  });
  const nwtLineRef = useRef<HTMLCanvasElement | null>(null);
  const nwtBarRef = useRef<HTMLCanvasElement | null>(null);
  const nwtDonutRef = useRef<HTMLCanvasElement | null>(null);
  const nwtLineInst = useRef<ChartJS | null>(null);
  const nwtBarInst = useRef<ChartJS | null>(null);
  const nwtDonutInst = useRef<ChartJS | null>(null);

  const sortedData = useMemo(
    () => [...nwtData].sort((a, b) => a.month.localeCompare(b.month)),
    [nwtData],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const meRes = await fetch("/api/me");
        if (!meRes.ok) {
          setErrorMsg("Please sign in.");
          setBootstrapping(false);
          return;
        }
        const me = (await meRes.json()) as { loggedIn: boolean; id?: string };
        if (!me.loggedIn || !me.id) {
          setErrorMsg("Please sign in.");
          setBootstrapping(false);
          return;
        }
        const id = me.id;
        if (cancelled) return;
        setUserId(id);

        const lock = await acquireTabLock(id);
        if (cancelled) {
          lock.release();
          return;
        }
        if (!lock.acquired) {
          setTabLockState("blocked");
          setBootstrapping(false);
          return;
        }
        tabLockReleaseRef.current = lock.release;
        setTabLockState("owned");

        const now = new Date();
        setNwtMonth(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`);

        const result = await initTracker(id);
        if (cancelled) return;
        setNwtData(result.entries);
        setImportUsedAt(result.importUsedAt);
        setServerReachable(result.serverReachable);
        setPendingN(pendingCount(id));
        setBootstrapping(false);
      } catch {
        if (cancelled) return;
        setErrorMsg("Couldn't reach server. Please retry.");
        setBootstrapping(false);
      }
    })();

    return () => {
      cancelled = true;
      tabLockReleaseRef.current?.();
    };
  }, []);

  /* destroy chart instances on unmount */
  useEffect(() => {
    return () => {
      nwtLineInst.current?.destroy();
      nwtBarInst.current?.destroy();
      nwtDonutInst.current?.destroy();
      nwtLineInst.current = null;
      nwtBarInst.current = null;
      nwtDonutInst.current = null;
    };
  }, []);

  async function handleAddNwtEntry() {
    if (!userId || saving) return;
    if (!nwtMonth) { alert("Select a month."); return; }
    setErrorMsg(null);
    setSaving(true);
    const f = nwtFields;
    const equity = f.stocks;
    const mutualFunds = f.mfEquity + f.mfDebt;
    const debt = f.fd + f.bonds;
    const gold = f.gold + f.sgb;
    const realestate = f.property;
    const cash = f.savings + f.otherAsset;
    const result = await saveEntry(userId, {
      month: nwtMonth,
      assets: {
        stocks: f.stocks, mfEquity: f.mfEquity, mfDebt: f.mfDebt, fd: f.fd, bonds: f.bonds,
        gold: f.gold, sgb: f.sgb, property: f.property, savings: f.savings, otherAsset: f.otherAsset,
      },
      liabs: {
        homeLoan: f.homeLoan, carLoan: f.carLoan, personalLoan: f.personalLoan, cc: f.cc,
      },
      alloc: { equity, mutualFunds, debt, gold, realestate, cash },
    });
    setNwtData(result.entries);
    setPendingN(pendingCount(userId));
    if (!result.ok) {
      setErrorMsg(
        result.reason === "network"
          ? "Saved locally. We'll retry when you're back online."
          : "Server error. Saved locally and we'll retry on Refresh.",
      );
    } else {
      setNwtSaveMsg(true);
      setTimeout(() => setNwtSaveMsg(false), 3000);
      setNwtFields({ stocks: 0, mfEquity: 0, mfDebt: 0, fd: 0, bonds: 0, gold: 0, sgb: 0, property: 0, savings: 0, otherAsset: 0, homeLoan: 0, carLoan: 0, personalLoan: 0, cc: 0 });
    }
    setSaving(false);
  }

  async function handleRefresh() {
    if (!userId || refreshing) return;
    setErrorMsg(null);
    setRefreshing(true);
    try {
      const { entries, importUsedAt: ts } = await refreshTracker(userId);
      setNwtData(entries);
      setImportUsedAt(ts);
      setPendingN(pendingCount(userId));
      setServerReachable(true);
    } catch (e) {
      setErrorMsg(
        e instanceof Error && e.message.startsWith("refresh-blocked")
          ? "Some entries couldn't be synced. We'll retry on next save."
          : "Refresh failed. Please try again.",
      );
    } finally {
      setRefreshing(false);
    }
  }

  /* chart rendering */
  useEffect(() => {
    if (!sortedData.length) return;
    const t = setTimeout(() => {
      const months = sortedData.map(d => {
        const [y, m] = d.month.split("-");
        return new Date(+y, +m - 1, 1).toLocaleString("en-IN", { month: "short", year: "2-digit" });
      });
      const vals = sortedData.map(monthNw);

      /* line chart */
      if (nwtLineRef.current) {
        if (nwtLineInst.current) nwtLineInst.current.destroy();
        nwtLineInst.current = new ChartJS(nwtLineRef.current, {
          type: "line",
          data: { labels: months, datasets: [{ label: "Net Worth", data: vals, borderColor: "#c9a84c", backgroundColor: "rgba(201,168,76,0.08)", borderWidth: 2.5, pointBackgroundColor: vals.map(v => v >= 0 ? "#c9a84c" : "#b85c38"), pointRadius: 5, tension: 0.35, fill: true }] },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => " " + fmt(Number(ctx.parsed.y)) } } }, scales: { x: { ticks: { font: { size: 11 }, color: "#aaa" } }, y: { beginAtZero: true, ticks: { font: { size: 11 }, color: "#aaa", callback: v => { const n = Number(v); if (Math.abs(n) >= 1e7) return "₹" + (n / 1e7).toFixed(1) + "Cr"; if (Math.abs(n) >= 1e5) return "₹" + (n / 1e5).toFixed(1) + "L"; return "₹" + n.toLocaleString("en-IN"); } } } } },
        });
      }

      /* bar chart */
      if (nwtBarRef.current) {
        if (nwtBarInst.current) nwtBarInst.current.destroy();
        nwtBarInst.current = new ChartJS(nwtBarRef.current, {
          type: "bar",
          data: { labels: months, datasets: [{ label: "Net Worth", data: vals, backgroundColor: vals.map(v => v >= 0 ? "rgba(45,122,58,0.75)" : "rgba(184,92,56,0.75)"), borderColor: vals.map(v => v >= 0 ? "#2d7a3a" : "#b85c38"), borderWidth: 1.5, borderRadius: 4 }] },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => " " + fmt(Number(ctx.parsed.y)) } } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 10 }, color: "#aaa" } }, y: { beginAtZero: true, ticks: { font: { size: 10 }, color: "#aaa", callback: v => { const n = Number(v); if (Math.abs(n) >= 1e7) return "₹" + (n / 1e7).toFixed(1) + "Cr"; if (Math.abs(n) >= 1e5) return "₹" + (n / 1e5).toFixed(1) + "L"; return "₹" + n.toLocaleString("en-IN"); } } } } },
        });
      }

      /* donut chart */
      const latest = sortedData[sortedData.length - 1];
      const { equity = 0, mutualFunds = 0, debt = 0, gold = 0, realestate = 0, cash = 0 } = latest.alloc || {};
      const allocTotal = equity + mutualFunds + debt + gold + realestate + cash;
      if (nwtDonutRef.current && allocTotal > 0) {
        if (nwtDonutInst.current) nwtDonutInst.current.destroy();
        nwtDonutInst.current = new ChartJS(nwtDonutRef.current, {
          type: "pie",
          data: { labels: ["Equity", "Mutual Funds", "Debt", "Gold & Silver", "Real Estate", "Cash & Other"], datasets: [{ data: [equity, mutualFunds, debt, gold, realestate, cash], backgroundColor: ["#4a7fcb", "#9b7fcb", "#6a8fc8", "#e8c35a", "#a0785a", "#6abf7a"], borderColor: ["#3a6ab8", "#8a6ab8", "#4a7ab5", "#d4a832", "#8a6040", "#4fa860"], borderWidth: 1.5, hoverOffset: 6 }] },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => " " + fmt(ctx.parsed) + " (" + ((ctx.parsed / allocTotal) * 100).toFixed(1) + "%)" } } } },
        });
      }
    }, 50);
    return () => clearTimeout(t);
  }, [sortedData]);

  return {
    userId, tabLockState, bootstrapping, serverReachable, errorMsg, pendingN,
    nwtMonth, setNwtMonth, nwtFields, setNwtFields, nwtSaveMsg, saving, handleAddNwtEntry,
    refreshing, handleRefresh, setNwtData, importUsedAt, setImportUsedAt, importOpen, setImportOpen,
    sortedData, nwtLineRef, nwtBarRef, nwtDonutRef,
    expandedIds, setExpandedIds, hoveredEntry, setHoveredEntry, hoverPos, setHoverPos,
  };
}

export type NetWorthTracker = ReturnType<typeof useNetWorthTracker>;
