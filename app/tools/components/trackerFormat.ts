import type { NwtEntry } from "@/app/lib/networth/types";

export const sumValues = (m: Record<string, number>) => Object.values(m).reduce((a, b) => a + b, 0);
export const monthNw = (d: NwtEntry) => sumValues(d.assets) - sumValues(d.liabs);

/** "bankCash" → "Bank Cash"; "mfEquity" → "Mf Equity"; "epfPpfNps" → "Epf Ppf Nps". */
export function humanizeKey(k: string): string {
  const SPECIAL: Record<string, string> = {
    bankCash: "Bank & Cash",
    stocks: "Stocks / ETFs",
    mutualFunds: "Mutual Funds",
    mfEquity: "Equity MF",
    mfDebt: "Debt MF",
    epfPpfNps: "EPF / PPF / NPS",
    lic: "LIC",
    wazirxRT: "WazirX Recovery Tokens",
    esopIlliquid: "ESOP / Illiquid",
    fd: "Fixed Deposits",
    bonds: "PPF / Bonds / NPS",
    gold: "Gold",
    sgb: "SGB / Digital Gold",
    property: "Property",
    savings: "Savings",
    otherAsset: "Other Assets",
    homeLoan: "Home Loan",
    carLoan: "Car Loan",
    personalLoan: "Personal Loan",
    cc: "Credit Card",
    liabilities: "Liabilities",
  };
  if (SPECIAL[k]) return SPECIAL[k];
  return k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();
}
