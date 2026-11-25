import type { Lang } from "@/app/context/LanguageContext";
import { headline as h, type Headline } from "@/app/components/ui/headline";

export type ToolId = "networth" | "sip" | "budget" | "goal" | "tax" | "rebalance";
export type MemberToolId = "tracker" | "mfcompare" | "stockval";

type CardCopy = { name: string; desc: string; tags: string[] };

export type ToolsPageCopy = {
  eyebrow: string;
  title: Headline;
  body: string;
  jumpLabel: string;
  jumpFree: string;
  jumpProgram: string;
  freeLabel: string;
  programLabel: string;
  programIntro: string;
  free: string;
  openCalculator: string;
  includedWithProgram: string;
  getAccess: string;
  openTracker: string;
  download: string;
  seeProgram: string;
  modules: string;
  disclaimerLead: string;
  disclaimer: string;
  tools: Record<ToolId, CardCopy>;
  memberTools: Record<MemberToolId, CardCopy>;
};

const en: ToolsPageCopy = {
  eyebrow: "Planning tools",
  title: h("Free tools for ", "real decisions."),
  body: "Six free calculators for the money questions you actually face. Open one, enter your numbers, and see the answer in seconds.",
  jumpLabel: "Jump to a section",
  jumpFree: "Free calculators",
  jumpProgram: "With the program",
  freeLabel: "Free calculators",
  programLabel: "With the Personal Finance Program",
  programIntro: "Three more tools for members: track your progress every month, and go deeper with two Excel toolkits.",
  free: "Free",
  openCalculator: "Open calculator",
  includedWithProgram: "Included with the program",
  getAccess: "Get access",
  openTracker: "Open tracker",
  download: "Download (.xlsx)",
  seeProgram: "See the program",
  modules: "What's in the ten modules",
  disclaimerLead: "Disclaimer:",
  disclaimer: "The tools provided on this page are intended solely for educational and informational purposes. Results are based on simplified assumptions and may not reflect your actual financial situation. Please perform your own independent calculations and, if in doubt, consult a qualified financial professional before making any financial decisions.",
  tools: {
    networth: { name: "Net Worth Calculator", desc: "Add up everything you own and owe, and see where you truly stand.", tags: ["Assets", "Liabilities"] },
    sip: { name: "SIP Calculator", desc: "Project what your monthly SIP could grow to, with an optional yearly step-up.", tags: ["Compounding", "Step-up"] },
    budget: { name: "Budget Planner", desc: "Split your income into needs, wants and savings, with a suggested monthly SIP.", tags: ["50/30/20", "Monthly plan"] },
    goal: { name: "Goal-Based SIP Planner", desc: "Start from the amount you need and work back to the SIP that gets you there.", tags: ["Goal planning", "Timeline"] },
    tax: { name: "Tax Estimator", desc: "Estimate your income tax under the New Regime, including capital gains.", tags: ["New Regime", "LTCG / STCG"] },
    rebalance: { name: "Rebalancing Calculator", desc: "Compare your allocation to your targets and see exactly what to buy or sell.", tags: ["Allocation", "Drift"] },
  },
  memberTools: {
    tracker: { name: "Net Worth Tracker", desc: "Log your net worth every month and watch your progress on a chart.", tags: ["Monthly log", "Charts"] },
    mfcompare: { name: "Mutual Fund Comparing Tool", desc: "Compare funds side by side on returns, expense ratios and more, in a ready-made Excel sheet.", tags: ["Excel", "Download"] },
    stockval: { name: "Indian Stock Valuation Dashboard", desc: "Evaluate Indian stocks on P/E, P/B and more in one structured Excel dashboard.", tags: ["Excel", "Download"] },
  },
};

// Kannada drafts: pending review by a native speaker.
const kn: ToolsPageCopy = {
  eyebrow: "ಯೋಜನಾ ಸಾಧನಗಳು",
  title: h("", "ನಿಜವಾದ ನಿರ್ಧಾರಗಳಿಗೆ", " ಉಚಿತ ಸಾಧನಗಳು."),
  body: "ನೀವು ನಿಜವಾಗಿ ಎದುರಿಸುವ ಹಣದ ಪ್ರಶ್ನೆಗಳಿಗೆ ಆರು ಉಚಿತ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು. ಒಂದನ್ನು ತೆರೆಯಿರಿ, ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳನ್ನು ನಮೂದಿಸಿ, ಕ್ಷಣಗಳಲ್ಲಿ ಉತ್ತರ ನೋಡಿ.",
  jumpLabel: "ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ",
  jumpFree: "ಉಚಿತ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು",
  jumpProgram: "ಕಾರ್ಯಕ್ರಮದೊಂದಿಗೆ",
  freeLabel: "ಉಚಿತ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು",
  programLabel: "ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಕಾರ್ಯಕ್ರಮದೊಂದಿಗೆ",
  programIntro: "ಸದಸ್ಯರಿಗೆ ಇನ್ನೂ ಮೂರು ಸಾಧನಗಳು: ಪ್ರತಿ ತಿಂಗಳು ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಗಮನಿಸಿ, ಮತ್ತು ಎರಡು Excel ಟೂಲ್‌ಕಿಟ್‌ಗಳೊಂದಿಗೆ ಆಳವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ.",
  free: "ಉಚಿತ",
  openCalculator: "ಕ್ಯಾಲ್ಕುಲೇಟರ್ ತೆರೆಯಿರಿ",
  includedWithProgram: "ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಸೇರಿದೆ",
  getAccess: "ಪ್ರವೇಶ ಪಡೆಯಿರಿ",
  openTracker: "ಟ್ರ್ಯಾಕರ್ ತೆರೆಯಿರಿ",
  download: "ಡೌನ್‌ಲೋಡ್ (.xlsx)",
  seeProgram: "ಕಾರ್ಯಕ್ರಮ ನೋಡಿ",
  modules: "ಹತ್ತು ಮಾಡ್ಯೂಲ್‌ಗಳಲ್ಲಿ ಏನಿದೆ",
  disclaimerLead: "ಹಕ್ಕು ನಿರಾಕರಣೆ:",
  disclaimer: "ಈ ಪುಟದಲ್ಲಿರುವ ಸಾಧನಗಳು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಮಾಹಿತಿ ಉದ್ದೇಶಗಳಿಗಾಗಿ. ಫಲಿತಾಂಶಗಳು ಸರಳೀಕೃತ ಊಹೆಗಳನ್ನು ಆಧರಿಸಿವೆ ಮತ್ತು ನಿಮ್ಮ ನಿಜವಾದ ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸದಿರಬಹುದು. ದಯವಿಟ್ಟು ನಿಮ್ಮದೇ ಆದ ಸ್ವತಂತ್ರ ಲೆಕ್ಕಾಚಾರಗಳನ್ನು ಮಾಡಿ ಮತ್ತು ಸಂದೇಹವಿದ್ದರೆ, ಯಾವುದೇ ಆರ್ಥಿಕ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ಅರ್ಹ ಹಣಕಾಸು ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  tools: {
    networth: { name: "ನಿವ್ವಳ ಮೌಲ್ಯ ಕ್ಯಾಲ್ಕುಲೇಟರ್", desc: "ನಿಮ್ಮ ಆಸ್ತಿ ಮತ್ತು ಸಾಲಗಳನ್ನು ಕೂಡಿಸಿ, ನೀವು ನಿಜವಾಗಿ ಎಲ್ಲಿ ನಿಂತಿದ್ದೀರಿ ಎಂದು ನೋಡಿ.", tags: ["ಆಸ್ತಿಗಳು", "ಸಾಲಗಳು"] },
    sip: { name: "SIP ಕ್ಯಾಲ್ಕುಲೇಟರ್", desc: "ನಿಮ್ಮ ಮಾಸಿಕ SIP ಎಷ್ಟು ಬೆಳೆಯಬಹುದು ಎಂದು ಅಂದಾಜಿಸಿ, ಐಚ್ಛಿಕ ವಾರ್ಷಿಕ ಹೆಚ್ಚಳದೊಂದಿಗೆ.", tags: ["ಚಕ್ರಬಡ್ಡಿ", "ಹೆಚ್ಚಳ"] },
    budget: { name: "ಬಜೆಟ್ ಯೋಜಕ", desc: "ನಿಮ್ಮ ಆದಾಯವನ್ನು ಅಗತ್ಯ, ಆಸೆ ಮತ್ತು ಉಳಿತಾಯಗಳಾಗಿ ವಿಂಗಡಿಸಿ, ಸೂಚಿತ ಮಾಸಿಕ SIP ಜೊತೆಗೆ.", tags: ["50/30/20", "ಮಾಸಿಕ ಯೋಜನೆ"] },
    goal: { name: "ಗುರಿ ಆಧಾರಿತ SIP ಯೋಜಕ", desc: "ನಿಮಗೆ ಬೇಕಾದ ಮೊತ್ತದಿಂದ ಆರಂಭಿಸಿ, ಅಲ್ಲಿಗೆ ತಲುಪಿಸುವ SIP ಕಂಡುಕೊಳ್ಳಿ.", tags: ["ಗುರಿ ಯೋಜನೆ", "ಕಾಲಮಿತಿ"] },
    tax: { name: "ತೆರಿಗೆ ಅಂದಾಜುಗಾರ", desc: "ಬಂಡವಾಳ ಲಾಭಗಳೂ ಸೇರಿದಂತೆ, ಹೊಸ ತೆರಿಗೆ ಪದ್ಧತಿಯಲ್ಲಿ ನಿಮ್ಮ ಆದಾಯ ತೆರಿಗೆ ಅಂದಾಜಿಸಿ.", tags: ["ಹೊಸ ಪದ್ಧತಿ", "LTCG / STCG"] },
    rebalance: { name: "ಮರುಸಮತೋಲನ ಕ್ಯಾಲ್ಕುಲೇಟರ್", desc: "ನಿಮ್ಮ ಹಂಚಿಕೆಯನ್ನು ಗುರಿಗಳೊಂದಿಗೆ ಹೋಲಿಸಿ, ಏನು ಖರೀದಿಸಬೇಕು ಅಥವಾ ಮಾರಬೇಕು ಎಂದು ನಿಖರವಾಗಿ ನೋಡಿ.", tags: ["ಹಂಚಿಕೆ", "ವ್ಯತ್ಯಾಸ"] },
  },
  memberTools: {
    tracker: { name: "ನಿವ್ವಳ ಮೌಲ್ಯ ಟ್ರ್ಯಾಕರ್", desc: "ಪ್ರತಿ ತಿಂಗಳು ನಿಮ್ಮ ನಿವ್ವಳ ಮೌಲ್ಯ ದಾಖಲಿಸಿ ಮತ್ತು ಚಾರ್ಟ್‌ನಲ್ಲಿ ಪ್ರಗತಿ ನೋಡಿ.", tags: ["ಮಾಸಿಕ ದಾಖಲೆ", "ಚಾರ್ಟ್‌ಗಳು"] },
    mfcompare: { name: "ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಹೋಲಿಕೆ ಸಾಧನ", desc: "ಸಿದ್ಧ Excel ಶೀಟ್‌ನಲ್ಲಿ ಫಂಡ್‌ಗಳನ್ನು ಆದಾಯ, ವೆಚ್ಚ ಅನುಪಾತ ಮತ್ತು ಇನ್ನಷ್ಟರ ಮೇಲೆ ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ಹೋಲಿಸಿ.", tags: ["Excel", "ಡೌನ್‌ಲೋಡ್"] },
    stockval: { name: "ಭಾರತೀಯ ಷೇರು ಮೌಲ್ಯಮಾಪನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", desc: "ಒಂದೇ Excel ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಭಾರತೀಯ ಷೇರುಗಳನ್ನು P/E, P/B ಮತ್ತು ಇನ್ನಷ್ಟರ ಮೇಲೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.", tags: ["Excel", "ಡೌನ್‌ಲೋಡ್"] },
  },
};

export const TOOLS_PAGE_COPY: Record<Lang, ToolsPageCopy> = { en, kn };
