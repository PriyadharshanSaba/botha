import { test } from "node:test";
import assert from "node:assert/strict";
import { EMPTY_TAX_INPUT, budget, formatInr, goalSip, houseProperty, incomeTax, netWorth, rebalance, sip } from "./calculators";

test("formatInr rounds and groups the Indian way", () => {
  assert.equal(formatInr(5045759.995), "₹50,45,760");
  assert.equal(formatInr(-1200.4), "₹-1,200");
});

test("netWorth subtracts liabilities from assets", () => {
  assert.deepEqual(netWorth([100000, 50000], [30000, 5000]), { assets: 150000, liabilities: 35000, net: 115000 });
});

test("sip: ₹10,000 a month at 12% for 15 years matures to ₹50,45,760", () => {
  const r = sip({ amount: 10000, ratePct: 12, years: 15, stepUp: false, stepPct: 10 });
  assert.equal(formatInr(r.maturity), "₹50,45,760");
  assert.equal(r.invested, 1800000);
  assert.equal(formatInr(r.gains), "₹32,45,760");
});

test("sip with step-up invests more each year than a flat SIP", () => {
  const flat = sip({ amount: 10000, ratePct: 12, years: 2, stepUp: false, stepPct: 10 });
  const stepped = sip({ amount: 10000, ratePct: 12, years: 2, stepUp: true, stepPct: 10 });
  assert.equal(stepped.invested, 120000 + 132000);
  assert.ok(stepped.maturity > flat.maturity);
});

test("budget splits income by percentage and suggests a SIP from savings", () => {
  assert.deepEqual(budget({ income: 100000, needsPct: 50, wantsPct: 30, savingsPct: 20, sipPct: 70 }), {
    totalPct: 100, needs: 50000, wants: 30000, savings: 20000, sip: 14000,
  });
});

test("goalSip: the required SIP grows back to the gap", () => {
  const g = goalSip({ target: 5000000, years: 10, ratePct: 12, existing: 0 });
  assert.equal(g.fvExisting, 0);
  assert.equal(g.gap, 5000000);
  const grown = sip({ amount: g.sip, ratePct: 12, years: 10, stepUp: false, stepPct: 0 }).maturity;
  assert.ok(Math.abs(grown - 5000000) < 0.01);
});

test("goalSip needs no SIP when existing savings already cover the target", () => {
  const g = goalSip({ target: 100000, years: 10, ratePct: 12, existing: 100000 });
  assert.equal(g.gap, 0);
  assert.equal(g.sip, 0);
});

test("incomeTax: ₹12.75L salary is fully rebated under section 87A", () => {
  const t = incomeTax({ ...EMPTY_TAX_INPUT, salary: 1275000 });
  assert.equal(t.salaryNet, 1200000);
  assert.equal(t.slabTax, 60000);
  assert.equal(t.rebate87a, 60000);
  assert.equal(t.totalTax, 0);
});

test("incomeTax: ₹15.75L salary pays slab tax plus 4% cess", () => {
  const t = incomeTax({ ...EMPTY_TAX_INPUT, salary: 1575000 });
  assert.equal(t.slabTax, 105000);
  assert.equal(t.rebate87a, 0);
  assert.equal(Math.round(t.totalTax), 109200);
});

test("incomeTax: equity LTCG is taxed at 12.5% above ₹1.25L", () => {
  const t = incomeTax({ ...EMPTY_TAX_INPUT, ltcgEq: 225000 });
  assert.equal(t.ltcgEqTax, 12500);
  assert.equal(Math.round(t.totalTax), 13000);
});

test("houseProperty applies the 30% standard deduction and home-loan interest", () => {
  assert.deepEqual(houseProperty(300000, 20000, 50000), { nav: 280000, stdDed30: 84000, net: 146000 });
});

test("rebalance returns null without holdings and lists trades otherwise", () => {
  assert.equal(rebalance([0, 0], [50, 50]), null);
  const r = rebalance([80000, 20000, 0, 0, 0, 0], [60, 40, 0, 0, 0, 0]);
  assert.ok(r);
  assert.equal(r.total, 100000);
  assert.deepEqual(r.diffs.map((d) => d.action), ["SELL", "BUY", "On target", "On target", "On target", "On target"]);
  assert.equal(r.toSell, 20000);
  assert.equal(r.toBuy, 20000);
});
