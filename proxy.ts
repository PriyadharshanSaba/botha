import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const uid = request.cookies.get("uid")?.value;
  const subscribed = request.cookies.get("subscribed")?.value;
  const loggedIn = Boolean(uid);

  const { pathname } = request.nextUrl;

  const publicPaths = ["/", "/signin", "/about", "/vcfo", "/venture", "/tools", "/plans"];
  const authRedirectPaths = ["/", "/signin"];

  // Logged-out → only allow public paths
  if (!loggedIn && !publicPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  // Logged-in + subscribed → redirect auth pages to modules
  if (loggedIn && subscribed && authRedirectPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/modules";
    return NextResponse.redirect(url);
  }

  // Logged-in but not subscribed → redirect auth pages to plans
  if (loggedIn && !subscribed && authRedirectPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/plans";
    return NextResponse.redirect(url);
  }

  // Logged-in + subscribed → skip plans page
  if (loggedIn && subscribed && pathname === "/plans") {
    const url = request.nextUrl.clone();
    url.pathname = "/modules";
    return NextResponse.redirect(url);
  }

  // Accessing /modules without a subscription → send to plans
  if (loggedIn && !subscribed && pathname.startsWith("/modules")) {
    const url = request.nextUrl.clone();
    url.pathname = "/plans";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next|static|favicon.ico).*)"
  ],
};
