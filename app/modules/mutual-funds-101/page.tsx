"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function MutualFunds101Page() {
  const { t, lang } = useLanguage();
  // ============================================================
  //  ALL CHAPTER CONTENT
  // ============================================================
  const chapters = [
    // ==============================
    // INTRO SLIDE
    // ==============================
    {
      title: {
        en: "Mutual Funds 101",
        kn: "ಮ್ಯೂಚುವಲ್ ಫಂಡ್ 101",
      },
      content: {
        en: (
          <>
            <p className="subtitle" style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              Understand what mutual funds are, why they matter, how different types work,
              and how SIPs turn consistency into long-term wealth.
            </p>
          </>
        ),
        kn: (
          <>
            <p className="subtitle" style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಎಂದರೇನು, ಅವು ಏಕೆ ಮುಖ್ಯ, ವಿವಿಧ ಪ್ರಕಾರಗಳು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ,
              ಮತ್ತು SIP ನಿರಂತರತೆಯನ್ನು ದೀರ್ಘಕಾಲದ ಸಂಪತ್ತಾಗಿ ಹೇಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.
            </p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 1
    // ==============================
    {
      title: {
        en: "Chapter 1: What Is a Mutual Fund?",
        kn: "ಅಧ್ಯಾಯ 1: ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಎಂದರೇನು?",
      },
      content: {
        en: (
          <>
            <p>Imagine you're at a market. You see a basket — not filled with fruits, but with something far more valuable for your financial future.</p>
            <p>Inside this basket, instead of apples or mangoes, you find shares of companies, government bonds, corporate debt, gold, or even a mix of all three. Each item represents a different type of investment, each with its own behaviour, risk, and return potential.</p>
            <p>And this basket is a mutual fund.</p>

            <h3>The Core Idea</h3>
            <p>A mutual fund is simply a collection of different investments bundled together.</p>
            <p>Instead of buying one stock or one bond, you own small pieces of many — instantly reducing your risk and increasing stability.</p>
            <p>But here's where the real magic begins: You don't choose the investments — an expert does.</p>
            <p>A professional fund manager studies markets, analyses data, tracks performance, and decides what to buy or sell. Their full-time job is to make the basket grow, so you don't have to do all the hard work yourself.</p>
            <p>You invest in the basket → the fund manager takes care of the rest.</p>
            <p>By buying one mutual fund unit, you automatically own tiny fractions of everything inside.</p>

            <h3>Why This Matters for You</h3>
            <p>Many beginners feel overwhelmed by the stock market. They fear picking the wrong stock, losing money, or not knowing enough. Mutual funds solve that problem beautifully.</p>

            <h3>1. Lower Risk Compared to Single Stocks</h3>
            <p>When you buy one stock, your entire return depends on that one company. If it does well, great. If it doesn't, your money takes the hit.</p>
            <p>But in a mutual fund, even if one company underperforms, others in the basket can balance it out.</p>

            <h3>2. Instant Diversification</h3>
            <p>Diversification — spreading your money across different assets — is one of the strongest shields in investing. Mutual funds give you diversification on day one, even with a small amount of money.</p>

            <h3>3. Professional Management</h3>
            <p>Most people don't have the time to track markets daily. A fund manager, supported by research analysts, does this full-time. You get expert decision-making without having to become an expert yourself.</p>

            <h3>4. Stress-Free Wealth Building</h3>
            <p>You don't need to be a stock picker. You don't need to time the market. You don't need advanced knowledge. The system is designed for simplicity and long-term growth.</p>

            <h3>So, Why Do Mutual Funds Matter So Much?</h3>
            <p>Because they make investing accessible. They make wealth creation possible even for someone who is a student, just started earning, doesn't have much time, doesn't know where to begin, or wants guidance without complexity.</p>
            <p><em>Mutual funds bridge the gap between wanting to invest and knowing how to invest.</em></p>
          </>
        ),
        kn: (
          <>
            <p>ನೀವು ಒಂದು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿದ್ದೀರಿ ಎಂದು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ನಿಮ್ಮ ಮುಂದೆ ಒಂದು ಬುಟ್ಟಿ ಕಾಣುತ್ತದೆ — ಹಣ್ಣುಗಳಿಂದ ತುಂಬಿರದ, ಆದರೆ ನಿಮ್ಮ ಆರ್ಥಿಕ ಭವಿಷ್ಯಕ್ಕೆ ಬಹಳ ಮೌಲ್ಯವಾದ ವಸ್ತುಗಳಿಂದ ತುಂಬಿರುವ ಬುಟ್ಟಿ.</p>
            <p>ಆ ಬುಟ್ಟಿಯಲ್ಲಿ ಮಾವಿನಹಣ್ಣಿನ ಬದಲಾಗಿ ಕಂಪನಿಗಳ ಷೇರುಗಳು, ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳು, ಕಾರ್ಪೊರೇಟ್ ಸಾಲ, ಚಿನ್ನ, ಅಥವಾ ಇವೆಲ್ಲದರ ಮಿಶ್ರಣ ಇದೆ. ಪ್ರತಿ ವಸ್ತು ಒಂದು ವಿಭಿನ್ನ ಹೂಡಿಕೆ ಪ್ರಕಾರವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ — ತನ್ನದೇ ನಡವಳಿಕೆ, ಅಪಾಯ, ಮತ್ತು ಆದಾಯ ಸಾಧ್ಯತೆಯೊಂದಿಗೆ.</p>

            <h3>ಮೂಲ ಕಲ್ಪನೆ</h3>
            <p>ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಎಂದರೆ ಸರಳವಾಗಿ ವಿವಿಧ ಹೂಡಿಕೆಗಳ ಸಂಗ್ರಹ.</p>
            <p>ಒಂದೇ ಷೇರು ಅಥವಾ ಬಾಂಡ್ ಖರೀದಿಸುವ ಬದಲು, ನೀವು ಅನೇಕ ವಿಧದ ಹೂಡಿಕೆಗಳ ಸಣ್ಣ ಸಣ್ಣ ಪಾಲುಗಳನ್ನು ಹೊಂದುತ್ತೀರಿ — ತಕ್ಷಣವೇ ಅಪಾಯ ಕಡಿಮೆಯಾಗಿ ಸ್ಥಿರತೆ ಹೆಚ್ಚುತ್ತದೆ.</p>
            <p>ಆದರೆ ನಿಜವಾದ ಮ್ಯಾಜಿಕ್ ಇಲ್ಲಿದೆ: ನೀವು ಹೂಡಿಕೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದಿಲ್ಲ — ಒಬ್ಬ ತಜ್ಞ ಅದನ್ನು ಮಾಡುತ್ತಾರೆ.</p>
            <p>ವೃತ್ತಿಪರ ಫಂಡ್ ಮ್ಯಾನೇಜರ್ ಮಾರುಕಟ್ಟೆ ಅಧ್ಯಯನ ಮಾಡುತ್ತಾರೆ, ದತ್ತಾಂಶ ವಿಶ್ಲೇಷಿಸುತ್ತಾರೆ, ಕಾರ್ಯಕ್ಷಮತೆ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾರೆ, ಮತ್ತು ಏನು ಖರೀದಿಸಬೇಕು ಮತ್ತು ಮಾರಾಟ ಮಾಡಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುತ್ತಾರೆ. ಬುಟ್ಟಿಯನ್ನು ಬೆಳೆಸುವುದು ಅವರ ಪೂರ್ಣಕಾಲಿಕ ಕೆಲಸ.</p>
            <p>ನೀವು ಬುಟ್ಟಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ → ಫಂಡ್ ಮ್ಯಾನೇಜರ್ ಉಳಿದದ್ದನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ.</p>
            <p>ಒಂದು ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಯೂನಿಟ್ ಖರೀದಿಸುವ ಮೂಲಕ, ನೀವು ಒಳಗಿರುವ ಎಲ್ಲದರ ಸಣ್ಣ ಸಣ್ಣ ತುಣುಕುಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹೊಂದುತ್ತೀರಿ.</p>

            <h3>ಇದು ನಿಮಗೆ ಏಕೆ ಮುಖ್ಯ?</h3>
            <p>ಅನೇಕ ಆರಂಭಿಕರಿಗೆ ಷೇರು ಮಾರುಕಟ್ಟೆ ಭಯ ಮೂಡಿಸುತ್ತದೆ. ತಪ್ಪು ಷೇರು ಆಯ್ಕೆ, ಹಣ ಕಳೆದುಕೊಳ್ಳುವ ಭಯ, ಅಥವಾ ಸಾಕಷ್ಟು ತಿಳಿದಿಲ್ಲ ಎಂಬ ಸಂಶಯ. ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಆ ಸಮಸ್ಯೆಯನ್ನು ಸುಂದರವಾಗಿ ಪರಿಹರಿಸುತ್ತದೆ.</p>

            <h3>1. ಏಕ ಷೇರಿಗಿಂತ ಕಡಿಮೆ ಅಪಾಯ</h3>
            <p>ಒಂದೇ ಷೇರು ಖರೀದಿಸಿದರೆ, ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಆದಾಯ ಆ ಒಂದು ಕಂಪನಿಯ ಮೇಲೆ ಅವಲಂಬಿತ. ಆದರೆ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ನಲ್ಲಿ ಒಂದು ಕಂಪನಿ ಕಡಿಮೆ ಕಾರ್ಯನಿರ್ವಹಿಸಿದರೂ, ಬುಟ್ಟಿಯಲ್ಲಿರುವ ಇತರರು ಸಮತೋಲನ ಮಾಡಬಲ್ಲರು.</p>

            <h3>2. ತಕ್ಷಣ ವೈವಿಧ್ಯೀಕರಣ</h3>
            <p>ವೈವಿಧ್ಯೀಕರಣ — ವಿವಿಧ ಆಸ್ತಿಗಳಲ್ಲಿ ಹಣ ಹರಡುವುದು — ಹೂಡಿಕೆಯಲ್ಲಿ ಅತ್ಯಂತ ಶಕ್ತಿಯುತ ರಕ್ಷಣಾ ಕವಚ. ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಸಣ್ಣ ಹಣದಲ್ಲೂ ಮೊದಲ ದಿನದಿಂದಲೇ ವೈವಿಧ್ಯೀಕರಣ ನೀಡುತ್ತದೆ.</p>

            <h3>3. ವೃತ್ತಿಪರ ನಿರ್ವಹಣೆ</h3>
            <p>ಹೆಚ್ಚಿನ ಜನರಿಗೆ ಪ್ರತಿದಿನ ಮಾರುಕಟ್ಟೆ ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಸಮಯ ಇರುವುದಿಲ್ಲ. ಸಂಶೋಧನಾ ವಿಶ್ಲೇಷಕರ ತಂಡದ ಬೆಂಬಲದಿಂದ ಫಂಡ್ ಮ್ಯಾನೇಜರ್ ಇದನ್ನು ಪೂರ್ಣಕಾಲಿಕವಾಗಿ ಮಾಡುತ್ತಾರೆ. ನೀವು ತಜ್ಞರಾಗದೆಯೇ ತಜ್ಞ ನಿರ್ಧಾರ ಪಡೆಯುತ್ತೀರಿ.</p>

            <h3>4. ಒತ್ತಡ-ರಹಿತ ಸಂಪತ್ತು ನಿರ್ಮಾಣ</h3>
            <p>ನೀವು ಷೇರು ಆಯ್ಕೆಗಾರರಾಗಬೇಕಿಲ್ಲ. ಮಾರುಕಟ್ಟೆ ಸಮಯ ನಿರ್ಧರಿಸಬೇಕಿಲ್ಲ. ಸುಧಾರಿತ ಜ್ಞಾನ ಬೇಕಿಲ್ಲ. ವ್ಯವಸ್ಥೆ ಸರಳತೆ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಬೆಳವಣಿಗೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಂಡಿದೆ.</p>

            <h3>ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಏಕೆ ಇಷ್ಟು ಮುಖ್ಯ?</h3>
            <p>ಏಕೆಂದರೆ ಅವು ಹೂಡಿಕೆಯನ್ನು ಎಲ್ಲರಿಗೂ ಲಭ್ಯವಾಗಿಸುತ್ತವೆ. ವಿದ್ಯಾರ್ಥಿ, ಹೊಸದಾಗಿ ದುಡಿಮೆ ಆರಂಭಿಸಿದವರು, ಸಮಯ ಕಡಿಮೆ ಇರುವವರು, ಎಲ್ಲಿ ಪ್ರಾರಂಭಿಸಬೇಕೆಂದು ತಿಳಿಯದವರು, ಸಂಕೀರ್ಣತೆ ಇಲ್ಲದ ಮಾರ್ಗದರ್ಶನ ಬಯಸುವವರು — ಎಲ್ಲರಿಗೂ ಸಾಧ್ಯ.</p>
            <p><em>ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಹೂಡಿಕೆ ಮಾಡಬೇಕು ಎಂಬ ಆಸೆ ಮತ್ತು ಹೇಗೆ ಮಾಡಬೇಕೆಂಬ ತಿಳಿವಳಿಕೆ ನಡುವಿನ ಅಂತರ ತುಂಬುತ್ತದೆ.</em></p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 2
    // ==============================
    {
      title: {
        en: "Chapter 2: Why Mutual Funds Matter Even More Than Stocks for Beginners",
        kn: "ಅಧ್ಯಾಯ 2: ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಆರಂಭಿಕರಿಗೆ ಏಕೆ ಹೆಚ್ಚು ಸೂಕ್ತ?",
      },
      content: {
        en: (
          <>
            <p>For most people, mutual funds are the right first step — because they solve the biggest problems beginners face.</p>

            <h3>✔ Risk Management</h3>
            <p>Your money is spread across 30–100 companies. Even if a few underperform, the others cushion the impact.</p>

            <h3>✔ No Need for Market Expertise</h3>
            <p>You don't have to track the market every day. A professional fund manager does that for you — full time, with a full team.</p>

            <h3>✔ Start With Very Small Amounts</h3>
            <p>Even ₹100 via SIP is enough to begin. You don't need a large lump sum. You don't need to wait until you have "enough." You just need to start.</p>

            <h3>✔ Better Discipline</h3>
            <p>SIPs automate your investing habit. Instead of remembering to invest every month, it happens automatically. This consistency is one of the strongest drivers of wealth creation over time.</p>
            <p><em>Wealth is not built by those who know the most. It's built by those who invest the most consistently.</em></p>
          </>
        ),
        kn: (
          <>
            <h3>✔ ಅಪಾಯ ನಿರ್ವಹಣೆ</h3>
            <p>ನಿಮ್ಮ ಹಣ 30–100 ಕಂಪನಿಗಳಲ್ಲಿ ಹರಡಲ್ಪಡುತ್ತದೆ. ಕೆಲವು ಕಡಿಮೆ ಕಾರ್ಯನಿರ್ವಹಿಸಿದರೂ, ಉಳಿದವು ಪರಿಣಾಮವನ್ನು ತಗ್ಗಿಸುತ್ತವೆ.</p>

            <h3>✔ ಮಾರುಕಟ್ಟೆ ಪರಿಣತಿ ಬೇಕಿಲ್ಲ</h3>
            <p>ನೀವು ಪ್ರತಿದಿನ ಮಾರುಕಟ್ಟೆ ಟ್ರ್ಯಾಕ್ ಮಾಡಬೇಕಿಲ್ಲ. ವೃತ್ತಿಪರ ಫಂಡ್ ಮ್ಯಾನೇಜರ್ ಸಂಪೂರ್ಣ ತಂಡದೊಂದಿಗೆ ಅದನ್ನು ಮಾಡುತ್ತಾರೆ.</p>

            <h3>✔ ಬಹಳ ಸಣ್ಣ ಮೊತ್ತದಿಂದ ಪ್ರಾರಂಭಿಸಬಹುದು</h3>
            <p>SIP ಮೂಲಕ ₹100 ಸಹ ಸಾಕು. ದೊಡ್ಡ ಮೊತ್ತ ಕಾಯಬೇಕಿಲ್ಲ. "ಸಾಕಷ್ಟಾಗುವವರೆಗೆ" ಕಾಯಬೇಕಿಲ್ಲ. ಕೇವಲ ಪ್ರಾರಂಭಿಸಿದರೆ ಸಾಕು.</p>

            <h3>✔ ಉತ್ತಮ ಶಿಸ್ತು</h3>
            <p>SIP ನಿಮ್ಮ ಹೂಡಿಕೆ ಅಭ್ಯಾಸವನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುತ್ತದೆ. ಪ್ರತಿ ತಿಂಗಳು ಹೂಡಿಕೆ ಮಾಡಲು ನೆನಪಿಸಿಕೊಳ್ಳಬೇಕಿಲ್ಲ — ಅದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆಗುತ್ತದೆ. ಈ ನಿರಂತರತೆ ಕಾಲಕ್ರಮೇಣ ಸಂಪತ್ತು ನಿರ್ಮಾಣದ ಅತ್ಯಂತ ಶಕ್ತಿಯುತ ಚಾಲಕ.</p>
            <p><em>ಸಂಪತ್ತು ಅತ್ಯಂತ ಹೆಚ್ಚು ತಿಳಿದವರಿಂದ ನಿರ್ಮಾಣವಾಗುವುದಿಲ್ಲ. ಅತ್ಯಂತ ನಿರಂತರವಾಗಿ ಹೂಡಿಕೆ ಮಾಡುವವರಿಂದ ನಿರ್ಮಾಣವಾಗುತ್ತದೆ.</em></p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 3
    // ==============================
    {
      title: {
        en: "Chapter 3: The Different Types of Mutual Funds",
        kn: "ಅಧ್ಯಾಯ 3: ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳ ವಿವಿಧ ಪ್ರಕಾರಗಳು",
      },
      content: {
        en: (
          <>
            <p>Every mutual fund has one job: to grow your money in a way that matches your goals, your time frame, and your comfort with risk.</p>
            <p>But not all mutual funds behave the same way. Some grow fast but fluctuate sharply. Some grow slowly but stay stable. Some balance both. Some track the market. Some follow a theme or sector.</p>
            <p>Think of mutual funds like different vehicles: A sports car (fast but unstable — equity funds), a bus (slow but safe — debt funds), an SUV (balanced and dependable — hybrid funds), a train (follows a fixed track — index funds).</p>

            <h3>1. Equity Funds — For Long-Term Growth</h3>
            <p>These funds invest primarily in stocks. Because stocks fluctuate, equity funds can go up and down in the short term — but historically, they create the highest long-term wealth.</p>
            <p><strong>Large-Cap Funds</strong> — Invest in India's top 100 biggest, most stable companies like Reliance, TCS, HDFC Bank. Lower risk than other equity types, consistent performance, good for beginners.</p>
            <p><strong>Mid-Cap Funds</strong> — Invest in the next set of growing companies. Higher growth potential with moderate risk.</p>
            <p><strong>Small-Cap Funds</strong> — Invest in young, fast-growing companies. Highest potential returns and highest volatility. Only for long-term investors with a 7+ year horizon.</p>
            <p><strong>Multi-Cap / Flexi-Cap Funds</strong> — A mix of large, mid, and small caps. Diversified, balanced risk-return, great for beginners.</p>
            <p><strong>Sectoral / Thematic Funds</strong> — Focus on one industry like IT, Pharma, Banking, or Energy. High risk because all money is in one sector. Only suitable when you strongly believe in that sector.</p>

            <h3>2. Debt Funds — For Stability and Predictability</h3>
            <p>If equity funds are like rollercoasters, debt funds are like smooth trains. They invest in government bonds, corporate bonds, and money market instruments — aiming for steady but moderate returns with much lower volatility.</p>
            <p>Best for short-term goals of 0–3 years, emergency funds, and people who want stability above growth.</p>
            <p><strong>Liquid Funds</strong> — Safest option, ideal for parking short-term money.</p>
            <p><strong>Short Duration Funds</strong> — Ideal for 1–3 year goals.</p>
            <p><strong>Corporate Bond Funds</strong> — Stable income from strong companies.</p>
            <p><strong>Gilt Funds</strong> — Only government bonds, very low credit risk.</p>
            <p>Debt funds won't make you rich quickly — but they will protect your capital.</p>

            <h3>3. Hybrid Funds — The Best of Both Worlds</h3>
            <p>These funds invest in both equity (for growth) and debt (for stability). Perfect for someone who wants balance.</p>
            <p><strong>Aggressive Hybrid Funds</strong> — 65–80% equity + rest in debt. More growth, moderate risk.</p>
            <p><strong>Balanced Hybrid Funds</strong> — 50% equity + 50% debt. Ideal for medium-term goals.</p>
            <p><strong>Conservative Hybrid Funds</strong> — Mostly debt with a small equity portion. Safer and stable, suited for low-risk investors.</p>

            <h3>4. Index Funds — Simple, Low-Cost, and Effective</h3>
            <p>Index funds don't try to "beat" the market. They simply copy a market index like Nifty 50, Sensex, Nifty Next 50, or Nifty Midcap 150. This makes them low-cost, transparent, beginner-friendly, and excellent for long-term compounding.</p>

            <h3>5. ETFs — Exchange Traded Funds</h3>
            <p>ETFs are similar to index funds but are traded like stocks. Lower cost and good for long-term holding. Best for people comfortable with stock-market apps. They can track equity indices, gold, debt, or international markets.</p>

            <h3>6. Gold Funds &amp; International Funds</h3>
            <p><strong>Gold Funds / Gold ETFs</strong> — Let you invest in gold without buying physical gold. Protects against inflation and acts as a good diversifier.</p>
            <p><strong>International Funds</strong> — Invest in companies outside India like Apple, Tesla, Google, and Amazon. Provides global exposure, reduces country-specific risk, and offers long-term growth potential.</p>

            <h3>7. Solution-Oriented Funds</h3>
            <p>Created for specific life goals: retirement, children's education, and long-term planning. These funds often have longer mandatory lock-in periods to keep you invested for the right duration.</p>

            <h3>8. Fund of Funds (FoFs)</h3>
            <p>These funds invest in other mutual funds instead of directly in stocks or bonds. Simple, globally diversified options available. Good for beginners who want a ready-made portfolio without picking individual funds.</p>

            <h3>How to Think About Fund Types</h3>
            <p><strong>Equity Funds</strong> — High risk · 5+ years · Long-term wealth building.</p>
            <p><strong>Debt Funds</strong> — Low risk · 0–3 years · Stability and safety.</p>
            <p><strong>Hybrid Funds</strong> — Moderate risk · 3–5 years · Balanced goals.</p>
            <p><strong>Index Funds</strong> — Moderate risk · 5+ years · Beginner-friendly, low cost.</p>
            <p><strong>ETFs</strong> — Moderate risk · 5+ years · Market-savvy investors.</p>
            <p><strong>Gold Funds</strong> — Low–Moderate risk · 3+ years · Diversification.</p>
            <p><strong>International Funds</strong> — Moderate–High risk · 5+ years · Global growth.</p>
            <p><strong>FoFs</strong> — Varies · 3+ years · Convenience and simplicity.</p>
            <p><em>There is a mutual fund for every person, every dream, every timeline, and every level of experience.</em></p>
          </>
        ),
        kn: (
          <>
            <p>ಪ್ರತಿ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗೆ ಒಂದು ಕೆಲಸ: ನಿಮ್ಮ ಗುರಿ, ಸಮಯ ಚೌಕಟ್ಟು, ಮತ್ತು ಅಪಾಯ ಸಹಿಷ್ಣುತೆಗೆ ತಕ್ಕಂತೆ ನಿಮ್ಮ ಹಣ ಬೆಳೆಸುವುದು.</p>
            <p>ಆದರೆ ಎಲ್ಲ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ಒಂದೇ ರೀತಿ ವರ್ತಿಸುವುದಿಲ್ಲ. ಕೆಲವು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತವೆ ಆದರೆ ಚೂಪಾಗಿ ಏರಿಳಿಯುತ್ತವೆ. ಕೆಲವು ನಿಧಾನವಾಗಿ ಬೆಳೆಯುತ್ತವೆ ಆದರೆ ಸ್ಥಿರವಾಗಿರುತ್ತವೆ.</p>

            <h3>1. ಈಕ್ವಿಟಿ ಫಂಡ್‌ಗಳು — ದೀರ್ಘಕಾಲದ ಬೆಳವಣಿಗೆಗೆ</h3>
            <p>ಈ ಫಂಡ್‌ಗಳು ಮುಖ್ಯವಾಗಿ ಷೇರುಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ. ಷೇರುಗಳು ಏರಿಳಿಯುವ ಕಾರಣ ಅಲ್ಪಾವಧಿಯಲ್ಲಿ ಚಂಚಲ, ಆದರೆ ಐತಿಹಾಸಿಕವಾಗಿ ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ಅತ್ಯಧಿಕ ಸಂಪತ್ತು ಸೃಷ್ಟಿಸುತ್ತವೆ.</p>
            <p><strong>ಲಾರ್ಜ್-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong> — ಭಾರತದ ಅಗ್ರ 100 ಅತ್ಯಂತ ದೊಡ್ಡ, ಸ್ಥಿರ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ. ರಿಲಯನ್ಸ್, TCS, HDFC ಬ್ಯಾಂಕ್. ಆರಂಭಿಕರಿಗೆ ಸೂಕ್ತ, ಸ್ಥಿರ ಕಾರ್ಯಕ್ಷಮತೆ.</p>
            <p><strong>ಮಿಡ್-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong> — ಬೆಳೆಯುತ್ತಿರುವ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ. ಹೆಚ್ಚಿನ ಬೆಳವಣಿಗೆ ಸಾಧ್ಯತೆ, ಮಧ್ಯಮ ಅಪಾಯ.</p>
            <p><strong>ಸ್ಮಾಲ್-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong> — ಯುವ, ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ. ಅತ್ಯಧಿಕ ಆದಾಯ ಸಾಧ್ಯತೆ ಮತ್ತು ಚಂಚಲತೆ. 7+ ವರ್ಷ ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಮಾತ್ರ.</p>
            <p><strong>ಮಲ್ಟಿ-ಕ್ಯಾಪ್ / ಫ್ಲೆಕ್ಸಿ-ಕ್ಯಾಪ್ ಫಂಡ್‌ಗಳು</strong> — ದೊಡ್ಡ, ಮಧ್ಯಮ, ಮತ್ತು ಸಣ್ಣ ಕ್ಯಾಪ್‌ಗಳ ಮಿಶ್ರಣ. ವೈವಿಧ್ಯೀಕೃತ, ಆರಂಭಿಕರಿಗೆ ಉತ್ತಮ.</p>
            <p><strong>ವಲಯ / ಥೀಮ್ ಫಂಡ್‌ಗಳು</strong> — IT, ಫಾರ್ಮಾ, ಬ್ಯಾಂಕಿಂಗ್, ಎನರ್ಜಿ ನಂತಹ ಒಂದು ಉದ್ಯಮದ ಮೇಲೆ ಗಮನ. ಒಂದು ವಲಯದಲ್ಲಿ ದೃಢ ನಂಬಿಕೆ ಇದ್ದಾಗ ಮಾತ್ರ.</p>

            <h3>2. ಡೆಟ್ ಫಂಡ್‌ಗಳು — ಸ್ಥಿರತೆ ಮತ್ತು ಊಹಿಸಬಹುದಾದ ಆದಾಯಕ್ಕೆ</h3>
            <p>ಈಕ್ವಿಟಿ ಫಂಡ್‌ಗಳು ರೋಲರ್‌ಕೋಸ್ಟರ್ ಇದ್ದಂತೆ, ಡೆಟ್ ಫಂಡ್‌ಗಳು ನಯವಾದ ರೈಲಿನಂತೆ. ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳು, ಕಾರ್ಪೊರೇಟ್ ಬಾಂಡ್‌ಗಳು, ಮತ್ತು ಹಣ ಮಾರುಕಟ್ಟೆ ಉಪಕರಣಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ ಸ್ಥಿರ ಆದಾಯ ಗುರಿ ಇಡುತ್ತವೆ.</p>
            <p>0–3 ವರ್ಷ ಅಲ್ಪಾವಧಿ ಗುರಿ, ತುರ್ತು ನಿಧಿ, ಮತ್ತು ಸ್ಥಿರತೆ ಬಯಸುವವರಿಗೆ ಸೂಕ್ತ.</p>
            <p><strong>ಲಿಕ್ವಿಡ್ ಫಂಡ್‌ಗಳು</strong> — ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಆಯ್ಕೆ, ಅಲ್ಪಾವಧಿ ಹಣ ಇರಿಸಲು ಸೂಕ್ತ.</p>
            <p><strong>ಶಾರ್ಟ್ ಡ್ಯುರೇಶನ್ ಫಂಡ್‌ಗಳು</strong> — 1–3 ವರ್ಷ ಗುರಿಗಳಿಗೆ ಸೂಕ್ತ.</p>
            <p><strong>ಕಾರ್ಪೊರೇಟ್ ಬಾಂಡ್ ಫಂಡ್‌ಗಳು</strong> — ಬಲಿಷ್ಠ ಕಂಪನಿಗಳಿಂದ ಸ್ಥಿರ ಆದಾಯ.</p>
            <p><strong>ಗಿಲ್ಟ್ ಫಂಡ್‌ಗಳು</strong> — ಕೇವಲ ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳು, ಬಹಳ ಕಡಿಮೆ ಕ್ರೆಡಿಟ್ ಅಪಾಯ.</p>
            <p>ಡೆಟ್ ಫಂಡ್‌ಗಳು ಶೀಘ್ರ ಶ್ರೀಮಂತರನ್ನಾಗಿ ಮಾಡಲ್ಲ — ಆದರೆ ನಿಮ್ಮ ಬಂಡವಾಳ ರಕ್ಷಿಸುತ್ತವೆ.</p>

            <h3>3. ಹೈಬ್ರಿಡ್ ಫಂಡ್‌ಗಳು — ಎರಡರ ಅತ್ಯುತ್ತಮ ಸಂಯೋಜನೆ</h3>
            <p>ಈ ಫಂಡ್‌ಗಳು ಬೆಳವಣಿಗೆಗೆ ಈಕ್ವಿಟಿ ಮತ್ತು ಸ್ಥಿರತೆಗೆ ಡೆಟ್ ಎರಡರಲ್ಲೂ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ. ಸಮತೋಲನ ಬಯಸುವವರಿಗೆ ಸರಿಯಾದ ಆಯ್ಕೆ.</p>
            <p><strong>ಆಕ್ರಮಣಕಾರಿ ಹೈಬ್ರಿಡ್</strong> — 65–80% ಈಕ್ವಿಟಿ + ಉಳಿದದ್ದು ಡೆಟ್. ಹೆಚ್ಚು ಬೆಳವಣಿಗೆ, ಮಧ್ಯಮ ಅಪಾಯ.</p>
            <p><strong>ಬ್ಯಾಲೆನ್ಸ್ಡ್ ಹೈಬ್ರಿಡ್</strong> — 50% ಈಕ್ವಿಟಿ + 50% ಡೆಟ್. ಮಧ್ಯಮಾವಧಿ ಗುರಿಗೆ ಸೂಕ್ತ.</p>
            <p><strong>ಕನ್ಸರ್ವೇಟಿವ್ ಹೈಬ್ರಿಡ್</strong> — ಮುಖ್ಯವಾಗಿ ಡೆಟ್ + ಸಣ್ಣ ಈಕ್ವಿಟಿ. ಸುರಕ್ಷಿತ, ಕಡಿಮೆ ಅಪಾಯ ಹೂಡಿಕೆದಾರರಿಗೆ.</p>

            <h3>4. ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು — ಸರಳ, ಕಡಿಮೆ ವೆಚ್ಚ, ಪರಿಣಾಮಕಾರಿ</h3>
            <p>ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು ಮಾರುಕಟ್ಟೆಯನ್ನು "ಮೀರಿಸಲು" ಪ್ರಯತ್ನಿಸುವುದಿಲ್ಲ. ನಿಫ್ಟಿ 50, ಸೆನ್ಸೆಕ್ಸ್‌ನಂತಹ ಸೂಚ್ಯಂಕವನ್ನು ಸರಳವಾಗಿ ನಕಲಿಸುತ್ತವೆ. ಕಡಿಮೆ ವೆಚ್ಚ, ಪಾರದರ್ಶಕ, ಆರಂಭಿಕ-ಸ್ನೇಹಿ, ದೀರ್ಘಾವಧಿ ಸಂಯೋಜಿತ ಬೆಳವಣಿಗೆಗೆ ಉತ್ತಮ.</p>

            <h3>5. ETF — ಎಕ್ಸ್‌ಚೇಂಜ್ ಟ್ರೇಡೆಡ್ ಫಂಡ್‌ಗಳು</h3>
            <p>ETF ಗಳು ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳಂತೆಯೇ ಆದರೆ ಷೇರಿನಂತೆ ವ್ಯಾಪಾರ ಮಾಡಬಹುದು. ಕಡಿಮೆ ವೆಚ್ಚ, ದೀರ್ಘಕಾಲ ಹಿಡಿದಿಡಲು ಉತ್ತಮ. ಈಕ್ವಿಟಿ ಸೂಚ್ಯಂಕ, ಚಿನ್ನ, ಡೆಟ್, ಅಥವಾ ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಬಹುದು.</p>

            <h3>6. ಚಿನ್ನ ಫಂಡ್‌ಗಳು ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್‌ಗಳು</h3>
            <p><strong>ಚಿನ್ನ ಫಂಡ್‌ಗಳು</strong> — ಭೌತಿಕ ಚಿನ್ನ ಖರೀದಿಸದೆ ಚಿನ್ನದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು. ಹಣದುಬ್ಬರದ ವಿರುದ್ಧ ರಕ್ಷಣೆ ಮತ್ತು ವೈವಿಧ್ಯೀಕರಣ.</p>
            <p><strong>ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್‌ಗಳು</strong> — ಆಪಲ್, ಟೆಸ್ಲಾ, ಗೂಗಲ್, ಅಮೆಜಾನ್‌ನಂತಹ ಭಾರತದ ಹೊರಗಿನ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ. ಜಾಗತಿಕ ಒಡ್ಡಿಕೆ ಮತ್ತು ದೇಶ-ನಿರ್ದಿಷ್ಟ ಅಪಾಯ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</p>

            <h3>ಫಂಡ್ ಪ್ರಕಾರಗಳ ಸಾರಾಂಶ</h3>
            <p><strong>ಈಕ್ವಿಟಿ ಫಂಡ್</strong> — ಹೆಚ್ಚು ಅಪಾಯ · 5+ ವರ್ಷ · ದೀರ್ಘಕಾಲದ ಸಂಪತ್ತು.</p>
            <p><strong>ಡೆಟ್ ಫಂಡ್</strong> — ಕಡಿಮೆ ಅಪಾಯ · 0–3 ವರ್ಷ · ಸ್ಥಿರತೆ, ಸುರಕ್ಷತೆ.</p>
            <p><strong>ಹೈಬ್ರಿಡ್ ಫಂಡ್</strong> — ಮಧ್ಯಮ ಅಪಾಯ · 3–5 ವರ್ಷ · ಸಮತೋಲಿತ ಗುರಿ.</p>
            <p><strong>ಇಂಡೆಕ್ಸ್ ಫಂಡ್</strong> — ಮಧ್ಯಮ ಅಪಾಯ · 5+ ವರ್ಷ · ಆರಂಭಿಕ-ಸ್ನೇಹಿ, ಕಡಿಮೆ ವೆಚ್ಚ.</p>
            <p><strong>ETF</strong> — ಮಧ್ಯಮ ಅಪಾಯ · 5+ ವರ್ಷ · ಮಾರುಕಟ್ಟೆ-ಚಾಣಾಕ್ಷ ಹೂಡಿಕೆದಾರರು.</p>
            <p><strong>ಚಿನ್ನ ಫಂಡ್</strong> — ಕಡಿಮೆ–ಮಧ್ಯಮ ಅಪಾಯ · 3+ ವರ್ಷ · ವೈವಿಧ್ಯೀಕರಣ.</p>
            <p><strong>ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್</strong> — ಮಧ್ಯಮ–ಹೆಚ್ಚು ಅಪಾಯ · 5+ ವರ್ಷ · ಜಾಗತಿಕ ಬೆಳವಣಿಗೆ.</p>
            <p><em>ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ, ಪ್ರತಿ ಕನಸಿಗೆ, ಪ್ರತಿ ಸಮಯ ಚೌಕಟ್ಟಿಗೆ, ಮತ್ತು ಅನುಭವದ ಪ್ರತಿ ಹಂತಕ್ಕೆ ಒಂದು ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಇದೆ.</em></p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 4
    // ==============================
    {
      title: {
        en: "Chapter 4: What Are SIPs & Why Everyone Talks About Them?",
        kn: "ಅಧ್ಯಾಯ 4: SIP ಎಂದರೇನು ಮತ್ತು ಎಲ್ಲರೂ ಏಕೆ ಅದರ ಬಗ್ಗೆ ಮಾತನಾಡುತ್ತಾರೆ?",
      },
      content: {
        en: (
          <>
            <p>Most people don't fail at investing because they choose the wrong fund. They fail because they invest inconsistently. They invest when they feel confident. They stop when markets fall. They wait for "the right moment" — which usually never comes.</p>
            <p>SIPs solve this human problem beautifully.</p>

            <h3>What Exactly Is a SIP?</h3>
            <p>A SIP (Systematic Investment Plan) is a method of investing where you put in a fixed amount of money at regular intervals — usually monthly.</p>
            <p>Think of it like a subscription for your future. Just like you pay Netflix or your gym membership every month, with SIPs you pay yourself every month. You choose the amount — ₹100, ₹500, ₹1,000, ₹5,000 — you choose the date, and your money goes directly into a mutual fund automatically. Consistency becomes effortless.</p>

            <h3>SIPs Turn Small Money Into Big Wealth</h3>
            <p>You don't need a huge lump sum to start investing. Even ₹500 a month, when done consistently, grows into something powerful over time because of compounding — where your returns start earning returns.</p>
            <p>SIP is basically compounding + discipline + automation working together silently.</p>

            <h3>SIPs Protect You During Market Ups and Downs</h3>
            <p>Markets never move in straight lines. They rise, fall, rise again, fall again. If you try to time the market, you will almost always be wrong. But SIPs make volatility your friend through something called Rupee-Cost Averaging.</p>
            <p>When prices are high → your SIP buys fewer units. When prices are low → your SIP buys more units. Over time, this averages out your cost and reduces risk. You're not emotionally reacting to the market — you're mechanically accumulating wealth.</p>

            <h3>SIPs Build the Most Important Habit: Discipline</h3>
            <p>Nobody becomes wealthy by investing once. People become wealthy by investing regularly. SIP forces consistency because it runs automatically, you don't have to remember dates, you don't have to time the market, and you don't have to worry about short-term noise.</p>
            <p>It's the financial equivalent of going to the gym regularly. Tiny efforts compound into massive change.</p>

            <h3>SIPs Reduce Emotional Investing</h3>
            <p>Investing triggers emotions — fear when markets fall, greed when markets rise, anxiety with bad news, overconfidence with good news. These emotions make people buy high and sell low — the exact opposite of what creates wealth.</p>
            <p>SIPs remove emotion completely. You invest on the good days. You invest on the bad days. You invest on the boring days. You invest during market crashes too. Over time, your wealth grows — while your mind stays calm.</p>

            <h3>SIPs Fit Every Goal, Every Income, Every Investor</h3>
            <p>Whether you're a student, a young professional, a parent, or nearing retirement, there is a SIP for every need — saving for travel, building an emergency fund, buying a bike or car, saving for a house, retirement planning, children's education, or long-term wealth creation.</p>
            <p>Your income may change, but your SIP can change with it. You can increase, decrease, pause, or restart anytime.</p>

            <h3>SIP Is Not a Type of Mutual Fund — It's a Method</h3>
            <p>Many beginners mistakenly think SIP is a type of fund. It's not. You can start a SIP in equity funds, debt funds, hybrid funds, index funds, international funds, or gold funds. SIP is just the fuel — the fund you choose is the vehicle.</p>
            <p><em>SIPs are not just a tool. They are a powerful habit that transforms ordinary people into disciplined wealth builders. They make volatility irrelevant, timing unnecessary, and growth automatic.</em></p>
          </>
        ),
        kn: (
          <>
            <p>ಹೆಚ್ಚಿನ ಜನರು ತಪ್ಪು ಫಂಡ್ ಆಯ್ಕೆ ಮಾಡಿದ ಕಾರಣ ಹೂಡಿಕೆಯಲ್ಲಿ ವಿಫಲರಾಗುವುದಿಲ್ಲ. ಅವರು ನಿರಂತರವಾಗಿ ಹೂಡಿಕೆ ಮಾಡದ ಕಾರಣ ವಿಫಲರಾಗುತ್ತಾರೆ. ಆತ್ಮವಿಶ್ವಾಸ ಇದ್ದಾಗ ಹೂಡಿಕೆ ಮಾಡುತ್ತಾರೆ. ಮಾರುಕಟ್ಟೆ ಇಳಿದಾಗ ನಿಲ್ಲಿಸುತ್ತಾರೆ. "ಸರಿಯಾದ ಸಮಯ" ಕಾಯುತ್ತಾರೆ — ಅದು ಸಾಮಾನ್ಯವಾಗಿ ಎಂದಿಗೂ ಬರುವುದಿಲ್ಲ. SIP ಈ ಮಾನವ ಸಮಸ್ಯೆಯನ್ನು ಸುಂದರವಾಗಿ ಪರಿಹರಿಸುತ್ತದೆ.</p>

            <h3>SIP ಎಂದರೇನು?</h3>
            <p>SIP (ಸಿಸ್ಟಮ್ಯಾಟಿಕ್ ಇನ್ವೆಸ್ಟ್‌ಮೆಂಟ್ ಪ್ಲಾನ್) ಒಂದು ಹೂಡಿಕೆ ವಿಧಾನ — ನಿಯಮಿತ ಮಧ್ಯಂತರಗಳಲ್ಲಿ, ಸಾಮಾನ್ಯವಾಗಿ ಮಾಸಿಕ, ನಿಗದಿತ ಮೊತ್ತ ಹೂಡಿಕೆ ಮಾಡುವ ವಿಧಾನ.</p>
            <p>ಇದನ್ನು ನಿಮ್ಮ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಚಂದಾದಾರಿಕೆ ಎಂದು ಯೋಚಿಸಿ. Netflix ಅಥವಾ ಜಿಮ್ ಮೆಂಬರ್‌ಶಿಪ್‌ಗೆ ಪ್ರತಿ ತಿಂಗಳು ಪಾವತಿಸುವಂತೆ, SIP ನಲ್ಲಿ ನೀವು ಪ್ರತಿ ತಿಂಗಳು ನಿಮ್ಮನ್ನೇ ನೀವು ಪಾವತಿಸುತ್ತೀರಿ. ಮೊತ್ತ ₹100, ₹500, ₹1,000, ₹5,000 — ನೀವೇ ಆಯ್ಕೆ ಮಾಡುತ್ತೀರಿ. ದಿನಾಂಕ ನೀವೇ ಆಯ್ಕೆ ಮಾಡುತ್ತೀರಿ. ನಿಮ್ಮ ಹಣ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗೆ ಹೋಗುತ್ತದೆ.</p>

            <h3>SIP ಸಣ್ಣ ಹಣವನ್ನು ದೊಡ್ಡ ಸಂಪತ್ತಾಗಿ ಬದಲಾಯಿಸುತ್ತದೆ</h3>
            <p>ತೊಡಗಿಸಲು ದೊಡ್ಡ ಮೊತ್ತ ಬೇಕಿಲ್ಲ. ₹500 ತಿಂಗಳ, ನಿರಂತರವಾಗಿ ಮಾಡಿದಾಗ, ಸಂಯೋಜಿತ ಬೆಳವಣಿಗೆ ಮೂಲಕ ಕಾಲಕ್ರಮೇಣ ಶಕ್ತಿಶಾಲಿ ಮೊತ್ತವಾಗಿ ಬೆಳೆಯುತ್ತದೆ — ನಿಮ್ಮ ಆದಾಯ ಮತ್ತೊಮ್ಮೆ ಆದಾಯ ಗಳಿಸಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ. SIP ಮೂಲತಃ ಸಂಯೋಜನೆ + ಶಿಸ್ತು + ಸ್ವಯಂಚಾಲನೆ ಒಟ್ಟಿಗೆ ಮೌನವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.</p>

            <h3>SIP ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತದಲ್ಲಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ</h3>
            <p>ಮಾರುಕಟ್ಟೆಗಳು ನೇರ ರೇಖೆಯಲ್ಲಿ ಚಲಿಸುವುದಿಲ್ಲ. ನೀವು ಸರಿಯಾದ ಸಮಯ ನಿರ್ಧರಿಸಲು ಪ್ರಯತ್ನಿಸಿದರೆ ತಪ್ಪಾಗುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು. ಆದರೆ SIP ರೂಪಾಯಿ-ವೆಚ್ಚ-ಸರಾಸರಿ ಮೂಲಕ ಚಂಚಲತೆಯನ್ನು ನಿಮ್ಮ ಗೆಳೆಯನನ್ನಾಗಿ ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ. ಬೆಲೆ ಹೆಚ್ಚಿದ್ದಾಗ SIP ಕಡಿಮೆ ಯೂನಿಟ್ ಖರೀದಿಸುತ್ತದೆ. ಬೆಲೆ ಕಡಿಮೆ ಇದ್ದಾಗ ಹೆಚ್ಚು ಖರೀದಿಸುತ್ತದೆ. ನೀವು ಭಾವನಾತ್ಮಕವಾಗಿ ಮಾರುಕಟ್ಟೆಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತಿಲ್ಲ — ಯಾಂತ್ರಿಕವಾಗಿ ಸಂಪತ್ತು ಸಂಗ್ರಹಿಸುತ್ತಿದ್ದೀರಿ.</p>

            <h3>SIP ಅತ್ಯಂತ ಮುಖ್ಯ ಅಭ್ಯಾಸ ನಿರ್ಮಿಸುತ್ತದೆ: ಶಿಸ್ತು</h3>
            <p>ಒಮ್ಮೆ ಹೂಡಿಕೆ ಮಾಡಿ ಯಾರೂ ಶ್ರೀಮಂತರಾಗುವುದಿಲ್ಲ. ನಿಯಮಿತವಾಗಿ ಹೂಡಿಕೆ ಮಾಡಿ ಜನರು ಶ್ರೀಮಂತರಾಗುತ್ತಾರೆ. SIP ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಲಿಸುತ್ತದೆ, ದಿನಾಂಕ ನೆನಪಿಸಿಕೊಳ್ಳಬೇಕಿಲ್ಲ, ಮಾರುಕಟ್ಟೆ ಸಮಯ ನಿರ್ಧರಿಸಬೇಕಿಲ್ಲ. ಇದು ಜಿಮ್‌ಗೆ ನಿಯಮಿತವಾಗಿ ಹೋಗುವ ಆರ್ಥಿಕ ಸಮಾನ. ಸಣ್ಣ ಪ್ರಯತ್ನಗಳು ಬೃಹತ್ ಬದಲಾವಣೆಯಾಗಿ ಸಂಯೋಜಿಸುತ್ತವೆ.</p>

            <h3>SIP ಭಾವನಾತ್ಮಕ ಹೂಡಿಕೆ ತಗ್ಗಿಸುತ್ತದೆ</h3>
            <p>ಹೂಡಿಕೆ ಭಾವನೆಗಳನ್ನು ಪ್ರಚೋದಿಸುತ್ತದೆ — ಮಾರುಕಟ್ಟೆ ಇಳಿದಾಗ ಭಯ, ಏರಿದಾಗ ದುರಾಸೆ. ಈ ಭಾವನೆಗಳು ಜನರನ್ನು ಹೆಚ್ಚು ಬೆಲೆಗೆ ಖರೀದಿಸಿ ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡಿಸುತ್ತವೆ — ಸಂಪತ್ತು ನಿರ್ಮಾಣದ ನಿಖರ ವಿರುದ್ಧ. SIP ಭಾವನೆಯನ್ನು ಸಂಪೂರ್ಣ ತೆಗೆದುಹಾಕುತ್ತದೆ. ಒಳ್ಳೆಯ ದಿನ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ. ಕೆಟ್ಟ ದಿನ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ. ಕ್ರ್ಯಾಶ್ ಸಮಯದಲ್ಲೂ ಹೂಡಿಕೆ ಮಾಡುತ್ತೀರಿ. ಕಾಲಕ್ರಮೇಣ ನಿಮ್ಮ ಸಂಪತ್ತು ಬೆಳೆಯುತ್ತದೆ — ಮನಸ್ಸು ಶಾಂತವಾಗಿರುತ್ತದೆ.</p>

            <h3>SIP ಒಂದು ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಪ್ರಕಾರವಲ್ಲ — ಇದೊಂದು ವಿಧಾನ</h3>
            <p>ಅನೇಕ ಆರಂಭಿಕರು SIP ಒಂದು ಫಂಡ್ ಪ್ರಕಾರ ಎಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸುತ್ತಾರೆ. ಅಲ್ಲ. ನೀವು ಈಕ್ವಿಟಿ ಫಂಡ್, ಡೆಟ್ ಫಂಡ್, ಹೈಬ್ರಿಡ್ ಫಂಡ್, ಇಂಡೆಕ್ಸ್ ಫಂಡ್, ಅಂತರರಾಷ್ಟ್ರೀಯ ಫಂಡ್, ಅಥವಾ ಚಿನ್ನ ಫಂಡ್ — ಯಾವುದರಲ್ಲಾದರೂ SIP ಪ್ರಾರಂಭಿಸಬಹುದು. SIP ಕೇವಲ ಇಂಧನ — ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಫಂಡ್ ವಾಹನ.</p>
            <p><em>SIP ಕೇವಲ ಒಂದು ಸಾಧನವಲ್ಲ. ಇದು ಸಾಮಾನ್ಯ ಜನರನ್ನು ಶಿಸ್ತಿನ ಸಂಪತ್ತು ನಿರ್ಮಾಣಕಾರರನ್ನಾಗಿ ಮಾಡುವ ಶಕ್ತಿಯುತ ಅಭ್ಯಾಸ. ಚಂಚಲತೆಯನ್ನು ಅಪ್ರಸ್ತುತ ಮಾಡುತ್ತದೆ. ಸಮಯ ನಿರ್ಧರಿಸುವ ಅಗತ್ಯ ತೆಗೆಯುತ್ತದೆ. ಬೆಳವಣಿಗೆ ಸ್ವಯಂಚಾಲಿತ ಮಾಡುತ್ತದೆ.</em></p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 5
    // ==============================
    {
      title: {
        en: "Chapter 5: From Understanding to Action",
        kn: "ಅಧ್ಯಾಯ 5: ತಿಳಿವಳಿಕೆಯಿಂದ ಕ್ರಿಯೆಯತ್ತ",
      },
      content: {
        en: (
          <>
            <p>You now understand what mutual funds are, why diversification reduces risk, the different types of funds, and how SIP builds discipline and long-term wealth.</p>
            <p>That's the foundation.</p>
            <p>But knowing about mutual funds is only the first step. Wealth is created not by knowing more — but by investing consistently and staying disciplined.</p>

            <p>Not all mutual funds are the same. Two funds in the same category can behave very differently. Their past performance, their fund manager, the companies they hold, and the fees they charge — all of these make a difference.</p>
            <p>So the real question becomes: How do you choose the right mutual fund for your goal?</p>

            <p>In the next module, we move from understanding mutual funds to learning what to look at before choosing one — the key factors, numbers, and filters that help you select the right fund with clarity and confidence.</p>
            <p><em>The journey from understanding to action is where real wealth begins.</em></p>
          </>
        ),
        kn: (
          <>
            <p>ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಎಂದರೇನು, ವೈವಿಧ್ಯೀಕರಣ ಅಪಾಯ ಹೇಗೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಫಂಡ್‌ಗಳ ವಿವಿಧ ಪ್ರಕಾರಗಳು, ಮತ್ತು SIP ಶಿಸ್ತು ಮತ್ತು ದೀರ್ಘಕಾಲದ ಸಂಪತ್ತು ಹೇಗೆ ನಿರ್ಮಿಸುತ್ತದೆ ಎಂಬುದು ನಿಮಗೀಗ ಅರ್ಥವಾಗಿದೆ.</p>
            <p>ಅದೇ ಅಡಿಪಾಯ.</p>
            <p>ಆದರೆ ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಬಗ್ಗೆ ತಿಳಿದಿರುವುದು ಕೇವಲ ಮೊದಲ ಹೆಜ್ಜೆ. ಸಂಪತ್ತು ಹೆಚ್ಚು ತಿಳಿದ ಕಾರಣ ಸೃಷ್ಟಿಯಾಗುವುದಿಲ್ಲ — ನಿರಂತರವಾಗಿ ಹೂಡಿಕೆ ಮಾಡಿ ಶಿಸ್ತಿನಿಂದ ಉಳಿಯುವ ಕಾರಣ ಸೃಷ್ಟಿಯಾಗುತ್ತದೆ.</p>

            <p>ಆದ್ದರಿಂದ ನಿಜವಾದ ಪ್ರಶ್ನೆ: ನಿಮ್ಮ ಗುರಿಗೆ ಸರಿಯಾದ ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಹೇಗೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?</p>

            <p>ಮುಂದಿನ ಮಾಡ್ಯೂಲ್‌ನಲ್ಲಿ, ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ ಒಂದನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲು ಏನು ನೋಡಬೇಕು ಎಂಬ ಕಲಿಕೆಯತ್ತ ಸಾಗುತ್ತೇವೆ — ಪ್ರಮುಖ ಅಂಶಗಳು, ಸಂಖ್ಯೆಗಳು, ಮತ್ತು ಫಿಲ್ಟರ್‌ಗಳು ನಿಮಗೆ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಸರಿಯಾದ ಫಂಡ್ ಆಯ್ಕೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.</p>
            <p><em>ತಿಳಿವಳಿಕೆಯಿಂದ ಕ್ರಿಯೆಯ ಪ್ರಯಾಣವೇ ನಿಜವಾದ ಸಂಪತ್ತು ಆರಂಭವಾಗುವ ಸ್ಥಳ.</em></p>
          </>
        ),
      },
    },
  ];


  // ============================================================
  // STATE & PARAMS
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const moduleId = "mutual-funds-101";

  const current = chapters[chapterIndex];

  useEffect(() => {
    async function loadProgress() {
      const chapter = chapterFromURL;

      // URL override wins
      if (chapter) {
        setChapterIndex(Number(chapter));
        setIsLoading(false);
        return;
      }

      // Load from DB
      const res = await fetch("/api/modules", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        console.log("progress row:", data);

        if (data.moduleId === moduleId) {
          setChapterIndex(data.chapterNumber ?? 0);
        }
      }

      setIsLoading(false); // done loading regardless
    }

    loadProgress();
  }, []);


  async function saveProgress(chapterNumber: number) {
    await fetch("/api/modules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        moduleId,
        chapterNumber,
      }),
    });
  }

  if (isLoading) {
    return (
      <main className="module-loading-container">
        <div className="spinner"></div>
        <p className="loading-text">{t("loadingProgress")}</p>
      </main>
    );
  }

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
            {chapterIndex} of {chapters.length - 1} {t("chapters")}
          </span>
        </div>
        <div className="chapter-dots">
          {chapters.slice(1).map((_, i) => {
            const dotIdx = i + 1;
            return (
              <button
                key={dotIdx}
                className={["chapter-dot", chapterIndex > dotIdx ? "done" : "", chapterIndex === dotIdx ? "active" : ""].filter(Boolean).join(" ")}
                onClick={() => { setChapterIndex(dotIdx); saveProgress(dotIdx); }}
              >
                {dotIdx}
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
      <div className="chapter-nav-buttons">
        <button
          className="chapter-btn prev-btn"
          onClick={async () => {
            setChapterIndex((i) => {
              const newIndex = Math.max(0, i - 1);
              saveProgress(newIndex);
              return newIndex;
            });
          }}
          disabled={chapterIndex === 0}
        >
          {t("previous")}
        </button>

        <button
          className="chapter-btn next-btn"
          onClick={async () => {
            setChapterIndex((i) => {
              const newIndex = Math.min(chapters.length - 1, i + 1);
              saveProgress(newIndex);
              return newIndex;
            });
          }}
          disabled={chapterIndex === chapters.length - 1}
        >
          {t("next")}
        </button>
      </div>

    </main>
  );
}
