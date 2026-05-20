"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import AppFooter from "./components/AppFooter";
import CookieBanner from "./components/CookieBanner";
import { LanguageProvider } from "./context/LanguageContext";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // middleware already handles protection!
  const showHeader = pathname !== "/signin";

  useEffect(() => {
    fetch("/api/me")
      .then((r) => r.json())
      .then((data) => {
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
        // network error — show banner so user can consent anyway
        setShowBanner(true);
      });
  }, []);

  function handleConsentSaved() {
    setShowBanner(false);
  }

  return (
    <LanguageProvider>
      {showHeader && <Header />}
      {children}
      {showHeader && <AppFooter />}
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
