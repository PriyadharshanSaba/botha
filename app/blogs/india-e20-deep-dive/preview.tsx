import "../guide-article.css";
import "../../landing.css";
import "./india-e20-deep-dive.css";

export function Preview() {
  return (
    <>
      <div className="topbar">
        <span className="brand">Bodha Ventures</span>
        <span className="tag">Energy &amp; Policy &nbsp;|&nbsp; India — June 2026</span>
      </div>

      <div className="hero-badge">Deep Dive — What It Is, What It Costs, What Comes Next</div>

      <h1>The Fuel You<br />Never <span>Chose</span></h1>

      <div className="hero-sub">
        On April 1, 2026, every petrol pump in India changed the fuel in your tank — without a new label on the nozzle, without a public debate, and without asking. India&apos;s ethanol mandate is the most ambitious energy bet any large democracy has made in decades. It is also one that most people filling up that morning knew nothing about.
      </div>

      {/* KEY NUMBERS */}
      <div className="numbers-strip">
        <div className="num-cell">
          <span className="n">E20</span>
          <span className="nl">Mandatory at every<br />Indian pump, Apr 1 2026</span>
        </div>
        <div className="num-cell">
          <span className="n red">50–100</span>
          <span className="nl">E85/E100 stations<br />open, June 2026</span>
        </div>
        <div className="num-cell">
          <span className="n green">~20 BL</span>
          <span className="nl">Installed annual<br />ethanol capacity</span>
        </div>
        <div className="num-cell">
          <span className="n">₹82–87</span>
          <span className="nl">E100 pump price<br />vs. ₹105–110 petrol</span>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="section-tag">01 &nbsp; The Opening Scene</div>
      <h2>April 1, and Nobody Told You</h2>

      <p className="dark">The morning of April 1, 2026 looked like any other at India&apos;s 80,000-odd petrol pumps. The nozzle handles were the same colour. The digital display showed the same format. The attendant wiped the windscreen in the same routine motion. What had changed — silently, by government mandate — was everything going into your tank. From that morning, every litre of petrol sold anywhere in India contained 20% ethanol. No new label. No advisory to older vehicle owners. No lower-blend option at any pump for anyone who wanted it.</p>

      <p>This was not an accident of communication. It was a deliberate policy design — a top-down mandatory switch that replaced the voluntary blending programme India had been running, largely unsuccessfully, since 2003. The government had tried asking nicely for twenty years. The blending rate had stuck below 3% for most of that time. So they stopped asking.</p>

      <p>Sixty-four days later, on June 4, two events in New Delhi were staged for maximum symbolism. Maruti Suzuki launched the Wagon R Flex Fuel — India&apos;s first mass-market car capable of running on pure ethanol — in the presence of two Union Ministers. The next morning, Hero MotoCorp launched the Splendor Plus and HF Deluxe as India&apos;s first flex-fuel commuter motorcycles. The cars gleamed. The ministers spoke in television-ready soundbites about India&apos;s clean energy future.</p>

      <p>What those launches also revealed — buried in the fine print — is how early in the story India actually is. And how many unresolved questions that story contains.</p>
    </>
  );
}
