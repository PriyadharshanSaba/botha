/**
 * Simple in-memory token bucket rate limiter for admin blog write endpoints.
 *
 * Per-user limit: BUCKET_SIZE tokens that refill at TOKEN_REFILL_PER_MIN per minute.
 * On each write, consume 1 token. Out of tokens → 429.
 *
 * Lifetime: module-level Map, reset on cold start. Acceptable because:
 *   - serverless cold-start cycles are short; persistent abuse hits multiple buckets
 *   - this protects against accidental double-clicks and runaway scripts, not DDoS
 *   - real DDoS protection lives at Vercel edge / WAF
 */

const BUCKET_SIZE = 10;             // max concurrent burst
const TOKEN_REFILL_PER_MIN = 10;    // sustained rate (10 writes/min)

type Bucket = {
  tokens: number;
  lastRefillMs: number;
};

const buckets = new Map<string, Bucket>();

export type RateLimitResult =
  | { ok: true; remaining: number }
  | { ok: false; retryAfterMs: number; remaining: 0 };

export function consumeToken(userId: string): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(userId);

  let bucket: Bucket;
  if (!existing) {
    bucket = { tokens: BUCKET_SIZE, lastRefillMs: now };
    buckets.set(userId, bucket);
  } else {
    bucket = existing;
    const elapsedMs = now - bucket.lastRefillMs;
    const refilled = (elapsedMs / 60_000) * TOKEN_REFILL_PER_MIN;
    if (refilled >= 1) {
      bucket.tokens = Math.min(BUCKET_SIZE, bucket.tokens + Math.floor(refilled));
      bucket.lastRefillMs = now;
    }
  }

  if (bucket.tokens < 1) {
    const msPerToken = 60_000 / TOKEN_REFILL_PER_MIN;
    const retryAfterMs = Math.max(1, Math.ceil(msPerToken - (now - bucket.lastRefillMs)));
    return { ok: false, retryAfterMs, remaining: 0 };
  }

  bucket.tokens -= 1;
  return { ok: true, remaining: bucket.tokens };
}

/** Test-only helper. Resets all buckets. */
export function _resetBucketsForTesting(): void {
  buckets.clear();
}
