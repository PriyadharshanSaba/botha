import type { Lang } from "@/app/context/LanguageContext";
import { headline as h, type Headline } from "@/app/components/ui/headline";

type Door = { eyebrow: string; title: Headline; tags: string[] };
type Person = { role: string; name: string; photoAlt: string; bio: [string, string] };
type Value = { title: string; body: string };

export type AboutCopy = {
  hero: { eyebrow: string; title: Headline; body: string };
  story: { eyebrow: string; title: Headline; paragraphs: [string, string, string]; quote: Headline; quoteBy: string };
  whatWeDo: string;
  business: Door;
  individuals: Door;
  team: { label: string; people: [Person, Person] };
  valuesLabel: string;
  values: [Value, Value, Value, Value, Value, Value];
  cta: { title: Headline; body: string; contact: string; tools: string };
};

const en: AboutCopy = {
  hero: {
    eyebrow: "About Bodha",
    title: h("A firm built to ", "educate", " and support."),
    body: "We believe individuals, founders and businesses deserve financial expertise that is honest, hands-on and genuinely invested in their success.",
  },
  story: {
    eyebrow: "Our story",
    title: h("Built from experience, ", "for one purpose."),
    paragraphs: [
      "Most people don't lack ambition. They lack access to honest, credible financial guidance.",
      "So we built one firm for both sides. We help businesses register, stay compliant and run sharp finances, and we teach individuals to invest with confidence.",
      "We're a small, focused team of qualified professionals. We measure success by one thing: whether you're better off for working with us.",
    ],
    quote: h("We built the firm we wished existed when ", "we", " were on the other side."),
    quoteBy: "The founders of Bodha",
  },
  whatWeDo: "What we do",
  business: {
    eyebrow: "For businesses & founders",
    title: h("Register, comply ", "and grow."),
    tags: ["Company registration", "GST & compliance", "Virtual CFO", "Websites & hosting"],
  },
  individuals: {
    eyebrow: "For individuals",
    title: h("Learn, plan ", "and invest."),
    tags: ["Personal Finance Program", "Free planning tools", "Net Worth Tracker", "Weekly insights"],
  },
  team: {
    label: "The people behind Bodha",
    people: [
      {
        role: "Co-founder · Finance",
        name: "CA Amogha H.D",
        photoAlt: "CA Amogha H.D",
        bio: [
          "Chartered Accountant who has cleared all levels of the CFA Program. Formerly a Manager at Deloitte, working with CFOs across financial services, consumer and life sciences.",
          "Leads our Virtual CFO work and the Personal Finance Program curriculum.",
        ],
      },
      {
        role: "Co-founder · Technology",
        name: "Priyadharshan S",
        photoAlt: "Priyadharshan S",
        bio: [
          "Engineer who has been on the founder's side of the table, and knows what founders need beyond the numbers.",
          "Builds Bodha's tools and learning platform, and brings a founder's view to every business we work with.",
        ],
      },
    ],
  },
  valuesLabel: "What we stand for",
  values: [
    { title: "Direct accountability", body: "The partner who signs off on your work is the one doing it." },
    { title: "Honesty over comfort", body: "If your numbers or plan have a flaw, you'll hear it from us first." },
    { title: "Craft in every detail", body: "Clean models, clear reports and tools that are a pleasure to use." },
    { title: "Built for the long term", body: "We want to be the firm you call when something big happens." },
    { title: "We grow with our clients", body: "From early chaos to confident scale, we stay for the whole journey." },
    { title: "Confidentiality, always", body: "Your numbers and plans stay inside our walls. Always." },
  ],
  cta: {
    title: h("Work with people who ", "genuinely care."),
    body: "Tell us where you are, and we'll take it from there.",
    contact: "Get in touch",
    tools: "Try the free tools",
  },
};

// Kannada drafts: pending review by a native speaker.
const kn: AboutCopy = {
  hero: {
    eyebrow: "ಬೋಧ ಬಗ್ಗೆ",
    title: h("", "ಶಿಕ್ಷಣ", " ಮತ್ತು ಬೆಂಬಲಕ್ಕಾಗಿ ಕಟ್ಟಿದ ಸಂಸ್ಥೆ."),
    body: "ವ್ಯಕ್ತಿಗಳು, ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ವ್ಯವಹಾರಗಳು ಪ್ರಾಮಾಣಿಕ, ಪ್ರಾಯೋಗಿಕ ಮತ್ತು ಅವರ ಯಶಸ್ಸಿನಲ್ಲಿ ನಿಜವಾಗಿ ಆಸಕ್ತಿ ಹೊಂದಿರುವ ಹಣಕಾಸು ಪರಿಣತಿಗೆ ಅರ್ಹರು ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.",
  },
  story: {
    eyebrow: "ನಮ್ಮ ಕಥೆ",
    title: h("ಅನುಭವದಿಂದ ಕಟ್ಟಿದ್ದು, ", "ಒಂದೇ ಉದ್ದೇಶಕ್ಕಾಗಿ."),
    paragraphs: [
      "ಹೆಚ್ಚಿನವರಿಗೆ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಕೊರತೆಯಿಲ್ಲ. ಅವರಿಗೆ ಪ್ರಾಮಾಣಿಕ, ವಿಶ್ವಾಸಾರ್ಹ ಹಣಕಾಸು ಮಾರ್ಗದರ್ಶನ ಸಿಗುವುದಿಲ್ಲ.",
      "ಹಾಗಾಗಿ ನಾವು ಎರಡೂ ಕಡೆಗೆ ಒಂದೇ ಸಂಸ್ಥೆ ಕಟ್ಟಿದೆವು. ವ್ಯವಹಾರಗಳು ನೋಂದಾಯಿಸಲು, ನಿಯಮಪಾಲನೆ ಮಾಡಲು ಮತ್ತು ಹಣಕಾಸನ್ನು ಚುರುಕಾಗಿ ನಡೆಸಲು ನೆರವಾಗುತ್ತೇವೆ, ಮತ್ತು ವ್ಯಕ್ತಿಗಳಿಗೆ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಹೂಡಿಕೆ ಮಾಡಲು ಕಲಿಸುತ್ತೇವೆ.",
      "ನಾವು ಅರ್ಹ ವೃತ್ತಿಪರರ ಸಣ್ಣ, ಕೇಂದ್ರೀಕೃತ ತಂಡ. ನಮ್ಮ ಯಶಸ್ಸನ್ನು ಒಂದೇ ವಿಷಯದಿಂದ ಅಳೆಯುತ್ತೇವೆ: ನಮ್ಮೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಿದ ನಂತರ ನೀವು ಉತ್ತಮ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದೀರಾ ಎಂಬುದು.",
    ],
    quote: h("", "ನಾವು", " ಇನ್ನೊಂದು ಕಡೆ ಇದ್ದಾಗ ಇರಬೇಕೆಂದು ಬಯಸಿದ ಸಂಸ್ಥೆಯನ್ನೇ ಕಟ್ಟಿದೆವು."),
    quoteBy: "ಬೋಧದ ಸಂಸ್ಥಾಪಕರು",
  },
  whatWeDo: "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
  business: {
    eyebrow: "ವ್ಯವಹಾರಗಳು ಮತ್ತು ಸಂಸ್ಥಾಪಕರಿಗೆ",
    title: h("ನೋಂದಾಯಿಸಿ, ನಿಯಮ ಪಾಲಿಸಿ ", "ಮತ್ತು ಬೆಳೆಯಿರಿ."),
    tags: ["ಕಂಪನಿ ನೋಂದಣಿ", "GST ಮತ್ತು ನಿಯಮಪಾಲನೆ", "ವರ್ಚುವಲ್ CFO", "ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಹೋಸ್ಟಿಂಗ್"],
  },
  individuals: {
    eyebrow: "ವ್ಯಕ್ತಿಗಳಿಗೆ",
    title: h("ಕಲಿಯಿರಿ, ಯೋಜಿಸಿ ", "ಮತ್ತು ಹೂಡಿಕೆ ಮಾಡಿ."),
    tags: ["ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಕಾರ್ಯಕ್ರಮ", "ಉಚಿತ ಯೋಜನಾ ಸಾಧನಗಳು", "ನಿವ್ವಳ ಮೌಲ್ಯ ಟ್ರ್ಯಾಕರ್", "ವಾರದ ಒಳನೋಟಗಳು"],
  },
  team: {
    label: "ಬೋಧದ ಹಿಂದಿರುವವರು",
    people: [
      {
        role: "ಸಹ-ಸಂಸ್ಥಾಪಕರು · ಹಣಕಾಸು",
        name: "CA ಅಮೋಘ ಎಚ್.ಡಿ",
        photoAlt: "CA ಅಮೋಘ ಎಚ್.ಡಿ",
        bio: [
          "CFA ಕಾರ್ಯಕ್ರಮದ ಎಲ್ಲಾ ಹಂತಗಳನ್ನು ಪೂರೈಸಿದ ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆಂಟ್. ಹಿಂದೆ Deloitte‌ನಲ್ಲಿ ಮ್ಯಾನೇಜರ್ ಆಗಿ, ಹಣಕಾಸು ಸೇವೆಗಳು, ಗ್ರಾಹಕ ಮತ್ತು ಜೀವ ವಿಜ್ಞಾನ ಕ್ಷೇತ್ರಗಳ CFO‌ಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಿದ್ದಾರೆ.",
          "ನಮ್ಮ ವರ್ಚುವಲ್ CFO ಕೆಲಸ ಮತ್ತು ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಕಾರ್ಯಕ್ರಮದ ಪಠ್ಯಕ್ರಮವನ್ನು ಮುನ್ನಡೆಸುತ್ತಾರೆ.",
        ],
      },
      {
        role: "ಸಹ-ಸಂಸ್ಥಾಪಕರು · ತಂತ್ರಜ್ಞಾನ",
        name: "ಪ್ರಿಯದರ್ಶನ್ ಎಸ್",
        photoAlt: "ಪ್ರಿಯದರ್ಶನ್ ಎಸ್",
        bio: [
          "ಸಂಸ್ಥಾಪಕರ ಕಡೆಯಿಂದ ಅನುಭವ ಪಡೆದ ಎಂಜಿನಿಯರ್. ಸಂಖ್ಯೆಗಳನ್ನು ಮೀರಿ ಸಂಸ್ಥಾಪಕರಿಗೆ ಏನು ಬೇಕು ಎಂದು ತಿಳಿದವರು.",
          "ಬೋಧದ ಸಾಧನಗಳು ಮತ್ತು ಕಲಿಕಾ ವೇದಿಕೆಯನ್ನು ನಿರ್ಮಿಸುತ್ತಾರೆ, ಮತ್ತು ನಾವು ಕೆಲಸ ಮಾಡುವ ಪ್ರತಿಯೊಂದು ವ್ಯವಹಾರಕ್ಕೂ ಸಂಸ್ಥಾಪಕರ ದೃಷ್ಟಿಕೋನ ತರುತ್ತಾರೆ.",
        ],
      },
    ],
  },
  valuesLabel: "ನಮ್ಮ ಮೌಲ್ಯಗಳು",
  values: [
    { title: "ನೇರ ಹೊಣೆಗಾರಿಕೆ", body: "ನಿಮ್ಮ ಕೆಲಸಕ್ಕೆ ಸಹಿ ಹಾಕುವ ಪಾಲುದಾರರೇ ಅದನ್ನು ಮಾಡುತ್ತಾರೆ." },
    { title: "ಆರಾಮಕ್ಕಿಂತ ಪ್ರಾಮಾಣಿಕತೆ", body: "ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳಲ್ಲಿ ಅಥವಾ ಯೋಜನೆಯಲ್ಲಿ ದೋಷವಿದ್ದರೆ, ಮೊದಲು ನಮ್ಮಿಂದಲೇ ಕೇಳುತ್ತೀರಿ." },
    { title: "ಪ್ರತಿ ವಿವರದಲ್ಲೂ ಶ್ರದ್ಧೆ", body: "ಸ್ವಚ್ಛ ಮಾದರಿಗಳು, ಸ್ಪಷ್ಟ ವರದಿಗಳು ಮತ್ತು ಬಳಸಲು ಹಿತವಾದ ಸಾಧನಗಳು." },
    { title: "ದೀರ್ಘಾವಧಿಗಾಗಿ ಕಟ್ಟಿದ್ದು", body: "ದೊಡ್ಡದೇನಾದರೂ ಆದಾಗ ನೀವು ಕರೆ ಮಾಡುವ ಸಂಸ್ಥೆ ನಾವಾಗಬೇಕು ಎಂಬುದು ನಮ್ಮ ಆಶಯ." },
    { title: "ಗ್ರಾಹಕರೊಂದಿಗೆ ನಾವೂ ಬೆಳೆಯುತ್ತೇವೆ", body: "ಆರಂಭದ ಗೊಂದಲದಿಂದ ಆತ್ಮವಿಶ್ವಾಸದ ಬೆಳವಣಿಗೆಯವರೆಗೆ, ಇಡೀ ಪಯಣದಲ್ಲಿ ಜೊತೆಗಿರುತ್ತೇವೆ." },
    { title: "ಸದಾ ಗೌಪ್ಯತೆ", body: "ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಯೋಜನೆಗಳು ನಮ್ಮಲ್ಲೇ ಉಳಿಯುತ್ತವೆ. ಸದಾ." },
  ],
  cta: {
    title: h("ನಿಜವಾಗಿ ಕಾಳಜಿ ವಹಿಸುವವರೊಂದಿಗೆ ", "ಕೆಲಸ ಮಾಡಿ."),
    body: "ನೀವು ಎಲ್ಲಿದ್ದೀರಿ ಎಂದು ತಿಳಿಸಿ, ಮುಂದಿನದನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    tools: "ಉಚಿತ ಸಾಧನಗಳನ್ನು ಬಳಸಿ",
  },
};

export const ABOUT_COPY: Record<Lang, AboutCopy> = { en, kn };
