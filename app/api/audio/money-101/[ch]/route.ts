import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { db } from "@/app/lib/db";
import { isChapterAllowed } from "@/app/lib/session";

const MODULE_ID = "money-101";
const TOTAL_CHAPTERS = 8;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ ch: string }> },
) {
  const { ch } = await params;
  const chapterIndex = Number(ch) - 1;

  if (!Number.isInteger(chapterIndex) || chapterIndex < 0 || chapterIndex >= TOTAL_CHAPTERS) {
    return NextResponse.json({ error: "Invalid chapter" }, { status: 400 });
  }

  const uid = req.cookies.get("uid")?.value;
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.getUserById(uid);
  if (!user?.verified) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const sub = await db.getUserSubscription(uid);
  const hasActiveSub = sub?.status === "active";

  if (!isChapterAllowed(MODULE_ID, chapterIndex, hasActiveSub)) {
    return NextResponse.json({ error: "Subscription required" }, { status: 403 });
  }

  const filePath = path.join(process.cwd(), "private", MODULE_ID, "audio", `ch${ch}.mp3`);

  let stat: { size: number };
  try {
    stat = await fs.stat(filePath);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const range = req.headers.get("range");
  if (range) {
    const match = /^bytes=(\d+)-(\d*)$/.exec(range);
    if (!match) {
      return new NextResponse(null, { status: 416, headers: { "Content-Range": `bytes */${stat.size}` } });
    }
    const start = Number(match[1]);
    const end = match[2] ? Number(match[2]) : stat.size - 1;
    if (start >= stat.size || end >= stat.size || start > end) {
      return new NextResponse(null, { status: 416, headers: { "Content-Range": `bytes */${stat.size}` } });
    }
    const chunkSize = end - start + 1;
    const fh = await fs.open(filePath, "r");
    const buffer = Buffer.alloc(chunkSize);
    await fh.read(buffer, 0, chunkSize, start);
    await fh.close();
    return new NextResponse(buffer as unknown as BodyInit, {
      status: 206,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": String(chunkSize),
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": "private, no-store",
      },
    });
  }

  const data = await fs.readFile(filePath);
  return new NextResponse(data as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(stat.size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, no-store",
    },
  });
}
