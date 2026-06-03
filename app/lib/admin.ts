import { db } from "@/app/lib/db";
import type { NextRequest } from "next/server";

const ADMIN_EMAILS: Set<string> = new Set(
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
);

export function getAdminEmails(): Set<string> {
  return ADMIN_EMAILS;
}

export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.has(email.trim().toLowerCase());
}

/**
 * Validates the uid cookie AND that the user's email is in ADMIN_EMAILS.
 * Returns the user if authenticated as admin, null otherwise.
 */
export async function getAuthenticatedAdmin(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  const adminFlag = req.cookies.get("admin")?.value;
  if (!userId || adminFlag !== "1") return null;
  const user = await db.getUserById(userId);
  if (!user || !user.verified) return null;
  if (!isAdminEmail(user.email)) return null;
  return user;
}
