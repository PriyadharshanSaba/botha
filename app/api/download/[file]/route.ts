import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import path from "path";
import fs from "fs/promises";

const ALLOWED: Record<string, { filename: string; contentType: string }> = {
  "mutual-fund-tool": {
    filename: "Mutual Fund Comparing Tool.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  "stock-valuation": {
    filename: "Indian Stock Valuation Dashboard.xlsx",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;

  // Validate file slug — no path traversal
  const asset = ALLOWED[file];
  if (!asset) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Auth: must be logged in
  const uid = req.cookies.get("uid")?.value;
  if (!uid) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  // Subscription check
  const [user, sub] = await Promise.all([
    db.getUserById(uid),
    db.getUserSubscription(uid),
  ]);

  if (!user?.verified || sub?.status !== "active") {
    return NextResponse.json({ error: "Subscription required" }, { status: 403 });
  }

  // Serve file
  const filePath = path.join(process.cwd(), "private-assets", `${file}.xlsx`);
  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": asset.contentType,
        "Content-Disposition": `attachment; filename="${asset.filename}"`,
        "Content-Length": buffer.byteLength.toString(),
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
