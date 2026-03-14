import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const uid = request.cookies.get("uid")?.value;
  const loggedIn = Boolean(uid);

  const { pathname } = request.nextUrl;

  const publicPaths = ["/", "/signin", "/about", "/vcfo", "/venture", "/tools"];
  const authRedirectPaths = ["/", "/signin"];

  // Logged-out → only allow public paths
  if (!loggedIn && !publicPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  // Logged-in → redirect auth pages (not all public pages) to modules
  if (loggedIn && authRedirectPaths.includes(pathname)) {
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
