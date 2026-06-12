/**
 * Allowed HTML tags + CSS class tokens for blog body content.
 *
 * Drives both the sanitizer (rejects anything not on these lists) and the
 * admin uploader's class-validation step. Tightly scoped to the design
 * system in app/blogs/guide-article.css. If you add a CSS class there,
 * add it here too — otherwise the sanitizer silently strips it.
 */

export const ALLOWED_TAGS = [
  "h1", "h2", "h3", "h4",
  "p", "span", "strong", "em", "br", "hr", "sub", "sup",
  "div", "section", "article",
  "table", "thead", "tbody", "tr", "th", "td",
  "ul", "ol", "li",
  "a", "blockquote",
] as const;

export const ALLOWED_ATTR = ["class", "href", "colspan", "rowspan"] as const;

/**
 * Whitelist of class tokens. Any element class attribute is filtered
 * token-by-token after DOMPurify runs — unknown tokens are dropped, but
 * the element survives.
 */
export const ALLOWED_CLASSES = new Set<string>([
  // Header / topbar
  "topbar", "brand", "tag",
  "hero-badge", "hero-sub",

  // Stat row
  "stat-row", "stat-cell", "big", "green", "red", "gold", "lbl",

  // Section anchor
  "section-tag",

  // Callouts
  "callout", "callout-red", "callout-green", "c-label",

  // Stage cards
  "stage-grid", "stage-grid-2", "stage-card",
  "s-label", "s-label-red", "s-label-gold",

  // Numbered steps
  "steps", "step", "step-num-wrap", "step-num", "step-line", "step-body", "step-badge",

  // Formula / range
  "formula-box", "f-label", "formula", "sub",
  "range-box", "r-label",

  // Tables
  "week-table", "td-red", "td-green", "td-gold",

  // Principles
  "principle-list", "principle-item", "p-icon", "p-content", "p-pill",
  "pill-red", "pill-gold",

  // Footnote / misc
  "footnote", "open-tag",
]);
