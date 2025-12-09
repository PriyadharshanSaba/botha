import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";

// --------------------------------------
// GET → Fetch last completed chapter
// /api/modules?moduleId=budgeting-101
// --------------------------------------
export async function GET(req: NextRequest) {
  const userId = req.cookies.get("uid")?.value;
  if (!userId) return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const data = await db.getLastCompletedChapter(userId);

  return NextResponse.json(data);
}

// --------------------------------------
// POST → Save completed chapter
// Body: { moduleId, chapterNumber }
// --------------------------------------
export async function POST(req: NextRequest) {
  try {
    const userId = req.cookies.get("uid")?.value;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

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
