"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";

export default function Budgeting101Page() {
  // =============================
  //  ALL CHAPTER CONTENT
  // =============================
  const chapters = [
    {
      title: "Chapter 1: Why Budgeting Matters",
      content: (
        <>
          <p>
            Most of us think we know where our money goes — until we start tracking
            it. A coffee here, a delivery there, a weekend out… and suddenly, the
            money’s gone before the month is.
          </p>

          <p>
            Budgeting gives your money clarity — it turns your spending from random
            into intentional. It’s the map that connects your goals with your daily
            choices.
          </p>

          <p>
            When you budget, you’re not limiting yourself — you’re choosing what’s
            worth your energy and effort.
          </p>

          <blockquote>“You can’t grow what you don’t track.”</blockquote>

          <p>
            Budgeting builds awareness, and awareness builds control — the foundation
            of wealth.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 2: Track Before You Tweak",
      content: (
        <>
          <p>
            Before you can improve your finances, you need to understand them. Start
            by tracking your spending for at least one full month.
          </p>

          <ul>
            <li>
              List every source of income — salary, side hustle, or freelance gigs.
            </li>
            <li>
              Note down expenses — group them as needs, wants, savings, and debt
              repayments.
            </li>
            <li>
              Review — where does most of your money go? What can you optimize?
            </li>
          </ul>

          <p>
            Tracking isn’t about judgment — it’s observation. You can’t fix leaks
            until you know where they are.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 3: The 50-30-20 Rule (and Beyond)",
      content: (
        <>
          <p>This timeless budgeting rule is simple and effective:</p>

          <ul>
            <li>
              <strong>50%</strong> — Needs (rent, groceries, utilities, transport)
            </li>
            <li>
              <strong>30%</strong> — Wants (dining out, shopping, hobbies, travel)
            </li>
            <li>
              <strong>20%</strong> — Savings & Investments (emergency fund, SIPs,
              long-term goals)
            </li>
          </ul>

          <p>
            Start here, then adapt it — maybe 40-30-30 for big goals, or 60-25-15
            for flexibility. There’s no perfect ratio, only consistency.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 4: Smart Saving & Spending Hacks",
      content: (
        <>
          <p>Money management isn’t just about cutting down — it’s about spending smarter:</p>

          <ul>
            <li>Automate savings — transfer automatically on salary day.</li>
            <li>Sleep on impulse buys — wait 24 hours before spending.</li>
            <li>Track subscriptions — cancel unused ones.</li>
            <li>Use digital “envelopes” to separate fun and essentials.</li>
            <li>Keep a guilt-free fund — it keeps you consistent and sane.</li>
          </ul>

          <p>
            Spend on what you love. Save on what doesn’t matter.
            Every expense becomes an investment in your priorities.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 5: Build Your Emergency Fund — Your First Line of Defense",
      content: (
        <>
          <p>Investing without an emergency fund is like driving fast without brakes.</p>

          <p>
            Life’s surprises — job loss, medical expenses, or repairs — come unannounced.
            Your emergency fund gives you the calm to handle them without debt.
          </p>

          <h3>How Much Should You Save?</h3>

          <p>
            Set aside 3–6 months of expenses (6–9 months if self-employed or supporting
            others). It’s your safety net — peace of mind over profit.
          </p>

          <h3>Where to Park It</h3>

          <ul>
            <li>Debt funds (liquid / ultra-short-term) — ~6–7% returns, quick access.</li>
            <li>High-interest savings accounts — for 1–2 months of liquidity.</li>
            <li>Short-term FDs — safe but less flexible.</li>
          </ul>

          <p>Avoid risky assets — the goal here is stability and access.</p>

          <h3>How to Build It</h3>

          <p>
            Start small, stay consistent. Automate transfers, redirect bonuses,
            and keep this fund separate from regular savings.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 6: Automate & Simplify",
      content: (
        <>
          <p>The best budget is the one that runs on autopilot.</p>

          <ul>
            <li>Auto-transfer a fixed % into savings or investments monthly.</li>
            <li>Set reminders for bills and reviews.</li>
            <li>Use apps or spreadsheets to track progress.</li>
            <li>Review money once a month — not daily.</li>
          </ul>

          <p>
            Automation keeps you consistent — you don’t need to control every rupee,
            just direct it.
          </p>
        </>
      ),
    },

    {
      title: "Chapter 7: Your Finances, Your Control",
      content: (
        <>
          <p>
            Budgeting isn’t restriction — it’s freedom. Freedom to spend on what matters,
            save for what’s important, and live life on your terms.
          </p>

          <p>
            Every decision reflects your priorities — a promise to your future self.
            Awareness brings control; control brings peace and growth.
          </p>

          <p>
            Now that you understand how money moves, it’s time to grow it.
            Budget wisely today so you can invest boldly tomorrow.
          </p>
        </>
      ),
    },
  ];

  // =============================
  // STATE & PARAMS
  // =============================
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const moduleId = "budgeting-101";

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

  // =============================
  // Render page
  // =============================
  return (
    <main className="container module-detail-container">

      {/* === Module Header === */}
      <section className="module-header">
        <div className="module-number" style={{ borderColor: "#27ae60" }}>
          2
        </div>

        <div className="module-info">
          <h1>Mastering Your Money — The Art of Budgeting</h1>

          <p className="subtitle">
            Budgeting isn’t about saying no — it’s about learning how to say yes to what truly matters.
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
