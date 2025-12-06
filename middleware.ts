import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const loggedIn = request.cookies.get("logged_in")?.value === "1";

  const { pathname } = request.nextUrl;

  // Logged-out → only allow "/"
  if (!loggedIn && pathname !== "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Logged-in → prevent access to "/"
  if (loggedIn && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/modules";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
     "/((?!api|_next|static|favicon.ico).*)"
  ],
};
