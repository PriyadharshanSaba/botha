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
          <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 1 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
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
          <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 2 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
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
          <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 3 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
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
          <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 4 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
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
          <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 5 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
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
