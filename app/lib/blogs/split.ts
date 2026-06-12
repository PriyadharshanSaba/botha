/**
 * Split an article body into preview (free) and gated (paywalled) halves
 * based on the section-tag markers.
 *
 * The admin pastes the full HTML body of the article — everything that goes
 * inside <article class="blog-post-body">. This function finds the
 * `<div class="section-tag">NN  Title</div>` markers and slices the document
 * after the Nth section (preview) from section N+1 onward (gated).
 *
 * The hero block (topbar, hero-badge, h1, hero-sub, stat-row) always stays
 * in preview — it lives BEFORE the first section-tag anyway.
 */

import { parse, HTMLElement } from "node-html-parser";

export type DetectedSection = {
  num: number;           // 1, 2, 3 ... (parsed from the tag text)
  rawText: string;       // full inner text of the section-tag
  title: string;         // text after the number (trimmed)
};

export type SplitResult = {
  preview: string;
  gated: string;
  sections: DetectedSection[];
  splitAfterSection: number;
};

export class SplitError extends Error {}

/**
 * Returns the section markers found in the document, in source order.
 * Does NOT modify the input. Used by the admin uploader to populate the
 * "split after section" dropdown.
 */
export function detectSections(html: string): DetectedSection[] {
  const root = parse(html, { lowerCaseTagName: false, comment: false });
  const markers = root.querySelectorAll(".section-tag");
  return markers.map((m) => parseSectionTag(m));
}

/**
 * Splits the document. `afterSection` is the 1-based section number that
 * marks the END of the preview. Everything from the next section-tag onward
 * goes into gated.
 *
 * Example: splitAt(html, 1) with sections [01,02,03,...] →
 *   preview = hero + section 01
 *   gated   = section 02 + 03 + ...
 */
export function splitAt(html: string, afterSection: number): SplitResult {
  if (!Number.isInteger(afterSection) || afterSection < 1) {
    throw new SplitError(`splitAt: afterSection must be a positive integer (got ${afterSection})`);
  }

  const root = parse(html, { lowerCaseTagName: false, comment: false });
  const allMarkers = root.querySelectorAll(".section-tag");
  if (allMarkers.length === 0) {
    throw new SplitError("splitAt: no `.section-tag` markers found in HTML");
  }

  const sections = allMarkers.map(parseSectionTag);
  const cutMarker = allMarkers.find((m) => parseSectionTag(m).num === afterSection + 1);
  if (!cutMarker) {
    throw new SplitError(
      `splitAt: no section numbered ${afterSection + 1} found (have ${sections.map((s) => s.num).join(", ")})`
    );
  }

  // The cut point is the cutMarker node. Find the top-level ancestor of
  // cutMarker inside `root` — we slice on direct children of root only.
  const topLevel = topLevelAncestorOf(root, cutMarker);
  if (!topLevel) {
    throw new SplitError("splitAt: section-tag is not a descendant of root");
  }

  const previewParts: string[] = [];
  const gatedParts: string[] = [];
  let crossed = false;
  for (const child of root.childNodes) {
    if (!crossed && child === topLevel) crossed = true;
    (crossed ? gatedParts : previewParts).push(child.toString());
  }

  return {
    preview: previewParts.join(""),
    gated: gatedParts.join(""),
    sections,
    splitAfterSection: afterSection,
  };
}

function parseSectionTag(el: HTMLElement): DetectedSection {
  // The text typically reads "01  The Market Scorecard" with non-breaking
  // spaces. Normalize whitespace and pull the leading digits.
  const raw = el.text.replace(/ /g, " ").trim();
  const m = raw.match(/^(\d{1,3})\s+(.+)$/);
  if (!m) {
    return { num: NaN, rawText: raw, title: raw };
  }
  return {
    num: parseInt(m[1], 10),
    rawText: raw,
    title: m[2].trim(),
  };
}

function topLevelAncestorOf(root: HTMLElement, target: HTMLElement): HTMLElement | null {
  let cur: HTMLElement | null = target;
  while (cur && cur.parentNode && cur.parentNode !== root) {
    const parent: unknown = cur.parentNode;
    cur = parent instanceof HTMLElement ? parent : null;
  }
  return cur;
}
