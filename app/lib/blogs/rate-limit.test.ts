import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { consumeToken, _resetBucketsForTesting } from "./rate-limit";

describe("consumeToken", () => {
  beforeEach(() => _resetBucketsForTesting());

  it("first call always succeeds", () => {
    const r = consumeToken("u1");
    assert.equal(r.ok, true);
  });

  it("allows up to BUCKET_SIZE (10) consecutive consumes", () => {
    for (let i = 0; i < 10; i++) {
      const r = consumeToken("u1");
      assert.equal(r.ok, true);
    }
    const r11 = consumeToken("u1");
    assert.equal(r11.ok, false);
    if (r11.ok === false) {
      assert.ok(r11.retryAfterMs > 0);
      assert.equal(r11.remaining, 0);
    }
  });

  it("buckets are per-user (u1 limit does not affect u2)", () => {
    for (let i = 0; i < 10; i++) consumeToken("u1");
    const u2 = consumeToken("u2");
    assert.equal(u2.ok, true);
  });

  it("returns Retry-After header value when limited", () => {
    for (let i = 0; i < 10; i++) consumeToken("u1");
    const r = consumeToken("u1");
    assert.equal(r.ok, false);
    if (r.ok === false) {
      // 10 tokens/min → ~6s/token; first refill should be < 7s
      assert.ok(r.retryAfterMs <= 7000);
    }
  });
});
