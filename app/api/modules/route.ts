import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { getAuthenticatedUser } from "@/app/lib/auth";

// --------------------------------------
// GET → Fetch progress
// /api/modules        → last completed chapter
// /api/modules?all=1  → { [moduleId]: chapterNumber } for all modules
// --------------------------------------
export async function GET(req: NextRequest) {
  const user = await getAuthenticatedUser(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = user.id;

  if (req.nextUrl.searchParams.get("all") === "1") {
    const data = await db.getAllProgress(userId);
    return NextResponse.json(data);
  }

  const data = await db.getLastCompletedChapter(userId);
  return NextResponse.json(data);
}

// --------------------------------------
// POST → Save completed chapter
// Body: { moduleId, chapterNumber }
// --------------------------------------
export async function POST(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = user.id;

    const { moduleId, chapterNumber } = await req.json();

    if (!moduleId || chapterNumber === undefined) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Save progress in your user_progress table
    await db.markChapterViewed(userId, moduleId, chapterNumber);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("POST /api/modules error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
