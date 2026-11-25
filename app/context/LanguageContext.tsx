"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "en" | "kn";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Header nav
  courses: { en: "Courses", kn: "ಕೋರ್ಸ್‌ಗಳು" },
  virtualCfo: { en: "Virtual CFO", kn: "ವರ್ಚುವಲ್ CFO" },
  ventureCapital: { en: "Venture Capital", kn: "ವೆಂಚರ್ ಕ್ಯಾಪಿಟಲ್" },
  tools: { en: "Tools", kn: "ಉಪಕರಣಗಳು" },
  insights: { en: "Blogs", kn: "ಬ್ಲಾಗ್‌ಗಳು" },
  aboutUs: { en: "About Us", kn: "ನಮ್ಮ ಬಗ್ಗೆ" },
  account: { en: "Account", kn: "ಖಾತೆ" },
  settings: { en: "Settings", kn: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು" },
  logout: { en: "Logout", kn: "ಲಾಗ್ ಔಟ್" },
  forBusinesses: { en: "For businesses", kn: "ವ್ಯವಹಾರಗಳಿಗೆ" },
  forIndividuals: { en: "For individuals", kn: "ವ್ಯಕ್ತಿಗಳಿಗೆ" },
  about: { en: "About", kn: "ನಮ್ಮ ಬಗ್ಗೆ" },
  logIn: { en: "Log in", kn: "ಲಾಗ್ ಇನ್" },
  talkToUs: { en: "Talk to us", kn: "ಮಾತನಾಡೋಣ" },
  homeLabel: { en: "Bodha Ventures home", kn: "ಬೋಧ ವೆಂಚರ್ಸ್ ಮುಖಪುಟ" },
  mainNav: { en: "Main", kn: "ಮುಖ್ಯ" },
  switchLanguage: { en: "Read in Kannada (ಕನ್ನಡ)", kn: "Read in English" },
  openMenu: { en: "Open menu", kn: "ಮೆನು ತೆರೆಯಿರಿ" },
  closeMenu: { en: "Close menu", kn: "ಮೆನು ಮುಚ್ಚಿ" },
  privacy: { en: "Privacy", kn: "ಗೌಪ್ಯತೆ" },
  terms: { en: "Terms", kn: "ನಿಯಮಗಳು" },
  footerNav: { en: "Footer", kn: "ಅಡಿಟಿಪ್ಪಣಿ" },

  // Module card
  viewModule: { en: "View module →", kn: "ಮಾಡ್ಯೂಲ್ ನೋಡಿ →" },
  chapters: { en: "chapters", kn: "ಅಧ್ಯಾಯಗಳು" },

  // Module detail
  previous: { en: "Previous", kn: "ಹಿಂದಿನ" },
  next: { en: "Next", kn: "ಮುಂದಿನ" },
  loadingProgress: { en: "Loading your progress…", kn: "ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ…" },

  // Referral
  referralCode: { en: "Referral code", kn: "ರೆಫರಲ್ ಕೋಡ್" },
  applyCode: { en: "Apply", kn: "ಅನ್ವಯಿಸಿ" },
  codeApplied: { en: "Code applied", kn: "ಕೋಡ್ ಅನ್ವಯಿಸಲಾಗಿದೆ" },
  invalidCode: { en: "Invalid code", kn: "ಅಮಾನ್ಯ ಕೋಡ್" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("bodha-lang") as Lang | null;
    if (saved === "kn") setLangState("kn");
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("bodha-lang", l);
  }

  function t(key: string): string {
    return translations[key]?.[lang] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
