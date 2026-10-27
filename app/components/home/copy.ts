import type { Lang } from "@/app/context/LanguageContext";
import { headline as h, type Headline } from "../ui/headline";

export type HomeCopy = {
  hero: { lines: [Headline, Headline]; body: string; jumpLabel: string; business: string; individuals: string };
  businessLabel: string;
  individualsLabel: string;
  registration: { eyebrow: string; title: Headline; sub: Headline; body: string; items: string[]; cta: string };
  websites: { eyebrow: string; title: Headline; body: string; cta: string };
  cfo: { eyebrow: string; title: Headline; body: string; cta: string };
  program: { eyebrow: string; title: Headline; body: string; cta: string; secondary: string };
  tools: { eyebrow: string; title: Headline; body: string; cta: string };
  insights: { eyebrow: string; title: Headline; body: string; cta: string };
  trustedBy: string;
  talk: { lines: [Headline, Headline]; cta: string };
};

const en: HomeCopy = {
  hero: {
    lines: [h("Helping India ", "build businesses."), h("Helping Indians ", "grow wealth.")],
    body: "From registering your company to making your first investment, we take care of the hard parts and explain every decision in plain language.",
    jumpLabel: "Jump to a section",
    business: "For businesses",
    individuals: "For individuals",
  },
  businessLabel: "For businesses & founders",
  individualsLabel: "For individuals",
  registration: {
    eyebrow: "Company registration & GST",
    title: h("From idea to ", "incorporated."),
    sub: h("Everything your company needs, ", "from day one."),
    body: "We register your Private Limited company or LLP with the government, get your GST number, and handle every filing that follows.",
    items: ["Company & LLP registration", "GST registration", "GST, TDS & ROC filings", "Bookkeeping & accounts"],
    cta: "Start your registration",
  },
  websites: {
    eyebrow: "Websites, domains & hosting",
    title: h("Your business, ", "online."),
    body: "We get your domain, set up your website and host it for you, so customers can find you and trust what they see.",
    cta: "Get your business online",
  },
  cfo: {
    eyebrow: "Virtual CFO",
    title: h("A CFO, without the ", "full-time", " cost."),
    body: "Monthly reports, cash flow planning and fundraise support, like having a CFO on your team.",
    cta: "Request a Virtual CFO",
  },
  program: {
    eyebrow: "The Personal Finance Program",
    title: h("Wealth, built ", "patiently."),
    body: "Our mission is to help India invest better. Ten modules take you from Money 101 to your first investment plan.",
    cta: "Enroll now",
    secondary: "See the curriculum",
  },
  tools: {
    eyebrow: "Planning tools",
    title: h("Plan every ", "goal."),
    body: "Free calculators to plan your SIPs, budget, goals and tax.",
    cta: "Try the free tools",
  },
  insights: {
    eyebrow: "Insights",
    title: h("Money insights, in ", "plain language."),
    body: "Weekly reads on markets, personal finance and business.",
    cta: "Read the blog",
  },
  trustedBy: "Trusted by",
  talk: {
    lines: [h("Tell us where you are.", ""), h("", "We'll take it from there.")],
    cta: "Book a discovery call",
  },
};

// Kannada drafts: pending review by a native speaker.
const kn: HomeCopy = {
  hero: {
    lines: [h("ಭಾರತಕ್ಕೆ ", "ವ್ಯವಹಾರ ಕಟ್ಟಲು", " ನೆರವು."), h("ಭಾರತೀಯರಿಗೆ ", "ಸಂಪತ್ತು ಬೆಳೆಸಲು", " ನೆರವು.")],
    body: "ನಿಮ್ಮ ಕಂಪನಿಯ ನೋಂದಣಿಯಿಂದ ಹಿಡಿದು ನಿಮ್ಮ ಮೊದಲ ಹೂಡಿಕೆಯವರೆಗೆ, ಕಷ್ಟದ ಕೆಲಸಗಳನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ ಮತ್ತು ಪ್ರತಿಯೊಂದು ನಿರ್ಧಾರವನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸುತ್ತೇವೆ.",
    jumpLabel: "ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ",
    business: "ವ್ಯವಹಾರಗಳಿಗೆ",
    individuals: "ವ್ಯಕ್ತಿಗಳಿಗೆ",
  },
  businessLabel: "ವ್ಯವಹಾರಗಳು ಮತ್ತು ಸಂಸ್ಥಾಪಕರಿಗೆ",
  individualsLabel: "ವ್ಯಕ್ತಿಗಳಿಗೆ",
  registration: {
    eyebrow: "ಕಂಪನಿ ನೋಂದಣಿ ಮತ್ತು GST",
    title: h("ಆಲೋಚನೆಯಿಂದ ", "ನೋಂದಾಯಿತ ಕಂಪನಿಯವರೆಗೆ."),
    sub: h("ನಿಮ್ಮ ಕಂಪನಿಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ, ", "ಮೊದಲ ದಿನದಿಂದಲೇ."),
    body: "ನಿಮ್ಮ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಕಂಪನಿ ಅಥವಾ LLP ಅನ್ನು ಸರ್ಕಾರದಲ್ಲಿ ನೋಂದಾಯಿಸುತ್ತೇವೆ, ನಿಮ್ಮ GST ಸಂಖ್ಯೆಯನ್ನು ಪಡೆಯುತ್ತೇವೆ ಮತ್ತು ನಂತರದ ಪ್ರತಿಯೊಂದು ಫೈಲಿಂಗ್ ಅನ್ನು ನಾವೇ ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
    items: ["ಕಂಪನಿ ಮತ್ತು LLP ನೋಂದಣಿ", "GST ನೋಂದಣಿ", "GST, TDS ಮತ್ತು ROC ಫೈಲಿಂಗ್‌ಗಳು", "ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆ"],
    cta: "ನೋಂದಣಿ ಆರಂಭಿಸಿ",
  },
  websites: {
    eyebrow: "ವೆಬ್‌ಸೈಟ್, ಡೊಮೇನ್ ಮತ್ತು ಹೋಸ್ಟಿಂಗ್",
    title: h("ನಿಮ್ಮ ವ್ಯವಹಾರ, ", "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ."),
    body: "ನಿಮ್ಮ ಡೊಮೇನ್ ಪಡೆದು, ವೆಬ್‌ಸೈಟ್ ಸಿದ್ಧಪಡಿಸಿ, ಅದನ್ನು ನಿಮಗಾಗಿ ಹೋಸ್ಟ್ ಮಾಡುತ್ತೇವೆ. ಇದರಿಂದ ಗ್ರಾಹಕರು ನಿಮ್ಮನ್ನು ಸುಲಭವಾಗಿ ಹುಡುಕಬಹುದು ಮತ್ತು ನಂಬಬಹುದು.",
    cta: "ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಆನ್‌ಲೈನ್‌ಗೆ ತನ್ನಿ",
  },
  cfo: {
    eyebrow: "ವರ್ಚುವಲ್ CFO",
    title: h("", "ಪೂರ್ಣಾವಧಿ", " ವೆಚ್ಚವಿಲ್ಲದೆ ಒಬ್ಬ CFO."),
    body: "ಮಾಸಿಕ ವರದಿಗಳು, ನಗದು ಹರಿವಿನ ಯೋಜನೆ ಮತ್ತು ನಿಧಿ ಸಂಗ್ರಹಣೆಗೆ ಬೆಂಬಲ. ನಿಮ್ಮ ತಂಡದಲ್ಲೇ ಒಬ್ಬ CFO ಇದ್ದಂತೆ.",
    cta: "ವರ್ಚುವಲ್ CFO ವಿನಂತಿಸಿ",
  },
  program: {
    eyebrow: "ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಕಾರ್ಯಕ್ರಮ",
    title: h("", "ತಾಳ್ಮೆಯಿಂದ", " ಕಟ್ಟಿದ ಸಂಪತ್ತು."),
    body: "ಭಾರತ ಉತ್ತಮವಾಗಿ ಹೂಡಿಕೆ ಮಾಡಲು ನೆರವಾಗುವುದೇ ನಮ್ಮ ಧ್ಯೇಯ. ಹತ್ತು ಮಾಡ್ಯೂಲ್‌ಗಳು ನಿಮ್ಮನ್ನು ಹಣ ೧೦೧ ರಿಂದ ನಿಮ್ಮ ಮೊದಲ ಹೂಡಿಕೆ ಯೋಜನೆಯವರೆಗೆ ಕರೆದೊಯ್ಯುತ್ತವೆ.",
    cta: "ಈಗಲೇ ಸೇರಿ",
    secondary: "ಪಠ್ಯಕ್ರಮ ನೋಡಿ",
  },
  tools: {
    eyebrow: "ಯೋಜನಾ ಸಾಧನಗಳು",
    title: h("ಪ್ರತಿಯೊಂದು ", "ಗುರಿಯನ್ನೂ", " ಯೋಜಿಸಿ."),
    body: "ನಿಮ್ಮ SIP, ಬಜೆಟ್, ಗುರಿಗಳು ಮತ್ತು ತೆರಿಗೆಯನ್ನು ಯೋಜಿಸಲು ಉಚಿತ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು.",
    cta: "ಉಚಿತ ಸಾಧನಗಳನ್ನು ಬಳಸಿ",
  },
  insights: {
    eyebrow: "ಒಳನೋಟಗಳು",
    title: h("ಹಣಕಾಸಿನ ಒಳನೋಟಗಳು, ", "ಸರಳ ಭಾಷೆಯಲ್ಲಿ."),
    body: "ಮಾರುಕಟ್ಟೆ, ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಮತ್ತು ವ್ಯವಹಾರದ ಕುರಿತು ವಾರದ ಓದುಗಳು.",
    cta: "ಬ್ಲಾಗ್ ಓದಿ",
  },
  trustedBy: "ನಮ್ಮನ್ನು ನಂಬಿದವರು",
  talk: {
    lines: [h("ನೀವು ಎಲ್ಲಿದ್ದೀರಿ ಎಂದು ತಿಳಿಸಿ.", ""), h("", "ಮುಂದಿನದನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.")],
    cta: "ಪರಿಚಯ ಕರೆ ಬುಕ್ ಮಾಡಿ",
  },
};

export const HOME_COPY: Record<Lang, HomeCopy> = { en, kn };

export const TRUSTED_BY = ["Artan Technologies", "OFFScenes", "Toodex Technology", "SR Enterprises"];
