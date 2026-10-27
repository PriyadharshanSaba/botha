import { test } from "node:test";
import assert from "node:assert/strict";
import { HOME_COPY } from "./copy";

type Json = string | Json[] | { [key: string]: Json };

// Walks both trees together so a missing, extra or empty string in either language fails.
function assertSameShape(en: Json, kn: Json, path: string) {
  if (typeof en === "string") {
    assert.equal(typeof kn, "string", `${path} should be a string in kn`);
    return;
  }
  if (Array.isArray(en)) {
    assert.ok(Array.isArray(kn), `${path} should be an array in kn`);
    assert.equal((kn as Json[]).length, en.length, `${path} length differs`);
    en.forEach((item, i) => assertSameShape(item, (kn as Json[])[i], `${path}[${i}]`));
    return;
  }
  const knObj = kn as { [key: string]: Json };
  assert.deepEqual(Object.keys(knObj).sort(), Object.keys(en).sort(), `${path} keys differ`);
  for (const key of Object.keys(en)) assertSameShape(en[key], knObj[key], `${path}.${key}`);
}

test("Kannada home copy has exactly the same fields as English", () => {
  assertSameShape(HOME_COPY.en as unknown as Json, HOME_COPY.kn as unknown as Json, "copy");
});

test("every headline has a gold phrase and every label has text", () => {
  for (const lang of ["en", "kn"] as const) {
    const c = HOME_COPY[lang];
    const headlines = [
      ...c.hero.lines, c.registration.title, c.registration.sub, c.websites.title,
      c.cfo.title, c.program.title, c.tools.title, c.insights.title,
    ];
    for (const line of headlines) assert.ok(line.gold.trim(), `${lang}: headline "${line.pre}" has no gold phrase`);
    for (const label of [c.businessLabel, c.individualsLabel, c.trustedBy, c.talk.cta]) {
      assert.ok(label.trim(), `${lang}: empty label`);
    }
    assert.equal(c.registration.items.length, 4, `${lang}: registration list should be 2×2`);
  }
});
