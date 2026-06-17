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
 *
 * Sections are numbered 1..N by source order — the leading digits in the
 * section-tag text are ignored for numbering, because pasted HTML may
 * format the number in any way (or omit it). The visible text becomes the
 * title (with leading digits + whitespace stripped if present).
 */
export function detectSections(html: string): DetectedSection[] {
  const root = parse(html, { lowerCaseTagName: false, comment: false });
  const markers = root.querySelectorAll(".section-tag");
  return markers.map((m, i) => parseSectionTag(m, i + 1));
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

  const sections = allMarkers.map((m, i) => parseSectionTag(m, i + 1));
  const cutIndex = afterSection;   // sections numbered 1..N → cut at index `afterSection` (0-based)
  if (cutIndex >= allMarkers.length) {
    throw new SplitError(
      `splitAt: no section numbered ${afterSection + 1} found (have ${sections.map((s) => s.num).join(", ")})`
    );
  }
  const cutMarker = allMarkers[cutIndex];

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

function parseSectionTag(el: HTMLElement, num: number): DetectedSection {
  // Decode &nbsp;, collapse all whitespace, trim. Strip any leading
  // digits + separator so the title is the human label. Source-order
  // numbering is used for `num`; the text-embedded number (if any) is
  // ignored — pasted HTML may format it any way or omit it entirely.
  const raw = el.text
    .replace(/&nbsp;/g, " ")
    .replace(/ /g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const titleOnly = raw.replace(/^\d{1,3}[\s.:\-—]*/, "").trim();
  return {
    num,
    rawText: raw,
    title: titleOnly || raw || `Section ${num}`,
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
