import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const validUsers = [
    { email: "priyadharshan.97@gmail.com", password: "password123" },
    { email: "amogh036@gmail.com", password: "password123" }, 
    { email: "1@1", password: "1" }
  ];

  const isValid = validUsers.some(
    (u) => u.email === email && u.password === password
  );

  if (!isValid) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }

  // Set secure, httpOnly cookie
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "logged_in",
    value: "1",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });

  return response;
}
