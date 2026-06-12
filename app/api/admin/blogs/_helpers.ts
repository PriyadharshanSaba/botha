/**
 * Shared helpers for /api/admin/blogs/* route handlers.
 *
 * Auth: cookie-based admin auth via getAuthenticatedAdmin (uid + admin=1 +
 * email in ADMIN_EMAILS). All blog write endpoints additionally consume
 * a token from the per-user rate limiter.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ZodError, type ZodSchema } from "zod";
import { getAuthenticatedAdmin } from "@/app/lib/admin";
import { consumeToken } from "@/app/lib/blogs/rate-limit";
import type { User } from "@/app/lib/db/types";

export type AuthOk = { ok: true; user: User };
export type AuthFail = { ok: false; response: NextResponse };

export async function requireAdmin(req: NextRequest): Promise<AuthOk | AuthFail> {
  const user = await getAuthenticatedAdmin(req);
  if (!user) {
    return { ok: false, response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  return { ok: true, user };
}

export function requireRateLimit(userId: string): { ok: true } | { ok: false; response: NextResponse } {
  const r = consumeToken(userId);
  if (!r.ok) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Rate limit exceeded", retryAfterMs: r.retryAfterMs },
        { status: 429, headers: { "Retry-After": String(Math.ceil(r.retryAfterMs / 1000)) } }
      ),
    };
  }
  return { ok: true };
}

export async function parseJson<T>(
  req: NextRequest,
  schema: ZodSchema<T>
): Promise<{ ok: true; data: T } | { ok: false; response: NextResponse }> {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return { ok: false, response: NextResponse.json({ error: "Invalid JSON body" }, { status: 400 }) };
  }
  try {
    const data = schema.parse(raw);
    return { ok: true, data };
  } catch (err) {
    if (err instanceof ZodError) {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Validation failed", issues: err.issues.map((i) => ({ path: i.path, message: i.message })) },
          { status: 400 }
        ),
      };
    }
    throw err;
  }
}
