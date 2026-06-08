"use client";

import "../guide-article.css";
import "../../landing.css";
import Link from "next/link";
import { useState } from "react";
import TermsModal from "../../components/TermsModal";
import PrivacyModal from "../../components/PrivacyModal";
import SketchIcon from "../../components/SketchIcon";

export default function IndiaFinanceMay29Page() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="blog-article-page">
      {/* ── BACK LINK ── */}
      <div className="blog-back-bar">
        <Link href="/blogs" className="blog-back-link">&#8592; All articles</Link>
      </div>

      {/* ── ARTICLE ── */}
      <article className="blog-post-body">

        <div className="topbar">
          <span className="brand">Markets &amp; Macro</span>
          <span className="tag">India &amp; Global Finance &nbsp;|&nbsp; May 23–29, 2026</span>
        </div>

        <div className="hero-badge">Weekly Briefing — What Mattered, What It Means, What Comes Next</div>

        <h1>Hormuz, Rubio,<br />and a Nifty That Gave<br /><span>It All Back</span></h1>

        <div className="hero-sub">
          A week that looked like a breakout and ended as a retreat. Iran&apos;s ceasefire MoU pushed markets to weekly highs mid-week, only for Friday&apos;s selloff to return every point gained. The trade deal advanced, the government sold state assets, and the GDP release most expected today was quietly pushed to June 5. The week of May 23–29 was dense with events, thin on resolution.
        </div>

        {/* STAT ROW */}
        <div className="stat-row">
          <div className="stat-cell">
            <span className="big red">−0.72%</span>
            <span className="lbl">Nifty 50 Week-on-Week<br />23,719 → 23,547.75 at Friday close</span>
          </div>
          <div className="stat-cell">
            <span className="big red">~$95–96</span>
            <span className="lbl">Brent Crude (Weekly Close)<br />Down ~9% from prior week&apos;s $104–105</span>
          </div>
          <div className="stat-cell">
            <span className="big">₹98.48</span>
            <span className="lbl">USD/INR Futures (Wed)<br />Rupee down ~2.3% on the week</span>
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="section-tag">01 &nbsp; The Market Scorecard</div>
        <h2>A Week of Two Halves: Rally to 23,907, Selloff to 23,547</h2>

        <p>The week of May 23–29 ended with the Nifty at <strong>23,547.75</strong> and the Sensex at <strong>74,775.74</strong> — a weekly loss of <strong>−0.72% on Nifty and −0.85% on Sensex</strong> from last Friday&apos;s closes of 23,719.30 and 75,415.35 respectively. That headline number masks an eventful week underneath: markets rallied hard on Monday on Iran deal optimism, gave back gains on Tuesday, surged again mid-week on the ceasefire MoU news, were closed Thursday for Bakri Id, and then sold off on Friday as investors squared positions ahead of a three-day weekend and as Iran-related uncertainty resurfaced. The final close essentially erased the week&apos;s intraday gains, leaving the market back below where it started.</p>

        <table className="week-table">
          <thead>
            <tr>
              <th>Index / Indicator</th>
              <th>May 22 Close</th>
              <th>May 29 Close</th>
              <th>Weekly Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nifty 50</td>
              <td>23,719.30</td>
              <td><strong>23,547.75</strong></td>
              <td className="td-red">−171.55 pts &nbsp;|&nbsp; −0.72%</td>
            </tr>
            <tr>
              <td>Sensex</td>
              <td>75,415.35</td>
              <td><strong>74,775.74</strong></td>
              <td className="td-red">−639.61 pts &nbsp;|&nbsp; −0.85%</td>
            </tr>
            <tr>
              <td>Brent Crude</td>
              <td>~$104–105</td>
              <td>~$95–96</td>
              <td className="td-green">~−9% on week</td>
            </tr>
            <tr>
              <td>USD/INR</td>
              <td>~96.30</td>
              <td>~98.50</td>
              <td className="td-red">Rupee −2.3% on week</td>
            </tr>
            <tr>
              <td>FII MTD May</td>
              <td colSpan={2}>Net selling: −₹34,857 crore (through May 27)</td>
              <td className="td-red">Persistent outflow</td>
            </tr>
            <tr>
              <td>DII MTD May</td>
              <td colSpan={2}>Net buying: +₹65,905 crore (through May 27)</td>
              <td className="td-green">Nearly 2× FII selling</td>
            </tr>
          </tbody>
        </table>

        <p>The FII/DII dynamic continues to define the market&apos;s structure. Month-to-date through May 27, FIIs have net-sold <strong>₹34,857 crore</strong> from Indian equities while DIIs have bought <strong>₹65,905 crore</strong> — nearly double the FII selling. The domestic institutional wall holds the floor; it does not provide the fuel for a breakout. Friday&apos;s fall with markets down ~0.7% on the week confirms exactly that dynamic: DIIs absorbed selling but couldn&apos;t reverse it.</p>

        <div className="callout-red">
          <span className="c-label">Context: The 12-Month Picture</span>
          <p>FPIs have withdrawn $39.94 billion (₹3.65 trillion) from Indian secondary markets in the twelve months through May 22, 2026. FPI ownership of NSE-listed firms has fallen to a 17-year low of 15.8%. When measured in dollar terms — accounting for the rupee&apos;s 10.15% decline over the year — the Nifty 50 has delivered a 13.41% negative return for foreign investors over the past year. That is not a sentiment problem. It is a returns problem, and capital allocates rationally.</p>
        </div>

        {/* SECTION 2 */}
        <div className="section-tag">02 &nbsp; The Dominant Story</div>
        <h2>The Iran Ceasefire Framework: Closer, But Not Done</h2>

        <p>This was the week&apos;s most important story — and it kept reversing direction. On Sunday May 24, the Washington Post reported that the US and Iran had developed a framework extending the ceasefire 60 days, with the Strait of Hormuz to be de-mined and reopened in the interim, as two sides worked toward a final deal. Oil fell sharply: Brent dropped toward $98.76 on Sunday evening, a 4.62% decline from Friday&apos;s close, as markets priced in an imminent resolution.</p>

        <p>Then it got complicated. Iran&apos;s state television claimed Tehran had agreed a draft MOU with the US — with Iran and Oman jointly managing Strait traffic. The White House immediately dismissed this as a &ldquo;complete fabrication.&rdquo; Trump said no nation would control Strait shipping. By Thursday May 28, US and Iranian forces had exchanged fresh strikes — the Revolutionary Guard targeted a US air base, while US Central Command reported intercepting Iranian ballistic missiles launched toward Kuwait. Brent touched a mid-week low of $93.71 on the MoU optimism, then recovered on the fresh strikes before settling in the <strong>$95–96 range</strong> by week&apos;s end — still meaningfully below the prior week&apos;s $104–105, but not as far down as the mid-week trough suggested.</p>

        <div className="formula-box">
          <span className="f-label">The Oil Trajectory This Week</span>
          <span className="formula">$104–105 (May 22) → $98.76 Sunday → $93.71 mid-week low → ~$95–96 weekly close</span>
          <span className="sub">Negotiators reached a 60-day MoU to extend the ceasefire and begin nuclear programme negotiations. Trump has not yet approved it. Even if the Strait formally reopens, insurance market constraints, tanker positioning, and port backlogs mean full flow normalisation is a multi-month process — not an event.</span>
        </div>

        <p>The structural oil situation remains severe regardless of this week&apos;s diplomacy. The war removed approximately 14 million barrels per day — about 14% of global supply — from the market. Even with the Strait technically &ldquo;reopening,&rdquo; insurance constraints, tanker availability, and port backlogs mean full flow normalisation is months away. Brent settling near <strong>$95–96</strong> is still roughly 30% above its pre-war level of ~$72 in late February 2026 — a meaningful improvement from last week&apos;s $104–105, but far from resolved.</p>

        <div className="callout">
          <span className="c-label">Impact on India</span>
          <p>Every $10 per barrel sustained decline in Brent saves India approximately $12–15 billion annually on its import bill — about 0.3–0.4% of GDP. A move from $105 to ~$95–96 is already a ~$9–10 saving per barrel: it reduces imported inflation, eases the current account deficit, takes pressure off the rupee, and reopens the door for RBI rate cuts. A full normalisation toward $75–80 would be transformative. The partial relief this week is real — but the mid-week dip to $93.71 recovered on fresh strikes, which is the market&apos;s way of saying it believes this conflict is not over.</p>
        </div>

        {/* SECTION 3 */}
        <div className="section-tag">03 &nbsp; India-US Relations</div>
        <h2>Rubio&apos;s Visit: &ldquo;On the Verge&rdquo; of a Trade Deal</h2>

        <p>US Secretary of State Marco Rubio completed his four-day visit to India (May 23–26), traveling to Kolkata, Agra, Jaipur, and New Delhi. He called on Prime Minister Modi, held talks with External Affairs Minister Jaishankar, and attended the Quad Foreign Ministers&apos; meeting on May 26 — bringing together the US, India, Japan, and Australia.</p>

        <p>The headline from the visit: Rubio said at a joint press conference that the US and India are <strong>&ldquo;on the verge&rdquo;</strong> of reaching a trade agreement, adding that both sides have made <strong>&ldquo;tremendous progress&rdquo;</strong> and are working through the &ldquo;very final details.&rdquo; He expressed confidence the deal could be finalised within weeks.</p>

        <div className="principle-list">
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}><SketchIcon name="partnership" size={24} /></div>
            <div className="p-content">
              <h4>Next Round of Trade Talks: June 5–6, New Delhi</h4>
              <p>A US team will visit India on June 5–6 to discuss the Bilateral Trade Agreement, per government sources confirmed today (May 29). The Ministry of Commerce and Industry confirmed both sides are working to finalise the Interim Agreement and carry forward broader BTA negotiations covering market access, non-tariff measures, customs facilitation, investment promotion, and economic security. The first tranche is expected before July.</p>
            </div>
            <span className="p-pill pill-green">Confirmed</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="target" size={24} /></div>
            <div className="p-content">
              <h4>Mission 500: The Bilateral Ambition</h4>
              <p>Both governments have set a goal of more than doubling bilateral trade to $500 billion by 2030 — up from roughly $190 billion currently. Indian companies have committed over $20 billion in US investments as a goodwill gesture. Ambassador Gor has called the pace of progress &ldquo;historic.&rdquo;</p>
            </div>
            <span className="p-pill pill-gold">In Progress</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}><SketchIcon name="warn" size={24} /></div>
            <div className="p-content">
              <h4>The Relationship Reset Dimension</h4>
              <p>The visit carried a diplomatic repair function beyond trade. Relations had cooled after Modi publicly downplayed Trump&apos;s mediation role in the India-Pakistan ceasefire, while Pakistan simultaneously nominated Trump for the Nobel Peace Prize — a visible asymmetry that the Trump administration noted. A four-city, four-day visit by the Secretary of State is not standard diplomatic protocol; it was structured to visibly demonstrate the depth of the relationship before trade talks enter their most sensitive final phase.</p>
            </div>
            <span className="p-pill pill-red">Watch</span>
          </div>
        </div>

        <div className="callout">
          <span className="c-label">Impact</span>
          <p>The June 5–6 talks are the most important near-term market catalyst on the India-US front. A confirmed Interim BTA before July — covering pharmaceuticals, gems and diamonds, textiles, machinery, and defence goods — would be a significant re-rating event for export-oriented sectors. IT services, pharma exporters, specialty chemicals, and Indian defence manufacturers would benefit most. The risk of disappointment remains: the &ldquo;final details&rdquo; in trade deals have a history of taking longer than officials suggest.</p>
        </div>

        {/* SECTION 4 */}
        <div className="section-tag">04 &nbsp; India&apos;s Economy</div>
        <h2>GDP Data Coming June 5 — And Why the Date Change Matters</h2>

        <p>A correction worth flagging explicitly: the FY26 provisional GDP data is <strong>not releasing today</strong>. On May 12, MoSPI revised the release date from the last working day of May to June 5, 2026 — shifting the schedule permanently to June 7 each year (or the previous working day if it falls on a holiday). The reason is substantive, not bureaucratic: listed companies have 60 days from March 31 to file audited Q4 results, meaning many submissions arrive only in late May. Similarly, critical Central Government fiscal data for March — revenue, capex, taxes, subsidies, interest payments — finalises after a two-month lag. Releasing GDP estimates before that data arrives produces revisions that undermine credibility. The June 5 date produces a better number, not a delayed one.</p>

        <div className="formula-box">
          <span className="f-label">What the Data Will Show When It Arrives</span>
          <span className="formula">FY26 full-year GDP: Second Advance Estimate at 7.6% real growth — up from 7.1% in FY25, the sharpest since FY2022.</span>
          <span className="sub">Quarterly trajectory so far: Q1 FY26 = 7.8% | Q2 FY26 = 8.4% | Q3 FY26 = 7.8%. The Q4 print — the new one on June 5 — will show how much the Iran oil shock (which began in late February) bit into January–March activity.</span>
        </div>

        <p>Working through the Q4 picture independently: the oil shock hit India hardest in March 2026 — Brent was above $100 for most of that month and manufacturing input costs spiked. However, government capex typically accelerates in Q4 as ministries deploy unspent budgets before March 31, and private consumption held up reasonably well through January and February before the oil effect fed through. A Q4 reading in the 7.0–7.4% range is consistent with the data available — a meaningful slowdown from Q2&apos;s 8.4% peak but not a collapse. Full-year FY26 GDP at the 7.6% advance estimate would still represent India&apos;s strongest year since FY2022 and well ahead of FY25&apos;s 7.1%.</p>

        <div className="stage-grid-2">
          <div className="stage-card">
            <span className="s-label">If Q4 Prints Above 7.3%</span>
            <h3>Economy Absorbed the Oil Shock</h3>
            <p>Confirms domestic consumption and government capex offset the external headwind. Market-positive on Monday. Gives RBI the macro cover to hold comfortably — and potentially cut if crude stays below $95. Most rate-sensitive sectors catch a bid.</p>
          </div>
          <div className="stage-card">
            <span className="s-label-red">If Q4 Prints Below 6.8%</span>
            <h3>The Shock Was Deeper Than Assumed</h3>
            <p>Signals the Hormuz disruption fed through faster into manufacturing and services than the advance estimates captured. RBI in a bind — growth argues for cuts, but the rupee and inflation argue against. Cyclical sectors — autos, industrials, real estate — face selling pressure through June.</p>
          </div>
        </div>

        <div className="callout">
          <span className="c-label">The New Base Year Complication</span>
          <p>The June 5 data also arrives under the new GDP base year (2022–23, replacing 2011–12 from February 27). The new series produces a smaller nominal GDP, which means the same absolute rupee fiscal deficit becomes a larger percentage of GDP. The FY26 deficit was already pushed from 4.4% to 4.5% by the base revision without a single extra rupee borrowed. For FY27, the 4.3% target set in the Union Budget would require nominal growth of 13–14% to hold on the new base — well above the realistic 10%. The government has restated historical ratios in Parliament but has not yet revised the forward FY27 target. That is the watch item for the June Budget update.</p>
        </div>

        {/* SECTION 5 */}
        <div className="section-tag">05 &nbsp; Government Policy</div>
        <h2>Coal India OFS: Disinvestment Restarts at Scale</h2>

        <p>In one of the week&apos;s most significant policy moves, the Government of India announced on May 26 an Offer for Sale (OFS) in Coal India Limited — divesting up to 2% stake (with 1% base and 1% greenshoe option) at a floor price of ₹412 per share. The total offer size at the floor price was approximately ₹5,078 crore. The OFS opened for non-retail investors on May 27 and for retail investors today, May 29. The floor price of ₹412 represented a discount of 10.1% to Coal India&apos;s closing price of ₹458.15 on NSE on May 26.</p>

        <div className="principle-list">
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}><SketchIcon name="coins" size={24} /></div>
            <div className="p-content">
              <h4>Coal India&apos;s Financials: The Case for the OFS</h4>
              <p>Coal India&apos;s revenue grew 22.91% year-on-year to ₹46,490 crore in March 2026, while net profit rose from ₹9,593 crore to ₹10,908 crore in the same period. The company maintains an ROCE of 35.3%, ROE of 28.5%, and a near-zero debt-to-equity ratio of 0.12. It is the world&apos;s largest coal producer and one of India&apos;s most consistent dividend-paying PSUs — making the 10% discount a genuine incentive for investors.</p>
            </div>
            <span className="p-pill pill-green">Strong Fundamentals</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="building" size={24} /></div>
            <div className="p-content">
              <h4>Disinvestment Context: FY27 Programme Underway</h4>
              <p>This is the second PSU OFS of the current fiscal year. Last week the government sold an 8.08% stake in Central Bank of India via OFS, raising ₹2,266 crore. The government&apos;s Coal India stake will fall from 63.13% to 61.13% post-OFS. The DIPAM Secretary framed this as part of the broader FY27 disinvestment programme to improve public float and aid fiscal receipts.</p>
            </div>
            <span className="p-pill pill-gold">Policy Signal</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}><SketchIcon name="chart-down" size={24} /></div>
            <div className="p-content">
              <h4>Market Impact: Coal India Fell 6% on OFS Day</h4>
              <p>Coal India shares dropped more than 6% when the OFS opened on May 27, consistent with typical arbitrage behaviour around discounted PSU stake sales. By mid-session May 27, the stock was at ₹446.20 — down 2.61% — having opened at ₹429 against a previous close of ₹458.15. The discount floor effectively sets a ceiling on the open market price during the OFS window. This is mechanical, not fundamental.</p>
            </div>
            <span className="p-pill pill-red">Near-Term Drag</span>
          </div>
        </div>

        <div className="callout">
          <span className="c-label">Impact and the Broader Disinvestment Signal</span>
          <p>The government returning to PSU OFS sales is a meaningful policy signal: it suggests the disinvestment programme, stalled for much of FY26 due to volatile markets, is back on track. For investors, the Coal India OFS at a 10% discount with strong underlying fundamentals is structurally attractive. For the broader market, the PSU overhang from future stake sales (ONGC, NTPC, and others are candidates) is a potential short-term headwind — each OFS depresses the specific stock and channels institutional liquidity away from secondary market buying on those days.</p>
        </div>

        {/* SECTION 6 */}
        <div className="section-tag">06 &nbsp; Foreign Flows</div>
        <h2>The FPI Exodus: What the Data Actually Says</h2>

        <p>Strip away the noise and the FPI flow data this week told a story that is both clear and uncomfortable. FPIs have withdrawn $39.94 billion — ₹3.65 trillion — from Indian secondary markets in the twelve months through May 22, 2026. FPI ownership of NSE-listed firms has fallen to a 17-year low of 15.8%. When you measure the Nifty 50 in dollar terms (accounting for the rupee&apos;s 10.15% fall over the year), foreign investors have experienced a 13.41% negative return from Indian equities over the past year. That is not a sentiment problem — it is a returns problem. Capital goes where returns are.</p>

        <div className="formula-box">
          <span className="f-label">Structural Capital Flows — Annual (Dollar Terms)</span>
          <span className="formula">FPI equity inflows: avg $73bn (FY2019–24) → $17bn (FY2025) → est. −$5bn (FY2026)</span>
          <span className="sub">Net FDI inflows followed the same trajectory: avg $37bn annually (FY2019–23) → just $1bn in FY2025.</span>
        </div>

        <div className="formula-box">
          <span className="f-label">This Month — FII vs DII (Rupee Terms, MTD through May 27)</span>
          <span className="formula">FII net sold: −₹34,857 crore &nbsp;|&nbsp; DII net bought: +₹65,905 crore</span>
          <span className="sub">DIIs have absorbed nearly 2× every rupee FIIs have pulled out in May. The floor holds — but DIIs are not the catalyst for a breakout.</span>
        </div>

        <p>Working through why FPIs are leaving, independently of what any broker says: three structural factors are at work simultaneously. First, India has &ldquo;negative carry&rdquo; on a dollar basis — with the rupee depreciating at roughly 4–5% annually, Indian equity returns must exceed US returns by that margin just to break even, and they haven&apos;t. Second, India sits on the wrong side of the two dominant global investment themes right now: the AI/semiconductor supercycle (where Taiwan, South Korea, and the US are the direct beneficiaries) and the commodity supercycle (where commodity exporters benefit; India is a commodity importer, particularly of oil). Third, US 10-year yields near 4.4–4.5% under the new Fed Chair make high-quality dollar assets genuinely competitive for the first time since 2007 — reducing the pressure on global fund managers to seek returns in emerging markets.</p>

        <p>The DII wall — built on ₹2.7 trillion in annual equity mutual fund inflows and insurance premium growth — is absorbing all of this selling and then some. But there is a distinction between a market that is being held up and one that is being driven forward. The former describes India today. For the Nifty to break decisively above 24,200 and sustain it, FPI sellers need to become buyers — and none of the three structural factors above has changed this week.</p>

        <div className="callout-red">
          <span className="c-label">The Rupee Amplifier</span>
          <p>A weaker rupee compounds the FPI problem non-linearly. Each rupee that falls against the dollar simultaneously reduces the dollar value of Indian equity holdings, increases imported inflation (making RBI rate cuts harder), widens the current account deficit (requiring more capital inflows to fund it), and reduces real purchasing power in the economy. The USD/INR move from ~96.30 to 98.48 this week alone erases roughly 2.3% of dollar-denominated returns for a foreign investor holding Indian equities — in five trading days. Until the rupee stabilises, the returns arithmetic for foreign capital simply doesn&apos;t work.</p>
        </div>

        {/* SECTION 7 */}
        <div className="section-tag">07 &nbsp; Macro Framework</div>
        <h2>The GDP Base Year Revision: A Silent Fiscal Tightening</h2>

        <p>On February 27, MoSPI shifted India&apos;s GDP base year from 2011–12 to 2022–23. The change is methodologically sound — 2022–23 is a recent post-COVID normal year with comprehensive sectoral data — but it carries a fiscal sting that has received less attention than it deserves. Under the new series, nominal GDP is somewhat smaller than the old series showed. Real GDP for FY26 is estimated at ₹322.58 lakh crore, with a 7.6% growth rate — the same number that looks strong in growth terms actually implies a smaller denominator for debt and deficit ratios.</p>

        <p>Working through the arithmetic: the Union Budget set the FY27 fiscal deficit target at 4.3% of GDP, using the old series nominal GDP base. Under the new series, assuming the realistic 10% nominal GDP growth, the same absolute rupee deficit — ₹16.95 lakh crore — translates to a deficit ratio approximately <strong>25 basis points higher</strong> than the stated 4.3% target. To actually hit 4.3% on the new base, nominal GDP growth would need to reach 13–14% — a figure that is very difficult to achieve at current projections of 7–7.4% real growth. The FY27 target of 4.3%, in other words, was set on a base that no longer exists.</p>

        <div className="callout">
          <span className="c-label">What the Government Has and Hasn&apos;t Done</span>
          <p>The government has partially responded. On March 10, 2026, Minister of State for Finance Pankaj Chaudhary confirmed in a written Rajya Sabha reply that past deficit ratios have been officially restated under the new series — FY25 moves from 4.8% to 4.9%, FY24 from 5.63% to 5.7%, and FY23 from 6.4% to 6.7%. So the historical restatement is on record. What has not happened is an explicit revision to the FY27 target. The Budget set 4.3% using the old series base. Under the new series, achieving 4.3% would require nominal GDP growth of 13–14% — well above the 10% that is realistic at current projections. The FY26 deficit was similarly pushed up from 4.4% to 4.5% by the base revision without a single extra rupee borrowed. The credibility question is not whether the government knows this — it clearly does — but whether the June Budget update will formally reset the FY27 glide path on the new base or leave the gap unaddressed.</p>
        </div>

        {/* SECTION 8 */}
        <div className="section-tag">08 &nbsp; Diplomatic Developments</div>
        <h2>India Opens Multiple Trade Fronts Simultaneously</h2>

        <p>Even as the US-India BTA occupied the headlines, India was simultaneously advancing trade relationships on two other fronts this week — signals of a broader strategic diversification away from dependency on any single bilateral relationship.</p>

        <div className="principle-list">
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}>🇮🇳</div>
            <div className="p-content">
              <h4>Third India-Nordic Summit: Oslo, May 27</h4>
              <p>India held its Third India-Nordic Summit in Oslo with Denmark, Finland, Iceland, Norway, and Sweden. The summit deepened cooperation on clean energy, maritime infrastructure, digital technology, and climate resilience — sectors where Nordic countries have significant capital and technology to deploy in Indian markets. Nordic sovereign funds are among the most patient long-term investors globally; deepening these relationships is a slow but meaningful FDI pipeline story.</p>
            </div>
            <span className="p-pill pill-green">Positive</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}>🇨🇦</div>
            <div className="p-content">
              <h4>India-Canada CEPA Negotiations Accelerate</h4>
              <p>Commerce Minister Piyush Goyal visited Canada this week, with the Ministry of Commerce confirming both sides are accelerating CEPA (Comprehensive Economic Partnership Agreement) negotiations. This is a relationship that was effectively frozen after the diplomatic row over the Nijjar affair in 2023–24. Its resumption — alongside the US BTA progress — signals India is aggressively broadening its trade architecture before the BTA potentially locks in preferential terms for US exporters.</p>
            </div>
            <span className="p-pill pill-gold">Developing</span>
          </div>
        </div>

        <div className="callout">
          <span className="c-label">Strategic Impact</span>
          <p>India is now in simultaneous trade negotiations or framework discussions with the US, Canada, the Nordic bloc, the EU, and the UK. This is deliberate: each deal adds to a web of preferential market access that makes Indian exports more competitive globally. For listed companies, the most direct beneficiaries of this multi-front trade push are pharmaceuticals (US, EU, Canada all critical markets), specialty chemicals (EU, Nordic), IT services (US), and manufacturing exporters. The medium-term investment thesis for export-oriented India remains intact even as current FPI flows tell a more cautious story.</p>
        </div>

        {/* SECTION 9 */}
        <div className="section-tag">09 &nbsp; Global Finance</div>
        <h2>Global Markets: Oil Relief, Rupee Pressure, Bond Yields</h2>

        <p>Globally, the week was dominated by the Iran ceasefire framework and its implications for energy markets. As of Wednesday May 27, US equity markets were broadly positive — the Dow Jones at 50,644, S&amp;P 500 at 7,520, Nasdaq at 26,674. European and Asian markets were more cautious. Japan&apos;s Nikkei fell 0.47% on Thursday. The GIFT Nifty, quoting at 23,599 on Thursday night, was signalling a modestly weaker Friday open, pointing to some profit-taking ahead of the GDP data.</p>

        <div className="formula-box">
          <span className="f-label">Key Global Market Levels — May 28 Close</span>
          <span className="formula">Dow Jones: 50,669 | S&amp;P 500: 7,564 (record) | Nasdaq: 26,917 (record) | FTSE 100: 10,395 | DAX: 25,064 | Nikkei: 64,693</span>
          <span className="sub">Brent crude: $96.57 on May 28 — up 2.41% on the day as fresh US-Iran strikes drove a rebound from the mid-week low of $93.71. US 10-year Treasury yields remained elevated near 4.4–4.5%, keeping Fed rate-hike probability in focus under new Chair Kevin Warsh.</span>
        </div>

        <p>The rupee&apos;s move is the most important global finance development for India this week. USD/INR futures on Thursday were quoting at 98.48 — a sharp move from the ~96.30 level of the prior week. A weaker rupee is a double-edged sword: it makes Indian exports cheaper (positive for IT, pharma, textiles) but increases the cost of crude imports (negative for everything else), adds to imported inflation, and compresses the RBI&apos;s rate-cutting room.</p>

        <p>The rupee&apos;s depreciation is structural, not just this-week noise. Over the past year, it has fallen 10.15% against the dollar. Over a five-year average, the annual depreciation is 4.8%. This means that for a dollar-denominated investor, India&apos;s equity market must generate 4–5% more return annually just to break even versus US assets — an increasingly difficult bar as US yields remain elevated under Warsh&apos;s Fed.</p>

        <div className="callout">
          <span className="c-label">The Rupee and the RBI&apos;s Dilemma</span>
          <p>Reports surfaced this week that the RBI is considering interest rate hikes to support the rupee — a potential reversal of the 125bp cutting cycle completed through 2025. If the RBI hikes to defend the currency, it tightens financial conditions at exactly the wrong time for corporate India: Q1 FY27 will already be pressured by elevated input costs — visible in Maruti&apos;s ₹30,000 and Hyundai&apos;s ₹12,800 simultaneous price hike announcements. Rate-sensitive sectors — NBFCs, real estate, consumer durables — would face the most pain. The RBI&apos;s June MPC meeting will be the critical decision point; the GDP data releasing June 5 will be the most important input into that decision.</p>
        </div>

        {/* SECTION 10 */}
        <div className="section-tag">10 &nbsp; The Full Picture</div>
        <h2>What Has Changed, What Hasn&apos;t, and What Comes Next</h2>

        <p>Comparing this week to last week, three things have materially shifted and several structural themes remain unchanged.</p>

        <div className="stage-grid-2">
          <div className="stage-card">
            <span className="s-label">What Changed This Week</span>
            <h3>Three Genuine Developments</h3>
            <p>1. Iran ceasefire MoU framework: Brent closed the week near $95–96 — down ~9% from prior week&apos;s $104–105 — real and meaningful relief, but not resolution. 2. Trade deal &ldquo;on the verge&rdquo;: June 5–6 BTA talks confirmed; Rubio&apos;s language was the most concrete yet. 3. Coal India OFS: Disinvestment restarts — a fiscal and market-structure signal simultaneously. Hyundai also announced price hikes up to ₹12,800 effective June 1, the second major automaker after Maruti to do so — confirming input cost inflation has become industry-wide, not company-specific.</p>
          </div>
          <div className="stage-card">
            <span className="s-label-red">What Hasn&apos;t Changed</span>
            <h3>Structural Headwinds Persist</h3>
            <p>FPIs net-sold ₹34,857 crore MTD May. Rupee weakened 2.3% on the week. IT sector structurally impaired by AI disruption. RBI on hold, with rate hike risk building if rupee slides past ₹99–100. Nifty closed the week at 23,547.75 — lower than the prior Friday&apos;s 23,719.30. The mid-week rally was fully erased by Friday&apos;s close. No breakout was sustained.</p>
          </div>
        </div>

        <h2 style={{ marginTop: "2.5rem" }}>The Catalysts for Next Week</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">1</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>Q4 FY26 GDP Print — June 5, 2026 (not today)</h4>
              <p>MoSPI revised the release to June 5 on May 12 — confirmed. Markets will digest this on Monday June 9 (assuming no holiday). A Q4 reading above 7.3% validates the macro story and gives the RBI room to hold comfortably or even cut. A reading below 6.8% confirms the oil shock&apos;s Q4 bite and complicates the rate path. The base year fiscal implications — requiring 13–14% nominal growth to hold the 4.3% FY27 target on the new series — will be dissected immediately by sovereign credit analysts.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">2</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>US-Iran Final Deal Status</h4>
              <p>The 60-day MoU extension is not a final deal. Trump has not yet approved it. Fresh military strikes on Thursday show how fragile the situation remains. A confirmed, Trump-approved ceasefire that includes credible Hormuz reopening commitments would drive a Nifty rally to 24,500–25,000. A breakdown and return to open conflict pushes Brent back above $100 and Nifty back toward 23,000.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">3</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>US-India Trade Talks: June 5–6</h4>
              <p>The US negotiating team arrives in New Delhi for what Rubio called the &ldquo;very final details&rdquo; of the Interim BTA. Market reaction will depend on whether a formal signing or timeline announcement follows. The &ldquo;before July&rdquo; deadline is now market consensus — any delay would be read negatively by export sector stocks.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">4</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>RBI June MPC Meeting</h4>
              <p>With GDP data in hand, oil trending lower, but the rupee under pressure and inflation risks building from Maruti-style pass-throughs, the RBI&apos;s June meeting will be closely watched. A hold is the base case. A surprise cut (if GDP disappoints and crude consolidates below $90) would be market-positive. A hike signal (if rupee hits 99–100 and inflation data deteriorates) would be significantly negative.</p>
            </div>
          </div>
        </div>

        <div className="range-box">
          <span className="r-label">The Range for June</span>
          <p>A confirmed Iran deal + BTA signing + GDP beat puts Nifty at 24,500–25,000 by end-June. A deal collapse + RBI hike signal + GDP miss puts Nifty at 22,500–23,000. The base case — partial Iran progress, BTA closer but not signed, GDP broadly in-line — keeps Nifty in the 23,500–24,200 consolidation range. The current setup is meaningfully more constructive than three weeks ago, but not yet a confirmed breakout. The Nifty needs to decisively cross and hold 24,200 on strong volume to shift the technical narrative.</p>
        </div>

        <div className="footnote">
          <strong>Sources:</strong> Nifty/Sensex levels: NSE India. FII/DII flows: Enrich Money, NSE India. Iran ceasefire framework: Washington Post, CNBC, Axios. Rubio visit and BTA: The Statesman, BusinessToday, ANI. Coal India OFS: Business Standard, ANI. GDP release date: MoSPI (May 12, 2026). FPI flow data and rupee returns: Livemint. FPI/FDI annual data: Kotak Institutional Equities. GDP base year revision: MoSPI / BusinessToday. Hyundai price hike: Trendlyne. Global market levels: Enrich Money. Brent crude: Trading Economics, Axios. RBI data: Trading Economics / RBI. Market holiday (Bakri Id): 5paisa.
          <br /><br /><strong>Disclaimer:</strong> The views expressed in this briefing are the author&apos;s personal opinions only and should not be construed as investment advice. Nothing herein constitutes a recommendation to buy, sell, or hold any security or financial instrument. Readers should conduct their own research and consult a qualified financial adviser before making any investment decisions.
        </div>

      </article>

      {/* ── FOOTER ── */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.PNG" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
            <p>Empowering individuals with the financial literacy they need to build lasting wealth.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/modules">Finance Course</Link></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Finance Tools</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/signin">Sign In</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bodha. All rights reserved.</p>
          <a href="#">Back to top &uarr;</a>
        </div>
      </footer>

      {showTerms && <TermsModal viewOnly onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </div>
  );
}
