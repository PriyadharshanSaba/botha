import "./article.css";
import "../../landing.css";

export function Preview() {
  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <span className="brand">Currency Analysis</span>
        <span className="tag">India Macro · June 2026 · ~11 min read</span>
      </div>

      {/* HERO */}
      <div className="hero-badge">In Depth — What Happened, Why It Matters, What Comes Next</div>

      <h1>The Rupee&apos;s<br /><span>Long Descent</span></h1>

      <div className="hero-sub">
        From ₹45 to ₹95 in two decades — and the slide accelerating. A deep investigation into why India&apos;s currency keeps losing ground, how it compares to the rest of the world, and why the official reassurances no longer fully hold.
      </div>

      {/* STAT ROW */}
      <div className="stat-row">
        <div className="stat-cell">
          <span className="big red">~9%</span>
          <span className="lbl">1-Year Fall<br />Jun 2025 → Jun 2026</span>
        </div>
        <div className="stat-cell">
          <span className="big red">~27%</span>
          <span className="lbl">5-Year Fall<br />Jun 2021 → Jun 2026</span>
        </div>
        <div className="stat-cell">
          <span className="big red">~42%</span>
          <span className="lbl">10-Year Fall<br />Jun 2016 → Jun 2026</span>
        </div>
        <div className="stat-cell">
          <span className="big gold">₹96.82</span>
          <span className="lbl">Record Low<br />Hit in May 2026</span>
        </div>
      </div>

      {/* EXECUTIVE SUMMARY */}
      <div className="callout">
        <span className="c-label">The Story in Brief</span>
        <p>The Indian rupee has lost roughly <strong>42% of its value against the US dollar over the past decade</strong> — a slide that has gathered pace, not slowed. The causes are structural and chronic: a persistent current account deficit, an economy that imports 85% of its oil, and an inflation rate consistently above that of India&apos;s trading partners. The RBI has intervened on an extraordinary scale — burning through <strong>over $47 billion in reserves</strong> since the February 2026 peak — but cannot permanently reverse the gravity of economics.</p>
        <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>What makes the current episode more troubling than past ones is this: the rupee kept falling even <em>after</em> the US Federal Reserve began cutting rates in late 2024. That decoupling signals something important — India&apos;s currency weakness is no longer just imported from Washington. It now has a structural engine of its own. This is what the Finance Ministry&apos;s reassurances don&apos;t quite address, and what this analysis seeks to explain.</p>
      </div>

      {/* SECTION 1 */}
      <div className="section-tag">01 &nbsp; The Number That Should Startle You</div>
      <h2>A New Normal Nobody Is Alarmed By</h2>

      <p>On a Monday morning in May 2026, the rupee briefly touched <strong>₹95.80 to the dollar</strong> on May 13 — a fresh all-time low. Within days, it pushed further, touching a record of ₹96.82. And in a country of 1.4 billion people, in a week full of IPL scores, election analysis, and Sensex updates, it barely made the front page. That normalisation — the collective shrug at a historic slide — is itself part of the story.</p>

      <p>Go back ten years. In June 2016, the exchange rate was around <strong>₹67 to the dollar</strong>. That means a dollar cost 42% fewer rupees then than it does today. This is not a rounding error, a recessionary blip, or a temporary market panic. It is a slow, structural, and sustained devaluation of Indian purchasing power in global terms — a quiet tax on every Indian who saves in rupees and spends in the world.</p>

      <div className="formula-box">
        <span className="f-label">The Silent Tax on Every Indian Family</span>
        <span className="formula">₹10 lakh sent abroad in 2016 (at ₹68/$) → $14,700 received</span>
        <span className="sub">The same ₹10 lakh in 2026 (at ₹95/$) → $10,500 received. A purchasing-power loss of approximately $4,200 per transaction — a silent, recurring penalty paid by every family with overseas education expenses, dollar-denominated obligations, or foreign travel plans.</span>
      </div>

      <p>These figures use RBI reference rates cross-checked against BIS and Bloomberg data. But raw nominal numbers alone don&apos;t tell the complete story. India&apos;s <strong>Real Effective Exchange Rate (REER)</strong> — which adjusts for inflation differentials against trading partners — shows a depreciation of roughly <strong>10–12% over the same decade</strong>, considerably less than the nominal 42%. This is because India&apos;s higher domestic inflation partially offsets the purchasing power loss that the nominal rate suggests.</p>

      <p>That distinction matters — but it doesn&apos;t make the nominal slide inconsequential. Imports are priced in dollars, not REER units. And for India, which imports far more than it exports in goods terms, the nominal rate is the one that matters in practice.</p>

      {/* SECTION 2 */}
      <div className="section-tag">02 &nbsp; Why the Rupee Falls</div>
      <h2>The Architecture of Weakness</h2>

      <p>Currency depreciation is rarely a single-cause event. It is better understood as a confluence — a river fed by multiple tributaries, some structural and centuries-slow, others sudden and external. The rupee&apos;s slide reflects all of these.</p>

      <div className="steps">
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">1</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>The Dollar&apos;s Dominance — The External Trigger</h4>
            <p>The most immediate cause of rupee weakness between 2022 and 2025 was the Federal Reserve&apos;s most aggressive rate-hiking cycle in four decades — raising its benchmark rate from near-zero to a 23-year high of 5.25–5.5% between March 2022 and July 2023. Capital flows toward yield. The DXY index surged roughly <strong>8% over calendar year 2022</strong> (touching an intra-year peak gain of nearly 19%). Every emerging-market currency felt this gravity — Turkey, Brazil, South Africa, Indonesia all weakened in tandem. The rupee was not special in suffering; it was part of a global current. What distinguishes it is what happened next: even as the Fed began cutting in late 2024, the rupee kept falling.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">2</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>India&apos;s Chronic Current Account Deficit — The Structural Core</h4>
            <p>A current account deficit means a country is spending more dollars buying from the world than it earns selling to it. India has run such a deficit for most of the past two decades, averaging around <strong>1.5–2% of GDP</strong> over the past ten years. In FY2023, when Russia&apos;s invasion of Ukraine sent commodity prices spiking, the deficit blew out to a record <strong>4.4% of GDP in a single quarter</strong>. India&apos;s merchandise trade deficit reached an all-time high of <strong>$265 billion in FY2023</strong> and is estimated near <strong>$270 billion in FY2025</strong>. Total services exports reached $387.5 billion in FY2025 — of which the tech sector alone contributed $224 billion — and partially offset the goods deficit. But the gap is simply too wide for services to bridge entirely.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">3</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>Oil: India&apos;s Deepest Structural Vulnerability</h4>
            <p>India imports approximately <strong>85% of its crude oil</strong>, making it the world&apos;s third-largest oil importer. Crude alone accounts for roughly <strong>20–22% of India&apos;s total import bill</strong>. When Brent surged from $75/barrel in late 2021 to over $120/barrel in mid-2022, India&apos;s import bill ballooned — requiring more dollars to pay for the same barrels. LNG, coal, fertilisers, and edible oil compound this structural vulnerability to global commodity cycles. Until India&apos;s renewable energy transition meaningfully reduces import volumes — a process that will take at minimum another decade — oil will remain the single biggest anchor dragging on the rupee.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">4</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>FPI Outflows and the Fickle Capital Account</h4>
            <p>Foreign Portfolio Investors are India&apos;s most mercurial source of dollar inflows. When they buy Indian equities and bonds, they bring dollars in; when they sell, they take dollars out. In calendar year 2022, FPIs sold a net <strong>₹1.21 trillion (~$14.8 billion)</strong> of Indian equities. Calendar year 2025 was worse: equity outflows reached <strong>₹1.6 trillion (~$18.4 billion)</strong> — the highest since 2022. Each wave of selling means a surge in dollar demand that directly pressures the exchange rate. Unlike FDI — which is slow, deliberate, and long-term — FPI flows can reverse in days, making them an inherently unstable source of dollar support for any emerging market currency.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">5</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>The Inflation Mathematics That Makes Depreciation Inevitable</h4>
            <p>This is the least dramatic cause but perhaps the most structurally important. Purchasing Power Parity holds that exchange rates adjust over the long run to equalise price levels across countries. India&apos;s retail inflation has consistently run at <strong>4–6%</strong> over the past decade — approximately 2–3 percentage points above US inflation in normal times. Over ten years, that differential compounds. The RBI&apos;s own mandate to target <strong>4% CPI inflation (±2%)</strong> means that some nominal exchange rate depreciation is structurally baked in — it is not a failure of policy, it is arithmetic. The rupee at ₹95 partly reflects the fact that Indian goods and services have become relatively more expensive in rupee terms, and the exchange rate adjusts to compensate.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-num-wrap"><div className="step-num">6</div><div className="step-line"></div></div>
          <div className="step-body">
            <h4>The RBI&apos;s Managed Float — A Stabiliser, Not a Solution</h4>
            <p>India officially operates a <strong>managed floating exchange rate</strong> — the RBI intervenes regularly, using foreign exchange reserves to smooth excessive volatility. Reserves peaked at approximately <strong>$645 billion in October 2021</strong>, fell sharply to ~<strong>$524 billion by October 2022</strong> as the RBI defended the rupee against the Fed&apos;s hiking cycle, then rebuilt to an all-time record of <strong>$728.49 billion in late February 2026</strong>. But intervention has its limits: reserves slid to ~<strong>$681 billion by late May 2026</strong> — a drawdown of over <strong>$47 billion</strong> in roughly 12 weeks as the RBI sold dollars aggressively to keep the slide orderly. The buffer is real and substantial. But it is finite.</p>
          </div>
        </div>
      </div>

      <div className="callout">
        <span className="c-label">The Uncomfortable Paradox</span>
        <p>&quot;The rupee doesn&apos;t always weaken because India is failing. It weakens partly because India is growing — and growing economies that import capital and energy tend to have softer currencies. A rapidly industrialising country consumes more oil, more capital goods, more raw materials. All of that requires dollars.&quot; The uncomfortable addendum: a 42% fall over ten years is in a different category from a routine development-era drift. At some point, quantity becomes quality.</p>
      </div>

      {/* SECTION 3 */}
      <div className="section-tag">03 &nbsp; Who Pays the Price</div>
      <h2>How the Rupee&apos;s Slide Lands on Real People</h2>

      <p>Exchange rates are not abstract financial statistics. Their consequences arrive in supermarket aisles, fuel receipts, university fee invoices, and medicine cabinets. A weaker rupee is not simply a macroeconomic problem — it is redistributive. It takes purchasing power from some and gives it to others, often with little transparency about who wins and who loses.</p>

      <div className="stage-grid-2">
        <div className="stage-card">
          <span className="s-label-red">Hurts</span>
          <h3>Import Inflation</h3>
          <p>A weaker rupee directly inflates the rupee cost of edible oils, electronics, capital goods, and pharmaceutical inputs. The RBI estimates that a <strong>5% rupee depreciation</strong> adds roughly <strong>20–25 basis points of inflation</strong> through direct and indirect channels. Over multiple years of sustained depreciation, these effects accumulate silently.</p>
        </div>
        <div className="stage-card">
          <span className="s-label-red">Hurts</span>
          <h3>The Overseas Education Tax</h3>
          <p>A US master&apos;s programme costing $60,000 required <strong>₹41 lakh</strong> at 2016 rates. At 2026 rates, the same degree costs <strong>₹57 lakh</strong> — a ~42% increase with zero change in dollar cost. For middle-class families, this is often the difference between going and staying back.</p>
        </div>
        <div className="stage-card">
          <span className="s-label">Helps</span>
          <h3>IT &amp; Export Sector</h3>
          <p>India&apos;s tech sector exported <strong>$224 billion in FY2025</strong>. These companies earn in dollars and pay employees in rupees — a direct tailwind from depreciation. A 5% fall in the rupee adds roughly 5% to rupee-denominated revenues. Pharma and textiles benefit similarly, though partly offset by costlier imported inputs.</p>
        </div>
        <div className="stage-card">
          <span className="s-label-gold">Mixed</span>
          <h3>Government Finances</h3>
          <p>A weaker rupee inflates the rupee cost of the oil import bill and pressures oil marketing companies. India&apos;s external debt — around <strong>19% of GDP</strong> — also becomes more expensive to service. Conversely, customs revenues in rupee terms rise, and remittances from the Indian diaspora are worth more when converted.</p>
        </div>
      </div>

      <div className="callout-red">
        <span className="c-label">The Middle-Class Penalty</span>
        <p>The finance ministry&apos;s reassurances tend to emphasise the export sector&apos;s gains. What they underemphasise is who bears the cost. It is not the IT professional or the exporter — it is the retiree whose savings lose global purchasing power, the family sending money for a child&apos;s foreign education, the small business that imports components. These people do not hedge in the currency market. They absorb the loss in full, silently, every year.</p>
      </div>
    </>
  );
}
