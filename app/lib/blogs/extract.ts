/**
 * Parse a raw HTML paste into structured blog metadata.
 *
 * The partner pastes either:
 *   - a full HTML page (<html><head><style>...</style></head><body>...</body></html>)
 *   - or just the body content (a series of <div>, <h1>, <p>, etc.)
 *
 * This function returns everything the admin form needs auto-filled:
 *   - title, titleHtml, deck, heroSub, heroBadge, topbarBrand, topbarTag, kicker
 *   - dateLabel (today, en-IN)
 *   - readTime ("N min read") from body word count
 *   - suggestedSlug (slugified title)
 *   - customCss (concatenated <style> blocks, pre-sanitize)
 *   - cleanedHtml — input with <html>/<head>/<body>/<style> wrappers stripped,
 *     ready to feed to splitAt + sanitizeBlogHtml
 *
 * Server-side: routes call this BEFORE sanitization to populate defaults
 * and isolate CSS. Client-side: editor calls the preview endpoint which
 * returns these fields and uses them to populate empty form inputs.
 */

import { parse } from "node-html-parser";

export type ExtractedBlogMeta = {
  title: string;
  titleHtml: string;
  deck: string;
  heroSub: string;
  heroBadge: string;
  topbarBrand: string;
  topbarTag: string;
  kicker: string;
  dateLabel: string;
  readTime: string;
  suggestedSlug: string;
  customCss: string;        // raw, not yet sanitized
  cleanedHtml: string;      // body content with <style> stripped, ready for sanitize
  /**
   * Class tokens referenced in customCss selectors. The sanitizer would
   * otherwise strip these from cleanedHtml because they aren't in the
   * design-system allowlist. Callers should pass them as
   * extraAllowedClasses to sanitizeBlogHtml so the article's bespoke
   * elements keep their class hooks and the customCss rules apply.
   */
  cssClassTokens: string[];
};

const DEFAULT_TOPBAR_BRAND = "Markets & Macro";
const WORDS_PER_MINUTE = 220;
const DECK_MAX_CHARS = 280;

export function extractBlogMetadata(rawHtml: string): ExtractedBlogMeta {
  const root = parse(rawHtml, { lowerCaseTagName: false, comment: false });

  // Collect <style> blocks; stash text for customCss.
  const styleEls = root.querySelectorAll("style");
  const customCss = styleEls.map((s) => s.text).filter(Boolean).join("\n\n").trim();
  // Remove <style> tags from the tree so they don't leak into body.
  styleEls.forEach((s) => s.remove());

  // Scrape class tokens from CSS selectors so the sanitizer keeps them on
  // article elements via extraAllowedClasses.
  const cssClassTokens: string[] = [];
  if (customCss) {
    const seen = new Set<string>();
    const re = /\.([a-zA-Z_][-_a-zA-Z0-9]*)/g;
    let m;
    while ((m = re.exec(customCss)) !== null) {
      if (!seen.has(m[1])) {
        seen.add(m[1]);
        cssClassTokens.push(m[1]);
      }
    }
  }

  // Body extraction.
  // If the paste is a full document, find <body>. Within that, prefer .page or
  // .wrapper if present (partners' templates use these); else use body content.
  // If the paste is body-only, use the root.
  const body =
    root.querySelector("body") ??
    root;
  const inner =
    body.querySelector(".page") ??
    body.querySelector(".wrapper") ??
    body.querySelector("article") ??
    body;
  const cleanedHtml = inner.innerHTML.trim();

  // Walk inner for metadata extraction. Use innerHTML stripped node tree for
  // text queries.
  const innerRoot = parse(cleanedHtml, { lowerCaseTagName: false, comment: false });

  const h1 = innerRoot.querySelector("h1");
  const title = h1 ? collapseWs(h1.text) : (root.querySelector("title")?.text?.trim() ?? "");
  const titleHtml = h1?.innerHTML?.trim() ?? title;

  const heroSub = collapseWs(innerRoot.querySelector(".hero-sub")?.text ?? "");
  const heroBadge = collapseWs(innerRoot.querySelector(".hero-badge")?.text ?? "");
  const topbarBrand = collapseWs(innerRoot.querySelector(".topbar .brand")?.text ?? "");
  const topbarTag = collapseWs(innerRoot.querySelector(".topbar .tag")?.text ?? "");

  // Kicker from leading segment of topbar tag.
  const kicker = topbarTag
    ? topbarTag.split(/[|·]/)[0].trim()
    : "";

  // Deck: prefer hero-sub clipped, else first paragraph >= 80 chars.
  let deck = "";
  if (heroSub.length > 0) {
    deck = heroSub.slice(0, DECK_MAX_CHARS).trim();
  } else {
    const firstParas = innerRoot.querySelectorAll("p");
    for (const p of firstParas) {
      const t = collapseWs(p.text);
      if (t.length >= 80) { deck = t.slice(0, DECK_MAX_CHARS).trim(); break; }
    }
  }

  // Read time from body text word count.
  const bodyText = collapseWs(innerRoot.text);
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;
  const readMinutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  const readTime = `${readMinutes} min read`;

  // Date label — today in en-IN long format.
  const dateLabel = formatDate(new Date());

  // Slug — slugify title.
  const suggestedSlug = slugify(title);

  return {
    title,
    titleHtml,
    deck,
    heroSub,
    heroBadge,
    topbarBrand: topbarBrand || DEFAULT_TOPBAR_BRAND,
    topbarTag,
    kicker,
    dateLabel,
    readTime,
    suggestedSlug,
    customCss,
    cleanedHtml,
    cssClassTokens,
  };
}

function collapseWs(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function formatDate(d: Date): string {
  // e.g. "14 June 2026" → matches the partner's existing dateLabel style.
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Exposed for testing
export const _internal = { collapseWs, slugify, formatDate };
