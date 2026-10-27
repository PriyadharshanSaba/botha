import { test } from "node:test";
import assert from "node:assert/strict";
import { isHomeSection, scrollBehaviorFor, sectionHref } from "./sections";

test("sectionHref points at the section on the home page", () => {
  assert.equal(sectionHref("business"), "/#business");
  assert.equal(sectionHref("individuals"), "/#individuals");
  assert.equal(sectionHref("talk"), "/#talk");
});

test("isHomeSection accepts only known section ids", () => {
  assert.equal(isHomeSection("business"), true);
  assert.equal(isHomeSection("individuals"), true);
  assert.equal(isHomeSection("tools"), false);
  assert.equal(isHomeSection(""), false);
});

test("scrollBehaviorFor skips the animation when reduced motion is preferred", () => {
  assert.equal(scrollBehaviorFor(true), "auto");
  assert.equal(scrollBehaviorFor(false), "smooth");
});
