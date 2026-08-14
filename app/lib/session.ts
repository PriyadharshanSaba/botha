import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/app/lib/db";

export async function getSession() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) return null;
  const user = await db.getUserById(uid);
  if (!user?.verified) return null;
  const sub = await db.getUserSubscription(uid);
  return { user, sub };
}

export async function requireSession() {
  const s = await getSession();
  if (!s) redirect("/signin");
  return s;
}

export async function requireSubscription() {
  const s = await requireSession();
  if (!s.sub || s.sub.status !== "active") redirect("/plans");
  return s;
}

export const FREE_PREVIEW_CHAPTERS: Record<string, number> = {
  "money-101": 2,
};

export function isChapterAllowed(
  moduleId: string,
  chapterIndex: number,
  hasActiveSub: boolean,
): boolean {
  if (hasActiveSub) return true;
  const limit = FREE_PREVIEW_CHAPTERS[moduleId] ?? 0;
  return chapterIndex < limit;
}
