/**
 * Gated download for the 5-Bucket Cash Framework PDF.
 *
 * Auth: verified `uid` cookie → known user. Anon requests get 401.
 * PDF lives outside /public so the file cannot be fetched directly.
 */

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import { db } from "@/app/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PDF_PATH = path.join(
  process.cwd(),
  "private",
  "guide",
  "5-bucket-cash-framework.pdf",
);
const DOWNLOAD_NAME = "5-Bucket-Cash-Framework.pdf";

export async function GET() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  const user = uid ? await db.getUserById(uid) : null;
  if (!user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const file = await fs.readFile(PDF_PATH);
  const body = new Uint8Array(file);
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": String(body.byteLength),
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
