import "../guide-article.css";
import "../../landing.css";
import SketchIcon from "@/app/components/SketchIcon";

export function Preview() {
  return (
    <>
      <div className="topbar">
        <span className="brand">Markets &amp; Macro</span>
        <span className="tag">India &amp; Global Finance &nbsp;|&nbsp; May 16–22, 2026</span>
      </div>

      <div className="hero-badge">Weekly Briefing — What Mattered, What It Means, What Comes Next</div>

      <h1>Indian Markets: A Week That<br />Went Nowhere,<br /><span>For Good Reason</span></h1>

      <div className="hero-sub">
        The Nifty 50 closed the week at 23,719.30 and Sensex at 75,415.35 — a gain of about 0.32% and 0.24% respectively from last Friday&apos;s close of 23,643.50 and 75,237.99. On paper, a positive week. In practice, markets spent five sessions trapped inside a 600-point Nifty band, unable to break above 23,850 on any sustained move, buffeted daily by opposing signals from oil, diplomacy, and earnings.
      </div>

      <div className="stat-row">
        <div className="stat-cell">
          <span className="big">23,719</span>
          <span className="lbl">Nifty 50 close<br />+0.32% on the week</span>
        </div>
        <div className="stat-cell">
          <span className="big">41.83</span>
          <span className="lbl">Weekly RSI · Nifty<br />inside cautious zone</span>
        </div>
        <div className="stat-cell">
          <span className="big">−7.13%</span>
          <span className="lbl">Sensex year-on-year<br />as of week close</span>
        </div>
      </div>

      <p>Zoom out and the picture is starker: the Sensex is down 4.25% over the past month and down 7.13% year-on-year. Motilal Oswal noted the Sensex was marginally down on a weekly VWAP basis, trading near the 75,300 level that has acted as a centre of gravity. The weekly RSI on Nifty stood at 41.83 — well inside the cautious zone, reflecting weakening momentum and an absence of either strong buying conviction or panic selling.</p>

      <p>The FII/DII dynamic tells the underlying story. FIIs sold ₹1,891 crore on May 21, while DIIs countered with ₹2,492 crore in buying. Month-to-date through May 20, FIIs have net-sold ₹25,896 crore from Indian equities. DIIs have absorbed all of it and more, buying ₹48,369 crore in the same period. The domestic institutional wall — built on SIP inflows, insurance money, and pension funds — is the singular reason this market hasn&apos;t corrected 10–12% in a world where crude is above $100 and the Fed is contemplating rate hikes. It is holding the floor. It is not providing the fuel for a breakout.</p>

      <div className="callout">
        <span className="c-label">What the Market Is Actually Pricing</span>
        <p>The index level of ~23,700 reflects a market that believes a US-Iran deal eventually happens, Rubio&apos;s India visit produces something real on trade, and the RBI doesn&apos;t hike. Remove any one of those assumptions and you&apos;re looking at 22,500. Add in all three with conviction and 25,000–25,500 is back on the table. The range reflects genuine uncertainty, not laziness.</p>
      </div>

      {/* SECTION 2 */}
      <div className="section-tag">02 &nbsp; The Story That Broke Everything</div>
      <h2>OpenAI, Anthropic, and Indian IT</h2>

      <p>The preceding week&apos;s damage — which the current week&apos;s consolidation was trying to digest — had a very specific cause. On May 12, OpenAI announced a new $4 billion enterprise deployment company, backed by TPG, Brookfield, Bain, and Advent, specifically designed to help organisations build and deploy AI directly for everyday work — directly overlapping with services offered by India&apos;s IT industry. Indian IT stocks fell up to 4% the same day. TCS touched its 52-week low of ₹2,283 — down 28.63% year-to-date. Infosys fell to its lowest level since December 2020.</p>

      <p>This wasn&apos;t isolated. Anthropic simultaneously launched a $1.5 billion joint venture with Blackstone, Hellman &amp; Friedman, and Goldman Sachs to deploy its AI model directly inside corporations. Both AI companies are now actively delivering business outcomes, not just enabling them — a direct assault on the outsourcing model that built India&apos;s $283 billion IT industry.</p>

      <div className="principle-list">
        <div className="principle-item">
          <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}><SketchIcon name="warn" size={24} /></div>
          <div className="p-content">
            <h4>The Core Fear: Value-Chain Displacement</h4>
            <p>AI-native ecosystems could capture the higher-margin strategic transformation work, pushing traditional outsourcing firms toward lower-margin execution roles. The IT industry carries significant weight in both Nifty 50 and Nifty IT indices, and Indian IT firms derive a substantial share of revenues from US and European enterprises.</p>
          </div>
          <span className="p-pill pill-red">Structural</span>
        </div>
        <div className="principle-item">
          <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="chart-down" size={24} /></div>
          <div className="p-content">
            <h4>TCS Is Down 36% Over the Past Year</h4>
            <p>This week, IT stocks bounced on relief buying at multi-year lows — which explains the partial positive on Nifty — but the structural question hasn&apos;t gone away. Infosys is trading at levels not seen since 2020. These are not valuation discounts waiting to be corrected; they represent a genuine market reassessment of the long-term earnings power of India&apos;s largest export industry.</p>
          </div>
          <span className="p-pill pill-gold">Watch</span>
        </div>
      </div>

      <div className="callout">
        <span className="c-label">Impact</span>
        <p>IT is roughly 13–14% of the Nifty 50 by weight. Until TCS and Infosys stabilise and show — in actual reported numbers — that AI is additive rather than substitutive to their revenues, the index has a structural ceiling. That proof is four to six quarters away at minimum.</p>
      </div>

      {/* SECTION 3 */}
      <div className="section-tag">03 &nbsp; The Most Important Variable</div>
      <h2>Crude, Iran, and the Strait</h2>

      <p>Brent crude ended the week around $104–105 per barrel — down from the ~$107 area of the prior week but still deeply elevated. The week&apos;s oil price movements tracked diplomatic signals almost tick-for-tick: both Brent and WTI fell roughly 5.6% mid-week after President Trump said US-Iran talks were &ldquo;in the final stages,&rdquo; before recovering as Iran&apos;s position on uranium storage complicated the outlook.</p>

      <p>The supply shock context is not going away quickly. The conflict has removed approximately 14 million barrels per day from global markets — about 14% of global supply — including exports from Saudi Arabia, Iraq, the UAE, and Kuwait. ADNOC&apos;s CEO stated that full oil flows through the Strait of Hormuz will not return before Q1 or Q2 of 2027, even if a peace deal was reached immediately.</p>

      <p>A complication emerged Friday: reports surfaced that Iran has been in discussions with Oman about establishing a fee-collection system for vessels transiting the Strait — even while peace talks continue. Iran also clarified it intends to keep its enriched uranium stockpile within the country, directly complicating the central US demand. Tehran appears to be exploring how to institutionalise economic leverage over the Strait rather than relinquish it.</p>

      <div className="formula-box">
        <span className="f-label">India&apos;s Crude Exposure</span>
        <span className="formula">India&apos;s crude oil imports constitute 89.4% of its total crude supply</span>
        <span className="sub">Every $10/barrel sustained increase in Brent adds ~$12–15 billion to the annual import bill, widens the current account deficit by ~0.4% of GDP, and feeds directly into transport costs, food prices, and manufacturing input costs.</span>
      </div>

      <p>Rapidan Energy Group warned this week that a prolonged Strait closure through August risks an economic downturn approaching the scale of the 2008 Great Recession. That is the tail risk. The central case is $90–110 crude through end-2026 — painful but manageable, as long as the rupee holds.</p>

      <p>The Q4 earnings season delivered an on-the-ground confirmation of this pressure. Maruti Suzuki announced a price hike of up to ₹30,000 across its entire vehicle range from June 2026, explicitly citing persistent inflationary pressures and an adverse cost environment. When India&apos;s largest carmaker raises prices across every model simultaneously, it is telling you that input cost inflation has become too large to absorb internally.</p>

      <div className="callout">
        <span className="c-label">Impact</span>
        <p>A confirmed US-Iran peace deal that reopens the Strait and brings Brent back toward $75–80 is the single largest positive catalyst available to Indian equities right now — larger than any domestic policy move. It would compress India&apos;s import bill, stabilise the rupee, and give the RBI room to resume rate cuts. The Sensex could rally 2,500–3,500 points on such an outcome. The inverse puts a 7–10% Nifty correction firmly in play.</p>
      </div>

      {/* SECTION 4 */}
      <div className="section-tag">04 &nbsp; High Stakes Diplomacy</div>
      <h2>Rubio&apos;s India Visit: Starting Today</h2>

      <p>US Secretary of State Marco Rubio began a four-day visit to India today — covering Kolkata, Agra, Jaipur, and New Delhi — with discussions focused on energy security, trade, and defence cooperation. A Quad Foreign Ministers&apos; meeting, bringing together the US, India, Japan, and Australia, is expected on May 26.</p>

      <p>The trade dimension is the one with direct market consequences. US Ambassador Sergio Gor said the bilateral trade agreement would be finalised &ldquo;in the coming weeks and months.&rdquo; On February 2, 2026, Trump and Modi announced a deal reducing US reciprocal tariffs on Indian goods to 18%. What remains to be finalised is a comprehensive Bilateral Trade Agreement covering full tariff schedules, market access, and supply chain integration across pharma, gems and diamonds, textiles, machinery, and defence.</p>

      <p>There is also a political subtext worth noting. Relations between Washington and New Delhi became complicated after Modi was seen as downplaying Trump&apos;s role in mediating the India-Pakistan conflict. Rubio&apos;s visit is partly a reset of that relationship dynamic.</p>

      <div className="steps">
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">1</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>BTA Timeline Announcement <span className="step-badge">Pharma · Chemicals · Textiles</span></h4>
            <p>A timeline or framework announcement for concluding the full BTA would be immediately positive for pharma exporters, specialty chemicals, textile manufacturers, and defence companies.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">2</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Defence Procurement Deals or Letters of Intent <span className="step-badge">HAL · BEL · Bharat Forge</span></h4>
            <p>Defence procurement deals or letters of intent would boost HAL, BEL, Bharat Forge, and Hindustan Aeronautics.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">3</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>A Strong Quad Joint Statement</h4>
            <p>A strong Quad joint statement on Indo-Pacific security reinforces India&apos;s strategic premium in global investor eyes. If the visit produces only communiqués and photo opportunities, markets will treat it as a sell-the-news event.</p>
          </div>
        </div>
      </div>
    </>
  );
}
