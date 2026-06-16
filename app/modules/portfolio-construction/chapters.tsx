import React from "react";

const imgStyle: React.CSSProperties = {
  display: "block", margin: "28px auto", maxWidth: "100%",
  borderRadius: 12, border: "1px solid rgba(201,168,76,0.15)",
};

export const chapters = [
  {
    title: {
      en: "Chapter 1: Net Worth Thinking — Assets, Liabilities & Cash Flow",
      kn: "ಅಧ್ಯಾಯ ೧: ನಿವ್ವಳ ಮೌಲ್ಯದ ದೃಷ್ಟಿಕೋನ — ಆಸ್ತಿಗಳು, ಹೊಣೆಗಾರಿಕೆಗಳು ಮತ್ತು ನಗದು ಹರಿವು",
    },
    content: {
      en: (
        <>
          <p>Before you begin constructing an investment portfolio, it is important to first understand <strong>your overall financial position</strong>.</p>
          <p>Investing does not exist in isolation. It is only one part of your broader financial life. Your investments should be built on top of a clear understanding of <strong>what you own, what you owe and how money flows through your life</strong>.</p>
          <p>This is where the concept of <strong>net worth</strong> becomes useful.</p>
          <p>Net worth is calculated as:</p>
          <p><strong>Net Worth = Assets – Liabilities</strong></p>
          <img src="/portfolio-construction/image9.png" alt="Net worth formula diagram" style={imgStyle} />

          <h3>Assets</h3>
          <p>Assets are things that <strong>you own that have financial value</strong>.</p>
          <p>These may include:</p>
          <ul className="pl-6">
            <li>investments in stocks or mutual funds</li>
            <li>real estate properties</li>
            <li>savings in bank accounts</li>
            <li>retirement accounts or provident funds</li>
            <li>gold or other financial assets</li>
          </ul>
          <p>These assets represent the resources that contribute to your long-term financial stability and wealth.</p>

          <h3>Liabilities</h3>
          <p>Liabilities represent <strong>money that you owe to others</strong>.</p>
          <p>Common liabilities include:</p>
          <ul className="pl-6">
            <li>home loans</li>
            <li>personal loans</li>
            <li>education loans</li>
            <li>credit card debt</li>
          </ul>
          <p>While some liabilities may help acquire valuable assets (such as a home loan for property), they still represent financial obligations that must be managed carefully.</p>

          <h3>Why Net Worth Is Only Part of the Story</h3>
          <p>While net worth provides a snapshot of your financial position, it does not fully explain how stable your finances are.</p>
          <p>To understand that, you must also examine <strong>cash flow</strong>.</p>
          <p>Cash flow reflects how money moves in and out of your financial life.</p>
          <p>Important elements include:</p>
          <ul className="pl-6">
            <li>your income</li>
            <li>your recurring living expenses</li>
            <li>your ability to save and invest regularly</li>
          </ul>
          <p>Two individuals with similar net worth may have very different financial stability depending on their <strong>cash flow patterns</strong>.</p>
          <p>For example, someone with high income and consistent savings may be able to build wealth steadily, even if their current net worth is modest.</p>

          <h3>The Importance of Positive Cash Flow</h3>
          <p>A strong financial structure begins with <strong>positive and stable cash flow</strong>.</p>
          <p>Positive cash flow means that your income exceeds your expenses, leaving room for:</p>
          <ul className="pl-6">
            <li>savings</li>
            <li>investments</li>
            <li>long-term financial planning</li>
          </ul>
          <p>Consistent investing is rarely the result of occasional large investments. Instead, it is usually built through <strong>regular savings and disciplined capital allocation over many years</strong>.</p>
          <p>Before thinking about portfolio construction, it is therefore essential to ensure that your financial foundation, <strong>your net worth and your cash flow</strong>, is stable and well understood.</p>
          <img src="/portfolio-construction/image1.png" alt="Net worth and cash flow overview" style={imgStyle} />
        </>
      ),
      kn: (
        <>
          <p>ಈ ಮಾಡ್ಯೂಲ್ ಕೇವಲ ಹೂಡಿಕೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುವ ನೆಲೆಯಿಂದ ಮುಂದಕ್ಕೆ ಸಾಗಿ, ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಹಣಕಾಸು ಜೀವನವನ್ನು ಒಂದು ಸುಸಂಘಟಿತ ರೀತಿಯಲ್ಲಿ ರೂಪಿಸುವ ಕಡೆಗೆ ಗಮನ ಹರಿಸುತ್ತದೆ.</p>
          <p>ಈ ಕೋರ್ಸಿನಲ್ಲಿ ಇಲ್ಲಿಯವರೆಗೆ ನೀವು ಒಂದು ಗಟ್ಟಿಯಾದ ಅಡಿಪಾಯವನ್ನು ಈಗಾಗಲೇ ನಿರ್ಮಿಸಿದ್ದೀರಿ. ನಿಮಗೀಗ ಈ ವಿಷಯಗಳ ಅರಿವಿದೆ:</p>
          <ul className="pl-6">
            <li>ಮಾರುಕಟ್ಟೆಗಳು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ</li>
            <li>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ</li>
            <li>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ ಬೆಲೆಯ ಚಲನೆಯನ್ನು ಹೇಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು</li>
            <li>ಮೂಲಭೂತ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಬಳಸಿ ವ್ಯವಹಾರಗಳನ್ನು ಹೇಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಬೇಕು</li>
          </ul>
          <p>ಆದರೆ ಜ್ಞಾನ ಮಾತ್ರ ಸಾಕಾಗುವುದಿಲ್ಲ. ಈಗ ನಿಜವಾದ ಪ್ರಶ್ನೆ ಎಂದರೆ:</p>
          <p>ಈ ಎಲ್ಲವನ್ನೂ ನಿಮ್ಮ ಸ್ವಂತ ಹಣಕಾಸು ಜೀವನಕ್ಕೆ ಹೇಗೆ ಅನ್ವಯಿಸಬೇಕು?</p>
          <p>ಎಷ್ಟು ಹೂಡಿಕೆ ಮಾಡಬೇಕು, ನಿಮ್ಮ ಬಂಡವಾಳವನ್ನು ಎಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಬೇಕು, ಎಷ್ಟು ಅಪಾಯ ತೆಗೆದುಕೊಳ್ಳಬಹುದು ಮತ್ತು ತುರ್ತು ನಿಧಿ, ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಹಾಗೂ ದೀರ್ಘಕಾಲೀನ ಗುರಿಗಳಂತಹ ಹಣಕಾಸಿನ ಇತರ ಆಯಾಮಗಳೊಂದಿಗೆ ಹೂಡಿಕೆಯನ್ನು ಹೇಗೆ ಸಮತೋಲನಗೊಳಿಸಬೇಕು — ಎಂಬ ನಿರ್ಧಾರಗಳನ್ನು ನೀವು ಹೇಗೆ ತೆಗೆದುಕೊಳ್ಳಬೇಕು?</p>
          <p>ಈ ಮಾಡ್ಯೂಲ್ ಆ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ ನೀಡಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವ ಉದ್ದೇಶದಿಂದ ರಚಿಸಲಾಗಿದೆ. ನೀವು ಇಲ್ಲಿಯವರೆಗೆ ಕಲಿತ ಎಲ್ಲವನ್ನೂ ಒಟ್ಟುಗೂಡಿಸಿ, ಕಾಲಾಂತರದಲ್ಲಿ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಂಪತ್ತನ್ನು ನಿರ್ವಹಿಸಲು ಒಂದು ಸುಸಂಘಟಿತ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಚೌಕಟ್ಟನ್ನು ಹೇಗೆ ನಿರ್ಮಿಸಬೇಕೆಂದು ಇದು ತೋರಿಸಿಕೊಡುತ್ತದೆ.</p>
          <p>ಹೂಡಿಕೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಿಸಲು ಆರಂಭಿಸುವ ಮೊದಲು, ನಿಮ್ಮ ಒಟ್ಟಾರೆ ಹಣಕಾಸು ಸ್ಥಿತಿಯನ್ನು ಮೊದಲು ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾಗಿದೆ.</p>
          <p>ಹೂಡಿಕೆ ಎಂದಿಗೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದಿಲ್ಲ. ಇದು ನಿಮ್ಮ ವಿಶಾಲ ಹಣಕಾಸು ಜೀವನದ ಒಂದು ಭಾಗ ಮಾತ್ರ. ನೀವು ಏನನ್ನು ಹೊಂದಿದ್ದೀರಿ, ಏನನ್ನು ಬಾಕಿ ಉಳಿಸಿಕೊಂಡಿದ್ದೀರಿ ಮತ್ತು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಹಣ ಹೇಗೆ ಹರಿಯುತ್ತದೆ — ಇವುಗಳ ಸ್ಪಷ್ಟ ಅವಗಾಹನೆಯ ಮೇಲೆಯೇ ನಿಮ್ಮ ಹೂಡಿಕೆಗಳು ನಿರ್ಮಿತವಾಗಬೇಕು.</p>
          <p>ಇಲ್ಲಿಯೇ <strong>ನಿವ್ವಳ ಮೌಲ್ಯ</strong> ಎಂಬ ಪರಿಕಲ್ಪನೆ ಉಪಯುಕ್ತವಾಗುತ್ತದೆ.</p>
          <p>ನಿವ್ವಳ ಮೌಲ್ಯವನ್ನು ಈ ರೀತಿ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ:</p>
          <p><strong>ನಿವ್ವಳ ಮೌಲ್ಯ = ಆಸ್ತಿಗಳು − ಹೊಣೆಗಾರಿಕೆಗಳು</strong></p>
          <img src="/portfolio-construction/image9.png" alt="Net worth formula diagram" style={imgStyle} />
          <h3>ಆಸ್ತಿಗಳು</h3>
          <p>ಆಸ್ತಿಗಳು ಎಂದರೆ ನೀವು ಹೊಂದಿರುವ ಮತ್ತು ಆರ್ಥಿಕ ಮೌಲ್ಯವನ್ನು ಹೊಂದಿರುವ ವಸ್ತುಗಳು.</p>
          <p>ಇವುಗಳಲ್ಲಿ ಸೇರಬಹುದಾದವು:</p>
          <ul className="pl-6">
            <li>ಷೇರುಗಳಲ್ಲಿ ಅಥವಾ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಲ್ಲಿ ಹೂಡಿಕೆಗಳು</li>
            <li>ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಆಸ್ತಿಗಳು</li>
            <li>ಬ್ಯಾಂಕ್ ಖಾತೆಗಳಲ್ಲಿ ಉಳಿತಾಯ</li>
            <li>ನಿವೃತ್ತಿ ಖಾತೆಗಳು ಅಥವಾ ಭವಿಷ್ಯ ನಿಧಿಗಳು</li>
            <li>ಚಿನ್ನ ಅಥವಾ ಇತರ ಆರ್ಥಿಕ ಆಸ್ತಿಗಳು</li>
          </ul>
          <p>ಈ ಆಸ್ತಿಗಳು ನಿಮ್ಮ ದೀರ್ಘಕಾಲೀನ ಆರ್ಥಿಕ ಸ್ಥಿರತೆ ಮತ್ತು ಸಂಪತ್ತಿಗೆ ಕೊಡುಗೆ ನೀಡುವ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.</p>
          <h3>ಹೊಣೆಗಾರಿಕೆಗಳು</h3>
          <p>ಹೊಣೆಗಾರಿಕೆಗಳು ಎಂದರೆ ನೀವು ಇತರರಿಗೆ ತೀರಿಸಬೇಕಾದ ಹಣ.</p>
          <p>ಸಾಮಾನ್ಯ ಹೊಣೆಗಾರಿಕೆಗಳಲ್ಲಿ ಸೇರಿವೆ:</p>
          <ul className="pl-6">
            <li>ಗೃಹ ಸಾಲಗಳು</li>
            <li>ವೈಯಕ್ತಿಕ ಸಾಲಗಳು</li>
            <li>ಶಿಕ್ಷಣ ಸಾಲಗಳು</li>
            <li>ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಾಲ</li>
          </ul>
          <p>ಕೆಲವು ಹೊಣೆಗಾರಿಕೆಗಳು ಮೌಲ್ಯಯುತ ಆಸ್ತಿಗಳನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡಬಹುದು (ಉದಾಹರಣೆಗೆ, ಆಸ್ತಿಗಾಗಿ ತೆಗೆದುಕೊಂಡ ಗೃಹ ಸಾಲ), ಆದರೂ ಇವು ಎಚ್ಚರಿಕೆಯಿಂದ ನಿರ್ವಹಿಸಬೇಕಾದ ಆರ್ಥಿಕ ಬಾಧ್ಯತೆಗಳೇ ಆಗಿವೆ.</p>
          <h3>ನಿವ್ವಳ ಮೌಲ್ಯ ಏಕೆ ಸಂಪೂರ್ಣ ಚಿತ್ರಣವಲ್ಲ</h3>
          <p>ನಿವ್ವಳ ಮೌಲ್ಯ ನಿಮ್ಮ ಹಣಕಾಸು ಸ್ಥಿತಿಯ ಒಂದು ತಕ್ಷಣದ ನೋಟವನ್ನು ನೀಡುತ್ತದೆಯಾದರೂ, ನಿಮ್ಮ ಹಣಕಾಸು ಎಷ್ಟು ಸ್ಥಿರವಾಗಿದೆ ಎಂಬುದನ್ನು ಅದು ಸಂಪೂರ್ಣವಾಗಿ ವಿವರಿಸುವುದಿಲ್ಲ.</p>
          <p>ಅದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ನಗದು ಹರಿವನ್ನು ಕೂಡ ಪರಿಶೀಲಿಸುವುದು ಅಗತ್ಯ.</p>
          <p>ನಗದು ಹರಿವು ನಿಮ್ಮ ಹಣಕಾಸು ಜೀವನದಲ್ಲಿ ಹಣ ಒಳಗೆ ಬರುವ ಮತ್ತು ಹೊರಗೆ ಹೋಗುವ ರೀತಿಯನ್ನು ಪ್ರತಿಫಲಿಸುತ್ತದೆ.</p>
          <p>ಗಮನಿಸಬೇಕಾದ ಮುಖ್ಯ ಅಂಶಗಳೆಂದರೆ:</p>
          <ul className="pl-6">
            <li>ನಿಮ್ಮ ಆದಾಯ</li>
            <li>ನಿಮ್ಮ ನಿಯಮಿತ ಜೀವನ ವೆಚ್ಚಗಳು</li>
            <li>ನಿಯಮಿತವಾಗಿ ಉಳಿತಾಯ ಮಾಡಿ ಹೂಡಿಕೆ ಮಾಡುವ ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯ</li>
          </ul>
          <p>ಒಂದೇ ರೀತಿಯ ನಿವ್ವಳ ಮೌಲ್ಯ ಹೊಂದಿರುವ ಇಬ್ಬರು ವ್ಯಕ್ತಿಗಳು ತಮ್ಮ ನಗದು ಹರಿವಿನ ಮಾದರಿಗಳನ್ನು ಅವಲಂಬಿಸಿ ಬಹಳ ವಿಭಿನ್ನ ಮಟ್ಟದ ಹಣಕಾಸು ಸ್ಥಿರತೆಯನ್ನು ಹೊಂದಿರಬಹುದು.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಹೆಚ್ಚಿನ ಆದಾಯ ಮತ್ತು ಸ್ಥಿರವಾದ ಉಳಿತಾಯ ಹೊಂದಿರುವ ವ್ಯಕ್ತಿಯು, ಪ್ರಸ್ತುತ ನಿವ್ವಳ ಮೌಲ್ಯ ಸಾಧಾರಣವಾಗಿದ್ದರೂ ಸಹ, ಕ್ರಮೇಣ ಸಂಪತ್ತನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಲು ಸಮರ್ಥರಾಗಿರಬಹುದು.</p>
          <h3>ಧನಾತ್ಮಕ ನಗದು ಹರಿವಿನ ಮಹತ್ವ</h3>
          <p>ಒಂದು ಗಟ್ಟಿಯಾದ ಹಣಕಾಸು ರಚನೆಯು ಧನಾತ್ಮಕ ಮತ್ತು ಸ್ಥಿರವಾದ ನಗದು ಹರಿವಿನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.</p>
          <p>ಧನಾತ್ಮಕ ನಗದು ಹರಿವು ಎಂದರೆ ನಿಮ್ಮ ಆದಾಯ ನಿಮ್ಮ ವೆಚ್ಚಗಳನ್ನು ಮೀರುತ್ತದೆ, ಇದರಿಂದ ಈ ಕೆಳಗಿನವುಗಳಿಗೆ ಅವಕಾಶ ಸಿಗುತ್ತದೆ:</p>
          <ul className="pl-6">
            <li>ಉಳಿತಾಯ</li>
            <li>ಹೂಡಿಕೆ</li>
            <li>ದೀರ್ಘಕಾಲೀನ ಹಣಕಾಸು ಯೋಜನೆ</li>
          </ul>
          <p>ನಿರಂತರ ಹೂಡಿಕೆಯು ಅಪರೂಪದ ದೊಡ್ಡ ಹೂಡಿಕೆಗಳ ಫಲಿತಾಂಶವಾಗಿರುವುದು ವಿರಳ. ಬದಲಾಗಿ, ಅನೇಕ ವರ್ಷಗಳ ನಿಯಮಿತ ಉಳಿತಾಯ ಮತ್ತು ಶಿಸ್ತುಬದ್ಧ ಬಂಡವಾಳ ಹಂಚಿಕೆಯ ಮೂಲಕ ಅದು ನಿರ್ಮಾಣಗೊಳ್ಳುತ್ತದೆ.</p>
          <p>ಆದ್ದರಿಂದ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಾಣದ ಬಗ್ಗೆ ಯೋಚಿಸುವ ಮೊದಲು, ನಿಮ್ಮ ಹಣಕಾಸು ಅಡಿಪಾಯ — ಅಂದರೆ ನಿಮ್ಮ ನಿವ್ವಳ ಮೌಲ್ಯ ಮತ್ತು ನಗದು ಹರಿವು — ಸ್ಥಿರವಾಗಿದೆ ಮತ್ತು ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥವಾಗಿದೆ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುವುದು ಅತ್ಯಗತ್ಯ.</p>
          <img src="/portfolio-construction/image1.png" alt="Net worth and cash flow overview" style={imgStyle} />
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 2: Understanding Your Financial Starting Point",
      kn: "ಅಧ್ಯಾಯ ೨: ನಿಮ್ಮ ಹಣಕಾಸಿನ ಆರಂಭಿಕ ಬಿಂದುವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    },
    content: {
      en: (
        <>
          <p>Before you begin making investment decisions, it is important to understand <strong>where you currently stand financially</strong>.</p>
          <p>Investment strategies are not universal. The same strategy that works well for one person may be completely unsuitable for another. Your investment approach should always reflect <strong>your personal financial situation, responsibilities and long-term goals</strong>.</p>
          <p>Several factors shape your financial starting point, including:</p>
          <ul className="pl-6">
            <li>the stability and predictability of your income</li>
            <li>family responsibilities and dependents</li>
            <li>the amount of savings or investments you already have</li>
            <li>existing debt obligations</li>
            <li>your short-term and long-term financial goals</li>
          </ul>
          <p>Each of these elements influences how much risk you can reasonably take and how your investments should be structured.</p>
          <p>For example, a young professional early in their career may have <strong>many years ahead to grow their wealth</strong>. With fewer financial obligations and a longer investment horizon, they may be able to allocate a larger portion of their portfolio toward growth-oriented assets such as equities.</p>
          <p>In contrast, someone approaching retirement may have very different priorities. At this stage, protecting accumulated wealth and ensuring financial stability may become more important than pursuing aggressive growth.</p>
          <p>Understanding your financial starting point allows you to design an investment strategy that is <strong>aligned with your life circumstances rather than driven by market trends or external opinions</strong>.</p>
          <p>Before building a portfolio, take the time to assess your financial foundation carefully. A well-structured investment strategy always begins with <strong>a clear understanding of your current position and future goals</strong>.</p>
        </>
      ),
      kn: (
        <>
          <p>ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಆರಂಭಿಸುವ ಮೊದಲು, ನೀವು ಪ್ರಸ್ತುತ ಆರ್ಥಿಕವಾಗಿ ಎಲ್ಲಿ ನಿಂತಿದ್ದೀರಿ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾಗಿದೆ.</p>
          <p>ಹೂಡಿಕೆ ತಂತ್ರಗಳು ಎಲ್ಲರಿಗೂ ಒಂದೇ ರೀತಿ ಅನ್ವಯಿಸುವುದಿಲ್ಲ. ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುವ ತಂತ್ರವು ಇನ್ನೊಬ್ಬರಿಗೆ ಸಂಪೂರ್ಣ ಅನುಚಿತವಾಗಿರಬಹುದು. ನಿಮ್ಮ ಹೂಡಿಕೆ ವಿಧಾನವು ಯಾವಾಗಲೂ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಹಣಕಾಸು ಪರಿಸ್ಥಿತಿ, ಜವಾಬ್ದಾರಿಗಳು ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಗುರಿಗಳನ್ನು ಪ್ರತಿಬಿಂಬಿಸಬೇಕು.</p>
          <p>ನಿಮ್ಮ ಹಣಕಾಸು ಆರಂಭ ಬಿಂದುವನ್ನು ರೂಪಿಸುವ ಹಲವು ಅಂಶಗಳಿವೆ, ಅವುಗಳಲ್ಲಿ ಸೇರಿವೆ:</p>
          <ul className="pl-6">
            <li>ನಿಮ್ಮ ಆದಾಯದ ಸ್ಥಿರತೆ ಮತ್ತು ಊಹಿಸಬಹುದಾದ ಸ್ವರೂಪ</li>
            <li>ಕುಟುಂಬದ ಜವಾಬ್ದಾರಿಗಳು ಮತ್ತು ಆಶ್ರಿತರು</li>
            <li>ನೀವು ಈಗಾಗಲೇ ಹೊಂದಿರುವ ಉಳಿತಾಯ ಅಥವಾ ಹೂಡಿಕೆಗಳ ಪ್ರಮಾಣ</li>
            <li>ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸಾಲದ ಬಾಧ್ಯತೆಗಳು</li>
            <li>ನಿಮ್ಮ ಅಲ್ಪಕಾಲೀನ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಹಣಕಾಸು ಗುರಿಗಳು</li>
          </ul>
          <p>ಈ ಪ್ರತಿಯೊಂದು ಅಂಶವೂ ನೀವು ಸಮಂಜಸವಾಗಿ ಎಷ್ಟು ಅಪಾಯ ತೆಗೆದುಕೊಳ್ಳಬಹುದು ಮತ್ತು ನಿಮ್ಮ ಹೂಡಿಕೆಗಳನ್ನು ಹೇಗೆ ರಚಿಸಬೇಕು ಎಂಬುದನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ, ತಮ್ಮ ವೃತ್ತಿಜೀವನದ ಆರಂಭದಲ್ಲಿರುವ ಒಬ್ಬ ಯುವ ವೃತ್ತಿಪರರು ತಮ್ಮ ಸಂಪತ್ತನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಲು ಮುಂದೆ ಅನೇಕ ವರ್ಷಗಳನ್ನು ಹೊಂದಿರಬಹುದು. ಕಡಿಮೆ ಆರ್ಥಿಕ ಬಾಧ್ಯತೆಗಳು ಮತ್ತು ಹೆಚ್ಚು ದೀರ್ಘವಾದ ಹೂಡಿಕೆ ಅವಧಿ ಇರುವುದರಿಂದ, ಅವರು ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಹೆಚ್ಚಿನ ಭಾಗವನ್ನು ಷೇರುಗಳಂತಹ ಬೆಳವಣಿಗೆ-ಆಧಾರಿತ ಆಸ್ತಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಸಮರ್ಥರಾಗಿರಬಹುದು.</p>
          <p>ಇದಕ್ಕೆ ವ್ಯತಿರಿಕ್ತವಾಗಿ, ನಿವೃತ್ತಿಗೆ ಸಮೀಪಿಸುತ್ತಿರುವ ವ್ಯಕ್ತಿಯ ಆದ್ಯತೆಗಳು ಬಹಳ ಭಿನ್ನವಾಗಿರಬಹುದು. ಆ ಹಂತದಲ್ಲಿ, ಆಕ್ರಮಣಕಾರಿ ಬೆಳವಣಿಗೆಯ ಅನ್ವೇಷಣೆಗಿಂತ ಶೇಖರಿಸಿದ ಸಂಪತ್ತನ್ನು ರಕ್ಷಿಸುವುದು ಮತ್ತು ಹಣಕಾಸು ಸ್ಥಿರತೆಯನ್ನು ಖಾತ್ರಿಪಡಿಸಿಕೊಳ್ಳುವುದು ಹೆಚ್ಚು ಮಹತ್ವದ್ದಾಗಿ ಪರಿಣಮಿಸಬಹುದು.</p>
          <p>ನಿಮ್ಮ ಹಣಕಾಸು ಆರಂಭ ಬಿಂದುವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು, ಮಾರುಕಟ್ಟೆಯ ಪ್ರವೃತ್ತಿಗಳು ಅಥವಾ ಬಾಹ್ಯ ಅಭಿಪ್ರಾಯಗಳಿಂದ ಪ್ರಭಾವಿತವಾಗದೆ, ನಿಮ್ಮ ಜೀವನ ಪರಿಸ್ಥಿತಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಹೂಡಿಕೆ ತಂತ್ರವನ್ನು ರೂಪಿಸಲು ನಿಮಗೆ ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
          <p>ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಿಸುವ ಮೊದಲು, ನಿಮ್ಮ ಹಣಕಾಸು ಅಡಿಪಾಯವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳಿ. ಒಂದು ಸುಸಂಘಟಿತ ಹೂಡಿಕೆ ತಂತ್ರವು ಯಾವಾಗಲೂ ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ ಮತ್ತು ಭವಿಷ್ಯದ ಗುರಿಗಳ ಸ್ಪಷ್ಟ ಅವಗಾಹನೆಯಿಂದಲೇ ಆರಂಭವಾಗುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 3: Risk Appetite vs Risk Capacity",
      kn: "ಅಧ್ಯಾಯ ೩:  ಅಪಾಯದ ಇಚ್ಛೆ ಮತ್ತು ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯ",
    },
    content: {
      en: (
        <>
          <p>When it comes to investing, two people can look at the exact same market situation and react very differently. One investor may remain calm during a market decline, while another may feel anxious and rush to sell.</p>
          <p>This difference highlights two important concepts that every investor should understand:</p>
          <p><strong>Risk appetite</strong> and <strong>risk capacity</strong>.</p>
          <p>Although these terms are often used interchangeably, they represent very different things.</p>
          <p><strong>Risk appetite</strong> refers to your <strong>emotional tolerance for volatility</strong>. It reflects how comfortable you feel when markets fluctuate and when the value of your investments temporarily declines.</p>
          <p>Some investors are comfortable seeing their portfolio fall 20–30% during market corrections if they believe in the long-term potential of their investments. Others may find even small fluctuations stressful.</p>
          <p>In contrast, <strong>risk capacity</strong> refers to your <strong>financial ability to withstand losses</strong> without damaging your long-term financial stability.</p>
          <p>Risk capacity is influenced by several factors, including:</p>
          <ul className="pl-6">
            <li>the stability of your income</li>
            <li>your current net worth</li>
            <li>your savings and financial reserves</li>
            <li>the time horizon for your financial goals</li>
            <li>your reliance on investment income</li>
          </ul>
          <p>For example, an individual with a stable salary, a growing net worth and a long investment horizon may have a relatively high risk capacity. Temporary market fluctuations are less likely to affect their financial security because their income and savings continue to support their financial position.</p>
          <p>On the other hand, someone who depends on their investments for regular income or who has limited financial reserves may have a much lower risk capacity. Large market declines could significantly impact their ability to meet expenses.</p>
          <img src="/portfolio-construction/image7.png" alt="Risk appetite vs risk capacity diagram" style={imgStyle} />
          <p>Your <strong>income and net worth play a critical role in determining risk capacity</strong>. Higher income stability and stronger financial reserves generally increase the ability to absorb market volatility, while limited financial buffers reduce that flexibility.</p>
          <p>A successful investment strategy must consider <strong>both factors together</strong>. Taking excessive risk beyond your financial capacity can create instability, while investing too conservatively due to emotional discomfort may limit long-term growth.</p>
          <p>By understanding the difference between risk appetite and risk capacity, you can design an investment approach that is <strong>both financially sustainable and psychologically comfortable</strong>, helping you stay disciplined during inevitable market fluctuations.</p>
        </>
      ),
      kn: (
        <>
          <p>ಹೂಡಿಕೆಯ ವಿಷಯಕ್ಕೆ ಬಂದಾಗ, ಇಬ್ಬರು ವ್ಯಕ್ತಿಗಳು ಒಂದೇ ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಯನ್ನು ನೋಡಿ ಬಹಳ ವಿಭಿನ್ನವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸಬಹುದು. ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ಮಾರುಕಟ್ಟೆ ಕುಸಿತದ ಸಮಯದಲ್ಲಿ ಸ್ಥಿರಚಿತ್ತರಾಗಿ ಉಳಿಯಬಹುದು, ಮತ್ತೊಬ್ಬರು ಆತಂಕಗೊಂಡು ತಕ್ಷಣ ಮಾರಾಟ ಮಾಡಲು ಮುಂದಾಗಬಹುದು.</p>
          <p>ಈ ವ್ಯತ್ಯಾಸವು ಪ್ರತಿಯೊಬ್ಬ ಹೂಡಿಕೆದಾರರೂ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ ಎರಡು ಮಹತ್ವದ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಎತ್ತಿ ತೋರಿಸುತ್ತದೆ:</p>
          <p><strong>ಅಪಾಯದ ಇಚ್ಛೆ</strong> ಮತ್ತು <strong>ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯ.</strong></p>
          <p>ಈ ಪದಗಳನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಒಂದೇ ಅರ್ಥದಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆಯಾದರೂ, ಅವು ಬಹಳ ಭಿನ್ನವಾದ ವಿಷಯಗಳನ್ನು ಸೂಚಿಸುತ್ತವೆ.</p>
          <p><strong>ಅಪಾಯದ ಇಚ್ಛೆ</strong> ಎಂದರೆ ಏರಿಳಿತಗಳನ್ನು ಸಹಿಸಿಕೊಳ್ಳುವ ನಿಮ್ಮ ಭಾವನಾತ್ಮಕ ಸಹನಶಕ್ತಿ. ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತ ಕಂಡಾಗ ಮತ್ತು ನಿಮ್ಮ ಹೂಡಿಕೆಗಳ ಮೌಲ್ಯ ತಾತ್ಕಾಲಿಕವಾಗಿ ಕಡಿಮೆಯಾದಾಗ ನೀವು ಎಷ್ಟು ನಿರಾಳವಾಗಿರುತ್ತೀರಿ ಎಂಬುದನ್ನು ಇದು ಪ್ರತಿಫಲಿಸುತ್ತದೆ.</p>
          <p>ಕೆಲವು ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಹೂಡಿಕೆಗಳ ದೀರ್ಘಕಾಲೀನ ಸಾಮರ್ಥ್ಯದಲ್ಲಿ ನಂಬಿಕೆ ಇದ್ದರೆ, ಮಾರುಕಟ್ಟೆ ತಿದ್ದುಪಡಿಗಳ ಸಮಯದಲ್ಲಿ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ೨೦–೩೦% ಕುಸಿಯುವುದನ್ನು ನೋಡಿದರೂ ಅಲ್ಲಾಡದೆ ಇರಬಲ್ಲರು. ಇನ್ನು ಕೆಲವರಿಗೆ ಸಣ್ಣ ಏರಿಳಿತಗಳೂ ಒತ್ತಡ ತರಬಹುದು.</p>
          <p>ಇದಕ್ಕೆ ವ್ಯತಿರಿಕ್ತವಾಗಿ, <strong>ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯ</strong> ಎಂದರೆ ನಿಮ್ಮ ದೀರ್ಘಕಾಲೀನ ಹಣಕಾಸು ಸ್ಥಿರತೆಗೆ ಹಾನಿಯಾಗದಂತೆ ನಷ್ಟಗಳನ್ನು ತಡೆದುಕೊಳ್ಳುವ ನಿಮ್ಮ ಆರ್ಥಿಕ ಸಾಮರ್ಥ್ಯ.</p>
          <p>ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯವನ್ನು ಹಲವು ಅಂಶಗಳು ನಿರ್ಧರಿಸುತ್ತವೆ, ಅವುಗಳಲ್ಲಿ ಸೇರಿವೆ:</p>
          <ul className="pl-6">
            <li>ನಿಮ್ಮ ಆದಾಯದ ಸ್ಥಿರತೆ</li>
            <li>ನಿಮ್ಮ ಪ್ರಸ್ತುತ ನಿವ್ವಳ ಮೌಲ್ಯ</li>
            <li>ನಿಮ್ಮ ಉಳಿತಾಯ ಮತ್ತು ಆರ್ಥಿಕ ಮೀಸಲು ನಿಧಿ</li>
            <li>ನಿಮ್ಮ ಹಣಕಾಸು ಗುರಿಗಳ ಸಮಯದ ಅವಧಿ</li>
            <li>ಹೂಡಿಕೆಯ ಆದಾಯದ ಮೇಲಿನ ನಿಮ್ಮ ಅವಲಂಬನೆ</li>
          </ul>
          <p>ಉದಾಹರಣೆಗೆ, ಸ್ಥಿರ ವೇತನ, ಬೆಳೆಯುತ್ತಿರುವ ನಿವ್ವಳ ಮೌಲ್ಯ ಮತ್ತು ದೀರ್ಘ ಹೂಡಿಕೆ ಅವಧಿ ಹೊಂದಿರುವ ವ್ಯಕ್ತಿಯು ತುಲನಾತ್ಮಕವಾಗಿ ಹೆಚ್ಚಿನ ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿರಬಹುದು. ಅವರ ಆದಾಯ ಮತ್ತು ಉಳಿತಾಯ ಅವರ ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಬೆಂಬಲಿಸುತ್ತಿರುವುದರಿಂದ, ತಾತ್ಕಾಲಿಕ ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳು ಅವರ ಆರ್ಥಿಕ ಭದ್ರತೆಯ ಮೇಲೆ ಹೆಚ್ಚಿನ ಪರಿಣಾಮ ಬೀರುವ ಸಾಧ್ಯತೆ ಕಡಿಮೆ.</p>
          <p>ಮತ್ತೊಂದೆಡೆ, ನಿಯಮಿತ ಆದಾಯಕ್ಕಾಗಿ ಹೂಡಿಕೆಗಳ ಮೇಲೆ ಅವಲಂಬಿತರಾಗಿರುವ ಅಥವಾ ಸೀಮಿತ ಆರ್ಥಿಕ ಮೀಸಲು ನಿಧಿ ಹೊಂದಿರುವ ವ್ಯಕ್ತಿಯ ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯ ಬಹಳ ಕಡಿಮೆಯಾಗಿರಬಹುದು. ದೊಡ್ಡ ಮಾರುಕಟ್ಟೆ ಕುಸಿತಗಳು ಅವರ ದಿನನಿತ್ಯದ ವೆಚ್ಚಗಳನ್ನು ನಿಭಾಯಿಸುವ ಸಾಮರ್ಥ್ಯದ ಮೇಲೆ ಗಣನೀಯ ಪ್ರಭಾವ ಬೀರಬಹುದು.</p>
          <img src="/portfolio-construction/image7.png" alt="Risk appetite vs risk capacity diagram" style={imgStyle} />
          <p>ನಿಮ್ಮ ಆದಾಯ ಮತ್ತು ನಿವ್ವಳ ಮೌಲ್ಯವು ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯವನ್ನು ನಿರ್ಧರಿಸುವಲ್ಲಿ ನಿರ್ಣಾಯಕ ಪಾತ್ರ ವಹಿಸುತ್ತವೆ. ಆದಾಯದ ಹೆಚ್ಚಿನ ಸ್ಥಿರತೆ ಮತ್ತು ಗಟ್ಟಿಯಾದ ಆರ್ಥಿಕ ಮೀಸಲು ನಿಧಿ ಸಾಮಾನ್ಯವಾಗಿ ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ, ಆದರೆ ಸೀಮಿತ ಆರ್ಥಿಕ ಆಸರೆ ಆ ನಮ್ಯತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</p>
          <p>ಒಂದು ಯಶಸ್ವಿ ಹೂಡಿಕೆ ತಂತ್ರವು ಈ ಎರಡೂ ಅಂಶಗಳನ್ನು ಒಟ್ಟಾಗಿ ಪರಿಗಣಿಸಬೇಕು. ನಿಮ್ಮ ಆರ್ಥಿಕ ಸಾಮರ್ಥ್ಯವನ್ನು ಮೀರಿ ಅತಿಯಾದ ಅಪಾಯ ತೆಗೆದುಕೊಳ್ಳುವುದು ಅಸ್ಥಿರತೆಯನ್ನು ಸೃಷ್ಟಿಸಬಹುದು, ಅದೇ ರೀತಿ ಭಾವನಾತ್ಮಕ ಅಸ್ವಸ್ಥತೆಯ ಕಾರಣದಿಂದ ಅತ್ಯಂತ ಎಚ್ಚರಿಕೆಯ ರೀತಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವುದು ದೀರ್ಘಕಾಲೀನ ಬೆಳವಣಿಗೆಯನ್ನು ಮಿತಿಗೊಳಿಸಬಹುದು.</p>
          <p>ಅಪಾಯದ ಇಚ್ಛೆ ಮತ್ತು ಅಪಾಯ ಭರಿಸುವ ಸಾಮರ್ಥ್ಯದ ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಮೂಲಕ, ಆರ್ಥಿಕವಾಗಿ ಸುಸ್ಥಿರ ಮತ್ತು ಮಾನಸಿಕವಾಗಿ ನಿರಾಳವಾದ ಹೂಡಿಕೆ ವಿಧಾನವನ್ನು ನೀವು ರೂಪಿಸಬಹುದು — ಇದು ಅನಿವಾರ್ಯ ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳ ಸಮಯದಲ್ಲಿ ಶಿಸ್ತುಬದ್ಧರಾಗಿ ಉಳಿಯಲು ನಿಮಗೆ ನೆರವಾಗುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 4: Emergency Fund — Your Financial Safety Net",
      kn: "ಅಧ್ಯಾಯ ೪: ತುರ್ತು ನಿಧಿ — ನಿಮ್ಮ ಹಣಕಾಸಿನ ಸುರಕ್ಷತಾ ಜಾಲ",
    },
    content: {
      en: (
        <>
          <p>Before allocating significant capital to volatile assets such as equities, it is essential to first establish an <strong>emergency fund</strong>.</p>
          <p>Earlier in the course, particularly in the <strong>budgeting module</strong>, we discussed the importance of managing expenses, building savings discipline and creating financial buffers. The emergency fund is one of the most important outcomes of that discipline.</p>
          <p>An emergency fund acts as a <strong>financial safety net</strong> that protects you from unexpected disruptions. Life events rarely follow predictable timelines and unforeseen expenses can arise at any time.</p>
          <p>Common situations where an emergency fund becomes critical include:</p>
          <ul className="pl-6">
            <li>temporary job loss or interruption of income</li>
            <li>unexpected medical expenses</li>
            <li>urgent home or vehicle repairs</li>
            <li>sudden family responsibilities</li>
          </ul>
          <p>Without an emergency fund, investors may be forced to liquidate long-term investments during unfavorable market conditions simply to meet short-term financial needs.</p>
          <p>A commonly recommended guideline is to maintain <strong>six to twelve months of essential living expenses</strong> in highly liquid instruments such as savings accounts or liquid mutual funds. These funds should be easily accessible and should not be exposed to significant market volatility.</p>
          <p>The purpose of this reserve is not to generate high returns, but to provide <strong>financial stability and flexibility during difficult periods</strong>.</p>
          <img src="/portfolio-construction/image5.png" alt="Emergency fund illustration" style={imgStyle} />
          <p>By maintaining an adequate emergency fund, you give your long-term investments the time they need to grow without being disrupted by short-term financial pressures. This buffer allows you to remain invested through market cycles rather than making forced decisions during periods of uncertainty.</p>
        </>
      ),
      kn: (
        <>
          <p>ಷೇರುಗಳಂತಹ ಏರಿಳಿತಕ್ಕೊಳಗಾಗುವ ಆಸ್ತಿಗಳಲ್ಲಿ ಗಣನೀಯ ಬಂಡವಾಳ ಹೂಡಿಕೆ ಮಾಡುವ ಮೊದಲು, ಒಂದು ತುರ್ತು ನಿಧಿಯನ್ನು ಸ್ಥಾಪಿಸುವುದು ಅತ್ಯಂತ ಅಗತ್ಯ.</p>
          <p>ಈ ಕೋರ್ಸಿನ ಹಿಂದಿನ ಭಾಗದಲ್ಲಿ, ವಿಶೇಷವಾಗಿ ಬಜೆಟ್ ಮಾಡ್ಯೂಲ್‌ನಲ್ಲಿ, ವೆಚ್ಚಗಳನ್ನು ನಿರ್ವಹಿಸುವ, ಉಳಿತಾಯದ ಶಿಸ್ತನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳುವ ಮತ್ತು ಆರ್ಥಿಕ ಆಸರೆ ನಿರ್ಮಿಸುವ ಮಹತ್ವದ ಬಗ್ಗೆ ನಾವು ಚರ್ಚಿಸಿದ್ದೇವೆ. ತುರ್ತು ನಿಧಿಯು ಆ ಶಿಸ್ತಿನ ಅತ್ಯಂತ ಮಹತ್ವದ ಫಲಿತಾಂಶಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.</p>
          <p>ತುರ್ತು ನಿಧಿಯು ಅನಿರೀಕ್ಷಿತ ಆಘಾತಗಳಿಂದ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸುವ ಆರ್ಥಿಕ ಸುರಕ್ಷಾ ಜಾಲವಾಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತದೆ. ಜೀವನದ ಘಟನೆಗಳು ಅಪರೂಪವಾಗಿ ಊಹಿಸಬಹುದಾದ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ನಡೆಯುತ್ತವೆ, ಮತ್ತು ಅನಿರೀಕ್ಷಿತ ವೆಚ್ಚಗಳು ಯಾವ ಸಮಯದಲ್ಲಾದರೂ ಉದ್ಭವಿಸಬಹುದು.</p>
          <p>ತುರ್ತು ನಿಧಿ ನಿರ್ಣಾಯಕವಾಗುವ ಸಾಮಾನ್ಯ ಸಂದರ್ಭಗಳಲ್ಲಿ ಸೇರಿವೆ:</p>
          <ul className="pl-6">
            <li>ತಾತ್ಕಾಲಿಕ ಉದ್ಯೋಗ ನಷ್ಟ ಅಥವಾ ಆದಾಯದ ಅಡಚಣೆ</li>
            <li>ಅನಿರೀಕ್ಷಿತ ವೈದ್ಯಕೀಯ ವೆಚ್ಚಗಳು</li>
            <li>ಮನೆ ಅಥವಾ ವಾಹನದ ತುರ್ತು ದುರಸ್ತಿ</li>
            <li>ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಉದ್ಭವಿಸುವ ಕುಟುಂಬದ ಜವಾಬ್ದಾರಿಗಳು</li>
          </ul>
          <p>ತುರ್ತು ನಿಧಿ ಇಲ್ಲದಿದ್ದರೆ, ಹೂಡಿಕೆದಾರರು ಅಲ್ಪಕಾಲೀನ ಆರ್ಥಿಕ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು ಮಾತ್ರ ಪ್ರತಿಕೂಲ ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ತಮ್ಮ ದೀರ್ಘಕಾಲೀನ ಹೂಡಿಕೆಗಳನ್ನು ವಿಮೋಚಿಸಲು ಒತ್ತಾಯಕ್ಕೊಳಗಾಗಬಹುದು.</p>
          <p>ಸಾಮಾನ್ಯವಾಗಿ ಶಿಫಾರಸು ಮಾಡಲಾಗುವ ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರವೆಂದರೆ, ಆರರಿಂದ ಹನ್ನೆರಡು ತಿಂಗಳ ಅಗತ್ಯ ಜೀವನ ವೆಚ್ಚಗಳಿಗೆ ಸಮನಾದ ಮೊತ್ತವನ್ನು ಉಳಿತಾಯ ಖಾತೆಗಳು ಅಥವಾ ಲಿಕ್ವಿಡ್ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಂತಹ ಸುಲಭವಾಗಿ ನಗದಾಗಿಸಬಹುದಾದ ಸಾಧನಗಳಲ್ಲಿ ಇರಿಸಿಕೊಳ್ಳುವುದು. ಈ ಹಣ ಸುಲಭವಾಗಿ ಲಭ್ಯವಾಗಬೇಕು ಮತ್ತು ಗಣನೀಯ ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳಿಗೆ ಒಡ್ಡಿಕೊಳ್ಳಬಾರದು.</p>
          <p>ಈ ಮೀಸಲು ನಿಧಿಯ ಉದ್ದೇಶ ಹೆಚ್ಚಿನ ಆದಾಯ ಗಳಿಸುವುದಲ್ಲ, ಬದಲಾಗಿ ಕಷ್ಟದ ಸಮಯಗಳಲ್ಲಿ ಆರ್ಥಿಕ ಸ್ಥಿರತೆ ಮತ್ತು ನಮ್ಯತೆಯನ್ನು ಒದಗಿಸುವುದಾಗಿದೆ.</p>
          <img src="/portfolio-construction/image5.png" alt="Emergency fund illustration" style={imgStyle} />
          <p>ಸಮರ್ಪಕವಾದ ತುರ್ತು ನಿಧಿಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವ ಮೂಲಕ, ನಿಮ್ಮ ದೀರ್ಘಕಾಲೀನ ಹೂಡಿಕೆಗಳು ಅಲ್ಪಕಾಲೀನ ಆರ್ಥಿಕ ಒತ್ತಡಗಳಿಂದ ಅಡ್ಡಿಯಾಗದೆ ಬೆಳೆಯಲು ಅಗತ್ಯವಾದ ಸಮಯವನ್ನು ನೀವು ಅವುಗಳಿಗೆ ನೀಡುತ್ತೀರಿ. ಈ ಆರ್ಥಿಕ ಆಸರೆಯು ಅನಿಶ್ಚಿತತೆಯ ಸಂದರ್ಭಗಳಲ್ಲಿ ಅನಿವಾರ್ಯ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಬದಲು, ಮಾರುಕಟ್ಟೆಯ ಏರಿಳಿತದ ಚಕ್ರಗಳ ನಡುವೆಯೂ ನೀವು ಹೂಡಿಕೆಯಲ್ಲಿ ಮುಂದುವರಿಯಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 5: Role of Real Estate in Wealth Allocation",
      kn: "ಅಧ್ಯಾಯ ೫: ಸಂಪತ್ತು ಹಂಚಿಕೆಯಲ್ಲಿ ರಿಯಲ್ ಎಸ್ಟೇಟ್\u200Cನ ಪಾತ್ರ",
    },
    content: {
      en: (
        <>
          <p>For many individuals, <strong>real estate represents one of the largest components of personal wealth</strong>. In many cases, the value of a home or property may exceed the value of all other financial investments combined.</p>
          <p>Because of this, real estate plays an important role when thinking about <strong>overall wealth allocation</strong>, even though it is often not considered alongside traditional investment assets like stocks or mutual funds.</p>
          <p>Real estate can serve several different purposes in an individual&apos;s financial life, including:</p>
          <ul className="pl-6">
            <li><strong>Primary residence</strong> — the home you live in</li>
            <li><strong>Rental property</strong> — generating regular income through rent</li>
            <li><strong>Long-term capital appreciation</strong> — benefiting from increases in property values over time</li>
          </ul>
          <p>For many families, owning a home also provides stability and long-term security. However, from an investment perspective, it is important to recognize that property behaves differently from financial assets.</p>
          <img src="/portfolio-construction/image6.png" alt="Real estate in wealth allocation" style={imgStyle} />
          <p>Real estate investments typically have certain characteristics:</p>
          <ul className="pl-6">
            <li><strong>low liquidity</strong> — property cannot be easily sold quickly when cash is needed</li>
            <li><strong>large capital requirements</strong> — significant upfront investment is usually required</li>
            <li><strong>transaction costs</strong> — buying and selling property involves taxes, registration fees and other costs</li>
            <li><strong>concentration risk</strong> — a large portion of wealth may be tied to a single asset</li>
          </ul>
          <p>Because of these factors, real estate should always be viewed as part of your <strong>overall financial picture</strong>, not separately from it.</p>
          <p>When designing an investment portfolio, investors should consider how real estate already influences their <strong>asset allocation</strong>. For example, if a substantial portion of personal wealth is invested in property, the remaining financial portfolio may benefit from greater diversification across other asset classes such as equities, debt instruments or gold.</p>
          <p>Thinking about real estate in the context of your total wealth helps ensure that your financial assets remain <strong>balanced, diversified and aligned with your long-term goals</strong>.</p>
        </>
      ),
      kn: (
        <>
          <p>ಅನೇಕ ವ್ಯಕ್ತಿಗಳಿಗೆ, ರಿಯಲ್ ಎಸ್ಟೇಟ್ ವೈಯಕ್ತಿಕ ಸಂಪತ್ತಿನ ಅತಿ ದೊಡ್ಡ ಘಟಕಗಳಲ್ಲಿ ಒಂದನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಹಲವು ಸಂದರ್ಭಗಳಲ್ಲಿ, ಒಂದು ಮನೆ ಅಥವಾ ಆಸ್ತಿಯ ಮೌಲ್ಯವು ಉಳಿದ ಎಲ್ಲ ಹಣಕಾಸು ಹೂಡಿಕೆಗಳ ಒಟ್ಟು ಮೌಲ್ಯವನ್ನು ಮೀರಬಹುದು.</p>
          <p>ಈ ಕಾರಣದಿಂದಾಗಿ, ಷೇರುಗಳು ಅಥವಾ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಂತಹ ಸಾಂಪ್ರದಾಯಿಕ ಹೂಡಿಕೆ ಆಸ್ತಿಗಳೊಂದಿಗೆ ಹೋಲಿಸಿ ನೋಡದಿದ್ದರೂ ಸಹ, ಒಟ್ಟಾರೆ ಸಂಪತ್ತು ಹಂಚಿಕೆಯ ದೃಷ್ಟಿಯಿಂದ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಒಂದು ಮಹತ್ವದ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ.</p>
          <p>ರಿಯಲ್ ಎಸ್ಟೇಟ್ ವ್ಯಕ್ತಿಯ ಹಣಕಾಸು ಜೀವನದಲ್ಲಿ ಹಲವು ವಿಭಿನ್ನ ಉದ್ದೇಶಗಳನ್ನು ಪೂರೈಸಬಹುದು, ಅವುಗಳಲ್ಲಿ ಸೇರಿವೆ:</p>
          <ul className="pl-6">
            <li><strong>ಪ್ರಾಥಮಿಕ ನಿವಾಸ</strong> — ನೀವು ವಾಸಿಸುವ ಮನೆ</li>
            <li><strong>ಬಾಡಿಗೆ ಆಸ್ತಿ</strong> — ಬಾಡಿಗೆಯ ಮೂಲಕ ನಿಯಮಿತ ಆದಾಯ ಗಳಿಸುವುದು</li>
            <li><strong>ದೀರ್ಘಕಾಲೀನ ಬಂಡವಾಳ ಮೌಲ್ಯ ವೃದ್ಧಿ</strong> — ಕಾಲಕ್ರಮೇಣ ಆಸ್ತಿಯ ಮೌಲ್ಯ ಹೆಚ್ಚಾಗುವುದರಿಂದ ಲಾಭ ಪಡೆಯುವುದು</li>
          </ul>
          <p>ಅನೇಕ ಕುಟುಂಬಗಳಿಗೆ, ಮನೆ ಹೊಂದಿರುವುದು ಸ್ಥಿರತೆ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಭದ್ರತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಆದಾಗ್ಯೂ, ಹೂಡಿಕೆಯ ದೃಷ್ಟಿಕೋನದಿಂದ ನೋಡಿದಾಗ, ಆಸ್ತಿಯು ಹಣಕಾಸು ಆಸ್ತಿಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ ವರ್ತಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಗುರುತಿಸುವುದು ಮಹತ್ವದ್ದಾಗಿದೆ.</p>
          <img src="/portfolio-construction/image6.png" alt="Real estate in wealth allocation" style={imgStyle} />
          <p>ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಹೂಡಿಕೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕೆಲವು ನಿರ್ದಿಷ್ಟ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ:</p>
          <ul className="pl-6">
            <li><strong>ಕಡಿಮೆ ನಗದೀಕರಣ ಸಾಮರ್ಥ್ಯ</strong> — ನಗದಿನ ಅವಶ್ಯಕತೆ ಬಿದ್ದಾಗ ಆಸ್ತಿಯನ್ನು ಶೀಘ್ರವಾಗಿ ಮಾರಾಟ ಮಾಡುವುದು ಸುಲಭವಲ್ಲ</li>
            <li><strong>ದೊಡ್ಡ ಬಂಡವಾಳದ ಅಗತ್ಯ</strong> — ಸಾಮಾನ್ಯವಾಗಿ ಮೊದಲೇ ಗಣನೀಯ ಪ್ರಮಾಣದ ಹೂಡಿಕೆ ಅಗತ್ಯವಾಗುತ್ತದೆ</li>
            <li><strong>ವಹಿವಾಟು ವೆಚ್ಚಗಳು</strong> — ಆಸ್ತಿ ಖರೀದಿ ಮತ್ತು ಮಾರಾಟದಲ್ಲಿ ತೆರಿಗೆಗಳು, ನೋಂದಣಿ ಶುಲ್ಕಗಳು ಮತ್ತು ಇತರ ವೆಚ್ಚಗಳು ಒಳಗೊಂಡಿರುತ್ತವೆ</li>
            <li><strong>ಕೇಂದ್ರೀಕರಣದ ಅಪಾಯ</strong> — ಸಂಪತ್ತಿನ ದೊಡ್ಡ ಭಾಗವು ಒಂದೇ ಆಸ್ತಿಗೆ ಸಂಬಂಧಿಸಿರಬಹುದು</li>
          </ul>
          <p>ಈ ಅಂಶಗಳ ಕಾರಣದಿಂದ, ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಅನ್ನು ಯಾವಾಗಲೂ ನಿಮ್ಮ ಒಟ್ಟಾರೆ ಹಣಕಾಸು ಚಿತ್ರಣದ ಒಂದು ಭಾಗವಾಗಿ ನೋಡಬೇಕು, ಅದರಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಅಲ್ಲ.</p>
          <p>ಹೂಡಿಕೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ವಿನ್ಯಾಸ ಮಾಡುವಾಗ, ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಈಗಾಗಲೇ ತಮ್ಮ ಆಸ್ತಿ ಹಂಚಿಕೆಯ ಮೇಲೆ ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತಿದೆ ಎಂಬುದನ್ನು ಹೂಡಿಕೆದಾರರು ಪರಿಗಣಿಸಬೇಕು. ಉದಾಹರಣೆಗೆ, ವೈಯಕ್ತಿಕ ಸಂಪತ್ತಿನ ಗಣನೀಯ ಭಾಗವು ಆಸ್ತಿಯಲ್ಲಿ ಹೂಡಿಕೆಯಾಗಿದ್ದರೆ, ಉಳಿದ ಹಣಕಾಸು ಪೋರ್ಟ್‌ಫೋಲಿಯೋವು ಷೇರುಗಳು, ಸಾಲ ಸಾಧನಗಳು ಅಥವಾ ಚಿನ್ನದಂತಹ ಇತರ ಆಸ್ತಿ ವರ್ಗಗಳಲ್ಲಿ ಹೆಚ್ಚಿನ ವೈವಿಧ್ಯೀಕರಣದಿಂದ ಲಾಭ ಪಡೆಯಬಹುದು.</p>
          <p>ನಿಮ್ಮ ಒಟ್ಟು ಸಂಪತ್ತಿನ ಸಂದರ್ಭದಲ್ಲಿ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಬಗ್ಗೆ ಯೋಚಿಸುವುದು, ನಿಮ್ಮ ಹಣಕಾಸು ಆಸ್ತಿಗಳು ಸಮತೋಲಿತ, ವೈವಿಧ್ಯಮಯ ಮತ್ತು ನಿಮ್ಮ ದೀರ್ಘಕಾಲೀನ ಗುರಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಉಳಿಯುವಂತೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನೆರವಾಗುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 6: Age-Based and Goal-Based Investing",
      kn: "ಅಧ್ಯಾಯ ೬: ವಯಸ್ಸು-ಆಧಾರಿತ ಮತ್ತು ಗುರಿ-ಆಧಾರಿತ ಹೂಡಿಕೆ",
    },
    content: {
      en: (
        <>
          <p>Investment strategies should not remain static throughout life. As your <strong>financial situation, responsibilities and goals evolve</strong>, the way you allocate your investments should evolve as well.</p>
          <p>Two frameworks help guide this process:</p>
          <ul className="pl-6">
            <li><strong>Age-based investing</strong></li>
            <li><strong>Goal-based investing</strong></li>
          </ul>
          <p>When combined thoughtfully, these frameworks help create a portfolio that aligns both with your <strong>stage of life</strong> and your <strong>future financial objectives</strong>.</p>

          <h3>Age-Based Investing</h3>
          <p>Age-based investing focuses on how your <strong>investment horizon and financial priorities change over time</strong>.</p>
          <p>Younger investors typically have certain advantages:</p>
          <ul className="pl-6">
            <li>longer time horizons before major financial goals</li>
            <li>greater ability to tolerate market volatility</li>
            <li>more time to recover from temporary market declines</li>
          </ul>
          <p>Because of this, younger investors often allocate a larger portion of their portfolios to <strong>growth-oriented assets such as equities</strong>, which historically offer higher long-term return potential but also experience greater short-term fluctuations.</p>
          <p>As investors move later into their careers and approach retirement, priorities often begin to shift. At this stage, preserving accumulated wealth and ensuring financial stability may become more important than pursuing aggressive growth.</p>
          <p>This may lead to gradually increasing allocations toward <strong>more stable assets such as debt instruments or income-generating investments</strong>.</p>
          <p>Age-based investing therefore helps adjust portfolio risk as your <strong>financial timeline changes</strong>.</p>

          <h3>Goal-Based Investing</h3>
          <p>While age provides a general framework, most investments are ultimately tied to <strong>specific financial goals</strong>.</p>
          <p>Goal-based investing focuses on structuring investments around these objectives.</p>
          <p>Common financial goals may include:</p>
          <ul className="pl-6">
            <li>purchasing a home</li>
            <li>funding children&apos;s education</li>
            <li>retirement planning</li>
            <li>major life expenses</li>
          </ul>
          <p>Each goal has its own <strong>time horizon</strong> and that time horizon influences the type of investments that may be appropriate.</p>
          <p>For example:</p>
          <ul className="pl-6">
            <li><strong>Short-term goals</strong> (1–3 years) typically require more stable and liquid investments.</li>
            <li><strong>Medium-term goals</strong> (3–7 years) may involve a balanced mix of growth and stability.</li>
            <li><strong>Long-term goals</strong> (10+ years) can often tolerate greater exposure to equities because there is more time to navigate market cycles.</li>
          </ul>

          <h3>Combining Both Approaches</h3>
          <p>Age-based and goal-based investing are most effective when used <strong>together rather than separately</strong>.</p>
          <p>Age helps determine your overall risk tolerance and investment horizon, while goals help determine how specific portions of your portfolio should be allocated.</p>
          <p>For example, a young investor may still choose conservative investments for a <strong>near-term goal</strong> like buying a car in 1 year, even while maintaining a growth-oriented portfolio for <strong>long-term wealth creation</strong>.</p>
          <p>By combining these two perspectives, investors can build portfolios that remain aligned with both <strong>life stages and financial priorities</strong>, creating a more balanced and sustainable investment strategy over time.</p>
        </>
      ),
      kn: (
        <>
          <p>ಹೂಡಿಕೆ ತಂತ್ರಗಳು ಜೀವನದುದ್ದಕ್ಕೂ ಒಂದೇ ರೀತಿ ಉಳಿಯಬಾರದು. ನಿಮ್ಮ ಹಣಕಾಸು ಪರಿಸ್ಥಿತಿ, ಜವಾಬ್ದಾರಿಗಳು ಮತ್ತು ಗುರಿಗಳು ಬದಲಾದಂತೆ, ನಿಮ್ಮ ಹೂಡಿಕೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ರೀತಿಯೂ ಬದಲಾಗಬೇಕು.</p>
          <p>ಈ ಪ್ರಕ್ರಿಯೆಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಎರಡು ಚೌಕಟ್ಟುಗಳಿವೆ:</p>
          <ul className="pl-6">
            <li>ವಯಸ್ಸು-ಆಧಾರಿತ ಹೂಡಿಕೆ</li>
            <li>ಗುರಿ-ಆಧಾರಿತ ಹೂಡಿಕೆ</li>
          </ul>
          <p>ಎರಡನ್ನೂ ವಿವೇಚನೆಯಿಂದ ಸಂಯೋಜಿಸಿದಾಗ, ನಿಮ್ಮ ಜೀವನದ ಹಂತ ಮತ್ತು ಭವಿಷ್ಯದ ಹಣಕಾಸು ಉದ್ದೇಶಗಳೆರಡಕ್ಕೂ ಹೊಂದಿಕೊಳ್ಳುವ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ರಚಿಸಲು ಈ ಚೌಕಟ್ಟುಗಳು ಸಹಾಯ ಮಾಡುತ್ತವೆ.</p>
          <h3>ವಯಸ್ಸು-ಆಧಾರಿತ ಹೂಡಿಕೆ</h3>
          <p>ವಯಸ್ಸು-ಆಧಾರಿತ ಹೂಡಿಕೆಯು ನಿಮ್ಮ ಹೂಡಿಕೆ ಅವಧಿ ಮತ್ತು ಹಣಕಾಸು ಆದ್ಯತೆಗಳು ಕಾಲಕ್ರಮೇಣ ಹೇಗೆ ಬದಲಾಗುತ್ತವೆ ಎಂಬುದರ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.</p>
          <p>ಯುವ ಹೂಡಿಕೆದಾರರು ಸಾಮಾನ್ಯವಾಗಿ ಕೆಲವು ವಿಶೇಷ ಅನುಕೂಲಗಳನ್ನು ಹೊಂದಿರುತ್ತಾರೆ:</p>
          <ul className="pl-6">
            <li>ಪ್ರಮುಖ ಹಣಕಾಸು ಗುರಿಗಳ ಮೊದಲು ಹೆಚ್ಚು ದೀರ್ಘ ಸಮಯದ ಅವಧಿ</li>
            <li>ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳನ್ನು ಸಹಿಸಿಕೊಳ್ಳುವ ಹೆಚ್ಚಿನ ಸಾಮರ್ಥ್ಯ</li>
            <li>ತಾತ್ಕಾಲಿಕ ಮಾರುಕಟ್ಟೆ ಕುಸಿತಗಳಿಂದ ಚೇತರಿಸಿಕೊಳ್ಳಲು ಹೆಚ್ಚಿನ ಸಮಯ</li>
          </ul>
          <p>ಈ ಕಾರಣದಿಂದ, ಯುವ ಹೂಡಿಕೆದಾರರು ಸಾಮಾನ್ಯವಾಗಿ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಹೆಚ್ಚಿನ ಭಾಗವನ್ನು ಷೇರುಗಳಂತಹ ಬೆಳವಣಿಗೆ-ಆಧಾರಿತ ಆಸ್ತಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತಾರೆ — ಇವು ಐತಿಹಾಸಿಕವಾಗಿ ಹೆಚ್ಚಿನ ದೀರ್ಘಕಾಲೀನ ಆದಾಯದ ಸಾಮರ್ಥ್ಯ ನೀಡುತ್ತವೆಯಾದರೂ, ಅಲ್ಪಾವಧಿಯಲ್ಲಿ ಹೆಚ್ಚಿನ ಏರಿಳಿತಗಳನ್ನು ಅನುಭವಿಸುತ್ತವೆ.</p>
          <p>ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ವೃತ್ತಿಜೀವನದ ಉತ್ತರಾರ್ಧಕ್ಕೆ ಸಾಗಿ ನಿವೃತ್ತಿ ಸಮೀಪಿಸಿದಂತೆ, ಆದ್ಯತೆಗಳು ಬದಲಾಗಲು ಪ್ರಾರಂಭಿಸಬಹುದು. ಆ ಹಂತದಲ್ಲಿ, ಆಕ್ರಮಣಕಾರಿ ಬೆಳವಣಿಗೆಯ ಅನ್ವೇಷಣೆಗಿಂತ ಶೇಖರಿಸಿದ ಸಂಪತ್ತನ್ನು ರಕ್ಷಿಸುವುದು ಮತ್ತು ಹಣಕಾಸು ಸ್ಥಿರತೆಯನ್ನು ಖಾತ್ರಿಪಡಿಸಿಕೊಳ್ಳುವುದು ಹೆಚ್ಚು ಮಹತ್ವದ್ದಾಗಿ ಪರಿಣಮಿಸಬಹುದು.</p>
          <p>ಇದರಿಂದಾಗಿ ಸಾಲ ಸಾಧನಗಳು ಅಥವಾ ಆದಾಯ-ಉತ್ಪಾದಿಸುವ ಹೂಡಿಕೆಗಳಂತಹ ಹೆಚ್ಚು ಸ್ಥಿರ ಆಸ್ತಿಗಳತ್ತ ಕ್ರಮೇಣ ಹಂಚಿಕೆ ಹೆಚ್ಚಿಸಬಹುದು.</p>
          <p>ಹೀಗಾಗಿ, ವಯಸ್ಸು-ಆಧಾರಿತ ಹೂಡಿಕೆಯು ನಿಮ್ಮ ಹಣಕಾಸು ಸಮಯದ ಅವಧಿ ಬದಲಾದಂತೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಅಪಾಯವನ್ನು ಹೊಂದಿಸಿಕೊಳ್ಳಲು ನೆರವಾಗುತ್ತದೆ.</p>
          <h3>ಗುರಿ-ಆಧಾರಿತ ಹೂಡಿಕೆ</h3>
          <p>ವಯಸ್ಸು ಒಂದು ಸಾಮಾನ್ಯ ಚೌಕಟ್ಟನ್ನು ನೀಡುತ್ತದೆಯಾದರೂ, ಹೆಚ್ಚಿನ ಹೂಡಿಕೆಗಳು ಅಂತಿಮವಾಗಿ ನಿರ್ದಿಷ್ಟ ಹಣಕಾಸು ಗುರಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿರುತ್ತವೆ.</p>
          <p>ಗುರಿ-ಆಧಾರಿತ ಹೂಡಿಕೆಯು ಈ ಉದ್ದೇಶಗಳ ಸುತ್ತ ಹೂಡಿಕೆಗಳನ್ನು ರಚಿಸುವುದರ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.</p>
          <p>ಸಾಮಾನ್ಯ ಹಣಕಾಸು ಗುರಿಗಳಲ್ಲಿ ಸೇರಬಹುದು:</p>
          <ul className="pl-6">
            <li>ಮನೆ ಖರೀದಿ</li>
            <li>ಮಕ್ಕಳ ಶಿಕ್ಷಣಕ್ಕೆ ಹಣಕಾಸು ಒದಗಿಸುವುದು</li>
            <li>ನಿವೃತ್ತಿ ಯೋಜನೆ</li>
            <li>ಪ್ರಮುಖ ಜೀವನ ವೆಚ್ಚಗಳು</li>
          </ul>
          <p>ಪ್ರತಿ ಗುರಿಯೂ ತನ್ನದೇ ಆದ ಸಮಯದ ಅವಧಿ ಹೊಂದಿರುತ್ತದೆ, ಮತ್ತು ಆ ಅವಧಿಯು ಯಾವ ರೀತಿಯ ಹೂಡಿಕೆಗಳು ಸೂಕ್ತ ಎಂಬುದನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ:</p>
          <ul className="pl-6">
            <li><strong>ಅಲ್ಪಕಾಲೀನ ಗುರಿಗಳು (೧–೩ ವರ್ಷ) </strong>ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ಸ್ಥಿರ ಮತ್ತು ಸುಲಭವಾಗಿ ನಗದೀಕರಿಸಬಹುದಾದ ಹೂಡಿಕೆಗಳನ್ನು ಬಯಸುತ್ತವೆ.</li>
            <li><strong>ಮಧ್ಯಮ-ಕಾಲೀನ ಗುರಿಗಳು (೩–೭ ವರ್ಷ) </strong>ಬೆಳವಣಿಗೆ ಮತ್ತು ಸ್ಥಿರತೆಯ ಸಮತೋಲಿತ ಮಿಶ್ರಣವನ್ನು ಒಳಗೊಳ್ಳಬಹುದು.</li>
            <li><strong>ದೀರ್ಘಕಾಲೀನ ಗುರಿಗಳು (೧೦+ ವರ್ಷ) </strong>ಮಾರುಕಟ್ಟೆ ಚಕ್ರಗಳನ್ನು ನಿಭಾಯಿಸಲು ಹೆಚ್ಚಿನ ಸಮಯ ಇರುವುದರಿಂದ ಷೇರುಗಳ ಹೆಚ್ಚಿನ ಒಡ್ಡುವಿಕೆಯನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ತಡೆದುಕೊಳ್ಳಬಲ್ಲವು.</li>
          </ul>
          <h3>ಎರಡೂ ವಿಧಾನಗಳ ಸಂಯೋಜನೆ</h3>
          <p>ವಯಸ್ಸು-ಆಧಾರಿತ ಮತ್ತು ಗುರಿ-ಆಧಾರಿತ ಹೂಡಿಕೆಗಳು ಪ್ರತ್ಯೇಕವಾಗಿ ಬಳಸುವುದಕ್ಕಿಂತ ಒಟ್ಟಾಗಿ ಬಳಸಿದಾಗ ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿಯಾಗಿರುತ್ತವೆ.</p>
          <p>ವಯಸ್ಸು ನಿಮ್ಮ ಒಟ್ಟಾರೆ ಅಪಾಯ ಸಹನಶಕ್ತಿ ಮತ್ತು ಹೂಡಿಕೆ ಅವಧಿಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಆದರೆ ಗುರಿಗಳು ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ನಿರ್ದಿಷ್ಟ ಭಾಗಗಳನ್ನು ಹೇಗೆ ಹಂಚಿಕೊಳ್ಳಬೇಕು ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸಲು ನೆರವಾಗುತ್ತವೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಒಬ್ಬ ಯುವ ಹೂಡಿಕೆದಾರರು ದೀರ್ಘಕಾಲೀನ ಸಂಪತ್ತು ನಿರ್ಮಾಣಕ್ಕಾಗಿ ಬೆಳವಣಿಗೆ-ಆಧಾರಿತ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ವಹಿಸುತ್ತಲೇ, ೧ ವರ್ಷದಲ್ಲಿ ವಾಹನ ಖರೀದಿಯಂತಹ ಸಮೀಪದ ಗುರಿಗಾಗಿ ಇನ್ನೂ ಸಂಪ್ರದಾಯಸ್ಥ ಹೂಡಿಕೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು.</p>
          <p>ಈ ಎರಡು ದೃಷ್ಟಿಕೋನಗಳನ್ನು ಸಂಯೋಜಿಸುವ ಮೂಲಕ, ಹೂಡಿಕೆದಾರರು ಜೀವನದ ಹಂತಗಳು ಮತ್ತು ಹಣಕಾಸು ಆದ್ಯತೆಗಳೆರಡಕ್ಕೂ ಹೊಂದಿಕೊಳ್ಳುವ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ಮಿಸಬಹುದು — ಕಾಲಕ್ರಮೇಣ ಹೆಚ್ಚು ಸಮತೋಲಿತ ಮತ್ತು ಸುಸ್ಥಿರ ಹೂಡಿಕೆ ತಂತ್ರವನ್ನು ರೂಪಿಸಬಹುದು.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 7: Asset Allocation — The Core Driver of Returns",
      kn: "ಅಧ್ಯಾಯ ೭: ಆಸ್ತಿ ಹಂಚಿಕೆ — ಆದಾಯದ ಮೂಲ ಚಾಲಕ",
    },
    content: {
      en: (
        <>
          <p>Asset allocation refers to <strong>how your investments are distributed across different asset classes</strong>. Instead of concentrating all your capital in one type of investment, asset allocation spreads investments across multiple categories to balance growth potential and risk.</p>
          <p>Common asset classes include:</p>
          <ul className="pl-6">
            <li><strong>Equities</strong> — stocks and equity mutual funds that offer long-term growth potential</li>
            <li><strong>Debt instruments</strong> — bonds, fixed deposits and debt mutual funds that provide stability and income</li>
            <li><strong>Gold</strong> — often used as a hedge during periods of economic uncertainty or inflation</li>
            <li><strong>Real estate</strong> — property that may generate rental income and long-term capital appreciation</li>
          </ul>
          <p>Each asset class behaves differently under various economic conditions. Because of this, the way capital is allocated across these assets has a major influence on the overall performance and stability of a portfolio.</p>
          <p>In fact, many studies in portfolio management suggest that <strong>asset allocation plays a larger role in long-term returns than the selection of individual securities</strong>.</p>
          <img src="/portfolio-construction/image10.png" alt="Asset allocation overview" style={imgStyle} />

          <h3>Why Asset Allocation Matters</h3>
          <p>Different asset classes respond differently to economic environments.</p>
          <p>For example:</p>
          <ul className="pl-6">
            <li>During strong economic growth, <strong>equities</strong> often perform well as corporate earnings expand.</li>
            <li>During periods of uncertainty or declining interest rates, <strong>debt instruments</strong> may provide stability.</li>
            <li>During inflationary environments or geopolitical stress, <strong>gold</strong> may act as a store of value.</li>
          </ul>
          <p>By allocating capital across different asset classes, investors reduce the likelihood that their entire portfolio will be affected by the same economic forces.</p>

          <h3>Example of Asset Allocation</h3>
          <p>Consider two investors with ₹10 lakh available for investment.</p>
          <p><strong>Investor A</strong> invests the entire amount in equities.</p>
          <p>While this portfolio may deliver strong returns during bull markets, it may also experience significant volatility during market corrections.</p>
          <p><strong>Investor B</strong> spreads investments across multiple assets:</p>
          <ul className="pl-6">
            <li>₹5 lakh in equities</li>
            <li>₹3 lakh in debt instruments</li>
            <li>₹1 lakh in gold</li>
            <li>₹1 lakh in other investments or cash reserves</li>
          </ul>
          <p>In this case, the portfolio still participates in long-term equity growth but also includes assets that may provide stability during periods of market turbulence.</p>

          <h3>Asset Allocation Changes Over Time</h3>
          <p>Asset allocation is not static. It often evolves as an investor&apos;s life circumstances change.</p>
          <p>For example:</p>
          <ul className="pl-6">
            <li>A young professional may allocate <strong>70–80% of their portfolio to equities</strong> because they have a long investment horizon.</li>
            <li>Someone approaching retirement may gradually shift toward <strong>a larger allocation in debt instruments and income-generating assets</strong> to reduce volatility.</li>
          </ul>
          <p>This dynamic approach helps ensure that the portfolio remains aligned with both <strong>financial goals and risk tolerance</strong>.</p>

          <h3>The Objective of Asset Allocation</h3>
          <p>The primary goal of asset allocation is not simply maximizing returns. Instead, it aims to create a portfolio that balances:</p>
          <ul className="pl-6">
            <li><strong>growth potential</strong></li>
            <li><strong>risk management</strong></li>
            <li><strong>financial stability</strong></li>
          </ul>
          <p>A thoughtfully constructed asset allocation allows investors to participate in long-term wealth creation while maintaining resilience during market fluctuations.</p>
        </>
      ),
      kn: (
        <>
          <p>ಆಸ್ತಿ ಹಂಚಿಕೆ ಎಂದರೆ ನಿಮ್ಮ ಹೂಡಿಕೆಗಳನ್ನು ವಿಭಿನ್ನ ಆಸ್ತಿ ವರ್ಗಗಳಲ್ಲಿ ಹೇಗೆ ವಿತರಿಸಲಾಗಿದೆ ಎಂಬುದನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಎಲ್ಲ ಬಂಡವಾಳವನ್ನು ಒಂದೇ ರೀತಿಯ ಹೂಡಿಕೆಯಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸುವ ಬದಲು, ಆಸ್ತಿ ಹಂಚಿಕೆಯು ಬೆಳವಣಿಗೆಯ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಅಪಾಯವನ್ನು ಸಮತೋಲನಗೊಳಿಸಲು ಹಲವು ವರ್ಗಗಳಲ್ಲಿ ಹೂಡಿಕೆಗಳನ್ನು ಹರಡುತ್ತದೆ.</p>
          <p>ಸಾಮಾನ್ಯ ಆಸ್ತಿ ವರ್ಗಗಳಲ್ಲಿ ಸೇರಿವೆ:</p>
          <ul className="pl-6">
            <li><strong>ಷೇರುಗಳು</strong> — ದೀರ್ಘಕಾಲೀನ ಬೆಳವಣಿಗೆಯ ಸಾಮರ್ಥ್ಯ ನೀಡುವ ಸ್ಟಾಕ್‌ಗಳು ಮತ್ತು ಇಕ್ವಿಟಿ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</li>
            <li><strong>ಸಾಲ ಸಾಧನಗಳು</strong> — ಸ್ಥಿರತೆ ಮತ್ತು ಆದಾಯ ನೀಡುವ ಬಾಂಡ್‌ಗಳು, ಸ್ಥಿರ ಠೇವಣಿಗಳು ಮತ್ತು ಡೆಟ್ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು</li>
            <li><strong>ಚಿನ್ನ</strong> — ಆರ್ಥಿಕ ಅನಿಶ್ಚಿತತೆ ಅಥವಾ ಹಣದುಬ್ಬರದ ಸಮಯದಲ್ಲಿ ರಕ್ಷಣೆಗಾಗಿ ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸಲಾಗುವ ಆಸ್ತಿ</li>
            <li><strong>ರಿಯಲ್ ಎಸ್ಟೇಟ್</strong> — ಬಾಡಿಗೆ ಆದಾಯ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಬಂಡವಾಳ ಮೌಲ್ಯ ವೃದ್ಧಿ ಒದಗಿಸಬಲ್ಲ ಆಸ್ತಿ</li>
          </ul>
          <p>ಪ್ರತಿ ಆಸ್ತಿ ವರ್ಗವೂ ವಿವಿಧ ಆರ್ಥಿಕ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಭಿನ್ನವಾಗಿ ವರ್ತಿಸುತ್ತದೆ. ಈ ಕಾರಣದಿಂದ, ಈ ಆಸ್ತಿಗಳಲ್ಲಿ ಬಂಡವಾಳವನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ರೀತಿಯು ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಒಟ್ಟಾರೆ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಸ್ಥಿರತೆಯ ಮೇಲೆ ಮಹತ್ತರ ಪ್ರಭಾವ ಬೀರುತ್ತದೆ.</p>
          <p>ವಾಸ್ತವದಲ್ಲಿ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ವಹಣೆಯ ಅನೇಕ ಅಧ್ಯಯನಗಳು ಸೂಚಿಸುವಂತೆ, ಪ್ರತ್ಯೇಕ ಭದ್ರತೆಗಳ ಆಯ್ಕೆಗಿಂತ ಆಸ್ತಿ ಹಂಚಿಕೆಯು ದೀರ್ಘಕಾಲೀನ ಆದಾಯದ ಮೇಲೆ ಹೆಚ್ಚು ದೊಡ್ಡ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ.</p>
          <img src="/portfolio-construction/image10.png" alt="Asset allocation overview" style={imgStyle} />

          <h3>ಆಸ್ತಿ ಹಂಚಿಕೆ ಏಕೆ ಮಹತ್ವದ್ದು</h3>
          <p>ವಿಭಿನ್ನ ಆಸ್ತಿ ವರ್ಗಗಳು ಆರ್ಥಿಕ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಭಿನ್ನವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತವೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ:</p>
          <ul className="pl-6">
            <li>ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆ ಉತ್ತಮವಾಗಿರುವ ಸಮಯದಲ್ಲಿ, ಕಾರ್ಪೊರೇಟ್ ಆದಾಯ ವಿಸ್ತರಿಸುತ್ತಿದ್ದಂತೆ ಷೇರುಗಳು ಉತ್ತಮ ಸಾಧನೆ ತೋರಬಹುದು.</li>
            <li>ಅನಿಶ್ಚಿತತೆ ಅಥವಾ ಬಡ್ಡಿ ದರ ಕುಸಿತದ ಅವಧಿಯಲ್ಲಿ, ಸಾಲ ಸಾಧನಗಳು ಸ್ಥಿರತೆ ಒದಗಿಸಬಹುದು.</li>
            <li>ಹಣದುಬ್ಬರ ಅಥವಾ ಭೌಗೋಳಿಕ-ರಾಜಕೀಯ ಒತ್ತಡದ ಸಂದರ್ಭದಲ್ಲಿ, ಚಿನ್ನ ಮೌಲ್ಯ ಸಂಗ್ರಹದ ಸಾಧನವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಬಹುದು.</li>
          </ul>
          <p>ವಿಭಿನ್ನ ಆಸ್ತಿ ವರ್ಗಗಳಲ್ಲಿ ಬಂಡವಾಳ ಹಂಚಿಕೊಳ್ಳುವ ಮೂಲಕ, ಒಂದೇ ಆರ್ಥಿಕ ಶಕ್ತಿಗಳಿಂದ ಇಡೀ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಪ್ರಭಾವಿತವಾಗುವ ಸಾಧ್ಯತೆಯನ್ನು ಹೂಡಿಕೆದಾರರು ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.</p>
          <h3>ಆಸ್ತಿ ಹಂಚಿಕೆಯ ಉದಾಹರಣೆ</h3>
          <p>ಹೂಡಿಕೆಗಾಗಿ ₹೧೦ ಲಕ್ಷ ಹೊಂದಿರುವ ಇಬ್ಬರು ಹೂಡಿಕೆದಾರರನ್ನು ಪರಿಗಣಿಸಿ.</p>
          <p>ಹೂಡಿಕೆದಾರ ಎ ಇಡೀ ಮೊತ್ತವನ್ನು ಷೇರುಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತಾರೆ. ಈ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಬುಲ್ ಮಾರುಕಟ್ಟೆಯ ಸಮಯದಲ್ಲಿ ಉತ್ತಮ ಆದಾಯ ನೀಡಬಹುದಾದರೂ, ಮಾರುಕಟ್ಟೆ ತಿದ್ದುಪಡಿಗಳ ಸಮಯದಲ್ಲಿ ಗಣನೀಯ ಏರಿಳಿತಗಳನ್ನು ಅನುಭವಿಸಬಹುದು.</p>
          <p>ಹೂಡಿಕೆದಾರ ಬಿ ಹೂಡಿಕೆಯನ್ನು ಹಲವು ಆಸ್ತಿಗಳಲ್ಲಿ ಹರಡುತ್ತಾರೆ:</p>
          <ul className="pl-6">
            <li>₹೫ ಲಕ್ಷ ಷೇರುಗಳಲ್ಲಿ</li>
            <li>₹೩ ಲಕ್ಷ ಸಾಲ ಸಾಧನಗಳಲ್ಲಿ</li>
            <li>₹೧ ಲಕ್ಷ ಚಿನ್ನದಲ್ಲಿ</li>
            <li>₹೧ ಲಕ್ಷ ಇತರ ಹೂಡಿಕೆಗಳಲ್ಲಿ ಅಥವಾ ನಗದು ಮೀಸಲಿನಲ್ಲಿ</li>
          </ul>
          <p>ಈ ಸಂದರ್ಭದಲ್ಲಿ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ದೀರ್ಘಕಾಲೀನ ಷೇರು ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತಲೇ, ಮಾರುಕಟ್ಟೆ ಅಸ್ಥಿರತೆಯ ಸಮಯದಲ್ಲಿ ಸ್ಥಿರತೆ ನೀಡಬಲ್ಲ ಆಸ್ತಿಗಳನ್ನೂ ಒಳಗೊಂಡಿರುತ್ತದೆ.</p>
          <h3>ಆಸ್ತಿ ಹಂಚಿಕೆ ಕಾಲಕ್ರಮೇಣ ಬದಲಾಗುತ್ತದೆ</h3>
          <p>ಆಸ್ತಿ ಹಂಚಿಕೆ ಸ್ಥಿರವಾಗಿರುವುದಿಲ್ಲ. ಹೂಡಿಕೆದಾರರ ಜೀವನ ಪರಿಸ್ಥಿತಿಗಳು ಬದಲಾದಂತೆ ಅದು ಸಾಮಾನ್ಯವಾಗಿ ವಿಕಸನಗೊಳ್ಳುತ್ತದೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ:</p>
          <ul className="pl-6">
            <li>ಒಬ್ಬ ಯುವ ವೃತ್ತಿಪರರು ದೀರ್ಘ ಹೂಡಿಕೆ ಅವಧಿ ಹೊಂದಿರುವುದರಿಂದ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ೭೦–೮೦% ಷೇರುಗಳಲ್ಲಿ ಹಂಚಿಕೆ ಮಾಡಬಹುದು.</li>
            <li>ನಿವೃತ್ತಿ ಸಮೀಪಿಸುತ್ತಿರುವ ವ್ಯಕ್ತಿಯು ಏರಿಳಿತ ಕಡಿಮೆ ಮಾಡಲು ಕ್ರಮೇಣ ಸಾಲ ಸಾಧನಗಳು ಮತ್ತು ಆದಾಯ-ಉತ್ಪಾದಿಸುವ ಆಸ್ತಿಗಳ ಕಡೆಗೆ ಹೆಚ್ಚಿನ ಹಂಚಿಕೆ ಬದಲಾಯಿಸಬಹುದು.</li>
          </ul>
          <p>ಈ ಕ್ರಿಯಾಶೀಲ ವಿಧಾನವು ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಹಣಕಾಸು ಗುರಿಗಳು ಮತ್ತು ಅಪಾಯ ಸಹನಶಕ್ತಿ ಎರಡಕ್ಕೂ ಅನುಗುಣವಾಗಿ ಉಳಿಯುವಂತೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನೆರವಾಗುತ್ತದೆ.</p>
          <h3>ಆಸ್ತಿ ಹಂಚಿಕೆಯ ಉದ್ದೇಶ</h3>
          <p>ಆಸ್ತಿ ಹಂಚಿಕೆಯ ಪ್ರಾಥಮಿಕ ಗುರಿ ಕೇವಲ ಆದಾಯವನ್ನು ಗರಿಷ್ಠಗೊಳಿಸುವುದಲ್ಲ. ಬದಲಾಗಿ, ಇದು ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಸಮತೋಲನಗೊಳಿಸುವ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ರಚಿಸುವ ಗುರಿ ಹೊಂದಿದೆ:</p>
          <ul className="pl-6">
            <li>ಬೆಳವಣಿಗೆಯ ಸಾಮರ್ಥ್ಯ</li>
            <li>ಅಪಾಯ ನಿರ್ವಹಣೆ</li>
            <li>ಹಣಕಾಸು ಸ್ಥಿರತೆ</li>
          </ul>
          <p>ಸುಚಿಂತಿತವಾಗಿ ರಚಿಸಲಾದ ಆಸ್ತಿ ಹಂಚಿಕೆಯು ಹೂಡಿಕೆದಾರರಿಗೆ ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳ ಸಮಯದಲ್ಲಿ ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವ ಕಾಪಾಡಿಕೊಳ್ಳುತ್ತಲೇ, ದೀರ್ಘಕಾಲೀನ ಸಂಪತ್ತು ನಿರ್ಮಾಣದಲ್ಲಿ ಭಾಗವಹಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 8: Diversification — Managing Portfolio Risk",
      kn: "ಅಧ್ಯಾಯ ೮: ವೈವಿಧ್ಯೀಕರಣ — ಪೋರ್ಟ್\u200Cಫೋಲಿಯೊ ಅಪಾಯ ನಿರ್ವಹಣೆ",
    },
    content: {
      en: (
        <>
          <p>Diversification is one of the most important principles in long-term investing. It refers to <strong>spreading your investments across different assets so that no single investment has an outsized impact on your overall portfolio</strong>.</p>
          <p>Markets are inherently unpredictable. Even strong companies, industries or asset classes may go through periods of weak performance. By diversifying, investors reduce the risk that a downturn in one investment will significantly damage their overall wealth.</p>
          <p>Instead of relying on a single source of returns, diversification allows multiple investments to contribute to long-term growth.</p>

          <h3>Ways to Diversify a Portfolio</h3>
          <p>Investors can diversify their portfolios across several dimensions.</p>

          <h3>Industry Diversification</h3>
          <p>Different industries perform differently depending on economic conditions.</p>
          <p>For example:</p>
          <ul className="pl-6">
            <li>banking stocks may perform well during periods of strong credit growth</li>
            <li>technology companies may benefit from digital transformation trends</li>
            <li>consumer goods companies may provide stability during slower economic cycles</li>
          </ul>
          <p>Holding companies across multiple industries helps reduce <strong>sector-specific risk</strong>.</p>

          <h3>Asset Class Diversification</h3>
          <p>Diversification can also occur across different asset classes.</p>
          <p>For example, a portfolio might include:</p>
          <ul className="pl-6">
            <li>equities for long-term growth</li>
            <li>debt instruments for stability and predictable income</li>
            <li>gold as a hedge during uncertainty</li>
            <li>real estate as a long-term tangible asset</li>
          </ul>
          <p>Since these assets often respond differently to economic events, combining them can make a portfolio more resilient.</p>

          <h3>Geographic Diversification</h3>
          <p>Investors may also diversify across <strong>different economies or markets</strong>.</p>
          <p>For example, some investors allocate a portion of their portfolio to international equities through global funds or exchange-traded funds.</p>
          <p>This helps reduce the risk of relying entirely on the economic performance of a single country.</p>
          <img src="/portfolio-construction/image4.png" alt="Geographic diversification diagram" style={imgStyle} />

          <h3>Diversification by Investment Style</h3>
          <p>Another dimension of diversification involves mixing different types of investments such as:</p>
          <ul className="pl-6">
            <li><strong>large-cap stocks</strong>, which often provide stability and strong market leadership</li>
            <li><strong>mid-cap companies</strong>, which may offer higher growth potential</li>
            <li><strong>mutual funds or index funds</strong>, which provide diversified exposure to multiple companies</li>
            <li><strong>fixed income instruments</strong>, which provide stability during market volatility</li>
          </ul>
          <p>Each category behaves differently, helping create a more balanced portfolio.</p>

          <h3>Example of a Diversified Portfolio</h3>
          <p>Consider an investor with ₹10 lakh available for investment.</p>
          <p>Instead of investing the entire amount in a single stock, the investor might structure the portfolio as follows:</p>
          <ul className="pl-6">
            <li>₹4 lakh in diversified equity mutual funds</li>
            <li>₹2 lakh in large-cap stocks</li>
            <li>₹2 lakh in debt instruments or fixed income funds</li>
            <li>₹1 lakh in gold or gold ETFs</li>
            <li>₹1 lakh held in liquid funds or cash equivalents</li>
          </ul>
          <p>In this structure, the portfolio participates in equity growth while still maintaining assets that provide stability.</p>

          <h3>The Goal of Diversification</h3>
          <p>The purpose of diversification is not to eliminate risk entirely. All investments carry some degree of uncertainty.</p>
          <p>Instead, diversification helps <strong>manage risk by reducing concentration</strong> in any single investment, sector or asset class.</p>
          <p>A diversified portfolio allows investors to remain invested through market cycles while maintaining exposure to long-term growth opportunities.</p>
          <p>Over time, this balanced approach helps create a portfolio that is <strong>more stable, resilient and aligned with long-term wealth creation.</strong></p>
        </>
      ),
      kn: (
        <>
          <p>ವೈವಿಧ್ಯೀಕರಣವು ದೀರ್ಘಕಾಲೀನ ಹೂಡಿಕೆಯಲ್ಲಿನ ಅತ್ಯಂತ ಮಹತ್ವದ ತತ್ವಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಯಾವುದೇ ಒಂದು ಹೂಡಿಕೆಯು ನಿಮ್ಮ ಒಟ್ಟಾರೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಮೇಲೆ ಅಸಮಾನ ಪ್ರಭಾವ ಬೀರದಂತೆ, ವಿಭಿನ್ನ ಆಸ್ತಿಗಳಲ್ಲಿ ಹೂಡಿಕೆಗಳನ್ನು ಹರಡುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಇದು ಸೂಚಿಸುತ್ತದೆ.</p>
          <p>ಮಾರುಕಟ್ಟೆಗಳು ಸ್ವಭಾವತಃ ಅನಿರೀಕ್ಷಿತ. ಬಲಿಷ್ಠ ಕಂಪನಿಗಳು, ಉದ್ಯಮಗಳು ಅಥವಾ ಆಸ್ತಿ ವರ್ಗಗಳು ಸಹ ದುರ್ಬಲ ಸಾಧನೆಯ ಅವಧಿಗಳನ್ನು ಅನುಭವಿಸಬಹುದು. ವೈವಿಧ್ಯೀಕರಣದ ಮೂಲಕ, ಒಂದು ಹೂಡಿಕೆಯ ಕುಸಿತವು ನಿಮ್ಮ ಒಟ್ಟಾರೆ ಸಂಪತ್ತಿಗೆ ಗಣನೀಯ ಹಾನಿ ಮಾಡುವ ಅಪಾಯವನ್ನು ಹೂಡಿಕೆದಾರರು ಕಡಿಮೆ ಮಾಡಿಕೊಳ್ಳುತ್ತಾರೆ.</p>
          <p>ಒಂದೇ ಮೂಲದ ಆದಾಯದ ಮೇಲೆ ಅವಲಂಬಿಸುವ ಬದಲು, ವೈವಿಧ್ಯೀಕರಣವು ಅನೇಕ ಹೂಡಿಕೆಗಳು ದೀರ್ಘಕಾಲೀನ ಬೆಳವಣಿಗೆಗೆ ಕೊಡುಗೆ ನೀಡಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
          <h3>ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ವೈವಿಧ್ಯೀಕರಣದ ವಿಧಾನಗಳು</h3>
          <p>ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಹಲವು ಆಯಾಮಗಳಲ್ಲಿ ವೈವಿಧ್ಯೀಕರಿಸಬಹುದು.</p>
          <h3>ಉದ್ಯಮ ವೈವಿಧ್ಯೀಕರಣ</h3>
          <p>ವಿಭಿನ್ನ ಉದ್ಯಮಗಳು ಆರ್ಥಿಕ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಅವಲಂಬಿಸಿ ಭಿನ್ನವಾಗಿ ಸಾಧನೆ ತೋರುತ್ತವೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ:</p>
          <ul className="pl-6">
            <li>ಸಾಲ ಬೆಳವಣಿಗೆ ಉತ್ತಮವಾಗಿರುವ ಅವಧಿಯಲ್ಲಿ ಬ್ಯಾಂಕಿಂಗ್ ಷೇರುಗಳು ಉತ್ತಮ ಸಾಧನೆ ತೋರಬಹುದು</li>
            <li>ಡಿಜಿಟಲ್ ಪರಿವರ್ತನೆಯ ಪ್ರವೃತ್ತಿಗಳಿಂದ ತಂತ್ರಜ್ಞಾನ ಕಂಪನಿಗಳು ಲಾಭ ಪಡೆಯಬಹುದು</li>
            <li>ನಿಧಾನ ಆರ್ಥಿಕ ಚಕ್ರಗಳ ಸಮಯದಲ್ಲಿ ಗ್ರಾಹಕ ಸರಕು ಕಂಪನಿಗಳು ಸ್ಥಿರತೆ ಒದಗಿಸಬಹುದು</li>
          </ul>
          <p>ಅನೇಕ ಉದ್ಯಮಗಳ ಕಂಪನಿಗಳನ್ನು ಹೊಂದಿರುವುದು ಒಂದು ನಿರ್ದಿಷ್ಟ ವಲಯದ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</p>
          <h3>ಆಸ್ತಿ ವರ್ಗ ವೈವಿಧ್ಯೀಕರಣ</h3>
          <p>ವೈವಿಧ್ಯೀಕರಣವು ವಿಭಿನ್ನ ಆಸ್ತಿ ವರ್ಗಗಳಲ್ಲಿಯೂ ಸಾಧ್ಯ.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಒಂದು ಪೋರ್ಟ್‌ಫೋಲಿಯೋದಲ್ಲಿ ಸೇರಿರಬಹುದು:</p>
          <ul className="pl-6">
            <li>ದೀರ್ಘಕಾಲೀನ ಬೆಳವಣಿಗೆಗಾಗಿ ಷೇರುಗಳು</li>
            <li>ಸ್ಥಿರತೆ ಮತ್ತು ಊಹಿಸಬಹುದಾದ ಆದಾಯಕ್ಕಾಗಿ ಸಾಲ ಸಾಧನಗಳು</li>
            <li>ಅನಿಶ್ಚಿತತೆಯ ಸಮಯದಲ್ಲಿ ರಕ್ಷಣೆಗಾಗಿ ಚಿನ್ನ</li>
            <li>ದೀರ್ಘಕಾಲೀನ ಮೂರ್ತ ಆಸ್ತಿಯಾಗಿ ರಿಯಲ್ ಎಸ್ಟೇಟ್</li>
          </ul>
          <p>ಈ ಆಸ್ತಿಗಳು ಆರ್ಥಿಕ ಘಟನೆಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಭಿನ್ನವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುವುದರಿಂದ, ಅವುಗಳನ್ನು ಸಂಯೋಜಿಸುವುದು ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಹೆಚ್ಚು ಸ್ಥಿತಿಸ್ಥಾಪಕವಾಗಿಸಬಹುದು.</p>
          <h3>ಭೌಗೋಳಿಕ ವೈವಿಧ್ಯೀಕರಣ</h3>
          <p>ಹೂಡಿಕೆದಾರರು ವಿಭಿನ್ನ ಆರ್ಥಿಕ ವ್ಯವಸ್ಥೆಗಳು ಅಥವಾ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿಯೂ ವೈವಿಧ್ಯೀಕರಿಸಬಹುದು.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಕೆಲವು ಹೂಡಿಕೆದಾರರು ಜಾಗತಿಕ ಫಂಡ್‌ಗಳು ಅಥವಾ ಎಕ್ಸ್‌ಚೇಂಜ್-ಟ್ರೇಡೆಡ್ ಫಂಡ್‌ಗಳ ಮೂಲಕ ಅಂತರರಾಷ್ಟ್ರೀಯ ಷೇರುಗಳಲ್ಲಿ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಒಂದು ಭಾಗವನ್ನು ಹಂಚಿಕೆ ಮಾಡುತ್ತಾರೆ.</p>
          <p>ಒಂದೇ ದೇಶದ ಆರ್ಥಿಕ ಸಾಧನೆಯ ಮೇಲೆ ಸಂಪೂರ್ಣವಾಗಿ ಅವಲಂಬಿಸುವ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</p>
          <img src="/portfolio-construction/image4.png" alt="Geographic diversification diagram" style={imgStyle} />

          <h3>ಹೂಡಿಕೆ ಶೈಲಿಯ ಆಧಾರದ ವೈವಿಧ್ಯೀಕರಣ</h3>
          <p>ವೈವಿಧ್ಯೀಕರಣದ ಮತ್ತೊಂದು ಆಯಾಮವು ವಿಭಿನ್ನ ರೀತಿಯ ಹೂಡಿಕೆಗಳನ್ನು ಮಿಶ್ರಣ ಮಾಡುವುದನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ, ಅವುಗಳೆಂದರೆ:</p>
          <ul className="pl-6">
            <li><strong>ಲಾರ್ಜ್-ಕ್ಯಾಪ್ ಷೇರುಗಳು</strong> — ಸಾಮಾನ್ಯವಾಗಿ ಸ್ಥಿರತೆ ಮತ್ತು ಬಲಿಷ್ಠ ಮಾರುಕಟ್ಟೆ ನಾಯಕತ್ವ ಒದಗಿಸುತ್ತವೆ</li>
            <li><strong>ಮಿಡ್-ಕ್ಯಾಪ್ ಕಂಪನಿಗಳು</strong> — ಹೆಚ್ಚಿನ ಬೆಳವಣಿಗೆಯ ಸಾಮರ್ಥ್ಯ ನೀಡಬಹುದು</li>
            <li><strong>ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳು ಅಥವಾ ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು</strong> — ಅನೇಕ ಕಂಪನಿಗಳಲ್ಲಿ ವೈವಿಧ್ಯಮಯ ಒಡ್ಡುವಿಕೆ ನೀಡುತ್ತವೆ</li>
            <li><strong>ಸ್ಥಿರ ಆದಾಯ ಸಾಧನಗಳು</strong> — ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತದ ಸಮಯದಲ್ಲಿ ಸ್ಥಿರತೆ ಒದಗಿಸುತ್ತವೆ</li>
          </ul>
          <p>ಪ್ರತಿ ವರ್ಗವೂ ಭಿನ್ನವಾಗಿ ವರ್ತಿಸುತ್ತದೆ, ಇದು ಹೆಚ್ಚು ಸಮತೋಲಿತ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ರಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</p>
          <h3>ವೈವಿಧ್ಯಮಯ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಉದಾಹರಣೆ</h3>
          <p>ಹೂಡಿಕೆಗಾಗಿ ₹೧೦ ಲಕ್ಷ ಹೊಂದಿರುವ ಒಬ್ಬ ಹೂಡಿಕೆದಾರರನ್ನು ಪರಿಗಣಿಸಿ.</p>
          <p>ಇಡೀ ಮೊತ್ತವನ್ನು ಒಂದೇ ಷೇರಿನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವ ಬದಲು, ಹೂಡಿಕೆದಾರರು ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಈ ರೀತಿ ರಚಿಸಬಹುದು:</p>
          <ul className="pl-6">
            <li>₹೪ ಲಕ್ಷ ವೈವಿಧ್ಯಮಯ ಇಕ್ವಿಟಿ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>₹೨ ಲಕ್ಷ ಲಾರ್ಜ್-ಕ್ಯಾಪ್ ಷೇರುಗಳಲ್ಲಿ</li>
            <li>₹೨ ಲಕ್ಷ ಸಾಲ ಸಾಧನಗಳಲ್ಲಿ ಅಥವಾ ಸ್ಥಿರ ಆದಾಯ ಫಂಡ್‌ಗಳಲ್ಲಿ</li>
            <li>₹೧ ಲಕ್ಷ ಚಿನ್ನ ಅಥವಾ ಗೋಲ್ಡ್ ಇಟಿಎಫ್‌ಗಳಲ್ಲಿ</li>
            <li>₹೧ ಲಕ್ಷ ಲಿಕ್ವಿಡ್ ಫಂಡ್‌ಗಳಲ್ಲಿ ಅಥವಾ ನಗದು ಸಮಾನ ಸಾಧನಗಳಲ್ಲಿ</li>
          </ul>
          <p>ಈ ರಚನೆಯಲ್ಲಿ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಷೇರು ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತಲೇ, ಸ್ಥಿರತೆ ಒದಗಿಸುವ ಆಸ್ತಿಗಳನ್ನೂ ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ.</p>
          <h3>ವೈವಿಧ್ಯೀಕರಣದ ಉದ್ದೇಶ</h3>
          <p>ವೈವಿಧ್ಯೀಕರಣದ ಉದ್ದೇಶ ಅಪಾಯವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತಡೆದುಹಾಕುವುದಲ್ಲ. ಎಲ್ಲ ಹೂಡಿಕೆಗಳೂ ಒಂದು ಮಟ್ಟದ ಅನಿಶ್ಚಿತತೆಯನ್ನು ಹೊಂದಿರುತ್ತವೆ.</p>
          <p>ಬದಲಾಗಿ, ಯಾವುದೇ ಒಂದು ಹೂಡಿಕೆ, ವಲಯ ಅಥವಾ ಆಸ್ತಿ ವರ್ಗದಲ್ಲಿ ಕೇಂದ್ರೀಕರಣವನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಮೂಲಕ ವೈವಿಧ್ಯೀಕರಣವು ಅಪಾಯ ನಿರ್ವಹಣೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</p>
          <p>ವೈವಿಧ್ಯಮಯ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವು ಹೂಡಿಕೆದಾರರಿಗೆ ದೀರ್ಘಕಾಲೀನ ಬೆಳವಣಿಗೆಯ ಅವಕಾಶಗಳಲ್ಲಿ ಒಡ್ಡುವಿಕೆ ಕಾಪಾಡಿಕೊಳ್ಳುತ್ತಲೇ, ಮಾರುಕಟ್ಟೆ ಚಕ್ರಗಳ ನಡುವೆಯೂ ಹೂಡಿಕೆಯಲ್ಲಿ ಮುಂದುವರಿಯಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
          <p>ಕಾಲಕ್ರಮೇಣ, ಈ ಸಮತೋಲಿತ ವಿಧಾನವು ಹೆಚ್ಚು ಸ್ಥಿರ, ಸ್ಥಿತಿಸ್ಥಾಪಕ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಸಂಪತ್ತು ನಿರ್ಮಾಣಕ್ಕೆ ಅನುಗುಣವಾದ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ರಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 9: Position Sizing — Capital Allocation",
      kn: "ಅಧ್ಯಾಯ 9: ಪೊಸಿಷನ್ ಸೈಜಿಂಗ್ — ಬಂಡವಾಳ ಹಂಚಿಕೆ",
    },
    content: {
      en: (
        <>
          <p>Position sizing refers to <strong>how much capital you allocate to each individual investment within your portfolio</strong>. While selecting good investments is important, how much capital you commit to each position plays a major role in determining the overall stability of your portfolio.</p>
          <p>Earlier in the <strong>technical analysis module</strong>, we discussed position sizing. In this chapter, the focus shifts slightly towards <strong>portfolio balance</strong>. The goal is not simply managing the risk of a single position, but ensuring that the <strong>entire portfolio remains diversified and well structured</strong>.</p>
          <p>Position sizing helps ensure that:</p>
          <ul className="pl-6">
            <li>no single investment dominates your portfolio</li>
            <li>risks remain manageable if one investment performs poorly</li>
            <li>capital is distributed across multiple opportunities</li>
          </ul>
          <p>Without proper position sizing, even a well-diversified portfolio can become unintentionally concentrated.</p>

          <h3>Why Position Sizing Matters</h3>
          <p>Many investors focus heavily on <strong>what to buy</strong>, but give little thought to <strong>how much to buy</strong>.</p>
          <p>For example, imagine an investor who identifies five promising stocks but allocates <strong>50% of their portfolio to a single company</strong>. Even if the remaining investments perform well, poor performance in that one stock could significantly affect the overall portfolio.</p>
          <p>In contrast, allocating capital more evenly across several investments reduces the risk of any single decision having an outsized impact.</p>

          <h3>Example of Position Sizing</h3>
          <p>Consider an investor with ₹10 lakh available for equity investments.</p>
          <p>Instead of investing a large portion into one stock, the investor might structure their positions as follows:</p>
          <ul className="pl-6">
            <li>₹2 lakh in Stock A</li>
            <li>₹2 lakh in Stock B</li>
            <li>₹2 lakh in Stock C</li>
            <li>₹2 lakh in Stock D</li>
            <li>₹2 lakh in Stock E</li>
          </ul>
          <p>In this example, each position represents <strong>20% of the portfolio</strong>. Even if one investment underperforms, the remaining positions still contribute to overall portfolio performance.</p>
          <p>Alternatively, some investors prefer <strong>core (80%–90%) and satellite (10–20%) allocations</strong>, where larger positions are allocated to high-conviction investments while smaller allocations are made to exploratory opportunities.</p>

          <h3>Balancing Conviction and Risk</h3>
          <p>Position sizing is ultimately a balance between <strong>conviction and risk management</strong>.</p>
          <p>High-conviction ideas may justify larger allocations, but excessive concentration can increase portfolio volatility. On the other hand, allocating too little capital to strong investments may limit the impact of successful ideas.</p>
          <p>A disciplined approach to position sizing helps maintain a balance between these two forces.</p>

          <h3>The Role of Position Sizing in Long-Term Investing</h3>
          <p>Successful long-term investors rarely rely on a single investment to build wealth. Instead, they construct portfolios where <strong>multiple positions contribute to overall growth over time</strong>.</p>
          <p>By carefully allocating capital across investments, position sizing supports:</p>
          <ul className="pl-6">
            <li>diversification</li>
            <li>risk control</li>
            <li>portfolio stability</li>
          </ul>
          <p>When combined with thoughtful asset allocation and diversification, disciplined position sizing becomes an important component of <strong>sustainable long-term portfolio management</strong>.</p>
        </>
      ),
      kn: (
        <>
          <p>ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರ (Position Sizing) ಎಂದರೆ ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದಲ್ಲಿ ಪ್ರತಿ ಪ್ರತ್ಯೇಕ ಹೂಡಿಕೆಗೆ ನೀವು ಎಷ್ಟು ಬಂಡವಾಳವನ್ನು ಹಂಚಿಕೆ ಮಾಡುತ್ತೀರಿ ಎಂಬುದು. ಉತ್ತಮ ಹೂಡಿಕೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು ಮುಖ್ಯವಾಗಿದ್ದರೂ, ಪ್ರತಿ ಸ್ಥಾನಕ್ಕೆ ನೀವು ಎಷ್ಟು ಬಂಡವಾಳ ಬದ್ಧಗೊಳಿಸುತ್ತೀರಿ ಎಂಬುದು ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ಒಟ್ಟಾರೆ ಸ್ಥಿರತೆಯನ್ನು ನಿರ್ಧರಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ.</p>
          <p>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಘಟಕದ ಹಿಂದಿನ ಭಾಗದಲ್ಲಿ, ನಾವು ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರವನ್ನು ಚರ್ಚಿಸಿದ್ದೇವೆ. ಈ ಅಧ್ಯಾಯದಲ್ಲಿ, ಗಮನವು ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಸಮತೋಲನದ ಕಡೆಗೆ ಸ್ವಲ್ಪ ಬದಲಾಗುತ್ತದೆ. ಗುರಿಯು ಕೇವಲ ಒಂದು ಸ್ಥಾನದ ಅಪಾಯವನ್ನು ನಿರ್ವಹಿಸುವುದಲ್ಲ, ಆದರೆ ಇಡೀ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ವೈವಿಧ್ಯಮಯ ಮತ್ತು ಸುರಚಿತವಾಗಿ ಉಳಿಯುವಂತೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುವುದು.</p>
          <p>ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರ ಇವುಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನೆರವಾಗುತ್ತದೆ:</p>
          <ul className="pl-6">
            <li>ಯಾವುದೇ ಒಂದು ಹೂಡಿಕೆಯು ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸದಿರಲಿ</li>
            <li>ಒಂದು ಹೂಡಿಕೆಯು ಕಳಪೆ ಕಾರ್ಯಕ್ಷಮತೆ ತೋರಿದರೆ ಅಪಾಯಗಳು ನಿರ್ವಹಿಸಬಲ್ಲವಾಗಿ ಉಳಿಯಲಿ</li>
            <li>ಬಂಡವಾಳವು ಅನೇಕ ಅವಕಾಶಗಳಲ್ಲಿ ಹಂಚಿಕೆಯಾಗಲಿ</li>
          </ul>
          <p>ಸರಿಯಾದ ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರವಿಲ್ಲದೆ, ಉತ್ತಮ ವೈವಿಧ್ಯೀಕೃತ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಕೂಡ ಅಜಾಗರೂಕತೆಯಿಂದ ಕೇಂದ್ರೀಕೃತವಾಗಬಹುದು.</p>
          <h3>ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರ ಏಕೆ ಮುಖ್ಯ</h3>
          <p>ಅನೇಕ ಹೂಡಿಕೆದಾರರು ಏನನ್ನು ಖರೀದಿಸಬೇಕು ಎಂಬುದರ ಮೇಲೆ ಹೆಚ್ಚು ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತಾರೆ, ಆದರೆ ಎಷ್ಟು ಖರೀದಿಸಬೇಕು ಎಂಬ ಬಗ್ಗೆ ಕಡಿಮೆ ಯೋಚಿಸುತ್ತಾರೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಐದು ಭರವಸೆಯ ಷೇರುಗಳನ್ನು ಗುರುತಿಸಿದ ಆದರೆ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ೫೦% ಅನ್ನು ಒಂದೇ ಕಂಪನಿಗೆ ಹಂಚಿಕೆ ಮಾಡಿದ ಹೂಡಿಕೆದಾರರನ್ನು ಊಹಿಸಿ. ಉಳಿದ ಹೂಡಿಕೆಗಳು ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿದರೂ, ಆ ಒಂದು ಷೇರಿನ ಕಳಪೆ ಕಾರ್ಯಕ್ಷಮತೆಯು ಒಟ್ಟಾರೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಗಣನೀಯವಾಗಿ ಪ್ರಭಾವಿಸಬಹುದು.</p>
          <p>ಇದಕ್ಕೆ ವ್ಯತಿರಿಕ್ತವಾಗಿ, ಹಲವು ಹೂಡಿಕೆಗಳಲ್ಲಿ ಬಂಡವಾಳವನ್ನು ಹೆಚ್ಚು ಸಮಾನವಾಗಿ ಹಂಚಿಕೆ ಮಾಡುವುದು ಯಾವುದೇ ಒಂದು ನಿರ್ಧಾರವು ಅಸಮಾನ ಪ್ರಭಾವ ಬೀರುವ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</p>
          <h3>ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರದ ಉದಾಹರಣೆ</h3>
          <p>ಈಕ್ವಿಟಿ ಹೂಡಿಕೆಗಳಿಗಾಗಿ ₹೧೦ ಲಕ್ಷ ಲಭ್ಯವಿರುವ ಒಬ್ಬ ಹೂಡಿಕೆದಾರರನ್ನು ಪರಿಗಣಿಸಿ.</p>
          <p>ಒಂದೇ ಷೇರಿಗೆ ದೊಡ್ಡ ಭಾಗವನ್ನು ಹೂಡಿಕೆ ಮಾಡುವ ಬದಲು, ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಸ್ಥಾನಗಳನ್ನು ಹೀಗೆ ರಚಿಸಬಹುದು:</p>
          <ul className="pl-6">
            <li>ಷೇರು A ನಲ್ಲಿ ₹೨ ಲಕ್ಷ</li>
            <li>ಷೇರು B ನಲ್ಲಿ ₹೨ ಲಕ್ಷ</li>
            <li>ಷೇರು C ನಲ್ಲಿ ₹೨ ಲಕ್ಷ</li>
            <li>ಷೇರು D ನಲ್ಲಿ ₹೨ ಲಕ್ಷ</li>
            <li>ಷೇರು E ನಲ್ಲಿ ₹೨ ಲಕ್ಷ</li>
          </ul>
          <p>ಈ ಉದಾಹರಣೆಯಲ್ಲಿ, ಪ್ರತಿ ಸ್ಥಾನವು ಪೋರ್ಟ್‌ಫೋಲಿಯೋದ ೨೦% ಅನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಒಂದು ಹೂಡಿಕೆಯು ಕಳಪೆ ಕಾರ್ಯಕ್ಷಮತೆ ತೋರಿದರೂ, ಉಳಿದ ಸ್ಥಾನಗಳು ಒಟ್ಟಾರೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಕಾರ್ಯಕ್ಷಮತೆಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತ ಮುಂದುವರಿಯುತ್ತವೆ.</p>
          <p>ಪರ್ಯಾಯವಾಗಿ, ಕೆಲವು ಹೂಡಿಕೆದಾರರು ಮೂಲ (೮೦%–೯೦%) ಮತ್ತು ಉಪಗ್ರಹ (೧೦%–೨೦%) ಹಂಚಿಕೆಗಳನ್ನು ಆದ್ಯತೆ ನೀಡುತ್ತಾರೆ, ಅಲ್ಲಿ ಹೆಚ್ಚಿನ ನಂಬಿಕೆಯ ಹೂಡಿಕೆಗಳಿಗೆ ದೊಡ್ಡ ಸ್ಥಾನಗಳನ್ನು ಹಂಚಿಕೆ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ಪರಿಶೋಧನಾ ಅವಕಾಶಗಳಿಗೆ ಸಣ್ಣ ಹಂಚಿಕೆಗಳನ್ನು ಮಾಡಲಾಗುತ್ತದೆ.</p>
          <h3>ನಂಬಿಕೆ ಮತ್ತು ಅಪಾಯದ ಸಮತೋಲನ</h3>
          <p>ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರವು ಅಂತಿಮವಾಗಿ ನಂಬಿಕೆ ಮತ್ತು ಅಪಾಯ ನಿರ್ವಹಣೆಯ ನಡುವಿನ ಸಮತೋಲನ.</p>
          <p>ಹೆಚ್ಚಿನ ನಂಬಿಕೆಯ ಆಲೋಚನೆಗಳು ದೊಡ್ಡ ಹಂಚಿಕೆಗಳನ್ನು ಸಮರ್ಥಿಸಬಹುದು, ಆದರೆ ಅತಿಯಾದ ಕೇಂದ್ರೀಕರಣವು ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಚಂಚಲತೆಯನ್ನು ಹೆಚ್ಚಿಸಬಹುದು. ಮತ್ತೊಂದು ಕಡೆ, ಪ್ರಬಲ ಹೂಡಿಕೆಗಳಿಗೆ ತುಂಬಾ ಕಡಿಮೆ ಬಂಡವಾಳ ಹಂಚಿಕೆ ಮಾಡುವುದು ಯಶಸ್ವಿ ಆಲೋಚನೆಗಳ ಪ್ರಭಾವವನ್ನು ಮಿತಿಗೊಳಿಸಬಹುದು.</p>
          <p>ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರಕ್ಕೆ ಶಿಸ್ತುಬದ್ಧ ವಿಧಾನವು ಈ ಎರಡು ಶಕ್ತಿಗಳ ನಡುವೆ ಸಮತೋಲನ ಕಾಪಾಡಿಕೊಳ್ಳಲು ನೆರವಾಗುತ್ತದೆ.</p>
          <h3>ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆಯಲ್ಲಿ ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರದ ಪಾತ್ರ</h3>
          <p>ಯಶಸ್ವಿ ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರು ಅಪರೂಪವಾಗಿ ಒಂದೇ ಹೂಡಿಕೆಯ ಮೇಲೆ ಸಂಪತ್ತು ನಿರ್ಮಾಣಕ್ಕೆ ಅವಲಂಬಿಸುತ್ತಾರೆ. ಬದಲಾಗಿ, ಅನೇಕ ಸ್ಥಾನಗಳು ಕಾಲಾನಂತರದಲ್ಲಿ ಒಟ್ಟಾರೆ ಬೆಳವಣಿಗೆಗೆ ಕೊಡುಗೆ ನೀಡುವ ಪೋರ್ಟ್‌ಫೋಲಿಯೋಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಾರೆ.</p>
          <p>ಹೂಡಿಕೆಗಳಲ್ಲಿ ಬಂಡವಾಳವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಹಂಚಿಕೆ ಮಾಡುವ ಮೂಲಕ, ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರವು ಇವುಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ:</p>
          <ul className="pl-6">
            <li>ವೈವಿಧ್ಯೀಕರಣ</li>
            <li>ಅಪಾಯ ನಿಯಂತ್ರಣ</li>
            <li>ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಸ್ಥಿರತೆ</li>
          </ul>
          <p>ಸುಚಿಂತಿತ ಆಸ್ತಿ ಹಂಚಿಕೆ ಮತ್ತು ವೈವಿಧ್ಯೀಕರಣದೊಂದಿಗೆ ಸಂಯೋಜಿಸಿದಾಗ, ಶಿಸ್ತುಬದ್ಧ ಸ್ಥಾನದ ಗಾತ್ರ ನಿರ್ಧಾರವು ಸುಸ್ಥಿರ ದೀರ್ಘಾವಧಿ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ವಹಣೆಯ ಒಂದು ಮುಖ್ಯ ಅಂಶವಾಗುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 10: Portfolio Rebalancing — Maintaining Your Financial Structure",
      kn: "ಅಧ್ಯಾಯ 10: ಪೋರ್ಟ್\u200Cಫೋಲಿಯೊ ಮರು-ಸಮತೋಲನ — ನಿಮ್ಮ ಹಣಕಾಸಿನ ರಚನೆ ನಿರ್ವಹಣೆ",
    },
    content: {
      en: (
        <>
          <p>Over time, investment portfolios naturally change as different assets grow at different rates. A portfolio that was originally well balanced can gradually drift away from its intended allocation.</p>
          <p><strong>Rebalancing</strong> is the process of periodically adjusting your portfolio to restore your desired asset allocation.</p>
          <p>Without rebalancing, a portfolio may slowly become <strong>overexposed to one asset class</strong>, increasing risk beyond what the investor originally intended.</p>
          <p>For example, suppose an investor initially allocates their portfolio as follows:</p>
          <ul className="pl-6">
            <li>60% equities</li>
            <li>30% debt instruments</li>
            <li>10% gold</li>
          </ul>
          <p>If equity markets perform very strongly over several years, the portfolio might shift to:</p>
          <ul className="pl-6">
            <li>75% equities</li>
            <li>20% debt</li>
            <li>5% gold</li>
          </ul>
          <p>While this may appear beneficial during a bull market, the portfolio has now become <strong>more vulnerable to market corrections</strong>. Rebalancing helps restore the intended balance.</p>
          <img src="/portfolio-construction/image8.png" alt="Portfolio drift and rebalancing illustration" style={imgStyle} />

          <h3>Why Rebalancing Matters</h3>
          <p>Rebalancing plays an important role in maintaining long-term discipline.</p>
          <p>It helps investors:</p>
          <ul className="pl-6">
            <li>maintain their intended risk level</li>
            <li>prevent excessive concentration in one asset class</li>
            <li>systematically book profits from assets that have risen significantly</li>
            <li>reinvest capital into underweighted assets</li>
          </ul>
          <p>In many ways, rebalancing enforces the discipline of <strong>&ldquo;selling high and buying relatively lower&rdquo;</strong> without relying on market timing.</p>

          <h3>Periodic Rebalancing</h3>
          <p>The most common approach is <strong>periodic rebalancing</strong>, where investors review and adjust their portfolios at regular intervals.</p>
          <p>Typical review periods include:</p>
          <ul className="pl-6">
            <li>annually</li>
            <li>semi-annually</li>
            <li>once every two or three years</li>
          </ul>
          <p>For example, an investor may review their portfolio once a year and restore the original allocation if any asset class has deviated significantly from the target.</p>
          <p>Periodic rebalancing is simple and works well for long-term investors who prefer a structured but infrequent review process.</p>

          <h3>Systematic Rebalancing</h3>
          <p>Another approach is <strong>systematic rebalancing</strong>, where adjustments are made when allocations cross predefined thresholds rather than at fixed calendar intervals.</p>
          <p>For example, an investor may decide to rebalance whenever:</p>
          <ul className="pl-6">
            <li>equity allocation moves more than 5–10% away from the target allocation</li>
            <li>any asset class becomes disproportionately large within the portfolio</li>
          </ul>
          <p>This method ensures that rebalancing occurs <strong>only when meaningful deviations arise</strong>, rather than strictly following a time schedule.</p>

          <h3>Example of Rebalancing</h3>
          <p>Consider an investor who begins with a ₹10 lakh portfolio allocated as:</p>
          <ul className="pl-6">
            <li>₹6 lakh in equities</li>
            <li>₹3 lakh in debt</li>
            <li>₹1 lakh in gold</li>
          </ul>
          <p>After a strong equity market rally, the portfolio value grows to ₹12 lakh, with equities increasing to ₹8.5 lakh.</p>
          <p>The new allocation becomes:</p>
          <ul className="pl-6">
            <li>equities: ~71%</li>
            <li>debt: ~21%</li>
            <li>gold: ~8%</li>
          </ul>
          <p>To rebalance, the investor may reduce equity exposure slightly and reallocate funds toward debt or gold to restore the original balance.</p>

          <h3>Rebalancing and Long-Term Discipline</h3>
          <p>Rebalancing should not be confused with frequent trading. Its purpose is not to react to short-term market movements but to <strong>maintain the structure of a long-term investment strategy</strong>.</p>
          <p>Most investors only need to rebalance their portfolios <strong>occasionally</strong>, ensuring that the portfolio continues to reflect their financial goals, risk tolerance and investment horizon.</p>
          <p>Over long periods, disciplined rebalancing helps maintain stability and ensures that portfolios remain aligned with the investor&apos;s intended financial plan.</p>
        </>
      ),
      kn: (
        <>
          <p>ಕಾಲಾನಂತರದಲ್ಲಿ, ವಿಭಿನ್ನ ಆಸ್ತಿಗಳು ವಿಭಿನ್ನ ದರಗಳಲ್ಲಿ ಬೆಳೆಯುವ ಕಾರಣ ಹೂಡಿಕೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋಗಳು ಸ್ವಾಭಾವಿಕವಾಗಿ ಬದಲಾಗುತ್ತವೆ. ಮೂಲತಃ ಉತ್ತಮವಾಗಿ ಸಮತೋಲಿತವಾಗಿದ್ದ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಕ್ರಮೇಣ ತನ್ನ ಉದ್ದೇಶಿತ ಹಂಚಿಕೆಯಿಂದ ದೂರ ಸರಿಯಬಹುದು.</p>
          <p>ಮರು-ಸಮತೋಲನ (Rebalancing) ಎಂದರೆ ನಿಮ್ಮ ಬಯಸಿದ ಆಸ್ತಿ ಹಂಚಿಕೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ಆವರ್ತಿಕವಾಗಿ ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಸರಿಪಡಿಸುವ ಪ್ರಕ್ರಿಯೆ.</p>
          <p>ಮರು-ಸಮತೋಲನವಿಲ್ಲದೆ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿಧಾನವಾಗಿ ಒಂದು ಆಸ್ತಿ ವರ್ಗದ ಮೇಲೆ ಅತಿಯಾಗಿ ಒಡ್ಡಿಕೊಳ್ಳಬಹುದು, ಹೂಡಿಕೆದಾರರು ಮೂಲತಃ ಉದ್ದೇಶಿಸಿದ್ದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಅಪಾಯವನ್ನು ಹೆಚ್ಚಿಸಬಹುದು.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ಆರಂಭದಲ್ಲಿ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಈ ರೀತಿ ಹಂಚಿಕೆ ಮಾಡಿದ್ದಾರೆ ಎಂದು ಭಾವಿಸಿ:</p>
          <ul className="pl-6">
            <li>೬೦% ಈಕ್ವಿಟಿಗಳು</li>
            <li>೩೦% ಸಾಲ ಸಾಧನಗಳು (debt instruments)</li>
            <li>೧೦% ಚಿನ್ನ</li>
          </ul>
          <p>ಈಕ್ವಿಟಿ ಮಾರುಕಟ್ಟೆಗಳು ಹಲವು ವರ್ಷಗಳಲ್ಲಿ ಬಹಳ ಪ್ರಬಲವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿದರೆ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಹೀಗೆ ಬದಲಾಗಬಹುದು:</p>
          <ul className="pl-6">
            <li>೭೫% ಈಕ್ವಿಟಿಗಳು</li>
            <li>೨೦% ಸಾಲ</li>
            <li>೫% ಚಿನ್ನ</li>
          </ul>
          <p>ಬುಲ್ ಮಾರುಕಟ್ಟೆಯ ಸಮಯದಲ್ಲಿ ಇದು ಪ್ರಯೋಜನಕಾರಿಯಾಗಿ ಕಾಣಿಸಬಹುದು, ಆದರೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಈಗ ಮಾರುಕಟ್ಟೆ ತಿದ್ದುಪಡಿಗಳಿಗೆ ಹೆಚ್ಚು ದುರ್ಬಲವಾಗಿದೆ. ಮರು-ಸಮತೋಲನವು ಉದ್ದೇಶಿತ ಸಮತೋಲನವನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ನೆರವಾಗುತ್ತದೆ.</p>
          <img src="/portfolio-construction/image8.png" alt="Portfolio drift and rebalancing illustration" style={imgStyle} />
          <h3>ಮರು-ಸಮತೋಲನ ಏಕೆ ಮುಖ್ಯ</h3>
          <p>ದೀರ್ಘಾವಧಿ ಶಿಸ್ತನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವಲ್ಲಿ ಮರು-ಸಮತೋಲನವು ಮುಖ್ಯ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ.</p>
          <p>ಇದು ಹೂಡಿಕೆದಾರರಿಗೆ ನೆರವಾಗುತ್ತದೆ:</p>
          <ul className="pl-6">
            <li>ತಮ್ಮ ಉದ್ದೇಶಿತ ಅಪಾಯದ ಮಟ್ಟವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು</li>
            <li>ಒಂದು ಆಸ್ತಿ ವರ್ಗದಲ್ಲಿ ಅತಿಯಾದ ಕೇಂದ್ರೀಕರಣವನ್ನು ತಡೆಯಲು</li>
            <li>ಗಣನೀಯವಾಗಿ ಏರಿದ ಆಸ್ತಿಗಳಿಂದ ವ್ಯವಸ್ಥಿತವಾಗಿ ಲಾಭ ಪಡೆಯಲು</li>
            <li>ಕಡಿಮೆ ತೂಕದ ಆಸ್ತಿಗಳಲ್ಲಿ ಬಂಡವಾಳವನ್ನು ಮರು-ಹೂಡಿಕೆ ಮಾಡಲು</li>
          </ul>
          <p>ಹಲವು ರೀತಿಯಲ್ಲಿ, ಮರು-ಸಮತೋಲನವು ಮಾರುಕಟ್ಟೆಯ ಸಮಯವನ್ನು ಅವಲಂಬಿಸದೆ "ಹೆಚ್ಚಿನ ಬೆಲೆಯಲ್ಲಿ ಮಾರಾಟ ಮಾಡಿ ತುಲನಾತ್ಮಕವಾಗಿ ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಖರೀದಿಸಿ" ಎಂಬ ಶಿಸ್ತನ್ನು ಜಾರಿಗೊಳಿಸುತ್ತದೆ.</p>
          <h3>ಆವರ್ತಿಕ ಮರು-ಸಮತೋಲನ</h3>
          <p>ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ವಿಧಾನವೆಂದರೆ ಆವರ್ತಿಕ ಮರು-ಸಮತೋಲನ, ಅಲ್ಲಿ ಹೂಡಿಕೆದಾರರು ನಿಯಮಿತ ಅಂತರಗಳಲ್ಲಿ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಪರಿಶೀಲಿಸಿ ಸರಿಪಡಿಸುತ್ತಾರೆ.</p>
          <p>ವಿಶಿಷ್ಟ ಪರಿಶೀಲನಾ ಅವಧಿಗಳು ಸೇರಿವೆ:</p>
          <ul className="pl-6">
            <li>ವಾರ್ಷಿಕವಾಗಿ</li>
            <li>ಅರ್ಧ-ವಾರ್ಷಿಕವಾಗಿ</li>
            <li>ಪ್ರತಿ ಎರಡು ಅಥವಾ ಮೂರು ವರ್ಷಗಳಿಗೊಮ್ಮೆ</li>
          </ul>
          <p>ಉದಾಹರಣೆಗೆ, ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ವರ್ಷಕ್ಕೊಮ್ಮೆ ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಪರಿಶೀಲಿಸಿ ಯಾವುದಾದರೂ ಆಸ್ತಿ ವರ್ಗವು ಗುರಿಯಿಂದ ಗಣನೀಯವಾಗಿ ವಿಚಲನಗೊಂಡಿದ್ದರೆ ಮೂಲ ಹಂಚಿಕೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸಬಹುದು.</p>
          <p>ಆವರ್ತಿಕ ಮರು-ಸಮತೋಲನವು ಸರಳ ಮತ್ತು ರಚನಾತ್ಮಕ ಆದರೆ ಆಗಾಗ್ಗೆ ಅಲ್ಲದ ಪರಿಶೀಲನಾ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಬಯಸುವ ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.</p>
          <h3>ವ್ಯವಸ್ಥಿತ ಮರು-ಸಮತೋಲನ</h3>
          <p>ಮತ್ತೊಂದು ವಿಧಾನವೆಂದರೆ ವ್ಯವಸ್ಥಿತ ಮರು-ಸಮತೋಲನ, ಅಲ್ಲಿ ಸ್ಥಿರ ಕ್ಯಾಲೆಂಡರ್ ಅಂತರಗಳ ಬದಲು ಹಂಚಿಕೆಗಳು ಪೂರ್ವ-ನಿರ್ಧರಿತ ಮಿತಿಗಳನ್ನು ದಾಟಿದಾಗ ಸರಿಪಡಿಸುವಿಕೆಗಳನ್ನು ಮಾಡಲಾಗುತ್ತದೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ಈ ಸಂದರ್ಭಗಳಲ್ಲಿ ಮರು-ಸಮತೋಲನ ಮಾಡಲು ನಿರ್ಧರಿಸಬಹುದು:</p>
          <ul className="pl-6">
            <li>ಈಕ್ವಿಟಿ ಹಂಚಿಕೆಯು ಗುರಿ ಹಂಚಿಕೆಯಿಂದ ೫–೧೦% ಕ್ಕಿಂತ ಹೆಚ್ಚು ದೂರ ಸರಿದಾಗ</li>
            <li>ಯಾವುದಾದರೂ ಆಸ್ತಿ ವರ್ಗವು ಪೋರ್ಟ್‌ಫೋಲಿಯೋದಲ್ಲಿ ಅಸಮಾನವಾಗಿ ದೊಡ್ಡದಾದಾಗ</li>
          </ul>
          <p>ಈ ವಿಧಾನವು ಕೇವಲ ಸಮಯ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಅನುಸರಿಸುವ ಬದಲು ಅರ್ಥಪೂರ್ಣ ವಿಚಲನಗಳು ಉದ್ಭವಿಸಿದಾಗ ಮಾತ್ರ ಮರು-ಸಮತೋಲನ ಸಂಭವಿಸುವಂತೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುತ್ತದೆ.</p>
          <h3>ಮರು-ಸಮತೋಲನದ ಉದಾಹರಣೆ</h3>
          <p>₹೧೦ ಲಕ್ಷ ಪೋರ್ಟ್‌ಫೋಲಿಯೋದಿಂದ ಆರಂಭಿಸುವ ಒಬ್ಬ ಹೂಡಿಕೆದಾರರನ್ನು ಪರಿಗಣಿಸಿ:</p>
          <ul className="pl-6">
            <li>ಈಕ್ವಿಟಿಗಳಲ್ಲಿ ₹೬ ಲಕ್ಷ</li>
            <li>ಸಾಲದಲ್ಲಿ ₹೩ ಲಕ್ಷ</li>
            <li>ಚಿನ್ನದಲ್ಲಿ ₹೧ ಲಕ್ಷ</li>
          </ul>
          <p>ಪ್ರಬಲ ಈಕ್ವಿಟಿ ಮಾರುಕಟ್ಟೆ ಏರಿಕೆಯ ನಂತರ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಮೌಲ್ಯವು ₹೧೨ ಲಕ್ಷಕ್ಕೆ ಬೆಳೆಯುತ್ತದೆ, ಈಕ್ವಿಟಿಗಳು ₹೮.೫ ಲಕ್ಷಕ್ಕೆ ಹೆಚ್ಚಾಗುತ್ತವೆ.</p>
          <p>ಹೊಸ ಹಂಚಿಕೆ ಇಂತಾಗುತ್ತದೆ:</p>
          <ul className="pl-6">
            <li>ಈಕ್ವಿಟಿಗಳು: ~೭೧%</li>
            <li>ಸಾಲ: ~೨೧%</li>
            <li>ಚಿನ್ನ: ~೮%</li>
          </ul>
          <p>ಮರು-ಸಮತೋಲನಕ್ಕಾಗಿ, ಹೂಡಿಕೆದಾರರು ಈಕ್ವಿಟಿ ಒಡ್ಡಿಕೆಯನ್ನು ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ ಮೂಲ ಸಮತೋಲನ ಮರುಸ್ಥಾಪಿಸಲು ಸಾಲ ಅಥವಾ ಚಿನ್ನದ ಕಡೆಗೆ ಹಣವನ್ನು ಮರು-ಹಂಚಿಕೆ ಮಾಡಬಹುದು.</p>
          <h3>ಮರು-ಸಮತೋಲನ ಮತ್ತು ದೀರ್ಘಾವಧಿ ಶಿಸ್ತು</h3>
          <p>ಮರು-ಸಮತೋಲನವನ್ನು ಆಗಾಗ್ಗೆ ವ್ಯಾಪಾರದೊಂದಿಗೆ ಗೊಂದಲಗೊಳಿಸಬಾರದು. ಅದರ ಉದ್ದೇಶವು ಅಲ್ಪಾವಧಿ ಮಾರುಕಟ್ಟೆ ಚಲನೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುವುದಲ್ಲ, ಆದರೆ ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆ ತಂತ್ರದ ರಚನೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವುದು.</p>
          <p>ಹೆಚ್ಚಿನ ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಆಗಾಗ್ಗೆ ಮಾತ್ರ ಮರು-ಸಮತೋಲನ ಮಾಡಬೇಕಾಗುತ್ತದೆ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ತಮ್ಮ ಹಣಕಾಸು ಗುರಿಗಳು, ಅಪಾಯ ಸಹಿಷ್ಣುತೆ ಮತ್ತು ಹೂಡಿಕೆ ದಿಗಂತವನ್ನು ಮತ್ತಷ್ಟು ಪ್ರತಿಬಿಂಬಿಸುವಂತೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುತ್ತದೆ.</p>
          <p>ದೀರ್ಘ ಅವಧಿಗಳಲ್ಲಿ, ಶಿಸ್ತುಬದ್ಧ ಮರು-ಸಮತೋಲನವು ಸ್ಥಿರತೆಯನ್ನು ಕಾಪಾಡಲು ಮತ್ತು ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಹೂಡಿಕೆದಾರರ ಉದ್ದೇಶಿತ ಹಣಕಾಸು ಯೋಜನೆಯೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗಿ ಉಳಿಯುವಂತೆ ಖಚಿತಪಡಿಸಲು ನೆರವಾಗುತ್ತದೆ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 11: Lump Sum vs SIP Investing",
      kn: "ಅಧ್ಯಾಯ 11: ಏಕ ಮೊತ್ತ ಮತ್ತು SIP ಹೂಡಿಕೆ",
    },
    content: {
      en: (
        <>
          <p>When it comes to investing, many investors face a common question:</p>
          <p><strong>Should I invest all my money at once or should I invest gradually over time?</strong></p>
          <p>These two approaches are known as <strong>lump sum investing</strong> and <strong>Systematic Investment Plan (SIP) investing</strong>. Both methods can be effective, but the appropriate approach often depends on your financial situation, income patterns and comfort with market volatility.</p>
          <img src="/portfolio-construction/image2.png" alt="Lump sum vs SIP investing comparison" style={imgStyle} />

          <h3>Lump Sum Investing</h3>
          <p>Lump sum investing involves <strong>deploying a large amount of capital into investments at one time</strong>.</p>
          <p>This approach is commonly used when investors receive a significant amount of money, such as:</p>
          <ul className="pl-6">
            <li>annual bonuses</li>
            <li>inheritance</li>
            <li>proceeds from the sale of an asset</li>
            <li>accumulated savings</li>
          </ul>

          <h3>Advantages of Lump Sum Investing</h3>
          <p>One key advantage of lump sum investing is <strong>immediate market exposure</strong>. If markets rise after the investment is made, the entire capital benefits from the upward movement.</p>
          <p>For example, if an investor invests ₹10 lakh into equity funds and the market grows over the next several years, the full investment participates in that growth from the beginning.</p>
          <p>Because markets historically tend to rise over long periods, lump sum investing can sometimes result in <strong>higher long-term returns</strong> when investments are made during favorable market conditions.</p>

          <h3>Challenges of Lump Sum Investing</h3>
          <p>However, lump sum investing also carries <strong>timing risk</strong>.</p>
          <p>If markets decline shortly after investing, the portfolio may experience short-term losses. Even though long-term investors may eventually recover these losses, the initial volatility can create emotional discomfort.</p>
          <p>For many investors, seeing a large investment decline soon after deployment can lead to <strong>second-guessing or premature decisions</strong>.</p>

          <h3>SIP Investing</h3>
          <p>A Systematic Investment Plan (SIP) involves <strong>investing a fixed amount of money at regular intervals</strong>, typically monthly.</p>
          <p>This method is commonly used for mutual funds and works well for investors who invest from <strong>regular income such as salaries</strong>.</p>

          <h3>Advantages of SIP Investing</h3>
          <p>One of the biggest advantages of SIPs is <strong>discipline</strong>. Because investments are made regularly, investors develop a consistent habit of saving and investing.</p>
          <p>SIPs also benefit from <strong>rupee-cost averaging</strong>. When markets decline, the same investment amount buys more units and when markets rise, fewer units are purchased. Over time, this helps average out the purchase price.</p>
          <p>Another benefit of SIPs is that they <strong>reduce the pressure of market timing</strong>. Instead of worrying about the perfect entry point, investors continue investing steadily through different market conditions.</p>

          <h3>When Each Approach Works Best</h3>
          <p>Both approaches have their place in a well-structured investment strategy.</p>
          <p>Lump sum investing may be suitable when:</p>
          <ul className="pl-6">
            <li>a large amount of capital becomes available</li>
            <li>the investor has a long investment horizon</li>
            <li>the investor is comfortable with short-term volatility</li>
          </ul>
          <p>SIP investing may be more suitable when:</p>
          <ul className="pl-6">
            <li>investments are made from monthly income</li>
            <li>investors prefer gradual capital deployment</li>
            <li>reducing timing risk is a priority</li>
          </ul>

          <h3>Combining Both Approaches</h3>
          <p>In practice, many investors combine both strategies.</p>
          <p>For example:</p>
          <ul className="pl-6">
            <li>regular monthly investments may be made through SIPs</li>
            <li>additional lump sum investments may be deployed during market corrections or when surplus capital becomes available</li>
          </ul>
          <p>This blended approach allows investors to benefit from both <strong>consistent investing discipline and opportunistic capital deployment</strong>.</p>

          <h3>Final Thought</h3>
          <p>The choice between lump sum and SIP investing is not about finding a universally superior method. Instead, it is about selecting an approach that aligns with <strong>your financial circumstances, income patterns and psychological comfort with market fluctuations</strong>.</p>
          <p>Ultimately, the most important factor is not the exact timing of each investment, but <strong>maintaining consistency and remaining invested over the long term</strong>.</p>
        </>
      ),
      kn: (
        <>
          <p>ಹೂಡಿಕೆಯ ವಿಷಯದಲ್ಲಿ, ಅನೇಕ ಹೂಡಿಕೆದಾರರು ಒಂದು ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಯನ್ನು ಎದುರಿಸುತ್ತಾರೆ:</p>
          <p>ನಾನು ನನ್ನ ಎಲ್ಲಾ ಹಣವನ್ನು ಒಂದೇ ಬಾರಿ ಹೂಡಿಕೆ ಮಾಡಬೇಕೇ ಅಥವಾ ಕಾಲಾನಂತರದಲ್ಲಿ ಕ್ರಮೇಣವಾಗಿ ಹೂಡಿಕೆ ಮಾಡಬೇಕೇ?</p>
          <p>ಈ ಎರಡು ವಿಧಾನಗಳನ್ನು ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆ (Lump Sum Investing) ಮತ್ತು ವ್ಯವಸ್ಥಿತ ಹೂಡಿಕೆ ಯೋಜನೆ (Systematic Investment Plan — SIP) ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಎರಡೂ ವಿಧಾನಗಳು ಪರಿಣಾಮಕಾರಿಯಾಗಿರಬಹುದು, ಆದರೆ ಸೂಕ್ತ ವಿಧಾನವು ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ಹಣಕಾಸಿನ ಪರಿಸ್ಥಿತಿ, ಆದಾಯದ ಮಾದರಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಚಂಚಲತೆಯೊಂದಿಗಿನ ನಿಮ್ಮ ಸೌಕರ್ಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.</p>
          <img src="/portfolio-construction/image2.png" alt="Lump sum vs SIP investing comparison" style={imgStyle} />
          <h3>ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆ</h3>
          <p>ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಯು ಒಂದೇ ಬಾರಿ ದೊಡ್ಡ ಮೊತ್ತದ ಬಂಡವಾಳವನ್ನು ಹೂಡಿಕೆಗಳಲ್ಲಿ ನಿಯೋಜಿಸುವುದನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.</p>
          <p>ಈ ವಿಧಾನವನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಹೂಡಿಕೆದಾರರು ಗಣನೀಯ ಮೊತ್ತದ ಹಣವನ್ನು ಸ್ವೀಕರಿಸಿದಾಗ ಬಳಸಲಾಗುತ್ತದೆ, ಉದಾಹರಣೆಗೆ:</p>
          <ul className="pl-6">
            <li>ವಾರ್ಷಿಕ ಬೋನಸ್</li>
            <li>ಆಸ್ತಿ ಉತ್ತರಾಧಿಕಾರ</li>
            <li>ಆಸ್ತಿ ಮಾರಾಟದ ಆದಾಯ</li>
            <li>ಸಂಗ್ರಹಿಸಿದ ಉಳಿತಾಯ</li>
          </ul>
          <h3>ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಯ ಅನುಕೂಲಗಳು</h3>
          <p>ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಯ ಒಂದು ಪ್ರಮುಖ ಅನುಕೂಲವೆಂದರೆ ತಕ್ಷಣದ ಮಾರುಕಟ್ಟೆ ಒಡ್ಡಿಕೆ. ಹೂಡಿಕೆ ಮಾಡಿದ ನಂತರ ಮಾರುಕಟ್ಟೆಗಳು ಏರಿದರೆ, ಸಂಪೂರ್ಣ ಬಂಡವಾಳವು ಆ ಊರ್ಧ್ವ ಚಲನೆಯಿಂದ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತದೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಒಬ್ಬ ಹೂಡಿಕೆದಾರರು ಈಕ್ವಿಟಿ ಫಂಡ್‌ಗಳಲ್ಲಿ ₹೧೦ ಲಕ್ಷ ಹೂಡಿಕೆ ಮಾಡಿ ಮುಂದಿನ ಹಲವು ವರ್ಷಗಳಲ್ಲಿ ಮಾರುಕಟ್ಟೆ ಬೆಳೆದರೆ, ಸಂಪೂರ್ಣ ಹೂಡಿಕೆಯು ಆರಂಭದಿಂದಲೇ ಆ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತದೆ.</p>
          <p>ಮಾರುಕಟ್ಟೆಗಳು ಐತಿಹಾಸಿಕವಾಗಿ ದೀರ್ಘ ಅವಧಿಗಳಲ್ಲಿ ಏರುವ ಪ್ರವೃತ್ತಿ ಹೊಂದಿರುವ ಕಾರಣ, ಅನುಕೂಲಕರ ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿದಾಗ ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಯು ಕೆಲವೊಮ್ಮೆ ಹೆಚ್ಚಿನ ದೀರ್ಘಾವಧಿ ಆದಾಯಕ್ಕೆ ದಾರಿ ಮಾಡಬಹುದು.</p>
          <h3>ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಯ ಸವಾಲುಗಳು</h3>
          <p>ಆದಾಗ್ಯೂ, ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಯು ಸಮಯದ ಅಪಾಯವನ್ನೂ ಹೊಂದಿರುತ್ತದೆ.</p>
          <p>ಹೂಡಿಕೆ ಮಾಡಿದ ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮಾರುಕಟ್ಟೆಗಳು ಕುಸಿದರೆ, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಅಲ್ಪಾವಧಿ ನಷ್ಟವನ್ನು ಅನುಭವಿಸಬಹುದು. ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರು ಅಂತಿಮವಾಗಿ ಈ ನಷ್ಟಗಳನ್ನು ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದಾದರೂ, ಆರಂಭಿಕ ಚಂಚಲತೆಯು ಭಾವನಾತ್ಮಕ ಅಸ್ವಸ್ಥತೆಯನ್ನು ಉಂಟುಮಾಡಬಹುದು.</p>
          <p>ಅನೇಕ ಹೂಡಿಕೆದಾರರಿಗೆ, ನಿಯೋಜನೆಯ ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ದೊಡ್ಡ ಹೂಡಿಕೆಯು ಕುಸಿಯುವುದನ್ನು ನೋಡುವುದು ಅನುಮಾನ ಅಥವಾ ಅಕಾಲ ನಿರ್ಧಾರಗಳಿಗೆ ದಾರಿ ಮಾಡಬಹುದು.</p>
          <h3>SIP ಹೂಡಿಕೆ</h3>
          <p>ವ್ಯವಸ್ಥಿತ ಹೂಡಿಕೆ ಯೋಜನೆ (SIP) ಸಾಮಾನ್ಯವಾಗಿ ಮಾಸಿಕ ನಿಯಮಿತ ಅಂತರಗಳಲ್ಲಿ ನಿಗದಿತ ಮೊತ್ತವನ್ನು ಹೂಡಿಕೆ ಮಾಡುವುದನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.</p>
          <p>ಈ ವಿಧಾನವನ್ನು ಮ್ಯೂಚುಯಲ್ ಫಂಡ್‌ಗಳಿಗಾಗಿ ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ ಮತ್ತು ವೇತನದಂತಹ ನಿಯಮಿತ ಆದಾಯದಿಂದ ಹೂಡಿಕೆ ಮಾಡುವ ಹೂಡಿಕೆದಾರರಿಗೆ ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.</p>
          <h3>SIP ಹೂಡಿಕೆಯ ಅನುಕೂಲಗಳು</h3>
          <p>SIP ಗಳ ಅತಿ ದೊಡ್ಡ ಅನುಕೂಲಗಳಲ್ಲಿ ಒಂದೆಂದರೆ ಶಿಸ್ತು. ಹೂಡಿಕೆಗಳು ನಿಯಮಿತವಾಗಿ ಮಾಡಲ್ಪಡುವ ಕಾರಣ, ಹೂಡಿಕೆದಾರರು ಉಳಿತಾಯ ಮತ್ತು ಹೂಡಿಕೆಯ ಸ್ಥಿರ ಅಭ್ಯಾಸವನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳುತ್ತಾರೆ.</p>
          <p>SIP ಗಳು ರೂಪಾಯಿ-ವೆಚ್ಚ ಸರಾಸರಿ (rupee-cost averaging) ಯಿಂದಲೂ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತವೆ. ಮಾರುಕಟ್ಟೆಗಳು ಕುಸಿದಾಗ, ಅದೇ ಹೂಡಿಕೆ ಮೊತ್ತಕ್ಕೆ ಹೆಚ್ಚು ಯೂನಿಟ್‌ಗಳನ್ನು ಖರೀದಿಸಬಹುದು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗಳು ಏರಿದಾಗ, ಕಡಿಮೆ ಯೂನಿಟ್‌ಗಳನ್ನು ಖರೀದಿಸಲಾಗುತ್ತದೆ. ಕಾಲಾನಂತರದಲ್ಲಿ, ಇದು ಖರೀದಿ ಬೆಲೆಯನ್ನು ಸರಾಸರಿಗೊಳಿಸಲು ನೆರವಾಗುತ್ತದೆ.</p>
          <p>SIP ಗಳ ಮತ್ತೊಂದು ಪ್ರಯೋಜನವೆಂದರೆ ಅವು ಮಾರುಕಟ್ಟೆಯ ಸಮಯ ನಿರ್ಧಾರದ ಒತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ. ಪರಿಪೂರ್ಣ ಪ್ರವೇಶ ಬಿಂದುವಿನ ಬಗ್ಗೆ ಚಿಂತಿಸುವ ಬದಲು, ಹೂಡಿಕೆದಾರರು ವಿಭಿನ್ನ ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳ ಮೂಲಕ ಸ್ಥಿರವಾಗಿ ಹೂಡಿಕೆ ಮುಂದುವರಿಸುತ್ತಾರೆ.</p>
          <h3>ಪ್ರತಿ ವಿಧಾನವು ಯಾವಾಗ ಅತ್ಯುತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ</h3>
          <p>ಎರಡೂ ವಿಧಾನಗಳು ಸುರಚಿತ ಹೂಡಿಕೆ ತಂತ್ರದಲ್ಲಿ ತಮ್ಮ ಸ್ಥಾನ ಹೊಂದಿವೆ.</p>
          <p>ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಯು ಈ ಸಂದರ್ಭಗಳಲ್ಲಿ ಸೂಕ್ತವಾಗಿರಬಹುದು:</p>
          <ul className="pl-6">
            <li>ದೊಡ್ಡ ಮೊತ್ತದ ಬಂಡವಾಳ ಲಭ್ಯವಾದಾಗ</li>
            <li>ಹೂಡಿಕೆದಾರರು ದೀರ್ಘ ಹೂಡಿಕೆ ದಿಗಂತ ಹೊಂದಿರುವಾಗ</li>
            <li>ಹೂಡಿಕೆದಾರರು ಅಲ್ಪಾವಧಿ ಚಂಚಲತೆಯೊಂದಿಗೆ ಸೌಕರ್ಯದಿಂದಿರುವಾಗ</li>
          </ul>
          <p>SIP ಹೂಡಿಕೆಯು ಈ ಸಂದರ್ಭಗಳಲ್ಲಿ ಹೆಚ್ಚು ಸೂಕ್ತವಾಗಿರಬಹುದು:</p>
          <ul className="pl-6">
            <li>ಮಾಸಿಕ ಆದಾಯದಿಂದ ಹೂಡಿಕೆ ಮಾಡಲಾಗುತ್ತಿರುವಾಗ</li>
            <li>ಹೂಡಿಕೆದಾರರು ಕ್ರಮೇಣ ಬಂಡವಾಳ ನಿಯೋಜನೆಯನ್ನು ಬಯಸುವಾಗ</li>
            <li>ಸಮಯದ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು ಆದ್ಯತೆಯಾಗಿರುವಾಗ</li>
          </ul>
          <h3>ಎರಡೂ ವಿಧಾನಗಳ ಸಂಯೋಜನೆ</h3>
          <p>ಪ್ರಾಯೋಗಿಕವಾಗಿ, ಅನೇಕ ಹೂಡಿಕೆದಾರರು ಎರಡೂ ತಂತ್ರಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತಾರೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ:</p>
          <ul className="pl-6">
            <li>SIP ಗಳ ಮೂಲಕ ನಿಯಮಿತ ಮಾಸಿಕ ಹೂಡಿಕೆಗಳನ್ನು ಮಾಡಬಹುದು</li>
            <li>ಮಾರುಕಟ್ಟೆ ತಿದ್ದುಪಡಿಗಳ ಸಮಯದಲ್ಲಿ ಅಥವಾ ಹೆಚ್ಚುವರಿ ಬಂಡವಾಳ ಲಭ್ಯವಾದಾಗ ಹೆಚ್ಚುವರಿ ಒಟ್ಟು ಮೊತ್ತ ಹೂಡಿಕೆಗಳನ್ನು ನಿಯೋಜಿಸಬಹುದು</li>
          </ul>
          <p>ಈ ಮಿಶ್ರ ವಿಧಾನವು ಹೂಡಿಕೆದಾರರಿಗೆ ಸ್ಥಿರ ಹೂಡಿಕೆ ಶಿಸ್ತು ಮತ್ತು ಅವಕಾಶವಾದಿ ಬಂಡವಾಳ ನಿಯೋಜನೆ ಎರಡರಿಂದಲೂ ಪ್ರಯೋಜನ ಪಡೆಯಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
          <h3>ಅಂತಿಮ ಚಿಂತನೆ</h3>
          <p>ಒಟ್ಟು ಮೊತ್ತ ಮತ್ತು SIP ಹೂಡಿಕೆಯ ನಡುವಿನ ಆಯ್ಕೆಯು ಸಾರ್ವತ್ರಿಕವಾಗಿ ಉತ್ತಮ ವಿಧಾನವನ್ನು ಕಂಡುಹಿಡಿಯುವ ಬಗ್ಗೆ ಅಲ್ಲ. ಬದಲಾಗಿ, ನಿಮ್ಮ ಹಣಕಾಸಿನ ಸಂದರ್ಭ, ಆದಾಯದ ಮಾದರಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳೊಂದಿಗಿನ ಮಾನಸಿಕ ಸೌಕರ್ಯಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ವಿಧಾನವನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಬಗ್ಗೆ.</p>
          <p>ಅಂತಿಮವಾಗಿ, ಪ್ರತಿ ಹೂಡಿಕೆಯ ನಿಖರ ಸಮಯವಲ್ಲ, ಆದರೆ ಸ್ಥಿರತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಮತ್ತು ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ಹೂಡಿಕೆಯಲ್ಲಿ ಉಳಿಯುವುದೇ ಅತ್ಯಂತ ಮುಖ್ಯ ಅಂಶ.</p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Chapter 12: Behavioral Finance — The Psychology of Investing",
      kn: "ಅಧ್ಯಾಯ 12: ವರ್ತನಾ ಹಣಕಾಸು — ಹೂಡಿಕೆಯ ಮನೋವಿಜ್ಞಾನ",
    },
    content: {
      en: (
        <>
          <p>One of the most underestimated challenges in investing is <strong>human behavior</strong>.</p>
          <p>Markets are influenced not only by economic data and company performance, but also by the <strong>collective emotions and decisions of millions of investors</strong>. Even individuals who understand financial concepts well can make poor investment decisions when emotions take over.</p>
          <p>Behavioral finance studies how psychological biases influence financial decision-making. Recognizing these biases can help investors remain disciplined and avoid common mistakes that damage long-term returns.</p>
          <img src="/portfolio-construction/image3.png" alt="Behavioral finance and psychological biases" style={imgStyle} />

          <h3>Fear and Panic</h3>
          <p>During periods of market decline, fear can cause investors to react impulsively.</p>
          <p>When portfolio values fall sharply, some investors sell their investments simply to avoid further losses. Unfortunately, this often results in <strong>locking in losses during market downturns</strong>, just before markets eventually recover.</p>
          <p>History shows that markets move in cycles and temporary declines are a normal part of long-term investing. Investors who allow fear to dictate their decisions may miss the eventual recovery and long-term growth that follows.</p>

          <h3>Greed and Overconfidence</h3>
          <p>The opposite emotional extreme occurs during strong bull markets.</p>
          <p>When markets rise rapidly, investors may begin to feel overconfident in their investment abilities. This can lead to excessive risk-taking, speculative investments or the belief that markets will continue rising indefinitely.</p>
          <p>Greed can cause investors to abandon disciplined strategies and chase assets that have already experienced large price increases.</p>

          <h3>Recency Bias</h3>
          <p>Recency bias occurs when investors place too much importance on <strong>recent market performance</strong>.</p>
          <p>For example, if a particular sector or stock has performed strongly over the past few months, investors may assume that the trend will continue indefinitely. Similarly, after a market decline, investors may believe that markets will continue falling.</p>
          <p>This bias can lead investors to make decisions based on short-term trends rather than long-term fundamentals.</p>

          <h3>Loss Aversion</h3>
          <p>Loss aversion refers to the psychological tendency to <strong>feel losses more intensely than gains</strong>.</p>
          <p>For many people, the pain of losing ₹10,000 feels stronger than the satisfaction of gaining the same amount. This emotional imbalance can lead investors to hold losing investments for too long in the hope of recovering losses or avoid necessary investment decisions due to fear of potential losses.</p>
          <p>Loss aversion often prevents investors from making rational decisions based on long-term prospects.</p>

          <h3>Why Behavioral Awareness Matters</h3>
          <p>Understanding these biases does not eliminate them entirely, but it allows investors to <strong>recognize emotional reactions before acting on them</strong>.</p>
          <p>Disciplined investors often rely on structured processes such as:</p>
          <ul className="pl-6">
            <li>predetermined asset allocation</li>
            <li>systematic investing</li>
            <li>long-term investment horizons</li>
            <li>diversified portfolios</li>
          </ul>
          <p>These frameworks help reduce the influence of emotional decision-making during volatile market conditions.</p>

          <h3>Final Thought: Building a Personal Wealth System</h3>
          <p>Successful investing is not only about identifying good stocks or selecting the right funds. It is about creating a <strong>complete financial system</strong> that supports long-term wealth creation.</p>
          <p>A well-structured financial system typically includes:</p>
          <ul className="pl-6">
            <li>stable and positive cash flow</li>
            <li>an adequate emergency fund</li>
            <li>diversified investments across asset classes</li>
            <li>disciplined capital allocation</li>
            <li>emotional control during market cycles</li>
          </ul>
          <p>When these elements work together, investors can remain focused on their long-term financial goals rather than reacting to short-term market fluctuations.</p>
          <p>Over time, it is this <strong>combination of structure, discipline and patience</strong> that allows investors to benefit fully from the power of compounding.</p>
        </>
      ),
      kn: (
        <>
          <p>ಹೂಡಿಕೆಯಲ್ಲಿ ಅತ್ಯಂತ ಕಡಿಮೆ ಅಂದಾಜು ಮಾಡಲಾಗುವ ಸವಾಲುಗಳಲ್ಲಿ ಒಂದೆಂದರೆ ಮಾನವ ನಡವಳಿಕೆ.</p>
          <p>ಮಾರುಕಟ್ಟೆಗಳು ಕೇವಲ ಆರ್ಥಿಕ ಮಾಹಿತಿ ಮತ್ತು ಕಂಪನಿಯ ಕಾರ್ಯಕ್ಷಮತೆಯಿಂದ ಮಾತ್ರವಲ್ಲ, ಲಕ್ಷಾಂತರ ಹೂಡಿಕೆದಾರರ ಸಾಮೂಹಿಕ ಭಾವನೆಗಳು ಮತ್ತು ನಿರ್ಧಾರಗಳಿಂದಲೂ ಪ್ರಭಾವಿತವಾಗುತ್ತವೆ. ಹಣಕಾಸಿನ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡ ವ್ಯಕ್ತಿಗಳೂ ಭಾವನೆಗಳು ಮೇಲುಗೈ ಸಾಧಿಸಿದಾಗ ಕಳಪೆ ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಬಹುದು.</p>
          <p>ವರ್ತನಾ ಹಣಕಾಸು (Behavioral Finance) ಮಾನಸಿಕ ಪಕ್ಷಪಾತಗಳು ಹಣಕಾಸಿನ ನಿರ್ಧಾರ-ತೆಗೆದುಕೊಳ್ಳುವಿಕೆಯನ್ನು ಹೇಗೆ ಪ್ರಭಾವಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ಅಧ್ಯಯನ ಮಾಡುತ್ತದೆ. ಈ ಪಕ್ಷಪಾತಗಳನ್ನು ಗುರುತಿಸುವುದು ಹೂಡಿಕೆದಾರರಿಗೆ ಶಿಸ್ತುಬದ್ಧರಾಗಿ ಉಳಿಯಲು ಮತ್ತು ದೀರ್ಘಾವಧಿ ಆದಾಯವನ್ನು ಹಾನಿಗೊಳಿಸುವ ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳನ್ನು ತಪ್ಪಿಸಲು ನೆರವಾಗಬಹುದು.</p>
          <img src="/portfolio-construction/image3.png" alt="Behavioral finance and psychological biases" style={imgStyle} />
          <h3>ಭಯ ಮತ್ತು ಆತಂಕ</h3>
          <p>ಮಾರುಕಟ್ಟೆ ಕುಸಿತದ ಅವಧಿಗಳಲ್ಲಿ, ಭಯವು ಹೂಡಿಕೆದಾರರನ್ನು ಆವೇಗದಿಂದ ಪ್ರತಿಕ್ರಿಯಿಸುವಂತೆ ಮಾಡಬಹುದು.</p>
          <p>ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಮೌಲ್ಯಗಳು ತೀವ್ರವಾಗಿ ಕುಸಿದಾಗ, ಕೆಲವು ಹೂಡಿಕೆದಾರರು ಮತ್ತಷ್ಟು ನಷ್ಟವನ್ನು ತಪ್ಪಿಸಲು ಮಾತ್ರ ತಮ್ಮ ಹೂಡಿಕೆಗಳನ್ನು ಮಾರಾಟ ಮಾಡುತ್ತಾರೆ. ದುರದೃಷ್ಟವಶಾತ್, ಇದು ಮಾರುಕಟ್ಟೆಗಳು ಅಂತಿಮವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳುವ ಮೊದಲೇ ಮಾರುಕಟ್ಟೆ ಕುಸಿತಗಳ ಸಮಯದಲ್ಲಿ ನಷ್ಟಗಳನ್ನು ದೃಢೀಕರಿಸುವ ಪರಿಣಾಮ ಉಂಟುಮಾಡುತ್ತದೆ.</p>
          <p>ಇತಿಹಾಸವು ತೋರಿಸುತ್ತದೆ, ಮಾರುಕಟ್ಟೆಗಳು ಚಕ್ರಗಳಲ್ಲಿ ಚಲಿಸುತ್ತವೆ ಮತ್ತು ತಾತ್ಕಾಲಿಕ ಕುಸಿತಗಳು ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆಯ ಸಾಮಾನ್ಯ ಭಾಗ. ಭಯವು ತಮ್ಮ ನಿರ್ಧಾರಗಳನ್ನು ನಿರ್ದೇಶಿಸಲು ಅನುಮತಿಸುವ ಹೂಡಿಕೆದಾರರು ನಂತರ ಬರುವ ಚೇತರಿಕೆ ಮತ್ತು ದೀರ್ಘಾವಧಿ ಬೆಳವಣಿಗೆಯನ್ನು ತಪ್ಪಿಸಿಕೊಳ್ಳಬಹುದು.</p>
          <h3>ದುರಾಸೆ ಮತ್ತು ಅತಿ ನಂಬಿಕೆ</h3>
          <p>ಪ್ರಬಲ ಬುಲ್ ಮಾರುಕಟ್ಟೆಗಳ ಸಮಯದಲ್ಲಿ ವಿರುದ್ಧ ಭಾವನಾತ್ಮಕ ತೀವ್ರತೆಯು ಸಂಭವಿಸುತ್ತದೆ.</p>
          <p>ಮಾರುಕಟ್ಟೆಗಳು ವೇಗವಾಗಿ ಏರಿದಾಗ, ಹೂಡಿಕೆದಾರರು ತಮ್ಮ ಹೂಡಿಕೆ ಸಾಮರ್ಥ್ಯದ ಬಗ್ಗೆ ಅತಿ ನಂಬಿಕೆ ಹೊಂದಲು ಆರಂಭಿಸಬಹುದು. ಇದು ಅತಿಯಾದ ಅಪಾಯ ತೆಗೆದುಕೊಳ್ಳುವಿಕೆ, ಊಹಾಪೋಹ ಹೂಡಿಕೆಗಳು ಅಥವಾ ಮಾರುಕಟ್ಟೆಗಳು ಅನಿಯಮಿತವಾಗಿ ಏರುತ್ತ ಮುಂದುವರಿಯುತ್ತವೆ ಎಂಬ ನಂಬಿಕೆಗೆ ದಾರಿ ಮಾಡಬಹುದು.</p>
          <p>ದುರಾಸೆಯು ಹೂಡಿಕೆದಾರರನ್ನು ಶಿಸ್ತುಬದ್ಧ ತಂತ್ರಗಳನ್ನು ತ್ಯಜಿಸಿ ಈಗಾಗಲೇ ದೊಡ್ಡ ಬೆಲೆ ಏರಿಕೆ ಅನುಭವಿಸಿದ ಆಸ್ತಿಗಳನ್ನು ಹಿಂಬಾಲಿಸಲು ಪ್ರೇರೇಪಿಸಬಹುದು.</p>
          <h3>ಇತ್ತೀಚಿನ ಪಕ್ಷಪಾತ</h3>
          <p>ಇತ್ತೀಚಿನ ಪಕ್ಷಪಾತ (Recency Bias) ಎಂದರೆ ಹೂಡಿಕೆದಾರರು ಇತ್ತೀಚಿನ ಮಾರುಕಟ್ಟೆ ಕಾರ್ಯಕ್ಷಮತೆಗೆ ಅತಿಯಾದ ಪ್ರಾಮುಖ್ಯತೆ ನೀಡಿದಾಗ ಸಂಭವಿಸುತ್ತದೆ.</p>
          <p>ಉದಾಹರಣೆಗೆ, ಒಂದು ನಿರ್ದಿಷ್ಟ ವಲಯ ಅಥವಾ ಷೇರು ಕಳೆದ ಕೆಲವು ತಿಂಗಳಲ್ಲಿ ಪ್ರಬಲವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿದ್ದರೆ, ಹೂಡಿಕೆದಾರರು ಆ ಪ್ರವೃತ್ತಿಯು ಅನಿಯಮಿತವಾಗಿ ಮುಂದುವರಿಯುತ್ತದೆ ಎಂದು ಭಾವಿಸಬಹುದು. ಅದೇ ರೀತಿ, ಮಾರುಕಟ್ಟೆ ಕುಸಿತದ ನಂತರ, ಮಾರುಕಟ್ಟೆಗಳು ಮತ್ತಷ್ಟು ಕುಸಿಯುತ್ತ ಮುಂದುವರಿಯುತ್ತವೆ ಎಂದು ಹೂಡಿಕೆದಾರರು ನಂಬಬಹುದು.</p>
          <p>ಈ ಪಕ್ಷಪಾತವು ಹೂಡಿಕೆದಾರರನ್ನು ದೀರ್ಘಾವಧಿ ಮೂಲಾಂಶಗಳ ಬದಲು ಅಲ್ಪಾವಧಿ ಪ್ರವೃತ್ತಿಗಳ ಆಧಾರದ ಮೇಲೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಪ್ರೇರೇಪಿಸಬಹುದು.</p>
          <h3>ನಷ್ಟ ತಪ್ಪಿಸುವ ಪ್ರವೃತ್ತಿ</h3>
          <p>ನಷ್ಟ ತಪ್ಪಿಸುವ ಪ್ರವೃತ್ತಿ (Loss Aversion) ಎಂದರೆ ಲಾಭಗಳಿಗಿಂತ ನಷ್ಟಗಳನ್ನು ಹೆಚ್ಚು ತೀವ್ರವಾಗಿ ಅನುಭವಿಸುವ ಮಾನಸಿಕ ಪ್ರವೃತ್ತಿ.</p>
          <p>ಅನೇಕ ಜನರಿಗೆ, ₹೧೦,೦೦೦ ಕಳೆದುಕೊಳ್ಳುವ ನೋವು ಅದೇ ಮೊತ್ತ ಗಳಿಸುವ ಸಂತೋಷಕ್ಕಿಂತ ಹೆಚ್ಚು ತೀವ್ರವಾಗಿ ಅನಿಸುತ್ತದೆ. ಈ ಭಾವನಾತ್ಮಕ ಅಸಮತೋಲನವು ಹೂಡಿಕೆದಾರರನ್ನು ನಷ್ಟ ಚೇತರಿಕೆಯ ಭರವಸೆಯಲ್ಲಿ ನಷ್ಟದ ಹೂಡಿಕೆಗಳನ್ನು ತುಂಬಾ ದೀರ್ಘ ಕಾಲ ಹಿಡಿದಿರಿಸಲು ಅಥವಾ ಸಂಭಾವ್ಯ ನಷ್ಟದ ಭಯದಿಂದ ಅಗತ್ಯ ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ತಪ್ಪಿಸಲು ಪ್ರೇರೇಪಿಸಬಹುದು.</p>
          <p>ನಷ್ಟ ತಪ್ಪಿಸುವ ಪ್ರವೃತ್ತಿಯು ಸಾಮಾನ್ಯವಾಗಿ ಹೂಡಿಕೆದಾರರನ್ನು ದೀರ್ಘಾವಧಿ ನಿರೀಕ್ಷೆಗಳ ಆಧಾರದ ಮೇಲೆ ತರ್ಕಬದ್ಧ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳದಂತೆ ತಡೆಯುತ್ತದೆ.</p>
          <h3>ವರ್ತನಾ ಅರಿವು ಏಕೆ ಮುಖ್ಯ</h3>
          <p>ಈ ಪಕ್ಷಪಾತಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಅವುಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಮೂಲನೆ ಮಾಡುವುದಿಲ್ಲ, ಆದರೆ ಅವುಗಳ ಮೇರೆಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮೊದಲು ಭಾವನಾತ್ಮಕ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಗುರುತಿಸಲು ಹೂಡಿಕೆದಾರರಿಗೆ ಅನುಮತಿಸುತ್ತದೆ.</p>
          <p>ಶಿಸ್ತುಬದ್ಧ ಹೂಡಿಕೆದಾರರು ಸಾಮಾನ್ಯವಾಗಿ ಈ ರಚನಾತ್ಮಕ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಅವಲಂಬಿಸುತ್ತಾರೆ:</p>
          <ul className="pl-6">
            <li>ಪೂರ್ವ-ನಿರ್ಧರಿತ ಆಸ್ತಿ ಹಂಚಿಕೆ</li>
            <li>ವ್ಯವಸ್ಥಿತ ಹೂಡಿಕೆ</li>
            <li>ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆ ದಿಗಂತಗಳು</li>
            <li>ವೈವಿಧ್ಯೀಕೃತ ಪೋರ್ಟ್‌ಫೋಲಿಯೋಗಳು</li>
          </ul>
          <p>ಈ ಚೌಕಟ್ಟುಗಳು ಚಂಚಲ ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ಭಾವನಾತ್ಮಕ ನಿರ್ಧಾರ-ತೆಗೆದುಕೊಳ್ಳುವಿಕೆಯ ಪ್ರಭಾವವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನೆರವಾಗುತ್ತವೆ.</p>
          <h3>ಅಂತಿಮ ಚಿಂತನೆ: ವೈಯಕ್ತಿಕ ಸಂಪತ್ತಿನ ವ್ಯವಸ್ಥೆ ನಿರ್ಮಾಣ</h3>
          <p>ಯಶಸ್ವಿ ಹೂಡಿಕೆ ಎಂದರೆ ಕೇವಲ ಉತ್ತಮ ಷೇರುಗಳನ್ನು ಗುರುತಿಸುವ ಅಥವಾ ಸರಿಯಾದ ಫಂಡ್‌ಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಬಗ್ಗೆ ಮಾತ್ರವಲ್ಲ. ದೀರ್ಘಾವಧಿ ಸಂಪತ್ತು ಸೃಷ್ಟಿಯನ್ನು ಬೆಂಬಲಿಸುವ ಸಂಪೂರ್ಣ ಹಣಕಾಸಿನ ವ್ಯವಸ್ಥೆಯನ್ನು ರಚಿಸುವ ಬಗ್ಗೆ.</p>
          <p>ಸುರಚಿತ ಹಣಕಾಸಿನ ವ್ಯವಸ್ಥೆಯು ಸಾಮಾನ್ಯವಾಗಿ ಇವುಗಳನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ:</p>
          <ul className="pl-6">
            <li>ಸ್ಥಿರ ಮತ್ತು ಸಕಾರಾತ್ಮಕ ನಗದು ಹರಿವು</li>
            <li>ಸಮರ್ಪಕ ತುರ್ತು ನಿಧಿ</li>
            <li>ಆಸ್ತಿ ವರ್ಗಗಳಲ್ಲಿ ವೈವಿಧ್ಯೀಕೃತ ಹೂಡಿಕೆಗಳು</li>
            <li>ಶಿಸ್ತುಬದ್ಧ ಬಂಡವಾಳ ಹಂಚಿಕೆ</li>
            <li>ಮಾರುಕಟ್ಟೆ ಚಕ್ರಗಳ ಸಮಯದಲ್ಲಿ ಭಾವನಾತ್ಮಕ ನಿಯಂತ್ರಣ</li>
          </ul>
          <p>ಈ ಅಂಶಗಳು ಒಟ್ಟಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿದಾಗ, ಹೂಡಿಕೆದಾರರು ಅಲ್ಪಾವಧಿ ಮಾರುಕಟ್ಟೆ ಏರಿಳಿತಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುವ ಬದಲು ತಮ್ಮ ದೀರ್ಘಾವಧಿ ಹಣಕಾಸಿನ ಗುರಿಗಳ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಿ ಉಳಿಯಬಹುದು.</p>
          <p>ಕಾಲಾನಂತರದಲ್ಲಿ, ರಚನೆ, ಶಿಸ್ತು ಮತ್ತು ತಾಳ್ಮೆಯ ಈ ಸಂಯೋಜನೆಯೇ ಹೂಡಿಕೆದಾರರಿಗೆ ಚಕ್ರಬಡ್ಡಿ ಶಕ್ತಿಯಿಂದ ಸಂಪೂರ್ಣ ಪ್ರಯೋಜನ ಪಡೆಯಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.</p>
        </>
      ),
    },
  },
];
