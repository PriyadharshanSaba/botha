"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { clearAllNetworthKeys } from "@/app/lib/networth/cache";
import { inter } from "@/app/fonts";
import { GlobeIcon, MenuIcon, CloseIcon } from "./LineIcons";
import SectionLink from "./SectionLink";
import HeaderPageLink from "./HeaderPageLink";
import HeaderAccountMenu from "./HeaderAccountMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import "./header.css";

export default function Header({
  loggedIn,
  onLoggedOut,
}: {
  loggedIn: boolean;
  onLoggedOut?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  useEffect(() => {
    if (!loggedIn) return;
    let cancelled = false;
    fetch("/api/me", { credentials: "include" })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (cancelled || !data?.loggedIn) return;
        setReferralCode(data.canRefer ? data.referralCode ?? null : null);
      })
      .catch(() => { /* non-fatal */ });
    return () => { cancelled = true; };
  }, [loggedIn]);

  // Close the mobile menu whenever the route changes.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    try { clearAllNetworthKeys(); } catch { /* localStorage unavailable */ }
    onLoggedOut?.();
    router.push("/");
    router.refresh(); // re-read uid cookie absence in RSC
  }

  const otherLang = lang === "en" ? "kn" : "en";
  const shownReferral = loggedIn ? referralCode : null;

  return (
    <header className={`hm-header ${inter.className}`}>
      <nav aria-label={t("mainNav")} className="hm-navbar">
        <Link href="/" aria-label={t("homeLabel")} className="hm-logo">
          <Image src="/landing/bodha-logo.png" alt="Bodha Ventures" width={421} height={151} priority />
        </Link>

        <div className="hm-navlinks">
          <SectionLink section="business" className="hm-navpill">{t("forBusinesses")}</SectionLink>
          <SectionLink section="individuals" className="hm-navpill">{t("forIndividuals")}</SectionLink>
          <HeaderPageLink href="/tools" className="hm-navpill">{t("tools")}</HeaderPageLink>
          <HeaderPageLink href="/blogs" className="hm-navpill">{t("insights")}</HeaderPageLink>
          <HeaderPageLink href="/about" className="hm-navpill">{t("about")}</HeaderPageLink>
        </div>

        <div className="hm-navright">
          <button
            type="button"
            className="hm-iconbtn hm-hide-sm"
            aria-label={t("switchLanguage")}
            title={otherLang === "kn" ? "ಕನ್ನಡ" : "English"}
            onClick={() => setLang(otherLang)}
          >
            <GlobeIcon />
          </button>
          {loggedIn ? (
            <HeaderAccountMenu referralCode={shownReferral} onLogout={handleLogout} />
          ) : (
            <Link href="/signin" className="hm-textlink hm-hide-sm">{t("logIn")}</Link>
          )}
          <SectionLink section="talk" className="hm-talk">{t("talkToUs")}</SectionLink>
          <button
            type="button"
            className="hm-menu-btn"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="hm-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <HeaderMobileMenu
          loggedIn={loggedIn}
          referralCode={shownReferral}
          onClose={() => setMenuOpen(false)}
          onLogout={handleLogout}
        />
      )}
    </header>
  );
}
