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
    {
      title: "Chapter 1: The Story of Money — From Barter to Bytes",
      content: (
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
    },

    {
      title: "Chapter 2: The Next Chapter — The Art of Budgeting",
      content: (
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
    },

    {
      title: "Chapter 3: From Saving to Growing — The Power of Investing",
      content: (
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
    },

    {
      title: "Chapter 4: How to Think Like an Investor",
      content: (
        <>
          <p>
            Investing begins with mindset. An investor doesn’t see money as something to
            spend but as a tool to build and create value.
          </p>

          <p>
            Thinking like an investor means focusing on the long term, staying consistent,
            and letting time — not emotion — drive results. Markets rise and fall, but real
            wealth is built quietly through discipline and perspective.
          </p>

          <p>
            To think like an investor is to see value where others see price — to focus
            on growth over instant gratification, and purpose over impulse.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 5: Understanding Investment Options",
      content: (
        <>
          <p>
            There’s no single “best” investment — only the one that fits your goals,
            risk comfort, and time horizon. Here are the main types:
          </p>

          <ul>
            <li>
              <strong>Stocks (Equity):</strong> Ownership in companies; high growth
              potential but short-term volatility.
            </li>

            <li>
              <strong>Mutual Funds & SIPs:</strong> Professionally managed,
              diversified, and ideal for consistent long-term investing.
            </li>

            <li>
              <strong>Bonds & Fixed Income:</strong> Safer, steady returns — great
              for stability in your portfolio.
            </li>

            <li>
              <strong>Gold & Real Estate:</strong> Traditional stores of value;
              protect against inflation but require larger capital.
            </li>

            <li>
              <strong>Digital Assets:</strong> Emerging and volatile — invest only if
              you fully understand the risks.
            </li>
          </ul>

          <p>
            <strong>Tip:</strong> Diversify! A balanced mix of different assets
            protects you when markets fluctuate.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 6: The Role of Risk and Emotion in Investing",
      content: (
        <>
          <p>
            Investing isn’t just math — it’s mindset. Risk and emotion play huge
            roles in every decision.
          </p>

          <h3>Understanding Risk</h3>
          <p>
            All investments carry risk. It’s not about avoiding it but managing it —
            spreading investments, staying patient, and aligning them with your
            comfort level.
          </p>

          <h3>The Emotional Side</h3>
          <p>
            Money stirs emotion — excitement, fear, greed. Successful investors
            recognize those feelings but don’t let them control their actions.
            They stay grounded through market ups and downs.
          </p>

          <h3>Balancing Head and Heart</h3>
          <p>
            Good investing balances logic and emotion. Build a strategy you trust and
            stick to it — let your plan, not your panic, decide your actions.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 7: How to Start Investing",
      content: (
        <>
          <p>
            Every investor begins the same way — by starting. You don’t need to know
            everything, just enough to begin wisely.
          </p>

          <ul>
            <li>
              <strong>Define Your Goals:</strong> Know why you’re investing —
              short-term wants or long-term independence.
            </li>

            <li>
              <strong>Understand Risk Appetite:</strong> Be honest about your comfort
              with volatility.
            </li>

            <li>
              <strong>Start Small, Stay Consistent:</strong> Even ₹500/month in an SIP
              can grow meaningfully.
            </li>

            <li>
              <strong>Choose the Right Platform:</strong> Use trusted, transparent,
              SEBI-regulated brokers.
            </li>

            <li>
              <strong>Diversify:</strong> Spread money across asset classes.
            </li>

            <li>
              <strong>Review, Don’t React:</strong> Monitor progress but avoid emotional
              decisions.
            </li>

            <li>
              <strong>Keep Learning:</strong> Financial growth begins with curiosity —
              not luck.
            </li>
          </ul>
        </>
      ),
    },

    {
      title: "Chapter 8: You’ve Taken the First Step — Now Let’s Begin the Journey",
      content: (
        <>
          <p>
            You’ve come far — understanding how money works, how to budget, and how to
            invest. Now it’s time to act.
          </p>

          <h3>The First Real Step: Opening Your Demat Account</h3>
          <p>
            A Demat account is your digital vault for stocks and mutual funds. Choose a
            trusted broker and take your first step into investing.
          </p>

          <h3>Celebrate the Start</h3>
          <p>
            This isn’t the end — it’s your beginning. You’re not just learning about money;
            you’re shaping your financial future. Your knowledge turns into action and growth.
          </p>
        </>
      ),
    },
  ];

  // ============================================================
  // STATE & PARAMS
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);

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

          <div className="module-links">
            <a href="#">Watch videos</a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* === Active Chapter === */}
      <section className="chapters-list">
        <div className="chapter">
          <h2>{current.title}</h2>
          {current.content}
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
