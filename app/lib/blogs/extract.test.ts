import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { extractBlogMetadata, _internal } from "./extract";

const FULL_PAGE = `
<!DOCTYPE html>
<html><head><title>Inner Title</title>
<style>.foo { color: red; }</style>
</head><body><div class="page">
  <div class="topbar"><span class="brand">Markets &amp; Macro</span><span class="tag">India &amp; Global Finance | Week of June 14, 2026</span></div>
  <div class="hero-badge">June 14, 2026</div>
  <h1>The Headline Test, <span>Once</span></h1>
  <div class="hero-sub">A short subtitle that should become the deck.</div>
  <div class="section-tag">01 First section</div>
  <p>Some body paragraph with enough words to push the read-time calculation above a single minute. Words words words words words words words words words words words words words words words words words words words words words words words words words.</p>
  <div class="section-tag">02 Second section</div>
  <p>Section two.</p>
</div></body></html>
`;

describe("extractBlogMetadata", () => {
  it("pulls <style> blocks into customCss and strips them from cleanedHtml", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    assert.ok(r.customCss.includes(".foo"));
    assert.ok(!r.cleanedHtml.includes(".foo"));
    assert.ok(!r.cleanedHtml.includes("<style"));
  });

  it("extracts title from <h1>", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    assert.match(r.title, /Headline Test/);
  });

  it("extracts titleHtml preserving span", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    assert.ok(r.titleHtml.includes("<span>Once</span>"));
  });

  it("extracts heroSub, heroBadge, topbarBrand, topbarTag", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    assert.match(r.heroSub, /short subtitle/);
    assert.equal(r.heroBadge, "June 14, 2026");
    assert.equal(r.topbarBrand, "Markets & Macro");
    assert.match(r.topbarTag, /India & Global Finance/);
  });

  it("derives kicker from leading segment of topbar tag", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    assert.equal(r.kicker, "India & Global Finance");
  });

  it("falls back to first long paragraph for deck if no hero-sub", () => {
    const html = "<h1>T</h1><p>short</p><p>" + "word ".repeat(50) + "</p>";
    const r = extractBlogMetadata(html);
    assert.ok(r.deck.length > 80);
  });

  it("uses today's date for dateLabel", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    const thisYear = new Date().getFullYear().toString();
    assert.ok(r.dateLabel.includes(thisYear));
  });

  it("computes read time from word count", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    assert.match(r.readTime, /^\d+ min read$/);
  });

  it("slugifies the title", () => {
    const r = extractBlogMetadata(FULL_PAGE);
    assert.match(r.suggestedSlug, /^[a-z0-9-]+$/);
    assert.ok(r.suggestedSlug.includes("headline-test"));
  });

  it("handles body-only paste (no <html><body>)", () => {
    const r = extractBlogMetadata('<h1>Bare Title</h1><p>Body content.</p>');
    assert.equal(r.title, "Bare Title");
    assert.equal(r.customCss, "");
    assert.ok(r.cleanedHtml.includes("<p>Body content.</p>"));
  });

  it("returns empty title gracefully if no <h1>", () => {
    const r = extractBlogMetadata('<p>no headline here</p>');
    assert.equal(r.title, "");
    assert.equal(r.suggestedSlug, "");
  });
});

describe("slugify (internal)", () => {
  it("handles punctuation, spaces, accents", () => {
    assert.equal(_internal.slugify("The Rupee's Long Descent!"), "the-rupee-s-long-descent");
    assert.equal(_internal.slugify("  Hello   World  "), "hello-world");
    assert.equal(_internal.slugify(""), "");
  });

  it("clips to 80 chars", () => {
    const s = _internal.slugify("x ".repeat(100));
    assert.ok(s.length <= 80);
  });
});
