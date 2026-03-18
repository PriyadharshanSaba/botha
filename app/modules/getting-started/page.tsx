"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function GettingStartedPage() {
  const { t } = useLanguage();
  // ============================================================
  // ALL CHAPTER CONTENT
  // ============================================================
  const chapters = [
    {
      title: "Chapter 1: Opening Your First Investment Accounts",
      content: (
        <>
          <p>Before you begin investing in stocks or mutual funds, you will need to set up the appropriate investment accounts. Fortunately, the process today is fully digital and usually takes less than an hour to complete. Opening these accounts allows you to buy, sell and hold financial assets such as stocks, ETFs and mutual funds through regulated platforms.</p>
      <hr className="chapter-rule" />
      <h3>Demat Account vs Trading Account</h3>
      <p>Two accounts are commonly used when investing in the stock market. A <strong>Trading Account</strong> is used to place buy and sell orders in the market - it acts as the interface between you and the stock exchange, allowing you to place buy or sell orders, view market prices and execute trades. A <strong>Demat Account</strong> (dematerialized account) is where your securities are stored electronically. When you purchase shares, they are credited to your demat account; when you sell them, they are debited. Think of it as a digital vault for your investments, similar to a bank account that holds money. In practice, most brokerage platforms open both accounts together, so investors rarely need to manage them separately.</p>
      <hr className="chapter-rule" />
      <h3>KYC, PAN &amp; Aadhaar Requirements</h3>
      <p>Before opening an investment account, investors must complete the <strong>Know Your Customer (KYC)</strong> process - a regulatory requirement that verifies the investor's identity. The KYC process involves identity verification, address verification and linking your bank account. Most platforms now allow this to be completed online through Aadhaar-based verification and video KYC.</p>
      <p>The most important documents required include: PAN (Permanent Account Number - mandatory for all financial transactions in the securities market), Aadhaar card (used for identity verification and digital KYC), and bank account details (for transferring funds and receiving redemption proceeds).</p>
      <hr className="chapter-rule" />
      <h3>Linking Your Bank Account &amp; Nomination</h3>
      <p>Your investment account must be linked to a bank account. This allows you to transfer funds to invest, receive money when you sell securities, and receive dividend or redemption proceeds. Most platforms allow investors to transfer funds instantly using UPI or net banking.</p>
      <p>Investors should always add a <strong>nominee</strong> to their investment accounts - the person who can claim the investments if something happens to the account holder. Adding a nominee helps avoid legal complications and ensures investments are transferred smoothly. This is a simple but often overlooked step in responsible financial planning.</p>
      <hr className="chapter-rule" />
      <h3>Investment Platforms</h3>
      <p>Several platforms in India allow investors to open demat accounts and invest in financial assets. Some commonly used platforms include Zerodha (one of the largest brokerage platforms in India), Coin by Zerodha (specifically designed for mutual fund investments), Groww (a widely used app for stocks and mutual funds), and MF Central (a platform for managing mutual fund investments across different asset management companies). Most platforms today allow investors to complete account opening entirely online.</p>
      <blockquote className="pull-quote">Opening an investment account is the first operational step in your investing journey. Once your trading and demat accounts are active and linked to your bank account, you are ready to begin investing in stocks, ETFs and mutual funds.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 2: Understanding the Investment Workflow",
      content: (
        <>
          <p>Many beginners enter the world of investing with enthusiasm but without a clear structure. They may buy a few stocks, try mutual funds or follow market tips without understanding how these decisions fit into a broader financial plan. A more effective approach is to think of investing as a structured journey, where each step builds on the previous one. Instead of rushing into complex strategies, investors should follow a logical sequence that strengthens their financial foundation first and gradually expands their investment portfolio.</p>
      <hr className="chapter-rule" />
      <h3>Step 1: Build an Emergency Fund</h3>
      <p>Before investing heavily in markets, the first priority should be establishing a financial safety buffer. An emergency fund typically covers 6&ndash;12 months of essential living expenses and should be kept in highly liquid and low-risk instruments such as savings accounts or liquid mutual funds. Without an emergency fund, investors may be forced to sell investments during unfavorable market conditions, which can interrupt long-term compounding.</p>
      <hr className="chapter-rule" />
      <h3>Step 2: Start Systematic Investments (SIPs)</h3>
      <p>Once the emergency fund is in place, the next step is to begin investing regularly through Systematic Investment Plans (SIPs). SIPs allow investors to invest a fixed amount periodically, typically every month, encouraging disciplined investing and helping smooth out market fluctuations through rupee-cost averaging. For most beginners, SIPs in diversified mutual funds such as index funds or flexi-cap funds provide a simple starting point. Remember the difference between Direct vs Regular and Growth vs IDCW plans - refer to the Mutual Funds modules for more information.</p>
      <hr className="chapter-rule" />
      <h3>Step 3: Build a Core Portfolio</h3>
      <p>After consistently investing through SIPs, investors gradually build a core portfolio - diversified, long-term investments that form the foundation of the investor's wealth. This may include index funds, diversified equity mutual funds and broad market ETFs. The purpose of the core portfolio is stability and long-term growth, rather than frequent trading or speculative opportunities. Over time, this core portfolio becomes the largest and most stable component of the investor's assets.</p>
      <hr className="chapter-rule" />
      <h3>Step 4: Add Direct Stocks &amp; Review Annually</h3>
      <p>Once investors have developed experience and confidence, they may begin allocating a portion of their portfolio to direct equity investments - applying the fundamental analysis, technical analysis and valuation concepts covered earlier in the course. Direct stock exposure should initially remain a smaller portion: core mutual fund portfolio 70&ndash;80%, direct stocks 20&ndash;30%. This approach balances learning opportunities with diversification.</p>
      <p>Investing is not a daily activity. Once a portfolio has been established, it typically requires periodic review rather than constant monitoring. A structured annual review evaluates whether investments remain aligned with financial goals, changes in asset allocation, company fundamentals for direct stock holdings, and opportunities for portfolio rebalancing. Frequent changes are rarely necessary.</p>
      <blockquote className="pull-quote">Investing is a structured journey, not a race. Each step - emergency fund, SIPs, core portfolio, direct stocks - builds on the previous one. Rushing ahead skips the foundation.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 3: Your First ₹1 Lakh Portfolio (Example)",
      content: (
        <>
          <p>After opening your investment accounts, the next practical question becomes: How should you allocate your first investment? A good beginner portfolio should aim to balance three things - growth potential, diversification and risk management. The goal is not to pick perfect investments, but to build a simple, diversified structure that allows you to participate in long-term market growth while avoiding unnecessary concentration.</p>
      <hr className="chapter-rule" />
      <h3>Example: ₹1 Lakh Portfolio Allocation</h3>
      <p>Here is one way a ₹1,00,000 starting portfolio might be structured:</p>
      <div className="ch-card-row">
        <div className="ch-card"><div className="ch-card-icon">📊</div><div className="ch-card-title">40% - Nifty 50 Index Fund</div><div className="ch-card-desc">₹40,000 · Core foundation · Broad exposure to India's leading companies · Low cost and diversified</div></div>
        <div className="ch-card"><div className="ch-card-icon">🌐</div><div className="ch-card-title">30% - Flexi-cap Mutual Fund</div><div className="ch-card-desc">₹30,000 · Active management · Exposure beyond the Nifty 50 · Potential to capture emerging growth</div></div>
        <div className="ch-card"><div className="ch-card-icon">🏢</div><div className="ch-card-title">20% - Direct Stocks</div><div className="ch-card-desc">₹20,000 · 2&ndash;3 companies · Apply fundamental &amp; technical analysis · Learning opportunity</div></div>
      </div>
      <hr className="chapter-rule" />
      <h3>The Fourth Component: Gold or Silver ETF (10%)</h3>
      <p>Allocating ₹10,000 to a Gold or Silver ETF adds a diversification asset to the portfolio. Gold and Silver often behave differently from equities, which can help reduce portfolio volatility during certain market conditions. This provides a hedge during market uncertainty and easy exposure through ETFs without holding physical gold or silver.</p>
      <hr className="chapter-rule" />
      <h3>Why This Structure Works</h3>
      <p>This simple structure creates balance: core stability from the index fund, active diversification through the flexi-cap fund, a learning opportunity through direct stocks, and asset diversification through gold. Instead of relying on a single investment, the portfolio spreads risk across multiple sources of return.</p>
      <p>This example is not a fixed rule - as investors gain experience and their financial situation evolves, portfolio allocations may change. However, starting with a simple, diversified structure helps beginners avoid common mistakes such as concentrating in a few stocks, chasing high-risk opportunities or ignoring asset diversification. The most important step is simply starting the investing journey with a thoughtful structure and long-term mindset.</p>
      <blockquote className="pull-quote">The best first portfolio is not the most optimized one - it is the one that gets you started with discipline, diversification and a long-term mindset.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 4: Your Monthly Investing Plan",
      content: (
        <>
          <p>For most investors, wealth is not built through one large investment, but through consistent monthly investing over many years. Once income begins to stabilize, creating a structured monthly investment plan helps transform savings into long-term assets. A monthly plan allows investors to automate discipline, remove emotional decision-making and steadily increase exposure to long-term growth opportunities.</p>
      <hr className="chapter-rule" />
      <h3>Example: Monthly Investment Plan at ₹70,000 Income</h3>
      <p>A commonly recommended guideline is to invest 20&ndash;30% of monthly income. Consider an investor earning ₹70,000 per month. After accounting for living expenses, the investor allocates approximately ₹23,000 per month - roughly 30% of income - toward savings and investments.</p>
      <div className="ch-card-row">
        <div className="ch-card"><div className="ch-card-icon">📈</div><div className="ch-card-title">₹10,000 - Nifty 50 Index SIP</div><div className="ch-card-desc">Core long-term growth engine. Exposure to India's largest companies with low costs.</div></div>
        <div className="ch-card"><div className="ch-card-icon">🌐</div><div className="ch-card-title">₹5,000 - Flexi-cap SIP</div><div className="ch-card-desc">Diversification beyond the largest companies. Active management across all market caps.</div></div>
        <div className="ch-card"><div className="ch-card-icon">🥇</div><div className="ch-card-title">₹3,000 - Gold Allocation</div><div className="ch-card-desc">Portfolio diversification across asset classes. Hedge during market uncertainty.</div></div>
      </div>
      <p style={{marginTop:"16px"}}>The remaining <strong>₹5,000</strong> goes toward a savings buffer - strengthening the emergency fund, covering short-term financial goals, or handling unexpected expenses. This ensures investments are not disrupted by sudden financial needs.</p>
      <hr className="chapter-rule" />
      <h3>Automation Through SIP &amp; Increasing Over Time</h3>
      <p>One of the most powerful aspects of modern investing is the ability to automate investments through SIPs. With SIPs, the investment amount is automatically deducted from your bank account every month and invested in the selected mutual funds. Automation builds disciplined investing habits, removes the need to time the market, reduces emotional decision-making and ensures consistent participation.</p>
      <p>As income grows, investors should gradually increase their investment contributions. If salary rises from ₹70,000 to ₹1,00,000, the monthly investment amount may increase proportionally. This is sometimes called <strong>step-up investing</strong>, where the investment amount grows over time rather than remaining fixed. Small increases in monthly contributions can have a large impact on long-term wealth accumulation.</p>
      <blockquote className="pull-quote">Successful investing is rarely about finding the perfect stock. More often, it is about building a consistent system that runs month after month - letting discipline and compounding work quietly in the background.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 5: The First 5 Stocks to Study",
      content: (
        <>
          <p>After building a foundation through mutual funds and index investing, many investors naturally become interested in studying individual companies. Direct stock investing allows investors to apply the concepts learned earlier in the course - fundamental analysis, valuation and technical timing. However, beginners often make the mistake of immediately chasing "hot stocks" or following tips. A better approach is to start with a structured filter for identifying strong companies to study. The goal of this chapter is not to recommend specific stocks, but to teach a framework for selecting companies worth researching.</p>
      <hr className="chapter-rule" />
      <h3>The Stock Selection Checklist</h3>
      <p>A strong candidate often demonstrates several of the following characteristics. <strong>Market Leader:</strong> companies that dominate their industry, have strong brands, benefit from large distribution networks and maintain pricing power - these often demonstrate stability and resilience during economic cycles. <strong>Consistent Revenue Growth:</strong> revenue that has grown steadily across several years, indicating expanding demand, market share gains or an industry that is itself growing. <strong>Strong Return on Equity (ROE):</strong> measures how efficiently a company uses shareholder capital to generate profits - consistently strong ROE often signals brand power, operational efficiency or pricing power. <strong>Low Debt Levels:</strong> manageable borrowing, strong interest coverage and consistent cash flow generation - lower debt provides flexibility and resilience. <strong>Large or Expanding Industry:</strong> even a well-managed company may struggle if the industry itself is stagnant - look for companies operating where long-term demand is likely to expand.</p>
      <hr className="chapter-rule" />
      <h3>Sectors Worth Studying</h3>
      <p>When beginning to analyze companies, starting with sectors that form the backbone of the economy can be helpful. <strong>Banking</strong> - plays a central role in economic growth, well-regulated and closely tied to economic expansion. <strong>FMCG (Fast-Moving Consumer Goods)</strong> - everyday consumer products where demand tends to be relatively stable and easier for investors to understand. <strong>Information Technology (IT)</strong> - India has built a strong global presence here, with many companies benefiting from global demand for digital services. <strong>Manufacturing</strong> - industrial goods and components; as industrial activity expands, manufacturing businesses may benefit from increasing domestic and global demand. <strong>Energy</strong> - oil, gas, electricity and renewable power; energy demand is closely linked to economic activity.</p>
      <hr className="chapter-rule" />
      <h3>How to Shortlist Companies</h3>
      <p>A simple process: identify a sector that interests you, list several companies operating in that sector, review basic financial metrics (revenue growth, profitability, debt levels), narrow the list to a few companies with strong fundamentals, then study these businesses more deeply using the fundamental and technical analysis tools covered earlier in the course. When beginning to analyze stocks, the objective is not to immediately build a large portfolio of individual companies - instead, focus on learning how to evaluate businesses carefully. Studying a small group of high-quality companies across different sectors helps you develop the ability to understand business models, interpret financial statements, recognize industry trends and evaluate long-term growth potential.</p>
      <blockquote className="pull-quote">Start with the filter, not the stock. Use the checklist - market leadership, consistent growth, strong ROE, low debt, expanding industry - and let the analysis lead you to the right companies.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 6: How Often Should You Check Your Portfolio?",
      content: (
        <>
          <p>One of the most common mistakes new investors make is checking their portfolio too frequently. With modern investing apps and real-time market data available on smartphones, it can be tempting to monitor investments several times a day. However, investing works best when it is approached with patience and long-term perspective. Constantly tracking short-term price movements often creates unnecessary stress and can lead to emotional decisions.</p>
      <hr className="chapter-rule" />
      <h3>The Problem With Daily Checking</h3>
      <p>Daily portfolio checking can quickly become a habit, especially when markets are volatile. When investors monitor prices every day, they are more likely to react emotionally to small market fluctuations, feel pressure to buy or sell frequently, and focus on short-term movements rather than long-term performance. Markets move up and down every day - these fluctuations are normal and rarely reflect meaningful changes in the underlying businesses you own. Checking the portfolio too often can turn investing into something that feels like trading, even if the original intention was long-term investing.</p>
      <hr className="chapter-rule" />
      <h3>A More Effective Review Rhythm</h3>
      <p><strong>Monthly Glance:</strong> A brief monthly check simply confirms that SIP investments are being executed properly, no unusual activity has occurred, and the overall portfolio allocation remains broadly intact. This should take only a few minutes.</p>
      <p><strong>Quarterly Review:</strong> Every three months, conduct a slightly deeper review - examining company earnings results for direct stock holdings, reviewing major developments in key sectors, and checking whether any investment thesis has materially changed. Quarterly reviews help investors stay informed without reacting to daily noise.</p>
      <p><strong>Annual Rebalance:</strong> Once a year, conduct a thorough portfolio review. Evaluate whether asset allocation has drifted significantly, whether some investments have become disproportionately large, and whether portfolio diversification remains appropriate. If equities have performed exceptionally well and now represent a much larger share than intended, a small rebalance may help maintain risk balance.</p>
      <hr className="chapter-rule" />
      <h3>Why Over-Monitoring Hurts Long-Term Returns</h3>
      <p>Research and experience show that investors who check their portfolios constantly are more likely to panic during short-term market declines, sell quality investments prematurely and chase short-term trends or market excitement. In contrast, investors who maintain a structured review schedule tend to remain focused on long-term fundamentals rather than daily volatility. Successful investing is not about reacting to every market movement - it is about allowing strong businesses and diversified portfolios to compound steadily over time.</p>
      <blockquote className="pull-quote">Monthly glance. Quarterly review. Annual rebalance. This cadence is all most long-term investors need. Everything else is noise masquerading as signal.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 7: Your First Portfolio Review Checklist",
      content: (
        <>
          <p>Once your portfolio has been built and investments are in place, the next important habit is periodic review. However, reviewing a portfolio should not mean reacting to every market movement. Instead, investors should use a structured checklist that focuses on the long-term health of their investments. A simple annual review system helps investors stay disciplined and avoid emotional decisions driven by short-term volatility.</p>
      <hr className="chapter-rule" />
      <h3>Checklist Question 1: Is the Business Still Strong?</h3>
      <p>For direct stock investments, the first question should always be about the quality of the business itself - not the recent stock price. Consider whether the company continues to demonstrate steady revenue growth, healthy profitability, a strong competitive position and capable management. If the underlying business remains strong, short-term price fluctuations often become less important.</p>
      <hr className="chapter-rule" />
      <h3>Checklist Question 2: Has Valuation Become Extreme?</h3>
      <p>Even strong businesses can become overvalued if their share prices rise significantly faster than their underlying earnings. During portfolio reviews, ask: Has the stock price risen far beyond the company's earnings growth? Has valuation reached levels that may imply excessive optimism? In such situations, investors may consider gradually reducing exposure or simply monitoring the position more carefully.</p>
      <hr className="chapter-rule" />
      <h3>Checklist Question 3: Has Portfolio Allocation Drifted?</h3>
      <p>Over time, some investments may grow much faster than others, causing the portfolio allocation to drift away from the original plan. For example, equities may grow from 60% of the portfolio to 75%, or a single stock may grow from 5% to 15%. If this happens, a small rebalance may help restore the intended level of diversification and risk balance.</p>
      <hr className="chapter-rule" />
      <h3>Checklist Question 4: Is the Original Investment Thesis Broken?</h3>
      <p>Every investment should ideally begin with a clear reason for buying. During the review, revisit that reasoning. Ask: Has the company's business model changed significantly? Has the industry environment deteriorated? Has management taken actions that weaken the business? If the original thesis no longer holds, it may be reasonable to reconsider the investment.</p>
      <p>Without a structured review process, investors often react to emotions such as fear during market declines or excitement during market rallies. A simple checklist creates discipline and objectivity - encouraging investors to focus on business fundamentals and portfolio structure rather than daily market noise.</p>
      <blockquote className="pull-quote">The four review questions: Is the business still strong? Has valuation become extreme? Has allocation drifted? Is the original thesis broken? Four questions are all you need for a disciplined annual review.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 8: When to Add More Money",
      content: (
        <>
          <p>One of the most powerful ways to build wealth is not just choosing good investments, but continuously adding capital to your portfolio over time. Many investors focus heavily on selecting the right stocks or funds, but long-term wealth creation often comes from a much simpler principle: consistently increasing the amount you invest as your financial capacity grows.</p>
      <hr className="chapter-rule" />
      <h3>Investing During Market Corrections</h3>
      <p>Market corrections are a natural part of the investing cycle. Periods of volatility or temporary declines often create opportunities for long-term investors to accumulate assets at more attractive prices. Instead of reacting with fear during market declines, disciplined investors often view corrections as a chance to continue their regular investments, increase contributions if possible, and maintain a long-term perspective. Markets historically move in cycles and downturns have often been followed by periods of recovery and growth.</p>
      <hr className="chapter-rule" />
      <h3>The Role of Long-Term Compounding</h3>
      <p>Compounding works most effectively when new capital is added regularly. Each additional investment increases the base on which future returns are generated. Over time, this creates a compounding effect where both the original investment and the accumulated gains continue to grow. An investor who contributes consistently over many years may benefit far more from steady contributions than from trying to perfectly time individual market moves. This is why disciplined investors focus less on predicting short-term market behavior and more on continuing to invest regularly over long periods.</p>
      <hr className="chapter-rule" />
      <h3>Increasing SIPs as Income Grows - Step-Up Investing</h3>
      <p>As careers progress, most individuals experience gradual increases in income. One of the most effective habits investors can develop is increasing their investments alongside their income. For example, when income increases from ₹70,000 to ₹90,000 per month, the investor may increase their SIP contributions accordingly. This process is sometimes called <strong>step-up investing</strong> - where the investment amount grows over time rather than remaining fixed. Even modest increases in monthly investments can significantly accelerate long-term wealth creation.</p>
      <p>Successful investors rarely rely on one large investment decision. Instead, they focus on building a system where investments grow alongside income. By continuing to add capital during market corrections, maintaining regular contributions through SIPs and gradually increasing investments as income rises, investors create the conditions for sustained long-term compounding. Over decades, this disciplined approach can make a far greater difference than any single investment decision.</p>
      <blockquote className="pull-quote">The best time to add more money is when markets are lower and others are fearful. The best habit is to keep adding regardless. Compounding rewards consistency far more than timing.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 9: Common Beginner Mistakes",
      content: (
        <>
          <p>Every investor makes mistakes at some point in their journey. The difference between successful investors and unsuccessful ones is often how quickly they recognize and avoid common pitfalls. Beginners are particularly vulnerable to certain behavioral mistakes because markets can appear exciting, unpredictable and full of opportunities. Without a structured approach, it becomes easy to make decisions driven by emotion, noise or speculation rather than careful analysis.</p>
      <hr className="chapter-rule" />
      <h3>Chasing Small-Cap Stocks</h3>
      <p>Small-cap companies often attract attention because they sometimes show rapid price movements and the promise of high returns. While some small-cap companies eventually grow into large businesses, many others remain volatile or fail to deliver sustainable growth. Beginners who allocate a large portion of their portfolio to small-cap stocks may experience higher volatility, lower business stability and greater downside risk. Small-cap exposure can be part of a portfolio, but it should generally remain a smaller allocation until investors gain more experience.</p>
      <hr className="chapter-rule" />
      <h3>Following Telegram Tips and Social Media Recommendations</h3>
      <p>In recent years, many investors have begun following stock tips shared on messaging platforms, forums or social media channels. These tips often promise quick profits or claim insider knowledge. However, blindly following such recommendations can be dangerous because the information may be unreliable, the person giving the tip may have conflicting incentives, and the investment may not match the investor's own financial goals or risk tolerance. Successful investors rely on their own research and structured analysis, rather than chasing anonymous recommendations.</p>
      <hr className="chapter-rule" />
      <h3>Frequent Trading &amp; Ignoring Diversification</h3>
      <p>Beginners sometimes feel that they must continuously buy and sell securities in order to generate returns. In reality, excessive trading leads to higher transaction costs, increased tax liabilities and emotional decision-making. Long-term investors often achieve better results by holding quality investments patiently rather than constantly reacting to short-term price movements.</p>
      <p>Some beginners concentrate a large portion of their money in a small number of stocks or a single sector - sometimes because they become overly confident about a particular company or industry. However, lack of diversification increases risk significantly. Diversification across multiple sectors, different companies and different asset classes helps reduce the impact of any single investment performing poorly.</p>
      <hr className="chapter-rule" />
      <h3>Panic Selling During Market Declines</h3>
      <p>Market volatility is inevitable. Prices will occasionally fall, sometimes sharply. Beginners who are unprepared for this volatility may react emotionally and sell their investments during market declines, locking in losses. In many cases, these declines are temporary and markets recover over time. Investors who panic sell often miss the eventual recovery and long-term growth. Learning to remain calm during periods of volatility is one of the most important skills an investor can develop.</p>
      <blockquote className="pull-quote">Most investment mistakes are not caused by lack of intelligence or complex market forces. They are caused by impatience, emotional reactions or lack of structure. A simple system removes most of these traps.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 10: The Investor's Ongoing Journey",
      content: (
        <>
          <p>Starting to invest can feel overwhelming because there are many concepts, tools and investment options available. One of the best ways to stay focused is to think about investing as a gradual process that unfolds over time, rather than something that must be perfected immediately. The first year of investing is primarily about building good habits, gaining familiarity with markets and developing confidence.</p>
      <hr className="chapter-rule" />
      <h3>Months 1&ndash;2: Strengthen Your Financial Base</h3>
      <p>The first stage focuses on establishing financial stability. During these initial months, investors typically focus on organizing personal finances, ensuring an adequate emergency fund exists, setting up investment accounts and determining how much money can be invested regularly. This phase is less about investing immediately and more about building the foundation that allows investing to happen consistently.</p>
      <hr className="chapter-rule" />
      <h3>Months 3&ndash;4: Start Systematic Investing</h3>
      <p>Once the financial base is in place, investors can begin regular monthly investing. The primary focus at this stage is consistency, not complexity. Regular contributions into diversified investment vehicles help investors become comfortable with market fluctuations. The investor's system is now established - monthly contributions, automated investments, gradual portfolio growth. This habit-building phase is critical because long-term wealth creation depends heavily on consistent participation in markets over time.</p>
      <hr className="chapter-rule" />
      <h3>Around Month 6: Begin Studying Individual Companies</h3>
      <p>After several months of observing markets and investing regularly, investors can begin studying individual businesses more closely. The goal during this stage is not immediate stock buying, but learning how companies operate and how to evaluate them. Investors may begin reviewing company financials, understanding industry dynamics and observing how stock prices react to earnings or news. This stage develops the analytical skills that eventually support direct stock investing.</p>
      <hr className="chapter-rule" />
      <h3>Around Month 12: Consider Building First Stock Positions</h3>
      <p>By the end of the first year, many investors feel more comfortable with how markets function. At this stage, investors may begin allocating a small portion of their portfolio to carefully selected individual companies. These initial positions are often modest in size, allowing investors to gain experience while maintaining the stability of a diversified portfolio. The emphasis remains on long-term thinking, disciplined analysis and gradual learning.</p>
      <hr className="chapter-rule" />
      <h3>The Purpose of the First Year</h3>
      <p>The first year of investing is not about achieving extraordinary returns. Instead, it is about building the habits and systems that allow long-term compounding to work. Investors who focus on process over returns in the early years tend to build lasting portfolios. The behaviours, knowledge and systems developed in this period create the foundation for everything that follows.</p>
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
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const moduleId = "getting-started";

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
            Module 10<br /><em>Complete.</em>
          </div>
          <p className="complete-sub">
            You&apos;ve finished Getting Started &mdash; all 10 chapters. You now have everything you need to begin your investing journey: open accounts, build your first portfolio, automate monthly investments, study companies, review intelligently and avoid common mistakes. The knowledge is yours &mdash; now it&apos;s time to apply it.
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
          <h2>{current.title}</h2>
          {current.content}
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
