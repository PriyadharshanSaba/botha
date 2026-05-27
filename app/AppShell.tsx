"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import AppFooter from "./components/AppFooter";
import CookieBanner from "./components/CookieBanner";
import { LanguageProvider } from "./context/LanguageContext";

export default function AppShell({
  children,
  initialLoggedIn,
}: {
  children: React.ReactNode;
  initialLoggedIn: boolean;
}) {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn);

  // middleware already handles protection!
  const showHeader = pathname !== "/signin";

  // These pages have their own inline footer
  const hasOwnFooter =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/vcfo" ||
    pathname === "/venture" ||
    pathname === "/tools" ||
    pathname === "/blogs" ||
    pathname.startsWith("/blogs/");
  const showAppFooter = showHeader && !hasOwnFooter;

  // Re-check auth on every route change — keeps Header in sync after
  // OTP login / payment without requiring a full page refresh.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/me", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setIsLoggedIn(data.loggedIn);
        if (data.needsConsent) {
          setShowBanner(true);
        } else if (!data.loggedIn) {
          // anonymous visitor — check if they've already answered via the anon cookie
          const hasAnonConsent = document.cookie.includes("bodha_anon_consent=");
          if (!hasAnonConsent) setShowBanner(true);
        }
      })
      .catch(() => {
        if (cancelled) return;
        // network error — show banner so user can consent anyway
        setShowBanner(true);
      });
    return () => { cancelled = true; };
  }, [pathname]);

  function handleConsentSaved() {
    setShowBanner(false);
  }

  return (
    <LanguageProvider>
      {showHeader && <Header loggedIn={isLoggedIn} onLoggedOut={() => setIsLoggedIn(false)} />}
      {children}
      {showAppFooter && <AppFooter />}
      {showBanner && (
        <CookieBanner
          isLoggedIn={isLoggedIn}
          onSave={handleConsentSaved}
          onSaveAnon={handleConsentSaved}
        />
      )}
    </LanguageProvider>
  );
}
