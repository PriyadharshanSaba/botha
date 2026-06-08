"use client";

import "../guide-article.css";
import "../../landing.css";
import Link from "next/link";
import { useState } from "react";
import TermsModal from "../../components/TermsModal";
import PrivacyModal from "../../components/PrivacyModal";
import SketchIcon from "../../components/SketchIcon";

export default function IndiaFinanceJun5Page() {
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
          <span className="tag">India &amp; Global Finance &nbsp;|&nbsp; May 29 – June 5, 2026</span>
        </div>

        <div className="hero-badge">Weekly Briefing — What Mattered, What It Means, What Comes Next</div>

        <h1>The Week Everything<br />Landed at <span>Once</span></h1>

        <div className="hero-sub">
          RBI held, FY26 GDP printed, trade talks concluded, and the government abolished FPI capital gains tax on G-Secs by ordinance — all on the same Friday. Seven dense days that simultaneously validated the macro story and cut the FY27 outlook, leaving markets suspended between two competing narratives.
        </div>

        {/* STAT ROW */}
        <div className="stat-row">
          <div className="stat-cell">
            <span className="big green">7.7%</span>
            <span className="lbl">FY26 Full-Year GDP<br />Provisional Estimate, June 5</span>
          </div>
          <div className="stat-cell">
            <span className="big">5.25%</span>
            <span className="lbl">RBI Repo Rate<br />Held Unanimously, June 5</span>
          </div>
          <div className="stat-cell">
            <span className="big red">₹95.65</span>
            <span className="lbl">USD/INR Close<br />Down ~11.5% over 12 months</span>
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="section-tag">01 &nbsp; The Market Scorecard</div>
        <h2>A Week Without a Clear Direction — Until Friday&apos;s Double-Header</h2>

        <p>Indian equity markets carried over the prior Friday close of <strong>23,547.75</strong> on Nifty and <strong>74,775.74</strong> on Sensex. The week opened with Monday June 1 weakness — Sensex fell to 74,267.34, Nifty to 23,382.60 (−0.70%) — as fresh US–Iran military exchanges weighed on sentiment. Tuesday June 2 snapped a four-day losing streak: Nifty closed at 23,483, Sensex added 382 points, driven by a <strong>4.2% surge in Nifty IT</strong> as Infosys rose nearly 6% on an AI product launch. Mid-week was choppy as oil climbed back above $97 on renewed Gulf strikes. Friday June 5 brought the RBI hold and GDP data simultaneously — a dual catalyst that lifted the opening but faded into the close, with Nifty finishing the week at <strong>23,366.70</strong> and Sensex at <strong>74,243.34</strong> — both below the prior Friday close.</p>

        <table className="week-table">
          <thead>
            <tr>
              <th>Index / Indicator</th>
              <th>May 29 Carry-In</th>
              <th>June 5 Close / Level</th>
              <th>Weekly Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nifty 50</td>
              <td>23,547.75</td>
              <td><strong>23,366.70</strong></td>
              <td className="td-red">Down 181 pts (−0.77%) on week</td>
            </tr>
            <tr>
              <td>Sensex</td>
              <td>74,775.74</td>
              <td><strong>74,243.34</strong></td>
              <td className="td-red">Down 532 pts (−0.71%) on week</td>
            </tr>
            <tr>
              <td>Brent Crude</td>
              <td>~$94–95 (May 29)</td>
              <td>~$95–98</td>
              <td className="td-red">Crept higher on Gulf strikes</td>
            </tr>
            <tr>
              <td>USD/INR</td>
              <td>~94.6–95.2</td>
              <td>95.65</td>
              <td className="td-red">Rupee continued weakening</td>
            </tr>
            <tr>
              <td>FII Jun 1–4 Equities</td>
              <td colSpan={2}>Net selling: −₹22,338 crore (Jun 1–4)</td>
              <td className="td-red">Persistent outflow</td>
            </tr>
            <tr>
              <td>DII Jun 1–4</td>
              <td colSpan={2}>Net buying: +₹24,799 crore (Jun 1–4)</td>
              <td className="td-green">Cushioning the fall</td>
            </tr>
            <tr>
              <td>FPI YTD 2026 (Equities)</td>
              <td colSpan={2}>Net outflow: −₹2.63 lakh crore</td>
              <td className="td-red">~1.6× full-year 2025 outflows</td>
            </tr>
            <tr>
              <td>Nifty IT (Week)</td>
              <td colSpan={2}>Surge of ~4–5% led by Infosys (+6%), TCS, Tech M</td>
              <td className="td-green">Best sectoral performer</td>
            </tr>
          </tbody>
        </table>

        <p>The FII/DII structural dynamic continues unchanged. FPIs have now pulled <strong>₹2.63 lakh crore</strong> from Indian equities in 2026 — roughly 1.6× the full-year 2025 calendar-year withdrawal of ₹1.66 lakh crore. DIIs absorbed the selling once again this week but cannot provide the fuel for a breakout. Nifty closed the week at 23,366.70 — below the prior Friday close of 23,547.75, and still rangebound between 23,200 support and 24,000 resistance, with a decisive break above 23,550–23,600 required to even begin a recovery narrative.</p>

        <div className="callout-red">
          <span className="c-label">The 12-Month Dollar Return Problem</span>
          <p>The Nifty 50 is down 4.66% over the past 12 months in rupee terms. Add the rupee&apos;s ~11.5% depreciation against the dollar and the dollar-adjusted return for a foreign equity investor is approximately −15.5% (precisely: (1 − 0.0466) × (1 − 0.115) − 1 ≈ −15.5%). That is not a sentiment problem. Capital allocates rationally. Until the rupee stabilises and earnings growth re-accelerates, the structural FPI outflow pressure will not abate.</p>
        </div>

        {/* SECTION 2 */}
        <div className="section-tag">02 &nbsp; The Headline Number</div>
        <h2>FY26 GDP at 7.7% — The Number the World Will Quote, and the Story Underneath It</h2>

        <p>MoSPI released Provisional Estimates for FY26 on Friday June 5, confirming full-year real GDP growth at <strong>7.7%</strong> — approximately 10 basis points above the Second Advance Estimate of 7.6%, and firmly the highest growth rate in the G20. The headline will be celebrated domestically and internationally. The layers beneath it are more complicated.</p>

        <p>Critically, the FY26 GDP was released using the <strong>new 2022-23 base year</strong> — the first major base revision since 2011-12. Base year changes restate the economy&apos;s structural composition and alter how growth rates are computed. The 7.6% SAE was produced on the old base; the 7.7% PE is on the new base and represents a slight upward revision. A strict comparison of these two numbers is therefore imprecise. The MoSPI has not yet published a full historical restated series, which means analysts cannot yet cleanly compute the impact of the base shift on the deficit-to-GDP ratio or the debt-to-GDP ratio.</p>

        <div className="formula-box">
          <span className="f-label">FY26 GDP Quarterly Trajectory (Confirmed and Implied)</span>
          <span className="formula">Q1 FY26 (Apr–Jun 2025): 7.8% → Q2 FY26 (Jul–Sep 2025): 8.2% → Q3–Q4 FY26 (Oct 2025–Mar 2026): ~7.4–7.8% implied → Full Year PE: 7.7%</span>
          <span className="sub">New base year 2022-23 applied for the first time in the PE. Old-base SAE was 7.6%; the new-base PE of 7.7% is a slight upward revision, not the miss some anticipated. Strong H2 performance reflects resilient private consumption and fixed investment despite the Iran oil shock. FY27 RBI central forecast: 6.6% (revised down from prior RBI estimate of 6.9% at the April MPC). IMF FY27 estimate: ~6.4%.</span>
        </div>

        <div className="callout">
          <span className="c-label">The Angle Nobody Is Writing: The Fiscal Deficit Arithmetic Breaks</span>
          <p>The February Budget set a FY27 fiscal deficit target of 4.3% using the old GDP base. On the new 2022-23 base series, that same nominal borrowing would be divided by a larger nominal GDP denominator — but achieving 4.3% still requires nominal GDP growth of approximately 13–14%. The RBI&apos;s own central forecast implies nominal GDP growth of ~12% for FY27 (precisely: (1.066) × (1.051) − 1 ≈ 12.0%). That gap — ~12% actual versus 13–14% required — means the government&apos;s 4.3% target is arithmetically difficult to achieve without either cutting spending or accepting a fiscal slippage. The June Budget update must address this explicitly. If it doesn&apos;t, sovereign credit analysts will do the arithmetic themselves and draw their own conclusions. Note: the stronger-than-expected FY26 PE of 7.7% provides a marginally larger nominal GDP base for FY27 calculations, but does not close the gap materially.</p>
        </div>

        {/* SECTION 3 */}
        <div className="section-tag">03 &nbsp; Monetary Policy</div>
        <h2>RBI Unanimously Holds at 5.25% — The Forecast Revisions Are the Real Story</h2>

        <p>The MPC voted unanimously on June 5 to hold the repo rate at <strong>5.25%</strong> and maintain a neutral stance. The hold itself was fully anticipated by every economist polled ahead of the meeting. What the market did not entirely anticipate was the extent of the <em>simultaneous</em> move in both directions: inflation revised sharply upward and growth revised downward — a stagflationary combination that defines the RBI&apos;s precise dilemma heading into August.</p>

        <div className="principle-list">
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}><SketchIcon name="chart-up" size={24} /></div>
            <div className="p-content">
              <h4>FY27 CPI Inflation Revised Up 50 bps to 5.1%</h4>
              <p>The quarterly path — Q1 (Apr–Jun 2026): 4.2%, Q2 (Jul–Sep 2026): 5.1%, Q3 (Oct–Dec 2026): 5.9% (peak), Q4 (Jan–Mar 2027): 5.4% — reflects elevated energy prices from the Middle East conflict, supply chain disruptions, rupee weakness, and El Niño monsoon risk. Core inflation is pegged at 4.7%. The Q3 (Oct–Dec 2026) peak of 5.9% is the danger zone: if it breaches 6%, the MPC&apos;s stated tolerance band is effectively blown and a rate hike conversation becomes unavoidable.</p>
            </div>
            <span className="p-pill pill-red">Hawkish Signal</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(160,56,10,0.08)" }}><SketchIcon name="chart-down" size={24} /></div>
            <div className="p-content">
              <h4>FY27 GDP Forecast Cut to 6.6% from 6.9%</h4>
              <p>Quarterly breakdown: Q1 (Apr–Jun 2026) 6.6%, Q2 (Jul–Sep 2026) 6.3% (the soft spot), Q3 (Oct–Dec 2026) 6.5%, Q4 (Jan–Mar 2027) 6.8%. The Q2 (Jul–Sep 2026) trough is when the monsoon effect, energy cost pass-through, and any Iran escalation would all peak simultaneously. A Q2 miss below 6% would reopen fiscal deficit arithmetic and force the RBI&apos;s hand. Private consumption and fixed investment described as &ldquo;resilient,&rdquo; but merchandise export growth in April 2026 already facing elevated freight and insurance costs.</p>
            </div>
            <span className="p-pill pill-red">Growth Concern</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(200,154,46,0.12)" }}><SketchIcon name="cloud" size={24} /></div>
            <div className="p-content">
              <h4>Monsoon Named as the Biggest Domestic Risk</h4>
              <p>Governor Malhotra explicitly identified the south-west monsoon as the single largest domestic risk to the RBI&apos;s projections. El Niño conditions raise the probability of a sub-normal season. The RBI&apos;s 5.1% inflation forecast assumes &ldquo;broadly adequate&rdquo; rainfall — a below-normal monsoon hitting Kharif sowing in July–August 2026 would blow the Q3 (Oct–Dec 2026) ceiling of 5.9% and potentially force a hawkish pivot in October.</p>
            </div>
            <span className="p-pill pill-gold">Watch Closely</span>
          </div>
          <div className="principle-item">
            <div className="p-icon" style={{ background: "rgba(46,125,69,0.1)" }}><SketchIcon name="building" size={24} /></div>
            <div className="p-content">
              <h4>Neutral Stance Preserved — Optionality by Design</h4>
              <p>The MPC retained neutral rather than signalling accommodation withdrawal. This is deliberate: if oil stabilises and Iran de-escalates, an August cut remains possible. If inflation prints above 5.5% or the rupee breaches ₹98, tightening becomes viable. A pre-committed stance removes that flexibility. The neutral stance is the RBI&apos;s most honest signal: they genuinely do not know what August will demand, and they are not pretending otherwise.</p>
            </div>
            <span className="p-pill pill-gold">Flexibility Preserved</span>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="section-tag">04 &nbsp; Policy Surprise</div>
        <h2>Government Abolishes FPI Capital Gains Tax on G-Secs — By Ordinance</h2>

        <p>The week&apos;s most consequential domestic policy action came via an unexpected route: the Union Cabinet approved an ordinance on June 4 — assented by the President and formally notified on June 5 — exempting Foreign Portfolio Investors from <strong>income tax on both interest income and capital gains</strong> arising from investments in government securities. The exemption applies retroactively from April 1, 2026.</p>

        <p>The urgency of the ordinance route explains itself in the context of the numbers. FPIs have pulled <strong>₹2.63 lakh crore</strong> from Indian equities in 2026 — roughly 1.6× the full-year 2025 calendar-year outflow of ₹1.66 lakh crore. In June alone through June 3, FPIs sold ₹16,902 crore in equities while buying only ₹119 crore in debt. The rupee at ₹95.65 represents an ~11.5% decline over 12 months and rising. Waiting for Parliament was not an option.</p>

        <div className="formula-box">
          <span className="f-label">What the Exemption Actually Changes</span>
          <span className="formula">Before: FPIs paid 12.5% LTCG on G-Sec gains held &gt;12 months + 20% withholding tax on interest income</span>
          <span className="sub">After: Zero tax on both capital gains and interest from G-Secs, retroactive to April 1, 2026. The Fully Accessible Route (FAR) expanded to include new issuances in 15-, 30- and 40-year tenors and Sovereign Green Bonds. Three restrictions on FPI investments under the General Route also removed simultaneously. Per Deloitte: FPI returns on G-Secs improve 15–20%.</span>
        </div>

        <div className="callout-green">
          <span className="c-label">Why This Could Matter More Than the Headline Suggests</span>
          <p>The mechanics are straightforward; the strategic ambition is not. India has been partially included in the JP Morgan EM Bond Index since June 2024. But tax friction and effective holding limits have kept passive index-driven inflows well below full-inclusion potential. Removing LTCG and interest tax directly targets pension funds, insurance companies, and sovereign wealth funds — the patient, long-duration investors that JP Morgan&apos;s index drives. If this successfully deepens FPI G-Sec participation, the RBI gains structural monetary policy freedom: it can hold or cut rates without worrying about a thin domestic bid for sovereign debt. PSU banks and primary dealers rallied on this news Friday — they understood it correctly.</p>
        </div>

        <div className="callout-red">
          <span className="c-label">The Risk That Isn&apos;t Being Discussed</span>
          <p>Deeper FPI penetration in G-Secs creates a new vulnerability that doesn&apos;t exist when the market is domestically held. When a sudden risk-off event strikes — an Iran escalation, a Fed surprise — foreign holders sell G-Secs, pushing yields up, which triggers rupee weakness, which triggers more selling. India&apos;s equity market has already experienced exactly this dynamic over the past 18 months. Extending that structural fragility to the sovereign bond market requires a robust monitoring and circuit-breaker framework. The RBI and SEBI will need to be proactive, not reactive, in designing those safeguards before the inflows they are attracting become large enough to matter — and to destabilise.</p>
        </div>

        {/* SECTION 5 */}
        <div className="section-tag">05 &nbsp; Trade: US-India BTA</div>
        <h2>&ldquo;99% Done&rdquo; — But Section 301 Just Rewrote the Math</h2>

        <p>The US trade negotiating team (led by Chief Negotiator Brendan Lynch) arrived in New Delhi on June 1 for a scheduled four-day round. By the conclusion of talks on June 4, US Ambassador Sergio Gor stated that <strong>99% of the bilateral trade pact is in place</strong>, with negotiators finalising technical and legal text. On June 5, President Trump publicly confirmed: <em>&ldquo;We&apos;re gonna make a deal … We are making a lot of money with India.&rdquo;</em></p>

        <p>The framework from the February 7 joint statement remains the basis: the US agreed to reduce tariffs on Indian goods from <strong>50% to 18%</strong> — eliminating both the 25% reciprocal tariff and the additional 25% punitive tariff linked to India&apos;s purchases of Russian oil. A US Supreme Court ruling striking down Trump&apos;s IEEPA-based sweeping tariffs has placed a temporary 10% rate on India pending further legal proceedings; the BTA, when signed, formalises the 18% figure as a negotiated permanent rate. India&apos;s acceptance of 18% over the court-mandated 10% reflects the tradeoff: the BTA provides legal certainty, market access commitments, and the removal of the Russian oil penalty — benefits that a temporary court-imposed rate cannot guarantee. Commerce Minister Piyush Goyal reiterated that signing awaits terms that are &ldquo;fair, equitable, and balanced.&rdquo;</p>

        <div className="callout-red">
          <span className="c-label">The Curveball: USTR Section 301 Proposes 12.5% Additional Tariff on India</span>
          <p>Even as BTA talks progressed, the USTR concluded a Section 301 investigation this week proposing an additional 12.5% tariff on India — and 59 other countries including China, Japan, South Korea and Brazil — over alleged failure to adequately prohibit forced labour practices. If imposed on top of the BTA&apos;s 18%, India&apos;s effective US tariff rises to 30.5%. That erases most of the hard-won BTA gains for labour-intensive sectors — textiles, gems and jewellery, leather, shrimp — precisely the industries most dependent on US market access. India is &ldquo;parallelly engaged&rdquo; on both tracks, but the sequencing risk is real: a Section 301 tariff imposed before the BTA is formally signed would be politically and economically damaging.</p>
        </div>

        <p>The pharmaceutical sector — India&apos;s largest single export category to the US at approximately <strong>$8.7 billion annually</strong> (FY24 figure; FY26 likely higher given 9%+ YoY growth) — deserves specific attention here. Pharma has been mostly exempt from tariff pressure and has been trading on BTA optimism. A Section 301 action that encompasses pharmaceutical supply chains (citing contract manufacturing labour practices) would reprice the entire sector&apos;s US earnings outlook. This is a tail risk, not the base case, but it is no longer inconceivable given the USTR&apos;s scope of investigation.</p>

        {/* SECTION 6 */}
        <div className="section-tag">06 &nbsp; Global: Iran, Oil and India&apos;s True Import Bill</div>
        <h2>Oil Trapped Between $93 and $98 — Neither the Relief Nor the Crisis Markets Need</h2>

        <p>The week&apos;s oil price action traded in an unusually narrow band given the underlying geopolitical uncertainty: Brent futures settled in the <strong>$93–$98</strong> range through the week after a volatile month of May that saw the benchmark fall nearly 19% from its 2026 peak. The pattern has become familiar — ceasefire optimism sends oil toward $93, fresh Gulf strikes push it back toward $97–98, and no resolution arrives.</p>

        <p>The critical development this week: the US indicated Israel and Lebanon had agreed to a ceasefire, conditional on Hezbollah also halting attacks. Hezbollah rejected this condition. Tehran has made a Lebanon ceasefire a prerequisite for any broader US-Iran nuclear deal. That linkage — Lebanon deal → Hezbollah stand-down → Iran-US MoU → Hormuz normalisation → tanker rerouting (60–90 days) — is a multi-step chain in which every link is contested. Even the most optimistic scenario keeps Brent above $85 well into Q3 FY27 (Oct–Dec 2026).</p>

        <div className="formula-box">
          <span className="f-label">Oil Levels — Week of June 2–5, 2026</span>
          <span className="formula">Brent Jun 3 (fresh strikes): $97.81 | Brent Jun 4: ~$95 (Lebanon ceasefire hopes) | Jun 5 close: ~$95–96</span>
          <span className="sub">Spot Brent (near-term cargo delivery): still elevated ~$20–25 above futures contract price, per UBS and S&amp;P Global — indicating near-term physical supply tightness even as futures price eventual Hormuz reopening. Iran crude loadings in May: below 0.3 mb/d vs. 1.7 mb/d in March. UBS notes &ldquo;little evidence&rdquo; of any short-term improvement in vessel traffic or energy flows through the Strait.</span>
        </div>

        <div className="callout">
          <span className="c-label">India&apos;s Uncommon Oil Exposure This Cycle — The Hidden Double Pressure</span>
          <p>India&apos;s oil import economics in FY27 carry a structural wrinkle that most commentary misses. India had been importing 35–40% of its crude needs from Russia at significant discounts — roughly 1.5–2 mb/d. As part of the BTA framework, India effectively agreed to restructure these purchases in exchange for the US removing its &ldquo;Russian oil penalty&rdquo; tariff. This means India&apos;s average crude procurement cost in FY27 is structurally higher than in FY26, even at the same Brent headline price. India is now buying more from the Middle East and West Africa at closer-to-Brent pricing — just as Brent itself is elevated by the Iran conflict. The oil bill inflation for FY27 is doubly pressured: elevated Brent and a narrowed Russia discount. That is the true current account arithmetic that is invisible in the headline crude chart.</p>
        </div>

        {/* SECTION 7 */}
        <div className="section-tag">07 &nbsp; Fiscal: The RBI Dividend and a Circular Dynamic</div>
        <h2>The ₹2.86 Lakh Crore RBI Dividend — India&apos;s Accidental Fiscal Cushion</h2>

        <p>The RBI&apos;s record surplus transfer of <strong>₹2,86,588 crore</strong> to the Central Government for FY26 — announced on May 22 — continues to shape the fiscal outlook as GDP and deficit numbers get recalculated this week. The RBI&apos;s gross income rose 26.42% in FY26, its balance sheet expanded 20.61% to ₹91.97 lakh crore, and the net income before risk provisions reached ₹3.95 lakh crore. The Contingent Risk Buffer was <strong>lowered to 6.5%</strong> of the balance sheet from 7.5% in FY25 — a reduction that itself contributed approximately <strong>₹1,09,380 crore</strong> to the enlarged surplus transfer (versus ₹44,862 crore in FY25).</p>

        <p>This surplus transfer counts as non-tax revenue for the Central Government. In a year where FPI outflows have pressured the rupee, disinvestment proceeds have been mixed, and the Iran oil shock has widened the current account deficit, ₹2.86 lakh crore of central bank dividend is a material fiscal buffer. It is what allows the government to avoid cutting capital expenditure in the June Budget update — a capex cut that would be the single most negative signal for infrastructure, industrials, and the broader investment cycle.</p>

        <div className="callout-green">
          <span className="c-label">The Circular Dynamic Nobody Has Written About</span>
          <p>The scale of the FY26 RBI dividend is the direct product of the RBI&apos;s active foreign exchange intervention strategy throughout the year. When the RBI sells dollars to support the rupee, it realises gains on forex reserves accumulated at lower dollar levels — those gains flow through the P&amp;L into the surplus transfer. So the same rupee weakness that is creating economic stress also generated the record dividend. The circular logic: weak rupee → RBI intervention profits → record dividend → government fiscal cushion → less pressure to cut capex or borrow more → lower G-Sec supply premium → some rupee support. It is one of the least-discussed structural features of India&apos;s macroeconomic architecture, and it partially explains why the fiscal maths has been more resilient than external observers expect.</p>
        </div>

        {/* SECTION 8 */}
        <div className="section-tag">08 &nbsp; Global Finance</div>
        <h2>US Markets at Records, India Disconnected — The Divergence Deepens</h2>

        <p>The global backdrop this week was a study in contrasts. US equity markets hit new records: the Dow Jones surged 875 points (1.73%) on Thursday June 4 to close at <strong>51,562</strong> — its highest-ever close — led by healthcare and financials (UnitedHealth +5.4%, Goldman Sachs +5.0%, Merck +4.9%). JPMorgan Chase also contributed, rising +3.3%. The S&amp;P 500 finished June 2 above 7,600 for the first time, and the Nasdaq closed at a record 27,093 on June 2. The rotation on Thursday was notable: technology underperformed while defensives and financials led — a signal of late-cycle portfolio positioning rather than broad risk appetite.</p>

        <p>The divergence between US records and Indian underperformance is now a structural phenomenon. Over the past 12 months, the Nifty 50 is down 4.66%, while US equities are at all-time highs. US corporate earnings have been supercharged by AI capex, fiscal expansion, and re-shoring investment; India has faced the oil shock, record FPI outflows, and rupee depreciation simultaneously. The US 10-year Treasury at 4.4–4.5% under Fed Chair Kevin Warsh provides no relief: elevated US rates make the case for Indian risk assets harder to sustain in dollar terms.</p>

        <div className="formula-box">
          <span className="f-label">Global Market Levels — Week of June 2–5, 2026</span>
          <span className="formula">Dow Jones: 51,562 (record, Jun 4) &nbsp;|&nbsp; S&amp;P 500: ~7,584–7,610 &nbsp;|&nbsp; Nasdaq: 27,093 (record, Jun 2)</span>
          <span className="sub">US 10-yr Treasury yield: ~4.4–4.5% under Fed Chair Kevin Warsh. No rate cuts signalled for 2026. India 10-yr G-Sec yield: ~6.4–6.5%. The ~200 bps spread should theoretically attract FPI debt flows — the new G-Sec tax exemption is designed to capitalise on this differential for long-duration foreign institutional buyers. FTSE 100 and DAX: broadly flat for the week amid oil volatility.</span>
        </div>

        {/* SECTION 9 */}
        <div className="section-tag">09 &nbsp; The Full Picture</div>
        <h2>What Changed This Week, What Persists, and What Comes Next</h2>

        <div className="stage-grid-2">
          <div className="stage-card">
            <span className="s-label">What Changed This Week</span>
            <h3>Four Genuine Developments</h3>
            <p>1. FY26 GDP confirmed at 7.7% on the new base — the macro story validated and slightly exceeded expectations, though FY27 guidance cuts the gloss. 2. RBI unanimously holds with a materially hawkish inflation revision (5.1%) and downward growth cut (6.6%) — simultaneous pressures in opposing directions that define the RBI&apos;s dilemma heading into August. 3. G-Sec FPI capital gains and interest tax abolished by ordinance — structural positive for sovereign debt market depth and FPI engagement. 4. BTA &ldquo;99% done&rdquo; per US Ambassador Gor and Trump&apos;s public endorsement — but USTR Section 301 12.5% tariff proposal creates a new counterweight that could erase most BTA gains for labour exporters.</p>
          </div>
          <div className="stage-card">
            <span className="s-label-red">What Has Not Changed</span>
            <h3>Structural Headwinds Persist</h3>
            <p>FPIs net sold ₹16,902 crore in equities in June 1–3 alone (₹21,000+ crore through June 4); ₹2.63 lakh crore YTD outflow. Rupee weakened to ₹95.65 — down ~11.5% over 12 months; structural depreciation pressure continues. Brent between $93–$98 — well above India&apos;s current account comfort zone of ~$80. Iran conflict unresolved; Lebanon ceasefire conditional and contested; Hormuz normalisation months away even in the optimistic scenario. Nifty trapped below 24,000 — the technical level for a new breakout narrative to be credible.</p>
          </div>
        </div>

        <h2 style={{ marginTop: "2.5rem" }}>The Catalysts to Watch — June and July</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">1</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>BTA Signing — Before July Deadline</h4>
              <p>&ldquo;Before July&rdquo; remains the market consensus for the formal signing of India-US Interim BTA. A joint press conference announcement would be the single most positive catalyst for export-sector stocks: pharma, IT services, textiles, gems and jewellery. Any delay beyond July would be interpreted as evidence that Section 301 complications are harder to resolve than the &ldquo;99% done&rdquo; framing suggests.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">2</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>Section 301 Resolution — The Tariff That Could Undo the Deal</h4>
              <p>The USTR&apos;s proposed 12.5% forced-labour tariff on India is now the most important bilateral trade development to watch. If resolved as part of the BTA package — dropped in exchange for Indian commitments — the net outcome is decisively positive. If imposed independently, India faces an effective 30.5% tariff, substantially worse than the pre-BTA framework and politically very difficult to explain domestically.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">3</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>Iran-Lebanon-Hormuz — The Multi-Step Chain</h4>
              <p>Lebanon ceasefire → Hezbollah stand-down → Iran-US nuclear MoU (60-day extension) → Trump approval → Hormuz navigation normalisation → tanker rerouting (60–90 days) → physical supply restoration. Each step is contested. The optimistic scenario keeps Brent in $85–$92 by Q3 (Oct–Dec 2026); the pessimistic scenario (breakdown, renewed full-scale strikes) puts Brent back above $110 and Nifty toward 22,500.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">4</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>June Budget Update — The Fiscal Glide Path Must Be Reset</h4>
              <p>The February Budget&apos;s 4.3% FY27 deficit target was set on the old GDP base and assumes nominal GDP growth of 13–14%. The RBI&apos;s own FY27 projections imply ~12% nominal growth (real 6.6% × inflation 5.1% compounded). The June Budget update must explicitly restate the target on the new 2022-23 base year or the credibility gap becomes a market risk. A transparent restatement to ~4.5–4.6% on the new base is more honest and more credible, even if less ambitious on paper.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num-wrap"><div className="step-num">5</div><div className="step-line"></div></div>
            <div className="step-body">
              <h4>Monsoon 2026 — The Variable That Overrides Everything</h4>
              <p>The IMD long-range forecast carries El Niño uncertainty. The RBI explicitly flagged it as the top domestic risk. The 5.1% FY27 inflation forecast is contingent on broadly adequate rainfall. A deficient monsoon (below 90% long-period average) hitting Kharif sowing in July–August 2026 would push food inflation above the RBI&apos;s Q3 (Oct–Dec 2026) ceiling of 5.9%, potentially forcing a rate hike signal in October — the single most negative event for rate-sensitive sectors and the investment cycle.</p>
            </div>
          </div>
        </div>

        <div className="range-box">
          <span className="r-label">The Range for July</span>
          <p>Bull case — BTA signed, Section 301 resolved, Lebanon ceasefire holds, monsoon tracking normal: Nifty at 24,500–25,000 by end-July. Base case — BTA close but unsigned, Section 301 not escalating, oil in $88–$96, monsoon broadly in-line: Nifty in 23,200–24,200 consolidation. Bear case — Section 301 tariffs imposed, monsoon deficient, Iran strikes intensify past $105 Brent: Nifty at 22,000–22,500, RBI shifts hawkish in August. The probability distribution is asymmetric: the bull case requires all catalysts to break positively simultaneously; the bear case needs only two.</p>
        </div>

        <div className="footnote">
          <strong>Sources:</strong> MoSPI (FY26 GDP PE, June 5) · Business Standard, BusinessToday, India TV News (RBI MPC June 2026, FPI flows) · ANI, Tribune India, Ministry of Finance (G-Sec tax ordinance, June 5) · Deccan Chronicle, The Week (US-India BTA, June 2–5) · BusinessUpturn, Free Press Journal (USTR Section 301, June 3) · Trading Economics, CNBC, TheStreet (Brent crude, US markets, USD/INR, June 2–5) · Republic World, Newsonair (RBI surplus transfer, May 22) · TradingView, Investing.com (Nifty/Sensex levels, June 2026)
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
