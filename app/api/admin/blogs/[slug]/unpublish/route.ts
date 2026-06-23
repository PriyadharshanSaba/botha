/**
 * POST /api/admin/blogs/[slug]/unpublish
 *
 * Flip a published blog back to draft. URL no longer resolves on the
 * public route. Content preserved; admin can re-publish anytime.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/app/lib/db";
import { SlugSchema } from "@/app/lib/blogs/validators";
import { requireAdmin, requireRateLimit } from "../../_helpers";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const auth = await requireAdmin(req);
  if (!auth.ok) return auth.response;

  const rl = requireRateLimit(auth.user.id);
  if (!rl.ok) return rl.response;

  const { slug } = await ctx.params;
  const r = SlugSchema.safeParse(slug);
  if (!r.success) return NextResponse.json({ error: "Invalid slug" }, { status: 400 });

  const existing = await db.getBlogBySlug(r.data);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await db.unpublishBlog(r.data);
  const after = await db.getBlogBySlug(r.data);
  return NextResponse.json({ blog: after });
}
