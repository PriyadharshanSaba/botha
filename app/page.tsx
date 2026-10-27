"use client";

import "./components/home/home.css";
import { useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import BrandPage from "./components/ui/BrandPage";
import SectionLabel from "./components/ui/SectionLabel";
import EnquiryDialog from "./components/forms/EnquiryDialog";
import type { EnquiryKind } from "./components/forms/enquiryForms";
import { HOME_COPY } from "./components/home/copy";
import Hero from "./components/home/Hero";
import RegistrationBanner from "./components/home/RegistrationBanner";
import WebsitesBanner from "./components/home/WebsitesBanner";
import CfoBanner from "./components/home/CfoBanner";
import ProgramBanner from "./components/home/ProgramBanner";
import ToolsBanner from "./components/home/ToolsBanner";
import InsightsBanner from "./components/home/InsightsBanner";
import TrustedBy from "./components/home/TrustedBy";
import FinalCta from "./components/home/FinalCta";

export default function HomePage() {
  const { lang } = useLanguage();
  const c = HOME_COPY[lang];
  const [enquiry, setEnquiry] = useState<EnquiryKind | null>(null);

  return (
    <BrandPage className="hm-page">
      <Hero c={c.hero} />
      <div className="hm-banners">
        <SectionLabel id="business">{c.businessLabel}</SectionLabel>
        <RegistrationBanner c={c.registration} learnMore={c.learnMore} onStart={() => setEnquiry("registration")} />
        <WebsitesBanner c={c.websites} learnMore={c.learnMore} onStart={() => setEnquiry("website")} />
        <CfoBanner c={c.cfo} learnMore={c.learnMore} onStart={() => setEnquiry("vcfo")} />
        <SectionLabel id="individuals">{c.individualsLabel}</SectionLabel>
        <ProgramBanner c={c.program} />
        <ToolsBanner c={c.tools} />
        <InsightsBanner c={c.insights} />
      </div>
      <TrustedBy label={c.trustedBy} />
      <FinalCta c={c.talk} />
      {enquiry && <EnquiryDialog key={enquiry} kind={enquiry} onClose={() => setEnquiry(null)} />}
    </BrandPage>
  );
}
