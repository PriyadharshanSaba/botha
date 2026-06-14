import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sanitizeBlogCss, CssSanitizeError } from "./sanitize-css";

describe("sanitizeBlogCss", () => {
  it("passes through normal CSS unchanged", () => {
    const input = `.numbers-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }`;
    const r = sanitizeBlogCss(input);
    assert.equal(r.css, input);
    assert.deepEqual(r.removed, []);
  });

  it("returns empty for null/undefined/empty", () => {
    assert.deepEqual(sanitizeBlogCss(null), { css: "", removed: [] });
    assert.deepEqual(sanitizeBlogCss(undefined), { css: "", removed: [] });
    assert.deepEqual(sanitizeBlogCss(""), { css: "", removed: [] });
  });

  it("removes @import rules", () => {
    const r = sanitizeBlogCss(`@import url("https://evil.example/x.css"); .ok { color: red; }`);
    assert.ok(!r.css.includes("@import"));
    assert.ok(r.css.includes(".ok"));
    assert.ok(r.removed.some((s) => s.includes("@import")));
  });

  it("removes expression() (legacy IE CSS-JS)", () => {
    const r = sanitizeBlogCss(`.x { width: expression(alert(1)); }`);
    assert.ok(!r.css.includes("expression("));
    assert.ok(r.removed.some((s) => s.includes("expression()")));
  });

  it("removes behavior: legacy IE binding", () => {
    const r = sanitizeBlogCss(`.x { behavior: url(evil.htc); }`);
    assert.ok(!r.css.includes("behavior:"));
    assert.ok(r.removed.some((s) => s.includes("behavior")));
  });

  it("removes javascript: URIs inside url()", () => {
    const r = sanitizeBlogCss(`.x { background: url(javascript:alert(1)); }`);
    assert.ok(!r.css.toLowerCase().includes("javascript:"));
    assert.ok(r.removed.some((s) => s.includes("javascript:")));
  });

  it("removes data: URIs inside url() (could carry script via base64 SVG)", () => {
    const r = sanitizeBlogCss(`.x { background: url(data:image/svg+xml;base64,PHN2Zw==); }`);
    assert.ok(!r.css.toLowerCase().includes("data:"));
    assert.ok(r.removed.some((s) => s.includes("data:")));
  });

  it("removes </style> closing-tag injection", () => {
    const r = sanitizeBlogCss(`.x { color: red; } </style><script>alert(1)</script>`);
    assert.ok(!r.css.includes("</style"));
    assert.ok(!r.css.toLowerCase().includes("<script"));
  });

  it("removes <script and <iframe tags inside CSS", () => {
    const r = sanitizeBlogCss(`.x { /* <script>alert(1)</script> */ color: red; }`);
    assert.ok(!r.css.toLowerCase().includes("<script"));
  });

  it("removes @charset / @namespace / @document", () => {
    const r1 = sanitizeBlogCss(`@charset "evil"; .x{}`);
    assert.ok(!r1.css.includes("@charset"));

    const r2 = sanitizeBlogCss(`@namespace foo "evil"; .x{}`);
    assert.ok(!r2.css.includes("@namespace"));

    const r3 = sanitizeBlogCss(`@document url("x") { .x { color: red } } .y {}`);
    assert.ok(!r3.css.includes("@document"));
    assert.ok(r3.css.includes(".y"));
  });

  it("throws CssSanitizeError when input exceeds 50KB", () => {
    const big = ".x { color: red; }".repeat(3000);  // ~57KB
    assert.throws(() => sanitizeBlogCss(big), CssSanitizeError);
  });

  it("counts multiple offenses of same type", () => {
    const r = sanitizeBlogCss(`@import "a.css"; @import "b.css"; @import "c.css";`);
    assert.ok(r.removed[0].includes("3×"));
  });

  it("preserves @media + @keyframes (legitimate at-rules)", () => {
    const input = `
      @media (max-width: 600px) { .x { font-size: 14px; } }
      @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
    `;
    const r = sanitizeBlogCss(input);
    assert.ok(r.css.includes("@media"));
    assert.ok(r.css.includes("@keyframes"));
    assert.deepEqual(r.removed, []);
  });
});
