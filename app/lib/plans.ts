// GST_RATE removed — not GST-registered. Re-add when incorporated.
// GST_RATE = 0.18 (CGST 9% + SGST 9%)

export type PlanId = "founding" | "early_access" | "regular"; // early_access hidden — restore when ready

export type Plan = {
  id: PlanId;
  name: string;
  badge: string;
  badgeStyle: "founding" | "popular" | "standard";
  tagline: string;
  basePriceRs: number;       // ex-GST in ₹
  testPriceRs?: number;      // override price for test emails only
  originalPriceRs?: number;  // strikethrough
  seatRange: string;
  maxSeats: number | null;   // null = unlimited
  featured: boolean;
  waitlist: boolean;
  features: { text: string; highlight?: boolean }[];
};

// ── HIDDEN PLAN (early_access) ────────────────────────────────────────────
// To restore: move the object below back into PLANS array and set waitlist: false
// early_access: ₹2,999 ex-GST · seats 101–500 · "Most popular" badge
// features: Full course EN+KN, all tools, WhatsApp 1yr, 72hr support 1yr,
//   lifetime access, 6 livedoubt sessions (6mo) + extra at ₹999+GST
// ─────────────────────────────────────────────────────────────────────────

export const PLANS: Plan[] = [
  {
    id: "founding",
    name: "Founding member",
    badge: "Founding batch — first 100",
    badgeStyle: "founding",
    tagline: "Introductory price. Reserved for our first 100 believers.",
    basePriceRs: 999,
    testPriceRs: 10,
    originalPriceRs: 4999,
    seatRange: "Seats 1 – 100",
    maxSeats: 100,
    featured: false,
    waitlist: false,
    features: [
      { text: "Full course — English + Kannada" },
      { text: "All tools included" },
      { text: "WhatsApp community access for 1 year" },
      { text: "24-hour email doubt support for 1 year" },
      { text: "Lifetime access + future updates" },
      { text: "All future programs free of cost", highlight: true },
    ],
  },
  {
    id: "regular",
    name: "Regular enrollment",
    badge: "Standard",
    badgeStyle: "standard",
    tagline: "Full price after the first 500 seats are taken.",
    basePriceRs: 4999,
    seatRange: "From seat 501 onwards",
    maxSeats: null,
    featured: false,
    waitlist: true,
    features: [
      { text: "Full course — English + Kannada" },
      { text: "All tools included" },
      { text: "WhatsApp community access for 1 year" },
      { text: "24-hour email doubt support for 1 year" },
      { text: "Lifetime access + future updates" },
      { text: "3 live doubt sessions (6 months) + extra slots at ₹999 + GST", highlight: true },
    ],
  },
];

export function getPlan(id: PlanId): Plan {
  return PLANS.find((p) => p.id === id)!;
}

/** Returns the effective ex-GST price for a user (test override if applicable) */
export function effectivePrice(plan: Plan, isTest: boolean): number {
  return isTest && plan.testPriceRs !== undefined ? plan.testPriceRs : plan.basePriceRs;
}

/** Total amount in paise. No GST — not yet GST-registered. */
export function totalPaise(basePriceRs: number): number {
  return Math.round(basePriceRs) * 100;
}
