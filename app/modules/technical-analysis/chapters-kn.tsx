import React from "react";

const imgStyle: React.CSSProperties = {
  display: "block", margin: "28px auto", maxWidth: "100%",
  borderRadius: 12, border: "1px solid rgba(201,168,76,0.15)",
};

export const chaptersKn: { title: string; content: React.ReactNode }[] = [
  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧: ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಎಂದರೇನು?",
    content: (
      <>
        <p>ಸೂಚಕಗಳು ಮತ್ತು ಮಾದರಿಗಳ ಬಗ್ಗೆ ತಿಳಿಯುವ ಮೊದಲು, ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ (TA) ನಿಜವಾಗಿ ಏನು ಎಂಬ ಸ್ಪಷ್ಟ ತಿಳಿವಳಿಕೆ ಅಗತ್ಯ. ಅನೇಕರು ಇದನ್ನು ಊಹಾಪೋಹ ಅಥವಾ ಭವಿಷ್ಯ ಹೇಳುವ ಸಾಧನ ಎಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸುತ್ತಾರೆ. ವಾಸ್ತವವಾಗಿ, ಇದು ಮೋಡಿ ಅಲ್ಲ, ಊಹೆಯೂ ಅಲ್ಲ &mdash; ಇದು ಬೆಲೆಯ ನಡವಳಿಕೆಯನ್ನು ಓದುವ ಒಂದು ರಚನಾತ್ಮಕ ವಿಧಾನ.</p>
        <p>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಎನ್ನುವುದು ಮಾರುಕಟ್ಟೆ ಭಾಗವಹಿಸುವವರು ಹೇಗೆ ವರ್ತಿಸುತ್ತಿದ್ದಾರೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಬೆಲೆ ಮತ್ತು ಪ್ರಮಾಣದ (volume) ಅಧ್ಯಯನ. ಇದು ಆಂತರಿಕ ಮೌಲ್ಯ ಲೆಕ್ಕ ಹಾಕುವ ಬದಲು ಸಂಭಾವ್ಯತೆ, ಪ್ರವೃತ್ತಿ ಮತ್ತು ಚಲನ ಶಕ್ತಿ (momentum) ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.</p>
        <p>ಪ್ರಾಯೋಗಿಕ ಮಟ್ಟದಲ್ಲಿ, ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ:</p>
        <ul>
          <li>ಮಾರುಕಟ್ಟೆ ಯಾವ ದಿಕ್ಕಿನಲ್ಲಿ ಸಾಗುತ್ತಿದೆ</li>
          <li>ಚಲನ ಶಕ್ತಿ ಬಲಗೊಳ್ಳುತ್ತಿದೆಯೇ ಅಥವಾ ದುರ್ಬಲಗೊಳ್ಳುತ್ತಿದೆಯೇ</li>
          <li>ಖರೀದಿದಾರರು ಮತ್ತು ಮಾರಾಟಗಾರರು ಎಲ್ಲಿ ಸಕ್ರಿಯರಾಗಿದ್ದಾರೆ</li>
          <li>ಅಪಾಯ ಯಾವಾಗ ಹೆಚ್ಚಾಗುತ್ತಿದೆ</li>
        </ul>
        <p>ಇದು ಮೂಲಭೂತ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಬದಲಿಸುವುದಿಲ್ಲ &mdash; ಇದು ಅದನ್ನು ಪೂರಕಗೊಳಿಸುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image71.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಮೂರು ಮೂಲಭೂತ ತತ್ವಗಳು</h3>
        <p><strong>೧. ಬೆಲೆಯು ಎಲ್ಲವನ್ನೂ ಪ್ರತಿಫಲಿಸುತ್ತದೆ</strong></p>
        <p>ಆದಾಯ, ಸುದ್ದಿ, ನಿರೀಕ್ಷೆಗಳು, ಸ್ಥೂಲ ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆಗಳು ಮುಂತಾದ ಎಲ್ಲಾ ಲಭ್ಯ ಮಾಹಿತಿಯು ಈಗಾಗಲೇ ಬೆಲೆಯಲ್ಲಿ ಪ್ರತಿಫಲಿತವಾಗಿದೆ. ಚಾರ್ಟ್‌ಗಳು ಕೇವಲ ಕಚ್ಚಾ ದತ್ತಾಂಶವನ್ನಲ್ಲ, ಮಾಹಿತಿಯ ಸಾಮೂಹಿಕ ವ್ಯಾಖ್ಯಾನವನ್ನು ಪ್ರತಿಫಲಿಸುತ್ತವೆ.</p>
        <p><strong>೨. ಬೆಲೆ ಪ್ರವೃತ್ತಿಗಳಲ್ಲಿ ಚಲಿಸುತ್ತದೆ</strong></p>
        <p>ಮಾರುಕಟ್ಟೆಗಳು ಮೂರು ಹಂತಗಳಲ್ಲಿ ಚಲಿಸುತ್ತವೆ:</p>
        <ul>
          <li>ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿ (ಉನ್ನತ ಉಚ್ಛ್ರಾಯ, ಉನ್ನತ ನಿಮ್ನ)</li>
          <li>ಅಧೋ ಪ್ರವೃತ್ತಿ (ಕೆಳ ಉಚ್ಛ್ರಾಯ, ಕೆಳ ನಿಮ್ನ)</li>
          <li>ಅಡ್ಡ ಸ್ಥಿರೀಕರಣ</li>
        </ul>
        <p><strong>೩. ಇತಿಹಾಸ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತದೆ ಏಕೆಂದರೆ ಮಾನವ ನಡವಳಿಕೆ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತದೆ</strong></p>
        <p>ಮಾರುಕಟ್ಟೆಗಳು ಬದಲಾಗುತ್ತವೆ, ಆದರೆ ಭಯ ಮತ್ತು ದುರಾಶೆ ಬದಲಾಗುವುದಿಲ್ಲ. ಭಯ-ವಿಕ್ರಯ ಮತ್ತು ಉತ್ಸಾಹ-ಖರೀದಿ ದಶಕಗಳಿಂದ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ &mdash; ಚಾರ್ಟ್‌ಗಳು ಈ ಭಾವನಾತ್ಮಕ ಚಕ್ರಗಳನ್ನು ದೃಶ್ಯಾತ್ಮಕವಾಗಿ ಸೆರೆಹಿಡಿಯುತ್ತವೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image98.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ತಾಂತ್ರಿಕ vs ಮೂಲಭೂತ ವಿಶ್ಲೇಷಣೆ</h3>
        <p>ಮೂಲಭೂತ ವಿಶ್ಲೇಷಣೆ ಆದಾಯ ಬೆಳವಣಿಗೆ, ಲಾಭದಾಯಕತೆ, ಋಣ ಮಟ್ಟ ಮತ್ತು ವ್ಯವಹಾರ ಗುಣಮಟ್ಟವನ್ನು ಅಧ್ಯಯನ ಮಾಡುತ್ತದೆ. ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಬೆಲೆ ರಚನೆ, ಚಲನ ಶಕ್ತಿ, ಪ್ರಮಾಣ ಮತ್ತು ಪ್ರವೃತ್ತಿ ನಡವಳಿಕೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುತ್ತದೆ.</p>
        <p>ಬುದ್ಧಿವಂತ ಚೌಕಟ್ಟು: ಮೂಲಭೂತ ಅಂಶಗಳು ಏನನ್ನು ಖರೀದಿಸಬೇಕೆಂದು ಹೇಳುತ್ತವೆ, ತಾಂತ್ರಿಕ ಅಂಶಗಳು ಯಾವಾಗ ಖರೀದಿಸಬೇಕೆಂದು ಹೇಳುತ್ತವೆ.</p>
        <hr className="chapter-rule" />
        <h3>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಏನಲ್ಲ</h3>
        <p>ಸರಿಯಾದ ಮನೋಭಾವ ಬೆಳೆಸಿಕೊಳ್ಳಲು, ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆಗಳನ್ನು ಆರಂಭದಲ್ಲೇ ತೆಗೆದುಹಾಕುವುದು ಮುಖ್ಯ. ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಇವಲ್ಲ:</p>
        <ul>
          <li>ಲಾಭದ ಖಾತ್ರಿ</li>
          <li>ನಿಖರ ಬೆಲೆ ಮಟ್ಟ ಭವಿಷ್ಯ ಹೇಳುವ ಸಾಧನ</li>
          <li>ಸರಿಯಾದ ಅಪಾಯ ನಿರ್ವಹಣೆಗೆ ಬದಲಿ</li>
          <li>ತ್ವರಿತ ಅಥವಾ ಶ್ರಮರಹಿತ ಸಂಪತ್ತಿನ ಶಾರ್ಟ್‌ಕಟ್</li>
        </ul>
        <p>ಇದು ಒಂದು ಸಂಭಾವ್ಯತಾ ಚೌಕಟ್ಟು. ಇದು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಿಕೆಯನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ಕಾಲಕ್ರಮೇಣ ನಿಮ್ಮ ಅನುಕೂಲವನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ &mdash; ಆದರೆ ಯಶಸ್ಸು ಶಿಸ್ತು, ತಾಳ್ಮೆ ಮತ್ತು ಸರಿಯಾದ ಅಪಾಯ ನಿಯಂತ್ರಣದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ.</p>
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೨                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೨: ಚಾರ್ಟ್‌ಗಳು — ಬೆಲೆ ವಿಶ್ಲೇಷಣೆಯ ಅಡಿಪಾಯ",
    content: (
      <>
        <p>ಚಾರ್ಟ್ ಎಂದರೆ ಸಮಯದೊಂದಿಗೆ ಬೆಲೆ ಚಲನೆಯ ದೃಶ್ಯ ಪ್ರತಿನಿಧಿತ್ವ. ಅಡ್ಡ ಅಕ್ಷ ಸಮಯವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ; ಲಂಬ ಅಕ್ಷ ಬೆಲೆಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ವಿಭಿನ್ನ ಚಾರ್ಟ್ ವಿಧಗಳು ಒಂದೇ ದತ್ತಾಂಶವನ್ನು ವಿಭಿನ್ನ ಸ್ವರೂಪಗಳಲ್ಲಿ ಪ್ರಸ್ತುತಪಡಿಸುತ್ತವೆ.</p>
        <hr className="chapter-rule" />
        <h3>೧. ರೇಖಾ ಚಾರ್ಟ್ &mdash; ಸರಳ ರೂಪ</h3>
        <p>ರೇಖಾ ಚಾರ್ಟ್ ಸಮಯದೊಂದಿಗೆ ಮುಕ್ತಾಯ ಬೆಲೆಗಳನ್ನು ಒಂದೇ ನಿರಂತರ ರೇಖೆಯಿಂದ ಸಂಪರ್ಕಿಸುತ್ತದೆ. ಇದು ಅಂದಿನ ಒಳ ಉಚ್ಛ್ರಾಯ ಮತ್ತು ನಿಮ್ನಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ ಕೇವಲ ಮುಕ್ತಾಯ ಬೆಲೆಯ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ. ಇದರಿಂದ ಅಲ್ಪಾವಧಿ ಅಡ್ಡಿ ತೊಲಗಿ, ಒಟ್ಟಾರೆ ದಿಕ್ಕನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ನೋಡಬಹುದು. ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಮತ್ತು ಆರಂಭಿಕರಿಗೆ ಇದು ವಿಶೇಷವಾಗಿ ಉಪಯುಕ್ತ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image93.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>೨. ಬಾರ್ ಚಾರ್ಟ್ ಮತ್ತು OHLC</h3>
        <p>ಬಾರ್ ಚಾರ್ಟ್ OHLC &mdash; ಆರಂಭ (Open), ಉಚ್ಛ್ರಾಯ (High), ನಿಮ್ನ (Low), ಮುಕ್ತಾಯ (Close) &mdash; ಅರ್ಥಮಾಡಿಕೊಂಡಾಗ ಶಕ್ತಿಶಾಲಿಯಾಗುತ್ತದೆ. ಭಾರತೀಯ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ:</p>
        <ul>
          <li>ಆರಂಭ = ಮಾರುಕಟ್ಟೆ ಬೆಳಿಗ್ಗೆ ೯:೧೫ ಕ್ಕೆ ತೆರೆದಾಗ ಮೊದಲ ವ್ಯವಹಾರ ಬೆಲೆ</li>
          <li>ಉಚ್ಛ್ರಾಯ = ಸೆಷನ್‌ನಲ್ಲಿ ಅತ್ಯಧಿಕ ವ್ಯವಹಾರ ಬೆಲೆ (೯:೧೫ ರಿಂದ ೩:೩೦)</li>
          <li>ನಿಮ್ನ = ಸೆಷನ್‌ನಲ್ಲಿ ಅತ್ಯಂತ ಕಡಿಮೆ ವ್ಯವಹಾರ ಬೆಲೆ</li>
          <li>ಮುಕ್ತಾಯ = ೩:೩೦ ರಲ್ಲಿ ಅಂತಿಮ ವ್ಯವಹಾರ ಬೆಲೆ</li>
        </ul>
        <p>ಪ್ರತಿ ಬಾರ್ ಆ ದಿನದ ಖರೀದಿದಾರರು ಮತ್ತು ಮಾರಾಟಗಾರರ ನಡುವಿನ ಸಂಪೂರ್ಣ ಯುದ್ಧವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image91.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image76.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>೩. ಕ್ಯಾಂಡಲ್‌ಸ್ಟಿಕ್ ಚಾರ್ಟ್ &mdash; ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಸ್ವರೂಪ</h3>
        <p>ಕ್ಯಾಂಡಲ್‌ಸ್ಟಿಕ್ ಚಾರ್ಟ್‌ಗಳು ಅದೇ OHLC ದತ್ತಾಂಶವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತವೆ, ಆದರೆ ಅಧಿಕ ದೃಶ್ಯ ಮತ್ತು ಅರ್ಥಗ್ರಾಹ್ಯ ಸ್ವರೂಪದಲ್ಲಿ. ಆರಂಭ ಮತ್ತು ಮುಕ್ತಾಯದ ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನು ಪ್ರತಿನಿಧಿಸಲು ಆಯತಾಕಾರದ ದೇಹ (body) ಬಳಸಲಾಗುತ್ತದೆ. ಮುಕ್ತಾಯ ಆರಂಭಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿದ್ದರೆ ಹಸಿರು (ಬೆಲ್ಲಿಷ್); ಕಡಿಮೆಯಾಗಿದ್ದರೆ ಕೆಂಪು (ಬೇರಿಷ್). ದೇಹದ ಮೇಲೆ ಮತ್ತು ಕೆಳಗೆ ಇರುವ ತೆಳು ರೇಖೆಗಳನ್ನು ವಿಕ್ ಅಥವಾ ಛಾಯೆಗಳು (wicks/shadows) ಎನ್ನುತ್ತಾರೆ &mdash; ಇವು ಅತ್ಯಧಿಕ ಮತ್ತು ಅತ್ಯಂತ ಕಡಿಮೆ ಬೆಲೆಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image94.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image90.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೩                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೩: ಮಾರುಕಟ್ಟೆ ರಚನೆ ಮತ್ತು ಪ್ರವೃತ್ತಿ ಸಿದ್ಧಾಂತ",
    content: (
      <>
        <p>(ಎಲ್ಲಾ ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆಯ ಅಡಿಪಾಯ)</p>
        <p>ಪ್ರವೃತ್ತಿ ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆಯ ಅಡಿಪಾಯ. ಬೆಲೆ ಯಾವಾಗಲೂ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಚಲಿಸುವುದಿಲ್ಲ &mdash; ಸಾಮಾನ್ಯವಾಗಿ ಒಂದು ದಿಕ್ಕಿನಲ್ಲಿ ಚಲಿಸುತ್ತದೆ. ಸೂಚಕಗಳು ದ್ವಿತೀಯ ಸಾಧನಗಳು; ಪ್ರವೃತ್ತಿ ರಚನೆ ಪ್ರಾಥಮಿಕ.</p>
        <hr className="chapter-rule" />
        <h3>ಮಾರ್ಕೆಟ್ ರಚನೆಯ ಮೂರು ವಿಧಗಳು</h3>
        <p><strong>೧. ಉನ್ನತ ಉಚ್ಛ್ರಾಯ ಮತ್ತು ಉನ್ನತ ನಿಮ್ನ &mdash; ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿ</strong></p>
        <p>ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿಯಲ್ಲಿ ಬೆಲೆ ಹೊಸ ಉಚ್ಛ್ರಾಯ ತಲುಪುತ್ತದೆ, ಹಿಂದಿಕ್ಕಿಕ್ಕೆ ಬರುತ್ತದೆ, ಆದರೆ ಹಿಂದಿನ ಪ್ರಮುಖ ನಿಮ್ನದ ಕೆಳಗೆ ಬೀಳುವುದಿಲ್ಲ. ನಂತರ ಮತ್ತೆ ಮೇಲಕ್ಕೇರಿ ಮತ್ತೊಂದು ಉನ್ನತ ಉಚ್ಛ್ರಾಯ ಮಾಡುತ್ತದೆ. ಮೂಲ ನಿಯಮ: ಉನ್ನತ ನಿಮ್ನಗಳು ಉಳಿದಿರುವವರೆಗೆ ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿ ಆರೋಗ್ಯಕರ. ಒಮ್ಮೆ ಉನ್ನತ ನಿಮ್ನ ನಿರ್ಣಾಯಕವಾಗಿ ಮುರಿದರೆ, ರಚನೆ ದುರ್ಬಲಗೊಳ್ಳಲು ಆರಂಭಿಸುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image96.png" alt="" style={imgStyle} />
        <p><strong>೨. ಕೆಳ ಉಚ್ಛ್ರಾಯ ಮತ್ತು ಕೆಳ ನಿಮ್ನ &mdash; ಅಧೋ ಪ್ರವೃತ್ತಿ</strong></p>
        <p>ಅಧೋ ಪ್ರವೃತ್ತಿಯಲ್ಲಿ ಬೆಲೆ ಹೊಸ ನಿಮ್ನ ತಲುಪುತ್ತದೆ, ಮೇಲೇರಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಆದರೆ ಹಿಂದಿನ ಉಚ್ಛ್ರಾಯ ದಾಟುವುದಿಲ್ಲ. ನಂತರ ಮತ್ತೆ ಕೆಳ ನಿಮ್ನಕ್ಕೆ ಬೀಳುತ್ತದೆ. ಇದು ನಿರಂತರ ಮಾರಾಟ ಒತ್ತಡ ಮತ್ತು ಬೇಡಿಕೆ ದುರ್ಬಲತೆಯನ್ನು ಪ್ರತಿಫಲಿಸುತ್ತದೆ. ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ರಚನಾತ್ಮಕ ಅಧೋ ಪ್ರವೃತ್ತಿಗಳಲ್ಲಿ ಎಚ್ಚರ ಅಗತ್ಯ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image99.png" alt="" style={imgStyle} />
        <p><strong>೩. ಅಡ್ಡ ವ್ಯಾಪ್ತಿ &mdash; ಸ್ಥಿರೀಕರಣ</strong></p>
        <p>ಎಲ್ಲಾ ಮಾರುಕಟ್ಟೆಗಳು ದೃಢ ಪ್ರವೃತ್ತಿಯಲ್ಲಿರಲ್ಲ. ಕೆಲವೊಮ್ಮೆ ಬೆಲೆ ಒಂದು ನಿರ್ದಿಷ್ಟ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಚಲಿಸುತ್ತದೆ &mdash; ಇದನ್ನು ಅಡ್ಡ ಮಾರುಕಟ್ಟೆ ಅಥವಾ ಸ್ಥಿರೀಕರಣ ಹಂತ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಸ್ಪಷ್ಟ ಉಚ್ಛ್ರಾಯಗಳಿಲ್ಲ, ಸ್ಪಷ್ಟ ನಿಮ್ನಗಳಿಲ್ಲ &mdash; ಬೆಲೆ ಆಧಾರ ಮತ್ತು ಪ್ರತಿರೋಧದ ನಡುವೆ ಏರಿಳಿತಗೊಳ್ಳುತ್ತದೆ. ಸ್ಥಿರೀಕರಣ ಹಂತಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಮಹತ್ತರ ಚಲನೆಗೆ ಮೊದಲು ಬರುತ್ತವೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image92.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಡೌ ಸಿದ್ಧಾಂತ &mdash; ಪ್ರವೃತ್ತಿ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲ</h3>
        <p>ಚಾರ್ಲ್ಸ್ ಡೌ ಅವರ ಕೆಲಸದಿಂದ ಅಭಿವೃದ್ಧಿಗೊಂಡ ಈ ಸಿದ್ಧಾಂತ ಮೂರು ಪ್ರವೃತ್ತಿ ವಿಧಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ:</p>
        <ul>
          <li>ಪ್ರಾಥಮಿಕ ಪ್ರವೃತ್ತಿ &mdash; ತಿಂಗಳುಗಳ ಅಥವಾ ವರ್ಷಗಳ ದೀರ್ಘಾವಧಿ ದಿಕ್ಕು</li>
          <li>ದ್ವಿತೀಯ ಪ್ರವೃತ್ತಿ &mdash; ಪ್ರಾಥಮಿಕ ಪ್ರವೃತ್ತಿಯ ವಿರುದ್ಧ ತಾತ್ಕಾಲಿಕ ತಿದ್ದುಪಡಿಗಳು ಅಥವಾ ಏರಿಕೆಗಳು</li>
          <li>ಸಣ್ಣ ಪ್ರವೃತ್ತಿ &mdash; ದೈನಂದಿನ ಏರಿಳಿತ ಮತ್ತು ಅಲ್ಪಾವಧಿ ಚಲನೆಗಳು</li>
        </ul>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image84.png" alt="" style={imgStyle} />
        <p>ಇದನ್ನು ಸಮುದ್ರದ ಅಲೆಗಳಿಗೆ ಹೋಲಿಸಬಹುದು: ಪ್ರಾಥಮಿಕ ಪ್ರವೃತ್ತಿ ಉಬ್ಬರ-ಇಳಿತ; ದ್ವಿತೀಯ ಪ್ರವೃತ್ತಿ ಅಲೆಗಳು; ಸಣ್ಣ ಪ್ರವೃತ್ತಿ ಅಲೆಯ ಮೇಲ್ಮೈ ಅಲೆಗಳು. ಹೂಡಿಕೆದಾರರಿಗೆ ಪ್ರಾಥಮಿಕ ಪ್ರವೃತ್ತಿ ಅತ್ಯಂತ ಮಹತ್ವಪೂರ್ಣ.</p>
        <hr className="chapter-rule" />
        <h3>ನಾಲ್ಕು ಮಾರ್ಕೆಟ್ ಹಂತಗಳು</h3>
        <p>ಮಾರುಕಟ್ಟೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ನಾಲ್ಕು ಹಂತಗಳ ಚಕ್ರದಲ್ಲಿ ಚಲಿಸುತ್ತವೆ:</p>
        <p><strong>ಸಂಗ್ರಹಣ (Accumulation)</strong> &mdash; ಮಂದಿ ಕಡಿಮೆ ಇರುವಾಗ ಬುದ್ಧಿವಂತ ಹಣ ಖರೀದಿ</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image80.png" alt="" style={imgStyle} />
        <p><strong>ಏರಿಕೆ ಹಂತ (Markup)</strong> &mdash; ಸಾರ್ವಜನಿಕ ಭಾಗವಹಿಸುವಿಕೆ ಹೆಚ್ಚಾಗಿ ದೃಢ ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿ</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image85.png" alt="" style={imgStyle} />
        <p><strong>ವಿತರಣೆ (Distribution)</strong> &mdash; ಉಚ್ಛ್ರಾಯದಲ್ಲಿ ಬುದ್ಧಿವಂತ ಹಣ ನಿರ್ಗಮನ</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image83.png" alt="" style={imgStyle} />
        <p><strong>ಇಳಿಕೆ ಹಂತ (Markdown)</strong> &mdash; ಭಯ ದುರಾಶೆಯನ್ನು ಬದಲಿಸಿ, ಬೆಲೆ ಕ್ಷಿಪ್ರ ಕುಸಿತ</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image86.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೪                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೪: ಕ್ಯಾಂಡಲ್‌ಸ್ಟಿಕ್ ಚಾರ್ಟ್‌ಗಳು — ಆಳವಾದ ಅಧ್ಯಯನ",
    content: (
      <>
        <p>ಕ್ಯಾಂಡಲ್‌ಸ್ಟಿಕ್‌ಗಳು ಚಾರ್ಟ್‌ನಲ್ಲಿ ಕೇವಲ ದೃಶ್ಯ ಸಾಧನಗಳಲ್ಲ. ಅವು ನಿರ್ದಿಷ್ಟ ಅವಧಿಯಲ್ಲಿ ನಡೆದ ಘಟನೆಗಳ ಸಂಕ್ಷಿಪ್ತ ಕಥೆಗಳು. ಪ್ರತಿ ಕ್ಯಾಂಡಲ್ ಮೂರು ಪ್ರಮುಖ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ ನೀಡುತ್ತದೆ: ನಿಯಂತ್ರಣದಲ್ಲಿ ಯಾರಿದ್ದರು? ನಿಯಂತ್ರಣ ಎಷ್ಟು ಬಲವಾಗಿತ್ತು? ಕೆಲವು ಬೆಲೆ ಮಟ್ಟಗಳಲ್ಲಿ ತಿರಸ್ಕಾರ ಇತ್ತೇ?</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image81.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image95.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image97.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>೧. ದೇಹ &mdash; ದೃಢ ನಿರ್ಧಾರ ಅಳತೆ</h3>
        <p>ಕ್ಯಾಂಡಲ್‌ಸ್ಟಿಕ್‌ನ ದೇಹ ಆರಂಭ ಮತ್ತು ಮುಕ್ತಾಯದ ನಡುವಿನ ಅಂತರವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ದೊಡ್ಡ ದೇಹ ದೃಢ ನಿರ್ಧಾರವನ್ನು ಸೂಚಿಸುತ್ತದೆ &mdash; ಖರೀದಿದಾರರು ಅಥವಾ ಮಾರಾಟಗಾರರಲ್ಲಿ ಒಂದು ಕಡೆ ಅಧಿಕಾರ ಹೊಂದಿ ಬೆಲೆಯನ್ನು ಗಟ್ಟಿಯಾಗಿ ಚಲಿಸಿದೆ. ಸಣ್ಣ ದೇಹ ಹಿಂಜರಿಕೆ ಅಥವಾ ಸಮತೋಲನವನ್ನು ಪ್ರತಿಫಲಿಸುತ್ತದೆ. ಬೆಲೆ ಎಲ್ಲಿ ಇದೆ ಎಂಬ ಸ್ಥಳ ದೇಹಕ್ಕೆ ಅರ್ಥ ನೀಡುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image87.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image70.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image6.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>೨. ವಿಕ್‌ಗಳು &mdash; ತಿರಸ್ಕಾರ ಅಳತೆ</h3>
        <p>ದೇಹದ ಮೇಲೆ ಮತ್ತು ಕೆಳಗೆ ಇರುವ ತೆಳು ರೇಖೆಗಳನ್ನು ವಿಕ್‌ಗಳು ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಮೇಲಿನ ವಿಕ್ ಅಧಿಕ ಬೆಲೆಗಳಿಂದ ತಿರಸ್ಕಾರವನ್ನು ಸೂಚಿಸುತ್ತದೆ; ಕೆಳಗಿನ ವಿಕ್ ಕಡಿಮೆ ಬೆಲೆಗಳಿಂದ ತಿರಸ್ಕಾರವನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಉದ್ದನೆಯ ಕೆಳಗಿನ ವಿಕ್ ಕಡಿಮೆ ಮಟ್ಟಗಳಲ್ಲಿ ಬೇಡಿಕೆ ಉದಯಿಸುತ್ತಿದೆ ಎಂದು ಸೂಚಿಸುತ್ತದೆ. ಉದ್ದನೆಯ ಮೇಲಿನ ವಿಕ್ ಅಧಿಕ ಮಟ್ಟಗಳಲ್ಲಿ ಪೂರೈಕೆ ಉದ್ಭವಿಸುತ್ತಿದೆ ಎಂದು ಸೂಚಿಸುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image75.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image77.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image73.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image79.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image88.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image78.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>೩. ಪ್ರಮುಖ ಏಕ-ಕ್ಯಾಂಡಲ್ ಮಾದರಿಗಳು</h3>
        <p><strong>ಹಾಮರ್ (Hammer):</strong></p>
        <p>ಸಣ್ಣ ದೇಹ, ಉದ್ದನೆಯ ಕೆಳಗಿನ ವಿಕ್, ಸ್ವಲ್ಪವೂ ಮೇಲಿನ ವಿಕ್ ಇಲ್ಲ. ಸಾಮಾನ್ಯವಾಗಿ ಕುಸಿತದ ನಂತರ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಮಾರಾಟಗಾರರು ಬೆಲೆ ಗಮನಾರ್ಹವಾಗಿ ಕೆಳಕ್ಕೆ ತಳ್ಳಿದರು, ಆದರೆ ಖರೀದಿದಾರರು ಪ್ರಬಲವಾಗಿ ಪ್ರವೇಶಿಸಿ ಮುಕ್ತಾಯದ ಮೊದಲು ಮೇಲಕ್ಕೆ ಚಲಿಸಿದರು. ಆಧಾರ ಬಳಿ ಕಾಣಿಸಿಕೊಂಡಾಗ, ಸಂಭಾವ್ಯ ಖರೀದಿದಾರ ಶಕ್ತಿ ಸೂಚಿಸಬಹುದು.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image3.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image2.png" alt="" style={imgStyle} />
        <p><strong>ಶೂಟಿಂಗ್ ಸ್ಟಾರ್ (Shooting Star):</strong></p>
        <p>ಸಣ್ಣ ದೇಹ, ಉದ್ದನೆಯ ಮೇಲಿನ ವಿಕ್, ಕೆಳಗಿನ ವಿಕ್ ಇಲ್ಲ. ಸಾಮಾನ್ಯವಾಗಿ ಇತ್ತೀಚಿನ ಉಚ್ಛ್ರಾಯಗಳ ಬಳಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಅಧಿಕ ಬೆಲೆಗಳ ತಿರಸ್ಕಾರ ಸೂಚಿಸುತ್ತದೆ. ಪ್ರತಿರೋಧ ಅಥವಾ ಪ್ರಬಲ ಏರಿಕೆಯ ನಂತರ ಕಾಣಿಸಿಕೊಂಡಾಗ, ಸಂಭಾವ್ಯ ಪೂರೈಕೆ ಪ್ರವೇಶಿಸುತ್ತಿದೆ ಎಂದು ಸೂಚಿಸಬಹುದು.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image28.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image10.png" alt="" style={imgStyle} />
        <p><strong>ಡೋಜಿ (Doji):</strong></p>
        <p>ಅತ್ಯಂತ ಸಣ್ಣ ದೇಹ, ಆರಂಭ ಮತ್ತು ಮುಕ್ತಾಯ ಬಹುತೇಕ ಸಮಾನ. ಅನಿರ್ಧಾರತೆ ಪ್ರತಿಫಲಿಸುತ್ತದೆ &mdash; ಖರೀದಿದಾರರಾಗಲೀ ಮಾರಾಟಗಾರರಾಗಲೀ ಸ್ಪಷ್ಟ ನಿಯಂತ್ರಣ ಪಡೆದಿಲ್ಲ. ಪ್ರಬಲ ಏರಿಕೆಯ ನಂತರ ಡೋಜಿ ಚಲನ ಶಕ್ತಿ ನಿಧಾನಿಸಲು ಆರಂಭಿಸಿದೆ ಎಂದು ಸೂಚಿಸಬಹುದು.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image6.png" alt="" style={imgStyle} />
        <p><strong>ಮಾರೂಬೋಜು (Marubozu):</strong></p>
        <p>ದೊಡ್ಡ ದೇಹ, ಬಹುತೇಕ ವಿಕ್‌ಗಳಿಲ್ಲ. ಬೆಲೆ ಒಂದು ದಿಕ್ಕಿನಲ್ಲಿ ಬಲವಾಗಿ ಚಲಿಸಿ ಅಲ್ಲೇ ಉಳಿದಿದೆ. ಬುಲ್ಲಿಷ್ ಮಾರೂಬೋಜು ಮಹತ್ವದ ಬ್ರೇಕ್‌ಔಟ್‌ಗಳ ಸಮಯ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಬೇರಿಷ್ ಮಾರೂಬೋಜು ಒಡೆತಗಳು ಅಥವಾ ಭಯ-ಚಾಲಿತ ಮಾರಾಟದ ಸಮಯ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಈ ಕ್ಯಾಂಡಲ್‌ಗಳ ಅರ್ಥ ಸಂಪೂರ್ಣವಾಗಿ ವಿಶಾಲ ಪ್ರವೃತ್ತಿ, ಸ್ಥಳ ಮತ್ತು ಮುಂದಿನ ಸೆಷನ್ ಮೇಲೆ ಅವಲಂಬಿತ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image11.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image15.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೫                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೫: ಬಹು-ಕ್ಯಾಂಡಲ್ ಮಾದರಿಗಳು",
    content: (
      <>
        <p>ಏಕ ಕ್ಯಾಂಡಲ್‌ಗಳು ಒಂದು ಸೆಷನ್‌ನಲ್ಲಿ ಒತ್ತಡ ತೋರಿಸುತ್ತವೆ. ಬಹು-ಕ್ಯಾಂಡಲ್ ಮಾದರಿಗಳು ಹಲವು ಸೆಷನ್‌ಗಳಲ್ಲಿ ಒತ್ತಡ ಬದಲಾಗುತ್ತಿದೆ ಎಂದು ತೋರಿಸುತ್ತವೆ. ಏಕ ಕ್ಯಾಂಡಲ್ ಒಂದು ಕ್ಷಣದ ಚಿತ್ರ; ಬಹು-ಕ್ಯಾಂಡಲ್ ಮಾದರಿ ಬೆಳೆಯುತ್ತಿರುವ ಕಥೆ. ಆದ್ದರಿಂದ ಅವು ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹ.</p>
        <hr className="chapter-rule" />
        <h3>ಬುಲ್ಲಿಷ್ ಎನ್‌ಗಲ್ಫಿಂಗ್ &mdash; ಬೇಡಿಕೆ ಪೂರೈಕೆಯನ್ನು ಮೀರಿಸುತ್ತದೆ</h3>
        <p>ಮೊದಲ ಕ್ಯಾಂಡಲ್: ಸಣ್ಣ ಬೇರಿಷ್ ದೇಹ. ಎರಡನೆ ಕ್ಯಾಂಡಲ್: ದೊಡ್ಡ ಬುಲ್ಲಿಷ್ ದೇಹ ಮೊದಲ ಕ್ಯಾಂಡಲ್‌ನ ದೇಹವನ್ನು ಸಂಪೂರ್ಣ ಆವರಿಸುತ್ತದೆ. ಇದು ಖರೀದಿ ಮಾತ್ರ ಹಿಂದಿರುಗಿದ್ದಲ್ಲ &mdash; ನಿರ್ಣಾಯಕವಾಗಿ ಅಧಿಕಾರ ವಹಿಸಿಕೊಂಡಿದೆ ಎಂದು ಸಂಕೇತಿಸುತ್ತದೆ. ದೃಢ ಆಧಾರ ಬಳಿ ಅಥವಾ ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿಯಲ್ಲಿ ಹಿಂಸೆಯ ನಂತರ ಕಾಣಿಸಿಕೊಂಡಾಗ ಹೆಚ್ಚು ಅರ್ಥಪೂರ್ಣ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image7.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image36.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಬೇರಿಷ್ ಎನ್‌ಗಲ್ಫಿಂಗ್ &mdash; ಪೂರೈಕೆ ಬೇಡಿಕೆಯನ್ನು ಮೀರಿಸುತ್ತದೆ</h3>
        <p>ಮೊದಲ ಕ್ಯಾಂಡಲ್: ಸಣ್ಣ ಬುಲ್ಲಿಷ್ ದೇಹ. ಎರಡನೆ ಕ್ಯಾಂಡಲ್: ದೊಡ್ಡ ಬೇರಿಷ್ ದೇಹ ಮೊದಲ ಕ್ಯಾಂಡಲ್‌ನ ದೇಹವನ್ನು ಸಂಪೂರ್ಣ ಆವರಿಸುತ್ತದೆ. ಪ್ರತಿರೋಧ ಅಥವಾ ದೀರ್ಘ ಏರಿಕೆಯ ನಂತರ ಕಾಣಿಸಿಕೊಂಡಾಗ ಎಚ್ಚರಿಕೆ ಸಂಕೇತ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image29.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image13.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಮಾರ್ನಿಂಗ್ ಸ್ಟಾರ್ &mdash; ರಚನಾತ್ಮಕ ಹಿಮ್ಮುಖ</h3>
        <p>ಮೂರು ಕ್ಯಾಂಡಲ್‌ಗಳ ಪರಿವರ್ತನ ಮಾದರಿ: ಮೊದಲ &mdash; ದೊಡ್ಡ ಬೇರಿಷ್ ದೇಹ; ಎರಡನೆ &mdash; ಸಣ್ಣ ಅನಿರ್ಧಾರ ಕ್ಯಾಂಡಲ್; ಮೂರನೆ &mdash; ದೊಡ್ಡ ಬುಲ್ಲಿಷ್ ದೇಹ. ಮೊದಲು ಪ್ರಬಲ ಮಾರಾಟ, ನಂತರ ಹಿಂಜರಿಕೆ, ಅಂತಿಮವಾಗಿ ಪ್ರಬಲ ಖರೀದಿ &mdash; ಈ ಅನುಕ್ರಮ ಪೂರೈಕೆಯಿಂದ ಬೇಡಿಕೆಗೆ ಕ್ರಮೇಣ ಬದಲಾವಣೆ ಪ್ರತಿಫಲಿಸುತ್ತದೆ. ಏಕ ಹಾಮರ್‌ಗಿಂತ ಬಲವಾಗಿದೆ ಏಕೆಂದರೆ ಹಲವು ಸೆಷನ್‌ಗಳಲ್ಲಿ ದೃಢೀಕರಣ ಅಡಕವಾಗಿದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image4.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image22.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಈವ್ನಿಂಗ್ ಸ್ಟಾರ್ &mdash; ರಚನಾತ್ಮಕ ಅವಸಾನ</h3>
        <p>ಮೂರು ಕ್ಯಾಂಡಲ್‌ಗಳ ಪರಿವರ್ತನ ಮಾದರಿ, ವಿರುದ್ಧ ದಿಕ್ಕಿನಲ್ಲಿ: ಮೊದಲ &mdash; ದೊಡ್ಡ ಬುಲ್ಲಿಷ್ ದೇಹ; ಎರಡನೆ &mdash; ಸಣ್ಣ ಅನಿರ್ಧಾರ ಕ್ಯಾಂಡಲ್; ಮೂರನೆ &mdash; ದೊಡ್ಡ ಬೇರಿಷ್ ದೇಹ. ಮೊದಲು ಪ್ರಬಲ ಖರೀದಿ, ನಂತರ ಹಿಂಜರಿಕೆ, ಅಂತಿಮವಾಗಿ ಪ್ರಬಲ ಮಾರಾಟ. ಉಚ್ಛ್ರಾಯ ಬಳಿ ಅಥವಾ ಸಂಭಾವ್ಯ ವಿತರಣ ವಲಯಗಳಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡಾಗ ಎಚ್ಚರ ಸಂಕೇತ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image20.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image8.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೬                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೬: ಆಧಾರ ಮತ್ತು ಪ್ರತಿರೋಧ",
    content: (
      <>
        <p>ಪ್ರವೃತ್ತಿ ದಿಕ್ಕು ನೀಡಿದರೆ, ಕ್ಯಾಂಡಲ್‌ಸ್ಟಿಕ್‌ಗಳು ನಡವಳಿಕೆ ತೋರಿಸಿದರೆ, ಆಧಾರ ಮತ್ತು ಪ್ರತಿರೋಧ ಸ್ಥಳ ನಿರ್ಧರಿಸುತ್ತದೆ &mdash; ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಸ್ಥಳ ಹೆಚ್ಚಾಗಿ ಬೇರೆ ಯಾವುದಕ್ಕಿಂತ ಮಹತ್ವಪೂರ್ಣ.</p>
        <hr className="chapter-rule" />
        <h3>೧. ಆಧಾರ ಎಂದರೇನು?</h3>
        <p>ಆಧಾರ ಎನ್ನುವುದು ಖರೀದಿ ಆಸಕ್ತಿ ಮತ್ತಷ್ಟು ಕುಸಿತ ತಡೆಯಲು ಸಾಕಷ್ಟು ಬಲವಾಗುವ ಬೆಲೆ ಮಟ್ಟ. ಬೇಡಿಕೆ ಸ್ಥಿರವಾಗಿ ಪೂರೈಕೆ ಹೀರಿಕೊಳ್ಳುವ ಪ್ರದೇಶ. ಚಾರ್ಟ್‌ನಲ್ಲಿ ಆಧಾರ ಸಾಮಾನ್ಯವಾಗಿ ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ: ಬೆಲೆ ಬಾರಿ ಬಾರಿ ಕುಸಿತ ನಿಲ್ಲಿಸುವ ಸ್ಥಳ, ಉದ್ದನೆಯ ಕೆಳಗಿನ ವಿಕ್‌ಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುವ ಜಾಗ, ಬೆಲೆ ಬಾರಿ ಬಾರಿ ಮೇಲಕ್ಕೆ ತಿರುಗುವ ಪ್ರದೇಶ. ಆಧಾರ ನಿಖರ ರೇಖೆ ಅಲ್ಲ &mdash; ಇದು ಒಂದು ವಲಯ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image12.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>೨. ಪ್ರತಿರೋಧ ಎಂದರೇನು?</h3>
        <p>ಪ್ರತಿರೋಧ ಎನ್ನುವುದು ಮಾರಾಟ ಒತ್ತಡ ಮತ್ತಷ್ಟು ಏರಿಕೆ ತಡೆಯಲು ಸಾಕಷ್ಟು ಬಲವಾಗುವ ಬೆಲೆ ಮಟ್ಟ. ಪೂರೈಕೆ ಸ್ಥಿರವಾಗಿ ಬೇಡಿಕೆ ಹೀರಿಕೊಳ್ಳುವ ಪ್ರದೇಶ. ಚಾರ್ಟ್‌ನಲ್ಲಿ ಪ್ರತಿರೋಧ ಸಾಮಾನ್ಯವಾಗಿ ಎಲ್ಲಿ ಕಾಣುತ್ತದೆ: ಬೆಲೆ ಬಾರಿ ಬಾರಿ ಮೇಲೇರಲು ವಿಫಲವಾಗುವ ಸ್ಥಳ, ಮೇಲಿನ ವಿಕ್‌ಗಳು ಸಮಾನ ಮಟ್ಟಗಳ ಬಳಿ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಜಾಗ, ಏರಿಕೆಗಳು ನಿಲ್ಲುವ ಅಥವಾ ಕೆಳಕ್ಕೆ ತಿರುಗುವ ಪ್ರದೇಶ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image1.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>೩. ಪಾತ್ರ ವಿನಿಮಯ &mdash; ಒಂದು ಶಕ್ತಿಶಾಲಿ ಪರಿಕಲ್ಪನೆ</h3>
        <p>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆಯ ಅತ್ಯಂತ ಬಲವಾದ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ತತ್ವ: ಹಳೆಯ ಪ್ರತಿರೋಧ ಹೊಸ ಆಧಾರ ಆಗುತ್ತದೆ; ಹಳೆಯ ಆಧಾರ ಹೊಸ ಪ್ರತಿರೋಧ ಆಗುತ್ತದೆ. ಇದು ಬದಲಾಗುತ್ತಿರುವ ಮಾನಸಿಕಸ್ಥಿತಿ ಮತ್ತು ನಿಲುವಿನಿಂದಾಗಿ ಸಂಭವಿಸುತ್ತದೆ. ಪ್ರತಿರೋಧ ಮೀರಿ ನಿರ್ಣಾಯಕ ಬ್ರೇಕ್‌ಔಟ್ ಆದ ನಂತರ, ಆ ಮಟ್ಟ ಹಿಂಸೆಯ ನಂತರ ಆಧಾರ ಆಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸಬಹುದು. ಇದು ಸ್ಪಷ್ಟ ಅಪಾಯ ನಿಯಂತ್ರಣ ಮತ್ತು ಉತ್ತಮ ಪ್ರವೇಶ ದಕ್ಷತೆ ಹೊಂದಿದ ಉತ್ತಮ ಸಂಭಾವ್ಯ ಪ್ರವೇಶ ಅವಕಾಶ ನೀಡುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image5.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image19.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image9.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೭                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೭: ಪ್ರಮಾಣ (Volume)",
    content: (
      <>
        <p>ಬೆಲೆ ಏನು ನಡೆಯುತ್ತಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ. ಪ್ರಮಾಣ ಅದು ಎಷ್ಟು ಗಂಭೀರ ಎಂದು ಹೇಳುತ್ತದೆ. ಪ್ರಮಾಣ ಭಾಗವಹಿಸುವಿಕೆ ಅಳೆಯುತ್ತದೆ &mdash; ಭಾಗವಹಿಸುವಿಕೆ ಉದ್ದೇಶ ಬಹಿರಂಗ ಮಾಡುತ್ತದೆ. ಖರೀದಿದಾರರು ಹೆಚ್ಚುತ್ತಿರುವ ಪ್ರಮಾಣದೊಂದಿಗೆ ಸಕ್ರಿಯರಾದಾಗ ಅದು ಬೇಡಿಕೆ ಸಂಕೇತಿಸುತ್ತದೆ; ಮಾರಾಟಗಾರರು ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದಿಂದ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸಿದಾಗ ಅದು ಪೂರೈಕೆ ಸಂಕೇತಿಸುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image27.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಬ್ರೇಕ್‌ಔಟ್‌ಗಳಲ್ಲಿ ಪ್ರಮಾಣ</h3>
        <p>ಬ್ರೇಕ್‌ಔಟ್‌ನಲ್ಲಿ ಪ್ರಬಲ ಪ್ರಮಾಣ ನಿಜವಾದ ಬ್ರೇಕ್‌ಔಟ್ ಸೂಚಿಸುತ್ತದೆ; ದುರ್ಬಲ ಪ್ರಮಾಣ ನಕಲಿ ಬ್ರೇಕ್‌ಔಟ್‌ನ ಅಪಾಯ ಹೆಚ್ಚಿಸುತ್ತದೆ. ಬ್ರೇಕ್‌ಔಟ್‌ಗಳಿಗೆ ಹೊಸ ಖರೀದಿದಾರರ ಅಗತ್ಯ &mdash; ಭಾಗವಹಿಸುವಿಕೆ ಕಡಿಮೆ ಇದ್ದರೆ ಬ್ರೇಕ್‌ಔಟ್ ಮುಂದುವರಿಯಲು ಅಗತ್ಯ ಇಂಧನ ಇಲ್ಲದಿರಬಹುದು.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image42.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image35.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image25.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image50.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image32.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image31.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಸಂಗ್ರಹಣ vs ವಿತರಣ</h3>
        <p>ಪ್ರಮಾಣ ಸಂಸ್ಥೆಗಳು ಮೇಲ್ಮೈಯ ಕೆಳಗೆ ಏನು ಮಾಡುತ್ತಿದ್ದಾರೆ ಎಂದು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡಬಹುದು. ಸಂಗ್ರಹಣ ಸಮಯ: ಬೆಲೆ ಅಡ್ಡ ಚಲಿಸುತ್ತದೆ, ಪ್ರಮಾಣ ಕ್ರಮೇಣ ಹೆಚ್ಚಾಗುತ್ತದೆ &mdash; ಬುದ್ಧಿವಂತ ಹಣ ಮೆಲ್ಲಗೆ ಖರೀದಿಸುತ್ತಿದೆ. ವಿತರಣ ಸಮಯ: ಉಚ್ಛ್ರಾಯ ಬಳಿ ಅಡ್ಡ ಚಲನೆ, ಕೆಳ ದಿನಗಳಲ್ಲಿ ಪ್ರಮಾಣ ಹೆಚ್ಚಾಗುತ್ತದೆ &mdash; ಸಂಸ್ಥೆಗಳು ಚಿಲ್ಲರೆ ಆಶಾವಾದ ಇರುವ ಸಮಯ ಮಾರಾಟ ಮಾಡುತ್ತಿದ್ದಾರೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image30.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image45.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೮                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೮: ಚಲಿಸುವ ಸರಾಸರಿಗಳು (Moving Averages)",
    content: (
      <>
        <p>ಚಲಿಸುವ ಸರಾಸರಿ (MA) ಎನ್ನುವುದು ನಿರ್ದಿಷ್ಟ ಅವಧಿಯ ಮೇಲೆ ಲೆಕ್ಕಿಸಲಾದ ಷೇರಿನ ಸರಾಸರಿ ಮುಕ್ತಾಯ ಬೆಲೆ. ಇದು ಬೆಲೆ ಏರಿಳಿತಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಪ್ರವೃತ್ತಿ ದಿಕ್ಕು ಮತ್ತು ಚಲನ ರಚನೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image60.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಹೂಡಿಕೆದಾರರಿಗೆ ಅತ್ಯಂತ ಮಹತ್ವದ ಚಲಿಸುವ ಸರಾಸರಿಗಳು</h3>
        <ul>
          <li>೨೦-ದಿನ MA &rarr; ಅಲ್ಪಾವಧಿ ಪ್ರವೃತ್ತಿ</li>
          <li>೫೦-ದಿನ MA &rarr; ಮಧ್ಯಮಾವಧಿ ಪ್ರವೃತ್ತಿ</li>
          <li>೨೦೦-ದಿನ MA &rarr; ದೀರ್ಘಾವಧಿ ಪ್ರವೃತ್ತಿ (ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಅತ್ಯಂತ ಮಹತ್ವಪೂರ್ಣ)</li>
        </ul>
        <p>ಬೆಲೆ ಏರುತ್ತಿರುವ ೨೦೦ DMA ಮೇಲೆ ವ್ಯವಹರಿಸುತ್ತಿದ್ದರೆ, ದೀರ್ಘಾವಧಿ ಪ್ರವೃತ್ತಿ ಧನಾತ್ಮಕ ಮತ್ತು ಸಂಸ್ಥೆ ಆತ್ಮವಿಶ್ವಾಸ ಸಾಮಾನ್ಯವಾಗಿ ಬಲವಾಗಿರುತ್ತದೆ. ಬೆಲೆ ೨೦೦ DMA ಕೆಳಗೆ ಬಿದ್ದರೆ ಎಚ್ಚರಿಕೆ ಹೆಚ್ಚಾಗುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image34.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image14.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image17.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image38.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image21.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image26.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image24.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image23.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಗೋಲ್ಡನ್ ಕ್ರಾಸ್ ಮತ್ತು ಡೆತ್ ಕ್ರಾಸ್</h3>
        <p>೫೦ DMA ೨೦೦ DMA ಮೇಲೆ ಹಾದುಹೋದಾಗ ಅದನ್ನು ಗೋಲ್ಡನ್ ಕ್ರಾಸ್ ಎನ್ನುತ್ತಾರೆ &mdash; ದೀರ್ಘಾವಧಿ ಬೆಲ್ಲಿಷ್ ದೃಢೀಕರಣ. ೫೦ DMA ೨೦೦ DMA ಕೆಳಗೆ ಹಾದುಹೋದಾಗ ಅದನ್ನು ಡೆತ್ ಕ್ರಾಸ್ ಎನ್ನುತ್ತಾರೆ &mdash; ಸಂಭಾವ್ಯ ದೀರ್ಘಾವಧಿ ದೌರ್ಬಲ್ಯ. ಗಮನ: ಚಲಿಸುವ ಸರಾಸರಿ ಕ್ರಾಸ್‌ಓವರ್‌ಗಳು ಲ್ಯಾಗಿಂಗ್ ಸೂಚಕಗಳು &mdash; ಅವು ಪ್ರವೃತ್ತಿ ಈಗಾಗಲೇ ಆರಂಭವಾದ ನಂತರ ದೃಢೀಕರಿಸುತ್ತವೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image33.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image41.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೯                                                        */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೯: RSI — ಚಲನ ಶಕ್ತಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    content: (
      <>
        <p>RSI (Relative Strength Index) ಚಲನ ಶಕ್ತಿ ಅಳೆಯುತ್ತದೆ, ನೇರ ಬೆಲೆಯಲ್ಲ. ಇದು ೦ ರಿಂದ ೧೦೦ ರ ನಡುವೆ ಚಲಿಸುತ್ತದೆ. ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ RSI ೭೦ ಮೇಲಿದ್ದರೆ ಅತಿ-ಖರೀದಿ (overbought) ಎನ್ನಲಾಗುತ್ತದೆ; ೩೦ ಕೆಳಗಿದ್ದರೆ ಅತಿ-ಮಾರಾಟ (oversold). ಆದರೆ ಈ ಸಂಖ್ಯೆಗಳು ಯಾಂತ್ರಿಕ ಸಂಕೇತಗಳಲ್ಲ &mdash; ಅವು ಉಲ್ಲೇಖ ವಲಯಗಳು. RSI ಯಾವಾಗಲೂ ಪ್ರವೃತ್ತಿ ಸಂದರ್ಭದಲ್ಲಿ ಅರ್ಥೈಸಬೇಕು.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image18.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>RSI ವ್ಯತ್ಯಾಸ (Divergence) &mdash; ಆರಂಭಿಕ ಎಚ್ಚರಿಕೆ ಸಂಕೇತ</h3>
        <p>ವ್ಯತ್ಯಾಸ ಬೆಲೆ ಮತ್ತು ಚಲನ ಶಕ್ತಿ ಒಟ್ಟಿಗೆ ಚಲಿಸುವುದು ನಿಲ್ಲಿಸಿದಾಗ ಸಂಭವಿಸುತ್ತದೆ:</p>
        <ul>
          <li>ಬುಲ್ಲಿಷ್ ವ್ಯತ್ಯಾಸ: ಬೆಲೆ ಕೆಳ ನಿಮ್ನ ಮಾಡುತ್ತದೆ, RSI ಉನ್ನತ ನಿಮ್ನ ಮಾಡುತ್ತದೆ &mdash; ಮಾರಾಟ ಒತ್ತಡ ಮಸುಕಾಗಬಹುದು</li>
          <li>ಬೇರಿಷ್ ವ್ಯತ್ಯಾಸ: ಬೆಲೆ ಉನ್ನತ ಉಚ್ಛ್ರಾಯ ಮಾಡುತ್ತದೆ, RSI ಕೆಳ ಉಚ್ಛ್ರಾಯ ಮಾಡುತ್ತದೆ &mdash; ಖರೀದಿ ಒತ್ತಡ ದುರ್ಬಲಗೊಳ್ಳಬಹುದು</li>
        </ul>
        <p>ಚಲನ ಶಕ್ತಿ ಸಾಮಾನ್ಯವಾಗಿ ಬೆಲೆಗಿಂತ ಮೊದಲೇ ಬದಲಾಗುತ್ತದೆ. ರಚನಾತ್ಮಕ ದೃಢೀಕರಣ ಇಲ್ಲದೆ ವ್ಯತ್ಯಾಸ ಮಾತ್ರ ತಿರುವಿಗೆ ಖಾತ್ರಿ ನೀಡಲ್ಲ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image16.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image53.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೦                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೦: ಬೊಲ್ಲಿಂಜರ್ ಬ್ಯಾಂಡ್‌ಗಳು — ಚಂಚಲತೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    content: (
      <>
        <p>ಮಾರುಕಟ್ಟೆಗಳು ಶಾಂತ ಸ್ಥಿರೀಕರಣ ಮತ್ತು ಸ್ಫೋಟಕ ವಿಸ್ತರಣೆ ನಡುವೆ ಪರ್ಯಾಯ ಮಾಡುತ್ತವೆ. ಬೊಲ್ಲಿಂಜರ್ ಬ್ಯಾಂಡ್‌ಗಳು ಈ ಚಂಚಲತೆ ಚಕ್ರ ದೃಶ್ಯೀಕರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.</p>
        <p>ಮೂರು ರೇಖೆಗಳು: ಮಧ್ಯ ಬ್ಯಾಂಡ್ (೨೦-ಅವಧಿ ಚಲಿಸುವ ಸರಾಸರಿ), ಮೇಲಿನ ಬ್ಯಾಂಡ್ (ಮಧ್ಯ + ೨ ಪ್ರಮಾಣ ವಿಚಲನ), ಕೆಳಗಿನ ಬ್ಯಾಂಡ್ (ಮಧ್ಯ - ೨ ಪ್ರಮಾಣ ವಿಚಲನ). ಚಂಚಲತೆ ಹೆಚ್ಚಾದಾಗ ಬ್ಯಾಂಡ್‌ಗಳು ಅಗಲವಾಗುತ್ತವೆ; ಕಡಿಮೆಯಾದಾಗ ಕಿರಿದಾಗುತ್ತವೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image54.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image56.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಬೊಲ್ಲಿಂಜರ್ ಸ್ಕ್ವೀಝ್ &mdash; ವಿಸ್ತರಣೆಗೆ ಮೊದಲ ಸಂಕೋಚ</h3>
        <p>ಮೇಲಿನ ಮತ್ತು ಕೆಳಗಿನ ಬ್ಯಾಂಡ್‌ಗಳ ನಡುವಿನ ಅಂತರ ಅಸಾಮಾನ್ಯವಾಗಿ ಕಿರಿದಾದಾಗ ಸ್ಕ್ವೀಝ್ ಸಂಭವಿಸುತ್ತದೆ. ಇದು ಮಾರುಕಟ್ಟೆ ಒತ್ತಡ ನಿರ್ಮಿಸುತ್ತಿದೆ ಎಂದು ಎಚ್ಚರಿಸುತ್ತದೆ. ಯಾವ ದಿಕ್ಕಿಗೆ ಒಡೆಯಲಿದೆ ಎಂದು ಬ್ಯಾಂಡ್‌ಗಳು ಹೇಳಲ್ಲ &mdash; ಅದಕ್ಕಾಗಿ ಪ್ರವೃತ್ತಿ, ಆಧಾರ/ಪ್ರತಿರೋಧ ಮತ್ತು ಪ್ರಮಾಣ ನಡವಳಿಕೆ ವಿಶ್ಲೇಷಿಸಬೇಕು.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image58.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image68.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image89.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image65.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image57.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image46.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೧                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೧: MACD — ಚಲನ ಶಕ್ತಿ ವೇಗ ಮತ್ತು ಬದಲಾವಣೆ ಅಳೆಯುವುದು",
    content: (
      <>
        <p>RSI ಚಲನ ಶಕ್ತಿ ಬಲ ಅಳೆಯಿದರೆ, MACD ಚಲನ ಶಕ್ತಿ ವೇಗ ಮತ್ತು ಬದಲಾವಣೆ ಅಳೆಯುತ್ತದೆ. MACD ಮೂರು ಭಾಗಗಳನ್ನು ಹೊಂದಿದೆ: MACD ರೇಖೆ, ಸಂಕೇತ ರೇಖೆ (Signal Line) ಮತ್ತು ಹಿಸ್ಟೋಗ್ರಾಮ್. ಹಿಸ್ಟೋಗ್ರಾಮ್ ವಿಸ್ತರಿಸಿದಾಗ &mdash; ಊರ್ಧ್ವ ಚಲನ ಶಕ್ತಿ ಬಲಗೊಳ್ಳುತ್ತಿದೆ; ಕಿರಿದಾದಾಗ &mdash; ಚಲನೆ ಶಕ್ತಿ ಕಳೆದುಕೊಳ್ಳುತ್ತಿದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image59.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image51.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image40.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಸಂಕೇತ ರೇಖೆ ಕ್ರಾಸ್‌ಓವರ್‌ಗಳು</h3>
        <ul>
          <li>ಬುಲ್ಲಿಷ್ ಕ್ರಾಸ್‌ಓವರ್: MACD ರೇಖೆ ಸಂಕೇತ ರೇಖೆ ಮೇಲೆ ಹಾದುಹೋಗುತ್ತದೆ &mdash; ಊರ್ಧ್ವ ಚಲನ ಶಕ್ತಿ ಬಲಗೊಳ್ಳುತ್ತಿದೆ</li>
          <li>ಬೇರಿಷ್ ಕ್ರಾಸ್‌ಓವರ್: MACD ರೇಖೆ ಸಂಕೇತ ರೇಖೆ ಕೆಳಗೆ ಹಾದುಹೋಗುತ್ತದೆ &mdash; ಅಧೋಮುಖ ಚಲನ ಶಕ್ತಿ ಹೆಚ್ಚಾಗುತ್ತಿದೆ</li>
        </ul>
        <p>ಎಲ್ಲಾ ಕ್ರಾಸ್‌ಓವರ್‌ಗಳು ಅರ್ಥಪೂರ್ಣ ಅಲ್ಲ. ಅಡ್ಡ ಅಥವಾ ಗಿರಗಿಟ್ಲೆ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ MACD ರೇಖೆಗಳು ಯಾವುದೇ ಸ್ಥಿರ ಚಲನೆ ಇಲ್ಲದೆ ಬಾರಿ ಬಾರಿ ಕ್ರಾಸ್ ಮಾಡಬಹುದು. ಕ್ರಾಸ್‌ಓವರ್‌ಗಳು ಪ್ರವೃತ್ತಿ ದಿಕ್ಕು, ಪ್ರಮುಖ ಆಧಾರ/ಪ್ರತಿರೋಧ ಮತ್ತು ಪ್ರಮಾಣ ದೃಢೀಕರಣದೊಂದಿಗೆ ಅಳೆಯಬೇಕು.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image44.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image48.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image43.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image47.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೨                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೨: ಬ್ರೇಕ್‌ಔಟ್ ಮತ್ತು ಹಿಂಸೆ ಕಾರ್ಯತಂತ್ರಗಳು",
    content: (
      <>
        <p>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಕ್ರಿಯೆಯಾಗಿ ತರ್ಜುಮೆಯಾದಾಗ ಮಾತ್ರ ಶಕ್ತಿಶಾಲಿ. ಎರಡು ಪ್ರಾಥಮಿಕ ರಚನಾತ್ಮಕ ಪ್ರವೇಶ ಮಾದರಿಗಳಿವೆ: ಶಕ್ತಿಯಲ್ಲಿ ಪ್ರವೇಶ (ಬ್ರೇಕ್‌ಔಟ್) ಮತ್ತು ಶಕ್ತಿಯ ಒಳಗೆ ನಿಯಂತ್ರಿತ ದೌರ್ಬಲ್ಯದಲ್ಲಿ ಪ್ರವೇಶ (ಹಿಂಸೆ).</p>
        <hr className="chapter-rule" />
        <h3>ಬ್ರೇಕ್‌ಔಟ್ &mdash; ಶಕ್ತಿಯಲ್ಲಿ ಪ್ರವೇಶ</h3>
        <p>ಬ್ರೇಕ್‌ಔಟ್ ಎಂದರೆ ಬೆಲೆ ಹಿಂದೆ ಪ್ರತಿರೋಧ/ಆಧಾರ ಆಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸಿದ ಉತ್ತಮ-ನಿರ್ಧರಿತ ಮಟ್ಟ ದಾಟಿ ಅಲ್ಲೇ ಉಳಿಯುವುದು. ಉತ್ತಮ ಸಂಭಾವ್ಯ ಬ್ರೇಕ್‌ಔಟ್‌ಗಳು ಸಾಮಾನ್ಯವಾಗಿ ತೋರಿಸುತ್ತವೆ: ಪ್ರಬಲ ಮುಕ್ತಾಯ ಬೆಲೆ, ಸ್ಪಷ್ಟ ವ್ಯಾಪ್ತಿ ವಿಸ್ತರಣೆ, ಭಾಗವಹಿಸುವಿಕೆ ಹೆಚ್ಚಳ, ತಕ್ಷಣ ತಿರಸ್ಕಾರ ಇಲ್ಲ. ನಕಲಿ ಬ್ರೇಕ್‌ಔಟ್‌ಗಳು ತ್ವರಿತ ತಿರುವು, ದುರ್ಬಲ ಮುಕ್ತಾಯ ಮತ್ತು ಕಡಿಮೆ ಪ್ರಮಾಣ ತೋರಿಸುತ್ತವೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಹಿಂಸೆ ಕಾರ್ಯತಂತ್ರ &mdash; ನಿಯಂತ್ರಿತ ದೌರ್ಬಲ್ಯದಲ್ಲಿ ಪ್ರವೇಶ</h3>
        <p>ಬ್ರೇಕ್‌ಔಟ್ ಪ್ರವೃತ್ತಿ ಆರಂಭಿಸಿದರೆ, ಹಿಂಸೆಗಳು ಅದನ್ನು ಮುಂದುವರಿಸುತ್ತವೆ. ಆರೋಗ್ಯಕರ ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿಗಳಲ್ಲಿ, ಹಿಂಸೆಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕ್ರಮೇಣ, ನಿಯಂತ್ರಿತ ಮತ್ತು ಆಕ್ರಮಣಕಾರಿ ಮಾರಾಟ ಇಲ್ಲದಿರುತ್ತವೆ. ಸ್ಥಿರ ಹಿಂಸೆ ಅವಕಾಶ; ಹಿಂದಿನ ಉನ್ನತ ನಿಮ್ನ ಮುರಿದರೆ, ಬೆಲೆ ವೇಗ ಹೆಚ್ಚಾದರೆ ಅಥವಾ ಕೆಳ ದಿಕ್ಕಿನಲ್ಲಿ ಭಾಗವಹಿಸುವಿಕೆ ಹೆಚ್ಚಾದರೆ ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ.</p>
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೩                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೩: ಚಾರ್ಟ್ ಮಾದರಿಗಳು — ಪ್ರದರ್ಶಿಸಲ್ಪಡುವ ಮಾನಸಿಕಸ್ಥಿತಿ",
    content: (
      <>
        <p>ಚಾರ್ಟ್ ಮಾದರಿಗಳು ಮಾಂತ್ರಿಕ ಆಕಾರಗಳಲ್ಲ. ಅವು ಸಂಗ್ರಹಣ, ವಿತರಣ, ಅನಿರ್ಧಾರ, ಪ್ರವೃತ್ತಿ ಮುಂದುವರಿಕೆ ಮತ್ತು ಪ್ರವೃತ್ತಿ ಅವಸಾನದ ದೃಶ್ಯ ಪ್ರತಿನಿಧಿತ್ವ.</p>
        <hr className="chapter-rule" />
        <h3>ಪ್ರಮುಖ ಚಾರ್ಟ್ ಮಾದರಿಗಳು</h3>
        <p><strong>ಡಬಲ್ ಟಾಪ್ ಮತ್ತು ಡಬಲ್ ಬಾಟಮ್:</strong></p>
        <p>ಎರಡು ಬಾರಿ ಪ್ರತಿರೋಧ ಮುಟ್ಟಿ ವಿಫಲ (ಡಬಲ್ ಟಾಪ್) ಅಥವಾ ಎರಡು ಬಾರಿ ಆಧಾರ ಮುಟ್ಟಿ ಹಿಡಿದ (ಡಬಲ್ ಬಾಟಮ್) ನಂತರ ಮಧ್ಯ ಉಚ್ಛ್ರಾಯ/ನಿಮ್ನ ಮೀರಿ ಬ್ರೇಕ್‌ಔಟ್/ಬ್ರೇಕ್‌ಡೌನ್ ದೃಢೀಕರಣ ಅಗತ್ಯ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image49.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image63.png" alt="" style={imgStyle} />
        <p><strong>ತಲೆ ಮತ್ತು ಭುಜಗಳು (Head &amp; Shoulders):</strong></p>
        <p>ವಿತರಣ ಮಾದರಿ: ಎರಡು ಸಣ್ಣ ಉಚ್ಛ್ರಾಯಗಳ (ಭುಜ) ನಡುವೆ ದೊಡ್ಡ ಉಚ್ಛ್ರಾಯ (ತಲೆ). ನೇಕ್‌ಲೈನ್ ಒಡೆದಾಗ ದೃಢೀಕರಣ. ಬೇಡಿಕೆ ಕ್ರಮೇಣ ದೌರ್ಬಲ್ಯ ಸೂಚಿಸುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image37.png" alt="" style={imgStyle} />
        <p><strong>ಕಪ್ ಮತ್ತು ಹ್ಯಾಂಡಲ್ (Cup &amp; Handle):</strong></p>
        <p>ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಶಕ್ತಿಶಾಲಿ: ಸಂಸ್ಥೆ ಸಂಗ್ರಹಣ ತೋರಿಸುವ ದುಂಡಾದ ತಳ (ಕಪ್), ಅಂತಿಮ ತಳ್ಳುವಿಕೆ (ಹ್ಯಾಂಡಲ್), ನಂತರ ಬ್ರೇಕ್‌ಔಟ್ ಮುಂದುವರಿಕೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image39.png" alt="" style={imgStyle} />
        <p><strong>ತ್ರಿಕೋಣಗಳು (Triangles):</strong></p>
        <p>ಏರುವ ತ್ರಿಕೋಣ (ಬೆಲ್ಲಿಷ್ ಪ್ರವೃತ್ತಿ), ಇಳಿಯುವ ತ್ರಿಕೋಣ (ಬೇರಿಷ್ ಪ್ರವೃತ್ತಿ), ಸಮಮಿತೀಯ ತ್ರಿಕೋಣ (ತಟಸ್ಥ ಸ್ಥಿರೀಕರಣ). ಎಲ್ಲಾ ಒತ್ತಡ ನಿರ್ಮಾಣ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ &mdash; ಬ್ರೇಕ್‌ಔಟ್ ದಿಕ್ಕು ಪ್ರವೃತ್ತಿ ಮತ್ತು ಪ್ರಮಾಣ ಆಧಾರಿತ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image55.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image52.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೪                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೪: ಬಹು-ಸಮಯ ಚೌಕಟ್ಟು ವಿಶ್ಲೇಷಣೆ",
    content: (
      <>
        <p>ಒಂದೇ ಸಮಯ ಚೌಕಟ್ಟಿನ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸುವುದು ಸಾಮಾನ್ಯ ತಪ್ಪು. ಹೂಡಿಕೆದಾರರಿಗೆ ಸರಳ ಚೌಕಟ್ಟು:</p>
        <ul>
          <li>ವಾರ ಚಾರ್ಟ್ &rarr; ಪ್ರಾಥಮಿಕ ಪ್ರವೃತ್ತಿ (ತಂತ್ರಾತ್ಮಕ ದೃಷ್ಟಿ)</li>
          <li>ದೈನಂದಿನ ಚಾರ್ಟ್ &rarr; ರಚನೆ ಮತ್ತು ಪ್ರವೇಶ ಸಮಯ</li>
          <li>ಒಳ-ದಿನ ಚಾರ್ಟ್ &rarr; ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಹೆಚ್ಚಾಗಿ ಅಡ್ಡಿ ಮಾತ್ರ</li>
        </ul>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image74.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image72.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image62.png" alt="" style={imgStyle} />
        <p>ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಸಂಯೋಜನೆ: ವಾರ ಚಾರ್ಟ್ ಊರ್ಧ್ವ ಪ್ರವೃತ್ತಿ + ದೈನಂದಿನ ಚಾರ್ಟ್ ಆಧಾರ ಬಳಿ ಹಿಂಸೆ ಅಥವಾ ಸ್ಥಿರೀಕರಣ ಬ್ರೇಕ್‌ಔಟ್. ಸಮಯ ಚೌಕಟ್ಟುಗಳು ಒಟ್ಟಾದಾಗ ನಂಬಿಕೆ ಹೆಚ್ಚಾಗುತ್ತದೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image72.png" alt="" style={imgStyle} />
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೫                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೫: ಅಪಾಯ ನಿರ್ವಹಣೆ — ಸಂಪತ್ತು ಸಂಚಯಿಸುತ್ತ ಬಂಡವಾಳ ರಕ್ಷಣೆ",
    content: (
      <>
        <p>ಅಪಾಯ ನಿರ್ವಹಣೆ ನಷ್ಟ ತಪ್ಪಿಸುವ ಬಗ್ಗೆ ಅಲ್ಲ. ನಷ್ಟ ಹೂಡಿಕೆಯ ಸ್ವಾಭಾವಿಕ ಭಾಗ. ನಿಜ ಗುರಿ: ಯಾವ ಒಂದು ತಪ್ಪು ಬಂಡವಾಳವನ್ನು ಗಮನಾರ್ಹವಾಗಿ ಹಾಳು ಮಾಡದಂತೆ ತಡೆಯುವುದು, ಭವಿಷ್ಯದ ಅವಕಾಶಗಳಿಗೆ ಬಂಡವಾಳ ಲಭ್ಯ ಇರುವಂತೆ ಮಾಡುವುದು ಮತ್ತು ಬಲವಾದ ಹೂಡಿಕೆಗಳು ಸಂಯೋಜಿತವಾಗಿ ಬೆಳೆಯಲು ಅನುಮತಿಸುವುದು.</p>
        <hr className="chapter-rule" />
        <h3>ಅಪಾಯ ನಿರ್ವಹಣೆಯ ತತ್ವಗಳು</h3>
        <ul>
          <li>ಯಾವ ಒಂದು ಕಲ್ಪನೆ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಪ್ರಾಬಲ್ಯ ಸಾಧಿಸದಿರಲಿ &mdash; ಸ್ಥಾನಗಳಲ್ಲಿ ವೈವಿಧ್ಯ ಅಗತ್ಯ</li>
          <li>ರಚನಾತ್ಮಕ ಅಸಿಂಧತೆ &mdash; ಪ್ರಮುಖ ಆಧಾರ ಒಡೆಯುವಿಕೆ ಅಥವಾ ದೀರ್ಘಾವಧಿ ಪ್ರವೃತ್ತಿ ರಚನೆ ವಿಫಲವಾದಾಗ ಮೂಲ ಹೂಡಿಕೆ ತರ್ಕ ಮರು-ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ</li>
          <li>ಕ್ರಮೇಣ ಸ್ಥಾನ ನಿರ್ಮಾಣ &mdash; ನಂಬಿಕೆ ಬಲಗೊಂಡಂತೆ ಹಂತಹಂತವಾಗಿ ಹೂಡಿಕೆ</li>
          <li>ಚಂಚಲತೆ ಮತ್ತು ಅಪಾಯ ನಡುವಿನ ವ್ಯತ್ಯಾಸ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ &mdash; ವ್ಯಾಪಾರ ಅಡಿಪಾಯ ಹಾಳಾಗದೆ ಇದ್ದರೆ ಅಲ್ಪಾವಧಿ ಬೆಲೆ ಏರಿಳಿತ ನಿಜ ಅಪಾಯ ಅಲ್ಲ</li>
          <li>ಗೆಲ್ಲುವ ಸ್ಥಾನಗಳು ಸಂಯೋಜಿತವಾಗಲು ಬಿಡಿ &mdash; ಯಶಸ್ವಿ ಹೂಡಿಕೆಗಳನ್ನು ಬೇಗ ಮಾರಾಟ ಮಾಡುವ ಸಾಮಾನ್ಯ ತಪ್ಪು ತಪ್ಪಿಸಿ</li>
        </ul>
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೬                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೬: ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು — ಭಾರತೀಯ ಮಾರುಕಟ್ಟೆ ಉದಾಹರಣೆಗಳು",
    content: (
      <>
        <p>ಸಿದ್ಧಾಂತ ನಿಜ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಡೆದಾಗ ಮಾತ್ರ ಶಕ್ತಿಶಾಲಿ. ಚಾರ್ಟ್‌ಗಳು ಅಪರೂಪವಾಗಿ ಆದರ್ಶ ಮಾದರಿ ಅನುಸರಿಸುತ್ತವೆ &mdash; ಬದಲಿಗೆ ಬೇಡಿಕೆ, ಪೂರೈಕೆ ಮತ್ತು ಹೂಡಿಕೆದಾರ ಮಾನಸಿಕತೆಯ ಕ್ರಮೇಣ ಬದಲಾವಣೆ ಬಹಿರಂಗ ಮಾಡುತ್ತವೆ.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image61.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image67.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image64.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image66.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image69.png" alt="" style={imgStyle} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/technical-analysis/image82.png" alt="" style={imgStyle} />
        <hr className="chapter-rule" />
        <h3>ಪ್ರಮುಖ ಪಾಠಗಳು</h3>
        <ul>
          <li>ಬಲವಾದ ಕಂಪನಿಗಳು ನೇರ ರೇಖೆಯಲ್ಲಿ ಚಲಿಸುವುದಿಲ್ಲ &mdash; ದೀರ್ಘ ಸ್ಥಿರೀಕರಣ ಅಥವಾ ತಿದ್ದುಪಡಿ ಹಂತಗಳು ಸಾಮಾನ್ಯ</li>
          <li>ಬಹು-ವರ್ಷದ ಸ್ಥಿರೀಕರಣ ಶಕ್ತಿಶಾಲಿ ರಚನಾತ್ಮಕ ಚಲನೆಗಳಿಗೆ ಮೊದಲಾಗಬಹುದು</li>
          <li>ದೀರ್ಘಾವಧಿ ಪ್ರವೃತ್ತಿ ಅಖಂಡ ಇರುವವರೆಗೆ ಪ್ರಮುಖ ತಿದ್ದುಪಡಿಗಳ ಸಮಯ ಪ್ರಾಥಮಿಕ ಪ್ರವೃತ್ತಿ ಗಮನಿಸಿ</li>
          <li>ಚಲನ ಶಕ್ತಿ ಸೂಚಕಗಳು ಸ್ಥಿರೀಕರಣ vs ಮುಂದುವರಿಕೆ ಗುರುತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ</li>
          <li>ಮಾರುಕಟ್ಟೆಗಳು ಭಾವನೆ ಸುಧಾರಿಸುವ ಮೊದಲೇ ತಿರುಗಬಹುದು</li>
        </ul>
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೭                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೭: ಸಾಮಾನ್ಯ ತಾಂತ್ರಿಕ ತಪ್ಪುಗಳು",
    content: (
      <>
        <p>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಸರಿಯಾಗಿ ಬಳಸಿದಾಗ ಶಕ್ತಿಶಾಲಿ ಸಾಧನ. ಆದರೆ ಅನೇಕ ಹೂಡಿಕೆದಾರರು ತಾಂತ್ರಿಕ ಸಾಧನಗಳನ್ನು ತಪ್ಪಾಗಿ ಬಳಸುತ್ತಾರೆ. ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು:</p>
        <ul>
          <li><strong>ಸೂಚಕ ಅಧಿಭಾರ</strong> &mdash; RSI, MACD, ಬೊಲ್ಲಿಂಜರ್ ಬ್ಯಾಂಡ್, ಬಹು ಚಲಿಸುವ ಸರಾಸರಿಗಳು ಎಲ್ಲಾ ಒಟ್ಟಿಗೆ ಹಾಕಿದರೆ ಸಂಘರ್ಷಿ ಸಂಕೇತಗಳು ಉಂಟಾಗುತ್ತವೆ</li>
          <li><strong>ವಿಶಾಲ ಪ್ರವೃತ್ತಿ ನಿರ್ಲಕ್ಷ</strong> &mdash; ಮೊದಲು ದೊಡ್ಡ ಚಿತ್ರ ನೋಡಿ, ನಂತರ ಸಣ್ಣ ಚಲನೆ</li>
          <li><strong>ಸೂಚಕಗಳನ್ನು ಖರೀದಿ/ಮಾರಾಟ ಸ್ವಿಚ್ ಆಗಿ ಬಳಸುವುದು</strong> &mdash; ಸೂಚಕಗಳು ಸಂದರ್ಭ ಒದಗಿಸುತ್ತವೆ, ಆಜ್ಞೆ ಅಲ್ಲ</li>
          <li><strong>ಅಲ್ಪಾವಧಿ ಚಂಚಲತೆಗೆ ಅತಿ ಪ್ರತಿಕ್ರಿಯೆ</strong> &mdash; ದೀರ್ಘಾವಧಿ ಹೂಡಿಕೆದಾರರಿಗೆ ಒಳ-ದಿನ ಚಾರ್ಟ್‌ಗಳು ಹೆಚ್ಚಾಗಿ ಅನಗತ್ಯ ಆತಂಕ ಸೃಷ್ಟಿಸುತ್ತವೆ</li>
          <li><strong>ಪ್ರಮಾಣ ದೃಢೀಕರಣ ನಿರ್ಲಕ್ಷ</strong> &mdash; ಪ್ರಬಲ ಭಾಗವಹಿಸುವಿಕೆ ಇಲ್ಲದ ಬ್ರೇಕ್‌ಔಟ್ ಬೇಗ ವಿಫಲ</li>
          <li><strong>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಮೂಲಭೂತ ವಿಶ್ಲೇಷಣೆ ಇಲ್ಲದೆ ಬಳಸುವುದು</strong> &mdash; ಅತ್ಯಂತ ಪ್ರಭಾವಶಾಲಿ ವಿಧಾನ ಎರಡೂ ಸಂಯೋಜಿಸುವುದು</li>
        </ul>
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೮                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೮: ಮೂಲಭೂತ ಮತ್ತು ತಾಂತ್ರಿಕ ಅಂಶಗಳ ಸಂಯೋಜನೆ",
    content: (
      <>
        <p>ಮೂಲಭೂತ ಅಂಶಗಳು: ಏನು ಖರೀದಿಸಬೇಕು? ತಾಂತ್ರಿಕ ಅಂಶಗಳು: ಯಾವಾಗ ಖರೀದಿಸಬೇಕು? ಎರಡೂ ಒಟ್ಟಾದಾಗ ನಂಬಿಕೆ ಮತ್ತು ಸಮಯ ನಿರ್ಧಾರ ಎರಡರಲ್ಲಿ ಸ್ಪಷ್ಟತೆ.</p>
        <hr className="chapter-rule" />
        <h3>ಸಂಪೂರ್ಣ ಹೂಡಿಕೆ ತಪಾಸಣ ಪಟ್ಟಿ</h3>
        <ul>
          <li>ವ್ಯಾಪಾರ ಮೂಲಭೂತ ಅಂಶಗಳು ಬಲವಾಗಿದ್ದಾವೇ?</li>
          <li>ದೀರ್ಘಾವಧಿ ಪ್ರವೃತ್ತಿ ಧನಾತ್ಮಕವಾಗಿದೆಯೇ?</li>
          <li>ಷೇರು ಆಧಾರ ಬಳಿ ಇದೆಯೇ ಅಥವಾ ಸ್ಥಿರೀಕರಣದಿಂದ ಒಡೆಯುತ್ತಿದೆಯೇ?</li>
          <li>ಪ್ರಮಾಣ ಚಲನೆ ಬೆಂಬಲಿಸುತ್ತಿದೆಯೇ?</li>
          <li>ಚಲನ ಶಕ್ತಿ ಸೂಚಕಗಳು ರಚನೆಯೊಂದಿಗೆ ಒಟ್ಟಾಗಿವೆಯೇ?</li>
          <li>ಸ್ಥಾನ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಅಪಾಯ ಮಿತಿಯೊಳಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಿದೆಯೇ?</li>
        </ul>
      </>
    ),
  },

  /* ------------------------------------------------------------------ */
  /*  ಅಧ್ಯಾಯ ೧೯                                                       */
  /* ------------------------------------------------------------------ */
  {
    title: "ಅಧ್ಯಾಯ ೧೯: ಹೂಡಿಕೆದಾರನ ಮನೋಭಾವ — ನಿಜವಾಗಿ ಸಂಪತ್ತು ನಿರ್ಮಿಸುವ ಅಂಶ",
    content: (
      <>
        <p>ದೀರ್ಘ ಅವಧಿಯಲ್ಲಿ, ಹೂಡಿಕೆ ಯಶಸ್ಸಿನ ಅತ್ಯಂತ ಮಹತ್ವದ ನಿರ್ಧಾರಕ ಬುದ್ಧಿವಂತಿಕೆ ಅಲ್ಲ &mdash; ಅದು ಮನೋಭಾವ. ಯಶಸ್ವಿ ಹೂಡಿಕೆಗೆ ನಾಲ್ಕು ಶಾಶ್ವತ ತತ್ವಗಳು:</p>
        <ul>
          <li><strong>ತಾಳ್ಮೆ</strong> &mdash; ಮಹಾನ್ ವ್ಯಾಪಾರಗಳು ಮತ್ತು ಬಲವಾದ ಪ್ರವೃತ್ತಿಗಳು ತೆಳೆಯಲು ಸಮಯ ಬೇಕು</li>
          <li><strong>ಶಿಸ್ತು</strong> &mdash; ಭಾವನಾತ್ಮಕ ಪ್ರತಿಕ್ರಿಯೆ ಬದಲು ರಚನಾತ್ಮಕ ಪ್ರಕ್ರಿಯೆ ಅನುಸರಿಸುವುದು</li>
          <li><strong>ವಿನಯ</strong> &mdash; ಮಾರುಕಟ್ಟೆ ಅನಿಶ್ಚಿತ ಮತ್ತು ತಪ್ಪುಗಳು ಆಗುತ್ತವೆ ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳುವುದು</li>
          <li><strong>ಸ್ಥಿರತೆ</strong> &mdash; ವಿಭಿನ್ನ ಮಾರುಕಟ್ಟೆ ವಾತಾವರಣದಲ್ಲಿ ಒಂದೇ ಚೌಕಟ್ಟು ಅನ್ವಯಿಸುವುದು</li>
        </ul>
        <p>ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಮಾರುಕಟ್ಟೆ ಹೇಗೆ ವರ್ತಿಸುತ್ತದೆ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಮೂಲಭೂತ ವಿಶ್ಲೇಷಣೆ ನೀವು ಏನು ಹೊಂದಿದ್ದೀರಿ ಎಂದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಎರಡೂ ಒಟ್ಟಾಗಿ ಸ್ಪಷ್ಟತೆ ನೀಡುತ್ತವೆ. ಆದರೆ ನಿಜ ಅನುಕೂಲ ಸರಳದ್ದರಲ್ಲಿ ಇದೆ: ಮಾರುಕಟ್ಟೆ ಭಾವನಾತ್ಮಕವಾದಾಗ ತರ್ಕಬದ್ಧವಾಗಿ ಉಳಿಯುವ ಸಾಮರ್ಥ್ಯ.</p>
        <hr className="chapter-rule" />
        <h3>ಅಭಿನಂದನೆಗಳು! ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆ ಮಾಡ್ಯೂಲ್ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ!</h3>
      </>
    ),
  },
];
