import { test } from "node:test";
import assert from "node:assert/strict";
import { ventureRedirects, VENTURE_PATH } from "./features";

test("ventureRedirects sends /venture home with a temporary redirect when disabled", () => {
  assert.deepEqual(ventureRedirects(false), [
    { source: `${VENTURE_PATH}/:path*`, destination: "/", permanent: false },
  ]);
});

test("ventureRedirects adds nothing when Venture is enabled", () => {
  assert.deepEqual(ventureRedirects(true), []);
});
