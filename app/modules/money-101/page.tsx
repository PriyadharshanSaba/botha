"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

const imgStyle: React.CSSProperties = {
  display: "block", margin: "28px auto", maxWidth: "100%",
  borderRadius: 12, border: "1px solid rgba(201,168,76,0.15)",
};

export default function Money101Page() {
  const { t, lang } = useLanguage();
  // ============================================================
  //  ALL CHAPTER CONTENT
  // ============================================================
  const chapters = [
    // ==============================
    // CHAPTER 1
    // ==============================
    {
      title: {
        en: "Chapter 1: The Story of Money - From Barter to Bytes",
        kn: "ಅಧ್ಯಾಯ 1: ಹಣದ ಕಥೆ — ವಿನಿಮಯದಿಂದ ಡಿಜಿಟಲ್ ಯುಗದವರೆಗೆ",
      },
      content: {
        en: (
          <>
            <p>
              Long before coins and cards, people traded what they had for what they needed - a fisherman swapped his catch for a farmer&apos;s grain. But barter had a flaw: what if the farmer didn&apos;t want fish that day?
            </p>
            <p>
              <strong>That&apos;s where money was born - a simple tool to make exchange easier.</strong> From cowrie shells and metal coins, to paper notes, and now digital wallets and crypto, money has constantly evolved to match how societies grow and trade.
            </p>
            <p>
              <strong>At its heart, money isn&apos;t just cash or coins - it&apos;s trust.</strong> A shared belief that a piece of paper or a number on a screen holds value because others agree it does.
            </p>
            <p>
              Today, money fuels everything around us - from the coffee you buy, to the salary you earn, to the investments that build the economy. Banks move it, governments regulate it, and markets run on it.
            </p>
            <p>
              <strong>But while money has evolved, our understanding of it hasn&apos;t kept pace.</strong> We use it every day - yet few truly know how it works, grows, or loses value.
            </p>
            <p>
              <strong>That&apos;s why financial literacy matters more than ever.</strong> When you understand money, you don&apos;t just spend or save - you control it.
            </p>
            <img src="/money-101/ch1.png" alt="The evolution of money" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ನಾಣ್ಯಗಳು ಮತ್ತು ಕಾರ್ಡ್‌ಗಳು ಬಂದುದಕ್ಕೆ ಮೊದಲು, ಜನರು ತಮ್ಮ ಬಳಿ ಇದ್ದ ವಸ್ತುಗಳನ್ನು ತಮಗೆ ಬೇಕಾದ ವಸ್ತುಗಳಿಗೆ ಪರಸ್ಪರ ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದರು. ಒಬ್ಬ ಮೀನುಗಾರನು ತಾನು ಹಿಡಿದ ಮೀನುಗಳನ್ನು ರೈತನ ಧಾನ್ಯಕ್ಕೆ ವಿನಿಮಯ ಮಾಡುತ್ತಿದ್ದ. ಆದರೆ ಈ ವಿನಿಮಯ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಒಂದು ಸಮಸ್ಯೆ ಇತ್ತು, ಆ ದಿನ ರೈತನಿಗೆ ಮೀನು ಬೇಕಾಗಿಲ್ಲದಿದ್ದರೆ?
            </p>
            <p>
              ಅಲ್ಲಿಂದಲೇ ವಿನಿಮಯವನ್ನು ಸುಲಭಗೊಳಿಸಲು ಒಂದು ಸರಳ ಸಾಧನವಾಗಿ ಹಣದ ಉದಯವಾಯಿತು.
            </p>
            <p>
              ಕವಡೆಗಳು ಮತ್ತು ಲೋಹದ ನಾಣ್ಯಗಳಿಂದ ಹಿಡಿದು ಕಾಗದದ ನೋಟುಗಳು, ಇಂದಿನ ಡಿಜಿಟಲ್ ವಾಲೆಟ್‌ಗಳು ಮತ್ತು ಕ್ರಿಪ್ಟೋವರೆಗೂ, ಸಮಾಜಗಳು ಹೇಗೆ ಬೆಳೆಯುತ್ತವೆಯೋ ಮತ್ತು ವ್ಯವಹಾರ ಮಾಡುತ್ತವೆಯೋ ಅದಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಹಣವೂ ನಿರಂತರವಾಗಿ ವಿಕಾಸಗೊಂಡಿದೆ.
            </p>
            <p>
              ಆದರೆ ಅದರ ಮೂಲತಹ, ಹಣವೆಂದರೆ ಕೇವಲ ನಗದು ಅಥವಾ ನಾಣ್ಯಗಳಲ್ಲ - ಅದು ನಂಬಿಕೆ.
            </p>
            <p>
              ಒಂದು ಕಾಗದದ ತುಂಡು ಅಥವಾ ಪರದೆಯ ಮೇಲಿನ ಒಂದು ಸಂಖ್ಯೆ ಮೌಲ್ಯ ಹೊಂದಿದೆ ಎಂಬುದು ಸಾಮೂಹಿಕ ನಂಬಿಕೆ — ಏಕೆಂದರೆ ಇತರರೂ ಅದನ್ನು ಮೌಲ್ಯಯುತವೆಂದು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಾರೆ.
            </p>
            <p>
              ಇಂದು ಹಣವು ನಮ್ಮ ಸುತ್ತಲಿನ ಬಹುತೇಕ ಎಲ್ಲಾ ವ್ಯವಹಾರಗಳನ್ನು ನಡೆಸುತ್ತದೆ. ನೀವು ಖರೀದಿಸುವ ಕಾಫಿಯಿಂದ ಹಿಡಿದು, ನೀವು ಸಂಪಾದಿಸುವ ವೇತನದವರೆಗೆ, ಮತ್ತು ಆರ್ಥಿಕತೆಯನ್ನು ನಿರ್ಮಿಸುವ ಹೂಡಿಕೆಗಳವರೆಗೆ, ಬ್ಯಾಂಕುಗಳು ಅದನ್ನು ಮುನ್ನಡೆಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತವೆ, ಸರ್ಕಾರಗಳು ಅದನ್ನು ನಿಯಂತ್ರಿಸುತ್ತವೆ, ಮತ್ತು ತಂತ್ರಜ್ಞಾನವು ಅದರ ಹರಿವನ್ನು ಹಿಂದಿನಿಗಿಂತಲೂ ವೇಗಗೊಳಿಸುತ್ತಿದೆ.
            </p>
            <p>
              ಆದರೆ ಹಣವು ವಿಕಾಸವಾದಸ್ಟು ವೇಗದಲ್ಲಿ ಅದರ ಕುರಿತು ನಮ್ಮ ಅರಿವು ಅದೇ ಸಮಾನಾಂತರ ವೇಗದಲ್ಲಿ ಬೆಳೆಯಲಿಲ್ಲ.
            </p>
            <p>
              ನಾವು ಪ್ರತಿನಿತ್ಯ ಅದನ್ನು ಬಳಸುತ್ತೇವೆ — ಆದರೆ ಅದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಹೇಗೆ ಬೆಳೆಯುತ್ತದೆ, ಅಥವಾ ಹೇಗೆ ತನ್ನ ಮೌಲ್ಯ ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ ಎಂಬುದನ್ನು ನಿಜವಾಗಿ ಕೆಲವರಸ್ಟೆ ತಿಳಿದಿದ್ದಾರೆ.
            </p>
            <p>
              ಆದ್ದರಿಂದ ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ ಇಂದು ಹಿಂದೆಂದಿಗಿಂತ ಇಂದು ಹೆಚ್ಚು ಮಹತ್ವವಾಗಿದೆ.
            </p>
            <p>
              ನೀವು ಹಣವನ್ನು ಸರಿಯಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡಾಗ, ನೀವು ಕೇವಲ ಖರ್ಚು ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಉಳಿಸುವುದಿಲ್ಲ, ನೀವು ಅದನ್ನು ನಿಯಂತ್ರಿಸುತ್ತೀರಿ.
            </p>
            <img src="/money-101/ch1.png" alt="The evolution of money" style={imgStyle} />
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 2
    // ==============================
    {
      title: {
        en: "Chapter 2: The Next Chapter - The Art of Budgeting",
        kn: "ಅಧ್ಯಾಯ 2: ಮುಂದಿನ ಅಧ್ಯಾಯ ಆಯವ್ಯಯ ಕಲೆ",
      },
      content: {
        en: (
          <>
            <p>
              <strong>If money is the language of life, budgeting is how you learn to speak it fluently.</strong>
            </p>
            <p>
              Every rupee tells a story - of what you earn, what you spend, and what you value. But most of us never really track that story. We let money come and go without direction.
            </p>
            <p>
              <strong>Budgeting isn&apos;t about restriction - it&apos;s about intention.</strong> It helps you understand where your money goes, and more importantly, where it should go.
            </p>
            <p>
              A good budget isn&apos;t just numbers on a screen - it&apos;s a reflection of your goals. It helps you prioritize what truly matters, build safety nets, and create room for growth.
            </p>
            <p>
              Whether it&apos;s saving for travel, investing early, or simply cutting back on what doesn&apos;t serve you - budgeting is where financial freedom begins.
            </p>
            <p>
              <strong>Because before you can grow wealth, you need to know how to manage what you already have.</strong>
            </p>
            <img src="/money-101/ch2.png" alt="The art of budgeting" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ಹಣವು ಬದುಕಿನ ಭಾಷೆಯಾದರೆ, ಆಯವ್ಯಯ ಅಥವಾ ಬಜೆಟಿಂಗ್ ಅದರ ಸರಾಗವಾಗಿ ಮಾತನಾಡಲು ಕಲಿಯುವ ಮಾರ್ಗವಾಗಿದೆ.
            </p>
            <p>
              ಪ್ರತಿ ರೂಪಾಯಿ ಒಂದು ಕಥೆಯನ್ನು ಹೇಳುತ್ತದೆ - ನೀವು ಗಳಿಸುವ, ನೀವು ಖರ್ಚುಮಾಡುವ, ಮತ್ತು ನೀವು ಮೌಲ್ಯ ನೀಡುವ ಕಥೆ. ಆದರೆ ನಮ್ಮಲ್ಲಿ ಹೆಚ್ಚಿನವರು ಆ ಕಥೆಯನ್ನು ನಿಜವಾಗಿ ಗಮನಿಸುವುದಿಲ್ಲ. ಹಣವನ್ನು ನಮ್ಮ ಯಾವುದೇ ನಿರ್ದೇಶನವಿಲ್ಲದೆ ಬಂದ ಹಾಗೆ ಹೋದ ಹಾಗೆ ಬಿಡುತ್ತೇವೆ, ಮತ್ತು ನಾವು ಅರಿಯುವಷ್ಟರಲ್ಲಿ ಅದು ಹೋಗಿರುತ್ತದೆ, ನಾವು ಸಾಕಷ್ಟು ಗಳಿಸದಿದ್ದುದರಿಂದ ಅಲ್ಲ, ನಾವು ಸಾಕಷ್ಟು ಯೋಜನೆ ಮಾಡದಿದ್ದುದರಿಂದ.
            </p>
            <p>
              ಆಯವ್ಯಯ ಎಂದರೆ ನಿಯಂತ್ರಣ ಅಥವಾ ನಿರ್ಬಂಧವಲ್ಲ ಅದು ಉದ್ದೇಶಿತವಾಗಿದೆ.
            </p>
            <p>
              ಅದು ನಿಮ್ಮ ಹಣ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ಮತ್ತು ಅದಕ್ಕಿಂತ ಮುಖ್ಯವಾಗಿ ಅದು ಎಲ್ಲಿಗೆ ಹೋಗಬೇಕು ಎಂಬುದನ್ನೂ ತಿಳಿಯಲು ನೆರವಾಗುತ್ತದೆ. ಇದು ಖರ್ಚು-ವೆಚ್ಚಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯೆಯಿಂದ ಹಣಕಾಸಿನ ಮೇಲಿನ ನಿಯಂತ್ರಣವನ್ನು ಪಡೆಯುವವರೆಗೆ ನಿಮ್ಮನ್ನು ಮುನ್ನಡೆಸುತ್ತದೆ.
            </p>
            <p>
              ಒಳ್ಳೆಯ ಬಜೆಟ್ ಎಂದರೆ ಕೇವಲ ಪರದೆಯ ಮೇಲಿರುವ ಕೆಲವು ಸಂಖ್ಯೆಗಳು ಅಲ್ಲ- ಅದು ನಿಮ್ಮ ಗುರಿಗಳ ಪ್ರತಿಬಿಂಬವಾಗಿದೆ.
            </p>
            <p>
              ಅದು ನಿಜವಾಗಿ ಮುಖ್ಯವಾದುದಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಲು, ಸುರಕ್ಷತಾ ಜಾಲಗಳನ್ನು ನಿರ್ಮಿಸಲು, ಮತ್ತು ಬೆಳವಣಿಗೆಗೆ ಅವಕಾಶ ಸೃಷ್ಟಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
            </p>
            <p>
              ಪ್ರಯಾಣಕ್ಕಾಗಿ ಉಳಿತಾಯ ಮಾಡುವುದು ಆಗಿರಲಿ, ಮುಂಚಿತ ಹೂಡಿಕೆ ಪ್ರಾರಂಭಿಸುವುದು ಆಗಿರಲಿ, ಅಥವಾ ಅನಗತ್ಯ ಖರ್ಚುಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು ಆಗಿರಲಿ, ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯ ಪ್ರಾರಂಭವಾಗುವ ಸ್ಥಳವೇ ಬಜೆಟಿಂಗ್.
            </p>
            <p>
              ಏಕೆಂದರೆ ಸಂಪತ್ತು ನಿರ್ಮಿಸುವುದಕ್ಕಿಂತ ಮೊದಲು, ನಿಮ್ಮ ಬಳಿ ಈಗಿರುವ ಹಣವನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕು ಎಂಬುದನ್ನು ತಿಳಿದುಕೊಳ್ಳಬೇಕು.
            </p>
            <img src="/money-101/ch2.png" alt="The art of budgeting" style={imgStyle} />
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 3
    // ==============================
    {
      title: {
        en: "Chapter 3: From Saving to Growing - The Power of Investing",
        kn: "ಅಧ್ಯಾಯ 3: ಉಳಿತಾಯದಿಂದ ಬೆಳವಣಿಗೆವರೆಗೆ - ಹೂಡಿಕೆಯ ಶಕ್ತಿ",
      },
      content: {
        en: (
          <>
            <p>
              Once you&apos;ve learned to manage what you earn, the next step is to make your money grow. Budgeting helps you control your spending - investing helps you expand your possibilities.
            </p>
            <p>
              For most of us, the first lesson we&apos;re taught about money is to save. We keep it safe in banks, FDs, and feel a sense of security watching it stay intact.
            </p>
            <p>
              Investing is how you make your money work while you rest. It&apos;s not about taking wild risks or chasing quick profits - it&apos;s about ownership, patience, and clarity.
            </p>
            <p>
              Think of it this way - saving is like storing water in a tank; investing is like channeling it into a field. One keeps you safe, the other helps you grow.
            </p>
            <p>
              The earlier you start, the stronger your foundation. Small, consistent investments - even modest ones - can build something powerful over time through compounding.
            </p>
            <p>
              <strong>Investing isn&apos;t about luck or timing; it&apos;s about understanding and consistency.</strong> It&apos;s about shifting from being a spender to being a builder - someone who creates opportunities, not just consumes them.
            </p>
            <p>
              Because in the long run, wealth isn&apos;t just what you save - it&apos;s what you grow.
            </p>
            <img src="/money-101/ch3.png" alt="The power of investing" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ನೀವು ಗಳಿಸುವ ಹಣವನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕು ಎಂಬುದನ್ನು ಕಲಿತ ನಂತರ, ಮುಂದಿನ ಹಂತವೆಂದರೆ ನಿಮ್ಮ ಹಣವನ್ನು ಬೆಳೆಸುವುದು.
            </p>
            <p>
              ಬಜೆಟಿಂಗ್ ನಿಮ್ಮ ಖರ್ಚನ್ನು ನಿಯಂತ್ರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಹೂಡಿಕೆ ನಿಮ್ಮ ಸಾಧ್ಯತೆಗಳನ್ನು ವಿಸ್ತರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
            </p>
            <p>
              ನಮ್ಮಲ್ಲಿ ಹೆಚ್ಚಿನವರಿಗೆ ಹಣದ ಬಗ್ಗೆ ಕಲಿಸಲಾಗುವ ಮೊದಲ ಪಾಠವೇ ಉಳಿತಾಯ ಮಾಡುವುದು. ನಾವು ಅದನ್ನು ಬ್ಯಾಂಕುಗಳಲ್ಲಿ ಮತ್ತು ನಿಶ್ಚಿತ ಠೇವಣಿಗಳಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳುತ್ತೇವೆ, ಮತ್ತು ಅದು ಹಾಗೆಯೇ ಉಳಿದಿರುವುದನ್ನು ನೋಡಿ ಒಂದು ಭದ್ರತೆಯ ಭಾವನೆ ಹೊಂದುತ್ತೇವೆ.
            </p>
            <p>
              ಆದರೆ ಕಾಲಕ್ರಮೇಣ, ಸದ್ದಿಲ್ಲದೆಯೇ ಕೆಲವೊಂದು ಬದಲಾವಣೆ ಸಂಭವಿಸುತ್ತದೆ ಬೆಲೆಗಳು ಏರುತ್ತವೆ, ಖರ್ಚುಗಳು ಹೆಚ್ಚಾಗುತ್ತವೆ, ಮತ್ತು ಅದೇ ಪ್ರಮಾಣದ ಹಣದಿಂದ ನೀವು ಹಿಂದೆಗಿಂತ ಸ್ವಲ್ಪ ಕಡಿಮೆ ವಸ್ತುಗಳನ್ನು ಮಾತ್ರ ಖರೀದಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.
            </p>
            <p>
              ಅಲ್ಲಿಯೇ ಹೂಡಿಕೆ ತನ್ನ ಹೆಜ್ಜೆ ಇರಿಸಲು ಆರಂಭಿಸುತ್ತದೆ.
            </p>
            <p>
              ಹೂಡಿಕೆ ಎಂದರೆ ನೀವು ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತಿರುವಾಗಲೂ ನಿಮ್ಮ ಹಣವನ್ನು ದುಡಿಸುವ ವಿಧಾನ. ಇದು ಕಠಿಣ ಅಪಾಯಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದು ಅಲ್ಲ ಅಥವಾ ತ್ವರಿತ ಲಾಭಗಳಿಗಾಗಿ ಬೆನ್ನು ಹತ್ತುವುದು - ಹೂಡಿಕೆ ಎಂದರೆ ಮಾಲಿಕತ್ವ, ಸಹನೆ, ಮತ್ತು ಶಿಸ್ತು.
            </p>
            <p>
              ನೀವು ಹೂಡಿಕೆ ಮಾಡಿದಾಗ, ನಿಮ್ಮ ಹಣವನ್ನು ಕಲ್ಪನೆಗಳು, ವ್ಯವಹಾರಗಳು, ಅಥವಾ ಆಸ್ತಿಗಳಲ್ಲಿ ಹೂಡುತ್ತೀರಿ ಮತ್ತು ಬೆಳೆಯುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿರುತ್ತದೆ. ಅದಕ್ಕೆ ಪ್ರತಿಯಾಗಿ, ನಿಮ್ಮ ಸಂಪತ್ತೂ ಅವುಗಳೊಂದಿಗೆ ಬೆಳೆಯುತ್ತದೆ.
            </p>
            <p>
              ಇದನ್ನು ಈ ರೀತಿಯಾಗಿ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ ಉಳಿತಾಯವು ನೀರನ್ನು ಒಂದು ಟ್ಯಾಂಕ್‌ನಲ್ಲಿ ಸಂಗ್ರಹಿಸುವಂತೆ; ಹೂಡಿಕೆ ಅದನ್ನು ಒಂದು ಹೊಲಕ್ಕೆ ಹರಿಸುವಂತೆ. ಒಂದು ನಿಮ್ಮನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸುತ್ತದೆ, ಇನ್ನೊಂದು ಅರ್ಥಪೂರ್ಣವಾದದನ್ನ ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇರಡೂ ಮಹತ್ವದ್ದೇ, ಆದರೆ ಅವುಗಳ ಉದ್ದೇಶಗಳು ವಿಭಿನ್ನವಾಗಿದೆ.
            </p>
            <p>
              ನೀವು ಬೇಗ ಪ್ರಾರಂಭಿಸಿದಷ್ಟು, ನಿಮ್ಮ ಅಡಿಪಾಯ ಹೆಚ್ಚು ಬಲಿಷ್ಠವಾಗುತ್ತದೆ. ಸಣ್ಣ ಮತ್ತು ನಿರಂತರ ಹೂಡಿಕೆಗಳು ಅವು ಅಲ್ಪವಾಗಿದ್ದರೂ ಸಹ ಕಾಲಕ್ರಮೇಣ ಸಂಯೋಜಿತ ಬೆಳವಣಿಗೆಯ ಮೂಲಕ ಶಕ್ತಿಯುತವಾದದ್ದನ್ನು ನಿರ್ಮಿಸಬಹುದು, ಅಂದರೆ ನಿಮ್ಮ ಗಳಿಕೆಯೇ ಮತ್ತಷ್ಟು ಗಳಿಕೆಯ ಗಳಿಸಲು ಆರಂಭಿಸುತ್ತದೆ.
            </p>
            <p>
              ಹೂಡಿಕೆ ಅದೃಷ್ಟ ಅಥವಾ ಸೂಕ್ತ ಸಮಯದ ಬಗ್ಗೆ ಅಲ್ಲ; ಅದು ಸ್ಪಷ್ಟ ಅರಿವು ಮತ್ತು ನಿರಂತರತೆಯ ಬಗ್ಗೆ. ಇದು ಖರ್ಚುಮಾಡುವವನಿಂದ ಸಂಪತ್ತು ನಿರ್ಮಿಸುವವನಾಗುವ ಕಡೆಗೆ ಸ್ಥಾನಪಲ್ಲಟ ಅಂದರೆ - ಪ್ರಸ್ತುತ ಕ್ಷಣದಾಚೆಗೂ ತನ್ನ ಮೌಲ್ಯವನ್ನು ಸೃಷ್ಠಿಸಲು ಹಣಕ್ಕೆ ಅನುವು ಮಾಡಿ ಕೊಡುವ ವ್ಯಕ್ತಿಯಾಗುವುದು.
            </p>
            <p>
              ಏಕೆಂದರೆ ದೀರ್ಘಾವಧಿಯಲ್ಲಿ, ಸಂಪತ್ತು ಎಂದರೆ ನೀವು ಕೇವಲ ಉಳಿಸುವುದಷ್ಟೇ ಅಲ್ಲ, ನೀವು ಅದನ್ನು ಬೆಳೆಯಿಸುವುದಾಗಿದೆ.
            </p>
            <img src="/money-101/ch3.png" alt="The power of investing" style={imgStyle} />
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
        kn: "ಅಧ್ಯಾಯ 4: ಹೂಡಿಕೆದಾರನಂತೆ ಯೋಚಿಸುವುದು ಹೇಗೆ?",
      },
      content: {
        en: (
          <>
            <p>
              Before you learn where to invest, it&apos;s important to understand how an investor thinks. Because investing isn&apos;t just about money - it&apos;s about mindset.
            </p>
            <p>
              <strong>An investor doesn&apos;t see money as something to be spent or stored, but as a tool</strong> - one that can build opportunities, fund ideas, and shape futures.
            </p>
            <p>
              <strong>At its core, investing is a blend of patience, discipline, and curiosity.</strong> You don&apos;t have to predict markets or chase trends. Instead, you observe, learn, and act with intention.
            </p>
            <p>
              Smart investors don&apos;t panic when markets move. They understand that growth isn&apos;t linear. Like seasons, markets rise and fall - but what matters is staying invested and staying informed.
            </p>
            <p>
              <strong>To think like an investor is to see value where others see price.</strong> It&apos;s to choose understanding over emotion, long-term over instant, and purpose over impulse.
            </p>
            <p>
              The journey begins not with your first investment, but with your first decision to think differently.
            </p>
            <img src="/money-101/ch4.png" alt="Thinking like an investor" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ನೀವು ಎಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಬೇಕು ಎಂಬುದನ್ನು ಕಲಿಯುವ ಮೊದಲು, ಹೂಡಿಕೆದಾರನು ಹೇಗೆ ಯೋಚಿಸುತ್ತಾನೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಮುಖ್ಯ. ಏಕೆಂದರೆ ಹೂಡಿಕೆ ಎಂದರೆ ಕೇವಲ ಹಣದ ಬಗ್ಗೆ ಮಾತ್ರವಲ್ಲ - ಅದು ಮನೋಭಾವದ ಬಗ್ಗೆ ಕೂಡ.
            </p>
            <p>
              ಒಬ್ಬ ಹೂಡಿಕೆದಾರನು ಹಣವನ್ನು ಖರ್ಚುಮಾಡಲು ಅಥವಾ ಸಂಗ್ರಹಿಸಲು ಇರುವ ವಸ್ತುವೆಂದು ನೋಡುವುದಿಲ್ಲ. ಬದಲಿಗೆ ಅದನ್ನು ಅವಕಾಶಗಳನ್ನು ನಿರ್ಮಿಸಬಲ್ಲ, ಕಲ್ಪನೆಗಳಿಗೆ ನೆರವಾಗಬಲ್ಲ, ಮತ್ತು ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಬಲ್ಲ ಒಂದು ಸಾಧನವಾಗಿ ನೋಡುತ್ತಾನೆ.
            </p>
            <p>
              ಪ್ರತಿ ರೂಪಾಯಿಗೂ ಒಂದು ಸಾಧ್ಯತೆ ಇದೆ, ಮತ್ತು ಆ ಸಾಧ್ಯತೆ ಬೆಳೆಯುತ್ತದೆಯೇ ಅಥವಾ ನಿಧಾನವಾಗಿ ಕುಸಿಯುತ್ತದೆಯೇ ಎಂಬುದನ್ನು ನಿಮ್ಮ ನಿರ್ಧಾರಗಳು ನಿರ್ಧರಿಸುತ್ತವೆ.
            </p>
            <p>
              ಹೂಡಿಕೆಯು ಮೂಲತ: ಸಹನೆ, ಶಿಸ್ತು, ಮತ್ತು ಕುತೂಹಲದ ಸಂಯೋಜನೆ. ನೀವು ಮಾರುಕಟ್ಟೆಯನ್ನು ಭವಿಷ್ಯ ಊಹಿಸಬೇಕಾಗಿಲ್ಲ ಅಥವಾ ಪ್ರಚಲಿತ ಒಟ್ಟಾರೆ ಗತಿಯನ್ನು ಹಿಂಬಾಲಿಸಬೇಕಾಗಿಲ್ಲ. ಬದಲಾಗಿ, ನೀವು ಗಮನಿಸುತ್ತೀರಿ, ಕಲಿಯುತ್ತೀರಿ, ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ಆಟವನ್ನು ಆಡುತ್ತೀರಿ.
            </p>
            <p>
              ನೀವು ಸಣ್ಣದಾಗಿ ಪ್ರಾರಂಭಿಸುತ್ತೀರಿ, ನಿರಂತರವಾಗಿರುತ್ತೀರಿ, ಮತ್ತು ನಿಮ್ಮ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಒಡನಾಡಿಯಾದ ಸಮಯಕ್ಕೆ ತನ್ನ ಕೆಲಸವನ್ನು ಮಾಡಲು ಬಿಡುತ್ತೀರಿ.
            </p>
            <p>
              ಬುದ್ಧಿವಂತ ಹೂಡಿಕೆದಾರರು ಮಾರುಕಟ್ಟೆ ಏರುಪೇರಿನ ಚಲನೆಗೆ ಆತಂಕಗೊಳ್ಳುವುದಿಲ್ಲ. ಬೆಳವಣಿಗೆ ಎಂದಿಗೂ ಸರಳ ರೇಖೆಯಂತೆ ಸಾಗುವುದಿಲ್ಲ ಎಂಬುದನ್ನು ಅವರು ಅರ್ಥಮಾಡಿಕೊಂಡಿರುತ್ತಾರೆ. ಋತುಗಳಂತೆ, ಮಾರುಕಟ್ಟೆಯೂ ಏರುತ್ತದೆ ಮತ್ತು ಇಳಿಯುತ್ತದೆ ಆದರೆ ಪ್ರಾಮುಖ್ಯವಾದುದು ಆ ಏರಿಳಿತ ಚಕ್ರಗಳ ನಡುವೆ ನಿರಂತರ ಹೂಡಿಕೆ ಮಾಡುತ್ತಲೇ ಇರುವುದು.
            </p>
            <p>
              ಏಕೆಂದರೆ ಸಂಪತ್ತು ರಾತ್ರಿ ಬೆಳಗಾಗುವುದರ ಒಳಗೆ ನಿರ್ಮಾಣವಾಗುವುದಿಲ್ಲ - ಅದು ನಿಧಾನವಾಗಿ, ಸಂಯೋಜಿತಕ್ರಿಯೆಗಳ (Compounding) ಮೂಲಕ ನಿರ್ಮಾಣವಾಗುತ್ತದೆ.
            </p>
            <p>
              ಹೂಡಿಕೆದಾರನಂತೆ ಯೋಚಿಸುವುದು ಎಂದರೆ ಇತರರು ಬೆಲೆ ನೋಡುತ್ತಿರುವಲ್ಲಿ ನೀವು ಮೌಲ್ಯವನ್ನು ನೋಡುವುದು. ಅದು ಭಾನಾತ್ಮಕ ಅಂಶಗಳಿಗಿಂತ ವಾಸ್ತವಾಂಶ ಅರಿವನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು, ತತ್ ಕ್ಷಣದ ಫಲಿತಾಂಶಗಳಿಗಿಂತ ದೀರ್ಘಾವಧಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು, ಮತ್ತು ತುರ್ತು ಪ್ರಚೋದನೆಗಿಂತ ಉದ್ದೇಶವನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು.
            </p>
            <p>
              ನಿಜವಾದ ಹೂಡಿಕೆ ಎಂದರೆ ದಿಡೀರ್ ಶ್ರೀಮಂತರಾಗುವುದು ಅಲ್ಲ ಅದು ನಿಧಾನವಾಗಿ ಮತ್ತು ಸ್ಥಿರವಾಗಿ ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ನಿರ್ಮಿಸುವುದು ಎಂಬುದನ್ನು ಕಲಿಯುವುದು.
            </p>
            <p>
              ಈ ಪ್ರಯಾಣವು ನಿಮ್ಮ ಮೊದಲ ಹೂಡಿಕೆಯಿಂದ ಆರಂಭವಾಗುವುದಿಲ್ಲ ಅದು ವಿಭಿನ್ನವಾಗಿ ಯೋಚಿಸಲು ತೆಗೆದುಕೊಳ್ಳುವ ನಿಮ್ಮ ಮೊದಲ ನಿರ್ಧಾರದಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.
            </p>
            <img src="/money-101/ch4.png" alt="Thinking like an investor" style={imgStyle} />
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
        kn: "ಅಧ್ಯಾಯ 5: ಹೂಡಿಕೆಯ ಆಯ್ಕೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
      },
      content: {
        en: (
          <>
            <p>
              Now that you know why investing matters and how to think like an investor,
              it&apos;s time to explore where you can put your money to work.
            </p>
            <p>
              There&apos;s no single best investment - only the one that fits your goals, risk
              level, and time horizon. Let&apos;s look at some of the most common ways people
              invest and how each helps your wealth grow.
            </p>
            <hr className="chapter-rule" />
            <h3>1. Stocks (Equity)</h3>
            <p>
              When you buy a stock, you&apos;re buying a small ownership in a company. If the
              company grows, your share of its value grows too.
            </p>
            <p>
              Stocks can deliver strong returns over time but can also be volatile - meaning
              their prices can rise or fall in the short term. That&apos;s why stocks are great
              for long-term investors who can stay patient through market ups and downs.
            </p>
            <hr className="chapter-rule" />
            <h3>2. Mutual Funds &amp; SIPs</h3>
            <p>
              Mutual funds pool money from many investors and invest it in stocks, bonds, or
              other assets. A professional fund manager handles where the money goes.
            </p>
            <p>
              Systematic Investment Plans (SIPs) let you invest small amounts regularly,
              helping you build wealth slowly through discipline and consistency. They&apos;re
              perfect for beginners - easy, low-stress, and backed by expert management.
            </p>
            <hr className="chapter-rule" />
            <h3>3. Bonds &amp; Fixed Income</h3>
            <p>
              Think of bonds as loans you give to companies or governments. They promise to
              pay you interest at regular intervals.
            </p>
            <p>
              Bonds are generally safer than stocks but offer lower returns. They help
              stabilize your portfolio - a balance between risk and security.
            </p>
            <hr className="chapter-rule" />
            <h3>4. Gold &amp; Real Estate</h3>
            <p>
              Traditionally, Indians have always trusted gold and property as stores of value.
              Gold protects against inflation and uncertainty, while real estate can provide
              both growth and rental income.
            </p>
            <p>
              However, both require thoughtful planning - they can be expensive and less
              liquid (harder to sell quickly).
            </p>
            <hr className="chapter-rule" />
            <h3>5. Digital Assets (With Caution)</h3>
            <p>
              Cryptocurrencies and new digital assets are becoming popular among young
              investors. While they can offer high returns, they also come with high risk
              and uncertainty.
            </p>
            <p>
              Before investing, understand the technology, regulations, and risks involved -
              never invest in what you don&apos;t understand.
            </p>
            <hr className="chapter-rule" />
            <h3>Building a Balanced Portfolio</h3>
            <p>
              The secret to smart investing is diversification - spreading your money across
              different types of investments. That way, if one area dips, another can balance
              it out.
            </p>
            <p>
              Your mix depends on who you are - your age, goals, and comfort with risk. Think
              of it like your diet: a good mix keeps you healthy and steady.
            </p>
            <img src="/money-101/ch5.png" alt="Understanding investment options" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ಈಗ ನೀವು ಹೂಡಿಕೆ ಮಹತ್ವದ್ದೆಂದು ಮತ್ತು ಹೂಡಿಕೆದಾರನಂತೆ ಹೇಗೆ ಯೋಚಿಸಬೇಕು ಎಂಬುದನ್ನು ತಿಳಿದುಕೊಂಡಿರುವುದರಿಂದ, ನಿಮ್ಮ ಹಣವನ್ನು ಹೇಗೆ ದುಡಿಸಿಕೊಳ್ಳಬಹುದು ಎಂಬುದನ್ನು ಅನ್ವೇಷಿಸುವ ಸಮಯ ಬಂದಿದೆ.
            </p>
            <p>
              ಯಾವುದೋ ಒಂದು ಮಾತ್ರ ಅತ್ಯುತ್ತಮ ಹೂಡಿಕೆ ಎನ್ನುವುದಿಲ್ಲ. ನಿಮ್ಮ ಗುರಿಗಳು, ಅಪಾಯವನ್ನು ಸ್ವೀಕರಿಸುವ ಸಾಮರ್ಥ್ಯ, ಮತ್ತು ಸಮಯಾವಧಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಹೂಡಿಕೆಯೇ ಅತ್ಯುತ್ತಮ ಹೂಡಿಕೆ.
            </p>
            <p>
              ಸಾಮಾನ್ಯವಾಗಿ ಜನರು ಮಾಡುವ ಕೆಲವು ಹೂಡಿಕೆ ವಿಧಾನಗಳನ್ನು ಮತ್ತು ಅವುಗಳ ಮೂಲಕ ನಿಮ್ಮ ಸಂಪತ್ತು ಹೇಗೆ ಬೆಳೆಯುತ್ತದೆ ಎಂಬುದನ್ನು ನೋಡೋಣ.
            </p>
            <hr className="chapter-rule" />
            <h3>1. ಷೇರುಗಳು (Equity)</h3>
            <p>
              ನೀವು ಒಂದು ಷೇರನ್ನು ಖರೀದಿಸಿದಾಗ, ನೀವು ಒಂದು ಕಂಪನಿಯಲ್ಲಿನ ಸಣ್ಣ ಮಾಲಿಕತ್ವ ಖರೀದಿಸುತ್ತೀರಿ.
            </p>
            <p>
              ಕಂಪನಿ ಬೆಳೆದಂತೆಲ್ಲ, ನಿಮ್ಮ ಪಾಲಿನ ಭಾಗದ ಮೌಲ್ಯವು ಬೆಳೆಯುತ್ತದೆ.
            </p>
            <p>
              ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ಷೇರುಗಳು ಉತ್ತಮ ಲಾಭವನ್ನು ನೀಡಬಹುದು, ಆದರೆ ಅವುಗಳಲ್ಲಿ ಅಸ್ಥಿರತೆಯೂ ಇರಬಹುದು. ಅಂದರೆ ಅವುಗಳ ಬೆಲೆಗಳು ಅಲ್ಪಾವಧಿಯಲ್ಲಿ ಏರಿಳಿತಗೊಳ್ಳಬಹುದು. ಆದ್ದರಿಂದ ಮಾರುಕಟ್ಟೆಯ ಏರಿಳಿತಗಳ ನಡುವೆಯೂ ತಾಳ್ಮೆಯಿಂದ ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆ ಮಾಡುವವರಿಗೆ ಷೇರುಗಳು ಉತ್ತಮ ಆಯ್ಕೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>2. ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ಮತ್ತು ನಿಯಮಿತ ಹೂಡಿಕೆ</h3>
            <p>
              ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ಅನೇಕ ಹೂಡಿಕೆದಾರರಿಂದ ಹಣವನ್ನು ಸಂಗ್ರಹಿಸಿ, ಅದನ್ನು ಷೇರುಗಳು, ಬಾಂಡ್‌ಗಳು ಅಥವಾ ಇತರ ಆಸ್ತಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ. ಹಣವನ್ನು ಎಲ್ಲಿಗೆ ಹೂಡಬೇಕು ಎಂಬುದನ್ನು ವೃತ್ತಿಪರ ಫಂಡ್ ಮ್ಯಾನೇಜರ್ ನಿರ್ಧರಿಸುತ್ತಾರೆ.
            </p>
            <p>
              ನಿಯಮಿತ ಹೂಡಿಕೆ ಯೋಜನೆ ಅಥವಾ SIP ಮೂಲಕ ನೀವು ನಿಯಮಿತವಾಗಿ ಸಣ್ಣ ಪ್ರಮಾಣದ ಹಣವನ್ನು ಹೂಡಿಕೆ ಮಾಡಬಹುದು. ಇದು ಶಿಸ್ತು ಮತ್ತು ನಿರಂತರತೆಯ ಮೂಲಕ ನಿಧಾನವಾಗಿ ಸಂಪತ್ತನ್ನು ನಿರ್ಮಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇವು ಪ್ರಾರಂಭಿಕ ಹೂಡಿಕೆದಾರರಿಗೆ ಅತ್ಯುತ್ತಮ-ಸರಳ, ಒತ್ತಡವಿಲ್ಲದ, ಮತ್ತು ತಜ್ಞರ ನಿರ್ವಹಣೆಯಿಂದ ಬೆಂಬಲಿತವಾಗಿದೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>3. ಬಾಂಡ್‌ಗಳು ಮತ್ತು ಸ್ಥಿರ ಆದಾಯ ಹೂಡಿಕೆಗಳು</h3>
            <p>
              ಬಾಂಡ್‌ಗಳನ್ನು ಕಂಪನಿಗಳಿಗೆ ಅಥವಾ ಸರ್ಕಾರಗಳಿಗೆ ನೀಡುವ ಸಾಲವೆಂದು ಕಲ್ಪಿಸಿಕೊಳ್ಳಬಹುದು. ಅವು ನಿಮಗೆ ನಿಗದಿತ ಅವಧಿಗಳಲ್ಲಿ ಬಡ್ಡಿಯನ್ನು ಪಾವತಿಸುವ ಭರವಸೆಯನ್ನು ನೀಡುತ್ತವೆ.
            </p>
            <p>
              ಬಾಂಡ್‌ಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಷೇರುಗಳಿಗಿಂತ ಸುರಕ್ಷಿತವಾಗಿರುತ್ತವೆ, ಆದರೆ ಅವುಗಳಲ್ಲ ಲಾಭ ಕಡಿಮೆ. ಅವು ನಿಮ್ಮ ಹೂಡಿಕೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೊವನ್ನು ಸುಭದ್ರಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ ಅಪಾಯ ಮತ್ತು ಭದ್ರತೆಯ ನಡುವೆ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡುತ್ತದೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>4. ಚಿನ್ನ ಮತ್ತು ರಿಯಲ್ ಎಸ್ಟೇಟ್</h3>
            <p>
              ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಭಾರತೀಯರು ಯಾವಾಗಲು ಚಿನ್ನ ಮತ್ತು ಆಸ್ತಿಯನ್ನು ಮೌಲ್ಯದ ಸಂಗ್ರಹವೆಂದು ನಂಬಿದ್ದಾರೆ. ಚಿನ್ನವು ಹಣದುಬ್ಬರ ಮತ್ತು ಅನಿಶ್ಚಿತ ಪರಿಸ್ಥಿತಿಗಳಿಂದ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ, ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಬೆಳವಣಿಗೆ ಮತ್ತು ಬಾಡಿಗೆ ಆದಾಯ ಎರಡನ್ನೂ ನೀಡಬಹುದು.
            </p>
            <p>
              ಆದರೆ ಇವೆರಡಕ್ಕೂ ಸೂಕ್ತ ಚಿಂತನಾಶೀಲ ಯೋಜನೆಯ ಅಗತ್ಯವಿದೆ ಅವು ದುಬಾರಿ ಆಗಿರಬಹುದು ಮತ್ತು ಕಡಿಮೆ ದ್ರವ್ಯತೆಯಿಂದ ಕೂಡಿರಬಹುದು, ಅಂದರೆ ಅವುಗಳನ್ನು ತಕ್ಷಣ ಮಾರಾಟ ಮಾಡುವುದು ಸುಲಭವಾಗಿರದು.
            </p>
            <hr className="chapter-rule" />
            <h3>5. ಡಿಜಿಟಲ್ ಆಸ್ತಿಗಳು (ಎಚ್ಚರಿಕೆಯಿಂದ)</h3>
            <p>
              ಕ್ರಿಪ್ಟೋಕರೆನ್ಸಿ ಮತ್ತು ಇತರ ಹೊಸ ಡಿಜಿಟಲ್ ಆಸ್ತಿಗಳು ಯುವ ಹೂಡಿಕೆದಾರರ ನಡುವೆ ಹೆಚ್ಚು ಜನಪ್ರಿಯವಾಗುತ್ತಿವೆ. ಅವು ಹೆಚ್ಚಿನ ಲಾಭವನ್ನು ನೀಡುವ ಸಾಧ್ಯತೆ ಹೊಂದಿದ್ದರೂ, ಅವುಗಳಲ್ಲಿ ಹೆಚ್ಚಿನ ಅಪಾಯ ಮತ್ತು ಅನಿಶ್ಚಿತತೆಯೂ ಇರುತ್ತದೆ.
            </p>
            <p>
              ಹೂಡಿಕೆ ಮಾಡುವ ಮೊದಲು, ಅದರ ತಂತ್ರಜ್ಞಾನ, ನಿಯಂತ್ರಣಗಳು, ಮತ್ತು ಒಳಗೊಂಡಿರುವ ಅಪಾಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ನಿಮಗೆ ಅರ್ಥವಾಗದ ವಿಷಯಗಳಲ್ಲಿ ಎಂದಿಗೂ ಹೂಡಿಕೆ ಮಾಡಬೇಡಿ.
            </p>
            <hr className="chapter-rule" />
            <h3>ಸಮತೋಲಿತ ಹೂಡಿಕೆಯ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ನಿರ್ಮಾಣ</h3>
            <p>
              ಜಾಣ ಹೂಡಿಕೆಯ ರಹಸ್ಯವೆಂದರೆ ವೈವಿದ್ಯತೆ ಅಳವಡಿಸಿಕೊಳ್ಳುವುದು ಅಂದರೆ ನಿಮ್ಮ ಹಣವನ್ನು ವಿವಿಧ ರೀತಿಯ ಹೂಡಿಕೆಗಳಲ್ಲಿ ಹಂಚುವುದು. ಹೀಗೆ ಮಾಡಿದಲ್ಲಿ, ಒಂದು ಭಾಗ ಕುಸಿದರೂ ಮತ್ತೊಂದು ಭಾಗ ಅದನ್ನು ಸಂತೂಗಿಸಬಹುದು.
            </p>
            <p>
              ನಿಮ್ಮ ಹೂಡಿಕೆಯ ಮಿಶ್ರಣವು ನೀವು ಯಾರು ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುತ್ತದೆ. ಅಂದರೆ ನಿಮ್ಮ ವಯಸ್ಸು, ಗುರಿಗಳು, ಮತ್ತು ಅಪಾಯವನ್ನು ಎದುರಿಸುವ ನಿಮ್ಮ ಮಟ್ಟ. ಇದನ್ನು ಆಹಾರ ಪದ್ಧತಿಯಂತೆ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ ಒಳ್ಳೆಯ ಸಮತೋಲನ ನಿಮ್ಮನ್ನು ಆರೋಗ್ಯಕರವಾಗಿಯೂ ಸದೃಡವಾಗಿಯೂ ಇಡುತ್ತದೆ.
            </p>
            <img src="/money-101/ch5.png" alt="Understanding investment options" style={imgStyle} />
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
        kn: "ಅಧ್ಯಾಯ 6: ಹೂಡಿಕೆಯಲ್ಲಿ ಅಪಾಯ ಮತ್ತು ಭಾವನೆಗಳ ಪಾತ್ರ",
      },
      content: {
        en: (
          <>
            <p>
              If investing were only about numbers, spreadsheets would make us all rich.
              But the truth is - the real game happens in the mind.
            </p>
            <p>
              Because in investing, your greatest strength or weakness isn&apos;t the market
              - it&apos;s you.
            </p>
            <hr className="chapter-rule" />
            <h3>Understanding Risk</h3>
            <p>
              Every investment carries some level of risk - even keeping money idle in a bank
              means losing value to inflation.
            </p>
            <p>
              Risk isn&apos;t something to fear; it&apos;s something to understand. It&apos;s the price we
              pay for opportunity. Higher potential returns often come with higher uncertainty,
              while safer investments usually offer lower rewards.
            </p>
            <p>
              Smart investors don&apos;t avoid risk - they manage it. They learn how much they can
              handle, spread their investments, and let time reduce the bumps along the way.
              In the long run, risk isn&apos;t the enemy - impulsive decisions are.
            </p>
            <hr className="chapter-rule" />
            <h3>The Emotional Side of Money</h3>
            <p>
              Money has a way of triggering emotions - excitement when things go up, fear when
              they fall. But reacting emotionally can lead to buying high, selling low, or
              abandoning plans midway.
            </p>
            <p>
              Markets move in cycles - optimism, greed, panic, and hope. The best investors
              learn to recognize these emotions and stay grounded. They understand that patience
              often wins over prediction, and calm over chaos.
            </p>
            <p>
              When you invest with a plan, emotions become signals - not steering wheels.
            </p>
            <hr className="chapter-rule" />
            <h3>Balancing Head and Heart</h3>
            <p>
              Being a good investor doesn&apos;t mean being emotionless. It means being aware. It&apos;s okay to feel fear when the market dips or excitement when it rallies - just don&apos;t let those feelings dictate your actions.
            </p>
            <p>
              Create a strategy you trust - one aligned with your goals, not your moods. Review it regularly, but don&apos;t let every headline or tweet shake your conviction.
            </p>
            <img src="/money-101/ch6.png" alt="Risk and emotion in investing" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ಹೂಡಿಕೆ ಕೇವಲ ಸಂಖ್ಯೆಗಳ ವಿಷಯವಾಗಿದ್ದರೆ, ವಿದ್ಯನ್ಮಾನ ಮಾಹಿತಿ ಕೋಷ್ಟಕ (ಸ್ಪ್ರೆಡ್‌ಶೀಟ್‌ಗಳು) ನಮ್ಮನ್ನೆಲ್ಲಾ ಶ್ರೀಮಂತರನ್ನಾಗಿಸಿಬಿಡುತ್ತಿತ್ತು. ಆದರೆ ಸತ್ಯವಾದ ಸಂಗತಿ ಏನೆಂದರೆ ನಿಜವಾದ ಆಟ ಮನಸ್ಸಿನಲ್ಲಿ ನಡೆಯುತ್ತದೆ.
            </p>
            <p>
              ಏಕೆಂದರೆ ಹೂಡಿಕೆಯಲ್ಲಿ ನಿಮ್ಮ ಅತ್ಯಂತ ದೊಡ್ಡ ಶಕ್ತಿ ಅಥವಾ ದೌರ್ಬಲ್ಯ ಮಾರುಕಟ್ಟೆಯಲ್ಲ- ಅದು ನೀವು.
            </p>
            <hr className="chapter-rule" />
            <h3>ಅಪಾಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು</h3>
            <p>
              ಪ್ರತಿ ಹೂಡಿಕೆಯಲ್ಲೂ ಒಂದು ಮಟ್ಟದ ಅಪಾಯ ಇರುತ್ತದೆ ಹಣವನ್ನು ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಬಳಸದೆ ನಿಷ್ಕ್ರಿಯೆಯಾಗಿ ಇಡುವುದೂ ಕೂಡ ಹಣದುಬ್ಬರದ ವಿರುದ್ಧ ಅದರ ಮೌಲ್ಯ ಕಡಿಮೆಯಾಗಿಸುವ ಅಪಾಯವನ್ನು ಹೊಂದಿದೆ.
            </p>
            <p>
              ಅಪಾಯವೆಂದರೆ ಭಯಪಡುವಂತಹದ್ದಲ್ಲ ಅದನ್ನು ಸರಿಯಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು. ಅದು ಅವಕಾಶಕ್ಕಾಗಿ ನಾವು ನೀಡುವ ಬೆಲೆ.
            </p>
            <p>
              ಹೆಚ್ಚಿನ ಲಾಭದ ಸಾಧ್ಯತೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚಿನ ಅನಿಶ್ಚಿತತೆಯೊಂದಿಗೆ ಬರುತ್ತವೆ, ಆದರೆ ಹೆಚ್ಚು ಸುರಕ್ಷಿತ ಹೂಡಿಕೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕಡಿಮೆ ಲಾಭವನ್ನು ನೀಡುತ್ತವೆ.
            </p>
            <p>
              ಜಾಣ ಹೂಡಿಕೆದಾರರು ಅಪಾಯದಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ ಅವರು ಅದನ್ನು ಸೂಕ್ತವಾಗಿ ನಿರ್ವಹಿಸುತ್ತಾರೆ. ತಾವು ಎಷ್ಟರ ಮಟ್ಟಿಗೆ ಅಪಾಯವನ್ನು ನಿರ್ವಹಿಸಬಹುದು ಎಂಬುದನ್ನು ಅವರು ಅರಿತುಕೊಳ್ಳುತ್ತಾರೆ, ತಮ್ಮ ಹೂಡಿಕೆಗಳನ್ನು ವಿಭಜಿಸುತ್ತಾರೆ, ಮತ್ತು ಮಾರ್ಗಮಧ್ಯದಲ್ಲಿನ ಏರಿಳಿತಗಳನ್ನು ನಿಧಾನವಾಗಿ ಕಡಿಮೆ ಮಾಡಲು ಕಾಲಾವಕಾಶ ನೀಡುತ್ತಾರೆ.
            </p>
            <p>
              ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ಅಪಾಯ ಶತ್ರುವೇ ಅಲ್ಲ, ತುರ್ತು ಮತ್ತು ಆವೇಶದ ನಿರ್ಧಾರಗಳೇ ನಿಜವಾದ ಶತ್ರುಗಳು.
            </p>
            <hr className="chapter-rule" />
            <h3>ಹಣದ ಭಾವನಾತ್ಮಕ ಅಂಶ</h3>
            <p>
              ಹಣವು ಭಾವನೆಗಳನ್ನು ಪ್ರಚೋದಿಸುವ ವಿಶಿಷ್ಟ ಗುಣವನ್ನು ಹೊಂದಿದೆ- ಬೆಲೆಗಳು ಏರಿದಾಗ ಉತ್ಸಾಹ, ಮತ್ತು ಅವು ಇಳಿದಾಗ ಭಯ. ಆದರೆ ಭಾವನಾತ್ಮಕ ಪ್ರತಿಕ್ರಿಯೆಯಲ್ಲಿ ಹೆಚ್ಚಾದ ಬೆಲೆಗೆ ಖರೀದಿಸುವುದು, ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರುವುದು, ಅಥವಾ ಮಧ್ಯದಲ್ಲೇ ಯೋಜನೆಗಳನ್ನು ಕೈ ಬಿಡುವಂತಹ ನಿರ್ಧಾರಗಳಿಗೆ ಕಾರಣವಾಗಬಹುದು.
            </p>
            <p>
              ಮಾರುಕಟ್ಟೆಗಳು ಆಶಾವಾದ, ದುರಾಸೆ, ಭೀತಿ, ಮತ್ತು ನಿರೀಕ್ಷೆಗಳ ಚಕ್ರಗಳಲ್ಲಿ ಚಲಿಸುತ್ತವೆ. ಅತ್ಯುತ್ತಮ ಹೂಡಿಕೆದಾರರು ಈ ಭಾವನೆಗಳನ್ನು ಗುರುತಿಸಲು ಕಲಿಯುತ್ತಾರೆ ಮತ್ತು ಸ್ಥಿರವಾಗಿರುತ್ತಾರೆ. ಅವರು ಊಹೆಗಿಂತ ತಾಳ್ಮೆ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿ ಎಂಬುದನ್ನು ಮತ್ತು ಗೊಂದಲ ಅಸ್ಥವ್ಯಸ್ಥಗಳ ನಡುವೆ ಸಮಾಧಾನ ಚಿತ್ತದಿಂದಿರುವುದು ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.
            </p>
            <p>
              ನೀವು ಸೂಕ್ತ ಯೋಜನೆಯೊಂದಿಗೆ ಹೂಡಿಕೆ ಮಾಡಿದಾಗ, ಭಾವನೆಗಳು ಸೂಚನೆಗಳಾಗುತ್ತವೆ ಹೊರತು ಚಕ್ರಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ಸಾಧನಗಳಲ್ಲ.
            </p>
            <hr className="chapter-rule" />
            <h3>ಬುದ್ಧಿ ಮತ್ತು ಹೃದಯದ ಸಮತೋಲನ</h3>
            <p>
              ಒಳ್ಳೆಯ ಹೂಡಿಕೆದಾರನಾಗುವುದು ಎಂದರೆ ಭಾವನೆಗಳ ರಹಿತ ನಾಗಿರುವುದು ಎಂದಲ್ಲ. ಅದರರ್ಥ ಜಾಗರೂಕನಾಗಿರುವುದು.
            </p>
            <p>
              ಮಾರುಕಟ್ಟೆ ಕುಸಿದಾಗ ಭಯಗೊಳ್ಳುವುದು ಅಥವಾ ಏರಿದಾಗ ಉತ್ಸಾಹಗೊಳ್ಳುವುದು ಸಹಜ ಆದರೆ ಆ ಭಾವನೆಗಳು ನಿಮ್ಮ ನಿರ್ಧಾರಗಳನ್ನು ನಿಯಂತ್ರಿಸುವಂತಾಗಭಾರದು.
            </p>
            <p>
              ನೀವು ವಿಶ್ವಾಸ ಎಂಬುವಂತಹ ಒಂದು ತಂತ್ರವನ್ನು (Strategy) ನಿರೂಪಿಸಿಕೊಳ್ಳಿ ಅದು ನಿಮ್ಮ ಮನೋಭಾವಗಳಿಗೆ ಅಲ್ಲ, ನಿಮ್ಮ ಗುರಿಗಳಿಗೆ ಹೊಂದುವಂತಿರಲಿ. ಅದನ್ನು ನಿರಂತರವಾಗಿ ಪರಿಶೀಲಿಸಿ, ಆದರೆ ಪ್ರತಿಯೊಂದು ಸುದ್ದಿ ಶೀರ್ಷಿಕೆ ಅಥವಾ ಮಾದ್ಯಮ ಸಂದೇಶಗಳು ನಿಮ್ಮ ಧೃಡ ನಂಬಿಕೆಯನ್ನು ಕದಡದಿರುವಂತೆ ನೋಡಿಕೊಳ್ಳಿ.
            </p>
            <img src="/money-101/ch6.png" alt="Risk and emotion in investing" style={imgStyle} />
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
        kn: "ಅಧ್ಯಾಯ 7: ಹೂಡಿಕೆ ಪ್ರಾರಂಭಿಸುವುದು ಹೇಗೆ?",
      },
      content: {
        en: (
          <>
            <p>
              Every investor, no matter how experienced, began with one simple step - starting.
              You don&apos;t need to have it all figured out. You just need to begin with
              intention, consistency, and curiosity.
            </p>
            <hr className="chapter-rule" />
            <h3>1. Define Your Goals</h3>
            <p>
              Before you invest, ask yourself why. Are you investing for short-term goals like
              a vacation or gadgets? Or long-term ones - a house, retirement, or financial
              independence?
            </p>
            <p>
              Your goals determine your time horizon, and your time horizon shapes your strategy.
            </p>
            <div className="pull-quote">
              &quot;If you don&apos;t know where you&apos;re going, any road will take you there.&quot;
            </div>
            <hr className="chapter-rule" />
            <h3>2. Understand Your Risk Appetite</h3>
            <p>
              Not everyone can handle the same level of risk - and that&apos;s okay. Some are
              comfortable with market swings, others prefer stability.
            </p>
            <p>
              Be honest about how much volatility you can emotionally and financially handle.
              Your risk comfort will guide your mix of investments - stocks, funds, bonds,
              or gold.
            </p>
            <hr className="chapter-rule" />
            <h3>3. Start Small, Stay Consistent</h3>
            <p>
              You don&apos;t need a huge sum to begin. Even ₹500 or ₹1,000 a month through a
              Systematic Investment Plan (SIP) can build serious wealth over time.
            </p>
            <p>
              The magic lies in consistency, not size. Regular investing helps you average out
              market fluctuations and build discipline.
            </p>
            <hr className="chapter-rule" />
            <h3>4. Choose the Right Platform</h3>
            <p>
              <strong>Today, investing is easier than ever.</strong> You can start with trusted investment apps or platforms that allow SIPs, ETFs, or mutual funds. Focus on ones that are user-friendly, well-regulated, and transparent with fees.
            </p>
            <hr className="chapter-rule" />
            <h3>5. Diversify Your Portfolio</h3>
            <p>
              Don&apos;t put all your money in one place. A mix of asset types - equities, bonds, gold, and cash - keeps your portfolio balanced. Diversification helps protect you when one area underperforms.
            </p>
            <hr className="chapter-rule" />
            <h3>6. Review, But Don&apos;t React</h3>
            <p>
              <strong>Once you&apos;ve started, check in on your investments periodically - not daily.</strong> Review once in a few months or at major life milestones. Avoid emotional reactions to short-term market movements.
            </p>
            <hr className="chapter-rule" />
            <h3>7. Keep Learning</h3>
            <p>
              Markets evolve, new products emerge, and strategies change. Stay curious - read, listen and explore. The more you understand, the more confident your decisions become.
            </p>
            <p>
              <strong>Starting small today is better than waiting for &quot;the right time.&quot;</strong> Because in investing, time itself is the biggest multiplier of wealth. So take that first step - and let time do the rest.
            </p>
            <img src="/money-101/ch7.png" alt="How to start investing" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ಯಾವುದೇ ಹೂಡಿಕೆದಾರನಾಗಿರಲಿ, ಅವನು ಎಷ್ಟು ಅನುಭವಿಯಾಗಿದ್ದರೂ ಸಹ, ಅವನ ಆರಂಭ ಒಂದು ಸರಳ ಹೆಜ್ಜೆಯಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ನಿಮಗೆ ಎಲ್ಲವೂ ಸಂಪೂರ್ಣವಾಗಿ ತಿಳಿದಿರಲೇಬೇಕೆಂಬ ಅಗತ್ಯವಿಲ್ಲ. ನೀವು ಕೇವಲ ಉದ್ದೇಶ, ನಿರಂತರತೆ, ಮತ್ತು ಕುತೂಹಲದೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಬೇಕಷ್ಟೆ.
            </p>
            <p>
              ನಿಮ್ಮ ಮೊದಲ ಹೂಡಿಕೆ ಪ್ರಯಾಣದ ಮಾರ್ಗದರ್ಶನಕ್ಕೆ ಇಲ್ಲೊಂದು ಸರಳ ರಸ್ತೆ ನಕ್ಷೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>1. ನಿಮ್ಮ ಗುರಿಗಳನ್ನು ನಿರ್ಧರಿಸಿ</h3>
            <p>
              ನೀವು ಹೂಡಿಕೆ ಮಾಡುವ ಮೊದಲು, ಈ ಹೂಡಿಕೆ ಏಕೆ ಎಂದು ನಿಮ್ಮನ್ನು ನೀವು ಕೇಳಿಕೊಳ್ಳಿ. ನೀವು ರಜೆ ಪ್ರವಾಸ ಅಥವಾ ಗ್ಯಾಜೆಟ್‌ಗಳಂತಹ ಕಿರು ಅವಧಿಯ ಗುರಿಗಳಿಗಾಗಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತಿದ್ದೀರಾ? ಅಥವಾ ಮನೆ, ನಿವೃತ್ತಿ, ಅಥವಾ ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯದಂತಹ ದೀರ್ಘಾವಧಿಯ ಗುರಿಗಳಿಗಾಗಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತಿದ್ದೀರಾ?
            </p>
            <p>
              ನಿಮ್ಮ ಗುರಿಗಳು ನಿಮ್ಮ ಸಮಯಾವಧಿಯನ್ನು ನಿರ್ಧರಿಸುತ್ತವೆ, ಮತ್ತು ನಿಮ್ಮ ಸಮಯಾವಧಿ ನಿಮ್ಮ ಕಾಯ ತಂತ್ರವನ್ನು (Strategy) ರೂಪಿಸುತ್ತದೆ.
            </p>
            <div className="pull-quote">
              &quot;ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ ಎಂಬುದೇ ನಿಮಗೆ ಗೊತ್ತಿಲ್ಲದಿದ್ದರೆ, ರಸ್ತೆ ಯಾವುದಾದರೇನು ಯಾವುದೇ ರಸ್ತೆ ನಿಮ್ಮನ್ನು ಅಲ್ಲಿಗೆ ಕರೆದೊಯ್ಯಬಹುದು.&quot;
            </div>
            <hr className="chapter-rule" />
            <h3>2. ನಿಮ್ಮ ಅಪಾಯ ಸ್ವೀಕಾರದ ಸಾಮರ್ಥ್ಯ ಮಟ್ಟವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ</h3>
            <p>
              ಪ್ರತಿಯೊಬ್ಬರೂ ಒಂದೇ ಮಟ್ಟದ ಅಪಾಯವನ್ನು ಸಹಿಸಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ ಮತ್ತು ಅದು ಸಹಜ ಕೂಡ. ಕೆಲವರು ಮಾರುಕಟ್ಟೆಯ ಏರಿಳಿತಗಳೊಂದಿಗೆ ನಿರಾಳವಾಗಿರುತ್ತಾರೆ, ಇನ್ನು ಕೆಲವರು ಸ್ಥಿರತೆಯನ್ನು ಹೆಚ್ಚು ಇಷ್ಟಪಡುತ್ತಾರೆ.
            </p>
            <p>
              ನೀವು ಭಾವನಾತ್ಮಕವಾಗಿಯೂ ಮತ್ತು ಆರ್ಥಿಕವಾಗಿಯೂ ಎಷ್ಟರ ಮಟ್ಟಿಗೆ ಮಾರಿಕಟ್ಟೆ ಅಸ್ಥಿರತೆಯನ್ನು ನಿಭಾಯಿಸಬಹುದು ಎಂಬುದರ ಬಗ್ಗೆ ನಿಮ್ಮೊಂದಿಗೆ ನೀವು ಪ್ರಾಮಾಣಿಕವಾಗಿರಿ. ನೀವು ಅಪಾಯವನ್ನು ಎದುರಿಸುವ ಮಟ್ಟವು ನಿಮ್ಮ ಷೇರುಗಳು, ಫಂಡ್‌ಗಳು, ಬಾಂಡ್‌ಗಳು, ಅಥವಾ ಚಿನ್ನ ಹೂಡಿಕೆ ಮಿಶ್ರಣದ ಪ್ರಮಾಣವನ್ನು ಮಾರ್ಗದರ್ಶಿಸುತ್ತದೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>3. ಸಣ್ಣದಾಗಿ ಪ್ರಾರಂಭಿಸಿ, ನಿರಂತರವಾಗಿರಿ</h3>
            <p>
              ಪ್ರಾರಂಭಿಸಲು ದೊಡ್ಡ ಮೊತ್ತದ ಹಣ ಅಗತ್ಯವಿಲ್ಲ. ₹500 ಅಥವಾ ₹1,000 ಅನ್ನು ಪ್ರತಿಮಾಸವೂ ನಿಯಮಿತ ಹೂಡಿಕೆ (Systematic Investment Plan) ಅಥವಾ SIP ಮೂಲಕ ಹೂಡಿಕೆ ಮಾಡಿದರೂ ಸಹ, ಕಾಲಕ್ರಮೇಣ ಉತ್ತಮ ಸಂಪತ್ತನ್ನು ನಿರ್ಮಿಸಬಹುದು.
            </p>
            <p>
              ಜಾದು ಹಣದ ಪ್ರಮಾಣದಲ್ಲಿಲ್ಲ ಅದು ನಿರಂತರತೆಯಲ್ಲಿ ಇದೆ. ನಿರಂತರ ನಿಯಮಿತ ಹೂಡಿಕೆ ಮಾರುಕಟ್ಟೆಯ ಏರಿಳಿತಗಳನ್ನು ಸರಾಸರಿಗೊಳಿಸಲು ಮತ್ತು ಶಿಸ್ತನ್ನು ನಿರ್ಮಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>4. ಸರಿಯಾದ ವೇದಿಕೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</h3>
            <p>
              ಇಂದು ಹೂಡಿಕೆ ಮಾಡುವುದು ಹಿಂದೆಂದಿಗಿಂತ ಹೆಚ್ಚು ಸುಲಭವಾಗಿದೆ. SIP, ETF, ಅಥವಾ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಅವಕಾಶವಿರುವ ನಂಬಿಕಾರ್ಹ ಹೂಡಿಕೆ ಆಪ್‌ಗಳು ಅಥವಾ ವೇದಿಕೆಗಳಿಂದ (Platform) ನೀವು ಪ್ರಾರಂಭಿಸಬಹುದು. ಸರಳ, ಪಾರದರ್ಶಕ, ಮತ್ತು ನಿಯಂತ್ರಣಕ್ಕೊಳಪಟ್ಟ ವೇದಿಕೆಗಳೆಡೆಗೆ ಗಮನಹರಿಸಿ.
            </p>
            <p>
              &quot;ಖಾತ್ರಿಯಾದ&quot; ಅಥವಾ &quot;ತಕ್ಷಣದ&quot; ಲಾಭಗಳ ಭರವಸೆಗಳನ್ನು ನೀಡುವ ಯಾವುದೇ ವಿಷಯಗಳಿಂದ ದೂರವಿರಿ ಅವು ಸಾಮಾನ್ಯವಾಗಿ ಒಳ್ಳೆಯ ಅಂತ್ಯವನ್ನು ಕಾಣುವುದಿಲ್ಲ.
            </p>
            <hr className="chapter-rule" />
            <h3>5. ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೊವನ್ನು ವೈವಿಧ್ಯಗೊಳಿಸಿ</h3>
            <p>
              ನಿಮ್ಮ ಎಲ್ಲಾ ಹಣವನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಬೇಡಿ. ವಿವಿಧ ಆಸ್ತಿಗಳ ಮಿಶ್ರಣ ಅಂದರೆ ಷೇರುಗಳು, ಬಾಂಡ್‌ಗಳು, ಚಿನ್ನ, ಮತ್ತು ನಗದು ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೊವನ್ನು ಸಮತೋಲನದಲ್ಲಿ ಇಡುತ್ತದೆ. ಯಾವುದಾದರೊಂದು ಕ್ಷೇತ್ರ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ಕುಸಿದಾಗ ಈ ವೈವಿಧ್ಯಮಯ ಹೂಡಿಕೆ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>6. ಪುನರ್‌ ಪರಿಶೀಲಿಸಿ, ಆದರೆ ತತ್ ಕ್ಷಣ ಪ್ರತಿಕ್ರಿಯಿಸಬೇಡಿ</h3>
            <p>
              ಒಮ್ಮೆ ನೀವು ಪ್ರಾರಂಭಿಸಿದ ನಂತರ, ನಿಮ್ಮ ಹೂಡಿಕೆಗಳನ್ನು ಕಾಲಕಾಲಕ್ಕೆ ಪುನರ್‌ ಪರಿಶೀಲಿಸಿ ಆದರೆ ಪ್ರತಿದಿನವಲ್ಲ. ಕೆಲವು ತಿಂಗಳುಗಳಿಗೊಮ್ಮೆ ಅಥವಾ ಬದುಕಿನ ಪ್ರಮುಖ ಘಟ್ಟಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಿದರೆ ಸಾಕು. ಮಾರುಕಟ್ಟೆ ಏರಿಕೆ ಅಥವಾ ಕುಸಿತದ ಸಮಯದಲ್ಲಿ ಭಾವನಾತ್ಮಕ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದನ್ನು ತಪ್ಪಿಸಿ.
            </p>
            <p>
              ಗಮನದಲ್ಲಿರಲಿ ಹೂಡಿಕೆ ಒಂದು ಮ್ಯಾರಥಾನ್, ಅಂದರೆ ದೀರ್ಘಕಾಲದ ಓಟ ಅಲ್ಪ ಕಾಲದ ವೇಗದ ಓಟದ ಸ್ಪೀಡ್ (ಸ್ಪ್ರಿಂಟ್) ಅಲ್ಲ.
            </p>
            <hr className="chapter-rule" />
            <h3>7. ಕಲಿಕೆ ನಿರಂತರವಾಗಿರಲಿ</h3>
            <p>
              ಮಾರುಕಟ್ಟೆಗಳು ವಿಕಾಸಗೊಳ್ಳುತ್ತಿರುತ್ತವೆ, ಹೊಸ ಉತ್ಪನ್ನಗಳು ಬರುತ್ತವೆ, ಮತ್ತು ಕಾರ್ಯತಂತ್ರಗಳು ಬದಲಾಗುತ್ತಿರುತ್ತವೆ. ಕುತೂಹಲದಿಂದಿರಿ, ಓದಿ, ಕೇಳಿ, ಮತ್ತು ಅನ್ವೇಷಿಸಿ.
            </p>
            <p>
              ನೀವು ಹೆಚ್ಚು ಅರ್ಥಮಾಡಿಕೊಂಡಷ್ಟೂ, ನಿಮ್ಮ ನಿರ್ಧಾರಗಳಲ್ಲಿ ಹೆಚ್ಚು ಆತ್ಮವಿಶ್ವಾಸ ಬರುತ್ತದೆ. ಏಕೆಂದರೆ ಜಾಣ ಹೂಡಿಕೆ ಎಂದರೆ ಪ್ರಚಲಿತ ವಿದ್ಯಮಾನ (ಟ್ರೆಂಡ್‌) ಗಳನ್ನು ಹಿಂಬಾಲಿಸುವುದಲ್ಲ, ಅದು ನಿಮ್ಮನ್ನೂ ನಿಮ್ಮ ಸುತ್ತಲಿನ ಜಗತ್ತನ್ನೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.
            </p>
            <p>
              &quot;ಸೂಕ್ತ ಸಮಯ&quot;ಕ್ಕಾಗಿ ಕಾಯುವುದಕ್ಕಿಂತ ಇಂದೇ ಸಣ್ಣದಾಗಿ ಪ್ರಾರಂಭಿಸುವುದು ಉತ್ತಮ. ಏಕೆಂದರೆ ಹೂಡಿಕೆಯಲ್ಲಿ ಕಾಲವೇ ಸಂಪತ್ತನ್ನು ಹೆಚ್ಚಿಸುವ ಅತ್ಯಂತ ದೊಡ್ಡ ಗುಣಕ. ಮೊದಲ ಆ ಹೆಜ್ಜೆಯನ್ನು ಇಡಿ, ಭವಿಷ್ಯದಲ್ಲಿ ಅದಕ್ಕಾಗಿ ನಿಮಗೆ ನೀವೇ ಧನ್ಯವಾದ ಹೇಳುವಿರಿ.
            </p>
            <img src="/money-101/ch7.png" alt="How to start investing" style={imgStyle} />
          </>
        ),
      },
    },

    // ==============================
    // CHAPTER 8
    // ==============================
    {
      title: {
        en: "Chapter 8: You've Taken the First Step - Now Let's Begin the Journey",
        kn: "ಅಧ್ಯಾಯ 8: ನೀವು ಮೊದಲ ಹೆಜ್ಜೆ ಇಟ್ಟಿದ್ದೀರಿ ಈಗ ಪ್ರಯಾಣವನ್ನು ಆರಂಭಿಸೋಣ",
      },
      content: {
        en: (
          <>
            <p>
              You&apos;ve made it this far - and that already puts you ahead of most.
              Understanding how money works, how to manage it, and how to make it grow
              isn&apos;t just education - it&apos;s empowerment.
            </p>
            <p>
              You&apos;ve learned about the origin of money, why budgeting matters, the importance
              of investing, and how mindset shapes wealth. Now it&apos;s time to take that knowledge
              from your screen to the real world.
            </p>
            <hr className="chapter-rule" />
            <h3>The First Real Step: Opening Your Demat Account</h3>
            <p>
              Before you can start investing - in stocks, ETFs, or mutual funds - you&apos;ll need
              a Demat account. Think of it as your digital vault for investments - a safe,
              regulated space where your shares are held electronically.
            </p>
            <p>
              Choose a trusted broker - one you&apos;re comfortable with, one that fits your goals.
              You could explore platforms like Zerodha, Groww, Upstox, or Angel One to get
              started.
            </p>
            <hr className="chapter-rule" />
            <h3>Celebrate the Start</h3>
            <p>
              You&apos;ve done what most people only plan to do someday - you&apos;ve learned, understood, and now you&apos;re ready to act. This isn&apos;t the end of your journey. It&apos;s the very beginning.
            </p>
            <p>
              We&apos;ll be here to help you make smarter decisions, stay consistent, and grow - one step, one rupee, one lesson at a time.
            </p>
            <p>
              <strong>Welcome to the other side of learning - where your knowledge starts creating value.</strong>
            </p>
            <img src="/money-101/ch8.png" alt="Begin your investment journey" style={imgStyle} />
          </>
        ),

        kn: (
          <>
            <p>
              ನೀವು ಇಲ್ಲಿ ತನಕ ಬಂದಿದ್ದೀರಿ ಮತ್ತು ಅದೇ ನಿಮಗೆ ಬಹುತೇಕ ಜನರಿಗಿಂತ ಮುಂಚಿತ ಸ್ಥಾನದಲ್ಲಿಡುತ್ತದೆ.
            </p>
            <p>
              ಹಣ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಅದನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕು, ಮತ್ತು ಅದನ್ನು ಹೇಗೆ ಬೆಳೆಸಬೇಕು ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಕೇವಲ ಶಿಕ್ಷಣವಲ್ಲ ಅದು ಸಬಲೀಕರಣ.
            </p>
            <p>
              ನೀವು ಹಣದ ಮೂಲದ ಬಗ್ಗೆ, ಆಯವ್ಯಯ ಬಜೆಟಿಂಗ್ ಏಕೆ ಮಹತ್ವದ್ದು ಎಂಬ ಬಗ್ಗೆ, ಹೂಡಿಕೆಯ ಮಹತ್ವದ ಬಗ್ಗೆ, ಮತ್ತು ಮನೋಭಾವವು ಸಂಪತ್ತನ್ನು ಹೇಗೆ ರೂಪಿಸುತ್ತದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಕಲಿತಿದ್ದೀರಿ.
            </p>
            <p>
              ಈಗ, ಆ ಜ್ಞಾನವನ್ನು ಪರದೆಯಿಂದ ನಿಜವಾದ ಜಗತ್ತಿಗೆ ಕೊಂಡೊಯ್ಯುವ ಸಮಯ ಬಂದಿದೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>ಮೊದಲ ನಿಜವಾದ ಹೆಜ್ಜೆ: ಡಿಮ್ಯಾಟ್ ಖಾತೆ ತೆರೆಯುವುದು</h3>
            <p>
              ನೀವು ಷೇರುಗಳು, ETFಗಳು, ಅಥವಾ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು, ನಿಮಗೆ ಒಂದು ಡಿಮ್ಯಾಟ್ ಖಾತೆ ಅಗತ್ಯವಿದೆ.
            </p>
            <p>
              ಇದನ್ನು ನಿಮ್ಮ ಹೂಡಿಕೆಗಳಿಗಾಗಿ ಇರುವ ಡಿಜಿಟಲ್ ಭದ್ರ ಕಪಾಟು ಎಂಬುದಾಗಿ ಕಲ್ಪಿಸಬಹುದು ನಿಮ್ಮ ಷೇರುಗಳನ್ನು ಎಲೆಕ್ಟ್ರಾನಿಕ್ ರೂಪದಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಇಡುವ ನಿಯಂತ್ರಿತ ಮತ್ತು ಭದ್ರವಾದ ಸ್ಥಳ.
            </p>
            <p>
              ನಿಮ್ಮ ಗುರಿಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಮತ್ತು ನಿಮಗೆ ಅನುಕೂಲವಾಗುವ ನಂಬಿಕಸ್ಥ ಓರ್ವ ಬ್ರೋಕರ್‌ನನ್ನು ಆಯ್ಕೆಮಾಡಿ ಪ್ರಾರಂಭಿಸಲು Zerodha, Groww, Upstox, ಅಥವಾ Angel One ಂತಹ ವೇದಿಕೆಗಳನ್ನು ಅನ್ವೇಷಿಸಬಹುದು.
            </p>
            <p>
              ಏಕೆಂದರೆ ಪ್ರತಿಯೊಬ್ಬ ಹೂಡಿಕೆದಾರನು, ಎಷ್ಟೇ ಯಶಸ್ವಿಯಾಗಿದ್ದರೂ ಸಹ, ಒಂದು ಸಣ್ಣ ಹೆಜ್ಜೆಯಿಂದಲೇ ಆರಂಭಿಸಿದ್ದಾನೆ ತನ್ನ ಮೊದಲ ಹೂಡಿಕೆಯಿಂದ.
            </p>
            <hr className="chapter-rule" />
            <h3>ಆರಂಭವನ್ನು ಆಚರಿಸಿ</h3>
            <p>
              ಬಹುತೇಕ ಜನರು ಮುಂದೆ ಯಾವಾಗಲಾದರೂ ಮಾಡೋಣ ಎಂದು ಕೊಂಡ ಕೆಲಸವನ್ನು ನೀವು ಈಗಾಗಲೇ ಮಾಡಿದ್ದೀರಿ, ನೀವು ಕಲಿತಿದ್ದೀರಿ, ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೀರಿ, ಮತ್ತು ಈಗ ಕ್ರಮ ಕೈಗೊಳ್ಳಲು ಸಿದ್ಧರಾಗಿದ್ದೀರಿ.
            </p>
            <p>
              ಇದು ನಿಮ್ಮ ಪ್ರಯಾಣದ ಅಂತ್ಯವಲ್ಲ. ಇದು ನಿಮ್ಮ ಪ್ರಯಾಣ ನಿಜವಾಗಿಯೂ ಆರಂಭವಾಗುವ ಕ್ಷಣ.
            </p>
            <p>
              ನಿಮಗೆ ಹೆಚ್ಚು ಜಾಣ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು, ನಿರಂತರವಾಗಿರುವಂತೆ ಪ್ರೇರೇಪಿಸಲು, ಮತ್ತು ಬೆಳೆಯಲು ನೆರವಾಗಲು ನಾವು ನಿಮ್ಮೊಂದಿಗೆ ಇಲ್ಲಿ ಇರುತ್ತೇವೆ ಒಂದು ಹೆಜ್ಜೆ, ಒಂದು ರೂಪಾಯಿ, ಒಂದು ಪಾಠದೊಂದಿಗೆ.
            </p>
            <p>
              ಕಲಿಕೆಯ ಇನ್ನೊಂದು ಹಂತಕ್ಕೆ ಸ್ವಾಗತ ಇಲ್ಲಿ ನಿಮ್ಮ ಜ್ಞಾನವು ಮೌಲ್ಯವನ್ನು ನಿರ್ಮಿಸಲು ಆರಂಭಿಸುತ್ತದೆ.
            </p>
            <img src="/money-101/ch8.png" alt="Begin your investment journey" style={imgStyle} />
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
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
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
            Module 1<br /><em>Complete.</em>
          </div>
          <p className="complete-sub">
            You&apos;ve finished Money 101 &mdash; all 8 chapters. You now understand where money comes from, how to manage it, and how to start making it grow.
          </p>
          <button className="complete-btn" onClick={() => router.push("/modules")}>
            ← Back to All Modules
          </button>
        </div>
      </div>
      </main>
    );
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
            {chapterIndex + 1} of {chapters.length} {t("chapters")}
          </span>
        </div>
        <div className="chapter-dots">
          {chapters.map((_, i) => {
            const dotIdx = i;
            return (
              <button
                key={dotIdx}
                className={["chapter-dot", chapterIndex > dotIdx ? "done" : "", chapterIndex === dotIdx ? "active" : ""].filter(Boolean).join(" ")}
                onClick={() => { setChapterIndex(dotIdx); saveProgress(dotIdx); }}
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
          onClick={async () => {
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
