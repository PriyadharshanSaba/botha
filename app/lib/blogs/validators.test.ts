import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  SlugSchema,
  BlogUpsertSchema,
  PreviewInputSchema,
  StatRowCellSchema,
} from "./validators";

describe("SlugSchema", () => {
  it("accepts valid slugs", () => {
    for (const s of ["abc", "india-finance-jun12-2026", "a1-2-3", "rupee-descent"]) {
      assert.equal(SlugSchema.parse(s), s);
    }
  });

  it("rejects too-short / too-long slugs", () => {
    assert.throws(() => SlugSchema.parse("ab"));
    assert.throws(() => SlugSchema.parse("a".repeat(81)));
  });

  it("rejects uppercase / underscores / leading dash", () => {
    assert.throws(() => SlugSchema.parse("ABC"));
    assert.throws(() => SlugSchema.parse("a_b_c"));
    assert.throws(() => SlugSchema.parse("-leading"));
    assert.throws(() => SlugSchema.parse("with space"));
  });
});

describe("StatRowCellSchema", () => {
  it("accepts gold/red/green tones and null", () => {
    for (const tone of ["gold", "red", "green", null, undefined]) {
      assert.doesNotThrow(() => StatRowCellSchema.parse({ big: "5%", label: "Repo", tone }));
    }
  });

  it("rejects unknown tones", () => {
    assert.throws(() => StatRowCellSchema.parse({ big: "5%", label: "x", tone: "purple" }));
  });
});

describe("PreviewInputSchema", () => {
  it("accepts html alone or with afterSection", () => {
    assert.doesNotThrow(() => PreviewInputSchema.parse({ html: "<p>x</p>" }));
    assert.doesNotThrow(() => PreviewInputSchema.parse({ html: "<p>x</p>", afterSection: 2 }));
  });

  it("rejects empty html", () => {
    assert.throws(() => PreviewInputSchema.parse({ html: "" }));
  });

  it("rejects afterSection <= 0 or non-integer", () => {
    assert.throws(() => PreviewInputSchema.parse({ html: "<p>x</p>", afterSection: 0 }));
    assert.throws(() => PreviewInputSchema.parse({ html: "<p>x</p>", afterSection: -1 }));
    assert.throws(() => PreviewInputSchema.parse({ html: "<p>x</p>", afterSection: 1.5 }));
  });

  it("rejects >500KB html", () => {
    const big = "<p>" + "x".repeat(500_001) + "</p>";
    assert.throws(() => PreviewInputSchema.parse({ html: big }));
  });
});

describe("BlogUpsertSchema", () => {
  const valid = {
    slug: "test-blog",
    kicker: "Markets · Macro · India",
    title: "Test Title",
    titleHtml: "Test <span>Title</span>",
    deck: "A test deck.",
    heroSub: "A test hero sub.",
    heroBadge: "Jun 12, 2026",
    topbarTag: "India & Global Finance | Week of Jun 12, 2026",
    dateLabel: "June 12, 2026",
    readTime: "15 min read",
    rawHtml: "<div class=\"section-tag\">01 X</div><p>x</p>",
    afterSection: 1,
  };

  it("accepts a full valid payload", () => {
    assert.doesNotThrow(() => BlogUpsertSchema.parse(valid));
  });

  it("allows omitting topbarBrand + heroBadge + statRow", () => {
    const { heroBadge: _h, ...rest } = valid;
    void _h;
    assert.doesNotThrow(() => BlogUpsertSchema.parse(rest));
  });

  it("rejects missing required fields (slug, rawHtml, afterSection)", () => {
    for (const f of ["slug", "rawHtml", "afterSection"]) {
      const { [f as keyof typeof valid]: _omit, ...rest } = valid;
      void _omit;
      assert.throws(() => BlogUpsertSchema.parse(rest), `expected throw when missing ${f}`);
    }
  });

  it("accepts minimal payload (slug + rawHtml + afterSection only)", () => {
    assert.doesNotThrow(() =>
      BlogUpsertSchema.parse({ slug: "test-blog", rawHtml: "<h1>x</h1>", afterSection: 1 })
    );
  });

  it("rejects statRow with >6 cells", () => {
    const tooMany = { ...valid, statRow: Array(7).fill({ big: "5%", label: "x" }) };
    assert.throws(() => BlogUpsertSchema.parse(tooMany));
  });
});
