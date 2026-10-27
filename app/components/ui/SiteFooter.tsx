"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import TermsModal from "../TermsModal";
import PrivacyModal from "../PrivacyModal";
import SectionLink from "../SectionLink";

export default function SiteFooter() {
  const { t } = useLanguage();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="ui-footer">
      <div className="ui-footer-in">
        <Image src="/landing/bodha-logo-light.png" alt="Bodha Ventures" width={421} height={151} className="ui-footer-logo" />
        <nav className="ui-footer-links" aria-label={t("footerNav")}>
          <SectionLink section="business">{t("forBusinesses")}</SectionLink>
          <SectionLink section="individuals">{t("forIndividuals")}</SectionLink>
          <Link href="/about">{t("about")}</Link>
          <button type="button" onClick={() => setShowPrivacy(true)}>{t("privacy")}</button>
          <button type="button" onClick={() => setShowTerms(true)}>{t("terms")}</button>
        </nav>
        <span className="ui-footer-copy">&copy; {new Date().getFullYear()} Bodha Ventures</span>
      </div>
      {showTerms && <TermsModal viewOnly onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}
