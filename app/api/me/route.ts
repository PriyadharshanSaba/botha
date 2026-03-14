import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const uid = req.cookies.get("uid")?.value;
  return NextResponse.json({ loggedIn: Boolean(uid) });
}
