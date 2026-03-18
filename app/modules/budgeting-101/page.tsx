"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function Budgeting101Page() {
  const { t, lang } = useLanguage();
  // =============================
  //  ALL CHAPTER CONTENT
  // =============================
  const chapters = [
    {
      title: {
        en: "Mastering Your Money &mdash; The Art of Budgeting",
        kn: "ನಿಮ್ಮ ಹಣವನ್ನು ಮಾಸ್ಟರ್ ಮಾಡಿ &mdash; ಬಜೆಟ್ ರಚಿಸುವ ಕಲೆ",
      },
      content: {
        en: (
          <>
            <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              Budgeting isn&apos;t about saying no &mdash; it&apos;s about learning how to say yes to what truly matters.
              It&apos;s not restriction, it&apos;s direction &mdash; the skill that turns income into progress.
            </p>
            <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              You&apos;ve learnt how money works. Now, it&apos;s time to learn how to make it work for you.
            </p>
          </>
        ),
        kn: (
          <>
            <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              ಬಜೆಟ್ ರಚನೆ ಎಂದರೆ &quot;ಬೇಡ&quot; ಎನ್ನುವುದಲ್ಲ &mdash; ನಿಜವಾಗಿಯೂ ಮುಖ್ಯವಾದುದಕ್ಕೆ &quot;ಹೌದು&quot; ಎನ್ನುವುದನ್ನು ಕಲಿಯುವ ಕಲೆ.
              ಇದು ನಿರ್ಬಂಧವಲ್ಲ &mdash; ಇದು ದಿಕ್ಕು; ಆದಾಯವನ್ನು ಪ್ರಗತಿಯನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವ ಕೌಶಲ್ಯ.
            </p>
            <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              ಹಣ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂಬುದನ್ನು ನೀವು ಅರಿತಿದ್ದೀರಿ. ಈಗ, ಅದನ್ನು ನಿಮಗಾಗಿ ಕೆಲಸ ಮಾಡಿಸಿಕೊಳ್ಳುವ ಸಮಯ ಬಂದಿದೆ.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        en: "Chapter 1: Why Budgeting Matters",
        kn: "ಅಧ್ಯಾಯ 1: ಬಜೆಟ್ ರಚನೆ ಏಕೆ ಮುಖ್ಯ?",
      },
      content: {
        en: (
          <>
            <p>
              Most of us think we know where our money goes &mdash; until we start tracking it.
            </p>
            <p>
              A coffee here, a delivery there, a weekend out… and suddenly, the money&apos;s gone before the month is.
            </p>
            <p>
              Budgeting is what gives your money clarity.
            </p>
            <p>
              It turns your spending from random into intentional.
            </p>
            <p>
              It&apos;s the map that connects your goals with your daily choices.
            </p>
            <p>
              When you budget, you&apos;re not limiting yourself &mdash; you&apos;re choosing what&apos;s worth your energy and effort.
            </p>
            <div className="pull-quote">&quot;You can&apos;t grow what you don&apos;t track.&quot;</div>
            <p>
              Budgeting is the foundation of wealth because it builds awareness &mdash; and awareness builds control.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              ಬಜೆಟ್ ರಚನೆ ಎಂದರೆ &quot;ಬೇಡ&quot; ಎನ್ನುವುದಲ್ಲ &mdash; ನಿಜವಾಗಿಯೂ ಮುಖ್ಯವಾದುದಕ್ಕೆ &quot;ಹೌದು&quot; ಎನ್ನುವುದನ್ನು ಕಲಿಯುವ ಕಲೆ.
            </p>
            <p>
              ಇದು ನಿರ್ಬಂಧವಲ್ಲ &mdash; ಇದು ದಿಕ್ಕು; ಆದಾಯವನ್ನು ಪ್ರಗತಿಯನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವ ಕೌಶಲ್ಯ.
            </p>
            <hr className="chapter-rule" />
            <p>
              ನಮ್ಮಲ್ಲಿ ಹೆಚ್ಚಿನವರಿಗೆ ತಮ್ಮ ಹಣ ಎಲ್ಲಿ ಹೋಗುತ್ತದೆ ಎಂದು ಗೊತ್ತಿದೆ ಎನಿಸುತ್ತದೆ, ಆದರೆ ಅದನ್ನು ಲೆಕ್ಕ ಇಡಲು ಶುರು ಮಾಡಿದಾಗಲೇ ನಿಜ ಗೊತ್ತಾಗುತ್ತದೆ.
            </p>
            <p>
              ಒಂದು ಕಡೆ ಕಾಫಿ, ಮತ್ತೊಂದು ಕಡೆ ಮನೆ ತಲುಪಿಸುವ ಆಹಾರ, ವಾರಾಂತ್ಯದ ಒಂದು ಹೊರಗಡೆ ತಿರುಗಾಟ… ಮತ್ತು ತಿಂಗಳು ಮುಗಿಯುವ ಮೊದಲೇ ಹಣ ಖಾಲಿಯಾಗಿರುತ್ತದೆ.
            </p>
            <p>
              ಬಜೆಟ್ ರಚನೆ ನಿಮ್ಮ ಹಣಕ್ಕೆ ಸ್ಪಷ್ಟತೆ ನೀಡುತ್ತದೆ.
            </p>
            <p>
              ಅದು ನಿಮ್ಮ ಖರ್ಚನ್ನು ಅಸ್ತವ್ಯಸ್ತದಿಂದ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.
            </p>
            <p>
              ನಿಮ್ಮ ಗುರಿಗಳನ್ನು ನಿಮ್ಮ ದೈನಂದಿನ ಆಯ್ಕೆಗಳೊಂದಿಗೆ ಜೋಡಿಸುವ ನಕ್ಷೆ ಅದು.
            </p>
            <p>
              ನೀವು ಬಜೆಟ್ ಮಾಡಿದಾಗ, ನೀವು ನಿಮ್ಮನ್ನು ಸೀಮಿತಗೊಳಿಸಿಕೊಳ್ಳುತ್ತಿಲ್ಲ &mdash; ನಿಮ್ಮ ಶ್ರಮ ಮತ್ತು ಪರಿಶ್ರಮಕ್ಕೆ ನಿಜವಾಗಿ ಯೋಗ್ಯವಾದುದನ್ನು ನೀವು ಆರಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೀರಿ.
            </p>
            <div className="pull-quote">&quot;ನೀವು ಲೆಕ್ಕ ಇಡದ್ದನ್ನು ನೀವು ಬೆಳೆಸಲು ಸಾಧ್ಯವಿಲ್ಲ.&quot;</div>
            <p>
              ಬಜೆಟ್ ರಚನೆ ಸಂಪತ್ತಿನ ಅಡಿಪಾಯ, ಏಕೆಂದರೆ ಅದು ಜಾಗೃತಿಯನ್ನು ಬೆಳೆಸುತ್ತದೆ &mdash; ಮತ್ತು ಜಾಗೃತಿ ನಿಯಂತ್ರಣವನ್ನು ರೂಪಿಸುತ್ತದೆ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 2: Track Before You Tweak",
        kn: "ಅಧ್ಯಾಯ 2: ಬದಲಾವಣೆ ಮಾಡುವ ಮೊದಲು ಲೆಕ್ಕ ಇಡಿ",
      },
      content: {
        en: (
          <>
            <p>
              Before you can improve your finances, you need to understand them.
            </p>
            <p>
              Start by tracking your spending for at least one full month.
            </p>
            <hr className="chapter-rule" />
            <h3>Step 1: List Every Source of Income</h3>
            <p>Your salary, side hustle, freelance gigs, or even rent earned &mdash; write it all down.</p>
            <hr className="chapter-rule" />
            <h3>Step 2: Note Down Your Expenses</h3>
            <p>Split them into categories like needs, wants, savings, and debt repayments.</p>
            <hr className="chapter-rule" />
            <h3>Step 3: Review</h3>
            <p>Where does most of your money go? What could you cut or optimize?</p>
            <p>You can use a budgeting tool or simply Excel / Google Sheets &mdash; whatever helps you stay consistent and honest.</p>
            <p>Don&apos;t rush to fix everything right away. Tracking is about observation, not judgment.</p>
            <div className="pull-quote">You can&apos;t fix leaks until you know where they are.</div>
          </>
        ),
        kn: (
          <>
            <p>
              ನಿಮ್ಮ ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಸುಧಾರಿಸುವ ಮೊದಲು, ಅದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಅವಶ್ಯಕ. ಕನಿಷ್ಠ ಒಂದು ಪೂರ್ಣ ತಿಂಗಳ ಕಾಲ ನಿಮ್ಮ ಖರ್ಚನ್ನು ದಾಖಲಿಸುವ ಮೂಲಕ ಪ್ರಾರಂಭಿಸಿ.
            </p>
            <hr className="chapter-rule" />
            <h3>ಹಂತ ೧: ಆದಾಯದ ಪಟ್ಟಿ</h3>
            <p>ನಿಮ್ಮ ವೇತನ, ಹೆಚ್ಚುವರಿ ಉದ್ಯೋಗ, ಸ್ವತಂತ್ರ ಕೆಲಸ, ಅಥವಾ ಬಾಡಿಗೆ ಆದಾಯ &mdash; ಎಲ್ಲವನ್ನೂ ಬರೆಯಿರಿ.</p>
            <hr className="chapter-rule" />
            <h3>ಹಂತ ೨: ಖರ್ಚಿನ ದಾಖಲೆ</h3>
            <p>ಅಗತ್ಯತೆಗಳು, ಬಯಕೆಗಳು, ಉಳಿತಾಯ ಮತ್ತು ಸಾಲ ಮರುಪಾವತಿ ಎಂದು ವಿಭಾಗಗಳಾಗಿ ವಿಂಗಡಿಸಿ.</p>
            <hr className="chapter-rule" />
            <h3>ಹಂತ ೩: ಪರಿಶೀಲಿಸಿ</h3>
            <p>ನಿಮ್ಮ ಹೆಚ್ಚಿನ ಹಣ ಎಲ್ಲಿ ಹೋಗುತ್ತದೆ? ಏನನ್ನು ಕಡಿತಗೊಳಿಸಬಹುದು ಅಥವಾ ಉತ್ತಮಗೊಳಿಸಬಹುದು?</p>
            <p>ನೀವು ಯಾವುದಾದರೂ ಬಜೆಟ್ ಸಾಧನ ಅಥವಾ ಸರಳವಾಗಿ Excel / Google Sheets ಬಳಸಬಹುದು &mdash; ನಿಮಗೆ ನಿರಂತರತೆ ಮತ್ತು ಪ್ರಾಮಾಣಿಕತೆ ಕಾಪಾಡಲು ಸಹಾಯ ಮಾಡುವುದು ಯಾವುದಾದರೂ ಸರಿ.</p>
            <p>
              ಎಲ್ಲವನ್ನೂ ತಕ್ಷಣವೇ ಸರಿಪಡಿಸಲು ಆತುರ ಪಡಬೇಡಿ. ಲೆಕ್ಕ ಇಡುವುದು ವಿಮರ್ಶೆಗಾಗಿ ಅಲ್ಲ &mdash; ಅವಲೋಕನಕ್ಕಾಗಿ.
            </p>
            <div className="pull-quote">ಸೋರಿಕೆ ಎಲ್ಲಿದೆ ಎಂದು ತಿಳಿಯದ ಹೊರತು ಅದನ್ನು ಮುಚ್ಚಲು ಸಾಧ್ಯವಿಲ್ಲ.</div>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 3: The 50-30-20 Rule",
        kn: "ಅಧ್ಯಾಯ 3: ೫೦-೩೦-೨೦ ನಿಯಮ",
      },
      content: {
        en: (
          <>
            <p>This simple rule is a timeless favourite because it&apos;s easy, balanced, and effective.</p>
            <hr className="chapter-rule" />
            <h3>50% &mdash; Needs</h3>
            <p>Essentials like rent, groceries, utilities, transport.</p>
            <hr className="chapter-rule" />
            <h3>30% &mdash; Wants</h3>
            <p>Dining out, shopping, hobbies, travel.</p>
            <hr className="chapter-rule" />
            <h3>20% &mdash; Savings &amp; Investments</h3>
            <p>Emergency fund, SIPs, or long-term goals.</p>
            <hr className="chapter-rule" />
            <p>Start here and then adapt it as you grow.</p>
            <p>If you&apos;re saving for a big goal, go 40-30-30. If you&apos;re early in your career and want flexibility, maybe 60-25-15.</p>
            <p>There&apos;s no perfect ratio &mdash; just the one that helps you stay consistent.</p>
            <div className="pull-quote">Budgeting isn&apos;t about strict rules &mdash; it&apos;s about balance with purpose.</div>
          </>
        ),
        kn: (
          <>
            <p>ಈ ಸರಳ ನಿಯಮವು ಎಂದೆಂದಿಗೂ ಜನಪ್ರಿಯವಾಗಿದೆ &mdash; ಏಕೆಂದರೆ ಇದು ಸುಲಭ, ಸಮತೋಲಿತ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ.</p>
            <hr className="chapter-rule" />
            <h3>೫೦% &mdash; ಅಗತ್ಯತೆಗಳು</h3>
            <p>ಬಾಡಿಗೆ, ದಿನಸಿ, ನೀರು-ವಿದ್ಯುತ್, ಸಾರಿಗೆಯಂತಹ ಮೂಲಭೂತ ಅವಶ್ಯಕತೆಗಳು.</p>
            <hr className="chapter-rule" />
            <h3>೩೦% &mdash; ಬಯಕೆಗಳು</h3>
            <p>ಹೊರಗಡೆ ಊಟ, ಶಾಪಿಂಗ್, ಹವ್ಯಾಸಗಳು, ಪ್ರಯಾಣ.</p>
            <hr className="chapter-rule" />
            <h3>೨೦% &mdash; ಉಳಿತಾಯ ಮತ್ತು ಹೂಡಿಕೆ</h3>
            <p>ತುರ್ತು ನಿಧಿ, SIP ಗಳು, ಅಥವಾ ದೀರ್ಘಕಾಲೀನ ಗುರಿಗಳು.</p>
            <hr className="chapter-rule" />
            <p>
              ಇಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸಿ, ನಂತರ ನಿಮ್ಮ ಬೆಳವಣಿಗೆಗೆ ತಕ್ಕಂತೆ ಅದನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ. ದೊಡ್ಡ ಗುರಿಗಾಗಿ ಉಳಿತಾಯ ಮಾಡುತ್ತಿದ್ದರೆ, ೪೦-೩೦-೩೦ ಅನುಸರಿಸಿ. ವೃತ್ತಿಜೀವನದ ಆರಂಭದಲ್ಲಿದ್ದು ಹೊಂದಿಕೊಳ್ಳುವಿಕೆ ಬೇಕಿದ್ದರೆ, ೬೦-೨೫-೧೫ ಸರಿಹೊಂದಬಹುದು.
            </p>
            <p>ಯಾವುದೇ ನಿಖರವಾದ ಅನುಪಾತ ಇಲ್ಲ &mdash; ನಿಮಗೆ ನಿರಂತರತೆ ಕಾಪಾಡಲು ಸಹಾಯ ಮಾಡುವ ಅನುಪಾತವೇ ಸರಿಯಾದದ್ದು.</p>
            <div className="pull-quote">ಬಜೆಟ್ ರಚನೆ ಎಂದರೆ ಕಟ್ಟುನಿಟ್ಟಾದ ನಿಯಮಗಳಲ್ಲ &mdash; ಉದ್ದೇಶದೊಂದಿಗೆ ಸಮತೋಲನ ಕಾಪಾಡುವುದು.</div>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 4: Smart Saving & Spending Hacks",
        kn: "ಅಧ್ಯಾಯ 4: ಬುದ್ಧಿವಂತ ಉಳಿತಾಯ ಮತ್ತು ಖರ್ಚಿನ ಸಲಹೆಗಳು",
      },
      content: {
        en: (
          <>
            <p>Money management isn&apos;t only about cutting down &mdash; it&apos;s about making your spending smarter.</p>
            <p>Here are some habits that actually work:</p>
            <hr className="chapter-rule" />
            <h3>Automate Savings</h3>
            <p>Set them up to transfer on salary day &mdash; before you can spend them.</p>
            <hr className="chapter-rule" />
            <h3>Sleep on Impulse Buys</h3>
            <p>Wait 24 hours before you spend on anything non-essential.</p>
            <hr className="chapter-rule" />
            <h3>Track Subscriptions</h3>
            <p>Cancel the ones you don&apos;t use regularly. They add up fast.</p>
            <hr className="chapter-rule" />
            <h3>Use the Envelope Method (Digitally)</h3>
            <p>Separate &quot;fun money&quot; from essentials so you spend guilt-free within limits.</p>
            <hr className="chapter-rule" />
            <h3>Have a Guilt-Free Fund</h3>
            <p>It keeps you consistent and sane. Spend on what you love. Save on what doesn&apos;t matter.</p>
            <div className="pull-quote">When you&apos;re intentional, every expense starts to feel like an investment in your own priorities.</div>
          </>
        ),
        kn: (
          <>
            <p>ಹಣ ನಿರ್ವಹಣೆ ಎಂದರೆ ಕೇವಲ ಖರ್ಚು ಕಡಿತಗೊಳಿಸುವುದಲ್ಲ &mdash; ನಿಮ್ಮ ಖರ್ಚನ್ನು ಹೆಚ್ಚು ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಮಾಡುವುದು.</p>
            <hr className="chapter-rule" />
            <h3>ಉಳಿತಾಯವನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಿ</h3>
            <p>ವೇತನ ಬಂದ ದಿನವೇ ವರ್ಗಾವಣೆಯಾಗುವಂತೆ ಹೊಂದಿಸಿ &mdash; ಖರ್ಚು ಮಾಡುವ ಮೊದಲೇ.</p>
            <hr className="chapter-rule" />
            <h3>ಆವೇಗದ ಖರೀದಿಗೆ ತಡೆ ಹಾಕಿ</h3>
            <p>ಅನಗತ್ಯ ವಸ್ತುವಿಗೆ ಖರ್ಚು ಮಾಡುವ ಮೊದಲು ೨೪ ಗಂಟೆ ಕಾಯಿರಿ.</p>
            <hr className="chapter-rule" />
            <h3>ಚಂದಾದಾರಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ</h3>
            <p>ನಿಯಮಿತವಾಗಿ ಬಳಸದವುಗಳನ್ನು ರದ್ದುಗೊಳಿಸಿ. ಅವು ವೇಗವಾಗಿ ಸೇರಿಕೊಳ್ಳುತ್ತವೆ.</p>
            <hr className="chapter-rule" />
            <h3>ಹೊದಿಕೆ ವಿಧಾನ (ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ)</h3>
            <p>&quot;ಮನರಂಜನೆಯ ಹಣ&quot;ವನ್ನು ಅಗತ್ಯ ಖರ್ಚಿನಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಇರಿಸಿ.</p>
            <hr className="chapter-rule" />
            <h3>ಅಪರಾಧಭಾವನೆ ಇಲ್ಲದ ನಿಧಿ</h3>
            <p>ಇದು ನಿಮ್ಮನ್ನು ನಿರಂತರ ಮತ್ತು ಮಾನಸಿಕವಾಗಿ ಸ್ಥಿರವಾಗಿರಿಸುತ್ತದೆ. ನೀವು ಪ್ರೀತಿಸುವುದರ ಮೇಲೆ ಖರ್ಚು ಮಾಡಿ. ಮುಖ್ಯವಲ್ಲದ್ದರ ಮೇಲೆ ಉಳಿಸಿ.</p>
            <div className="pull-quote">ನೀವು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನಿರ್ಧರಿಸಿದಾಗ, ಪ್ರತಿಯೊಂದು ಖರ್ಚು ನಿಮ್ಮ ಆದ್ಯತೆಗಳಲ್ಲಿನ ಹೂಡಿಕೆಯಂತೆ ಭಾಸವಾಗತೊಡಗುತ್ತದೆ.</div>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 5: Build Your Emergency Fund &mdash; Your First Line of Defense",
        kn: "ಅಧ್ಯಾಯ 5: ನಿಮ್ಮ ತುರ್ತು ನಿಧಿ ನಿರ್ಮಿಸಿ",
      },
      content: {
        en: (
          <>
            <p>Before you start chasing returns, make sure you&apos;re protected.</p>
            <p>Investing without an emergency fund is like driving fast without brakes.</p>
            <p>
              Life&apos;s surprises &mdash; job loss, medical expenses, home or car repairs &mdash; can arrive unannounced.
              An emergency fund gives you the financial breathing room to handle them calmly,
              without touching your investments or going into debt.
            </p>
            <hr className="chapter-rule" />
            <h3>How Much Should You Save?</h3>
            <p>Aim to set aside 3&ndash;6 months of your monthly expenses.</p>
            <p>
              If you&apos;re self-employed, freelancing, or supporting dependents, build a larger cushion &mdash; around 6&ndash;9 months of expenses.
            </p>
            <p>This might sound like a big goal, but remember, it&apos;s your financial safety net.</p>
            <p>Every rupee here buys you peace of mind. Build it aggressively before you focus on investing.</p>
            <hr className="chapter-rule" />
            <h3>Where to Park It</h3>
            <p>
              Your emergency fund needs to be safe, stable, and quickly accessible &mdash; but still earn better returns than a regular savings account.
            </p>
            <p>
              <strong>Debt Funds (Liquid or Ultra Short-Term):</strong> Ideal for slightly better returns (~6&ndash;7%) with easy access in 1&ndash;2 days.
            </p>
            <p>
              <strong>High-Interest Savings Accounts:</strong> Good for partial liquidity &mdash; keep 1&ndash;2 months&apos; worth here for instant access.
            </p>
            <p>
              <strong>Short-Term FDs (1&ndash;3 months):</strong> Optional for those who prefer fixed returns, but less flexible than debt funds.
            </p>
            <p>
              Avoid putting this money in stocks, mutual funds, or any high-risk investment. Your goal here isn&apos;t growth &mdash; it&apos;s stability and access.
            </p>
            <hr className="chapter-rule" />
            <h3>How to Build It</h3>
            <p>
              Start small, but stay consistent &mdash; set up an automatic transfer every month.
              Redirect bonuses, tax refunds, or side income into your fund.
              Keep your emergency fund separate from regular savings so you don&apos;t dip into it casually.
            </p>
            <div className="pull-quote">When you have an emergency fund, you don&apos;t just survive uncertainty &mdash; you stay in control.</div>
          </>
        ),
        kn: (
          <>
            <p>ಲಾಭದ ಹಿಂದೆ ಓಡುವ ಮೊದಲು, ನೀವು ಸುರಕ್ಷಿತವಾಗಿದ್ದೀರಾ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.</p>
            <p>
              ತುರ್ತು ನಿಧಿಯಿಲ್ಲದೆ ಹೂಡಿಕೆ ಮಾಡುವುದು, ಬ್ರೇಕ್ ಇಲ್ಲದ ವಾಹನದಲ್ಲಿ ವೇಗವಾಗಿ ಚಲಿಸಿದಂತೆ.
            </p>
            <p>
              ಉದ್ಯೋಗ ನಷ್ಟ, ವೈದ್ಯಕೀಯ ಖರ್ಚು, ಮನೆ ಅಥವಾ ವಾಹನದ ದುರಸ್ತಿ &mdash; ಜೀವನದ ಅನಿರೀಕ್ಷಿತ ಸಂದರ್ಭಗಳು ಯಾವಾಗ ಬೇಕಾದರೂ ಬರಬಹುದು. ತುರ್ತು ನಿಧಿ ನಿಮ್ಮ ಹೂಡಿಕೆಗೆ ಕೈ ಹಾಕದೆ ಅಥವಾ ಸಾಲದ ಮೊರೆ ಹೋಗದೆ, ಅವುಗಳನ್ನು ಶಾಂತಚಿತ್ತದಿಂದ ನಿಭಾಯಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.
            </p>
            <hr className="chapter-rule" />
            <h3>ಎಷ್ಟು ಉಳಿಸಬೇಕು?</h3>
            <p>ನಿಮ್ಮ ಮಾಸಿಕ ಖರ್ಚಿನ ೩ ರಿಂದ ೬ ತಿಂಗಳಿನಷ್ಟು ಮೊತ್ತ ಪ್ರತ್ಯೇಕವಾಗಿ ಇರಿಸಿ. ಸ್ವಯಂ ಉದ್ಯೋಗಿಯಾಗಿದ್ದರೆ ಅಥವಾ ಅವಲಂಬಿತರನ್ನು ಸಾಕುತ್ತಿದ್ದರೆ, ೬ ರಿಂದ ೯ ತಿಂಗಳ ದೊಡ್ಡ ನಿಧಿ ನಿರ್ಮಿಸಿ.</p>
            <hr className="chapter-rule" />
            <h3>ಎಲ್ಲಿ ಇರಿಸಬೇಕು?</h3>
            <p><strong>ಡೆಟ್ ಫಂಡ್‌ಗಳು:</strong> ೧-೨ ದಿನಗಳಲ್ಲಿ ಸುಲಭ ಹಿಂಪಡೆಯುವಿಕೆಯೊಂದಿಗೆ ಸ್ವಲ್ಪ ಉತ್ತಮ ಆದಾಯ (~೬-೭%).</p>
            <p><strong>ಹೆಚ್ಚಿನ ಬಡ್ಡಿ ಉಳಿತಾಯ ಖಾತೆಗಳು:</strong> ತಕ್ಷಣದ ಲಭ್ಯತೆಗಾಗಿ ೧-೨ ತಿಂಗಳ ಮೊತ್ತ ಇಲ್ಲಿ ಇರಿಸಿ.</p>
            <p><strong>ಅಲ್ಪಾವಧಿ ಎಫ್‌ಡಿಗಳು:</strong> ಸ್ಥಿರ ಆದಾಯ ಬಯಸುವವರಿಗೆ ಐಚ್ಛಿಕ.</p>
            <p>ಈ ಹಣವನ್ನು ಷೇರುಗಳು ಅಥವಾ ಯಾವುದೇ ಅಧಿಕ ಅಪಾಯದ ಹೂಡಿಕೆಯಲ್ಲಿ ಹಾಕಬೇಡಿ. ಇಲ್ಲಿ ನಿಮ್ಮ ಗುರಿ ಬೆಳವಣಿಗೆಯಲ್ಲ &mdash; ಸ್ಥಿರತೆ ಮತ್ತು ಲಭ್ಯತೆ.</p>
            <hr className="chapter-rule" />
            <h3>ಹೇಗೆ ನಿರ್ಮಿಸಬೇಕು?</h3>
            <p>ಚಿಕ್ಕದಾಗಿ ಪ್ರಾರಂಭಿಸಿ, ನಿರಂತರವಾಗಿ ಮುಂದುವರಿಯಿರಿ. ಬೋನಸ್, ತೆರಿಗೆ ಮರುಪಾವತಿ ಅಥವಾ ಹೆಚ್ಚುವರಿ ಆದಾಯವನ್ನು ನಿಮ್ಮ ನಿಧಿಗೆ ತಿರುಗಿಸಿ. ಸಾಮಾನ್ಯ ಉಳಿತಾಯದಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಇರಿಸಿ.</p>
            <div className="pull-quote">ತುರ್ತು ನಿಧಿ ಇದ್ದಾಗ, ನೀವು ಅನಿಶ್ಚಿತತೆಯನ್ನು ಕೇವಲ ಬದುಕಿ ಉಳಿಯುವುದಿಲ್ಲ &mdash; ನೀವು ನಿಯಂತ್ರಣದಲ್ಲಿ ಇರುತ್ತೀರಿ.</div>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 6: Automate & Simplify",
        kn: "ಅಧ್ಯಾಯ 6: ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಿ ಮತ್ತು ಸರಳಗೊಳಿಸಿ",
      },
      content: {
        en: (
          <>
            <p>The best budget is the one that runs on autopilot.</p>
            <hr className="chapter-rule" />
            <h3>Auto-Transfer Savings</h3>
            <p>Set up a fixed % of your income to move into savings/investments every month &mdash; on salary day.</p>
            <hr className="chapter-rule" />
            <h3>Set Reminders</h3>
            <p>For bill payments and financial reviews &mdash; so nothing slips through the cracks.</p>
            <hr className="chapter-rule" />
            <h3>Use a Budgeting Tool</h3>
            <p>A simple Excel or budgeting app lets you track progress without obsessing daily.</p>
            <hr className="chapter-rule" />
            <h3>Review Monthly, Not Daily</h3>
            <p>Check in on your finances once a month &mdash; not every single day. Automation keeps you consistent even on lazy or busy days.</p>
            <div className="pull-quote">You don&apos;t need to control every rupee. You just need to direct it.</div>
          </>
        ),
        kn: (
          <>
            <p>ಅತ್ಯುತ್ತಮ ಬಜೆಟ್ ಎಂದರೆ ತಾನಾಗಿಯೇ ನಡೆಯುವಂಥದ್ದು.</p>
            <hr className="chapter-rule" />
            <h3>ಉಳಿತಾಯ ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಿ</h3>
            <p>ಪ್ರತಿ ತಿಂಗಳು ನಿಮ್ಮ ಆದಾಯದ ನಿಗದಿತ ಶೇಕಡಾವಾರು ಮೊತ್ತವನ್ನು ಉಳಿತಾಯ/ಹೂಡಿಕೆಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವರ್ಗಾಯಿಸುವಂತೆ ಹೊಂದಿಸಿ.</p>
            <hr className="chapter-rule" />
            <h3>ಜ್ಞಾಪನೆಗಳನ್ನು ಹೊಂದಿಸಿ</h3>
            <p>ಬಿಲ್ ಪಾವತಿ ಮತ್ತು ಆರ್ಥಿಕ ಪರಿಶೀಲನೆಗಾಗಿ &mdash; ಯಾವುದೂ ತಪ್ಪಿಹೋಗದಂತೆ.</p>
            <hr className="chapter-rule" />
            <h3>ಬಜೆಟ್ ಸಾಧನ ಬಳಸಿ</h3>
            <p>ಸರಳ Excel ಅಥವಾ ಬಜೆಟ್ ಅಪ್ಲಿಕೇಶನ್ ನಿಮ್ಮ ಪ್ರಗತಿ ಗಮನಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ &mdash; ಪ್ರತಿದಿನ ಗಮನಿಸದೆ.</p>
            <hr className="chapter-rule" />
            <h3>ತಿಂಗಳಿಗೊಮ್ಮೆ ಪರಿಶೀಲಿಸಿ</h3>
            <p>ನಿಮ್ಮ ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಪ್ರತಿದಿನ ಅಲ್ಲ &mdash; ತಿಂಗಳಿಗೊಮ್ಮೆ ಪರಿಶೀಲಿಸಿ. ಸ್ವಯಂಚಾಲನೆ ಸೋಮಾರಿ ಅಥವಾ ಒತ್ತಡದ ದಿನಗಳಲ್ಲಿಯೂ ನಿಮ್ಮನ್ನು ನಿರಂತರವಾಗಿ ಮುನ್ನಡೆಸುತ್ತದೆ.</p>
            <div className="pull-quote">ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಯನ್ನೂ ನಿಯಂತ್ರಿಸುವ ಅಗತ್ಯವಿಲ್ಲ. ಅದಕ್ಕೆ ಸರಿಯಾದ ದಿಕ್ಕು ತೋರಿಸಿದರೆ ಸಾಕು.</div>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 7: Your Finances, Your Control",
        kn: "ಅಧ್ಯಾಯ 7: ನಿಮ್ಮ ಆರ್ಥಿಕತೆ, ನಿಮ್ಮ ನಿಯಂತ್ರಣ",
      },
      content: {
        en: (
          <>
            <p>Budgeting isn&apos;t about cutting down &mdash; it&apos;s about choosing better.</p>
            <p>
              It&apos;s not a restriction; it&apos;s freedom &mdash; the freedom to spend on what matters,
              to save for what&apos;s important, and to live life on your terms.
            </p>
            <p>Every decision in your budget is a reflection of your priorities and a quiet promise to your future self.</p>
            <p>When you plan your money, you gain control. And with control comes confidence, peace, and growth.</p>
            <hr className="chapter-rule" />
            <p>You&apos;ve made it this far &mdash; understanding how money moves, where it goes, and how to make it work for you.</p>
            <p>That&apos;s no small feat. You&apos;ve built the foundation &mdash; awareness, clarity, and intent.</p>
            <p>Now, it&apos;s time to take the next step.</p>
            <p>Because once you&apos;ve learned to manage money, the real magic begins when you learn to grow it.</p>
            <div className="pull-quote">Budget wisely today, so you can invest boldly tomorrow.</div>
          </>
        ),
        kn: (
          <>
            <p>ಬಜೆಟ್ ರಚನೆ ಎಂದರೆ ಕಡಿತಗೊಳಿಸುವುದಲ್ಲ &mdash; ಉತ್ತಮ ಆಯ್ಕೆ ಮಾಡುವುದು.</p>
            <p>
              ಇದು ನಿರ್ಬಂಧವಲ್ಲ; ಇದು ಸ್ವಾತಂತ್ರ್ಯ &mdash; ಮುಖ್ಯವಾದುದರ ಮೇಲೆ ಖರ್ಚು ಮಾಡುವ, ಮಹತ್ವದ್ದನ್ನು ಉಳಿಸುವ, ಮತ್ತು ನಿಮ್ಮ ಷರತ್ತುಗಳ ಮೇಲೆ ಜೀವನ ನಡೆಸುವ ಸ್ವಾತಂತ್ರ್ಯ.
            </p>
            <p>
              ನಿಮ್ಮ ಬಜೆಟ್‌ನಲ್ಲಿನ ಪ್ರತಿಯೊಂದು ನಿರ್ಧಾರವೂ ನಿಮ್ಮ ಆದ್ಯತೆಗಳ ಪ್ರತಿಬಿಂಬ ಮತ್ತು ನಿಮ್ಮ ಭವಿಷ್ಯದ ನಿಮಗೆ ನೀವೇ ನೀಡುವ ಮೌನ ವಾಗ್ದಾನ.
            </p>
            <p>ನೀವು ಹಣವನ್ನು ಯೋಜಿಸಿದಾಗ, ನಿಯಂತ್ರಣ ದೊರೆಯುತ್ತದೆ. ಮತ್ತು ನಿಯಂತ್ರಣದೊಂದಿಗೆ ಆತ್ಮವಿಶ್ವಾಸ, ಮನಃಶಾಂತಿ ಮತ್ತು ಬೆಳವಣಿಗೆ ಬರುತ್ತದೆ.</p>
            <hr className="chapter-rule" />
            <p>
              ನೀವು ಇಲ್ಲಿಯವರೆಗೆ ಬಂದಿದ್ದೀರಿ! ಹಣ ಹೇಗೆ ಚಲಿಸುತ್ತದೆ, ಎಲ್ಲಿ ಹೋಗುತ್ತದೆ, ಮತ್ತು ಅದನ್ನು ನಿಮಗಾಗಿ ಹೇಗೆ ಕೆಲಸ ಮಾಡಿಸಿಕೊಳ್ಳಬೇಕು ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೀರಿ. ಇದು ಚಿಕ್ಕ ಸಾಧನೆಯೇನಲ್ಲ. ನೀವು ಅಡಿಪಾಯ ನಿರ್ಮಿಸಿದ್ದೀರಿ &mdash; ಜಾಗೃತಿ, ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಉದ್ದೇಶ.
            </p>
            <p>ಈಗ, ಮುಂದಿನ ಹೆಜ್ಜೆ ಇಡುವ ಸಮಯ ಬಂದಿದೆ. ಏಕೆಂದರೆ ಹಣವನ್ನು ನಿರ್ವಹಿಸಲು ಕಲಿತ ನಂತರ, ಅದನ್ನು ಬೆಳೆಸಲು ಕಲಿತಾಗ ನಿಜವಾದ ಮಾಯಾಜಾಲ ಆರಂಭವಾಗುತ್ತದೆ.</p>
            <div className="pull-quote">ಇಂದು ವಿವೇಕದಿಂದ ಬಜೆಟ್ ರಚಿಸಿ &mdash; ನಾಳೆ ಧೈರ್ಯದಿಂದ ಹೂಡಿಕೆ ಮಾಡಲು.</div>
          </>
        ),
      },
    },
  ];

  // =============================
  // STATE & PARAMS
  // =============================
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const moduleId = "budgeting-101";

  const current = chapters[chapterIndex];

  useEffect(() => {
    async function loadProgress() {
      const chapter = chapterFromURL;

      // URL override wins
      if (chapter) {
        setChapterIndex(Number(chapter));
        setIsLoading(false);
        return;
      }

      // Load from DB
      const res = await fetch("/api/modules", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        console.log("progress row:", data);

        if (data.moduleId === moduleId) {
          setChapterIndex(data.chapterNumber ?? 0);
        }
      }

      setIsLoading(false); // done loading regardless
    }

    loadProgress();
  }, []);


  async function saveProgress(chapterNumber: number) {
    await fetch("/api/modules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        moduleId,
        chapterNumber,
      }),
    });
  }

  if (isLoading) {
    return (
      <main className="module-loading-container">
        <div className="spinner"></div>
        <p className="loading-text">{t("loadingProgress")}</p>
      </main>
    );
  }

  // =============================
  // Render page
  // =============================
  return (
    <main className="container module-detail-container">

      {/* === Chapter Progress Header === */}
      <div className="module-progress-header">
        <div className="progress-wrap">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.round((chapterIndex / (chapters.length - 1)) * 100)}%` }}
            />
          </div>
          <span className="progress-label">
            {chapterIndex} of {chapters.length - 1} {t("chapters")}
          </span>
        </div>
        <div className="chapter-dots">
          {chapters.slice(1).map((_, i) => {
            const dotIdx = i + 1;
            return (
              <button
                key={dotIdx}
                className={["chapter-dot", chapterIndex > dotIdx ? "done" : "", chapterIndex === dotIdx ? "active" : ""].filter(Boolean).join(" ")}
                onClick={() => { setChapterIndex(dotIdx); saveProgress(dotIdx); }}
              >
                {dotIdx}
              </button>
            );
          })}
        </div>
      </div>

      {/* === Active Chapter === */}
      <section className="chapters-list">
        <div className="chapter">
          <h2>{current.title[lang]}</h2>
          {current.content[lang]}
        </div>
      </section>

      {/* === Floating Navigation Buttons === */}
      <div className="chapter-nav-buttons">
        <button
          className="chapter-btn prev-btn"
          onClick={async () => {
            setChapterIndex((i) => {
              const newIndex = Math.max(0, i - 1);
              saveProgress(newIndex);
              return newIndex;
            });
          }}
          disabled={chapterIndex === 0}
        >
          {t("previous")}
        </button>

        <button
          className="chapter-btn next-btn"
          onClick={async () => {
            setChapterIndex((i) => {
              const newIndex = Math.min(chapters.length - 1, i + 1);
              saveProgress(newIndex);
              return newIndex;
            });
          }}
          disabled={chapterIndex === chapters.length - 1}
        >
          {t("next")}
        </button>
      </div>

    </main>
  );
}
