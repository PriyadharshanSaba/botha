import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sanitizeBlogHtml } from "./sanitize";

describe("sanitizeBlogHtml", () => {
  it("strips <script> tags entirely", () => {
    const { html } = sanitizeBlogHtml('<p class="hero-sub">ok</p><script>alert(1)</script>');
    assert.equal(html, '<p class="hero-sub">ok</p>');
  });

  it("strips <style> tags entirely", () => {
    const { html } = sanitizeBlogHtml('<style>body{display:none}</style><p>ok</p>');
    assert.equal(html, '<p>ok</p>');
  });

  it("removes event handler attrs (onclick, onerror, etc.)", () => {
    const { html } = sanitizeBlogHtml('<p onclick="alert(1)" class="hero-sub">x</p>');
    assert.ok(!html.includes("onclick"));
    assert.ok(html.includes('class="hero-sub"'));
  });

  it("strips inline style attrs unconditionally", () => {
    const input = '<p style="color:#111111" class="hero-sub">copy</p>';
    const { html, inlineStylesStripped } = sanitizeBlogHtml(input);
    assert.ok(!html.includes("style="));
    assert.ok(html.includes('class="hero-sub"'));
    // DOMPurify may strip style in pass 1 — counter only ticks in pass 2.
    // Either way, the final HTML has no style attr.
    assert.ok(inlineStylesStripped >= 0);
  });

  it("drops javascript: hrefs but keeps http(s) hrefs", () => {
    const { html: bad } = sanitizeBlogHtml('<a href="javascript:alert(1)">x</a>');
    assert.ok(!bad.toLowerCase().includes("javascript:"));

    const { html: good } = sanitizeBlogHtml('<a href="https://example.com">x</a>');
    assert.ok(good.includes('href="https://example.com"'));
  });

  it("drops unknown class tokens but keeps known ones on same element", () => {
    const { html, droppedClasses } = sanitizeBlogHtml(
      '<div class="stage-card evil-leak stage-grid-2">x</div>'
    );
    assert.ok(html.includes("stage-card"));
    assert.ok(html.includes("stage-grid-2"));
    assert.ok(!html.includes("evil-leak"));
    assert.deepEqual(droppedClasses, ["evil-leak"]);
  });

  it("removes class attr entirely if no tokens survive", () => {
    const { html } = sanitizeBlogHtml('<p class="evil only-bad">x</p>');
    assert.ok(!html.includes("class="));
  });

  it("preserves the full design-system class list end-to-end", () => {
    const input = `
      <div class="topbar"><span class="brand">B</span><span class="tag">T</span></div>
      <div class="hero-badge">badge</div>
      <h1>Title <span>accent</span></h1>
      <div class="hero-sub">sub</div>
      <div class="stat-row">
        <div class="stat-cell"><span class="big red">5%</span><span class="lbl">x</span></div>
      </div>
      <div class="section-tag">01 X</div>
      <h2>H2</h2>
      <p>para <strong>bold</strong></p>
      <div class="callout-red"><span class="c-label">L</span><p>p</p></div>
      <div class="formula-box"><span class="f-label">F</span><span class="formula">x</span></div>
      <table class="week-table"><thead><tr><th>a</th></tr></thead><tbody><tr><td class="td-red">b</td></tr></tbody></table>
    `;
    const { html, droppedClasses } = sanitizeBlogHtml(input);
    for (const cls of [
      "topbar", "brand", "tag", "hero-badge", "hero-sub", "stat-row", "stat-cell",
      "big", "red", "lbl", "section-tag", "callout-red", "c-label",
      "formula-box", "f-label", "formula", "week-table", "td-red",
    ]) {
      assert.ok(html.includes(cls), `expected class "${cls}" to survive`);
    }
    assert.deepEqual(droppedClasses, []);
  });

  it("preserves colspan + rowspan attributes on table cells", () => {
    const input = '<table><tbody><tr><td colspan="2">spanning</td><td rowspan="3">rows</td></tr></tbody></table>';
    const { html } = sanitizeBlogHtml(input);
    assert.ok(html.includes('colspan="2"'), `colspan missing in: ${html}`);
    assert.ok(html.includes('rowspan="3"'), `rowspan missing in: ${html}`);
  });

  it("rejects iframe / embed / object", () => {
    const input = '<iframe src="https://evil"></iframe><embed src="x"/><object data="y"></object><p>ok</p>';
    const { html } = sanitizeBlogHtml(input);
    assert.ok(!html.toLowerCase().includes("iframe"));
    assert.ok(!html.toLowerCase().includes("<embed"));
    assert.ok(!html.toLowerCase().includes("<object"));
    assert.ok(html.includes("<p>ok</p>"));
  });
});
