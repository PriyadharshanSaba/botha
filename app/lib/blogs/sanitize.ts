/**
 * Sanitize raw HTML pasted by an admin into the blog uploader before it
 * lands in the database. This is the single trust boundary — anything
 * downstream (the public route, dangerouslySetInnerHTML) trusts the output.
 *
 * Three passes:
 *   1. DOMPurify with tag + attr allowlists; strips <script>, <style>, <link>,
 *      <meta>, event handlers, javascript: URIs, mxss vectors, etc.
 *   2. node-html-parser walk that drops any class token not in ALLOWED_CLASSES.
 *      DOMPurify allows the `class` attr wholesale; this filters per-token so
 *      a class like "evil-leak" can't ride along on a permitted element.
 *   3. Strip every inline `style` attr unconditionally. The CSS file
 *      (guide-article.css) is the single source of truth for visual styling.
 */

import DOMPurify from "isomorphic-dompurify";
import { parse, HTMLElement } from "node-html-parser";
import { ALLOWED_TAGS, ALLOWED_ATTR, ALLOWED_CLASSES } from "./allowlist";

export type SanitizeResult = {
  html: string;
  droppedClasses: string[];   // class tokens removed (for admin UI warnings)
  inlineStylesStripped: number;
};

export function sanitizeBlogHtml(
  raw: string,
  opts?: { extraAllowedClasses?: Iterable<string> }
): SanitizeResult {
  const allowedClasses = opts?.extraAllowedClasses
    ? new Set([...ALLOWED_CLASSES, ...opts.extraAllowedClasses])
    : ALLOWED_CLASSES;
  // Pass 1 — DOMPurify.
  // Note: ALLOWED_URI_REGEXP is intentionally NOT overridden. DOMPurify tests
  // it against ALL attribute values, not just URI attributes, so a narrow
  // override like `^https?:|mailto:|\/(?!\/)` strips harmless values like
  // colspan="2" (the "2" doesn't match). The default URI check still blocks
  // javascript:, data:, vbscript:, file:, etc. on href/src/action attrs.
  const purified = DOMPurify.sanitize(raw, {
    ALLOWED_TAGS: [...ALLOWED_TAGS],
    ALLOWED_ATTR: [...ALLOWED_ATTR],
    FORBID_ATTR: [
      "style",
      "onerror", "onload", "onclick", "onmouseover", "onfocus", "onblur",
      "onchange", "onsubmit", "onkeydown", "onkeyup", "onkeypress",
      "srcdoc", "formaction", "ping",
    ],
    KEEP_CONTENT: true,
    USE_PROFILES: { html: true },
  });

  // Pass 2 + 3 — class token filter + inline style strip via DOM walk
  const root = parse(purified, { lowerCaseTagName: false, comment: false });
  const droppedClasses = new Set<string>();
  let inlineStylesStripped = 0;

  walk(root, (node) => {
    // Inline style strip (defensive — DOMPurify already in FORBID_ATTR list,
    // but parse anything that slipped through, e.g. via attribute aliases)
    if (node.hasAttribute("style")) {
      node.removeAttribute("style");
      inlineStylesStripped++;
    }

    // Class token filter
    const cls = node.getAttribute("class");
    if (cls === undefined || cls === null) return;

    const tokens = cls.split(/\s+/).filter(Boolean);
    const kept: string[] = [];
    for (const t of tokens) {
      if (allowedClasses.has(t)) {
        kept.push(t);
      } else {
        droppedClasses.add(t);
      }
    }

    if (kept.length === 0) {
      node.removeAttribute("class");
    } else if (kept.length !== tokens.length) {
      node.setAttribute("class", kept.join(" "));
    }
  });

  return {
    html: root.toString(),
    droppedClasses: Array.from(droppedClasses).sort(),
    inlineStylesStripped,
  };
}

function walk(node: HTMLElement, fn: (el: HTMLElement) => void): void {
  fn(node);
  for (const child of node.childNodes) {
    if (child instanceof HTMLElement) walk(child, fn);
  }
}
