"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function FundamentalAnalysisPage() {
  const { t } = useLanguage();
  // ============================================================
  // ALL CHAPTER CONTENT
  // ============================================================
  const chapters = [
    {
      title: "Chapter 1: What Is Fundamental Analysis?",
      content: (
        <>
          <p>When you buy a stock, you are not just buying a number on a screen. You are buying a small ownership stake in a business. That business produces products or services, earns revenue, pays expenses, generates profits and reinvests capital to grow. Over time, the success of that business determines the value of the shares you own.</p>
      <p>Fundamental analysis is the process of evaluating that business. Instead of focusing on short-term price movements, it asks deeper questions: How does the company make money? Is the business growing? Is it financially strong? Does it have a competitive advantage? Is the stock price reasonable relative to its value?</p>
      <div className="ch-illustration" style={{padding:"0",overflow:"hidden",borderRadius:"16px"}}><img src="/fundamental-analysis/image1.png" alt="A shopkeeper at a small grocery store &mdash; illustrating how a business makes money" style={{width:"100%",height:"auto",display:"block"}} /></div>
      <hr className="chapter-rule" />
      <h3>Price vs Value</h3>
      <p>Price is simply the number you see on the stock exchange. Value represents the true economic worth of the underlying business. In the short term, price and value can diverge significantly because markets are influenced by news, investor sentiment, economic events and speculation. But over long periods, stock prices tend to follow the growth and profitability of the business itself.</p>
      <hr className="chapter-rule" />
      <h3>Why Businesses Create Long-Term Wealth</h3>
      <p>When a company increases its earnings year after year, it can reinvest profits to expand operations, launch new products, enter new markets and increase shareholder value. As profits grow, the intrinsic value of the company increases. Companies such as Asian Paints and HDFC Bank have historically created wealth because their underlying businesses expanded consistently over many years.</p>
      <div className="ch-illustration" style={{padding:"0",overflow:"hidden",borderRadius:"16px"}}><img src="/fundamental-analysis/image2.png" alt="The same shop 5 years later &mdash; now a supermarket, illustrating long-term business growth" style={{width:"100%",height:"auto",display:"block"}} /></div>
      <hr className="chapter-rule" />
      <h3>Investing vs Speculating</h3>
      <p>Investing focuses on the quality of the business, long-term growth potential, financial strength and reasonable valuation. Speculation focuses primarily on short-term price movement and market sentiment. Long-term investors rely primarily on business analysis rather than price fluctuations.</p>
      <hr className="chapter-rule" />
      <h3>Expectations vs Reality</h3>
      <p>Stock prices are not determined only by current performance. They are influenced by future expectations. If investors believe a company will grow rapidly, the stock price may rise even before the growth actually appears in financial results. Conversely, if expectations fall, prices can decline even if the company remains profitable.</p>
      <p>This is why fundamental analysis attempts to understand not only how the company is performing today &mdash; but also how it may perform in the future.</p>
      <hr className="chapter-rule" />
      <h3>The Goal of Fundamental Analysis</h3>
      <p>The ultimate objective is simple: to identify businesses whose long-term value may grow faster than the market currently expects. Achieving this requires understanding the business model, the industry, the competitive advantages, the financial strength and the management team.</p>
      <blockquote className="pull-quote">When investors identify such companies early and hold them through long periods of growth, the compounding effect can be powerful.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 2: How Businesses Actually Make Money",
      content: (
        <>
          <p>Before analyzing financial statements, it is important to understand a simple truth: every business follows the same basic economic structure. At its core, a company sells a product or service, earns revenue from customers, incurs costs to operate and generates profit if revenue exceeds costs.</p>
      <hr className="chapter-rule" />
      <h3>The Basic Business Equation</h3>
      <p>Every company operates around a simple equation: Revenue &ndash; Expenses = Profit. Revenue represents the money a company earns from selling its products or services. Expenses represent the costs required to operate the business. If revenue consistently exceeds expenses, the business generates profit.</p>
      <div className="ch-illustration" style={{padding:"0",overflow:"hidden",borderRadius:"16px"}}><img src="/fundamental-analysis/image3.png" alt="Diagram showing the relationship between Revenue, Business and Expenses" style={{width:"100%",height:"auto",display:"block"}} /></div>
      <hr className="chapter-rule" />
      <h3>Revenue &mdash; The Starting Point</h3>
      <p>Revenue is the total income generated from the company's primary business activities, sometimes called sales or turnover. A paint company earns revenue by selling paint products. A bank earns revenue from interest on loans. A software company earns revenue from subscriptions or licenses. Consistent revenue growth usually indicates the business is expanding its customer base or benefiting from industry growth. However, revenue growth alone does not guarantee success &mdash; the company must also manage its costs effectively.</p>
      <hr className="chapter-rule" />
      <h3>Costs &mdash; The Reality of Running a Business</h3>
      <p>To generate revenue, businesses must spend on raw materials, employee salaries, manufacturing, distribution, marketing and administrative overhead. The ability to control these costs often determines how profitable a company becomes. Some businesses operate with very thin margins because their costs are high. Others benefit from strong pricing power or efficient operations, allowing them to maintain higher profit margins.</p>
      <hr className="chapter-rule" />
      <h3>Profit, Capital and Cash Flow</h3>
      <p>Profit represents earnings remaining after expenses are deducted. Profit growth can occur through increasing sales, improving efficiency, raising prices or expanding into new markets.</p>
      <p>Businesses require capital to operate &mdash; from shareholders, retained profits or borrowed funds &mdash; to build factories, invest in technology, hire employees and expand. The way a company uses its capital is one of the most important factors in long-term investment success.</p>
      <p>While profits are important, businesses ultimately operate on cash. A business may report accounting profits but still struggle if cash inflows are weak. Strong companies typically generate consistent cash flow, allowing them to reinvest in growth, reduce debt or reward shareholders.</p>
      <hr className="chapter-rule" />
      <h3>Business Models Can Be Very Different</h3>
      <p>A consumer brand such as Asian Paints earns revenue by selling physical products through distributors. A bank like HDFC Bank earns revenue through interest on loans. A technology company such as Infosys generates revenue by providing software development and consulting services. Each business model has its own economics, risks and growth potential.</p>
      <hr className="chapter-rule" />
      <h3>Why Understanding the Business Model Matters</h3>
      <p>Many investors make the mistake of looking only at financial numbers without understanding the underlying business. But numbers become far more meaningful when viewed in context.</p>
      <p>For example, high margins may indicate strong pricing power. Low margins may reflect intense competition. Rapid revenue growth may signal industry expansion. The same number can mean very different things depending on the type of business being examined &mdash; which is why understanding how a company makes money is the essential first step before analysing any financial statement.</p>
      <blockquote className="pull-quote">Before analyzing financial statements, investors should always ask: How does this company actually make money?</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 3: Where to Find Data for Fundamental Analysis",
      content: (
        <>
          <p>Throughout this module, we will discuss many elements of fundamental analysis &mdash; financial statements, growth trends, return ratios, valuation and management quality. To apply these concepts in practice, investors need reliable sources where they can obtain company data.</p>
      <blockquote className="pull-quote">Do not stress or focus on the numbers in the snippets shown throughout this module &mdash; the concepts will be covered in detail in the chapters that follow.</blockquote>
      <hr className="chapter-rule" />
      <h3>Company Investor Relations &mdash; Most Reliable Source</h3>
      <p>The Investor Relations section of a company's official website is one of the best places to obtain accurate information. Most listed companies publish annual reports, investor presentations, quarterly results, earnings call transcripts and corporate announcements. Because this information comes directly from the company, it is often the most reliable primary source for fundamental analysis.</p>
      <div className="ch-illustration" style={{padding:"0",overflow:"hidden",borderRadius:"16px"}}><img src="/fundamental-analysis/image4.png" alt="Eternal (Zomato) Investor Relations section showing Shareholders Letter and Results" style={{width:"100%",height:"auto",display:"block"}} /></div>
      <p style={{fontSize:"0.78em",color:"#888",textAlign:"center",marginTop:"6px",marginBottom:"0"}}>A Snippet from Eternal&apos;s (Zomato) Investor Relations section</p>
      <hr className="chapter-rule" />
      <h3>Stock Exchange Filings</h3>
      <p>Companies are required to submit official disclosures to stock exchanges. In India, these filings are available on platforms such as the National Stock Exchange of India. Exchange filings include financial results, corporate announcements, shareholding patterns and regulatory disclosures. These ensure transparency and provide investors with verified company information.</p>
      <figure className="screenshot-figure"><img src="/fundamental-analysis/image5.png" alt="NSE Annual Reports page showing filings from 2021 to 2025" style={{width:"100%",borderRadius:"10px",border:"1px solid rgba(201,168,76,0.3)",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",marginTop:"1.2rem"}} /><figcaption style={{textAlign:"center",fontSize:"0.8rem",color:"#888",marginTop:"0.5rem",fontStyle:"italic"}}>A Snippet from NSE India website after searching for Eternal (Zomato) on it, it gives you a lot of information about the stock including Annual Reports(Financial Statements)</figcaption><p style={{fontSize:"0.85rem",color:"#666",marginTop:"0.5rem",fontStyle:"italic",textAlign:"center"}}>A snippet from Eternal FY 2024&ndash;2025 profit and loss statement is shown above. While it lists operating expenses, the figure also includes finance costs, depreciation and amortization. To calculate the true operating expense, these items must be subtracted from the total expenses.</p></figure>
      <hr className="chapter-rule" />
      <h3>Financial Analysis Websites</h3>
      <p>Several financial platforms compile company financials and make them easier to analyze. Screener provides income statements, balance sheets, cash flow statements, financial ratios and growth metrics. Moneycontrol provides market data, financial statements, company news and analyst commentary. These websites help investors quickly access and compare financial information across companies.</p>
      <figure className="screenshot-figure"><img src="/fundamental-analysis/image6.png" alt="Screener quarterly results" style={{width:"100%",borderRadius:"10px",border:"1px solid rgba(201,168,76,0.3)",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",marginTop:"1.2rem"}} /><p style={{fontSize:"0.85rem",color:"#666",marginTop:"0.5rem",fontStyle:"italic",textAlign:"center"}}>ಮೇಲೆ ತೋರಿಸಿದ್ದು Eternal ಕಂಪನಿಯ FY 2024&ndash;2025 ಲಾಭ ಮತ್ತು ನಷ್ಟ ವಿವರಣ ಪತ್ರದ ಒಂದು ತುಣುಕು. ಇದರಲ್ಲಿ ಕಾರ್ಯಾಚರಣಾ ವೆಚ್ಚಗಳ ಜೊತೆಗೆ ಹಣಕಾಸು ವೆಚ್ಚಗಳು, ಸವಕಳಿ ಮತ್ತು ಕ್ಷಯ ಸಹ ಸೇರಿವೆ. ನಿಜವಾದ ಕಾರ್ಯಾಚರಣಾ ವೆಚ್ಚ ಲೆಕ್ಕಹಾಕಲು, ಈ ಮೊತ್ತಗಳನ್ನು ಒಟ್ಟು ವೆಚ್ಚದಿಂದ ಕಳೆಯಬೇಕು.</p></figure>
      <figcaption style={{textAlign:"center",fontSize:"0.8rem",color:"#888",marginTop:"0.5rem",marginBottom:"1rem",fontStyle:"italic"}}>A Snippet from Screener website after searching for Eternal (Zomato) on it, it gives you a lot of information about the stock and can also compare performance with peers as seen below</figcaption>
      <figure className="screenshot-figure"><img src="/fundamental-analysis/image7.png" alt="Screener peer comparison" style={{width:"100%",borderRadius:"10px",border:"1px solid rgba(201,168,76,0.3)",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",marginTop:"1.2rem"}} /></figure>
      <hr className="chapter-rule" />
      <h3>Broker Platforms</h3>
      <p>Many brokerage platforms also provide useful research tools and financial data. For example, Kite by Zerodha offers company information, charts, financial summaries and market updates. Broker apps are built more for investing convenience than deep analysis, so for advanced ratios, research platforms are better.</p>
      <div style={{margin:"1.5rem 0",textAlign:"center"}}><img src="/fundamental-analysis/image8.png" alt="Ratios table from Eternal Ltd. on a research platform" style={{maxWidth:"100%",borderRadius:"10px",border:"1px solid #e0d8c8",boxShadow:"0 4px 16px rgba(0,0,0,0.10)"}} /></div>
      <p style={{textAlign:"center",fontSize:"0.85em",color:"#888",marginTop:"0.4rem",fontStyle:"italic"}}>A Snippet from Zerodha's official partner Tijori, after searching for Eternal (Zomato) on it</p>
        </>
      ),
    },
    {
      title: "Chapter 4: The Income Statement &mdash; Understanding a Company's Profit Story",
      content: (
        <>
          <p>Once we understand how a business makes money, the next step is to evaluate how profitable it actually is. The financial statement that tells this story is the Income Statement &mdash; it summarizes a company's financial performance over a specific period, usually a quarter or a year.</p>
      <p>In simple terms, the income statement answers: Is this business growing profitably?</p>
      <hr className="chapter-rule" />
      <h3>The Flow of the Income Statement</h3>
      <div style={{margin:"1.8rem 0",display:"flex",flexDirection:"column",alignItems:"center",gap:"0"}}>
  <div style={{width:"100%",maxWidth:"480px"}}>

    <div style={{background:"linear-gradient(135deg,#2a2d35,#3a3f4b)",color:"#fdfcf9",borderRadius:"14px 14px 0 0",padding:"14px 20px",textAlign:"center"}}>
      <div style={{fontSize:"0.7em",letterSpacing:"0.12em",textTransform:"uppercase",opacity:"0.65",marginBottom:"4px"}}>Starting Point</div>
      <div style={{fontSize:"1.1em",fontWeight:"700",color:"#e8d08a"}}>Revenue</div>
      <div style={{fontSize:"0.78em",opacity:"0.75",marginTop:"3px"}}>Total income from products &amp; services</div>
    </div>

    <div style={{display:"flex",justifyContent:"center",background:"#1e2128"}}>
      <svg width="24" height="28" viewBox="0 0 24 28"><path d="M12 0 L12 20 L4 12 L12 28 L20 12 L12 20" fill="none" stroke="#c9a84c" stroke-width="2.2" stroke-linejoin="round"/><line x1="12" y1="0" x2="12" y2="22" stroke="#c9a84c" stroke-width="2.2"/><polygon points="12,28 5,16 19,16" fill="#c9a84c"/></svg>
    </div>
    <div style={{background:"#1e2128",color:"#c9a84c",padding:"3px 20px 8px",textAlign:"center",fontSize:"0.72em",letterSpacing:"0.05em"}}>− Operating Costs</div>

    <div style={{background:"linear-gradient(135deg,#1a4a2e,#226038)",color:"#fdfcf9",padding:"14px 20px",textAlign:"center"}}>
      <div style={{fontSize:"0.7em",letterSpacing:"0.12em",textTransform:"uppercase",opacity:"0.65",marginBottom:"4px"}}>Operational Efficiency</div>
      <div style={{fontSize:"1.1em",fontWeight:"700",color:"#7dd9a0"}}>EBITDA</div>
      <div style={{fontSize:"0.78em",opacity:"0.75",marginTop:"3px"}}>Earnings before interest, taxes, D&amp;A</div>
    </div>

    <div style={{display:"flex",justifyContent:"center",background:"#1e2128"}}>
      <svg width="24" height="28" viewBox="0 0 24 28"><line x1="12" y1="0" x2="12" y2="22" stroke="#c9a84c" stroke-width="2.2"/><polygon points="12,28 5,16 19,16" fill="#c9a84c"/></svg>
    </div>
    <div style={{background:"#1e2128",color:"#c9a84c",padding:"3px 20px 8px",textAlign:"center",fontSize:"0.72em",letterSpacing:"0.05em"}}>− Depreciation &amp; Amortization</div>

    <div style={{background:"linear-gradient(135deg,#1a3a5c,#1e4f7a)",color:"#fdfcf9",padding:"14px 20px",textAlign:"center"}}>
      <div style={{fontSize:"0.7em",letterSpacing:"0.12em",textTransform:"uppercase",opacity:"0.65",marginBottom:"4px"}}>Operating Profit</div>
      <div style={{fontSize:"1.1em",fontWeight:"700",color:"#7ab8f5"}}>EBIT</div>
      <div style={{fontSize:"0.78em",opacity:"0.75",marginTop:"3px"}}>Core operations profit before financing</div>
    </div>

    <div style={{display:"flex",justifyContent:"center",background:"#1e2128"}}>
      <svg width="24" height="28" viewBox="0 0 24 28"><line x1="12" y1="0" x2="12" y2="22" stroke="#c9a84c" stroke-width="2.2"/><polygon points="12,28 5,16 19,16" fill="#c9a84c"/></svg>
    </div>
    <div style={{background:"#1e2128",color:"#c9a84c",padding:"3px 20px 8px",textAlign:"center",fontSize:"0.72em",letterSpacing:"0.05em"}}>− Interest</div>

    <div style={{background:"linear-gradient(135deg,#4a2a0a,#7a4a10)",color:"#fdfcf9",padding:"14px 20px",textAlign:"center"}}>
      <div style={{fontSize:"0.7em",letterSpacing:"0.12em",textTransform:"uppercase",opacity:"0.65",marginBottom:"4px"}}>Before Tax</div>
      <div style={{fontSize:"1.1em",fontWeight:"700",color:"#f5c97a"}}>EBT</div>
      <div style={{fontSize:"0.78em",opacity:"0.75",marginTop:"3px"}}>Profit after interest, before taxes</div>
    </div>

    <div style={{display:"flex",justifyContent:"center",background:"#1e2128"}}>
      <svg width="24" height="28" viewBox="0 0 24 28"><line x1="12" y1="0" x2="12" y2="22" stroke="#c9a84c" stroke-width="2.2"/><polygon points="12,28 5,16 19,16" fill="#c9a84c"/></svg>
    </div>
    <div style={{background:"#1e2128",color:"#c9a84c",padding:"3px 20px 8px",textAlign:"center",fontSize:"0.72em",letterSpacing:"0.05em"}}>− Taxes</div>

    <div style={{background:"linear-gradient(135deg,#3a1a4a,#5c2a6e)",color:"#fdfcf9",borderRadius:"0 0 14px 14px",padding:"14px 20px",textAlign:"center"}}>
      <div style={{fontSize:"0.7em",letterSpacing:"0.12em",textTransform:"uppercase",opacity:"0.65",marginBottom:"4px"}}>Bottom Line</div>
      <div style={{fontSize:"1.1em",fontWeight:"700",color:"#c9a0e8"}}>Net Profit</div>
      <div style={{fontSize:"0.78em",opacity:"0.75",marginTop:"3px"}}>Belongs to shareholders &mdash; the final reward</div>
    </div>

  </div>
  <p style={{textAlign:"center",fontSize:"0.8em",color:"#888",marginTop:"0.8rem",fontStyle:"italic"}}>Each stage provides insight into a different aspect of the business.</p>
</div>
      <hr className="chapter-rule" />
      <h3>Revenue &mdash; The Top Line</h3>
      <p>Revenue is the starting point &mdash; the total income generated from selling the company's products or services. Consistent revenue growth usually indicates the business is expanding through increasing demand, gaining market share, launching new offerings or benefiting from industry growth. However, what matters more is how efficiently the company converts revenue into profit.</p>
      <div style={{margin:"1.5rem 0",textAlign:"center"}}><img src="/fundamental-analysis/image9.png" style={{maxWidth:"100%",borderRadius:"10px",border:"1px solid #e0d8c8",boxShadow:"0 4px 16px rgba(0,0,0,0.10)"}} /></div>
      <p style={{textAlign:"center",fontSize:"0.85em",color:"#888",marginTop:"0.4rem",fontStyle:"italic"}}>A snippet from Eternal FY 2024-25 profit and loss statement, showing Revenue as the top line</p>
      <hr className="chapter-rule" />
      <h3>Operating Expenses</h3>
      <p>To generate revenue, companies incur various operating costs. These may include raw materials, employee salaries, manufacturing costs, marketing and advertising, logistics and distribution, and administrative expenses. These costs are necessary for running the business, but they must be controlled carefully. Efficient companies manage these expenses well, allowing them to generate higher profits from their revenue.</p>
      <figure style={{margin:"2rem 0",textAlign:"center"}}><img src="/fundamental-analysis/image10.png" alt="Expenses table" style={{maxWidth:"100%",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"8px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}} /></figure>
      <hr className="chapter-rule" />
      <h3>EBITDA &mdash; Earnings Before Interest, Taxes, Depreciation and Amortization</h3>
      <p>After subtracting operating expenses from revenue, we arrive at EBITDA &mdash; the operating profitability of the business before financing decisions and non-cash expenses. Investors use EBITDA to evaluate how well the company's core operations are performing. It is particularly useful when comparing companies within the same industry because it removes the effects of capital structure, tax differences and accounting treatments.</p>
      <hr className="chapter-rule" />
      <h3>Depreciation, EBIT and Interest</h3>
      <p>Businesses invest in long-term assets &mdash; factories, machinery, equipment, software &mdash; that gradually lose value. This reduction is recorded through Depreciation (physical assets) and Amortization (intangible assets). After these are deducted from EBITDA, we arrive at EBIT, the operating profit that reflects how efficiently the company's core operations generate profit before financing costs and taxes.</p>
      <p>Companies with high levels of debt incur significant interest costs, which can reduce profitability. This is why investors pay close attention to a company's debt levels and interest obligations.</p>
      <hr className="chapter-rule" />
      <h3>Net Profit &mdash; The Bottom Line</h3>
      <p>Net profit represents the earnings remaining after all expenses, interest and taxes have been deducted. It ultimately belongs to the shareholders. Over long periods, companies that consistently grow net profit tend to create substantial value for investors.</p>
      <hr className="chapter-rule" />
      <h3>Profit Margins &mdash; Measuring Efficiency</h3>
      <p>Investors also evaluate profit margins: EBITDA Margin = EBITDA ÷ Revenue. Operating Margin (EBIT Margin) = EBIT ÷ Revenue. Net Profit Margin = Net Profit ÷ Revenue. Higher margins may indicate strong pricing power, operational efficiency and competitive advantages. Declining margins may signal increasing competition or rising costs.</p>
      <hr className="chapter-rule" />
      <h3>Why Investors Study Income Statements Over Time</h3>
      <p>Investors study trends across multiple years to evaluate revenue growth, profit growth and margin stability. Companies that consistently grow both revenue and profits often possess strong business models and competitive advantages.</p>
      <blockquote className="pull-quote">Profit numbers alone cannot reveal everything. A business may report strong profits while still carrying significant debt or generating weak cash flows.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 5: The Balance Sheet &mdash; Understanding Financial Strength",
      content: (
        <>
          <p>While the income statement tells us how profitable a company is, it does not tell us how strong the company's financial position is. A business may report strong profits but still carry excessive debt or weak financial reserves. This is why investors must also examine the Balance Sheet.</p>
      <p>The balance sheet provides a snapshot of a company's financial position at a specific point in time. It answers: How financially strong and stable is the business?</p>
      <hr className="chapter-rule" />
      <h3>The Basic Structure: Assets = Liabilities + Shareholders' Equity</h3>
      <p>Everything the company owns (assets) must have been financed either through borrowing (liabilities) or through money invested by shareholders (equity).</p>
      <hr className="chapter-rule" />
      <h3>Assets &mdash; What the Company Owns</h3>
      <p><strong>Current Assets</strong> &mdash; assets expected to be converted into cash within one year: cash and equivalents, accounts receivable, inventory and short-term investments. These help the company manage day-to-day operations and liquidity.</p>
      <p><strong>Non-Current Assets</strong> &mdash; long-term resources: factories, machinery, office buildings, technology infrastructure and intangible assets such as patents or brand value. Companies like Asian Paints invest heavily in manufacturing plants and distribution infrastructure that appear as long-term assets.</p>
      <hr className="chapter-rule" />
      <h3>Liabilities &mdash; What the Company Owes</h3>
      <p><strong>Current Liabilities</strong> &mdash; obligations payable within one year: short-term borrowings, accounts payable, taxes payable and short-term provisions.</p>
      <p><strong>Non-Current Liabilities</strong> &mdash; long-term obligations beyond one year: long-term loans, corporate bonds and long-term lease obligations. Excessive debt can increase financial risk during economic downturns.</p>
      <hr className="chapter-rule" />
      <h3>Shareholders' Equity &mdash; The Owners' Claim</h3>
      <p>Shareholders' equity represents the portion of the company that belongs to its shareholders after all liabilities have been deducted. It includes share capital, retained earnings (profits reinvested into the business) and reserves. Companies such as HDFC Bank have steadily increased their equity base over many years as profits were reinvested into expanding operations.</p>
      <hr className="chapter-rule" />
      <h3>Working Capital and Debt</h3>
      <p>Working Capital = Current Assets − Current Liabilities. Positive working capital usually indicates the company can comfortably manage its operational expenses.</p>
      <p>Debt can accelerate growth if used responsibly &mdash; to expand production capacity, invest in new technology or enter new markets. However, excessive debt increases financial risk. Investors analyze the Debt-to-Equity Ratio and Interest Coverage Ratio to determine whether debt levels are manageable.</p>
      <blockquote className="pull-quote">A strong balance sheet provides stability and flexibility. Companies with healthy balance sheets are better positioned to invest in growth and survive economic downturns.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 6: The Cash Flow Statement &mdash; Understanding the Movement of Cash",
      content: (
        <>
          <p>While the Income Statement shows profitability and the Balance Sheet shows financial strength, neither fully explains how money actually moves through a business. That is where the Cash Flow Statement becomes essential.</p>
      <p>The cash flow statement tracks the actual movement of cash into and out of the company over a specific period. It answers: Is the company truly generating cash or are the profits mostly accounting numbers?</p>
      <hr className="chapter-rule" />
      <h3>Why Cash Flow Matters</h3>
      <p>Profit is calculated using accounting rules, which include non-cash items such as depreciation. Cash flow reflects real money. A company with strong cash generation can reinvest in growth, reduce debt, pay dividends, acquire other businesses and survive economic downturns.</p>
      <p>Example: A company sells ₹1,000 crore of products and reports ₹120 crore in profit. But many customers pay very slowly, taking 6&ndash;9 months to settle invoices. On the income statement, revenue and profit are recorded immediately. But in reality, most of the cash has not yet been received. Meanwhile, the company must still pay suppliers, salaries, rent and interest in cash &mdash; creating a cash shortage even though it appears profitable on paper.</p>
      <hr className="chapter-rule" />
      <h3>Operating Cash Flow &mdash; Cash from Core Operations</h3>
      <p>Operating Cash Flow (OCF) represents the cash generated from the company's core business operations &mdash; including cash inflows from customers and outflows for supplier payments, salaries, administrative costs and taxes. Consistently positive operating cash flow indicates that the company's business model is working. It is often considered one of the most reliable indicators of business strength.</p>
      <hr className="chapter-rule" />
      <h3>Investing Cash Flow &mdash; Capital Investments</h3>
      <p>Investing Cash Flow reflects cash spent or received from investments in long-term assets &mdash; purchasing machinery, investing in technology, acquiring other companies or selling assets. Growing companies often show negative investing cash flow because they are spending money to expand. Investors should interpret investing cash flow in the context of the company's growth strategy.</p>
      <hr className="chapter-rule" />
      <h3>Financing Cash Flow &mdash; How the Company Raises or Returns Capital</h3>
      <p>Financing Cash Flow reflects how a company raises capital or returns money to investors &mdash; issuing shares, borrowing or repaying debt, paying dividends and share buybacks. Understanding financing activities helps investors evaluate how the company funds its operations and growth.</p>
      <hr className="chapter-rule" />
      <h3>Free Cash Flow &mdash; One of the Most Important Metrics</h3>
      <p>Free Cash Flow = Operating Cash Flow − Capital Expenditures. FCF represents the money available for reducing debt, paying dividends, buying back shares or reinvesting in new opportunities. Companies that consistently generate strong free cash flow often have greater financial flexibility.</p>
      <hr className="chapter-rule" />
      <h3>Profit vs Cash Flow</h3>
      <p>If profits are growing but operating cash flow remains weak, it may signal aggressive accounting practices, slow customer payments or excessive inventory buildup. Ideally, operating cash flow should broadly track or exceed net profit over time.</p>
      <blockquote className="pull-quote">The three financial statements work together: Income Statement shows profitability. Balance Sheet shows financial strength. Cash Flow Statement shows the movement of money.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 7: Financial Ratios &mdash; Turning Numbers Into Insights",
      content: (
        <>
          <p>Financial statements contain a large amount of information, but raw numbers alone can be difficult to compare across companies or time periods. This is where financial ratios become useful. Financial ratios transform financial statement data into standardized metrics that help investors evaluate profitability, efficiency, financial strength and growth potential.</p>
      <hr className="chapter-rule" />
      <h3>Why Ratios Matter</h3>
      <p>Consider two companies that both report a profit of ₹500 crore. But if one generates that profit from ₹5,000 crore in revenue while the other generates it from ₹1,500 crore in revenue, their efficiency is very different. Financial ratios allow investors to compare businesses on a common scale and identify trends over time.</p>
      <hr className="chapter-rule" />
      <h3>The Four Categories of Financial Ratios</h3>
      <p><strong>1. Profitability Ratios</strong> &mdash; Gross Margin, Operating Margin, Net Profit Margin. Reveal whether the company has strong pricing power, efficient operations and competitive advantages.</p>
      <p><strong>2. Efficiency Ratios</strong> &mdash; Return on Equity (ROE), Return on Capital Employed (ROCE), Asset Turnover. Measure how effectively the company uses its assets and capital to generate revenue and profit.</p>
      <p><strong>3. Financial Strength Ratios</strong> &mdash; Debt-to-Equity Ratio, Interest Coverage Ratio, Current Ratio. Help investors evaluate the company's ability to meet its financial obligations.</p>
      <p><strong>4. Valuation Ratios</strong> &mdash; Price-to-Earnings (P/E), Price-to-Book (P/B), EV/EBITDA. Help investors determine whether a stock appears expensive, fairly valued or undervalued relative to its fundamentals.</p>
      <hr className="chapter-rule" />
      <h3>Why Ratios Should Be Used Carefully</h3>
      <p>Different industries naturally have different financial characteristics. Technology companies often have higher margins. Manufacturing companies require higher capital investment. Banks operate with different balance sheet structures. Therefore, ratios should generally be compared across companies within the same industry and across multiple years for the same company.</p>
      <blockquote className="pull-quote">Instead of reading hundreds of numbers, ratios help investors quickly understand how well a business is performing.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 8: Profitability Ratios &mdash; Interpreting Margins",
      content: (
        <>
          <p>Profitability ratios show how much profit remains at different stages of the income statement. They help investors understand how efficiently the company produces its products, how effectively it manages operating costs and how much profit ultimately remains for shareholders.</p>
      <hr className="chapter-rule" />
      <h3>Gross Margin &mdash; Product Economics</h3>
      <p>Gross Margin measures the profitability of a company's product before operating expenses. It focuses only on direct production costs.</p>
      <p>Formula: Gross Margin = Gross Profit ÷ Revenue</p>
      <p>Example: Revenue = ₹1,000 crore. Cost of Goods Sold = ₹600 crore. Gross Profit = ₹400 crore. Gross Margin = 40%. After covering production costs, 40% of revenue remains available to pay operating expenses and generate profit. Asian Paints has historically maintained strong gross margins because of its pricing power and strong distribution network.</p>
      <hr className="chapter-rule" />
      <h3>Operating Margin &mdash; Operational Efficiency</h3>
      <p>Operating margin measures profitability after accounting for operating expenses such as employee salaries, marketing, logistics and administrative costs. It reflects how efficiently the company manages its core operations.</p>
      <p>Formula: Operating Margin = Operating Profit (EBIT) ÷ Revenue</p>
      <p>Example: Revenue = ₹1,000 crore. Operating Profit = ₹200 crore. Operating Margin = 20%. IT services companies such as Infosys benefit from scalable operations where revenue growth can outpace cost growth.</p>
      <hr className="chapter-rule" />
      <h3>Net Profit Margin &mdash; Final Profitability</h3>
      <p>Net profit margin measures the percentage of revenue that ultimately becomes profit after all expenses, interest and taxes have been deducted.</p>
      <p>Formula: Net Profit Margin = Net Profit ÷ Revenue</p>
      <p>Example: Revenue = ₹1,000 crore. Net Profit = ₹120 crore. Net Profit Margin = 12%. HDFC Bank has historically maintained consistent profitability through disciplined lending and risk management.</p>
      <hr className="chapter-rule" />
      <h3>Why Margin Trends and Industry Context Matter</h3>
      <p>While margin levels are important, analyzing how margins change over time reveals deeper insights. Improving margins may indicate stronger pricing power, improving efficiency or economies of scale. Declining margins may suggest rising competition, increasing input costs or weakening demand.</p>
      <p>Margins also vary significantly across industries. Software companies often have high margins. Manufacturing companies face higher production costs. Retail businesses operate with thin margins but compensate through high sales volumes. Margins should therefore be compared within the same industry.</p>
      <blockquote className="pull-quote">Margin trends often reveal whether a business is strengthening its competitive position or facing pressure from competition and rising costs.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 9: Return Ratios &mdash; Measuring Capital Efficiency",
      content: (
        <>
          <p>Two companies may generate the same profit, but if one requires significantly more capital to generate that profit, it is actually less efficient. Return ratios measure how efficiently a company uses the capital invested in the business to generate profit. High return ratios are often one of the strongest indicators of a high-quality business.</p>
      <hr className="chapter-rule" />
      <h3>Return on Equity (ROE)</h3>
      <p>ROE measures how efficiently a company generates profit from the money invested by shareholders.</p>
      <p>Formula: ROE = Net Profit ÷ Shareholders' Equity</p>
      <p>Example: Net Profit = ₹150 crore. Shareholders' Equity = ₹1,000 crore. ROE = 15%. For every ₹100 invested by shareholders, the company generates ₹15 in profit annually. HDFC Bank has historically maintained strong ROE due to efficient lending operations and strong risk management.</p>
      <hr className="chapter-rule" />
      <h3>Return on Capital Employed (ROCE)</h3>
      <p>ROCE measures how efficiently the company generates profit from all capital used in the business, including both equity and debt.</p>
      <p>Formula: ROCE = EBIT ÷ Capital Employed (Total Assets − Current Liabilities)</p>
      <p>Example: EBIT = ₹200 crore. Capital Employed = ₹1,000 crore. ROCE = 20%. Investors often prefer companies that maintain ROCE above 15&ndash;20% over long periods. Asian Paints has historically maintained strong ROCE because its brand strength allows it to generate high profits relative to capital invested.</p>
      <p>ROCE is often preferred over ROE because ROE can appear artificially high if a company uses large amounts of debt. ROCE evaluates returns on total capital, avoiding this distortion.</p>
      <hr className="chapter-rule" />
      <h3>Asset Turnover Ratio &mdash; Efficiency of Asset Usage</h3>
      <p>Formula: Asset Turnover = Revenue ÷ Total Assets</p>
      <p>Example: Revenue = ₹2,000 crore. Total Assets = ₹1,000 crore. Asset Turnover = 2. The company generates ₹2 of revenue for every ₹1 invested in assets. Retail businesses typically have high asset turnover. Manufacturing companies may have lower turnover due to heavy investment in factories. IT services companies like Infosys rely more on human capital than large physical assets.</p>
      <hr className="chapter-rule" />
      <h3>Combining ROCE and Asset Turnover</h3>
      <p>High ROCE can result from high profit margins, efficient asset utilization or both. A luxury brand may generate high ROCE through strong margins. A retail chain may generate high ROCE through rapid asset turnover. Both models can create successful businesses in very different ways.</p>
      <blockquote className="pull-quote">Businesses that consistently maintain high ROE and ROCE often possess strong competitive advantages, efficient management and scalable business models.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 10: Financial Strength Ratios &mdash; Evaluating Balance Sheet Risk",
      content: (
        <>
          <p>A company may generate strong returns but still face significant financial risk if it relies heavily on debt or struggles to meet its short-term obligations. Financial strength ratios help answer: How much debt does the company carry? Can the company comfortably pay its interest obligations? Does the company have enough liquidity to manage its short-term liabilities?</p>
      <hr className="chapter-rule" />
      <h3>Debt-to-Equity Ratio &mdash; Measuring Financial Leverage</h3>
      <p>Formula: Debt-to-Equity Ratio = Total Debt ÷ Shareholders' Equity</p>
      <p>Example: Total Debt = ₹500 crore. Shareholders' Equity = ₹1,000 crore. D/E Ratio = 0.5. The company uses ₹0.50 of debt for every ₹1 of shareholder capital. Lower ratios generally indicate a more conservative balance sheet. However, acceptable levels of debt vary across industries &mdash; capital-intensive sectors such as infrastructure may naturally carry higher debt, while asset-light businesses often operate with minimal borrowing. This ratio must be compared with peers.</p>
      <hr className="chapter-rule" />
      <h3>Interest Coverage Ratio &mdash; Ability to Service Debt</h3>
      <p>Formula: Interest Coverage Ratio = EBIT ÷ Interest Expense</p>
      <p>Example: EBIT = ₹200 crore. Interest Expense = ₹40 crore. Interest Coverage = 5. The company earns five times its interest obligations, providing a comfortable buffer. A higher ratio indicates stronger financial stability. If the ratio falls too low, the company may struggle to meet interest payments during periods of declining profits.</p>
      <hr className="chapter-rule" />
      <h3>Current Ratio &mdash; Short-Term Liquidity</h3>
      <p>Formula: Current Ratio = Current Assets ÷ Current Liabilities</p>
      <p>Example: Current Assets = ₹600 crore. Current Liabilities = ₹400 crore. Current Ratio = 1.5. The company has ₹1.50 of short-term assets for every ₹1 of short-term liabilities. A ratio above 1 generally indicates the company can meet its short-term obligations. However, excessively high ratios may indicate inefficient use of capital such as excessive idle cash or inventory.</p>
      <hr className="chapter-rule" />
      <h3>Why Balance Sheet Strength Matters</h3>
      <p>Companies with weak balance sheets may face significant challenges when economic conditions deteriorate, revenues decline, interest rates rise or credit markets tighten. Well-managed financial institutions such as HDFC Bank are recognized for maintaining disciplined balance sheet management and prudent risk controls, allowing them to continue growing even during uncertain economic environments.</p>
      <blockquote className="pull-quote">Healthy companies generally exhibit manageable debt levels, strong ability to service interest obligations and sufficient liquidity to meet short-term liabilities.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 11: Valuation Ratios &mdash; Understanding What a Business Is Worth",
      content: (
        <>
          <p>Even a high-quality business may not always be a good investment. The price you pay matters. A great company purchased at an excessively high price may deliver poor returns, while a good company purchased at a reasonable valuation may provide attractive long-term gains. Valuation ratios help answer: Is the stock price reasonable relative to the company's earnings, assets and cash flows?</p>
      <hr className="chapter-rule" />
      <h3>Price-to-Earnings (P/E) Ratio</h3>
      <p>The P/E ratio measures how much investors are willing to pay for each rupee of a company's earnings.</p>
      <p>Formula: P/E Ratio = Share Price ÷ Earnings Per Share (EPS) or Market Capitalization ÷ Net Profit</p>
      <p>Example: Share Price = ₹500. EPS = ₹25. P/E = 20. Investors pay ₹20 for every ₹1 of earnings. Higher P/E may indicate strong growth expectations or high-quality business models. Companies with strong long-term growth histories such as Asian Paints have often traded at higher P/E multiples because investors expect consistent earnings growth.</p>
      <hr className="chapter-rule" />
      <h3>Price-to-Book (P/B) Ratio</h3>
      <p>The P/B ratio compares a company's market value with the value of its net assets.</p>
      <p>Formula: P/B Ratio = Market Price per Share ÷ Book Value per Share</p>
      <p>Example: Share Price = ₹400. Book Value per Share = ₹200. P/B = 2. The market values the company at twice the value of its net assets. Particularly useful for evaluating financial institutions such as banks and insurance companies.</p>
      <hr className="chapter-rule" />
      <h3>EV/EBITDA &mdash; Enterprise Value Comparison</h3>
      <p>Enterprise Value (EV) = Market Capitalization + Debt − Cash. EV/EBITDA = Enterprise Value ÷ EBITDA. This metric evaluates the business independent of its capital structure, making it useful for comparing companies regardless of whether they are financed primarily through debt or equity.</p>
      <p>Example: Market Cap = ₹10,000 crore. Debt = ₹2,000 crore. Cash = ₹500 crore. EV = ₹11,500 crore. EBITDA = ₹1,150 crore. EV/EBITDA = 10. Commonly used in capital-intensive industry comparisons.</p>
      <hr className="chapter-rule" />
      <h3>Valuation Must Be Viewed in Context</h3>
      <p>Ratios should never be interpreted in isolation. Fast-growing companies may trade at higher valuations because investors expect profits to increase significantly. A low P/E does not automatically mean a stock is cheap &mdash; it may reflect weak growth prospects, declining industries or financial risk. High valuations are sometimes justified when companies possess strong competitive advantages, high return on capital and long growth runways.</p>
      <p><em>Note: If you do not find any ratios covered in this module, they can be calculated using the market price and financial information from the company's annual report. Recalculating ratios yourself builds confidence in your analysis, since values can sometimes vary slightly across different financial websites.</em></p>
      <blockquote className="pull-quote">Over long periods, investment returns are influenced by three factors: earnings growth, dividends received and changes in valuation multiples.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 12: Understanding Growth &mdash; The Engine of Long-Term Returns",
      content: (
        <>
          <p>Over long periods, stock market returns are largely driven by the growth of the underlying business. If a company steadily increases its revenue, profits and earnings over many years, the value of the business tends to rise as well and the stock price often follows this growth over time.</p>
      <hr className="chapter-rule" />
      <h3>Why Growth Matters</h3>
      <p>Suppose a company earns ₹100 crore in profit today. At 15% annual growth, profit will reach approximately ₹201 crore in 5 years and ₹405 crore in 10 years &mdash; profits quadruple in about a decade. If the market continues to value the business at a similar multiple, the stock price will tend to reflect this expansion.</p>
      <hr className="chapter-rule" />
      <h3>Revenue Growth &mdash; Expanding the Business</h3>
      <p>Formula: Revenue CAGR = (Ending Revenue ÷ Starting Revenue) ^ (1/n) − 1</p>
      <p>Example: Revenue grows from ₹1,000 crore to ₹2,000 crore over 5 years. Revenue CAGR ≈ 14.9%. Titan Company expanded revenue significantly through store expansion, brand strength and rising consumer demand in organized jewelry. Jubilant FoodWorks grew revenues by expanding store networks and benefiting from rising urban consumption.</p>
      <hr className="chapter-rule" />
      <h3>Profit Growth &mdash; Turning Sales into Earnings</h3>
      <p>Profits may grow faster than revenue due to operating leverage &mdash; when a company's fixed costs remain relatively stable while revenue increases, additional revenue contributes more directly to profits. Example: Revenue growth = 10% annually, Profit growth = 18% annually &mdash; the company is becoming more efficient as it grows. Infosys has historically benefited from operating leverage. HUL often improves profitability through better supply chains, scale advantages and premium product launches.</p>
      <hr className="chapter-rule" />
      <h3>Earnings Per Share (EPS) Growth</h3>
      <p>EPS = Net Profit ÷ Total Number of Shares. EPS growth reflects the actual earnings available to shareholders. If a company increases profits but continuously issues new shares, the benefit to existing shareholders may be diluted. Example: Net Profit = ₹1,000 crore. Shares = 100 crore. EPS = ₹10. If profit grows to ₹1,500 crore but shares also grow to 150 crore, new EPS = ₹10. Despite profit growth, shareholder earnings did not increase. This is why EPS growth matters more than profit growth alone. HDFC Bank has demonstrated consistent EPS growth through disciplined expansion.</p>
      <hr className="chapter-rule" />
      <h3>The Power of Compounding</h3>
      <p>At 10% annual growth, profits reach ~2.6× in 10 years. At 15%, ~4×. At 20%, ~6×. Even small differences in growth rates lead to dramatically different outcomes over long investment horizons. Asian Paints, HDFC Bank and Titan Company have created substantial shareholder wealth by sustaining growth over decades.</p>
      <blockquote className="pull-quote">Identifying companies capable of sustaining high growth for long periods can significantly influence long-term investment returns.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 13: Quality of Growth &mdash; Understanding Whether Growth Is Sustainable",
      content: (
        <>
          <p>Not all growth creates value. Some companies grow rapidly but destroy shareholder wealth because that growth requires excessive capital, high debt or constant dilution. The key question is not just "Is the company growing?" but rather "Is the growth sustainable and efficient?" This is what investors refer to as quality of growth.</p>
      <hr className="chapter-rule" />
      <h3>Organic Growth vs Acquisition Growth</h3>
      <p>Organic growth occurs when a company expands naturally through increasing product sales, launching new products, expanding into new markets or improving distribution networks. It is usually considered the most sustainable form of expansion because it reflects genuine demand. Asian Paints has historically grown organically by expanding its distribution network and strengthening brand presence across India.</p>
      <p>Acquisitions can accelerate growth but introduce additional risks such as integration challenges, excessive debt and overpaying. Acquisition-driven growth can be valuable if managed carefully, but investors examine whether the company can sustain growth without relying heavily on acquisitions.</p>
      <hr className="chapter-rule" />
      <h3>Margin Expansion and Capital Efficiency</h3>
      <p>Margin expansion occurs when profit margins increase over time as the business scales &mdash; because fixed costs are spread across larger revenue, supply chains become more efficient or stronger brands allow premium pricing. HUL has historically improved margins through strong brand portfolios and operational efficiencies.</p>
      <p>High-quality growth often comes from companies that can expand without requiring large amounts of additional capital. This is related to ROCE and ROE. IT services companies like Infosys can scale services globally without requiring massive physical infrastructure investments.</p>
      <hr className="chapter-rule" />
      <h3>Cash Flow Support and Dilution</h3>
      <p>A company may report strong earnings growth, but if operating cash flow remains weak, the growth may not be sustainable. Healthy growth demonstrates rising operating cash flow, consistent free cash flow and limited reliance on borrowing.</p>
      <p>Companies sometimes issue new shares to raise capital. While this may help finance growth, excessive share issuance can dilute existing shareholders' ownership. If a company doubles its profits but also doubles its shares, EPS may remain unchanged. This is why investors monitor EPS growth alongside profit growth.</p>
      <hr className="chapter-rule" />
      <h3>Signs of Weak Growth Quality</h3>
      <p>Warning signs include: rapid growth accompanied by rising debt, declining profit margins despite rising revenue, weak cash flow generation, excessive acquisitions and continuous share dilution. Such patterns may indicate that the company's growth is less stable than it appears.</p>
      <blockquote className="pull-quote">Two companies may both grow profits at 15% annually, but the one with higher return on capital, stronger cash flows and minimal debt is likely to create far greater long-term value.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 14: Economic Moats &mdash; Why Some Companies Sustain Growth for Decades",
      content: (
        <>
          <p>What allows some companies to grow consistently for decades while others struggle to maintain profitability? The answer often lies in a competitive advantage, commonly referred to as an economic moat. In business, an economic moat refers to structural advantages that protect a company from competitors, allowing it to defend its market position, maintain profitability and continue growing even as competition increases.</p>
      <hr className="chapter-rule" />
      <h3>Brand Power</h3>
      <p>A strong brand creates customer loyalty and reduces price sensitivity. When consumers trust a brand, they are willing to pay a premium even when alternatives are available. Nestlé India benefits from strong brand recognition across multiple food categories &mdash; products such as packaged foods and beverages have developed deep consumer trust over many decades.</p>
      <hr className="chapter-rule" />
      <h3>Network Effects</h3>
      <p>Network effects occur when the value of a product or service increases as more people use it. Payment platforms such as Paytm benefit from network effects &mdash; as more users and merchants join, it becomes increasingly convenient for others to participate. Network effects create powerful barriers to entry because new competitors struggle to build a comparable network.</p>
      <hr className="chapter-rule" />
      <h3>Switching Costs</h3>
      <p>Switching costs arise when it becomes inconvenient, costly or risky for customers to change providers. Enterprise software providers such as Tata Consultancy Services maintain long-term relationships with clients because switching to a different technology partner can disrupt operations and require significant time and effort.</p>
      <hr className="chapter-rule" />
      <h3>Cost Advantage</h3>
      <p>Some companies benefit from structural cost advantages from economies of scale, efficient supply chains, access to low-cost resources or superior manufacturing capabilities. DMart has developed strong cost advantages through disciplined inventory management, efficient store operations and a focus on everyday low prices. Cost advantages make it difficult for competitors to match pricing while maintaining profitability.</p>
      <hr className="chapter-rule" />
      <h3>Regulatory Advantages</h3>
      <p>In certain industries, regulations create barriers to entry through licensing requirements, strict compliance standards or limited operating permits. Companies such as Coal India operate in industries where regulatory structures and resource ownership create high entry barriers, limiting competition and allowing established players to maintain strong market positions.</p>
      <hr className="chapter-rule" />
      <h3>Moats Can Strengthen or Erode Over Time</h3>
      <p>Economic moats are not permanent. Technological changes, shifting consumer preferences or new competitors can weaken previously strong advantages. New technologies may disrupt existing business models while changing market dynamics may reduce the strength of established brands. Investors must therefore continuously evaluate whether a company's competitive advantage remains intact.</p>
      <blockquote className="pull-quote">Identifying companies with strong and durable moats is often one of the most important steps in fundamental analysis.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 15: Industry Structure &mdash; Why Some Industries Produce Better Businesses",
      content: (
        <>
          <p>Even the strongest company is influenced by the industry in which it operates. Some industries naturally support high profitability and long-term growth, while others are highly competitive, cyclical or capital intensive. Understanding industry structure helps answer: Is the company operating in an industry that supports long-term growth and profitability?</p>
      <hr className="chapter-rule" />
      <h3>Industry Growth and Competitive Intensity</h3>
      <p>Industries that benefit from structural demand growth provide more opportunities for companies to expand. Sectors such as pharmaceuticals have benefited from rising healthcare demand, aging populations and increasing medical spending. Companies like Sun Pharmaceutical Industries operate in an industry where long-term demand growth is supported by global healthcare needs.</p>
      <p>Highly competitive industries often experience price wars, declining margins and frequent new entrants. In contrast, industries with fewer competitors and higher entry barriers allow companies to maintain stronger margins. Airport infrastructure companies such as GMR Airports operate in an industry where large capital requirements and regulatory approvals limit the number of competitors.</p>
      <hr className="chapter-rule" />
      <h3>Capital Intensity</h3>
      <p>Some sectors require substantial investment in physical infrastructure &mdash; power generation, aviation, telecommunications and infrastructure. Companies like NTPC require large investments in power plants and energy infrastructure. In contrast, asset-light industries such as consulting, software services or digital platforms require far less physical infrastructure and may scale more easily while maintaining strong returns on capital.</p>
      <hr className="chapter-rule" />
      <h3>Cyclical vs Structural Industries</h3>
      <p>Cyclical industries are closely tied to economic cycles &mdash; metals, real estate and automobiles. Companies such as Maruti Suzuki may experience fluctuations depending on economic conditions, consumer spending and interest rates. Structural growth industries benefit from long-term demand trends that persist across economic cycles &mdash; technological adoption, healthcare needs and digital infrastructure. Understanding whether a company is in a cyclical or structural industry helps investors set realistic expectations about growth stability.</p>
      <hr className="chapter-rule" />
      <h3>Entry Barriers</h3>
      <p>Industries with high entry barriers often maintain stronger profitability. Entry barriers arise from large capital requirements, regulatory approvals, technological expertise, established distribution networks and brand reputation. Telecommunications companies such as Bharti Airtel operate in a sector where spectrum licensing, infrastructure costs and regulatory requirements create significant barriers to entry, limiting the number of competitors.</p>
      <blockquote className="pull-quote">Experienced investors often begin their analysis by understanding the industry before focusing on the individual company.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 16: Management Quality &mdash; The People Behind the Business",
      content: (
        <>
          <p>Even companies operating in attractive industries with strong competitive advantages can perform poorly if management makes poor decisions. Conversely, capable and disciplined leadership can transform businesses by allocating capital wisely, executing long-term strategies and maintaining strong governance.</p>
      <hr className="chapter-rule" />
      <h3>Capital Allocation &mdash; Management's Most Important Responsibility</h3>
      <p>Management decides how the company's profits and capital should be used &mdash; reinvesting profits, expanding production capacity, entering new markets, acquiring other companies, reducing debt or distributing dividends. Effective capital allocation can accelerate long-term growth. Companies such as Divi's Laboratories have historically reinvested capital into expanding manufacturing capabilities and research capacity, strengthening their position in global pharmaceutical supply chains.</p>
      <hr className="chapter-rule" />
      <h3>Promoter Ownership and Corporate Governance</h3>
      <p>When management owns a meaningful portion of the company, their financial interests are often aligned with those of shareholders. Companies such as Bajaj Finance have leadership teams closely aligned with long-term shareholder value creation. However, high ownership alone does not guarantee good governance.</p>
      <p>Corporate governance refers to the systems and practices that ensure a company operates transparently, ethically and in the interests of shareholders. Strong governance includes transparent financial reporting, independent board oversight, responsible risk management and protection of minority shareholder interests.</p>
      <hr className="chapter-rule" />
      <h3>Long-Term Strategic Vision and Communication</h3>
      <p>High-quality management teams usually focus on long-term business development rather than short-term results &mdash; investing in R&amp;D, strengthening distribution networks, building new capabilities and expanding into emerging markets. Pidilite Industries has steadily expanded its product portfolio and distribution reach over many years.</p>
      <p>Companies that regularly provide detailed disclosures, investor presentations and thoughtful commentary often build stronger trust with shareholders. Transparent communication helps investors assess whether management is addressing challenges proactively.</p>
      <hr className="chapter-rule" />
      <h3>Warning Signs in Management Behavior</h3>
      <p>Red flags include: frequent changes in strategy, excessive acquisitions without clear integration plans, poor capital allocation decisions, lack of transparency in financial disclosures and related-party transactions that benefit insiders. Such patterns may indicate governance concerns that could affect long-term shareholder value.</p>
      <blockquote className="pull-quote">Over time, the actions of management tend to reveal their effectiveness. Management quality cannot always be measured using simple numerical metrics &mdash; it requires observing long-term track record, consistency in decision-making, capital allocation discipline and governance practices.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 17: Reading Annual Reports &mdash; Extracting Valuable Insights",
      content: (
        <>
          <p>An annual report is a comprehensive document published by a company each year that provides detailed information about its financial performance, strategy, risks and future outlook. For investors, it offers an opportunity to understand the business from the perspective of management &mdash; with insights not visible in financial numbers alone.</p>
      <hr className="chapter-rule" />
      <h3>Management Discussion and Analysis (MD&amp;A)</h3>
      <p>One of the most informative sections of an annual report, the MD&amp;A explains how the business performed during the year, key operational developments, industry conditions, opportunities and challenges, and strategic priorities for the future. Companies such as Avenue Supermarts often discuss expansion strategies, store additions and operational efficiency in their management commentary. This information helps investors understand how the company plans to grow.</p>
      <hr className="chapter-rule" />
      <h3>Business Overview and Risk Factors</h3>
      <p>Most annual reports begin with a description of the company's business model and operations &mdash; its core products or services, key revenue segments, geographic presence and major customer groups. Companies operating across multiple segments may provide a breakdown of revenue contributions from different divisions.</p>
      <p>The risk factors section outlines key risks: regulatory changes, supply chain disruptions, currency fluctuations, technological disruption and competitive pressures. Pharmaceutical companies such as Dr. Reddy's Laboratories frequently highlight regulatory risks related to approvals and compliance in global markets.</p>
      <hr className="chapter-rule" />
      <h3>Corporate Governance and Financial Statements</h3>
      <p>Annual reports include detailed information about the board of directors, independent directors, board committees, executive compensation and shareholder rights. Strong governance practices signal that the company is committed to transparency and accountability.</p>
      <p>The annual report also includes the complete financial statements &mdash; Income Statement, Balance Sheet, Cash Flow Statement and Notes to the Financial Statements. The notes can be particularly informative because they explain accounting policies, segment performance and important financial details not immediately visible in the primary statements.</p>
      <hr className="chapter-rule" />
      <h3>Reading Annual Reports Effectively</h3>
      <p>A practical approach: (1) Management Discussion and Analysis, (2) Business Overview, (3) Risk Factors, (4) Financial Statements, (5) Notes to Financial Statements. This structured approach helps investors extract key insights without becoming overwhelmed by the volume of information, which can sometimes exceed several hundred pages.</p>
      <blockquote className="pull-quote">Many experienced investors consider annual reports one of the most valuable sources of information when evaluating companies.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 18: Intrinsic Value &mdash; Estimating What a Business Is Worth",
      content: (
        <>
          <p>Before investing in any stock, there is one final question every investor must ask: What is this business actually worth? The answer is called intrinsic value &mdash; the true economic value of a business based on its ability to generate cash flows in the future. It may be very different from the current market price.</p>
      <hr className="chapter-rule" />
      <h3>Price vs Value</h3>
      <p>The stock market assigns a price to companies every day &mdash; this fluctuates based on investor sentiment, news, short-term expectations and market cycles. However, a company's intrinsic value depends on the profits it can generate, how fast those profits can grow, how efficiently the company uses capital and how long those profits can continue. Over short periods, market prices can move far away from intrinsic value. Over longer periods, prices tend to gravitate toward the underlying value of the business.</p>
      <hr className="chapter-rule" />
      <h3>How Intrinsic Value Is Calculated</h3>
      <p>Professional investors often estimate intrinsic value using Discounted Cash Flow (DCF) models, which estimate future cash flows, estimate long-term growth rates, apply a discount rate to reflect time and risk, and calculate the present value of those future cash flows. However, small changes in assumptions about growth or discount rates can produce very different results. Because of this complexity, we will not go into detailed DCF calculations in this course.</p>
      <p>Intrinsic value estimates are available on platforms such as Trendlyne and Tijori Finance. However, intrinsic value is always an estimate, not an exact number &mdash; investors often treat it as a range rather than a precise figure.</p>
      <hr className="chapter-rule" />
      <h3>A Practical Shortcut</h3>
      <p>Many investors use a simpler approach: Fair Value ≈ EPS × Reasonable P/E multiple. Example: A company earns ₹40 per share today and is expected to grow profits at 15% annually. Businesses of similar quality typically trade at around 20× earnings. Fair Value ≈ ₹40 × 20 = ₹800. This method provides a reasonable valuation reference point for comparing against the market price.</p>
      <hr className="chapter-rule" />
      <h3>Margin of Safety &mdash; Protecting Against Uncertainty</h3>
      <p>Because intrinsic value estimates involve uncertainty, investors prefer to purchase stocks below intrinsic value to create a margin of safety. Example: Estimated intrinsic value = ₹800. Market price = ₹600. This difference protects the investor from possible errors in estimation or unexpected changes in the business environment. This concept was popularized by renowned value investor Benjamin Graham.</p>
      <blockquote className="pull-quote">Instead of focusing on short-term price movements, investors who understand intrinsic value focus on buying strong businesses at reasonable prices and holding them as the business grows.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 19: Red Flags in Fundamental Analysis &mdash; Identifying Warning Signs",
      content: (
        <>
          <p>Successful investing also requires recognizing situations where a company may appear attractive on the surface but carries hidden risks. These warning signs are often referred to as red flags. Red flags do not automatically mean that a company is a poor investment, but they signal areas that require deeper investigation.</p>
      <hr className="chapter-rule" />
      <h3>Profit Growth Without Cash Flow</h3>
      <p>One of the most important red flags occurs when a company reports strong profit growth but fails to generate corresponding operating cash flow. In a healthy business, profits should eventually translate into cash. If profits continue to rise while operating cash flow remains weak, it may indicate aggressive revenue recognition, slow customer payments or excessive inventory buildup. Investors should compare net profit and operating cash flow trends over several years.</p>
      <hr className="chapter-rule" />
      <h3>Rising Debt, Equity Dilution and Declining Margins</h3>
      <p>A red flag arises when debt levels increase significantly without a clear improvement in revenue, profitability or return on capital &mdash; signs include rapidly increasing debt, declining interest coverage ratios and heavy reliance on borrowing.</p>
      <p>Frequent equity issuance can dilute existing shareholders' ownership. If profit growth is offset by continuous share dilution, shareholders may not benefit from the company's expansion.</p>
      <p>When profit margins steadily decline over several years, it may indicate increasing competition, rising input costs, weakening pricing power or operational inefficiencies. While temporary fluctuations may occur, persistent deterioration can signal structural challenges.</p>
      <hr className="chapter-rule" />
      <h3>Excessive Acquisitions and Promoter Pledging</h3>
      <p>Frequent or poorly integrated acquisitions may indicate risks &mdash; rapid expansion through acquisitions rather than organic growth, significant goodwill accumulation, or rising debt used to finance acquisitions.</p>
      <p>High levels of promoter pledging can create potential risks. If the share price falls significantly, lenders may require pledged shares to be sold in the market to recover loans, increasing volatility and placing additional pressure on the stock price.</p>
      <hr className="chapter-rule" />
      <h3>Complex Corporate Structures and Sudden Strategy Changes</h3>
      <p>Companies with highly complex structures &mdash; numerous subsidiaries, extensive related-party transactions, opaque ownership arrangements &mdash; can make it difficult for investors to fully understand their financial relationships. While complexity does not automatically imply misconduct, transparency is generally considered a positive attribute.</p>
      <p>Frequent or abrupt changes in strategic direction may signal uncertainty within management &mdash; rapid diversification into unrelated industries, inconsistent capital allocation decisions or repeated restructuring initiatives. Stable companies typically pursue clear and consistent long-term strategies.</p>
      <blockquote className="pull-quote">Many historical investment losses have occurred not because investors lacked information, but because warning signs were ignored.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 20: How to Combine Fundamental and Technical Analysis",
      content: (
        <>
          <p>Many investors treat fundamental analysis and technical analysis as completely separate. Some believe only fundamentals matter, while others rely entirely on charts. In reality, many experienced investors combine both approaches because they answer different questions.</p>
      <p>Fundamental analysis helps determine: What to buy. Technical analysis helps determine: When to buy. When used together, these tools can help investors make more structured and disciplined decisions.</p>
      <hr className="chapter-rule" />
      <h3>Fundamentals Identify the Right Businesses</h3>
      <p>By studying financial statements, growth trends, competitive advantages, industry structure and management quality, investors can determine whether a company is fundamentally strong. Companies such as Pidilite Industries have demonstrated strong fundamentals through consistent revenue growth, high return on capital, strong brand advantages and stable profit margins. However, even strong businesses experience price fluctuations and market cycles. This is where technical analysis becomes useful.</p>
      <hr className="chapter-rule" />
      <h3>Technical Analysis Helps with Timing</h3>
      <p>Technical analysis examines price trends, support and resistance levels, momentum indicators and volume behavior. These tools help investors understand how market participants are positioning themselves around a stock. For example, if a fundamentally strong company experiences a temporary pullback during a broader market correction, technical analysis may help identify whether the stock is approaching a historical support level or a structural pullback zone &mdash; improving entry timing rather than buying at extended price levels.</p>
      <hr className="chapter-rule" />
      <h3>A Simple Combined Framework</h3>
      <p><strong>Step 1 &mdash; Identify Strong Businesses:</strong> Using fundamental analysis, look for companies with strong earnings growth, high return on capital, manageable debt levels, competitive advantages and capable management. This builds a shortlist of companies worth owning.</p>
      <p><strong>Step 2 &mdash; Use Technical Analysis for Entry Timing:</strong> Once a fundamentally strong company is identified, observe overall trend direction, key support levels, pullback zones and volume behavior. If a stock remains in a long-term uptrend but temporarily pulls back toward support, investors may consider this a more favorable entry point.</p>
      <hr className="chapter-rule" />
      <h3>When Technicals Should Not Override Fundamentals</h3>
      <p>A strong chart pattern cannot compensate for a weak business model. If a company shows declining earnings, rising debt and deteriorating margins, a temporary technical breakout may not reflect sustainable long-term value. Fundamental strength should remain the primary filter. Technical analysis serves as a supporting tool rather than the main decision driver.</p>
      <blockquote className="pull-quote">Fundamental analysis builds conviction in the business. Technical analysis helps manage entry timing and market psychology. This combination reduces emotional decision-making and encourages structured investing.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 21: Case Study &mdash; Analyzing a High-Quality Compounder (Pidilite)",
      content: (
        <>
          <p>To see how the ideas in this module work in practice, it is useful to analyze a real business step by step. In this chapter, we examine a company that has historically demonstrated strong fundamentals and consistent growth: Pidilite Industries. Widely known for its adhesive brands such as Fevicol and Fevikwik, Pidilite operates primarily in the adhesives, sealants and construction chemicals markets.</p>
      <hr className="chapter-rule" />
      <h3>Business Model and Competitive Advantage</h3>
      <p>Pidilite operates in the adhesives and specialty chemicals industry, serving construction, woodworking, packaging and consumer repair products. Its portfolio includes adhesives and sealants, construction chemicals, waterproofing solutions and art and craft materials. Because adhesives are used in a wide range of industries, demand tends to be relatively stable compared with more cyclical sectors.</p>
      <p>Over decades, the company has built strong brand loyalty through products such as Fevicol, which has become almost synonymous with wood adhesives in India. In addition to brand strength, the company benefits from extensive distribution across urban and rural markets, strong relationships with carpenters and contractors and continuous product innovation. This combination makes it difficult for competitors to displace established products.</p>
      <hr className="chapter-rule" />
      <h3>Profitability, Return on Capital and Growth Trends</h3>
      <p>Pidilite has historically maintained strong operating margins compared with many industrial companies. Stable margins indicate pricing power, efficient operations and strong brand positioning. Companies that maintain consistent margins over long periods demonstrate a resilient business model.</p>
      <p>Pidilite has historically generated high returns on capital employed (ROCE), reflecting its ability to produce strong profits relative to the capital invested &mdash; indicating efficient use of capital, strong competitive advantages and scalable business operations.</p>
      <p>Over many years, Pidilite has demonstrated consistent growth in both revenue and profits, supported by rising construction activity, increasing demand for home improvement products, expansion of distribution networks and development of new product categories.</p>
      <hr className="chapter-rule" />
      <h3>Financial Stability and Valuation Considerations</h3>
      <p>Pidilite has generally maintained manageable debt levels and healthy cash flow generation, allowing it to invest in expansion, withstand economic downturns and maintain operational flexibility. High-quality companies often trade at premium valuations because investors recognize their strong fundamentals and long-term growth potential. Even strong companies can deliver lower returns if purchased at excessively high prices. This is where intrinsic value and margin of safety become important.</p>
      <blockquote className="pull-quote">A structured analysis may involve examining: the company's business model, competitive advantages, profitability and margins, return on capital, growth trends, financial stability and valuation.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 22: Case Study &mdash; Understanding a Cyclical Business (Tata Steel)",
      content: (
        <>
          <p>Not all businesses behave like stable compounders. Some industries experience large swings in profitability depending on economic conditions, commodity prices and supply-demand cycles. These businesses are known as cyclical companies. In this chapter, we examine Tata Steel &mdash; a well-known example of a cyclical business closely tied to economic activity, construction demand, infrastructure spending and global commodity prices.</p>
      <hr className="chapter-rule" />
      <h3>Understanding the Industry and Revenue Cycles</h3>
      <p>The steel industry is heavily influenced by global demand and supply dynamics. Demand rises during infrastructure expansion, real estate growth, industrial production and economic expansion &mdash; causing steel prices and profitability to increase significantly. When economic activity slows or supply increases faster than demand, steel prices may decline. Because steel is largely a commodity product, companies often have limited pricing power. Profitability can therefore change dramatically depending on market conditions.</p>
      <p>During strong economic phases, steel prices rise and demand increases. During weak conditions, demand may fall while production capacity remains high, creating oversupply. As a result, cyclical companies may experience rapid profit expansion during boom periods and sharp profit declines during downturns.</p>
      <hr className="chapter-rule" />
      <h3>Capital Intensity and Return on Capital</h3>
      <p>Steel production requires significant capital investment &mdash; large steel plants, furnaces and infrastructure requiring billions of rupees in capital expenditure. Because of this, steel companies often carry higher levels of debt compared with asset-light businesses. High capital requirements can create additional risks during economic downturns, when revenues decline but fixed costs remain significant. Investors must pay close attention to debt levels, interest coverage and balance sheet strength.</p>
      <p>Unlike high-quality compounders, cyclical businesses may show large variations in return on capital. During boom periods, ROCE may rise significantly. During downturns, the same company may generate much lower returns or even losses. Investors must evaluate performance across long time horizons rather than relying on short-term metrics.</p>
      <hr className="chapter-rule" />
      <h3>Valuation Challenges and Timing</h3>
      <p>When commodity prices are high, profits may appear unusually strong, causing P/E ratios to appear artificially low. However, these profits may not be sustainable if the industry cycle reverses. During downturns, profits may decline sharply and P/E ratios may appear unusually high. For this reason, investors often evaluate cyclical companies using long-term average earnings or industry cycle analysis rather than relying on a single year's profits.</p>
      <p>Timing becomes more important when investing in cyclical companies. Cyclical stocks often perform best when industry conditions begin improving, commodity prices start rising and demand begins recovering. During peak industry conditions, stock prices may already reflect optimistic expectations.</p>
      <blockquote className="pull-quote">Understanding the differences between compounders and cyclical businesses helps investors set realistic expectations about long-term performance and apply different analytical frameworks.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 23: Case Study &mdash; Understanding a Turnaround Story (ICICI Bank)",
      content: (
        <>
          <p>A turnaround occurs when a company that previously faced serious challenges begins to improve its performance through changes in strategy, management, operations or financial discipline. Turnaround situations can sometimes create attractive investment opportunities, but they also carry higher uncertainty compared to stable compounders. In this chapter, we examine ICICI Bank &mdash; an example of a turnaround in the Indian banking sector.</p>
      <hr className="chapter-rule" />
      <h3>Understanding the Problem Phase</h3>
      <p>Several years ago, ICICI Bank faced challenges related to asset quality &mdash; the health of the loans that banks provide to borrowers. During periods of rapid lending growth, some loans may later become non-performing assets (NPAs) if borrowers fail to repay. At one stage, ICICI Bank experienced rising levels of non-performing loans, credit losses and investor concerns about risk management. These challenges affected the bank's profitability and created uncertainty around future growth.</p>
      <hr className="chapter-rule" />
      <h3>Strategic Changes and Balance Sheet Repair</h3>
      <p>A turnaround typically requires significant changes in leadership, strategy or operational discipline. ICICI Bank implemented several steps to improve its financial position: strengthening risk management practices, improving loan underwriting standards, focusing on retail lending growth and cleaning up stressed assets on the balance sheet.</p>
      <p>For banks, balance sheet repair involves recognizing and resolving bad loans, improving capital adequacy and strengthening credit monitoring systems. Investors closely monitor non-performing asset ratios, capital adequacy levels and loan growth trends to determine whether the turnaround is progressing successfully.</p>
      <hr className="chapter-rule" />
      <h3>Improving Profitability and Risks</h3>
      <p>Improvements in asset quality and lending discipline contributed to a gradual recovery in profitability for ICICI Bank. Turnaround stories often follow a sequence: recognition of the problem → strategic restructuring → balance sheet repair → gradual recovery in earnings. However, this process may take several years.</p>
      <p>Not all struggling companies successfully complete a turnaround. Some businesses may continue to face structural challenges despite attempted reforms. Investors analyzing turnaround opportunities must carefully examine whether the underlying business remains viable, management is capable of executing the recovery plan and financial stability is improving.</p>
      <blockquote className="pull-quote">Turnaround investments often require greater caution than investments in stable compounders. Patience is often required, as turnaround processes may take multiple years to fully materialize.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 24: The Complete Investor Framework &mdash; Bringing Everything Together",
      content: (
        <>
          <p>Successful investors rarely rely on a single metric or indicator. Instead, they combine multiple perspectives to form a complete understanding of a company. This final chapter brings together the key ideas from the module into a practical step-by-step approach.</p>
      <hr className="chapter-rule" />
      <h3>Step 1: Understand the Business</h3>
      <p>Before analyzing numbers, understand the business model. What products or services does the company offer? How does the company generate revenue? Who are its customers? What industry does it operate in? If a business model is too complex to understand, it may be difficult to evaluate the company's long-term prospects.</p>
      <hr className="chapter-rule" />
      <h3>Step 2: Study the Industry and Competitive Advantage</h3>
      <p>Examine industry growth trends, competitive intensity, barriers to entry and long-term demand drivers. Some industries naturally support stronger profitability and growth than others.</p>
      <p>Determine whether the company has a durable competitive advantage through strong brands, network effects, cost advantages, switching costs or regulatory barriers. Companies with strong moats are often able to maintain pricing power and protect their market position over long periods.</p>
      <hr className="chapter-rule" />
      <h3>Step 3: Analyze Financial Strength and Management Quality</h3>
      <p>Analyze revenue and profit growth, profit margins, return on capital, debt levels and cash flow generation. Strong financial health often provides businesses with the flexibility to invest in future growth.</p>
      <p>Evaluate management through capital allocation decisions, strategic consistency, governance practices and transparency in communication. Management teams that allocate capital effectively and maintain strong governance practices often contribute significantly to long-term value creation.</p>
      <hr className="chapter-rule" />
      <h3>Step 4: Evaluate Valuation and Maintain Discipline</h3>
      <p>Assess valuation using P/E, EV/EBITDA and intrinsic value estimates. The goal is to determine whether the current market price reasonably reflects the company's long-term prospects. Investors often seek opportunities where the price is lower than the estimated intrinsic value, providing a margin of safety.</p>
      <p>Markets often experience periods of volatility and stock prices may fluctuate significantly in the short term. Long-term investors benefit from focusing on underlying business performance, sustainable growth trends and long-term value creation rather than reacting to short-term price movements.</p>
      <blockquote className="pull-quote">Successful investing involves identifying strong businesses, purchasing them at reasonable prices and allowing the power of long-term compounding to work over time.</blockquote>
        </>
      ),
    },
    {
      title: "Bonus Chapter: How to Find Potential Multi-Bagger Companies",
      content: (
        <>
          <p>One of the most exciting outcomes in investing is identifying a multi-bagger &mdash; a stock that grows several times its original value over a long period. The term was popularized by legendary investor Peter Lynch. Multi-baggers rarely emerge through luck alone. They usually come from businesses that combine strong growth, competitive advantages, expanding markets and disciplined management.</p>
      <hr className="chapter-rule" />
      <h3>Sector Tailwinds and Market Leaders</h3>
      <p>The first step is understanding which industries are experiencing strong long-term demand growth &mdash; rising consumption trends, technological innovation, infrastructure development, demographic shifts or regulatory changes. Companies such as Dixon Technologies benefited from the growth of electronics manufacturing and government incentives encouraging domestic production.</p>
      <p>Multi-bagger opportunities frequently arise in emerging industries where market leaders are still being established. Companies that successfully capture market share can grow rapidly as the market expands &mdash; demonstrating technological leadership, strong product innovation, expanding distribution and early market adoption. Zomato emerged as a leader in the rapidly growing online food delivery industry.</p>
      <hr className="chapter-rule" />
      <h3>Small-Cap vs Large-Cap and Growth Runway</h3>
      <p>Smaller companies &mdash; particularly small-cap and mid-cap businesses &mdash; may have more room for expansion than large, mature companies. A company with a market value of ₹2,000 crore may have far more growth potential than one already valued at ₹5 lakh crore. However, smaller companies also carry higher risks including limited operating history, higher volatility and greater sensitivity to economic cycles.</p>
      <p>Growth runway refers to the amount of opportunity available for a company to expand over time &mdash; low market penetration, expanding customer demand, international expansion opportunities and scalable business models. Companies such as Polycab India have benefited from expanding infrastructure development and rising demand for electrical equipment.</p>
      <hr className="chapter-rule" />
      <h3>Combining Growth with Quality and Patience</h3>
      <p>While high growth potential is important, potential multi-bagger companies should also demonstrate consistent revenue growth, improving profit margins, strong return on capital, manageable debt levels and capable management teams. Growth without financial discipline may lead to unstable business performance.</p>
      <p>Multi-bagger investments rarely emerge overnight. In many cases, companies that eventually multiply in value take many years to deliver their full potential. During this time, stock prices may experience periods of volatility, consolidation or temporary setbacks. Investors who identify strong businesses early often benefit from long-term compounding, provided they remain patient and disciplined.</p>
      <blockquote className="pull-quote">The most powerful driver of investment success remains the ability to identify strong businesses early and allow time for growth and compounding to unfold.</blockquote>
        </>
      ),
    },
  ];

  // ============================================================
  // STATE & PARAMS
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const moduleId = "fundamental-analysis";

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
              style={{width: `${Math.round((chapterIndex / (chapters.length - 1)) * 100)}%`}}
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
          <h2>{current.title}</h2>
          {current.content}
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
