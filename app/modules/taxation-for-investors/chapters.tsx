import React from "react";

const imgStyle: React.CSSProperties = {
  display: "block",
  margin: "28px auto",
  maxWidth: "100%",
  borderRadius: 12,
  border: "1px solid rgba(201,168,76,0.15)",
};

export const chapters = [
  // ==============================
  // CHAPTER 1
  // ==============================
  {
    title: {
      en: "Chapter 1: Understanding the Income Tax System in India",
      kn: "ಅಧ್ಯಾಯ ೧: ಭಾರತದ ಆದಾಯ ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯ ಪರಿಚಯ",
    },
    content: {
      en: (
        <>
          <p>
            Understanding taxation is an important part of investing because{" "}
            <strong>
              the return that ultimately matters is the return you keep after taxes
            </strong>
            . Two investments that generate the same pre-tax return can lead to very different
            outcomes once taxation is applied. Over long periods, even small differences in tax
            treatment can significantly affect the final value of your portfolio because taxes
            reduce the capital that continues to compound.
          </p>
          <p>
            In India, investment income interacts with the broader{" "}
            <strong>income tax framework</strong> and different types of income - such as
            capital gains, dividends or interest - are taxed in different ways. India currently
            has two tax structures: the <strong>old tax regime</strong> and the{" "}
            <strong>new tax regime</strong>. The new regime has become the default option and
            is expected to be more relevant for many taxpayers. This module will focus
            primarily on the <strong>new tax regime</strong>. The goal is not to turn you into
            a tax expert, but to help you understand how taxation affects common investment
            income and how thoughtful planning can help you{" "}
            <strong>retain more of your investment returns over time</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>The Five Heads of Income</h3>
          <p>
            Under the Income Tax Act, income is classified into{" "}
            <strong>five broad heads</strong>, each with its own rules for calculation and
            taxation. Understanding these categories helps investors identify how different
            forms of investment income are treated under tax law.
          </p>
          <img src="/taxation/image5.png" alt="Five heads of income under Indian tax law" style={imgStyle} />
          <p>
            <strong>1. Income from Salary</strong> - monthly salary, bonuses and incentives,
            allowances and employer-provided benefits. While salary income is not directly
            related to investing, it often forms the primary source of capital that investors
            use to build their portfolios.
          </p>
          <p>
            <strong>2. Income from House Property</strong> - rental income from residential or
            commercial property. Since real estate is often a major component of personal
            wealth, income from property may play a role in an investor&apos;s overall financial
            planning.
          </p>
          <p>
            <strong>3. Profits and Gains from Business or Profession</strong> - income through
            business activities, professional services, freelancing or consulting. For many
            investors, business income becomes an important source of capital that is later
            allocated to financial investments.
          </p>
          <p>
            <strong>4. Capital Gains</strong> - arise when an asset is sold for more than its
            purchase price. This is one of the most important categories for investors. Capital
            gains may occur when selling stocks, mutual funds, real estate, gold or bonds.
            Taxation depends on several factors, particularly the holding period of the asset.
          </p>
          <p>
            <strong>5. Income from Other Sources</strong> - a residual category for income
            that does not fall under the other four heads. Many common investment-related
            earnings fall here: interest earned from fixed deposits, savings account interest,
            bond interest, and dividend income from stocks or mutual funds.
          </p>
          <hr className="chapter-rule" />
          <h3>Why This Classification Matters</h3>
          <p>
            In practice, most investment income will fall into one of two categories:{" "}
            <strong>Capital Gains</strong> (profits from selling investments) or{" "}
            <strong>Income from Other Sources</strong> (interest or dividend income). The
            following chapters will focus on these categories in detail so that you can
            understand how various investment returns interact with the tax system.
          </p>
          <div className="pull-quote">
            The return that ultimately matters is not the return your investment generates -
            it is the return you keep after taxes. Understanding taxation is as important as
            understanding markets.
          </div>
        </>
      ),
      kn: (
        <>
        <p>ತೆರಿಗೆಯ ನಂತರ ನೀವು ಉಳಿಸಿಕೊಳ್ಳುವ ಆದಾಯವೇ ನಿಜವಾದ ಮಹತ್ವದ ಆದಾಯ ಆಗಿರುವ ಕಾರಣ, ತೆರಿಗೆ ತಿಳಿವಳಿಕೆಯು ಹೂಡಿಕೆಯ ಒಂದು ಮುಖ್ಯ ಭಾಗ. ಅದೇ ತೆರಿಗೆ-ಪೂರ್ವ ಆದಾಯ ಗಳಿಸುವ ಎರಡು ಹೂಡಿಕೆಗಳು ತೆರಿಗೆ ಅನ್ವಯಿಸಿದ ನಂತರ ಬಹಳ ಭಿನ್ನ ಫಲಿತಾಂಶಗಳಿಗೆ ದಾರಿ ಮಾಡಬಹುದು. ದೀರ್ಘ ಅವಧಿಗಳಲ್ಲಿ, ತೆರಿಗೆ ವ್ಯವಹಾರದಲ್ಲಿ ಸಣ್ಣ ವ್ಯತ್ಯಾಸಗಳೂ ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಅಂತಿಮ ಮೌಲ್ಯವನ್ನು ಗಣನೀಯವಾಗಿ ಪ್ರಭಾವಿಸಬಹುದು — ಏಕೆಂದರೆ ತೆರಿಗೆಗಳು ವೃದ್ಧಿಸುತ್ತ ಮುಂದುವರಿಯುವ ಬಂಡವಾಳವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.</p>
        <p>ಭಾರತದಲ್ಲಿ, ಹೂಡಿಕೆ ಆದಾಯವು ವಿಶಾಲ ಆದಾಯ ತೆರಿಗೆ ಚೌಕಟ್ಟಿನೊಂದಿಗೆ ಸಂವಹಿಸುತ್ತದೆ ಮತ್ತು ಬಂಡವಾಳ ಲಾಭ, ಲಾಭಾಂಶ ಅಥವಾ ಬಡ್ಡಿಯಂತಹ ವಿಭಿನ್ನ ಆದಾಯ ವಿಧಗಳಿಗೆ ವಿಭಿನ್ನ ರೀತಿಯಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಈ ಘಟಕದಲ್ಲಿ, ಸಾಮಾನ್ಯ ಹೂಡಿಕೆ ಆದಾಯಗಳಿಗೆ ಭಾರತೀಯ ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯು ಹೇಗೆ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ನಾವು ಅಧ್ಯಯನ ಮಾಡುತ್ತೇವೆ, ಇದರಿಂದ ನಿಮ್ಮ ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳ ನಿಜವಾದ ತೆರಿಗೆ-ನಂತರದ ಪ್ರಭಾವವನ್ನು ನೀವು ಉತ್ತಮವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದು.</p>
        <p>ಭಾರತದಲ್ಲಿ ಪ್ರಸ್ತುತ ವ್ಯಕ್ತಿಗಳಿಗೆ ಎರಡು ತೆರಿಗೆ ರಚನೆಗಳು ಲಭ್ಯವಿವೆ: ಹಳೆಯ ತೆರಿಗೆ ಪದ್ಧತಿ ಮತ್ತು ಹೊಸ ತೆರಿಗೆ ಪದ್ಧತಿ. ಎರಡೂ ವ್ಯವಸ್ಥೆಗಳು ಮುಂದುವರಿಯುತ್ತಿದ್ದರೂ, ಹೊಸ ಪದ್ಧತಿಯು ಡಿಫಾಲ್ಟ್ ಆಯ್ಕೆಯಾಗಿದ್ದು ಕಡಿಮೆ ಕಡಿತಗಳ ಬದಲಿಗೆ ಕಡಿಮೆ ತೆರಿಗೆ ದರಗಳನ್ನು ನೀಡುವ ಕಾರಣ ಅನೇಕ ತೆರಿಗೆದಾರರಿಗೆ ಹೆಚ್ಚು ಪ್ರಸ್ತುತವಾಗಿದೆ. ಸರಳತೆ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಪ್ರಸ್ತುತತೆಗಾಗಿ, ಈ ಘಟಕವು ಪ್ರಾಥಮಿಕವಾಗಿ ಹೊಸ ತೆರಿಗೆ ಪದ್ಧತಿಯ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ — ಏಕೆಂದರೆ ಹೆಚ್ಚಿನ ಹೂಡಿಕೆದಾರರು ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ಈ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಳಸುವ ಸಾಧ್ಯತೆ ಇದೆ.</p>
        <p>ಈ ಘಟಕದ ಗುರಿಯು ನಿಮ್ಮನ್ನು ತೆರಿಗೆ ತಜ್ಞರನ್ನಾಗಿ ಮಾಡುವುದಲ್ಲ, ಆದರೆ ತೆರಿಗೆಯು ಸಾಮಾನ್ಯ ಹೂಡಿಕೆ ಆದಾಯವನ್ನು ಹೇಗೆ ಪ್ರಭಾವಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಮತ್ತು ಸುಚಿಂತಿತ ಯೋಜನೆಯು ನಿಮ್ಮ ಹೂಡಿಕೆ ಆದಾಯದ ಹೆಚ್ಚಿನ ಭಾಗವನ್ನು ಕಾಲಾನಂತರದಲ್ಲಿ ಉಳಿಸಿಕೊಳ್ಳಲು ಹೇಗೆ ನೆರವಾಗಬಹುದು ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವುದು.</p>
        <p>ಹೂಡಿಕೆಗಳಿಗೆ ಹೇಗೆ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಚರ್ಚಿಸುವ ಮೊದಲು, ಭಾರತೀಯ ಆದಾಯ ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯಡಿ ಆದಾಯವನ್ನು ಹೇಗೆ ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಮೊದಲು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಮುಖ್ಯ.</p>
        <p>ಆದಾಯ ತೆರಿಗೆ ಕಾಯ್ದೆಯಡಿ, ಆದಾಯವನ್ನು ಒಂದೇ ಏಕರೂಪದ ವರ್ಗವಾಗಿ ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ. ಬದಲಾಗಿ, ಇದನ್ನು ಐದು ವಿಶಾಲ ಆದಾಯ ಮುಖ್ಯಾಂಶಗಳಾಗಿ ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ವರ್ಗವು ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ತೆರಿಗೆ ವಿಧಿಸುವಿಕೆಗೆ ತನ್ನದೇ ನಿಯಮಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ.</p>
        <p>ಈ ಐದು ಮುಖ್ಯಾಂಶಗಳು ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯು ವಿಭಿನ್ನ ಆದಾಯ ವಿಧಗಳನ್ನು ಹೇಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡುತ್ತದೆ ಎಂಬುದರ ಆಧಾರವನ್ನು ರೂಪಿಸುತ್ತವೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಐದು ಆದಾಯ ಮುಖ್ಯಾಂಶಗಳು:</h3>
        <img src="/taxation/image5.png" alt="ಆದಾಯ ತೆರಿಗೆ ಕಾಯ್ದೆಯಡಿ ಐದು ಆದಾಯ ಮುಖ್ಯಾಂಶಗಳು" style={imgStyle} />
        <ul className="pl-6">
          <li>ವೇತನದಿಂದ ಆದಾಯ</li>
          <li>ಗೃಹ ಆಸ್ತಿಯಿಂದ ಆದಾಯ</li>
          <li>ವ್ಯವಹಾರ ಅಥವಾ ವೃತ್ತಿಯಿಂದ ಲಾಭ ಮತ್ತು ಗಳಿಕೆ</li>
          <li>ಬಂಡವಾಳ ಲಾಭ</li>
          <li>ಇತರ ಮೂಲಗಳಿಂದ ಆದಾಯ</li>
        </ul>
        <p>ಈ ವರ್ಗಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಹೂಡಿಕೆದಾರರಿಗೆ ವಿಭಿನ್ನ ಹೂಡಿಕೆ ಆದಾಯ ವಿಧಗಳನ್ನು ತೆರಿಗೆ ಕಾನೂನಿನಡಿ ಹೇಗೆ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಗುರುತಿಸಲು ನೆರವಾಗುತ್ತದೆ.</p>
        <p><strong>ವೇತನದಿಂದ ಆದಾಯ</strong> ಈ ವಿಭಾಗವು ಉದ್ಯೋಗದಿಂದ ಪಡೆಯುವ ಆದಾಯವನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ. ಉದಾಹರಣೆಗಳು:</p>
        <ul className="pl-6">
          <li>ಮಾಸಿಕ ವೇತನ </li>
          <li>ಬೋನಸ್ ಮತ್ತು ಪ್ರೋತ್ಸಾಹ ಧನ </li>
          <li>ಭತ್ಯೆಗಳು </li>
          <li>ಉದ್ಯೋಗದಾತರು ನೀಡುವ ಸೌಲಭ್ಯಗಳು</li>
        </ul>
        <p>ವೇತನ ಪಡೆಯುವ ಬಹುತೇಕ ವ್ಯಕ್ತಿಗಳು ತಮ್ಮ ಆದಾಯವನ್ನು ಮುಖ್ಯವಾಗಿ ಈ ವಿಭಾಗದಡಿ ತೋರಿಸುತ್ತಾರೆ. ವೇತನ ಆದಾಯವು ನೇರವಾಗಿ ಹೂಡಿಕೆಗೆ ಸಂಬಂಧಿಸಿಲ್ಲದಿದ್ದರೂ, ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಆಸ್ತಿ ಸಂಗ್ರಹವನ್ನು ನಿರ್ಮಿಸಲು ಬಳಸುವ ಪ್ರಾಥಮಿಕ ಬಂಡವಾಳದ ಮೂಲ ಇದೇ ಆಗಿರುತ್ತದೆ.</p>
        <p><strong>ಗೃಹ ಆಸ್ತಿಯಿಂದ ಆದಾಯ</strong> ಈ ವಿಭಾಗವು ಸ್ಥಿರಾಸ್ತಿಯ ಮಾಲೀಕತ್ವದಿಂದ ಉಂಟಾಗುವ ಆದಾಯಕ್ಕೆ ಅನ್ವಯಿಸುತ್ತದೆ. ಉದಾಹರಣೆಗೆ:</p>
        <ul className="pl-6">
          <li>ವಸತಿ ಆಸ್ತಿಯಿಂದ ಬಾಡಿಗೆ ಆದಾಯ </li>
          <li>ವಾಣಿಜ್ಯ ಆಸ್ತಿಯಿಂದ ಬಾಡಿಗೆ ಆದಾಯ</li>
        </ul>
        <p>ಸ್ಥಿರಾಸ್ತಿಯು ಸಾಮಾನ್ಯವಾಗಿ ವೈಯಕ್ತಿಕ ಸಂಪತ್ತಿನ ಪ್ರಮುಖ ಭಾಗವಾಗಿರುವುದರಿಂದ, ಆಸ್ತಿಯಿಂದ ಬರುವ ಆದಾಯವು ಹೂಡಿಕೆದಾರರ ಒಟ್ಟಾರೆ ಆರ್ಥಿಕ ಯೋಜನೆಯಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಬಹುದು.</p>
        <p><strong>ವ್ಯವಹಾರ ಅಥವಾ ವೃತ್ತಿಯಿಂದ ಲಾಭ ಮತ್ತು ಆದಾಯ</strong> ಈ ವಿಭಾಗವು ಈ ಕೆಳಗಿನ ಮಾರ್ಗಗಳಲ್ಲಿ ಆದಾಯ ಗಳಿಸುವ ವ್ಯಕ್ತಿಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ:</p>
        <ul className="pl-6">
          <li>ವ್ಯಾವಹಾರಿಕ ಚಟುವಟಿಕೆಗಳು </li>
          <li>ವೃತ್ತಿಪರ ಸೇವೆಗಳು </li>
          <li>ಸ್ವತಂತ್ರ ಸೇವೆ ಅಥವಾ ಸಲಹಾ ಕಾರ್ಯ</li>
        </ul>
        <p>ವ್ಯಾಪಾರ ಮಾಲೀಕರು, ಉದ್ಯಮಿಗಳು ಮತ್ತು ಸ್ವತಂತ್ರ ವೃತ್ತಿಪರರು ಸಾಮಾನ್ಯವಾಗಿ ತಮ್ಮ ಆದಾಯವನ್ನು ಈ ವಿಭಾಗದಡಿ ದಾಖಲಿಸುತ್ತಾರೆ. ಅನೇಕ ಹೂಡಿಕೆದಾರರಿಗೆ, ವ್ಯವಹಾರದ ಆದಾಯವು ಮುಂದೆ ಹಣಕಾಸು ಹೂಡಿಕೆಗಳಿಗೆ ನಿಯೋಜಿಸಲಾಗುವ ಬಂಡವಾಳದ ಮಹತ್ವದ ಮೂಲವಾಗಬಹುದು.</p>
        <p><strong>ಬಂಡವಾಳ ಲಾಭ</strong> ಒಂದು ಆಸ್ತಿಯನ್ನು ಅದರ ಖರೀದಿ ಬೆಲೆಗಿಂತ ಹೆಚ್ಚಿನ ಮೊತ್ತಕ್ಕೆ ಮಾರಿದಾಗ ಬಂಡವಾಳ ಲಾಭ ಉಂಟಾಗುತ್ತದೆ. ಹೂಡಿಕೆದಾರರಿಗೆ ಇದು ಅತ್ಯಂತ ಮಹತ್ವದ ವಿಭಾಗಗಳಲ್ಲಿ ಒಂದು. ಈ ಕೆಳಗಿನ ಆಸ್ತಿಗಳನ್ನು ಮಾರಾಟ ಮಾಡಿದಾಗ ಬಂಡವಾಳ ಲಾಭ ಉಂಟಾಗಬಹುದು:</p>
        <ul className="pl-6">
          <li>ಷೇರುಗಳು </li>
          <li>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು </li>
          <li>ಸ್ಥಿರಾಸ್ತಿ </li>
          <li>ಚಿನ್ನ </li>
          <li>ಬಾಂಡ್‌ಗಳು ಅಥವಾ ಇತರ ಹೂಡಿಕೆಗಳು</li>
        </ul>
        <p>ಬಂಡವಾಳ ಲಾಭದ ತೆರಿಗೆಯು ಹಲವಾರು ಅಂಶಗಳನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ, ಮುಖ್ಯವಾಗಿ ಆಸ್ತಿಯ ಧಾರಣ ಅವಧಿಯನ್ನು ಆಧರಿಸಿ, ಲಾಭವನ್ನು ಅಲ್ಪಾವಧಿ ಅಥವಾ ದೀರ್ಘಾವಧಿ ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ಹೂಡಿಕೆ ಸಂಬಂಧಿತ ತೆರಿಗೆಯ ಗಣನೀಯ ಭಾಗವು ಈ ವಿಭಾಗದ ಅಡಿಯಲ್ಲಿ ಬರುತ್ತದೆ.</p>
        <p><strong>ಇತರ ಮೂಲಗಳಿಂದ ಆದಾಯ</strong> ಈ ವಿಭಾಗವು ಉಳಿದ ನಾಲ್ಕು ವಿಭಾಗಗಳ ಅಡಿಯಲ್ಲಿ ಬಾರದ ಆದಾಯಕ್ಕೆ ಉಳಿಕೆ ವಿಭಾಗವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಹೂಡಿಕೆ ಸಂಬಂಧಿತ ಅನೇಕ ಸಾಮಾನ್ಯ ಆದಾಯಗಳು ಈ ವಿಭಾಗದಡಿ ಬರುತ್ತವೆ. ಉದಾಹರಣೆಗಳು:</p>
        <ul className="pl-6">
          <li>ಸ್ಥಿರ ಠೇವಣಿಗಳ ಮೇಲಿನ ಬಡ್ಡಿ </li>
          <li>ಉಳಿತಾಯ ಖಾತೆಯ ಬಡ್ಡಿ </li>
          <li>ಬಾಂಡ್ ಬಡ್ಡಿ </li>
          <li>ಷೇರುಗಳು ಅಥವಾ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಿಂದ ಲಾಭಾಂಶ</li>
        </ul>
        <p>ಬಡ್ಡಿ ಮತ್ತು ಲಾಭಾಂಶ ಆದಾಯಗಳು ಹೂಡಿಕೆ ಲಾಭದ ಸಾಮಾನ್ಯ ರೂಪಗಳಾಗಿರುವುದರಿಂದ, ಈ ವಿಭಾಗವೂ ಹೂಡಿಕೆದಾರರಿಗೆ ಅತ್ಯಂತ ಪ್ರಸ್ತುತವಾದದ್ದು.</p>
        <hr className="chapter-rule" />
        <h3><strong>ಈ ವರ್ಗೀಕರಣ ಏಕೆ ಮಹತ್ವದ್ದು</strong></h3>
        <p>ಈ ಐದು ಆದಾಯ ವಿಭಾಗಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ, ವಿವಿಧ ರೀತಿಯ ಹೂಡಿಕೆ ಲಾಭಗಳ ಮೇಲೆ ತೆರಿಗೆ ಹೇಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಹೂಡಿಕೆದಾರರು ಗ್ರಹಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ. ಪ್ರಾಯೋಗಿಕವಾಗಿ, ಬಹುತೇಕ ಹೂಡಿಕೆ ಆದಾಯವು ಈ ಎರಡು ವಿಭಾಗಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ಸೇರುತ್ತದೆ:</p>
        <ul className="pl-6">
          <li><strong>ಬಂಡವಾಳ ಲಾಭ</strong> — ಹೂಡಿಕೆಗಳ ಮಾರಾಟದಿಂದ ಬರುವ ಲಾಭ</li>
          <li><strong>ಇತರ ಮೂಲಗಳಿಂದ ಆದಾಯ</strong> — ಬಡ್ಡಿ ಅಥವಾ ಲಾಭಾಂಶ ಆದಾಯ</li>
        </ul>
        <div className="pull-quote">
          ಮುಂದಿನ ಅಧ್ಯಾಯಗಳಲ್ಲಿ ಈ ವಿಭಾಗಗಳನ್ನು ವಿಸ್ತೃತವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುವುದು, ಇದರಿಂದ ವಿವಿಧ ಹೂಡಿಕೆ ಲಾಭಗಳು ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ಹೇಗೆ ಸಂವಾದ ನಡೆಸುತ್ತವೆ ಎಂಬುದನ್ನು ನೀವು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದು.
        </div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 2
  // ==============================
  {
    title: {
      en: "Chapter 2: Capital Gains - The Foundation of Investment Taxation",
      kn: "ಅಧ್ಯಾಯ ೨: ಬಂಡವಾಳ ಲಾಭ - ಹೂಡಿಕೆ ತೆರಿಗೆಯ ಅಡಿಪಾಯ",
    },
    content: {
      en: (
        <>
          <p>
            One of the most important concepts in investment taxation is{" "}
            <strong>capital gains</strong>. A capital gain arises when you{" "}
            <strong>sell an asset for a price higher than the price you originally paid for
            it</strong>. The difference between the selling price and the purchase price
            represents the gain - and this gain may be subject to taxation.
          </p>
          <p>
            Common assets that generate capital gains include stocks, mutual funds, real
            estate, gold and gold ETFs, and bonds and other investment securities. Because
            investors frequently buy and sell such assets over time, capital gains form a{" "}
            <strong>central part of how investments are taxed in India</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>The Role of Holding Period</h3>
          <img src="/taxation/image4.png" alt="Short-term vs long-term capital gains holding period" style={imgStyle} />
          <p>
            The taxation of capital gains depends largely on{" "}
            <strong>how long the asset was held before being sold</strong>. This creates two
            categories:
          </p>
          <p>
            <strong>Short-Term Capital Gains (STCG)</strong> - gains from assets held for a
            shorter period. Typically taxed at higher or less favorable rates.
          </p>
          <p>
            <strong>Long-Term Capital Gains (LTCG)</strong> - gains from assets held for
            longer. Often receive preferential tax treatment.
          </p>
          <p>
            For listed equity investments, gains from investments held for{" "}
            <strong>one year or less</strong> are classified as short-term, while gains from
            investments held for <strong>more than one year</strong> are classified as
            long-term. Because the tax rates applied to these two categories differ, the{" "}
            <strong>timing of a sale can directly affect the tax you pay</strong>. Selling an
            investment a few months too early may convert what could have been a long-term
            gain into a short-term gain, resulting in higher taxation.
          </p>
          <hr className="chapter-rule" />
          <h3>A Simple Example</h3>
          <p>
            Suppose you purchase shares of a company for <strong>₹1,00,000</strong>. A few
            years later, you sell those shares for <strong>₹1,60,000</strong>.
          </p>
          <p>
            Your capital gain would be: ₹1,60,000 &ndash; ₹1,00,000 = <strong>₹60,000</strong>.
          </p>
          <p>
            This ₹60,000 represents the capital gain and depending on the holding period of
            the investment, it will be classified as either short-term or long-term and taxed
            accordingly.
          </p>
          <div className="pull-quote">
            The timing of a sale matters as much as the sale itself. A few extra months of
            holding can move a gain from short-term to long-term - significantly changing the
            tax outcome.
          </div>
        </>
      ),
      kn: (
        <>
        <p>ಹೂಡಿಕೆ ತೆರಿಗೆಯಲ್ಲಿ ಅತ್ಯಂತ ಮಹತ್ವದ ಪರಿಕಲ್ಪನೆಗಳಲ್ಲಿ ಒಂದು ಬಂಡವಾಳ ಲಾಭ.</p>
        <p>ನೀವು ಒಂದು ಆಸ್ತಿಯನ್ನು ಮೂಲತಃ ಖರೀದಿಸಿದ ಬೆಲೆಗಿಂತ ಹೆಚ್ಚಿನ ಬೆಲೆಗೆ ಮಾರಿದಾಗ ಬಂಡವಾಳ ಲಾಭ ಉಂಟಾಗುತ್ತದೆ. ಮಾರಾಟ ಬೆಲೆ ಮತ್ತು ಖರೀದಿ ಬೆಲೆಯ ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇ ಲಾಭವಾಗಿದ್ದು, ಈ ಲಾಭದ ಮೇಲೆ ತೆರಿಗೆ ವಿಧಿಸಲಾಗಬಹುದು.</p>
        <p>ಬಂಡವಾಳ ಲಾಭ ಉಂಟುಮಾಡುವ ಸಾಮಾನ್ಯ ಆಸ್ತಿಗಳು:</p>
        <ul className="pl-6">
          <li>ಷೇರುಗಳು </li>
          <li>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು </li>
          <li>ಸ್ಥಿರಾಸ್ತಿ </li>
          <li>ಚಿನ್ನ ಮತ್ತು ಗೋಲ್ಡ್ ಇಟಿಎಫ್‌ಗಳು </li>
          <li>ಬಾಂಡ್‌ಗಳು ಮತ್ತು ಇತರ ಹೂಡಿಕೆ ಭದ್ರತಾ ಸಾಧನಗಳು</li>
        </ul>
        <p>ಹೂಡಿಕೆದಾರರು ಕಾಲಕ್ರಮೇಣ ಇಂತಹ ಆಸ್ತಿಗಳನ್ನು ಆಗಾಗ ಖರೀದಿಸುತ್ತಾ ಮತ್ತು ಮಾರುತ್ತಾ ಇರುವುದರಿಂದ, ಭಾರತದಲ್ಲಿ ಹೂಡಿಕೆಗಳಿಗೆ ತೆರಿಗೆ ವಿಧಿಸುವ ರೀತಿಯಲ್ಲಿ ಬಂಡವಾಳ ಲಾಭವು ಕೇಂದ್ರ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಧಾರಣ ಅವಧಿಯ ಪಾತ್ರ</h3>
        <img src="/taxation/image4.png" alt="ಅಲ್ಪಾವಧಿ ಮತ್ತು ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ ಧಾರಣ ಅವಧಿ" style={imgStyle} />
        <p>ಬಂಡವಾಳ ಲಾಭದ ಮೇಲಿನ ತೆರಿಗೆಯು ಹೆಚ್ಚಾಗಿ ಆಸ್ತಿಯನ್ನು ಮಾರಾಟ ಮಾಡುವ ಮೊದಲು ಎಷ್ಟು ಕಾಲ ಇಟ್ಟುಕೊಳ್ಳಲಾಗಿತ್ತು ಎಂಬುದನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯು ಕಡಿಮೆ ಅವಧಿಗೆ ಹಿಡಿದಿಟ್ಟ ಹೂಡಿಕೆಗಳನ್ನು ಮತ್ತು ದೀರ್ಘ ಅವಧಿಗೆ ಹಿಡಿದಿಟ್ಟ ಹೂಡಿಕೆಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಗಣಿಸುತ್ತದೆ.</p>
        <p>ಇದರಿಂದ ಬಂಡವಾಳ ಲಾಭವನ್ನು ಎರಡು ವಿಭಾಗಗಳಾಗಿ ವಿಂಗಡಿಸಲಾಗುತ್ತದೆ:</p>
        <ul className="pl-6">
          <li>ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (STCG) </li>
          <li>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (LTCG)</li>
        </ul>
        <p>ಲಾಭವು ಅಲ್ಪಾವಧಿಯದೇ ಅಥವಾ ದೀರ್ಘಾವಧಿಯದೇ ಎಂದು ನಿರ್ಧರಿಸುವ ಧಾರಣ ಅವಧಿಯು ಆಸ್ತಿಯ ವಿಧವನ್ನು ಅನುಸರಿಸಿ ಬದಲಾಗುತ್ತದೆ. ಉದಾಹರಣೆಗೆ, ಷೇರು ಹೂಡಿಕೆಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಸ್ಥಿರಾಸ್ತಿ ಅಥವಾ ಕೆಲವು ಸಾಲ ಸಾಧನಗಳಿಗಿಂತ ಭಿನ್ನವಾದ ಧಾರಣ ಅವಧಿ ಅನ್ವಯಿಸುತ್ತದೆ.</p>
        <p>ಅಲ್ಪಾವಧಿ ಊಹಾಪೋಹಕ್ಕಿಂತ ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವ ಉದ್ದೇಶದಿಂದ ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯು ಈ ವ್ಯತ್ಯಾಸವನ್ನು ಮಾಡಿದೆ.</p>
        <p><strong>ಈ ವ್ಯತ್ಯಾಸ ಏಕೆ ಮಹತ್ವದ್ದು</strong></p>
        <p>ಅಲ್ಪಾವಧಿ ಲಾಭಗಳ ಮೇಲೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚಿನ ಅಥವಾ ಕಡಿಮೆ ಅನುಕೂಲಕರ ದರದಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ, ಆದರೆ ದೀರ್ಘಾವಧಿ ಲಾಭಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಆದ್ಯತೆಯ ತೆರಿಗೆ ಸೌಲಭ್ಯ ದೊರೆಯುತ್ತದೆ.</p>
        <p>ಉದಾಹರಣೆಗೆ, ಪಟ್ಟಿ ಮಾಡಲಾದ ಷೇರು ಹೂಡಿಕೆಗಳ ವಿಷಯದಲ್ಲಿ:</p>
        <ul className="pl-6">
          <li>ಒಂದು ವರ್ಷ ಅಥವಾ ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ ಹಿಡಿದಿಟ್ಟ ಹೂಡಿಕೆಗಳ ಲಾಭವನ್ನು ಅಲ್ಪಾವಧಿ ಲಾಭ ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ </li>
          <li>ಒಂದು ವರ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು ಕಾಲ ಹಿಡಿದಿಟ್ಟ ಹೂಡಿಕೆಗಳ ಲಾಭವನ್ನು ದೀರ್ಘಾವಧಿ ಲಾಭ ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ</li>
        </ul>
        <p>ಈ ಎರಡು ವಿಭಾಗಗಳಿಗೆ ಅನ್ವಯಿಸುವ ತೆರಿಗೆ ದರಗಳು ಭಿನ್ನವಾಗಿರುವುದರಿಂದ, ಮಾರಾಟದ ಸಮಯ ನೀವು ತೆರುವ ತೆರಿಗೆಯ ಮೇಲೆ ನೇರ ಪರಿಣಾಮ ಬೀರಬಹುದು.</p>
        <p>ಉದಾಹರಣೆಗೆ, ಕೆಲವು ತಿಂಗಳು ಮೊದಲೇ ಹೂಡಿಕೆಯನ್ನು ಮಾರಿದರೆ, ದೀರ್ಘಾವಧಿ ಲಾಭವಾಗಬಹುದಾಗಿದ್ದದ್ದು ಅಲ್ಪಾವಧಿ ಲಾಭವಾಗಿ ಪರಿವರ್ತನೆಯಾಗಿ, ಹೆಚ್ಚಿನ ತೆರಿಗೆ ಭಾರ ಬೀಳಬಹುದು.</p>
        <hr className="chapter-rule" />
        <h3>ಬಂಡವಾಳ ಲಾಭದ ಉದಾಹರಣೆ</h3>
        <p>ನೀವು ಒಂದು ಕಂಪನಿಯ ಷೇರುಗಳನ್ನು ₹೧,೦೦,೦೦೦ಕ್ಕೆ ಖರೀದಿಸಿದ್ದೀರಿ ಎಂದು ಭಾವಿಸೋಣ. ಕೆಲವು ವರ್ಷಗಳ ನಂತರ, ಆ ಷೇರುಗಳನ್ನು ₹೧,೬೦,೦೦೦ಕ್ಕೆ ಮಾರುತ್ತೀರಿ. ನಿಮ್ಮ ಬಂಡವಾಳ ಲಾಭ ಹೀಗಿರುತ್ತದೆ:</p>
        <p>₹೧,೬೦,೦೦೦ – ₹೧,೦೦,೦೦೦ = ₹೬೦,೦೦೦</p>
        <p>ಈ ₹೬೦,೦೦೦ ಬಂಡವಾಳ ಲಾಭವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಹೂಡಿಕೆಯ ಧಾರಣ ಅವಧಿಯನ್ನು ಆಧರಿಸಿ, ಇದನ್ನು ಅಲ್ಪಾವಧಿ ಅಥವಾ ದೀರ್ಘಾವಧಿ ಎಂದು ವರ್ಗೀಕರಿಸಿ ಅದಕ್ಕನುಗುಣವಾಗಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ.</p>
        <p><strong>ಹೂಡಿಕೆದಾರರು ಬಂಡವಾಳ ಲಾಭವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ ಕಾರಣ</strong></p>
        <p>ಬಂಡವಾಳ ಲಾಭದ ತೆರಿಗೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ ಹೂಡಿಕೆದಾರರು ಯಾವಾಗ ಖರೀದಿಸಬೇಕು ಮತ್ತು ಮಾರಾಟ ಮಾಡಬೇಕು ಎಂಬ ಬಗ್ಗೆ ಹೆಚ್ಚು ತಿಳುವಳಿಕೆಯಿಂದ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.</p>
        <p>ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ಅನುಕೂಲಕರ ತೆರಿಗೆ ಸೌಲಭ್ಯ ದೊರೆಯುವುದರಿಂದ, ಇದು ದೀರ್ಘಕಾಲೀನ ಸಂಪತ್ತು ನಿರ್ಮಾಣದತ್ತ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಲು ಹೂಡಿಕೆದಾರರನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ.</p>
        <div className="pull-quote">
          ಮುಂದಿನ ಅಧ್ಯಾಯಗಳಲ್ಲಿ, ಷೇರುಗಳು, ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ಮತ್ತು ಇತರ ಸಾಮಾನ್ಯ ಹೂಡಿಕೆ ಸಾಧನಗಳಿಗೆ ಬಂಡವಾಳ ಲಾಭ ತೆರಿಗೆ ಹೇಗೆ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ನಾವು ವಿಸ್ತೃತವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತೇವೆ.
        </div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 3
  // ==============================
  {
    title: {
      en: "Chapter 3: Taxation of Equity Investments",
      kn: "ಅಧ್ಯಾಯ ೩: ಷೇರು ಹೂಡಿಕೆಗಳ ತೆರಿಗೆ",
    },
    content: {
      en: (
        <>
          <p>
            Equity investments such as <strong>listed stocks and equity-oriented mutual
            funds</strong> follow a specific taxation framework in India. Because equities
            play an important role in long-term wealth creation, the tax system provides{" "}
            <strong>distinct treatment depending on how long the investment is held</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>Short-Term Capital Gains (STCG) on Equity</h3>
          <p>
            If listed equity shares or equity-oriented mutual funds are sold{" "}
            <strong>within 12 months of purchase</strong>, the resulting gain is classified as
            Short-Term Capital Gain (STCG).
          </p>
          <p>
            Under the current tax rules:{" "}
            <strong>STCG on equity investments is taxed at 20%</strong> (where Securities
            Transaction Tax has been paid).
          </p>
          <p>
            <strong>Example:</strong> Suppose you purchase shares for ₹2,00,000 and sell them
            after eight months for ₹2,60,000. Your capital gain is ₹60,000. Since the
            investment was held for less than one year, the gain is classified as short-term.
            Tax payable: 20% of ₹60,000 = <strong>₹12,000</strong> (excluding surcharge and
            4% health &amp; education cess).
          </p>
          <hr className="chapter-rule" />
          <h3>Long-Term Capital Gains (LTCG) on Equity</h3>
          <p>
            If listed equities or equity-oriented mutual funds are held for{" "}
            <strong>more than 12 months</strong>, the gain is classified as Long-Term Capital
            Gain (LTCG). The tax system provides favorable treatment for long-term investors:
          </p>
          <p>
            • The first{" "}
            <strong>₹1,25,000 of long-term capital gains per financial year is exempt from
            tax</strong>.
          </p>
          <p>
            • Gains exceeding ₹1.25 lakh are taxed at <strong>12.5%</strong>.
          </p>
          <p>
            <strong>Example:</strong> Suppose you invest ₹3,00,000 in a stock and sell it
            after three years for ₹5,00,000. Your total gain is ₹2,00,000. From this gain,
            ₹1,25,000 is exempt and the remaining ₹75,000 is taxable. Tax payable: 12.5% of
            ₹75,000 = <strong>₹9,375</strong> (excluding surcharge and cess).
          </p>
          <hr className="chapter-rule" />
          <h3>Why the System Encourages Long-Term Investing</h3>
          <p>
            The difference between short-term and long-term taxation is intentional.
            Short-term gains are taxed at a higher rate (20%), while long-term gains receive a
            tax exemption threshold and a lower rate (12.5%). This structure encourages
            investors to <strong>hold equity investments for longer periods</strong> rather
            than trading frequently. By holding quality investments over longer periods,
            investors not only benefit from compounding returns, but also from more favorable
            tax treatment.
          </p>
          <div className="pull-quote">
            Equity held for more than one year costs you 12.5% in tax on gains above
            ₹1.25 lakh. The same gain from a sale before one year costs you 20%. Long-term
            investing is rewarded by the tax system, not just by markets.
          </div>
        </>
      ),
      kn: (
        <>
        <p>ಪಟ್ಟಿ ಮಾಡಲಾದ ಷೇರುಗಳು ಮತ್ತು ಷೇರು-ಆಧಾರಿತ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಂತಹ ಷೇರು ಹೂಡಿಕೆಗಳು ಭಾರತದಲ್ಲಿ ನಿರ್ದಿಷ್ಟ ತೆರಿಗೆ ಚೌಕಟ್ಟನ್ನು ಅನುಸರಿಸುತ್ತವೆ. ದೀರ್ಘಕಾಲೀನ ಸಂಪತ್ತು ನಿರ್ಮಾಣದಲ್ಲಿ ಷೇರುಗಳು ಮಹತ್ವದ ಪಾತ್ರ ವಹಿಸುವುದರಿಂದ, ಹೂಡಿಕೆಯನ್ನು ಎಷ್ಟು ಕಾಲ ಹಿಡಿದಿಡಲಾಗಿದೆ ಎಂಬುದನ್ನು ಆಧರಿಸಿ ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯು ವಿಶೇಷ ಪರಿಗಣನೆ ನೀಡುತ್ತದೆ.</p>
        <p>ಷೇರು ಹೂಡಿಕೆಗಳ ತೆರಿಗೆಯು ಮುಖ್ಯವಾಗಿ ಆಸ್ತಿಯ ಧಾರಣ ಅವಧಿಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಇದು ಲಾಭವನ್ನು ಅಲ್ಪಾವಧಿ ಅಥವಾ ದೀರ್ಘಾವಧಿ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ ವಿಭಾಗಕ್ಕೆ ಭಿನ್ನ ತೆರಿಗೆ ದರಗಳು ಅನ್ವಯಿಸುತ್ತವೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (STCG)</h3>
        <p>ಪಟ್ಟಿ ಮಾಡಲಾದ ಷೇರುಗಳನ್ನು ಅಥವಾ ಷೇರು-ಆಧಾರಿತ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳನ್ನು ಖರೀದಿಸಿದ ೧೨ ತಿಂಗಳೊಳಗೆ ಮಾರಾಟ ಮಾಡಿದರೆ, ಉಂಟಾಗುವ ಲಾಭವನ್ನು ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (STCG) ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ.</p>
        <p>ಪ್ರಸ್ತುತ ತೆರಿಗೆ ನಿಯಮಗಳ ಪ್ರಕಾರ:</p>
        <ul className="pl-6">
          <li>ಷೇರು ಹೂಡಿಕೆಗಳ ಮೇಲಿನ STCG ಗೆ ೨೦% ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ</li>
        </ul>
        <p>ಈ ದರವು ಭದ್ರತಾ ವಹಿವಾಟು ತೆರಿಗೆ (STT) ಪಾವತಿಸಲಾದ ಪಟ್ಟಿ ಮಾಡಲಾದ ಷೇರುಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ.</p>
        <p><strong>ಉದಾಹರಣೆ</strong></p>
        <p>ನೀವು ₹೨,೦೦,೦೦೦ ಕ್ಕೆ ಷೇರುಗಳನ್ನು ಖರೀದಿಸಿ, ಎಂಟು ತಿಂಗಳ ನಂತರ ₹೨,೬೦,೦೦೦ ಕ್ಕೆ ಮಾರಿದಿರಿ ಎಂದು ಭಾವಿಸೋಣ. ನಿಮ್ಮ ಬಂಡವಾಳ ಲಾಭ: ₹೨,೬೦,೦೦೦ − ₹೨,೦೦,೦೦೦ = ₹೬೦,೦೦೦</p>
        <p>ಹೂಡಿಕೆಯನ್ನು ಒಂದು ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ಅವಧಿಗೆ ಹಿಡಿದಿರುವುದರಿಂದ, ಈ ಲಾಭವನ್ನು ಅಲ್ಪಾವಧಿ ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೬೦,೦೦೦ ರ ೨೦% = ₹೧೨,೦೦೦ (ಅಧಿಭಾರ ಮತ್ತು ೪% ಆರೋಗ್ಯ ಹಾಗೂ ಶಿಕ್ಷಣ ಉಪಕರ ಹೊರತುಪಡಿಸಿ)</p>
        <hr className="chapter-rule" />
        <h3>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (LTCG)</h3>
        <p>ಪಟ್ಟಿ ಮಾಡಲಾದ ಷೇರುಗಳನ್ನು ಅಥವಾ ಷೇರು-ಆಧಾರಿತ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳನ್ನು ೧೨ ತಿಂಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಹಿಡಿದಿಟ್ಟರೆ, ಆ ಲಾಭವನ್ನು ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (LTCG) ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯು ಅನುಕೂಲಕರ ಸೌಲಭ್ಯ ನೀಡುತ್ತದೆ.</p>
        <p>ಪ್ರಸ್ತುತ ನಿಯಮಗಳ ಪ್ರಕಾರ:</p>
        <ul className="pl-6">
          <li>ಒಂದು ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ ₹೧,೨೫,೦೦೦ ವರೆಗಿನ ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭವು ತೆರಿಗೆ ವಿನಾಯಿತಿ ಪಡೆಯುತ್ತದೆ </li>
          <li>₹೧.೨೫ ಲಕ್ಷ ಮೀರಿದ ಲಾಭದ ಮೇಲೆ ೧೨.೫% ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ</li>
        </ul>
        <p><strong>ಉದಾಹರಣೆ</strong></p>
        <p>ನೀವು ₹೩,೦೦,೦೦೦ ಷೇರುಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ, ಮೂರು ವರ್ಷಗಳ ನಂತರ ₹೫,೦೦,೦೦೦ ಕ್ಕೆ ಮಾರಿದಿರಿ ಎಂದು ಭಾವಿಸೋಣ. ಒಟ್ಟು ಲಾಭ: ₹೫,೦೦,೦೦೦ − ₹೩,೦೦,೦೦೦ = ₹೨,೦೦,೦೦೦</p>
        <p>ಈ ಲಾಭದಲ್ಲಿ:</p>
        <ul className="pl-6">
          <li>₹೧,೨೫,೦೦೦ ತೆರಿಗೆ ವಿನಾಯಿತಿ </li>
          <li> ಉಳಿದ ₹೭೫,೦೦೦ ತೆರಿಗೆಗೆ ಒಳಪಡುತ್ತದೆ</li>
        </ul>
        <p>ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೭೫,೦೦೦ ರ ೧೨.೫% = ₹೯,೩೭೫ (ಅಧಿಭಾರ ಮತ್ತು ಉಪಕರ ಹೊರತುಪಡಿಸಿ)</p>
        <hr className="chapter-rule" />
        <h3>ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆಯನ್ನು ವ್ಯವಸ್ಥೆ ಏಕೆ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ</h3>
        <p>ಅಲ್ಪಾವಧಿ ಮತ್ತು ದೀರ್ಘಾವಧಿ ತೆರಿಗೆಯ ನಡುವಿನ ವ್ಯತ್ಯಾಸವು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿದೆ. ಅಲ್ಪಾವಧಿ ಲಾಭಗಳ ಮೇಲೆ ಹೆಚ್ಚಿನ ದರದಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ, ಆದರೆ ದೀರ್ಘಾವಧಿ ಲಾಭಗಳಿಗೆ ತೆರಿಗೆ ವಿನಾಯಿತಿ ಮಿತಿ ಮತ್ತು ಕಡಿಮೆ ತೆರಿಗೆ ದರ ದೊರೆಯುತ್ತದೆ. ಈ ರಚನೆಯು ಹೂಡಿಕೆದಾರರು ಆಗಾಗ ವಹಿವಾಟು ನಡೆಸುವ ಬದಲು ಷೇರು ಹೂಡಿಕೆಗಳನ್ನು ದೀರ್ಘ ಅವಧಿಗೆ ಹಿಡಿದಿಡಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.</p>
        <p>ಹೂಡಿಕೆದಾರರಿಗೆ, ಈ ನಿಯಮಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಈ ಕೆಳಗಿನ ಯೋಜನೆ ರೂಪಿಸಲು ನೆರವಾಗುತ್ತದೆ:</p>
        <ul className="pl-6">
          <li>ಹೂಡಿಕೆ ಅವಧಿ </li>
          <li>ಮಾರಾಟದ ಸಮಯ </li>
          <li>ದೀರ್ಘಕಾಲೀನ ಆಸ್ತಿ ಸಂಗ್ರಹ ತಂತ್ರ</li>
        </ul>
        <div className="pull-quote">
          ಗುಣಮಟ್ಟದ ಹೂಡಿಕೆಗಳನ್ನು ದೀರ್ಘ ಅವಧಿವರೆಗೆ ಹಿಡಿದಿಡುವ ಮೂಲಕ, ಹೂಡಿಕೆದಾರರು ಚಕ್ರಬಡ್ಡಿ ಲಾಭದ ಜೊತೆಗೆ ಹೆಚ್ಚು ಅನುಕೂಲಕರ ತೆರಿಗೆ ಸೌಲಭ್ಯವನ್ನೂ ಪಡೆಯುತ್ತಾರೆ.
        </div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 4
  // ==============================
  {
    title: {
      en: "Chapter 4: Taxation of Mutual Funds",
      kn: "ಅಧ್ಯಾಯ ೪: ಮ್ಯೂಚುಯಲ್ ಫಂಡ್\u200Cಗಳ ತೆರಿಗೆ",
    },
    content: {
      en: (
        <>
          <p>
            Mutual fund taxation in India depends largely on{" "}
            <strong>the type of fund and its equity exposure</strong>. Different categories
            of mutual funds are taxed differently because the underlying assets within the
            fund determine how the investment is treated under tax law.
          </p>
          <p>
            Broadly, mutual funds can be divided into three major categories for taxation
            purposes: <strong>equity-oriented mutual funds</strong>,{" "}
            <strong>debt-oriented mutual funds</strong>, and{" "}
            <strong>hybrid mutual funds</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>Equity Mutual Funds</h3>
          <p>
            Equity mutual funds are funds where{" "}
            <strong>at least 65% of the portfolio is invested in equities</strong>. These
            funds are taxed <strong>in the same way as listed stocks</strong> - STCG at 20%
            if sold within 12 months, and LTCG at 12.5% above the ₹1.25 lakh exemption if
            held beyond 12 months.
          </p>
          <p>
            <strong>LTCG Example:</strong> Invest ₹3,00,000 in an equity mutual fund. After
            3 years it grows to ₹5,20,000. Capital gain: ₹2,20,000. Exemption: ₹1,25,000.
            Taxable gain: ₹95,000. Tax payable: 12.5% × ₹95,000 = <strong>₹11,875</strong>{" "}
            (excluding surcharge and cess).
          </p>
          <hr className="chapter-rule" />
          <h3>Debt Mutual Funds</h3>
          <p>
            Debt mutual funds invest primarily in fixed-income securities such as government
            bonds, treasury bills, corporate bonds and money market instruments. The taxation
            of debt mutual funds{" "}
            <strong>changed significantly in April 2023</strong> and the applicable tax rules
            now depend on <strong>when the investment was originally made</strong>.
          </p>
          <p>
            <strong>Units purchased on or after April 1, 2023:</strong> Gains are taxed
            according to the investor&apos;s income tax slab, regardless of how long the
            investment is held. Example: ₹5,00,000 invested in 2024, grows to ₹5,80,000
            after two years. Gain: ₹80,000. If in the 30% bracket: tax = ₹24,000.
          </p>
          <p>
            <strong>Units purchased before April 1, 2023:</strong> If held for more than 24
            months, gains may be taxed at{" "}
            <strong>12.5% LTCG without indexation</strong>. Example: ₹5,00,000 invested in
            2022, grows to ₹5,80,000 after three years. Tax payable: 12.5% × ₹80,000 =
            ₹10,000 - significantly lower than slab-based tax on newer investments.
          </p>
          <hr className="chapter-rule" />
          <h3>Hybrid Mutual Funds</h3>
          <p>
            Hybrid mutual funds invest in a combination of equities and debt instruments.
            Their taxation depends primarily on{" "}
            <strong>the equity allocation within the portfolio</strong>.
          </p>
          <p>
            If the fund maintains <strong>more than 65% equity exposure</strong>, it is
            treated as an equity-oriented fund for taxation purposes. If equity exposure is
            lower, the fund may be treated as a non-equity fund and taxed similarly to debt
            funds.
          </p>
          <p>
            <strong>Example:</strong> ₹4,00,000 invested in an aggressive hybrid fund with
            70% equity exposure. After two years it grows to ₹5,20,000. Gain: ₹1,20,000.
            Since the fund qualifies as equity-oriented and the gain is{" "}
            <strong>below the ₹1,25,000 exemption limit</strong>, the investor{" "}
            <strong>pays no tax</strong>.
          </p>
          <div className="pull-quote">
            Two mutual funds may generate similar pre-tax returns, but their after-tax
            outcomes can differ significantly. Always evaluate post-tax returns when choosing
            between equity funds, debt funds and hybrid strategies.
          </div>
        </>
      ),
      kn: (
        <>
        <p>ಭಾರತದಲ್ಲಿ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ತೆರಿಗೆಯು ಹೆಚ್ಚಾಗಿ ಫಂಡಿನ ವಿಧ ಮತ್ತು ಅದರ ಷೇರು ಒಡ್ಡುವಿಕೆಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಫಂಡಿನೊಳಗಿನ ಆಧಾರ ಆಸ್ತಿಗಳು ತೆರಿಗೆ ಕಾನೂನಿನಡಿ ಹೂಡಿಕೆಯನ್ನು ಹೇಗೆ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುವುದರಿಂದ, ವಿವಿಧ ವಿಭಾಗದ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಿಗೆ ಭಿನ್ನ ತೆರಿಗೆ ನಿಯಮಗಳು ಅನ್ವಯಿಸುತ್ತವೆ.</p>
        <p>ತೆರಿಗೆ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳನ್ನು ಸ್ಥೂಲವಾಗಿ ಮೂರು ಪ್ರಮುಖ ವಿಭಾಗಗಳಾಗಿ ವಿಂಗಡಿಸಬಹುದು:</p>
        <ul className="pl-6">
          <li>ಷೇರು-ಆಧಾರಿತ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</li>
          <li>ಸಾಲ-ಆಧಾರಿತ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</li>
          <li>ಮಿಶ್ರ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</li>
        </ul>
        <p>ಪ್ರತಿ ವಿಭಾಗಕ್ಕೆ ತೆರಿಗೆ ಹೇಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ, ಹೂಡಿಕೆದಾರರು ತೆರಿಗೆ-ನಂತರದ ಲಾಭವನ್ನು ಅಳೆಯಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ — ಅಂದರೆ ಹೂಡಿಕೆ ಲಾಭದಲ್ಲಿ ತಾವು ನಿಜವಾಗಿ ಉಳಿಸಿಕೊಳ್ಳುವ ಮೊತ್ತ ಎಷ್ಟು ಎಂಬುದನ್ನು ತಿಳಿಯಲು ಅನುಕೂಲವಾಗುತ್ತದೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</h3>
        <p>ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ತಮ್ಮ ಆಸ್ತಿ ಸಂಗ್ರಹದ ಕನಿಷ್ಠ ೬೫% ಅನ್ನು ಷೇರುಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವ ಫಂಡ್‌ಗಳಾಗಿವೆ. ಇವುಗಳಿಗೆ ಪಟ್ಟಿ ಮಾಡಲಾದ ಷೇರುಗಳಂತೆಯೇ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ.</p>
        <p><strong>ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (STCG)</strong></p>
        <p>ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡಿನ ಯೂನಿಟ್‌ಗಳನ್ನು ೧೨ ತಿಂಗಳೊಳಗೆ ಮಾರಿದರೆ, ಆ ಲಾಭವನ್ನು ಅಲ್ಪಾವಧಿ ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ಪ್ರಸ್ತುತ ನಿಯಮಗಳ ಪ್ರಕಾರ:</p>
        <ul className="pl-6">
          <li>STCG ತೆರಿಗೆ ದರ = ೨೦%</li>
        </ul>
        <p>ಉದಾಹರಣೆ</p>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ₹೨,೦೦,೦೦೦ ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡಿನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿದರು. ೮ ತಿಂಗಳ ನಂತರ ಹೂಡಿಕೆ ₹೨,೪೦,೦೦೦ ಆಯಿತು. ಬಂಡವಾಳ ಲಾಭ: ₹೨,೪೦,೦೦೦ − ₹೨,೦೦,೦೦೦ = ₹೪೦,೦೦೦ ಒಂದು ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ಅವಧಿಗೆ ಹಿಡಿದಿರುವುದರಿಂದ, ಇದನ್ನು ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭವಾಗಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೪೦,೦೦೦ ರ ೨೦% = ₹೮,೦೦೦ (ಅಧಿಭಾರ ಮತ್ತು ಉಪಕರ ಹೊರತುಪಡಿಸಿ)</p>
        <p><strong>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (LTCG)</strong></p>
        <p>ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಯೂನಿಟ್‌ಗಳನ್ನು ೧೨ ತಿಂಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಹಿಡಿದಿಟ್ಟರೆ, ಆ ಲಾಭವನ್ನು ದೀರ್ಘಾವಧಿ ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ಪ್ರಸ್ತುತ ನಿಯಮಗಳ ಪ್ರಕಾರ:</p>
        <ul className="pl-6">
          <li>ಒಂದು ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ ₹೧,೨೫,೦೦೦ ವರೆಗಿನ LTCG ತೆರಿಗೆ ವಿನಾಯಿತಿ ಪಡೆಯುತ್ತದೆ </li>
          <li>₹೧.೨೫ ಲಕ್ಷ ಮೀರಿದ ಲಾಭದ ಮೇಲೆ ೧೨.೫% ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ</li>
        </ul>
        <p>ಉದಾಹರಣೆ</p>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ₹೩,೦೦,೦೦೦ ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡಿನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿದರು. ೩ ವರ್ಷಗಳ ನಂತರ ಹೂಡಿಕೆ ₹೫,೨೦,೦೦೦ ಆಯಿತು. ಬಂಡವಾಳ ಲಾಭ: ₹೫,೨೦,೦೦೦ − ₹೩,೦೦,೦೦೦ = ₹೨,೨೦,೦೦೦ ವಿನಾಯಿತಿ: ₹೧,೨೫,೦೦೦ ತೆರಿಗೆಗೊಳಪಡುವ ಲಾಭ: ₹೨,೨೦,೦೦೦ − ₹೧,೨೫,೦೦೦ = ₹೯೫,೦೦೦ ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೯೫,೦೦೦ ರ ೧೨.೫% = ₹೧೧,೮೭೫ (ಅಧಿಭಾರ ಮತ್ತು ಉಪಕರ ಹೊರತುಪಡಿಸಿ)</p>
        <hr className="chapter-rule" />
        <h3>ಸಾಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</h3>
        <p>ಸಾಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ಮುಖ್ಯವಾಗಿ ಸ್ಥಿರ-ಆದಾಯ ಭದ್ರತಾ ಸಾಧನಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ, ಅವುಗಳೆಂದರೆ:</p>
        <ul className="pl-6">
          <li>ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳು </li>
          <li>ಖಜಾನೆ ಬಿಲ್‌ಗಳು </li>
          <li>ಕಾರ್ಪೊರೇಟ್ ಬಾಂಡ್‌ಗಳು </li>
          <li>ಹಣ ಮಾರುಕಟ್ಟೆ ಸಾಧನಗಳು</li>
        </ul>
        <p>ಸಾಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳ ತೆರಿಗೆಯು ಏಪ್ರಿಲ್ ೨೦೨೩ ರಲ್ಲಿ ಗಣನೀಯವಾಗಿ ಬದಲಾಯಿತು ಮತ್ತು ಅನ್ವಯಿಸುವ ತೆರಿಗೆ ನಿಯಮಗಳು ಹೂಡಿಕೆ ಮೂಲತಃ ಯಾವಾಗ ಮಾಡಲಾಯಿತು ಎಂಬುದನ್ನು ಅವಲಂಬಿಸಿರುತ್ತವೆ.</p>
        <p><strong>ಏಪ್ರಿಲ್ ೧, ೨೦೨೩ ರಂದು ಅಥವಾ ನಂತರ ಖರೀದಿಸಿದ ಯೂನಿಟ್‌ಗಳು</strong></p>
        <p>ಏಪ್ರಿಲ್ ೧, ೨೦೨೩ ರಂದು ಅಥವಾ ನಂತರ ಮಾಡಿದ ಹೂಡಿಕೆಗಳಿಗೆ, ಸಾಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳ ಲಾಭವನ್ನು ಹೂಡಿಕೆಯನ್ನು ಎಷ್ಟು ಕಾಲ ಹಿಡಿದಿಟ್ಟಿದ್ದರೂ ಲೆಕ್ಕಿಸದೆ, ಹೂಡಿಕೆದಾರರ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಅಂದರೆ ದೀರ್ಘ ಅವಧಿಗೆ ಹಿಡಿದಿಟ್ಟರೂ ಕಡಿಮೆ ಬಂಡವಾಳ ಲಾಭ ದರ ದೊರೆಯುವುದಿಲ್ಲ.</p>
        <p>ಉದಾಹರಣೆ</p>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ೨೦೨೪ ರಲ್ಲಿ ₹೫,೦೦,೦೦೦ ಸಾಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡಿನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿದರು. ಎರಡು ವರ್ಷಗಳ ನಂತರ ಹೂಡಿಕೆ ₹೫,೮೦,೦೦೦ ಆಯಿತು. ಬಂಡವಾಳ ಲಾಭ: ₹೮೦,೦೦೦ ಹೂಡಿಕೆದಾರರು ೩೦% ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ನಲ್ಲಿದ್ದರೆ, ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೮೦,೦೦೦ ರ ೩೦% = ₹೨೪,೦೦೦ (ಅಧಿಭಾರ ಮತ್ತು ಉಪಕರ ಹೊರತುಪಡಿಸಿ)</p>
        <p><strong>ಏಪ್ರಿಲ್ ೧, ೨೦೨೩ ಕ್ಕೆ ಮೊದಲು ಖರೀದಿಸಿದ ಯೂನಿಟ್‌ಗಳು</strong></p>
        <p>ಹಳೆಯ ಸಾಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಹೂಡಿಕೆಗಳು ಇನ್ನೂ ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ ಸೌಲಭ್ಯ ಪಡೆಯಬಹುದು. ಈ ಯೂನಿಟ್‌ಗಳನ್ನು ೨೪ ತಿಂಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಹಿಡಿದಿಟ್ಟರೆ, ಲಾಭಕ್ಕೆ ಹೀಗೆ ತೆರಿಗೆ ವಿಧಿಸಬಹುದು:</p>
        <ul className="pl-6">
          <li>ಸೂಚ್ಯಂಕ ರಹಿತ ೧೨.೫% LTCG ತೆರಿಗೆ</li>
        </ul>
        <p>೨೪ ತಿಂಗಳು ಪೂರ್ಣಗೊಳ್ಳುವ ಮೊದಲು ಮಾರಿದರೆ, ಲಾಭಕ್ಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೂಡಿಕೆದಾರರ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ.</p>
        <p>ಉದಾಹರಣೆ</p>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ೨೦೨೨ ರಲ್ಲಿ ₹೫,೦೦,೦೦೦ ಸಾಲ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಯೂನಿಟ್‌ಗಳನ್ನು ಖರೀದಿಸಿದರು. ಮೂರು ವರ್ಷಗಳ ನಂತರ ಹೂಡಿಕೆ ₹೫,೮೦,೦೦೦ ಆಯಿತು. ಬಂಡವಾಳ ಲಾಭ: ₹೮೦,೦೦೦ ಯೂನಿಟ್‌ಗಳನ್ನು ಏಪ್ರಿಲ್ ೨೦೨೩ ಕ್ಕೆ ಮೊದಲು ಖರೀದಿಸಿ ೨೪ ತಿಂಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಹಿಡಿದಿರುವುದರಿಂದ, ಈ ಲಾಭವು ದೀರ್ಘಾವಧಿ ಎಂದು ಅರ್ಹತೆ ಪಡೆಯುತ್ತದೆ. ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೮೦,೦೦೦ ರ ೧೨.೫% = ₹೧೦,೦೦೦ (ಅಧಿಭಾರ ಮತ್ತು ಉಪಕರ ಹೊರತುಪಡಿಸಿ)</p>
        <p>ಹೊಸ ಹೂಡಿಕೆಗಳಿಗೆ ಅನ್ವಯಿಸುವ ಸ್ಲ್ಯಾಬ್-ಆಧಾರಿತ ತೆರಿಗೆಗೆ ಹೋಲಿಸಿದರೆ ಇದು ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಮಿಶ್ರ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</h3>
        <p>ಮಿಶ್ರ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ಷೇರುಗಳು ಮತ್ತು ಸಾಲ ಸಾಧನಗಳ ಸಂಯೋಜನೆಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತವೆ. ಇವುಗಳ ತೆರಿಗೆಯು ಮುಖ್ಯವಾಗಿ ಆಸ್ತಿ ಸಂಗ್ರಹದಲ್ಲಿ ಷೇರು ಹಂಚಿಕೆಯ ಪ್ರಮಾಣವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.</p>
        <p>ಫಂಡು ೬೫%ಕ್ಕಿಂತ ಹೆಚ್ಚು ಷೇರು ಒಡ್ಡುವಿಕೆಯನ್ನು ಕಾಯ್ದುಕೊಂಡರೆ, ತೆರಿಗೆ ಉದ್ದೇಶಕ್ಕಾಗಿ ಅದನ್ನು ಷೇರು-ಆಧಾರಿತ ಫಂಡ್ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಷೇರು ಒಡ್ಡುವಿಕೆ ಕಡಿಮೆ ಇದ್ದರೆ, ಫಂಡನ್ನು ಷೇರೇತರ ಫಂಡ್ ಎಂದು ಪರಿಗಣಿಸಿ ಸಾಲ ಫಂಡ್‌ಗಳಂತೆ ತೆರಿಗೆ ವಿಧಿಸಬಹುದು.</p>
        <p>ಉದಾಹರಣೆ</p>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ೭೦% ಷೇರು ಒಡ್ಡುವಿಕೆ ಹೊಂದಿರುವ ಆಕ್ರಮಣಕಾರಿ ಮಿಶ್ರ ಫಂಡಿನಲ್ಲಿ ₹೪,೦೦,೦೦೦ ಹೂಡಿಕೆ ಮಾಡಿದರು. ಎರಡು ವರ್ಷಗಳ ನಂತರ ಹೂಡಿಕೆ ₹೫,೨೦,೦೦೦ ಆಯಿತು. ಬಂಡವಾಳ ಲಾಭ: ₹೫,೨೦,೦೦೦ − ₹೪,೦೦,೦೦೦ = ₹೧,೨೦,೦೦೦ ಈ ಫಂಡು ಷೇರು-ಆಧಾರಿತ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಎಂದು ಅರ್ಹತೆ ಪಡೆಯುವುದರಿಂದ, ಲಾಭವನ್ನು ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಲಾಭವು ₹೧,೨೫,೦೦೦ ವಿನಾಯಿತಿ ಮಿತಿಗಿಂತ ಕಡಿಮೆ ಇರುವುದರಿಂದ, ಹೂಡಿಕೆದಾರರು ಯಾವುದೇ ತೆರಿಗೆ ಪಾವತಿಸುವ ಅಗತ್ಯವಿಲ್ಲ.</p>
        <p><strong>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ತೆರಿಗೆ ಏಕೆ ಮಹತ್ವದ್ದು</strong></p>
        <p>ಎರಡು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ತೆರಿಗೆ-ಪೂರ್ವ ಲಾಭದಲ್ಲಿ ಸಮಾನವಾಗಿ ಕಾಣಿಸಬಹುದು, ಆದರೆ ಅವುಗಳ ತೆರಿಗೆ ವಿಧಾನದ ಆಧಾರದ ಮೇಲೆ ತೆರಿಗೆ-ನಂತರದ ಫಲಿತಾಂಶಗಳು ಗಣನೀಯವಾಗಿ ಭಿನ್ನವಾಗಬಹುದು. ಉದಾಹರಣೆಗೆ:</p>
        <ul className="pl-6">
          <li>ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ಆದ್ಯತೆಯ ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ ದರದ ಸೌಲಭ್ಯ ಪಡೆಯುತ್ತವೆ</li>
          <li>ಹೊಸ ಸಾಲ ಫಂಡ್‌ಗಳಿಗೆ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್ ದರದಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ</li>
          <li>ಮಿಶ್ರ ಫಂಡ್‌ಗಳು ಷೇರು ಒಡ್ಡುವಿಕೆಯನ್ನು ಅನುಸರಿಸಿ ಯಾವುದಾದರೊಂದು ವಿಭಾಗದ ಅಡಿ ಬರಬಹುದು</li>
        </ul>
        <div className="pull-quote">
          ಈ ವ್ಯತ್ಯಾಸಗಳ ಕಾರಣ, ಹೂಡಿಕೆದಾರರು ಯಾವಾಗಲೂ ಕೇವಲ ಮೇಲ್ನೋಟದ ಲಾಭವನ್ನು ನೋಡುವ ಬದಲು ತೆರಿಗೆ-ನಂತರದ ಲಾಭವನ್ನು ಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳಬೇಕು. ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳ ತೆರಿಗೆ ನಿಯಮಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ, ತಮ್ಮ ಒಟ್ಟಾರೆ ಆಸ್ತಿ ಸಂಗ್ರಹದ ಭಾಗವಾಗಿ ಷೇರು ಫಂಡ್‌ಗಳು, ಸಾಲ ಫಂಡ್‌ಗಳು ಮತ್ತು ಮಿಶ್ರ ತಂತ್ರಗಳ ನಡುವೆ ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳುವಾಗ ಹೂಡಿಕೆದಾರರು ಉತ್ತಮ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.
        </div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 5
  // ==============================
  {
    title: {
      en: "Chapter 5: Growth vs IDCW - Tax Impact and Compounding",
      kn: "ಅಧ್ಯಾಯ ೫: ಗ್ರೋತ್ vs IDCW - ತೆರಿಗೆ ಪರಿಣಾಮ ಮತ್ತು ಕಂಪೌಂಡಿಂಗ್",
    },
    content: {
      en: (
        <>
          <p>
            When investing in mutual funds, investors are usually given two choices for how
            returns are handled: the <strong>Growth option</strong> and the{" "}
            <strong>IDCW (Income Distribution cum Capital Withdrawal)</strong> option.
            Although both options invest in the same underlying portfolio, the way returns are
            distributed and taxed differs significantly.
          </p>
          <hr className="chapter-rule" />
          <h3>Growth Option</h3>
          <p>
            In the growth option, the mutual fund does not distribute profits to investors
            periodically. All profits remain invested within the fund, the NAV grows over
            time, and returns continue to compound. Investors pay tax{" "}
            <strong>only when they sell or redeem their units</strong> and the gain is taxed
            as capital gains according to the applicable holding period rules.
          </p>
          <p>
            <strong>Example:</strong> Invest ₹5,00,000 in the growth option of an equity
            mutual fund. If the investment grows at 12% annually, after 15 years it may grow
            to approximately <strong>₹27,00,000</strong>. Since profits remain invested
            throughout the period, the entire capital continues compounding and taxes are paid
            only at the time of redemption.
          </p>
          <hr className="chapter-rule" />
          <h3>IDCW Option</h3>
          <p>
            In the IDCW option, the mutual fund distributes profits periodically. However,
            IDCW payouts are <strong>not additional returns</strong> - the payout comes from
            the fund&apos;s existing assets, which means the <strong>NAV of the fund falls by the
            amount distributed</strong>. More importantly, these distributions are{" "}
            <strong>taxed as income according to the investor&apos;s income tax slab</strong>.
          </p>
          <p>
            <strong>Example:</strong> The same investor chooses the IDCW option and receives
            ₹40,000 as annual payouts. If in the 30% tax bracket: tax = ₹12,000. Only
            ₹28,000 remains after tax, and the portion paid out no longer participates in
            compounding within the fund.
          </p>
          <hr className="chapter-rule" />
          <h3>Why Tax Deferral Matters</h3>
          <p>
            The growth option allows compounding to continue{" "}
            <strong>without interruption</strong> because profits remain invested and taxes
            are deferred until redemption. IDCW distributions create recurring tax events,
            which reduce the capital that remains invested. Even small differences in annual
            taxation can lead to <strong>large differences in long-term portfolio value</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>When IDCW May Be Useful</h3>
          <p>
            Although the growth option is generally more efficient for long-term investors,
            IDCW may still be appropriate for retirees who require regular income, investors
            seeking periodic cash flow, or situations where the investment is meant to
            supplement income. However, many investors prefer using the{" "}
            <strong>growth option combined with a Systematic Withdrawal Plan (SWP)</strong>{" "}
            when they need income, since this can provide greater flexibility and potentially
            better tax efficiency.
          </p>
          <div className="pull-quote">
            Growth option allows uninterrupted compounding and deferred taxation. IDCW
            creates recurring tax events that chip away at long-term wealth. In most
            wealth-building scenarios, growth wins.
          </div>
        </>
      ),
      kn: (
        <>
        <p>
          ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವಾಗ, ಲಾಭವನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕು ಎಂಬ ಬಗ್ಗೆ ಹೂಡಿಕೆದಾರರಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಎರಡು ಆಯ್ಕೆಗಳು ಲಭ್ಯವಾಗುತ್ತವೆ:
        </p>
        <ul className="pl-6">
          <li>ಬೆಳವಣಿಗೆ ಆಯ್ಕೆ </li>
          <li>IDCW (ಆದಾಯ ವಿತರಣೆ ಸಹಿತ ಬಂಡವಾಳ ಹಿಂತೆಗೆತ)</li>
        </ul>
        <p>
          ಎರಡೂ ಆಯ್ಕೆಗಳು ಒಂದೇ ಆಧಾರ ಆಸ್ತಿ ಸಂಗ್ರಹದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿದರೂ, ಲಾಭ ವಿತರಣೆ ಮತ್ತು ತೆರಿಗೆ ವಿಧಾನಗಳು ಭಿನ್ನವಾಗಿರುತ್ತವೆ. ದೀರ್ಘ ಅವಧಿಯಲ್ಲಿ ಈ ವ್ಯತ್ಯಾಸಗಳು ಹೂಡಿಕೆ ಅಂತಿಮವಾಗಿ ಸೃಷ್ಟಿಸುವ ಸಂಪತ್ತಿನ ಮೇಲೆ ಗಣನೀಯ ಪರಿಣಾಮ ಬೀರಬಹುದು.
        </p>
        <hr className="chapter-rule" />
        <h3>ಬೆಳವಣಿಗೆ ಆಯ್ಕೆ</h3>
        <p>
          ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯಲ್ಲಿ, ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಹೂಡಿಕೆದಾರರಿಗೆ ನಿಯತಕಾಲಿಕ ಲಾಭ ವಿತರಿಸುವುದಿಲ್ಲ. ಬದಲಿಗೆ:
        </p>
        <ul className="pl-6">
          <li>ಎಲ್ಲ ಲಾಭಗಳು ಫಂಡಿನಲ್ಲೇ ಹೂಡಿಕೆಯಾಗಿ ಉಳಿಯುತ್ತವೆ </li>
          <li>ನಿವ್ವಳ ಆಸ್ತಿ ಮೌಲ್ಯ (NAV) ಕಾಲಕ್ರಮೇಣ ಬೆಳೆಯುತ್ತದೆ </li>
          <li>ಲಾಭಗಳು ಚಕ್ರಬಡ್ಡಿ ರೂಪದಲ್ಲಿ ಬೆಳೆಯುತ್ತ ಹೋಗುತ್ತವೆ</li>
        </ul>
        <p>
          ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಯೂನಿಟ್‌ಗಳನ್ನು ಮಾರಿದಾಗ ಅಥವಾ ವಿಮೋಚನೆ ಮಾಡಿದಾಗ ಮಾತ್ರ ತೆರಿಗೆ ಪಾವತಿಸುತ್ತಾರೆ ಮತ್ತು ಲಾಭವನ್ನು ಅನ್ವಯಿಸುವ ಧಾರಣ ಅವಧಿ ನಿಯಮಗಳ ಪ್ರಕಾರ ಬಂಡವಾಳ ಲಾಭ ತೆರಿಗೆಯಾಗಿ ವಿಧಿಸಲಾಗುತ್ತದೆ.
        </p>
        <p>
          ಹೂಡಿಕೆದಾರರು ನಿರ್ಗಮಿಸಲು ಆಯ್ಕೆ ಮಾಡುವವರೆಗೆ ಸಂಪೂರ್ಣ ಹೂಡಿಕೆ ಫಂಡಿನಲ್ಲೇ ಉಳಿದು ಚಕ್ರಬಡ್ಡಿ ಸಂಚಯಿಸಲು ಇದು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.
        </p>
        <p>ಉದಾಹರಣೆ</p>
        <p>
          ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ಷೇರು ಮ್ಯೂಚುಯಲ್ ಫಂಡಿನ ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯಲ್ಲಿ ₹೫,೦೦,೦೦೦ ಹೂಡಿಕೆ ಮಾಡಿದರು ಎಂದು ಭಾವಿಸೋಣ. ವಾರ್ಷಿಕ ೧೨% ದರದಲ್ಲಿ ಬೆಳೆದರೆ, ೧೫ ವರ್ಷಗಳ ನಂತರ ಅದು ಸುಮಾರು ₹೨೭,೦೦,೦೦೦ ಆಗಬಹುದು. ಇಡೀ ಅವಧಿಯಲ್ಲಿ ಲಾಭಗಳು ಹೂಡಿಕೆಯಾಗಿ ಉಳಿಯುವುದರಿಂದ, ಸಂಪೂರ್ಣ ಬಂಡವಾಳ ಚಕ್ರಬಡ್ಡಿ ಸಂಚಯಿಸುತ್ತ ಸಾಗುತ್ತದೆ ಮತ್ತು ವಿಮೋಚನೆ ಸಮಯದಲ್ಲಿ ಮಾತ್ರ ತೆರಿಗೆ ಪಾವತಿಸಲಾಗುತ್ತದೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>IDCW ಆಯ್ಕೆ</h3>
        <p>
          IDCW ಆಯ್ಕೆಯಲ್ಲಿ, ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಹೂಡಿಕೆದಾರರಿಗೆ ನಿಯತಕಾಲಿಕ ಲಾಭ ವಿತರಿಸುತ್ತದೆ. ಈ ಪಾವತಿಗಳು ಹೀಗೆ ಸಂಭವಿಸಬಹುದು:
        </p>
        <ul className="pl-6">
          <li>ಮಾಸಿಕ </li>
          <li>ತ್ರೈಮಾಸಿಕ </li>
          <li>ವಾರ್ಷಿಕ</li>
        </ul>
        <p>
          ಆದರೆ, IDCW ಪಾವತಿಗಳು ಹೆಚ್ಚುವರಿ ಲಾಭಗಳಲ್ಲ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಅತ್ಯಂತ ಮಹತ್ವದ್ದು. ಈ ಪಾವತಿಯು ಫಂಡಿನ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಆಸ್ತಿಗಳಿಂದ ಬರುತ್ತದೆ, ಅಂದರೆ ವಿತರಿಸಿದ ಮೊತ್ತದಷ್ಟು ಫಂಡಿನ NAV ಕಡಿಮೆಯಾಗುತ್ತದೆ.
        </p>
        <p>
          ಇನ್ನೂ ಮಹತ್ವದ ವಿಷಯವೆಂದರೆ, ಈ ವಿತರಣೆಗಳಿಗೆ ಹೂಡಿಕೆದಾರರ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ಆದಾಯ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ.
        </p>
        <p>ಉದಾಹರಣೆ</p>
        <p>
          ಅದೇ ಹೂಡಿಕೆದಾರರು IDCW ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ ವಾರ್ಷಿಕ ₹೪೦,೦೦೦ ಪಾವತಿ ಪಡೆದರು ಎಂದು ಭಾವಿಸೋಣ. ಹೂಡಿಕೆದಾರರು ೩೦% ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ನಲ್ಲಿದ್ದರೆ, ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೪೦,೦೦೦ ರ ೩೦% = ₹೧೨,೦೦೦ ಅಂದರೆ ತೆರಿಗೆ ನಂತರ ₹೨೮,೦೦೦ ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ ಮತ್ತು ಪಾವತಿಸಿದ ಮೊತ್ತವು ಇನ್ನು ಮೇಲೆ ಫಂಡಿನಲ್ಲಿ ಚಕ್ರಬಡ್ಡಿ ಸಂಚಯಿಸುವುದಿಲ್ಲ.
        </p>
        <p>
          ದೀರ್ಘ ಅವಧಿಯಲ್ಲಿ, ಪುನರಾವರ್ತಿತ ಪಾವತಿಗಳು ಮತ್ತು ತೆರಿಗೆಯು ಅಂತಿಮವಾಗಿ ಸಂಗ್ರಹವಾಗುವ ಒಟ್ಟು ಸಂಪತ್ತನ್ನು ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಮಾಡಬಹುದು.
        </p>
        <hr className="chapter-rule" />
        <h3>ತೆರಿಗೆ ಮುಂದೂಡಿಕೆ ಏಕೆ ಮಹತ್ವದ್ದು</h3>
        <p>
          ಹೂಡಿಕೆಯಲ್ಲಿ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಶಕ್ತಿಗಳಲ್ಲಿ ಒಂದು ಚಕ್ರಬಡ್ಡಿ — ಅಂದರೆ ಲಾಭಗಳು ಕಾಲಕ್ರಮೇಣ ಹೆಚ್ಚುವರಿ ಲಾಭ ಗಳಿಸುವ ಪ್ರಕ್ರಿಯೆ.
        </p>
        <p>
          ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯು ಈ ಚಕ್ರಬಡ್ಡಿಯನ್ನು ಅಡೆತಡೆಯಿಲ್ಲದೆ ಮುಂದುವರಿಯಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ, ಏಕೆಂದರೆ ಲಾಭಗಳು ಹೂಡಿಕೆಯಾಗಿ ಉಳಿಯುತ್ತವೆ ಮತ್ತು ವಿಮೋಚನೆಯವರೆಗೆ ತೆರಿಗೆ ಮುಂದೂಡಲ್ಪಡುತ್ತದೆ.
        </p>
        <p>
          ಇದಕ್ಕೆ ವ್ಯತಿರಿಕ್ತವಾಗಿ, IDCW ವಿತರಣೆಗಳು ಪದೇ ಪದೇ ತೆರಿಗೆ ಘಟನೆಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತವೆ, ಇದರಿಂದ ಹೂಡಿಕೆಯಾಗಿ ಉಳಿಯುವ ಬಂಡವಾಳ ಕಡಿಮೆಯಾಗುತ್ತದೆ. ವಾರ್ಷಿಕ ತೆರಿಗೆಯಲ್ಲಿ ಸಣ್ಣ ವ್ಯತ್ಯಾಸಗಳೂ ಸಹ ದೀರ್ಘಕಾಲೀನ ಆಸ್ತಿ ಸಂಗ್ರಹದ ಮೌಲ್ಯದಲ್ಲಿ ದೊಡ್ಡ ವ್ಯತ್ಯಾಸ ತರಬಹುದು.
        </p>
        <hr className="chapter-rule" />
        <h3>IDCW ಯಾವಾಗ ಉಪಯುಕ್ತವಾಗಬಹುದು</h3>
        <p>
          ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಬೆಳವಣಿಗೆ ಆಯ್ಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿದ್ದರೂ, ಕೆಲವು ನಿರ್ದಿಷ್ಟ ಸಂದರ್ಭಗಳಲ್ಲಿ IDCW ಸೂಕ್ತವಾಗಿರಬಹುದು. ಉದಾಹರಣೆಗೆ:
        </p>
        <ul className="pl-6">
          <li>ನಿಯಮಿತ ಆದಾಯ ಅಗತ್ಯವಿರುವ ನಿವೃತ್ತರು </li>
          <li>ನಿಯತಕಾಲಿಕ ನಗದು ಹರಿವು ಬಯಸುವ ಹೂಡಿಕೆದಾರರು </li>
          <li>ದೀರ್ಘಾವಧಿ ಸಂಪತ್ತು ನಿರ್ಮಾಣಕ್ಕಿಂತ ಆದಾಯ ಪೂರಕವಾಗಿ ಬಳಸಲು ಉದ್ದೇಶಿಸಿದ ಹೂಡಿಕೆಗಳು</li>
        </ul>
        <p>
          ಆದರೆ, ಆದಾಯ ಅಗತ್ಯವಿದ್ದಾಗ ಅನೇಕ ಹೂಡಿಕೆದಾರರು ವ್ಯವಸ್ಥಿತ ಹಿಂಪಡೆತ ಯೋಜನೆ (SWP) ಯೊಂದಿಗೆ ಸಂಯೋಜಿಸಿ ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯನ್ನೇ ಆದ್ಯತೆ ನೀಡುತ್ತಾರೆ, ಏಕೆಂದರೆ ಇದು ಹೆಚ್ಚಿನ ನಮ್ಯತೆ ಮತ್ತು ಸಂಭಾವ್ಯವಾಗಿ ಉತ್ತಮ ತೆರಿಗೆ ದಕ್ಷತೆ ನೀಡಬಹುದು.
        </p>
        <p><strong>ಮುಖ್ಯ ತಿರುಳು</strong></p>
        <p>
          ಬೆಳವಣಿಗೆ ಮತ್ತು IDCW ನಡುವಿನ ಆಯ್ಕೆಯು ಕೇವಲ ಲಾಭ ಪಡೆಯುವ ರೀತಿಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ — ಇದು ತೆರಿಗೆ ಮತ್ತು ಚಕ್ರಬಡ್ಡಿ ಎರಡನ್ನೂ ಪ್ರಭಾವಿಸುತ್ತದೆ. ಬಹುತೇಕ ದೀರ್ಘಕಾಲೀನ ಸಂಪತ್ತು ನಿರ್ಮಾಣ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ:
        </p>
        <ul className="pl-6">
          <li>ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯು ಅಡೆತಡೆಯಿಲ್ಲದ ಚಕ್ರಬಡ್ಡಿಗೆ ಅವಕಾಶ ನೀಡುತ್ತದೆ </li>
          <li>ತೆರಿಗೆಯನ್ನು ವಿಮೋಚನೆಯವರೆಗೆ ಮುಂದೂಡಲಾಗುತ್ತದೆ </li>
          <li>ಕಾಲಕ್ರಮೇಣ ಹೆಚ್ಚಿನ ಬಂಡವಾಳ ಹೂಡಿಕೆಯಾಗಿ ಉಳಿಯುತ್ತದೆ</li>
        </ul>
        <div className="pull-quote">
          ಈ ಅನುಕೂಲಗಳ ಕಾರಣ, ನಿಯತಕಾಲಿಕ ಪಾವತಿಗಿಂತ ದೀರ್ಘಕಾಲೀನ ಸಂಪತ್ತು ನಿರ್ಮಾಣದತ್ತ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುವ ಹೂಡಿಕೆದಾರರು ಸಾಮಾನ್ಯವಾಗಿ ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಗೆ ಆದ್ಯತೆ ನೀಡುತ್ತಾರೆ.
        </div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 6
  // ==============================
  {
    title: {
      en: "Chapter 6: Dividend Taxation",
      kn: "ಅಧ್ಯಾಯ ೬: ಡಿವಿಡೆಂಡ್ ತೆರಿಗೆ",
    },
    content: {
      en: (
        <>
          <p>
            Dividend income refers to the{" "}
            <strong>cash payments companies distribute to shareholders</strong> from their
            profits. Investors holding shares of a company or mutual funds that distribute
            dividends may receive such payouts periodically.
          </p>
          <p>
            Under the current tax framework in India,{" "}
            <strong>
              dividend income is taxed according to the investor&apos;s income tax slab
            </strong>
            . This means the tax rate applied depends on the investor&apos;s total taxable income
            for the financial year.
          </p>
          <hr className="chapter-rule" />
          <h3>How Dividend Income Is Taxed</h3>
          <p>
            If an investor falls in the <strong>20% tax bracket</strong>, dividend income is
            taxed at 20%. If an investor falls in the <strong>30% tax bracket</strong>,
            dividend income is taxed at 30%. This taxation structure means that dividend
            income can sometimes face <strong>higher effective tax rates compared to capital
            gains</strong>, particularly for investors in higher income brackets.
          </p>
          <p>
            <strong>Example:</strong> Suppose an investor receives{" "}
            <strong>₹50,000 in dividends</strong> from stocks during a financial year. If the
            investor falls in the 30% income tax bracket, the tax payable would be 30% ×
            ₹50,000 = <strong>₹15,000</strong> (excluding surcharge and cess). This leaves
            ₹35,000 as the post-tax dividend income.
          </p>
          <hr className="chapter-rule" />
          <h3>Why This Matters for Investors</h3>
          <p>
            Because dividends are taxed at slab rates, investors should evaluate whether
            their investment strategy relies heavily on dividend payouts or capital
            appreciation. For many long-term investors,{" "}
            <strong>
              capital gains can be more tax-efficient than frequent dividend payouts
            </strong>
            , especially when investments are held for longer periods and benefit from
            favorable long-term capital gains treatment.
          </p>
          <p>
            A stock that pays a high dividend may appear attractive, but for an investor in
            the 30% bracket, the effective post-tax yield may be considerably lower than it
            first appears.
          </p>
          <div className="pull-quote">
            Dividend income is taxed at your full income tax slab rate. For investors in
            higher brackets, capital appreciation through long-term equity holding is often
            more tax-efficient than dividend-heavy strategies.
          </div>
        </>
      ),
      kn: (
        <>
        <p>ಲಾಭಾಂಶ ಆದಾಯವೆಂದರೆ ಕಂಪನಿಗಳು ತಮ್ಮ ಲಾಭದಿಂದ ಷೇರುದಾರರಿಗೆ ನೀಡುವ ನಗದು ಪಾವತಿಗಳು. ಕಂಪನಿಯ ಷೇರುಗಳನ್ನು ಅಥವಾ ಲಾಭಾಂಶ ವಿತರಿಸುವ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಹೂಡಿಕೆದಾರರು ನಿಯತಕಾಲಿಕ ಪಾವತಿ ಪಡೆಯಬಹುದು.</p>
        <p>ಭಾರತದ ಪ್ರಸ್ತುತ ತೆರಿಗೆ ಚೌಕಟ್ಟಿನ ಪ್ರಕಾರ, ಲಾಭಾಂಶ ಆದಾಯಕ್ಕೆ ಹೂಡಿಕೆದಾರರ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಅಂದರೆ ಅನ್ವಯಿಸುವ ತೆರಿಗೆ ದರವು ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ ಹೂಡಿಕೆದಾರರ ಒಟ್ಟು ತೆರಿಗೆ ವಿಧಿಸಬಹುದಾದ ಆದಾಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.</p>
        <hr className="chapter-rule" />
        <p>ಉದಾಹರಣೆಗೆ:</p>
        <ul className="pl-6">
          <li>ಹೂಡಿಕೆದಾರರು ೨೦% ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ನಲ್ಲಿದ್ದರೆ, ಲಾಭಾಂಶ ಆದಾಯಕ್ಕೆ ೨೦% ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ </li>
          <li>ಹೂಡಿಕೆದಾರರು ೩೦% ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ನಲ್ಲಿದ್ದರೆ, ಲಾಭಾಂಶ ಆದಾಯಕ್ಕೆ ೩೦% ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ</li>
        </ul>
        <p>ಈ ತೆರಿಗೆ ರಚನೆಯ ಅರ್ಥವೆಂದರೆ, ವಿಶೇಷವಾಗಿ ಹೆಚ್ಚಿನ ಆದಾಯ ವರ್ಗದ ಹೂಡಿಕೆದಾರರಿಗೆ, ಲಾಭಾಂಶ ಆದಾಯವು ಕೆಲವೊಮ್ಮೆ ಬಂಡವಾಳ ಲಾಭಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಪರಿಣಾಮಕಾರಿ ತೆರಿಗೆ ದರವನ್ನು ಎದುರಿಸಬಹುದು.</p>
        <p><strong>ಉದಾಹರಣೆ</strong></p>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ಒಂದು ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ ಷೇರುಗಳಿಂದ ₹೫೦,೦೦೦ ಲಾಭಾಂಶ ಪಡೆದರು ಎಂದು ಭಾವಿಸೋಣ. ಹೂಡಿಕೆದಾರರು ೩೦% ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ನಲ್ಲಿದ್ದರೆ, ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೫೦,೦೦೦ ರ ೩೦% = ₹೧೫,೦೦೦ (ಅಧಿಭಾರ ಮತ್ತು ಉಪಕರ ಹೊರತುಪಡಿಸಿ) ತೆರಿಗೆ ನಂತರ ₹೩೫,೦೦೦ ಮಾತ್ರ ಲಾಭಾಂಶ ಆದಾಯವಾಗಿ ಉಳಿಯುತ್ತದೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಹೂಡಿಕೆದಾರರಿಗೆ ಇದು ಏಕೆ ಮಹತ್ವದ್ದು</h3>
        <p>ಲಾಭಾಂಶಗಳಿಗೆ ಸ್ಲ್ಯಾಬ್ ದರದಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುವುದರಿಂದ, ತಮ್ಮ ಹೂಡಿಕೆ ತಂತ್ರವು ಮುಖ್ಯವಾಗಿ ಲಾಭಾಂಶ ಪಾವತಿಗಳನ್ನು ಅವಲಂಬಿಸಿದೆಯೇ ಅಥವಾ ಬಂಡವಾಳ ಮೌಲ್ಯವರ್ಧನೆಯನ್ನು ಅವಲಂಬಿಸಿದೆಯೇ ಎಂಬುದನ್ನು ಹೂಡಿಕೆದಾರರು ಅಳೆಯಬೇಕು.</p>
        <p>ಅನೇಕ ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ, ಆಗಾಗ ನೀಡಲಾಗುವ ಲಾಭಾಂಶ ಪಾವತಿಗಳಿಗಿಂತ ಬಂಡವಾಳ ಲಾಭವು ಹೆಚ್ಚು ತೆರಿಗೆ-ದಕ್ಷವಾಗಿರಬಹುದು — ವಿಶೇಷವಾಗಿ ಹೂಡಿಕೆಗಳನ್ನು ದೀರ್ಘ ಅವಧಿಗೆ ಹಿಡಿದಿಟ್ಟಾಗ ಅನುಕೂಲಕರ ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ ಸೌಲಭ್ಯ ದೊರೆಯುತ್ತದೆ.</p>
        <div className="pull-quote">
          ಲಾಭಾಂಶ ಆದಾಯಕ್ಕೆ ಹೇಗೆ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ, ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ನಿಜವಾದ ತೆರಿಗೆ-ನಂತರದ ಲಾಭವನ್ನು ಉತ್ತಮವಾಗಿ ಅಂದಾಜಿಸಲು ಮತ್ತು ತಮ್ಮ ಆಸ್ತಿ ಸಂಗ್ರಹವನ್ನು ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ರಚಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.
        </div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 7
  // ==============================
  {
    title: {
      en: "Chapter 7: Interest Income and Fixed Income Taxation",
      kn: "ಅಧ್ಯಾಯ ೭: ಬಡ್ಡಿ ಆದಾಯ ಮತ್ತು ಸ್ಥಿರ ಆದಾಯ ತೆರಿಗೆ",
    },
    content: {
      en: (
        <>
          <p>
            Interest income is one of the most common forms of investment return, particularly
            for investors using <strong>fixed-income instruments</strong>. Under the Indian
            income tax framework, interest earned from financial instruments is typically
            classified under{" "}
            <strong>Income from Other Sources</strong>.
          </p>
          <p>
            Unlike capital gains from equities, interest income{" "}
            <strong>does not receive preferential tax treatment</strong> - it is generally
            taxed according to the <strong>investor&apos;s income tax slab</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>Common Sources of Interest Income</h3>
          <p>
            Interest income arises from: fixed deposits (FDs), recurring deposits (RDs),
            savings account interest, corporate bonds, government bonds, and debentures and
            other debt instruments. Because interest income is taxed at slab rates, the{" "}
            <strong>effective post-tax return can be significantly lower</strong> than the
            advertised interest rate.
          </p>
          <img src="/taxation/image3.png" alt="Interest income and fixed income taxation" style={imgStyle} />
          <hr className="chapter-rule" />
          <h3>Fixed Deposit Example</h3>
          <p>
            Suppose an investor places <strong>₹5,00,000 in a bank fixed deposit</strong>{" "}
            that offers <strong>7% annual interest</strong>.
          </p>
          <p>Annual interest earned: ₹5,00,000 × 7% = <strong>₹35,000</strong></p>
          <p>
            If the investor falls in the <strong>30% income tax bracket</strong>, the tax
            payable would be: 30% × ₹35,000 = <strong>₹10,500</strong>
          </p>
          <p>
            After tax, the investor effectively receives: ₹35,000 − ₹10,500 ={" "}
            <strong>₹24,500</strong>
          </p>
          <p>
            The effective post-tax return becomes approximately{" "}
            <strong>4.9% instead of 7%</strong>. This example highlights why{" "}
            <strong>tax-adjusted returns are important</strong> when comparing investment
            options.
          </p>
          <hr className="chapter-rule" />
          <h3>Savings Account Interest</h3>
          <p>
            Interest earned from savings accounts is also classified under Income from Other
            Sources. Under the <strong>new tax regime</strong>, this interest is{" "}
            <strong>fully taxable according to the investor&apos;s income tax slab</strong> and
            deductions such as Section 80TTA are not available. Even relatively small amounts
            of interest income must be reported as part of total income.
          </p>
          <hr className="chapter-rule" />
          <h3>Tax Deducted at Source (TDS)</h3>
          <p>
            For certain instruments such as fixed deposits, banks may deduct{" "}
            <strong>Tax Deducted at Source (TDS)</strong> if interest income crosses
            specified thresholds. However, TDS is{" "}
            <strong>not the final tax</strong>. The investor must still report the full
            interest income in their tax return and pay any additional tax due according to
            their income tax slab.
          </p>
          <p>
            Since interest income is taxed at slab rates, investors should always compare{" "}
            <strong>post-tax returns</strong> rather than headline interest rates.
            Fixed-income investments still play an important role in portfolio stability,
            liquidity and risk management - but understanding their tax treatment helps
            investors evaluate them more accurately within a diversified portfolio.
          </p>
          <div className="pull-quote">
            A 7% fixed deposit taxed at 30% yields approximately 4.9% after tax. Always
            compare investments on their post-tax return - the headline rate rarely tells the
            full story.
          </div>
        </>
      ),
      kn: (
        <>
        <p>
          ಬಡ್ಡಿ ಆದಾಯವು ಹೂಡಿಕೆ ಲಾಭದ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ರೂಪಗಳಲ್ಲಿ ಒಂದು — ವಿಶೇಷವಾಗಿ ಸ್ಥಿರ-ಆದಾಯ ಸಾಧನಗಳನ್ನು ಬಳಸುವ ಹೂಡಿಕೆದಾರರಿಗೆ. ಭಾರತೀಯ ಆದಾಯ ತೆರಿಗೆ ಚೌಕಟ್ಟಿನ ಪ್ರಕಾರ, ಹಣಕಾಸು ಸಾಧನಗಳಿಂದ ಗಳಿಸಿದ ಬಡ್ಡಿಯನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಇತರ ಮೂಲಗಳಿಂದ ಆದಾಯ ಎಂಬ ವಿಭಾಗದಡಿ ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ.
        </p>
        <p>
          ಷೇರುಗಳ ಬಂಡವಾಳ ಲಾಭಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿ, ಬಡ್ಡಿ ಆದಾಯಕ್ಕೆ ಯಾವುದೇ ಆದ್ಯತೆಯ ತೆರಿಗೆ ಸೌಲಭ್ಯ ದೊರೆಯುವುದಿಲ್ಲ. ಬದಲಿಗೆ, ಇದಕ್ಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೂಡಿಕೆದಾರರ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ, ಅಂದರೆ ಅನ್ವಯಿಸುವ ತೆರಿಗೆ ದರವು ಹೂಡಿಕೆದಾರರ ಒಟ್ಟು ತೆರಿಗೆ ವಿಧಿಸಬಹುದಾದ ಆದಾಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.
        </p>
        <hr className="chapter-rule" />
        <p>ಬಡ್ಡಿ ಆದಾಯದ ಸಾಮಾನ್ಯ ಮೂಲಗಳು:</p>
        <ul className="pl-6">
          <li>ಸ್ಥಿರ ಠೇವಣಿಗಳು (FD) </li>
          <li>ಆವರ್ತಕ ಠೇವಣಿಗಳು (RD) </li>
          <li>ಉಳಿತಾಯ ಖಾತೆ ಬಡ್ಡಿ </li>
          <li>ಕಾರ್ಪೊರೇಟ್ ಬಾಂಡ್‌ಗಳು </li>
          <li>ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳು </li>
          <li>ಋಣಪತ್ರಗಳು ಮತ್ತು ಇತರ ಸಾಲ ಸಾಧನಗಳು</li>
        </ul>
        <img src="/taxation/image3.png" alt="Interest income and fixed income taxation" style={imgStyle} />
        <p>
          ಬಡ್ಡಿ ಆದಾಯಕ್ಕೆ ಸ್ಲ್ಯಾಬ್ ದರದಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುವುದರಿಂದ, ತೆರಿಗೆ-ನಂತರದ ನಿಜವಾದ ಲಾಭವು ಜಾಹೀರಾತು ನೀಡಲಾದ ಬಡ್ಡಿ ದರಕ್ಕಿಂತ ಗಣನೀಯವಾಗಿ ಕಡಿಮೆಯಾಗಿರಬಹುದು.
        </p>
        <hr className="chapter-rule" />
        <h3>ಉದಾಹರಣೆ: ಸ್ಥಿರ ಠೇವಣಿ</h3>
        <p>
          ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ೭% ವಾರ್ಷಿಕ ಬಡ್ಡಿ ನೀಡುವ ಬ್ಯಾಂಕ್ ಸ್ಥಿರ ಠೇವಣಿಯಲ್ಲಿ ₹೫,೦೦,೦೦೦ ಇರಿಸಿದರು ಎಂದು ಭಾವಿಸೋಣ. ವಾರ್ಷಿಕ ಗಳಿಸಿದ ಬಡ್ಡಿ: ₹೫,೦೦,೦೦೦ × ೭% = ₹೩೫,೦೦೦ ಹೂಡಿಕೆದಾರರು ೩೦% ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ನಲ್ಲಿದ್ದರೆ, ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ: ₹೩೫,೦೦೦ ರ ೩೦% = ₹೧೦,೫೦೦ ತೆರಿಗೆ ನಂತರ ಹೂಡಿಕೆದಾರರಿಗೆ ಉಳಿಯುವ ಮೊತ್ತ: ₹೩೫,೦೦೦ − ₹೧೦,೫೦೦ = ₹೨೪,೫೦೦ ತೆರಿಗೆ-ನಂತರದ ನಿಜವಾದ ಲಾಭ ೭% ಬದಲಾಗಿ ಸುಮಾರು ೪.೯% ಆಗುತ್ತದೆ. ಹೂಡಿಕೆ ಆಯ್ಕೆಗಳನ್ನು ಹೋಲಿಸುವಾಗ ತೆರಿಗೆ-ಸರಿಹೊಂದಿಸಿದ ಲಾಭ ಏಕೆ ಮಹತ್ವದ್ದು ಎಂಬುದನ್ನು ಈ ಉದಾಹರಣೆ ಸ್ಪಷ್ಟಪಡಿಸುತ್ತದೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>ಉಳಿತಾಯ ಖಾತೆ ಬಡ್ಡಿ</h3>
        <p>
          ಉಳಿತಾಯ ಖಾತೆಗಳಿಂದ ಗಳಿಸಿದ ಬಡ್ಡಿಯನ್ನೂ ಸಹ ಇತರ ಮೂಲಗಳಿಂದ ಆದಾಯ ಎಂಬ ವಿಭಾಗದಡಿ ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ. ಹೊಸ ತೆರಿಗೆ ಪದ್ಧತಿಯಲ್ಲಿ, ಈ ಬಡ್ಡಿಯು ಸಂಪೂರ್ಣವಾಗಿ ಹೂಡಿಕೆದಾರರ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ತೆರಿಗೆಗೆ ಒಳಪಡುತ್ತದೆ ಮತ್ತು ಸೆಕ್ಷನ್ ೮೦TTA ಯಂತಹ ಕಡಿತಗಳು ಲಭ್ಯವಿರುವುದಿಲ್ಲ.
        </p>
        <p>
          ಉದಾಹರಣೆಗೆ: ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ₹೮,೦೦೦ ಉಳಿತಾಯ ಖಾತೆ ಬಡ್ಡಿ ಗಳಿಸಿದರೆ, ಇಡೀ ಮೊತ್ತವನ್ನು ಹೂಡಿಕೆದಾರರ ತೆರಿಗೆ ವಿಧಿಸಬಹುದಾದ ಆದಾಯಕ್ಕೆ ಸೇರಿಸಲಾಗುತ್ತದೆ. ₹೧೫,೦೦೦ ಗಳಿಸಿದರೆ, ಪೂರ್ಣ ₹೧೫,೦೦೦ ತೆರಿಗೆ ವಿಧಿಸಬಹುದಾದ ಆದಾಯದಲ್ಲಿ ಸೇರಿ ಅನ್ವಯಿಸುವ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುತ್ತದೆ.
        </p>
        <p>
          ಅಂದರೆ ಹೊಸ ತೆರಿಗೆ ಪದ್ಧತಿಯಲ್ಲಿ ತುಲನಾತ್ಮಕವಾಗಿ ಸಣ್ಣ ಬಡ್ಡಿ ಆದಾಯವನ್ನೂ ಸಹ ಒಟ್ಟು ಆದಾಯದ ಭಾಗವಾಗಿ ವರದಿ ಮಾಡಬೇಕಾಗುತ್ತದೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>ಮೂಲದಲ್ಲಿ ತೆರಿಗೆ ಕಡಿತ (TDS)</h3>
        <p>
          ಸ್ಥಿರ ಠೇವಣಿಗಳಂತಹ ಕೆಲವು ಸಾಧನಗಳಿಗೆ, ಬಡ್ಡಿ ಆದಾಯವು ನಿರ್ದಿಷ್ಟ ಮಿತಿ ದಾಟಿದರೆ ಬ್ಯಾಂಕ್‌ಗಳು ಮೂಲದಲ್ಲಿ ತೆರಿಗೆ ಕಡಿತ (TDS) ಮಾಡಬಹುದು.
        </p>
        <p>
          ಆದಾಗ್ಯೂ, TDS ಅಂತಿಮ ತೆರಿಗೆ ಅಲ್ಲ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಮಹತ್ವದ್ದು. ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ತೆರಿಗೆ ವಿವರಣೆಯಲ್ಲಿ ಪೂರ್ಣ ಬಡ್ಡಿ ಆದಾಯವನ್ನು ದಾಖಲಿಸಬೇಕು ಮತ್ತು ತಮ್ಮ ಆದಾಯ ತೆರಿಗೆ ಸ್ಲ್ಯಾಬ್‌ಗೆ ಅನುಗುಣವಾಗಿ ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ತೆರಿಗೆಯನ್ನು ಪಾವತಿಸಬೇಕಾಗುತ್ತದೆ.
        </p>
        <h3>ಹೂಡಿಕೆದಾರರಿಗೆ ಇದು ಏಕೆ ಮಹತ್ವದ್ದು</h3>
        <p>
          ಬಡ್ಡಿ ಆದಾಯಕ್ಕೆ ಸ್ಲ್ಯಾಬ್ ದರದಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾಗುವುದರಿಂದ, ಹೂಡಿಕೆದಾರರು ಜಾಹೀರಾತು ನೀಡಲಾದ ಬಡ್ಡಿ ದರಗಳ ಬದಲು ಯಾವಾಗಲೂ ತೆರಿಗೆ-ನಂತರದ ಲಾಭವನ್ನು ಹೋಲಿಸಬೇಕು. ಉದಾಹರಣೆಗೆ:
        </p>
        <ul className="pl-6">
          <li>೩೦% ದರದಲ್ಲಿ ತೆರಿಗೆ ವಿಧಿಸಲಾದ ೭% ಸ್ಥಿರ ಠೇವಣಿಯು ತೆರಿಗೆ ನಂತರ ಸುಮಾರು ೪.೯% ಲಾಭ ನೀಡಬಹುದು </li>
          <li>ದೀರ್ಘಾವಧಿ ಷೇರು ಹೂಡಿಕೆಯು ಹೆಚ್ಚು ಅನುಕೂಲಕರ ಬಂಡವಾಳ ಲಾಭ ತೆರಿಗೆ ಸೌಲಭ್ಯದ ಲಾಭ ಪಡೆಯಬಹುದು</li>
        </ul>
        <p>
          ಇದರ ಅರ್ಥ ಸ್ಥಿರ-ಆದಾಯ ಹೂಡಿಕೆಗಳು ಅನಗತ್ಯ ಎಂದಲ್ಲ. ಆಸ್ತಿ ಸಂಗ್ರಹದ ಸ್ಥಿರತೆ, ದ್ರವ್ಯತೆ ಮತ್ತು ಅಪಾಯ ನಿರ್ವಹಣೆಯಲ್ಲಿ ಅವು ಇನ್ನೂ ಮಹತ್ವದ ಪಾತ್ರ ವಹಿಸುತ್ತವೆ.
        </p>
        <p>
          ಆದರೆ ಅವುಗಳ ತೆರಿಗೆ ನಿಯಮಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ, ವೈವಿಧ್ಯಮಯ ಆಸ್ತಿ ಸಂಗ್ರಹದಲ್ಲಿ ಅವುಗಳನ್ನು ಹೆಚ್ಚು ನಿಖರವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಹೂಡಿಕೆದಾರರಿಗೆ ಸಾಧ್ಯವಾಗುತ್ತದೆ.
        </p>
        <div className="pull-quote">
          A 7% fixed deposit taxed at 30% yields approximately 4.9% after tax. Always
          compare investments on their post-tax return - the headline rate rarely tells the
          full story.
        </div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 8
  // ==============================
  {
    title: {
      en: "Chapter 8: Tax Loss Harvesting",
      kn: "ಅಧ್ಯಾಯ ೮: ತೆರಿಗೆ ನಷ್ಟ ಕಟಾವು",
    },
    content: {
      en: (
        <>
          <p>
            Tax loss harvesting is a strategy used by investors to{" "}
            <strong>reduce taxable capital gains</strong> by offsetting profits with losses
            from other investments. In simple terms, if an investor has both gains and losses
            within the same financial year, the losses can be used to{" "}
            <strong>reduce the taxable portion of the gains</strong>.
          </p>
          <p>
            Tax loss harvesting does not eliminate taxes entirely, but it allows investors to
            pay tax <strong>only on their net gains</strong> rather than on every profitable
            transaction individually.
          </p>
          <img src="/taxation/image1.png" alt="Tax loss harvesting illustration" style={imgStyle} />
          <hr className="chapter-rule" />
          <h3>Basic Example</h3>
          <p>
            Suppose an investor sells one investment and realizes a{" "}
            <strong>capital gain of ₹1,50,000</strong>. In the same financial year, another
            investment in the portfolio is sold at a{" "}
            <strong>loss of ₹50,000</strong>.
          </p>
          <p>
            The loss can be used to offset part of the gain. Taxable capital gain:
            ₹1,50,000 − ₹50,000 = <strong>₹1,00,000</strong>. This reduces the amount of
            gain subject to capital gains tax.
          </p>
          <hr className="chapter-rule" />
          <h3>Short-Term vs Long-Term Loss Rules</h3>
          <p>
            <strong>Short-Term Capital Loss (STCL)</strong> is the most flexible - it can be
            adjusted against both Short-Term Capital Gains (STCG) and Long-Term Capital
            Gains (LTCG).
          </p>
          <p>
            <strong>Long-Term Capital Loss (LTCL)</strong> is more restrictive - it can only
            be adjusted against Long-Term Capital Gains (LTCG). It{" "}
            <strong>cannot be offset against short-term capital gains</strong>.
          </p>
          <p>
            <strong>Example:</strong> Suppose an investor realizes STCG of ₹80,000 and LTCL
            of ₹50,000. The long-term loss cannot be used to offset the short-term gain -
            the ₹80,000 STCG remains taxable. However, if the investor instead had a
            short-term loss of ₹50,000, it could offset the gain, reducing the taxable
            amount to ₹30,000.
          </p>
          <hr className="chapter-rule" />
          <h3>Carrying Forward Capital Losses</h3>
          <p>
            If total losses exceed gains in a financial year, the remaining losses may be{" "}
            <strong>carried forward to future years</strong> - generally for up to{" "}
            <strong>eight financial years</strong> - to offset eligible capital gains.
          </p>
          <img src="/taxation/image2.png" alt="Carrying forward capital losses" style={imgStyle} />
          <p>
            <strong>Important filing requirement:</strong> To carry forward capital losses,
            investors must <strong>report the loss in their Income Tax Return (ITR)</strong>{" "}
            before the due date specified under tax law. If the loss is not declared in the
            return within the deadline, the loss{" "}
            <strong>cannot be carried forward to future years</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>Practical Use for Investors</h3>
          <p>
            Tax loss harvesting is often used toward the{" "}
            <strong>end of the financial year</strong>, when investors review their portfolios
            and identify investments that are currently trading below their purchase price. In
            some cases, investors may sell a losing investment to realize the tax loss and
            later reinvest in another asset that fits their portfolio strategy.
          </p>
          <p>
            However, tax considerations should{" "}
            <strong>not be the sole reason to sell an investment</strong>. The decision
            should still align with the investor&apos;s broader investment goals and portfolio
            allocation.
          </p>
          <div className="pull-quote">
            Short-term capital losses are the most flexible tax tool - they can offset both
            short-term and long-term gains. Long-term losses can only offset long-term gains.
            Know the rules before you harvest.
          </div>
        </>
      ),
      kn: (
        <>
        <p>ತೆರಿಗೆ ನಷ್ಟ ಕಟಾವು ಎಂಬುದು ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ತೆರಿಗೆ ವಿಧಿಸಬಹುದಾದ ಬಂಡವಾಳ ಲಾಭವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಬಳಸುವ ತಂತ್ರವಾಗಿದ್ದು, ಇತರ ಹೂಡಿಕೆಗಳ ನಷ್ಟಗಳನ್ನು ಲಾಭಗಳ ವಿರುದ್ಧ ಸರಿದೂಗಿಸುವ ಮೂಲಕ ಇದನ್ನು ಮಾಡಲಾಗುತ್ತದೆ.</p>
        <p>ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ, ಒಬ್ಬ ಹೂಡಿಕೆದಾರರಿಗೆ ಒಂದೇ ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ ಲಾಭ ಮತ್ತು ನಷ್ಟ ಎರಡೂ ಸಂಭವಿಸಿದರೆ, ನಷ್ಟಗಳನ್ನು ಲಾಭದ ತೆರಿಗೆ ವಿಧಿಸಬಹುದಾದ ಭಾಗವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಬಳಸಬಹುದು. ಹೂಡಿಕೆದಾರರ ದೀರ್ಘಕಾಲೀನ ತಂತ್ರಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಆಸ್ತಿ ಸಂಗ್ರಹವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುತ್ತಲೇ ಒಟ್ಟಾರೆ ತೆರಿಗೆ ಹೊಣೆಗಾರಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಇದು ನೆರವಾಗುತ್ತದೆ.</p>
        <p>ತೆರಿಗೆ ನಷ್ಟ ಕಟಾವು ತೆರಿಗೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತೊಡೆದುಹಾಕುವುದಿಲ್ಲ, ಆದರೆ ಪ್ರತಿ ಲಾಭದಾಯಕ ವಹಿವಾಟಿನ ಮೇಲೆ ಪ್ರತ್ಯೇಕವಾಗಿ ತೆರಿಗೆ ತೆರುವ ಬದಲು, ನಿವ್ವಳ ಲಾಭದ ಮೇಲೆ ಮಾತ್ರ ತೆರಿಗೆ ಪಾವತಿಸಲು ಹೂಡಿಕೆದಾರರಿಗೆ ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
        <img src="/taxation/image1.png" alt="Tax loss harvesting illustration" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಮೂಲ ಉದಾಹರಣೆ</h3>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ಒಂದು ಹೂಡಿಕೆಯನ್ನು ಮಾರಾಟ ಮಾಡಿ ₹೧,೫೦,೦೦೦ ಬಂಡವಾಳ ಲಾಭ ಗಳಿಸುತ್ತಾರೆ ಎಂದು ಭಾವಿಸಿ. ಅದೇ ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ, ಬಂಡವಾಳ ಸಂಗ್ರಹದಲ್ಲಿನ ಮತ್ತೊಂದು ಹೂಡಿಕೆಯನ್ನು ₹೫೦,೦೦೦ ನಷ್ಟದಲ್ಲಿ ಮಾರಾಟ ಮಾಡಲಾಗುತ್ತದೆ. ಈ ನಷ್ಟವನ್ನು ಲಾಭದ ಒಂದು ಭಾಗವನ್ನು ಸರಿದೂಗಿಸಲು ಬಳಸಬಹುದು.</p>
        <p>ತೆರಿಗೆಯೋಗ್ಯ ಬಂಡವಾಳ ಲಾಭ: ₹೧,೫೦,೦೦೦ − ₹೫೦,೦೦೦ = ₹೧,೦೦,೦೦೦</p>
        <p>ಇದರಿಂದ ಬಂಡವಾಳ ಲಾಭ ತೆರಿಗೆಗೆ ಒಳಪಡುವ ಮೊತ್ತ ಕಡಿಮೆಯಾಗುತ್ತದೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಅಲ್ಪಾವಧಿ ಮತ್ತು ದೀರ್ಘಾವಧಿ ನಷ್ಟ ನಿಯಮಗಳು</h3>
        <p>ಎಲ್ಲಾ ಬಂಡವಾಳ ನಷ್ಟಗಳನ್ನು ಒಂದೇ ರೀತಿಯಲ್ಲಿ ಪರಿಗಣಿಸಲಾಗುವುದಿಲ್ಲ. ನಷ್ಟಗಳನ್ನು ಸರಿದೂಗಿಸುವ ಸಾಮರ್ಥ್ಯವು, ಆ ನಷ್ಟವು ಅಲ್ಪಾವಧಿಯದೋ ಅಥವಾ ದೀರ್ಘಾವಧಿಯದೋ ಎಂಬುದರ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುತ್ತದೆ.</p>
        <p><strong>ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ನಷ್ಟ (STCL)</strong></p>
        <p>ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ನಷ್ಟಗಳು ಅತ್ಯಂತ ಹೊಂದಿಕೊಳ್ಳುವ ಸ್ವಭಾವದವು. ಇವುಗಳನ್ನು ಈ ಕೆಳಗಿನವುಗಳ ವಿರುದ್ಧ ಸರಿದೂಗಿಸಬಹುದು:</p>
        <ul className="pl-6"><li>ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (STCG)</li><li>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (LTCG)</li></ul>
        <p><strong>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ನಷ್ಟ (LTCL)</strong></p>
        <p>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ನಷ್ಟಗಳಿಗೆ ಹೆಚ್ಚು ನಿರ್ಬಂಧಗಳಿವೆ. ಇವುಗಳನ್ನು ಕೇವಲ ಈ ಕೆಳಗಿನವುಗಳ ವಿರುದ್ಧ ಮಾತ್ರ ಸರಿದೂಗಿಸಬಹುದು:</p>
        <ul className="pl-6"><li>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (LTCG)</li></ul>
        <p>ಇವುಗಳನ್ನು ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭದ ವಿರುದ್ಧ ಸರಿದೂಗಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.</p>
        <p><strong>ಉದಾಹರಣೆ</strong></p>
        <p>ಒಬ್ಬ ಹೂಡಿಕೆದಾರರಿಗೆ ಈ ಕೆಳಗಿನವು ಸಂಭವಿಸುತ್ತದೆ ಎಂದು ಭಾವಿಸಿ:</p>
        <ul className="pl-6"><li>₹೮೦,೦೦೦ ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ (STCG)</li><li>₹೫೦,೦೦೦ ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ನಷ್ಟ (LTCL)</li></ul>
        <p>ದೀರ್ಘಾವಧಿ ನಷ್ಟವನ್ನು ಅಲ್ಪಾವಧಿ ಲಾಭವನ್ನು ಸರಿದೂಗಿಸಲು ಬಳಸಲಾಗುವುದಿಲ್ಲ. ₹೮೦,೦೦೦ ಅಲ್ಪಾವಧಿ ಲಾಭವು ತೆರಿಗೆಯೋಗ್ಯವಾಗಿಯೇ ಉಳಿಯುತ್ತದೆ.</p>
        <p>ಆದರೆ, ಹೂಡಿಕೆದಾರರಿಗೆ ₹೫೦,೦೦೦ ಅಲ್ಪಾವಧಿ ನಷ್ಟವಿದ್ದಿದ್ದರೆ, ಅದನ್ನು ಲಾಭವನ್ನು ಸರಿದೂಗಿಸಲು ಬಳಸಬಹುದಿತ್ತು. ಆ ಸಂದರ್ಭದಲ್ಲಿ ತೆರಿಗೆಯೋಗ್ಯ ಲಾಭವು ಹೀಗಾಗುತ್ತಿತ್ತು:</p>
        <p>₹೮೦,೦೦೦ − ₹೫೦,೦೦೦ = ₹೩೦,೦೦೦</p>
        <p>ತೆರಿಗೆ ನಷ್ಟ ಕಟಾವು ತಂತ್ರಗಳನ್ನು (Tax Loss Harvesting) ಬಳಸುವಾಗ ಈ ವ್ಯತ್ಯಾಸವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾಗಿದೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಬಂಡವಾಳ ನಷ್ಟಗಳನ್ನು ಮುಂದಿನ ವರ್ಷಗಳಿಗೆ ಮುಂದೂಡುವುದು</h3>
        <p>ಒಂದು ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ ಒಟ್ಟು ನಷ್ಟಗಳು ಲಾಭಗಳನ್ನು ಮೀರಿದರೆ, ಉಳಿದ ನಷ್ಟಗಳನ್ನು ಮುಂದಿನ ವರ್ಷಗಳಿಗೆ ಮುಂದೂಡಬಹುದು. ಈ ಮುಂದೂಡಲ್ಪಟ್ಟ ನಷ್ಟಗಳನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಎಂಟು ಹಣಕಾಸು ವರ್ಷಗಳವರೆಗೆ, ಅರ್ಹ ಬಂಡವಾಳ ಲಾಭಗಳನ್ನು ಸರಿದೂಗಿಸಲು ಬಳಸಬಹುದು.</p>
        <p>ಉದಾಹರಣೆಗೆ:</p>
        <ul className="pl-6"><li>ಈ ವರ್ಷದ ಬಂಡವಾಳ ಲಾಭ → ₹೬೦,೦೦೦</li><li>ಈ ವರ್ಷದ ಬಂಡವಾಳ ನಷ್ಟ → ₹೧,೦೦,೦೦೦</li></ul>
        <p>ಉಳಿದ ₹೪೦,೦೦೦ ನಷ್ಟವನ್ನು ಮುಂದಿನ ವರ್ಷಗಳಲ್ಲಿ ಗಳಿಸಲಾಗುವ ಲಾಭಗಳನ್ನು ಸರಿದೂಗಿಸಲು ಮುಂದೂಡಿ ಬಳಸಬಹುದು.</p>
        <img src="/taxation/image2.png" alt="Carrying forward capital losses" style={imgStyle} />
        <p><strong>ಮಹತ್ವದ ಆಡಳಿತಾತ್ಮಕ ಅವಶ್ಯಕತೆ</strong></p>
        <p>ಬಂಡವಾಳ ನಷ್ಟಗಳನ್ನು ಮುಂದಿನ ವರ್ಷಗಳಿಗೆ ಮುಂದೂಡಲು, ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಆದಾಯ ತೆರಿಗೆ ರಿಟರ್ನ್ (ITR) ನಲ್ಲಿ ಆ ನಷ್ಟವನ್ನು ದಾಖಲಿಸಲೇಬೇಕು.</p>
        <p>ತೆರಿಗೆ ಕಾನೂನಿನಲ್ಲಿ ನಿಗದಿಪಡಿಸಿದ ಅಂತಿಮ ದಿನಾಂಕದೊಳಗೆ ರಿಟರ್ನ್ ಸಲ್ಲಿಸಬೇಕು. ನಿಗದಿತ ಗಡುವಿನೊಳಗೆ ನಷ್ಟವನ್ನು ರಿಟರ್ನ್‌ನಲ್ಲಿ ಘೋಷಿಸದಿದ್ದರೆ, ಆ ನಷ್ಟವನ್ನು ಮುಂದಿನ ವರ್ಷಗಳಿಗೆ ಮುಂದೂಡಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ.</p>
        <p>ಈ ಆಡಳಿತಾತ್ಮಕ ಅವಶ್ಯಕತೆಯು ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾಗಿದೆ — ಏಕೆಂದರೆ ನಷ್ಟವನ್ನು ಸರಿಯಾಗಿ ದಾಖಲಿಸದಿದ್ದರೆ, ಭವಿಷ್ಯದ ತೆರಿಗೆ ಹೊಂದಾಣಿಕೆಗಳಿಗೆ ಆ ನಷ್ಟವನ್ನು ಬಳಸಿಕೊಳ್ಳುವ ಅವಕಾಶ ಕೈತಪ್ಪಿಹೋಗಬಹುದು.</p>
        <hr className="chapter-rule" />
        <h3>ಹೂಡಿಕೆದಾರರಿಗೆ ಪ್ರಾಯೋಗಿಕ ಬಳಕೆ</h3>
        <p>ತೆರಿಗೆ ನಷ್ಟ ಕಟಾವು (Tax Loss Harvesting) ತಂತ್ರವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಹಣಕಾಸು ವರ್ಷದ ಅಂತ್ಯದ ಸಮಯದಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. ಆ ಸಂದರ್ಭದಲ್ಲಿ ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಬಂಡವಾಳ ಸಂಗ್ರಹವನ್ನು ಪರಿಶೀಲಿಸಿ, ಖರೀದಿ ಬೆಲೆಗಿಂತ ಕಡಿಮೆ ಮೌಲ್ಯದಲ್ಲಿ ವಹಿವಾಟಾಗುತ್ತಿರುವ ಹೂಡಿಕೆಗಳನ್ನು ಗುರುತಿಸುತ್ತಾರೆ.</p>
        <p>ಕೆಲವು ಸಂದರ್ಭಗಳಲ್ಲಿ, ಹೂಡಿಕೆದಾರರು ತೆರಿಗೆ ನಷ್ಟವನ್ನು ದಾಖಲಿಸಲು ನಷ್ಟದಲ್ಲಿರುವ ಹೂಡಿಕೆಯನ್ನು ಮಾರಾಟ ಮಾಡಿ, ನಂತರ ತಮ್ಮ ಬಂಡವಾಳ ತಂತ್ರಕ್ಕೆ ಹೊಂದುವ ಮತ್ತೊಂದು ಆಸ್ತಿಯಲ್ಲಿ ಮರು ಹೂಡಿಕೆ ಮಾಡಬಹುದು.</p>
        <div className="pull-quote">ಆದಾಗ್ಯೂ, ತೆರಿಗೆ ಪರಿಗಣನೆಗಳು ಮಾತ್ರವೇ ಹೂಡಿಕೆಯನ್ನು ಮಾರಾಟ ಮಾಡುವ ಏಕೈಕ ಕಾರಣವಾಗಬಾರದು. ಆ ನಿರ್ಧಾರವು ಹೂಡಿಕೆದಾರರ ವಿಸ್ತೃತ ಹೂಡಿಕೆ ಗುರಿಗಳು ಮತ್ತು ಬಂಡವಾಳ ಹಂಚಿಕೆ ಯೋಜನೆಗೆ ಅನುಗುಣವಾಗಿರಬೇಕು.</div>
        </>
      ),
    },
  },

  // ==============================
  // CHAPTER 9
  // ==============================
  {
    title: {
      en: "Chapter 9: Practical Tax Tips for Investors",
      kn: "ಅಧ್ಯಾಯ 9: ಹೂಡಿಕೆದಾರರಿಗೆ ಪ್ರಾಯೋಗಿಕ ತೆರಿಗೆ ಸಲಹೆಗಳು",
    },
    content: {
      en: (
        <>
          <p>
            Understanding taxation helps investors avoid unnecessary tax leakage and retain a
            larger portion of their returns. While taxes should never drive investment
            decisions entirely, a few simple habits can significantly improve{" "}
            <strong>after-tax portfolio performance over time</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>Prefer Long-Term Holding Periods</h3>
          <p>
            Whenever possible, aim to hold equity investments long enough to qualify for{" "}
            <strong>long-term capital gains treatment</strong>. In India, STCG on equities is
            taxed at 20%, while LTCG above ₹1.25 lakh is taxed at 12.5%. Holding an
            investment slightly longer may reduce the applicable tax rate and aligns well with
            long-term investing principles.
          </p>
          <hr className="chapter-rule" />
          <h3>Use the Annual LTCG Exemption Efficiently</h3>
          <p>
            The tax system allows{" "}
            <strong>₹1,25,000 of long-term capital gains per financial year to be tax-free</strong>{" "}
            for equity investments. Investors can use this exemption strategically by
            periodically realizing gains within the exemption limit.
          </p>
          <p>
            For example, if an investor has ₹1,20,000 of unrealized long-term gains, selling
            and reinvesting the asset may allow the gain to be realized{" "}
            <strong>without paying tax</strong>, while resetting the purchase price. This
            technique is sometimes referred to as <strong>gain harvesting</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>Avoid Frequent Trading &amp; Use the Growth Option</h3>
          <p>
            Frequent buying and selling leads to higher short-term capital gains tax,
            increased transaction costs and unnecessary tax complexity. Long-term investors
            often benefit from <strong>lower portfolio turnover</strong>, which reduces both
            costs and tax friction. For mutual funds, the{" "}
            <strong>growth option</strong> allows returns to remain invested and compound over
            time, while the IDCW option creates periodic taxable income.
          </p>
          <hr className="chapter-rule" />
          <h3>Track Holding Periods &amp; Use Capital Losses Efficiently</h3>
          <p>
            Many investors unknowingly trigger short-term taxation simply because they do not
            track purchase dates carefully. A difference of a few weeks can sometimes change a
            gain from short-term to long-term. Maintaining clear records helps avoid such
            situations - these are available with your broker.
          </p>
          <p>
            If an investment has declined significantly and no longer fits the portfolio
            strategy, realizing the loss may help offset gains elsewhere. Remember:{" "}
            <strong>STCL can offset both STCG and LTCG, while LTCL can offset only LTCG</strong>.
          </p>
          <hr className="chapter-rule" />
          <h3>Compare Post-Tax Returns &amp; The Larger Perspective</h3>
          <p>
            Investors should always compare investments <strong>after tax</strong>, not just
            based on headline returns. A 7% fixed deposit taxed at 30% yields about 4.9%
            after tax, while an equity investment with favorable capital gains treatment may
            deliver a higher effective return.
          </p>
          <p>
            While taxes are an important part of investing, they should always be viewed
            within the broader context of long-term wealth creation. A good investment with
            strong long-term growth potential should not be avoided purely because of tax
            considerations. Instead, taxes should be understood as{" "}
            <strong>one component of the overall investment framework</strong>, alongside
            fundamentals, portfolio diversification and risk management.
          </p>
          <div className="pull-quote">
            Taxes are not the enemy of investing - ignorance of taxes is. A few simple
            habits: hold longer, use the LTCG exemption, prefer the growth option, track your
            dates. Small adjustments, significant long-term impact.
          </div>
        </>
      ),
      kn: (
        <>
        <p>
          ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ ಹೂಡಿಕೆದಾರರು ಅನಗತ್ಯ ತೆರಿಗೆ ಸೋರಿಕೆಯನ್ನು ತಪ್ಪಿಸಿ, ತಮ್ಮ ಆದಾಯದ ಹೆಚ್ಚಿನ ಭಾಗವನ್ನು ಉಳಿಸಿಕೊಳ್ಳಬಹುದು. ತೆರಿಗೆ ಪರಿಗಣನೆಗಳು ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಿಯಂತ್ರಿಸಬಾರದಾದರೂ, ಕೆಲವು ಸರಳ ಅಭ್ಯಾಸಗಳು ಕಾಲಾನಂತರದಲ್ಲಿ ತೆರಿಗೆ ನಂತರದ ಬಂಡವಾಳ ಸಂಗ್ರಹದ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಗಣನೀಯವಾಗಿ ಸುಧಾರಿಸಬಲ್ಲವು.
        </p>
        <p>
          ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರು ಅನುಸರಿಸುವ ಕೆಲವು ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗಸೂಚಿಗಳು ಕೆಳಗೆ ನೀಡಲಾಗಿವೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>ದೀರ್ಘಾವಧಿ ಹಿಡುವಳಿ ಅವಧಿಗೆ ಆದ್ಯತೆ ನೀಡಿ</h3>
        <p>
          ಸಾಧ್ಯವಾದಾಗಲೆಲ್ಲಾ, ಷೇರು ಹೂಡಿಕೆಗಳು ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ ಸ್ಥಾನಮಾನಕ್ಕೆ ಅರ್ಹವಾಗುವಷ್ಟು ಕಾಲ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳಲು ಹೂಡಿಕೆದಾರರು ಗುರಿ ಇಡಬೇಕು.
        </p>
        <p>ಭಾರತದಲ್ಲಿ:</p>
        <ul className="pl-6">
          <li>ಷೇರುಗಳ ಮೇಲಿನ ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ → ೨೦%</li>
          <li>ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭ → ₹೧.೨೫ ಲಕ್ಷಕ್ಕಿಂತ ಮೇಲ್ಪಟ್ಟ ಮೊತ್ತಕ್ಕೆ ೧೨.೫%</li>
        </ul>
        <p>
          ಹೂಡಿಕೆಯನ್ನು ಸ್ವಲ್ಪ ಹೆಚ್ಚು ಕಾಲ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವುದರಿಂದ ಅನ್ವಯವಾಗುವ ತೆರಿಗೆ ದರ ಕಡಿಮೆಯಾಗಬಹುದು. ಇದು ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆ ತತ್ವಗಳೊಂದಿಗೂ ಚೆನ್ನಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>ವಾರ್ಷಿಕ LTCG ವಿನಾಯಿತಿಯನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬಳಸಿ</h3>
        <p>
          ತೆರಿಗೆ ವ್ಯವಸ್ಥೆಯು ಷೇರು ಹೂಡಿಕೆಗಳ ಮೇಲಿನ ₹೧,೨೫,೦೦೦ ವರೆಗಿನ ದೀರ್ಘಾವಧಿ ಬಂಡವಾಳ ಲಾಭವನ್ನು ಪ್ರತಿ ಹಣಕಾಸು ವರ್ಷದಲ್ಲಿ ತೆರಿಗೆ ಮುಕ್ತಗೊಳಿಸುತ್ತದೆ.
        </p>
        <p>
          ಹೂಡಿಕೆದಾರರು ಈ ವಿನಾಯಿತಿ ಮಿತಿಯೊಳಗೆ ನಿಯತಕಾಲಿಕವಾಗಿ ಲಾಭ ದಾಖಲಿಸುವ ಮೂಲಕ ಇದನ್ನು ತಂತ್ರಾತ್ಮಕವಾಗಿ ಬಳಸಬಹುದು.
        </p>
        <p>
          ಉದಾಹರಣೆಗೆ: ಒಬ್ಬ ಹೂಡಿಕೆದಾರರಿಗೆ ₹೧,೨೦,೦೦೦ ಅಸಾಕ್ಷಾತ್ಕೃತ ದೀರ್ಘಾವಧಿ ಲಾಭವಿದ್ದರೆ, ಆಸ್ತಿಯನ್ನು ಮಾರಾಟ ಮಾಡಿ ಮರು ಹೂಡಿಕೆ ಮಾಡುವುದರಿಂದ, ತೆರಿಗೆ ಪಾವತಿಸದೆ ಲಾಭ ದಾಖಲಿಸಬಹುದು ಮತ್ತು ಖರೀದಿ ಬೆಲೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸಬಹುದು. ಈ ತಂತ್ರವನ್ನು ಕೆಲವೊಮ್ಮೆ ಲಾಭ ಕಟಾವು (Gain Harvesting) ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>ಆಗಿಂದಾಗ್ಗೆ ಮಾಡುವ ವಹಿವಾಟನ್ನು ತಪ್ಪಿಸಿ</h3>
        <p>ಪದೇ ಪದೇ ಖರೀದಿ ಮತ್ತು ಮಾರಾಟ ಮಾಡುವುದರಿಂದ ಈ ಕೆಳಗಿನ ಸಮಸ್ಯೆಗಳು ಉಂಟಾಗಬಹುದು:</p>
        <ul className="pl-6">
          <li>ಹೆಚ್ಚಿನ ಅಲ್ಪಾವಧಿ ಬಂಡವಾಳ ಲಾಭ ತೆರಿಗೆ</li>
          <li>ಹೆಚ್ಚಿದ ವಹಿವಾಟು ವೆಚ್ಚಗಳು</li>
          <li>ಅನಗತ್ಯ ತೆರಿಗೆ ಸಂಕೀರ್ಣತೆ</li>
        </ul>
        <p>
          ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರು ಕಡಿಮೆ ಬಂಡವಾಳ ವಹಿವಾಟಿನಿಂದ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತಾರೆ, ಇದು ವೆಚ್ಚ ಮತ್ತು ತೆರಿಗೆ ಹೊರೆ ಎರಡನ್ನೂ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.
        </p>
        <p>
          <strong>ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳಿಗೆ ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯನ್ನು ಪರಿಗಣಿಸಿ</strong>
        </p>
        <p>
          ಮೊದಲೇ ಚರ್ಚಿಸಿದಂತೆ, ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯು (Growth Option) ಆದಾಯವನ್ನು ಹೂಡಿಕೆಯಲ್ಲಿಯೇ ಉಳಿಸಿ ಕಾಲಾನಂತರದಲ್ಲಿ ಚಕ್ರಬಡ್ಡಿ ರೀತಿಯಲ್ಲಿ ಬೆಳೆಯಲು ಅನುಮತಿಸುತ್ತದೆ. IDCW ಆಯ್ಕೆಯು, ಮತ್ತೊಂದೆಡೆ, ನಿಯತಕಾಲಿಕ ತೆರಿಗೆಯೋಗ್ಯ ಆದಾಯವನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.
        </p>
        <p>
          ದೀರ್ಘಾವಧಿ ಸಂಪತ್ತು ಸಂಚಯದ ಗುರಿ ಹೊಂದಿರುವ ಹೂಡಿಕೆದಾರರಿಗೆ, ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯು ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ತೆರಿಗೆ ದಕ್ಷವಾಗಿರುತ್ತದೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>ನಿಮ್ಮ ಹಿಡುವಳಿ ಅವಧಿಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಗಮನಿಸಿ</h3>
        <p>
          ಅನೇಕ ಹೂಡಿಕೆದಾರರು ಖರೀದಿ ದಿನಾಂಕಗಳನ್ನು ಸರಿಯಾಗಿ ಗಮನಿಸದ ಕಾರಣ ಅಜ್ಞಾನದಿಂದ ಅಲ್ಪಾವಧಿ ತೆರಿಗೆಗೆ ಒಳಗಾಗುತ್ತಾರೆ.
        </p>
        <p>
          ಕೆಲವು ವಾರಗಳ ವ್ಯತ್ಯಾಸವು ಕೆಲವೊಮ್ಮೆ ಲಾಭವನ್ನು ಅಲ್ಪಾವಧಿಯಿಂದ ದೀರ್ಘಾವಧಿಗೆ ಬದಲಾಯಿಸಬಹುದು, ಇದು ತೆರಿಗೆ ದರದ ಮೇಲೆ ಗಮನಾರ್ಹ ಪರಿಣಾಮ ಬೀರಬಹುದು. ಸ್ಪಷ್ಟ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದರಿಂದ ಇಂತಹ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ತಪ್ಪಿಸಬಹುದು. ಈ ಮಾಹಿತಿಯು ನಿಮ್ಮ ದಲ್ಲಾಳಿ (Broker) ಬಳಿ ಲಭ್ಯವಿರುತ್ತದೆ.
        </p>
        <p>
          <strong>ಬಂಡವಾಳ ನಷ್ಟಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬಳಸಿ</strong>
        </p>
        <p>
          ಯಾವುದಾದರೂ ಹೂಡಿಕೆಯ ಮೌಲ್ಯ ಗಣನೀಯವಾಗಿ ಕುಸಿದಿದ್ದು ಅದು ಇನ್ನು ಮುಂದೆ ಬಂಡವಾಳ ತಂತ್ರಕ್ಕೆ ಹೊಂದದಿದ್ದರೆ, ಆ ನಷ್ಟವನ್ನು ದಾಖಲಿಸುವುದರಿಂದ ಬಂಡವಾಳ ಸಂಗ್ರಹದ ಇತರ ಕಡೆಗಳಲ್ಲಿನ ಲಾಭಗಳನ್ನು ಸರಿದೂಗಿಸಲು ಸಹಾಯವಾಗಬಹುದು.
        </p>
        <p>ನೆನಪಿಡಿ:</p>
        <ul className="pl-6">
          <li>STCL — STCG ಮತ್ತು LTCG ಎರಡನ್ನೂ ಸರಿದೂಗಿಸಬಹುದು</li>
          <li>LTCL — ಕೇವಲ LTCG ಮಾತ್ರ ಸರಿದೂಗಿಸಬಹುದು</li>
        </ul>
        <p>
          ಇದರಿಂದ ತೆರಿಗೆ ನಷ್ಟ ಕಟಾವು ತಂತ್ರವು ತೆರಿಗೆ ದಕ್ಷತೆ ಸುಧಾರಿಸಲು ಉಪಯುಕ್ತ ಸಾಧನವಾಗಿದೆ.
        </p>
        <hr className="chapter-rule" />
        <h3>ತೆರಿಗೆ ನಂತರದ ಆದಾಯವನ್ನು ಹೋಲಿಸಿ</h3>
        <p>
          ಹೂಡಿಕೆದಾರರು ಯಾವಾಗಲೂ ಹೂಡಿಕೆಗಳನ್ನು ಪ್ರಮುಖ ಆದಾಯ ಪ್ರಮಾಣದ ಆಧಾರದ ಮೇಲಲ್ಲ, ಬದಲಿಗೆ ತೆರಿಗೆ ನಂತರದ ಆದಾಯದ ಆಧಾರದ ಮೇಲೆ ಹೋಲಿಸಬೇಕು.
        </p>
        <p>ಉದಾಹರಣೆಗೆ:</p>
        <ul className="pl-6">
          <li>೩೦% ತೆರಿಗೆ ದರದಲ್ಲಿ ೭% ಸ್ಥಿರ ಠೇವಣಿ (Fixed Deposit) ತೆರಿಗೆ ನಂತರ ಸುಮಾರು ೪.೯% ಆದಾಯ ನೀಡುತ್ತದೆ</li>
          <li>ಅನುಕೂಲಕರ ಬಂಡವಾಳ ಲಾಭ ತೆರಿಗೆ ಸ್ಥಾನಮಾನ ಹೊಂದಿರುವ ಷೇರು ಹೂಡಿಕೆಯು ಹೆಚ್ಚಿನ ಪರಿಣಾಮಕಾರಿ ಆದಾಯ ನೀಡಬಹುದು</li>
        </ul>
        <p>
          ಈ ರೀತಿ ಹೂಡಿಕೆಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದು ಹೆಚ್ಚು ವಾಸ್ತವಿಕ ತುಲನೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.
        </p>
        <p>
          <strong>ವಿಶಾಲ ದೃಷ್ಟಿಕೋನ</strong>
        </p>
        <p>
          ತೆರಿಗೆಗಳು ಹೂಡಿಕೆಯ ಒಂದು ಮಹತ್ವದ ಅಂಶವಾಗಿದ್ದರೂ, ಅವುಗಳನ್ನು ಯಾವಾಗಲೂ ದೀರ್ಘಾವಧಿ ಸಂಪತ್ತು ಸೃಷ್ಟಿಯ ವಿಶಾಲ ಚೌಕಟ್ಟಿನಲ್ಲಿ ನೋಡಬೇಕು.
        </p>
        <p>
          ಉತ್ತಮ ದೀರ್ಘಾವಧಿ ಬೆಳವಣಿಗೆ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿರುವ ಉತ್ತಮ ಹೂಡಿಕೆಯನ್ನು ಕೇವಲ ತೆರಿಗೆ ಕಾರಣಕ್ಕಾಗಿ ತಪ್ಪಿಸಬಾರದು. ಬದಲಿಗೆ, ತೆರಿಗೆಯನ್ನು ಮೂಲತತ್ವಗಳು, ಬಂಡವಾಳ ವೈವಿಧ್ಯತೆ ಮತ್ತು ಅಪಾಯ ನಿರ್ವಹಣೆಯೊಂದಿಗೆ ಒಟ್ಟಾರೆ ಹೂಡಿಕೆ ಚೌಕಟ್ಟಿನ ಒಂದು ಅಂಶವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು.
        </p>
        <p>ಈ ಕೆಳಗಿನವನ್ನು ಸಂಯೋಜಿಸುವ ಹೂಡಿಕೆದಾರರು:</p>
        <ul className="pl-6">
          <li>ಶಿಸ್ತುಬದ್ಧ ಹೂಡಿಕೆ</li>
          <li>ದೀರ್ಘಾವಧಿ ಚಿಂತನೆ</li>
          <li>ಸಮಚಿತ್ತ ತೆರಿಗೆ ಜಾಗರೂಕತೆ</li>
        </ul>
        <p>
          — ಕಾಲಾನಂತರದಲ್ಲಿ ತಮ್ಮ ನಿವ್ವಳ, ತೆರಿಗೆ ನಂತರದ ಆದಾಯವನ್ನು ಗರಿಷ್ಠಗೊಳಿಸಲು ಉತ್ತಮ ಸ್ಥಾನದಲ್ಲಿರುತ್ತಾರೆ.
        </p>
        <div className="pull-quote">
          ತೆರಿಗೆಗಳು ಹೂಡಿಕೆಗೆ ಶತ್ರುಗಳಲ್ಲ — ತೆರಿಗೆಗಳ ಬಗ್ಗೆ ಅಜ್ಞಾನವೇ ನಿಜವಾದ ಶತ್ರು. ದೀರ್ಘ ಕಾಲ ಹಿಡಿದಿಡಿ, LTCG ವಿನಾಯಿತಿ ಬಳಸಿ, ಬೆಳವಣಿಗೆ ಆಯ್ಕೆಯನ್ನು ಆದ್ಯತೆ ನೀಡಿ, ದಿನಾಂಕಗಳನ್ನು ಗಮನಿಸಿ — ಕೆಲವು ಸರಳ ಅಭ್ಯಾಸಗಳು. ಸಣ್ಣ ಹೊಂದಾಣಿಕೆಗಳು, ದೀರ್ಘಾವಧಿಯ ಗಮನಾರ್ಹ ಪರಿಣಾಮ.
        </div>
        </>
      ),
    },
  },
];
