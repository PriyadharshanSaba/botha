// Formulas behind the free calculators on /tools. Moved unchanged from app/tools/page.tsx
// so the dialogs can recompute live and the maths can be tested on its own.

export function formatInr(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

const sum = (values: number[]) => values.reduce((s, v) => s + Number(v), 0);

/* ── Net Worth ── */
export function netWorth(assets: number[], liabilities: number[]) {
  const a = sum(assets);
  const l = sum(liabilities);
  return { assets: a, liabilities: l, net: a - l };
}

/* ── SIP ── */
export type SipInput = { amount: number; ratePct: number; years: number; stepUp: boolean; stepPct: number };

export function sip({ amount, ratePct, years, stepUp, stepPct }: SipInput) {
  const r = ratePct / 100 / 12;
  const n = years * 12;
  if (!stepUp) {
    const fv = amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = amount * n;
    return { invested, gains: fv - invested, maturity: fv };
  }
  let total = 0;
  let invested = 0;
  let monthly = amount;
  for (let y = 0; y < years; y++) {
    for (let m = 0; m < 12; m++) {
      const monthsLeft = n - (y * 12 + m) - 1;
      total += monthly * Math.pow(1 + r, monthsLeft + 1);
      invested += monthly;
    }
    monthly = monthly * (1 + stepPct / 100);
  }
  return { invested, gains: total - invested, maturity: total };
}

/* ── Budget Planner ── */
export type BudgetInput = { income: number; needsPct: number; wantsPct: number; savingsPct: number; sipPct: number };

export function budget({ income, needsPct, wantsPct, savingsPct, sipPct }: BudgetInput) {
  const savings = income * savingsPct / 100;
  return {
    totalPct: needsPct + wantsPct + savingsPct,
    needs: income * needsPct / 100,
    wants: income * wantsPct / 100,
    savings,
    sip: savings * sipPct / 100,
  };
}

/* ── Goal-Based SIP ── */
export type GoalInput = { target: number; years: number; ratePct: number; existing: number };

export function goalSip({ target, years, ratePct, existing }: GoalInput) {
  const r = ratePct / 100 / 12;
  const n = years * 12;
  const fvExisting = existing * Math.pow(1 + ratePct / 100 / 12, n);
  const gap = Math.max(target - fvExisting, 0);
  let monthly = 0;
  if (gap > 0) {
    monthly = gap * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
  }
  const totalInvested = monthly * n;
  const sipCorpus = gap;
  const totalCorpus = fvExisting + sipCorpus;
  return { fvExisting, gap, sip: monthly, totalInvested, sipCorpus, totalCorpus };
}

/* ── Tax Estimator (New Regime) ── */
export type TaxInput = {
  salary: number; business: number; rentGross: number; muniTax: number; homeLoanInt: number;
  stcgEq: number; stcgDebt: number; ltcgEq: number; ltcgDebtPre: number; ltcgDebtPost: number;
  interest: number; dividends: number; otherInc: number;
};

export const EMPTY_TAX_INPUT: TaxInput = {
  salary: 0, business: 0, rentGross: 0, muniTax: 0, homeLoanInt: 0,
  stcgEq: 0, stcgDebt: 0, ltcgEq: 0, ltcgDebtPre: 0, ltcgDebtPost: 0,
  interest: 0, dividends: 0, otherInc: 0,
};

/* New Regime slabs FY 2025-26 (not yet checked against FY 2026-27) */
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

export function houseProperty(rentGross: number, muniTax: number, homeLoanInt: number) {
  const nav = Math.max(rentGross - muniTax, 0);
  const stdDed30 = nav * 0.3;
  return { nav, stdDed30, net: nav - stdDed30 - homeLoanInt };
}

export function incomeTax(t: TaxInput) {
  /* Head 1: Salary */
  const salaryNet = Math.max(t.salary - 75000, 0);
  /* Head 2: Business */
  const businessNet = t.business;
  /* Head 3: House Property */
  const hpNet = houseProperty(t.rentGross, t.muniTax, t.homeLoanInt).net;
  /* Head 5: Other Sources */
  const otherNet = t.interest + t.dividends + t.otherInc;

  /* Total normal income (slab) */
  const totalNormal = salaryNet + businessNet + hpNet + otherNet + t.stcgDebt + t.ltcgDebtPost;

  const slabTax = slabCalc(Math.max(totalNormal, 0));

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
  const stcgEqTax = t.stcgEq * 0.20;
  const stcgDebtTax = 0; /* taxed at slab, already in totalNormal */
  const ltcgEqExempt = 125000;
  const ltcgEqTax = Math.max(t.ltcgEq - ltcgEqExempt, 0) * 0.125;
  const ltcgDebtPreTax = t.ltcgDebtPre * 0.125;
  const ltcgDebtPostTax = 0; /* taxed at slab, already in totalNormal */
  const totalCgTax = stcgEqTax + stcgDebtTax + ltcgEqTax + ltcgDebtPreTax + ltcgDebtPostTax;

  const preSurcharge = taxAfterRebate + totalCgTax;

  /* Surcharge */
  const totalIncome = totalNormal + t.stcgEq + t.ltcgEq + t.ltcgDebtPre;
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

  return {
    salaryNet, hpNet, businessNet, otherNet,
    totalNormal, slabTax, rebate87a, marginalReliefRebate,
    stcgEqTax, stcgDebtTax, ltcgEqTax, ltcgDebtPreTax, ltcgDebtPostTax,
    totalCgTax, surcharge, marginalReliefSurcharge, cess, totalTax, effectiveRate,
  };
}

/* ── Rebalancing ── */
export type RebalanceAction = "BUY" | "SELL" | "On target";

// Returns null until there is a portfolio to rebalance.
export function rebalance(current: number[], targetPct: number[]) {
  const total = sum(current);
  if (total <= 0) return null;
  const diffs = current.map((value, i) => {
    const currentPct = (value / total) * 100;
    const target = targetPct[i];
    const diff = (target / 100) * total - value;
    const driftPp = Math.abs(target - currentPct);
    let action: RebalanceAction = "On target";
    if (driftPp > 1 || Math.abs(diff) > 500) {
      action = diff > 0 ? "BUY" : "SELL";
    }
    return { currentPct, targetPct: target, diff, action };
  });
  const toSell = diffs.filter((d) => d.action === "SELL").reduce((s, d) => s + Math.abs(d.diff), 0);
  const toBuy = diffs.filter((d) => d.action === "BUY").reduce((s, d) => s + d.diff, 0);
  return { total, diffs, toSell, toBuy };
}
