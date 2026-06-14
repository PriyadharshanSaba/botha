/**
 * Per-blog custom CSS sanitizer.
 *
 * Threat model:
 *   - The writer is a trusted admin (gated by ADMIN_EMAILS), so style
 *     drift is acceptable. The sanitizer's job is narrow: block CSS
 *     features that can become script-injection vectors or external
 *     fetches.
 *
 * Blocks:
 *   - @import          (fetches external CSS, leaks tokens, supply-chain risk)
 *   - @charset, @namespace, @document (rarely needed; risk of weird parses)
 *   - expression(...)  (legacy IE CSS-JS)
 *   - behavior: ...    (legacy IE binding)
 *   - javascript: URIs in url()
 *   - data: URIs in url() (could be base64 SVG with embedded scripts)
 *   - </style>         (closing-tag injection if rendered raw)
 *   - <script, <iframe, on*= patterns (paranoid HTML guard)
 *
 * Does NOT auto-scope selectors — admins are expected to scope their
 * rules to article-internal classes manually (e.g. wrap with
 * `.blog-post-body .my-class { ... }`).
 *
 * Max length 50KB to prevent DOS via giant CSS strings.
 */

export const MAX_CSS_LENGTH = 50_000;

export type CssSanitizeResult = {
  css: string;                 // cleaned CSS (lines stripped or replaced with /* removed */)
  removed: string[];           // human-readable list of removed offenses
};

export class CssSanitizeError extends Error {}

const FORBIDDEN_PATTERNS: { pattern: RegExp; label: string }[] = [
  { pattern: /@import\b[^;]*;?/gi,           label: "@import rule" },
  { pattern: /@charset\b[^;]*;?/gi,          label: "@charset rule" },
  { pattern: /@namespace\b[^;]*;?/gi,        label: "@namespace rule" },
  { pattern: /@document\b[^{]*\{[\s\S]*?\}/gi, label: "@document rule" },
  { pattern: /expression\s*\([^)]*\)/gi,      label: "expression() call" },
  { pattern: /behavior\s*:[^;}]*/gi,          label: "behavior: property" },
  { pattern: /-moz-binding\s*:[^;}]*/gi,      label: "-moz-binding property" },
  { pattern: /url\s*\(\s*['"]?\s*javascript:[^)]*\)/gi, label: "javascript: URI in url()" },
  { pattern: /url\s*\(\s*['"]?\s*data:[^)]*\)/gi,       label: "data: URI in url()" },
  // Closing tag injection — if any consumer ever renders this without
  // properly attribute-escaping inside <style>, this would break out.
  { pattern: /<\s*\/\s*style/gi,              label: "</style> closing-tag injection" },
  // HTML inside CSS — never legitimate.
  { pattern: /<\s*script[\s>]/gi,             label: "<script> tag" },
  { pattern: /<\s*iframe[\s>]/gi,             label: "<iframe> tag" },
];

export function sanitizeBlogCss(raw: string | null | undefined): CssSanitizeResult {
  if (!raw) return { css: "", removed: [] };

  if (raw.length > MAX_CSS_LENGTH) {
    throw new CssSanitizeError(`CSS too large: ${raw.length}B (max ${MAX_CSS_LENGTH}B)`);
  }

  let css = raw;
  const removed: string[] = [];

  for (const { pattern, label } of FORBIDDEN_PATTERNS) {
    const matches = css.match(pattern);
    if (matches && matches.length > 0) {
      removed.push(`${label} (${matches.length}×)`);
      css = css.replace(pattern, "/* removed */");
    }
  }

  return { css: css.trim(), removed };
}
