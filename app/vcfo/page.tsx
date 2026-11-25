"use client";

import "./vcfo-page.css";
import { useLanguage } from "../context/LanguageContext";
import BrandPage from "../components/ui/BrandPage";
import { VCFO_COPY } from "./copy";
import { VcfoHero, Included, HowItWorks } from "./components/VcfoSections";
import RequestForm from "./components/RequestForm";

export default function VcfoPage() {
  const { lang } = useLanguage();
  const c = VCFO_COPY[lang];

  return (
    <BrandPage className="vc-page">
      <VcfoHero c={c.hero} />
      <Included label={c.includedLabel} services={c.services} />
      <HowItWorks label={c.howLabel} steps={c.steps} />
      <RequestForm c={c.request} />
    </BrandPage>
  );
}
