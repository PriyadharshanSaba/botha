import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Shared table styles (reusable across chapters)
// ─────────────────────────────────────────────────────────────────────────────
const tbl: React.CSSProperties = { width: "100%", borderCollapse: "collapse", margin: "16px 0", fontSize: "0.95em" };
const th: React.CSSProperties = { background: "#c9a84c", color: "#fdfcf9", padding: "10px 12px", textAlign: "left" };
const td: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid rgba(0,0,0,0.08)" };
const tdAlt: React.CSSProperties = { ...td, background: "rgba(201,168,76,0.06)" };

// ─────────────────────────────────────────────────────────────────────────────
// Chapter content components
// ─────────────────────────────────────────────────────────────────────────────

function ChapterOne({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>
          ನಿಮ್ಮ ನೆಚ್ಚಿನ ಕಾಫಿ ಬ್ರ್ಯಾಂಡ್ ಅನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ, ಉದಾಹರಣೆಗೆ, ಟಾಟಾ ಕಾಫಿ. ಅವರು ಭಾರತದಾದ್ಯಂತ ೫೦೦ ಹೊಸ ಶಾಖೆಗಳನ್ನು ತೆರೆಯಲು ಬಯಸಿದ್ದಾರೆ ಎಂದು ಭಾವಿಸಿಕೊಳ್ಳಿ. ಇಂತಹ ವಿಸ್ತರಣೆಗೆ ಭಾರಿ ಪ್ರಮಾಣದ ಹಣ ಬೇಕಾಗುತ್ತದೆ, ಭೂಮಿ ಖರೀದಿಸಲು, ಅಂಗಡಿಗಳನ್ನು ನಿರ್ಮಿಸಲು, ಸಿಬ್ಬಂದಿಯನ್ನು ನೇಮಿಸಲು ಮತ್ತು ಬ್ರ್ಯಾಂಡ್ ಅನ್ನು ಪ್ರಚಾರ ಮಾಡಲು. ಬ್ಯಾಂಕ್‌ಗಳಿಂದ ಭಾರಿ ಮೊತ್ತದ ಸಾಲ ಪಡೆಯುವ ಬದಲು, ಕಂಪನಿಯು ನಿಮ್ಮಂಥ ಸಾಮಾನ್ಯ ಜನರಿಗೆ ಮಾಲೀಕತ್ವದ ಪಾಲನ್ನು ನೀಡುವ ಮೂಲಕ ಹಣ ಸಂಗ್ರಹಿಸಬಹುದು. ಈ ಪಾಲನ್ನೇ ಷೇರು ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.
        </p>

        <p>
          ನೀವು ಒಂದು ಷೇರನ್ನು ಖರೀದಿಸಿದಾಗ, ಕೇವಲ ನಿಮ್ಮ ಹಣವನ್ನು ತೊಡಗಿಸುತ್ತಿಲ್ಲ, ನೀವು ಆ ಕಂಪನಿಯ ಸಹ-ಮಾಲೀಕರಾಗುತ್ತೀರಿ. ವ್ಯಾಪಾರವು ಉತ್ತಮವಾಗಿ ನಡೆದು, ಲಾಭ ಗಳಿಸಿ, ಮೌಲ್ಯದಲ್ಲಿ ಬೆಳೆದರೆ, ನಿಮ್ಮ ಷೇರಿನ ಬೆಲೆಯೂ ಏರುತ್ತದೆ. ಜೊತೆಗೆ, ಕಂಪನಿಯು ತನ್ನ ಲಾಭದ ಒಂದು ಭಾಗವನ್ನು ಷೇರುದಾರರಿಗೆ ಹಂಚಿದಾಗ, ಅದನ್ನು ಲಾಭಾಂಶ (ಡಿವಿಡೆಂಡ್) ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ, ಅದೂ ನಿಮಗೆ ಸಂದಾಯವಾಗುತ್ತದೆ.
        </p>

        <p>
          ಷೇರು ಮಾರುಕಟ್ಟೆಯ ಮೂಲ ತತ್ವ ಇದೇ, ಕಂಪನಿಗಳು ಬಂಡವಾಳ ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಹೂಡಿಕೆದಾರರು ಅವುಗಳ ಯಶಸ್ಸಿನಲ್ಲಿ ಭಾಗಿಯಾಗಲು ಅನುವು ಮಾಡಿಕೊಡುವ ಒಂದು ವ್ಯವಸ್ಥಿತ ಮತ್ತು ವಿಸ್ತಾರವಾದ ಮಾರುಕಟ್ಟೆ.
        </p>

        <h3>ಎಲ್ಲಾ ಪಟ್ಟಿಯಾದ ಕಂಪನಿಗಳು ನೆಲೆಸಿರುವ ಸ್ಥಳ</h3>

        <p>
          ಸಾರ್ವಜನಿಕರು ಖರೀದಿಸಲು ಮತ್ತು ಮಾರಾಟ ಮಾಡಲು ಷೇರುಗಳು ಲಭ್ಯವಿರುವ ಪ್ರತಿಯೊಂದು ಕಂಪನಿಯನ್ನು ಪಟ್ಟಿಯಾದ ಕಂಪನಿ (Listed Company) ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಪಟ್ಟಿಯಾಗಲು, ಕಂಪನಿಯು ಸೆಬಿ (SEBI — ಸೆಕ್ಯುರಿಟೀಸ್ ಅಂಡ್ ಎಕ್ಸ್‌ಚೇಂಜ್ ಬೋರ್ಡ್ ಆಫ್ ಇಂಡಿಯಾ) ಹಾಗೂ ಷೇರು ವಿನಿಮಯ ಕೇಂದ್ರಗಳಾದ NSE (ರಾಷ್ಟ್ರೀಯ ಷೇರು ವಿನಿಮಯ) ಮತ್ತು BSE (ಮುಂಬೈ ಷೇರು ವಿನಿಮಯ) ಇವುಗಳೊಂದಿಗೆ ಕಠಿಣ ಅನುಮೋದನಾ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಬೇಕಾಗುತ್ತದೆ.
        </p>

        <p>ಒಂದು ಕಂಪನಿಯು &quot;ಪಟ್ಟಿಯಾಗಿದೆ&quot; ಎಂದರೆ:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>ಅದರ ಷೇರುಗಳು ವಿನಿಮಯ ಕೇಂದ್ರದಲ್ಲಿ ಸಾರ್ವಜನಿಕವಾಗಿ ವಹಿವಾಟಿಗೆ ಲಭ್ಯವಿರುತ್ತವೆ.</li>
          <li>ಅದು ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಮಾಹಿತಿ ಹಂಚಿಕೆಯ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಬೇಕು, ಆರ್ಥಿಕ ಫಲಿತಾಂಶಗಳನ್ನು, ಆಡಳಿತ ವರ್ಗದ ಮಾಹಿತಿಗಳನ್ನು ಮತ್ತು ವ್ಯವಹಾರ ಯೋಜನೆಗಳನ್ನು ನಿರಂತರವಾಗಿ ಹಂಚಿಕೊಳ್ಳಬೇಕು.</li>
          <li>ಅದು ತನ್ನ ಷೇರುದಾರರಿಗೆ, ನಿಮಗೆ, ನನಗೆ ಮತ್ತು ಇತರ ಲಕ್ಷಾಂತರ ಹೂಡಿಕೆದಾರರಿಗೆ, ಉತ್ತರದಾಯಿತ್ವವಾಗಿ ನಡೆದುಕೊಳ್ಳಬೇಕು.</li>
        </ul>

        <p>
          ಪಟ್ಟಿಯಾಗುವುದು ಎಂದರೆ ನಂಬಿಕೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಪ್ರತೀಕ. ಕಂಪನಿಯು ತನ್ನ ಲೆಕ್ಕಪತ್ರಗಳನ್ನು ಸಾರ್ವಜನಿಕ ಪರಿಶೀಲನೆಗೆ ತೆರೆದಿಡಲು ಮತ್ತು ತನ್ನ ಪ್ರಯಾಣವನ್ನು ಹೂಡಿಕೆದಾರರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲು ಸಿದ್ಧವಿದೆ ಎಂಬ ಸಂದೇಶವನ್ನು ಇದು ನೀಡುತ್ತದೆ.
        </p>

        <p>
          ಇಂದು, ರಿಲಯನ್ಸ್, ಇನ್ಫೋಸಿಸ್ ಮತ್ತು ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್‌ನಂತಹ ಸುಪರಿಚಿತ ಹೆಸರುಗಳಿಂದ ಹಿಡಿದು ನೈಕಾ ಮತ್ತು ಝೊಮ್ಯಾಟೊನಂತಹ ಉದಯೋನ್ಮುಖ ಸ್ಟಾರ್ಟಪ್‌ಗಳವರೆಗೆ, ಸಾವಿರಾರು ಕಂಪನಿಗಳು ಭಾರತದ ಷೇರು ವಿನಿಮಯ ಕೇಂದ್ರಗಳಲ್ಲಿ ಪಟ್ಟಿಯಾಗಿವೆ.
        </p>

        <h3>ಈ ಮಾರುಕಟ್ಟೆ ನಂಬಿಕೆಯ ಮೇಲೆ ನಿರ್ಮಿತವಾಗಿದೆ</h3>

        <p>
          ನೀವು ವಸ್ತುಗಳನ್ನು ಖರೀದಿಸುವ ಸಾಮಾನ್ಯ ಮಾರುಕಟ್ಟೆಗಿಂತ ಭಿನ್ನವಾಗಿ, ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನೀವು ಖರೀದಿಸುವುದು, ನೀವು ನಂಬುವ ಕಂಪನಿಗಳ ವ್ಯವಹಾರದ ಸಾಮರ್ಥ್ಯದ ಸಾಧ್ಯತೆಗಳನ್ನು ಖರೀದಿಸುತ್ತೀರಿ. ನೀವು ಯಾವುದೇ ವಸ್ತುವನ್ನು ಹಿಡಿದುಕೊಂಡು ಹೋಗುವುದಿಲ್ಲ; ಬದಲಾಗಿ, ಮಾಲೀಕತ್ವವನ್ನು ತೆಗೆದುಕೊಂಡು ಹೋಗುತ್ತೀರಿ.
        </p>

        <p>
          ಈ ಷೇರುಗಳು ಪ್ರತಿದಿನ ವಹಿವಾಟಾಗುವುದರಿಂದ, ಅವುಗಳ ಬೆಲೆಗಳು ನಿರಂತರವಾಗಿ ಏರಿಳಿಯುತ್ತಿರುತ್ತವೆ. ಬೇಡಿಕೆ ಮತ್ತು ಪೂರೈಕೆ, ಕಂಪನಿಯ ಕಾರ್ಯನಿರ್ವಹಣೆ, ಜಾಗತಿಕ ಘಟನೆಗಳು ಮತ್ತು ಹೂಡಿಕೆದಾರರ ಭಾವನೆಗಳು, ಇವೆಲ್ಲವೂ ಈ ಬೆಲೆಯ ಚಲನೆಯನ್ನು ನಿರ್ಧರಿಸುತ್ತವೆ.
        </p>

        <p>
          ಆ ದೃಷ್ಟಿಯಿಂದ ನೋಡಿದರೆ, ಷೇರು ಮಾರುಕಟ್ಟೆ ಎಂಬುದು ಅರ್ಥವ್ಯವಸ್ಥೆಯ ಜೀವಂತ ಉಸಿರಾಟದ ಪ್ರತಿಬಿಂಬ. ಕಂಪನಿಗಳು ಪ್ರವರ್ಧಮಾನಕ್ಕೆ ಬಂದಾಗ, ಉದ್ಯೋಗಗಳು ಹೆಚ್ಚುತ್ತವೆ, ಆವಿಷ್ಕಾರಗಳು ಅರಳುತ್ತದೆ, ಹೂಡಿಕೆದಾರರು ಅಭಿವೃದ್ಧಿಹೊಂದುತ್ತಾರೆ. ಅವು ಸಂಕಷ್ಟಕ್ಕೆ ಸಿಲುಕಿದಾಗ, ಆ ಅಲೆ ಇಡೀ ಮಾರುಕಟ್ಟೆಯ ಅನುಭವಕ್ಕೆ ಬರುತ್ತದೆ.
        </p>

        <div className="ch-illustration">
          <img
            src="/stock-market/image5.png"
            alt="A character standing in front of a stock exchange building"
            className="mx-auto max-w-xs w-full"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        Imagine your favourite coffee brand, say, <strong>Tata Coffee</strong>, wants to open
        500 new outlets across India. That kind of expansion needs money, to buy land, build
        stores, hire staff, and market the brand. Instead of borrowing a huge amount from banks,
        the company can raise money by offering <strong>ownership stakes</strong>, called{" "}
        <strong>shares</strong>, to people like you and me.
      </p>

      <p>
        When you buy a share, you&apos;re not just investing your money, you&apos;re becoming a{" "}
        <em>co-owner</em> of that company. If the business does well, earns profits, and grows
        in value, your share becomes more valuable too. You might even receive a{" "}
        <strong>dividend</strong>, which is a part of the company&apos;s profits distributed to
        shareholders.
      </p>

      <p>
        That&apos;s the essence of the <strong>stock market</strong>, a large, organized
        marketplace where companies raise funds and investors participate in their success.
      </p>

      <h3>Where All Listed Companies Live</h3>

      <p>
        Every company whose shares are available for the public to buy and sell is called a{" "}
        <strong>listed company</strong>. To get listed, a company must go through a strict
        approval process with{" "}
        <strong>SEBI (Securities and Exchange Board of India)</strong> and the stock
        exchanges — mainly <strong>NSE (National Stock Exchange)</strong> and{" "}
        <strong>BSE (Bombay Stock Exchange)</strong>.
      </p>

      <p>When a company is &quot;listed,&quot; it means:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Its shares are available to be traded publicly on the exchange.
        </li>
        <li>
          It must follow transparency and disclosure rules — sharing financial results,
          management updates, and business plans regularly.
        </li>
        <li>
          It becomes accountable to its shareholders — you, me, and millions of other
          investors.
        </li>
      </ul>

      <p>
        Being listed is a badge of trust and credibility. It signals that a company is willing
        to open its books to public scrutiny and share its journey with investors.
      </p>

      <p>
        Today, <strong>thousands of companies</strong>, from household names like Reliance,
        Infosys, and HDFC Bank to emerging startups like Nykaa and Zomato, are listed on
        India&apos;s stock exchanges.
      </p>

      <h3>A Marketplace Built on Belief</h3>

      <p>
        Unlike a regular marketplace where you buy goods, in the stock market, you&apos;re
        buying <strong>potential</strong>, the future of businesses you believe in. You
        don&apos;t walk away with a product; you walk away with ownership.
      </p>

      <p>
        And because these shares are <strong>traded daily</strong>, their prices move
        constantly, driven by demand, supply, company performance, global events, and even
        investor sentiment.
      </p>

      <p>
        The stock market, in that sense, is a living, breathing reflection of the economy.
        When companies thrive, jobs grow, innovation flourishes, the investors prosper. When
        they struggle, the ripple is felt across the market.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image5.png"
          alt="A character standing in front of a stock exchange building"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterTwo({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>
          ಷೇರು ಮಾರುಕಟ್ಟೆ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವುದಕ್ಕೆ ಒಂದು ಕಾರಣವಿದೆ. ಮಹತ್ವಾಕಾಂಕ್ಷೆಗೆ ಯಾವಾಗಲೂ ಇಂಧನ ಬೇಕು, ಮತ್ತು ಆ ಇಂಧನವೇ ಬಂಡವಾಳ. ಷೇರು ಮಾರುಕಟ್ಟೆಗಳು ಅಸ್ತಿತ್ವಕ್ಕೆ ಬರುವ ಮೊದಲು, ರಾಜರು, ಬ್ಯಾಂಕ್‌ಗಳು ಅಥವಾ ಶ್ರೀಮಂತ ವ್ಯಾಪಾರಿಗಳು ಮಾತ್ರ ವ್ಯವಹಾರಗಳಿಗೆ ಹಣ ಒದಗಿಸಬಲ್ಲರಾಗಿದ್ದರು.
        </p>

        <p>
          ೧೬೦೦ರ ಶತಮಾನದಲ್ಲಿ ಡಚ್ ಈಸ್ಟ್ ಇಂಡಿಯಾ ಕಂಪನಿಯು ಮೊದಲ ಬಾರಿಗೆ ಷೇರುಗಳನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿದಾಗ, ಎಲ್ಲವೂ ಬದಲಾಯಿತು. ಇದ್ದಕ್ಕಿದ್ದಂತೆ, ಸಾಮಾನ್ಯ ನಾಗರಿಕರು ಜಾಗತಿಕ ವ್ಯಾಪಾರದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲು ಸಾಧ್ಯವಾಯಿತು. ಆ ಸರಳ ಆವಿಷ್ಕಾರ ಇಂದು ನಾವು ಕಾಣುವ ಜಾಗತಿಕ ಅರ್ಥವ್ಯವಸ್ಥೆಗೆ ನಾಂದಿ ಹಾಡಿತು.
        </p>

        <p>
          ಭಾರತದಲ್ಲಿ, ಇನ್ಫೋಸಿಸ್, ಟಿಸಿಎಸ್ ಮತ್ತು ರಿಲಯನ್ಸ್‌ನಂತಹ ಕಂಪನಿಗಳು ಮಾರುಕಟ್ಟೆಯ ಮೂಲಕ ಬಂಡವಾಳ ಸಂಗ್ರಹಿಸಿ ವಿಸ್ತರಿಸಿವೆ, ಈ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಉದ್ಯೋಗಗಳನ್ನು, ಆವಿಷ್ಕಾರಗಳನ್ನು ಮತ್ತು ಸಂಪತ್ತನ್ನು ಸೃಷ್ಟಿಸಿವೆ.
        </p>

        <p>
          ಹಾಗಾಗಿ, ಪ್ರತಿಯೊಂದು ವಹಿವಾಟು ಕೇವಲ ಪರದೆಯ ಮೇಲಿನ ಒಂದು ಸಂಖ್ಯೆಯಲ್ಲ, ಅದು ದೇಶದಾದ್ಯಂತ ಬೆಳವಣಿಗೆಯನ್ನು ಚಾಲನೆಗೊಳಿಸುವ ಹೂಡಿಕೆಯಾಗಿದೆ.
        </p>

        <div className="ch-illustration">
          <img
            src="/stock-market/image2.png"
            alt="A character holding a share certificate"
            className="mx-auto max-w-xs w-full"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        The stock market exists because ambition always needs fuel and that fuel is capital.
        Before stock markets, only kings, banks, or wealthy merchants could fund businesses.
      </p>

      <p>
        When the <strong>Dutch East India Company</strong> issued the first shares in the
        1600s, it changed everything. Suddenly, ordinary citizens could invest in global trade.
        That simple innovation gave rise to the global economy we know today.
      </p>

      <p>
        In India, companies like Infosys, TCS, and Reliance have used the market to raise
        funds and expand, creating jobs, innovation, and wealth in the process.
      </p>

      <p>
        So, every trade isn&apos;t just a number on a screen, it&apos;s investment that drives
        growth across the country.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image2.png"
          alt="A character holding a share certificate"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterThree({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>
          ನೀವು ನಿಮ್ಮ ಟ್ರೇಡಿಂಗ್ ಆ್ಯಪ್‌ನಲ್ಲಿ &apos;ಖರೀದಿಸಿ&apos; ಎಂಬ ಬಟನ್ ಒತ್ತಿದಾಗ, ಅದು ಮಾಯದಂತೆ ಭಾಸವಾಗಬಹುದು, ಆದರೆ ಆ ಒಂದು ಕ್ಷಣದ ಹಿಂದೆ ಸಂಸ್ಥೆಗಳು, ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನಂಬಿಕೆ ಒಂದು ಸಂಕೀರ್ಣ ಜಾಲ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುತ್ತದೆ. ಈ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬ ಪಾತ್ರಧಾರಿಗೂ ತನ್ನದೇ ಆದ ವಿಶಿಷ್ಟ ಪಾತ್ರವಿದೆ, ಮತ್ತು ಅವರೆಲ್ಲರೂ ಒಟ್ಟಾಗಿ, ಪ್ರತಿಯೊಂದು ವಹಿವಾಟು, ಎಷ್ಟೇ ಚಿಕ್ಕದಾಗಿರಲಿ, ಸುರಕ್ಷಿತವಾಗಿ, ನಿಖರವಾಗಿ ಮತ್ತು ನ್ಯಾಯಯುತವಾಗಿ ನಡೆಯುವಂತೆ ಖಾತ್ರಿಪಡಿಸುತ್ತಾರೆ.
        </p>

        <p>ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮತ್ತು ಅದರ ಹಿಂದಿರುವ ಜನರನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳೋಣ.</p>

        <h3>೧. ಹೂಡಿಕೆದಾರರು — ಮಾರುಕಟ್ಟೆಯ ಹೃದಯಬಡಿತ</h3>

        <p>ಹೂಡಿಕೆದಾರರು ಷೇರು ಮಾರುಕಟ್ಟೆಯ ಜೀವಶಕ್ತಿ. ಅವರನ್ನು ಈ ರೀತಿ ವಿಂಗಡಿಸಬಹುದು:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>
            <strong>ಚಿಲ್ಲರೆ ಹೂಡಿಕೆದಾರರು:</strong> ಝೆರೋಧಾ ಅಥವಾ ಗ್ರೋ ನಂತಹ ಆ್ಯಪ್‌ಗಳ ಮೂಲಕ ಹೂಡಿಕೆ ಮಾಡುವ ಸಾಮಾನ್ಯ ಜನರು.
          </li>
          <li>
            <strong>ಸಾಂಸ್ಥಿಕ ಹೂಡಿಕೆದಾರರು:</strong> ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು, ವಿಮಾ ಕಂಪನಿಗಳು ಅಥವಾ ಪಿಂಚಣಿ ನಿಧಿಗಳಂತಹ ದೊಡ್ಡ ಸಂಸ್ಥೆಗಳು.
          </li>
          <li>
            <strong>ವಿದೇಶಿ ಸಾಂಸ್ಥಿಕ ಹೂಡಿಕೆದಾರರು (FII):</strong> ಭಾರತೀಯ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವ ಜಾಗತಿಕ ನಿಧಿಗಳು, ಇವು ಸಾಮಾನ್ಯವಾಗಿ ಮಾರುಕಟ್ಟೆಯ ಒಟ್ಟಾರೆಗತಿಯನ್ನು ( ಟ್ರೆಂಡ್ ) ಮತ್ತು ದ್ರವ್ಯತೆಯ ( ಮೌಲ್ಯಕ್ಕೆ ಧಕ್ಕೆಯಾಗದಂತೆ ತ್ವರಿತವಾಗಿ ಸುಲಭವಾಗಿ ನಗದೀಕರಿಸುವ ಸಾಧ್ಯತೆ ) ಮೇಲೆ ಗಣನೀಯ ಪ್ರಭಾವ ಬೀರುತ್ತವೆ.
          </li>
        </ul>

        <p>
          ಹೂಡಿಕೆಯಾಗುವ ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಯೂ ಮಾರುಕಟ್ಟೆಗೆ ಚೈತನ್ಯ ನೀಡುತ್ತದೆ, ಮತ್ತು ಒಟ್ಟಾರೆಯಾಗಿ, ಯಾವ ವ್ಯವಹಾರ ಮೌಲ್ಯಯುತವಾದದ್ದು, ಯಾವುದು ಅಲ್ಲ ಎಂಬುದನ್ನು ಹೂಡಿಕೆದಾರರೇ ನಿರ್ಧರಿಸುವವರು.
        </p>

        <h3>೨. ದಲ್ಲಾಳಿಗಳು — ನಿಮ್ಮ ಮತ್ತು ಮಾರುಕಟ್ಟೆಯ ನಡುವಿನ ಸೇತುವೆ</h3>

        <p>
          ನೀವು ಷೇರು ವಿನಿಮಯ ಕೇಂದ್ರದಲ್ಲಿ ನೇರವಾಗಿ ವಹಿವಾಟು ನಡೆಸಲು ಸಾಧ್ಯವಿಲ್ಲ, ನಿಮ್ಮ ಆದೇಶವನ್ನು ಸಲ್ಲಿಸಲು ನೋಂದಾಯಿತ ದಲ್ಲಾಳಿಯ ಅಗತ್ಯವಿದೆ. ಝೆರೋಧಾ, ಅಪ್‌ಸ್ಟಾಕ್ಸ್, ಏಂಜಲ್ ಒನ್, ಗ್ರೋ ಮತ್ತು ಐಸಿಐಸಿಐ ಡೈರೆಕ್ಟ್‌ನಂತಹ ವೇದಿಕೆಗಳು ಈ ಮಧ್ಯವರ್ತಿಯ ಪಾತ್ರ ನಿರ್ವಹಿಸುತ್ತವೆ.
        </p>

        <p>
          ನೀವು &apos;ಖರೀದಿಸಿ&apos; ಎಂದು ಒತ್ತಿದಾಗ, ನಿಮ್ಮ ಆದೇಶವು ದಲ್ಲಾಳಿಯ ವ್ಯವಸ್ಥೆಗೆ ರವಾನೆಯಾಗುತ್ತದೆ → ತಕ್ಷಣ ವಿನಿಮಯ ಕೇಂದ್ರಕ್ಕೆ ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ → ಮಾರಾಟಗಾರರ ಆದೇಶದೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತದೆ.
        </p>

        <p>ಇದರ ಜೊತೆಗೆ ದಲ್ಲಾಳಿಗಳು:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>ನಿಮ್ಮ ಟ್ರೇಡಿಂಗ್ ಖಾತೆಯನ್ನು (ಖರೀದಿ/ಮಾರಾಟ ಚಟುವಟಿಕೆಗಾಗಿ) ನಿರ್ವಹಿಸುತ್ತಾರೆ.</li>
          <li>ವಿಶ್ಲೇಷಣೆಗಳು, ಚಾರ್ಟ್‌ಗಳು ಮತ್ತು ವರದಿಗಳನ್ನು ಒದಗಿಸುತ್ತಾರೆ.</li>
          <li>ಸೆಬಿ ಮಾರ್ಗಸೂಚಿಗಳ ಅಡಿಯಲ್ಲಿ KYC ಮತ್ತು ನಿಯಂತ್ರಕ ಅನುಪಾಲನೆಯನ್ನು ಖಾತ್ರಿಪಡಿಸುತ್ತಾರೆ.</li>
        </ul>

        <p>
          ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಹೇಳುವುದಾದರೆ, ನಿಮ್ಮ ದಲ್ಲಾಳಿಯು ಮಾರುಕಟ್ಟೆಯ ಇಡೀ ಪರಿಸರ ವ್ಯವಸ್ಥೆಗೆ ನಿಮ್ಮ ಪ್ರವೇಶದ್ವಾರವಾಗಿದೆ.
        </p>

        <h3>೩. ಷೇರು ವಿನಿಮಯ ಕೇಂದ್ರಗಳು — ಮಾರುಕಟ್ಟೆಯ ವೇದಿಕೆ</h3>

        <p>
          ರಾಷ್ಟ್ರೀಯ ಷೇರು ವಿನಿಮಯ (NSE) ಮತ್ತು ಮುಂಬೈ ಷೇರು ವಿನಿಮಯ (BSE) — ಇಲ್ಲಿಯೇ ವಹಿವಾಟುಗಳು ವಾಸ್ತವವಾಗಿ ನಡೆಯುತ್ತವೆ. ಈ ಕೇಂದ್ರಗಳು ಕಂಪನಿಗಳ ಒಡೆತನವನ್ನು ಹೊಂದುವುದಿಲ್ಲ, ಅವು ಕೇವಲ ಷೇರುಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಮತ್ತು ಪಾರದರ್ಶಕವಾಗಿ ಖರೀದಿಸಲು ಮತ್ತು ಮಾರಾಟ ಮಾಡಲು ಒಂದು ವೇದಿಕೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ.
        </p>

        <p>ವಿನಿಮಯ ಕೇಂದ್ರದಲ್ಲಿ ಏನಾಗುತ್ತದೆ:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>
            ನಿಮ್ಮ <strong>ಖರೀದಿ ಆದೇಶವು</strong> ಬೇರೊಬ್ಬರ <strong>ಮಾರಾಟ ಆದೇಶದೊಂದಿಗೆ</strong> ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತದೆ ( ಬೆಲೆ ಮತ್ತು ಸಮಯದ ಆದ್ಯತೆಯ ಆಧಾರದ ಮೇಲೆ.)
          </li>
          <li>ಹೊಂದಾಣಿಕೆಯಾದ ತಕ್ಷಣ, ವಹಿವಾಟಿನ ದೃಢೀಕರಣ ತಕ್ಷಣವೇ ಸೃಷ್ಟಿಯಾಗುತ್ತದೆ.</li>
        </ul>

        <p>
          ಇದನ್ನು ಮಾರುಕಟ್ಟೆಯ ಮಧ್ಯವರ್ತಿ ಎಂದು ಭಾವಿಸಿ — ಭಾರತದಾದ್ಯಂತ ಖರೀದಿದಾರರನ್ನು ಮತ್ತು ಮಾರಾಟಗಾರರನ್ನು ಮಿಲಿಸೆಕೆಂಡುಗಳಲ್ಲಿ ಸಂಪರ್ಕಿಸುವ ಒಂದು ಅದ್ಭುತ ವ್ಯವಸ್ಥೆ.
        </p>

        <h3>೪. ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್‌ಗಳು — ಮಾರುಕಟ್ಟೆಯ ಖಾತರಿ</h3>

        <p>
          ಒಂದು ವಹಿವಾಟು ಹೊಂದಾಣಿಕೆಯಾದ ನಂತರ, ಅದು ಕ್ಲಿಯರಿಂಗ್ ಹಂತಕ್ಕೆ ಚಲಿಸುತ್ತದೆ — ಇದನ್ನು NCL (NSE ಕ್ಲಿಯರಿಂಗ್ ಲಿಮಿಟೆಡ್) ಅಥವಾ ಇಂಡಿಯನ್ ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ ಲಿಮಿಟೆಡ್ (ICCL) ನಂತಹ ಕ್ಲಿಯರಿಂಗ್ ಸಂಸ್ಥೆಗಳು ನಿರ್ವಹಿಸುತ್ತವೆ.
        </p>

        <p>ಅವುಗಳ ಪಾತ್ರ ಹೀಗಿದೆ:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>
            ಎರಡೂ ಪಕ್ಷಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತವೆ — ಖರೀದಿದಾರರ ಬಳಿ ಸಾಕಷ್ಟು ಹಣವಿದೆಯೇ ಮತ್ತು ಮಾರಾಟಗಾರರು ನಿಜವಾಗಿಯೂ ಷೇರುಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆಯೇ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತವೆ.
          </li>
          <li>
            ವಹಿವಾಟು ಇತ್ಯರ್ಥವಾಗುವವರೆಗೆ ಷೇರುಗಳು ಮತ್ತು ಹಣವನ್ನು ತಾತ್ಕಾಲಿಕವಾಗಿ ತಡೆ (ಲಾಕ್) ಹಿಡಿಯುತ್ತಿದೆ.
          </li>
          <li>ಒಂದು ಪಕ್ಷ ತಪ್ಪಿದರು ಸಹ, ವಹಿವಾಟು ಪೂರ್ಣಗೊಳ್ಳುವುದನ್ನು ಖಾತ್ರಿಪಡಿಸುತ್ತವೆ.</li>
        </ul>

        <p>
          ಇದು ಯಾರೂ ಪ್ರತಿಪಕ್ಷದ ಅಪಾಯದಿಂದ ಹಣ ಕಳೆದುಕೊಳ್ಳದಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತದೆ. ಇದು ಅದೃಶ್ಯ ವಿಮಾ ವ್ಯವಸ್ಥೆಯಂತಿದ್ದು, ಹೂಡಿಕೆದಾರರಿಗೆ ಮಾರುಕಟ್ಟೆಯ ಮೇಲೆ ನಂಬಿಕೆ ಹುಟ್ಟಿಸುತ್ತದೆ.
        </p>

        <h3>೫. ಡಿಪಾಸಿಟರಿಗಳು — ಡಿಜಿಟಲ್ ಭದ್ರಕೋಶಗಳು</h3>

        <p>
          ಕಾಗದದ ಷೇರು ಪ್ರಮಾಣಪತ್ರಗಳ ಕಾಲ ಇಂದು ಮುಗಿದಿದೆ. ಇಂದು, ನಿಮ್ಮ ಎಲ್ಲಾ ಷೇರು ಹುಡಿಕೆಗಳನ್ನು NSDL (ರಾಷ್ಟ್ರೀಯ ಭದ್ರತಾ ಠೇವಣಿ ಸಂಸ್ಥೆ) ಅಥವಾ CDSL (ಕೇಂದ್ರೀಯ ಭದ್ರತಾ ಠೇವಣಿ ಸೇವೆಗಳು) ಮೂಲಕ ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ.
        </p>

        <p>ಇದು ಹೀಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>
            ನೀವು ಷೇರುಗಳನ್ನು ಖರೀದಿಸಿದಾಗ, ಅವು ನಿಮ್ಮ <strong>ಡಿಮ್ಯಾಟ್ ಖಾತೆಗೆ</strong> ಜಮೆಯಾಗುತ್ತವೆ — ಇದು ಒಂದು ಡಿಜಿಟಲ್ ಲಾಕರ್‌ನಂತೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.
          </li>
          <li>ನೀವು ಮಾರಾಟ ಮಾಡಿದಾಗ, ಅವು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಖಾತೆಯಿಂದ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ.</li>
          <li>
            ನಿಮ್ಮ <strong>ದಲ್ಲಾಳಿಯು</strong> ಡಿಪಾಸಿಟರಿ ಭಾಗವಹಿಸುವವರ (DP) ಮೂಲಕ ಈ ಡಿಪಾಸಿಟರಿಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ಸಂಪರ್ಕಿತವಾಗಿರುತ್ತದೆ — ಸಾಮಾನ್ಯವಾಗಿ ನೀವು ವಹಿವಾಟು ನಡೆಸುವ ಅದೇ ಆ್ಯಪ್ ಆಗಿರುತ್ತದೆ.
          </li>
        </ul>

        <p>
          ನಿಮ್ಮ ಡಿಮ್ಯಾಟ್ ಖಾತೆಯು ನಿಮ್ಮ ಮಾಲೀಕತ್ವವನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ — ಹೂಡಿಕೆಯ ಜಗತ್ತಿನಲ್ಲಿ ಇದು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯಷ್ಟೇ ಮಹತ್ವದ್ದಾಗಿದೆ.
        </p>

        <h3>೬. ಸೆಬಿ — ಮಾರುಕಟ್ಟೆಯ ಕಾವಲುಗಾರ</h3>

        <p>
          ಸೆಕ್ಯುರಿಟೀಸ್ ಅಂಡ್ ಎಕ್ಸ್‌ಚೇಂಜ್ ಬೋರ್ಡ್ ಆಫ್ ಇಂಡಿಯಾ (SEBI) ಮಾರುಕಟ್ಟೆ ನ್ಯಾಯಯುತವಾಗಿ, ಪಾರದರ್ಶಕವಾಗಿ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ನಡೆಯುವಂತೆ ಖಾತ್ರಿ ಪಡಿಸುವ ನಿಯಂತ್ರಕ ಸಂಸ್ಥೆಯಾಗಿದೆ.
        </p>

        <p>ಅದು:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>ದಲ್ಲಾಳಿಗಳು, ಕಂಪನಿಗಳು ಮತ್ತು ಹೂಡಿಕೆದಾರರಿಗೆ ನಿಯಮಗಳನ್ನು ರೂಪಿಸುತ್ತದೆ.</li>
          <li>ಒಳ ವ್ಯಾಪಾರ (Insider Trading) ಮತ್ತು ವಂಚನೆಗಳ ಮೇಲೆ ನಿಗಾ ಇಡುತ್ತದೆ.</li>
          <li>IPO ಗಳು ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಕ್ರಮಗಳನ್ನು ಅನುಮೋದಿಸುತ್ತದೆ.</li>
          <li>
            ಪಟ್ಟಿಯಾದ ಕಂಪನಿಗಳು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಆರ್ಥಿಕ ಫಲಿತಾಂಶಗಳನ್ನು ಬಹಿರಂಗಪಡಿಸುವಂತೆ ಖಾತ್ರಿ ಪಡಿಸುತ್ತದೆ.
          </li>
        </ul>

        <p>
          ಸೆಬಿಯ ಉಪಸ್ಥಿತಿಯು ಹೂಡಿಕೆದಾರರಿಗೆ ಭರವಸೆಯನ್ನು ನೀಡುತ್ತದೆ — ₹೫೦೦ ಹೂಡಿಕೆ ಮಾಡುವ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಯಿಂದ ಹಿಡಿದು ಕೋಟ್ಯಂತರ ರೂಪಾಯಿ ಹುಡಿಕೆ ಮಾಡುವ ಜಾಗತಿಕ ನಿಧಿಯವರೆಗೆ, ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಎಲ್ಲರಿಗೂ ಸಮಾನ ನೆಲೆಯಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬ ನಂಬಿಕೆಯನ್ನು ಅದು ತುಂಬುತ್ತದೆ.
        </p>

        <h3>ಎಲ್ಲವನ್ನೂ ಒಗ್ಗೂಡಿಸಿ — ಒಂದು ವಹಿವಾಟಿನ ಪ್ರಯಾಣ</h3>

        <p>
          ನೀವು ಇನ್ಫೋಸಿಸ್‌ನ ೧೦ ಷೇರುಗಳನ್ನು ತಲಾ ₹೧,೫೦೦ ರಂತೆ ಖರೀದಿಸಲು ನಿರ್ಧರಿಸಿದ್ದೀರಿ ಎಂದು ಭಾವಿಸಿಕೊಳ್ಳಿ. ಹಂತ ಹಂತವಾಗಿ ಏನಾಗುತ್ತದೆ ಎಂದು ನೋಡೋಣ:
        </p>

        <ul className="pl-6 list-decimal space-y-1">
          <li>
            ನೀವು (ಹೂಡಿಕೆದಾರರು) <strong>ಗ್ರೋ</strong> (ನಿಮ್ಮ ದಲ್ಲಾಳಿ) ಮೂಲಕ ಆದೇಶ ನೀಡುತ್ತೀರಿ.
          </li>
          <li>
            ಗ್ರೋ ನಿಮ್ಮ ಆದೇಶವನ್ನು <strong>NSE</strong> (ವಿನಿಮಯ ಕೇಂದ್ರ) ಗೆ ರವಾನಿಸುತ್ತದೆ.
          </li>
          <li>
            NSE ನ ವ್ಯವಸ್ಥೆಯು ₹೧,೫೦೦ ಕ್ಕೆ ೧೦ ಷೇರುಗಳನ್ನು ನೀಡಲು ಸಿದ್ಧರಿರುವ ಮಾರಾಟಗಾರರನ್ನು ಹುಡುಕುತ್ತದೆ — ಹೊಂದಾಣಿಕೆ ಆದಾಗ!
          </li>
          <li>
            ವಹಿವಾಟು ತಕ್ಷಣವೇ ದೃಢೀಕರಿಸಲ್ಪಟ್ಟು <strong>ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ (NCL)</strong> ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.
          </li>
          <li>
            NCL ಪರಿಶೀಲಿಸುತ್ತದೆ:
            <ul className="pl-6 list-disc space-y-1 mt-1">
              <li>ನಿಮ್ಮ ಟ್ರೇಡಿಂಗ್ ಖಾತೆಯಲ್ಲಿ ₹೧೫,೦೦೦ ಇದೆಯೇ ಎಂಬುದನ್ನು.</li>
              <li>ಮಾರಾಟಗಾರರ ಡಿಮ್ಯಾಟ್ ಖಾತೆಯಲ್ಲಿ ೧೦ ಇನ್ಫೋಸಿಸ್ ಷೇರುಗಳಿವೆಯೇ ಎಂಬುದನ್ನು.</li>
            </ul>
          </li>
          <li>
            ಪರಿಶೀಲನೆ ಮುಗಿದ ನಂತರ, ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ ವರ್ಗಾಯಿಸುತ್ತದೆ:
            <ul className="pl-6 list-disc space-y-1 mt-1">
              <li>₹೧೫,೦೦೦ ಅನ್ನು ಮಾರಾಟಗಾರರ ದಲ್ಲಾಳಿ ಖಾತೆಗೆ.</li>
              <li>
                ೧೦ ಷೇರುಗಳನ್ನು ಮಾರಾಟಗಾರರ ಡಿಮ್ಯಾಟ್‌ನಿಂದ ನಿಮ್ಮ{" "}
                <strong>ಡಿಮ್ಯಾಟ್ ಖಾತೆಗೆ</strong> (CDSL/NSDL ನಲ್ಲಿ ಇರಿಸಲ್ಪಟ್ಟಿರುವ).
              </li>
            </ul>
          </li>
          <li>
            ಒಂದು ವ್ಯವಹಾರದ ದಿನದೊಳಗೆ (T+1), ಷೇರುಗಳು ನಿಮ್ಮ ಹುಡಿಕೆಗಳಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.
          </li>
        </ul>

        <p>
          ಈ ಇಡೀ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ, <strong>ಸೆಬಿಯು</strong> ಯಾವುದೇ ಅಕ್ರಮ, ವಿಳಂಬ ಅಥವಾ ಕುತಂತ್ರ ನಡೆಯದಂತೆ ಎಚ್ಚರಿಕೆಯಿಂದ ನಿಗಾ ಇಡುತ್ತದೆ.
        </p>

        <p>
          ಒಂದು ಸೆಕೆಂಡಿಗಿಂತ ಕಡಿಮೆ ಸಮಯದಲ್ಲಿ, ನಿಮ್ಮ ಆದೇಶವು ಅರ್ಧ ಡಜನ್ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಪ್ರಯಾಣಿಸಿತು — ನಿರ್ವಿಘ್ನವಾಗಿ, ಸುರಕ್ಷಿತವಾಗಿ ಮತ್ತು ಮೌನವಾಗಿ.
        </p>

        <div className="ch-illustration">
          <img
            src="/stock-market/image3.png"
            alt="Two characters exchanging shares and money through a broker"
            className="mx-auto max-w-xs w-full"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        When you tap <strong>&apos;Buy&apos;</strong> on your trading app, it may look like
        magic but behind that instant click lies an intricate web of institutions, technology,
        and trust. Each player in this system has a unique role, and together, they make sure
        that every trade, no matter how small, is executed safely, accurately, and fairly.
      </p>

      <p>Let&apos;s walk through the process and the people behind it</p>

      <h3>1. Investors — The Heartbeat of the Market</h3>

      <p>
        Investors are the <em>life force</em> of the stock market. They can be:
      </p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Retail Investors:</strong> Everyday people investing through apps like
          Zerodha or Groww.
        </li>
        <li>
          <strong>Institutional Investors:</strong> Big entities like mutual funds, insurance
          companies, or pension funds.
        </li>
        <li>
          <strong>Foreign Institutional Investors (FIIs):</strong> Global funds investing in
          Indian markets, often influencing trends and liquidity.
        </li>
      </ul>

      <p>
        Every rupee invested fuels the market, and collectively, investors decide which
        businesses is valuable and which is not.
      </p>

      <h3>2. Brokers — The Bridge Between You and the Market</h3>

      <p>
        You can&apos;t directly trade on the stock exchange, you need a{" "}
        <strong>registered broker</strong> to place your order. Platforms like{" "}
        <strong>Zerodha, Upstox, Angel One, Groww</strong>, and{" "}
        <strong>ICICI Direct</strong> act as intermediaries.
      </p>

      <p>
        When you click <strong>&apos;Buy&apos;</strong>, your order is routed to your
        broker&apos;s system → sent to the exchange in real time → matched with a
        seller&apos;s order.
      </p>

      <p>Brokers also:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Maintain your <strong>trading account</strong> (for buying/selling activity).
        </li>
        <li>Provide analytics, charts, and reports.</li>
        <li>
          Ensure <strong>KYC and regulatory compliance</strong> under SEBI guidelines.
        </li>
      </ul>

      <p>
        In short, your broker is the access point to the market&apos;s entire ecosystem.
      </p>

      <h3>3. Stock Exchanges — The Marketplace</h3>

      <p>
        The <strong>National Stock Exchange (NSE)</strong> and{" "}
        <strong>Bombay Stock Exchange (BSE)</strong> are where trades actually happen. They
        don&apos;t own the companies, they simply provide a platform for buying and selling
        shares securely and transparently.
      </p>

      <p>Here&apos;s what happens on the exchange:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Your <strong>buy order</strong> is matched with someone&apos;s{" "}
          <strong>sell order</strong> (based on price and time priority).
        </li>
        <li>Once matched, a trade confirmation is generated instantly.</li>
      </ul>

      <p>
        Think of it as the market&apos;s <em>matchmaker</em>, connecting buyers and sellers
        across India in milliseconds.
      </p>

      <h3>4. Clearing Corporations — The Market&apos;s Guarantee</h3>

      <p>
        Once a trade is matched, it moves to the <strong>clearing stage</strong>, handled by{" "}
        <strong>clearing corporations</strong> like{" "}
        <strong>NCL (NSE Clearing Ltd.)</strong> or{" "}
        <strong>Indian Clearing Corporation Ltd. (ICCL)</strong>.
      </p>

      <p>Their role is to:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          Verify both parties, the buyer has enough money and the seller actually owns the
          shares.
        </li>
        <li>
          Temporarily &quot;lock&quot; the shares and funds until the trade is settled.
        </li>
        <li>Guarantee completion, even if one party defaults.</li>
      </ul>

      <p>
        This ensures that no one loses money due to counterparty risk. It&apos;s the invisible
        insurance system that makes investors trust the market.
      </p>

      <h3>5. Depositories — The Digital Vaults</h3>

      <p>
        Gone are the days of paper share certificates. Today, all your holdings are stored
        digitally with <strong>NSDL (National Securities Depository Ltd.)</strong> or{" "}
        <strong>CDSL (Central Depository Services Ltd.)</strong>.
      </p>

      <p>Here&apos;s how it works:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          When you buy shares, they&apos;re credited to your{" "}
          <strong>Demat account</strong> (like a digital locker).
        </li>
        <li>When you sell, they&apos;re debited automatically.</li>
        <li>
          Your <strong>broker</strong> is linked to one of these depositories through a{" "}
          <strong>Depository Participant (DP)</strong>, typically the same app you trade on.
        </li>
      </ul>

      <p>
        Your Demat account proves your ownership, it&apos;s as important as your bank account
        in the world of investing.
      </p>

      <h3>6. SEBI — The Watchdog of the Market</h3>

      <p>
        The <strong>Securities and Exchange Board of India (SEBI)</strong> is the regulator
        that ensures markets run with fairness, transparency, and accountability.
      </p>

      <p>It:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Sets the rules for brokers, companies, and investors.</li>
        <li>Monitors insider trading and fraud.</li>
        <li>Approves IPOs and corporate actions.</li>
        <li>
          Ensures timely disclosure of financial results by listed companies.
        </li>
      </ul>

      <p>
        SEBI&apos;s presence gives confidence to investors that the market operates on equal
        footing for everyone, from a college student investing ₹500 to a global fund moving
        crores.
      </p>

      <h3>Putting It All Together — The Journey of a Trade</h3>

      <p>
        Let&apos;s say you decide to buy <strong>10 shares of Infosys</strong> at ₹1,500
        each. Here&apos;s what happens, step by step:
      </p>

      <ul className="pl-6 list-decimal space-y-1">
        <li>
          <strong>You (the investor)</strong> place the order through{" "}
          <strong>Groww (your broker)</strong>.
        </li>
        <li>
          Groww forwards your order to the <strong>NSE (the exchange)</strong>.
        </li>
        <li>
          The NSE&apos;s system finds a seller offering 10 shares at ₹1,500 — a match!
        </li>
        <li>
          The trade is confirmed instantly and sent to the{" "}
          <strong>clearing corporation (NCL)</strong>.
        </li>
        <li>
          NCL checks:
          <ul className="pl-6 list-disc space-y-1 mt-1">
            <li>You have ₹15,000 in your trading account.</li>
            <li>
              The seller has 10 Infosys shares in their Demat account.
            </li>
          </ul>
        </li>
        <li>
          Once verified, the clearing corporation transfers:
          <ul className="pl-6 list-disc space-y-1 mt-1">
            <li>₹15,000 to the seller&apos;s broker account.</li>
            <li>
              10 shares from the seller&apos;s Demat to your{" "}
              <strong>Demat account</strong> (held with <strong>CDSL/NSDL</strong>).
            </li>
          </ul>
        </li>
        <li>
          Within one business day (T+1), the shares appear in your holdings.
        </li>
      </ul>

      <p>
        Throughout this, <strong>SEBI</strong> oversees the process, ensuring no foul play,
        delays, or manipulation.
      </p>

      <p>
        In less than a second, your order travelled through half a dozen institutions,
        seamlessly, securely, and silently.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image3.png"
          alt="Two characters exchanging shares and money through a broker"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterFour({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>
          IPO (ಆರಂಭಿಕ ಸಾರ್ವಜನಿಕ ಶೇರು ಬಿಡುಗಡೆ ಪ್ರಸ್ತಾಪ) ಎಂದರೆ ಒಂದು ಖಾಸಗಿ ಕಂಪನಿಯು ಸಾರ್ವಜನಿಕವಾಗುವ ಸಂದರ್ಭದಲ್ಲಿ — ಮೊದಲ ಬಾರಿಗೆ ಜನರನ್ನು ಹೂಡಿಕೆ ಮಾಡಲು ಆಹ್ವಾನಿಸುವ ಕ್ಷಣ. ಝೊಮ್ಯಾಟೊ, ನೈಕಾ ಮತ್ತು LIC ನಂತಹ ಕಂಪನಿಗಳನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳಿ — ಅವುಗಳ IPO ಗಳು ಭಾರತದಾದ್ಯಂತ ಅಪಾರ ಸಂಚಲನ ಮೂಡಿಸಿದ್ದವು.
        </p>

        <p>
          ಹೂಡಿಕೆದಾರರಿಗೆ, ಇದು ಒಂದು ಕಂಪನಿಯ ಬೆಳವಣಿಗೆಯ ಕಥೆಯಲ್ಲಿ ಆರಂಭದಿಂದಲೇ ಭಾಗಿಯಾಗುವ ಅವಕಾಶ. ಕಂಪನಿಗೆ, ಇದು ಕಾರ್ಯಾಚರಣೆಯನ್ನು ವಿಸ್ತರಿಸಲು, ಸಾಲ ತೀರಿಸಲು ಅಥವಾ ನಾವೀನ್ಯತೆಯನ್ನು ತರಲು ಬೇಕಾದ ನಿಧಿಗೆ ಕ್ರೋಢೀಕರಿಸಲು ಇರುವ ಪ್ರವೇಶ ದಾರಿ.
        </p>

        <p>
          FPO (ಅನುಸರಣಾ ಸಾರ್ವಜನಿಕ ಪ್ರಸ್ತಾಪ) ಎಂದರೆ ಈಗಾಗಲೇ ಪಟ್ಟಿಯಾದ ಕಂಪನಿಯು ಮತ್ತಷ್ಟು ಷೇರುಗಳನ್ನು ಬಿಡುಗಡೆ ಮಾಡುವ ಸಂದರ್ಭ — ಇದನ್ನು ಬಂಡವಾಳ ಸಂಗ್ರಹದ &quot;ಎರಡನೇ ಸುತ್ತು&quot; ಎಂದು ಭಾವಿಸಬಹುದು.
        </p>

        <div className="ch-illustration">
          <img
            src="/stock-market/image7.png"
            alt="Two characters holding IPO and FPO signs with stacks of coins"
            className="mx-auto max-w-xs w-full"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        An <strong>IPO (Initial Public Offering)</strong> is when a private company becomes
        public, inviting people to invest for the first time. Think of companies like{" "}
        <strong>Zomato, Nykaa, and LIC</strong>, their IPOs created buzz across India.
      </p>

      <p>
        For investors, it&apos;s a chance to be part of a company&apos;s growth story early
        on. For the company, it&apos;s access to funds to expand operations, repay debt, or
        innovate.
      </p>

      <p>
        An <strong>FPO (Follow-on Public Offering)</strong> happens when a listed company
        issues more shares, like a &quot;second round&quot; of funding.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image7.png"
          alt="Two characters holding IPO and FPO signs with stacks of coins"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterFive({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>
          <strong><em>ಮಾರುಕಟ್ಟೆ ನಿಜವಾಗಿ ಎಷ್ಟು ಆರೋಗ್ಯಕರವಾಗಿದೆ ಎಂಬುದನ್ನು ತಿಳಿಸುವ ಹೃದಯಬಡಿತ.</em></strong>
        </p>

        <p>
          ಷೇರು ಮಾರುಕಟ್ಟೆಯನ್ನು ಒಂದು ಕ್ರಿಕೆಟ್ ಪಂದ್ಯಕ್ಕೆ ಹೋಲಿಸಿದರೆ, <strong>ಸೂಚ್ಯಂಕಗಳು</strong> ಅದರ <strong>ಸ್ಕೋರ್‌ಬೋರ್ಡ್</strong> ಇದ್ದಂತೆ. ಪ್ರತಿ ಓವರ್‌ನಲ್ಲಿ ಏನಾಗುತ್ತಿದೆ ಎಂಬುದನ್ನು ಅವು ವಿವರವಾಗಿ ತಿಳಿಸದಿದ್ದರೂ, ಆಟ ಯಾವ ದಿಕ್ಕಿನಲ್ಲಿ ಸಾಗುತ್ತಿದೆ ಎಂಬ ತ್ವರಿತ ಅಂದಾಜನ್ನು ನೀಡುತ್ತವೆ.
        </p>

        <p>
          ಅದೇ ರೀತಿ, <strong>ಷೇರು ಮಾರುಕಟ್ಟೆ ಸೂಚ್ಯಂಕವು</strong> ನಿರ್ದಿಷ್ಟ ಗುಂಪಿನ ಕಂಪನಿಗಳು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ ಎಂಬುದನ್ನು ಅಳೆಯುತ್ತದೆ — ಮಾರುಕಟ್ಟೆಯ ಒಟ್ಟಾರೆ ಮನೋಭಾವ, ಪ್ರವೃತ್ತಿ ಮತ್ತು ದಿಕ್ಕನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ಹೂಡಿಕೆದಾರರಿಗೆ ನೆರವಾಗುತ್ತದೆ.
        </p>

        <h3>ಸೂಚ್ಯಂಕ ನಿಜವಾಗಿ ಏನು ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳುವುದು</h3>

        <p>
          <strong>ಸೂಚ್ಯಂಕ</strong> ಎಂಬುದು ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ, ವಿಶಾಲ ಮಾರುಕಟ್ಟೆಯನ್ನು ಅಥವಾ ನಿರ್ದಿಷ್ಟ ಕ್ಷೇತ್ರವನ್ನು ಪ್ರತಿನಿಧಿಸುವ <strong>ಆಯ್ದ ಕಂಪನಿಗಳ ಒಂದು ಬುಟ್ಟಿ</strong>. <strong>ಸೆನ್ಸೆಕ್ಸ್</strong> ಅಥವಾ <strong>ನಿಫ್ಟಿ ೫೦</strong> ಮೇಲೆ ಅಥವಾ ಕೆಳಗೆ ಚಲಿಸಿದೆ ಎಂದು ನೀವು ಕೇಳಿದಾಗ, ಆ ಬುಟ್ಟಿಯಲ್ಲಿರುವ ಕಂಪನಿಗಳ ಬೆಲೆಗಳು ಸರಾಸರಿಯಾಗಿ ಏರಿವೆ ಅಥವಾ ಇಳಿದಿವೆ ಎಂದರ್ಥ.
        </p>

        <p>ಪ್ರತಿಯೊಂದು ಸೂಚ್ಯಂಕವು ಅರ್ಥವ್ಯವಸ್ಥೆಯ ಒಂದು ನಿರ್ದಿಷ್ಟ ಭಾಗವನ್ನು ಪ್ರತಿನಿಧಿಸಲು ರಚಿಸಲಾಗಿದೆ:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>
            <strong>ನಿಫ್ಟಿ ೫೦:</strong> NSE ನಲ್ಲಿ ಪಟ್ಟಿಯಾದ ೫೦ ಅತಿದೊಡ್ಡ ಮತ್ತು ಅತ್ಯಂತ ದ್ರವ್ಯಸಾಧ್ಯ ಕಂಪನಿಗಳು.
          </li>
          <li>
            <strong>ಸೆನ್ಸೆಕ್ಸ್:</strong> BSE ನಲ್ಲಿ ಪಟ್ಟಿಯಾದ ೩೦ ಪ್ರಮುಖ ಕಂಪನಿಗಳು.
          </li>
          
          ಒಟ್ಟಾಗಿ, ಈ ಎರಡೂ ಭಾರತದ ಆರ್ಥಿಕ ಹವಾಮಾನವನ್ನು ಅಳೆಯುವ ಅವಳಿ ತಾಪಮಾಪಕಗಳಂತಿವೆ.
        </ul>

        <h3>ಎರಡು ಪ್ರಮುಖ ಸೂಚ್ಯಂಕಗಳ ಸೂಕ್ಷ್ಮ ನೋಟ</h3>

        <p><strong>ಸೆನ್ಸೆಕ್ಸ್ (Sensitive Index)</strong></p>
        <ul className="pl-6 list-disc space-y-1">
          <li>೧೯೮೬ ರಲ್ಲಿ ಮುಂಬೈ ಷೇರು ವಿನಿಮಯದಿಂದ ಪ್ರಾರಂಭಿಸಲಾಯಿತು.</li>
          <li>ಭಾರತದ ೩೦ ಅತಿದೊಡ್ಡ ಮತ್ತು ಅತ್ಯಂತ ಉತ್ತಮವಾಗಿ ಸ್ಥಾಪಿತಗೊಂಡ ಕಂಪನಿಗಳನ್ನು ಅನುಸರಿಸುತ್ತದೆ.</li>
          <li>ರಿಲಯನ್ಸ್ ಇಂಡಸ್ಟ್ರೀಸ್, HDFC ಬ್ಯಾಂಕ್, ಇನ್ಫೋಸಿಸ್, TCS ಮತ್ತು ICICI ಬ್ಯಾಂಕ್‌ನಂತಹ ಕಂಪನಿಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.</li>
        </ul>
        <p>
          ಈ ಕಂಪನಿಗಳು IT, ಬ್ಯಾಂಕಿಂಗ್, ಇಂಧನ, ಉತ್ಪಾದನೆ, FMCG ಎಂಬ ವಿವಿಧ ವಲಯಗಳಿಂದ ಬಂದಿರುವುದರಿಂದ, ಸೆನ್ಸೆಕ್ಸ್ <strong>ಭಾರತದ ಕಾರ್ಪೊರೇಟ್ ಆರೋಗ್ಯದ ಒಂದು ಸಣ್ಣ ಚಿತ್ರಣ</strong>ದಂತೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.
        </p>

        <p><strong>ನಿಫ್ಟಿ ೫೦ (National Fifty)</strong></p>
        <ul className="pl-6 list-disc space-y-1">
          <li>೧೯೯೬ ರಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ ಷೇರು ವಿನಿಮಯದಿಂದ ಪರಿಚಯಿಸಲಾಯಿತು.</li>
          <li>ಅರ್ಥ ವ್ಯವಸ್ಥೆಯ ೧೩ ಕ್ಷೇತ್ರಗಳ ೫೦ ದೊಡ್ಡ-ಮೊತ್ತದ (Large-cap) ಕಂಪನಿಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.</li>
          <li>
            NSE ನಲ್ಲಿ ಪಟ್ಟಿಯಾದ ಎಲ್ಲ ಕಂಪನಿಗಳ ಒಟ್ಟು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯದ <strong>ಶೇಕಡಾ ೬೦ ಕ್ಕಿಂತ ಹೆಚ್ಚನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ</strong>.
          </li>
        </ul>
        <p>
          &quot;ಇಂದು ಮಾರುಕಟ್ಟೆ ಮೇಲೇರಿದೆ&quot; ಎಂದು ಜನರು ಹೇಳಿದಾಗ, ಅವರು ಸಾಮಾನ್ಯವಾಗಿ <strong>ನಿಫ್ಟಿ</strong>ಯನ್ನೇ ಉಲ್ಲೇಖಿಸುತ್ತಿರುತ್ತಾರೆ — ಭಾರತೀಯ ಹೂಡಿಕೆದಾರರ ಭಾವನೆಯ ಅತ್ಯಂತ ಅನುಸರಿಸಲ್ಪಡುವ ಮಾಪಕ ಇದೇ ಆಗಿದೆ.
        </p>

        <h3>ಸೂಚ್ಯಂಕಗಳು ಅರ್ಥವ್ಯವಸ್ಥೆಯನ್ನು ಹೇಗೆ ಪ್ರತಿಬಿಂಬಿಸುತ್ತವೆ</h3>

        <p>
          ಪ್ರತಿಯೊಂದು ಕ್ಷೇತ್ರವೂ ಸೂಚ್ಯಂಕದಲ್ಲಿ ತನ್ನದೇ ಆದ ಪಾತ್ರವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ — IT ತಂತ್ರಜ್ಞಾನಕ್ಕಾಗಿ ಜಾಗತಿಕ ಬೇಡಿಕೆಯನ್ನು ಪ್ರತಿಫಲಿಸುತ್ತದೆ, ಬ್ಯಾಂಕ್‌ಗಳು ಸಾಲ ಮತ್ತು ಬೆಳವಣಿಗೆಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ, ಮತ್ತು ಗ್ರಾಹಕ ಕಂಪನಿಗಳು ಜನರ ಖರ್ಚು ಮಾಡುವ ಸಾಮರ್ಥ್ಯವನ್ನು ಬಿಂಬಿಸುತ್ತವೆ.
        </p>

        <p>
          ನಿಫ್ಟಿ ಅಥವಾ ಸೆನ್ಸೆಕ್ಸ್ ಏರಿದಾಗ, ಅದು ಆಶಾವಾದದ ಸಂಕೇತ — ಕಂಪನಿಗಳು ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ, ಲಾಭಗಳು ಬೆಳೆಯುತ್ತಿವೆ, ಮತ್ತು ಹೂಡಿಕೆದಾರರು ವಿಶ್ವಾಸದಿಂದಿದ್ದಾರೆ ಎಂಬ ಸಂದೇಶವನ್ನು ಅದು ನೀಡುತ್ತದೆ.
        </p>

        <p>
          ಅವು ಕುಸಿದಾಗ, ಅದು ಎಚ್ಚರಿಕೆಯ ಸೂಚನೆ — ಬಹುಶಃ ಜಾಗತಿಕ ಮಂದಗತಿ, ಹಣದುಬ್ಬರ, ನೀತಿ ಬದಲಾವಣೆಗಳು ಅಥವಾ ಖರ್ಚಿನ ಕುಸಿತದಿಂದಾಗಿ ಇರಬಹುದು.
        </p>

        <p>
          ಆ ದೃಷ್ಟಿಯಿಂದ ನೋಡಿದರೆ, ಸೂಚ್ಯಂಕಗಳು <strong>ಆರ್ಥಿಕ ಮನೋಭಾವದ ದೃಶ್ಯರೂಪ</strong> — ಸರ್ಕಾರದ ನೀತಿಗಳು ಮತ್ತು ಜಾಗತಿಕ ತೈಲ ಬೆಲೆಗಳಿಂದ ಹಿಡಿದು ಗ್ರಾಹಕರ ಬೇಡಿಕೆ ಮತ್ತು ವಿದೇಶಿ ಹೂಡಿಕೆಯವರೆಗೆ ಎಲ್ಲವನ್ನೂ ಅವು ಒಳಗೊಂಡಿರುತ್ತವೆ.
        </p>

        <h3>ವಲಯ ಮತ್ತು ಥೀಮ್ (ವಿಷಯ) ಆಧಾರಿತ ಸೂಚ್ಯಂಕಗಳು</h3>

        <p>
          ನಿಫ್ಟಿ ಮತ್ತು ಸೆನ್ಸೆಕ್ಸ್ ಹೊರತಾಗಿ, ನಿರ್ದಿಷ್ಟ ಉದ್ಯಮಗಳನ್ನು ಅನುಸರಿಸುವ ಹಲವಾರು <strong>ವಲಯ ಸೂಚ್ಯಂಕಗಳಿವೆ</strong>:
        </p>
        <ul className="pl-6 list-disc space-y-1">
          <li><strong>ನಿಫ್ಟಿ ಬ್ಯಾಂಕ್</strong> — ಪ್ರಮುಖ ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಹಣಕಾಸು ಕಂಪನಿಗಳು.</li>
          <li><strong>ನಿಫ್ಟಿ IT</strong> — ಇನ್ಫೋಸಿಸ್, TCS ಮತ್ತು ವಿಪ್ರೋನಂತಹ ತಂತ್ರಜ್ಞಾನ ದಿಗ್ಗಜಗಳು.</li>
          <li><strong>ನಿಫ್ಟಿ FMCG</strong> — HUL, ನೆಸ್ಲೆ ಮತ್ತು ಡಾಬರ್‌ನಂತಹ ದೈನಂದಿನ ಬ್ರ್ಯಾಂಡ್‌ಗಳು.</li>
          <li><strong>ನಿಫ್ಟಿ ಫಾರ್ಮಾ, ನಿಫ್ಟಿ ಆಟೋ, ನಿಫ್ಟಿ ಎನರ್ಜಿ</strong> ಮತ್ತು ಇನ್ನೂ ಹಲವು.</li>
        </ul>

        <p>
          ತಾವು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳುವ ಅಥವಾ ನಂಬಿಕೆ ಇರಿಸಿರುವ ನಿರ್ದಿಷ್ಟ ಕ್ಷೇತ್ರಗಳ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಲು ಇವು ಹೂಡಿಕೆದಾರರಿಗೆ ನೆರವಾಗುತ್ತವೆ. ಉದಾಹರಣೆಗೆ, ಭಾರತದ ಡಿಜಿಟಲ್ ಬೆಳವಣಿಗೆಯ ಬಗ್ಗೆ ಆಶಾವಾದಿಯಾಗಿರುವ ಯಾರಾದರೂ <strong>ನಿಫ್ಟಿ IT ಸೂಚ್ಯಂಕ</strong>ದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಬಹುದು, ಆದರೆ ದೀರ್ಘಾವಧಿ ಗ್ರಾಹಕ ಬೆಳವಣಿಗೆಯನ್ನು ನಂಬುವವರು <strong>ನಿಫ್ಟಿ FMCG</strong> ಅನ್ನು ಆದ್ಯತೆ ನೀಡಬಹುದು.
        </p>

        <h3>ಸೂಚ್ಯಂಕಗಳನ್ನು ಹೇಗೆ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ</h3>

        <p>
          ಸೂಚ್ಯಂಕದಲ್ಲಿರುವ ಪ್ರತಿಯೊಂದು ಕಂಪನಿಯೂ ಸಮಾನ ತೂಕವನ್ನು ಹೊಂದಿರುವುದಿಲ್ಲ. ಒಂದು ಕಂಪನಿಯ ಬೆಲೆ ಬದಲಾವಣೆಯು ಸೂಚ್ಯಂಕದ ಮೇಲೆ ಎಷ್ಟು ಪ್ರಭಾವ ಬೀರುತ್ತದೆ ಎಂಬುದು ಅದರ <strong>ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ (Market Capitalization)</strong> ಅಂದರೆ ಅದರ ಎಲ್ಲಾ ಷೇರುಗಳ ಒಟ್ಟು ಮೌಲ್ಯವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಹಾಗಾಗಿ, ರಿಲಯನ್ಸ್‌ನಂತಹ ದೊಡ್ಡ ಕಂಪನಿಯಲ್ಲಿ ೧% ಬದಲಾವಣೆಯು ಸೂಚ್ಯಂಕದ ಮೇಲೆ ಸಣ್ಣ ಕಂಪನಿಯ ೧% ಬದಲಾವಣೆಗಿಂತ ಹೆಚ್ಚು ಪರಿಣಾಮ ಬೀರಬಲ್ಲದು.
        </p>

        <p>ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಹೇಳುವುದಾದರೆ:</p>
        <ul className="pl-6 list-disc space-y-1">
          <li>ದೊಡ್ಡ ಕಂಪನಿಗಳು ಸೂಚ್ಯಂಕವನ್ನು ಹೆಚ್ಚು ಚಲಿಸುತ್ತವೆ, ಸಣ್ಣ ಕಂಪನಿಗಳು ಕೇವಲ ಅವುಗಳನ್ನು ಹಿಂಬಾಲಿಸುತ್ತವೆ.</li>
        </ul>

        <h3>ಸೂಚ್ಯಂಕಗಳು ನಿಮಗೆ ಏಕೆ ಮುಖ್ಯ</h3>

        <p>
          ಸೂಚ್ಯಂಕಗಳು ಕೇವಲ ಮಾಪಕಗಳಲ್ಲ — ಅವು <strong>ಮಾನದಂಡಗಳು ಮತ್ತು ಉಪಕರಣಗಳೂ</strong> ಆಗಿವೆ:
        </p>
        <ul className="pl-6 list-disc space-y-1">
          <li>
            <strong>ಕಾರ್ಯಕ್ಷಮತೆಯ ಮಾನದಂಡ:</strong> ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ಮತ್ತು ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನಿರ್ವಾಹಕರು ತಮ್ಮ ಆದಾಯವನ್ನು ನಿಫ್ಟಿ ೫೦ ನಂತಹ ಸೂಚ್ಯಂಕಗಳೊಂದಿಗೆ ಹೋಲಿಸಿ ತಮ್ಮ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಅಳೆಯುತ್ತಾರೆ.
          </li>
          <li>
            <strong>ಇಂಡೆಕ್ಸ್ ಫಂಡ್‌ಗಳು ಮತ್ತು ETF ಗಳು:</strong> ಇವು ನೇರವಾಗಿ ಸೂಚ್ಯಂಕದಲ್ಲೇ ಹೂಡಿಕೆ ಮಾಡಲು ನಿಮಗೆ ಅನುವು ಮಾಡಿಕೊಡುತ್ತವೆ — ೫೦ ಅಥವಾ ೩೦ ಎಲ್ಲ ಕಂಪನಿಗಳಲ್ಲಿ ಒಂದು ಸಣ್ಣ ಪಾಲನ್ನು ಹೊಂದುವ ಅವಕಾಶ ನೀಡುತ್ತವೆ.
          </li>
          <li>
            <strong>ಮಾರುಕಟ್ಟೆಯ ಮನೋಭಾವ:</strong> ಸೂಚ್ಯಂಕದ ದಿಕ್ಕು ದೈನಂದಿನ ಹೂಡಿಕೆದಾರರಿಗೆ ಎಚ್ಚರಿಕೆಯಿಂದ ಇರಬೇಕೇ, ತಟಸ್ಥವಾಗಿರಬೇಕೇ ಅಥವಾ ಆಶಾವಾದಿಯಾಗಿರಬೇಕೇ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
          </li>
        </ul>

        <p>
          ಅದಕ್ಕಾಗಿಯೇ ಪ್ರತಿಯೊಬ್ಬ ಸುದ್ದಿ ನಿರೂಪಕ, ವ್ಯಾಪಾರಿ ಮತ್ತು ದೀರ್ಘಾವಧಿಯ ಹೂಡಿಕೆದಾರರು ಸೂಚ್ಯಂಕಗಳನ್ನು ವೈದ್ಯರು ರೋಗಿಯ ನಾಡಿ ತಪಾಸಿಸುವಂತೆ ಗಮನಿಸುತ್ತಾರೆ — ನಿಯಮಿತವಾಗಿ, ಎಚ್ಚರಿಕೆಯಿಂದ ಮತ್ತು ಸನ್ನಿವೇಶದ ಅರಿವಿನೊಂದಿಗೆ.
        </p>

        <div className="ch-illustration">
          <img
            src="/stock-market/image6.png"
            alt="A character standing next to a cricket-style scoreboard showing market indices"
            className="mx-auto max-w-xs w-full"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        <strong><em>The heartbeat that tells you how healthy the market really is.</em></strong>
      </p>

      <p>
        If the stock market were a cricket match, <strong>indices</strong> would be the{" "}
        <strong>scoreboard</strong>. They don&apos;t tell you everything that&apos;s happening
        in every over but they give you a quick sense of which way the game is going.
      </p>

      <p>
        In the same way, a <strong>stock market index</strong> measures how a specific group of
        companies is performing, helping investors understand the overall mood, trend, and
        direction of the market.
      </p>

      <h3>Understanding What an Index Really Is</h3>

      <p>
        An <strong>index</strong> is simply a <strong>basket of selected companies</strong>{" "}
        that represent the broader market or a particular sector. When you hear that the{" "}
        <strong>Sensex</strong> or <strong>Nifty 50</strong> has moved up or down, it means the
        prices of the companies in that basket have, on average, risen or fallen.
      </p>

      <p>Each index is built to represent a specific slice of the economy:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Nifty 50:</strong> 50 of the largest and most liquid companies listed on the
          NSE.
        </li>
        <li>
          <strong>Sensex:</strong> 30 leading companies listed on the BSE. Together, these two
          are like the twin thermometers of India&apos;s financial climate.
        </li>
      </ul>

      <h3>A Closer Look at the Big Two</h3>

      <p><strong>Sensex (Sensitive Index)</strong></p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Launched in 1986 by the Bombay Stock Exchange.</li>
        <li>Tracks 30 of the biggest and most established companies in India.</li>
        <li>
          Includes firms like Reliance Industries, HDFC Bank, Infosys, TCS, and ICICI Bank.
        </li>
      </ul>
      <p>
        Because these companies come from different sectors — IT, banking, energy,
        manufacturing, FMCG, the Sensex acts as a{" "}
        <strong>mini snapshot of India&apos;s corporate health</strong>.
      </p>

      <p><strong>Nifty 50 (National Fifty)</strong></p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Introduced by the National Stock Exchange in 1996.</li>
        <li>Includes 50 large-cap companies across 13 sectors of the economy.</li>
        <li>
          Represents over <strong>60% of the total market capitalization</strong> of all
          NSE-listed companies.
        </li>
      </ul>
      <p>
        When people say, &quot;The market is up today,&quot; they&apos;re usually referring to
        the <strong>Nifty</strong>, it&apos;s the most followed barometer of Indian investor
        sentiment.
      </p>

      <h3>How Indices Reflect the Economy</h3>

      <p>
        Each sector plays its own role in the index, IT reflects global demand for technology,
        banks represent credit and growth, and consumer companies mirror spending power. When
        the Nifty or Sensex rises, it signals optimism, companies are performing well, profits
        are growing, and investors are confident.
      </p>

      <p>
        When they fall, it suggests caution, maybe due to global slowdowns, inflation, policy
        changes, or reduced spending.
      </p>

      <p>
        In that sense, indices are <strong>economic mood boards</strong>, capturing everything
        from government policy and global oil prices to consumer demand and foreign investment.
      </p>

      <h3>Sectoral and Thematic Indices</h3>

      <p>
        Beyond the Nifty and Sensex, there are many{" "}
        <strong>sectoral indices</strong> that track specific industries:
      </p>
      <ul className="pl-6 list-disc space-y-1">
        <li><strong>Nifty Bank</strong> – Leading banking and financial companies.</li>
        <li><strong>Nifty IT</strong> – Tech giants like Infosys, TCS, and Wipro.</li>
        <li><strong>Nifty FMCG</strong> – Everyday brands like HUL, Nestl&eacute;, and Dabur.</li>
        <li><strong>Nifty Pharma, Nifty Auto, Nifty Energy</strong>, and more.</li>
      </ul>

      <p>
        These help investors focus on particular sectors they understand or believe in. For
        example, someone optimistic about India&apos;s digital growth might invest in the{" "}
        <strong>Nifty IT index</strong>, while a long-term believer in consumption might prefer{" "}
        <strong>Nifty FMCG</strong>.
      </p>

      <h3>How Indices Are Calculated</h3>

      <p>
        Each company in an index doesn&apos;t carry equal weight. The impact of a
        company&apos;s price change on the index depends on its{" "}
        <strong>market capitalization</strong>, the total value of all its shares. So, a 1%
        move in Reliance (a large-cap stock) can affect the index much more than a 1% move in
        a smaller company.
      </p>

      <p>In short:</p>
      <ul className="pl-6 list-disc space-y-1">
        <li>Big companies move the index more, small ones just follow along.</li>
      </ul>

      <h3>Why Indices Matter to You</h3>

      <p>
        Indices are not just indicators, they&apos;re also{" "}
        <strong>benchmarks and tools</strong>:
      </p>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Benchmarking Performance:</strong> Mutual funds and portfolio managers
          compare their returns against indices like Nifty 50 to judge performance.
        </li>
        <li>
          <strong>Index Funds &amp; ETFs:</strong> These allow you to invest directly in the
          index itself, owning a slice of all 50 or 30 companies.
        </li>
        <li>
          <strong>Market Sentiment:</strong> The direction of the index helps everyday
          investors decide whether to be cautious, neutral, or optimistic.
        </li>
      </ul>

      <p>
        That&apos;s why every news anchor, trader, and long-term investor watches indices like
        a doctor checks a patient&apos;s pulse, regularly, carefully, and with context.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image6.png"
          alt="A character standing next to a cricket-style scoreboard showing market indices"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterSix({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>
          ಹೂಡಿಕೆಯ ಜಗತ್ತಿಗೆ ಮೊದಲ ಬಾರಿ ಹೆಜ್ಜೆ ಇಟ್ಟಾಗ, ಅಲ್ಲಿನ ವಿಶೇಷ ಪರಿಭಾಷೆಗಳು ಮಿತಿಮೀರಿದಂತೆ, ಅರ್ಥವಾಗದ ಹೊರೆಯಂತೆ ಭಾಸವಾಗಬಹುದು — ಉಳಿದವರೆಲ್ಲರೂ ಈಗಾಗಲೇ ಮಾತನಾಡುತ್ತಿರುವ ಹೊಸ ಭಾಷೆಯಂತೆ. ಆದರೆ ಕೆಲವು ಪ್ರಮುಖ ಪದಗಳೊಂದಿಗೆ ಪರಿಚಯ ಬೆಳೆಸಿಕೊಂಡ ನಂತರ, ಮಾರುಕಟ್ಟೆ ಹೆಚ್ಚು ಅರ್ಥವಾಗಲು ಆರಂಭಿಸುತ್ತದೆ.
        </p>

        <h3>ನೀವು ಆಗಾಗ ಕೇಳುವ ದೈನಂದಿನ ಪದಗಳು</h3>
        <br></br>
        <p>
          <strong>ಷೇರು (Stock / Share):</strong> <em>ಷೇರು</em> ಎಂದರೆ ಒಂದು ಕಂಪನಿಯಲ್ಲಿ ಮಾಲೀಕತ್ವದ ಒಂದು ಘಟಕವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಒಂದು ಕಂಪನಿಯು ೧ ಕೋಟಿ ಷೇರುಗಳನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿದ್ದರೆ ಮತ್ತು ನೀವು ಅವುಗಳಲ್ಲಿ ೧,೦೦೦ ಷೇರುಗಳನ್ನು ಹೊಂದಿದ್ದರೆ, ನೀವು ಅಕ್ಷರಶಃ ಆ ಕಂಪನಿಯ ೦.೦೦೧% ರಷ್ಟು ಮಾಲೀಕರಾಗಿರುತ್ತೀರಿ.
        </p>
        <br></br>
        <p>
          <strong>ಈಕ್ವಿಟಿ (Equity):</strong> ಮಾಲೀಕತ್ವಕ್ಕೆ ಇನ್ನೊಂದು ಹೆಸರು. ಇದರ ಅರ್ಥ, ನೀವು ಕಂಪನಿಗೆ ಹಣ ಸಾಲವಾಗಿ ನೀಡುತ್ತಿಲ್ಲ (ಬಾಂಡ್‌ಧಾರಕರಂತೆ) — ಬದಲಾಗಿ, ನೀವು ಅದರ ಒಂದು ಭಾಗದ ಒಡೆತನವನ್ನು ನಿಜವಾಗಿ ಹೊಂದಿದ್ದೀರಿ.
        </p>
        <br></br>
        <p>
          <strong>ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ (Market Capitalization):</strong> ಒಂದು ಕಂಪನಿಯ ಒಟ್ಟು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ.
        </p>

        <p>ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ = ಷೇರಿನ ಬೆಲೆ × ಒಟ್ಟು ಬಾಕಿ ಷೇರುಗಳು</p>

        <p>
          ಉದಾಹರಣೆ: ರಿಲಯನ್ಸ್‌ನ ಷೇರಿನ ಬೆಲೆ ₹೩,೦೦೦ ಆಗಿದ್ದು, ಅದು ೬೭೫ ಕೋಟಿ ಷೇರುಗಳನ್ನು ಹೊಂದಿದ್ದರೆ, ಅದರ ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ ಸುಮಾರು ₹೨೦ ಲಕ್ಷ ಕೋಟಿ ಆಗುತ್ತದೆ — ಇದು ಭಾರತದ ಅತಿದೊಡ್ಡ ಕಂಪನಿಗಳಲ್ಲಿ ಒಂದಾಗಿಸುತ್ತದೆ.
        </p>
<br></br>
        <p>
          <strong>ಬುಲ್ ಮಾರ್ಕೆಟ್ (Bull Market):</strong> ಆಶಾವಾದ ತುಂಬಿ ತುಳುಕುವಾಗ ಮತ್ತು ಬೆಲೆಗಳು ನಿರಂತರವಾಗಿ ಮೇಲೇರುತ್ತಿರುವಾಗ ಇದು ಸಂಭವಿಸುತ್ತದೆ. ಹೂಡಿಕೆದಾರರು ಬೆಳವಣಿಗೆಯನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಾರೆ, ಕಂಪನಿಗಳು ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ, ಮತ್ತು ಮಾರುಕಟ್ಟೆಗಳು ಮೇಲೇರುತ್ತವೆ — ಮುನ್ನುಗ್ಗುವ ಗೂಳಿಯಂತೆ.
        </p>
<br></br>
        <p>
          <strong>ಬೇರ್ ಮಾರ್ಕೆಟ್ (Bear Market):</strong> ಭಯ ಅಥವಾ ನಿರಾಶಾವಾದ ಆವರಿಸಿದಾಗ ಮತ್ತು ಷೇರು ಬೆಲೆಗಳು ದೀರ್ಘಕಾಲ ಕುಸಿಯುತ್ತಲೇ ಇರುವಾಗ ಇದು ಸಂಭವಿಸುತ್ತದೆ — ತನ್ನ ಪಂಜಗಳಿಂದ ಕೆಳಕ್ಕೆ ಬಡಿಯುವ ಕರಡಿಯಂತೆ.
        </p>
<br></br>
        <p>
          <strong>ಪೋರ್ಟ್‌ಫೋಲಿಯೋ (Portfolio):</strong> ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಹೂಡಿಕೆಗಳ ಸಂಗ್ರಹ — ಷೇರುಗಳು, ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು, ಬಾಂಡ್‌ಗಳು, ರಿಯಲ್ ಎಸ್ಟೇಟ್, ಚಿನ್ನ ಕೂಡ. ಉತ್ತಮವಾಗಿ ವೈವಿಧ್ಯಗೊಳಿಸಿದ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಅಪಾಯವನ್ನು ವಿವಿಧ ಆಸ್ತಿಗಳಲ್ಲಿ ಹರಡಿಕೊಳ್ಳುತ್ತದೆ.
        </p>
<br></br>
        <p>
          <strong>ಲಾಭಾಂಶ (Dividend):</strong> ಕಂಪನಿಯು ತನ್ನ ಷೇರುದಾರರೊಂದಿಗೆ ಲಾಭವನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ವಿಧಾನ. ಉದಾಹರಣೆ: ಇನ್ಫೋಸಿಸ್ ತನ್ನ ಹೂಡಿಕೆದಾರರಿಗೆ ಆಗಾಗ ಲಾಭಾಂಶ ನೀಡುತ್ತದೆ — ಕಂಪನಿಯನ್ನು ನಂಬಿದ್ದಕ್ಕಾಗಿ ಒಂದು ಕೃತಜ್ಞತೆಯ ಗುರುತಾಗಿ.
        </p>
<br></br>
        <div className="ch-illustration">
          <img
            src="/stock-market/image4.png"
            alt="A character standing between a bull and a bear representing market trends"
            className="mx-auto max-w-xs w-full"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        When you first step into the world of investing, the jargon can feel overwhelming,
        like a new language everyone else already speaks. But once you get familiar with a few
        key terms, the market starts to make a lot more sense.
      </p>

      <h3>The Everyday Terms You&apos;ll Hear</h3>

      <p>
        <strong>Stock / Share:</strong> A <em>share</em> represents a single unit of ownership
        in a company. If a company has issued 1 crore shares and you own 1,000 of them, you
        literally own 0.001% of that company.
      </p>

      <p>
        <strong>Equity:</strong> Another word for ownership, it means you&apos;re not lending
        money to a company (like a bondholder), you actually own part of it.
      </p>

      <p>
        <strong>Market Capitalization (Market Cap):</strong> The total market value of a
        company.
      </p>

      <p>Market Cap = Share Price × Total Shares Outstanding</p>

      <p>
        Example: If Reliance&apos;s share price is ₹3,000 and it has 675 crore shares, its
        market cap is around ₹20 lakh crore, making it one of India&apos;s largest companies.
      </p>

      <p>
        <strong>Bull Market:</strong> When optimism runs high and prices keep climbing.
        Investors expect growth, companies perform well, and markets move up, like a bull
        charging ahead.
      </p>

      <p>
        <strong>Bear Market:</strong> When fear or pessimism dominates and stock prices fall
        for an extended period, like a bear swiping its paws downward.
      </p>

      <p>
        <strong>Portfolio:</strong> Your personal collection of investments, stocks, mutual
        funds, bonds, real estate, even gold. A well-diversified portfolio spreads risk across
        assets.
      </p>

      <p>
        <strong>Dividend:</strong> A company&apos;s way of sharing profits with shareholders.
        Example: Infosys often rewards its investors with dividends, a thank-you for believing
        in the company.
      </p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image4.png"
          alt="A character standing between a bull and a bear representing market trends"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

function ChapterSeven({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>
          ಷೇರು ಹೊಂದಿರುವುದು ಎಂದರೆ ಕೇವಲ ಬೆಲೆಗಳು ಏರಿಳಿಯುವುದನ್ನು ನೋಡುವುದಷ್ಟೇ ಅಲ್ಲ — ಕಂಪನಿಗಳು ಆಗಾಗ ನಿಮ್ಮ ಹೂಡಿಕೆಗಳ ಮೇಲೆ ನೇರ ಪರಿಣಾಮ ಬೀರುವ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ. ಇವುಗಳನ್ನು <strong>ಕಾರ್ಪೊರೇಟ್ ಕ್ರಮಗಳು</strong> ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ — ಇವು ನಿಮ್ಮ ಷೇರುಗಳ ಸಂಖ್ಯೆ, ಅವುಗಳ ಮೌಲ್ಯ ಅಥವಾ ನಿಮ್ಮ ಆದಾಯವನ್ನು ಬದಲಾಯಿಸಬಲ್ಲವು.
        </p>

        <p>ಅತ್ಯಂತ ಸಾಮಾನ್ಯವಾದವುಗಳು ಇಲ್ಲಿವೆ:</p>

        <h3>೧. ಬೋನಸ್ ವಿತರಣೆ (Bonus Issue)</h3>
        <p>
          ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಷೇರುದಾರರಿಗೆ ನಿಗದಿತ ಅನುಪಾತದಲ್ಲಿ ಉಚಿತ ಷೇರುಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ಉದಾಹರಣೆ: ಕಂಪನಿಯು <strong>೧:೧ ಬೋನಸ್</strong> ಘೋಷಿಸಿದರೆ, ನೀವು ಹೊಂದಿರುವ ಪ್ರತಿ ಷೇರಿಗೆ ಒಂದು ಹೆಚ್ಚುವರಿ ಷೇರು ಸಿಗುತ್ತದೆ. ಹೆಚ್ಚು ಹಣ ತೆರದೆ ಕೇಕ್‌ನ ಮತ್ತೊಂದು ತುಂಡು ಸಿಕ್ಕಂತೆ — ನಿಮ್ಮ ಒಟ್ಟು ಹೂಡಿಕೆ ಹೆಚ್ಚುತ್ತದೆ, ಆದರೆ ಒಟ್ಟು ಮೌಲ್ಯ ಅಷ್ಟೇ ಇರುತ್ತದೆ.
        </p>

        <h3>೨. ಷೇರು ವಿಭಜನೆ (Stock Split)</h3>
        <p>
          ಷೇರುಗಳನ್ನು ಹೆಚ್ಚು ಕೈಗೆಟಕುವಂತೆ ಮಾಡಲು ಮತ್ತು ದ್ರವ್ಯತೆ ಹೆಚ್ಚಿಸಲು ಕಂಪನಿಯು ತನ್ನ ಅಸ್ತಿತ್ವದ ಷೇರುಗಳನ್ನು ಸಣ್ಣ ಘಟಕಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ. ಉದಾಹರಣೆ: <strong>೧:೫ ವಿಭಜನೆ</strong>ಯಲ್ಲಿ ₹೧೦೦ ರ ಒಂದು ಷೇರು ತಲಾ ₹೨೦ ರ ೫ ಷೇರುಗಳಾಗುತ್ತದೆ. ಒಟ್ಟು ಮೌಲ್ಯ ಬದಲಾಗುವುದಿಲ್ಲ, ಆದರೆ ಸಣ್ಣ ಹೂಡಿಕೆದಾರರು ಈಗ ಸುಲಭವಾಗಿ ಖರೀದಿಸಬಹುದು.
        </p>

        <h3>೩. ಲಾಭಾಂಶ ಪಾವತಿ (Dividend Payout)</h3>
        <p>
          ಕಂಪನಿಗಳು ತಮ್ಮ ಲಾಭದ ಒಂದು ಭಾಗವನ್ನು ಷೇರುದಾರರಿಗೆ ವಿತರಿಸುತ್ತವೆ. ಉದಾಹರಣೆ: TCS ಪ್ರತಿ ಷೇರಿಗೆ ₹೨೪ ಲಾಭಾಂಶ ಘೋಷಿಸಿದರೆ, ನೀವು ೧೦೦ ಷೇರುಗಳನ್ನು ಹೊಂದಿದ್ದರೆ, ₹೨,೪೦೦ ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಮೂಲಕ ಸ್ವೀಕರಿಸುತ್ತೀರಿ.
        </p>

        <h3>೪. ಹಕ್ಕು ವಿತರಣೆ (Rights Issue)</h3>
        <p>
          ಹೆಚ್ಚುವರಿ ನಿಧಿ ಸಂಗ್ರಹಿಸಲು ಕಂಪನಿಯು ಅಸ್ತಿತ್ವದ ಷೇರುದಾರರಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಹೆಚ್ಚಿನ ಷೇರುಗಳನ್ನು ಖರೀದಿಸುವ ಅವಕಾಶ ನೀಡುತ್ತದೆ. ಉದಾಹರಣೆ: <strong>೧:೪ ಹಕ್ಕು ವಿತರಣೆ</strong> ಎಂದರೆ ನೀವು ಹೊಂದಿರುವ ಪ್ರತಿ ನಾಲ್ಕು ಷೇರುಗಳಿಗೆ ಒಂದು ಹೆಚ್ಚುವರಿ ಷೇರನ್ನು ಕಡಿಮೆ ಬೆಲೆಗೆ ಖರೀದಿಸಬಹುದು.
        </p>

        <h3>೫. ಷೇರು ಮರುಖರೀದಿ (Buyback)</h3>
        <p>
          ಕಂಪನಿಯು ಮಾರುಕಟ್ಟೆಯಿಂದ ತನ್ನ ಸ್ವಂತ ಷೇರುಗಳನ್ನು ಮರಳಿ ಖರೀದಿಸುತ್ತದೆ. ಇದು ಚಲಾವಣೆಯಲ್ಲಿರುವ ಷೇರುಗಳ ಸಂಖ್ಯೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ — ಇದರಿಂದ ಪ್ರತಿ ಷೇರಿನ ಗಳಿಕೆ (EPS) ಮತ್ತು ಷೇರಿನ ಬೆಲೆ ಹೆಚ್ಚಾಗಬಹುದು. ಉದಾಹರಣೆ: ಇನ್ಫೋಸಿಸ್ ಮತ್ತು ವಿಪ್ರೋ ಹೂಡಿಕೆದಾರರನ್ನು ಪ್ರೋತ್ಸಾಹಕವಾಗಿ ಆಗಾಗ ಮರುಖರೀದಿ ಘೋಷಿಸುತ್ತವೆ.
        </p>

        <h3>೬. ವಿಲೀನ ಅಥವಾ ವಿಭಜನೆ (Merger or Demerger)</h3>
        <ul className="pl-6 list-disc space-y-1">
          <li>
            <strong>ವಿಲೀನ:</strong> ಎರಡು ಕಂಪನಿಗಳು ಒಂದಾಗಿ ಹೊಸ ಸಂಸ್ಥೆ ರೂಪಿಸುತ್ತವೆ (HDFC ಮತ್ತು HDFC ಬ್ಯಾಂಕ್ ವಿಲೀನದಂತೆ).
          </li>
          <li>
            <strong>ವಿಭಜನೆ:</strong> ಕಂಪನಿಯು ತನ್ನ ಒಂದು ವ್ಯವಹಾರ ವಿಭಾಗವನ್ನು ಪ್ರತ್ಯೇಕ ಸಂಸ್ಥೆಯಾಗಿ ಬೇರ್ಪಡಿಸುತ್ತದೆ (ರಿಲಯನ್ಸ್ Jio ಫೈನಾನ್ಷಿಯಲ್ ಅನ್ನು ಬೇರ್ಪಡಿಸಿದಂತೆ). 
            </li>
            <br></br>
            ಈ ಕ್ರಮಗಳು ನಿಮ್ಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಪುನರ್ರಚಿಸಬಲ್ಲವು — ವಿಲೀನ ಅಥವಾ ಬೇರ್ಪಟ್ಟ ಕಂಪನಿಯಲ್ಲಿ ನಿಮಗೆ ಹೊಸ ಷೇರುಗಳು ಸಿಗಬಹುದು.
        </ul>
      </>
    );
  }

  return (
    <>
      <p>
        Owning a share doesn&apos;t just mean watching prices go up and down, companies often
        take actions that directly impact your holdings. These are called{" "}
        <strong>corporate actions</strong>, and they can change the number of shares you own,
        their value, or your income.
      </p>

      <p>Here are the most common ones</p>

      <h3>1. Bonus Issue</h3>
      <p>
        Free shares issued to existing shareholders, often in a fixed ratio. Example: If a
        company announces a <strong>1:1 bonus</strong>, you get one additional share for every
        share you already own. It&apos;s like getting an extra slice of cake without paying
        more, your total holding increases, but the overall value stays the same.
      </p>

      <h3>2. Stock Split</h3>
      <p>
        When a company divides its existing shares into smaller units to make them more
        affordable and increase liquidity. Example: A <strong>1:5 split</strong> means each
        ₹100 share becomes 5 shares of ₹20 each. The total value doesn&apos;t change, but
        smaller investors can now buy in more easily.
      </p>

      <h3>3. Dividend Payouts</h3>
      <p>
        Companies distribute a portion of their profits to shareholders. Example: If TCS
        announces a ₹24 dividend per share, and you own 100 shares, you&apos;ll receive
        ₹2,400 directly in your bank account.
      </p>

      <h3>4. Rights Issue</h3>
      <p>
        A company offers existing shareholders the chance to buy more shares, usually at a
        discount, to raise additional funds. Example: A <strong>1:4 rights issue</strong>{" "}
        means you can buy one extra share for every four you already own, often at a lower
        price.
      </p>

      <h3>5. Buyback</h3>
      <p>
        When a company repurchases its own shares from the market. This reduces the number of
        shares in circulation, often boosting earnings per share (EPS) and, in turn, the stock
        price. Example: Infosys and Wipro frequently announce buybacks as a way to reward
        investors.
      </p>

      <h3>6. Merger or Demerger</h3>
      <ul className="pl-6 list-disc space-y-1">
        <li>
          <strong>Merger:</strong> Two companies combine to form a new entity (like HDFC and
          HDFC Bank merging).
        </li>
        <li>
          <strong>Demerger:</strong> A company splits a business unit into a separate entity
          (like Reliance spinning off Jio Financial). These actions can reshape your portfolio,
          as you may receive new shares in the merged or separated company.
        </li>
      </ul>
    </>
  );
}

function ChapterEight({ lang }: { lang: string }) {
  if (lang === "kn") {
    return (
      <>
        <p>ನೀವು ಬಹಳ ದೂರ ಬಂದಿದ್ದೀರಿ.</p>

        <p>
          ಷೇರು ಮಾರುಕಟ್ಟೆ ನಿಜವಾಗಿ ಏನು ಎಂಬುದನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ ಆರಂಭಿಸಿ, ವಹಿವಾಟುಗಳು ಹೇಗೆ ನಡೆಯುತ್ತವೆ, ಅವುಗಳನ್ನು ಯಾರು ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತಾರೆ, ಮತ್ತು ಆ ಗೊಂದಲಮಯ ಪದಗಳು ಏನನ್ನು ಅರ್ಥೈಸುತ್ತವೆ ಎಂಬುದವರೆಗೆ — ಪ್ರತಿಯೊಬ್ಬ ಹೂಡಿಕೆದಾರರಿಗೂ ಅಗತ್ಯವಾದ ಭದ್ರ ಅಡಿಪಾಯವನ್ನು ನೀವು ನಿರ್ಮಿಸಿಕೊಂಡಿದ್ದೀರಿ.
        </p>

        <p>
          ಒಂದು ಕಾಲದಲ್ಲಿ ಗದ್ದಲದಂತೆ ಭಾಸವಾಗುತ್ತಿದ್ದ ಪರಿಭಾಷಿಕ ಪದಗಳು ಈಗ ಅರ್ಥವಾಗುತ್ತದೆ. &quot;ನಿಫ್ಟಿ ಏರಿತು, ರಿಲಯನ್ಸ್ ಮರುಖರೀದಿ ಘೋಷಿಸಿತು, ಮತ್ತು ಸೆಬಿ ನಿಯಂತ್ರಣ ಬಿಗಿಗೊಳಿಸುತ್ತಿದೆ&quot; ಎಂದು ಯಾರಾದರೂ ಹೇಳಿದಾಗ ಅದರ ಅರ್ಥ ನಿಮಗೆ ತಿಳಿಯುತ್ತದೆ. ಇದು ನಿಜವಾದ ಪ್ರಗತಿ — ಮತ್ತು ಇದು ನಿಮಗೆ ಕೇವಲ ವೀಕ್ಷಕರಾಗಿ ಅಲ್ಲ, ಭಾಗವಹಿಸುವವರಾಗಿ ಆತ್ಮವಿಶ್ವಾಸ ನೀಡುವ ಜ್ಞಾನ.
        </p>

        <p>
          ಮಾರುಕಟ್ಟೆ ಯಾವುದೋ ಅಮೂರ್ತ ಜೂಜಿನ ಅಡ್ಡೆಯಲ್ಲ ಎಂಬುದು ನಿಮಗೀಗ ಅರ್ಥವಾಗಿದೆ — ಅದು ವ್ಯವಹಾರಗಳು, ಹೂಡಿಕೆದಾರರು ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳು ಒಟ್ಟಾಗಿ ಕೆಲಸ ಮಾಡುವ ಒಂದು ಜೀವಂತ ಪರಿಸರ ವ್ಯವಸ್ಥೆ. ನೀವು ಹೂಡಿಕೆ ಮಾಡಿದಾಗ, ಅರ್ಥವ್ಯವಸ್ಥೆಯ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುವ ಆಲೋಚನೆಗಳು, ಜನರು ಮತ್ತು ಕಂಪನಿಗಳ ಹಿಂದೆ ನಿಮ್ಮ ಹಣವನ್ನು ಇಡುತ್ತಿದ್ದೀರಿ.
        </p>

        <p>
          ನಾವು ಮುಂದಕ್ಕೆ ಹೋದಂತೆ ವಿಷಯಗಳು ಸ್ವಲ್ಪ ಹೆಚ್ಚು ಪ್ರಾಯೋಗಿಕವಾಗಲಿವೆ. <strong>ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಹೇಗೆ ಓದುವುದು, ಕಂಪನಿಗಳನ್ನು ಹೇಗೆ ವಿಶ್ಲೇಷಿಸುವುದು, ಮತ್ತು ಶಾಂತ ಮನಸ್ಸು ಹಾಗೂ ಸ್ಪಷ್ಟ ಗುರಿಯೊಂದಿಗೆ ಹೆಚ್ಚು ಬುದ್ಧಿವಂತ ಹೂಡಿಕೆಯ ಆಯ್ಕೆಗಳನ್ನು ಹೇಗೆ ಮಾಡುವುದು</strong> ಎಂಬುದನ್ನು ನಾವು ಮುಂದಿನ ಹಂತದಲ್ಲಿ ಅನ್ವೇಷಿಸಲಿದ್ದೇವೆ.
        </p>

        <p>
          ಹಾಗಾಗಿ ಇಲ್ಲಿಯವರೆಗೆ ಬಂದಿರುವುದಕ್ಕಾಗಿ ಒಂದು ಕ್ಷಣ ತೆಗೆದುಕೊಂಡು ನಿಮ್ಮನ್ನು ನೀವು ಅಭಿನಂದಿಸಿಕೊಳ್ಳಿ. ಬಹಳಷ್ಟು ಜನರು ಮುಖ್ಯ ಸುದ್ದಿಗಳ ಆಚೆ ನೋಡುವುದೇ ಇಲ್ಲ. ನೀವು ಅದನ್ನು ಮಾಡಿದ್ದೀರಿ.
        </p>

        <p>ಮುಂದುವರಿಯೋಣ — ನಿಜವಾದ ಹೂಡಿಕೆಯ ಪ್ರಯಾಣ ಇಲ್ಲಿಂದಲೇ ಆರಂಭವಾಗುತ್ತದೆ.</p>

        <div className="ch-illustration">
          <img
            src="/stock-market/image1.png"
            alt="A character looking up at a staircase leading to a trophy, symbolizing the investing journey ahead"
            className="mx-auto max-w-xs w-full"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p>You&apos;ve come a long way.</p>

      <p>
        From understanding what the stock market really is to learning how trades happen, who
        makes them work, and what those confusing terms mean, you&apos;ve built the foundation
        every investor needs.
      </p>

      <p>
        The jargon that once felt like noise now makes sense. You know what it means when
        someone says, &quot;Nifty&apos;s up, Reliance announced a buyback, and SEBI&apos;s
        tightening regulations.&quot; That&apos;s real progress and it&apos;s the kind of
        knowledge that gives you confidence to participate, not just observe.
      </p>

      <p>
        You now understand that the market isn&apos;t some abstract casino, it&apos;s a living
        ecosystem of businesses, investors, and systems working together. And when you invest,
        you&apos;re putting your money behind ideas, people, and companies shaping the
        economy&apos;s future.
      </p>

      <p>
        As we move forward, things will get a bit more practical. The next phase is where we
        start exploring{" "}
        <strong>
          how to read markets, analyze companies, and make smarter investment choices
        </strong>
        , all with a calm head and a clear goal.
      </p>

      <p>
        So take a moment to appreciate getting this far. Most people never look beyond the
        headlines. You just did.
      </p>

      <p>Let&apos;s move on, the real investing journey begins now.</p>

      <div className="ch-illustration">
        <img
          src="/stock-market/image1.png"
          alt="A character looking up at a staircase leading to a trophy, symbolizing the investing journey ahead"
          className="mx-auto max-w-xs w-full"
        />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Chapter definitions — bilingual titles + content components
// ─────────────────────────────────────────────────────────────────────────────

export const chapters: {
  title: { en: string; kn: string };
  content: { en: React.ReactNode; kn: React.ReactNode };
}[] = [
  {
    title: {
      en: "Chapter 1: What Is the Stock Market?",
      kn: "ಅಧ್ಯಾಯ ೧: ಷೇರು ಮಾರುಕಟ್ಟೆ ಎಂದರೇನು?",
    },
    content: {
      en: <ChapterOne lang="en" />,
      kn: <ChapterOne lang="kn" />,
    },
  },
  {
    title: {
      en: "Chapter 2: Why Does the Stock Market Exist?",
      kn: "ಅಧ್ಯಾಯ ೨: ಷೇರು ಮಾರುಕಟ್ಟೆ ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ?",
    },
    content: {
      en: <ChapterTwo lang="en" />,
      kn: <ChapterTwo lang="kn" />,
    },
  },
  {
    title: {
      en: "Chapter 3: The Key Players - Who Makes It All Work",
      kn: "ಅಧ್ಯಾಯ ೩: ಪ್ರಮುಖ ಪಾತ್ರಧಾರಿಗಳು — ಇದನ್ನೆಲ್ಲ ನಡೆಸುವವರು ಯಾರು?",
    },
    content: {
      en: <ChapterThree lang="en" />,
      kn: <ChapterThree lang="kn" />,
    },
  },
  {
    title: {
      en: "Chapter 4: IPOs & FPOs - How Companies Raise Money",
      kn: "ಅಧ್ಯಾಯ ೪: IPO ಮತ್ತು FPO - ಕಂಪನಿಗಳು ಹಣ ಸಂಗ್ರಹಿಸುವ ವಿಧಾನ",
    },
    content: {
      en: <ChapterFour lang="en" />,
      kn: <ChapterFour lang="kn" />,
    },
  },
  {
    title: {
      en: "Chapter 5: Indices - The Market's Pulse",
      kn: "ಅಧ್ಯಾಯ ೫: ಸೂಚ್ಯಂಕಗಳು - ಮಾರುಕಟ್ಟೆಯ ನಾಡಿಮಿಡಿತ",
    },
    content: {
      en: <ChapterFive lang="en" />,
      kn: <ChapterFive lang="kn" />,
    },
  },
  {
    title: {
      en: "Chapter 6: Understanding the Basics - Key Jargon Simplified",
      kn: "ಅಧ್ಯಾಯ ೬: ಮೂಲಭೂತ ಪರಿಭಾಷೆ ಸರಳೀಕರಿಸಲಾಗಿದೆ",
    },
    content: {
      en: <ChapterSix lang="en" />,
      kn: <ChapterSix lang="kn" />,
    },
  },
  {
    title: {
      en: "Chapter 7: Corporate Actions",
      kn: "ಅಧ್ಯಾಯ ೭: ಕಾರ್ಪೊರೇಟ್ ಕ್ರಮಗಳ ಬಗ್ಗೆ ಮಾತನಾಡೋಣ",
    },
    content: {
      en: <ChapterSeven lang="en" />,
      kn: <ChapterSeven lang="kn" />,
    },
  },
  {
    title: {
      en: "Chapter 8: Wrapping Up - You Now Speak the Market's Language",
      kn: "ಅಧ್ಯಾಯ ೮: ನೀವು ಈಗ ಮಾರುಕಟ್ಟೆಯ ಭಾಷೆ ಮಾತನಾಡುತ್ತೀರಿ",
    },
    content: {
      en: <ChapterEight lang="en" />,
      kn: <ChapterEight lang="kn" />,
    },
  },
];
