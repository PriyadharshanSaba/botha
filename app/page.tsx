"use client";

import "./landing.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TermsModal from "@/app/components/TermsModal";
import PrivacyModal from "@/app/components/PrivacyModal";
import { useLanguage } from "@/app/context/LanguageContext";

export default function LandingPage() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { lang, setLang } = useLanguage();

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

  const isKn = lang === "kn";

  const modules = isKn ? [
    { num: "೦೧", title: "ಹಣ ೧೦೧", desc: "ಹಣ ನಿಜವಾಗಿ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ — ಅದರ ಮೂಲ, ಆರ್ಥಿಕತೆಯಲ್ಲಿ ಅದರ ಪಾತ್ರ ಮತ್ತು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಜೀವನದಲ್ಲಿ ಅದು ಹೇಗೆ ಹರಿಯುತ್ತದೆ." },
    { num: "೦೨", title: "ಬಜೆಟ್ ೧೦೧", desc: "ಆದಾಯ ಮತ್ತು ವೆಚ್ಚಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನಿರ್ವಹಿಸುವುದನ್ನು ಕಲಿತು ಉಳಿತಾಯ ಮತ್ತು ಹೂಡಿಕೆಗೆ ನಿರಂತರವಾಗಿ ಹೆಚ್ಚುವರಿ ಹಣ ಉತ್ಪಾದಿಸುವ ವ್ಯವಸ್ಥೆಯನ್ನು ರಚಿಸಿ ಗಟ್ಟಿಯಾದ ಆರ್ಥಿಕ ಅಡಿಪಾಯ ನಿರ್ಮಿಸಿ." },
    { num: "೦೩", title: "ಷೇರು ಮಾರುಕಟ್ಟೆ ಪರಿಚಯ", desc: "ಹಣಕಾಸು ಮಾರುಕಟ್ಟೆಗಳು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ, ಷೇರುಗಳು ಹೇಗೆ ವ್ಯಾಪಾರವಾಗುತ್ತವೆ ಮತ್ತು ಹೂಡಿಕೆದಾರರು ಈಕ್ವಿಟಿ ಮಾಲೀಕತ್ವದ ಮೂಲಕ ವ್ಯವಹಾರಗಳ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಹೇಗೆ ಭಾಗವಹಿಸುತ್ತಾರೆ ಎಂದು ತಿಳಿಯಿರಿ." },
    { num: "೦೪", title: "ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಪರಿಚಯ", desc: "ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ, ಲಭ್ಯವಿರುವ ವಿವಿಧ ವಿಧಗಳು ಮತ್ತು SIP ಗಳ ಮೂಲಕ ವ್ಯವಸ್ಥಿತ ಹೂಡಿಕೆ ಹೇಗೆ ಹೂಡಿಕೆದಾರರಿಗೆ ವೃತ್ತಿಪರ ನಿರ್ವಹಣೆಯೊಂದಿಗೆ ವೈವಿಧ್ಯಮಯ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ ಎಂದು ತಿಳಿಯಿರಿ." },
    { num: "೦೫", title: "ಸರಿಯಾದ ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಆಯ್ಕೆ", desc: "ರಿಟರ್ನ್ಸ್, ರಿಸ್ಕ್ ಮೆಟ್ರಿಕ್ಸ್, ವೆಚ್ಚಗಳು ಮತ್ತು ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಗುಣಮಟ್ಟ ಬಳಸಿ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಮತ್ತು ಆಯ್ಕೆ ಮಾಡಲು ಕಲಿಯಿರಿ." },
    { num: "೦೬", title: "ಮೂಲಭೂತ ವಿಶ್ಲೇಷಣೆ", desc: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಕಂಪನಿಗಳನ್ನು ಗುರುತಿಸಲು ಹಣಕಾಸು ಹೇಳಿಕೆಗಳು, ಲಾಭದಾಯಕತೆ ಮೆಟ್ರಿಕ್ಸ್, ಬೆಳವಣಿಗೆ ಸೂಚಕಗಳು ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ತಂತ್ರಗಳ ಮೂಲಕ ವ್ಯವಹಾರಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುವುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ." },
    { num: "೦೭", title: "ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ", desc: "ಮಾರುಕಟ್ಟೆ ಚಾರ್ಟ್‌ಗಳನ್ನು ಓದಲು, ಟ್ರೆಂಡ್‌ಗಳನ್ನು ಗುರುತಿಸಲು, ಬೆಲೆ ನಡವಳಿಕೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಹೂಡಿಕೆ ಸಮಯ ಮತ್ತು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಿಕೆಯನ್ನು ಸುಧಾರಿಸಲು ಸೂಚಕಗಳನ್ನು ಬಳಸಲು ಕಲಿಯಿರಿ." },
    { num: "೦೮", title: "ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಾಣ ಮತ್ತು ಸಂಪತ್ತು ತಂತ್ರ", desc: "ವೈವಿಧ್ಯೀಕರಣ ಮತ್ತು ಶಿಸ್ತಿನ ಪೊಸಿಶನ್ ಸೈಜಿಂಗ್ ಕಾಯ್ದುಕೊಳ್ಳುತ್ತಲೇ ರಿಸ್ಕ್ ಸಹಿಷ್ಣುತೆ, ಆರ್ಥಿಕ ಗುರಿಗಳು ಮತ್ತು ಆಸ್ತಿ ಹಂಚಿಕೆ ಆಧರಿಸಿ ಹೂಡಿಕೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ರಚಿಸಲು ಕಲಿಯಿರಿ." },
    { num: "೦೯", title: "ಹೂಡಿಕೆದಾರರಿಗೆ ತೆರಿಗೆ", desc: "ಬಂಡವಾಳ ಲಾಭ, ಡಿವಿಡೆಂಡ್, ಬಡ್ಡಿ ಆದಾಯ ಮತ್ತು ತೆರಿಗೆ-ಸಮರ್ಥ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ವಹಣೆ ಸೇರಿದಂತೆ ಭಾರತೀಯ ತೆರಿಗೆ ವ್ಯವಸ್ಥೆ ಹೂಡಿಕೆಗಳಿಗೆ ಹೇಗೆ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ." },
    { num: "೧೦", title: "ಆರಂಭ: ನಿಮ್ಮ ಮೊದಲ ಹೂಡಿಕೆ ಯೋಜನೆ", desc: "ಹೂಡಿಕೆ ಖಾತೆಗಳನ್ನು ಸ್ಥಾಪಿಸಿ, ನಿಮ್ಮ ಮೊದಲ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಿಸಿ, ಮಾಸಿಕ ಹೂಡಿಕೆ ಯೋಜನೆ ರಚಿಸಿ ಮತ್ತು ಹೂಡಿಕೆದಾರರಾಗಿ ನಿಮ್ಮ ಮೊದಲ ವರ್ಷಕ್ಕೆ ರಚನಾತ್ಮಕ ಮಾರ್ಗಸೂಚಿ ಅನುಸರಿಸುವ ಮೂಲಕ ಜ್ಞಾನವನ್ನು ಕ್ರಿಯೆಯಾಗಿ ಪರಿವರ್ತಿಸಿ." },
  ] : [
    { num: "01", title: "Money 101", desc: "Understand how money actually works — its origins, its role in the economy and how it flows through your personal life." },
    { num: "02", title: "Budgeting 101", desc: "Build a strong financial foundation by learning how to manage income and expenses effectively and create a system that consistently generates surplus money for saving and investing." },
    { num: "03", title: "Introduction to the Stock Market", desc: "Learn how financial markets function, how stocks are traded and how investors participate in the growth of businesses through equity ownership." },
    { num: "04", title: "Introduction to Mutual Funds", desc: "Discover how mutual funds work, the different types available, and how systematic investing through SIPs allows investors to build diversified portfolios with professional management." },
    { num: "05", title: "Choosing the Right Mutual Funds", desc: "Learn how to evaluate and select mutual funds using returns, risk metrics, costs, and portfolio quality." },
    { num: "06", title: "Fundamental Analysis", desc: "Understand how to analyze businesses through financial statements, profitability metrics, growth indicators and valuation techniques to identify high-quality companies." },
    { num: "07", title: "Technical Analysis", desc: "Learn how to read market charts, identify trends, understand price behavior, and use indicators to improve investment timing and decision-making." },
    { num: "08", title: "Portfolio Construction & Wealth Strategy", desc: "Learn how to structure an investment portfolio based on risk tolerance, financial goals, and asset allocation while maintaining diversification and disciplined position sizing." },
    { num: "09", title: "Taxation for Investors", desc: "Understand how the Indian tax system applies to investments, including capital gains, dividends, interest income and tax-efficient portfolio management." },
    { num: "10", title: "Getting Started: Your First Investment Plan", desc: "Turn knowledge into action by setting up investment accounts, building your first portfolio, creating a monthly investing plan and following a structured roadmap for your first year as an investor." },
  ];

  return (
    <div className="landing">
      {/* FINANCE PROGRAM SECTION */}
      <section className="course-section" id="course">
        <div className="course-top reveal" ref={addRevealRef}>
          <div className="section-label">{isKn ? "ನಮ್ಮ ಪ್ರಮುಖ ಕಾರ್ಯಕ್ರಮ" : "Our Flagship Program"}</div>
          <h2 className="section-title">
            {isKn ? (
              <>ವೈಯಕ್ತಿಕ ಹಣಕಾಸು<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>ಪ್ರೋಗ್ರಾಂ</em></>
            ) : (
              <>The Personal Finance<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Program</em></>
            )}
          </h2>
        </div>

        <div className="course-manifesto reveal" ref={addRevealRef}>
          <div className="manifesto-accent">&#10022;</div>
          <div className="manifesto-body">
            {isKn ? (
              <>
                <h3>ಈ ಪ್ರೋಗ್ರಾಂ ತಮ್ಮ ಹಣದಿಂದ <span className="strikeout">ಜೂಜಾಡಲು</span> ಬಯಸುವವರಿಗಾಗಿ ಅಲ್ಲ.</h3>
                <p>ನೀವು ಹಾಟ್ ಟಿಪ್ಸ್, ರಾತ್ರೋರಾತ್ರಿ ಲಾಭ ಅಥವಾ ಮುಂದಿನ &quot;೧೦೦x ಸ್ಟಾಕ್&quot; ಹುಡುಕುತ್ತಿದ್ದರೆ — ಇದು ನಿಮ್ಮ ಜಾಗವಲ್ಲ. ನಮ್ಮ ಪ್ರೋಗ್ರಾಂ ನಿಜವಾದ, ಶಾಶ್ವತವಾದ ಸಂಪತ್ತನ್ನು ನಿರ್ಮಿಸಲು ಬಯಸುವವರಿಗಾಗಿ ತಯಾರಿಸಲಾಗಿದೆ — ತಾಳ್ಮೆಯಿಂದ, ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಮತ್ತು ಗಟ್ಟಿಯಾದ ಅಡಿಪಾಯದ ಮೇಲೆ.</p>
              </>
            ) : (
              <>
                <h3>This course is <span className="strikeout">not</span> for people who want to gamble with their money.</h3>
                <p>If you&apos;re looking for hot tips, overnight returns or the next &quot;100x stock&quot; — this isn&apos;t your place. Our program is built for people who want to build real, lasting wealth — patiently, intelligently and on solid foundations.</p>
              </>
            )}
          </div>
        </div>

        <div className="course-journey reveal" ref={addRevealRef}>
          <div className="journey-header">
            <div className="cover-stats">
              {isKn ? (
                <>
                  <div className="stat-pill"><strong>೧೦</strong>ಮಾಡ್ಯೂಲ್‌ಗಳು</div>
                  <div className="stat-pill"><strong>೫೦+</strong>ಉದಾಹರಣೆಗಳು</div>
                  <div className="stat-pill"><strong>೨೪ ಗಂ</strong>ಸಂದೇಹ ನಿವಾರಣೆ</div>
                  <div className="stat-pill"><strong>&infin;</strong>ಅನಂತ ಸಾಧ್ಯತೆ</div>
                </>
              ) : (
                <>
                  <div className="stat-pill"><strong>10</strong>Modules</div>
                  <div className="stat-pill"><strong>50+</strong>Examples</div>
                  <div className="stat-pill"><strong>24 Hr</strong>Doubt Support</div>
                  <div className="stat-pill"><strong>&infin;</strong>Potential</div>
                </>
              )}
            </div>
            <div className="section-label" style={{ marginBottom: 8 }}>{isKn ? "ಪ್ರಯಾಣ" : "The Journey"}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 2.2vw, 36px)", fontWeight: 700, letterSpacing: "-1px", color: "var(--ink)" }}>
              {isKn ? <>ಸಂಪೂರ್ಣ ಆರಂಭಿಕರಿಂದ<br />ಜ್ಞಾನಿ ಹೂಡಿಕೆದಾರರವರೆಗೆ</> : <>From absolute beginner<br />to knowledgeable investor</>}
            </h3>
            <p style={{ marginTop: 14, fontSize: 15, color: "#666", maxWidth: 460, lineHeight: 1.7, fontWeight: 300 }}>
              {isKn
                ? "ಯಾವುದೇ ಹಣಕಾಸು ಹಿನ್ನೆಲೆ ಅಗತ್ಯವಿಲ್ಲ. ನಾವು ನಿಮ್ಮನ್ನು ಹಂತ ಹಂತವಾಗಿ ಸರಳೀಕೃತ, ರಚನಾತ್ಮಕ ಹಣಕಾಸು ಶಿಕ್ಷಣದ ಮೂಲಕ ಕರೆದೊಯ್ಯುತ್ತೇವೆ — ಮನಸ್ಸಿನಲ್ಲಿ ಉಳಿಯುವಂತೆ ಮತ್ತು ನಿಜ ಜೀವನದಲ್ಲಿ ಕೆಲಸ ಮಾಡುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ."
                : "No finance background needed. We take you step by step through simplified, structured financial education designed to stick — and to work in real life."}
            </p>
          </div>
          <div className="journey-steps">
            {modules.map((step) => (
              <div key={step.num} className="jstep">
                <div className="jstep-num">{step.num}</div>
                <div className="jstep-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="learn-first-banner reveal" ref={addRevealRef}>
          <div className="lfb-icon">&#128218;</div>
          <div className="lfb-body">
            <div className="lfb-tag">{isKn ? "ಜೀವನದ ಮಾರ್ಗದರ್ಶಿ ನುಡಿಗಳು" : "Words to live by"}</div>
            <blockquote className="lfb-quote">
              {isKn
                ? <>&quot;ನೀವು ಏನು ಮಾಡುತ್ತಿದ್ದೀರಿ ಎಂದು ತಿಳಿಯದಿರುವುದರಿಂದಲೇ ಅಪಾಯ ಬರುತ್ತದೆ.&quot; — ವಾರೆನ್ ಬಫೆಟ್</>
                : <>&quot;Risk comes from not knowing what you&apos;re doing.&quot; — Warren Buffett</>}
            </blockquote>
            <p className="lfb-sub">
              {isKn
                ? "ಮಾರುಕಟ್ಟೆಯು ಜ್ಞಾನವುಳ್ಳವರಿಗೆ ಬಹುಮಾನ ನೀಡುತ್ತದೆ ಮತ್ತು ಆವೇಗಕ್ಕೆ ಒಳಗಾದವರನ್ನು ದಂಡಿಸುತ್ತದೆ. ಕಲಿಯಲು ನೀವು ಕಳೆಯುವ ಪ್ರತಿ ಗಂಟೆಯೂ ನಿಮ್ಮ ಭವಿಷ್ಯದ ಮೇಲೆ ಚಕ್ರಬಡ್ಡಿಯಂತೆ ಕೂಡಿಕೊಳ್ಳುತ್ತದೆ."
                : "The market rewards the informed and punishes the impulsive. Every hour you spend learning is compounding interest on your future self."}
            </p>
          </div>
          <Link href="/signin?mode=signup" className="btn-big" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>{isKn ? "ಈಗಲೇ ಸೇರಿ →" : "Enroll Now →"}</Link>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="stand-for" id="about">
        <div className="stand-left reveal" ref={addRevealRef}>
          <div className="section-label">{isKn ? "ನಮ್ಮ ತತ್ವಶಾಸ್ತ್ರ" : "Our Philosophy"}</div>
          <h2 className="section-title">{isKn ? <>ನಾವು ಯಾವುದನ್ನು<br />ಪ್ರತಿನಿಧಿಸುತ್ತೇವೆ</> : <>What we<br />stand for</>}</h2>
          <p>
            {isKn
              ? "ಹೆಚ್ಚಿನ ಜನರಿಗೆ ಆರ್ಥಿಕವಾಗಿ ಉನ್ನತಿ ಸಾಧಿಸಲು ನಿಜವಾಗಿಯೂ ಅಗತ್ಯವಿರುವುದು ಎಂದಿಗೂ ದೊರೆಯುವುದಿಲ್ಲ, ಶಿಕ್ಷಣ, ಕಾರ್ಯತಂತ್ರದ ಬೆಂಬಲ ಅಥವಾ ಸರಿಯಾದ ಬಂಡವಾಳದ ಲಭ್ಯತೆ. ಅವರು ಸಮರ್ಥರಲ್ಲ ಎಂದಲ್ಲ, ಆ ಬಾಗಿಲನ್ನು ತೆರೆದು ತೋರಿಸಲು ಯಾರೂ ಮುಂದೆ ಬರಲಿಲ್ಲ ಎಂಬುದೇ ಕಾರಣ. ಇದು ಹಾಗಿರಬಾರದು ಎಂಬ ದೃಢ ನಂಬಿಕೆಯಿಂದ ನಾವು ಈ ಪಯಣ ಆರಂಭಿಸಿದೆವು. ನಾವು ಯಾರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆಯೋ, ಅವರಿಗೆ ನಾವು ಕೇವಲ ಶಿಕ್ಷಕರು, ತಜ್ಞರು ಅಥವಾ ಹೂಡಿಕೆದಾರರಲ್ಲ, ನಾವು ಪಾಲುದಾರರು. ಸರಿಯಾದ ಮಾರ್ಗದರ್ಶನ ಸರಿಯಾದ ಅವಕಾಶಗಳನ್ನು ಭೇಟಿಯಾದಾಗ, ಎಲ್ಲವೂ ಬದಲಾಗುತ್ತದೆ."
              : "Most people never get what they actually need to thrive financially — the education, the strategic support or access to the right capital — not because they're not capable, but because no one ever opened that door for them. We started this because we believe that shouldn't be the case. When we work with someone, we're not just educators, strategists or investors, we're partners. When the right guidance meets the right opportunities, everything changes."}
          </p>
          <div className="stand-values">
            {isKn ? (
              <>
                <div className="value-item">
                  <div className="value-icon">&#127919;</div>
                  <div className="value-text">
                    <h4>ನಿಮ್ಮ ಬೆಳವಣಿಗೆ, ನಮ್ಮದೂ ಕೂಡ.</h4>
                    <p>ನಿಮ್ಮ ಗೆಲುವು ನಮ್ಮ ಗೆಲುವು. ನಾವು ನಿಜವಾದ ಪಾಲುದಾರರಾಗಿ ನಿಮ್ಮ ಪಕ್ಕದಲ್ಲಿರುತ್ತೇವೆ, ಕೇವಲ ಮುಂದಿನ ಮೈಲಿಗಲ್ಲಿಗಾಗಿ ಅಲ್ಲ, ನಿಮ್ಮ ಇಡೀ ಪ್ರಯಾಣದಲ್ಲಿ.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">&#129309;</div>
                  <div className="value-text">
                    <h4>ಯಾವಾಗಲೂ ನಿಮ್ಮ ಪರವಾಗಿ.</h4>
                    <p>ನೀವು ಇನ್ನೊಬ್ಬ ಗ್ರಾಹಕರಂತೆ ಎಂದಿಗೂ ಅನಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಕಾಯುವಿಕೆ ಇಲ್ಲ, ಅಲೆದಾಡುವಿಕೆ ಇಲ್ಲ. ನಿಮ್ಮ ಭವಿಷ್ಯದ ಬಗ್ಗೆ ಮನಃಪೂರ್ವಕವಾಗಿ ಕಾಳಜಿ ವಹಿಸುವ ನಿಜವಾದ ಮನುಷ್ಯರು ಮಾತ್ರ.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">&#128200;</div>
                  <div className="value-text">
                    <h4>ಎಂದಿಗೂ ರಾಜಿ ಮಾಡಿಕೊಳ್ಳುವುದಿಲ್ಲ.</h4>
                    <p>ಶ್ರೇಷ್ಠತೆ ಎಂಬುದು ದೊಡ್ಡ ಗ್ರಾಹಕರಿಗಾಗಿ ಮಾತ್ರ ಆನ್ ಮಾಡುವ ಸ್ವಿಚ್ ಅಲ್ಲ. ಪ್ರತಿಯೊಬ್ಬರಿಗೂ, ಪ್ರತಿ ಬಾರಿಯೂ, ಅದು ನಾವು ಕಾಣಿಸಿಕೊಳ್ಳುವ ರೀತಿ.</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="value-item">
                  <div className="value-icon">&#127919;</div>
                  <div className="value-text">
                    <h4>Your Growth, Ours Too.</h4>
                    <p>Your wins are our wins. We show up as true partners, invested in your journey, not just your next milestone.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">&#129309;</div>
                  <div className="value-text">
                    <h4>Always In Your Corner.</h4>
                    <p>You will never feel like just another client. No waiting, no chasing, no being passed around. Just real people who genuinely care about where you&apos;re headed.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">&#128200;</div>
                  <div className="value-text">
                    <h4>Never Cutting Corners.</h4>
                    <p>Excellence isn&apos;t something we switch on for big clients. It&apos;s how we show up for everyone, every single time.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="stand-right reveal" ref={addRevealRef} style={{ transitionDelay: "0.15s" }}>
          <span className="quote-mark">&ldquo;</span>
          <div className="stand-big-quote">
            {isKn
              ? <>&quot;ಜ್ಞಾನದಲ್ಲಿ ಮಾಡಿದ ಹೂಡಿಕೆ ಅತ್ಯುತ್ತಮ ಬಡ್ಡಿಯನ್ನು ನೀಡುತ್ತದೆ.&quot;<br /><em style={{ fontSize: "0.7em", fontStyle: "normal", opacity: 0.7 }}>— ಬೆಂಜಮಿನ್ ಫ್ರಾಂಕ್ಲಿನ್</em></>
              : <>&ldquo;An investment in knowledge pays<br />the best <em>interest.</em>&rdquo;<br /><em style={{ fontSize: "0.7em", fontStyle: "normal", opacity: 0.7 }}>— Benjamin Franklin</em></>}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-head reveal" ref={addRevealRef}>
          <div>
            <div className="section-label">{isKn ? "ನಾವು ಏನು ನೀಡುತ್ತೇವೆ" : "What We Offer"}</div>
            <h2 className="section-title">{isKn ? "ನಮ್ಮ ಸೇವೆಗಳು" : "Our Services"}</h2>
          </div>
          <Link href="/signin" className="btn-outline" style={{ flexShrink: 0 }}>{isKn ? "ಎಲ್ಲವನ್ನೂ ನೋಡಿ →" : "View all →"}</Link>
        </div>
        <div className="services-grid">
          <div className="service-card featured reveal" ref={addRevealRef}>
            <div className="service-num">01 — {isKn ? "ಪ್ರಮುಖ" : "Flagship"}</div>
            <div className="service-icon">&#127942;</div>
            <div className="service-name">{isKn ? "ಪರ್ಸನಲ್ ಫೈನಾನ್ಸ್ ಪ್ರೋಗ್ರಾಂ" : "Personal Finance Program"}</div>
            <div className="service-desc">{isKn ? "ನಮ್ಮ ಮೂಲಾಧಾರ ಕಾರ್ಯಕ್ರಮ. ಬಜೆಟ್ ರಚನೆ, ಹೂಡಿಕೆ, ತೆರಿಗೆ ಯೋಜನೆ ಮತ್ತು ಬಹು ತಲೆಮಾರಿನ ಸಂಪತ್ತು ನಿರ್ಮಾಣವನ್ನು ಒಳಗೊಂಡ ಮಾಡ್ಯೂಲ್‌ಗಳು." : "Our cornerstone program. Modules covering budgeting, investing, tax planning and building multi-generational wealth."}</div>
            <div className="service-tag">{isKn ? "ಅತ್ಯಂತ ಜನಪ್ರಿಯ" : "Most Popular"}</div>
            <div className="service-arrow">↗</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.1s" }}>
            <div className="service-num">02</div>
            <div className="service-icon">&#128188;</div>
            <div className="service-name">{isKn ? "ವರ್ಚುವಲ್ CFO" : "Virtual CFO"}</div>
            <div className="service-desc">{isKn ? "ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗಾಗಿ ಅಗತ್ಯಾನುಸಾರ CFO ತಜ್ಞತೆ. ನಗದು ಹರಿವು, ಆರ್ಥಿಕ ಕಾರ್ಯತಂತ್ರ, MIS ವರದಿಗಳು ಮತ್ತು ಬೋರ್ಡ್ ಮಟ್ಟದ ನಿರ್ಧಾರಗಳು." : "On-demand CFO expertise for founders and businesses. Cash flow, financial strategy, MIS Reports and board-level decisions."}</div>
            <div className="service-tag">{isKn ? "ಸಂಸ್ಥಾಪಕರಿಗೆ" : "For Founders"}</div>
            <div className="service-arrow">↗</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.2s" }}>
            <div className="service-num">03</div>
            <div className="service-icon">&#128640;</div>
            <div className="service-name">{isKn ? "ವೆಂಚರ್ ಕ್ಯಾಪಿಟಲ್" : "Venture Capital"}</div>
            <div className="service-desc">{isKn ? "ಆರಂಭಿಕ ಹಂತದ ಹೂಡಿಕೆ ಅವಕಾಶಗಳು ಮತ್ತು ಕ್ಯುರೇಟೆಡ್ ಡೀಲ್ ಫ್ಲೋ — ಭಾರತದ ಮುಂದಿನ ದೊಡ್ಡ ಕಥೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತಾ." : "Early-stage funding opportunities and curated deal flow, backing India's next big story."}</div>
            <div className="service-tag">{isKn ? "ಸ್ಟಾರ್ಟಪ್ ಫೋಕಸ್" : "Startup Focus"}</div>
            <div className="service-arrow">↗</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.3s" }}>
            <div className="service-num">04</div>
            <div className="service-icon">&#128736;&#65039;</div>
            <div className="service-name">{isKn ? "ಹಣಕಾಸು ಸಾಧನಗಳು" : "Finance Tools"}</div>
            <div className="service-desc">{isKn ? "ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು, ಟ್ರ್ಯಾಕರ್‌ಗಳು ಮತ್ತು ಪ್ಲ್ಯಾನರ್‌ಗಳು — SIP ಆಪ್ಟಿಮೈಜರ್, ತೆರಿಗೆ ಅಂದಾಜು, ನೆಟ್ ವರ್ತ್ ಟ್ರ್ಯಾಕರ್, ನಿವೃತ್ತಿ ಯೋಜಕ ಮತ್ತು ಇನ್ನೂ ಹೆಚ್ಚು." : "Calculators, trackers and planners — SIP optimizer, tax estimator, net worth tracker, retirement planner and more."}</div>
            <div className="service-tag">{isKn ? "ಪ್ರೋಗ್ರಾಂನ ಭಾಗ" : "Part of the program"}</div>
            <div className="service-arrow">↗</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.4s" }}>
            <div className="service-num">05</div>
            <div className="service-icon">&#9997;&#65039;</div>
            <div className="service-name">{isKn ? "ಬ್ಲಾಗ್‌ಗಳು ಮತ್ತು ಒಳನೋಟಗಳು" : "Blog & Insights"}</div>
            <div className="service-desc">{isKn ? "ಮಾರುಕಟ್ಟೆ, ವೈಯಕ್ತಿಕ ಹಣಕಾಸು, ನೀತಿ ಮತ್ತು ವ್ಯವಹಾರದ ಕುರಿತು ಸಾಪ್ತಾಹಿಕ ಆಳವಾದ ವಿಶ್ಲೇಷಣೆ — ಪಠ್ಯಪುಸ್ತಕಗಳಿಗಾಗಿ ಅಲ್ಲ, ಮನುಷ್ಯರಿಗಾಗಿ ಬರೆಯಲಾಗಿದೆ." : "Weekly deep dives on markets, personal finance, policy and business — written for humans, not textbooks."}</div>
            <div className="service-tag">{isKn ? "ಸಾಪ್ತಾಹಿಕ" : "Weekly Content"}</div>
            <div className="service-arrow">↗</div>
          </div>
          <div className="service-card reveal" ref={addRevealRef} style={{ transitionDelay: "0.5s", background: "var(--cream)", borderColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" as const }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, marginBottom: 16 }}>&#10022;</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 10, color: "var(--ink)" }}>{isKn ? "ಇನ್ನಷ್ಟು ಶೀಘ್ರದಲ್ಲಿ" : "More coming soon"}</div>
            <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>{isKn ? "ನಾವು ಯಾವಾಗಲೂ ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ. ಹೊಸ ಅರ್ಪಣೆಗಳಿಗೆ ಆರಂಭಿಕ ಪ್ರವೇಶಕ್ಕಾಗಿ ಸಂಚಿಗೆ ಸೇರಿ." : "We're always building. Join the waitlist for early access to new offerings."}</div>
            <Link href="/signin?mode=signup" className="btn-primary" style={{ marginTop: 20 }}>{isKn ? "ಪ್ರತೀಕ್ಷಾ ಪಟ್ಟಿಗೆ ಸೇರಿ" : "Join Waitlist"}</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div style={{ textAlign: "center" }} className="reveal" ref={addRevealRef}>
          <div className="section-label" style={{ justifyContent: "center", color: "var(--gold)" }}>{isKn ? "ಗ್ರಾಹಕರ ಕಥೆಗಳು" : "Client Stories"}</div>
          <h2 className="section-title" style={{ color: "#fff" }}>{isKn ? "ನಮ್ಮ ಸದಸ್ಯರು ಏನು ಹೇಳುತ್ತಾರೆ" : "What our members say"}</h2>
        </div>
        <div className="testimonials-grid">
          {[
            { text: "Bodha completely rewired how I think about money. I cleared my debt in 14 months and now have a real investment strategy.", name: "Siddharth S Menon", role: "Software Professional", initial: "S", delay: "0.05s" },
            { text: "The Virtual CFO service saved my startup during a rough funding round. Board-level clarity and execution speed we couldn't afford in-house.", name: "Abhilash Rajan", role: "Proprietor, SR Enterprises", initial: "A", delay: "0.15s" },
            { text: "We disbanded our in-house finance team six months in. Their bookkeeping services, GST filings and MIS reports gave us everything we needed — faster, cleaner, and at a fraction of the cost.", name: "Sachin S John", role: "CEO, Toodex Technology Pvt. Ltd.", initial: "S", delay: "0.25s" },
            // { text: "Their VC network helped us get our first term sheet within 3 months. The warm intros and pitch coaching made all the difference.", name: "Siddharth Rao", role: "Founder, GreenStack", initial: "S", delay: "0.1s" },
            // { text: "The SIP optimizer tool helped me reallocate more efficiently. I used to guess — now I have a proper system. Genuinely brilliant.", name: "Aisha Mohammed", role: "Software Engineer, Hyderabad", initial: "A", delay: "0.2s" },
            // { text: "From zero financial literacy to confidently managing my portfolio. Bodha gave me the education my MBA never did.", name: "Vikram Nair", role: "Senior Consultant, Delhi", initial: "V", delay: "0.3s" },
          ].map((t, i) => (
            <div key={i} className="tcard reveal" ref={addRevealRef} style={{ transitionDelay: t.delay }}>
              <div className="tcard-quote">&ldquo;</div>
              <div className="tcard-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="tcard-text">{t.text}</p>
              <div className="tcard-author">
                <div className="tcard-avatar">{t.initial}</div>
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner reveal" ref={addRevealRef}>
        <div>
          <div className="cta-title">{isKn ? <>ನಿಮ್ಮ ಹಣಕಾಸಿನ ನಿಯಂತ್ರಣ<br />ತೆಗೆದುಕೊಳ್ಳಲು ಸಿದ್ಧರಿದ್ದೀರಾ?</> : <>Ready to take control<br />of your finances?</>}</div>
          <div className="cta-sub">{isKn ? "ಇಂದೇ ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ." : "Start learning today."}</div>
        </div>
        <Link href="/signin?mode=signup" className="btn-dark">{isKn ? "ಸೈನ್ ಅಪ್ →" : "Sign Up →"}</Link>
      </div>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.PNG" alt="Bodha" style={{ height: "70px", width: "auto", display: "block" }} />
            </Link>
            <p>{isKn ? "ವ್ಯಕ್ತಿಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳನ್ನು ಆರ್ಥಿಕ ತಜ್ಞತೆಯಿಂದ ಸಶಕ್ತಗೊಳಿಸುತ್ತಾ." : "Empowering individuals and businesses with financial expertise."}</p>
          </div>
          <div className="footer-col">
            <h5>{isKn ? "ಸೇವೆಗಳು" : "Services"}</h5>
            <ul>
              <li><a href="#course">{isKn ? "ಫೈನಾನ್ಸ್ ಪ್ರೋಗ್ರಾಂ" : "Finance Program"}</a></li>
              <li><Link href="/vcfo">{isKn ? "ವರ್ಚುವಲ್ CFO" : "Virtual CFO"}</Link></li>
              <li><Link href="/venture">{isKn ? "ವೆಂಚರ್ ಕ್ಯಾಪಿಟಲ್" : "Venture Capital"}</Link></li>
              <li><Link href="/tools">{isKn ? "ಹಣಕಾಸು ಸಾಧನಗಳು" : "Finance Tools"}</Link></li>
              <li><a href="#services">{isKn ? "ಬ್ಲಾಗ್" : "Blog"}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{isKn ? "ಕಂಪನಿ" : "Company"}</h5>
            <ul>
              <li><Link href="/about">{isKn ? "ನಮ್ಮ ಬಗ್ಗೆ" : "About Us"}</Link></li>
              <li><Link href="/signin">{isKn ? "ಸೈನ್ ಇನ್" : "Sign In"}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{isKn ? "ಕಾನೂನು" : "Legal"}</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>{isKn ? "ಗೌಪ್ಯತಾ ನೀತಿ" : "Privacy Policy"}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>{isKn ? "ಬಳಕೆಯ ನಿಯಮಗಳು" : "Terms of Use"}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bodha. {isKn ? "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ." : "All rights reserved."}</p>
          <a href="#">{isKn ? "ಮೇಲಕ್ಕೆ ಹೋಗಿ ↑" : "Back to top ↑"}</a>
        </div>
      </footer>
      {showTerms && (
        <TermsModal viewOnly onClose={() => setShowTerms(false)} />
      )}
      {showPrivacy && (
        <PrivacyModal onClose={() => setShowPrivacy(false)} />
      )}
    </div>
  );
}
