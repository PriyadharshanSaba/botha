import type { Lang } from "@/app/context/LanguageContext";

// Enquiry forms that open over the current page and post to /api/contact.
// Option values stay in English so the emails the team receives read the same in either language.

export type EnquiryKind = "registration" | "website" | "vcfo";

type Option = { value: string; label: string };

type BaseField = { name: string; label: string };
export type FieldSpec =
  | (BaseField & { kind: "text" | "email" | "tel"; placeholder?: string; required?: boolean; half?: boolean })
  | (BaseField & { kind: "select"; placeholder: string; options: Option[]; half?: boolean })
  | (BaseField & { kind: "chips"; hint: string; options: Option[] })
  | (BaseField & { kind: "textarea"; placeholder?: string });

export type EnquiryForm = {
  eyebrow: string;
  title: string;
  subtitle: string;
  fields: FieldSpec[];
  submit: string;
};

export type EnquiryShell = {
  callTitle: string;
  callBody: string;
  callLink: string;
  optional: string;
  sending: string;
  error: string;
  privacy: string;
  close: string;
  successTitle: string;
  successBody: string;
  done: string;
};

// [English value, Kannada label]
type Pair = [string, string];
const opts = (lang: Lang, pairs: Pair[]): Option[] =>
  pairs.map(([value, kn]) => ({ value, label: lang === "kn" ? kn : value }));

const TIMELINE: Pair[] = [
  ["As soon as possible", "ಆದಷ್ಟು ಬೇಗ"],
  ["Within a month", "ಒಂದು ತಿಂಗಳೊಳಗೆ"],
  ["In the next 3 months", "ಮುಂದಿನ 3 ತಿಂಗಳಲ್ಲಿ"],
  ["Just exploring for now", "ಸದ್ಯಕ್ಕೆ ಕೇವಲ ತಿಳಿದುಕೊಳ್ಳುತ್ತಿದ್ದೇನೆ"],
];

type Text = { en: string; kn: string };
const t = (lang: Lang, s: Text) => s[lang];

function contactFields(lang: Lang): FieldSpec[] {
  return [
    { name: "name", kind: "text", label: t(lang, { en: "Your name", kn: "ನಿಮ್ಮ ಹೆಸರು" }), placeholder: "Arjun Mehta", required: true, half: true },
    { name: "email", kind: "email", label: t(lang, { en: "Email", kn: "ಇಮೇಲ್" }), placeholder: "arjun@yourcompany.com", required: true, half: true },
    { name: "phone", kind: "tel", label: t(lang, { en: "Phone", kn: "ಫೋನ್" }), placeholder: "+91 98765 43210", half: true },
  ];
}

function timeline(lang: Lang): FieldSpec {
  return {
    name: "timeline",
    kind: "select",
    label: t(lang, { en: "When do you want to start?", kn: "ಯಾವಾಗ ಆರಂಭಿಸಲು ಬಯಸುತ್ತೀರಿ?" }),
    placeholder: t(lang, { en: "Select timeline", kn: "ಕಾಲಮಿತಿ ಆಯ್ಕೆಮಾಡಿ" }),
    options: opts(lang, TIMELINE),
    half: true,
  };
}

function notes(lang: Lang, placeholder: Text): FieldSpec {
  return { name: "notes", kind: "textarea", label: t(lang, { en: "Anything else we should know?", kn: "ನಾವು ತಿಳಿಯಬೇಕಾದ ಇನ್ನೇನಾದರೂ?" }), placeholder: t(lang, placeholder) };
}

function registration(lang: Lang): EnquiryForm {
  return {
    eyebrow: t(lang, { en: "Company registration & GST", kn: "ಕಂಪನಿ ನೋಂದಣಿ ಮತ್ತು GST" }),
    title: t(lang, { en: "Start your registration", kn: "ನಿಮ್ಮ ನೋಂದಣಿ ಆರಂಭಿಸಿ" }),
    subtitle: t(lang, { en: "Tell us a little about the business. We'll reply within 24 hours with the documents we need and a fixed quote.", kn: "ನಿಮ್ಮ ವ್ಯವಹಾರದ ಬಗ್ಗೆ ಸ್ವಲ್ಪ ತಿಳಿಸಿ. ಬೇಕಾದ ದಾಖಲೆಗಳು ಮತ್ತು ನಿಗದಿತ ದರದೊಂದಿಗೆ 24 ಗಂಟೆಗಳೊಳಗೆ ಉತ್ತರಿಸುತ್ತೇವೆ." }),
    fields: [
      ...contactFields(lang),
      { name: "company", kind: "text", label: t(lang, { en: "Proposed company name", kn: "ಪ್ರಸ್ತಾವಿತ ಕಂಪನಿ ಹೆಸರು" }), placeholder: "Arjun Foods", half: true },
      {
        name: "entity",
        kind: "select",
        label: t(lang, { en: "Type of entity", kn: "ಸಂಸ್ಥೆಯ ಪ್ರಕಾರ" }),
        placeholder: t(lang, { en: "Select type", kn: "ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["Private Limited Company", "ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಕಂಪನಿ"],
          ["LLP", "LLP"],
          ["One Person Company", "ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಕಂಪನಿ"],
          ["Not sure yet", "ಇನ್ನೂ ಖಚಿತವಿಲ್ಲ"],
        ]),
        half: true,
      },
      { name: "state", kind: "text", label: t(lang, { en: "State of registration", kn: "ನೋಂದಣಿ ರಾಜ್ಯ" }), placeholder: "Karnataka", half: true },
      {
        name: "services",
        kind: "chips",
        label: t(lang, { en: "What do you need?", kn: "ನಿಮಗೆ ಏನು ಬೇಕು?" }),
        hint: t(lang, { en: "Select all that apply", kn: "ಅನ್ವಯಿಸುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["Company / LLP registration", "ಕಂಪನಿ / LLP ನೋಂದಣಿ"],
          ["GST registration", "GST ನೋಂದಣಿ"],
          ["GST, TDS & ROC filings", "GST, TDS ಮತ್ತು ROC ಫೈಲಿಂಗ್‌ಗಳು"],
          ["Bookkeeping & accounts", "ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆ"],
        ]),
      },
      timeline(lang),
      notes(lang, { en: "Co-founders, business activity, anything you're unsure about…", kn: "ಸಹ-ಸಂಸ್ಥಾಪಕರು, ವ್ಯವಹಾರ ಚಟುವಟಿಕೆ, ನಿಮಗೆ ಖಚಿತವಿಲ್ಲದ ಯಾವುದಾದರೂ…" }),
    ],
    submit: t(lang, { en: "Send registration request", kn: "ನೋಂದಣಿ ವಿನಂತಿ ಕಳುಹಿಸಿ" }),
  };
}

function website(lang: Lang): EnquiryForm {
  return {
    eyebrow: t(lang, { en: "Websites, domains & hosting", kn: "ವೆಬ್‌ಸೈಟ್, ಡೊಮೇನ್ ಮತ್ತು ಹೋಸ್ಟಿಂಗ್" }),
    title: t(lang, { en: "Get your business online", kn: "ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಆನ್‌ಲೈನ್‌ಗೆ ತನ್ನಿ" }),
    subtitle: t(lang, { en: "Tell us what you need. We'll come back within 24 hours with a plan and a quote.", kn: "ನಿಮಗೆ ಏನು ಬೇಕು ಎಂದು ತಿಳಿಸಿ. ಯೋಜನೆ ಮತ್ತು ದರದೊಂದಿಗೆ 24 ಗಂಟೆಗಳೊಳಗೆ ಉತ್ತರಿಸುತ್ತೇವೆ." }),
    fields: [
      ...contactFields(lang),
      { name: "company", kind: "text", label: t(lang, { en: "Business name", kn: "ವ್ಯವಹಾರದ ಹೆಸರು" }), placeholder: "Arjun Foods", half: true },
      {
        name: "services",
        kind: "chips",
        label: t(lang, { en: "What do you need?", kn: "ನಿಮಗೆ ಏನು ಬೇಕು?" }),
        hint: t(lang, { en: "Select all that apply", kn: "ಅನ್ವಯಿಸುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["Domain name", "ಡೊಮೇನ್ ಹೆಸರು"],
          ["Website design & build", "ವೆಬ್‌ಸೈಟ್ ವಿನ್ಯಾಸ ಮತ್ತು ನಿರ್ಮಾಣ"],
          ["Hosting", "ಹೋಸ್ಟಿಂಗ್"],
          ["Business email", "ವ್ಯವಹಾರ ಇಮೇಲ್"],
          ["Changes to an existing site", "ಈಗಿರುವ ಸೈಟ್‌ನಲ್ಲಿ ಬದಲಾವಣೆ"],
        ]),
      },
      { name: "website", kind: "text", label: t(lang, { en: "Current website, if any", kn: "ಈಗಿನ ವೆಬ್‌ಸೈಟ್, ಇದ್ದರೆ" }), placeholder: "yourcompany.in", half: true },
      timeline(lang),
      notes(lang, { en: "What the site should do, sites you like, pages you need…", kn: "ಸೈಟ್ ಏನು ಮಾಡಬೇಕು, ನಿಮಗೆ ಇಷ್ಟವಾದ ಸೈಟ್‌ಗಳು, ಬೇಕಾದ ಪುಟಗಳು…" }),
    ],
    submit: t(lang, { en: "Send website request", kn: "ವೆಬ್‌ಸೈಟ್ ವಿನಂತಿ ಕಳುಹಿಸಿ" }),
  };
}

// Same questions as the form on /vcfo, so both send identical emails.
function vcfo(lang: Lang): EnquiryForm {
  return {
    eyebrow: t(lang, { en: "Virtual CFO", kn: "ವರ್ಚುವಲ್ CFO" }),
    title: t(lang, { en: "Request a Virtual CFO", kn: "ವರ್ಚುವಲ್ CFO ವಿನಂತಿಸಿ" }),
    subtitle: t(lang, { en: "Takes 3 minutes. We'll reach out within 24 hours. No pitch, no hard sell.", kn: "3 ನಿಮಿಷ ಸಾಕು. 24 ಗಂಟೆಗಳೊಳಗೆ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ. ಯಾವುದೇ ಒತ್ತಡವಿಲ್ಲ." }),
    fields: [
      ...contactFields(lang),
      { name: "designation", kind: "text", label: t(lang, { en: "Designation", kn: "ಹುದ್ದೆ" }), placeholder: "Founder / CFO / Director", half: true },
      { name: "company", kind: "text", label: t(lang, { en: "Company name", kn: "ಕಂಪನಿ ಹೆಸರು" }), placeholder: "YourCo Pvt. Ltd.", half: true },
      {
        name: "industry",
        kind: "select",
        label: t(lang, { en: "Industry", kn: "ಉದ್ಯಮ" }),
        placeholder: t(lang, { en: "Select industry", kn: "ಉದ್ಯಮ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["SaaS / Software", "SaaS / ಸಾಫ್ಟ್‌ವೇರ್"],
          ["D2C / E-commerce", "D2C / ಇ-ಕಾಮರ್ಸ್"],
          ["Manufacturing", "ತಯಾರಿಕೆ"],
          ["Professional Services", "ವೃತ್ತಿಪರ ಸೇವೆಗಳು"],
          ["Healthtech", "ಆರೋಗ್ಯ ತಂತ್ರಜ್ಞಾನ"],
          ["Fintech", "ಫಿನ್‌ಟೆಕ್"],
          ["Climate / Sustainability", "ಹವಾಮಾನ / ಸುಸ್ಥಿರತೆ"],
          ["Other", "ಇತರೆ"],
        ]),
        half: true,
      },
      {
        name: "stage",
        kind: "select",
        label: t(lang, { en: "Company stage", kn: "ಕಂಪನಿಯ ಹಂತ" }),
        placeholder: t(lang, { en: "Select stage", kn: "ಹಂತ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["Pre-revenue / Idea", "ಆದಾಯಕ್ಕಿಂತ ಮೊದಲು / ಆಲೋಚನೆ"],
          ["Early Stage (0–1 Cr ARR)", "ಆರಂಭಿಕ ಹಂತ (0–1 ಕೋಟಿ ARR)"],
          ["Growth Stage (1–10 Cr ARR)", "ಬೆಳವಣಿಗೆ ಹಂತ (1–10 ಕೋಟಿ ARR)"],
          ["Scaling (10 Cr+ ARR)", "ವಿಸ್ತರಣೆ (10 ಕೋಟಿ+ ARR)"],
          ["Established Business", "ಸ್ಥಾಪಿತ ವ್ಯವಹಾರ"],
        ]),
        half: true,
      },
      {
        name: "revenue",
        kind: "select",
        label: t(lang, { en: "Monthly revenue", kn: "ಮಾಸಿಕ ಆದಾಯ" }),
        placeholder: t(lang, { en: "Select range", kn: "ವ್ಯಾಪ್ತಿ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["Pre-revenue", "ಆದಾಯಕ್ಕಿಂತ ಮೊದಲು"],
          ["Under ₹10L/month", "ತಿಂಗಳಿಗೆ ₹10L ಕ್ಕಿಂತ ಕಡಿಮೆ"],
          ["₹10L – ₹50L/month", "ತಿಂಗಳಿಗೆ ₹10L – ₹50L"],
          ["₹50L – ₹2Cr/month", "ತಿಂಗಳಿಗೆ ₹50L – ₹2Cr"],
          ["₹2Cr+ /month", "ತಿಂಗಳಿಗೆ ₹2Cr+"],
        ]),
        half: true,
      },
      {
        name: "challenges",
        kind: "chips",
        label: t(lang, { en: "Biggest finance challenges", kn: "ಪ್ರಮುಖ ಹಣಕಾಸು ಸವಾಲುಗಳು" }),
        hint: t(lang, { en: "Select all that apply", kn: "ಅನ್ವಯಿಸುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["No clear financial reporting", "ಸ್ಪಷ್ಟ ಹಣಕಾಸು ವರದಿ ಇಲ್ಲ"],
          ["Cash flow visibility", "ನಗದು ಹರಿವಿನ ಸ್ಪಷ್ಟತೆ"],
          ["Preparing to raise funding", "ನಿಧಿ ಸಂಗ್ರಹಣೆಗೆ ತಯಾರಿ"],
          ["Compliance & tax backlogs", "ನಿಯಮಪಾಲನೆ ಮತ್ತು ತೆರಿಗೆ ಬಾಕಿ"],
          ["Budgeting & forecasting", "ಬಜೆಟ್ ಮತ್ತು ಮುನ್ಸೂಚನೆ"],
          ["Setting up finance from scratch", "ಹಣಕಾಸು ವ್ಯವಸ್ಥೆಯನ್ನು ಮೊದಲಿನಿಂದ ರೂಪಿಸುವುದು"],
          ["Investor reporting & board decks", "ಹೂಡಿಕೆದಾರರ ವರದಿ ಮತ್ತು ಬೋರ್ಡ್ ಡೆಕ್"],
          ["Cost control & profitability", "ವೆಚ್ಚ ನಿಯಂತ್ರಣ ಮತ್ತು ಲಾಭದಾಯಕತೆ"],
        ]),
      },
      {
        name: "service",
        kind: "select",
        label: t(lang, { en: "What do you need most?", kn: "ನಿಮಗೆ ಹೆಚ್ಚು ಬೇಕಾದದ್ದು ಏನು?" }),
        placeholder: t(lang, { en: "Select a service", kn: "ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ" }),
        options: opts(lang, [
          ["MIS & Financial Reporting", "MIS ಮತ್ತು ಹಣಕಾಸು ವರದಿ"],
          ["Cash Flow Management", "ನಗದು ಹರಿವು ನಿರ್ವಹಣೆ"],
          ["Fundraise Support", "ನಿಧಿ ಸಂಗ್ರಹಣೆ ಬೆಂಬಲ"],
          ["Budgeting & Forecasting", "ಬಜೆಟ್ ಮತ್ತು ಮುನ್ಸೂಚನೆ"],
          ["Compliance & Statutory", "ನಿಯಮಪಾಲನೆ ಮತ್ತು ಶಾಸನಬದ್ಧ"],
          ["Finance Function Setup", "ಹಣಕಾಸು ವಿಭಾಗ ಸ್ಥಾಪನೆ"],
          ["Full Virtual CFO Engagement", "ಪೂರ್ಣ ವರ್ಚುವಲ್ CFO ಸೇವೆ"],
          ["Not sure - need guidance", "ಖಚಿತವಿಲ್ಲ - ಮಾರ್ಗದರ್ಶನ ಬೇಕು"],
        ]),
        half: true,
      },
      timeline(lang),
      notes(lang, { en: "Your current finance setup, goals, or what prompted you to look for a Virtual CFO…", kn: "ನಿಮ್ಮ ಈಗಿನ ಹಣಕಾಸು ವ್ಯವಸ್ಥೆ, ಗುರಿಗಳು, ಅಥವಾ ವರ್ಚುವಲ್ CFO ಹುಡುಕಲು ಕಾರಣ…" }),
    ],
    submit: t(lang, { en: "Send request", kn: "ವಿನಂತಿ ಕಳುಹಿಸಿ" }),
  };
}

export const ENQUIRY_FORMS: Record<EnquiryKind, (lang: Lang) => EnquiryForm> = { registration, website, vcfo };

// Kannada drafts: pending review by a native speaker.
export const ENQUIRY_SHELL: Record<Lang, EnquiryShell> = {
  en: {
    callTitle: "Rather talk it through?",
    callBody: "Book a 30-minute discovery call and speak to us directly.",
    callLink: "Book a discovery call",
    optional: "optional",
    sending: "Sending…",
    error: "Something went wrong and your request wasn't sent. Please try again in a moment.",
    privacy: "By sending this you agree to our privacy policy. We never share your details.",
    close: "Close form",
    successTitle: "Request received.",
    successBody: "Thank you. We'll review your details and get back to you within 24 hours.",
    done: "Done",
  },
  kn: {
    callTitle: "ನೇರವಾಗಿ ಮಾತನಾಡಲು ಬಯಸುವಿರಾ?",
    callBody: "30 ನಿಮಿಷಗಳ ಪರಿಚಯ ಕರೆ ಬುಕ್ ಮಾಡಿ ಮತ್ತು ನಮ್ಮೊಂದಿಗೆ ನೇರವಾಗಿ ಮಾತನಾಡಿ.",
    callLink: "ಪರಿಚಯ ಕರೆ ಬುಕ್ ಮಾಡಿ",
    optional: "ಐಚ್ಛಿಕ",
    sending: "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ…",
    error: "ಏನೋ ತಪ್ಪಾಗಿದೆ, ನಿಮ್ಮ ವಿನಂತಿ ಕಳುಹಿಸಲಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    privacy: "ಇದನ್ನು ಕಳುಹಿಸುವ ಮೂಲಕ ನೀವು ನಮ್ಮ ಗೌಪ್ಯತಾ ನೀತಿಗೆ ಒಪ್ಪುತ್ತೀರಿ. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಾವು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.",
    close: "ಫಾರ್ಮ್ ಮುಚ್ಚಿ",
    successTitle: "ವಿನಂತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.",
    successBody: "ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ 24 ಗಂಟೆಗಳೊಳಗೆ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    done: "ಆಯಿತು",
  },
};
