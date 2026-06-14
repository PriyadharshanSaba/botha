/**
 * POST /api/admin/blogs/migrate-folders
 *
 * One-shot migration endpoint. Renders the 9 folder-based blog
 * components into sanitized HTML and upserts them as published rows in
 * the blogs table. Identical pipeline to scripts/migrate-blogs-to-db.ts
 * but runs inside the Next.js server runtime — required when the
 * operator's machine can't reach the production DB (IP allowlist).
 *
 * Body: { apply?: boolean, slug?: string }
 *   - apply=false (default): dry-run, no DB writes
 *   - apply=true: upsertBlog + publishBlog + backdate published_at
 *   - slug: limit to one blog
 *
 * Author: the authenticated admin user becomes blogs.author_id.
 *
 * Auth: getAuthenticatedAdmin (uid + admin=1 + ADMIN_EMAILS). NOT
 * rate-limited — this is a one-shot operation, and the caller is the
 * verified admin. Delete the route in the cleanup commit after
 * migration completes.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import {
  FOLDER_POSTS,
  migrateOne,
  type FolderLoader,
} from "@/app/lib/blogs/folder-migration";

export const dynamic = "force-dynamic";
export const maxDuration = 60;     // rendering 9 components + sanitize + 9 upserts

/**
 * Static switch so each `import()` is a literal known to webpack at
 * build time, gets its own chunk, and survives App Router optimization.
 */
const loadFolderComponents: FolderLoader = async (slug) => {
  switch (slug) {
    case "india-finance-jun12-2026": {
      const p = await import("@/app/blogs/india-finance-jun12-2026/preview");
      const g = await import("@/app/blogs/india-finance-jun12-2026/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "india-e20-deep-dive": {
      const p = await import("@/app/blogs/india-e20-deep-dive/preview");
      const g = await import("@/app/blogs/india-e20-deep-dive/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "india-finance-jun5-2026": {
      const p = await import("@/app/blogs/india-finance-jun5-2026/preview");
      const g = await import("@/app/blogs/india-finance-jun5-2026/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "rupee-descent": {
      const p = await import("@/app/blogs/rupee-descent/preview");
      const g = await import("@/app/blogs/rupee-descent/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "india-finance-may29-2026": {
      const p = await import("@/app/blogs/india-finance-may29-2026/preview");
      const g = await import("@/app/blogs/india-finance-may29-2026/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "india-finance-may2026": {
      const p = await import("@/app/blogs/india-finance-may2026/preview");
      const g = await import("@/app/blogs/india-finance-may2026/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "startup-cashflow": {
      const p = await import("@/app/blogs/startup-cashflow/preview");
      const g = await import("@/app/blogs/startup-cashflow/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "dpiit-startup-recognition": {
      const p = await import("@/app/blogs/dpiit-startup-recognition/preview");
      const g = await import("@/app/blogs/dpiit-startup-recognition/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    case "rupee-managed-decline": {
      const p = await import("@/app/blogs/rupee-managed-decline/preview");
      const g = await import("@/app/blogs/rupee-managed-decline/gated");
      return { Preview: p.Preview, Gated: g.Gated };
    }
    default:
      throw new Error(`Unknown folder slug: ${slug}`);
  }
};

export async function POST(req: NextRequest) {
  const user = await getAuthenticatedAdmin(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { apply?: unknown; slug?: unknown };
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const apply = body.apply === true;
  const onlySlug = typeof body.slug === "string" ? body.slug : null;

  const targets = onlySlug ? FOLDER_POSTS.filter((p) => p.slug === onlySlug) : FOLDER_POSTS;
  if (targets.length === 0) {
    return NextResponse.json({ error: `No folder post matches slug=${onlySlug}` }, { status: 400 });
  }

  const results = [];
  for (const meta of targets) {
    const r = await migrateOne(meta, user.id, apply, loadFolderComponents);
    results.push(r);
  }

  const succeeded = results.filter((r) => r.ok).length;
  return NextResponse.json({
    mode: apply ? "APPLY" : "DRY-RUN",
    author: { id: user.id, email: user.email },
    succeeded,
    total: results.length,
    results,
  });
}
