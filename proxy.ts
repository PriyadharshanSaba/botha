import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const uid = request.cookies.get("uid")?.value;
  const loggedIn = Boolean(uid);

  const { pathname } = request.nextUrl;

  const publicPaths = ["/", "/signin"];

  // Logged-out → only allow public paths
  if (!loggedIn && !publicPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  // Logged-in → redirect public paths to modules
  if (loggedIn && publicPaths.includes(pathname)) {
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
