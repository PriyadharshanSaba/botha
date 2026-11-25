import type { Lang } from "@/app/context/LanguageContext";
import { headline as h, type Headline } from "@/app/components/ui/headline";

type Service = { name: string; desc: string; tag: string };
type Step = { title: string; body: string };

export type VcfoCopy = {
  hero: { eyebrow: string; title: Headline; body: string; cta: string; included: string };
  includedLabel: string;
  services: Service[];
  howLabel: string;
  steps: [Step, Step, Step, Step];
  request: {
    eyebrow: string; title: Headline; intro: string; promises: string[];
    formLabel: string; name: string; company: string; email: string; phone: string;
    stage: string; need: string; notes: string; optional: string; select: string;
    stages: string[]; needs: string[]; submit: string; sending: string; reply: string;
    error: string; successTitle: string; successBody: string;
  };
};

// Option values stay English (they go into the email the team receives); Kannada shows the same list.
export const STAGE_VALUES = ["Pre-revenue / idea", "Early stage (0–1 Cr ARR)", "Growth stage (1–10 Cr ARR)", "Scaling (10 Cr+ ARR)", "Established business"];
export const NEED_VALUES = ["Full Virtual CFO engagement", "MIS & financial reporting", "Cash flow management", "Fundraise support", "Budgeting & forecasting", "Compliance & statutory", "Finance function setup", "Not sure yet"];

const en: VcfoCopy = {
  hero: {
    eyebrow: "Virtual CFO",
    title: h("A CFO, without the ", "full-time", " cost."),
    body: "For businesses that have outgrown a bookkeeper but aren't ready for a full-time CFO. We handle your reporting, cash flow, compliance and fundraise prep, led by a Chartered Accountant.",
    cta: "Request a Virtual CFO",
    included: "See what's included",
  },
  includedLabel: "What's included",
  services: [
    { name: "MIS & financial reporting", desc: "Board-ready P&L, balance sheet and KPI dashboards, every month.", tag: "Monthly" },
    { name: "Cash flow management", desc: "A 13-week rolling forecast, so a shortfall never takes you by surprise.", tag: "Ongoing" },
    { name: "Fundraise support", desc: "Investor-grade models, data rooms and due diligence prep.", tag: "Milestone-based" },
    { name: "Budgeting & forecasting", desc: "Annual plans and scenario models your team can actually work to.", tag: "Quarterly" },
    { name: "Compliance & statutory", desc: "GST, TDS and ROC filings, audit coordination and tax planning.", tag: "Ongoing" },
    { name: "Finance function setup", desc: "Accounting software, chart of accounts and controls, built to scale.", tag: "One-time" },
    { name: "Outsourced accounting", desc: "Bookkeeping and month-end close for Indian and global companies.", tag: "Ongoing" },
    { name: "Company & LLP registration", desc: "From name approval to incorporation, PAN, TAN and GST.", tag: "One-time" },
  ],
  howLabel: "How it works",
  steps: [
    { title: "Discovery call", body: "30 minutes to understand your business and where finance is falling short." },
    { title: "Fixed-scope proposal", body: "A clear engagement letter within 48 hours. No vague retainers." },
    { title: "Onboarding", body: "We plug into Tally, Zoho, QuickBooks or your spreadsheets. First report within 14 days." },
    { title: "Ongoing partnership", body: "Monthly reporting, weekly check-ins, and help on email or WhatsApp when you need it." },
  ],
  request: {
    eyebrow: "Get started",
    title: h("Tell us about ", "your business."),
    intro: "Takes two minutes. Here's what happens next:",
    promises: ["A reply within 24 hours", "A 30-minute call, with no obligation", "A fixed-scope proposal, no hidden fees", "An NDA signed before you share any data"],
    formLabel: "Request a Virtual CFO",
    name: "Your name", company: "Company", email: "Email", phone: "Phone",
    stage: "Company stage", need: "What do you need most?", notes: "Anything else?", optional: "optional", select: "Select",
    stages: STAGE_VALUES, needs: NEED_VALUES,
    submit: "Request a Virtual CFO", sending: "Sending…", reply: "We'll reply within 24 hours.",
    error: "Something went wrong and your request wasn't sent. Please try again in a moment.",
    successTitle: "Request received.",
    successBody: "Thank you. We'll review your details and reach out within 24 hours to schedule your discovery call.",
  },
};

// Kannada drafts: pending review by a native speaker.
const kn: VcfoCopy = {
  hero: {
    eyebrow: "ವರ್ಚುವಲ್ CFO",
    title: h("", "ಪೂರ್ಣಾವಧಿ", " ವೆಚ್ಚವಿಲ್ಲದೆ ಒಬ್ಬ CFO."),
    body: "ಬುಕ್‌ಕೀಪರ್‌ಗಿಂತ ಮುಂದೆ ಬೆಳೆದಿರುವ, ಆದರೆ ಪೂರ್ಣಾವಧಿ CFO ಗೆ ಇನ್ನೂ ಸಿದ್ಧವಿಲ್ಲದ ವ್ಯವಹಾರಗಳಿಗಾಗಿ. ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆಂಟ್ ನೇತೃತ್ವದಲ್ಲಿ ನಿಮ್ಮ ವರದಿ, ನಗದು ಹರಿವು, ನಿಯಮಪಾಲನೆ ಮತ್ತು ನಿಧಿ ಸಂಗ್ರಹಣೆ ತಯಾರಿಯನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.",
    cta: "ವರ್ಚುವಲ್ CFO ವಿನಂತಿಸಿ",
    included: "ಏನೇನು ಸೇರಿದೆ ನೋಡಿ",
  },
  includedLabel: "ಏನೇನು ಸೇರಿದೆ",
  services: [
    { name: "MIS ಮತ್ತು ಹಣಕಾಸು ವರದಿ", desc: "ಪ್ರತಿ ತಿಂಗಳು ಬೋರ್ಡ್‌ಗೆ ಸಿದ್ಧವಾದ P&L, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್ ಮತ್ತು KPI ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು.", tag: "ಮಾಸಿಕ" },
    { name: "ನಗದು ಹರಿವು ನಿರ್ವಹಣೆ", desc: "13 ವಾರಗಳ ರೋಲಿಂಗ್ ಮುನ್ಸೂಚನೆ, ಹಣದ ಕೊರತೆ ನಿಮಗೆ ಅಚ್ಚರಿಯಾಗದಂತೆ.", tag: "ನಿರಂತರ" },
    { name: "ನಿಧಿ ಸಂಗ್ರಹಣೆ ಬೆಂಬಲ", desc: "ಹೂಡಿಕೆದಾರ ಮಟ್ಟದ ಮಾದರಿಗಳು, ಡೇಟಾ ರೂಮ್‌ಗಳು ಮತ್ತು ಡ್ಯೂ ಡಿಲಿಜೆನ್ಸ್ ತಯಾರಿ.", tag: "ಹಂತ ಆಧಾರಿತ" },
    { name: "ಬಜೆಟ್ ಮತ್ತು ಮುನ್ಸೂಚನೆ", desc: "ನಿಮ್ಮ ತಂಡ ನಿಜವಾಗಿ ಅನುಸರಿಸಬಹುದಾದ ವಾರ್ಷಿಕ ಯೋಜನೆಗಳು ಮತ್ತು ಸನ್ನಿವೇಶ ಮಾದರಿಗಳು.", tag: "ತ್ರೈಮಾಸಿಕ" },
    { name: "ನಿಯಮಪಾಲನೆ ಮತ್ತು ಶಾಸನಬದ್ಧ", desc: "GST, TDS ಮತ್ತು ROC ಫೈಲಿಂಗ್‌ಗಳು, ಆಡಿಟ್ ಸಮನ್ವಯ ಮತ್ತು ತೆರಿಗೆ ಯೋಜನೆ.", tag: "ನಿರಂತರ" },
    { name: "ಹಣಕಾಸು ವಿಭಾಗ ಸ್ಥಾಪನೆ", desc: "ಅಕೌಂಟಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್, ಖಾತೆಗಳ ಪಟ್ಟಿ ಮತ್ತು ನಿಯಂತ್ರಣಗಳು, ಬೆಳೆಯಲು ಸಿದ್ಧ.", tag: "ಒಮ್ಮೆ" },
    { name: "ಹೊರಗುತ್ತಿಗೆ ಲೆಕ್ಕಪತ್ರ", desc: "ಭಾರತೀಯ ಮತ್ತು ಜಾಗತಿಕ ಕಂಪನಿಗಳಿಗೆ ಬುಕ್‌ಕೀಪಿಂಗ್ ಮತ್ತು ತಿಂಗಳ ಅಂತ್ಯದ ಕ್ಲೋಸ್.", tag: "ನಿರಂತರ" },
    { name: "ಕಂಪನಿ ಮತ್ತು LLP ನೋಂದಣಿ", desc: "ಹೆಸರು ಅನುಮೋದನೆಯಿಂದ ನೋಂದಣಿ, PAN, TAN ಮತ್ತು GST ವರೆಗೆ.", tag: "ಒಮ್ಮೆ" },
  ],
  howLabel: "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
  steps: [
    { title: "ಪರಿಚಯ ಕರೆ", body: "ನಿಮ್ಮ ವ್ಯವಹಾರ ಮತ್ತು ಹಣಕಾಸು ಎಲ್ಲಿ ಹಿಂದುಳಿದಿದೆ ಎಂದು ತಿಳಿಯಲು 30 ನಿಮಿಷ." },
    { title: "ನಿಗದಿತ ವ್ಯಾಪ್ತಿಯ ಪ್ರಸ್ತಾವ", body: "48 ಗಂಟೆಗಳೊಳಗೆ ಸ್ಪಷ್ಟ ಒಪ್ಪಂದ ಪತ್ರ. ಅಸ್ಪಷ್ಟ ರಿಟೇನರ್‌ಗಳಿಲ್ಲ." },
    { title: "ಆನ್‌ಬೋರ್ಡಿಂಗ್", body: "Tally, Zoho, QuickBooks ಅಥವಾ ನಿಮ್ಮ ಸ್ಪ್ರೆಡ್‌ಶೀಟ್‌ಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ. 14 ದಿನಗಳೊಳಗೆ ಮೊದಲ ವರದಿ." },
    { title: "ನಿರಂತರ ಪಾಲುದಾರಿಕೆ", body: "ಮಾಸಿಕ ವರದಿ, ವಾರದ ಸಂವಾದ, ಮತ್ತು ಬೇಕಾದಾಗ ಇಮೇಲ್ ಅಥವಾ WhatsApp ನಲ್ಲಿ ನೆರವು." },
  ],
  request: {
    eyebrow: "ಆರಂಭಿಸಿ",
    title: h("ನಿಮ್ಮ ವ್ಯವಹಾರದ ಬಗ್ಗೆ ", "ತಿಳಿಸಿ."),
    intro: "ಎರಡು ನಿಮಿಷ ಸಾಕು. ಮುಂದೇನಾಗುತ್ತದೆ ಎಂದರೆ:",
    promises: ["24 ಗಂಟೆಗಳೊಳಗೆ ಉತ್ತರ", "ಯಾವುದೇ ಬದ್ಧತೆಯಿಲ್ಲದ 30 ನಿಮಿಷದ ಕರೆ", "ನಿಗದಿತ ವ್ಯಾಪ್ತಿಯ ಪ್ರಸ್ತಾವ, ಮರೆಮಾಚಿದ ಶುಲ್ಕವಿಲ್ಲ", "ಯಾವುದೇ ಡೇಟಾ ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲು NDA ಸಹಿ"],
    formLabel: "ವರ್ಚುವಲ್ CFO ವಿನಂತಿಸಿ",
    name: "ನಿಮ್ಮ ಹೆಸರು", company: "ಕಂಪನಿ", email: "ಇಮೇಲ್", phone: "ಫೋನ್",
    stage: "ಕಂಪನಿಯ ಹಂತ", need: "ನಿಮಗೆ ಹೆಚ್ಚು ಬೇಕಾದದ್ದು ಏನು?", notes: "ಇನ್ನೇನಾದರೂ?", optional: "ಐಚ್ಛಿಕ", select: "ಆಯ್ಕೆಮಾಡಿ",
    stages: ["ಆದಾಯಕ್ಕಿಂತ ಮೊದಲು / ಆಲೋಚನೆ", "ಆರಂಭಿಕ ಹಂತ (0–1 ಕೋಟಿ ARR)", "ಬೆಳವಣಿಗೆ ಹಂತ (1–10 ಕೋಟಿ ARR)", "ವಿಸ್ತರಣೆ (10 ಕೋಟಿ+ ARR)", "ಸ್ಥಾಪಿತ ವ್ಯವಹಾರ"],
    needs: ["ಪೂರ್ಣ ವರ್ಚುವಲ್ CFO ಸೇವೆ", "MIS ಮತ್ತು ಹಣಕಾಸು ವರದಿ", "ನಗದು ಹರಿವು ನಿರ್ವಹಣೆ", "ನಿಧಿ ಸಂಗ್ರಹಣೆ ಬೆಂಬಲ", "ಬಜೆಟ್ ಮತ್ತು ಮುನ್ಸೂಚನೆ", "ನಿಯಮಪಾಲನೆ ಮತ್ತು ಶಾಸನಬದ್ಧ", "ಹಣಕಾಸು ವಿಭಾಗ ಸ್ಥಾಪನೆ", "ಇನ್ನೂ ಖಚಿತವಿಲ್ಲ"],
    submit: "ವರ್ಚುವಲ್ CFO ವಿನಂತಿಸಿ", sending: "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ…", reply: "24 ಗಂಟೆಗಳೊಳಗೆ ಉತ್ತರಿಸುತ್ತೇವೆ.",
    error: "ಏನೋ ತಪ್ಪಾಗಿದೆ, ನಿಮ್ಮ ವಿನಂತಿ ಕಳುಹಿಸಲಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    successTitle: "ವಿನಂತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.",
    successBody: "ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ 24 ಗಂಟೆಗಳೊಳಗೆ ಪರಿಚಯ ಕರೆ ನಿಗದಿಪಡಿಸಲು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
  },
};

export const VCFO_COPY: Record<Lang, VcfoCopy> = { en, kn };
