/**
 * GET  /api/admin/blogs  — list all blogs (drafts + published)
 * POST /api/admin/blogs  — create or upsert a blog (saves as draft)
 *
 * Auth: admin cookie (uid + admin=1 + email in ADMIN_EMAILS).
 * POST rate-limited per user.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { sanitizeBlogHtml } from "@/app/lib/blogs/sanitize";
import { sanitizeBlogCss, CssSanitizeError } from "@/app/lib/blogs/sanitize-css";
import { splitAt, SplitError } from "@/app/lib/blogs/split";
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

  // Sanitize + split in-flight. Both halves stored pre-sanitized in DB.
  const sanitized = sanitizeBlogHtml(input.rawHtml);
  let split;
  try {
    split = splitAt(sanitized.html, input.afterSection);
  } catch (err) {
    if (err instanceof SplitError) {
      return NextResponse.json({ error: "Split failed", message: err.message }, { status: 400 });
    }
    throw err;
  }

  const titleHtmlSanitized = sanitizeBlogHtml(input.titleHtml).html;

  let cssResult;
  try {
    cssResult = sanitizeBlogCss(input.customCss);
  } catch (err) {
    if (err instanceof CssSanitizeError) {
      return NextResponse.json({ error: "CSS sanitize failed", message: err.message }, { status: 400 });
    }
    throw err;
  }

  const blog = await db.upsertBlog({
    slug: input.slug,
    kicker: input.kicker,
    title: input.title,
    titleHtml: titleHtmlSanitized,
    deck: input.deck,
    heroSub: input.heroSub,
    heroBadge: input.heroBadge ?? null,
    topbarBrand: input.topbarBrand,
    topbarTag: input.topbarTag,
    dateLabel: input.dateLabel,
    readTime: input.readTime,
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
