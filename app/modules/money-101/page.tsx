"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";

export default function Money101Page() {
  // ============================================================
  //  ALL CHAPTER CONTENT
  // ============================================================
  const chapters = [
    // ==============================
    // CHAPTER 1
    // ==============================
    {
      title: {
        en: "Chapter 1: The Story of Money — From Barter to Bytes",
        kn: "ಅಧ್ಯಾಯ 1: ಹಣದ ಕಥೆ — ವಿನಿಮಯದಿಂದ ಡಿಜಿಟಲ್ ತನಕ",
      },
      content: {
        en: (
          <>
            <p>
              Long before coins and cards, people traded what they had for what they needed —
              a fisherman swapped his catch for a farmer’s grain. But barter had a flaw:
              what if the farmer didn’t want fish that day?
            </p>

            <p>
              That’s where money was born — a simple tool to make exchange easier. From
              cowrie shells and metal coins to paper notes and now digital wallets and crypto,
              money has constantly evolved to match how societies grow and trade.
            </p>

            <p>
              At its heart, money isn’t just cash or coins — it’s trust. A shared belief that
              a piece of paper or a number on a screen holds value because others agree it does.
            </p>

            <p>
              Money fuels everything — from your morning coffee to global economies.
              But while money has evolved, our understanding hasn’t. Financial literacy bridges
              that gap — because when you understand money, you don’t just use it — you control it.
            </p>
          </>
        ),

        kn: (
          <>
            <p>
              ಹಳೆಯ ಕಾಲದಲ್ಲಿ ನಾಣ್ಯಗಳು ಅಥವಾ ಕಾರ್ಡುಗಳು ಇರಲಿಲ್ಲ. ಜನರು ತಮ್ಮ ಬಳಿ ಇದ್ದದ್ದನ್ನು ಬೇರೆ ಜನರ ಜೊತೆ
              ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದರು - ಮೀನುಗಾರನು ಹಿಡಿದ ಮೀನನ್ನು ರೈತನ ಧಾನ್ಯದ ಜೊತೆ ಬದಲಾಯಿಸುತ್ತಿದ್ದ.
              ಆದ್ರೆ ಈ ವಿನಿಮಯಕ್ಕೆ ಒಂದು ತೊಂದರೆ ಇತ್ತು - ಆ ದಿನ ರೈತನಿಗೆ ಮೀನು ಬೇಕಾಗಿರದಿದ್ದರೆ ಹೇಗೆ?
            </p>

            <p>
              ಅಲ್ಲಿಂದಲೇ “ಹಣ” ಎಂಬ ಕಲ್ಪನೆ ಹುಟ್ಟಿತು — ವಿನಿಮಯವನ್ನು ಸುಲಭಗೊಳಿಸಲು ಒಂದು ಸರಳ ಸಾಧನ. ಮೊದಲು ಜನರು
              ಚಿಪ್ಪುಗಳು, ಲೋಹದ ನಾಣ್ಯಗಳು, ನಂತರ ಕಾಗದದ ನೋಟುಗಳು, ಈಗ ಡಿಜಿಟಲ್ ಹಣ ಮತ್ತು ಕ್ರಿಪ್ಟೋ - ಹೀಗೆ ಕಾಲ
              ಬದಲಾಗುತ್ತಿದ್ದಂತೆ ಹಣವೂ ಬದಲಾಗ್ತಾ ಬಂದಿದೆ.
            </p>

            <p>
              ಆದರೆ ಮೂಲದಲ್ಲಿ, ಹಣ ಅಂದ್ರೆ ಕೇವಲ ನೋಟು ಅಥವಾ ನಾಣ್ಯ ಅಲ್ಲ - ಅದು ನಂಬಿಕೆ. ಎಲ್ಲರೂ ಒಟ್ಟಿಗೆ ಒಪ್ಪಿಕೊಂಡಿದ್ದರಿಂದಲೇ
              ಒಂದು ಕಾಗದದ ತುಂಡು ಅಥವಾ ಸ್ಕ್ರೀನ್ ಮೇಲಿನ ಸಂಖ್ಯೆ “ಮೌಲ್ಯ” ಹೊಂದುತ್ತದೆ.
            </p>

            <p>
              ಇಂದು ಹಣ ಎಲ್ಲದರ ಹಿಂದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ - ನೀವು ಕುಡಿಯುವ ಕಾಫಿಯಿಂದ ನಿಮ್ಮ ಸಂಬಳದವರೆಗೆ, ಮತ್ತು ದೇಶದ ಆರ್ಥಿಕತೆಯ
              ಬೆಳವಣಿಗೆಯವರೆಗೆ. ಆದರೆ ಹಣ ಬದಲಾಗುತ್ತಿದ್ದರೂ, ಅದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ನಮ್ಮ ವಿಧಾನ ಅಷ್ಟೇ ವೇಗವಾಗಿ ಬೆಳೆಯಿಲ್ಲ.
              ಅದಕ್ಕಾಗಿ ಹಣದ ಅರಿವು (Financial Literacy) ತುಂಬಾ ಮುಖ್ಯ. ಹಣವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡರೆ, ನೀವು ಕೇವಲ ಖರ್ಚು ಅಥವಾ
              ಉಳಿಸೋದಿಲ್ಲ — ಅದನ್ನು ನಿಯಂತ್ರಿಸಬಹುದು.
            </p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 2
    // ==============================
    {
      title: {
        en: "Chapter 2: The Next Chapter — The Art of Budgeting",
        kn: "ಅಧ್ಯಾಯ 2: ಮುಂದಿನ ಹೆಜ್ಜೆ - ಬಜೆಟ್ ಮಾಡುವ ಕಲೆ",
      },
      content: {
        en: (
          <>
            <p>
              If money is the language of life, budgeting is how you learn to speak it fluently.
              Every rupee tells a story — what you earn, spend, and value. Most of us never track
              that story — we let money come and go without direction.
            </p>

            <p>
              Budgeting isn’t about restriction; it’s about intention. It helps you guide your
              money toward what truly matters. It’s the foundation of financial freedom and the
              first step toward building wealth.
            </p>

            <p>
              Before you grow wealth, you must manage what you already have. Budgeting teaches
              that discipline — turning income into impact.
            </p>
          </>
        ),

        kn: (
          <>
            <p>
              ಹಣ ಅಂದ್ರೆ ಜೀವನದ ಭಾಷೆ ಅಂದ್ರೆ, ಬಜೆಟ್ ಅಂದ್ರೆ ಆ ಭಾಷೆ ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡೋ ಕಲಿಕೆ. ಪ್ರತಿ ರೂಪಾಯಿ ಒಂದೊಂದು ಕಥೆ
              ಹೇಳುತ್ತೆ — ನೀವು ಎಷ್ಟು ಸಂಪಾದಿಸುತ್ತೀರಿ, ಎಷ್ಟು ಖರ್ಚು ಮಾಡುತ್ತೀರಿ, ಮತ್ತು ನಿಮಗೆ ಯಾವುದು ಮುಖ್ಯ ಅನ್ನೋದು.
              ಆದರೆ ನಮ್ಮಲ್ಲಿ ಬಹುತೇಕ ಜನ ಆ ಕಥೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡೋದಿಲ್ಲ.
            </p>

            <p>
              ಬಜೆಟ್ ಮಾಡೋದು ಅಂದ್ರೆ ತಡೆಹಿಡಿಯೋದು ಅಲ್ಲ — ಉದ್ದೇಶದಿಂದ ಖರ್ಚು ಮಾಡೋದು. ಇದು ನಿಮ್ಮ ಹಣ ಎಲ್ಲಿ ಹೋಗ್ತಿದೆ ಮತ್ತು
              ಅದು ಎಲ್ಲಿ ಹೋಗಬೇಕು ಅನ್ನೋದನ್ನು ತೋರಿಸುತ್ತದೆ. ಖರ್ಚಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡೋದು ಅಲ್ಲ — ನಿಮ್ಮ ಹಣದ ಮೇಲೆ ನಿಯಂತ್ರಣ ಕೊಡೋದು.
            </p>

            <p>
              ಒಳ್ಳೆಯ ಬಜೆಟ್ ಅಂದ್ರೆ ಕೇವಲ ಸಂಖ್ಯೆಗಳ ಟೇಬಲ್ ಅಲ್ಲ — ಅದು ನಿಮ್ಮ ಗುರಿಗಳ ಪ್ರತಿಬಿಂಬ. ಮುಖ್ಯವಾದ ವಿಷಯಗಳಿಗೆ ಆದ್ಯತೆ
              ಕೊಡಲು ಮತ್ತು ಬೆಳವಣಿಗೆಗೆ ಜಾಗ ಕೊಡುವುದಕ್ಕೆ ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
            </p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 3
    // ==============================
    {
      title: {
        en: "Chapter 3: From Saving to Growing — The Power of Investing",
        kn: "ಅಧ್ಯಾಯ 3: ಉಳಿಸುವುದರಿಂದ ಬೆಳೆಯುವ ತನಕ - ಹೂಡಿಕೆಯ ಶಕ್ತಿ",
      },
      content: {
        en: (
          <>
            <p>
              Once you’ve mastered budgeting, the next step is making your money grow. Saving
              keeps you safe, but investing helps you expand your possibilities.
            </p>

            <p>
              Investing means putting your money to work — in businesses, ideas, and assets
              that generate value. It’s not gambling — it’s ownership, patience, and discipline.
            </p>

            <p>
              Saving is like storing water in a tank; investing is channeling it into a field.
              One protects, the other produces. Both matter, but investing creates growth through
              compounding — where your earnings themselves start to earn more.
            </p>
          </>
        ),

        kn: (
          <>
            <p>
              ನಿಮ್ಮ ಸಂಪಾದನೆ ಮತ್ತು ಖರ್ಚು ನಿಯಂತ್ರಣ ಕಲಿತ್ಮೇಲೆ, ಮುಂದಿನ ಹೆಜ್ಜೆ — ನಿಮ್ಮ ಹಣವನ್ನು ಬೆಳೆಯಿಸುವುದು. ಬಜೆಟ್ ನಿಮ್ಮ
              ಹಣವನ್ನು ಹಿಡಿದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ; ಹೂಡಿಕೆ ಅದನ್ನು ಮುಂದಕ್ಕೆ ತೆಗೆದುಕೊಂಡು ಹೋಗುತ್ತದೆ.
            </p>

            <p>
              ಉಳಿಸುವುದು ಮಾತ್ರ ಸಾಕಾಗೋದಿಲ್ಲ, ಏಕೆಂದರೆ ಕಾಲ ಕಳೆದಂತೆ ಬೆಲೆಗಳು ಏರುತ್ತವೆ. ಅದೇ ಹಣ ಹಿಂದಿನಷ್ಟು ವಸ್ತುಗಳನ್ನು
              ಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗೋದಿಲ್ಲ. ಹೂಡಿಕೆ ಅಲ್ಲಿ ಕೆಲಸಕ್ಕೆ ಬರುತ್ತದೆ — ನಿಮ್ಮ ಹಣ ನಿಮ್ಮಗಾಗಿ ಕೆಲಸ ಮಾಡುವಂತೆ ಮಾಡುವುದು.
            </p>

            <p>
              ಉಳಿಸುವುದು ಟ್ಯಾಂಕ್‌ನಲ್ಲಿ ನೀರು ಇಟ್ಟಂತೆ; ಹೂಡಿಕೆ ಅದೇ ನೀರನ್ನು ಹೊಲಕ್ಕೆ ಹರಿಸುವಂತೆ. ಒಂದರಿಂದ ಸುರಕ್ಷತೆ, ಮತ್ತೊಂದರಿಂದ
              ಬೆಳವಣಿಗೆ. ಬೇಗನೆ ಆರಂಭಿಸಿದಷ್ಟು, ಫಲ ಹೆಚ್ಚಾಗುತ್ತದೆ — ಕಂಪೌಂಡಿಂಗ್ ಅದನ್ನೇ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.
            </p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 4
    // ==============================
    {
      title: {
        en: "Chapter 4: How to Think Like an Investor",
        kn: "ಅಧ್ಯಾಯ 4: ಹೂಡಿಕೆದಾರರಂತೆ ಯೋಚಿಸೋದು ಹೇಗೆ",
      },
      content: {
        en: (
          <>
            <p>
              Investing begins with mindset. An investor doesn’t see money as something to
              spend but as a tool to build and create value.
            </p>

            <p>
              Thinking like an investor means focusing on the long term, staying consistent,
              and letting time — not emotion — drive results.
            </p>

            <p>
              To think like an investor is to see value where others see price — to focus
              on growth over instant gratification.
            </p>
          </>
        ),

        kn: (
          <>
            <p>
              ಹೂಡಿಕೆ ಶುರುಮಾಡೋದಕ್ಕೂ ಮೊದಲು, ಹೂಡಿಕೆದಾರರು ಹೇಗೆ ಯೋಚಿಸುತ್ತಾರೆ ಅನ್ನೋದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು. ಹೂಡಿಕೆ ಅಂದ್ರೆ
              ಕೇವಲ ಹಣವಲ್ಲ — ಅದು ಮನಸ್ಥಿತಿ.
            </p>

            <p>
              ಒಳ್ಳೆಯ ಹೂಡಿಕೆದಾರನಿಗೆ ಸಹನೆ, ನಿಯಮ ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ದೃಷ್ಟಿ ಮುಖ್ಯ. ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತ ಬಂದರೂ, ಅವರು ದೊಡ್ಡ ಚಿತ್ರ
              ನೋಡುತ್ತಾರೆ — ಬೆಳವಣಿಗೆ ಸಮಯದೊಂದಿಗೆ ಬರುತ್ತದೆ ಅನ್ನೋದನ್ನು ನಂಬುತ್ತಾರೆ.
            </p>

            <p>
              ಒಳ್ಳೆಯ ಹೂಡಿಕೆದಾರರು ಬೆಲೆಯಲ್ಲಿ ಮೌಲ್ಯ ನೋಡುತ್ತಾರೆ. ತಕ್ಷಣದ ಲಾಭಕ್ಕಿಂತ ದೀರ್ಘಾವಧಿಯ ಸ್ವಾತಂತ್ರ್ಯ ಅವರಿಗೆ ಮುಖ್ಯ.
            </p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 5
    // ==============================
    {
      title: {
        en: "Chapter 5: Understanding Investment Options",
        kn: "ಅಧ್ಯಾಯ 5: ಹೂಡಿಕೆ ಆಯ್ಕೆಗಳ ಅರಿವು",
      },
      content: {
        en: (
          <>
            <p>
              There’s no single “best” investment — only the one that fits your goals,
              risk comfort, and time horizon.
            </p>

            <ul>
              <li><strong>Stocks:</strong> Ownership with high growth potential.</li>
              <li><strong>Mutual Funds:</strong> Managed diversification.</li>
              <li><strong>Bonds:</strong> Safer, stable returns.</li>
              <li><strong>Gold & Real Estate:</strong> Traditional stores of value.</li>
              <li><strong>Digital Assets:</strong> Volatile — invest carefully.</li>
            </ul>

            <p>Tip: Diversify! A balanced mix protects you during market swings.</p>
          </>
        ),

        kn: (
          <>
            <p>
              ಒಂದೇ “ಉತ್ತಮ” ಹೂಡಿಕೆ ಎಲ್ಲರಿಗೂ ಒಂದೇ ಆಗೋದಿಲ್ಲ — ಅದು ನಿಮ್ಮ ಗುರಿ, ರಿಸ್ಕ್ ಮಟ್ಟ ಮತ್ತು ಸಮಯಕ್ಕೆ
              ಅನುಗುಣವಾಗಿರುತ್ತದೆ.
            </p>

            <ul>
              <li><strong>ಷೇರುಗಳು:</strong> ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ಉತ್ತಮ ಲಾಭ, ಆದರೆ ಅಸ್ಥಿರ.</li>
              <li><strong>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ಸ್:</strong> ಪರಿಣಿತರಿಂದ ನಿರ್ವಹಣೆ, ವಿಭಜನೆ.</li>
              <li><strong>ಬಾಂಡ್ಸ್:</strong> ಸುರಕ್ಷಿತ, ಸ್ಥಿರ ಬಡ್ಡಿ.</li>
              <li><strong>ಚಿನ್ನ & ಆಸ್ತಿ:</strong> ಮೌಲ್ಯ ಉಳಿಸಿಕೊಳ್ಳುವ ಪರಂಪರೆಯ ಹೂಡಿಕೆ.</li>
              <li><strong>ಡಿಜಿಟಲ್ ಆಸ್ತಿಗಳು:</strong> ಹೆಚ್ಚು ರಿಸ್ಕ್ — ಎಚ್ಚರಿಕೆಯಿಂದ.</li>
            </ul>

            <p>ಒಳ್ಳೆಯ ಹೂಡಿಕೆದಾರರು ವಿಭಜನೆ ಮಾಡುತ್ತಾರೆ — ಇದು ರಕ್ಷಣೆ ಕೊಡುತ್ತದೆ.</p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 6
    // ==============================
    {
      title: {
        en: "Chapter 6: The Role of Risk and Emotion in Investing",
        kn: "ಅಧ್ಯಾಯ 6: ಹೂಡಿಕೆಯಲ್ಲಿ ರಿಸ್ಕ್ ಮತ್ತು ಭಾವನೆಗಳ ಪಾತ್ರ",
      },
      content: {
        en: (
          <>
            <p>
              Investing isn’t just math — it’s mindset. Risk and emotion shape every decision.
            </p>

            <p>All investments carry risk — the goal isn’t to avoid it but to manage it.</p>

            <p>
              Good investors acknowledge emotions but don’t let them take control. Strategy
              beats panic.
            </p>
          </>
        ),

        kn: (
          <>
            <p>
              ಹೂಡಿಕೆ ಅಂದ್ರೆ ಕೇವಲ ಅಂಕೆಪಂಕ್ತಿಗಳ ವಿಷಯ ಅಲ್ಲ — ಅದು ಮನಸ್ಸಿನ ಆಟ. ಮಾರುಕಟ್ಟೆಯಿಗಿಂತ ಹೆಚ್ಚು ಪ್ರಭಾವ ಬೀರುವುದೇ ನಮ್ಮ
              ಭಾವನೆಗಳು.
            </p>

            <p>
              ರಿಸ್ಕ್ ಅಂದ್ರೆ ಭಯಪಡಬೇಕಾದ್ದಲ್ಲ — ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ್ದು. ಹೆಚ್ಚು ಲಾಭ ಬೇಕೆಂದರೆ ಹೆಚ್ಚು ಅಸ್ಥಿರತೆ ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು.
            </p>

            <p>
              ಭಾವನೆ ಬಂದರೂ, ನಿರ್ಧಾರ ಗುರಿಯ ಆಧಾರದ ಮೇಲೆ ಇರಬೇಕು — ಭಾವನೆಯ ಆಧಾರದ ಮೇಲೆ ಅಲ್ಲ.
            </p>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 7
    // ==============================
    {
      title: {
        en: "Chapter 7: How to Start Investing",
        kn: "ಅಧ್ಯಾಯ 7: ಹೂಡಿಕೆ ಪ್ರಾರಂಭಿಸುವುದು ಹೇಗೆ",
      },
      content: {
        en: (
          <>
            <p>Every investor begins by starting small. You don’t need to know everything.</p>

            <ul>
              <li>Define your goals.</li>
              <li>Understand your risk appetite.</li>
              <li>Start small, stay consistent.</li>
              <li>Choose trusted platforms.</li>
              <li>Diversify wisely.</li>
              <li>Review, don’t react.</li>
              <li>Keep learning.</li>
            </ul>
          </>
        ),

        kn: (
          <>
            <p>
              ಪ್ರತಿ ಹೂಡಿಕೆದಾರರೂ ಒಮ್ಮೆ “ಮೊದಲ ಹೆಜ್ಜೆ” ಇಟ್ಟಿದ್ದಾರೆ. ನೀವು ಎಲ್ಲವನ್ನೂ ಈಗಲೇ ಅರಿತುಕೊಳ್ಳಬೇಕೆಂದಿಲ್ಲ —
              ಆರಂಭಿಸೋದು ಮುಖ್ಯ.
            </p>

            <ul>
              <li><strong>ಗುರಿ ನಿಗದಿ ಮಾಡಿ:</strong> ಚಿಕ್ಕದು ಅಥವಾ ದೀರ್ಘಾವಧಿಯದು?</li>
              <li><strong>ರಿಸ್ಕ್ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ:</strong> ಎಲ್ಲರಿಗೂ ಒಂದೇ ಮಟ್ಟ 가능ವಲ್ಲ.</li>
              <li><strong>ಚಿಕ್ಕದಾಗಿ ಪ್ರಾರಂಭಿಸಿ:</strong> ನಿಯಮಿತ SIP ಮುಖ್ಯ.</li>
              <li><strong>ಸರಿಯಾದ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್:</strong> Zerodha, Groww, Upstox...</li>
              <li><strong>ವಿಭಜನೆ ಮಾಡಿ:</strong> ಎಲ್ಲವನ್ನು ಒಂದೇ ಕಡೆ ಹಾಕಬೇಡಿ.</li>
              <li><strong>ಅತಿಯಾಗಿ ಪ್ರತಿಕ್ರಿಯೆ ಕೊಡಬೇಡಿ:</strong> ಸಮಯಕ್ಕೊಮ್ಮೆ ಪರಿಶೀಲನೆ ಸಾಕು.</li>
              <li><strong>ಕಲಿಯೋದನ್ನು ನಿಲ್ಲಿಸಬೇಡಿ:</strong> ಜ್ಞಾನ = ಆತ್ಮವಿಶ್ವಾಸ.</li>
            </ul>
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 8
    // ==============================
    {
      title: {
        en: "Chapter 8: You’ve Taken the First Step — Now Let’s Begin the Journey",
        kn: "ಅಧ್ಯಾಯ 8: ನೀವು ಮೊದಲ ಹೆಜ್ಜೆ ಇಟ್ಟೆಯಾ — ಈಗ ಪ್ರಯಾಣ ಶುರುವಾಗಲಿ",
      },
      content: {
        en: (
          <>
            <p>
              This isn’t the end — it’s your beginning. Your knowledge now becomes action.
            </p>

            <h3>The First Real Step: Opening Your Demat Account</h3>
            <p>
              A Demat account is your digital vault for stocks and funds. Choose a trusted broker
              and begin.
            </p>

            <h3>Celebrate the Start</h3>
            <p>
              You’ve taken the first step toward financial independence — keep going.
            </p>
          </>
        ),

        kn: (
          <>
            <p>
              ಇಲ್ಲಿವರೆಗೆ ಬಂದಿದ್ದರೆ, ನೀವು ಈಗಾಗಲೇ ಬಹಳ ಜನರಿಗಿಂತ ಮುಂದೆ ಇದ್ದೀರಿ. ಇದು ಅಂತ್ಯವಲ್ಲ — ಇದು ನಿಮ್ಮ ನಿಜವಾದ
              ಪ್ರಯಾಣದ ಆರಂಭ.
            </p>

            <h3>ಮೊದಲ ನಿಜವಾದ ಹೆಜ್ಜೆ — ಡಿಮಾಟ್ ಖಾತೆ ತೆರೆಯುವುದು</h3>
            <p>
              ಷೇರು, ETF ಅಥವಾ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಮೊದಲು ಡಿಮಾಟ್ ಖಾತೆ ಬೇಕು. Zerodha, Groww,
              Upstox ಮುಂತಾದ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಿಂದ ಆರಂಭಿಸಬಹುದು.
            </p>

            <h3>ಪ್ರಾರಂಭವನ್ನು ಆಚರಿಸು</h3>
            <p>
              ನೀವು ಕೇವಲ ಕಲಿತದ್ದಲ್ಲ — ಈಗ ಕಾರ್ಯರೂಪ ಕೊಡಲು ಸಿದ್ಧ. ನಿಮ್ಮ ಜ್ಞಾನವೇ ನಿಮ್ಮ ಸಂಪತ್ತು.
            </p>
          </>
        ),
      },
    },
  ];


  // ============================================================
  // STATE & PARAMS
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<"en" | "kn">("en");

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const moduleId = "money-101";

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
        <p className="loading-text">Loading your progress…</p>
      </main>
    );
  }

  return (
    <main className="container module-detail-container">

      {/* === Module Header === */}
      <section className="module-header">
        <div className="module-number" style={{ borderColor: "#f1c40f" }}>
          1
        </div>

        <div className="module-info">
          <h1>The Story of Money — From Barter to Bytes</h1>

          <p className="subtitle">
            Discover how money evolved, why budgeting matters, and how to grow wealth
            through investing with clarity and confidence.
          </p>

          <div className="module-links" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a href="#">Watch videos</a>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "kn")}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="kn">Kannada</option>
            </select>
          </div>

        </div>
      </section>

      <hr className="divider" />

      {/* === Active Chapter === */}
      <section className="chapters-list">
        <div className="chapter">
          <h2>{current.title[language]}</h2>
          {current.content[language]}
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
          Previous
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
          Next
        </button>
      </div>

    </main>
  );
}
