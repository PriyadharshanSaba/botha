"use client";

import { useEffect, useState } from "react";
import ModuleCard from "./ModuleCard";
import { useLanguage } from "../context/LanguageContext";
import "./modules.css";

type Module = {
  id: number;
  moduleId: string;
  color: string;
  title: { en: string; kn: string };
  chaptersNum: number;
  description: { en: string; kn: string };
  view_module_link: string;
};

const modules: Module[] = [
  {
    id: 1,
    moduleId: "money-101",
    color: "#FFC107",
    title: { en: "Money 101", kn: "ಹಣ 101" },
    chaptersNum: 8,
    description: {
      en: "Long before coins and cards, people traded what they had for what they needed. Barter was useful, but flawed: what if the farmer didn't want fish that day?",
      kn: "ನಾಣ್ಯಗಳು ಮತ್ತು ಕಾರ್ಡ್‌ಗಳು ಬಂದುದಕ್ಕೂ ಮುಂಚೆ, ಜನರು ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದರು. ಆ ದಿನ ರೈತನಿಗೆ ಮೀನು ಬೇಕಾಗಿಲ್ಲದಿದ್ದರೆ?",
    },
    view_module_link: "/modules/money-101",
  },
  {
    id: 2,
    moduleId: "budgeting-101",
    color: "#1DB954",
    title: { en: "Budgeting 101", kn: "ಬಜೆಟ್ 101" },
    chaptersNum: 7,
    description: {
      en: "Budgeting isn't about saying no - it's about learning how to say yes to what truly matters. It's not restriction, it's direction - the skill that turns income into progress.",
      kn: "ಬಜೆಟ್ ರಚನೆ ಎಂದರೆ 'ಬೇಡ' ಎನ್ನುವುದಲ್ಲ - ನಿಜವಾಗಿ ಮುಖ್ಯವಾದುದಕ್ಕೆ 'ಹೌದು' ಎನ್ನುವ ಕಲೆ. ಆದಾಯವನ್ನು ಪ್ರಗತಿಯನ್ನಾಗಿ ಮಾಡುವ ಕೌಶಲ್ಯ.",
    },
    view_module_link: "/modules/budgeting-101",
  },
  {
    id: 3,
    moduleId: "stock-market",
    color: "#4A90E2",
    title: { en: "Introduction to Stock Market", kn: "ಷೇರು ಮಾರುಕಟ್ಟೆ 101" },
    chaptersNum: 8,
    description: {
      en: "Imagine your favourite coffee brand wants to open 500 new outlets. That kind of expansion needs money - to buy land, build stores, hire staff, and market the brand.",
      kn: "ನೀವು ಒಂದು ಷೇರು ಖರೀದಿಸಿದಾಗ, ಆ ಕಂಪನಿಯ ಸಹ-ಮಾಲೀಕರಾಗುತ್ತೀರಿ. ಷೇರು ಮಾರುಕಟ್ಟೆ ಕಂಪನಿಗಳ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಭಾಗವಹಿಸುವ ಅವಕಾಶ ನೀಡುತ್ತದೆ.",
    },
    view_module_link: "/modules/stock-market",
  },
  {
    id: 4,
    moduleId: "mutual-funds-101",
    color: "#FF6B6B",
    title: { en: "Mutual Funds 101", kn: "ಮ್ಯೂಚುವಲ್ ಫಂಡ್ 101" },
    chaptersNum: 5,
    description: {
      en: "You don't choose the investments - an expert does. Mutual funds bundle different assets together and give you instant diversification, professional management, and a stress-free path to long-term wealth.",
      kn: "ನೀವು ಹೂಡಿಕೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕಿಲ್ಲ - ತಜ್ಞರು ಮಾಡುತ್ತಾರೆ. ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ತಕ್ಷಣ ವೈವಿಧ್ಯೀಕರಣ ಮತ್ತು ವೃತ್ತಿಪರ ನಿರ್ವಹಣೆ ನೀಡುತ್ತವೆ.",
    },
    view_module_link: "/modules/mutual-funds-101",
  },
  {
    id: 5,
    moduleId: "choosing-the-right-fund",
    color: "#8E44AD",
    title: { en: "Choosing the Right Fund", kn: "ಸರಿಯಾದ ಫಂಡ್ ಆಯ್ಕೆ" },
    chaptersNum: 17,
    description: {
      en: "There are thousands of mutual funds. Not all are good. Learn the step-by-step framework - from goals to metrics - to choose the right fund with clarity and confidence.",
      kn: "ಸಾವಿರಾರು ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳಿವೆ. ಎಲ್ಲವೂ ಉತ್ತಮವಲ್ಲ. ಗುರಿಯಿಂದ ಆರಂಭಿಸಿ ಮೆಟ್ರಿಕ್ಸ್ ವರೆಗೆ - ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಸರಿಯಾದ ಫಂಡ್ ಆಯ್ಕೆ ಮಾಡಲು ಕಲಿಯಿರಿ.",
    },
    view_module_link: "/modules/choosing-the-right-fund",
  },
  {
    id: 6,
    moduleId: "fundamental-analysis",
    color: "#9B59B6",
    title: { en: "Fundamental Analysis", kn: "ಮೂಲ ವಿಶ್ಲೇಷಣೆ" },
    chaptersNum: 25,
    description: {
      en: "When you buy a stock, you are buying ownership in a business. Fundamental analysis evaluates that business - its profits, growth, competitive strengths and true value - to find great long-term investments.",
      kn: "ನೀವು ಷೇರು ಖರೀದಿಸುವಾಗ, ವ್ಯವಹಾರದಲ್ಲಿ ಮಾಲೀಕತ್ವ ಖರೀದಿಸುತ್ತೀರಿ. ಮೂಲ ವಿಶ್ಲೇಷಣೆ ಅದರ ಲಾಭ, ಬೆಳವಣಿಗೆ ಮತ್ತು ನಿಜ ಮೌಲ್ಯ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ.",
    },
    view_module_link: "/modules/fundamental-analysis",
  },
  {
    id: 7,
    moduleId: "technical-analysis",
    color: "#E67E22",
    title: { en: "Technical Analysis", kn: "ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ" },
    chaptersNum: 18,
    description: {
      en: "Charts are not magic - they are a structured way of reading price behavior. Learn trends, candlesticks, support & resistance, volume, and indicators to make better investment decisions.",
      kn: "ಚಾರ್ಟ್‌ಗಳು ಮ್ಯಾಜಿಕ್ ಅಲ್ಲ - ಅವು ಬೆಲೆ ನಡವಳಿಕೆ ಓದುವ ರಚನಾತ್ಮಕ ವಿಧಾನ. ಟ್ರೆಂಡ್, ಕ್ಯಾಂಡಲ್‌ಸ್ಟಿಕ್, ಸಪೋರ್ಟ್ ಮತ್ತು ಸಂಕೇತಕಗಳನ್ನು ಕಲಿಯಿರಿ.",
    },
    view_module_link: "/modules/technical-analysis",
  },
  {
    id: 8,
    moduleId: "portfolio-construction",
    color: "#2ECC71",
    title: { en: "Portfolio Construction & Personal Wealth", kn: "ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಾಣ" },
    chaptersNum: 12,
    description: {
      en: "Knowledge alone is not enough. This module shows you how to apply everything - building a structured, practical framework for managing your personal wealth through asset allocation and risk management.",
      kn: "ಜ್ಞಾನ ಮಾತ್ರ ಸಾಕಾಗೋದಿಲ್ಲ. ಈ ಮಾಡ್ಯೂಲ್ ಆಸ್ತಿ ಹಂಚಿಕೆ ಮತ್ತು ರಿಸ್ಕ್ ನಿರ್ವಹಣೆ ಮೂಲಕ ವೈಯಕ್ತಿಕ ಸಂಪತ್ತು ನಿರ್ವಹಿಸಲು ತೋರಿಸುತ್ತದೆ.",
    },
    view_module_link: "/modules/portfolio-construction",
  },
  {
    id: 9,
    moduleId: "taxation-for-investors",
    color: "#E74C3C",
    title: { en: "Taxation for Investors", kn: "ಹೂಡಿಕೆದಾರರಿಗೆ ತೆರಿಗೆ" },
    chaptersNum: 9,
    description: {
      en: "The return that ultimately matters is the one you keep after taxes. Understand how capital gains, dividends, and mutual fund income are taxed in India - and how smart planning helps you retain more.",
      kn: "ತೆರಿಗೆ ನಂತರ ನೀವು ಉಳಿಸಿಕೊಳ್ಳುವ ಲಾಭವೇ ನಿಜವಾದ ಲಾಭ. ಭಾರತದಲ್ಲಿ ಬಂಡವಾಳ ಲಾಭ ಮತ್ತು ಡಿವಿಡೆಂಡ್ ತೆರಿಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
    },
    view_module_link: "/modules/taxation-for-investors",
  },
  {
    id: 10,
    moduleId: "getting-started",
    color: "#16A085",
    title: { en: "Getting Started — Your First Investment Plan", kn: "ಪ್ರಾರಂಭಿಸಿ — ನಿಮ್ಮ ಮೊದಲ ಹೂಡಿಕೆ ಯೋಜನೆ" },
    chaptersNum: 10,
    description: {
      en: "You've learned the theory — now put it into action. Open your first accounts, build a simple portfolio, create a monthly plan, and develop the habits that turn knowledge into real wealth.",
      kn: "ನೀವು ಸಿದ್ಧಾಂತ ಕಲಿತಿದ್ದೀರಿ — ಈಗ ಅದನ್ನು ಕಾರ್ಯಗತ ಮಾಡಿ. ನಿಮ್ಮ ಮೊದಲ ಖಾತೆಗಳನ್ನು ತೆರೆಯಿರಿ, ಸರಳ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ನಿರ್ಮಿಸಿ, ಮಾಸಿಕ ಯೋಜನೆ ರಚಿಸಿ ಮತ್ತು ಜ್ಞಾನವನ್ನು ನಿಜವಾದ ಸಂಪತ್ತಾಗಿ ಪರಿವರ್ತಿಸುವ ಅಭ್ಯಾಸಗಳನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಿ.",
    },
    view_module_link: "/modules/getting-started",
  },
];

const FREE_PREVIEW_MODULE_IDS = new Set(["money-101"]);

type Props = { isSignedIn: boolean; isSubscribed: boolean };

export default function ModulesListClient({ isSignedIn, isSubscribed }: Props) {
  const { t, lang } = useLanguage();
  const [allProgress, setAllProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!isSignedIn) return;
    fetch("/api/modules?all=1", { cache: "no-store" })
      .then((r) => r.ok ? r.json() : {})
      .then((data) => setAllProgress(data))
      .catch(() => {});
  }, [isSignedIn]);

  const lockedHref = isSignedIn ? "/plans" : "/signup";

  return (
    <div className="modules-wrapper">
      <h1 className="modules-title">{t("courses")}</h1>
      <div className="divider" />

      <div className="modules-grid">
        {modules.map((m) => {
          const accessState: "full" | "preview" | "locked" = isSubscribed
            ? "full"
            : FREE_PREVIEW_MODULE_IDS.has(m.moduleId)
            ? "preview"
            : "locked";
          return (
            <ModuleCard
              key={m.id}
              id={m.id}
              moduleId={m.moduleId}
              color={m.color}
              title={m.title[lang]}
              chapters={`${m.chaptersNum} ${t("chapters")}`}
              chaptersNum={m.chaptersNum}
              description={m.description[lang]}
              view_module_link={accessState === "locked" ? lockedHref : m.view_module_link}
              progressChapter={allProgress[m.moduleId]}
              accessState={accessState}
            />
          );
        })}
      </div>
    </div>
  );
}
