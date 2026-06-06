import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  for (const name of ["uid", "admin"]) {
    response.cookies.set({
      name,
      value: "",
      maxAge: 0,
      path: "/",
    });
  }
  return response;
}
