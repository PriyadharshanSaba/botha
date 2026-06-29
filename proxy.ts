import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // CSRF: reject cross-origin mutations
  if (request.method !== "GET" && request.method !== "HEAD") {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && host) {
      try {
        const originHost = new URL(origin).host;
        if (originHost !== host) {
          return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }
      } catch {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }
  }

  const uid = request.cookies.get("uid")?.value;
  const subscribed = request.cookies.get("subscribed")?.value;
  const adminFlag = request.cookies.get("admin")?.value;
  const loggedIn = Boolean(uid);

  const { pathname } = request.nextUrl;

  // Admin gate: /admin/* and /api/admin/* require uid + admin=1.
  // Allow the login page itself + its auth APIs through.
  const isAdminAuthPath =
    pathname === "/admin/login" ||
    pathname.startsWith("/api/admin/login") ||
    pathname.startsWith("/api/admin/verify-otp") ||
    pathname.startsWith("/api/admin/logout");

  if (
    (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) &&
    !isAdminAuthPath
  ) {
    if (!uid || adminFlag !== "1") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    // Authenticated admin — short-circuit so user-facing rules below don't fire.
    return NextResponse.next();
  }

  // Short-circuit admin login + admin auth APIs so the user-facing rules below
  // don't redirect them (e.g. logged-out → /signin).
  if (isAdminAuthPath) {
    return NextResponse.next();
  }

  const publicPaths = ["/", "/signin", "/waitlist", "/about", "/vcfo", "/venture", "/tools", "/plans", "/modules"];
  const publicPrefixes = ["/blogs", "/modules/money-101"];
  const authRedirectPaths = ["/signin"];

  // Logged-out → only allow public paths
  if (
    !loggedIn &&
    !publicPaths.includes(pathname) &&
    !publicPrefixes.some((p) => pathname.startsWith(p))
  ) {
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

  // Accessing gated /modules/* without a subscription → send to plans.
  // Exempt: /modules (list page) and /modules/money-101/* (chapter-gated free preview).
  if (
    loggedIn &&
    !subscribed &&
    pathname.startsWith("/modules") &&
    pathname !== "/modules" &&
    !pathname.startsWith("/modules/money-101")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/plans";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next|static|favicon\\.ico)(?!.*\\.[a-zA-Z0-9]{1,5}$).*)",
    "/api/admin/:path*",
  ],
};
