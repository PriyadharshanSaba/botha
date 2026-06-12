import "./blogs.css";
import "../landing.css";
import { db } from "@/app/lib/db";
import BlogsList, { type BlogCard } from "./BlogsList";

export const revalidate = 300;     // ISR: 5-min stale-while-revalidate

/**
 * Folder-based blog posts that still live as static routes under app/blogs/*.
 * Step 7 migrates each into the blogs table and removes the folder; once
 * the table contains a row with the same slug, that DB row wins (see
 * dedup-by-slug below). Until then this list keeps them visible on the
 * /blogs index page.
 *
 * Order here = chronological (newest first), used as a tiebreaker when
 * parsedDate is ambiguous (e.g. month-only "June 2026").
 */
const FOLDER_POSTS: (BlogCard & { parsedDate: string })[] = [
  {
    slug: "india-finance-jun12-2026",
    kicker: "Markets · Macro · India",
    title: "Beneath the Friday Rally, Something Else Changed",
    deck: "A rate hold, a bond market quietly rewired, ₹2.67 lakh crore in YTD equity exits, IT hit by two forces at once, and a $6 crude swing on a single Washington sentence — followed by the IRGC formally closing the Strait of Hormuz. Friday's rally was real but borrowed.",
    dateLabel: "June 12, 2026",
    parsedDate: "2026-06-12",
    readTime: "15 min read",
  },
  {
    slug: "india-e20-deep-dive",
    kicker: "Energy · Policy · India",
    title: "The Fuel You Never Chose",
    deck: "On April 1, 2026, every petrol pump in India quietly switched to E20 — no label, no debate, no choice. A deep dive into what India's ethanol mandate actually means: the engineering damage, the food and water trade-offs, the launches, and the decade ahead.",
    dateLabel: "June 2026",
    parsedDate: "2026-06-09",
    readTime: "18 min read",
  },
  {
    slug: "india-finance-jun5-2026",
    kicker: "Markets · Macro · India",
    title: "The Week Everything Landed at Once",
    deck: "RBI held, FY26 GDP printed at 7.7%, BTA talks reached \"99% done\", and the government abolished FPI capital gains tax on G-Secs by ordinance — all on the same Friday. Seven dense days that left markets suspended between two competing narratives.",
    dateLabel: "June 5, 2026",
    parsedDate: "2026-06-05",
    readTime: "16 min read",
  },
  {
    slug: "rupee-descent",
    kicker: "Currency · Macroeconomics · India",
    title: "The Rupee's Long Descent",
    deck: "From ₹45 to ₹95 in two decades — and the slide accelerating. A deep investigation into why India's currency keeps losing ground, how it compares to the rest of the world, and why the official reassurances no longer fully hold.",
    dateLabel: "June 2026",
    parsedDate: "2026-06-01",
    readTime: "11 min read",
  },
  {
    slug: "india-finance-may29-2026",
    kicker: "Markets · Macro · India",
    title: "Hormuz, Rubio, and a Nifty That Gave It All Back",
    deck: "A week that looked like a breakout and ended as a retreat. The Iran ceasefire MoU pushed markets to weekly highs, only for Friday's selloff to erase every gain. Trade deal advanced, Coal India OFS launched, GDP release pushed to June 5.",
    dateLabel: "May 29, 2026",
    parsedDate: "2026-05-29",
    readTime: "14 min read",
  },
  {
    slug: "india-finance-may2026",
    kicker: "Markets · Macro · India",
    title: "Indian Markets: A Week That Went Nowhere, For Good Reason",
    deck: "The Nifty closed flat on the week but the story underneath — AI destroying Indian IT, crude above $100, a new Fed Chair, and Rubio's India visit — was anything but quiet. A full briefing on what happened and what comes next.",
    dateLabel: "May 22, 2026",
    parsedDate: "2026-05-22",
    readTime: "12 min read",
  },
  {
    slug: "startup-cashflow",
    kicker: "Startups · Finance · Operations",
    title: "Most Startups Don't Run Out of Ideas. They Run Out of Cash.",
    deck: "Cashflow is the single most important number in your business, and the one most founders understand last. What it is, why it kills companies, and how to manage it at every stage.",
    dateLabel: "May 5, 2026",
    parsedDate: "2026-05-05",
    readTime: "9 min read",
  },
  {
    slug: "dpiit-startup-recognition",
    kicker: "Startups · Policy · Tax",
    title: "Your Startup Could Be Saving Lakhs in Taxes. Most Founders Don't Know It.",
    deck: "DPIIT Startup Recognition is free, takes under a week, and unlocks benefits worth crores over the life of your company. Everything you need to know — updated for the February 2026 notification.",
    dateLabel: "April 28, 2026",
    parsedDate: "2026-04-28",
    readTime: "7 min read",
  },
  {
    slug: "rupee-managed-decline",
    kicker: "Currency · Macroeconomics · India",
    title: "The Rupee's Managed Decline. And Why India Should Be Worried",
    deck: "India is growing at 6.5% a year. Its stock market is among the largest in the world. And yet, its currency has lost nearly 9% of its value in twelve months. This paradox deserves an honest answer.",
    dateLabel: "April 21, 2026",
    parsedDate: "2026-04-21",
    readTime: "8 min read",
  },
];

export default async function BlogsPage() {
  const dbPosts = await db.listPublishedBlogs();

  // Merge DB posts + folder posts. DB wins on slug collision (post-migration
  // those rows are authoritative).
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));

  type Sortable = BlogCard & { sortKey: string };

  const dbCards: Sortable[] = dbPosts.map((p) => ({
    slug: p.slug,
    kicker: p.kicker,
    title: p.title,
    deck: p.deck,
    dateLabel: p.dateLabel,
    readTime: p.readTime,
    sortKey: p.publishedAt ? p.publishedAt.toISOString() : "0000-00-00",
  }));

  const folderCards: Sortable[] = FOLDER_POSTS
    .filter((p) => !dbSlugs.has(p.slug))
    .map((p) => ({
      slug: p.slug,
      kicker: p.kicker,
      title: p.title,
      deck: p.deck,
      dateLabel: p.dateLabel,
      readTime: p.readTime,
      sortKey: p.parsedDate,
    }));

  const all: BlogCard[] = [...dbCards, ...folderCards]
    .sort((a, b) => (a.sortKey < b.sortKey ? 1 : a.sortKey > b.sortKey ? -1 : 0))
    .map(({ sortKey: _s, ...card }) => { void _s; return card; });

  return <BlogsList posts={all} />;
}
