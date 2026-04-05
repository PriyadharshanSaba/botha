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
        kn: "ಅಧ್ಯಾಯ 1: ಹಣದ ಕಥೆ - ವಿನಿಮಯದಿಂದ ಡಿಜಿಟಲ್ ತನಕ",
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
              ಹಳೆಯ ಕಾಲದಲ್ಲಿ ನಾಣ್ಯಗಳು ಅಥವಾ ಕಾರ್ಡುಗಳು ಇರಲಿಲ್ಲ. ಜನರು ತಮ್ಮ ಬಳಿ ಇದ್ದದ್ದನ್ನು ಬೇರೆ ಜನರ ಜೊತೆ
              ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದರು - ಮೀನುಗಾರನು ಹಿಡಿದ ಮೀನನ್ನು ರೈತನ ಧಾನ್ಯದ ಜೊತೆ ಬದಲಾಯಿಸುತ್ತಿದ್ದ.
              ಆದ್ರೆ ಈ ವಿನಿಮಯಕ್ಕೆ ಒಂದು ತೊಂದರೆ ಇತ್ತು - ಆ ದಿನ ರೈತನಿಗೆ ಮೀನು ಬೇಕಾಗಿರದಿದ್ದರೆ ಹೇಗೆ?
            </p>

            <p>
              ಅಲ್ಲಿಂದಲೇ "ಹಣ" ಎಂಬ ಕಲ್ಪನೆ ಹುಟ್ಟಿತು - ವಿನಿಮಯವನ್ನು ಸುಲಭಗೊಳಿಸಲು ಒಂದು ಸರಳ ಸಾಧನ. ಮೊದಲು ಜನರು
              ಚಿಪ್ಪುಗಳು, ಲೋಹದ ನಾಣ್ಯಗಳು, ನಂತರ ಕಾಗದದ ನೋಟುಗಳು, ಈಗ ಡಿಜಿಟಲ್ ಹಣ ಮತ್ತು ಕ್ರಿಪ್ಟೋ - ಹೀಗೆ ಕಾಲ
              ಬದಲಾಗುತ್ತಿದ್ದಂತೆ ಹಣವೂ ಬದಲಾಗ್ತಾ ಬಂದಿದೆ.
            </p>

            <p>
              ಆದರೆ ಮೂಲದಲ್ಲಿ, ಹಣ ಅಂದ್ರೆ ಕೇವಲ ನೋಟು ಅಥವಾ ನಾಣ್ಯ ಅಲ್ಲ - ಅದು ನಂಬಿಕೆ. ಎಲ್ಲರೂ ಒಟ್ಟಿಗೆ ಒಪ್ಪಿಕೊಂಡಿದ್ದರಿಂದಲೇ
              ಒಂದು ಕಾಗದದ ತುಂಡು ಅಥವಾ ಸ್ಕ್ರೀನ್ ಮೇಲಿನ ಸಂಖ್ಯೆ "ಮೌಲ್ಯ" ಹೊಂದುತ್ತದೆ.
            </p>

            <p>
              ಇಂದು ಹಣ ಎಲ್ಲದರ ಹಿಂದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ - ನೀವು ಕುಡಿಯುವ ಕಾಫಿಯಿಂದ ನಿಮ್ಮ ಸಂಬಳದವರೆಗೆ, ಮತ್ತು ದೇಶದ ಆರ್ಥಿಕತೆಯ
              ಬೆಳವಣಿಗೆಯವರೆಗೆ. ಆದರೆ ಹಣ ಬದಲಾಗುತ್ತಿದ್ದರೂ, ಅದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ನಮ್ಮ ವಿಧಾನ ಅಷ್ಟೇ ವೇಗವಾಗಿ ಬೆಳೆಯಿಲ್ಲ.
              ಅದಕ್ಕಾಗಿ ಹಣದ ಅರಿವು (Financial Literacy) ತುಂಬಾ ಮುಖ್ಯ. ಹಣವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡರೆ, ನೀವು ಕೇವಲ ಖರ್ಚು ಅಥವಾ
              ಉಳಿಸೋದಿಲ್ಲ - ಅದನ್ನು ನಿಯಂತ್ರಿಸಬಹುದು.
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
        en: "Chapter 2: The Next Chapter - The Art of Budgeting",
        kn: "ಅಧ್ಯಾಯ 2: ಮುಂದಿನ ಹೆಜ್ಜೆ - ಬಜೆಟ್ ಮಾಡುವ ಕಲೆ",
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
              ಹಣ ಅಂದ್ರೆ ಜೀವನದ ಭಾಷೆ ಅಂದ್ರೆ, ಬಜೆಟ್ ಅಂದ್ರೆ ಆ ಭಾಷೆ ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡೋ ಕಲಿಕೆ. ಪ್ರತಿ ರೂಪಾಯಿ ಒಂದೊಂದು ಕಥೆ
              ಹೇಳುತ್ತೆ - ನೀವು ಎಷ್ಟು ಸಂಪಾದಿಸುತ್ತೀರಿ, ಎಷ್ಟು ಖರ್ಚು ಮಾಡುತ್ತೀರಿ, ಮತ್ತು ನಿಮಗೆ ಯಾವುದು ಮುಖ್ಯ ಅನ್ನೋದು.
              ಆದರೆ ನಮ್ಮಲ್ಲಿ ಬಹುತೇಕ ಜನ ಆ ಕಥೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡೋದಿಲ್ಲ.
            </p>

            <p>
              ಬಜೆಟ್ ಮಾಡೋದು ಅಂದ್ರೆ ತಡೆಹಿಡಿಯೋದು ಅಲ್ಲ - ಉದ್ದೇಶದಿಂದ ಖರ್ಚು ಮಾಡೋದು. ಇದು ನಿಮ್ಮ ಹಣ ಎಲ್ಲಿ ಹೋಗ್ತಿದೆ ಮತ್ತು
              ಅದು ಎಲ್ಲಿ ಹೋಗಬೇಕು ಅನ್ನೋದನ್ನು ತೋರಿಸುತ್ತದೆ. ಖರ್ಚಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡೋದು ಅಲ್ಲ - ನಿಮ್ಮ ಹಣದ ಮೇಲೆ ನಿಯಂತ್ರಣ ಕೊಡೋದು.
            </p>

            <p>
              ಒಳ್ಳೆಯ ಬಜೆಟ್ ಅಂದ್ರೆ ಕೇವಲ ಸಂಖ್ಯೆಗಳ ಟೇಬಲ್ ಅಲ್ಲ - ಅದು ನಿಮ್ಮ ಗುರಿಗಳ ಪ್ರತಿಬಿಂಬ. ಮುಖ್ಯವಾದ ವಿಷಯಗಳಿಗೆ ಆದ್ಯತೆ
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
        en: "Chapter 3: From Saving to Growing - The Power of Investing",
        kn: "ಅಧ್ಯಾಯ 3: ಉಳಿಸುವುದರಿಂದ ಬೆಳೆಯುವ ತನಕ - ಹೂಡಿಕೆಯ ಶಕ್ತಿ",
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
              ನಿಮ್ಮ ಸಂಪಾದನೆ ಮತ್ತು ಖರ್ಚು ನಿಯಂತ್ರಣ ಕಲಿತ್ಮೇಲೆ, ಮುಂದಿನ ಹೆಜ್ಜೆ - ನಿಮ್ಮ ಹಣವನ್ನು ಬೆಳೆಯಿಸುವುದು. ಬಜೆಟ್ ನಿಮ್ಮ
              ಹಣವನ್ನು ಹಿಡಿದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ; ಹೂಡಿಕೆ ಅದನ್ನು ಮುಂದಕ್ಕೆ ತೆಗೆದುಕೊಂಡು ಹೋಗುತ್ತದೆ.
            </p>

            <p>
              ಉಳಿಸುವುದು ಮಾತ್ರ ಸಾಕಾಗೋದಿಲ್ಲ, ಏಕೆಂದರೆ ಕಾಲ ಕಳೆದಂತೆ ಬೆಲೆಗಳು ಏರುತ್ತವೆ. ಅದೇ ಹಣ ಹಿಂದಿನಷ್ಟು ವಸ್ತುಗಳನ್ನು
              ಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗೋದಿಲ್ಲ. ಹೂಡಿಕೆ ಅಲ್ಲಿ ಕೆಲಸಕ್ಕೆ ಬರುತ್ತದೆ - ನಿಮ್ಮ ಹಣ ನಿಮ್ಮಗಾಗಿ ಕೆಲಸ ಮಾಡುವಂತೆ ಮಾಡುವುದು.
            </p>

            <p>
              ಉಳಿಸುವುದು ಟ್ಯಾಂಕ್‌ನಲ್ಲಿ ನೀರು ಇಟ್ಟಂತೆ; ಹೂಡಿಕೆ ಅದೇ ನೀರನ್ನು ಹೊಲಕ್ಕೆ ಹರಿಸುವಂತೆ. ಒಂದರಿಂದ ಸುರಕ್ಷತೆ, ಮತ್ತೊಂದರಿಂದ
              ಬೆಳವಣಿಗೆ. ಬೇಗನೆ ಆರಂಭಿಸಿದಷ್ಟು, ಫಲ ಹೆಚ್ಚಾಗುತ್ತದೆ - ಕಂಪೌಂಡಿಂಗ್ ಅದನ್ನೇ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ.
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
              ಹೂಡಿಕೆ ಶುರುಮಾಡೋದಕ್ಕೂ ಮೊದಲು, ಹೂಡಿಕೆದಾರರು ಹೇಗೆ ಯೋಚಿಸುತ್ತಾರೆ ಅನ್ನೋದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು. ಹೂಡಿಕೆ ಅಂದ್ರೆ
              ಕೇವಲ ಹಣವಲ್ಲ - ಅದು ಮನಸ್ಥಿತಿ.
            </p>

            <p>
              ಒಳ್ಳೆಯ ಹೂಡಿಕೆದಾರನಿಗೆ ಸಹನೆ, ನಿಯಮ ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ದೃಷ್ಟಿ ಮುಖ್ಯ. ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತ ಬಂದರೂ, ಅವರು ದೊಡ್ಡ ಚಿತ್ರ
              ನೋಡುತ್ತಾರೆ - ಬೆಳವಣಿಗೆ ಸಮಯದೊಂದಿಗೆ ಬರುತ್ತದೆ ಅನ್ನೋದನ್ನು ನಂಬುತ್ತಾರೆ.
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
              ಒಂದೇ "ಉತ್ತಮ" ಹೂಡಿಕೆ ಎಲ್ಲರಿಗೂ ಒಂದೇ ಆಗೋದಿಲ್ಲ - ಅದು ನಿಮ್ಮ ಗುರಿ, ರಿಸ್ಕ್ ಮಟ್ಟ ಮತ್ತು ಸಮಯಕ್ಕೆ
              ಅನುಗುಣವಾಗಿರುತ್ತದೆ.
            </p>

            <ul>
              <li><strong>ಷೇರುಗಳು:</strong> ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ಉತ್ತಮ ಲಾಭ, ಆದರೆ ಅಸ್ಥಿರ.</li>
              <li><strong>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ಸ್:</strong> ಪರಿಣಿತರಿಂದ ನಿರ್ವಹಣೆ, ವಿಭಜನೆ.</li>
              <li><strong>ಬಾಂಡ್ಸ್:</strong> ಸುರಕ್ಷಿತ, ಸ್ಥಿರ ಬಡ್ಡಿ.</li>
              <li><strong>ಚಿನ್ನ & ಆಸ್ತಿ:</strong> ಮೌಲ್ಯ ಉಳಿಸಿಕೊಳ್ಳುವ ಪರಂಪರೆಯ ಹೂಡಿಕೆ.</li>
              <li><strong>ಡಿಜಿಟಲ್ ಆಸ್ತಿಗಳು:</strong> ಹೆಚ್ಚು ರಿಸ್ಕ್ - ಎಚ್ಚರಿಕೆಯಿಂದ.</li>
            </ul>

            <p>ಒಳ್ಳೆಯ ಹೂಡಿಕೆದಾರರು ವಿಭಜನೆ ಮಾಡುತ್ತಾರೆ - ಇದು ರಕ್ಷಣೆ ಕೊಡುತ್ತದೆ.</p>
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
              ಹೂಡಿಕೆ ಅಂದ್ರೆ ಕೇವಲ ಅಂಕೆಪಂಕ್ತಿಗಳ ವಿಷಯ ಅಲ್ಲ - ಅದು ಮನಸ್ಸಿನ ಆಟ. ಮಾರುಕಟ್ಟೆಯಿಗಿಂತ ಹೆಚ್ಚು ಪ್ರಭಾವ ಬೀರುವುದೇ ನಮ್ಮ
              ಭಾವನೆಗಳು.
            </p>

            <p>
              ರಿಸ್ಕ್ ಅಂದ್ರೆ ಭಯಪಡಬೇಕಾದ್ದಲ್ಲ - ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ್ದು. ಹೆಚ್ಚು ಲಾಭ ಬೇಕೆಂದರೆ ಹೆಚ್ಚು ಅಸ್ಥಿರತೆ ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು.
            </p>

            <p>
              ಭಾವನೆ ಬಂದರೂ, ನಿರ್ಧಾರ ಗುರಿಯ ಆಧಾರದ ಮೇಲೆ ಇರಬೇಕು - ಭಾವನೆಯ ಆಧಾರದ ಮೇಲೆ ಅಲ್ಲ.
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
              ಪ್ರತಿ ಹೂಡಿಕೆದಾರರೂ ಒಮ್ಮೆ "ಮೊದಲ ಹೆಜ್ಜೆ" ಇಟ್ಟಿದ್ದಾರೆ. ನೀವು ಎಲ್ಲವನ್ನೂ ಈಗಲೇ ಅರಿತುಕೊಳ್ಳಬೇಕೆಂದಿಲ್ಲ -
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
        en: "Chapter 8: You've Taken the First Step - Now Let's Begin the Journey",
        kn: "ಅಧ್ಯಾಯ 8: ನೀವು ಮೊದಲ ಹೆಜ್ಜೆ ಇಟ್ಟೆಯಾ - ಈಗ ಪ್ರಯಾಣ ಶುರುವಾಗಲಿ",
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
              ಇಲ್ಲಿವರೆಗೆ ಬಂದಿದ್ದರೆ, ನೀವು ಈಗಾಗಲೇ ಬಹಳ ಜನರಿಗಿಂತ ಮುಂದೆ ಇದ್ದೀರಿ. ಇದು ಅಂತ್ಯವಲ್ಲ - ಇದು ನಿಮ್ಮ ನಿಜವಾದ
              ಪ್ರಯಾಣದ ಆರಂಭ.
            </p>

            <h3>ಮೊದಲ ನಿಜವಾದ ಹೆಜ್ಜೆ - ಡಿಮಾಟ್ ಖಾತೆ ತೆರೆಯುವುದು</h3>
            <p>
              ಷೇರು, ETF ಅಥವಾ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಮೊದಲು ಡಿಮಾಟ್ ಖಾತೆ ಬೇಕು. Zerodha, Groww,
              Upstox ಮುಂತಾದ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಿಂದ ಆರಂಭಿಸಬಹುದು.
            </p>

            <h3>ಪ್ರಾರಂಭವನ್ನು ಆಚರಿಸು</h3>
            <p>
              ನೀವು ಕೇವಲ ಕಲಿತದ್ದಲ್ಲ - ಈಗ ಕಾರ್ಯರೂಪ ಕೊಡಲು ಸಿದ್ಧ. ನಿಮ್ಮ ಜ್ಞಾನವೇ ನಿಮ್ಮ ಸಂಪತ್ತು.
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
