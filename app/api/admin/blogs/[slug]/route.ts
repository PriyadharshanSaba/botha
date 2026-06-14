/**
 * GET    /api/admin/blogs/[slug] — fetch one (drafts visible)
 * PUT    /api/admin/blogs/[slug] — upsert (re-sanitize + re-split)
 * DELETE /api/admin/blogs/[slug] — hard delete
 *
 * Slug in the URL is the authority. Mismatched slug in body → 400.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { sanitizeBlogHtml } from "@/app/lib/blogs/sanitize";
import { sanitizeBlogCss, CssSanitizeError } from "@/app/lib/blogs/sanitize-css";
import { splitAt, SplitError } from "@/app/lib/blogs/split";
import { extractBlogMetadata } from "@/app/lib/blogs/extract";
import { BlogUpsertSchema, SlugSchema } from "@/app/lib/blogs/validators";
import { requireAdmin, requireRateLimit, parseJson } from "../_helpers";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ slug: string }> };

async function resolveSlug(ctx: Ctx): Promise<{ ok: true; slug: string } | { ok: false; response: NextResponse }> {
  const { slug } = await ctx.params;
  const r = SlugSchema.safeParse(slug);
  if (!r.success) {
    return { ok: false, response: NextResponse.json({ error: "Invalid slug" }, { status: 400 }) };
  }
  return { ok: true, slug: r.data };
}

export async function GET(req: NextRequest, ctx: Ctx) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  const s = await resolveSlug(ctx);
  if (!s.ok) return s.response;

  const blog = await db.getBlogBySlug(s.slug);
  if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ blog });
}

export async function PUT(req: NextRequest, ctx: Ctx) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  const rl = requireRateLimit(auth.user.id);
  if (!rl.ok) return rl.response;

  const s = await resolveSlug(ctx);
  if (!s.ok) return s.response;

  const parsed = await parseJson(req, BlogUpsertSchema);
  if (!parsed.ok) return parsed.response;
  const input = parsed.data;

  if (input.slug !== s.slug) {
    return NextResponse.json({ error: "Slug in body must match URL" }, { status: 400 });
  }

  const extracted = extractBlogMetadata(input.rawHtml);

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

  const sanitized = sanitizeBlogHtml(extracted.cleanedHtml);
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

export async function DELETE(req: NextRequest, ctx: Ctx) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  const rl = requireRateLimit(auth.user.id);
  if (!rl.ok) return rl.response;

  const s = await resolveSlug(ctx);
  if (!s.ok) return s.response;

  await db.deleteBlog(s.slug);
  return NextResponse.json({ ok: true });
}
