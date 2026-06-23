import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { detectSections, splitAt, SplitError } from "./split";

const SAMPLE_HTML = `
  <div class="topbar"><span class="brand">B</span></div>
  <div class="hero-badge">badge</div>
  <h1>Title</h1>
  <div class="hero-sub">sub</div>
  <div class="stat-row"><div class="stat-cell"><span class="big">5%</span></div></div>

  <div class="section-tag">01   Market Scorecard</div>
  <h2>S1</h2>
  <p>p1</p>

  <div class="section-tag">02   Monetary Policy</div>
  <h2>S2</h2>
  <p>p2</p>

  <div class="section-tag">03   Policy Surprise</div>
  <h2>S3</h2>
  <p>p3</p>
`;

describe("detectSections", () => {
  it("finds every section-tag and parses num + title", () => {
    const s = detectSections(SAMPLE_HTML);
    assert.equal(s.length, 3);
    assert.equal(s[0].num, 1);
    assert.equal(s[0].title, "Market Scorecard");
    assert.equal(s[1].num, 2);
    assert.equal(s[1].title, "Monetary Policy");
    assert.equal(s[2].num, 3);
    assert.equal(s[2].title, "Policy Surprise");
  });

  it("returns [] when no section-tags exist", () => {
    assert.deepEqual(detectSections("<p>nothing</p>"), []);
  });
});

describe("splitAt", () => {
  it("split after section 1 → hero + S1 in preview, S2+S3 in gated", () => {
    const r = splitAt(SAMPLE_HTML, 1);

    assert.ok(r.preview.includes("hero-badge"));
    assert.ok(r.preview.includes("Market Scorecard"));
    assert.ok(r.preview.includes("<p>p1</p>"));

    assert.ok(!r.preview.includes("Monetary Policy"));
    assert.ok(!r.preview.includes("<p>p2</p>"));

    assert.ok(r.gated.includes("Monetary Policy"));
    assert.ok(r.gated.includes("<p>p2</p>"));
    assert.ok(r.gated.includes("Policy Surprise"));
    assert.ok(r.gated.includes("<p>p3</p>"));

    assert.equal(r.splitAfterSection, 1);
    assert.equal(r.sections.length, 3);
  });

  it("split after section 2 → hero + S1 + S2 in preview, S3 in gated", () => {
    const r = splitAt(SAMPLE_HTML, 2);
    assert.ok(r.preview.includes("Monetary Policy"));
    assert.ok(r.preview.includes("<p>p2</p>"));
    assert.ok(!r.preview.includes("Policy Surprise"));
    assert.ok(r.gated.includes("Policy Surprise"));
    assert.ok(r.gated.includes("<p>p3</p>"));
  });

  it("throws if no section-tags exist", () => {
    assert.throws(() => splitAt("<p>nothing</p>", 1), SplitError);
  });

  it("throws if the requested cut section is missing", () => {
    assert.throws(() => splitAt(SAMPLE_HTML, 99), SplitError);
  });

  it("throws on non-positive integers", () => {
    assert.throws(() => splitAt(SAMPLE_HTML, 0), SplitError);
    assert.throws(() => splitAt(SAMPLE_HTML, -1), SplitError);
    assert.throws(() => splitAt(SAMPLE_HTML, 1.5), SplitError);
  });
});

describe("real partner-style HTML (jun12 sample)", { skip: !sampleExists() }, () => {
  const SAMPLE = "/Users/guest3/Downloads/india_week_june5_June12_2026.html";

  function loadBody(): string {
    const full = readFileSync(SAMPLE, "utf8");
    const m = full.match(/<div class="page">([\s\S]*?)<\/div>\s*<\/body>/);
    return m ? m[1] : full;
  }

  it("detects all 10 sections in the source file", () => {
    const sections = detectSections(loadBody());
    assert.equal(sections.length, 10);
    assert.equal(sections[0].num, 1);
    assert.equal(sections[9].num, 10);
  });

  it("split after section 1 yields preview with hero+S1 and gated with S2-S10", () => {
    const r = splitAt(loadBody(), 1);
    assert.ok(r.preview.includes("Market Scorecard"));
    assert.ok(r.preview.includes("Numbers That Need Context"));
    assert.ok(!r.preview.includes("Monetary Policy"));
    assert.ok(r.gated.includes("Monetary Policy"));
    assert.ok(r.gated.includes("What to Watch"));
  });
});

function sampleExists(): boolean {
  try {
    readFileSync("/Users/guest3/Downloads/india_week_june5_June12_2026.html");
    return true;
  } catch { return false; }
}
