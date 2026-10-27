"use client";

import "./ui.css";
import type { ReactNode } from "react";
import { inter } from "@/app/fonts";
import { useLanguage } from "@/app/context/LanguageContext";
import SiteFooter from "./SiteFooter";

// Page frame for the redesigned pages: Inter, brand tokens, language attribute and the dark footer.
export default function BrandPage({ className, children }: { className: string; children: ReactNode }) {
  const { lang } = useLanguage();
  return (
    <div className={`ui-page ${className} ${inter.className}`} lang={lang}>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
