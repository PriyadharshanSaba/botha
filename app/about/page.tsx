"use client";

import "./about.css";
import "../landing.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TermsModal from "../components/TermsModal";
import PrivacyModal from "../components/PrivacyModal";

export default function AboutPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactDone, setContactDone] = useState(false);

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "general", ...contactForm }),
      });
      setContactDone(true);
    } finally {
      setContactSubmitting(false);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  return (
    <div className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-dots" />
        <div className="about-hero-inner">
          <div className="about-breadcrumb">
            <Link href="/">Home</Link> / <span>About Us</span>
          </div>
          <div className="about-hero-label">The People Behind Bodha</div>
          <h1 className="about-hero-title">
            A firm built to<br /><em>educate</em> and support.
          </h1>
          <p className="about-hero-sub">
            Bodha was built on a simple belief - that individuals, founders and businesses deserve financial expertise that is honest, hands-on and genuinely invested in their success. We educate, advise and support - so the people we work with can make better decisions and build stronger futures.
          </p>
        </div>
      </div>

      {/* FOUNDING STORY */}
      <section className="about-story">
        <div className="about-story-grid">
          <div className="about-story-left about-reveal" ref={addRevealRef}>
            <div className="about-section-label">Our Story</div>
            <div className="about-section-title">
              Built from experience,<br />for one purpose.
            </div>
            <p>
              Bodha was built around a simple observation - most people don&apos;t lack ambition, they lack access to honest, credible financial guidance. Whether you&apos;re a founder trying to make sense of your numbers, a business looking for strategic financial leadership or an individual taking control of your personal finances, the gap between where you are and where you want to be is often just knowledge and the right support.
            </p>
            <p>
              We work across the full spectrum of financial need. We educate through our Finance Course, designed to give individuals and aspiring investors the knowledge that actually matters. We advise and operate through our Virtual CFO service, embedding financial leadership into growing businesses. We back early builders through our venture arm. And we give everyone access to free tools to make better financial decisions every day.
            </p>
            <p>
              We&apos;re not a large consultancy and we&apos;re not trying to be. We&apos;re a small, focused team of qualified professionals who care deeply about the outcomes of the people we work with. We measure our success by one thing: whether our clients are genuinely better off for working with us.
            </p>
          </div>
          <div className="about-story-right about-reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
            <div className="about-quote-wrap">
              <span className="about-quote-mark">&ldquo;</span>
              <div className="about-quote">
                We built the firm we<br />wished existed when <em>we</em><br />were on the other side.
              </div>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-num">98<span>%</span></div>
                  <div className="about-stat-label">Client Retention</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">4.9<span>&#9733;</span></div>
                  <div className="about-stat-label">Client Rating</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">10<span>+</span></div>
                  <div className="about-stat-label">Services Offered</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">0</div>
                  <div className="about-stat-label">Missed Deadlines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="about-partners" id="team">
        <div className="about-partners-intro about-reveal" ref={addRevealRef}>
          <div className="about-section-label">Meet the Partners</div>
          <div className="about-section-title">
            The people behind<br />the work.
          </div>
        </div>

        <div className="about-partner-block">
          {/* Partner 1: Finance */}
          <div className="about-partner-card about-reveal" ref={addRevealRef} style={{ transitionDelay: "0.05s" }}>
            <div className="about-partner-card-top">
              <div className="about-partner-num">01</div>
              <div className="about-partner-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/AHD.jpeg" alt="CA Amogha H.D" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div className="about-partner-name">CA Amogha H.D  - Finance</div>
              <div className="about-partner-title">Chartered Accountant &middot; Co-Founder</div>
            </div>
            <div className="about-partner-card-body">
              <p className="about-partner-bio">
                Our finance partner is a <strong>Chartered Accountant, CFA Level 3 cleared</strong> and <strong>former Deloitte Manager</strong> who has spent years working alongside some of the most experienced financial minds in the industry - Senior Partners, CFOs and other C-suite executives across Financial Services, Consumer and Life Sciences. That proximity to excellence shapes everything: how we think, how we work and the standard we hold ourselves to.
              </p>
              <p className="about-partner-bio" style={{ marginTop: -10 }}>
                It&apos;s a rare kind of formation, not just technical training, but years of watching how the best in the business approach complexity, make decisions under pressure and lead with clarity. That perspective now sits at the centre of Bodha and it&apos;s what every client benefits from.
              </p>
            </div>
          </div>

          {/* Partner 2: Technology */}
          <div className="about-partner-card about-reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
            <div className="about-partner-card-top">
              <div className="about-partner-num">02</div>
              <div className="about-partner-avatar" style={{ background: "var(--slate)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/PD.jpeg" alt="Priyadharshan S" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div className="about-partner-name">Priyadharshan S - Technology</div>
              <div className="about-partner-title">Engineer &middot; Co-Founder</div>
            </div>
            <div className="about-partner-card-body">
              <p className="about-partner-bio">
                Alongside Bodha’s finance expertise sits a strong focus on systems thinking, execution and building structured learning experiences that simplify complexity. With experience working across technology-driven and fast-moving environments, the approach has always been grounded in clarity, practical decision-making and long-term thinking. That balance between financial depth and operational thinking shapes how Bodha is being built — not just as an education platform, but as a place where people can develop real understanding, confidence and better judgment around money.
              </p>
              <p className="about-partner-bio" style={{ marginTop: -10 }}>
                Having been on the <strong>founder&apos;s side of the table</strong>, this partner brings something rare to Bodha: a genuine, lived understanding of what entrepreneurs need - not just on the technical side, but in terms of support, clarity, and someone who truly gets the journey. That empathy informs how we engage with founders across our Virtual CFO service, our venture investing, and every conversation we have with a business that&apos;s trying to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-values-head about-reveal" ref={addRevealRef}>
          <div className="about-section-label">What We Stand For</div>
          <div className="about-section-title">
            Principles we don&apos;t<br />compromise on.
          </div>
          <p>These aren&apos;t marketing words. They&apos;re the things we&apos;ve built the firm around and what every client should expect from us.</p>
        </div>
        <div className="about-values-grid">
          {[
            { icon: "\u{1F91D}", title: "Direct accountability", desc: "You always know who is responsible for your work. No layers, no handoffs to juniors. The partner who signs off on the proposal is the same person doing the work." },
            { icon: "\u{1F50D}", title: "Honesty over comfort", desc: "We'll tell you what you need to hear, not what you want to hear. If your numbers are concerning, your model is wrong, or your plan has a flaw \u2014 you'll hear it from us first." },
            { icon: "\u2699\uFE0F", title: "Craft in every detail", desc: "We care about how the work looks, not just what it says. A well-crafted report, a clean model, a polished tool \u2014 quality signals are everywhere if you're paying attention." },
            { icon: "\u{1F3D7}\uFE0F", title: "Built for the long term", desc: "We're not interested in one-off engagements. We want to be the firm you call when something big happens \u2014 good or bad \u2014 and trust us to help you navigate it." },
            { icon: "\u{1F331}", title: "We grow with our clients", desc: "Some of our best work happens when we've watched a client go from early chaos to confident scale. That journey matters to us \u2014 and we invest in it genuinely." },
            { icon: "\u{1F512}", title: "Confidentiality, always", desc: "Your financials, your strategies, and your internal challenges stay inside our walls. We never discuss one client's business with another, ever." },
          ].map((v, i) => (
            <div key={i} className="about-value-card about-reveal" ref={addRevealRef} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              <div className="about-value-icon">{v.icon}</div>
              <div className="about-value-title">{v.title}</div>
              <div className="about-value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE BODHA DIFFERENCE */}
      <section className="about-edge">
        <div className="about-reveal" ref={addRevealRef}>
          <div className="about-section-label">The Bodha Difference</div>
          <div className="about-section-title">
            Education meets expertise.<br />Knowledge meets execution.
          </div>
          <p className="about-edge-intro">
            Most financial firms advise. Most educators teach. We do both - combining professional-grade financial expertise with a genuine commitment to helping people understand and act on their finances. That&apos;s what makes us different.
          </p>
        </div>
        <div className="about-edge-grid">
          {[
            { icon: "\u{1F4D0}", title: "Financial depth you can rely on", desc: "Big 4 finance background. CA and CFA qualification. Deep sector knowledge across Financial Services, Consumer, and Life Sciences. Your numbers are in the most capable hands." },
            { icon: "\u{1F393}", title: "Education that actually changes things", desc: "Our Finance Course is built by a Chartered Accountant and CFA Program graduate with real-world experience \u2014 not generic content. We teach the things that matter, in the way they actually work in practice." },
            { icon: "\u{1F3AF}", title: "Operator mindset, not just advisor mindset", desc: "Our team has worked inside companies, not just beside them. We understand urgency, constraints, and the reality of building. <strong>We give advice we'd take ourselves.</strong>" },
            { icon: "\u{1F91D}", title: "Personal. Not a large firm.", desc: "We are not a large consultancy. Every client and every student matters to us personally \u2014 you get real attention, not a ticketing system or a junior associate. <strong>That's the way we want to work.</strong>" },
          ].map((card, i) => (
            <div key={i} className="about-edge-card about-reveal" ref={addRevealRef} style={{ transitionDelay: `${0.05 * (i + 1)}s` }}>
              <div className="about-edge-card-icon">{card.icon}</div>
              <div className="about-edge-card-title">{card.title}</div>
              <div className="about-edge-card-desc" dangerouslySetInnerHTML={{ __html: card.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta about-reveal" ref={addRevealRef}>
        <div>
          <div className="about-cta-title">
            Work with people who<br />genuinely care.
          </div>
          <div className="about-cta-sub">Education, advisory, and a firm that shows up. Let&apos;s talk.</div>
        </div>
        <button className="btn-dark" onClick={() => { setShowContact(true); setContactDone(false); }}>Get in Touch &rarr;</button>
      </div>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.PNG" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
            </Link>
            <p>Empowering individuals with the financial literacy they need to build lasting wealth - for free.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/modules">Finance Course</Link></li>
              <li><Link href="/vcfo">Virtual CFO</Link></li>
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

      {showContact && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowContact(false); }}>
          <div style={{ background: "#fdfcf9", borderRadius: 12, padding: "40px 36px", width: "100%", maxWidth: 480, position: "relative" }}>
            <button onClick={() => setShowContact(false)} style={{ position: "absolute", top: 16, right: 18, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#999", lineHeight: 1 }}>&times;</button>
            {contactDone ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>&#10003;</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message received.</div>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>We&apos;ll be in touch shortly. Thank you for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Get in Touch</div>
                <p style={{ color: "#666", fontSize: 13, marginBottom: 24, lineHeight: 1.6 }}>Tell us a little about yourself and how we can help.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input required placeholder="Full name" value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                    style={{ padding: "11px 14px", border: "1px solid #ddd", borderRadius: 7, fontSize: 14, fontFamily: "inherit", outline: "none" }} />
                  <input required type="email" placeholder="Email address" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                    style={{ padding: "11px 14px", border: "1px solid #ddd", borderRadius: 7, fontSize: 14, fontFamily: "inherit", outline: "none" }} />
                  <input placeholder="Phone (optional)" value={contactForm.phone} onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))}
                    style={{ padding: "11px 14px", border: "1px solid #ddd", borderRadius: 7, fontSize: 14, fontFamily: "inherit", outline: "none" }} />
                  <textarea required placeholder="How can we help you?" rows={4} value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                    style={{ padding: "11px 14px", border: "1px solid #ddd", borderRadius: 7, fontSize: 14, fontFamily: "inherit", outline: "none", resize: "vertical" }} />
                </div>
                <button type="submit" disabled={contactSubmitting}
                  style={{ marginTop: 20, width: "100%", padding: "13px", background: "#0d0d0d", color: "#fff", border: "none", borderRadius: 7, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "0.3px" }}>
                  {contactSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
