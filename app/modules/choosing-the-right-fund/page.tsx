"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

// ── Shared table styles ────────────────────────────────────────────────────────
const tbl: React.CSSProperties = { width: "100%", borderCollapse: "collapse", margin: "16px 0", fontSize: "0.95em" };
const th: React.CSSProperties = { background: "#c9a84c", color: "#fdfcf9", padding: "10px 12px", textAlign: "left" };
const td: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid rgba(0,0,0,0.08)" };
const tdAlt: React.CSSProperties = { ...td, background: "rgba(201,168,76,0.06)" };

// ============================================================
//  ALL CHAPTER CONTENT (English only) &mdash; module-level to avoid Turbopack bug
// ============================================================
const chapters: { title: string; content: React.ReactNode }[] = [
    // ==============================
    // INTRO SLIDE
    // ==============================
    {
      title: "Choosing the Right Mutual Fund",
      content: (
        <p className="subtitle" style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
          There are thousands of mutual funds. Not all are good. Learn the step-by-step
          framework &mdash; from goals to metrics &mdash; to choose the right fund with clarity and
          confidence.
        </p>
      ),
    },

    // ==============================
    // CHAPTER 1
    // ==============================
    {
      title: "Chapter 1: Introduction &mdash; How Do You Choose?",
      content: (
        <>
          <p>
            In the previous module, you understood what mutual funds are and how they work.
          </p>
          <p>
            Now comes the practical question: How do you actually choose the right mutual fund?
          </p>
          <p>
            Because here&apos;s the truth &mdash; there are thousands of mutual funds available. Not all
            of them are good. Not all of them are suitable for you. And the &quot;best&quot; fund is not
            the same for everyone.
          </p>
          <div className="pull-quote">Let&apos;s break this down step by step.</div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 2
    // ==============================
    {
      title: "Chapter 2: Start With Your Goal, Not the Fund",
      content: (
        <>
          <p>
            Most beginners make this mistake: they start by looking at &quot;top performing funds.&quot;
            Instead, you should start by asking:
          </p>
          <p>What am I investing for? When do I need this money? How much risk can I handle?</p>
          <p>Your goal decides the category.</p>
          <hr className="chapter-rule" />
          <h3>Example 1: Short-Term Goal</h3>
          <p>
            You want ₹5 lakh in 2 years for buying a car. Since the time horizon is short,
            capital protection becomes more important than high growth. Equity funds &mdash; especially
            small-cap funds &mdash; are unsuitable because markets can fluctuate sharply in the short
            term, and a temporary downturn could reduce your available amount right when you need
            it.
          </p>
          <p>
            For this type of goal, a Short Duration Debt Fund or a Conservative Hybrid Fund is
            more appropriate. The focus here is predictability and capital preservation, not
            maximum growth.
          </p>
          <hr className="chapter-rule" />
          <h3>Example 2: Long-Term Goal</h3>
          <p>
            You are 28 years old planning retirement at 60. That gives you a 30+ year time
            horizon. With such a long period, short-term market volatility becomes less relevant
            because equity markets historically reward long-term investors through compounding.
            Here, growth is the priority.
          </p>
          <p>
            Suitable choices include Equity Index Funds, Flexi-cap Funds, or Large &amp; Midcap
            Funds. Over three decades, equity exposure allows compounding to work powerfully, and
            temporary market corrections become opportunities rather than risks.
          </p>
          <hr className="chapter-rule" />
          <h3>Goal-to-Fund Reference</h3>
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Goal Type</th>
                <th style={th}>Time Horizon</th>
                <th style={th}>Suitable Fund Type</th>
              </tr>
              <tr>
                <td style={td}>Emergency fund</td>
                <td style={td}>0&ndash;1 year</td>
                <td style={td}>Liquid / Debt Fund</td>
              </tr>
              <tr>
                <td style={tdAlt}>Buying a car</td>
                <td style={tdAlt}>2&ndash;3 years</td>
                <td style={tdAlt}>Short Duration / Hybrid</td>
              </tr>
              <tr>
                <td style={td}>House down payment</td>
                <td style={td}>3&ndash;5 years</td>
                <td style={td}>Hybrid / Large Cap</td>
              </tr>
              <tr>
                <td style={tdAlt}>Retirement</td>
                <td style={tdAlt}>10+ years</td>
                <td style={tdAlt}>Equity / Index</td>
              </tr>
              <tr>
                <td style={td}>Wealth creation</td>
                <td style={td}>7&ndash;10+ years</td>
                <td style={td}>Flexi-cap / Multi-cap</td>
              </tr>
            </tbody>
          </table>
          <div className="pull-quote">Your timeline decides your category.</div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 3
    // ==============================
    {
      title: "Chapter 3: Choose the Right Category First",
      content: (
        <>
          <p>
            Suppose your goal is 10+ years. At this stage, you should first shortlist the
            category, not the individual fund. For a long-term goal, that might include large-cap
            funds, flexi-cap funds, or index funds. The key is to narrow your selection within
            one risk profile and one investment style before diving into performance numbers.
          </p>
          <p>
            Do not compare a small-cap fund with a large-cap fund, or a hybrid fund with a pure
            equity fund &mdash; they serve completely different purposes.
          </p>
          <p>
            Always compare funds within the same category. For example, if you are evaluating two
            large-cap funds both benchmarked to the NIFTY 50, only then does it make sense to
            compare their CAGR, alpha, volatility, and other metrics.
          </p>
          <div className="pull-quote">
            Same category. Same benchmark. Only then &mdash; compare.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 4
    // ==============================
    {
      title: "Chapter 4: CAGR &mdash; The Real Return Metric",
      content: (
        <>
          <p>
            Before comparing funds, let&apos;s understand what CAGR (Compounded Annual Growth Rate)
            actually means.
          </p>
          <p>
            CAGR tells you: at what annual rate did your investment grow, assuming profits were
            reinvested and compounded each year?
          </p>
          <p>
            Unlike simple returns, CAGR smooths out volatility and shows the true annual growth
            rate over a period of time. It helps you compare funds fairly across different time
            horizons.
          </p>
          <hr className="chapter-rule" />
          <h3>Fund A vs Fund B</h3>
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Period</th>
                <th style={th}>Fund A CAGR</th>
                <th style={th}>Fund B CAGR</th>
              </tr>
              <tr>
                <td style={td}>1 Year</td>
                <td style={td}>22%</td>
                <td style={td}>16%</td>
              </tr>
              <tr>
                <td style={tdAlt}>3 Year</td>
                <td style={tdAlt}>14%</td>
                <td style={tdAlt}>15%</td>
              </tr>
              <tr>
                <td style={td}>5 Year</td>
                <td style={td}>13%</td>
                <td style={td}>14%</td>
              </tr>
            </tbody>
          </table>
          <p>
            At first glance, Fund A looks more attractive because of its 22% one-year return.
            But investing is not about one exciting year &mdash; it&apos;s about consistent compounding.
          </p>
          <p>
            Fund B shows stronger 3-year and 5-year CAGRs, indicating more stable long-term
            growth. Now assume NIFTY 50&apos;s 5-year CAGR is 12%. Fund A beats the benchmark by 1%
            and Fund B beats it by 2%.
          </p>
          <p>
            Fund B is not just consistent &mdash; it is consistently outperforming the benchmark.
            That matters more than a single strong year.
          </p>
          <hr className="chapter-rule" />
          <p>
            When evaluating funds, focus on 3-year CAGR, 5-year CAGR, and benchmark comparison.
            Avoid chasing 1-year returns.
          </p>
          <div className="pull-quote">
            Long-term consistency builds wealth. One exciting year is noise.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 5
    // ==============================
    {
      title: "Chapter 5: Standard Deviation &mdash; Understanding Volatility",
      content: (
        <>
          <p>
            Returns alone do not tell the full story. You must also understand how volatile those
            returns were. That&apos;s where Standard Deviation comes in.
          </p>
          <p>
            Standard Deviation measures how much a fund&apos;s returns fluctuate around its average
            return. Higher standard deviation means sharper up-and-down swings. Lower standard
            deviation means smoother, more stable performance.
          </p>
          <hr className="chapter-rule" />
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Fund</th>
                <th style={th}>5Y CAGR</th>
                <th style={th}>Std Dev</th>
              </tr>
              <tr>
                <td style={td}>A</td>
                <td style={td}>14%</td>
                <td style={td}>22</td>
              </tr>
              <tr>
                <td style={tdAlt}>B</td>
                <td style={tdAlt}>14%</td>
                <td style={tdAlt}>16</td>
              </tr>
            </tbody>
          </table>
          <p>
            Both funds generated the same 5-year CAGR of 14%. On paper, they look identical.
            But Fund B has a lower standard deviation (16 vs 22), meaning it achieved the same
            return with much lower volatility. That translates to less emotional stress during
            market swings, smaller drawdowns in corrections, and a higher probability that you
            stay invested long term.
          </p>
          <div className="pull-quote">
            Volatility control is underrated. A fund that helps you sleep peacefully is often
            better than one that creates anxiety &mdash; even if the returns are similar.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 6
    // ==============================
    {
      title: "Chapter 6: Alpha &mdash; Is the Fund Manager Adding Value?",
      content: (
        <>
          <p>
            After looking at returns and volatility, the next question is: is the fund manager
            actually creating value beyond the benchmark? That is what Alpha measures.
          </p>
          <p>
            Alpha represents the excess return a fund generates compared to its benchmark, after
            adjusting for market risk. In simple terms, it tells you whether the fund manager&apos;s
            decisions are adding value or not.
          </p>
          <hr className="chapter-rule" />
          <p>Assuming benchmark CAGR = 12%:</p>
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Fund</th>
                <th style={th}>5Y CAGR</th>
                <th style={th}>Alpha</th>
              </tr>
              <tr>
                <td style={td}>A</td>
                <td style={td}>14%</td>
                <td style={td}>+2%</td>
              </tr>
              <tr>
                <td style={tdAlt}>B</td>
                <td style={tdAlt}>12%</td>
                <td style={tdAlt}>0%</td>
              </tr>
              <tr>
                <td style={td}>C</td>
                <td style={td}>10%</td>
                <td style={td}>−2%</td>
              </tr>
            </tbody>
          </table>
          <p>
            Fund A delivers 14% &mdash; 2% above the benchmark. Positive alpha (+2%). The manager is
            adding value. Fund B matches the benchmark &mdash; zero alpha, no extra value. Fund C
            underperforms &mdash; negative alpha (−2%), the manager is destroying value.
          </p>
          <div className="pull-quote">
            One-year alpha is noise. Five-year consistent alpha is signal. It suggests skill,
            not luck.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 7
    // ==============================
    {
      title: "Chapter 7: Beta &mdash; Market Sensitivity",
      content: (
        <>
          <p>
            Once you understand alpha, the next metric to evaluate is Beta. Beta measures how
            sensitive a fund is to overall market movements &mdash; how much the fund is likely to move
            when the benchmark moves.
          </p>
          <p>Beta = 1 → Moves in line with the market.</p>
          <p>Beta &gt; 1 → More volatile than the market.</p>
          <p>Beta &lt; 1 → Less volatile than the market.</p>
          <hr className="chapter-rule" />
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Fund</th>
                <th style={th}>Beta</th>
                <th style={th}>If Market Falls 10%</th>
              </tr>
              <tr>
                <td style={td}>A</td>
                <td style={td}>1.05</td>
                <td style={td}>~10.5% fall</td>
              </tr>
              <tr>
                <td style={tdAlt}>B</td>
                <td style={tdAlt}>0.95</td>
                <td style={tdAlt}>~9.5% fall</td>
              </tr>
              <tr>
                <td style={td}>C</td>
                <td style={td}>1.30</td>
                <td style={td}>~13% fall</td>
              </tr>
            </tbody>
          </table>
          <p>
            Fund A (1.05) moves roughly in line with the market. Fund B (0.95) is slightly less
            volatile. Fund C (1.30) is significantly more volatile &mdash; sharper gains in bull
            markets, but deeper falls in corrections.
          </p>
          <div className="pull-quote">
            The best fund is not the most aggressive one. It&apos;s the one you can stay invested in
            during difficult phases.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 8
    // ==============================
    {
      title: "Chapter 8: Sortino Ratio &mdash; Reward for Downside Risk",
      content: (
        <>
          <p>
            Returns and volatility tell part of the story, but they treat all volatility equally.
            That&apos;s where the Sortino Ratio becomes more useful.
          </p>
          <p>
            Sortino Ratio measures how much return a fund generates per unit of downside risk.
            Unlike standard deviation, Sortino only penalizes harmful volatility &mdash; the negative
            returns. It ignores upside fluctuations because upside volatility is not a problem
            for investors.
          </p>
          <hr className="chapter-rule" />
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Fund</th>
                <th style={th}>5Y CAGR</th>
                <th style={th}>Sortino</th>
              </tr>
              <tr>
                <td style={td}>A</td>
                <td style={td}>14%</td>
                <td style={td}>1.2</td>
              </tr>
              <tr>
                <td style={tdAlt}>B</td>
                <td style={tdAlt}>14%</td>
                <td style={tdAlt}>2.0</td>
              </tr>
            </tbody>
          </table>
          <p>
            Both funds generated the same 5-year CAGR of 14%. However, Fund B has a much higher
            Sortino ratio (2.0 vs 1.2), meaning it delivered the same return with significantly
            better downside control.
          </p>
          <p>
            Higher Sortino = Higher quality of return. As a general reference, a Sortino ratio
            above 1.5 is considered strong for equity funds over a 5-year period.
          </p>
          <div className="pull-quote">
            The fund is not just generating returns &mdash; it is managing risk intelligently while
            doing so.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 9
    // ==============================
    {
      title: "Chapter 9: Treynor Ratio &mdash; Efficient Market Risk Usage",
      content: (
        <>
          <p>
            After understanding total volatility and downside risk, the next step is evaluating
            how efficiently a fund uses market risk. That&apos;s where the Treynor Ratio comes in.
          </p>
          <p>
            Treynor Ratio measures how much return a fund generates per unit of systematic risk
            (Beta). Unlike the Sortino ratio, Treynor evaluates how well the fund compensates
            investors for the market risk it is exposed to. It is especially useful when
            comparing large-cap funds that closely track market movements.
          </p>
          <hr className="chapter-rule" />
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Fund</th>
                <th style={th}>Treynor Ratio</th>
              </tr>
              <tr>
                <td style={td}>A</td>
                <td style={td}>10</td>
              </tr>
              <tr>
                <td style={tdAlt}>B</td>
                <td style={tdAlt}>15</td>
              </tr>
            </tbody>
          </table>
          <p>
            Fund B has a higher Treynor ratio &mdash; it is generating more return for each unit of
            market risk taken. Fund B is using its market exposure more efficiently than Fund A.
          </p>
          <div className="pull-quote">
            A higher Treynor ratio indicates smarter risk utilization &mdash; not just higher returns,
            but better returns relative to the level of market risk assumed.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 10
    // ==============================
    {
      title: "Chapter 10: Capture Ratios &mdash; Bull & Bear Behaviour",
      content: (
        <>
          <p>
            This is one of the most powerful yet underused metrics in fund evaluation. Capture
            Ratios tell you how a fund behaves in rising and falling markets.
          </p>
          <p>
            Upside Capture Ratio measures how much the fund gains when the benchmark rises.
            Downside Capture Ratio measures how much the fund falls when the benchmark falls.
          </p>
          <hr className="chapter-rule" />
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Fund</th>
                <th style={th}>Upside Capture</th>
                <th style={th}>Downside Capture</th>
              </tr>
              <tr>
                <td style={td}>A</td>
                <td style={td}>110%</td>
                <td style={td}>105%</td>
              </tr>
              <tr>
                <td style={tdAlt}>B</td>
                <td style={tdAlt}>105%</td>
                <td style={tdAlt}>80%</td>
              </tr>
            </tbody>
          </table>
          <p>
            Fund A gains 10% more than the benchmark in bull markets but falls 5% more in bear
            markets. Fund B gains slightly less in bull markets but falls significantly less
            during declines. Over long cycles, Fund B often builds wealth more steadily because
            it protects capital during downturns.
          </p>
          <p>
            Remember: a 30% fall needs a 43% gain just to break even. The ideal combination is
            Upside Capture &gt; 100 and Downside Capture &lt; 100.
          </p>
          <hr className="chapter-rule" />
          <h3>Upside-to-Downside Capture Ratio</h3>
          <p>
            You can also calculate: Upside Capture ÷ Downside Capture. If the ratio is greater
            than 1, the fund captures more upside relative to downside &mdash; desirable. If equal to
            1, behavior is proportionate to benchmark. If less than 1, too much downside or too
            little upside.
          </p>
          <p>
            Example: 110 ÷ 80 = 1.38 &mdash; strong. The fund participates well in rallies while
            controlling losses effectively.
          </p>
          <div className="pull-quote">In long-term investing, downside protection is gold.</div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 11
    // ==============================
    {
      title: "Chapter 11: Rolling Returns &mdash; The Truth Detector",
      content: (
        <>
          <p>
            Point-to-point returns can be misleading. If a fund shows 15% 5-year return from
            2019&ndash;2024, that might look impressive &mdash; but what if those five years happened during
            a strong bull market? The performance may reflect market conditions more than fund
            manager skill.
          </p>
          <p>
            This is why Rolling Returns are far more reliable. Rolling returns measure
            performance across multiple overlapping periods, not just one fixed start and end
            date.
          </p>
          <hr className="chapter-rule" />
          <p>
            For example, a 5-year rolling return over 15 years will calculate: 2010&ndash;2015,
            2011&ndash;2016, 2012&ndash;2017… and so on. This shows how the fund performed across different
            market cycles &mdash; bull phases, corrections, and recoveries.
          </p>
          <p>
            If 80% of the rolling 5-year periods beat the benchmark, the fund shows strong
            consistency. If only 40% beat the benchmark, performance may be luck-driven or
            cycle-dependent.
          </p>
          <hr className="chapter-rule" />
          <p>
            Rolling returns answer a critical question: Does the fund perform consistently across
            time, or only in favorable conditions?
          </p>
          <div className="pull-quote">
            Rolling returns reveal stability, reliability, and true long-term performance &mdash; far
            better than a single headline return number.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 12
    // ==============================
    {
      title: "Chapter 12: Expense Ratio &mdash; The Compounding Impact",
      content: (
        <>
          <p>
            The expense ratio is the annual fee charged by a mutual fund for managing your money.
            It may look small &mdash; 1% or 2% &mdash; but because it is deducted every year, it directly
            reduces your CAGR and compounds negatively over time.
          </p>
          <hr className="chapter-rule" />
          <p>
            Fund A Expense Ratio = 1.8%. Fund B Expense Ratio = 0.3%. You invest ₹10 lakh for
            20 years at 12% gross annual return.
          </p>
          <p>
            Fund A effectively gives you 10.2%. Fund B gives you 11.7%. The difference in final
            corpus over two decades: ₹21.8 lakh &mdash; purely due to a 1.5% cost difference.
          </p>
          <p>
            Small annual differences become large wealth gaps due to compounding. This is why
            cost matters deeply.
          </p>
          <hr className="chapter-rule" />
          <p>
            If an active fund charges a higher expense ratio, it must justify that cost by
            delivering consistent positive alpha, strong upside/downside capture balance, and
            superior Sortino ratio. If it fails to outperform meaningfully after costs, a
            low-cost index fund often becomes the better choice.
          </p>
          <div className="pull-quote">
            In investing, what you keep matters more than what you earn.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 13
    // ==============================
    {
      title: "Chapter 13: Portfolio Structure &mdash; What's Inside the Fund?",
      content: (
        <>
          <p>
            Performance numbers are important, but they don&apos;t tell you how the fund is
            generating returns. For that, you must look inside the portfolio.
          </p>
          <hr className="chapter-rule" />
          <h3>Check Concentration</h3>
          <p>
            If the Top 10 holdings exceed 60%, the fund is highly concentrated. This increases
            stock-specific risk &mdash; if one or two major holdings underperform, the entire fund can
            suffer. If a fund has heavy sector exposure (for example, 40% in IT), it carries high
            sector risk.
          </p>
          <hr className="chapter-rule" />
          <h3>Debt Fund Credit Quality</h3>
          <p>
            For debt funds, check credit quality carefully. If a debt fund holds lower-rated
            bonds (AA, A, or below), it carries credit risk. Higher yields often come with higher
            default risk.
          </p>
          <hr className="chapter-rule" />
          <h3>Portfolio Turnover Ratio</h3>
          <p>
            Turnover measures how frequently the fund buys and sells holdings. High turnover may
            indicate frequent trading, higher transaction costs, short-term strategy shifts, and
            potential instability. Low-to-moderate turnover generally reflects a disciplined,
            long-term approach.
          </p>
          <div className="pull-quote">
            Returns tell you what happened. Portfolio structure tells you why it happened &mdash; and
            whether it&apos;s sustainable.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 14
    // ==============================
    {
      title: "Chapter 14: AUM &mdash; Size & Stability",
      content: (
        <>
          <p>
            AUM (Assets Under Management) refers to the total amount of money invested in a
            mutual fund. It gives you a sense of the fund&apos;s scale and operational stability.
          </p>
          <hr className="chapter-rule" />
          <h3>Too Small</h3>
          <p>
            If a fund has very small AUM, it may face liquidity risk. Low investor participation
            can lead to higher expense ratios, difficulty in managing redemptions, or even the
            risk of the fund being merged or shut down. Smaller funds may also struggle to
            diversify properly.
          </p>
          <hr className="chapter-rule" />
          <h3>Too Large</h3>
          <p>
            An extremely large AUM &mdash; especially in small-cap funds &mdash; can become a disadvantage.
            Small-cap stocks typically have lower liquidity, and managing large inflows can make
            it harder for the fund manager to deploy capital efficiently without impacting stock
            prices. This can dilute performance and reduce alpha generation.
          </p>
          <hr className="chapter-rule" />
          <p>
            The ideal scenario is a stable, well-established AUM &mdash; large enough to ensure
            operational stability, but not so large that it restricts flexibility, especially in
            mid- and small-cap strategies.
          </p>
          <div className="pull-quote">
            Size doesn&apos;t guarantee performance, but it does influence how effectively a fund
            can execute its strategy.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 15
    // ==============================
    {
      title: "Chapter 15: Direct vs Regular &mdash; Why Cost Structure Matters",
      content: (
        <>
          <p>
            When investing in mutual funds, you will see two options: Direct Plan and Regular
            Plan. Both invest in the same portfolio. The only difference is cost.
          </p>
          <p>
            Regular plans include distributor commissions, which increase the expense ratio.
            Direct plans eliminate this commission, resulting in a higher net CAGR for the
            investor.
          </p>
          <hr className="chapter-rule" />
          <p>
            Regular Plan CAGR = 12%. Direct Plan CAGR = 13%. Just a 1% difference.
          </p>
          <p>Invest ₹5,000 per month for 25 years:</p>
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Plan</th>
                <th style={th}>CAGR</th>
                <th style={th}>Final Corpus</th>
              </tr>
              <tr>
                <td style={td}>Regular</td>
                <td style={td}>12%</td>
                <td style={td}>~₹95&ndash;98 lakh</td>
              </tr>
              <tr>
                <td style={tdAlt}>Direct</td>
                <td style={tdAlt}>13%</td>
                <td style={tdAlt}>~₹1.15&ndash;1.20 crore</td>
              </tr>
            </tbody>
          </table>
          <p>
            That&apos;s a difference of nearly ₹20&ndash;25 lakh &mdash; purely due to a 1% cost difference.
            Same fund. Same portfolio. Different outcome.
          </p>
          <p>
            If you are confident selecting funds yourself, direct plans maximize long-term
            compounding. If you require professional guidance and behavioral support, it is often
            more efficient to pay a transparent, fixed fee to a qualified advisor rather than
            investing through a regular plan with embedded commissions that compound negatively
            over time.
          </p>
          <div className="pull-quote">
            Cost compounds negatively, just like returns compound positively.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 16
    // ==============================
    {
      title: "Chapter 16: Growth vs IDCW &mdash; Which Option to Choose?",
      content: (
        <>
          <p>
            When investing in a mutual fund, you will see two options: Growth and IDCW (Income
            Distribution cum Capital Withdrawal). Both invest in the same portfolio. The
            difference lies in how returns are handled.
          </p>
          <hr className="chapter-rule" />
          <h3>1. Growth Option &mdash; Power of Compounding</h3>
          <p>
            In the Growth option, the fund does not distribute profits. All gains &mdash; whether from
            dividends, interest, or capital appreciation &mdash; remain invested within the fund. The
            NAV steadily increases as returns compound on previous returns.
          </p>
          <p>
            If a fund earns 12% annually and you stay invested, that 12% is reinvested every
            year. Over time, your returns start generating their own returns. That is compounding
            &mdash; growth on top of growth.
          </p>
          <p>
            Ideal for: long-term wealth creation, retirement planning, financial goals 5+ years
            away, and investors who do not require regular income.
          </p>
          <hr className="chapter-rule" />
          <h3>2. IDCW Option &mdash; Periodic Payouts</h3>
          <p>
            In the IDCW option, the fund distributes money to investors at regular intervals.
            These payouts come directly from the fund&apos;s NAV. After distribution, the NAV falls
            by the same amount.
          </p>
          <p>
            Important: IDCW is not extra return. It is simply a partial withdrawal of your
            invested capital or accumulated gains. If the NAV is ₹20 and the fund distributes
            ₹2, the new NAV becomes ₹18. Your overall wealth does not increase because of IDCW.
          </p>
          <hr className="chapter-rule" />
          <h3>3. Tax Implications</h3>
          <p>
            IDCW payouts are taxed as per your income slab in the year they are received. Growth
            option is taxed only when you redeem your investment (capital gains tax at time of
            sale).
          </p>
          <p>
            With Growth, taxes are deferred until you exit &mdash; the entire amount stays invested and
            continues compounding. With IDCW, every payout creates a tax event, reducing the
            amount that could have continued compounding.
          </p>
          <hr className="chapter-rule" />
          <h3>4. When Does IDCW Make Sense?</h3>
          <p>
            IDCW may make sense if you need regular income (for example, retirees), prefer
            periodic cash flow without actively redeeming units, or are not focused on maximising
            long-term compounding.
          </p>
          <p>
            However, many investors prefer: Growth option + Systematic Withdrawal Plan (SWP).
            With SWP you stay invested in Growth and withdraw a fixed amount periodically &mdash;
            offering more control, better tax efficiency, and flexibility to modify withdrawals
            anytime.
          </p>
          <hr className="chapter-rule" />
          <h3>5. Decision Framework</h3>
          <p>
            Choose Growth if: you want maximum compounding, do not need regular income, your
            goal is long-term (5+ years), and you want tax efficiency through deferral.
          </p>
          <p>
            Choose IDCW only if: you genuinely need periodic income, you understand the tax
            implications, and you are comfortable with lower long-term compounding.
          </p>
          <div className="pull-quote">
            For most wealth-building investors: Growth &gt; IDCW. Compounding works best when it
            is uninterrupted. Income feels good today but compounding builds wealth tomorrow.
          </div>
        </>
      ),
    },

    // ==============================
    // CHAPTER 17
    // ==============================
    {
      title: "Chapter 17: Putting It All Together",
      content: (
        <>
          <p>
            Now let&apos;s apply everything in a structured way. Suppose you are comparing two
            large-cap funds within the same category and benchmark.
          </p>
          <hr className="chapter-rule" />
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Metric</th>
                <th style={th}>Fund A</th>
                <th style={th}>Fund B</th>
              </tr>
              <tr>
                <td style={td}>5Y CAGR</td>
                <td style={td}>14%</td>
                <td style={td}>13.5%</td>
              </tr>
              <tr>
                <td style={tdAlt}>Alpha</td>
                <td style={tdAlt}>+2%</td>
                <td style={tdAlt}>+1%</td>
              </tr>
              <tr>
                <td style={td}>Sortino</td>
                <td style={td}>1.9</td>
                <td style={td}>1.3</td>
              </tr>
              <tr>
                <td style={tdAlt}>Downside Capture</td>
                <td style={tdAlt}>82%</td>
                <td style={tdAlt}>96%</td>
              </tr>
              <tr>
                <td style={td}>Expense Ratio</td>
                <td style={td}>1.6%</td>
                <td style={td}>1.1%</td>
              </tr>
            </tbody>
          </table>
          <p>
            At first glance, Fund B looks attractive because of the lower expense ratio. But
            let&apos;s evaluate holistically.
          </p>
          <hr className="chapter-rule" />
          <h3>CAGR</h3>
          <p>
            Fund A delivers 14% vs Fund B&apos;s 13.5%. A 0.5% difference may look small, but over
            15&ndash;20 years, that compounds meaningfully.
          </p>
          <h3>Alpha</h3>
          <p>
            Fund A generates +2% alpha vs +1% for Fund B. Fund A&apos;s manager is adding more excess
            return over the benchmark. If this alpha is consistent over 5 years, it suggests
            skill rather than luck.
          </p>
          <h3>Sortino</h3>
          <p>
            Fund A&apos;s Sortino = 1.9, Fund B&apos;s = 1.3. Both generate similar returns but Fund A
            does it with far better downside control. That&apos;s quality return, not just raw return.
          </p>
          <h3>Downside Capture</h3>
          <p>
            Fund A: 82%. Fund B: 96%. If the benchmark falls 10%, Fund A may fall ~8.2% while
            Fund B may fall ~9.6%. Over multiple market corrections, that difference compounds
            significantly.
          </p>
          <h3>Expense Ratio</h3>
          <p>
            Fund A costs 0.5% more. But that 0.5% is buying higher alpha, better downside
            protection, and stronger risk-adjusted returns. If the additional return and risk
            control consistently exceed the cost difference, the higher expense is justified.
          </p>
          <hr className="chapter-rule" />
          <p>
            You are not choosing the fund with the lowest expense, the highest CAGR, or the
            highest alpha alone. You are choosing the fund that offers the best combination of
            consistent CAGR, meaningful alpha, strong Sortino, low downside capture, and
            reasonable cost.
          </p>
          <hr className="chapter-rule" />
          <h3>Where to Find the Data</h3>
          <p>
            <strong>AMC Websites</strong> (HDFC AMC, ICICI Prudential AMC, SBI Funds, Nippon AMC)
            &mdash; fact sheets, portfolio holdings, expense ratio, AUM, fund manager details,
            riskometer. Most authentic source.
          </p>
          <p>
            <strong>Value Research</strong> &mdash; 1Y/3Y/5Y CAGR, category comparison, risk measures,
            portfolio breakdown, rolling returns, expense ratio. Beginner-friendly.
          </p>
          <p>
            <strong>Morningstar India</strong> &mdash; Alpha, Beta, Standard deviation, Sharpe ratio,
            Sortino, Capture Ratios. Excellent for risk-adjusted analysis.
          </p>
          <p>
            <strong>Moneycontrol</strong> &mdash; Quick comparison, basic metrics, returns, expense
            ratios, holdings. Good for quick filtering.
          </p>
          <hr className="chapter-rule" />
          <table style={tbl}>
            <tbody>
              <tr>
                <th style={th}>Metric</th>
                <th style={th}>Where to Find</th>
              </tr>
              <tr>
                <td style={td}>CAGR</td>
                <td style={td}>Value Research / Morningstar / AMC</td>
              </tr>
              <tr>
                <td style={tdAlt}>Expense Ratio</td>
                <td style={tdAlt}>AMC Website / Value Research</td>
              </tr>
              <tr>
                <td style={td}>Alpha</td>
                <td style={td}>Morningstar</td>
              </tr>
              <tr>
                <td style={tdAlt}>Beta</td>
                <td style={tdAlt}>Morningstar</td>
              </tr>
              <tr>
                <td style={td}>Standard Deviation</td>
                <td style={td}>Morningstar</td>
              </tr>
              <tr>
                <td style={tdAlt}>Sortino Ratio</td>
                <td style={tdAlt}>Morningstar (select funds)</td>
              </tr>
              <tr>
                <td style={td}>Treynor Ratio</td>
                <td style={td}>Morningstar</td>
              </tr>
              <tr>
                <td style={tdAlt}>Capture Ratios</td>
                <td style={tdAlt}>Morningstar</td>
              </tr>
              <tr>
                <td style={td}>Rolling Returns</td>
                <td style={td}>Value Research</td>
              </tr>
              <tr>
                <td style={tdAlt}>Portfolio Holdings</td>
                <td style={tdAlt}>AMC Website / Value Research</td>
              </tr>
              <tr>
                <td style={td}>AUM</td>
                <td style={td}>AMC Website / Value Research</td>
              </tr>
            </tbody>
          </table>
          <div className="pull-quote">
            Structured decision-making, not emotional chasing. That is how great investors choose
            funds.
          </div>
        </>
      ),
    },
];

export default function ChoosingTheRightFundPage() {
  const { t } = useLanguage();

  // ============================================================
  // STATE & PARAMS
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const moduleId = "choosing-the-right-fund";

  const current = chapters[chapterIndex];

  useEffect(() => {
    async function loadProgress() {
      const chapter = chapterFromURL;

      if (chapter) {
        setChapterIndex(Number(chapter));
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
                className={[
                  "chapter-dot",
                  chapterIndex > dotIdx ? "done" : "",
                  chapterIndex === dotIdx ? "active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  setChapterIndex(dotIdx);
                  saveProgress(dotIdx);
                }}
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
