/**
 * POST /api/admin/blogs/preview
 *
 * Dry-run sanitizer + section detector + metadata extractor. The admin
 * pastes raw HTML — possibly a full HTML page with <head><style> —
 * and gets back:
 *   - sanitized body HTML (with <style> stripped)
 *   - detected section markers (for the split-point dropdown)
 *   - extracted metadata suggestions (title, deck, dateLabel, readTime,
 *     suggestedSlug, etc.) the editor uses to auto-fill empty fields
 *   - sanitized custom CSS (from <style> blocks)
 *   - if afterSection provided, the preview/gated split
 *
 * No DB writes.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sanitizeBlogHtml } from "@/app/lib/blogs/sanitize";
import { sanitizeBlogCss } from "@/app/lib/blogs/sanitize-css";
import { detectSections, splitAt, SplitError } from "@/app/lib/blogs/split";
import { extractBlogMetadata } from "@/app/lib/blogs/extract";
import { PreviewInputSchema } from "@/app/lib/blogs/validators";
import { requireAdmin, requireRateLimit, parseJson } from "../_helpers";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  const rl = requireRateLimit(auth.user.id);
  if (!rl.ok) return rl.response;

  const parsed = await parseJson(req, PreviewInputSchema);
  if (!parsed.ok) return parsed.response;
  const { html, afterSection } = parsed.data;

  // Extract first — pulls <style> out of <head>, finds <body>/.page/.wrapper,
  // collects metadata suggestions from h1/.hero-sub/.topbar/etc.
  const extracted = extractBlogMetadata(html);

  // Sanitize the cleaned (style-stripped, body-only) HTML.
  const sanitized = sanitizeBlogHtml(extracted.cleanedHtml, {
    extraAllowedClasses: extracted.cssClassTokens,
  });
  const sections = detectSections(sanitized.html);

  // Sanitize the CSS separately (block @import, expression, etc.).
  const cssResult = sanitizeBlogCss(extracted.customCss || null);

  let split: { preview: string; gated: string } | null = null;
  let splitError: string | null = null;
  if (afterSection !== undefined) {
    try {
      const r = splitAt(sanitized.html, afterSection);
      split = { preview: r.preview, gated: r.gated };
    } catch (err) {
      if (err instanceof SplitError) {
        splitError = err.message;
      } else {
        throw err;
      }
    }
  }

  return NextResponse.json({
    sanitized: sanitized.html,
    sections,
    droppedClasses: sanitized.droppedClasses,
    inlineStylesStripped: sanitized.inlineStylesStripped,
    split,
    splitError,
    // Metadata suggestions — editor uses these to auto-fill empty fields.
    extracted: {
      title: extracted.title,
      titleHtml: extracted.titleHtml,
      deck: extracted.deck,
      heroSub: extracted.heroSub,
      heroBadge: extracted.heroBadge,
      topbarBrand: extracted.topbarBrand,
      topbarTag: extracted.topbarTag,
      kicker: extracted.kicker,
      dateLabel: extracted.dateLabel,
      readTime: extracted.readTime,
      suggestedSlug: extracted.suggestedSlug,
    },
    customCss: cssResult.css,
    cssRemoved: cssResult.removed,
  });
}
