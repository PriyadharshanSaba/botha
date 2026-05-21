"use client";

import "./venture.css";
import "../landing.css";
import "../about/about.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import TermsModal from "../components/TermsModal";
import PrivacyModal from "../components/PrivacyModal";

export default function VenturePage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { lang, setLang, t } = useLanguage();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }

  async function handleSubmit() {
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "venture",
          name: fd.get("name") ?? "",
          cofounders: fd.get("cofounders") ?? "",
          email: fd.get("email") ?? "",
          phone: fd.get("phone") ?? "",
          company: fd.get("company") ?? "",
          sector: fd.get("sector") ?? "",
          stage: fd.get("stage") ?? "",
          amount: fd.get("amount") ?? "",
          problem: fd.get("problem") ?? "",
          solution: fd.get("solution") ?? "",
          traction: fd.get("traction") ?? "",
          deck: fd.get("deck") ?? "",
        }),
      });
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      document.getElementById("vc-apply")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  const marqueeItems = ["Pre-Seed & Seed", "Own Capital", "Founder First", "No LPs", "India Focused", "Long-Term Partners", "Finance Expertise", "Conviction Led"];

  return (
    <div className="vc-page">
      {/* PAGE HEADER */}
      <div className="vc-page-header">
        <div className="vc-page-header-inner">
          <div className="vc-page-header-left">
            <div className="vc-breadcrumb"><Link href="/">Home</Link> / <span>Venture Capital</span></div>
            <div className="vc-header-label">Venture Capital &middot; Bodha</div>
            <h1>Backing founders<br />who dare to build<br /><em>something real.</em></h1>
            <p className="vc-header-sub">
              We invest our <strong>own capital</strong> - no LPs, no external fund, no mandates to answer to. Just us, backing entrepreneurs we believe in, with the full weight of our experience and network behind every cheque we write.
            </p>
            <div className="vc-hero-actions">
              <a href="#vc-apply" className="vc-btn-gold" style={{ textDecoration: "none" }}>Pitch Your Idea &rarr;</a>
              <a href="#vc-approach" className="vc-btn-outline" style={{ textDecoration: "none" }}>How we invest</a>
            </div>
          </div>
          <div className="vc-page-header-right">
            <div className="vc-meta-badge">Own Capital - No LPs</div>
            <div className="vc-meta-pill">Pre-seed &amp; Seed Stage</div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="vc-marquee-strip">
        <div className="vc-marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="vc-marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* OUR APPROACH */}
      <section className="vc-approach" id="vc-approach">
        <div className="vc-approach-grid">
          <div className="vc-approach-left vc-reveal" ref={addRevealRef}>
            <div className="vc-section-label">Our Philosophy</div>
            <div className="vc-section-title">Skin in the game.<br />No exceptions.</div>
            <p>Every rupee we invest comes from our own pocket. There are no institutional limited partners, no quarterly return targets, and no investment committee to convince. When we say yes to a founder, it&apos;s because <strong>we genuinely believe</strong> in the business, not because it fits a fund thesis.</p>
            <p>This means we can move fast, think long-term, and support founders in ways a traditional VC simply can&apos;t - including rolling up our sleeves on the finance and operations side.</p>
            <div className="vc-own-money-box">
              <h4>Why our own money matters to you</h4>
              <p>When your investor&apos;s capital is their own, <strong>alignment is total</strong>. We win only when you win. There&apos;s no pressure to exit early, no fund lifecycle to manage, and no conflict between your interests and ours.</p>
            </div>
          </div>
          <div className="vc-approach-right vc-reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
            {[
              { icon: "\u{1F3AF}", title: "Conviction-led, not portfolio-led", desc: "We don\u2019t invest in 50 companies hoping a few break out. We invest in a small number of founders we deeply believe in and give them everything we\u2019ve got." },
              { icon: "\u{1F91D}", title: "Finance expertise as an unfair advantage", desc: "Our team runs Virtual CFO services for various companies in different industries. We bring the same financial rigour, MIS frameworks, and fundraising know-how to every portfolio company." },
              { icon: "\u{1F331}", title: "Comfortable in the early chaos", desc: "Most investors want traction before they\u2019ll talk. We\u2019re comfortable in the messy early stages \u2014 the whiteboard phase, the pre-revenue phase, the \u2018we\u2019re figuring it out\u2019 phase." },
              { icon: "\u{1F4DE}", title: "Support beyond the cheque", desc: "We don\u2019t disappear after the wire transfer. The late nights, the hard calls, the moments of doubt \u2014 that\u2019s exactly when we want to hear from you." },
            ].map((card, i) => (
              <div key={i} className="vc-approach-card">
                <div className="vc-approach-card-icon">{card.icon}</div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERIA */}
      <section className="vc-criteria" id="vc-criteria">
        <div className="vc-criteria-head vc-reveal" ref={addRevealRef}>
          <div>
            <div className="vc-section-label">Investment Criteria</div>
            <div className="vc-section-title">What we look for<br />in a founder.</div>
          </div>
          <p>We back people first and ideas second. Here&apos;s what makes us lean forward in a conversation.</p>
        </div>
        <div className="vc-criteria-grid">
          {[
            { num: "01", icon: "\u{1F9E0}", title: "A problem worth solving", desc: "You\u2019ve identified a real, specific pain point \u2014 not a theoretical one. You can articulate the problem more clearly than anyone else because you\u2019ve lived it, studied it, or built around it." },
            { num: "02", icon: "\u{1F525}", title: "Founder obsession", desc: "We look for founders who can\u2019t stop thinking about their problem \u2014 who\u2019ve been building, researching, and iterating even before raising a rupee. Passion that\u2019s infectious." },
            { num: "03", icon: "\u{1F4D0}", title: "Early evidence of traction", desc: "You don\u2019t need a perfect product or a full team. But we want to see something \u2014 a prototype, pilot customers, letters of intent, or early revenue that shows the market is responding." },
            { num: "04", icon: "\u{1F5FA}\uFE0F", title: "A credible path to scale", desc: "The business model makes sense. The unit economics are defensible or have a clear path there. You understand how capital will translate into growth." },
            { num: "05", icon: "\u{1F932}", title: "Openness to guidance", desc: "The best founders are self-aware. They know what they know and what they don\u2019t. We want to work closely with you \u2014 that only happens when both sides are genuinely open." },
            { num: "06", icon: "\u{1F3D7}\uFE0F", title: "Building for India\u2019s next decade", desc: "We\u2019re excited about businesses solving real Indian problems at scale \u2014 across fintech, healthcare, commerce, education, climate, or anything in between. Ambition for India matters to us." },
          ].map((crit, i) => (
            <div key={i} className="vc-crit-card vc-reveal" ref={addRevealRef} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              <div className="vc-crit-num">{crit.num} --</div>
              <div className="vc-crit-icon">{crit.icon}</div>
              <div className="vc-crit-title">{crit.title}</div>
              <div className="vc-crit-desc">{crit.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE INVEST */}
      <section className="vc-invest">
        <div style={{ textAlign: "center" }} className="vc-reveal" ref={addRevealRef}>
          <div className="vc-section-label" style={{ justifyContent: "center" }}>The Process</div>
          <div className="vc-section-title">From first conversation<br />to term sheet.</div>
          <p style={{ marginTop: 16, fontSize: 15, color: "#777", lineHeight: 1.75, fontWeight: 300 }}>We keep it simple, transparent, and fast. No black-box committees.</p>
        </div>
        <div className="vc-invest-steps">
          {[
            { num: "01", title: "Intro & Pitch", desc: "Submit your pitch below or reach out directly. We respond to every application within 5 business days." },
            { num: "02", title: "Discovery Meeting", desc: "A 60-minute conversation about the problem, market, team, and traction. No slides required \u2014 just talk to us." },
            { num: "03", title: "Diligence", desc: "We move fast. Financial, legal, and market diligence done in 2\u20133 weeks. We\u2019ll tell you exactly where we stand throughout." },
            { num: "04", title: "Term Sheet & Close", desc: "Clean, founder-friendly terms. We don\u2019t over-engineer structures. Our goal is to close quickly and get to work." },
          ].map((step, i) => (
            <div key={i} className="vc-invest-step vc-reveal" ref={addRevealRef} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              <div className="vc-invest-circle">{step.num}</div>
              <div className="vc-invest-step-title">{step.title}</div>
              <div className="vc-invest-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HONEST NOTE */}
      <section className="vc-honest">
        <div className="vc-honest-inner">
          <div className="vc-reveal" ref={addRevealRef}>
            <div className="vc-section-label" style={{ justifyContent: "center" }}>A Note of Honesty</div>
            <div className="vc-section-title">We&apos;re new here.<br />And that&apos;s okay.</div>
          </div>
          <div className="vc-reveal" ref={addRevealRef} style={{ transitionDelay: "0.1s" }}>
            <p>We won&apos;t pretend to have a decade of portfolio exits behind us. Bodha is entering venture investing because we believe our <strong>financial expertise, in-the-trenches perspective and genuine care for entrepreneurs</strong> makes us a different and a better kind of early backer.</p>
            <p>We&apos;ve spent years helping businesses understand their numbers and build financial discipline. Now we want to go further - to back founders from the very beginning, not just advise them on the way up.</p>
          </div>
          <div className="vc-honest-cards vc-reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
            {[
              { icon: "\u{1F4AC}", title: "We\u2019ll always be straight with you", desc: "If we\u2019re not the right fit, we\u2019ll say so clearly and quickly. We won\u2019t string you along or give vague feedback just to stay in the loop." },
              { icon: "\u{1F4DA}", title: "We\u2019re learning alongside you", desc: "Being new to VC means we approach every investment with fresh eyes and genuine curiosity \u2014 not pattern-matching from a tired playbook." },
              { icon: "\u{1FAF1}\u{1F3FD}", title: "We put founders first, always", desc: "Our reputation in this space is being built right now, one relationship at a time. We will always act in your best interest \u2014 because that\u2019s the only way we want to operate." },
            ].map((card, i) => (
              <div key={i} className="vc-hcard">
                <div className="vc-hcard-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY / PITCH FORM */}
      <section className="vc-apply" id="vc-apply">
        <div className="vc-apply-layout">
          <div className="vc-apply-left vc-reveal" ref={addRevealRef}>
            <div className="vc-section-label">Pitch to Us</div>
            <div className="vc-section-title">Tell us what<br />you&apos;re building.</div>
            <p>Fill this in and we&apos;ll get back to you within 5 business days. If there&apos;s a fit, we&apos;ll set up a call. If not, we&apos;ll tell you why - clearly and respectfully.</p>
            <div className="vc-apply-checklist">
              <div className="vc-apply-check">Response within 5 business days</div>
              <div className="vc-apply-check">All ideas treated with full confidentiality</div>
              <div className="vc-apply-check">No minimum traction required to apply</div>
              <div className="vc-apply-check">Pre-seed and seed stage welcome</div>
              <div className="vc-apply-check">Solo founders encouraged to apply</div>
            </div>
            <div className="vc-apply-note">
              <p><strong>Not ready to pitch yet?</strong> That&apos;s fine - drop us a message anyway. We&apos;re happy to have a no-pressure conversation about your idea, the market, or your journey so far.</p>
            </div>
          </div>

          <div className="vc-form-card vc-reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
            {!submitted ? (
              <form ref={formRef} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <h3>Submit Your Pitch</h3>
                <p className="vc-form-desc">Short and simple - we&apos;ll ask for more if we&apos;re interested.</p>

                <div className="vc-field-row">
                  <div className="vc-field"><label>Your Name</label><input type="text" name="name" placeholder="Arjun Mehta" /></div>
                  <div className="vc-field"><label>Co-founder(s)</label><input type="text" name="cofounders" placeholder="Names, or Solo Founder" /></div>
                </div>
                <div className="vc-field-row">
                  <div className="vc-field"><label>Email</label><input type="email" name="email" placeholder="arjun@startup.com" /></div>
                  <div className="vc-field"><label>Phone</label><input type="tel" name="phone" placeholder="+91 98765 43210" /></div>
                </div>

                <div className="vc-form-divider" />

                <div className="vc-field-row">
                  <div className="vc-field"><label>Company / Venture Name</label><input type="text" name="company" placeholder="YourStartup" /></div>
                  <div className="vc-field">
                    <label>Industry / Sector</label>
                    <select name="sector" defaultValue="">
                      <option value="" disabled>Select sector</option>
                      <option>Fintech</option>
                      <option>Healthtech</option>
                      <option>D2C / Commerce</option>
                      <option>Edtech</option>
                      <option>Climate &amp; Sustainability</option>
                      <option>B2B SaaS</option>
                      <option>Manufacturing Tech</option>
                      <option>AI / Deep Tech</option>
                      <option>Real Estate Tech</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="vc-field-row">
                  <div className="vc-field">
                    <label>Stage</label>
                    <select name="stage" defaultValue="">
                      <option value="" disabled>Current stage</option>
                      <option>Idea / Pre-product</option>
                      <option>MVP / Prototype</option>
                      <option>Early traction (0&ndash;10 customers)</option>
                      <option>Revenue generating</option>
                      <option>Scaling</option>
                    </select>
                  </div>
                  <div className="vc-field">
                    <label>Amount Seeking</label>
                    <select name="amount" defaultValue="">
                      <option value="" disabled>Funding range</option>
                      <option>Under &#8377;25L</option>
                      <option>&#8377;25L &ndash; &#8377;1Cr</option>
                      <option>&#8377;1Cr &ndash; &#8377;5Cr</option>
                      <option>&#8377;5Cr+</option>
                      <option>Open to discussion</option>
                    </select>
                  </div>
                </div>

                <div className="vc-form-divider" />

                <div className="vc-field">
                  <label>What problem are you solving?</label>
                  <textarea name="problem" rows={3} placeholder="Describe the problem you&apos;re tackling and why it matters. Be specific." />
                </div>
                <div className="vc-field">
                  <label>Your solution &amp; why you?</label>
                  <textarea name="solution" rows={3} placeholder="What&apos;s your solution, and what makes you uniquely positioned to build it?" />
                </div>
                <div className="vc-field">
                  <label>Traction so far <span style={{ textTransform: "none", letterSpacing: 0, color: "#bbb", fontSize: 11 }}>(optional - honest is best)</span></label>
                  <textarea name="traction" rows={2} placeholder="Revenue, users, pilots, partnerships, prototypes - anything that shows the idea is working." />
                </div>
                <div className="vc-field">
                  <label>Pitch deck or website link <span style={{ textTransform: "none", letterSpacing: 0, color: "#bbb", fontSize: 11 }}>(optional)</span></label>
                  <input type="url" name="deck" placeholder="https://drive.google.com/... or yourwebsite.com" />
                </div>

                <button type="submit" className="vc-submit-btn" disabled={submitting}>{submitting ? "Sending…" : "Submit My Pitch →"}</button>
                <p style={{ marginTop: 12, fontSize: 11, color: "#bbb", textAlign: "center", lineHeight: 1.6 }}>
                  Your information is kept strictly confidential. We will never share it without your permission.
                </p>
              </form>
            ) : (
              <div className="vc-success-state show">
                <div className="vc-success-icon">&#128640;</div>
                <h3>Pitch received!</h3>
                <p>Thank you for sharing what you&apos;re building. We&apos;ll review your submission and get back to you within <strong>5 business days</strong>. Check your inbox for a confirmation.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="vc-cta vc-reveal" ref={addRevealRef}>
        <div>
          <div className="vc-cta-title">Got a big idea?<br />We want to hear it.</div>
          <div className="vc-cta-sub">We&apos;re open to every pitch, at every stage. What have you got to lose?</div>
        </div>
        <a href="#vc-apply" className="vc-btn-gold" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>Pitch Your Idea &rarr;</a>
      </div>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.PNG" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
            </Link>
            <p>Empowering founders and businesses with the financial clarity and capital they need to grow.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
              <li><Link href="/modules">Finance Course</Link></li>
              <li><Link href="/venture">Venture Capital</Link></li>
              <li><Link href="/tools">Finance Tools</Link></li>
              <li><Link href="/#services">Blog</Link></li>
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
