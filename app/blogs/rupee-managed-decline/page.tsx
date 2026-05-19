"use client";

import "./article.css";
import "../../landing.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import TermsModal from "../../components/TermsModal";
import PrivacyModal from "../../components/PrivacyModal";

export default function RupeeArticlePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    fetch("/api/me").then(r => r.json()).then(d => setLoggedIn(d.loggedIn));
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) setAccountOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    setLoggedIn(false);
    router.push("/");
    router.refresh();
  }

  return (
    <div className="blog-article-page">
      {/* ── NAV ── */}
      <nav className="landing-nav">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-2.jpeg" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
        </Link>
        {loggedIn ? (
          <div className="about-nav-right">
            <Link href="/modules" className="about-nav-link">{t("courses")}</Link>
            <Link href="/vcfo" className="about-nav-link">{t("virtualCfo")}</Link>
            <Link href="/venture" className="about-nav-link">{t("ventureCapital")}</Link>
            <Link href="/tools" className="about-nav-link">{t("tools")}</Link>
            <Link href="/blogs" className="about-nav-link" style={{ color: "var(--gold)" }}>{t("insights")}</Link>
            <Link href="/about" className="about-nav-link">{t("aboutUs")}</Link>
            <div className="about-account-wrapper" ref={accountRef}>
              <button className="about-account-btn" onClick={() => setAccountOpen(!accountOpen)}>
                {t("account")}
                <span className={`about-account-arrow ${accountOpen ? "open" : ""}`}>&#9662;</span>
              </button>
              {accountOpen && (
                <div className="about-account-dropdown">
                  <button className="about-dropdown-item" onClick={() => { setLang(lang === "en" ? "kn" : "en"); setAccountOpen(false); }}>
                    {lang === "en" ? "ಕನ್ನಡ" : "English"}
                  </button>
                  <Link href="#" className="about-dropdown-item" onClick={() => setAccountOpen(false)}>{t("settings")}</Link>
                  <button className="about-dropdown-item about-dropdown-logout" onClick={() => { setAccountOpen(false); handleLogout(); }}>
                    {t("logout")}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <ul className="nav-links">
              <li><Link href="/modules">Courses</Link></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/blogs" style={{ color: "var(--gold)" }}>Blogs</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
            <div className="nav-cta">
              <Link href="/signin" className="btn-ghost">Sign In</Link>
              <span style={{ color: "rgba(0,0,0,0.15)", fontSize: 18 }}>|</span>
              <Link href="/signin" className="btn-primary">Sign Up</Link>
            </div>
          </>
        )}
      </nav>

      {/* ── BACK LINK ── */}
      <div className="blog-back-bar">
        <Link href="/blogs" className="blog-back-link">&#8592; All articles</Link>
      </div>

      {/* ── ARTICLE ── */}
      <article className="blog-post-body">

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

        {/* SECTION 2 */}
        <div className="section-flag">
          <span className="num">02</span>
          <span className="label">The long view</span>
        </div>
        <h2>A slow fall that has become a faster one</h2>

        <p>The rupee&apos;s decline against the dollar is not new. Since India liberalised its economy in 1991, the rupee has fallen at roughly 4.5% per year on average, from ₹17 per dollar then to ₹93 today. What&apos;s changed is the pace and the context.</p>

        <div className="timeline-wrap">
          <div className="timeline-head">Rupee per US Dollar: Historical Rate</div>
          <div className="tl-row"><span className="tl-year">1991</span><div className="tl-bar-bg"><div className="tl-bar-fill" style={{ width: "18%" }} /></div><span className="tl-val">₹17 / $1</span></div>
          <div className="tl-row"><span className="tl-year">2000</span><div className="tl-bar-bg"><div className="tl-bar-fill" style={{ width: "47%" }} /></div><span className="tl-val">₹44 / $1</span></div>
          <div className="tl-row"><span className="tl-year">2010</span><div className="tl-bar-bg"><div className="tl-bar-fill" style={{ width: "48%" }} /></div><span className="tl-val">₹45 / $1</span></div>
          <div className="tl-row"><span className="tl-year">2015</span><div className="tl-bar-bg"><div className="tl-bar-fill" style={{ width: "67%" }} /></div><span className="tl-val">₹65 / $1</span></div>
          <div className="tl-row"><span className="tl-year">2020</span><div className="tl-bar-bg"><div className="tl-bar-fill" style={{ width: "78%" }} /></div><span className="tl-val">₹75 / $1</span></div>
          <div className="tl-row"><span className="tl-year">2024</span><div className="tl-bar-bg"><div className="tl-bar-fill" style={{ width: "87%" }} /></div><span className="tl-val">₹84 / $1</span></div>
          <div className="tl-row"><span className="tl-year">2026 ▶</span><div className="tl-bar-bg"><div className="tl-bar-fill" style={{ width: "96%" }} /></div><span className="tl-val">₹93 / $1</span></div>
        </div>

        <p>
          Notice the steepening. The rupee went from ₹44 to ₹75 — a ₹31 fall — in two decades from 2000 to 2020. But it has since fallen nearly ₹18 more in just six years. The recent depreciation is not merely a continuation of a trend. <strong>It is an acceleration.</strong>
        </p>

        <p>
          There is also a consequence many miss: India&apos;s GDP ranking has slipped. The IMF now places India sixth largest in the world by nominal GDP, down from fifth in 2024. Two factors explain this. First, the rupee&apos;s fall: India&apos;s economy expanded about 9% in rupee terms, but that growth shrank when measured in dollars. Second, India revised its GDP methodology in early 2026, updating the base year from 2011-12 to 2022-23 at the IMF&apos;s own urging. The revised, more honest measurement trimmed nominal GDP by roughly 3–4%. The cruel irony is that fixing the ruler made the room look smaller.
        </p>

        {/* SECTION 3 */}
        <div className="section-flag">
          <span className="num">03</span>
          <span className="label">The causes</span>
        </div>
        <h2>Six forces, and one uncomfortable structural truth</h2>

        <div className="cause-grid">
          <div className="cause-card">
            <span className="c-num">01 · Oil imports</span>
            <h3>India&apos;s crude addiction</h3>
            <p>India imports approximately 88–89% of its crude oil, spending billions of dollars every month regardless of global prices. When oil prices rise, or when rerouting due to geopolitics raises costs, rupee pressure spikes immediately. A $10/barrel rise in crude widens the current account deficit by around 0.4% of GDP, per S&amp;P Global estimates.</p>
          </div>
          <div className="cause-card">
            <span className="c-num">02 · Trade deficit</span>
            <h3>More going out than coming in</h3>
            <p>India&apos;s merchandise trade deficit crossed $333 billion in 2025–26, the highest ever recorded, against total merchandise imports of $775 billion. Exports fell 11.8% in October 2025 even as imports surged 16.6%. Gold imports alone jumped 199% that same month. Dollars leave faster than they arrive.</p>
          </div>
          <div className="cause-card">
            <span className="c-num">03 · Capital flight</span>
            <h3>Foreign investors leaving</h3>
            <p>Foreign portfolio investors sold approximately ₹1.8 lakh crore of Indian assets in calendar 2026 through early April, per NSDL and Business Standard data. India&apos;s stock market, trading at a premium P/E of ~21x, was seen as expensive relative to peers. When sentiment shifts, hot money exits fast, converting rupees into dollars at the door.</p>
          </div>
          <div className="cause-card">
            <span className="c-num">04 · US interest rates</span>
            <h3>The dollar magnet</h3>
            <p>When US Treasury yields stay high, global investors park money in dollar assets for better returns. This is structural: India cannot offer the same perceived safety as US bonds. Capital flows toward the US, away from India, shrinking dollar supply in the Indian market.</p>
          </div>
          <div className="cause-card">
            <span className="c-num">05 · US tariffs</span>
            <h3>The trade war tax</h3>
            <p>US tariff policy has been a moving target. A 50% rate on Indian goods was announced in mid-2025, but reduced to 18% in February 2026. Even at 18%, India&apos;s effective rate remains above the ASEAN average, and the uncertainty chilled investor confidence. Sectors like gems, jewellery, textiles, and apparel recorded sharp export declines during peak stress in late 2025.</p>
          </div>
          <div className="cause-card">
            <span className="c-num">06 · &ldquo;Make in India&rdquo; shortfall</span>
            <h3>The manufacturing gap</h3>
            <p>India&apos;s manufacturing share of GDP was supposed to hit 25% by 2025. It has instead stayed in the 16–17% range, or as low as 12.5% on the World Bank&apos;s narrower measure. Without a strong manufacturing export base, India cannot generate the sustained dollar inflows that would naturally support its currency.</p>
          </div>
        </div>

        <p>
          Together, these six forces are not a weather event. They are a structural condition. India exports services brilliantly: IT, consulting, finance. But services are insufficient to close a $333 billion goods deficit. Until India becomes a serious goods exporter, the rupee will remain under structural pressure, growing economy or not.
        </p>

        {/* SECTION 4 */}
        <div className="section-flag">
          <span className="num">04</span>
          <span className="label">The RBI question</span>
        </div>
        <h2>Is this a managed decline or a loss of control?</h2>

        <p>
          This is the question that official commentary tends to sidestep, so let&apos;s ask it directly.
        </p>

        <p>
          The International Monetary Fund recently reclassified India&apos;s exchange-rate regime from a &ldquo;stabilised arrangement&rdquo; to a <strong>&ldquo;crawl-like arrangement.&rdquo;</strong> In plain English: the rupee used to be held relatively steady by the RBI. Now it is being allowed to fall, gradually but consistently. The RBI itself says it does not target any particular rate, and that markets should set the price.
        </p>

        <div className="rbi-box">
          <p>The RBI holds approximately $700 billion in foreign exchange reserves (around $697–701 billion in early April 2026). This is substantial insurance. But even this buffer cannot fight a global dollar bull cycle indefinitely, and the RBI knows this. Reserves smooth volatility; they do not reverse structural deficits.</p>
        </div>

        <p>
          There is a school of thought, not without merit, that a weaker rupee is partly deliberate. Some economists argue India should let the rupee weaken to boost export competitiveness, similar to how China has used yuan weakness strategically for decades.
        </p>

        <p>
          The problem with this theory applied to India is that <strong>India is not China.</strong> China runs trade surpluses. A cheaper yuan makes its exports cheaper without hurting a massive import bill. India runs structural goods deficits. A cheaper rupee makes every import — oil, fertiliser, electronics, machinery — more expensive. The rising costs then feed through to inflation, wipe out household budgets, and undercut the export gains. The net benefit is questionable. The net harm to ordinary consumers is not.
        </p>

        <div className="pullquote">
          The rupee has been falling since 1991. What&apos;s changed is that it now falls despite strong growth, robust reserves, and an RBI that intervenes. That combination should prompt harder questions than it usually does.
        </div>

        {/* SECTION 5 */}
        <div className="section-flag">
          <span className="num">05</span>
          <span className="label">The consequences</span>
        </div>
        <h2>Who actually pays and who quietly profits</h2>

        <p>The impact of a falling rupee is not distributed equally. This is where the headline numbers obscure what is really happening to real people.</p>

        <div className="profile-row">
          <div className="profile-card">
            <div className="avatar" style={{ background: "#FBE8E2", color: "#A0380A" }}>F</div>
            <h4>The Farmer</h4>
            <span className="verdict lose">Loses</span>
            <p>Fertiliser (largely imported) gets costlier. Diesel for pumps and tractors rises. Input costs have risen significantly in recent years, squeezing already thin margins. A weaker rupee tightens them further. Just over half of all agricultural households in India carry debt, per NSO survey data.</p>
          </div>
          <div className="profile-card">
            <div className="avatar" style={{ background: "#FBF4E0", color: "#7A5C00" }}>M</div>
            <h4>Urban Middle Class</h4>
            <span className="verdict mixed">Squeezed</span>
            <p>Fuel rises, imported electronics cost more, foreign education gets further out of reach. Aspiring families saving in rupees find their global purchasing power eroding. This class has no hedge. They neither earn in dollars nor export goods.</p>
          </div>
          <div className="profile-card">
            <div className="avatar" style={{ background: "#E4F0E8", color: "#2E7D45" }}>E</div>
            <h4>IT Exporter / NRI</h4>
            <span className="verdict gain">Gains</span>
            <p>Every dollar earned abroad converts to more rupees. A software firm billing $10 million earns ₹84 crore at ₹84/$ but ₹93 crore at today&apos;s rate. NRIs sending remittances home see the same windfall. India receives $125+ billion in remittances annually.</p>
          </div>
        </div>

        <p>
          The asymmetry is stark. Exporters and NRIs, who are economically better-off to begin with, gain directly from depreciation. Farmers, daily wage earners, and fixed-income households absorb rising costs with no compensating benefit. Research estimates that a 5% depreciation in the rupee adds 25–30 basis points to CPI inflation. The 8–9% fall we have seen over the past year implies a meaningful and regressive inflation tax on those least equipped to pay it.
        </p>

        <div className="impact-grid">
          <div className="impact-col neg">
            <h3>The clear negatives</h3>
            <ul>
              <li><span>Petrol and cooking gas become costlier as oil import bills rise in rupee terms</span></li>
              <li><span>Fertiliser prices rise, hurting farmers who already borrow to fund inputs</span></li>
              <li><span>Electronics, phones, and appliances get more expensive</span></li>
              <li><span>Corporate debt denominated in dollars becomes more expensive to repay</span></li>
              <li><span>Studying or seeking healthcare abroad is increasingly unaffordable for the middle class</span></li>
              <li><span>Imported inflation may force the RBI to hold rates higher, slowing growth and job creation</span></li>
            </ul>
          </div>
          <div className="impact-col pos">
            <h3>The partial positives</h3>
            <ul>
              <li><span>IT and software companies earn more rupees per dollar billed: a direct revenue boost</span></li>
              <li><span>India&apos;s $125+ billion in annual remittances buys more rupees for receiving families</span></li>
              <li><span>Textiles and pharma exporters gain price competitiveness, if they can hold down input costs</span></li>
              <li><span>Foreign tourists find India cheaper: a potential boost to hospitality and tourism</span></li>
            </ul>
          </div>
        </div>

        {/* SECTION 6 */}
        <div className="section-flag">
          <span className="num">06</span>
          <span className="label">The honest verdict</span>
        </div>

        <div className="conclusion">
          <div className="verdict-line">Strong economy.<br /><em>Weakening currency.</em><br />Both can be true, and both matter.</div>

          <p>
            India&apos;s growth story is real. The ambition to become the world&apos;s third-largest economy by 2031 is achievable. But ambition denominated in rupees is worth less in dollar terms every passing year. The IMF already revised India&apos;s GDP ranking down from fifth to sixth, not because growth slowed, but because the rupee fell.
          </p>

          <p>
            The rupee&apos;s decline is neither a crisis nor a minor inconvenience. It sits in the uncomfortable middle: a persistent structural problem that is being managed, but not solved. The RBI can smooth the journey. It cannot change the destination without deeper fixes, including a manufacturing revolution, genuine export diversification, reduction in oil dependence, and durable foreign investment.
          </p>

          <p>
            Until then, consider what a &ldquo;crawl-like depreciation&rdquo; means in practice: every year, the rupee buys a little less on the world stage. Every year, the farmer&apos;s fertiliser costs a little more. Every year, the middle-class family&apos;s dream of sending their child abroad requires a little more saving. These are not dramatic headlines. They are quiet, compounding losses — the kind that go unnoticed until they don&apos;t.
          </p>

          <p>
            The question India needs to ask is not whether the rupee is in crisis. It isn&apos;t, at the moment. The question is whether the slow bleed is being mistaken for stability and whether the comfort of managed decline is displacing the urgency of structural repair.
          </p>
        </div>

        <div className="footnote">
          <strong>Data sources:</strong> RBI Handbook of Statistics · IMF World Economic Outlook, April 2026 · EBC Financial Group · HDFC AMC · ICICIdirect · Trading Economics · Angel One · Kotak MF · Asia Times · Business Standard · FPI data: NSDL (as of April 16, 2026). All exchange rates are mid-market rates. This article is for informational purposes only and does not constitute financial or investment advice.
        </div>

      </article>

      {/* ── FOOTER ── */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-2.jpeg" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
            </Link>
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
