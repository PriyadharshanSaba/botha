import "server-only";
import "../guide-article.css";
import "../../landing.css";
import "./india-e20-deep-dive.css";

export function Gated() {
  return (
    <>
      {/* SECTION 2 */}
      <div className="section-tag">02 &nbsp; The Terminology, Demystified</div>
      <h2>E20, E85, E100 — What Each One Actually Means</h2>

      <p>The terminology has been used loosely in media coverage, sometimes deliberately. Here is what each designation means with no ambiguity — and crucially, what is and is not available in India right now.</p>

      <div className="blend-grid">
        <div className="blend-card">
          <div className="blend-label">E20</div>
          <div>
            <h4>In Your Tank Right Now</h4>
            <p>20% ethanol, 80% petrol. Mandatory at every Indian pump since April 1, 2026. No opt-out, no lower-blend alternative anywhere in the country. Your existing vehicle runs on this whether it was designed to or not. The mandatory minimum RON of 95 partly offsets the energy deficit for modern engines.</p>
          </div>
          <span className="blend-pill pill-gold">Mandatory Nationwide</span>
        </div>
        <div className="blend-card">
          <div className="blend-label green">E85</div>
          <div>
            <h4>The Flex-Fuel Standard — Just Launched</h4>
            <p>85% ethanol, 15% petrol. Requires a purpose-built flex-fuel engine with ethanol-rated components throughout. The Hero Splendor/HF Deluxe and Maruti Wagon R Flex Fuel are both rated E20–E85. Available at 50–100 dedicated stations in Delhi-NCR, Pune, Mumbai, and Nagpur as of June 2026. Nowhere else.</p>
          </div>
          <span className="blend-pill pill-green">Pilot — 4 Cities</span>
        </div>
        <div className="blend-card">
          <div className="blend-label red">E100</div>
          <div>
            <h4>The Destination — Not Yet a Reality</h4>
            <p>99.5%+ anhydrous ethanol, with a co-solvent for cold-start performance and a dye added so the flame is visible (ethanol burns nearly invisible — a fire safety issue). The Wagon R can technically run on E100 but is homologated to E85. True E100 public infrastructure: effectively zero. The 50–100 stations are likely dispensing E85. Headlines calling India&apos;s new vehicles &ldquo;E100 cars&rdquo; are technically defensible and operationally misleading.</p>
          </div>
          <span className="blend-pill pill-red">Not Yet Real</span>
        </div>
      </div>

      <div className="callout">
        <span className="c-label">Why the E85 / E100 Confusion Matters</span>
        <p>E85 and E100 have different production requirements (E100 needs an extra dehydration step), different cold-start challenges, and different infrastructure demands. Multiple news outlets described the Hero bikes as &ldquo;E100 motorcycles.&rdquo; They are not — they are rated to E85. The Wagon R was launched as India&apos;s &ldquo;E100 vehicle&rdquo; while certified only to E85. This precision erosion makes the rollout appear more advanced than it is and sets up a credibility gap when the infrastructure reality becomes visible to early buyers.</p>
      </div>

      {/* SECTION 3 */}
      <div className="section-tag">03 &nbsp; How the Rest of the World Does It</div>
      <h2>Every Other Country Kept the Ladder. India Removed the Rungs.</h2>

      <p>In every major country that uses ethanol blending, consumers retain a choice. This is not coincidental — it reflects both engineering reality (older vehicles cannot safely run high-ethanol blends) and a political instinct that fuel is personal enough to deserve alternatives. India broke from this consensus entirely.</p>

      <table className="comp-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Standard blend</th>
            <th>Lower blend still available?</th>
            <th>High blend option?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USA</td>
            <td>E10 (standard)</td>
            <td className="t-green">Yes — E0 for small engines, boats, classics</td>
            <td className="t-green">E15, E85 at flex-fuel stations</td>
          </tr>
          <tr>
            <td>European Union</td>
            <td>E10 (standard)</td>
            <td className="t-green">Yes — E5 kept for older incompatible vehicles</td>
            <td className="t-gold">E85 in Sweden, France (niche)</td>
          </tr>
          <tr>
            <td>Brazil</td>
            <td>E27 (mandatory base)</td>
            <td className="t-gold">Petrol available alongside ethanol</td>
            <td className="t-green">E100 at all pumps nationwide</td>
          </tr>
          <tr>
            <td>Thailand</td>
            <td>E10–E20 (varies)</td>
            <td className="t-green">Multiple grades on offer</td>
            <td className="t-gold">E85 at select stations</td>
          </tr>
          <tr className="india-row">
            <td>India</td>
            <td>E20 (mandatory)</td>
            <td className="t-red">No — E10/E5 no longer available anywhere</td>
            <td className="t-gold">E85 at 50–100 locations only</td>
          </tr>
        </tbody>
      </table>

      <p>In the US, ethanol-free E0 is actively sold for boat engines, lawnmowers, and classic cars — all applications where ethanol&apos;s hygroscopic and corrosive properties cause serious damage over time. In Europe, E5 was kept alongside E10 specifically to protect owners of older vehicles not rated for higher blends. Both regions label every pump clearly with its ethanol content, mandated by law, so no driver is ever unaware of what they are buying.</p>

      <div className="callout-red">
        <span className="c-label">The Missing Rung — Who Actually Bears the Cost</span>
        <p>Removing lower-blend options does not hurt new vehicle owners — cars from 2023 onward are E20-rated from the factory. It hurts owners of older two-wheelers, small engines, and carbureted vehicles. These are disproportionately lower-income owners: the daily-wage commuter, the small-town mechanic, the farmer running an irrigation pump. They received the mandate&apos;s costs with none of its stated benefits. No compensation was announced. No advisory was issued. The nozzle looked the same on April 1.</p>
      </div>

      {/* SECTION 4 */}
      <div className="section-tag">04 &nbsp; The Damage Nobody Sees Coming</div>
      <h2>What Ethanol Does to an Engine That Wasn&apos;t Designed for It</h2>

      <p className="dark">The damage is not dramatic. It does not happen overnight. That is precisely what makes it so insidious — by the time an owner notices, the corrosion has been accumulating for months.</p>

      <p>Ethanol is a solvent. Not in the vague, metaphorical sense — but in the literal, chemical sense: it dissolves rubber. Fuel hoses, O-rings, gaskets, and seals throughout an older engine&apos;s fuel system were specified to tolerate E5 or E10. At E20, many begin a slow process of swelling, softening, and cracking. The engine does not cough or stall immediately. It just quietly degrades — a weeping seal here, a hardened O-ring there — until one day you are at a mechanic and he is pointing at your fuel line with that look on his face.</p>

      <p>Carbureted two-wheelers are the most exposed segment in India&apos;s fleet. They use proportionally more rubber per displacement than fuel-injected cars. Their carburettor jets are narrow and intolerant of contamination. Their owners are least likely to notice gradual performance loss until it becomes a repair bill. A 2012 Bajaj Pulsar or a 2009 Hero Splendor running daily on E20 is not going to seize up next week. But its seals are already working harder than they were designed to. Its fuel filter is catching deposits the manufacturer never anticipated. Its carburettor float chamber is handling a fuel that gently etches the materials around it, every single day.</p>

      <div className="callout-red">
        <span className="c-label">The Water Problem — Phase Separation</span>
        <p>Ethanol actively draws atmospheric moisture into the fuel tank. Over time, the ethanol-water mix turns mildly acidic — corroding aluminium components, steel fuel lines, and iron fittings in ways petrol alone never would. If a vehicle sits unused for a week or two, and the ethanol-water concentration crosses a threshold, phase separation occurs: ethanol and water separate from the petrol and settle at the tank&apos;s bottom as a near-unburnable, corrosive layer. Start the engine on that, and it misfires, runs rough, or stalls. The owner thinks something is wrong with the engine. Something is. It is the fuel nobody told them had changed.</p>
      </div>

      <div className="data-box">
        <span className="d-label">Energy Content — What Ethanol Blending Costs in Mileage</span>
        <span className="d-main">E0: 8.9 kWh/L &nbsp;→&nbsp; E20: ~8.4 kWh/L (−5.6%) &nbsp;→&nbsp; E85: ~6.6 kWh/L (−26%) &nbsp;→&nbsp; E100: ~6.1 kWh/L (−31%)</span>
        <span className="d-sub">A LocalCircles survey of 50,000+ vehicle owners post-April 1 found 1 in 2 reporting reduced mileage, with 25% reporting drops exceeding 20%. Engines calibrated for E5/E10 take the full hit. Modern E20-rated engines recover some loss via higher compression and adaptive ignition — but the energy deficit cannot be engineered away entirely.</span>
      </div>

      {/* SECTION 5 */}
      <div className="section-tag">05 &nbsp; The Food and Water Bill</div>
      <h2>The Costs Nobody Mentions in the Ministerial Press Conference</h2>

      <p>Ethanol does not appear from nowhere. It is grown, fermented, and distilled from crops that also feed people, feed livestock, and consume water that aquifers took centuries to accumulate. At the blending volumes India has now reached, these trade-offs are no longer theoretical.</p>

      <div className="cost-grid">
        <div className="cost-card">
          <span className="cc-label">Water</span>
          <h3>2,860 Litres Per Litre of Ethanol</h3>
          <p>Every litre of ethanol from sugarcane requires approximately 2,860 litres of water. Sugarcane is concentrated in Maharashtra and Karnataka — states already in persistent drought stress, already drawing down aquifers built over centuries. Scaling to E85 volumes amplifies this draw with no publicly quantified aquifer impact assessment.</p>
        </div>
        <div className="cost-card">
          <span className="cc-label">Maize Diversion</span>
          <h3>29% of the Harvest Now Fuels Engines</h3>
          <p>Maize acreage grew from 9.9M hectares (2020–21) to 13.7M hectares (2024–25), driven by high government ethanol procurement prices. Nearly 29% of India&apos;s maize crop now feeds distilleries. Poultry feed costs have risen directly, pushing up egg and milk prices — the protein base for hundreds of millions of diets.</p>
        </div>
        <div className="cost-card">
          <span className="cc-label">Crop Displacement</span>
          <h3>Pulses and Oilseeds Losing Ground</h3>
          <p>Farmers switching to maize for ethanol returns are switching away from pulses and oilseeds — crops India already imports heavily. Edible oil import dependence already exceeds 60%. Each hectare converting from groundnut to maize for fuel deepens a food import dependency that costs India billions in forex annually.</p>
        </div>
        <div className="cost-card">
          <span className="cc-label">Rice Stockpiles</span>
          <h3>5.2 Million MT from Food Reserves to Engines</h3>
          <p>India allocated 5.2 million metric tonnes of rice from state stockpiles for ethanol in 2024–25. This is the strategic reserve — the buffer meant to feed people when monsoons fail. Former agriculture officials have noted publicly that much of this was fit for consumption and would otherwise have entered the public distribution system.</p>
        </div>
      </div>

      <div className="callout">
        <span className="c-label">The Government&apos;s Answer — And Why It Is Only Partial</span>
        <p>The official response has three parts: maize ethanol produces DDGS (a protein-rich byproduct that partly replaces the diverted grain in poultry feed); second-generation biofuels from agricultural waste will eventually sidestep food-vs-fuel entirely; and the programme supports rural farmer income. All three are true in some degree. None fully accounts for the costs falling on the poultry farmer, the PDS-dependent household, or the drought-stressed aquifer — all of whom were given no vote on the policy and no compensation in its design.</p>
      </div>

      {/* SECTION 6 */}
      <div className="section-tag">06 &nbsp; The Launches — Honestly</div>
      <h2>The Wagon R and the Splendor: What They Are, What They Are Not</h2>

      <p className="dark">The June 4–5 launches were genuine engineering milestones. They were also, in the government&apos;s own ministers&apos; language, described in terms that stretched the reality of what is currently accessible.</p>

      <p><strong>Maruti Wagon R Flex Fuel</strong> (launched June 4) is India&apos;s first mass-market flex-fuel car. The modified K12N 1.2L engine comes with upgraded injectors, a new fuel pump, ethanol-rated fuel lines, and a real-time ethanol concentration sensor that adjusts ECU maps on the fly. It runs on E20 to E100, homologated to E85 in certified operation. Prices not yet announced; industry estimates a ₹50,000–70,000 premium over the standard petrol variant. Maruti&apos;s own executives at an investor call days before the launch: &ldquo;minimal volumes initially, meaningful volumes 5–10 years from now.&rdquo;</p>

      <p><strong>Hero Splendor Plus &amp; HF Deluxe Flex Fuel</strong> (launched June 3–4) are India&apos;s first flex-fuel commuter motorcycles. The 97.2cc engine received 36 mechanical changes: new fuel pump, secondary fuel filter, recalibrated ECU. Rated E20–E85 — not E100. Splendor priced at ₹82,710; HF Deluxe at ₹72,792 (ex-showroom, Delhi). On sale in Delhi and select Maharashtra regions from July 2026 only — not nationwide. The Splendor family accounts for roughly 1 in 3 motorcycles on Indian roads; the flex-fuel variant will be a small fraction of that for years.</p>

      <div className="data-box">
        <span className="d-label">The Infrastructure Gap — In Numbers</span>
        <span className="d-main">50–100 ethanol stations open now &nbsp;|&nbsp; Target: 500 by Dec 2026 &nbsp;|&nbsp; Target: 5,000 by end-2027</span>
        <span className="d-sub">India has ~80,000 petrol retail outlets. Getting from 50–100 to 5,000 in 18 months requires opening approximately 20 new dedicated ethanol stations every week — each requiring separate storage tanks, corrosion-resistant pipelines, and anhydrous ethanol supply chain logistics. Each is a capital investment, not a nozzle change. This pace has never been attempted in India&apos;s fuel retail history.</span>
      </div>

      {/* SECTION 7 */}
      <div className="section-tag">07 &nbsp; The Brazil Comparison</div>
      <h2>What Ministers Quote — and What the Data Actually Shows</h2>

      <p>Brazil appears in nearly every ministerial speech on Indian ethanol. The comparison is instructive — but not in the way it is usually deployed.</p>

      <p>Brazil introduced neat ethanol at pumps in 1975. That was fifty-one years ago. By 2025, flex-fuel vehicles made up 74.4% of all new light-vehicle registrations. Brazil&apos;s standard pump fuel is E27 and rising. The country built this over five decades through oil shocks, currency crises, and multiple governments. Its sugarcane belt has world-leading water efficiency — yields roughly double India&apos;s, grown in a climate that doesn&apos;t directly compete with food staple crops the way Maharashtra and Karnataka sugarcane does.</p>

      <div className="callout-green">
        <span className="c-label">The One Rule Brazil Teaches That India Must Follow</span>
        <p>For consumers to voluntarily choose high-ethanol fuel despite the mileage penalty, ethanol must be priced at or below 70% of the petrol price per litre — the so-called &ldquo;70% rule.&rdquo; At India&apos;s current ₹82–87/L for E100 versus ₹105–110/L for petrol in metros, India is approximately in this window today. But OMC pricing is politically managed, state taxes vary, and feedstock costs swing with harvests. The moment the spread narrows, voluntary adoption stalls. Brazil has built a taxation architecture that enforces this spread structurally. India has not yet done so.</p>
      </div>

      <div className="callout-red">
        <span className="c-label">The Crucial Difference Brazil&apos;s Advocates Don&apos;t Mention</span>
        <p>Brazil kept petrol available alongside ethanol throughout its transition. Consumers could always switch back if the price spread didn&apos;t work. India&apos;s E20 mandate removed the lower-blend option entirely — on Day One, for all 300 million-plus vehicles simultaneously, regardless of age or design. Brazil&apos;s transition became popular partly because it was voluntary at the point of purchase. India&apos;s has not had that opportunity to earn the same legitimacy.</p>
      </div>

      {/* SECTION 8 */}
      <div className="section-tag">08 &nbsp; The Honest Verdict</div>
      <h2>Good Policy or Bad? It Depends Entirely on Which Indian You Are</h2>

      <div className="verdict-grid">
        <div className="verdict-card">
          <span className="v-label for">The Case For</span>
          <h3>Real Benefits That Are Not Trivial</h3>
          <p>India imports ~90% of its crude oil. E20 displaces billions of dollars of crude annually — money that stays with Indian farmers instead of Gulf exporters. The lifecycle emission reduction at E20 is real: 30–50% lower per km than pure petrol. A voluntary programme had already failed for twenty years. The forex savings run to tens of thousands of crore rupees annually. The target was met ahead of the original 2030 deadline, proving policy-led transformation is possible at India&apos;s scale.</p>
        </div>
        <div className="verdict-card">
          <span className="v-label against">The Case Against</span>
          <h3>Costs That Fall on Specific People</h3>
          <p>Owners of older vehicles absorbed mileage loss and accelerating component wear with zero warning or compensation. Poultry farmers and low-income food buyers absorbed higher protein costs. Drought-stressed aquifers absorbed higher water demand. PDS-dependent households absorbed rice diverted from food stockpiles to distilleries. None of these groups were consulted. None received offsetting benefits. The policy&apos;s gains were national and diffuse; its costs were specific and concentrated.</p>
        </div>
      </div>

      <div className="scenarios">
        <span className="s-head">The Decade Ahead — Three Scenarios</span>
        <div className="scenario">
          <span className="scenario-label sc-bull">Bull Case</span>
          <p>2G biofuels from agricultural waste scale commercially by 2029–30, removing the food-vs-fuel tension entirely. The pricing spread holds. Fleet replacement accelerates. 5,000 stations are built on schedule. India achieves E85 as a national norm by 2032–35 — compressing Brazil&apos;s 50-year arc into 15.</p>
        </div>
        <div className="scenario">
          <span className="scenario-label sc-base">Base Case</span>
          <p>India maintains E20 nationally, builds E85 slowly in surplus states, achieves meaningful flex-fuel volumes around 2030–33, and debates the food-water trade-offs every Budget cycle without resolving them. The 5,000 station target slips to 2030. The E100 ambition stays a ministerial talking point for most of the decade.</p>
        </div>
        <div className="scenario">
          <span className="scenario-label sc-bear">Bear Case</span>
          <p>Pricing spread collapses in a bad sugarcane year. Maize diversion pushes food inflation above political tolerance. Aquifer stress in Maharashtra triggers water restrictions that cut ethanol supply. The infrastructure build stalls. The flex-fuel Wagon Rs gather dust in showrooms while the country debates rolling back the mandate.</p>
        </div>
      </div>

      <hr />

      <p className="e20-pullquote">Every other country that has attempted an ethanol transition kept lower-blend options available at the pump while higher blends scaled up. The US still sells E0. Europe kept E5 alongside E10. Brazil kept petrol. India mandated a single blend for 1.4 billion people on Day One and called it progress. It might be. Ask again in ten years — and bring a receipt for your fuel costs.</p>

      <div className="footnote">
        <strong>Sources:</strong> DriveSpark, Drishti IAS, BusinessToday (E20 mandate, April 2026) · Maruti Suzuki Press Release, Autocar India, CarDekho, Gogi.in (Wagon R Flex Fuel launch, June 4, 2026) · Motoroids, Autocar India, ZigWheels, DriveSpark (Hero Splendor / HF Deluxe Flex Fuel, June 3–4, 2026) · PTI, ETV Bharat, PSU Watch, The Federal (Minister Puri on ethanol stations, June 4, 2026) · Business Standard (E100 infrastructure readiness, June 2026) · Republic World (E85/E100 explained, June 7, 2026) · US DOE AFDC (ethanol blend definitions) · IEA-AMF (compatibility, E85 data) · Lantmännen Biorefineries (European E5/E10 framework) · Economic Survey 2025–26 (maize acreage, food diversion figures) · LocalCircles survey (post-E20 mileage impact, 50,000+ vehicle owners)
        <br /><br /><strong>Disclaimer:</strong> The views expressed in this piece are the author&apos;s personal opinions for educational purposes only and should not be construed as investment, financial, or policy advice. Readers should conduct their own research before making any decisions based on the above.
      </div>
    </>
  );
}
