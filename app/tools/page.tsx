"use client";

import "./tools.css";
import "../landing.css";
import "../about/about.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

/* ── helpers ── */
function fmt(n: number) {
  return "\u20B9" + Math.round(n).toLocaleString("en-IN");
}

/* ── tool card data ── */
const tools = [
  { id: "networth", num: "01", icon: "\uD83C\uDFE6", name: "Net Worth Calculator", desc: "Add up everything you own and owe \u2014 see where you truly stand.", tags: ["Assets", "Liabilities"], free: true },
  { id: "sip", num: "02", icon: "\uD83D\uDCC8", name: "SIP Calculator", desc: "Project your mutual fund SIP corpus with optional annual step-up.", tags: ["Compounding", "Step-Up"], free: true },
  { id: "budget", num: "03", icon: "\uD83D\uDCCA", name: "Budget Planner", desc: "Split your income into Needs, Wants and Savings with a suggested SIP.", tags: ["50/30/20", "Monthly Plan"], free: true },
  { id: "goal", num: "04", icon: "\uD83C\uDFAF", name: "Goal-Based SIP Planner", desc: "Work backwards from a target amount to find the SIP you need.", tags: ["Goal Planning", "Timeline"], free: true },
  { id: "tax", num: "05", icon: "\uD83E\uDDFE", name: "Tax Estimator", desc: "Estimate income tax under the New Regime for FY 2025-26.", tags: ["New Regime", "LTCG/STCG"], free: true },
  { id: "rebalance", num: "06", icon: "\u2696\uFE0F", name: "Rebalancing Calculator", desc: "Compare your current allocation to targets and see what to buy or sell.", tags: ["Allocation", "Drift"], free: true },
  { id: "tracker", num: "07", icon: "\uD83D\uDCC5", name: "Net Worth Tracker", desc: "Log your net worth monthly and track progress over time with charts.", tags: ["Monthly Log", "Charts"], free: false },
];

export default function ToolsPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();

  /* ── active modal ── */
  const [activeModal, setActiveModal] = useState<string | null>(null);

  /* ── lock body scroll when modal open ── */
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  /* ── auth check ── */
  useEffect(() => {
    fetch("/api/me").then((r) => r.json()).then((d) => setLoggedIn(d.loggedIn));
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) setAccountOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    setLoggedIn(false);
    router.push("/");
    router.refresh();
  }

  /* ── reveal animation ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }

  /* ═══════════════════════════════════════════
     CALCULATOR STATES
     ═══════════════════════════════════════════ */

  /* ── Net Worth ── */
  const [nwAssets, setNwAssets] = useState({ savings: 0, mf: 0, stocks: 0, re: 0, gold: 0, other: 0 });
  const [nwLiabilities, setNwLiabilities] = useState({ home: 0, car: 0, personal: 0, cc: 0 });
  const [nwResult, setNwResult] = useState<{ assets: number; liabilities: number; net: number } | null>(null);

  function calcNetWorth() {
    const a = Object.values(nwAssets).reduce((s, v) => s + Number(v), 0);
    const l = Object.values(nwLiabilities).reduce((s, v) => s + Number(v), 0);
    setNwResult({ assets: a, liabilities: l, net: a - l });
  }

  /* ── SIP ── */
  const [sipAmt, setSipAmt] = useState(10000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  const [sipStepUp, setSipStepUp] = useState(false);
  const [sipStepPct, setSipStepPct] = useState(10);
  const [sipResult, setSipResult] = useState<{ invested: number; gains: number; maturity: number } | null>(null);

  function calcSip() {
    const r = sipRate / 100 / 12;
    const n = sipYears * 12;
    if (!sipStepUp) {
      const fv = sipAmt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const invested = sipAmt * n;
      setSipResult({ invested, gains: fv - invested, maturity: fv });
    } else {
      let total = 0;
      let invested = 0;
      let monthly = sipAmt;
      for (let y = 0; y < sipYears; y++) {
        for (let m = 0; m < 12; m++) {
          const monthsLeft = n - (y * 12 + m) - 1;
          total += monthly * Math.pow(1 + r, monthsLeft + 1);
          invested += monthly;
        }
        monthly = monthly * (1 + sipStepPct / 100);
      }
      setSipResult({ invested, gains: total - invested, maturity: total });
    }
  }

  /* ── Budget Planner ── */
  const [budgetIncome, setBudgetIncome] = useState(100000);
  const [budgetNeeds, setBudgetNeeds] = useState(50);
  const [budgetWants, setBudgetWants] = useState(30);
  const [budgetSavings, setBudgetSavings] = useState(20);
  const [budgetSipPct, setBudgetSipPct] = useState(70);
  const budgetTotal = budgetNeeds + budgetWants + budgetSavings;
  const budgetNeedsAmt = budgetIncome * budgetNeeds / 100;
  const budgetWantsAmt = budgetIncome * budgetWants / 100;
  const budgetSavingsAmt = budgetIncome * budgetSavings / 100;
  const budgetSipAmt = budgetSavingsAmt * budgetSipPct / 100;

  /* ── Goal-Based SIP ── */
  const [goalTarget, setGoalTarget] = useState(5000000);
  const [goalYears, setGoalYears] = useState(10);
  const [goalRate, setGoalRate] = useState(12);
  const [goalExisting, setGoalExisting] = useState(0);
  const [goalResult, setGoalResult] = useState<{ fvExisting: number; gap: number; sip: number; totalInvested: number; sipCorpus: number; totalCorpus: number } | null>(null);

  function calcGoal() {
    const r = goalRate / 100 / 12;
    const n = goalYears * 12;
    const fvExisting = goalExisting * Math.pow(1 + goalRate / 100 / 12, n);
    const gap = Math.max(goalTarget - fvExisting, 0);
    let sip = 0;
    if (gap > 0) {
      sip = gap * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
    }
    const totalInvested = sip * n;
    const sipCorpus = gap;
    const totalCorpus = fvExisting + sipCorpus;
    setGoalResult({ fvExisting, gap, sip, totalInvested, sipCorpus, totalCorpus });
  }

  /* ── Tax Estimator ── */
  const [taxSalary, setTaxSalary] = useState(0);
  const [taxBusiness, setTaxBusiness] = useState(0);
  const [taxRentGross, setTaxRentGross] = useState(0);
  const [taxMuniTax, setTaxMuniTax] = useState(0);
  const [taxHomeLoanInt, setTaxHomeLoanInt] = useState(0);
  const [taxStcgEq, setTaxStcgEq] = useState(0);
  const [taxStcgDebt, setTaxStcgDebt] = useState(0);
  const [taxLtcgEq, setTaxLtcgEq] = useState(0);
  const [taxLtcgDebtPre, setTaxLtcgDebtPre] = useState(0);
  const [taxLtcgDebtPost, setTaxLtcgDebtPost] = useState(0);
  const [taxInterest, setTaxInterest] = useState(0);
  const [taxDividends, setTaxDividends] = useState(0);
  const [taxOtherInc, setTaxOtherInc] = useState(0);
  const [taxResult, setTaxResult] = useState<{
    salaryNet: number; hpNet: number; businessNet: number; otherNet: number;
    totalNormal: number; slabTax: number; rebate87a: number; marginalReliefRebate: number;
    stcgEqTax: number; stcgDebtTax: number; ltcgEqTax: number; ltcgDebtPreTax: number; ltcgDebtPostTax: number;
    totalCgTax: number; surcharge: number; marginalReliefSurcharge: number; cess: number; totalTax: number; effectiveRate: number;
  } | null>(null);

  function calcTax() {
    /* Head 1: Salary */
    const salaryNet = Math.max(taxSalary - 75000, 0);
    /* Head 2: Business */
    const businessNet = taxBusiness;
    /* Head 3: House Property */
    const nav = Math.max(taxRentGross - taxMuniTax, 0);
    const stdDed30 = nav * 0.3;
    const hpNet = nav - stdDed30 - taxHomeLoanInt;
    /* Head 5: Other Sources */
    const otherNet = taxInterest + taxDividends + taxOtherInc;

    /* Total normal income (slab) */
    const totalNormal = salaryNet + businessNet + hpNet + otherNet + taxStcgDebt + taxLtcgDebtPost;

    /* New Regime slabs FY 2025-26 */
    function slabCalc(income: number) {
      const slabs = [
        [400000, 0], [400000, 0.05], [400000, 0.10], [400000, 0.15],
        [400000, 0.20], [400000, 0.25], [Infinity, 0.30],
      ];
      let tax = 0;
      let rem = income;
      for (const [limit, rate] of slabs) {
        const taxable = Math.min(rem, limit);
        tax += taxable * rate;
        rem -= taxable;
        if (rem <= 0) break;
      }
      return tax;
    }

    let slabTax = slabCalc(Math.max(totalNormal, 0));

    /* 87A rebate */
    let rebate87a = 0;
    let marginalReliefRebate = 0;
    if (totalNormal <= 1200000) {
      rebate87a = Math.min(slabTax, 60000);
    } else if (totalNormal <= 1275000) {
      /* marginal relief: tax payable should not exceed income above 12L */
      const excess = totalNormal - 1200000;
      const normalRebate = Math.min(slabTax, 60000);
      const taxAfterRebate = slabTax - normalRebate;
      if (taxAfterRebate > excess) {
        rebate87a = slabTax - excess;
        marginalReliefRebate = normalRebate - rebate87a;
      } else {
        rebate87a = normalRebate;
      }
    }

    const taxAfterRebate = slabTax - rebate87a;

    /* Capital Gains tax (separate) */
    const stcgEqTax = taxStcgEq * 0.20;
    const stcgDebtTax = 0; /* taxed at slab, already in totalNormal */
    const ltcgEqExempt = 125000;
    const ltcgEqTax = Math.max(taxLtcgEq - ltcgEqExempt, 0) * 0.125;
    const ltcgDebtPreTax = taxLtcgDebtPre * 0.125;
    const ltcgDebtPostTax = 0; /* taxed at slab, already in totalNormal */
    const totalCgTax = stcgEqTax + stcgDebtTax + ltcgEqTax + ltcgDebtPreTax + ltcgDebtPostTax;

    const preSurcharge = taxAfterRebate + totalCgTax;

    /* Surcharge */
    const totalIncome = totalNormal + taxStcgEq + taxLtcgEq + taxLtcgDebtPre;
    let surchargeRate = 0;
    if (totalIncome > 20000000) surchargeRate = 0.25;
    else if (totalIncome > 10000000) surchargeRate = 0.15;
    else if (totalIncome > 5000000) surchargeRate = 0.10;

    let surcharge = preSurcharge * surchargeRate;

    /* Marginal relief on surcharge */
    let marginalReliefSurcharge = 0;
    if (surchargeRate > 0) {
      let lowerThreshold = 0;
      let lowerRate = 0;
      if (totalIncome > 20000000) { lowerThreshold = 20000000; lowerRate = 0.15; }
      else if (totalIncome > 10000000) { lowerThreshold = 10000000; lowerRate = 0.10; }
      else if (totalIncome > 5000000) { lowerThreshold = 5000000; lowerRate = 0; }

      const taxAtThreshold = slabCalc(lowerThreshold) * (1 + lowerRate);
      const excess = totalIncome - lowerThreshold;
      if (preSurcharge + surcharge > taxAtThreshold + excess) {
        const relief = (preSurcharge + surcharge) - (taxAtThreshold + excess);
        if (relief > 0) {
          marginalReliefSurcharge = relief;
          surcharge = Math.max(surcharge - relief, 0);
        }
      }
    }

    const afterSurcharge = preSurcharge + surcharge;

    /* Cess */
    const cess = afterSurcharge * 0.04;
    const totalTax = afterSurcharge + cess;
    const effectiveRate = totalIncome > 0 ? (totalTax / totalIncome) * 100 : 0;

    setTaxResult({
      salaryNet, hpNet, businessNet, otherNet,
      totalNormal, slabTax, rebate87a, marginalReliefRebate,
      stcgEqTax, stcgDebtTax, ltcgEqTax, ltcgDebtPreTax, ltcgDebtPostTax,
      totalCgTax, surcharge, marginalReliefSurcharge, cess, totalTax, effectiveRate,
    });
  }

  /* ── Rebalancing ── */
  const rebalLabels = ["Equity", "Debt", "Jewellery", "Real Estate", "Cash / Liquid", "Other Assets"];
  const rebalColors = ["#4f8cff", "#c9a84c", "#e0a040", "#7b61ff", "#28a745", "#888"];
  const [rebalCurrent, setRebalCurrent] = useState([0, 0, 0, 0, 0, 0]);
  const [rebalTarget, setRebalTarget] = useState([60, 20, 5, 10, 5, 0]);
  const [rebalResult, setRebalResult] = useState<{ total: number; diffs: { label: string; color: string; currentPct: number; targetPct: number; diff: number; action: string }[] } | null>(null);

  const rebalTotal = rebalCurrent.reduce((s, v) => s + Number(v), 0);
  const rebalTargetSum = rebalTarget.reduce((s, v) => s + Number(v), 0);

  function calcRebalance() {
    const total = rebalTotal;
    if (total <= 0) return;
    const diffs = rebalLabels.map((label, i) => {
      const currentPct = (rebalCurrent[i] / total) * 100;
      const targetPct = rebalTarget[i];
      const diff = (targetPct / 100) * total - rebalCurrent[i];
      const driftPp = Math.abs(targetPct - currentPct);
      let action = "On target";
      if (driftPp > 1 || Math.abs(diff) > 500) {
        action = diff > 0 ? "BUY" : "SELL";
      }
      return { label, color: rebalColors[i], currentPct, targetPct, diff, action };
    });
    setRebalResult({ total, diffs });
  }

  /* ═══════════════════════════════════════════
     MARQUEE DATA
     ═══════════════════════════════════════════ */
  const marqueeItems = ["Net Worth", "SIP Calculator", "Budget Planner", "Goal Planner", "Tax Estimator", "Rebalancing", "Net Worth Tracker"];

  /* ═══════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════ */
  return (
    <div className="ft-page">
      {/* ── NAV ── */}
      <nav className="landing-nav">
        <Link href="/" className="logo">
          <div className="logo-mark">
            <Image src="/logo.svg" alt="Bodha" width={24} height={24} style={{ position: "relative", zIndex: 1 }} />
          </div>
          <div className="logo-text">Bodha</div>
        </Link>
        {loggedIn ? (
          <div className="about-nav-right">
            <Link href="/modules" className="about-nav-link">{t("courses")}</Link>
            <Link href="/vcfo" className="about-nav-link">{t("virtualCfo")}</Link>
            <Link href="/venture" className="about-nav-link">{t("ventureCapital")}</Link>
            <Link href="/tools" className="about-nav-link" style={{ color: "var(--gold)" }}>{t("tools")}</Link>
            <Link href="#" className="about-nav-link">{t("insights")}</Link>
            <Link href="/about" className="about-nav-link">{t("aboutUs")}</Link>
            <div className="about-account-wrapper" ref={accountRef}>
              <button className="about-account-btn" onClick={() => setAccountOpen(!accountOpen)}>
                {t("account")}
                <span className={`about-account-arrow ${accountOpen ? "open" : ""}`}>&#9662;</span>
              </button>
              {accountOpen && (
                <div className="about-account-dropdown">
                  <button className="about-dropdown-item" onClick={() => { setLang(lang === "en" ? "kn" : "en"); setAccountOpen(false); }}>
                    {lang === "en" ? "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1" : "English"}
                  </button>
                  <Link href="#" className="about-dropdown-item" onClick={() => setAccountOpen(false)}>{t("settings")}</Link>
                  <button className="about-dropdown-item about-dropdown-logout" onClick={() => { setAccountOpen(false); handleLogout(); }}>
                    {t("logout")}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <ul className="nav-links">
              <li><Link href="/#course">Courses</Link></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools" style={{ color: "var(--gold)" }}>Tools</Link></li>
              <li><Link href="#">Insights</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
            <div className="nav-cta">
              <Link href="/signin" className="btn-ghost">Sign In</Link>
              <span style={{ color: "rgba(0,0,0,0.15)", fontSize: 18 }}>|</span>
              <Link href="/signin" className="btn-primary">Sign Up</Link>
            </div>
          </>
        )}
      </nav>

      {/* ── PAGE HEADER ── */}
      <div className="ft-page-header">
        <div className="ft-page-header-inner">
          <div className="ft-header-left">
            <div className="ft-breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span style={{ color: "var(--gold)" }}>Finance Tools</span>
            </div>
            <div className="ft-header-label">Finance Tools</div>
            <h1>Your financial <em>toolkit</em></h1>
            <p className="ft-header-sub">
              Six free calculators for real decisions - plus the Net Worth Tracker, included with the Personal Finance Course.
            </p>
          </div>
          <div className="ft-header-right">
            <div className="ft-meta-badge">6 tools free</div>
            <div className="ft-meta-pill">7 tools &middot; Tracker with Course</div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="ft-marquee-strip">
        <div className="ft-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item}<span className="ft-marquee-star">&#10022;</span></span>
          ))}
        </div>
      </div>

      {/* ── TOOLS SECTION ── */}
      <section className="ft-tools-section">
        <div className="ft-tools-grid">
          {tools.map((tool, i) => (
            <div
              key={tool.id}
              className="ft-tool-card ft-reveal"
              ref={addRevealRef}
              style={{ transitionDelay: `${0.05 * (i + 1)}s` }}
              onClick={() => setActiveModal(tool.id)}
            >
              <div className="ft-tool-top">
                <div className="ft-tool-num">{tool.num} --</div>
                <div className="ft-tool-icon">{tool.icon}</div>
              </div>
              <div className="ft-tool-name">{tool.name}</div>
              <div className="ft-tool-desc">{tool.desc}</div>
              <div className="ft-tool-tags">
                {tool.tags.map((tag) => (
                  <span key={tag} className="ft-tool-tag">{tag}</span>
                ))}
                {tool.free ? (
                  <span className="ft-tool-free-tag">Free</span>
                ) : (
                  <>
                    <span className="ft-tool-free-tag">Tracker</span>
                    <span className="ft-tool-tag">With Course</span>
                  </>
                )}
              </div>
              <div className="ft-tool-action">
                <button className="ft-tool-open-btn">Open Calculator &rarr;</button>
                <div className="ft-tool-arrow">&rarr;</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MODALS
          ═══════════════════════════════════════════ */}

      {/* ── Modal 1: Net Worth Calculator ── */}
      <div className={`ft-modal-overlay ${activeModal === "networth" ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="ft-modal" onClick={(e) => e.stopPropagation()}>
          <button className="ft-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
          <div className="ft-modal-label">Tool 01</div>
          <div className="ft-modal-title">Net Worth Calculator</div>
          <div className="ft-modal-subtitle">Add up everything you own and owe.</div>

          <div className="ft-divider-label">Assets</div>
          {(["savings", "mf", "stocks", "re", "gold", "other"] as const).map((k) => {
            const labels: Record<string, string> = { savings: "Savings & FD", mf: "Mutual Funds", stocks: "Stocks / ETFs", re: "Real Estate", gold: "Gold / Jewellery", other: "Other Assets" };
            return (
              <div key={k} className="ft-form-group">
                <label className="ft-form-label">{labels[k]}</label>
                <input
                  className="ft-form-input"
                  type="number"
                  placeholder="0"
                  value={nwAssets[k] || ""}
                  onChange={(e) => setNwAssets({ ...nwAssets, [k]: Number(e.target.value) || 0 })}
                />
              </div>
            );
          })}

          <div className="ft-divider-label">Liabilities</div>
          {(["home", "car", "personal", "cc"] as const).map((k) => {
            const labels: Record<string, string> = { home: "Home Loan", car: "Car Loan", personal: "Personal Loan", cc: "Credit Card Dues" };
            return (
              <div key={k} className="ft-form-group">
                <label className="ft-form-label">{labels[k]}</label>
                <input
                  className="ft-form-input"
                  type="number"
                  placeholder="0"
                  value={nwLiabilities[k] || ""}
                  onChange={(e) => setNwLiabilities({ ...nwLiabilities, [k]: Number(e.target.value) || 0 })}
                />
              </div>
            );
          })}

          <button className="ft-calc-btn" onClick={calcNetWorth}>Calculate Net Worth</button>

          {nwResult && (
            <div className="ft-result-box show">
              <div className="ft-result-row">
                <span className="ft-result-label">Total Assets</span>
                <span className="ft-result-value">{fmt(nwResult.assets)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Total Liabilities</span>
                <span className="ft-result-value">{fmt(nwResult.liabilities)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Net Worth</span>
                <span className={`ft-result-value big ${nwResult.net < 0 ? "negative" : ""}`}>{fmt(nwResult.net)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Modal 2: SIP Calculator ── */}
      <div className={`ft-modal-overlay ${activeModal === "sip" ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="ft-modal" onClick={(e) => e.stopPropagation()}>
          <button className="ft-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
          <div className="ft-modal-label">Tool 02</div>
          <div className="ft-modal-title">SIP Calculator</div>
          <div className="ft-modal-subtitle">Project your mutual fund SIP corpus.</div>

          <div className="ft-form-group">
            <label className="ft-form-label">Monthly SIP Amount</label>
            <input className="ft-form-input" type="number" value={sipAmt || ""} onChange={(e) => setSipAmt(Number(e.target.value) || 0)} />
          </div>
          <div className="ft-form-row">
            <div className="ft-form-group">
              <label className="ft-form-label">Expected Return % p.a.</label>
              <input className="ft-form-input" type="number" value={sipRate || ""} onChange={(e) => setSipRate(Number(e.target.value) || 0)} />
            </div>
            <div className="ft-form-group">
              <label className="ft-form-label">Investment Period (Years)</label>
              <input className="ft-form-input" type="number" value={sipYears || ""} onChange={(e) => setSipYears(Number(e.target.value) || 0)} />
            </div>
          </div>

          <div className="ft-toggle-row">
            <span>Enable Annual Step-Up</span>
            <button className={`ft-toggle ${sipStepUp ? "on" : ""}`} onClick={() => setSipStepUp(!sipStepUp)} />
          </div>

          {sipStepUp && (
            <div className="ft-form-group">
              <label className="ft-form-label">Step-Up % per year</label>
              <input className="ft-form-input" type="number" value={sipStepPct || ""} onChange={(e) => setSipStepPct(Number(e.target.value) || 0)} />
            </div>
          )}

          <button className="ft-calc-btn" onClick={calcSip}>Calculate SIP Corpus</button>

          {sipResult && (
            <div className="ft-result-box show">
              <div className="ft-result-row">
                <span className="ft-result-label">Total Invested</span>
                <span className="ft-result-value">{fmt(sipResult.invested)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Estimated Gains</span>
                <span className="ft-result-value">{fmt(sipResult.gains)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Maturity Value</span>
                <span className="ft-result-value big">{fmt(sipResult.maturity)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Modal 3: Budget Planner ── */}
      <div className={`ft-modal-overlay ${activeModal === "budget" ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="ft-modal" onClick={(e) => e.stopPropagation()}>
          <button className="ft-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
          <div className="ft-modal-label">Tool 03</div>
          <div className="ft-modal-title">Budget Planner</div>
          <div className="ft-modal-subtitle">Split your income using the 50/30/20 framework.</div>

          <div className="ft-form-group">
            <label className="ft-form-label">Monthly Income</label>
            <input className="ft-form-input" type="number" value={budgetIncome || ""} onChange={(e) => setBudgetIncome(Number(e.target.value) || 0)} />
          </div>
          <div className="ft-form-row">
            <div className="ft-form-group">
              <label className="ft-form-label">Needs %</label>
              <input className="ft-form-input" type="number" value={budgetNeeds || ""} onChange={(e) => setBudgetNeeds(Number(e.target.value) || 0)} />
            </div>
            <div className="ft-form-group">
              <label className="ft-form-label">Wants %</label>
              <input className="ft-form-input" type="number" value={budgetWants || ""} onChange={(e) => setBudgetWants(Number(e.target.value) || 0)} />
            </div>
          </div>
          <div className="ft-form-group">
            <label className="ft-form-label">Savings %</label>
            <input className="ft-form-input" type="number" value={budgetSavings || ""} onChange={(e) => setBudgetSavings(Number(e.target.value) || 0)} />
          </div>
          <div style={{ fontSize: 13, color: budgetTotal === 100 ? "#28a745" : "#b94a3e", marginBottom: 12, fontWeight: 500 }}>
            Total: {budgetTotal}% {budgetTotal === 100 ? "\u2714" : "(must equal 100%)"}
          </div>

          <div className="ft-form-group">
            <label className="ft-form-label">SIP % of Savings: {budgetSipPct}%</label>
            <input
              type="range"
              min={10}
              max={100}
              value={budgetSipPct}
              onChange={(e) => setBudgetSipPct(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--gold)" }}
            />
          </div>

          <div className="ft-result-box show">
            <div className="ft-result-row">
              <span className="ft-result-label">Needs ({budgetNeeds}%)</span>
              <span className="ft-result-value">{fmt(budgetNeedsAmt)}</span>
            </div>
            <div className="ft-result-row">
              <span className="ft-result-label">Wants ({budgetWants}%)</span>
              <span className="ft-result-value">{fmt(budgetWantsAmt)}</span>
            </div>
            <div className="ft-result-row">
              <span className="ft-result-label">Savings ({budgetSavings}%)</span>
              <span className="ft-result-value">{fmt(budgetSavingsAmt)}</span>
            </div>
            <div className="ft-result-row">
              <span className="ft-result-label">Suggested Monthly SIP</span>
              <span className="ft-result-value big">{fmt(budgetSipAmt)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal 4: Goal-Based SIP Planner ── */}
      <div className={`ft-modal-overlay ${activeModal === "goal" ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="ft-modal" onClick={(e) => e.stopPropagation()}>
          <button className="ft-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
          <div className="ft-modal-label">Tool 04</div>
          <div className="ft-modal-title">Goal-Based SIP Planner</div>
          <div className="ft-modal-subtitle">Work backwards from a target to find the monthly SIP you need.</div>

          <div className="ft-form-group">
            <label className="ft-form-label">Target Amount</label>
            <input className="ft-form-input" type="number" value={goalTarget || ""} onChange={(e) => setGoalTarget(Number(e.target.value) || 0)} />
          </div>
          <div className="ft-form-row">
            <div className="ft-form-group">
              <label className="ft-form-label">Time Horizon (Years)</label>
              <input className="ft-form-input" type="number" value={goalYears || ""} onChange={(e) => setGoalYears(Number(e.target.value) || 0)} />
            </div>
            <div className="ft-form-group">
              <label className="ft-form-label">Expected Return % p.a.</label>
              <input className="ft-form-input" type="number" value={goalRate || ""} onChange={(e) => setGoalRate(Number(e.target.value) || 0)} />
            </div>
          </div>
          <div className="ft-form-group">
            <label className="ft-form-label">Current Existing Savings</label>
            <input className="ft-form-input" type="number" value={goalExisting || ""} onChange={(e) => setGoalExisting(Number(e.target.value) || 0)} />
          </div>

          <button className="ft-calc-btn" onClick={calcGoal}>Calculate Required SIP</button>

          {goalResult && (
            <div className="ft-result-box show">
              <div className="ft-result-row">
                <span className="ft-result-label">FV of Existing Savings</span>
                <span className="ft-result-value">{fmt(goalResult.fvExisting)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Remaining Gap</span>
                <span className="ft-result-value">{fmt(goalResult.gap)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Required Monthly SIP</span>
                <span className="ft-result-value big">{fmt(goalResult.sip)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Total Invested via SIP</span>
                <span className="ft-result-value">{fmt(goalResult.totalInvested)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">SIP Corpus</span>
                <span className="ft-result-value">{fmt(goalResult.sipCorpus)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Total Corpus</span>
                <span className="ft-result-value">{fmt(goalResult.totalCorpus)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Modal 5: Tax Estimator ── */}
      <div className={`ft-modal-overlay ${activeModal === "tax" ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="ft-modal ft-modal--wide" onClick={(e) => e.stopPropagation()}>
          <button className="ft-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
          <div className="ft-modal-label">Tool 05</div>
          <div className="ft-modal-title">Tax Estimator</div>
          <div className="ft-modal-subtitle">FY 2025-26 &middot; New Regime</div>

          <div className="ft-divider-label">Head 1 - Salary</div>
          <div className="ft-form-group">
            <label className="ft-form-label">Gross Salary</label>
            <input className="ft-form-input" type="number" placeholder="0" value={taxSalary || ""} onChange={(e) => setTaxSalary(Number(e.target.value) || 0)} />
            <span style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Standard deduction of &#8377;75,000 applied automatically</span>
          </div>

          <div className="ft-divider-label">Head 2 - Business / Profession</div>
          <div className="ft-form-group">
            <label className="ft-form-label">Net Business / Professional Income</label>
            <input className="ft-form-input" type="number" placeholder="0" value={taxBusiness || ""} onChange={(e) => setTaxBusiness(Number(e.target.value) || 0)} />
          </div>

          <div className="ft-divider-label">Head 3 - House Property</div>
          <div className="ft-form-row">
            <div className="ft-form-group">
              <label className="ft-form-label">Gross Rent Received</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxRentGross || ""} onChange={(e) => setTaxRentGross(Number(e.target.value) || 0)} />
            </div>
            <div className="ft-form-group">
              <label className="ft-form-label">Municipal Taxes Paid</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxMuniTax || ""} onChange={(e) => setTaxMuniTax(Number(e.target.value) || 0)} />
            </div>
          </div>
          <div className="ft-form-group">
            <label className="ft-form-label">Home Loan Interest</label>
            <input className="ft-form-input" type="number" placeholder="0" value={taxHomeLoanInt || ""} onChange={(e) => setTaxHomeLoanInt(Number(e.target.value) || 0)} />
          </div>
          {(taxRentGross > 0 || taxMuniTax > 0 || taxHomeLoanInt > 0) && (
            <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>
              NAV: {fmt(Math.max(taxRentGross - taxMuniTax, 0))} &rarr; 30% std. deduction: {fmt(Math.max(taxRentGross - taxMuniTax, 0) * 0.3)} &rarr; Net HP Income: {fmt(Math.max(taxRentGross - taxMuniTax, 0) * 0.7 - taxHomeLoanInt)}
            </div>
          )}

          <div className="ft-divider-label">Head 4 - Capital Gains</div>
          <div className="ft-form-row">
            <div className="ft-form-group">
              <label className="ft-form-label">STCG - Equity (20%)</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxStcgEq || ""} onChange={(e) => setTaxStcgEq(Number(e.target.value) || 0)} />
            </div>
            <div className="ft-form-group">
              <label className="ft-form-label">STCG - Debt (slab rate)</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxStcgDebt || ""} onChange={(e) => setTaxStcgDebt(Number(e.target.value) || 0)} />
            </div>
          </div>
          <div className="ft-form-group">
            <label className="ft-form-label">LTCG - Equity (12.5% above &#8377;1.25L)</label>
            <input className="ft-form-input" type="number" placeholder="0" value={taxLtcgEq || ""} onChange={(e) => setTaxLtcgEq(Number(e.target.value) || 0)} />
          </div>
          <div className="ft-form-row">
            <div className="ft-form-group">
              <label className="ft-form-label">LTCG - Debt pre-Apr 2023 (12.5%)</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxLtcgDebtPre || ""} onChange={(e) => setTaxLtcgDebtPre(Number(e.target.value) || 0)} />
            </div>
            <div className="ft-form-group">
              <label className="ft-form-label">LTCG - Debt post-Apr 2023 (slab)</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxLtcgDebtPost || ""} onChange={(e) => setTaxLtcgDebtPost(Number(e.target.value) || 0)} />
            </div>
          </div>

          <div className="ft-divider-label">Head 5 - Other Sources</div>
          <div className="ft-form-row">
            <div className="ft-form-group">
              <label className="ft-form-label">Interest Income</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxInterest || ""} onChange={(e) => setTaxInterest(Number(e.target.value) || 0)} />
            </div>
            <div className="ft-form-group">
              <label className="ft-form-label">Dividends</label>
              <input className="ft-form-input" type="number" placeholder="0" value={taxDividends || ""} onChange={(e) => setTaxDividends(Number(e.target.value) || 0)} />
            </div>
          </div>
          <div className="ft-form-group">
            <label className="ft-form-label">Other Income</label>
            <input className="ft-form-input" type="number" placeholder="0" value={taxOtherInc || ""} onChange={(e) => setTaxOtherInc(Number(e.target.value) || 0)} />
          </div>

          <button className="ft-calc-btn" onClick={calcTax}>Calculate Tax</button>

          {taxResult && (
            <div className="ft-result-box show">
              <div className="ft-divider-label">Income Summary</div>
              <div className="ft-result-row">
                <span className="ft-result-label">Salary (after std. deduction)</span>
                <span className="ft-result-value">{fmt(taxResult.salaryNet)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Business / Professional</span>
                <span className="ft-result-value">{fmt(taxResult.businessNet)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">House Property</span>
                <span className="ft-result-value">{fmt(taxResult.hpNet)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Other Sources</span>
                <span className="ft-result-value">{fmt(taxResult.otherNet)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Total Normal Income</span>
                <span className="ft-result-value" style={{ fontWeight: 700 }}>{fmt(taxResult.totalNormal)}</span>
              </div>

              <div className="ft-divider-label">Tax Breakdown</div>
              <div className="ft-result-row">
                <span className="ft-result-label">Slab Tax (Normal Income)</span>
                <span className="ft-result-value">{fmt(taxResult.slabTax)}</span>
              </div>
              {taxResult.rebate87a > 0 && (
                <div className="ft-result-row">
                  <span className="ft-result-label">Less: 87A Rebate</span>
                  <span className="ft-result-value" style={{ color: "#28a745" }}>&minus;{fmt(taxResult.rebate87a)}</span>
                </div>
              )}
              {taxResult.marginalReliefRebate > 0 && (
                <div className="ft-result-row">
                  <span className="ft-result-label" style={{ fontSize: 12, color: "#888" }}>Marginal Relief on Rebate</span>
                  <span className="ft-result-value" style={{ fontSize: 12, color: "#888" }}>{fmt(taxResult.marginalReliefRebate)}</span>
                </div>
              )}

              <div className="ft-divider-label">Capital Gains Tax</div>
              <div className="ft-result-row">
                <span className="ft-result-label">STCG Equity @20%</span>
                <span className="ft-result-value">{fmt(taxResult.stcgEqTax)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">STCG Debt (at slab)</span>
                <span className="ft-result-value" style={{ fontSize: 12, color: "#888" }}>Included in slab</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">LTCG Equity @12.5%</span>
                <span className="ft-result-value">{fmt(taxResult.ltcgEqTax)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">LTCG Debt pre-Apr 2023 @12.5%</span>
                <span className="ft-result-value">{fmt(taxResult.ltcgDebtPreTax)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">LTCG Debt post-Apr 2023 (slab)</span>
                <span className="ft-result-value" style={{ fontSize: 12, color: "#888" }}>Included in slab</span>
              </div>

              <div className="ft-divider-label">Totals</div>
              {taxResult.surcharge > 0 && (
                <div className="ft-result-row">
                  <span className="ft-result-label">Surcharge</span>
                  <span className="ft-result-value">{fmt(taxResult.surcharge)}</span>
                </div>
              )}
              {taxResult.marginalReliefSurcharge > 0 && (
                <div className="ft-result-row">
                  <span className="ft-result-label" style={{ fontSize: 12, color: "#888" }}>Marginal Relief on Surcharge</span>
                  <span className="ft-result-value" style={{ fontSize: 12, color: "#888" }}>&minus;{fmt(taxResult.marginalReliefSurcharge)}</span>
                </div>
              )}
              <div className="ft-result-row">
                <span className="ft-result-label">Health &amp; Education Cess (4%)</span>
                <span className="ft-result-value">{fmt(taxResult.cess)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Total Tax Payable</span>
                <span className="ft-result-value big">{fmt(taxResult.totalTax)}</span>
              </div>
              <div className="ft-result-row">
                <span className="ft-result-label">Effective Tax Rate</span>
                <span className="ft-result-value" style={{ color: "var(--gold)" }}>{taxResult.effectiveRate.toFixed(2)}%</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Modal 6: Rebalancing Calculator ── */}
      <div className={`ft-modal-overlay ${activeModal === "rebalance" ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="ft-modal ft-modal--wide" onClick={(e) => e.stopPropagation()}>
          <button className="ft-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
          <div className="ft-modal-label">Tool 06</div>
          <div className="ft-modal-title">Rebalancing Calculator</div>
          <div className="ft-modal-subtitle">Compare your current allocation to targets.</div>

          <div className="ft-divider-label">Current Holdings</div>
          {rebalLabels.map((label, i) => (
            <div key={label} className="ft-form-group">
              <label className="ft-form-label">
                <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: rebalColors[i], marginRight: 8 }} />
                {label}
              </label>
              <input
                className="ft-form-input"
                type="number"
                placeholder="0"
                value={rebalCurrent[i] || ""}
                onChange={(e) => {
                  const next = [...rebalCurrent];
                  next[i] = Number(e.target.value) || 0;
                  setRebalCurrent(next);
                }}
              />
            </div>
          ))}
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 16 }}>
            Portfolio Total: {fmt(rebalTotal)}
          </div>

          <div className="ft-divider-label">Target Allocation %</div>
          {rebalLabels.map((label, i) => (
            <div key={label} className="ft-form-group">
              <label className="ft-form-label">{label} Target %</label>
              <input
                className="ft-form-input"
                type="number"
                placeholder="0"
                value={rebalTarget[i] || ""}
                onChange={(e) => {
                  const next = [...rebalTarget];
                  next[i] = Number(e.target.value) || 0;
                  setRebalTarget(next);
                }}
              />
            </div>
          ))}
          <div style={{ fontSize: 13, color: rebalTargetSum === 100 ? "#28a745" : "#b94a3e", marginBottom: 12, fontWeight: 500 }}>
            Target Total: {rebalTargetSum}% {rebalTargetSum === 100 ? "\u2714" : "(must equal 100%)"}
          </div>

          <button className="ft-calc-btn" onClick={calcRebalance}>Calculate Rebalancing</button>

          {rebalResult && (
            <div className="ft-result-box show">
              <div className="ft-result-row">
                <span className="ft-result-label">Portfolio Value</span>
                <span className="ft-result-value big">{fmt(rebalResult.total)}</span>
              </div>
              {rebalResult.diffs.filter((d) => d.action === "SELL").length > 0 && (
                <div className="ft-result-row">
                  <span className="ft-result-label">Assets to Sell</span>
                  <span className="ft-result-value" style={{ color: "#b94a3e" }}>
                    {fmt(rebalResult.diffs.filter((d) => d.action === "SELL").reduce((s, d) => s + Math.abs(d.diff), 0))}
                  </span>
                </div>
              )}
              {rebalResult.diffs.filter((d) => d.action === "BUY").length > 0 && (
                <div className="ft-result-row">
                  <span className="ft-result-label">Assets to Buy</span>
                  <span className="ft-result-value" style={{ color: "#28a745" }}>
                    {fmt(rebalResult.diffs.filter((d) => d.action === "BUY").reduce((s, d) => s + d.diff, 0))}
                  </span>
                </div>
              )}
              <div className="ft-divider-label">Per-Asset Breakdown</div>
              {rebalResult.diffs.map((d) => (
                <div key={d.label} className="ft-result-row">
                  <span className="ft-result-label" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: d.color, flexShrink: 0 }} />
                    {d.label}
                  </span>
                  <span className="ft-result-value" style={{
                    color: d.action === "BUY" ? "#28a745" : d.action === "SELL" ? "#b94a3e" : "#888",
                    fontSize: 13,
                  }}>
                    {d.action === "BUY" && `BUY ${fmt(d.diff)}`}
                    {d.action === "SELL" && `SELL ${fmt(Math.abs(d.diff))}`}
                    {d.action === "On target" && "On target"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Modal 7: Net Worth Tracker (Coming Soon) ── */}
      <div className={`ft-modal-overlay ${activeModal === "tracker" ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="ft-modal" onClick={(e) => e.stopPropagation()}>
          <button className="ft-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
          <div className="ft-modal-label">Tool 07</div>
          <div className="ft-modal-title">Net Worth Tracker</div>
          <div className="ft-modal-subtitle">Monthly logging &middot; Charts &middot; Trends</div>
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>&#128203;</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
              Coming soon
            </div>
            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, maxWidth: 360, margin: "0 auto" }}>
              The Net Worth Tracker is included with the <strong style={{ color: "var(--ink)" }}>Personal Finance Course</strong>. Log your net worth every month, visualise progress with charts, and track your financial trajectory over time.
            </p>
            <Link href="/#course" style={{ display: "inline-block", marginTop: 24, fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
              Explore the Course &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: "none" }}>
              <div className="logo-mark">
                <Image src="/logo.svg" alt="Bodha" width={20} height={20} style={{ position: "relative", zIndex: 1 }} />
              </div>
              <div className="logo-text" style={{ color: "#fff" }}>Bodha</div>
            </Link>
            <p>Empowering individuals with the financial literacy they need to build lasting wealth - for free.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/#course">Finance Course</Link></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Finance Tools</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/signin">Sign In</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bodha. All rights reserved.</p>
          <a href="#">Back to top &uarr;</a>
        </div>
      </footer>
    </div>
  );
}
