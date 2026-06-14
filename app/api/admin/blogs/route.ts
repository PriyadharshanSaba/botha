/**
 * GET  /api/admin/blogs  — list all blogs (drafts + published)
 * POST /api/admin/blogs  — create or upsert a blog (saves as draft)
 *
 * Server-side flow on POST:
 *   1. extractBlogMetadata(rawHtml) — pulls <style> blocks out + collects
 *      title/deck/heroSub/etc. as defaults from the HTML structure.
 *   2. Each metadata field on the request is OR'd with the extracted value
 *      so the form can leave anything blank and the server fills it in.
 *   3. cleanedHtml (style-stripped body) goes through sanitizeBlogHtml +
 *      splitAt(afterSection) → previewHtml + gatedHtml.
 *   4. customCss is sanitized via sanitizeBlogCss and stored.
 *
 * Auth: admin cookie. POST rate-limited per user.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { sanitizeBlogHtml } from "@/app/lib/blogs/sanitize";
import { sanitizeBlogCss, CssSanitizeError } from "@/app/lib/blogs/sanitize-css";
import { splitAt, SplitError } from "@/app/lib/blogs/split";
import { extractBlogMetadata } from "@/app/lib/blogs/extract";
import { BlogUpsertSchema } from "@/app/lib/blogs/validators";
import { requireAdmin, requireRateLimit, parseJson } from "./_helpers";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  const blogs = await db.listAllBlogs();
  return NextResponse.json({ blogs });
}

export async function POST(req: NextRequest) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  const rl = requireRateLimit(auth.user.id);
  if (!rl.ok) return rl.response;

  const parsed = await parseJson(req, BlogUpsertSchema);
  if (!parsed.ok) return parsed.response;
  const input = parsed.data;

  const extracted = extractBlogMetadata(input.rawHtml);

  // Pick form value if non-empty, else extracted default.
  const pick = (formVal: string | undefined, fallback: string): string =>
    formVal && formVal.trim().length > 0 ? formVal : fallback;

  const merged = {
    title:       pick(input.title,       extracted.title),
    titleHtml:   pick(input.titleHtml,   extracted.titleHtml || extracted.title),
    kicker:      pick(input.kicker,      extracted.kicker || "Markets · Macro · India"),
    deck:        pick(input.deck,        extracted.deck),
    heroSub:     pick(input.heroSub,     extracted.heroSub),
    heroBadge:   input.heroBadge !== undefined ? input.heroBadge : (extracted.heroBadge || null),
    topbarBrand: pick(input.topbarBrand, extracted.topbarBrand),
    topbarTag:   pick(input.topbarTag,   extracted.topbarTag),
    dateLabel:   pick(input.dateLabel,   extracted.dateLabel),
    readTime:    pick(input.readTime,    extracted.readTime),
  };

  if (!merged.title) {
    return NextResponse.json({ error: "Could not derive a title — paste HTML must contain an <h1>" }, { status: 400 });
  }

  const sanitized = sanitizeBlogHtml(extracted.cleanedHtml, {
    extraAllowedClasses: extracted.cssClassTokens,
  });
  let split;
  try {
    split = splitAt(sanitized.html, input.afterSection);
  } catch (err) {
    if (err instanceof SplitError) {
      return NextResponse.json({ error: "Split failed", message: err.message }, { status: 400 });
    }
    throw err;
  }

  let cssResult;
  try {
    cssResult = sanitizeBlogCss(extracted.customCss || null);
  } catch (err) {
    if (err instanceof CssSanitizeError) {
      return NextResponse.json({ error: "CSS sanitize failed", message: err.message }, { status: 400 });
    }
    throw err;
  }

  const titleHtmlSanitized = sanitizeBlogHtml(merged.titleHtml).html;

  const blog = await db.upsertBlog({
    slug: input.slug,
    kicker: merged.kicker,
    title: merged.title,
    titleHtml: titleHtmlSanitized,
    deck: merged.deck,
    heroSub: merged.heroSub,
    heroBadge: merged.heroBadge,
    topbarBrand: merged.topbarBrand,
    topbarTag: merged.topbarTag,
    dateLabel: merged.dateLabel,
    readTime: merged.readTime,
    previewHtml: split.preview,
    gatedHtml: split.gated,
    customCss: cssResult.css || null,
    statRow: input.statRow ?? null,
    authorId: auth.user.id,
  });

  return NextResponse.json({
    blog,
    sanitizer: {
      droppedClasses: sanitized.droppedClasses,
      inlineStylesStripped: sanitized.inlineStylesStripped,
      cssRemoved: cssResult.removed,
    },
  });
}
