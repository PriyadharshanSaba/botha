"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import "../modules.css";
import "../module-detail.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

// ─────────────────────────────────────────────────────────────────────────────
// Shared table styles (reusable across chapters)
// ─────────────────────────────────────────────────────────────────────────────
const tbl: React.CSSProperties = { width: "100%", borderCollapse: "collapse", margin: "16px 0", fontSize: "0.95em" };
const th: React.CSSProperties = { background: "#c9a84c", color: "#fdfcf9", padding: "10px 12px", textAlign: "left" };
const td: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid rgba(0,0,0,0.08)" };
const tdAlt: React.CSSProperties = { ...td, background: "rgba(201,168,76,0.06)" };

// ─────────────────────────────────────────────────────────────────────────────
// Placeholder chapter components
// Replace each with real bilingual content as chapters are written.
// ─────────────────────────────────────────────────────────────────────────────
function ChapterOne({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 1 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>
        Imagine your favourite coffee brand, say, <strong>Tata Coffee</strong>, wants to open
        500 new outlets across India. That kind of expansion needs money, to buy land, build
        stores, hire staff, and market the brand. Instead of borrowing a huge amount from banks,
        the company can raise money by offering <strong>ownership stakes</strong>, called{" "}
        <strong>shares</strong>, to people like you and me.
      </p>

      <p>
        When you buy a share, you&apos;re not just investing your money, you&apos;re becoming a{" "}
        <em>co-owner</em> of that company. If the business does well, earns profits, and grows
        in value, your share becomes more valuable too. You might even receive a{" "}
        <strong>dividend</strong>, which is a part of the company&apos;s profits distributed to
        shareholders.
      </p>

      <p>
        That&apos;s the essence of the <strong>stock market</strong>, a large, organized
        marketplace where companies raise funds and investors participate in their success.
      </p>

      <h3>Where All Listed Companies Live</h3>

      <p>
        Every company whose shares are available for the public to buy and sell is called a{" "}
        <strong>listed company</strong>. To get listed, a company must go through a strict
        approval process with{" "}
        <strong>SEBI (Securities and Exchange Board of India)</strong> and the stock
        exchanges — mainly <strong>NSE (National Stock Exchange)</strong> and{" "}
        <strong>BSE (Bombay Stock Exchange)</strong>.
      </p>

      <p>When a company is &quot;listed,&quot; it means:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Its shares are available to be traded publicly on the exchange.
        </li>
        <li>
          It must follow transparency and disclosure rules — sharing financial results,
          management updates, and business plans regularly.
        </li>
        <li>
          It becomes accountable to its shareholders — you, me, and millions of other
          investors.
        </li>
      </ul>

      <p>
        Being listed is a badge of trust and credibility. It signals that a company is willing
        to open its books to public scrutiny and share its journey with investors.
      </p>

      <p>
        Today, <strong>thousands of companies</strong>, from household names like Reliance,
        Infosys, and HDFC Bank to emerging startups like Nykaa and Zomato, are listed on
        India&apos;s stock exchanges.
      </p>

      <h3>A Marketplace Built on Belief</h3>

      <p>
        Unlike a regular marketplace where you buy goods, in the stock market, you&apos;re
        buying <strong>potential</strong>, the future of businesses you believe in. You
        don&apos;t walk away with a product; you walk away with ownership.
      </p>

      <p>
        And because these shares are <strong>traded daily</strong>, their prices move
        constantly, driven by demand, supply, company performance, global events, and even
        investor sentiment.
      </p>

      <p>
        The stock market, in that sense, is a living, breathing reflection of the economy.
        When companies thrive, jobs grow, innovation flourishes, the investors prosper. When
        they struggle, the ripple is felt across the market.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image5.png"
          alt="A character standing in front of a stock exchange building"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterTwo({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 2 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>
        The stock market exists because ambition always needs fuel and that fuel is capital.
        Before stock markets, only kings, banks, or wealthy merchants could fund businesses.
      </p>

      <p>
        When the <strong>Dutch East India Company</strong> issued the first shares in the
        1600s, it changed everything. Suddenly, ordinary citizens could invest in global trade.
        That simple innovation gave rise to the global economy we know today.
      </p>

      <p>
        In India, companies like Infosys, TCS, and Reliance have used the market to raise
        funds and expand, creating jobs, innovation, and wealth in the process.
      </p>

      <p>
        So, every trade isn&apos;t just a number on a screen, it&apos;s investment that drives
        growth across the country.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image2.png"
          alt="A character holding a share certificate"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterThree({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 3 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>
        When you tap <strong>&apos;Buy&apos;</strong> on your trading app, it may look like
        magic but behind that instant click lies an intricate web of institutions, technology,
        and trust. Each player in this system has a unique role, and together, they make sure
        that every trade, no matter how small, is executed safely, accurately, and fairly.
      </p>

      <p>Let&apos;s walk through the process and the people behind it</p>

      {/* ── 1. Investors ── */}
      <h3>1. Investors — The Heartbeat of the Market</h3>

      <p>
        Investors are the <em>life force</em> of the stock market. They can be:
      </p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Retail Investors:</strong> Everyday people investing through apps like
          Zerodha or Groww.
        </li>
        <li>
          <strong>Institutional Investors:</strong> Big entities like mutual funds, insurance
          companies, or pension funds.
        </li>
        <li>
          <strong>Foreign Institutional Investors (FIIs):</strong> Global funds investing in
          Indian markets, often influencing trends and liquidity.
        </li>
      </ul>

      <p>
        Every rupee invested fuels the market, and collectively, investors decide which
        businesses is valuable and which is not.
      </p>

      {/* ── 2. Brokers ── */}
      <h3>2. Brokers — The Bridge Between You and the Market</h3>

      <p>
        You can&apos;t directly trade on the stock exchange, you need a{" "}
        <strong>registered broker</strong> to place your order. Platforms like{" "}
        <strong>Zerodha, Upstox, Angel One, Groww</strong>, and{" "}
        <strong>ICICI Direct</strong> act as intermediaries.
      </p>

      <p>
        When you click <strong>&apos;Buy&apos;</strong>, your order is routed to your
        broker&apos;s system → sent to the exchange in real time → matched with a
        seller&apos;s order.
      </p>

      <p>Brokers also:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Maintain your <strong>trading account</strong> (for buying/selling activity).
        </li>
        <li>Provide analytics, charts, and reports.</li>
        <li>
          Ensure <strong>KYC and regulatory compliance</strong> under SEBI guidelines.
        </li>
      </ul>

      <p>
        In short, your broker is the access point to the market&apos;s entire ecosystem.
      </p>

      {/* ── 3. Stock Exchanges ── */}
      <h3>3. Stock Exchanges — The Marketplace</h3>

      <p>
        The <strong>National Stock Exchange (NSE)</strong> and{" "}
        <strong>Bombay Stock Exchange (BSE)</strong> are where trades actually happen. They
        don&apos;t own the companies, they simply provide a platform for buying and selling
        shares securely and transparently.
      </p>

      <p>Here&apos;s what happens on the exchange:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Your <strong>buy order</strong> is matched with someone&apos;s{" "}
          <strong>sell order</strong> (based on price and time priority).
        </li>
        <li>Once matched, a trade confirmation is generated instantly.</li>
      </ul>

      <p>
        Think of it as the market&apos;s <em>matchmaker</em>, connecting buyers and sellers
        across India in milliseconds.
      </p>

      {/* ── 4. Clearing Corporations ── */}
      <h3>4. Clearing Corporations — The Market&apos;s Guarantee</h3>

      <p>
        Once a trade is matched, it moves to the <strong>clearing stage</strong>, handled by{" "}
        <strong>clearing corporations</strong> like{" "}
        <strong>NCL (NSE Clearing Ltd.)</strong> or{" "}
        <strong>Indian Clearing Corporation Ltd. (ICCL)</strong>.
      </p>

      <p>Their role is to:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Verify both parties, the buyer has enough money and the seller actually owns the
          shares.
        </li>
        <li>
          Temporarily &quot;lock&quot; the shares and funds until the trade is settled.
        </li>
        <li>Guarantee completion, even if one party defaults.</li>
      </ul>

      <p>
        This ensures that no one loses money due to counterparty risk. It&apos;s the invisible
        insurance system that makes investors trust the market.
      </p>

      {/* ── 5. Depositories ── */}
      <h3>5. Depositories — The Digital Vaults</h3>

      <p>
        Gone are the days of paper share certificates. Today, all your holdings are stored
        digitally with <strong>NSDL (National Securities Depository Ltd.)</strong> or{" "}
        <strong>CDSL (Central Depository Services Ltd.)</strong>.
      </p>

      <p>Here&apos;s how it works:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          When you buy shares, they&apos;re credited to your{" "}
          <strong>Demat account</strong> (like a digital locker).
        </li>
        <li>When you sell, they&apos;re debited automatically.</li>
        <li>
          Your <strong>broker</strong> is linked to one of these depositories through a{" "}
          <strong>Depository Participant (DP)</strong>, typically the same app you trade on.
        </li>
      </ul>

      <p>
        Your Demat account proves your ownership, it&apos;s as important as your bank account
        in the world of investing.
      </p>

      {/* ── 6. SEBI ── */}
      <h3>6. SEBI — The Watchdog of the Market</h3>

      <p>
        The <strong>Securities and Exchange Board of India (SEBI)</strong> is the regulator
        that ensures markets run with fairness, transparency, and accountability.
      </p>

      <p>It:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Sets the rules for brokers, companies, and investors.</li>
        <li>Monitors insider trading and fraud.</li>
        <li>Approves IPOs and corporate actions.</li>
        <li>
          Ensures timely disclosure of financial results by listed companies.
        </li>
      </ul>

      <p>
        SEBI&apos;s presence gives confidence to investors that the market operates on equal
        footing for everyone, from a college student investing ₹500 to a global fund moving
        crores.
      </p>

      {/* ── Putting It All Together ── */}
      <h3>Putting It All Together — The Journey of a Trade</h3>

      <p>
        Let&apos;s say you decide to buy <strong>10 shares of Infosys</strong> at ₹1,500
        each. Here&apos;s what happens, step by step:
      </p>

      <ul className="pl-6 list-decimal space-y-1">
        <li>
          <strong>You (the investor)</strong> place the order through{" "}
          <strong>Groww (your broker)</strong>.
        </li>
        <li>
          Groww forwards your order to the <strong>NSE (the exchange)</strong>.
        </li>
        <li>
          The NSE&apos;s system finds a seller offering 10 shares at ₹1,500 — a match!
        </li>
        <li>
          The trade is confirmed instantly and sent to the{" "}
          <strong>clearing corporation (NCL)</strong>.
        </li>
        <li>
          NCL checks:
          <ul className="pl-6 list-disc space-y-1 mt-1">
            <li>You have ₹15,000 in your trading account.</li>
            <li>
              The seller has 10 Infosys shares in their Demat account.
            </li>
          </ul>
        </li>
        <li>
          Once verified, the clearing corporation transfers:
          <ul className="pl-6 list-disc space-y-1 mt-1">
            <li>₹15,000 to the seller&apos;s broker account.</li>
            <li>
              10 shares from the seller&apos;s Demat to your{" "}
              <strong>Demat account</strong> (held with <strong>CDSL/NSDL</strong>).
            </li>
          </ul>
        </li>
        <li>
          Within one business day (T+1), the shares appear in your holdings.
        </li>
      </ul>

      <p>
        Throughout this, <strong>SEBI</strong> oversees the process, ensuring no foul play,
        delays, or manipulation.
      </p>

      <p>
        In less than a second, your order travelled through half a dozen institutions,
        seamlessly, securely, and silently.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image3.png"
          alt="Two characters exchanging shares and money through a broker"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterFour({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 4 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>
        An <strong>IPO (Initial Public Offering)</strong> is when a private company becomes
        public, inviting people to invest for the first time. Think of companies like{" "}
        <strong>Zomato, Nykaa, and LIC</strong>, their IPOs created buzz across India.
      </p>

      <p>
        For investors, it&apos;s a chance to be part of a company&apos;s growth story early
        on. For the company, it&apos;s access to funds to expand operations, repay debt, or
        innovate.
      </p>

      <p>
        An <strong>FPO (Follow-on Public Offering)</strong> happens when a listed company
        issues more shares, like a &quot;second round&quot; of funding.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image7.png"
          alt="Two characters holding IPO and FPO signs with stacks of coins"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterFive({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 5 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>
        <strong><em>The heartbeat that tells you how healthy the market really is.</em></strong>
      </p>

      <p>
        If the stock market were a cricket match, <strong>indices</strong> would be the{" "}
        <strong>scoreboard</strong>. They don&apos;t tell you everything that&apos;s happening
        in every over but they give you a quick sense of which way the game is going.
      </p>

      <p>
        In the same way, a <strong>stock market index</strong> measures how a specific group of
        companies is performing, helping investors understand the overall mood, trend, and
        direction of the market.
      </p>

      {/* ── Understanding What an Index Really Is ── */}
      <h3>Understanding What an Index Really Is</h3>

      <p>
        An <strong>index</strong> is simply a <strong>basket of selected companies</strong>{" "}
        that represent the broader market or a particular sector. When you hear that the{" "}
        <strong>Sensex</strong> or <strong>Nifty 50</strong> has moved up or down, it means the
        prices of the companies in that basket have, on average, risen or fallen.
      </p>

      <p>Each index is built to represent a specific slice of the economy:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Nifty 50:</strong> 50 of the largest and most liquid companies listed on the
          NSE.
        </li>
        <li>
          <strong>Sensex:</strong> 30 leading companies listed on the BSE. Together, these two
          are like the twin thermometers of India&apos;s financial climate.
        </li>
      </ul>

      {/* ── A Closer Look at the Big Two ── */}
      <h3>A Closer Look at the Big Two</h3>

      <p><strong>Sensex (Sensitive Index)</strong></p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Launched in 1986 by the Bombay Stock Exchange.</li>
        <li>Tracks 30 of the biggest and most established companies in India.</li>
        <li>
          Includes firms like Reliance Industries, HDFC Bank, Infosys, TCS, and ICICI Bank.
        </li>
      </ul>
      <p>
        Because these companies come from different sectors — IT, banking, energy,
        manufacturing, FMCG, the Sensex acts as a{" "}
        <strong>mini snapshot of India&apos;s corporate health</strong>.
      </p>

      <p><strong>Nifty 50 (National Fifty)</strong></p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Introduced by the National Stock Exchange in 1996.</li>
        <li>Includes 50 large-cap companies across 13 sectors of the economy.</li>
        <li>
          Represents over <strong>60% of the total market capitalization</strong> of all
          NSE-listed companies.
        </li>
      </ul>
      <p>
        When people say, &quot;The market is up today,&quot; they&apos;re usually referring to
        the <strong>Nifty</strong>, it&apos;s the most followed barometer of Indian investor
        sentiment.
      </p>

      {/* ── How Indices Reflect the Economy ── */}
      <h3>How Indices Reflect the Economy</h3>

      <p>
        Each sector plays its own role in the index, IT reflects global demand for technology,
        banks represent credit and growth, and consumer companies mirror spending power. When
        the Nifty or Sensex rises, it signals optimism, companies are performing well, profits
        are growing, and investors are confident.
      </p>

      <p>
        When they fall, it suggests caution, maybe due to global slowdowns, inflation, policy
        changes, or reduced spending.
      </p>

      <p>
        In that sense, indices are <strong>economic mood boards</strong>, capturing everything
        from government policy and global oil prices to consumer demand and foreign investment.
      </p>

      {/* ── Sectoral and Thematic Indices ── */}
      <h3>Sectoral and Thematic Indices</h3>

      <p>
        Beyond the Nifty and Sensex, there are many{" "}
        <strong>sectoral indices</strong> that track specific industries:
      </p>
      <ul className="pl-6 list-disc space-y-1">
        <li><strong>Nifty Bank</strong> – Leading banking and financial companies.</li>
        <li><strong>Nifty IT</strong> – Tech giants like Infosys, TCS, and Wipro.</li>
        <li><strong>Nifty FMCG</strong> – Everyday brands like HUL, Nestl&eacute;, and Dabur.</li>
        <li><strong>Nifty Pharma, Nifty Auto, Nifty Energy</strong>, and more.</li>
      </ul>

      <p>
        These help investors focus on particular sectors they understand or believe in. For
        example, someone optimistic about India&apos;s digital growth might invest in the{" "}
        <strong>Nifty IT index</strong>, while a long-term believer in consumption might prefer{" "}
        <strong>Nifty FMCG</strong>.
      </p>

      {/* ── How Indices Are Calculated ── */}
      <h3>How Indices Are Calculated</h3>

      <p>
        Each company in an index doesn&apos;t carry equal weight. The impact of a
        company&apos;s price change on the index depends on its{" "}
        <strong>market capitalization</strong>, the total value of all its shares. So, a 1%
        move in Reliance (a large-cap stock) can affect the index much more than a 1% move in
        a smaller company.
      </p>

      <p>In short:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Big companies move the index more, small ones just follow along.</li>
      </ul>

      {/* ── Why Indices Matter to You ── */}
      <h3>Why Indices Matter to You</h3>

      <p>
        Indices are not just indicators, they&apos;re also{" "}
        <strong>benchmarks and tools</strong>:
      </p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Benchmarking Performance:</strong> Mutual funds and portfolio managers
          compare their returns against indices like Nifty 50 to judge performance.
        </li>
        <li>
          <strong>Index Funds &amp; ETFs:</strong> These allow you to invest directly in the
          index itself, owning a slice of all 50 or 30 companies.
        </li>
        <li>
          <strong>Market Sentiment:</strong> The direction of the index helps everyday
          investors decide whether to be cautious, neutral, or optimistic.
        </li>
      </ul>

      <p>
        That&apos;s why every news anchor, trader, and long-term investor watches indices like
        a doctor checks a patient&apos;s pulse, regularly, carefully, and with context.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image6.png"
          alt="A character standing next to a cricket-style scoreboard showing market indices"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterSix({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 6 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>
        When you first step into the world of investing, the jargon can feel overwhelming,
        like a new language everyone else already speaks. But once you get familiar with a few
        key terms, the market starts to make a lot more sense.
      </p>

      {/* ── The Everyday Terms You'll Hear ── */}
      <h3>The Everyday Terms You&apos;ll Hear</h3>

      <p>
        <strong>Stock / Share:</strong> A <em>share</em> represents a single unit of ownership
        in a company. If a company has issued 1 crore shares and you own 1,000 of them, you
        literally own 0.001% of that company.
      </p>

      <p>
        <strong>Equity:</strong> Another word for ownership, it means you&apos;re not lending
        money to a company (like a bondholder), you actually own part of it.
      </p>

      <p>
        <strong>Market Capitalization (Market Cap):</strong> The total market value of a
        company.
      </p>

      <p>Market Cap = Share Price × Total Shares Outstanding</p>

      <p>
        Example: If Reliance&apos;s share price is ₹3,000 and it has 675 crore shares, its
        market cap is around ₹20 lakh crore, making it one of India&apos;s largest companies.
      </p>

      <p>
        <strong>Bull Market:</strong> When optimism runs high and prices keep climbing.
        Investors expect growth, companies perform well, and markets move up, like a bull
        charging ahead.
      </p>

      <p>
        <strong>Bear Market:</strong> When fear or pessimism dominates and stock prices fall
        for an extended period, like a bear swiping its paws downward.
      </p>

      <p>
        <strong>Portfolio:</strong> Your personal collection of investments, stocks, mutual
        funds, bonds, real estate, even gold. A well-diversified portfolio spreads risk across
        assets.
      </p>

      <p>
        <strong>Dividend:</strong> A company&apos;s way of sharing profits with shareholders.
        Example: Infosys often rewards its investors with dividends, a thank-you for believing
        in the company.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image4.png"
          alt="A character standing between a bull and a bear representing market trends"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterSeven({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 7 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>
        Owning a share doesn&apos;t just mean watching prices go up and down, companies often
        take actions that directly impact your holdings. These are called{" "}
        <strong>corporate actions</strong>, and they can change the number of shares you own,
        their value, or your income.
      </p>

      <p>Here are the most common ones</p>

      {/* ── 1. Bonus Issue ── */}
      <h3>1. Bonus Issue</h3>
      <p>
        Free shares issued to existing shareholders, often in a fixed ratio. Example: If a
        company announces a <strong>1:1 bonus</strong>, you get one additional share for every
        share you already own. It&apos;s like getting an extra slice of cake without paying
        more, your total holding increases, but the overall value stays the same.
      </p>

      {/* ── 2. Stock Split ── */}
      <h3>2. Stock Split</h3>
      <p>
        When a company divides its existing shares into smaller units to make them more
        affordable and increase liquidity. Example: A <strong>1:5 split</strong> means each
        ₹100 share becomes 5 shares of ₹20 each. The total value doesn&apos;t change, but
        smaller investors can now buy in more easily.
      </p>

      {/* ── 3. Dividend Payouts ── */}
      <h3>3. Dividend Payouts</h3>
      <p>
        Companies distribute a portion of their profits to shareholders. Example: If TCS
        announces a ₹24 dividend per share, and you own 100 shares, you&apos;ll receive
        ₹2,400 directly in your bank account.
      </p>

      {/* ── 4. Rights Issue ── */}
      <h3>4. Rights Issue</h3>
      <p>
        A company offers existing shareholders the chance to buy more shares, usually at a
        discount, to raise additional funds. Example: A <strong>1:4 rights issue</strong>{" "}
        means you can buy one extra share for every four you already own, often at a lower
        price.
      </p>

      {/* ── 5. Buyback ── */}
      <h3>5. Buyback</h3>
      <p>
        When a company repurchases its own shares from the market. This reduces the number of
        shares in circulation, often boosting earnings per share (EPS) and, in turn, the stock
        price. Example: Infosys and Wipro frequently announce buybacks as a way to reward
        investors.
      </p>

      {/* ── 6. Merger or Demerger ── */}
      <h3>6. Merger or Demerger</h3>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Merger:</strong> Two companies combine to form a new entity (like HDFC and
          HDFC Bank merging).
        </li>
        <li>
          <strong>Demerger:</strong> A company splits a business unit into a separate entity
          (like Reliance spinning off Jio Financial). These actions can reshape your portfolio,
          as you may receive new shares in the merged or separated company.
        </li>
      </ul>
    </>
  );
}

function ChapterEight({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <p className="text-sm text-gray-400 italic">[ ಅಧ್ಯಾಯ 8 — ಕನ್ನಡ ವಿಷಯ ಶೀಘ್ರದಲ್ಲೇ ]</p>
    );
  }

  return (
    <>
      <p>You&apos;ve come a long way.</p>

      <p>
        From understanding what the stock market really is to learning how trades happen, who
        makes them work, and what those confusing terms mean, you&apos;ve built the foundation
        every investor needs.
      </p>

      <p>
        The jargon that once felt like noise now makes sense. You know what it means when
        someone says, &quot;Nifty&apos;s up, Reliance announced a buyback, and SEBI&apos;s
        tightening regulations.&quot; That&apos;s real progress and it&apos;s the kind of
        knowledge that gives you confidence to participate, not just observe.
      </p>

      <p>
        You now understand that the market isn&apos;t some abstract casino, it&apos;s a living
        ecosystem of businesses, investors, and systems working together. And when you invest,
        you&apos;re putting your money behind ideas, people, and companies shaping the
        economy&apos;s future.
      </p>

      <p>
        As we move forward, things will get a bit more practical. The next phase is where we
        start exploring{" "}
        <strong>
          how to read markets, analyze companies, and make smarter investment choices
        </strong>
        , all with a calm head and a clear goal.
      </p>

      <p>
        So take a moment to appreciate getting this far. Most people never look beyond the
        headlines. You just did.
      </p>

      <p>Let&apos;s move on, the real investing journey begins now.</p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image1.png"
          alt="A character looking up at a staircase leading to a trophy, symbolizing the investing journey ahead"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Chapter definitions — bilingual titles + placeholder content components
// Pattern: lang === 'kn' ? <KannadaText /> : <EnglishText />
// ─────────────────────────────────────────────────────────────────────────────

const chapters: {
  title: { en: string; kn: string };
  content: { en: React.ReactNode; kn: React.ReactNode };
}[] = [
  // ── Chapter 1 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 1: What Is the Stock Market?",
      kn: "ಅಧ್ಯಾಯ 1: ಷೇರು ಮಾರುಕಟ್ಟೆ ಎಂದರೇನು?",
    },
    content: {
      en: <ChapterOne lang="en" />,
      kn: <ChapterOne lang="kn" />,
    },
  },

  // ── Chapter 2 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 2: Why Does the Stock Market Exist?",
      kn: "ಅಧ್ಯಾಯ 2: ಷೇರು ಮಾರುಕಟ್ಟೆ ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ?",
    },
    content: {
      en: <ChapterTwo lang="en" />,
      kn: <ChapterTwo lang="kn" />,
    },
  },

  // ── Chapter 3 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 3: The Key Players - Who Makes It All Work",
      kn: "ಅಧ್ಯಾಯ 3: ಪ್ರಮುಖ ಆಟಗಾರರು - ಇದನ್ನು ಯಾರು ನಡೆಸುತ್ತಾರೆ?",
    },
    content: {
      en: <ChapterThree lang="en" />,
      kn: <ChapterThree lang="kn" />,
    },
  },

  // ── Chapter 4 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 4: IPOs & FPOs - How Companies Raise Money",
      kn: "ಅಧ್ಯಾಯ 4: IPO ಮತ್ತು FPO - ಕಂಪನಿಗಳು ಹಣ ಸಂಗ್ರಹಿಸುವ ವಿಧಾನ",
    },
    content: {
      en: <ChapterFour lang="en" />,
      kn: <ChapterFour lang="kn" />,
    },
  },

  // ── Chapter 5 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 5: Indices - The Market's Pulse",
      kn: "ಅಧ್ಯಾಯ 5: ಸೂಚ್ಯಂಕಗಳು - ಮಾರುಕಟ್ಟೆಯ ನಾಡಿಮಿಡಿತ",
    },
    content: {
      en: <ChapterFive lang="en" />,
      kn: <ChapterFive lang="kn" />,
    },
  },

  // ── Chapter 6 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 6: Understanding the Basics - Key Jargon Simplified",
      kn: "ಅಧ್ಯಾಯ 6: ಮೂಲಭೂತ ಪರಿಭಾಷೆ ಸರಳೀಕರಿಸಲಾಗಿದೆ",
    },
    content: {
      en: <ChapterSix lang="en" />,
      kn: <ChapterSix lang="kn" />,
    },
  },

  // ── Chapter 7 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 7: Corporate Actions",
      kn: "ಅಧ್ಯಾಯ 7: ಕಾರ್ಪೊರೇಟ್ ಕ್ರಮಗಳ ಬಗ್ಗೆ ಮಾತನಾಡೋಣ",
    },
    content: {
      en: <ChapterSeven lang="en" />,
      kn: <ChapterSeven lang="kn" />,
    },
  },

  // ── Chapter 8 ──────────────────────────────────────────────────────────────
  {
    title: {
      en: "Chapter 8: Wrapping Up - You Now Speak the Market's Language",
      kn: "ಅಧ್ಯಾಯ 8: ನೀವು ಈಗ ಮಾರುಕಟ್ಟೆಯ ಭಾಷೆ ಮಾತನಾಡುತ್ತೀರಿ",
    },
    content: {
      en: <ChapterEight lang="en" />,
      kn: <ChapterEight lang="kn" />,
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function StockMarketPage() {
  const { lang, t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const shouldScroll = React.useRef(false);

  useEffect(() => {
    if (shouldScroll.current) {
      const h2 = document.querySelector(".chapter h2");
      if (h2) {
        h2.scrollIntoView({ behavior: "instant", block: "start" });
        window.scrollBy(0, -20);
      }
      shouldScroll.current = false;
    }
  }, [chapterIndex, isComplete]);

  function scrollToChapter() {
    shouldScroll.current = true;
  }
  const router = useRouter();
  const moduleId = "stock-market";

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
                onClick={() => { setIsComplete(false); setChapterIndex(i); saveProgress(i); scrollToChapter(); }}
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
              Module 3<br /><em>Complete.</em>
            </div>
            <p className="complete-sub">
              {lang === "kn"
                ? "ನೀವು ಷೇರು ಮಾರುಕಟ್ಟೆ 101 ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ — ಎಲ್ಲ 8 ಅಧ್ಯಾಯಗಳು. ಮಾರುಕಟ್ಟೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಯಾರು ಆಟಗಾರರು, ಮತ್ತು ಪ್ರತಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಅಗತ್ಯವಾದ ಭಾಷೆ ನಿಮಗೆ ಈಗ ತಿಳಿದಿದೆ."
                : "You've finished Stock Market 101 \u2014 all 8 chapters. You now understand how the market works, who the players are, and the language every investor speaks."}
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

  // ── Main render ─────────────────────────────────────────────────────────
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
                onClick={() => { setChapterIndex(dotIdx); saveProgress(dotIdx); scrollToChapter(); }}
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
            scrollToChapter();
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
              scrollToChapter();
            }
          }}
        >
          {chapterIndex === chapters.length - 1 ? "Finish ✓" : `${t("next")} →`}
        </button>
      </div>
    </main>
  );
}
