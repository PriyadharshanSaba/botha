"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import SectionLink from "./SectionLink";
import HeaderPageLink from "./HeaderPageLink";

// Menu panel shown below 760px, where the centre links and account controls are hidden.
export default function HeaderMobileMenu({
  loggedIn,
  referralCode,
  onClose,
  onLogout,
}: {
  loggedIn: boolean;
  referralCode: string | null;
  onClose: () => void;
  onLogout: () => void;
}) {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav id="hm-mobile-menu" className="hm-mobile-menu" aria-label={t("mainNav")}>
      <SectionLink section="business" className="hm-mobile-link" onNavigate={onClose}>{t("forBusinesses")}</SectionLink>
      <SectionLink section="individuals" className="hm-mobile-link" onNavigate={onClose}>{t("forIndividuals")}</SectionLink>
      <HeaderPageLink href="/tools" className="hm-mobile-link" onClick={onClose}>{t("tools")}</HeaderPageLink>
      <HeaderPageLink href="/blogs" className="hm-mobile-link" onClick={onClose}>{t("insights")}</HeaderPageLink>
      <HeaderPageLink href="/about" className="hm-mobile-link" onClick={onClose}>{t("about")}</HeaderPageLink>
      <div className="hm-mobile-divider" />
      <button
        type="button"
        className="hm-mobile-link"
        lang={lang === "en" ? "kn" : "en"}
        onClick={() => { setLang(lang === "en" ? "kn" : "en"); onClose(); }}
      >
        {lang === "en" ? "ಕನ್ನಡ" : "English"}
      </button>
      {loggedIn ? (
        <>
          {referralCode && (
            <div className="hm-mobile-referral">
              {t("referralCode")}: <strong>{referralCode}</strong>
            </div>
          )}
          <Link href="/account" className="hm-mobile-link" onClick={onClose}>{t("account")}</Link>
          <button type="button" className="hm-mobile-link hm-mobile-logout" onClick={() => { onClose(); onLogout(); }}>
            {t("logout")}
          </button>
        </>
      ) : (
        <Link href="/signin" className="hm-mobile-link" onClick={onClose}>{t("logIn")}</Link>
      )}
    </nav>
  );
}
