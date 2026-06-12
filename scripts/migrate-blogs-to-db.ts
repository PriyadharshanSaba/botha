/**
 * One-shot migration: render the 9 file-based blog components under
 * app/blogs/<slug>/ into static HTML, sanitize the output, and INSERT
 * each as a published row in the `blogs` table.
 *
 * Run via:
 *   npm run migrate-blogs                  # dry-run (no DB writes)
 *   npm run migrate-blogs -- --apply       # actually upsert + publish
 *   npm run migrate-blogs -- --apply --slug=rupee-descent   # one only
 *
 * Required env (from .env.local):
 *   DATABASE_URL                — Postgres connection string
 *   MIGRATION_AUTHOR_EMAIL      — email of the admin user to record as
 *                                  blogs.author_id; must already exist
 *                                  in users + be verified
 *
 * Known limitation: rupee-descent's CurrencyChart is a "use client"
 * component that draws via Chart.js in useEffect — it renders to an
 * empty <canvas> tag in renderToStaticMarkup. The migrated HTML will
 * have the chart frame but not the rendered chart. Acceptable for the
 * migration window; revisit if/when partner needs DB-side charts.
 */

import { config } from "dotenv";
config({ path: ".env.local" });

// Stub .css imports — folder blog components do `import "*.css";` at top
// of file for runtime styling. This script needs to render them as plain
// React components; CSS is irrelevant in a Node CLI context. Also stub
// the `server-only` package, which gated.tsx imports — its main entry
// throws when not loaded under Next's react-server export condition.
import { createRequire } from "node:module";
const _require = createRequire(import.meta.url);
type ModuleAPI = {
  _extensions: Record<string, (m: { exports: unknown }, fn: string) => void>;
};
const Module = _require("node:module") as ModuleAPI;
Module._extensions[".css"] = (m) => { m.exports = {}; };

// Pre-populate require.cache for "server-only" with a no-op export so
// downstream `require("server-only")` returns {} without evaluating the
// package's throwing main.
const serverOnlyPath = _require.resolve("server-only");
(_require.cache as Record<string, { id: string; filename: string; loaded: boolean; exports: unknown; paths: string[] }>)[serverOnlyPath] = {
  id: serverOnlyPath,
  filename: serverOnlyPath,
  loaded: true,
  exports: {},
  paths: [],
};

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { parse as parseHtml } from "node-html-parser";
import { db } from "@/app/lib/db";
import { sanitizeBlogHtml } from "@/app/lib/blogs/sanitize";

type FolderMeta = {
  slug: string;
  kicker: string;
  title: string;
  deck: string;
  dateLabel: string;
  readTime: string;
};

const FOLDER_POSTS: FolderMeta[] = [
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

const PUBLISHED_AT_BY_SLUG: Record<string, string> = {
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

type ExtractedMeta = {
  titleHtml: string;
  heroSub: string;
  heroBadge: string | null;
  topbarBrand: string;
  topbarTag: string;
};

function extractMetaFromPreview(html: string, fallbackTitle: string): ExtractedMeta {
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

type CliArgs = {
  apply: boolean;
  slug: string | null;
};

function parseArgs(): CliArgs {
  let apply = false;
  let slug: string | null = null;
  for (const a of process.argv.slice(2)) {
    if (a === "--apply") apply = true;
    const m = a.match(/^--slug=(.+)$/);
    if (m) slug = m[1];
  }
  return { apply, slug };
}

async function migrateOne(meta: FolderMeta, authorId: string, apply: boolean): Promise<{
  slug: string;
  ok: boolean;
  detail: string;
}> {
  let PreviewMod: { Preview: React.ComponentType };
  let GatedMod: { Gated: React.ComponentType };
  try {
    PreviewMod = await import(`@/app/blogs/${meta.slug}/preview`);
    GatedMod = await import(`@/app/blogs/${meta.slug}/gated`);
  } catch (err) {
    return { slug: meta.slug, ok: false, detail: `import failed: ${(err as Error).message}` };
  }

  let previewRaw: string;
  let gatedRaw: string;
  try {
    previewRaw = renderToStaticMarkup(React.createElement(PreviewMod.Preview));
    gatedRaw = renderToStaticMarkup(React.createElement(GatedMod.Gated));
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
      // Backdate published_at to match the original folder post's date.
      // Direct SQL — listAllBlogs orders by it on the admin listing.
      const { db: pg } = await import("@/app/lib/db/connection");
      const { sql } = await import("drizzle-orm");
      await pg.execute(sql`UPDATE blogs SET published_at = ${new Date(publishedAtIso)} WHERE slug = ${meta.slug}`);
    }

    return { slug: meta.slug, ok: true, detail: `UPSERTED + PUBLISHED ${summary}` };
  } catch (err) {
    return { slug: meta.slug, ok: false, detail: `db failed: ${(err as Error).message}` };
  }
}

async function main() {
  const { apply, slug: only } = parseArgs();

  const authorEmail = process.env.MIGRATION_AUTHOR_EMAIL;
  let authorId = "dry-run-placeholder";

  if (apply) {
    if (!authorEmail) {
      console.error("MIGRATION_AUTHOR_EMAIL not set in .env.local — required for --apply");
      process.exit(1);
    }
    const author = await db.getUserByEmail(authorEmail);
    if (!author) {
      console.error(`Author user not found for email=${authorEmail}`);
      process.exit(1);
    }
    if (!author.verified) {
      console.error(`Author ${authorEmail} is not verified; cannot use as author_id`);
      process.exit(1);
    }
    authorId = author.id;
    console.log(`Author: ${author.email} (id=${author.id})`);
  } else {
    console.log("Author: (dry-run, skipped lookup)");
  }
  console.log(`Mode: ${apply ? "APPLY" : "DRY-RUN"}`);
  console.log(`Slugs: ${only ?? "all 9"}\n`);

  const targets = only ? FOLDER_POSTS.filter((p) => p.slug === only) : FOLDER_POSTS;
  if (targets.length === 0) {
    console.error(`No folder post matches --slug=${only}`);
    process.exit(1);
  }

  const results: Awaited<ReturnType<typeof migrateOne>>[] = [];
  for (const meta of targets) {
    const r = await migrateOne(meta, authorId, apply);
    results.push(r);
    console.log(`${r.ok ? "✓" : "✗"} ${r.slug.padEnd(30)} ${r.detail}`);
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} succeeded`);
  if (failed.length > 0) {
    console.error("Failures:");
    for (const f of failed) console.error(`  ${f.slug}: ${f.detail}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
