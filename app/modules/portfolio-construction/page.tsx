"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function PortfolioConstructionPage() {
  const { t } = useLanguage();
  // ============================================================
  // ALL CHAPTER CONTENT
  // ============================================================
  const chapters = [
    // ==============================
    // INTRO SLIDE
    // ==============================
    {
      title: "Portfolio Construction & Personal Wealth",
      content: (
        <>
          <p className="subtitle" style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
            Knowledge alone is not enough. This module shows you how to apply everything you have learned — building a structured, practical framework for managing your personal wealth through asset allocation, diversification, risk management and behavioral discipline.
          </p>
        </>
      ),
    },

    // ==============================
    // CHAPTER 1
    // ==============================
    {
      title: "Chapter 1: Net Worth Thinking — Assets, Liabilities & Cash Flow",
      content: (
        <>
          <p>This module shifts the focus from simply analyzing investments to structuring your entire financial life. Up to this point in the course, you have already built a strong foundation — you understand how markets work, how mutual funds function, how to read price behavior through technical analysis, and how to evaluate businesses using fundamental analysis.</p>
          <p>But knowledge alone is not enough. The real question now becomes: How do you apply all of this to your own financial life? How do you decide how much to invest, where to allocate your capital, how much risk to take, and how to balance investments with other aspects of your finances such as emergency funds, real estate and long-term goals?</p>
          <p>This module is designed to help you answer those questions. It brings together everything you have learned so far and shows you how to build a structured, practical framework for managing your personal wealth over time.</p>
          <hr className="chapter-rule" />
          <h3>Net Worth = Assets – Liabilities</h3>
          <p>Before you begin constructing an investment portfolio, it is important to first understand your overall financial position. Investing does not exist in isolation — it is only one part of your broader financial life. Your investments should be built on top of a clear understanding of what you own, what you owe, and how money flows through your life.</p>
          <p><strong>Assets</strong> are things you own that have financial value: investments in stocks or mutual funds, real estate properties, savings in bank accounts, retirement accounts or provident funds, and gold or other financial assets. These represent the resources that contribute to your long-term financial stability and wealth.</p>
          <p><strong>Liabilities</strong> represent money that you owe to others: home loans, personal loans, education loans, and credit card debt. While some liabilities may help acquire valuable assets (such as a home loan for property), they still represent financial obligations that must be managed carefully.</p>
          <hr className="chapter-rule" />
          <h3>Why Net Worth Is Only Part of the Story</h3>
          <p>While net worth provides a snapshot of your financial position, it does not fully explain how stable your finances are. To understand that, you must also examine cash flow — how money moves in and out of your financial life. Two individuals with similar net worth may have very different financial stability depending on their cash flow patterns.</p>
          <p>A strong financial structure begins with positive and stable cash flow. Positive cash flow means that your income exceeds your expenses, leaving room for savings, investments and long-term financial planning. Consistent investing is rarely the result of occasional large investments — it is usually built through regular savings and disciplined capital allocation over many years.</p>
          <blockquote className="pull-quote">Before thinking about portfolio construction, ensure that your financial foundation — your net worth and your cash flow — is stable and well understood.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 2
    // ==============================
    {
      title: "Chapter 2: Understanding Your Financial Starting Point",
      content: (
        <>
          <p>Before you begin making investment decisions, it is important to understand where you currently stand financially. Investment strategies are not universal. The same strategy that works well for one person may be completely unsuitable for another. Your investment approach should always reflect your personal financial situation, responsibilities and long-term goals.</p>
          <hr className="chapter-rule" />
          <h3>Factors That Shape Your Financial Starting Point</h3>
          <p>Several factors shape your financial starting point, including: the stability and predictability of your income, family responsibilities and dependents, the amount of savings or investments you already have, existing debt obligations, and your short-term and long-term financial goals. Each of these elements influences how much risk you can reasonably take and how your investments should be structured.</p>
          <p>For example, a young professional early in their career may have many years ahead to grow their wealth. With fewer financial obligations and a longer investment horizon, they may be able to allocate a larger portion of their portfolio toward growth-oriented assets such as equities. In contrast, someone approaching retirement may have very different priorities — protecting accumulated wealth and ensuring financial stability may become more important than pursuing aggressive growth.</p>
          <hr className="chapter-rule" />
          <h3>Why This Assessment Matters</h3>
          <p>Understanding your financial starting point allows you to design an investment strategy that is aligned with your life circumstances rather than driven by market trends or external opinions. A well-structured investment strategy always begins with a clear understanding of your current position and future goals — not with what is currently popular in the market.</p>
          <p>Before building a portfolio, take the time to assess your financial foundation carefully. Ask yourself: How stable is my income? What are my major financial responsibilities over the next three to five years? Do I have existing debt that needs to be managed alongside investing? What are the specific financial goals I am investing toward?</p>
          <blockquote className="pull-quote">Investing is personal. The right strategy is not the most popular one — it is the one that fits your life, your responsibilities and your long-term goals.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 3
    // ==============================
    {
      title: "Chapter 3: Risk Appetite vs Risk Capacity",
      content: (
        <>
          <p>When it comes to investing, two people can look at the exact same market situation and react very differently. One investor may remain calm during a market decline, while another may feel anxious and rush to sell. This difference highlights two important concepts that every investor should understand: risk appetite and risk capacity.</p>
          <hr className="chapter-rule" />
          <h3>Risk Appetite vs Risk Capacity</h3>
          <p><strong>Risk appetite</strong> refers to your emotional tolerance for volatility. It reflects how comfortable you feel when markets fluctuate and when the value of your investments temporarily declines. Some investors are comfortable seeing their portfolio fall 20–30% during market corrections if they believe in the long-term potential of their investments. Others may find even small fluctuations stressful.</p>
          <p><strong>Risk capacity</strong> refers to your financial ability to withstand losses without damaging your long-term financial stability. Risk capacity is influenced by: the stability of your income, your current net worth, your savings and financial reserves, the time horizon for your financial goals, and your reliance on investment income.</p>
          <hr className="chapter-rule" />
          <h3>Why Both Must Be Considered Together</h3>
          <p>For example, an individual with a stable salary, a growing net worth and a long investment horizon may have a relatively high risk capacity. Temporary market fluctuations are less likely to affect their financial security because their income and savings continue to support their financial position. On the other hand, someone who depends on their investments for regular income or who has limited financial reserves may have a much lower risk capacity — large market declines could significantly impact their ability to meet expenses.</p>
          <p>Your income and net worth play a critical role in determining risk capacity. Higher income stability and stronger financial reserves generally increase the ability to absorb market volatility, while limited financial buffers reduce that flexibility. A successful investment strategy must consider both factors together. Taking excessive risk beyond your financial capacity can create instability, while investing too conservatively due to emotional discomfort may limit long-term growth.</p>
          <blockquote className="pull-quote">By understanding the difference between risk appetite and risk capacity, you can design an investment approach that is both financially sustainable and psychologically comfortable — helping you stay disciplined during inevitable market fluctuations.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 4
    // ==============================
    {
      title: "Chapter 4: Emergency Fund — Your Financial Safety Net",
      content: (
        <>
          <p>Before allocating significant capital to volatile assets such as equities, it is essential to first establish an emergency fund. Earlier in the course, particularly in the budgeting module, we discussed the importance of managing expenses, building savings discipline and creating financial buffers. The emergency fund is one of the most important outcomes of that discipline.</p>
          <hr className="chapter-rule" />
          <h3>What Is an Emergency Fund?</h3>
          <p>An emergency fund acts as a financial safety net that protects you from unexpected disruptions. Life events rarely follow predictable timelines and unforeseen expenses can arise at any time. Common situations where an emergency fund becomes critical include: temporary job loss or interruption of income, unexpected medical expenses, urgent home or vehicle repairs, and sudden family responsibilities.</p>
          <p>Without an emergency fund, investors may be forced to liquidate long-term investments during unfavorable market conditions simply to meet short-term financial needs. Selling investments during a market downturn locks in losses that would otherwise have recovered over time — exactly the opposite of what long-term investing requires.</p>
          <hr className="chapter-rule" />
          <h3>How Large Should It Be?</h3>
          <p>A commonly recommended guideline is to maintain six to twelve months of essential living expenses in highly liquid instruments such as savings accounts or liquid mutual funds. These funds should be easily accessible and should not be exposed to significant market volatility. The purpose of this reserve is not to generate high returns, but to provide financial stability and flexibility during difficult periods.</p>
          <p>By maintaining an adequate emergency fund, you give your long-term investments the time they need to grow without being disrupted by short-term financial pressures. This buffer allows you to remain invested through market cycles rather than making forced decisions during periods of uncertainty.</p>
          <blockquote className="pull-quote">An emergency fund is not an investment — it is insurance. It protects your long-term investments by ensuring you never need to sell them at the wrong time.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 5
    // ==============================
    {
      title: "Chapter 5: Role of Real Estate in Wealth Allocation",
      content: (
        <>
          <p>For many individuals, real estate represents one of the largest components of personal wealth. In many cases, the value of a home or property may exceed the value of all other financial investments combined. Because of this, real estate plays an important role when thinking about overall wealth allocation — even though it is often not considered alongside traditional investment assets like stocks or mutual funds.</p>
          <hr className="chapter-rule" />
          <h3>How Real Estate Functions in a Financial Life</h3>
          <p>Real estate can serve several different purposes: a <strong>primary residence</strong> (the home you live in), <strong>rental property</strong> (generating regular income through rent), and <strong>long-term capital appreciation</strong> (benefiting from increases in property values over time). For many families, owning a home also provides stability and long-term security.</p>
          <p>However, from an investment perspective, it is important to recognize that property behaves differently from financial assets. Real estate investments typically have: low liquidity (property cannot be easily sold quickly when cash is needed), large capital requirements (significant upfront investment is usually required), transaction costs (buying and selling property involves taxes, registration fees and other costs), and concentration risk (a large portion of wealth may be tied to a single asset).</p>
          <hr className="chapter-rule" />
          <h3>Viewing Real Estate as Part of Total Wealth</h3>
          <p>Because of these factors, real estate should always be viewed as part of your overall financial picture — not separately from it. When designing an investment portfolio, investors should consider how real estate already influences their asset allocation. For example, if a substantial portion of personal wealth is invested in property, the remaining financial portfolio may benefit from greater diversification across other asset classes such as equities, debt instruments or gold.</p>
          <p>Thinking about real estate in the context of your total wealth helps ensure that your financial assets remain balanced, diversified and aligned with your long-term goals. A home is often both a lifestyle choice and a financial asset — understanding both dimensions helps you make more informed decisions about the rest of your portfolio.</p>
          <blockquote className="pull-quote">Real estate is often the largest asset most people own. Including it in your wealth picture — not treating it separately — is essential for building a truly balanced financial plan.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 6
    // ==============================
    {
      title: "Chapter 6: Age-Based and Goal-Based Investing",
      content: (
        <>
          <p>Investment strategies should not remain static throughout life. As your financial situation, responsibilities and goals evolve, the way you allocate your investments should evolve as well. Two frameworks help guide this process: age-based investing and goal-based investing. When combined thoughtfully, these frameworks help create a portfolio that aligns both with your stage of life and your future financial objectives.</p>
          <hr className="chapter-rule" />
          <h3>Age-Based Investing</h3>
          <p>Age-based investing focuses on how your investment horizon and financial priorities change over time. Younger investors typically have certain advantages: longer time horizons before major financial goals, greater ability to tolerate market volatility, and more time to recover from temporary market declines. Because of this, younger investors often allocate a larger portion of their portfolios to growth-oriented assets such as equities, which historically offer higher long-term return potential but also experience greater short-term fluctuations.</p>
          <p>As investors move later into their careers and approach retirement, priorities often begin to shift. At this stage, preserving accumulated wealth and ensuring financial stability may become more important than pursuing aggressive growth. This may lead to gradually increasing allocations toward more stable assets such as debt instruments or income-generating investments.</p>
          <hr className="chapter-rule" />
          <h3>Goal-Based Investing</h3>
          <p>While age provides a general framework, most investments are ultimately tied to specific financial goals. Common financial goals may include purchasing a home, funding children&apos;s education, retirement planning, and major life expenses. Each goal has its own time horizon and that time horizon influences the type of investments that may be appropriate.</p>
          <p>Short-term goals (1–3 years) typically require more stable and liquid investments. Medium-term goals (3–7 years) may involve a balanced mix of growth and stability. Long-term goals (10+ years) can often tolerate greater exposure to equities because there is more time to navigate market cycles.</p>
          <hr className="chapter-rule" />
          <h3>Combining Both Approaches</h3>
          <p>Age-based and goal-based investing are most effective when used together rather than separately. Age helps determine your overall risk tolerance and investment horizon, while goals help determine how specific portions of your portfolio should be allocated. For example, a young investor may still choose conservative investments for a near-term goal like buying a car in one year, even while maintaining a growth-oriented portfolio for long-term wealth creation.</p>
          <blockquote className="pull-quote">By combining age and goal perspectives, investors can build portfolios that remain aligned with both life stages and financial priorities — creating a more balanced and sustainable investment strategy over time.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 7
    // ==============================
    {
      title: "Chapter 7: Asset Allocation — The Core Driver of Returns",
      content: (
        <>
          <p>Asset allocation refers to how your investments are distributed across different asset classes. Instead of concentrating all your capital in one type of investment, asset allocation spreads investments across multiple categories to balance growth potential and risk. Many studies in portfolio management suggest that asset allocation plays a larger role in long-term returns than the selection of individual securities.</p>
          <hr className="chapter-rule" />
          <h3>The Major Asset Classes</h3>
          <p>Common asset classes include: <strong>Equities</strong> — stocks and equity mutual funds that offer long-term growth potential; <strong>Debt instruments</strong> — bonds, fixed deposits and debt mutual funds that provide stability and income; <strong>Gold</strong> — often used as a hedge during periods of economic uncertainty or inflation; and <strong>Real estate</strong> — property that may generate rental income and long-term capital appreciation. Each asset class behaves differently under various economic conditions.</p>
          <p>For example, during strong economic growth, equities often perform well as corporate earnings expand. During periods of uncertainty or declining interest rates, debt instruments may provide stability. During inflationary environments or geopolitical stress, gold may act as a store of value. By allocating capital across different asset classes, investors reduce the likelihood that their entire portfolio will be affected by the same economic forces.</p>
          <hr className="chapter-rule" />
          <h3>An Example in Practice</h3>
          <p>Consider two investors with ₹10 lakh available for investment. Investor A invests the entire amount in equities — while this portfolio may deliver strong returns during bull markets, it may also experience significant volatility during market corrections. Investor B spreads investments across multiple assets: ₹5 lakh in equities, ₹3 lakh in debt instruments, ₹1 lakh in gold and ₹1 lakh in other investments or cash reserves. In this case, the portfolio still participates in long-term equity growth but also includes assets that may provide stability during periods of market turbulence.</p>
          <hr className="chapter-rule" />
          <h3>Asset Allocation Changes Over Time</h3>
          <p>Asset allocation is not static — it often evolves as an investor&apos;s life circumstances change. A young professional may allocate 70–80% of their portfolio to equities because they have a long investment horizon. Someone approaching retirement may gradually shift toward a larger allocation in debt instruments and income-generating assets to reduce volatility. The primary goal of asset allocation is not simply maximizing returns — it is creating a portfolio that balances growth potential, risk management and financial stability.</p>
          <blockquote className="pull-quote">Asset allocation is the most important decision in portfolio construction. How you distribute your capital across asset classes matters more than which individual securities you pick.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 8
    // ==============================
    {
      title: "Chapter 8: Diversification — Managing Portfolio Risk",
      content: (
        <>
          <p>Diversification is one of the most important principles in long-term investing. It refers to spreading your investments across different assets so that no single investment has an outsized impact on your overall portfolio. Markets are inherently unpredictable — even strong companies, industries or asset classes may go through periods of weak performance. By diversifying, investors reduce the risk that a downturn in one investment will significantly damage their overall wealth.</p>
          <hr className="chapter-rule" />
          <h3>Ways to Diversify a Portfolio</h3>
          <p><strong>Industry diversification:</strong> Different industries perform differently depending on economic conditions. Banking stocks may perform well during periods of strong credit growth; technology companies may benefit from digital transformation trends; consumer goods companies may provide stability during slower economic cycles. Holding companies across multiple industries helps reduce sector-specific risk.</p>
          <p><strong>Asset class diversification:</strong> A portfolio might include equities for long-term growth, debt instruments for stability and predictable income, gold as a hedge during uncertainty, and real estate as a long-term tangible asset. Since these assets often respond differently to economic events, combining them can make a portfolio more resilient.</p>
          <p><strong>Geographic diversification:</strong> Some investors allocate a portion of their portfolio to international equities through global funds or exchange-traded funds. This helps reduce the risk of relying entirely on the economic performance of a single country.</p>
          <p><strong>Diversification by investment style:</strong> Mixing large-cap stocks (stability and strong market leadership), mid-cap companies (higher growth potential), mutual funds or index funds (diversified exposure to multiple companies), and fixed income instruments (stability during volatility). Each category behaves differently, helping create a more balanced portfolio.</p>
          <hr className="chapter-rule" />
          <h3>An Example of a Diversified Portfolio</h3>
          <p>Consider an investor with ₹10 lakh available for investment. Instead of investing the entire amount in a single stock, the investor might structure the portfolio as: ₹4 lakh in diversified equity mutual funds, ₹2 lakh in large-cap stocks, ₹2 lakh in debt instruments or fixed income funds, ₹1 lakh in gold or gold ETFs, and ₹1 lakh held in liquid funds or cash equivalents. In this structure, the portfolio participates in equity growth while maintaining assets that provide stability.</p>
          <blockquote className="pull-quote">The purpose of diversification is not to eliminate risk entirely. All investments carry some degree of uncertainty. Instead, diversification helps manage risk by reducing concentration in any single investment, sector or asset class.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 9
    // ==============================
    {
      title: "Chapter 9: Position Sizing — Capital Allocation",
      content: (
        <>
          <p>Position sizing refers to how much capital you allocate to each individual investment within your portfolio. While selecting good investments is important, how much capital you commit to each position plays a major role in determining the overall stability of your portfolio. The goal is not simply managing the risk of a single position, but ensuring that the entire portfolio remains diversified and well structured.</p>
          <hr className="chapter-rule" />
          <h3>Why Position Sizing Matters</h3>
          <p>Many investors focus heavily on what to buy, but give little thought to how much to buy. For example, imagine an investor who identifies five promising stocks but allocates 50% of their portfolio to a single company. Even if the remaining investments perform well, poor performance in that one stock could significantly affect the overall portfolio. In contrast, allocating capital more evenly across several investments reduces the risk of any single decision having an outsized impact.</p>
          <hr className="chapter-rule" />
          <h3>An Example of Position Sizing</h3>
          <p>Consider an investor with ₹10 lakh available for equity investments. Instead of investing a large portion into one stock, the investor might structure their positions as: ₹2 lakh in Stock A, ₹2 lakh in Stock B, ₹2 lakh in Stock C, ₹2 lakh in Stock D, and ₹2 lakh in Stock E. In this example, each position represents 20% of the portfolio. Even if one investment underperforms, the remaining positions still contribute to overall portfolio performance.</p>
          <p>Alternatively, some investors prefer a core-and-satellite approach, where larger positions (80–90% of the portfolio) are allocated to high-conviction investments while smaller allocations (10–20%) are made to exploratory opportunities.</p>
          <hr className="chapter-rule" />
          <h3>Balancing Conviction and Risk</h3>
          <p>Position sizing is ultimately a balance between conviction and risk management. High-conviction ideas may justify larger allocations, but excessive concentration can increase portfolio volatility. On the other hand, allocating too little capital to strong investments may limit the impact of successful ideas. A disciplined approach to position sizing helps maintain a balance between these two forces.</p>
          <p>Successful long-term investors rarely rely on a single investment to build wealth. Instead, they construct portfolios where multiple positions contribute to overall growth over time. When combined with thoughtful asset allocation and diversification, disciplined position sizing becomes an important component of sustainable long-term portfolio management.</p>
          <blockquote className="pull-quote">You can find the right investment and still lose money by sizing it wrong. Position sizing is as important as stock selection — it determines how much each idea can help or hurt you.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 10
    // ==============================
    {
      title: "Chapter 10: Portfolio Rebalancing — Maintaining Your Financial Structure",
      content: (
        <>
          <p>Over time, investment portfolios naturally change as different assets grow at different rates. A portfolio that was originally well balanced can gradually drift away from its intended allocation. Rebalancing is the process of periodically adjusting your portfolio to restore your desired asset allocation. Without rebalancing, a portfolio may slowly become overexposed to one asset class, increasing risk beyond what the investor originally intended.</p>
          <hr className="chapter-rule" />
          <h3>An Example of Drift</h3>
          <p>Suppose an investor initially allocates their portfolio as 60% equities, 30% debt instruments, and 10% gold. If equity markets perform very strongly over several years, the portfolio might shift to 75% equities, 20% debt, and 5% gold. While this may appear beneficial during a bull market, the portfolio has now become more vulnerable to market corrections. Rebalancing helps restore the intended balance.</p>
          <hr className="chapter-rule" />
          <h3>Two Approaches to Rebalancing</h3>
          <p><strong>Periodic rebalancing</strong> is the most common approach — investors review and adjust their portfolios at regular intervals such as annually, semi-annually, or once every two to three years. For example, an investor may review their portfolio once a year and restore the original allocation if any asset class has deviated significantly from the target.</p>
          <p><strong>Systematic rebalancing</strong> involves making adjustments when allocations cross predefined thresholds rather than at fixed calendar intervals. For example, an investor may decide to rebalance whenever equity allocation moves more than 5–10% away from the target allocation. This method ensures that rebalancing occurs only when meaningful deviations arise, rather than strictly following a time schedule.</p>
          <hr className="chapter-rule" />
          <h3>Rebalancing as Discipline, Not Trading</h3>
          <p>Rebalancing should not be confused with frequent trading. Its purpose is not to react to short-term market movements but to maintain the structure of a long-term investment strategy. In many ways, rebalancing enforces the discipline of selling high and buying relatively lower — without relying on market timing. Most investors only need to rebalance their portfolios occasionally, ensuring that the portfolio continues to reflect their financial goals, risk tolerance and investment horizon.</p>
          <blockquote className="pull-quote">Rebalancing is one of the most disciplined acts in investing. It forces you to take profits from what has grown and reinvest into what has lagged — exactly the opposite of what emotions tend to push you toward.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 11
    // ==============================
    {
      title: "Chapter 11: Lump Sum vs SIP Investing",
      content: (
        <>
          <p>When it comes to investing, many investors face a common question: Should I invest all my money at once, or should I invest gradually over time? These two approaches are known as lump sum investing and Systematic Investment Plan (SIP) investing. Both methods can be effective, but the appropriate approach often depends on your financial situation, income patterns and comfort with market volatility.</p>
          <hr className="chapter-rule" />
          <h3>Lump Sum Investing</h3>
          <p>Lump sum investing involves deploying a large amount of capital into investments at one time. This approach is commonly used when investors receive a significant amount of money, such as annual bonuses, inheritance, proceeds from the sale of an asset, or accumulated savings. One key advantage is immediate market exposure — if markets rise after the investment is made, the entire capital benefits from the upward movement. Because markets historically tend to rise over long periods, lump sum investing can sometimes result in higher long-term returns when investments are made during favorable market conditions.</p>
          <p>However, lump sum investing also carries timing risk. If markets decline shortly after investing, the portfolio may experience short-term losses. Even though long-term investors may eventually recover these losses, the initial volatility can create emotional discomfort — potentially leading to second-guessing or premature decisions.</p>
          <hr className="chapter-rule" />
          <h3>SIP Investing</h3>
          <p>A Systematic Investment Plan (SIP) involves investing a fixed amount of money at regular intervals, typically monthly. SIPs benefit from <strong>rupee-cost averaging</strong> — when markets decline, the same investment amount buys more units; when markets rise, fewer units are purchased. Over time, this helps average out the purchase price. SIPs also reduce the pressure of market timing and develop a consistent habit of saving and investing.</p>
          <hr className="chapter-rule" />
          <h3>Combining Both Approaches</h3>
          <p>In practice, many investors combine both strategies. Regular monthly investments may be made through SIPs, while additional lump sum investments may be deployed during market corrections or when surplus capital becomes available. This blended approach allows investors to benefit from both consistent investing discipline and opportunistic capital deployment.</p>
          <p>The choice between lump sum and SIP investing is not about finding a universally superior method. Instead, it is about selecting an approach that aligns with your financial circumstances, income patterns and psychological comfort with market fluctuations. Ultimately, the most important factor is not the exact timing of each investment, but maintaining consistency and remaining invested over the long term.</p>
          <blockquote className="pull-quote">The best investment strategy is the one you can actually stick to. Consistency over many years matters far more than the perfect timing of any single investment.</blockquote>
        </>
      ),
    },

    // ==============================
    // CHAPTER 12
    // ==============================
    {
      title: "Chapter 12: Behavioral Finance — The Psychology of Investing",
      content: (
        <>
          <p>One of the most underestimated challenges in investing is human behavior. Markets are influenced not only by economic data and company performance, but also by the collective emotions and decisions of millions of investors. Even individuals who understand financial concepts well can make poor investment decisions when emotions take over. Behavioral finance studies how psychological biases influence financial decision-making — recognizing these biases can help investors remain disciplined and avoid common mistakes that damage long-term returns.</p>
          <hr className="chapter-rule" />
          <h3>Key Behavioral Biases</h3>
          <p><strong>Fear and Panic:</strong> During periods of market decline, fear can cause investors to sell their investments simply to avoid further losses. Unfortunately, this often results in locking in losses during market downturns, just before markets eventually recover. History shows that markets move in cycles and temporary declines are a normal part of long-term investing.</p>
          <p><strong>Greed and Overconfidence:</strong> During strong bull markets, investors may feel overconfident in their abilities. This can lead to excessive risk-taking, speculative investments or the belief that markets will continue rising indefinitely. Greed can cause investors to abandon disciplined strategies and chase assets that have already experienced large price increases.</p>
          <p><strong>Recency Bias:</strong> Recency bias occurs when investors place too much importance on recent market performance. If a particular sector has performed strongly over the past few months, investors may assume that the trend will continue indefinitely. Similarly, after a market decline, investors may believe markets will continue falling. This bias leads to decisions based on short-term trends rather than long-term fundamentals.</p>
          <p><strong>Loss Aversion:</strong> Loss aversion refers to the psychological tendency to feel losses more intensely than gains. For many people, the pain of losing ₹10,000 feels stronger than the satisfaction of gaining the same amount. This emotional imbalance can lead investors to hold losing investments too long in the hope of recovering losses, or avoid necessary investment decisions due to fear of potential losses.</p>
          <hr className="chapter-rule" />
          <h3>Building a Personal Wealth System</h3>
          <p>Understanding these biases does not eliminate them entirely, but it allows investors to recognize emotional reactions before acting on them. Disciplined investors often rely on structured processes such as predetermined asset allocation, systematic investing, long-term investment horizons and diversified portfolios. These frameworks help reduce the influence of emotional decision-making during volatile market conditions.</p>
          <p>Successful investing is not only about identifying good stocks or selecting the right funds. It is about creating a complete financial system that supports long-term wealth creation. A well-structured financial system typically includes: stable and positive cash flow, an adequate emergency fund, diversified investments across asset classes, disciplined capital allocation and emotional control during market cycles.</p>
          <p>When these elements work together, investors can remain focused on their long-term financial goals rather than reacting to short-term market fluctuations. Over time, it is this combination of structure, discipline and patience that allows investors to benefit fully from the power of compounding.</p>
          <blockquote className="pull-quote">Wealth is built not by predicting markets but by building a system — and then having the discipline to trust that system through every market cycle.</blockquote>
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
  const moduleId = "portfolio-construction";

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
