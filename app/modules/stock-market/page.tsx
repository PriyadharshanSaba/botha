"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function StockMarketPage() {
  const { t, lang } = useLanguage();
  // ============================================================
  // ALL CHAPTER CONTENT &mdash; BILINGUAL (English + Kannada)
  // ============================================================
  const chapters = [
    {
      title: {
        en: "Introduction to Stock Markets",
        kn: "ಷೇರು ಮಾರುಕಟ್ಟೆಗೆ ಪರಿಚಯ",
      },
      content: {
        en: (
          <>
            <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              Understand how companies raise capital, how trades happen,
              and how the market reflects the pulse of the economy.
            </p>
          </>
        ),
        kn: (
          <>
            <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7 }}>
              ಕಂಪನಿಗಳು ಬಂಡವಾಳ ಹೇಗೆ ಸಂಗ್ರಹಿಸುತ್ತವೆ, ವ್ಯಾಪಾರಗಳು ಹೇಗೆ ನಡೆಯುತ್ತವೆ,
              ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಆರ್ಥಿಕತೆಯ ನಾಡಿಮಿಡಿತವನ್ನು ಹೇಗೆ ಪ್ರತಿಫಲಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 1: What Is the Stock Market?",
        kn: "ಅಧ್ಯಾಯ 1: ಷೇರು ಮಾರುಕಟ್ಟೆ ಎಂದರೇನು?",
      },
      content: {
        en: (
          <>
            <p>
              Imagine your favourite coffee brand &mdash; say, Tata Coffee &mdash; wants to open 500 new
              outlets across India. That kind of expansion needs money &mdash; to buy land, build
              stores, hire staff, and market the brand. Instead of borrowing a huge amount
              from banks, the company can raise money by offering ownership stakes &mdash; called
              shares &mdash; to people like you and me.
            </p>

            <p>
              When you buy a share, you're not just investing your money &mdash; you're becoming a
              co-owner of that company. If the business does well, your share becomes more
              valuable too. You might even receive a dividend &mdash; a portion of the company's
              profits.
            </p>

            <p>
              This is the essence of the stock market &mdash; an organized marketplace where
              companies raise funds and investors share in their success.
            </p>

            <h3>Where All Listed Companies Live</h3>
            <p>
              Listed companies are those whose shares are available for public trading. They
              must follow SEBI's regulations and disclose their performance regularly.
              Listing gives them credibility, transparency, and access to investors.
            </p>

            <p>
              From giants like Reliance and Infosys to new-age startups like Nykaa and Zomato
              &mdash; thousands of companies are listed on India's stock exchanges.
            </p>

            <h3>A Marketplace Built on Belief</h3>
            <p>
              The stock market isn't just about numbers &mdash; it's about belief in the future of
              businesses. Prices move constantly due to demand, supply, and global or company
              events. It's a living reflection of the economy.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              ನಿಮ್ಮ ನೆಚ್ಚಿನ ಕಾಫಿ ಬ್ರ್ಯಾಂಡ್ &mdash; ಉದಾಹರಣೆಗೆ, ಟಾಟಾ ಕಾಫಿ &mdash; ಭಾರತಾದ್ಯಂತ 500 ಹೊಸ ಮಳಿಗೆಗಳನ್ನು ತೆರೆಯಲು ಬಯಸುತ್ತದೆ ಎಂದು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ಅಂತಹ ವಿಸ್ತರಣೆಗೆ ಹಣ ಬೇಕು &mdash; ಭೂಮಿ ಖರೀದಿಸಲು, ಅಂಗಡಿ ನಿರ್ಮಿಸಲು, ಸಿಬ್ಬಂದಿ ನೇಮಿಸಲು, ಮತ್ತು ಬ್ರ್ಯಾಂಡ್ ಪ್ರಚಾರ ಮಾಡಲು.
            </p>
            <p>
              ಬ್ಯಾಂಕ್‌ಗಳಿಂದ ದೊಡ್ಡ ಮೊತ್ತ ಎರವಲು ಪಡೆಯುವ ಬದಲು, ಕಂಪನಿಯು ನಿಮ್ಮಂತಹ ಜನರಿಗೆ ಮಾಲೀಕತ್ವದ ಪಾಲು &mdash; ಅಂದರೆ ಷೇರುಗಳನ್ನು &mdash; ನೀಡಿ ಹಣ ಸಂಗ್ರಹಿಸಬಹುದು.
            </p>
            <p>
              ನೀವು ಒಂದು ಷೇರು ಖರೀದಿಸಿದಾಗ, ನೀವು ಕೇವಲ ಹಣ ಹೂಡಿಕೆ ಮಾಡುತ್ತಿಲ್ಲ &mdash; ನೀವು ಆ ಕಂಪನಿಯ ಸಹ-ಮಾಲೀಕರಾಗುತ್ತಿದ್ದೀರಿ.
            </p>
            <p>
              ವ್ಯವಹಾರ ಚೆನ್ನಾಗಿ ನಡೆದರೆ, ಲಾಭ ಗಳಿಸಿದರೆ, ಮತ್ತು ಮೌಲ್ಯ ಹೆಚ್ಚಿದರೆ, ನಿಮ್ಮ ಷೇರೂ ಹೆಚ್ಚು ಮೌಲ್ಯಯುತವಾಗುತ್ತದೆ. ನಿಮಗೆ ಡಿವಿಡೆಂಡ್ ಕೂಡ ಸಿಗಬಹುದು &mdash; ಕಂಪನಿಯ ಲಾಭದ ಒಂದು ಭಾಗ ಷೇರುದಾರರಿಗೆ ವಿತರಿಸಲಾಗುತ್ತದೆ.
            </p>
            <p>
              ಅದೇ ಷೇರು ಮಾರುಕಟ್ಟೆಯ ಸಾರ &mdash; ಕಂಪನಿಗಳು ಹಣ ಸಂಗ್ರಹಿಸುವ ಮತ್ತು ಹೂಡಿಕೆದಾರರು ಅವರ ಯಶಸ್ಸಿನಲ್ಲಿ ಭಾಗವಹಿಸುವ ದೊಡ್ಡ, ಸಂಘಟಿತ ಮಾರುಕಟ್ಟೆ.
            </p>
            <h3>ಪಟ್ಟಿ ಕಂಪನಿಗಳ ನೆಲೆ</h3>
            <p>
              ಸಾರ್ವಜನಿಕರು ಖರೀದಿ-ಮಾರಾಟ ಮಾಡಬಹುದಾದ ಷೇರುಗಳನ್ನು ಹೊಂದಿರುವ ಕಂಪನಿಯನ್ನು ಪಟ್ಟಿ ಕಂಪನಿ ಎನ್ನುತ್ತಾರೆ.
            </p>
            <p>
              ಪಟ್ಟಿಗೊಳ್ಳಲು, ಕಂಪನಿಯು SEBI (ಭಾರತೀಯ ಭದ್ರತೆಗಳು ಮತ್ತು ವಿನಿಮಯ ಮಂಡಳಿ) ಮತ್ತು ಷೇರು ವಿನಿಮಯಗಳು &mdash; ಮುಖ್ಯವಾಗಿ NSE ಮತ್ತು BSE &mdash; ಜೊತೆಗೆ ಕಠಿಣ ಅನುಮೋದನಾ ಪ್ರಕ್ರಿಯೆ ಮೂಲಕ ಹಾದುಹೋಗಬೇಕು.
            </p>
            <p>
              ಪಟ್ಟಿಗೊಂಡ ನಂತರ, ಕಂಪನಿಯ ಷೇರುಗಳು ಸಾರ್ವಜನಿಕವಾಗಿ ವಹಿವಾಟು ಮಾಡಬಹುದು, ಪಾರದರ್ಶಕತೆ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಬೇಕು, ಮತ್ತು ಷೇರುದಾರರಿಗೆ ಉತ್ತರದಾಯಿಯಾಗಿರಬೇಕು.
            </p>
            <p>
              ಪಟ್ಟಿಗೊಳ್ಳುವುದು ವಿಶ್ವಾಸ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಗುರುತು. ರಿಲಯನ್ಸ್, ಇನ್ಫೋಸಿಸ್, HDFC ಬ್ಯಾಂಕ್‌ನಿಂದ ಹಿಡಿದು ನ್ಯಾಕಾ ಮತ್ತು ಜೊಮ್ಯಾಟೋವರೆಗೆ ಸಾವಿರಾರು ಕಂಪನಿಗಳು ಭಾರತದ ಷೇರು ವಿನಿಮಯಗಳಲ್ಲಿ ಪಟ್ಟಿಯಾಗಿವೆ.
            </p>
            <h3>ನಂಬಿಕೆಯ ಮೇಲೆ ನಿರ್ಮಿತ ಮಾರುಕಟ್ಟೆ</h3>
            <p>
              ಸಾಮಾನ್ಯ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನೀವು ವಸ್ತು ಖರೀದಿಸುತ್ತೀರಿ &mdash; ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನೀವು ಸಾಧ್ಯತೆಯನ್ನು ಖರೀದಿಸುತ್ತೀರಿ, ನೀವು ನಂಬುವ ವ್ಯವಹಾರಗಳ ಭವಿಷ್ಯವನ್ನು.
            </p>
            <p>
              ಈ ಷೇರುಗಳು ಪ್ರತಿದಿನ ವಹಿವಾಟಾಗುವುದರಿಂದ, ಬೆಲೆಗಳು ನಿರಂತರ ಚಲಿಸುತ್ತವೆ &mdash; ಬೇಡಿಕೆ, ಪೂರೈಕೆ, ಕಂಪನಿ ಕಾರ್ಯಕ್ಷಮತೆ, ಜಾಗತಿಕ ಘಟನೆಗಳು, ಮತ್ತು ಹೂಡಿಕೆದಾರರ ಭಾವನೆಗಳಿಂದ ಚಾಲಿತ.
            </p>
            <p>
              ಷೇರು ಮಾರುಕಟ್ಟೆ, ಆ ಅರ್ಥದಲ್ಲಿ, ಆರ್ಥಿಕತೆಯ ಜೀವಂತ, ಉಸಿರಾಡುವ ಪ್ರತಿಬಿಂಬ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 2: Why Does the Stock Market Exist?",
        kn: "ಅಧ್ಯಾಯ 2: ಷೇರು ಮಾರುಕಟ್ಟೆ ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ?",
      },
      content: {
        en: (
          <>
            <p>
              The stock market exists because ambition needs capital. Before markets, only
              kings and banks could fund growth. When the Dutch East India Company issued the
              first shares in the 1600s, it gave ordinary people the power to invest &mdash;
              birthing the modern economy.
            </p>

            <p>
              In India, companies like Infosys, TCS, and Reliance have used stock markets to
              raise funds, expand, and innovate &mdash; creating jobs and wealth. Every trade
              represents investment that fuels national growth.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              ಷೇರು ಮಾರುಕಟ್ಟೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಏಕೆಂದರೆ ಮಹತ್ವಾಕಾಂಕ್ಷೆಗೆ ಯಾವಾಗಲೂ ಇಂಧನ ಬೇಕು &mdash; ಮತ್ತು ಆ ಇಂಧನವೇ ಬಂಡವಾಳ.
            </p>
            <p>
              ಷೇರು ಮಾರುಕಟ್ಟೆಗಳ ಮೊದಲು, ಕೇವಲ ರಾಜರು, ಬ್ಯಾಂಕ್‌ಗಳು, ಅಥವಾ ಶ್ರೀಮಂತ ವ್ಯಾಪಾರಿಗಳು ಮಾತ್ರ ವ್ಯವಹಾರಗಳಿಗೆ ಹಣ ಒದಗಿಸಬಹುದಿತ್ತು. 1600ರ ದಶಕದಲ್ಲಿ ಡಚ್ ಈಸ್ಟ್ ಇಂಡಿಯಾ ಕಂಪನಿ ಮೊದಲ ಷೇರುಗಳನ್ನು ನೀಡಿದಾಗ, ಎಲ್ಲವೂ ಬದಲಾಯಿತು. ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಸಾಮಾನ್ಯ ನಾಗರಿಕರೂ ಜಾಗತಿಕ ವ್ಯಾಪಾರದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಬಹುದಾಯಿತು.
            </p>
            <p>
              ಭಾರತದಲ್ಲಿ, ಇನ್ಫೋಸಿಸ್, TCS, ಮತ್ತು ರಿಲಯನ್ಸ್‌ನಂತಹ ಕಂಪನಿಗಳು ಮಾರುಕಟ್ಟೆಯನ್ನು ಬಳಸಿ ಹಣ ಸಂಗ್ರಹಿಸಿ ವಿಸ್ತರಿಸಿಕೊಂಡಿವೆ &mdash; ಉದ್ಯೋಗ, ನಾವೀನ್ಯ, ಮತ್ತು ಸಂಪತ್ತನ್ನು ಸೃಷ್ಟಿಸಿವೆ.
            </p>
            <p>
              ಪ್ರತಿ ವಹಿವಾಟು ಕೇವಲ ಪರದೆಯ ಮೇಲಿನ ಒಂದು ಸಂಖ್ಯೆಯಲ್ಲ &mdash; ಅದು ದೇಶಾದ್ಯಂತ ಬೆಳವಣಿಗೆಯನ್ನು ಚಾಲನೆ ಮಾಡುವ ಹೂಡಿಕೆ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 3: The Key Players &mdash; Who Makes It All Work",
        kn: "ಅಧ್ಯಾಯ 3: ಪ್ರಮುಖ ಆಟಗಾರರು &mdash; ಇದನ್ನು ಯಾರು ನಡೆಸುತ್ತಾರೆ?",
      },
      content: {
        en: (
          <>
            <p>
              When you tap 'Buy' on your trading app, an intricate system springs into action
              &mdash; powered by investors, brokers, exchanges, clearing corporations, depositories,
              and SEBI.
            </p>

            <h3>1. Investors &mdash; The Heartbeat of the Market</h3>
            <p>
              Investors can be retail (everyday individuals), institutional (mutual funds,
              insurance firms), or foreign (FIIs). Their collective decisions determine which
              businesses thrive.
            </p>

            <h3>2. Brokers &mdash; The Bridge Between You and the Market</h3>
            <p>
              Brokers like Zerodha, Upstox, and Groww connect you to the exchange. They handle
              order routing, compliance, and reports &mdash; acting as your gateway to trading.
            </p>

            <h3>3. Stock Exchanges &mdash; The Marketplace</h3>
            <p>
              The NSE and BSE match buyers and sellers, ensuring fast and fair trades. They're
              the market's matchmakers, executing millions of transactions in seconds.
            </p>

            <h3>4. Clearing Corporations &mdash; The Market's Guarantee</h3>
            <p>
              Institutions like NCL and ICCL verify both sides of a trade, ensuring money and
              shares are exchanged correctly. They guarantee smooth settlement and eliminate
              counterparty risk.
            </p>

            <h3>5. Depositories &mdash; The Digital Vaults</h3>
            <p>
              Your shares are stored digitally with NSDL or CDSL &mdash; accessed through your
              broker-linked Demat account. This replaces old paper certificates with secure
              digital ownership.
            </p>

            <h3>6. SEBI &mdash; The Watchdog of the Market</h3>
            <p>
              SEBI ensures transparency and fairness. It regulates brokers, monitors insider
              trading, approves IPOs, and ensures companies disclose results on time.
            </p>

            <h3>Putting It All Together &mdash; The Journey of a Trade</h3>
            <p>
              When you buy shares, your order passes through your broker, gets matched on the
              exchange, verified by the clearing corporation, and credited to your Demat &mdash;
              all under SEBI's oversight. In seconds, your investment journey begins.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              ನೀವು ನಿಮ್ಮ ಟ್ರೇಡಿಂಗ್ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ 'ಖರೀದಿ' ಟ್ಯಾಪ್ ಮಾಡಿದಾಗ, ಅದು ಮ್ಯಾಜಿಕ್‌ನಂತೆ ಕಾಣಬಹುದು &mdash; ಆದರೆ ಆ ತಕ್ಷಣದ ಕ್ಲಿಕ್ ಹಿಂದೆ ಸಂಸ್ಥೆಗಳು, ತಂತ್ರಜ್ಞಾನ, ಮತ್ತು ವಿಶ್ವಾಸದ ಸಂಕೀರ್ಣ ಜಾಲ ಇದೆ.
            </p>
            <h3>1. ಹೂಡಿಕೆದಾರರು &mdash; ಮಾರುಕಟ್ಟೆಯ ಹೃದಯಬಡಿತ</h3>
            <p>
              ಝೆರೋಧಾ ಅಥವಾ ಗ್ರೋ ಬಳಸುವ ಚಿಲ್ಲರೆ ಹೂಡಿಕೆದಾರರು, ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಮತ್ತು ವಿಮಾ ಕಂಪನಿಗಳಂತಹ ಸಾಂಸ್ಥಿಕ ಹೂಡಿಕೆದಾರರು, ಮತ್ತು ಭಾರತದ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವ ವಿದೇಶಿ ಸಾಂಸ್ಥಿಕ ಹೂಡಿಕೆದಾರರು (FII) &mdash; ಎಲ್ಲರೂ ಮಾರುಕಟ್ಟೆಯ ಜೀವಶಕ್ತಿ.
            </p>
            <h3>2. ಬ್ರೋಕರ್‌ಗಳು &mdash; ನಿಮ್ಮ ಮತ್ತು ಮಾರುಕಟ್ಟೆಯ ನಡುವಿನ ಸೇತುವೆ</h3>
            <p>
              ನೀವು ನೇರವಾಗಿ ಷೇರು ವಿನಿಮಯದಲ್ಲಿ ವ್ಯಾಪಾರ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ &mdash; ನಿಮಗೆ ನೋಂದಾಯಿತ ಬ್ರೋಕರ್ ಅಗತ್ಯ. ಝೆರೋಧಾ, ಅಪ್‌ಸ್ಟಾಕ್ಸ್, ಏಂಜಲ್ ಒನ್, ಗ್ರೋ, ಮತ್ತು ICICI ಡೈರೆಕ್ಟ್ ಮಧ್ಯವರ್ತಿಗಳಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಾರೆ.
            </p>
            <h3>3. ಷೇರು ವಿನಿಮಯಗಳು &mdash; ಮಾರುಕಟ್ಟೆ ಸ್ಥಳ</h3>
            <p>
              NSE (ನ್ಯಾಷನಲ್ ಸ್ಟಾಕ್ ಎಕ್ಸ್‌ಚೇಂಜ್) ಮತ್ತು BSE (ಬಾಂಬೆ ಸ್ಟಾಕ್ ಎಕ್ಸ್‌ಚೇಂಜ್) ಖರೀದಿದಾರರು ಮತ್ತು ಮಾರಾಟಗಾರರನ್ನು ಜೋಡಿಸುತ್ತವೆ. ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಲಕ್ಷಾಂತರ ವ್ಯವಹಾರಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ.
            </p>
            <h3>4. ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಶನ್‌ಗಳು &mdash; ಮಾರುಕಟ್ಟೆಯ ಖಾತರಿ</h3>
            <p>
              NSE ಕ್ಲಿಯರಿಂಗ್ ಮತ್ತು ICCL ನಂತಹ ಸಂಸ್ಥೆಗಳು ಖರೀದಿ ಮತ್ತು ಮಾರಾಟ ಎರಡೂ ಕಡೆ ಎಲ್ಲ ಸರಿಯಿದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತವೆ. ಅವರು ಮಧ್ಯ ಪ್ರವೇಶಿಸಿ ಎರಡೂ ಕಡೆ ಡೀಲ್ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳಲಾಗುವುದು ಎಂದು ಖಾತ್ರಿ ನೀಡುತ್ತಾರೆ.
            </p>
            <h3>5. ಡಿಪಾಸಿಟರಿಗಳು &mdash; ಡಿಜಿಟಲ್ ವಾಲ್ಟ್</h3>
            <p>
              ನಿಮ್ಮ ಷೇರುಗಳು NSDL ಅಥವಾ CDSL ಮೂಲಕ ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲ್ಪಡುತ್ತವೆ &mdash; ನಿಮ್ಮ ಬ್ರೋಕರ್‌ಗೆ ಲಿಂಕ್ ಆದ ಡಿಮ್ಯಾಟ್ ಖಾತೆ ಮೂಲಕ ಪ್ರವೇಶಿಸಬಹುದು.
            </p>
            <h3>6. SEBI &mdash; ಮಾರುಕಟ್ಟೆಯ ರಕ್ಷಕ</h3>
            <p>
              SEBI (ಭಾರತೀಯ ಭದ್ರತೆಗಳು ಮತ್ತು ವಿನಿಮಯ ಮಂಡಳಿ) ಮಾರುಕಟ್ಟೆ ನ್ಯಾಯಯುತ, ಪಾರದರ್ಶಕ, ಮತ್ತು ಸ್ಥಿರವಾಗಿ ಇರುವಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತದೆ. ಇದು ಬ್ರೋಕರ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ, ಒಳಗಿನ ವ್ಯಾಪಾರವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತದೆ, IPO ಗಳನ್ನು ಅನುಮೋದಿಸುತ್ತದೆ, ಮತ್ತು ಕಂಪನಿಗಳು ಫಲಿತಾಂಶಗಳನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಬಹಿರಂಗಪಡಿಸುತ್ತವೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ.
            </p>
            <h3>ಒಟ್ಟಾಗಿ &mdash; ವ್ಯಾಪಾರದ ಯಾತ್ರೆ</h3>
            <p>
              ನೀವು ಷೇರು ಖರೀದಿಸಿದಾಗ, ನಿಮ್ಮ ಆದೇಶ ನಿಮ್ಮ ಬ್ರೋಕರ್ ಮೂಲಕ ಹೋಗಿ, ವಿನಿಮಯದಲ್ಲಿ ಹೊಂದಾಣಿಕೆ ಆಗಿ, ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಶನ್ ಪರಿಶೀಲಿಸಿ, ನಿಮ್ಮ ಡಿಮ್ಯಾಟ್‌ಗೆ ಜಮಾ ಆಗುತ್ತದೆ &mdash; ಇವೆಲ್ಲ SEBI ನಿಗಾದಲ್ಲಿ. ಸೆಕೆಂಡುಗಳಲ್ಲಿ, ನಿಮ್ಮ ಹೂಡಿಕೆ ಪ್ರಯಾಣ ಆರಂಭವಾಗುತ್ತದೆ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 4: IPOs & FPOs &mdash; How Companies Raise Money",
        kn: "ಅಧ್ಯಾಯ 4: IPO ಮತ್ತು FPO &mdash; ಕಂಪನಿಗಳು ಹಣ ಸಂಗ್ರಹಿಸುವ ವಿಧಾನ",
      },
      content: {
        en: (
          <>
            <p>
              An IPO (Initial Public Offering) is when a private company goes public, allowing
              the public to invest. It helps the company expand, repay debt, or fund
              innovation. An FPO (Follow-on Public Offering) happens when an already-listed
              company issues more shares to raise additional capital.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              IPO (ಆರಂಭಿಕ ಸಾರ್ವಜನಿಕ ಕೊಡುಗೆ) ಎಂದರೆ ಒಂದು ಖಾಸಗಿ ಕಂಪನಿ ಸಾರ್ವಜನಿಕವಾಗುವ ಸಂದರ್ಭ &mdash; ಮೊದಲ ಬಾರಿಗೆ ಜನರನ್ನು ಹೂಡಿಕೆ ಮಾಡಲು ಆಹ್ವಾನಿಸುವುದು.
            </p>
            <p>
              ಜೊಮ್ಯಾಟೋ, ನ್ಯಾಕಾ, ಮತ್ತು LIC ನಂತಹ ಕಂಪನಿಗಳ IPO ಭಾರತಾದ್ಯಂತ ಸಂಚಲನ ಸೃಷ್ಟಿಸಿದವು. ಹೂಡಿಕೆದಾರರಿಗೆ, ಇದು ಕಂಪನಿಯ ಬೆಳವಣಿಗೆಯ ಕಥೆಯಲ್ಲಿ ಆರಂಭದಲ್ಲೇ ಭಾಗಿಯಾಗುವ ಅವಕಾಶ. ಕಂಪನಿಗೆ, ಇದು ಕಾರ್ಯ ವಿಸ್ತರಿಸಲು, ಸಾಲ ತೀರಿಸಲು, ಅಥವಾ ನಾವೀನ್ಯಕ್ಕಾಗಿ ಹಣ ಪಡೆಯುವ ದಾರಿ.
            </p>
            <p>
              FPO (ಅನುಸರಣ ಸಾರ್ವಜನಿಕ ಕೊಡುಗೆ) ಪಟ್ಟಿ ಕಂಪನಿ ಮತ್ತಷ್ಟು ಷೇರುಗಳನ್ನು ನೀಡುವಾಗ ನಡೆಯುತ್ತದೆ &mdash; ಹಣ ಸಂಗ್ರಹದ "ಎರಡನೇ ಸುತ್ತಿನಂತೆ."
            </p>
            <p>
              IPO ಎಂದರೆ ಕಂಪನಿ ಸಾರ್ವಜನಿಕರಿಗೆ ನೀಡುವ ಆಹ್ವಾನ: "ನಮ್ಮಲ್ಲಿ ನಂಬಿಕೆ ಇಡಿ. ನಮ್ಮ ಪ್ರಯಾಣದಲ್ಲಿ ಭಾಗಿಯಾಗಿ."
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 5: Indices &mdash; The Market's Pulse",
        kn: "ಅಧ್ಯಾಯ 5: ಸೂಚ್ಯಂಕಗಳು &mdash; ಮಾರುಕಟ್ಟೆಯ ನಾಡಿಮಿಡಿತ",
      },
      content: {
        en: (
          <>
            <p>
              Indices measure how groups of companies perform &mdash; much like a scoreboard in a
              cricket match. When indices like the Nifty 50 or Sensex rise, it reflects
              optimism and growth. When they fall, it signals caution.
            </p>

            <h3>Understanding What an Index Is</h3>
            <p>
              An index is a basket of selected companies representing the broader market or a
              sector. Sensex tracks 30 major companies; Nifty 50 tracks 50 top NSE-listed
              firms.
            </p>

            <h3>Sectoral and Thematic Indices</h3>
            <p>
              Indices like Nifty Bank, Nifty IT, or Nifty FMCG let investors focus on
              industries they believe in &mdash; banking, tech, or consumer goods.
            </p>

            <h3>Why Indices Matter</h3>
            <p>
              Indices serve as benchmarks for fund performance, help investors gauge market
              sentiment, and even form the basis for index funds and ETFs.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              ಷೇರು ಮಾರುಕಟ್ಟೆ ಕ್ರಿಕೆಟ್ ಪಂದ್ಯವಾಗಿದ್ದರೆ, ಸೂಚ್ಯಂಕಗಳು ಸ್ಕೋರ್‌ಬೋರ್ಡ್.
            </p>
            <p>
              ಪ್ರತಿ ಓವರ್‌ನಲ್ಲಿ ಏನು ನಡೆಯುತ್ತಿದೆ ಎಂಬ ಎಲ್ಲ ವಿವರ ಅವು ಹೇಳದಿದ್ದರೂ &mdash; ಆಟ ಯಾವ ದಿಕ್ಕಿನಲ್ಲಿ ಸಾಗುತ್ತಿದೆ ಎಂಬ ತ್ವರಿತ ಅಂದಾಜು ಕೊಡುತ್ತವೆ.
            </p>
            <p>
              ಅದೇ ರೀತಿ, ಷೇರು ಮಾರುಕಟ್ಟೆ ಸೂಚ್ಯಂಕ ನಿರ್ದಿಷ್ಟ ಕಂಪನಿ ಗುಂಪು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ ಎಂಬುದನ್ನು ಅಳೆಯುತ್ತದೆ &mdash; ಮಾರುಕಟ್ಟೆಯ ಒಟ್ಟಾರೆ ಮನಸ್ಥಿತಿ, ಪ್ರವೃತ್ತಿ, ಮತ್ತು ದಿಕ್ಕನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
            </p>
            <h3>ಸೂಚ್ಯಂಕ ನಿಜವಾಗಿ ಏನು?</h3>
            <p>
              ಸೂಚ್ಯಂಕ ಎಂದರೆ ಸರಳವಾಗಿ ಒಂದು ಆಯ್ದ ಕಂಪನಿಗಳ ಬುಟ್ಟಿ &mdash; ಅದು ವಿಶಾಲ ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಒಂದು ನಿರ್ದಿಷ್ಟ ವಲಯವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.
            </p>
            <p>
              ಸೆನ್ಸೆಕ್ಸ್ ಅಥವಾ ನಿಫ್ಟಿ 50 ಏರಿದೆ ಅಥವಾ ಇಳಿದಿದೆ ಎಂದು ಕೇಳಿದಾಗ, ಆ ಬುಟ್ಟಿಯಲ್ಲಿರುವ ಕಂಪನಿಗಳ ಬೆಲೆ ಸರಾಸರಿ ಏರಿದೆ ಅಥವಾ ಇಳಿದಿದೆ ಎಂದರ್ಥ.
            </p>
            <p>
              ನಿಫ್ಟಿ 50 NSE ಯಲ್ಲಿ ಅತಿ ದೊಡ್ಡ 50 ಕಂಪನಿಗಳನ್ನು ಹೊಂದಿದೆ. ಸೆನ್ಸೆಕ್ಸ್ BSE ಯಲ್ಲಿ ಅತಿ ದೊಡ್ಡ 30 ಕಂಪನಿಗಳನ್ನು ಹೊಂದಿದೆ.
            </p>
            <h3>ಕ್ಷೇತ್ರ ಮತ್ತು ವಿಷಯಾಧಾರಿತ ಸೂಚ್ಯಂಕಗಳು</h3>
            <p>
              ನಿಫ್ಟಿ ಬ್ಯಾಂಕ್ (ಬ್ಯಾಂಕಿಂಗ್ ಷೇರುಗಳು), ನಿಫ್ಟಿ IT (ತಂತ್ರಜ್ಞಾನ ಕಂಪನಿಗಳು), ನಿಫ್ಟಿ FMCG (ಗ್ರಾಹಕ ಸರಕು), ಮತ್ತು ನಿಫ್ಟಿ ಫಾರ್ಮಾ (ಔಷಧ) ನಿರ್ದಿಷ್ಟ ಕ್ಷೇತ್ರ ಅಥವಾ ವಿಷಯದ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತವೆ.
            </p>
            <h3>ಸೂಚ್ಯಂಕಗಳು ಏಕೆ ಮುಖ್ಯ?</h3>
            <p>
              ಅವು ಮಾರುಕಟ್ಟೆ ಭಾವನೆ ಅಳೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ, ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಕಾರ್ಯಕ್ಷಮತೆಗೆ ಮಾನದಂಡವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ, ಮತ್ತು ಇಂಡೆಕ್ಸ್ ಫಂಡ್ ಮತ್ತು ETF ಗಳ ಆಧಾರವಾಗಿರುತ್ತವೆ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 6: Understanding the Basics &mdash; Key Jargon Simplified",
        kn: "ಅಧ್ಯಾಯ 6: ಮೂಲಭೂತ ಪರಿಭಾಷೆ ಸರಳೀಕರಿಸಲಾಗಿದೆ",
      },
      content: {
        en: (
          <>
            <ul>
              <li><strong>Stock / Share:</strong> A unit of ownership in a company.</li>
              <li><strong>Equity:</strong> Ownership stake &mdash; not a loan, but a share of the business.</li>
              <li><strong>Market Capitalization:</strong> Total company value = Share price × Number of shares.</li>
              <li><strong>Bull Market:</strong> A period of rising optimism and prices.</li>
              <li><strong>Bear Market:</strong> A period of pessimism and falling prices.</li>
              <li><strong>Portfolio:</strong> Your collection of investments &mdash; across stocks, funds, real estate, etc.</li>
              <li><strong>Dividend:</strong> Profit shared by companies with their shareholders.</li>
            </ul>
          </>
        ),
        kn: (
          <>
            <p>
              ಹೂಡಿಕೆ ಜಗತ್ತಿಗೆ ಮೊದಲ ಬಾರಿ ಕಾಲಿಡುವಾಗ, ಪರಿಭಾಷೆ ಅಭಿಭೂತಗೊಳಿಸಬಹುದು &mdash; ಎಲ್ಲರೂ ಈಗಾಗಲೇ ಮಾತನಾಡುವ ಹೊಸ ಭಾಷೆಯಂತೆ. ಆದರೆ ಕೆಲವು ಪ್ರಮುಖ ಪದಗಳನ್ನು ತಿಳಿದ ನಂತರ, ಮಾರುಕಟ್ಟೆ ಹೆಚ್ಚು ಅರ್ಥವಾಗಲು ಆರಂಭಿಸುತ್ತದೆ.
            </p>
            <h3>ಷೇರು / ಶೇರ್</h3>
            <p>
              ಒಂದು ಕಂಪನಿಯಲ್ಲಿ ಮಾಲೀಕತ್ವದ ಒಂದು ಘಟಕ. ಕಂಪನಿ 1 ಕೋಟಿ ಷೇರು ನೀಡಿದ್ದರೆ ಮತ್ತು ನೀವು 1,000 ಹೊಂದಿದ್ದರೆ, ನೀವು ಅಕ್ಷರಶಃ ಆ ಕಂಪನಿಯ 0.001% ಮಾಲೀಕರು.
            </p>
            <h3>ಈಕ್ವಿಟಿ</h3>
            <p>
              ಮಾಲೀಕತ್ವದ ಇನ್ನೊಂದು ಪದ. ನೀವು ಕಂಪನಿಗೆ ಹಣ ಸಾಲ ನೀಡುತ್ತಿಲ್ಲ &mdash; ನೀವು ಅದರ ಭಾಗ ಮಾಲೀಕರಾಗುತ್ತೀರಿ.
            </p>
            <h3>ಮಾರುಕಟ್ಟೆ ಬಂಡವಾಳೀಕರಣ</h3>
            <p>
              ಕಂಪನಿಯ ಒಟ್ಟು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ: ಷೇರು ಬೆಲೆ × ಒಟ್ಟು ಷೇರುಗಳ ಸಂಖ್ಯೆ. ರಿಲಯನ್ಸ್ ₹3,000 ಷೇರು ಬೆಲೆ ಮತ್ತು 675 ಕೋಟಿ ಷೇರು ಹೊಂದಿದ್ದರೆ, ಅದರ ಮಾರ್ಕೆಟ್ ಕ್ಯಾಪ್ ₹20 ಲಕ್ಷ ಕೋಟಿ ಮೀರುತ್ತದೆ.
            </p>
            <h3>ಬುಲ್ ಮಾರ್ಕೆಟ್</h3>
            <p>
              ಷೇರು ಬೆಲೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಏರುತ್ತಿರುವ ಸಮಯ. ಆಶಾವಾದ ಮತ್ತು ಬಲವಾದ ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆ ಇದ್ದಾಗ ಅದು ತೆರೆದುಕೊಳ್ಳುತ್ತದೆ.
            </p>
            <h3>ಬೇರ್ ಮಾರ್ಕೆಟ್</h3>
            <p>
              ಬೆಲೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಇಳಿಯುತ್ತಿರುವ ಸಮಯ. ಹೂಡಿಕೆದಾರರು ಮಾರಾಟ ಮಾಡುತ್ತಾರೆ ಮತ್ತು ಭಾವನೆ ನಕಾರಾತ್ಮಕ.
            </p>
            <h3>ಪೋರ್ಟ್‌ಫೋಲಿಯೊ</h3>
            <p>
              ನೀವು ಹೊಂದಿರುವ ಎಲ್ಲ ಹೂಡಿಕೆಗಳ ಸಂಗ್ರಹ &mdash; ಷೇರುಗಳು, ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು, ಬಾಂಡ್‌ಗಳು, ಚಿನ್ನ, ರಿಯಲ್ ಎಸ್ಟೇಟ್.
            </p>
            <h3>ಡಿವಿಡೆಂಡ್</h3>
            <p>
              ಕಂಪನಿ ಷೇರುದಾರರಿಗೆ ಲಾಭ ಹಂಚಿಕೊಂಡಾಗ. TCS ಸ್ಥಿರವಾಗಿ ₹72&ndash;80 ವಾರ್ಷಿಕ ಡಿವಿಡೆಂಡ್ ನೀಡಿದೆ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 7: Corporate Actions &mdash; When Companies Reshape Value",
        kn: "ಅಧ್ಯಾಯ 7: ಕಾರ್ಪೊರೇಟ್ ಕ್ರಮಗಳ ಬಗ್ಗೆ ಮಾತನಾಡೋಣ",
      },
      content: {
        en: (
          <>
            <p>
              Owning a share doesn&apos;t just mean watching prices go up and down &mdash; companies
              often take actions that directly impact your holdings. These are called corporate
              actions.
            </p>
            <hr className="chapter-rule" />
            <h3>Bonus Issue</h3>
            <p>
              Free shares issued to existing shareholders in a fixed ratio. A 1:1 bonus means
              you get one additional share for every share you own. Your total holding
              increases, but the overall value stays the same.
            </p>
            <hr className="chapter-rule" />
            <h3>Stock Split</h3>
            <p>
              A company divides its shares into smaller units to make them more affordable.
              A 1:5 split means each ₹100 share becomes 5 shares of ₹20 each. Total value
              doesn&apos;t change, but smaller investors can buy in more easily.
            </p>
            <hr className="chapter-rule" />
            <h3>Dividend Payouts</h3>
            <p>
              Companies distribute profits to shareholders. If TCS announces a ₹24 dividend
              per share and you own 100 shares, you receive ₹2,400 directly in your bank
              account.
            </p>
            <hr className="chapter-rule" />
            <h3>Rights Issue</h3>
            <p>
              A company offers existing shareholders the chance to buy more shares at a
              discount. A 1:4 rights issue means you can buy one extra share for every four
              you already own.
            </p>
            <hr className="chapter-rule" />
            <h3>Buyback</h3>
            <p>
              A company repurchases its own shares from the market, reducing shares in
              circulation and often boosting earnings per share and stock price. Infosys and
              Wipro frequently announce buybacks as a way to reward investors.
            </p>
            <hr className="chapter-rule" />
            <h3>Merger or Demerger</h3>
            <p>
              <strong>Merger:</strong> Two companies combine into one entity (like HDFC and
              HDFC Bank merging). <strong>Demerger:</strong> A company splits a business unit
              into a separate entity (like Reliance spinning off Jio Financial). These can
              reshape your portfolio as you may receive new shares.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              ಷೇರು ಹೊಂದಿರುವುದು ಕೇವಲ ಬೆಲೆ ಏರಿಳಿತ ನೋಡುವುದಲ್ಲ &mdash; ಕಂಪನಿಗಳು ನಿಮ್ಮ ಹೋಲ್ಡಿಂಗ್‌ಗಳ ಮೇಲೆ ನೇರ ಪರಿಣಾಮ ಬೀರುವ ಕ್ರಮಗಳನ್ನು ಆಗಾಗ ತೆಗೆದುಕೊಳ್ಳುತ್ತವೆ. ಇವನ್ನು ಕಾರ್ಪೊರೇಟ್ ಕ್ರಮಗಳು ಎನ್ನುತ್ತಾರೆ.
            </p>
            <h3>ಬೋನಸ್ ಷೇರು</h3>
            <p>
              ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಷೇರುದಾರರಿಗೆ ನಿರ್ದಿಷ್ಟ ಅನುಪಾತದಲ್ಲಿ ಉಚಿತ ಷೇರುಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ. 1:1 ಬೋನಸ್ ಎಂದರೆ ನೀವು ಹೊಂದಿರುವ ಪ್ರತಿ ಷೇರಿಗೆ ಒಂದು ಹೆಚ್ಚುವರಿ ಷೇರು ಸಿಗುತ್ತದೆ. ಒಟ್ಟು ಹೋಲ್ಡಿಂಗ್ ಹೆಚ್ಚುತ್ತದೆ, ಆದರೆ ಒಟ್ಟು ಮೌಲ್ಯ ಅದೇ ಉಳಿಯುತ್ತದೆ.
            </p>
            <h3>ಸ್ಟಾಕ್ ಸ್ಪ್ಲಿಟ್</h3>
            <p>
              ಕಂಪನಿ ತನ್ನ ಷೇರುಗಳನ್ನು ಸಣ್ಣ ಘಟಕಗಳಾಗಿ ವಿಭಜಿಸಿ ಹೆಚ್ಚು ಕೈಗೆಟಕುವಂತೆ ಮಾಡುತ್ತದೆ. 1:5 ಸ್ಪ್ಲಿಟ್ ಎಂದರೆ ₹100 ರ ಒಂದು ಷೇರು ₹20 ರ 5 ಷೇರುಗಳಾಗುತ್ತದೆ. ಒಟ್ಟು ಮೌಲ್ಯ ಬದಲಾಗುವುದಿಲ್ಲ.
            </p>
            <h3>ಡಿವಿಡೆಂಡ್ ಪಾವತಿ</h3>
            <p>
              ಕಂಪನಿಗಳು ಲಾಭವನ್ನು ಷೇರುದಾರರಿಗೆ ವಿತರಿಸುತ್ತವೆ.
            </p>
            <h3>ರೈಟ್ಸ್ ಇಶ್ಯೂ</h3>
            <p>
              ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಷೇರುದಾರರಿಗೆ ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಹೆಚ್ಚಿನ ಷೇರುಗಳನ್ನು ಖರೀದಿಸುವ ಹಕ್ಕನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ಇದು ಹಣ ಸಂಗ್ರಹಿಸುವ ಮತ್ತೊಂದು ವಿಧಾನ.
            </p>
            <h3>ಬೈಬ್ಯಾಕ್</h3>
            <p>
              ಕಂಪನಿ ಮಾರುಕಟ್ಟೆಯಿಂದ ತನ್ನ ಸ್ವಂತ ಷೇರುಗಳನ್ನು ಮರಳಿ ಖರೀದಿಸುತ್ತದೆ. ಇದು ಉಳಿದ ಷೇರುಗಳ ಮೌಲ್ಯ ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಕಂಪನಿ ತನ್ನ ಭವಿಷ್ಯದ ಬಗ್ಗೆ ವಿಶ್ವಾಸ ಹೊಂದಿದೆ ಎಂಬ ಸಂಕೇತ.
            </p>
            <h3>ವಿಲೀನ / ವಿಭಜನೆ</h3>
            <p>
              ಕಂಪನಿಗಳು ವಿಲೀನ ಆದಾಗ (ವಿಲೀನ), ಮಾಲೀಕತ್ವ ಮತ್ತು ಮೌಲ್ಯ ಬದಲಾಗುತ್ತದೆ. ಕಂಪನಿ ವಿಭಜನೆ ಆದಾಗ (ವಿಭಜನೆ), ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಹೊಸ ಕಂಪನಿಗಳು ಹುಟ್ಟಿಕೊಳ್ಳುತ್ತವೆ.
            </p>
          </>
        ),
      },
    },

    {
      title: {
        en: "Chapter 8: Wrapping Up &mdash; You Now Speak the Market's Language",
        kn: "ಅಧ್ಯಾಯ 8: ನೀವು ಈಗ ಮಾರುಕಟ್ಟೆಯ ಭಾಷೆ ಮಾತನಾಡುತ್ತೀರಿ",
      },
      content: {
        en: (
          <>
            <p>
              You've come a long way &mdash; understanding what markets are, how trades happen,
              and who makes it all work. You can now read financial headlines with
              confidence.
            </p>

            <p>
              The stock market isn't a casino &mdash; it's a living ecosystem of businesses,
              investors, and systems shaping our economy. When you invest, you're
              supporting progress and innovation.
            </p>

            <p>
              The next step? Learning how to analyze companies, understand valuations, and
              make smart, calm investment decisions. The real journey starts here.
            </p>
          </>
        ),
        kn: (
          <>
            <p>
              ನೀವು ಬಹಳ ದೂರ ಬಂದಿದ್ದೀರಿ.
            </p>
            <p>
              ಷೇರು ಮಾರುಕಟ್ಟೆ ಏನು ಎಂಬುದರಿಂದ ಹಿಡಿದು, ವ್ಯಾಪಾರಗಳು ಹೇಗೆ ನಡೆಯುತ್ತವೆ, ಯಾರು ಅವನ್ನು ನಿರ್ವಹಿಸುತ್ತಾರೆ, ಮತ್ತು ಆ ಗೊಂದಲ ಮೂಡಿಸುವ ಪದಗಳ ಅರ್ಥ ಏನು &mdash; ನೀವು ಪ್ರತಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಅಗತ್ಯವಾದ ಅಡಿಪಾಯ ನಿರ್ಮಿಸಿದ್ದೀರಿ.
            </p>
            <p>
              ಒಮ್ಮೆ ಗೊಂದಲ ಮೂಡಿಸುತ್ತಿದ್ದ ಪರಿಭಾಷೆ ಈಗ ಅರ್ಥವಾಗುತ್ತದೆ. "ನಿಫ್ಟಿ ಏರಿದೆ, ರಿಲಯನ್ಸ್ ಬೈಬ್ಯಾಕ್ ಪ್ರಕಟಿಸಿದೆ, SEBI ನಿಯಮಗಳನ್ನು ಬಿಗಿಗೊಳಿಸುತ್ತಿದೆ" ಎಂದು ಯಾರಾದರೂ ಹೇಳಿದಾಗ ಅದರ ಅರ್ಥ ನಿಮಗೆ ತಿಳಿಯುತ್ತದೆ.
            </p>
            <p>
              ಮಾರುಕಟ್ಟೆ ಯಾವುದೋ ಅಮೂರ್ತ ಜೂಜಿನ ತಾಣವಲ್ಲ &mdash; ಅದು ವ್ಯವಹಾರಗಳು, ಹೂಡಿಕೆದಾರರು, ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳ ಜೀವಂತ ಪರಿಸರ ವ್ಯವಸ್ಥೆ. ನೀವು ಹೂಡಿಕೆ ಮಾಡಿದಾಗ, ಆರ್ಥಿಕತೆಯ ಭವಿಷ್ಯ ರೂಪಿಸುತ್ತಿರುವ ಕಲ್ಪನೆಗಳು, ಜನರು, ಮತ್ತು ಕಂಪನಿಗಳ ಹಿಂದೆ ನಿಮ್ಮ ಹಣ ಇಡುತ್ತೀರಿ.
            </p>
            <p>
              ಮುಂದಿನ ಹಂತ ಹೆಚ್ಚು ಪ್ರಾಯೋಗಿಕವಾಗಿರುತ್ತದೆ &mdash; ಕಂಪನಿಗಳನ್ನು ಹೇಗೆ ವಿಶ್ಲೇಷಿಸುವುದು, ಮೌಲ್ಯಮಾಪನ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು, ಮತ್ತು ಶಾಂತ ಮನಸ್ಸಿನಿಂದ ಸ್ಮಾರ್ಟ್ ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದು ಹೇಗೆ. ನಿಜವಾದ ಪ್ರಯಾಣ ಇಲ್ಲಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.
            </p>
          </>
        ),
      },
    },
  ];

  // ============================================================
  // STATE & PARAMS
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const moduleId = "stock-market";

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
