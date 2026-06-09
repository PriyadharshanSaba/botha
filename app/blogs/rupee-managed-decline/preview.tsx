import "./article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      <div className="masthead">
          <span className="masthead-brand">Economic Analysis</span>
          <span className="masthead-date">April 2026</span>
        </div>

        <div className="kicker">Currency &nbsp;·&nbsp; Macroeconomics &nbsp;·&nbsp; India</div>

        <h1>The Rupee&apos;s <em>Managed</em> Decline. And Why India Should Be Worried</h1>

        <div className="deck">
          India is growing at 6.5% a year. Its stock market is among the largest in the world. And yet, its currency has lost nearly 9% of its value in twelve months. This paradox deserves an honest answer, not reassurance.
        </div>

        <div className="byline-bar">
          <span>Based on RBI, IMF, HDFC AMC &amp; EBC Financial Group data</span>
          <span>·</span>
          <span>For informed general readership</span>
          <span>·</span>
          <span>April 21, 2026</span>
        </div>

        <div className="stat-banner">
          <div className="stat-cell">
            <span className="big">₹93</span>
            <span className="lbl">Per US dollar<br />April 2026</span>
          </div>
          <div className="stat-cell">
            <span className="big">~9%</span>
            <span className="lbl">Rupee lost in<br />12 months</span>
          </div>
          <div className="stat-cell">
            <span className="big">6th</span>
            <span className="lbl">India&apos;s GDP rank<br />fell from 5th in 2024</span>
          </div>
        </div>

        <p>
          In early 2025, one US dollar cost about ₹84. Today it costs ₹93. In rupee terms, that is a ₹9 difference, enough to raise the cost of your fuel, your imported phone, your child&apos;s university abroad, and the fertiliser your farmer cousin buys every season.
        </p>

        <p>
          But here is what&apos;s really striking: <strong>this is happening while India is the world&apos;s fastest-growing major economy.</strong> GDP is expanding. Tax revenues are healthy. The stock market, by market capitalisation, is among the world&apos;s largest. And yet the currency is falling. That disconnect is the real story, and it demands a harder look than most coverage has offered.
        </p>

        {/* SECTION 1 */}
        <div className="section-flag">
          <span className="num">01</span>
          <span className="label">The paradox</span>
        </div>
        <h2>How is a booming economy losing currency value?</h2>

        <p>
          The short answer is that <strong>currency markets don&apos;t price GDP. They price cash flow.</strong> Specifically, they price the balance between the dollars flowing into a country and the dollars flowing out. India&apos;s problem is that these flows are badly misaligned.
        </p>

        <div className="callout">
          <span className="tag">Plain English</span>
          <p>Think of India as a household. It earns a good salary (GDP growth), but its credit card bill (import payments) keeps rising, and several family members who used to invest in the home (foreign investors) are quietly withdrawing their deposits. The household looks prosperous on paper. But its wallet is getting lighter.</p>
        </div>

        <p>
          Currency markets see the wallet, not the resume. India&apos;s net capital account inflows (FDI, FPI, external borrowings, and banking flows combined) hit a record $107.9 billion in 2007–08. By the first half of 2025–26, that had fallen to just $8.6 billion, against a current account deficit of $15.0 billion for the same period, meaning India was no longer generating enough foreign currency to cover its import gap. Net FDI, which strips out Indian companies investing abroad and counts only capital that actually arrives to build businesses, fell to just $0.4 billion in 2024–25 per the RBI Annual Report, down from $44 billion in 2020–21. Meanwhile, foreign portfolio investors had sold Indian equities worth approximately ₹1.8 lakh crore in calendar year 2026 through mid-April, per NSDL data, with selling continuing beyond that point.
        </p>

        <p>
          The result: more dollars leaving India than coming in. And when that happens, the rupee weakens, regardless of how fast the economy is growing.
        </p>
    </>
  );
}
