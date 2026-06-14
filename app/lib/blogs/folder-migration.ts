/**
 * Shared one-shot logic to render the 9 file-based blog components into
 * sanitized HTML for INSERT into the blogs table.
 *
 * Two entry points consume this:
 *   - scripts/migrate-blogs-to-db.ts  — local CLI (requires DB reachable
 *                                        from the operator's machine).
 *   - app/api/admin/blogs/migrate-folders/route.ts — admin endpoint
 *                                        (runs inside Vercel, no network
 *                                        restrictions vs the DB).
 *
 * Use whichever your network allows. The route is preferable because Next
 * handles CSS / server-only imports natively under app-router runtime.
 */

import React from "react";
import { parse as parseHtml } from "node-html-parser";
import { db } from "@/app/lib/db";
import { sanitizeBlogHtml } from "@/app/lib/blogs/sanitize";

// react-dom/server is imported dynamically inside migrateOne() so that
// Next.js's static "no react-dom/server in route handlers" check passes.
// At runtime it loads fine from a Node-runtime route handler.
async function renderToStaticMarkup(el: React.ReactElement): Promise<string> {
  const mod = await import("react-dom/server");
  return mod.renderToStaticMarkup(el);
}

export type FolderMeta = {
  slug: string;
  kicker: string;
  title: string;
  deck: string;
  dateLabel: string;
  readTime: string;
};

export const FOLDER_POSTS: FolderMeta[] = [
  {
    slug: "india-finance-jun12-2026",
    kicker: "Markets · Macro · India",
    title: "Beneath the Friday Rally, Something Else Changed",
    deck: "A rate hold, a bond market quietly rewired, ₹2.67 lakh crore in YTD equity exits, IT hit by two forces at once, and a $6 crude swing on a single Washington sentence — followed by the IRGC formally closing the Strait of Hormuz. Friday's rally was real but borrowed.",
    dateLabel: "June 12, 2026",
    readTime: "15 min read",
  },
  {
    slug: "india-e20-deep-dive",
    kicker: "Energy · Policy · India",
    title: "The Fuel You Never Chose",
    deck: "On April 1, 2026, every petrol pump in India quietly switched to E20 — no label, no debate, no choice. A deep dive into what India's ethanol mandate actually means: the engineering damage, the food and water trade-offs, the launches, and the decade ahead.",
    dateLabel: "June 2026",
    readTime: "18 min read",
  },
  {
    slug: "india-finance-jun5-2026",
    kicker: "Markets · Macro · India",
    title: "The Week Everything Landed at Once",
    deck: "RBI held, FY26 GDP printed at 7.7%, BTA talks reached \"99% done\", and the government abolished FPI capital gains tax on G-Secs by ordinance — all on the same Friday. Seven dense days that left markets suspended between two competing narratives.",
    dateLabel: "June 5, 2026",
    readTime: "16 min read",
  },
  {
    slug: "rupee-descent",
    kicker: "Currency · Macroeconomics · India",
    title: "The Rupee's Long Descent",
    deck: "From ₹45 to ₹95 in two decades — and the slide accelerating. A deep investigation into why India's currency keeps losing ground, how it compares to the rest of the world, and why the official reassurances no longer fully hold.",
    dateLabel: "June 2026",
    readTime: "11 min read",
  },
  {
    slug: "india-finance-may29-2026",
    kicker: "Markets · Macro · India",
    title: "Hormuz, Rubio, and a Nifty That Gave It All Back",
    deck: "A week that looked like a breakout and ended as a retreat. The Iran ceasefire MoU pushed markets to weekly highs, only for Friday's selloff to erase every gain. Trade deal advanced, Coal India OFS launched, GDP release pushed to June 5.",
    dateLabel: "May 29, 2026",
    readTime: "14 min read",
  },
  {
    slug: "india-finance-may2026",
    kicker: "Markets · Macro · India",
    title: "Indian Markets: A Week That Went Nowhere, For Good Reason",
    deck: "The Nifty closed flat on the week but the story underneath — AI destroying Indian IT, crude above $100, a new Fed Chair, and Rubio's India visit — was anything but quiet. A full briefing on what happened and what comes next.",
    dateLabel: "May 22, 2026",
    readTime: "12 min read",
  },
  {
    slug: "startup-cashflow",
    kicker: "Startups · Finance · Operations",
    title: "Most Startups Don't Run Out of Ideas. They Run Out of Cash.",
    deck: "Cashflow is the single most important number in your business, and the one most founders understand last. What it is, why it kills companies, and how to manage it at every stage.",
    dateLabel: "May 5, 2026",
    readTime: "9 min read",
  },
  {
    slug: "dpiit-startup-recognition",
    kicker: "Startups · Policy · Tax",
    title: "Your Startup Could Be Saving Lakhs in Taxes. Most Founders Don't Know It.",
    deck: "DPIIT Startup Recognition is free, takes under a week, and unlocks benefits worth crores over the life of your company. Everything you need to know — updated for the February 2026 notification.",
    dateLabel: "April 28, 2026",
    readTime: "7 min read",
  },
  {
    slug: "rupee-managed-decline",
    kicker: "Currency · Macroeconomics · India",
    title: "The Rupee's Managed Decline. And Why India Should Be Worried",
    deck: "India is growing at 6.5% a year. Its stock market is among the largest in the world. And yet, its currency has lost nearly 9% of its value in twelve months. This paradox deserves an honest answer.",
    dateLabel: "April 21, 2026",
    readTime: "8 min read",
  },
];

export const PUBLISHED_AT_BY_SLUG: Record<string, string> = {
  "india-finance-jun12-2026": "2026-06-12T08:00:00Z",
  "india-e20-deep-dive":      "2026-06-09T08:00:00Z",
  "india-finance-jun5-2026":  "2026-06-05T08:00:00Z",
  "rupee-descent":            "2026-06-01T08:00:00Z",
  "india-finance-may29-2026": "2026-05-29T08:00:00Z",
  "india-finance-may2026":    "2026-05-22T08:00:00Z",
  "startup-cashflow":         "2026-05-05T08:00:00Z",
  "dpiit-startup-recognition":"2026-04-28T08:00:00Z",
  "rupee-managed-decline":    "2026-04-21T08:00:00Z",
};

export type ExtractedMeta = {
  titleHtml: string;
  heroSub: string;
  heroBadge: string | null;
  topbarBrand: string;
  topbarTag: string;
};

export function extractMetaFromPreview(html: string, fallbackTitle: string): ExtractedMeta {
  const root = parseHtml(html, { lowerCaseTagName: false, comment: false });

  const h1 = root.querySelector("h1");
  const titleHtml = h1 ? h1.innerHTML.trim() : fallbackTitle;

  const brand = root.querySelector(".topbar .brand")?.text?.trim();
  const tag = root.querySelector(".topbar .tag")?.text?.trim();
  const heroBadgeEl = root.querySelector(".hero-badge");
  const heroSubEl = root.querySelector(".hero-sub");

  return {
    titleHtml,
    heroSub: heroSubEl?.text?.trim() ?? "",
    heroBadge: heroBadgeEl?.text?.trim() ?? null,
    topbarBrand: brand && brand.length > 0 ? brand : "Markets & Macro",
    topbarTag: tag && tag.length > 0 ? tag : "",
  };
}

export type MigrateOneResult = {
  slug: string;
  ok: boolean;
  detail: string;
};

/**
 * Loader: caller supplies a function that resolves a slug to its
 * {Preview, Gated} component pair. CLI uses dynamic import; the API
 * route uses a static switch statement so webpack can bundle each
 * chunk at build time.
 */
export type FolderLoader = (slug: string) => Promise<{
  Preview: React.ComponentType;
  Gated: React.ComponentType;
}>;

export async function migrateOne(
  meta: FolderMeta,
  authorId: string,
  apply: boolean,
  load: FolderLoader
): Promise<MigrateOneResult> {
  let components: { Preview: React.ComponentType; Gated: React.ComponentType };
  try {
    components = await load(meta.slug);
  } catch (err) {
    return { slug: meta.slug, ok: false, detail: `import failed: ${(err as Error).message}` };
  }

  let previewRaw: string;
  let gatedRaw: string;
  try {
    previewRaw = await renderToStaticMarkup(React.createElement(components.Preview));
    gatedRaw = await renderToStaticMarkup(React.createElement(components.Gated));
  } catch (err) {
    return { slug: meta.slug, ok: false, detail: `render failed: ${(err as Error).message}` };
  }

  const sanPreview = sanitizeBlogHtml(previewRaw);
  const sanGated = sanitizeBlogHtml(gatedRaw);
  const extracted = extractMetaFromPreview(sanPreview.html, meta.title);

  const summary = [
    `preview ${sanPreview.html.length}B`,
    `gated ${sanGated.html.length}B`,
    `topbarTag="${extracted.topbarTag.slice(0, 40)}${extracted.topbarTag.length > 40 ? "…" : ""}"`,
    `heroBadge=${extracted.heroBadge ? "yes" : "no"}`,
    `heroSub ${extracted.heroSub.length}B`,
    sanPreview.droppedClasses.length || sanGated.droppedClasses.length
      ? `dropped=${[...sanPreview.droppedClasses, ...sanGated.droppedClasses].slice(0, 5).join(",")}`
      : "no-drops",
  ].join(" | ");

  if (!apply) {
    return { slug: meta.slug, ok: true, detail: `DRY-RUN ${summary}` };
  }

  try {
    await db.upsertBlog({
      slug: meta.slug,
      kicker: meta.kicker,
      title: meta.title,
      titleHtml: extracted.titleHtml,
      deck: meta.deck,
      heroSub: extracted.heroSub,
      heroBadge: extracted.heroBadge,
      topbarBrand: extracted.topbarBrand,
      topbarTag: extracted.topbarTag,
      dateLabel: meta.dateLabel,
      readTime: meta.readTime,
      previewHtml: sanPreview.html,
      gatedHtml: sanGated.html,
      authorId,
    });
    await db.publishBlog(meta.slug);

    const publishedAtIso = PUBLISHED_AT_BY_SLUG[meta.slug];
    if (publishedAtIso) {
      const { db: pg } = await import("@/app/lib/db/connection");
      const { sql } = await import("drizzle-orm");
      await pg.execute(sql`UPDATE blogs SET published_at = ${new Date(publishedAtIso)} WHERE slug = ${meta.slug}`);
    }

    return { slug: meta.slug, ok: true, detail: `UPSERTED + PUBLISHED ${summary}` };
  } catch (err) {
    return { slug: meta.slug, ok: false, detail: `db failed: ${(err as Error).message}` };
  }
}
