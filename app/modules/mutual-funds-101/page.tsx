"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import "../modules.css";
import "../module-detail.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

// ─────────────────────────────────────────────────────────────────────────────
// Shared table styles
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

const tbl: React.CSSProperties = { width: "100%", borderCollapse: "collapse", margin: "16px 0", fontSize: "0.95em" };
const th: React.CSSProperties = { background: "#c9a84c", color: "#fdfcf9", padding: "10px 12px", textAlign: "left" };
const td: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid rgba(0,0,0,0.08)" };
const tdAlt: React.CSSProperties = { ...td, background: "rgba(201,168,76,0.06)" };

// ─────────────────────────────────────────────────────────────────────────────
// Chapter content — defined at module level to avoid Turbopack bugs.
// Each entry carries bilingual title + content (en / kn).
// Replace the placeholder JSX blocks with real content as each chapter is written.
// Pattern: lang === 'kn' ? <KannadaText /> : <EnglishText />
// ─────────────────────────────────────────────────────────────────────────────

const chapters: {
  title: { en: string; kn: string };
  content: { en: React.ReactNode; kn: React.ReactNode };
}[] = [
  // ── Chapter 1 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 1: What Is a Mutual Fund?",
      kn: "ಅಧ್ಯಾಯ 1: ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಎಂದರೇನು?",
    },
    content: {
      en: (
        <>
          <p>
            Imagine you&apos;re at a market. You see a basket, not filled with fruits, but with
            something far more valuable for your financial future.
          </p>
          <p>
            Inside this basket, instead of apples or mangoes, you find{" "}
            <strong>shares of companies</strong>, <strong>government bonds</strong>,{" "}
            <strong>corporate debt</strong>, <strong>gold</strong>, or even a{" "}
            <strong>mix of all three</strong>.
          </p>
          <p>
            And this basket is a <strong>mutual fund</strong>.
          </p>

          <h3>The Core Idea:</h3>
          <p>
            A mutual fund is simply a collection of different investments bundled together. Instead
            of buying one stock or one bond, you own small pieces of many, instantly reducing your
            risk and increasing stability.
          </p>
          <p>
            But here&apos;s where the real magic begins:{" "}
            <strong>You don&apos;t choose the investments, an expert does.</strong>
          </p>
          <p>
            A <strong>professional fund manager</strong> studies markets, analyses data, tracks
            performance, and decides what to buy or sell. Their full-time job is to make the basket
            grow, so you don&apos;t have to do all the hard work yourself.
          </p>
          <p>You invest in the basket → the fund manager takes care of the rest.</p>
          <p>
            By buying one mutual fund unit, you automatically own{" "}
            <strong>tiny fractions of everything inside</strong>.
          </p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image1.png"
              alt="A basket labelled Mutual Fund containing shares, bonds, and other assets"
              className="mx-auto max-w-xs w-full"
            />
          </div>

          <h3>Why This Matters for You</h3>
          <p>
            Many beginners feel overwhelmed by the stock market. They fear picking the wrong stock,
            losing money, or not knowing enough.
          </p>
          <p>Mutual funds solve that problem beautifully.</p>

          <h3>1. Lower Risk Compared to Single Stocks</h3>
          <p>
            When you buy one stock, your entire return depends on that one company. If it does
            well, great. If it doesn&apos;t, your money takes the hit.
          </p>
          <p>
            But in a mutual fund, even if one company underperforms, others in the basket can
            balance it out.
          </p>

          <h3>2. Instant Diversification</h3>
          <p>
            Diversification, spreading your money across different assets, is one of the strongest
            shields in investing. Mutual funds give you diversification on day one, even with a
            small amount of money.
          </p>

          <h3>3. Professional Management</h3>
          <p>
            Most people don&apos;t have the time to track markets daily. A fund manager, supported
            by research analysts, does this full-time. You get expert decision-making without having
            to become an expert yourself.
          </p>

          <h3>4. Stress-Free Wealth Building</h3>
          <p>
            You don&apos;t need to be a stock picker. You don&apos;t need to time the market. You
            don&apos;t need advanced knowledge.
          </p>
          <p>The system is designed for simplicity and long-term growth.</p>

          <h3>So, Why Do Mutual Funds Matter So Much?</h3>
          <p>Because they make investing accessible.</p>
          <p>They make wealth creation possible even for someone who:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>is a student</li>
            <li>just started earning</li>
            <li>doesn&apos;t have much time</li>
            <li>doesn&apos;t know where to begin</li>
            <li>wants guidance without complexity</li>
          </ul>
          <p>
            Mutual funds bridge the gap between <strong>wanting to invest</strong> and{" "}
            <strong>knowing how to invest</strong>.
          </p>
        </>
      ),
      kn: (
        <>
          <p>
            ನೀವು ಒಂದು ಸಂತೆಯಲ್ಲಿ ನಿಂತಿದ್ದೀರಿ ಎಂದು ಊಹಿಸಿಕೊಳ್ಳಿ. ಅಲ್ಲಿ ನಿಮ್ಮ ದೃಷ್ಟಿಗೆ ಒಂದು ಬುಟ್ಟಿ ಬೀಳುತ್ತದೆ — ಹಣ್ಣು-ಹಂಪಲುಗಳಿಂದ ತುಂಬಿದ ಬುಟ್ಟಿಯಲ್ಲ, ಬದಲಿಗೆ ನಿಮ್ಮ ಆರ್ಥಿಕ ಭವಿಷ್ಯಕ್ಕೆ ಅತ್ಯಂತ ಮೌಲ್ಯಯುತವಾದ ಏನನ್ನೋ ಹೊಂದಿರುವ ಬುಟ್ಟಿ.
          </p>
          <p>
            ಆ ಬುಟ್ಟಿಯ ಒಳಗೆ ಸೇಬು ಅಥವಾ ಮಾವಿನ ಹಣ್ಣುಗಳ ಬದಲು ನೀವು ಕಾಣುವುದೇನೆಂದರೆ — ಕಂಪನಿಗಳ ಷೇರುಗಳು, ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳು, ಕಾರ್ಪೊರೇಟ್ ಸಾಲ ಪತ್ರಗಳು, ಚಿನ್ನ, ಅಥವಾ ಇವೆಲ್ಲದರ ಮಿಶ್ರಣ. ಇವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ಒಂದು ವಿಭಿನ್ನ ಬಗೆಯ ಹೂಡಿಕೆಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ — ತನ್ನದೇ ಆದ ನಡವಳಿಕೆ, ಅಪಾಯದ ಮಟ್ಟ, ಮತ್ತು ಲಾಭದ ಸಾಮರ್ಥ್ಯತೆಯೊಂದಿಗೆ.
          </p>
          <p>ಆ ಬುಟ್ಟಿಯೇ — ಒಂದು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್.</p>

          <h3>ಮೂಲ ಆಶಯ:</h3>
          <p>
            ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಎಂದರೆ ಸರಳವಾಗಿ ವಿವರಿಸುವುದಾದರೆ — ಬೇರೆ ಬೇರೆ ಹೂಡಿಕೆಗಳ ಒಟ್ಟು ಸಂಗ್ರಹ. ಒಂದೇ ಒಂದು ಷೇರು ಅಥವಾ ಒಂದೇ ಒಂದು ಬಾಂಡ್ ಖರೀದಿಸುವ ಬದಲು, ನೀವು ಅನೇಕ ಹೂಡಿಕೆಗಳಲ್ಲಿ ಒಂದೊಂದು ಸಣ್ಣ ಪಾಲನ್ನು ಹೊಂದುತ್ತೀರಿ — ಇದರಿಂದ ನಿಮ್ಮ ನಷ್ಟದ ಅಪಾಯವನ್ನು ತಂತಾನೇ ಕಡಿಮೆಯಾಗುತ್ತದೆ, ಮತ್ತು ಸ್ಥಿರತೆ ಹೆಚ್ಚಾಗುತ್ತದೆ.
          </p>
          <p>
            ಆದರೆ ನಿಜವಾದ ಮಂತ್ರಿ ಕಥೆ ಇಲ್ಲಿಂದಲೇ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ: ಯಾವ ಹೂಡಿಕೆ ಮಾಡಬೇಕೆಂಬ ನಿರ್ಧಾರವನ್ನು ನೀವು ತೆಗೆದುಕೊಳ್ಳಬೇಕಿಲ್ಲ — ಅದನ್ನು ಒಬ್ಬ ತಜ್ಞರು ಮಾಡುತ್ತಾರೆ.
          </p>
          <p>
            ಒಬ್ಬ ವೃತ್ತಿಪರ ಫಂಡ್ ವ್ಯವಸ್ಥಾಪಕರು ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡುತ್ತಾರೆ, ದತ್ತಾಂಶವನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತಾರೆ, ಕಾರ್ಯಕ್ಷಮತೆಯಜಡನ್ನು ಗಮನಿಸುತ್ತಾರೆ, ಮತ್ತು ಏನನ್ನು ಕೊಳ್ಳಬೇಕು ಅಥವಾ ಮಾರಬೇಕು ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುತ್ತಾರೆ. ಆ ಬುಟ್ಟಿಯನ್ನು ಬೆಳೆಸುವುದೇ ಅವರ ಪೂರ್ಣಾವಧಿ ಕೆಲಸ — ಆ ಕಷ್ಟದ ಹೊರೆಯನ್ನು ನೀವು ಹೊರಬೇಕಾಗಿಲ್ಲ.
          </p>
          <p>ನೀವು ಬುಟ್ಟಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ → ಉಳಿದದ್ದನ್ನು ಫಂಡ್ ವ್ಯವಸ್ಥಾಪಕರು ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ.</p>
          <p>ಒಂದು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಘಟಕವನ್ನು ಖರೀದಿಸುವ ಮೂಲಕ ಯಾಂತ್ರಿಕವಾಗಿ, ಆ ಬುಟ್ಟಿಯ ಒಳಗಿರುವ ಎಲ್ಲದರಲ್ಲೂ ನಿಮ್ಮ ಒಂದು ಚಿಕ್ಕ ಪಾಲನ್ನು ಹೊಂದುತಿರಿ.</p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image1.png"
              alt="A basket labelled Mutual Fund containing shares, bonds, and other assets"
              className="mx-auto max-w-xs w-full"
            />
          </div>

          <h3>ಇದು ನಿಮಗೆ ಏಕೆ ಮುಖ್ಯ?</h3>
          <p>
            ಹಲವು ಆರಂಭಿಕ ಹೂಡಿಕೆದಾರರಿಗೆ ಷೇರು ಮಾರುಕಟ್ಟೆ ಎಂದರೆ ದಿಕ್ಕೆ ತೋಚದಂತಹ ಅನುಭವ. ತಪ್ಪು ಷೇರು ಆರಿಸಿದರೆ ಏನಾಗುವುದೋ, ಹಣ ಕಳೆದುಕೊಂಡರೆ ಏನು ಮಾಡುವುದು, ಅಥವಾ ತಮಗೆ ಸಾಕಷ್ಟು ತಿಳಿವಳಿಕೆ ಇಲ್ಲ ಎಂಬ ಭಯ ಅವರನ್ನು ಕಾಡುತ್ತಿರುತ್ತದೆ.
          </p>
          <p>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ಈ ಸಮಸ್ಯೆಯನ್ನು ಬಹಳ ಸೊಗಸಾಗಿ ಪರಿಹರಿಸುತ್ತವೆ.</p>

          <h3>೧. ಏಕ ಷೇರಿಗಿಂತ ಕಡಿಮೆ ಅಪಾಯ</h3>
          <p>
            ನೀವು ಒಂದೇ ಒಂದು ಷೇರು ಖರೀದಿಸಿದರೆ, ನಿಮ್ಮ ಇಡೀ ಲಾಭ-ನಷ್ಟ ಆ ಒಂದೇ ಕಂಪನಿಯ ಭವಿಷ್ಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಕಂಪನಿ ಚೆನ್ನಾಗಿ ನಡೆದರೆ ಸಂತೋಷ, ಇಲ್ಲವಾದರೆ ನಿಮ್ಮ ಹಣಕ್ಕೆ ಹೊಡೆತ ಬೀಳುತ್ತದೆ.
          </p>
          <p>
            ಆದರೆ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ನಲ್ಲಿ, ಒಂದು ಕಂಪನಿ ನಿರೀಕ್ಷಿತ ಮಟ್ಟದಲ್ಲಿ ಸಾಧನೆ ಮಾಡದಿದ್ದರೂ, ಬುಟ್ಟಿಯಲ್ಲಿರುವ ಇತರ ಹೂಡಿಕೆಗಳು ಆ ಕೊರತೆಯನ್ನು ಸಮತೂಗಿಸಬಲ್ಲವು.
          </p>

          <h3>೨. ತಕ್ಷಣದ ವೈವಿಧ್ಯೀಕರಣ</h3>
          <p>
            ವೈವಿಧ್ಯೀಕರಣ ಎಂದರೆ ನಿಮ್ಮ ಹಣವನ್ನು ಬೇರೆ ಬೇರೆ ಸ್ವತ್ತುಗಳಲ್ಲಿ ಹರಡುವುದು — ಹೂಡಿಕೆಯ ಜಗತ್ತಿನಲ್ಲಿ ಇದು ಅತ್ಯಂತ ಬಲಶಾಲಿಯಾದ ರಕ್ಷಾಕವಚಗಳಲ್ಲಿ ಒಂದು. ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ನಿಮಗೆ ಮೊದಲ ದಿನದಿಂದಲೇ ಈ ವೈವಿಧ್ಯೀಕರಣವನ್ನು ನೀಡುತ್ತವೆ — ಹೂಡಿಕೆಯ ಮೊತ್ತ ಎಷ್ಟೇ ಚಿಕ್ಕದಿದ್ದರೂಸಹ.
          </p>

          <h3>೩. ವೃತ್ತಿಪರ ನಿರ್ವಹಣೆ</h3>
          <p>
            ಬಹಳಷ್ಟು ಜನರಿಗೆ ಪ್ರತಿದಿನ ಮಾರುಕಟ್ಟೆಯ ಮೇಲೆ ನಿಗಾ ಇಡಲು ಸಮಯವಿರುವುದಿಲ್ಲ. ಸಂಶೋಧನಾ ವಿಶ್ಲೇಷಕರ ತಂಡದ ಬೆಂಬಲದೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಫಂಡ್ ವ್ಯವಸ್ಥಾಪಕರು ಇದನ್ನೇ ಪೂರ್ಣಾವಧಿ ಕೆಲಸವಾಗಿ ಮಾಡುತ್ತಾರೆ. ನೀವು ತಜ್ಞರಾಗದೆಯೇ ತಜ್ಞರ ನಿರ್ಧಾರದ ಫಲ ಪಡೆಯಬಹುದು.
          </p>

          <h3>೪. ಒತ್ತಡ ಮುಕ್ತ ಸಂಪತ್ತು ನಿರ್ಮಾಣ</h3>
          <p>ನೀವು ಷೇರನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಅಗತ್ಯ ವಿಲ್ಲ. ಮಾರುಕಟ್ಟೆಯ ಸರಿಯಾದ ಕ್ಷಣವನ್ನು ಹಿಡಿಯಬೇಕಿಲ್ಲ. ಆಳವಾದ ಜ್ಞಾನ ಹೊಂದಿರಬೇಕಿಲ್ಲ.</p>
          <p>ಈ ವ್ಯವಸ್ಥೆಯನ್ನೇ ಸರಳತೆ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಬೆಳವಣಿಗೆಗಾಗಿ ರೂಪಿಸಲಾಗಿದೆ.</p>

          <h3>ಹಾಗಾದರೆ, ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಿಗೆ ಇಷ್ಟೊಂದು ಮಹತ್ವದ್ದು ಏಕೆ?</h3>
          <p>ಏಕೆಂದರೆ ಅವು ಹೂಡಿಕೆಯನ್ನು ಎಲ್ಲರ ಕೈಗೆ ಎಟಕುವಂತೆ ಮಾಡುತ್ತವೆ.</p>
          <p>ಈ ಕೆಳಗಿನ ಯಾರಿಗಾದರೂ ಸಂಪತ್ತು ನಿರ್ಮಾಣ ಸಾಧ್ಯ ಎನ್ನುವುದನ್ನು ಅವು ತೋರಿಸುತ್ತವೆ:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ವಿದ್ಯಾರ್ಥಿಯಾಗಿರುವವರು</li>
            <li>ಈಗ ಅಷ್ಟೆ ದುಡಿಮೆ ಆರಂಭಿಸಿದವರು</li>
            <li>ಹೆಚ್ಚು ಸಮಯದ ಅಭಾವವಿರುವವರು</li>
            <li>ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸಬೇಕೆಂದು ತಿಳಿಯದವರು</li>
            <li>ಜಟಿಲತೆಯಿಲ್ಲದ ಮಾರ್ಗದರ್ಶನ ಬಯಸುವವರು</li>
          </ul>
          <p>
            ಹೂಡಿಕೆ ಮಾಡಬೇಕೆಂಬ ಆಸೆ ಮತ್ತು ಹೇಗೆ ಹೂಡಿಕೆ ಮಾಡಬೇಕೆಂಬ ಜ್ಞಾನ — ಈ ಎರಡರ ನಡುವಿನ ಅಂತರವನ್ನು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ತುಂಬುತ್ತವೆ.
          </p>
        </>
      ),
    },
  },

  // ── Chapter 2 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 2: Why Mutual Funds Matter (Even More Than Stocks for Beginners)",
      kn: "ಅಧ್ಯಾಯ 2: ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ಏಕೆ ಮುಖ್ಯ?",
    },
    content: {
      en: (
        <>
          <p>
            For most people, mutual funds are the <strong>right first step</strong> because they
            solve the biggest problems beginners face:
          </p>

          <p><strong>✔ Risk management</strong></p>
          <p>Your money is spread across 30–100 companies.</p>

          <p><strong>✔ No need for market expertise</strong></p>
          <p>You don&apos;t have to track the market every day.</p>

          <p><strong>✔ Start with very small amounts</strong></p>
          <p>Even ₹100 via SIP is enough.</p>

          <p><strong>✔ Better discipline</strong></p>
          <p>SIPs automate your investing habit, one of the strongest drivers of wealth creation.</p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image3.png"
              alt="An investor shaking hands with a professional fund manager"
              className="mx-auto max-w-xs w-full"
            />
          </div>
        </>
      ),
      kn: (
        <>
          <p>
            ಬಹುತೇಕ ಜನರಿಗೆ, ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳೇ ಸರಿಯಾದ ಮೊದಲ ಹೆಜ್ಜೆ — ಏಕೆಂದರೆ ಅವು ಆರಂಭಿಕರು ಎದುರಿಸುವ ಅತಿ ದೊಡ್ಡ ತೊಂದರೆಗಳನ್ನು ಪರಿಹರಿಸುತ್ತವೆ:
          </p>
          <p><strong>✔ ಅಪಾಯ ನಿರ್ವಹಣೆ</strong></p>
          <p>ನಿಮ್ಮ ಹಣ ೩೦ರಿಂದ ೧೦೦ ಕಂಪನಿಗಳಲ್ಲಿ ಹರಡಿ ಹೋಗುತ್ತದೆ.</p>
          <p><strong>✔ ಮಾರುಕಟ್ಟೆ ಪರಿಣಿತಿ ಅಗತ್ಯವಿಲ್ಲ</strong></p>
          <p>ಪ್ರತಿದಿನ ಮಾರುಕಟ್ಟೆಯನ್ನು ಗಮನಿಸುತ್ತ ಕುಳಿತುಕೊಳ್ಳಬೇಕಾಗಿಲ್ಲ.</p>
          <p><strong>✔ ಅತ್ಯಂತ ಕಡಿಮೆ ಮೊತ್ತದಿಂದ ಆರಂಭಿಸಬಹುದು</strong></p>
          <p>SIP ಮೂಲಕ ಕೇವಲ ₹೧೦೦ ಸಾಕು.</p>
          <p><strong>✔ ಉತ್ತಮ ಶಿಸ್ತು</strong></p>
          <p>SIP ನಿಮ್ಮ ಹೂಡಿಕೆಯ ಅಭ್ಯಾಸವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾಡುತ್ತದೆ — ಇದು ಸಂಪತ್ತು ನಿರ್ಮಾಣದ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಚಾಲಕಗಳಲ್ಲಿ ಒಂದು.</p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image3.png"
              alt="An investor shaking hands with a professional fund manager"
              className="mx-auto max-w-xs w-full"
            />
          </div>
        </>
      ),
    },
  },

  // ── Chapter 3 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 3: The Different Types of Mutual Funds",
      kn: "ಅಧ್ಯಾಯ 3: ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳ ವಿವಿಧ ವಿಧಗಳು",
    },
    content: {
      en: (
        <>
          <p>
            Every mutual fund has one job: to grow your money in a way that matches{" "}
            <strong>your goals</strong>, <strong>your time frame</strong>, and{" "}
            <strong>your comfort with risk</strong>.
          </p>
          <p>But not all mutual funds behave the same way.</p>
          <p>
            Some grow fast but fluctuate sharply. Some grow slowly but stay stable. Some balance
            both growth and safety. Some track the market. Some follow a theme or sector.
          </p>
          <p>
            Think of mutual funds like different <strong>vehicles</strong>:
          </p>
          <ul className="pl-6 list-none space-y-1">
            <li>A sports car → fast but unstable (equity funds)</li>
            <li>A bus → slow but safe (debt funds)</li>
            <li>An SUV → balanced and dependable (hybrid funds)</li>
            <li>A train → follows a fixed track (index funds)</li>
          </ul>
          <p>Let&apos;s explore each one clearly.</p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image5.png"
              alt="Four vehicles representing mutual fund types: sports car (Equity), bus (Debt), SUV (Hybrid), train (Index)"
              className="mx-auto max-w-sm w-full"
            />
          </div>

          {/* ── 1. Equity Funds ── */}
          <h3>1. Equity Funds — For Long-Term Growth</h3>
          <p>
            These funds invest primarily in <strong>stocks</strong>. Because stocks fluctuate,
            equity funds can go up and down in the short term, but historically, they create the{" "}
            <strong>highest long-term wealth</strong>.
          </p>
          <p><strong>When should you choose equity funds?</strong></p>
          <ul className="pl-6 list-disc space-y-1">
            <li>If your goal is more than <strong>5 years</strong> away</li>
            <li>If you want strong long-term returns</li>
            <li>If you can handle some short-term volatility</li>
          </ul>

          <p><strong>Types of Equity Funds:</strong></p>

          <p><strong>a) Large-Cap Funds</strong></p>
          <p>
            Invest in India&apos;s top 100 biggest, most stable companies.{" "}
            <strong>Think:</strong> Reliance, TCS, HDFC Bank.
          </p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Lower risk than other equity types</li>
            <li>✔ Good for beginners</li>
            <li>✔ Consistent performance</li>
          </ul>

          <p><strong>b) Mid-Cap Funds</strong></p>
          <p>Invest in the next set of growing companies.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Higher growth potential</li>
            <li>✔ Moderate risk</li>
          </ul>

          <p><strong>c) Small-Cap Funds</strong></p>
          <p>Invest in young, fast-growing companies.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Highest potential returns</li>
            <li>✔ Highest volatility</li>
            <li>✔ Only for long-term investors (7+ years)</li>
          </ul>

          <p><strong>d) Multi-Cap / Flexi-Cap Funds</strong></p>
          <p>Mix of large, mid, and small caps.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Diversified</li>
            <li>✔ Great for beginners</li>
            <li>✔ Balanced risk-return</li>
          </ul>

          <p><strong>e) Sectoral / Thematic Funds</strong></p>
          <p>Focus on one industry like IT, Pharma, Banking, Energy.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ High risk (because all money is in one sector)</li>
            <li>✔ Only when you strongly believe in that sector</li>
          </ul>

          {/* ── 2. Debt Funds ── */}
          <h3>2. Debt Funds — For Stability and Predictability</h3>
          <p>If equity funds are like rollercoasters, debt funds are like smooth trains.</p>
          <p>Debt funds invest in:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Government bonds</li>
            <li>Corporate bonds</li>
            <li>Money market instruments</li>
          </ul>
          <p>
            They aim for <strong>steady but moderate returns</strong>, with much lower volatility.
          </p>
          <p><strong>Best for:</strong></p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Short-term goals (0–3 years)</li>
            <li>Emergency funds</li>
            <li>People who want stability</li>
          </ul>
          <p><strong>Types:</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li><strong>Liquid Funds</strong> → safest, for parking short-term money</li>
            <li><strong>Short Duration Funds</strong> → ideal for 1–3 years</li>
            <li><strong>Corporate Bond Funds</strong> → stable income from strong companies</li>
            <li><strong>Gilt Funds</strong> → only government bonds, very low credit risk</li>
          </ul>
          <p>
            Debt funds won&apos;t make you rich quickly, but they will{" "}
            <strong>protect your capital</strong>.
          </p>

          {/* ── 3. Hybrid Funds ── */}
          <h3>3. Hybrid Funds — The Best of Both Worlds</h3>
          <p>
            These funds invest in both <strong>equity (for growth)</strong> and{" "}
            <strong>debt (for stability)</strong>.
          </p>
          <p>Hybrid funds are perfect for someone who wants balance.</p>
          <p><strong>Types:</strong></p>

          <p><strong>a) Aggressive Hybrid Funds</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>~65–80% equity + rest in debt</li>
            <li>✔ More growth</li>
            <li>✔ Moderate risk</li>
          </ul>

          <p><strong>b) Balanced Hybrid Funds</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>50% equity + 50% debt</li>
            <li>✔ Ideal for medium-term goals</li>
          </ul>

          <p><strong>c) Conservative Hybrid Funds</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>Mostly debt + small equity portion</li>
            <li>✔ Safer, stable</li>
            <li>✔ Suited for low-risk investors</li>
          </ul>

          <p>Hybrid funds = stability + growth in one basket.</p>

          {/* ── 4. Index Funds ── */}
          <h3>4. Index Funds — Simple, Low-Cost, and Effective</h3>
          <p>
            Index funds don&apos;t try to &quot;beat&quot; the market. They simply{" "}
            <strong>copy</strong> a market index like:
          </p>
          <ul className="pl-6 list-disc space-y-1">
            <li>NIFTY 50</li>
            <li>Sensex</li>
            <li>NIFTY Next 50</li>
            <li>NIFTY Midcap 150</li>
          </ul>
          <p>This makes them:</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Low-cost</li>
            <li>✔ Transparent</li>
            <li>✔ Beginner-friendly</li>
            <li>✔ Excellent for long-term compounding</li>
          </ul>
          <p>
            Index funds are like taking a train that moves steadily with the market, no surprises,
            no trying to outsmart anyone.
          </p>

          {/* ── 5. ETFs ── */}
          <h3>5. ETFs — Exchange Traded Funds</h3>
          <p>ETFs are similar to index funds but are traded like stocks.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Lower cost</li>
            <li>✔ Good for long-term holding</li>
            <li>✔ Best for people comfortable with stock-market apps</li>
          </ul>
          <p>They can track:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Equity indices</li>
            <li>Gold</li>
            <li>Debt</li>
            <li>International markets</li>
          </ul>

          {/* ── 6. Gold & International Funds ── */}
          <h3>6. Gold Funds &amp; International Funds</h3>
          <p><strong>Gold Funds / Gold ETFs</strong></p>
          <p>Let you invest in gold without buying physical gold.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Protects against inflation</li>
            <li>✔ Good diversifier</li>
          </ul>

          <p><strong>International Funds</strong></p>
          <p>Invest in companies outside India — like Apple, Tesla, Google, Amazon.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Global exposure</li>
            <li>✔ Reduces country-specific risk</li>
            <li>✔ Long-term growth potential</li>
          </ul>

          {/* ── 7. Solution-Oriented Funds ── */}
          <h3>7. Solution-Oriented Funds</h3>
          <p>Created for specific life goals:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Retirement</li>
            <li>Children&apos;s education</li>
            <li>Long-term planning</li>
          </ul>
          <p>These funds often have longer mandatory lock-in periods.</p>

          {/* ── 8. Fund of Funds ── */}
          <h3>8. Fund of Funds (FoFs)</h3>
          <p>
            These funds invest in <strong>other mutual funds</strong> instead of directly in stocks
            or bonds.
          </p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ Simple</li>
            <li>✔ Globally diversified options</li>
            <li>✔ Good for beginners who want a ready-made portfolio</li>
          </ul>

          {/* ── Summary Table ── */}
          <h3>How to Think About Mutual Fund Types (Summary Table)</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={tbl}>
              <thead>
                <tr>
                  <th style={th}>Fund Type</th>
                  <th style={th}>Risk</th>
                  <th style={th}>Time Horizon</th>
                  <th style={th}>Ideal For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={td}>Equity Funds</td><td style={td}>High</td><td style={td}>5+ years</td><td style={td}>Long-term wealth</td></tr>
                <tr><td style={tdAlt}>Debt Funds</td><td style={tdAlt}>Low</td><td style={tdAlt}>0–3 years</td><td style={tdAlt}>Stability, safety</td></tr>
                <tr><td style={td}>Hybrid Funds</td><td style={td}>Moderate</td><td style={td}>3–5 years</td><td style={td}>Balanced goals</td></tr>
                <tr><td style={tdAlt}>Index Funds</td><td style={tdAlt}>Moderate</td><td style={tdAlt}>5+ years</td><td style={tdAlt}>Beginner friendly, low cost</td></tr>
                <tr><td style={td}>ETFs</td><td style={td}>Moderate</td><td style={td}>5+ years</td><td style={td}>Market-savvy investors</td></tr>
                <tr><td style={tdAlt}>Gold Funds</td><td style={tdAlt}>Low–Moderate</td><td style={tdAlt}>3+ years</td><td style={tdAlt}>Diversification</td></tr>
                <tr><td style={td}>International Funds</td><td style={td}>Moderate–High</td><td style={td}>5+ years</td><td style={td}>Global growth</td></tr>
                <tr><td style={tdAlt}>FoFs</td><td style={tdAlt}>Varies</td><td style={tdAlt}>3+ years</td><td style={tdAlt}>Convenience</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>In simple words:</strong></p>
          <p>
            There is a mutual fund for every person, every dream, every timeline, and every level
            of experience.
          </p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image2.png"
              alt="Different people at different life stages — student, young professional, middle-aged, retiree — each with their own financial goal"
              className="mx-auto max-w-sm w-full"
            />
          </div>
        </>
      ),
      kn: (
        <>
          <p>
            ಪ್ರತಿಯೊಂದು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ನ ಗುರಿ ಒಂದೇ: ನಿಮ್ಮ ಗುರಿ, ನಿಮ್ಮ ಸಮಯದ ಅವಧಿ, ಮತ್ತು ಅಪಾಯ ಸಹಿಸಿಕೊಳ್ಳುವ ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ನಿಮ್ಮ ಹಣವನ್ನು ಬೆಳೆಸುವುದು.
          </p>
          <p>ಆದರೆ ಎಲ್ಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳೂ ಒಂದೇ ರೀತಿ ವರ್ತಿಸುವುದಿಲ್ಲ.</p>
          <p>
            ಕೆಲವು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತವೆ, ಆದರೆ ತೀರ್ವವಾಗಿ ಏರಿಳಿಯುತ್ತವೆ. ಕೆಲವು ನಿಧಾನವಾಗಿ ಬೆಳೆಯುತ್ತವೆ, ಆದರೆ ಸ್ಥಿರವಾಗಿ ಉಳಿಯುತ್ತವೆ. ಕೆಲವು ಬೆಳವಣಿಗೆ ಮತ್ತು ಸುರಕ್ಷತೆ ಎರಡನ್ನೂ ಸಮತೋಲನದಲ್ಲಿ ಇಟ್ಟುಕೊಂಡಿರುತ್ತಾವೆ. ಕೆಲವು ಮಾರುಕಟ್ಟೆಯ ಹಾದಿಯನ್ನೇ ಅನುಸರಿಸುತ್ತವೆ. ಇನ್ನು ಕೆಲವು ಒಂದು ನಿರ್ದಿಷ್ಟ ವಿಷಯ ಅಥವಾ ಕ್ಷೇತ್ರವನ್ನು ಹಿಂಬಾಲಿಸುತ್ತಾವೆ.
          </p>
          <p>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳನ್ನು ಬೇರೆ ಬೇರೆ ವಾಹನಗಳಂತೆ ಯೋಚಿಸಿ:</p>
          <ul className="pl-6 list-none space-y-1">
            <li>ಸ್ಪೋರ್ಟ್ಸ್ ಕಾರು → ವೇಗವಾಗಿ ಸಾಗುತ್ತದೆ, ಆದರೆ ಅಸ್ಥಿರ (ಇಕ್ವಿಟಿ ಫಂಡ್‌ಗಳು)</li>
            <li>ಬಸ್ → ನಿಧಾನ, ಆದರೆ ಸುರಕ್ಷಿತ (ಡೆಟ್ ಫಂಡ್‌ಗಳು)</li>
            <li>SUV → ಸಮತೋಲಿತ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ (ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು)</li>
            <li>ರೈಲು → ನಿಗದಿತ ಹಳಿಯ ಮೇಲೆ ಸಾಗುತ್ತದೆ (ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು)</li>
          </ul>
          <p>ಇವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳೋಣ.</p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image5.png"
              alt="Four vehicles representing mutual fund types: sports car (Equity), bus (Debt), SUV (Hybrid), train (Index)"
              className="mx-auto max-w-sm w-full"
            />
          </div>

          <h3>೧. ಇಕ್ವಿಟಿ ಫಂಡ್‌ಗಳು — ದೀರ್ಘಕಾಲೀಕ ಬೆಳವಣಿಗೆಗಾಗಿ</h3>
          <p>
            ಈ ಫಂಡ್‌ಗಳು ಮುಖ್ಯವಾಗಿ ಷೇರುಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ. ಷೇರುಗಳ ಬೆಲೆ ಏರಿಳಿತಕ್ಕೆ ಒಳಗಾಗುವ ಕಾರಣ, ಇಕ್ವಿಟಿ ಫಂಡ್‌ಗಳು ಅಲ್ಪಾವಧಿಯಲ್ಲಿ ಮೇಲೆ-ಕೆಳಗೆ ಚಲಿಸಬಹುದು. ಆದಾಗ್ಯೂ, ಐತಿಹಾಸಿಕ ದಾಖಲೆಗಳ ಪ್ರಕಾರ, ದೀರ್ಘಕಾಲದಲ್ಲಿ ಅತ್ಯಧಿಕ ಸಂಪತ್ತು ನಿರ್ಮಿಸುತ್ತವೆ.
          </p>
          <p><strong>ಇಕ್ವಿಟಿ ಫಂಡ್ ಯಾವಾಗ ಆರಿಸಬೇಕು?</strong></p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ನಿಮ್ಮ ಗುರಿ ೫ ವರ್ಷಗಳಿಗಿಂತ ದೂರದಲ್ಲಿದ್ದರೆ</li>
            <li>ದೀರ್ಘಕಾಲ ಅವಧಿಯಲ್ಲಿ ಉತ್ತಮ ಆದಾಯ ಬಯಸುತ್ತಿದ್ದರೆ</li>
            <li>ಅಲ್ಪಾವಧಿಯ ಏರಿಳಿತವನ್ನು ತಾಳ್ಮೆಯಿಂದ ನಿರ್ವಹಿಸಬಲ್ಲಿರಾದರೆ</li>
          </ul>
          <p><strong>ಇಕ್ವಿಟಿ ಫಂಡ್‌ಗಳ ವಿಧಗಳು:</strong></p>
          <p><strong>ಅ) ಲಾರ್ಜ್-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong></p>
          <p>ಭಾರತದ ಅತಿ ದೊಡ್ಡ ಮತ್ತು ಅತ್ಯಂತ ಸ್ಥಿರವಾದ ಮೊದಲ ೧೦೦ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ. ಉದಾಹರಣೆಗೆ: Reliance, TCS, HDFC Bank.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಇತರ ಇಕ್ವಿಟಿ ವಿಧಗಳಿಗೆ ಹೋಲಿಸಿದರೆ ಕಡಿಮೆ ಅಪಾಯ</li>
            <li>✔ ಹೊಸ ಹೂಡಿಕೆದಾರರಿಗೆ ಸೂಕ್ತ</li>
            <li>✔ ಸ್ಥಿರವಾದ ಸಾಧನೆ</li>
          </ul>
          <p><strong>ಆ) ಮಿಡ್-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong></p>
          <p>ಬೆಳೆಯುತ್ತಿರುವ ಮುಂದಿನ ಹಂತದ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಹೆಚ್ಚಿನ ಬೆಳವಣಿಗೆಯ ಸಾಧ್ಯತೆ</li>
            <li>✔ ಮಧ್ಯಮ ಅಪಾಯ</li>
          </ul>
          <p><strong>ಇ) ಸ್ಮಾಲ್-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong></p>
          <p>ಚಿಕ್ಕ, ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಅತ್ಯಧಿಕ ಆದಾಯದ ಸಾಧ್ಯತೆ</li>
            <li>✔ ಅತ್ಯಧಿಕ ಏರಿಳಿತ</li>
            <li>✔ ದೀರ್ಘಕಾಲೀಕ ಹೂಡಿಕೆದಾರರಿಗೆ ಮಾತ್ರ (೭+ ವರ್ಷಗಳು)</li>
          </ul>
          <p><strong>ಈ) ಮಲ್ಟಿ-ಕ್ಯಾಪ್ / ಫ್ಲೆಕ್ಸಿ-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong></p>
          <p>ಲಾರ್ಜ್, ಮಿಡ್ ಮತ್ತು ಸ್ಮಾಲ್ ಕ್ಯಾಪ್‌ಗಳ ಮಿಶ್ರಣ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ವೈವಿಧ್ಯೀಕೃತ</li>
            <li>✔ ಆರಂಭಿಕರಿಗೆ ಅತ್ಯುತ್ತಮ</li>
            <li>✔ ಸಮತೋಲಿತ ಅಪಾಯ-ಆದಾಯ</li>
          </ul>
          <p><strong>ಉ) ಸೆಕ್ಟೋರಲ್ / ಥಿಮ್ಯಾಟಿಕ್ ಫಂಡ್‌ಗಳು</strong></p>
          <p>IT, ಔಷಧ, ಬ್ಯಾಂಕಿಂಗ್, ಇಂಧನದಂತಹ ಒಂದೇ ಒಂದು ಉದ್ಯಮ ಕ್ಷೇತ್ರದ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತವೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಹೆಚ್ಚಿನ ಅಪಾಯ (ಎಲ್ಲ ಹಣವೂ ಒಂದೇ ಕ್ಷೇತ್ರದಲ್ಲಿರುವ ಕಾರಣ)</li>
            <li>✔ ಆ ಕ್ಷೇತ್ರದ ಬಗ್ಗೆ ದೃಢ ನಂಬಿಕೆ ಇದ್ದಾಗ ಮಾತ್ರ ಆರಿಸಬೇಕು</li>
          </ul>

          <h3>೨. ಡೆಟ್ ಫಂಡ್‌ಗಳು — ಸ್ಥಿರತೆ ಮತ್ತು ಖಚಿತತೆಗಾಗಿ</h3>
          <p>ಇಕ್ವಿಟಿ ಫಂಡ್‌ಗಳು ರೋಲರ್‌ಕೋಸ್ಟರ್‌ನಂತಿದ್ದರೆ, ಡೆಟ್ ಫಂಡ್‌ಗಳು ನಯವಾಗಿ ಸಾಗುವ ರೈಲಿನಂತಿವೆ.</p>
          <p>ಡೆಟ್ ಫಂಡ್‌ಗಳು ಹೂಡಿಕೆ ಮಾಡುವುದು:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>ಕಾರ್ಪೊರೇಟ್ ಬಾಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>ಹಣದ ಮಾರುಕಟ್ಟೆ ಸಾಧನಗಳಲ್ಲಿ</li>
          </ul>
          <p>ಇವು ಕಡಿಮೆ ಏರಿಳಿತದೊಂದಿಗೆ ಸ್ಥಿರ ಆದರೆ ಮಧ್ಯಮ ಆದಾಯವನ್ನು ಗುರಿಯಾಗಿಟ್ಟುಕೊಳ್ಳುತ್ತವೆ.</p>
          <p><strong>ಯಾರಿಗೆ ಸೂಕ್ತ:</strong></p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಅಲ್ಪಾವಧಿ ಗುರಿಗಳಿಗೆ (೦–೩ ವರ್ಷ)</li>
            <li>ತುರ್ತು ನಿಧಿಗಾಗಿ</li>
            <li>ಸ್ಥಿರತೆ ಬಯಸುವವರಿಗೆ</li>
          </ul>
          <p><strong>ವಿಧಗಳು:</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li><strong>ಲಿಕ್ವಿಡ್ ಫಂಡ್‌ಗಳು</strong> → ಅತ್ಯಂತ ಸುರಕ್ಷಿತ, ಅಲ್ಪಾವಧಿ ಹಣ ಇರಿಸಲು ಸೂಕ್ತ</li>
            <li><strong>ಅಲ್ಪಾವಧಿ ಫಂಡ್‌ಗಳು</strong> → ೧–೩ ವರ್ಷಗಳಿಗೆ ಸೂಕ್ತ</li>
            <li><strong>ಕಾರ್ಪೊರೇಟ್ ಬಾಂಡ್ ಫಂಡ್‌ಗಳು</strong> → ಬಲಿಷ್ಠ ಕಂಪನಿಗಳಿಂದ ಸ್ಥಿರ ಆದಾಯ</li>
            <li><strong>ಗಿಲ್ಟ್ ಫಂಡ್‌ಗಳು</strong> → ಕೇವಲ ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳು, ಅತ್ಯಂತ ಕಡಿಮೆ ಸಾಲ ಅಪಾಯ</li>
          </ul>
          <p>ಡೆಟ್ ಫಂಡ್‌ಗಳು ನಿಮ್ಮನ್ನು ತ್ವರಿತವಾಗಿ ಶ್ರೀಮಂತರನ್ನಾಗಿ ಮಾಡದಿರಬಹುದು, ಆದರೆ ನಿಮ್ಮ ಬಂಡವಾಳವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಕಾಪಾಡುತ್ತವೆ.</p>

          <h3>೩. ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು — ಎರಡರ ಅತ್ಯುತ್ತಮ ಗುಣಗಳು</h3>
          <p>
            ಈ ಫಂಡ್‌ಗಳು ಇಕ್ವಿಟಿ (ಬೆಳವಣಿಗೆಗಾಗಿ) ಮತ್ತು ಡೆಟ್ (ಸ್ಥಿರತೆಗಾಗಿ) ಎರಡರಲ್ಲೂ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ. ಸಮತೋಲನ ಬಯಸುವವರಿಗೆ ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು ಅತ್ಯಂತ ಸೂಕ್ತ.
          </p>
          <p><strong>ವಿಧಗಳು:</strong></p>
          <p><strong>ಅ) ಅಗ್ರೆಸಿವ್ ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>~೬೫–೮೦% ಇಕ್ವಿಟಿ + ಉಳಿದದ್ದು ಡೆಟ್</li>
            <li>✔ ಹೆಚ್ಚಿನ ಬೆಳವಣಿಗೆ</li>
            <li>✔ ಮಧ್ಯಮ ಅಪಾಯ</li>
          </ul>
          <p><strong>ಆ) ಬ್ಯಾಲೆನ್ಸ್ಡ್ ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>೫೦% ಇಕ್ವಿಟಿ + ೫೦% ಡೆಟ್</li>
            <li>✔ ಮಧ್ಯಮಾವಧಿ ಗುರಿಗಳಿಗೆ ಸೂಕ್ತ</li>
          </ul>
          <p><strong>ಇ) ಕನ್ಸರ್ವೇಟಿವ್ ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>ಹೆಚ್ಚಾಗಿ ಡೆಟ್ + ಸ್ವಲ್ಪ ಇಕ್ವಿಟಿ</li>
            <li>✔ ಹೆಚ್ಚು ಸುರಕ್ಷಿತ, ಸ್ಥಿರ</li>
            <li>✔ ಕಡಿಮೆ ಅಪಾಯ ಬಯಸುವ ಹೂಡಿಕೆದಾರರಿಗೆ ಸೂಕ್ತ</li>
          </ul>
          <p>ಹೈಬ್ರಿಡ್ ಫಂಡ್ = ಸ್ಥಿರತೆ + ಬೆಳವಣಿಗೆ, ಒಂದೇ ಬುಟ್ಟಿಯಲ್ಲಿ.</p>

          <h3>೪. ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು — ಸರಳ, ಕಡಿಮೆ ವೆಚ್ಚದ, ಪರಿಣಾಮಕಾರಿ ಆಯ್ಕೆ</h3>
          <p>ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು ಮಾರುಕಟ್ಟೆಯನ್ನು &quot;ಮೀರಿಸಲು&quot; ಪ್ರಯತ್ನಿಸುವುದಿಲ್ಲ. ಅವು ಕೇವಲ ಒಂದು ಮಾರುಕಟ್ಟೆ ಸೂಚ್ಯಂಕವನ್ನು ಅನುಸರಿಸುತ್ತವೆ:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>NIFTY 50</li>
            <li>Sensex</li>
            <li>NIFTY Next 50</li>
            <li>NIFTY Midcap 150</li>
          </ul>
          <p>ಇದರಿಂದ ಅವು:</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಕಡಿಮೆ ವೆಚ್ಚದ್ದಾಗಿರುತ್ತವೆ</li>
            <li>✔ ಪಾರದರ್ಶಕವಾಗಿರುತ್ತವೆ</li>
            <li>✔ ಆರಂಭಿಕರಿಗೆ ಸ್ನೇಹಿ</li>
            <li>✔ ದೀರ್ಘಕಾಲೀನ ಚಕ್ರಬಡ್ಡಿ ಬೆಳವಣಿಗೆಗೆ ಅತ್ಯುತ್ತಮ</li>
          </ul>
          <p>ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು ಮಾರುಕಟ್ಟೆಯೊಂದಿಗೆ ಸ್ಥಿರವಾಗಿ ಸಾಗುವ ರೈಲಿನಂತೆ — ಯಾವುದೇ ಆಶ್ಚರ್ಯವಿಲ್ಲ, ಯಾರನ್ನೂ ಮೀರಿಸುವ ಪ್ರಯತ್ನವಿಲ್ಲ.</p>

          <h3>೫. ETF ಗಳು — ಎಕ್ಸ್‌ಚೇಂಜ್ ಟ್ರೇಡೆಡ್ ಫಂಡ್‌ಗಳು</h3>
          <p>ETF ಗಳು ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳಂತೆಯೇ ಇದ್ದರೂ, ಷೇರುಗಳಂತೆ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ವಹಿವಾಟು ನಡೆಯುತ್ತವೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಕಡಿಮೆ ವೆಚ್ಚ</li>
            <li>✔ ದೀರ್ಘಕಾಲೀಕ ಹಿಡುವಳಿಗೆ ಸೂಕ್ತ</li>
            <li>✔ ಷೇರು ಮಾರುಕಟ್ಟೆ ಆಪ್‌ಗಳಲ್ಲಿ ಅನುಭವ ಇರುವವರಿಗೆ ಉತ್ತಮ</li>
          </ul>
          <p>ಇವು ಅನುಸರಿಸಬಲ್ಲವು:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಇಕ್ವಿಟಿ ಸೂಚ್ಯಂಕಗಳನ್ನು</li>
            <li>ಚಿನ್ನವನ್ನು</li>
            <li>ಡೆಟ್ ಅನ್ನು</li>
            <li>ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳನ್ನು</li>
          </ul>

          <h3>೬. ಗೋಲ್ಡ್ ಫಂಡ್‌ಗಳು ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್‌ಗಳು</h3>
          <p><strong>ಗೋಲ್ಡ್ ಫಂಡ್‌ಗಳು / ಗೋಲ್ಡ್ ETF ಗಳು</strong></p>
          <p>ಭೌತಿಕ ಚಿನ್ನ ಖರೀದಿಸದೆಯೇ ಚಿನ್ನದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತವೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಹಣದುಬ್ಬರದ ವಿರುದ್ಧ ರಕ್ಷಣೆ</li>
            <li>✔ ಉತ್ತಮ ವೈವಿಧ್ಯತೆಗೆ ಅನುವು ಗೊಳಿಸುತ್ತಾದೆ</li>
          </ul>
          <p><strong>ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್‌ಗಳು</strong></p>
          <p>Apple, Tesla, Google, Amazon ನಂತಹ ಭಾರತದ ಹೊರಗಿನ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಜಾಗತಿಕ ಮರುಕಟ್ಟೆಗೆ ತೆರೆದು ಕೊಳ್ಳುವ</li>
            <li>✔ ದೇಶ-ನಿರ್ದಿಷ್ಟ ಅಪಾಯ ಕಡಿಮೆಯಾಗುತ್ತದೆ</li>
            <li>✔ ದೀರ್ಘಕಾಲೀಕ ಬೆಳವಣಿಗೆಯ ಸಾಧ್ಯತೆ</li>
          </ul>

          <h3>೭. ಗುರಿ-ಆಧಾರಿತ ಫಂಡ್‌ಗಳು</h3>
          <p>ನಿರ್ದಿಷ್ಟ ಜೀವನ ಗುರಿಗಳಿಗಾಗಿ ರೂಪಿಸಲಾದ ಫಂಡ್‌ಗಳು:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ನಿವೃತ್ತಿ</li>
            <li>ಮಕ್ಕಳ ಶಿಕ್ಷಣ</li>
            <li>ದೀರ್ಘಕಾಲೀಕ ಯೋಜನೆ</li>
          </ul>
          <p>ಈ ಫಂಡ್‌ಗಳು ಸಾಮಾನ್ಯವಾಗಿ ದೀರ್ಘವಾದ ಕಡ್ಡಾಯ ಲಾಕ್-ಇನ್ ಅವಧಿಯನ್ನು ಹೊಂದಿರುತ್ತವೆ.</p>

          <h3>೮. ಫಂಡ್ ಆಫ್ ಫಂಡ್ಸ್ (FoF)</h3>
          <p>ಈ ಫಂಡ್‌ಗಳು ನೇರವಾಗಿ ಷೇರುಗಳು ಅಥವಾ ಬಾಂಡ್‌ಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡದೆ, ಬೇರೆ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>✔ ಸರಳ</li>
            <li>✔ ಜಾಗತಿಕ ವೈವಿಧ್ಯದ ಆಯ್ಕೆಗಳು</li>
            <li>✔ ಸಿದ್ಧ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಬಯಸುವ ಆರಂಭಿಕರಿಗೆ ಸೂಕ್ತ</li>
          </ul>

          <h3>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ವಿಧಗಳ ಸಾರಾಂಶ ಕೋಷ್ಟಕ</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={tbl}>
              <thead>
                <tr>
                  <th style={th}>ಫಂಡ್ ವಿಧ</th>
                  <th style={th}>ಅಪಾಯ</th>
                  <th style={th}>ಅವಧಿ</th>
                  <th style={th}>ಯಾರಿಗೆ ಸೂಕ್ತ</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={td}>ಇಕ್ವಿಟಿ ಫಂಡ್‌ಗಳು</td><td style={td}>ಹೆಚ್ಚು</td><td style={td}>೫+ ವರ್ಷ</td><td style={td}>ದೀರ್ಘಕಾಲೀಕ ಸಂಪತ್ತು</td></tr>
                <tr><td style={tdAlt}>ಡೆಟ್ ಫಂಡ್‌ಗಳು</td><td style={tdAlt}>ಕಡಿಮೆ</td><td style={tdAlt}>೦–೩ ವರ್ಷ</td><td style={tdAlt}>ಸ್ಥಿರತೆ, ಸುರಕ್ಷತೆ</td></tr>
                <tr><td style={td}>ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು</td><td style={td}>ಮಧ್ಯಮ</td><td style={td}>೩–೫ ವರ್ಷ</td><td style={td}>ಸಮತೋಲಿತ ಗುರಿಗಳು</td></tr>
                <tr><td style={tdAlt}>ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು</td><td style={tdAlt}>ಮಧ್ಯಮ</td><td style={tdAlt}>೫+ ವರ್ಷ</td><td style={tdAlt}>ಹೊಸ ಹೂಡಿಕೆದಾರರಿಗೆ</td></tr>
                <tr><td style={td}>ETF ಗಳು</td><td style={td}>ಮಧ್ಯಮ</td><td style={td}>೫+ ವರ್ಷ</td><td style={td}>ಮಾರುಕಟ್ಟೆ ಪ್ರವೀಣರು</td></tr>
                <tr><td style={tdAlt}>ಗೋಲ್ಡ್ ಫಂಡ್‌ಗಳು</td><td style={tdAlt}>ಕಡಿಮೆ–ಮಧ್ಯಮ</td><td style={tdAlt}>೩+ ವರ್ಷ</td><td style={tdAlt}>ವೈವಿಧ್ಯೀಕರಣ</td></tr>
                <tr><td style={td}>ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್‌ಗಳು</td><td style={td}>ಮಧ್ಯಮ–ಹೆಚ್ಚು</td><td style={td}>೫+ ವರ್ಷ</td><td style={td}>ಜಾಗತಿಕ ಬೆಳವಣಿಗೆ</td></tr>
                <tr><td style={tdAlt}>FoF ಗಳು</td><td style={tdAlt}>ಕಡಿಮೆ–ಹೆಚ್ಚು</td><td style={tdAlt}>೩+ ವರ್ಷ</td><td style={tdAlt}>ಅನುಕೂಲಕರ ಹೂಡಿಕೆ</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>ಸರಳ ಮಾತುಗಳಲ್ಲಿ ಹೇಳುವುದಾದರೆ:</strong></p>
          <p>
            ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಗೂ, ಪ್ರತಿ ಕನಸಿಗೂ, ಪ್ರತಿ ಅವಧಿಗೂ, ಮತ್ತು ಪ್ರತಿ ಅನುಭವದ ಮಟ್ಟಕ್ಕೂ ತಕ್ಕ ಒಂದು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಇದ್ದೇ ಇದೆ.
          </p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image2.png"
              alt="Different people at different life stages — student, young professional, middle-aged, retiree — each with their own financial goal"
              className="mx-auto max-w-sm w-full"
            />
          </div>
        </>
      ),
    },
  },

  // ── Chapter 4 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 4: What Are SIPs & Why Everyone Talks About Them?",
      kn: "ಅಧ್ಯಾಯ 4: SIP ಎಂದರೇನು ಮತ್ತು ಎಲ್ಲರೂ ಅದರ ಬಗ್ಗೆ ಏಕೆ ಮಾತನಾಡುತ್ತಾರೆ?",
    },
    content: {
      en: (
        <>
          <p>Before we understand SIPs, let&apos;s start with a simple idea:</p>
          <p>
            <strong>
              Most people don&apos;t fail at investing because they choose the wrong fund&hellip;
            </strong>
          </p>
          <p>They fail because they invest inconsistently.</p>
          <p>
            They invest when they feel confident. They stop when markets fall. They wait for
            &quot;the right moment&quot;, which usually never comes.
          </p>
          <p>SIPs solve this human problem beautifully.</p>

          {/* ── 1 ── */}
          <h3>1. So, What Exactly Is a SIP?</h3>
          <p>
            A <strong>SIP (Systematic Investment Plan)</strong> is a method of investing where you
            put in a fixed amount of money at regular intervals, usually monthly.
          </p>
          <p>Think of it like a subscription for your future.</p>
          <p>
            Just like you pay Netflix or your gym membership every month, with SIPs you pay{" "}
            <strong>yourself</strong> every month.
          </p>
          <ul className="pl-6 list-none space-y-1">
            <li>₹100</li>
            <li>₹500</li>
            <li>₹1,000</li>
            <li>₹5,000</li>
          </ul>
          <p>
            You choose the amount. You choose the date. Your money goes directly into a mutual fund
            automatically.
          </p>
          <p><strong>Consistency becomes effortless.</strong></p>

          {/* ── 2 ── */}
          <h3>2. SIPs Turn Small Money Into Big Wealth</h3>
          <p>You don&apos;t need a huge lump sum to start investing.</p>
          <p>
            Even ₹500 a month, when done consistently, grows into something powerful over time
            because of <strong>compounding</strong>, where your returns start earning returns.
          </p>
          <p>SIP is basically compounding + discipline + automation working together silently.</p>

          {/* ── 3 ── */}
          <h3>3. SIPs Protect You During Market Ups and Downs (Rupee-Cost Averaging)</h3>
          <p>Markets never move in straight lines. They rise, fall, rise again, fall again.</p>
          <p>If you try to time the market, you will almost always be wrong.</p>
          <p>But SIPs make volatility your friend through something called:</p>
          <p><strong>Rupee-Cost Averaging</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>When prices are high → your SIP buys fewer units.</li>
            <li>When prices are low → your SIP buys more units.</li>
          </ul>
          <p>Over time, this averages out your cost and reduces risk.</p>
          <p>
            You&apos;re not emotionally reacting to the market&hellip; You&apos;re mechanically
            accumulating wealth.
          </p>

          {/* ── 4 ── */}
          <h3>4. SIPs Build the Most Important Habit: Discipline</h3>
          <p>Let&apos;s be honest:</p>
          <p>
            Nobody becomes wealthy by investing once. People become wealthy by investing regularly.
          </p>
          <p>SIP forces consistency because:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>It runs automatically</li>
            <li>You don&apos;t have to remember dates</li>
            <li>You don&apos;t have to time the market</li>
            <li>You don&apos;t have to worry about short-term noise</li>
          </ul>
          <p>
            It&apos;s the financial equivalent of going to the gym regularly. Tiny efforts compound
            into massive change.
          </p>

          {/* ── 5 ── */}
          <h3>5. SIPs Reduce Emotional Investing</h3>
          <p>Investing triggers emotions:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Fear when markets fall</li>
            <li>Greed when markets rise</li>
            <li>Anxiety when there&apos;s bad news</li>
            <li>Overconfidence when there&apos;s good news</li>
          </ul>
          <p>
            These emotions make people buy high and sell low, the exact opposite of what creates
            wealth.
          </p>
          <p>SIPs remove emotion completely.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>You invest on the good days.</li>
            <li>You invest on the bad days.</li>
            <li>You invest on the boring days.</li>
            <li>You invest during market crashes too.</li>
          </ul>
          <p>Over time, your wealth grows&hellip; while your mind stays calm.</p>

          {/* ── 6 ── */}
          <h3>6. SIPs Fit Every Goal, Every Income, Every Investor</h3>
          <p>
            Whether you&apos;re a student, a young professional, a parent, or nearing retirement,
            there is a SIP for every need:
          </p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Saving for travel</li>
            <li>Building an emergency fund</li>
            <li>Buying a bike or car</li>
            <li>Saving for a house</li>
            <li>Retirement planning</li>
            <li>Children&apos;s education</li>
            <li>Long-term wealth creation</li>
          </ul>
          <p>
            Your income may change, but your SIP can change with it. You can increase, decrease,
            pause, or restart anytime.
          </p>

          {/* ── 7 ── */}
          <h3>7. SIP Is Not a Type of Mutual Fund — It&apos;s a Method</h3>
          <p>Many beginners mistakenly think SIP is a type of fund.</p>
          <p>It&apos;s not.</p>
          <p>You can start a SIP in:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Equity funds</li>
            <li>Debt funds</li>
            <li>Hybrid funds</li>
            <li>Index funds</li>
            <li>International funds</li>
            <li>Gold funds</li>
          </ul>
          <div className="pull-quote">
            SIP is just the <strong>fuel</strong>, the fund you choose is the{" "}
            <strong>vehicle</strong>.
          </div>

          {/* ── 8 ── */}
          <h3>8. SIPs Are the Easiest Way for Anyone to Start Investing</h3>
          <p>The best part?</p>
          <p>You don&apos;t need:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>Market knowledge</li>
            <li>Financial expertise</li>
            <li>Perfect timing</li>
            <li>Large capital</li>
            <li>Active monitoring</li>
          </ul>
          <p>SIPs are designed to make investing simple, steady, and stress-free.</p>
          <p>
            They help beginners behave like long-term investors, even if they don&apos;t understand
            every detail of the market.
          </p>

          <p><strong>In short: SIPs are not just a tool&hellip;</strong></p>
          <p>
            They are a powerful habit that transforms ordinary people into disciplined wealth
            builders.
          </p>
          <ul className="pl-6 list-none space-y-1">
            <li>They make volatility irrelevant.</li>
            <li>They make timing unnecessary.</li>
            <li>They make growth automatic.</li>
          </ul>
          <p>
            This is why everyone talks about SIPs, <strong>because SIPs work.</strong>
          </p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image6.png"
              alt="A person dropping a coin into a SIP pot, with a rising stack of coins showing wealth growing over time"
              className="mx-auto max-w-xs w-full"
            />
          </div>
        </>
      ),
      kn: (
        <>
          <p>SIP ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಮುನ್ನ, ಒಂದು ಸರಳ ಸತ್ಯವನ್ನು ಗಮನಿಸೋಣ:</p>
          <p>
            ಹೆಚ್ಚಿನ ಜನರು ಹೂಡಿಕೆಯಲ್ಲಿ ವಿಫಲವಾಗುವುದು ತಪ್ಪು ಫಂಡ್ ಆರಿಸಿದ ಕಾರಣದಿಂದಲ್ಲ... ಅವರು ನಿರಂತರವಾಗಿ ಹೂಡಿಕೆ ಮಾಡದೆ ಇರುವ ಕಾರಣದಿಂದ.
          </p>
          <p>
            ಆತ್ಮವಿಶ್ವಾಸವಿದ್ದಾಗ ಮಾತ್ರ ಹೂಡಿಕೆ ಮಾಡುತ್ತಾರೆ. ಮಾರುಕಟ್ಟೆ ಕುಸಿದಾಗ ನಿಲ್ಲಿಸಿಬಿಡುತ್ತಾರೆ. &quot;ಸರಿಯಾದ ಕ್ಷಣ&quot; ಬರಲಿ ಎಂದು ಕಾಯುತ್ತಾರೆ — ಅದು ಸಾಮಾನ್ಯವಾಗಿ ಎಂದಿಗೂ ಬರುವುದಿಲ್ಲ.
          </p>
          <p>SIP ಈ ಮಾನವ ಸ್ವಭಾವದ ಸಮಸ್ಯೆಯನ್ನು ಬಹಳ ಸೊಗಸಾಗಿ ಪರಿಹರಿಸುತ್ತದೆ.</p>

          <h3>೧. ಹಾಗಾದರೆ SIP ಎಂದರೆ ನಿಖರವಾಗಿ ಏನು?</h3>
          <p>
            SIP (Systematic Investment Plan) ಎಂದರೆ ನಿಗದಿತ ಸಮಯದ ಅಂತರಗಳಲ್ಲಿ — ಸಾಮಾನ್ಯವಾಗಿ ತಿಂಗಳಿಗೊಮ್ಮೆ — ನಿಗದಿತ ಮೊತ್ತವನ್ನು ಹೂಡಿಕೆ ಮಾಡುವ ಒಂದು ವಿಧಾನ.
          </p>
          <p>ಇದನ್ನು ನಿಮ್ಮ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಚಂದಾ ಕಟ್ಟಿದಂತೆ ಎಂದು ಯೋಚಿಸಿ.</p>
          <p>
            Netflix ಅಥವಾ ಜಿಮ್ ಸದಸ್ಯತ್ವಕ್ಕೆ ತಿಂಗಳಿಗೊಮ್ಮೆ ಹಣ ನೀಡುವಂತೆ, SIP ಮೂಲಕ ನೀವು ಪ್ರತಿ ತಿಂಗಳು ನಿಮಗೇ ನೀವು ಹಣ ನೀಡುತ್ತೀರಿ.
          </p>
          <ul className="pl-6 list-none space-y-1">
            <li>₹೧೦೦</li>
            <li>₹೫೦೦</li>
            <li>₹೧,೦೦೦</li>
            <li>₹೫,೦೦೦</li>
          </ul>
          <p>
            ಮೊತ್ತ ನೀವು ನಿರ್ಧರಿಸುತ್ತೀರಿ. ದಿನಾಂಕ ನೀವು ಆರಿಸುತ್ತೀರಿ. ಹಣ ನೇರವಾಗಿ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗೆ ಯಾಂತ್ರಿಕವಾಗಿ ತಾನಾಗಿಯೇ ತೆರಳುತ್ತದೆ. ಈ ನಿರಂತರತೆ ಶ್ರಮರಹಿತವಾಗುತ್ತದೆ.
          </p>

          <h3>೨. SIP ಚಿಕ್ಕ ಹಣವನ್ನು ದೊಡ್ಡ ಸಂಪತ್ತನ್ನಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ</h3>
          <p>ಪ್ರಾರಂಭಿಸಲು ದೊಡ್ಡ ಮೊತ್ತ ಬೇಕಿಲ್ಲ.</p>
          <p>
            ತಿಂಗಳಿಗೆ ಕೇವಲ ₹೫೦೦ ಸಹ, ನಿಯಮಿತವಾಗಿ ಹೂಡಿದರೆ, ಕಾಲಕ್ರಮೇಣ ಚಕ್ರಬಡ್ಡಿಯ ಮೂಲಕ ಶಕ್ತಿಶಾಲಿಯಾಗಿ ಬೆಳೆಯುತ್ತದೆ — ನಿಮ್ಮ ಆದಾಯವು ತಾನೇ ಆದಾಯ ಗಳಿಸಲು ಆರಂಭಿಸುತ್ತದೆ.
          </p>
          <p>SIP ಎಂದರೆ ಮೂಲತಃ ಚಕ್ರಬಡ್ಡಿ + ಶಿಸ್ತು + ಸ್ವಯಂಚಾಲನೆ — ಇವು ಮೌನವಾಗಿ ಒಟ್ಟಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ.</p>

          <h3>೩. SIP ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತದಿಂದ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸುತ್ತದೆ — ರೂಪಾಯಿ-ವೆಚ್ಚದ ಸರಾಸರಿ</h3>
          <p>ಮಾರುಕಟ್ಟೆ ಎಂದಿಗೂ ನೇರ ರೇಖೆಯಲ್ಲಿ ಚಲಿಸುವುದಿಲ್ಲ. ಏರುತ್ತದೆ, ಇಳಿಯುತ್ತದೆ, ಪುನಃ ಏರುತ್ತದೆ, ಪುನಃ ಇಳಿಯುತ್ತದೆ.</p>
          <p>ಮಾರುಕಟ್ಟೆಯ ಸರಿಯಾದ ಕ್ಷಣ ಹಿಡಿಯಲು ಪ್ರಯತ್ನಿಸಿದರೆ, ನೀವು ಬಹಳಷ್ಟು ಬಾರಿ ತಪ್ಪಾಗುತ್ತೀರಿ. ಆದರೆ SIP ಏರಿಳಿತವನ್ನು ನಿಮ್ಮ ಮಿತ್ರನನ್ನಾಗಿ ಮಾಡುತ್ತದೆ — ಇದಕ್ಕೆ ಕರೆಯುವ ಹೆಸರು:</p>
          <p><strong>ರೂಪಾಯಿ-ವೆಚ್ಚದ ಸರಾಸರಿ (Rupee-Cost Averaging)</strong></p>
          <ul className="pl-6 list-none space-y-1">
            <li>ಬೆಲೆ ಹೆಚ್ಚಿದ್ದಾಗ → ನಿಮ್ಮ SIP ಕಡಿಮೆ ಘಟಕಗಳನ್ನು ಖರೀದಿಸುತ್ತದೆ.</li>
            <li>ಬೆಲೆ ಕಡಿಮೆಯಿದ್ದಾಗ → ನಿಮ್ಮ SIP ಹೆಚ್ಚು ಘಟಕಗಳನ್ನು ಖರೀದಿಸುತ್ತದೆ.</li>
          </ul>
          <p>ಕಾಲಕ್ರಮೇಣ ಇದು ನಿಮ್ಮ ವೆಚ್ಚವನ್ನು ಸರಾಸರಿ ಮಾಡಿ ಸಂಭವನೀಯ ನಷ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</p>
          <p>ನೀವು ಮಾರುಕಟ್ಟೆಗೆ ಭಾವನಾತ್ಮಕವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತಿಲ್ಲ... ನೀವು ಯಾಂತ್ರಿಕವಾಗಿ ಸಂಪತ್ತು ಸಂಗ್ರಹಿಸುತ್ತಿದ್ದೀರಿ.</p>

          <h3>೪. SIP ಅತ್ಯಂತ ಮುಖ್ಯವಾದ ಅಭ್ಯಾಸ ನಿರ್ಮಿಸುತ್ತದೆ: ಅದು ಶಿಸ್ತು</h3>
          <p>ಪ್ರಾಮಾಣಿಕವಾಗಿ ಯೋಚಿಸೋಣ:</p>
          <p>ಒಮ್ಮೆ ಹೂಡಿಕೆ ಮಾಡಿ ಯಾರೂ ಶ್ರೀಮಂತರಾಗಿಲ್ಲ. ನಿರಂತರ ಅಥವಾ ಕ್ರಮಬದ್ಧ ಹೂಡಿಕೆ ಮಾಡಿದವರು ಶ್ರೀಮಂತರಾಗಿದ್ದಾರೆ.</p>
          <p>SIP ಕ್ರಮಬದ್ಧತೆಯನ್ನು ಒತ್ತಾಯಿಸುತ್ತದೆ ಏಕೆಂದರೆ:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಅದು ಯಾಂತ್ರಿಕವಾಗಿ ತಾನಾಗಿಯೇ ನಡೆಯುತ್ತದೆ</li>
            <li>ದಿನಾಂಕವನ್ನು ನೆನಪಿಡಬೇಕಿಲ್ಲ</li>
            <li>ಮಾರುಕಟ್ಟೆಯನ್ನು ನೋಡಬೇಕಿಲ್ಲ</li>
            <li>ಅಲ್ಪಾವಧಿ ಗದ್ದಲದ ಬಗ್ಗೆ ಚಿಂತಿಸಬೇಕಿಲ್ಲ</li>
          </ul>
          <p>
            ಕ್ರಮಬದ್ಧವಾಗಿ ವ್ಯಾಯಾಮಶಾಲೆಗೆ ಹೋಗುವುದಕ್ಕೆ ಇದು ಆರ್ಥಿಕ ಸಮಾನಾಂತರ. ಚಿಕ್ಕ ಪುಟ್ಟ ಪ್ರಯತ್ನಗಳು ಒಟ್ಟಾಗಿ ಬೃಹತ್ ಬದಲಾವಣೆಯನ್ನು ತರುತ್ತವೆ.
          </p>

          <h3>೫. SIP ಭಾವನಾತ್ಮಕ ಹೂಡಿಕೆಯನ್ನು ತಡೆಯುತ್ತದೆ</h3>
          <p>ಹೂಡಿಕೆ ಭಾವನೆಗಳನ್ನು ಕೆರಳಿಸುತ್ತದೆ:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಮಾರುಕಟ್ಟೆ ಕುಸಿದಾಗ ಭಯ</li>
            <li>ಮಾರುಕಟ್ಟೆ ಏರಿದಾಗ ದುರಾಸೆ</li>
            <li>ಕೆಟ್ಟ ಸುದ್ದಿ ಬಂದಾಗ ಆತಂಕ</li>
            <li>ಒಳ್ಳೆಯ ಸುದ್ದಿ ಬಂದಾಗ ಅತಿಯಾದ ಆತ್ಮವಿಶ್ವಾಸ</li>
          </ul>
          <p>ಈ ಭಾವನೆಗಳು ಜನರನ್ನು ಹೆಚ್ಚಿನ ಬೆಲೆಗೆ ಕೊಂಡು, ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರಲು ಪ್ರೇರೇಪಿಸುತ್ತವೆ — ಇದು ಸಂಪತ್ತು ನಿರ್ಮಾಣಕ್ಕೆ ತದ್ವಿರುದ್ಧ.</p>
          <p>SIP ಭಾವನೆಯನ್ನು ಸಂಪೂರ್ಣ ತೆಗೆದುಹಾಕುತ್ತದೆ.</p>
          <ul className="pl-6 list-none space-y-1">
            <li>ಒಳ್ಳೆಯ ದಿನಗಳಲ್ಲೂ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ.</li>
            <li>ಕೆಟ್ಟ ದಿನಗಳಲ್ಲೂ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ.</li>
            <li>ಸಾಧಾರಣ ದಿನಗಳಲ್ಲೂ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ.</li>
            <li>ಮಾರುಕಟ್ಟೆ ಕುಸಿತದ ಸಮಯದಲ್ಲೂ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ.</li>
          </ul>
          <p>ಕಾಲಕ್ರಮೇಣ ನಿಮ್ಮ ಸಂಪತ್ತು ಬೆಳೆಯುತ್ತದೆ... ನಿಮ್ಮ ಮನಸ್ಸು ಶಾಂತವಾಗಿರುತ್ತದೆ.</p>

          <h3>೬. SIP ಪ್ರತಿ ಗುರಿಗೂ, ಪ್ರತಿ ಆದಾಯಕ್ಕೂ, ಪ್ರತಿ ಹೂಡಿಕೆದಾರರಿಗೂ ಸರಿ ಹೊಂದುತ್ತಾದೆ</h3>
          <p>
            ವಿದ್ಯಾರ್ಥಿಯಾಗಿರಲಿ, ಯುವ ವೃತ್ತಿಪರರಾಗಿರಲಿ, ಪೋಷಕರಾಗಿರಲಿ, ಅಥವಾ ನಿವೃತ್ತಿಯ ಅಂಚಿನಲ್ಲಿರಲಿ — ಪ್ರತಿ ಅಗತ್ಯಕ್ಕೂ ಒಂದು SIP ಇದೆ:
          </p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಪ್ರಯಾಣಕ್ಕಾಗಿ ಉಳಿತಾಯ</li>
            <li>ತುರ್ತು ನಿಧಿ ನಿರ್ಮಾಣ</li>
            <li>ದ್ವಿಚಕ್ರ ವಾಹನ ಅಥವಾ ಕಾರು ಖರೀದಿ</li>
            <li>ಮನೆಗಾಗಿ ಉಳಿತಾಯ</li>
            <li>ನಿವೃತ್ತಿ ಯೋಜನೆ</li>
            <li>ಮಕ್ಕಳ ಶಿಕ್ಷಣ</li>
            <li>ದೀರ್ಘಕಾಲೀಕ ಸಂಪತ್ತು ನಿರ್ಮಾಣ</li>
          </ul>
          <p>
            ನಿಮ್ಮ ಆದಾಯ ಬದಲಾಗಬಹುದು, ಆದರೆ ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ನಿಮ್ಮ SIP ಬದಲಾಗಬಲ್ಲದು. ಯಾವಾಗ ಬೇಕಾದರೂ ಮೊತ್ತ ಹೆಚ್ಚಿಸಬಹುದು, ಕಡಿಮೆ ಮಾಡಬಹುದು, ತಾತ್ಕಾಲಿಕವಾಗಿ ನಿಲ್ಲಿಸಬಹುದು, ಅಥವಾ ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಬಹುದು.
          </p>

          <h3>೭. SIP ಒಂದು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ವಿಧವಲ್ಲ — ಅದು ಒಂದು ವಿಧಾನ</h3>
          <p>ಹಲವು ಹೊಸ ಹೂಡಿಕೆದಾರರು SIP ಅನ್ನು ಒಂದು ಫಂಡ್ ವಿಧ ಎಂದು ತಪ್ಪಾಗಿ ತಿಳಿದುಕೊಳ್ಳುತ್ತಾರೆ. ಅದು ಹಾಗಲ್ಲ.</p>
          <p>ಇವುಗಳಲ್ಲಿ ನೀವು SIP ಪ್ರಾರಂಭಿಸಬಹುದು:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಇಕ್ವಿಟಿ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>ಡೆಟ್ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>ಗೋಲ್ಡ್ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
          </ul>
          <div className="pull-quote">
            SIP ಕೇವಲ <strong>ಇಂಧನ</strong> — ನೀವು ಆರಿಸಿಕೊಳ್ಳುವ ಫಂಡ್ <strong>ವಾಹನ</strong>.
          </div>

          <h3>೮. SIP ಯಾರಿಗಾದರೂ ಹೂಡಿಕೆ ಆರಂಭಿಸಲು ಅತ್ಯಂತ ಸುಲಭ ಮಾರ್ಗ</h3>
          <p>ಅತ್ಯುತ್ತಮ ಅಂಶ ಏನೆಂದರೆ — ನಿಮಗೆ ಇವ್ಯಾವುದೂ ಬೇಕಿಲ್ಲ:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಮಾರುಕಟ್ಟೆ ಜ್ಞಾನ</li>
            <li>ಆರ್ಥಿಕ ಪರಿಣತಿ</li>
            <li>ಸೂಕ್ತ ಸಮಯ</li>
            <li>ದೊಡ್ಡ ಬಂಡವಾಳ</li>
            <li>ನಿರಂತರ ಮೇಲ್ವಿಚಾರಣೆ</li>
          </ul>
          <p>
            ಹೂಡಿಕೆಯನ್ನು ಸರಳ, ಸ್ಥಿರ ಮತ್ತು ನಿಶ್ಚಿಂತೆಯ ಅನುಭವವನ್ನಾಗಿ ಮಾಡಲು SIP ಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಮಾರುಕಟ್ಟೆಯ ಪ್ರತಿ ವಿವರ ತಿಳಿಯದಿದ್ದರೂ, ಹೊಸಬರು ದೀರ್ಘಕಾಲೀಕ ಹೂಡಿಕೆದಾರರಂತೆ ವರ್ತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.
          </p>
          <p><strong>ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಹೇಳುವುದಾದರೆ: SIP ಕೇವಲ ಒಂದು ಸಾಧನವಲ್ಲ...</strong></p>
          <p>
            ಇದು ಸಾಮಾನ್ಯ ಜನರನ್ನು ಶಿಸ್ತಿನ ಸಂಪತ್ತು ನಿರ್ಮಾತೃಗಳನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವ ಒಂದು ಶಕ್ತಿಶಾಲಿ ಅಭ್ಯಾಸ.
          </p>
          <ul className="pl-6 list-none space-y-1">
            <li>ಏರಿಳಿತವನ್ನು ಅಪ್ರಸ್ತುತಗೊಳಿಸುತ್ತದೆ.</li>
            <li>ಸಮಯವನ್ನು ಅನಾವಶ್ಯಕಗೊಳಿಸುತ್ತದೆ.</li>
            <li>ಬೆಳವಣಿಗೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುತ್ತದೆ.</li>
          </ul>
          <p>ಆದ್ದರಿಂದಲೇ ಎಲ್ಲರೂ SIP ಬಗ್ಗೆ ಮಾತನಾಡುತ್ತಾರೆ — ಏಕೆಂದರೆ <strong>SIP ಕೆಲಸ ಮಾಡುತ್ತದೆ.</strong></p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image6.png"
              alt="A person dropping a coin into a SIP pot, with a rising stack of coins showing wealth growing over time"
              className="mx-auto max-w-xs w-full"
            />
          </div>
        </>
      ),
    },
  },

  // ── Chapter 5 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 5: From Understanding to Action",
      kn: "ಅಧ್ಯಾಯ 5: ತಿಳಿವಳಿಕೆಯಿಂದ ಕ್ರಿಯೆಗೆ",
    },
    content: {
      en: (
        <>
          <p>You now understand:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>What mutual funds are</li>
            <li>Why diversification reduces risk</li>
            <li>The different types of funds</li>
            <li>How SIP builds discipline and long-term wealth</li>
          </ul>
          <p>That&apos;s the foundation.</p>
          <p>But knowing about mutual funds is only the first step.</p>
          <p>
            Wealth is created not by knowing more but by investing consistently and staying
            disciplined.
          </p>
          <p>
            Not all mutual funds are the same. Two funds in the same category can behave very
            differently.
          </p>
          <p>So the real question becomes:</p>
          <p>
            <strong>How do you choose the right mutual fund for your goal?</strong>
          </p>
          <p>
            In the next module, we move from understanding mutual funds to learning{" "}
            <strong>what to look at before choosing one</strong>, the key factors, numbers, and
            filters that help you select the right fund with clarity and confidence.
          </p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image4.png"
              alt="A person looking at rows of mutual fund options — Fund A, Fund B, Fund C — ready to choose"
              className="mx-auto max-w-sm w-full"
            />
          </div>
        </>
      ),
      kn: (
        <>
          <p>ಈಗ ನೀವು ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೀರಿ:</p>
          <ul className="pl-6 list-disc space-y-1">
            <li>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಎಂದರೇನು</li>
            <li>ವೈವಿಧ್ಯಮಯ ಹೂಡಿಕೆ ಅಪಾಯವನ್ನು ಹೇಗೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ</li>
            <li>ಫಂಡ್‌ಗಳ ವಿವಿಧ ವಿಧಗಳು</li>
            <li>SIP ಶಿಸ್ತನ್ನು ಮತ್ತು ದೀರ್ಘಕಾಲೀಕ ಸಂಪತ್ತನ್ನು ಹೇಗೆ ನಿರ್ಮಿಸುತ್ತದೆ</li>
          </ul>
          <p>ಇದು ಅಡಿಪಾಯ.</p>
          <p>ಆದರೆ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳ ಬಗ್ಗೆ ತಿಳಿದುಕೊಳ್ಳುವುದು ಮೊದಲ ಹೆಜ್ಜೆ ಮಾತ್ರ.</p>
          <p>
            ಸಂಪತ್ತು ನಿರ್ಮಾಣವಾಗುವುದು ಹೆಚ್ಚು ತಿಳಿದುಕೊಳ್ಳುವುದರಿಂದಲ್ಲ — ಕ್ರಮಬದ್ಧವಾಗಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತ, ಶಿಸ್ತು ಕಾಪಾಡಿಕೊಳ್ಳುವುದರಿಂದ.
          </p>
          <p>
            ಎಲ್ಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳೂ ಒಂದೇ ರೀತಿ ಇರುವುದಿಲ್ಲ. ಒಂದೇ ವರ್ಗದ ಎರಡು ಫಂಡ್‌ಗಳು ಸಂಪೂರ್ಣ ಭಿನ್ನವಾಗಿ ವರ್ತಿಸಬಹುದು.
          </p>
          <p>ಹಾಗಾದರೆ ನಿಜವಾದ ಪ್ರಶ್ನೆ ಇದು:</p>
          <p><strong>ನಿಮ್ಮ ಗುರಿಗೆ ತಕ್ಕ ಸರಿಯಾದ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಅನ್ನು ಹೇಗೆ ಆರಿಸಬೇಕು?</strong></p>
          <p>
            ಮುಂದಿನ ಅಧ್ಯಾಯದಲ್ಲಿ, ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ ಮುಂದೆ ಸಾಗಿ — ಒಂದು ಫಂಡ್ ಆರಿಸುವ ಮುನ್ನ ಯಾವ ಅಂಶಗಳನ್ನು ಗಮನಿಸಬೇಕು ಎಂಬುದನ್ನು ಕಲಿಯುತ್ತೇವೆ. ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಸರಿಯಾದ ಫಂಡ್ ಆರಿಸಲು ನೆರವಾಗುವ ಪ್ರಮುಖ ಅಂಶಗಳು, ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಸೋಸುವ ಮಾನದಂಡಗಳನ್ನು ಅಲ್ಲಿ ವಿವರಿಸಲಾಗುವುದು.
          </p>

          <div className="ch-illustration">
            <img
              src="/mutual-funds-101/image4.png"
              alt="A person looking at rows of mutual fund options — Fund A, Fund B, Fund C — ready to choose"
              className="mx-auto max-w-sm w-full"
            />
          </div>
        </>
      ),
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function MutualFunds101Page() {
  const { lang, t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const moduleId = "mutual-funds-101";

  const current = chapters[chapterIndex];

  useEffect(() => {
    async function loadProgress() {
      if (chapterFromURL) {
        setChapterIndex(Number(chapterFromURL));
        setIsLoading(false);
        return;
      }

      const res = await fetch("/api/modules", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.moduleId === moduleId) {
          setChapterIndex(data.chapterNumber ?? 0);
        }
      }

      setIsLoading(false);
    }

    loadProgress();
  }, []);

  async function saveProgress(chapterNumber: number) {
    await fetch("/api/modules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, chapterNumber }),
    });
  }

  // ── Complete screen ───────────────────────────────────────────────────────
  if (isComplete) {
    return (
      <main className="container module-detail-container">
        <div className="module-progress-header">
          <div className="progress-wrap">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>
            <span className="progress-label">
              {chapters.length} of {chapters.length} {t("chapters")}
            </span>
          </div>
          <div className="chapter-dots">
            {chapters.map((_, i) => (
              <button
                key={i}
                className="chapter-dot done"
                onClick={() => { setIsComplete(false); setChapterIndex(i); saveProgress(i); }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="complete-body">
          <div className="complete-inner">
            <div className="complete-icon">🎓</div>
            <div className="complete-title">
              Module 4<br /><em>Complete.</em>
            </div>
            <p className="complete-sub">
              {lang === "kn"
                ? "ನೀವು ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳ ಪರಿಚಯ ಮಾಡ್ಯೂಲ್ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ — ಎಲ್ಲ 5 ಅಧ್ಯಾಯಗಳು."
                : "You've finished Introduction to Mutual Funds — all 5 chapters. You now understand what mutual funds are, why they matter, the different types, how SIPs work, and how to take your first step."}
            </p>
            <button className="complete-btn" onClick={() => router.push("/modules")}>
              ← Back to All Modules
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ── Loading screen ────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <main className="module-loading-container">
        <div className="spinner"></div>
        <p className="loading-text">{t("loadingProgress")}</p>
      </main>
    );
  }

  // ── Main render ───────────────────────────────────────────────────────────
  return (
    <main className="container module-detail-container">

      {/* === Chapter Progress Header === */}
      <div className="module-progress-header">
        <div className="progress-wrap">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.round((chapterIndex / (chapters.length - 1)) * 100)}%` }}
            />
          </div>
          <span className="progress-label">
            {chapterIndex + 1} of {chapters.length} {t("chapters")}
          </span>
        </div>
        <div className="chapter-dots">
          {chapters.map((_, i) => {
            const dotIdx = i;
            return (
              <button
                key={dotIdx}
                className={[
                  "chapter-dot",
                  chapterIndex > dotIdx ? "done" : "",
                  chapterIndex === dotIdx ? "active" : "",
                ].filter(Boolean).join(" ")}
                onClick={() => {
                  setChapterIndex(dotIdx);
                  saveProgress(dotIdx);
                }}
              >
                {dotIdx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* === Active Chapter === */}
      <section className="chapters-list">
        <div className="chapter">
          <h2>{current.title[lang]}</h2>
          {current.content[lang]}
        </div>
      </section>

      {/* === Floating Navigation Buttons === */}
      <div className="chapter-nav">
        <button
          className="nav-btn prev"
          onClick={() => {
            setChapterIndex((i) => {
              const newIndex = Math.max(0, i - 1);
              saveProgress(newIndex);
              return newIndex;
            });
          }}
          disabled={chapterIndex === 0}
        >
          ← {t("previous")}
        </button>

        <span className="nav-chapter-info">
          {`${chapterIndex + 1} / ${chapters.length}`}
        </span>
        <span className="nav-divider" />

        <button
          className="nav-btn next"
          onClick={async () => {
            if (chapterIndex === chapters.length - 1) {
              await saveProgress(chapterIndex);
              setIsComplete(true);
            } else {
              setChapterIndex((i) => {
                const newIndex = Math.min(chapters.length - 1, i + 1);
                saveProgress(newIndex);
                return newIndex;
              });
            }
          }}
        >
          {chapterIndex === chapters.length - 1 ? "Finish ✓" : `${t("next")} →`}
        </button>
      </div>

    </main>
  );
}
