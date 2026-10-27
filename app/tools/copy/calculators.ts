import type { Lang } from "@/app/context/LanguageContext";

export type CalculatorCopy = {
  shell: { tool: (num: string) => string; memberTool: (num: string) => string; close: string; closeTracker: string; programTitle: string; programLink: string };
  networth: {
    subtitle: string; assets: string; liabilities: string;
    assetLabels: { savings: string; mf: string; stocks: string; re: string; gold: string; other: string };
    liabilityLabels: { home: string; car: string; personal: string; cc: string };
    result: string; totalAssets: string; totalLiabilities: string; note: string;
  };
  sip: {
    subtitle: string; amount: string; rate: string; period: string; years: (n: number) => string; yearShort: string; yearsShort: string;
    stepToggle: string; step: string; result: (years: number) => string; invested: string; gains: string; note: string;
  };
  budget: {
    subtitle: string; income: string; needs: string; wants: string; savings: string;
    total: (pct: number) => string; totalOk: string; sipShare: string;
    result: string; note: string;
  };
  goal: {
    subtitle: string; target: string; horizon: string; rate: string; existing: string; years: (n: number) => string;
    result: string; fvExisting: string; gap: string; totalInvested: string; sipCorpus: string; totalCorpus: string; note: string;
  };
  tax: {
    subtitle: string;
    heads: { salary: string; business: string; property: string; gains: string; other: string };
    salary: string; salaryHint: string; business: string; rent: string; muni: string; homeLoan: string;
    propertyHint: (nav: string, std: string, net: string) => string;
    stcgEq: string; stcgDebt: string; ltcgEq: string; ltcgDebtPre: string; ltcgDebtPost: string;
    interest: string; dividends: string; otherInc: string;
    result: string; effectiveRate: (pct: string) => string;
    incomeSummary: string; salaryNet: string; businessNet: string; hpNet: string; otherNet: string; totalNormal: string;
    breakdown: string; slabTax: string; rebate: string; reliefRebate: string;
    gainsTax: string; stcgEqTax: string; stcgDebtTax: string; ltcgEqTax: string; ltcgDebtPreTax: string; ltcgDebtPostTax: string; inSlab: string;
    totals: string; surcharge: string; reliefSurcharge: string; cess: string; note: string;
  };
  rebalance: {
    subtitle: string; current: string; target: string; assetLabels: string[];
    portfolioTotal: (v: string) => string; targetTotal: (pct: number) => string; targetOk: string;
    result: string; empty: string; toSell: string; toBuy: string; perAsset: string;
    buy: (v: string) => string; sell: (v: string) => string; onTarget: string; note: string;
  };
};

const en: CalculatorCopy = {
  shell: {
    tool: (num) => `Tool ${num} · Free`,
    memberTool: (num) => `Tool ${num} · With the program`,
    close: "Close calculator",
    closeTracker: "Close tracker",
    programTitle: "Want a plan built around this?",
    programLink: "Explore the Personal Finance Program",
  },
  networth: {
    subtitle: "Add up everything you own and owe.",
    assets: "Assets",
    liabilities: "Liabilities",
    assetLabels: { savings: "Savings & FD", mf: "Mutual Funds", stocks: "Stocks / ETFs", re: "Real Estate", gold: "Gold / Jewellery", other: "Other Assets" },
    liabilityLabels: { home: "Home Loan", car: "Car Loan", personal: "Personal Loan", cc: "Credit Card Dues" },
    result: "Your net worth",
    totalAssets: "Total assets",
    totalLiabilities: "Total liabilities",
    note: "A snapshot of the values you entered. Update it as your assets and loans change.",
  },
  sip: {
    subtitle: "See what your monthly SIP could grow to.",
    amount: "Monthly SIP amount",
    rate: "Expected return a year",
    period: "Investment period",
    years: (n) => `${n} ${n === 1 ? "year" : "years"}`,
    yearShort: "yr",
    yearsShort: "yrs",
    stepToggle: "Increase my SIP every year",
    step: "Yearly step-up",
    result: (years) => `Estimated value in ${years} ${years === 1 ? "year" : "years"}`,
    invested: "Total invested",
    gains: "Estimated gains",
    note: "An estimate that assumes the same return every year. Real returns go up and down, and nothing here is guaranteed.",
  },
  budget: {
    subtitle: "Split your income using the 50/30/20 framework.",
    income: "Monthly income",
    needs: "Needs",
    wants: "Wants",
    savings: "Savings",
    total: (pct) => `Total: ${pct}% (must equal 100%)`,
    totalOk: "Total: 100%",
    sipShare: "SIP share of savings",
    result: "Suggested monthly SIP",
    note: "Based on the percentages you set. Adjust them to fit your fixed costs.",
  },
  goal: {
    subtitle: "Work backwards from a target to the monthly SIP you need.",
    target: "Target amount",
    horizon: "Time horizon",
    rate: "Expected return a year",
    existing: "Savings you already have",
    years: (n) => `${n} ${n === 1 ? "year" : "years"}`,
    result: "Monthly SIP needed",
    fvExisting: "Your savings will grow to",
    gap: "Remaining gap",
    totalInvested: "Total invested via SIP",
    sipCorpus: "SIP corpus",
    totalCorpus: "Total corpus",
    note: "An estimate that assumes the same return every year. Real returns go up and down, and nothing here is guaranteed.",
  },
  tax: {
    subtitle: "Estimate your tax under the New Regime, including capital gains.",
    heads: { salary: "Head 1 · Salary", business: "Head 2 · Business / profession", property: "Head 3 · House property", gains: "Head 4 · Capital gains", other: "Head 5 · Other sources" },
    salary: "Gross salary",
    salaryHint: "Standard deduction of ₹75,000 applied automatically.",
    business: "Net business / professional income",
    rent: "Gross rent received",
    muni: "Municipal taxes paid",
    homeLoan: "Home loan interest",
    propertyHint: (nav, std, net) => `NAV ${nav} → 30% standard deduction ${std} → net house property income ${net}`,
    stcgEq: "STCG · equity (20%)",
    stcgDebt: "STCG · debt (slab rate)",
    ltcgEq: "LTCG · equity (12.5% above ₹1.25L)",
    ltcgDebtPre: "LTCG · debt bought before Apr 2023 (12.5%)",
    ltcgDebtPost: "LTCG · debt bought from Apr 2023 (slab)",
    interest: "Interest income",
    dividends: "Dividends",
    otherInc: "Other income",
    result: "Estimated tax payable",
    effectiveRate: (pct) => `Effective tax rate ${pct}%`,
    incomeSummary: "Income summary",
    salaryNet: "Salary (after standard deduction)",
    businessNet: "Business / professional",
    hpNet: "House property",
    otherNet: "Other sources",
    totalNormal: "Total normal income",
    breakdown: "Tax breakdown",
    slabTax: "Slab tax on normal income",
    rebate: "Less: 87A rebate",
    reliefRebate: "Marginal relief on rebate",
    gainsTax: "Capital gains tax",
    stcgEqTax: "STCG equity @ 20%",
    stcgDebtTax: "STCG debt (at slab)",
    ltcgEqTax: "LTCG equity @ 12.5%",
    ltcgDebtPreTax: "LTCG debt before Apr 2023 @ 12.5%",
    ltcgDebtPostTax: "LTCG debt from Apr 2023 (slab)",
    inSlab: "Included in slab",
    totals: "Totals",
    surcharge: "Surcharge",
    reliefSurcharge: "Marginal relief on surcharge",
    cess: "Health & education cess (4%)",
    note: "An estimate using the New Regime slabs built into this tool. Check with a tax professional before you file.",
  },
  rebalance: {
    subtitle: "Compare your current allocation to your targets.",
    current: "Current holdings",
    target: "Target allocation",
    assetLabels: ["Equity", "Debt", "Jewellery", "Real Estate", "Cash / Liquid", "Other Assets"],
    portfolioTotal: (v) => `Portfolio total: ${v}`,
    targetTotal: (pct) => `Target total: ${pct}% (must equal 100%)`,
    targetOk: "Target total: 100%",
    result: "Portfolio value",
    empty: "Enter your current holdings to see what to buy or sell.",
    toSell: "Assets to sell",
    toBuy: "Assets to buy",
    perAsset: "Per asset",
    buy: (v) => `Buy ${v}`,
    sell: (v) => `Sell ${v}`,
    onTarget: "On target",
    note: "Based on today's values. Consider taxes and exit loads before you sell anything.",
  },
};

// Kannada drafts: pending review by a native speaker.
const kn: CalculatorCopy = {
  shell: {
    tool: (num) => `ಸಾಧನ ${num} · ಉಚಿತ`,
    memberTool: (num) => `ಸಾಧನ ${num} · ಕಾರ್ಯಕ್ರಮದೊಂದಿಗೆ`,
    close: "ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಮುಚ್ಚಿ",
    closeTracker: "ಟ್ರ್ಯಾಕರ್ ಮುಚ್ಚಿ",
    programTitle: "ಇದರ ಸುತ್ತ ಯೋಜನೆ ಬೇಕೇ?",
    programLink: "ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಕಾರ್ಯಕ್ರಮ ನೋಡಿ",
  },
  networth: {
    subtitle: "ನಿಮ್ಮ ಎಲ್ಲಾ ಆಸ್ತಿ ಮತ್ತು ಸಾಲಗಳನ್ನು ಕೂಡಿಸಿ.",
    assets: "ಆಸ್ತಿಗಳು",
    liabilities: "ಸಾಲಗಳು",
    assetLabels: { savings: "ಉಳಿತಾಯ ಮತ್ತು FD", mf: "ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು", stocks: "ಷೇರುಗಳು / ETF", re: "ರಿಯಲ್ ಎಸ್ಟೇಟ್", gold: "ಚಿನ್ನ / ಆಭರಣ", other: "ಇತರ ಆಸ್ತಿಗಳು" },
    liabilityLabels: { home: "ಗೃಹ ಸಾಲ", car: "ಕಾರು ಸಾಲ", personal: "ವೈಯಕ್ತಿಕ ಸಾಲ", cc: "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಬಾಕಿ" },
    result: "ನಿಮ್ಮ ನಿವ್ವಳ ಮೌಲ್ಯ",
    totalAssets: "ಒಟ್ಟು ಆಸ್ತಿಗಳು",
    totalLiabilities: "ಒಟ್ಟು ಸಾಲಗಳು",
    note: "ನೀವು ನಮೂದಿಸಿದ ಮೌಲ್ಯಗಳ ಒಂದು ಚಿತ್ರಣ. ಆಸ್ತಿ ಮತ್ತು ಸಾಲಗಳು ಬದಲಾದಂತೆ ಇದನ್ನು ನವೀಕರಿಸಿ.",
  },
  sip: {
    subtitle: "ನಿಮ್ಮ ಮಾಸಿಕ SIP ಎಷ್ಟು ಬೆಳೆಯಬಹುದು ಎಂದು ನೋಡಿ.",
    amount: "ಮಾಸಿಕ SIP ಮೊತ್ತ",
    rate: "ವಾರ್ಷಿಕ ನಿರೀಕ್ಷಿತ ಆದಾಯ",
    period: "ಹೂಡಿಕೆ ಅವಧಿ",
    years: (n) => `${n} ವರ್ಷ`,
    yearShort: "ವರ್ಷ",
    yearsShort: "ವರ್ಷ",
    stepToggle: "ಪ್ರತಿ ವರ್ಷ ನನ್ನ SIP ಹೆಚ್ಚಿಸಿ",
    step: "ವಾರ್ಷಿಕ ಹೆಚ್ಚಳ",
    result: (years) => `${years} ವರ್ಷಗಳಲ್ಲಿ ಅಂದಾಜು ಮೌಲ್ಯ`,
    invested: "ಒಟ್ಟು ಹೂಡಿಕೆ",
    gains: "ಅಂದಾಜು ಲಾಭ",
    note: "ಪ್ರತಿ ವರ್ಷ ಒಂದೇ ಆದಾಯ ಎಂದು ಊಹಿಸಿದ ಅಂದಾಜು. ನಿಜವಾದ ಆದಾಯ ಏರಿಳಿತಗೊಳ್ಳುತ್ತದೆ, ಇಲ್ಲಿ ಯಾವುದೂ ಖಾತರಿಯಲ್ಲ.",
  },
  budget: {
    subtitle: "50/30/20 ಚೌಕಟ್ಟಿನಲ್ಲಿ ನಿಮ್ಮ ಆದಾಯವನ್ನು ವಿಂಗಡಿಸಿ.",
    income: "ಮಾಸಿಕ ಆದಾಯ",
    needs: "ಅಗತ್ಯಗಳು",
    wants: "ಆಸೆಗಳು",
    savings: "ಉಳಿತಾಯ",
    total: (pct) => `ಒಟ್ಟು: ${pct}% (100% ಆಗಿರಬೇಕು)`,
    totalOk: "ಒಟ್ಟು: 100%",
    sipShare: "ಉಳಿತಾಯದಲ್ಲಿ SIP ಪಾಲು",
    result: "ಸೂಚಿತ ಮಾಸಿಕ SIP",
    note: "ನೀವು ಹೊಂದಿಸಿದ ಶೇಕಡಾವಾರುಗಳನ್ನು ಆಧರಿಸಿದೆ. ನಿಮ್ಮ ಸ್ಥಿರ ವೆಚ್ಚಗಳಿಗೆ ತಕ್ಕಂತೆ ಬದಲಿಸಿ.",
  },
  goal: {
    subtitle: "ಗುರಿಯಿಂದ ಹಿಂದಕ್ಕೆ ಲೆಕ್ಕಹಾಕಿ ನಿಮಗೆ ಬೇಕಾದ ಮಾಸಿಕ SIP ಕಂಡುಕೊಳ್ಳಿ.",
    target: "ಗುರಿ ಮೊತ್ತ",
    horizon: "ಕಾಲಮಿತಿ",
    rate: "ವಾರ್ಷಿಕ ನಿರೀಕ್ಷಿತ ಆದಾಯ",
    existing: "ಈಗಾಗಲೇ ಇರುವ ಉಳಿತಾಯ",
    years: (n) => `${n} ವರ್ಷ`,
    result: "ಬೇಕಾದ ಮಾಸಿಕ SIP",
    fvExisting: "ನಿಮ್ಮ ಉಳಿತಾಯ ಬೆಳೆಯುವ ಮೊತ್ತ",
    gap: "ಉಳಿದ ಅಂತರ",
    totalInvested: "SIP ಮೂಲಕ ಒಟ್ಟು ಹೂಡಿಕೆ",
    sipCorpus: "SIP ನಿಧಿ",
    totalCorpus: "ಒಟ್ಟು ನಿಧಿ",
    note: "ಪ್ರತಿ ವರ್ಷ ಒಂದೇ ಆದಾಯ ಎಂದು ಊಹಿಸಿದ ಅಂದಾಜು. ನಿಜವಾದ ಆದಾಯ ಏರಿಳಿತಗೊಳ್ಳುತ್ತದೆ, ಇಲ್ಲಿ ಯಾವುದೂ ಖಾತರಿಯಲ್ಲ.",
  },
  tax: {
    subtitle: "ಬಂಡವಾಳ ಲಾಭಗಳೂ ಸೇರಿದಂತೆ, ಹೊಸ ಪದ್ಧತಿಯಲ್ಲಿ ನಿಮ್ಮ ತೆರಿಗೆ ಅಂದಾಜಿಸಿ.",
    heads: { salary: "ಶೀರ್ಷಿಕೆ 1 · ಸಂಬಳ", business: "ಶೀರ್ಷಿಕೆ 2 · ವ್ಯವಹಾರ / ವೃತ್ತಿ", property: "ಶೀರ್ಷಿಕೆ 3 · ಮನೆ ಆಸ್ತಿ", gains: "ಶೀರ್ಷಿಕೆ 4 · ಬಂಡವಾಳ ಲಾಭ", other: "ಶೀರ್ಷಿಕೆ 5 · ಇತರ ಮೂಲಗಳು" },
    salary: "ಒಟ್ಟು ಸಂಬಳ",
    salaryHint: "₹75,000 ಪ್ರಮಾಣಿತ ಕಡಿತ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅನ್ವಯವಾಗುತ್ತದೆ.",
    business: "ನಿವ್ವಳ ವ್ಯವಹಾರ / ವೃತ್ತಿ ಆದಾಯ",
    rent: "ಪಡೆದ ಒಟ್ಟು ಬಾಡಿಗೆ",
    muni: "ಪಾವತಿಸಿದ ಪುರಸಭೆ ತೆರಿಗೆ",
    homeLoan: "ಗೃಹ ಸಾಲದ ಬಡ್ಡಿ",
    propertyHint: (nav, std, net) => `NAV ${nav} → 30% ಪ್ರಮಾಣಿತ ಕಡಿತ ${std} → ನಿವ್ವಳ ಮನೆ ಆಸ್ತಿ ಆದಾಯ ${net}`,
    stcgEq: "STCG · ಈಕ್ವಿಟಿ (20%)",
    stcgDebt: "STCG · ಸಾಲಪತ್ರ (ಸ್ಲ್ಯಾಬ್ ದರ)",
    ltcgEq: "LTCG · ಈಕ್ವಿಟಿ (₹1.25L ಮೇಲೆ 12.5%)",
    ltcgDebtPre: "LTCG · ಏಪ್ರಿಲ್ 2023ಕ್ಕಿಂತ ಮೊದಲು ಖರೀದಿಸಿದ ಸಾಲಪತ್ರ (12.5%)",
    ltcgDebtPost: "LTCG · ಏಪ್ರಿಲ್ 2023ರಿಂದ ಖರೀದಿಸಿದ ಸಾಲಪತ್ರ (ಸ್ಲ್ಯಾಬ್)",
    interest: "ಬಡ್ಡಿ ಆದಾಯ",
    dividends: "ಲಾಭಾಂಶ",
    otherInc: "ಇತರ ಆದಾಯ",
    result: "ಅಂದಾಜು ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ",
    effectiveRate: (pct) => `ಪರಿಣಾಮಕಾರಿ ತೆರಿಗೆ ದರ ${pct}%`,
    incomeSummary: "ಆದಾಯ ಸಾರಾಂಶ",
    salaryNet: "ಸಂಬಳ (ಪ್ರಮಾಣಿತ ಕಡಿತದ ನಂತರ)",
    businessNet: "ವ್ಯವಹಾರ / ವೃತ್ತಿ",
    hpNet: "ಮನೆ ಆಸ್ತಿ",
    otherNet: "ಇತರ ಮೂಲಗಳು",
    totalNormal: "ಒಟ್ಟು ಸಾಮಾನ್ಯ ಆದಾಯ",
    breakdown: "ತೆರಿಗೆ ವಿವರ",
    slabTax: "ಸಾಮಾನ್ಯ ಆದಾಯದ ಸ್ಲ್ಯಾಬ್ ತೆರಿಗೆ",
    rebate: "ಕಳೆಯಿರಿ: 87A ರಿಯಾಯಿತಿ",
    reliefRebate: "ರಿಯಾಯಿತಿಯ ಮೇಲಿನ ಅಂಚಿನ ಪರಿಹಾರ",
    gainsTax: "ಬಂಡವಾಳ ಲಾಭ ತೆರಿಗೆ",
    stcgEqTax: "STCG ಈಕ್ವಿಟಿ @ 20%",
    stcgDebtTax: "STCG ಸಾಲಪತ್ರ (ಸ್ಲ್ಯಾಬ್)",
    ltcgEqTax: "LTCG ಈಕ್ವಿಟಿ @ 12.5%",
    ltcgDebtPreTax: "ಏಪ್ರಿಲ್ 2023ಕ್ಕಿಂತ ಮೊದಲಿನ LTCG ಸಾಲಪತ್ರ @ 12.5%",
    ltcgDebtPostTax: "ಏಪ್ರಿಲ್ 2023ರಿಂದ LTCG ಸಾಲಪತ್ರ (ಸ್ಲ್ಯಾಬ್)",
    inSlab: "ಸ್ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಸೇರಿದೆ",
    totals: "ಒಟ್ಟು",
    surcharge: "ಸರ್ಚಾರ್ಜ್",
    reliefSurcharge: "ಸರ್ಚಾರ್ಜ್ ಮೇಲಿನ ಅಂಚಿನ ಪರಿಹಾರ",
    cess: "ಆರೋಗ್ಯ ಮತ್ತು ಶಿಕ್ಷಣ ಸೆಸ್ (4%)",
    note: "ಈ ಸಾಧನದಲ್ಲಿರುವ ಹೊಸ ಪದ್ಧತಿ ಸ್ಲ್ಯಾಬ್‌ಗಳ ಆಧಾರದ ಅಂದಾಜು. ರಿಟರ್ನ್ ಸಲ್ಲಿಸುವ ಮೊದಲು ತೆರಿಗೆ ತಜ್ಞರೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",
  },
  rebalance: {
    subtitle: "ನಿಮ್ಮ ಈಗಿನ ಹಂಚಿಕೆಯನ್ನು ಗುರಿಗಳೊಂದಿಗೆ ಹೋಲಿಸಿ.",
    current: "ಈಗಿನ ಹೂಡಿಕೆಗಳು",
    target: "ಗುರಿ ಹಂಚಿಕೆ",
    assetLabels: ["ಈಕ್ವಿಟಿ", "ಸಾಲಪತ್ರ", "ಆಭರಣ", "ರಿಯಲ್ ಎಸ್ಟೇಟ್", "ನಗದು / ಲಿಕ್ವಿಡ್", "ಇತರ ಆಸ್ತಿಗಳು"],
    portfolioTotal: (v) => `ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಒಟ್ಟು: ${v}`,
    targetTotal: (pct) => `ಗುರಿ ಒಟ್ಟು: ${pct}% (100% ಆಗಿರಬೇಕು)`,
    targetOk: "ಗುರಿ ಒಟ್ಟು: 100%",
    result: "ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಮೌಲ್ಯ",
    empty: "ಏನು ಖರೀದಿಸಬೇಕು ಅಥವಾ ಮಾರಬೇಕು ಎಂದು ನೋಡಲು ನಿಮ್ಮ ಈಗಿನ ಹೂಡಿಕೆಗಳನ್ನು ನಮೂದಿಸಿ.",
    toSell: "ಮಾರಬೇಕಾದ ಆಸ್ತಿ",
    toBuy: "ಖರೀದಿಸಬೇಕಾದ ಆಸ್ತಿ",
    perAsset: "ಪ್ರತಿ ಆಸ್ತಿ",
    buy: (v) => `ಖರೀದಿಸಿ ${v}`,
    sell: (v) => `ಮಾರಿ ${v}`,
    onTarget: "ಗುರಿಯಲ್ಲಿದೆ",
    note: "ಇಂದಿನ ಮೌಲ್ಯಗಳನ್ನು ಆಧರಿಸಿದೆ. ಏನನ್ನಾದರೂ ಮಾರುವ ಮೊದಲು ತೆರಿಗೆ ಮತ್ತು ಎಕ್ಸಿಟ್ ಲೋಡ್ ಪರಿಗಣಿಸಿ.",
  },
};

export const CALCULATOR_COPY: Record<Lang, CalculatorCopy> = { en, kn };
