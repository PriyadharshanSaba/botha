import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "logged_in",
    value: "",
    path: "/",
    expires: new Date(0) // instantly expires
  });

  return response;
}
