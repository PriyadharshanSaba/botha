/**
 * POST /api/admin/blogs/preview
 *
 * Dry-run sanitizer + section detector. Admin pastes raw HTML, gets back
 * the sanitized version, detected sections, dropped classes, and—if
 * afterSection is provided—the preview/gated split.
 *
 * No DB writes. Used by the admin uploader UI to show a live preview
 * and populate the "split after section" dropdown.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sanitizeBlogHtml } from "@/app/lib/blogs/sanitize";
import { detectSections, splitAt, SplitError } from "@/app/lib/blogs/split";
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

  const sanitized = sanitizeBlogHtml(html);
  const sections = detectSections(sanitized.html);

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
  });
}
