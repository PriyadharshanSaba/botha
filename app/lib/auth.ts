import { db } from "@/app/lib/db";
import type { NextRequest } from "next/server";

/**
 * Validates the uid cookie against the database.
 * Returns the user if authenticated and verified, null otherwise.
 */
export async function getAuthenticatedUser(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) return null;
  const user = await db.getUserById(userId);
  if (!user || !user.verified) return null;
  return user;
}
