"use client";

import "./about-page.css";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import BrandPage from "../components/ui/BrandPage";
import { ABOUT_COPY } from "./copy";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import WhatWeDo from "./components/WhatWeDo";
import Team from "./components/Team";
import Values from "./components/Values";
import AboutCta from "./components/AboutCta";
import ContactModal from "./components/ContactModal";

export default function AboutPage() {
  const { lang } = useLanguage();
  const c = ABOUT_COPY[lang];
  const [showContact, setShowContact] = useState(false);
  const [contactDone, setContactDone] = useState(false);

  return (
    <BrandPage className="ab-page">
      <AboutHero c={c.hero} />
      <OurStory c={c.story} />
      <WhatWeDo c={c} />
      <Team c={c.team} />
      <Values label={c.valuesLabel} values={c.values} />
      <AboutCta c={c.cta} onContact={() => { setShowContact(true); setContactDone(false); }} />
      <ContactModal
        open={showContact}
        done={contactDone}
        onDone={() => setContactDone(true)}
        onClose={() => setShowContact(false)}
      />
    </BrandPage>
  );
}
