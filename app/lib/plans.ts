export const GST_RATE = 0.18;

export type PlanId = "founding" | "early_access" | "regular";

export type Plan = {
  id: PlanId;
  name: string;
  badge: string;
  badgeStyle: "founding" | "popular" | "standard";
  tagline: string;
  basePriceRs: number;       // ex-GST in ₹
  originalPriceRs?: number;  // strikethrough
  seatRange: string;
  maxSeats: number | null;   // null = unlimited
  featured: boolean;
  waitlist: boolean;
  features: { text: string; highlight?: boolean }[];
};

export const PLANS: Plan[] = [
  {
    id: "founding",
    name: "Founding member",
    badge: "Founding batch — first 100",
    badgeStyle: "founding",
    tagline: "Introductory price. Reserved for our first 100 believers.",
    basePriceRs: 999,
    originalPriceRs: 4999,
    seatRange: "Seats 1 – 100",
    maxSeats: 100,
    featured: false,
    waitlist: false,
    features: [
      { text: "Full course — English + Kannada" },
      { text: "All tools included" },
      { text: "WhatsApp community access for 1 year" },
      { text: "72-hour email doubt support for 1 year" },
      { text: "Lifetime access + future updates" },
      { text: "All future programs free of cost", highlight: true },
    ],
  },
  {
    id: "early_access",
    name: "Early access",
    badge: "Most popular",
    badgeStyle: "popular",
    tagline: "For the next 400 students. Price rises to ₹4,999 after 500 seats.",
    basePriceRs: 2999,
    originalPriceRs: 4999,
    seatRange: "Seats 101 – 500",
    maxSeats: 500,
    featured: true,
    waitlist: false,
    features: [
      { text: "Full course — English + Kannada" },
      { text: "All tools included" },
      { text: "WhatsApp community access for 1 year" },
      { text: "72-hour email doubt support for 1 year" },
      { text: "Lifetime access + future updates" },
      { text: "2 live doubt sessions (6 months) + extra slots at ₹999 + GST", highlight: true },
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
      { text: "72-hour email doubt support for 1 year" },
      { text: "Lifetime access + future updates" },
      { text: "3 live doubt sessions (6 months) + extra slots at ₹999 + GST", highlight: true },
    ],
  },
];

export function getPlan(id: PlanId): Plan {
  return PLANS.find((p) => p.id === id)!;
}

/** Total amount in paise (base + 18% GST), rounded to nearest rupee */
export function totalPaise(basePriceRs: number): number {
  return Math.round(basePriceRs * (1 + GST_RATE)) * 100;
}

export function gstPaise(basePriceRs: number): number {
  return Math.round(basePriceRs * GST_RATE) * 100;
}
