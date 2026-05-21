import React from "react";

const imgStyle: React.CSSProperties = {
  display: "block", margin: "28px auto", maxWidth: "100%",
  borderRadius: 12, border: "1px solid rgba(201,168,76,0.15)",
};

/* =================================================================
   CHAPTER COMPONENTS
   ================================================================= */
const ChapterOne = () => (
  <>
    <p>When you buy a stock, you are not just buying a number on a screen.</p>
    <p>You are buying <strong>a small ownership stake in a business</strong>.</p>
    <p>That business produces products or services, earns revenue, pays expenses, generates profits and reinvests capital to grow. Over time, the success of that business determines the value of the shares you own.</p>
    <p>Fundamental analysis is the process of evaluating that business.</p>
    <p>Instead of focusing on short-term price movements, it asks deeper questions:</p>
    <ul className="pl-6">
      <li>How does the company make money?</li>
      <li>Is the business growing?</li>
      <li>Is it financially strong?</li>
      <li>Does it have a competitive advantage?</li>
      <li>Is the stock price reasonable relative to its value?</li>
    </ul>
    <p>By answering these questions, investors attempt to determine whether a company represents a <strong>good long-term investment opportunity</strong>.</p>
    <img src="/fundamental-analysis/image24.png" alt="Fundamental analysis overview" style={imgStyle} />

    <hr className="chapter-rule" />
    <h3>Price vs Value</h3>
    <p>One of the most important concepts in investing is the difference between <strong>price</strong> and <strong>value</strong>.</p>
    <p>Price is simply the number you see on the stock exchange, the amount buyers and sellers agree upon at a particular moment.</p>
    <p>Value, however, represents the <strong>true economic worth of the underlying business</strong>.</p>
    <p>In the short term, price and value can diverge significantly because markets are influenced by:</p>
    <ul className="pl-6">
      <li>news</li>
      <li>investor sentiment</li>
      <li>economic events</li>
      <li>speculation</li>
    </ul>
    <p>But over long periods, stock prices tend to follow the <strong>growth and profitability of the business itself</strong>.</p>
    <p>This is why strong companies that consistently grow their earnings often deliver strong long-term returns for investors.</p>

    <hr className="chapter-rule" />
    <h3>Why Businesses Create Long-Term Wealth</h3>
    <p>Wealth in the stock market is ultimately created by businesses that grow their profits over time.</p>
    <p>When a company increases its earnings year after year, several things can happen:</p>
    <ul className="pl-6">
      <li>It reinvests profits to expand operations</li>
      <li>It launches new products</li>
      <li>It enters new markets</li>
      <li>It increases shareholder value</li>
    </ul>
    <p>As profits grow, the intrinsic value of the company increases.</p>
    <p>Over long periods, the stock price tends to reflect this growth.</p>
    <p>This is why investors often focus on <strong>high-quality businesses with strong growth potential</strong>.</p>
    <p>Companies such as Asian Paints and HDFC Bank have historically created wealth for investors because their underlying businesses expanded consistently over many years.</p>
    <img src="/fundamental-analysis/image37.png" alt="Long-term wealth creation through business growth" style={imgStyle} />

    <hr className="chapter-rule" />
    <h3>Investing vs Speculating</h3>
    <p>Fundamental analysis also highlights the difference between <strong>investing</strong> and <strong>speculating</strong>.</p>
    <p>Investing focuses on:</p>
    <ul className="pl-6">
      <li>the quality of the business</li>
      <li>long-term growth potential</li>
      <li>financial strength</li>
      <li>reasonable valuation</li>
    </ul>
    <p>Speculation focuses primarily on:</p>
    <ul className="pl-6">
      <li>short-term price movement</li>
      <li>market sentiment</li>
      <li>temporary opportunities</li>
    </ul>
    <p>Both approaches exist in markets, but long-term investors rely primarily on <strong>business analysis rather than price fluctuations</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Expectations vs Reality</h3>
    <p>Stock prices are not determined only by current performance.</p>
    <p>They are influenced by <strong>future expectations</strong>.</p>
    <p>If investors believe a company will grow rapidly, the stock price may rise even before the growth actually appears in financial results.</p>
    <p>Conversely, if expectations fall, prices can decline even if the company remains profitable.</p>
    <p>This is why fundamental analysis attempts to understand not only:</p>
    <ul className="pl-6">
      <li>how the company is performing today</li>
      <li>but also <strong>how it may perform in the future</strong>.</li>
    </ul>

    <hr className="chapter-rule" />
    <h3>The Goal of Fundamental Analysis</h3>
    <p>The ultimate objective of fundamental analysis is simple:</p>
    <p>To identify businesses whose <strong>long-term value may grow faster than the market currently expects</strong>.</p>
    <p>When investors identify such companies early and hold them through long periods of growth, the compounding effect can be powerful.</p>
    <p>But achieving this requires more than simply reading financial numbers.</p>
    <p>It requires understanding:</p>
    <ul className="pl-6">
      <li>the business model</li>
      <li>the industry</li>
      <li>the competitive advantages</li>
      <li>the financial strength</li>
      <li>the management team</li>
    </ul>
    <p>The chapters that follow will gradually build this framework, starting with a simple but important question:</p>
    <p><strong>How do businesses actually make money?</strong></p>
  </>
);
const ChapterTwo = () => (
  <>
    <p>Before analyzing financial statements, it is important to understand a simple truth:</p>
    <p>Every business follows the same basic economic structure.</p>
    <p>At its core, a company:</p>
    <ul className="pl-6">
      <li>sells a product or service</li>
      <li>earns revenue from customers</li>
      <li>incurs costs to operate</li>
      <li>generates profit if revenue exceeds costs</li>
    </ul>
    <p>This may sound simple, but the way each business earns money can be very different.</p>
    <p>Understanding how a company makes money is the foundation of fundamental analysis.</p>

    <hr className="chapter-rule" />
    <h3>The Basic Business Equation</h3>
    <p>Every company operates around a simple equation:</p>
    <p><strong>Revenue &ndash; Expenses = Profit</strong></p>
    <p>Revenue represents the money a company earns from selling its products or services.</p>
    <p>Expenses represent the costs required to operate the business, such as raw materials, employee salaries, marketing, logistics and administrative costs.</p>
    <p>If revenue consistently exceeds expenses, the business generates profit.</p>
    <p>Over time, growing profits often lead to increasing business value.</p>
    <img src="/fundamental-analysis/image30.png" alt="The basic business equation" style={imgStyle} />

    <hr className="chapter-rule" />
    <h3>Revenue &mdash; The Starting Point</h3>
    <p>Revenue is the total income generated from the company&apos;s primary business activities.</p>
    <p>It is sometimes called <strong>sales or turnover</strong>.</p>
    <p>For example:</p>
    <ul className="pl-6">
      <li>A paint company earns revenue by selling paint products.</li>
      <li>A bank earns revenue from interest on loans and financial services.</li>
      <li>A software company earns revenue from subscriptions or software licenses.</li>
    </ul>
    <p>Consistent revenue growth usually indicates that the business is expanding its customer base, increasing market share or benefiting from industry growth.</p>
    <p>However, revenue growth alone does not guarantee success. The company must also manage its costs effectively.</p>

    <hr className="chapter-rule" />
    <h3>Costs &mdash; The Reality of Running a Business</h3>
    <p>To generate revenue, businesses must spend money.</p>
    <p>These costs can include:</p>
    <ul className="pl-6">
      <li>raw materials</li>
      <li>employee salaries</li>
      <li>manufacturing expenses</li>
      <li>distribution and logistics</li>
      <li>marketing and advertising</li>
      <li>administrative overhead</li>
    </ul>
    <p>The ability to control these costs often determines how profitable a company becomes.</p>
    <p>Some businesses operate with very thin margins because their costs are high relative to revenue.</p>
    <p>Others benefit from strong pricing power or efficient operations, allowing them to maintain higher profit margins.</p>

    <hr className="chapter-rule" />
    <h3>Profit &mdash; The Result of Efficient Operations</h3>
    <p>Profit represents the earnings remaining after expenses are deducted from revenue.</p>
    <p>There are several levels of profit that investors track, but the simplest concept is:</p>
    <p>Profit shows whether a company is successfully converting its sales into earnings.</p>
    <p>Over time, companies that consistently increase their profits often create significant shareholder value.</p>
    <p>Profit growth can occur through:</p>
    <ul className="pl-6">
      <li>increasing sales</li>
      <li>improving operational efficiency</li>
      <li>raising prices</li>
      <li>expanding into new markets</li>
    </ul>

    <hr className="chapter-rule" />
    <h3>Capital &mdash; The Fuel for Growth</h3>
    <p>Businesses require capital to operate and expand.</p>
    <p>Capital can come from several sources:</p>
    <ul className="pl-6">
      <li>money invested by shareholders</li>
      <li>retained profits from previous years</li>
      <li>borrowed funds (debt)</li>
    </ul>
    <p>Companies use this capital to:</p>
    <ul className="pl-6">
      <li>build factories</li>
      <li>invest in technology</li>
      <li>hire employees</li>
      <li>expand operations</li>
    </ul>
    <p>The way a company uses its capital is one of the most important factors in long-term investment success.</p>
    <p>Some businesses generate very high returns on capital, while others require large investments just to maintain operations.</p>
    <p>Understanding this difference is essential for identifying strong companies.</p>

    <hr className="chapter-rule" />
    <h3>Cash Flow &mdash; The Lifeblood of the Business</h3>
    <p>While profits are important, businesses ultimately operate on <strong>cash</strong>.</p>
    <p>Cash flow represents the actual movement of money in and out of the company.</p>
    <p>A business may report accounting profits but still struggle if cash inflows are weak.</p>
    <p>Strong companies typically generate consistent cash flow, allowing them to reinvest in growth, reduce debt or reward shareholders.</p>
    <p>This is why investors pay close attention to cash generation when analyzing a business.</p>

    <hr className="chapter-rule" />
    <h3>Business Models Can Be Very Different</h3>
    <p>Although the basic equation remains the same, the way businesses generate revenue and profit can vary widely across industries.</p>
    <p>For example:</p>
    <p>A consumer brand such as Asian Paints earns revenue by selling physical products through distributors and retail stores.</p>
    <p>A bank like HDFC Bank earns revenue primarily through interest on loans and financial services.</p>
    <p>A technology services company such as Infosys generates revenue by providing software development and consulting services to global clients.</p>
    <p>Each business model has its own economics, risks, and growth potential.</p>
    <p>Understanding these differences helps investors evaluate companies more effectively.</p>

    <hr className="chapter-rule" />
    <h3>Why Understanding the Business Model Matters</h3>
    <p>Many investors make the mistake of looking only at financial numbers without understanding the underlying business.</p>
    <p>But numbers become far more meaningful when viewed in context.</p>
    <p>For example:</p>
    <ul className="pl-6">
      <li>High margins may indicate strong pricing power.</li>
      <li>Low margins may reflect intense competition.</li>
      <li>Rapid revenue growth may signal industry expansion.</li>
    </ul>
    <p>Before analyzing financial statements, investors should always ask:</p>
    <p><strong>How does this company actually make money?</strong></p>
    <p>This question provides the foundation for deeper analysis.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Now that we understand the basic economic structure of businesses, we can begin examining the financial statements that describe them.</p>
    <p>In the next chapter, we will explore the first and most widely followed financial statement:</p>
    <p><strong>The Income Statement &mdash; Understanding a Company&apos;s Profit Story.</strong></p>
  </>
);

const ChapterThree = () => (
  <>
    <p>Throughout this module, we will discuss many elements of fundamental analysis such as financial statements, growth trends, return ratios, valuation and management quality.</p>
    <p>To apply these concepts in practice, investors need reliable sources where they can obtain company data and financial information.</p>
    <p>Fortunately, much of this information is easily accessible through a few key platforms and we wanted to cover this in the start, so that you can follow along easily. Do not stress or focus on the numbers or ratios in the snippets, the will be covered in the below chapters.</p>

    <hr className="chapter-rule" />
    <h3>Company Investor Relations (Most Reliable Source)</h3>
    <p>One of the best places to obtain accurate information about a company is the <strong>Investor Relations section of its official website</strong>.</p>
    <p>Most listed companies publish detailed disclosures for shareholders, including:</p>
    <ul className="pl-6">
      <li>Annual reports</li>
      <li>Investor presentations</li>
      <li>Quarterly results</li>
      <li>Earnings call transcripts</li>
      <li>Corporate announcements</li>
    </ul>
    <p>These documents come directly from the company and provide insights into business strategy, performance and future plans.</p>
    <p>Because this information is released by the company itself, it is often the <strong>most reliable primary source for fundamental analysis</strong>.</p>
    <img src="/fundamental-analysis/image38.png" alt="Investor Relations section example" style={imgStyle} />
    <p className="img-caption">(A Snippet from Eternal&apos;s (Zomato) Investor Relations section)</p>

    <hr className="chapter-rule" />
    <h3>Stock Exchange Filings</h3>
    <p>Companies are required to submit official disclosures to stock exchanges.</p>
    <p>In India, these filings are available on platforms such as the National Stock Exchange of India.</p>
    <p>Exchange filings may include:</p>
    <ul className="pl-6">
      <li>financial results</li>
      <li>corporate announcements</li>
      <li>shareholding patterns</li>
      <li>regulatory disclosures</li>
    </ul>
    <p>These filings ensure transparency and provide investors with verified company information.</p>
    <img src="/fundamental-analysis/image18.png" alt="NSE India website example" style={imgStyle} />
    <p className="img-caption">(A Snippet from NSE India website after searching for Eternal (Zomato) on it, it gives you a lot of information about the stock including Annual Reports(Financial Statements))</p>

    <hr className="chapter-rule" />
    <h3>Financial Analysis Websites</h3>
    <p>Several financial platforms compile company financials and make them easier to analyze.</p>
    <p>A commonly used platform among investors is Screener, which provides:</p>
    <ul className="pl-6">
      <li>income statements</li>
      <li>balance sheets</li>
      <li>cash flow statements</li>
      <li>financial ratios</li>
      <li>growth metrics</li>
    </ul>
    <p>Another widely used platform is Moneycontrol, which provides market data, financial statements, company news and analyst commentary.</p>
    <p>These websites help investors quickly access and compare financial information across companies.</p>
    <img src="/fundamental-analysis/image39.png" alt="Screener website example" style={imgStyle} />
    <p className="img-caption">(A Snippet from Screener website after searching for Eternal (Zomato) on it, it gives you a lot of information about the stock and can also compare performance with peers as seen below)</p>
    <img src="/fundamental-analysis/image26.png" alt="Screener peer comparison" style={imgStyle} />

    <hr className="chapter-rule" />
    <h3>Broker Platforms</h3>
    <p>Many brokerage platforms also provide useful research tools and financial data.</p>
    <p>For example, Kite by Zerodha offer company information, charts, financial summaries and market updates.</p>
    <p>These platforms allow investors to track companies, monitor financial results and observe price behavior alongside fundamental data.</p>
    <img src="/fundamental-analysis/image29.png" alt="Zerodha Tijori platform example" style={imgStyle} />
    <p className="img-caption">(A Snippet from Zerodha&apos;s official partner Tijori, after searching for Eternal (Zomato) on it)</p>
  </>
);

const ChapterFour = () => (
  <>
    <p>Once we understand how a business makes money, the next step is to evaluate <strong>how profitable it actually is</strong>.</p>
    <p>The financial statement that tells this story is the <strong>Income Statement</strong>.</p>
    <p>The income statement summarizes a company&apos;s financial performance over a specific period, usually <strong>a quarter (3 months) or a year</strong>. It shows how much money the company earned, what costs it incurred and how much profit remained.</p>
    <p>In simple terms, the income statement answers a fundamental question:</p>
    <p><strong>Is this business growing profitably?</strong></p>
    <p>Investors often analyze income statements to understand not just the current profitability of a company, but also <strong>how efficiently the business operates and how its profitability evolves over time</strong>.</p>

    <hr className="chapter-rule" />
    <h3>The Flow of the Income Statement</h3>
    <p>An income statement follows a logical flow where different types of expenses are gradually deducted from revenue.</p>
    <p>The typical structure looks like this:</p>
    <p style={{ textAlign: "center", lineHeight: 2.2, fontWeight: 500 }}>
      Revenue<br />
      &darr;<br />
      Operating Costs<br />
      &darr;<br />
      EBITDA<br />
      &darr;<br />
      Depreciation &amp; Amortization<br />
      &darr;<br />
      EBIT (Operating Profit)<br />
      &darr;<br />
      Interest<br />
      &darr;<br />
      Taxes<br />
      &darr;<br />
      Net Profit
    </p>
    <p>Each stage provides insight into a different aspect of the business.</p>
    <p>Understanding these levels helps investors interpret the company&apos;s financial health more effectively.</p>

    <hr className="chapter-rule" />
    <h3>Revenue &mdash; The Top Line</h3>
    <p>Revenue is the starting point of the income statement.</p>
    <p>It represents the total income generated from selling the company&apos;s products or services.</p>
    <p>Revenue is often referred to as the <strong>&ldquo;top line&rdquo;</strong> because it appears at the top of the income statement.</p>
    <p>Consistent revenue growth usually indicates that the business is expanding through:</p>
    <ul className="pl-6">
      <li>increasing demand for its products</li>
      <li>gaining market share</li>
      <li>launching new offerings</li>
      <li>benefiting from industry growth</li>
    </ul>
    <p>For example, companies such as Asian Paints have historically demonstrated steady revenue growth as their brands expanded and distribution networks strengthened.</p>
    <p>However, revenue alone does not determine how successful a business is. What matters more is <strong>how efficiently the company converts revenue into profit</strong>.</p>
    <img src="/fundamental-analysis/image31.png" alt="Revenue as the top line" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;25 profit and loss statement, showing Revenue as the top line)</p>

    <hr className="chapter-rule" />
    <h3>Operating Expenses</h3>
    <p>To generate revenue, companies incur various operating costs.</p>
    <p>These may include:</p>
    <ul className="pl-6">
      <li>raw materials</li>
      <li>employee salaries</li>
      <li>manufacturing costs</li>
      <li>marketing and advertising</li>
      <li>logistics and distribution</li>
      <li>administrative expenses</li>
    </ul>
    <p>These costs are necessary for running the business, but they must be controlled carefully.</p>
    <p>Efficient companies manage these expenses well, allowing them to generate higher profits from their revenue.</p>
    <img src="/fundamental-analysis/image34.png" alt="Operating expenses" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 profit and loss statement is shown above. While it lists operating expenses, the figure also includes <strong>finance costs, depreciation and amortization</strong>. To calculate the true <strong>operating expense</strong>, these items must be subtracted from the total expenses.)</p>

    <hr className="chapter-rule" />
    <h3>EBITDA &mdash; Earnings Before Interest, Taxes, Depreciation and Amortization</h3>
    <p>After subtracting operating expenses from revenue, we often arrive at a widely used profitability measure called <strong>EBITDA</strong>.</p>
    <p>EBITDA stands for:</p>
    <p><strong>Earnings Before Interest, Taxes, Depreciation and Amortization</strong></p>
    <p>This metric reflects the <strong>operating profitability of the business before accounting for financing decisions and non-cash expenses</strong>.</p>
    <p>Investors and analysts use EBITDA to evaluate how well the company&apos;s core operations are performing.</p>
    <p>EBITDA is particularly useful when comparing companies within the same industry because it removes the effects of:</p>
    <ul className="pl-6">
      <li>capital structure (debt vs equity)</li>
      <li>tax differences</li>
      <li>accounting treatments</li>
    </ul>
    <p>A company with strong and improving EBITDA often indicates a healthy and scalable business model.</p>
    <img src="/fundamental-analysis/image32.png" alt="EBITDA calculation" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 profit and loss statement is shown above. The figure reported as Profit/Loss already includes <strong>finance costs, depreciation and amortization expenses</strong>. To calculate <strong>EBITDA</strong>, these non-operating and non-cash expenses must be <strong>added back to the Profit/Loss(highlighted). </strong>Also note that the first column represents FY 2024&ndash;2025, while the second column represents FY 2023&ndash;2024 results. This format applies to all the snippets shown in this module.)</p>

    <hr className="chapter-rule" />
    <h3>Depreciation and Amortization</h3>
    <p>Businesses invest in long-term assets such as:</p>
    <ul className="pl-6">
      <li>factories</li>
      <li>machinery</li>
      <li>equipment</li>
      <li>software</li>
      <li>intellectual property</li>
    </ul>
    <p>These assets gradually lose value over time. This reduction in value is recorded through accounting charges called:</p>
    <ul className="pl-6">
      <li><strong>Depreciation</strong> (for physical assets)</li>
      <li><strong>Amortization</strong> (for intangible assets)</li>
    </ul>
    <p>These expenses are deducted from EBITDA to arrive at the next important profit measure.</p>
    <img src="/fundamental-analysis/image35.png" alt="Depreciation and amortization expense" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 profit and loss statement, showing Depreciation and amortization expense)</p>

    <hr className="chapter-rule" />
    <h3>EBIT &mdash; Earnings Before Interest and Taxes</h3>
    <p>After accounting for depreciation and amortization, we arrive at <strong>EBIT</strong>, which stands for:</p>
    <p><strong>Earnings Before Interest and Taxes</strong></p>
    <p>EBIT is often referred to as <strong>operating profit</strong>.</p>
    <p>It reflects how profitable the company&apos;s core operations are after considering the cost of maintaining its assets.</p>
    <p>This metric helps investors evaluate how efficiently the company&apos;s business model generates profit before financing costs and taxes.</p>

    <hr className="chapter-rule" />
    <h3>Interest Expenses</h3>
    <p>Many companies borrow money to fund expansion, invest in infrastructure or support operations.</p>
    <p>The cost of borrowing appears in the income statement as <strong>interest expense</strong>.</p>
    <p>Companies with high levels of debt may incur significant interest costs, which can reduce profitability.</p>
    <p>This is why investors pay close attention to a company&apos;s debt levels and interest obligations when analyzing financial statements.</p>

    <hr className="chapter-rule" />
    <h3>Taxes</h3>
    <p>After deducting interest expenses, the company must pay taxes based on its profits.</p>
    <p>Tax rates vary depending on:</p>
    <ul className="pl-6">
      <li>country-specific regulations</li>
      <li>government policies</li>
      <li>industry incentives</li>
    </ul>
    <p>Once taxes are deducted, we reach the final profit figure.</p>
    <img src="/fundamental-analysis/image44.png" alt="Tax expense" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 profit and loss statement, showing tax expense, current tax is what is paid to the government during the year and deferred tax is an accounting adjustment for future taxes)</p>

    <hr className="chapter-rule" />
    <h3>Net Profit &mdash; The Bottom Line</h3>
    <p>Net profit represents the earnings remaining after <strong>all expenses, interest and taxes have been deducted</strong>.</p>
    <p>It is often referred to as the <strong>&ldquo;bottom line&rdquo;</strong> because it appears at the bottom of the income statement.</p>
    <p>Net profit ultimately belongs to the shareholders of the company.</p>
    <p>Over long periods, companies that consistently grow net profit tend to create substantial value for investors.</p>
    <p>For example, banks such as HDFC Bank have historically demonstrated strong and steady profit growth as their loan books and financial services expanded.</p>
    <img src="/fundamental-analysis/image36.png" alt="Net profit as bottom line" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 profit and loss statement, showing net profit as the bottom line)</p>

    <hr className="chapter-rule" />
    <h3>Profit Margins &mdash; Measuring Efficiency</h3>
    <p>Absolute profit numbers alone are not enough. Investors also evaluate <strong>profit margins</strong>, which measure profitability relative to revenue.</p>
    <p>Commonly used margins include:</p>
    <ul className="pl-6">
      <li><strong>EBITDA Margin</strong> = EBITDA &divide; Revenue</li>
      <li><strong>Operating Margin (EBIT Margin)</strong> = EBIT &divide; Revenue</li>
      <li><strong>Net Profit Margin</strong> = Net Profit &divide; Revenue</li>
    </ul>
    <p>Margins help investors understand how efficiently a company converts revenue into profit.</p>
    <p>For example:</p>
    <p>Higher margins may indicate:</p>
    <ul className="pl-6">
      <li>strong pricing power</li>
      <li>operational efficiency</li>
      <li>competitive advantages</li>
    </ul>
    <p>Declining margins may signal increasing competition or rising costs.</p>

    <hr className="chapter-rule" />
    <h3>Why Investors Study Income Statements Over Time</h3>
    <p>When analyzing a company, investors rarely focus on just one year of financial data.</p>
    <p>Instead, they study trends across multiple years to evaluate:</p>
    <ul className="pl-6">
      <li>revenue growth</li>
      <li>profit growth</li>
      <li>margin stability or expansion</li>
    </ul>
    <p>Companies that consistently grow both revenue and profits over long periods often possess strong business models and competitive advantages.</p>

    <hr className="chapter-rule" />
    <h3>Why the Income Statement Matters</h3>
    <p>The income statement provides a detailed picture of how well a company&apos;s business model is performing.</p>
    <p>It helps investors understand:</p>
    <ul className="pl-6">
      <li>whether the company is growing</li>
      <li>whether profitability is improving</li>
      <li>how efficiently the business operates</li>
    </ul>
    <p>However, profit numbers alone cannot reveal everything about a company&apos;s financial health.</p>
    <p>A business may report strong profits while still carrying significant debt or generating weak cash flows.</p>
    <p>This is why investors must also examine the company&apos;s financial position.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>If the income statement tells us <strong>how profitable the business is</strong>, the next financial statement reveals <strong>how financially strong the company is</strong>.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>The Balance Sheet &mdash; Understanding a Company&apos;s Financial Strength.</strong></p>
  </>
);

const ChapterFive = () => (
  <>
    <p>While the income statement tells us <strong>how profitable a company is</strong>, it does not tell us <strong>how strong the company&apos;s financial position is</strong>.</p>
    <p>A business may report strong profits but still carry excessive debt or weak financial reserves. This is why investors must also examine the <strong>Balance Sheet</strong>.</p>
    <p>The balance sheet provides a snapshot of a company&apos;s financial position at a specific point in time. It shows:</p>
    <ul className="pl-6">
      <li>what the company <strong>owns</strong></li>
      <li>what the company <strong>owes</strong></li>
      <li>what remains for the <strong>shareholders</strong></li>
    </ul>
    <p>In simple terms, the balance sheet answers a key question:</p>
    <p><strong>How financially strong and stable is the business?</strong></p>
    <p>Understanding the balance sheet helps investors evaluate whether a company has the resources to grow, withstand economic downturns and manage financial risk.</p>

    <hr className="chapter-rule" />
    <h3>The Basic Structure of the Balance Sheet</h3>
    <p>Every balance sheet follows a simple accounting equation:</p>
    <p><strong>Assets = Liabilities + Shareholders&apos; Equity</strong></p>
    <p>This equation always holds true.</p>
    <p>Everything the company owns (assets) must have been financed either through borrowing (liabilities) or through money invested by shareholders (equity).</p>
    <p>The balance sheet is therefore divided into three major sections:</p>
    <p style={{ textAlign: "center", lineHeight: 2.2, fontWeight: 500 }}>
      Assets<br />
      Liabilities<br />
      Shareholders&apos; Equity
    </p>
    <p>Each section provides valuable insight into the company&apos;s financial structure.</p>

    <hr className="chapter-rule" />
    <h3>Assets &mdash; What the Company Owns</h3>
    <p>Assets represent the resources that a company owns or controls and uses to operate its business.</p>
    <p>Assets typically fall into two categories.</p>

    <h3>Current Assets</h3>
    <p>These are assets that are expected to be converted into cash or used within one year.</p>
    <p>Examples include:</p>
    <ul className="pl-6">
      <li>Cash and cash equivalents</li>
      <li>Accounts receivable (money customers owe the company)</li>
      <li>Inventory (goods waiting to be sold)</li>
      <li>Short-term investments</li>
    </ul>
    <p>Current assets are important because they help the company manage its <strong>day-to-day operations and liquidity</strong>.</p>
    <img src="/fundamental-analysis/image41.png" alt="Current assets" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Balance Sheet statement, showing current assets)</p>

    <h3>Non-Current Assets</h3>
    <p>Non-current assets are long-term resources that support the company&apos;s operations over many years.</p>
    <p>Examples include:</p>
    <ul className="pl-6">
      <li>Factories and manufacturing plants</li>
      <li>Machinery and equipment</li>
      <li>Office buildings</li>
      <li>Technology infrastructure</li>
      <li>Intangible assets such as patents or brand value</li>
    </ul>
    <p>For example, companies like Asian Paints invest heavily in manufacturing plants and distribution infrastructure, which appear as long-term assets on the balance sheet.</p>
    <p>These assets enable the company to produce and distribute its products efficiently.</p>
    <img src="/fundamental-analysis/image43.png" alt="Non-current assets" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Balance Sheet statement, showing non-current assets)</p>

    <hr className="chapter-rule" />
    <h3>Liabilities &mdash; What the Company Owes</h3>
    <p>Liabilities represent the financial obligations of the company.</p>
    <p>They show how much money the company owes to lenders, suppliers and other parties.</p>
    <p>Like assets, liabilities are divided into two categories.</p>

    <h3>Current Liabilities</h3>
    <p>Current liabilities are obligations that must be paid within one year.</p>
    <p>Examples include:</p>
    <ul className="pl-6">
      <li>short-term borrowings</li>
      <li>accounts payable (money owed to suppliers)</li>
      <li>taxes payable</li>
      <li>short-term provisions</li>
    </ul>
    <p>These liabilities are typically related to the company&apos;s day-to-day operations.</p>
    <img src="/fundamental-analysis/image33.png" alt="Current liabilities" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Balance Sheet statement, showing current liabilities)</p>

    <h3>Non-Current Liabilities</h3>
    <p>Non-current liabilities are long-term obligations that extend beyond one year.</p>
    <p>Examples include:</p>
    <ul className="pl-6">
      <li>long-term loans</li>
      <li>corporate bonds</li>
      <li>long-term lease obligations</li>
    </ul>
    <p>Some companies use debt to finance expansion projects or capital investments.</p>
    <p>Moderate levels of debt can be manageable, but excessive debt can increase financial risk during economic downturns.</p>
    <p>This is why investors closely monitor the debt levels of a company.</p>
    <img src="/fundamental-analysis/image46.png" alt="Non-current liabilities" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Balance Sheet statement, showing non-current liabilities)</p>

    <hr className="chapter-rule" />
    <h3>Shareholders&apos; Equity &mdash; The Owners&apos; Claim or Your Claim</h3>
    <p>Shareholders&apos; equity represents the portion of the company that belongs to its shareholders after all liabilities have been deducted.</p>
    <p>It is essentially the <strong>residual value of the business</strong>.</p>
    <p>Equity typically includes:</p>
    <ul className="pl-6">
      <li>share capital (money invested by shareholders)</li>
      <li>retained earnings (profits reinvested into the business)</li>
      <li>reserves</li>
    </ul>
    <p>Retained earnings are particularly important because they represent profits that the company has reinvested to grow the business instead of distributing them as dividends.</p>
    <p>Companies that generate strong profits and reinvest them wisely often increase their equity over time.</p>
    <p>For example, companies such as HDFC Bank have steadily increased their equity base over many years as profits were reinvested into expanding operations.</p>
    <img src="/fundamental-analysis/image40.png" alt="Equity" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Balance Sheet statement, showing equity)</p>

    <hr className="chapter-rule" />
    <h3>Working Capital &mdash; Managing Day-to-Day Operations</h3>
    <p>Another important concept derived from the balance sheet is <strong>working capital</strong>.</p>
    <p>Working capital is calculated as:</p>
    <p><strong>Working Capital = Current Assets &minus; Current Liabilities</strong></p>
    <p>Working capital measures the company&apos;s ability to meet its short-term obligations while continuing normal operations.</p>
    <p>Positive working capital usually indicates that the company can comfortably manage its operational expenses.</p>
    <p>Negative working capital may signal liquidity pressure unless it is part of a business model that naturally operates with negative working capital.</p>
    <p>For example, companies with strong distribution networks may receive cash from customers before paying suppliers.</p>

    <hr className="chapter-rule" />
    <h3>Debt &mdash; A Double-Edged Sword</h3>
    <p>Debt can be useful when used responsibly.</p>
    <p>Companies often borrow money to:</p>
    <ul className="pl-6">
      <li>expand production capacity</li>
      <li>invest in new technology</li>
      <li>enter new markets</li>
    </ul>
    <p>If these investments generate strong returns, debt can accelerate growth.</p>
    <p>However, excessive debt increases financial risk.</p>
    <p>During economic downturns, companies with high debt obligations may struggle to meet interest payments.</p>
    <p>This is why investors often analyze ratios such as:</p>
    <ul className="pl-6">
      <li><strong>Debt-to-Equity Ratio</strong></li>
      <li><strong>Interest Coverage Ratio</strong></li>
    </ul>
    <p>These ratios help determine whether a company&apos;s debt levels are manageable.</p>
    <p>Don&apos;t worry, we will cover some of the important ratios below!</p>

    <hr className="chapter-rule" />
    <h3>Why the Balance Sheet Matters</h3>
    <p>The balance sheet reveals whether a company is financially resilient.</p>
    <p>It helps investors evaluate:</p>
    <ul className="pl-6">
      <li>how much debt the company carries</li>
      <li>whether the company has strong financial resources</li>
      <li>how efficiently capital is being used</li>
    </ul>
    <p>A strong balance sheet provides stability and flexibility.</p>
    <p>Companies with healthy balance sheets are often better positioned to invest in growth opportunities and survive economic downturns.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>While the income statement tells us <strong>how profitable a company is</strong> and the balance sheet shows <strong>how financially strong it is</strong>, there is another equally important dimension to evaluate.</p>
    <p>That dimension is <strong>cash</strong>.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>The Cash Flow Statement &mdash; Understanding How Money Actually Moves Through the Business.</strong></p>
    <p>This statement often reveals insights that profit numbers alone cannot show.</p>
  </>
);
const ChapterSix = () => (
  <>
    <p>While the <strong>Income Statement</strong> shows profitability and the <strong>Balance Sheet</strong> shows financial strength, neither of them fully explains how money actually moves through a business.</p>
    <p>That is where the <strong>Cash Flow Statement</strong> becomes essential.</p>
    <p>The cash flow statement tracks the <strong>actual movement of cash into and out of the company</strong> over a specific period.</p>
    <p>It answers an important question:</p>
    <p><strong>Is the company truly generating cash or are the profits mostly accounting numbers?</strong></p>
    <p>This distinction is crucial because a company can report strong profits but still struggle if it does not generate enough cash to fund its operations.</p>
    <p>For investors, the cash flow statement provides a clearer picture of the company&apos;s financial health and sustainability.</p>

    <hr className="chapter-rule" />
    <h3>Why Cash Flow Matters</h3>
    <p>Profit is calculated using accounting rules, which include non-cash items such as depreciation and adjustments.</p>
    <p>Cash flow, however, reflects <strong>real money entering and leaving the business</strong>.</p>
    <p>A company with strong cash generation can:</p>
    <ul className="pl-6">
      <li>reinvest in growth</li>
      <li>reduce debt</li>
      <li>pay dividends</li>
      <li>acquire other businesses</li>
      <li>survive economic downturns</li>
    </ul>
    <p>On the other hand, a company that consistently struggles to generate cash may face financial stress even if it appears profitable on paper.</p>
    <p>Example - A company may appear profitable in its income statement but still face financial stress if it cannot convert those profits into cash.</p>
    <p>Imagine a company that sells ₹1,000 crore worth of products in a year and reports ₹120 crore in profit. However, many of its customers pay very slowly, sometimes taking 6&ndash;9 months to settle invoices.</p>
    <p>On the income statement, the company records revenue and profit immediately when the sale occurs. But in reality, most of the cash has not yet been received.</p>
    <p>Meanwhile, the company must still pay suppliers, salaries, rent and interest on loans in cash. If customer payments keep getting delayed, the company may face a cash shortage even though it appears profitable on paper.</p>

    <hr className="chapter-rule" />
    <h3>The Structure of the Cash Flow Statement</h3>
    <p>The cash flow statement is divided into three main sections:</p>
    <p style={{ textAlign: "center", lineHeight: 2.2, fontWeight: 500 }}>
      Operating Cash Flow<br />
      Investing Cash Flow<br />
      Financing Cash Flow
    </p>
    <p>Each section highlights a different aspect of the company&apos;s financial activity.</p>
    <p>Together, they explain how the company generates and uses cash.</p>

    <hr className="chapter-rule" />
    <h3>Operating Cash Flow &mdash; Cash from Core Operations</h3>
    <p>Operating Cash Flow (OCF) represents the cash generated from the company&apos;s <strong>core business operations</strong>.</p>
    <p>It includes cash inflows from customers and cash outflows related to operating expenses such as:</p>
    <ul className="pl-6">
      <li>supplier payments</li>
      <li>employee salaries</li>
      <li>administrative costs</li>
      <li>taxes</li>
    </ul>
    <p>A healthy business typically generates <strong>positive and growing operating cash flow</strong> over time.</p>
    <p>Consistently positive operating cash flow indicates that the company&apos;s business model is working.</p>
    <p>For example, companies such as HDFC Bank generate substantial operating cash flow because their lending and financial services operations consistently produce income.</p>
    <p>Operating cash flow is often considered one of the most reliable indicators of business strength.</p>
    <img src="/fundamental-analysis/image42.png" alt="Operating Cashflow" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Cashflow statement, showing Operating Cashflow, note that it is reverse calculated from the profit for the year)</p>

    <hr className="chapter-rule" />
    <h3>Investing Cash Flow &mdash; Capital Investments</h3>
    <p>Investing Cash Flow reflects cash spent or received from investments in long-term assets.</p>
    <p>Examples include:</p>
    <ul className="pl-6">
      <li>purchasing machinery or factories</li>
      <li>investing in technology infrastructure</li>
      <li>acquiring other companies</li>
      <li>selling assets</li>
    </ul>
    <p>Growing companies often show <strong>negative investing cash flow</strong>, because they are spending money to expand their operations.</p>
    <p>For example, manufacturing companies such as Asian Paints regularly invest in new production facilities, distribution networks and supply chain improvements.</p>
    <p>Although this creates cash outflows in the short term, these investments often support long-term growth.</p>
    <p>Investors should therefore interpret investing cash flow <strong>in the context of the company&apos;s growth strategy</strong>.</p>
    <img src="/fundamental-analysis/image15.png" alt="Investing Cashflow" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Cashflow statement, showing Investing Cashflow)</p>

    <hr className="chapter-rule" />
    <h3>Financing Cash Flow &mdash; How the Company Raises or Returns Capital</h3>
    <p>Financing Cash Flow reflects how a company raises capital or returns money to investors.</p>
    <p>This section includes activities such as:</p>
    <ul className="pl-6">
      <li>issuing new shares</li>
      <li>borrowing or repaying debt</li>
      <li>paying dividends to shareholders</li>
      <li>share buybacks</li>
    </ul>
    <p>For example:</p>
    <p>A company raising funds through loans or issuing shares will show <strong>positive financing cash flow</strong>.</p>
    <p>A company repaying debt or distributing dividends may show <strong>negative financing cash flow</strong>.</p>
    <p>Understanding financing activities helps investors evaluate how the company funds its operations and growth.</p>
    <img src="/fundamental-analysis/image14.png" alt="Financing Cashflow" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal FY 2024&ndash;2025 Cashflow statement, showing Financing Cashflow)</p>

    <hr className="chapter-rule" />
    <h3>Free Cash Flow &mdash; One of the Most Important Metrics</h3>
    <p>One of the most important metrics derived from the cash flow statement is <strong>Free Cash Flow (FCF)</strong>.</p>
    <p>Free Cash Flow represents the cash remaining after the company funds its operating activities and capital expenditures.</p>
    <p>It is typically calculated as:</p>
    <p><strong>Free Cash Flow = Operating Cash Flow &minus; Capital Expenditures</strong></p>
    <p>Free cash flow represents the money available for:</p>
    <ul className="pl-6">
      <li>reducing debt</li>
      <li>paying dividends</li>
      <li>buying back shares</li>
      <li>reinvesting in new opportunities</li>
    </ul>
    <p>Companies that consistently generate strong free cash flow often have greater financial flexibility and resilience.</p>

    <hr className="chapter-rule" />
    <h3>Profit vs Cash Flow</h3>
    <p>A useful comparison investors often make is between <strong>net profit and operating cash flow</strong>.</p>
    <p>If profits are growing but operating cash flow remains weak, it may signal potential issues such as:</p>
    <ul className="pl-6">
      <li>aggressive accounting practices - Revenue may be recognized earlier than the cash is actually received, making profits appear stronger than the underlying cash position.</li>
      <li>slow customer payments - If customers take longer to pay their invoices, the company records revenue in its accounts but has not yet received the cash.</li>
      <li>excessive inventory buildup - If a company produces more goods than it sells, cash becomes tied up in unsold inventory, reducing operating cash flow.</li>
    </ul>
    <p>Ideally, operating cash flow should broadly track or exceed net profit over time.</p>
    <p>When cash generation consistently supports reported profits, it strengthens confidence in the company&apos;s financial performance.</p>

    <hr className="chapter-rule" />
    <h3>Why the Cash Flow Statement Matters</h3>
    <p>The cash flow statement helps investors answer several critical questions:</p>
    <ul className="pl-6">
      <li>Is the company generating real cash from its business operations?</li>
      <li>Are profits supported by strong cash flow?</li>
      <li>Is the company investing wisely in future growth?</li>
      <li>How is the company financing its activities?</li>
    </ul>
    <p>These insights help investors distinguish between companies that <strong>appear profitable</strong> and those that truly generate sustainable financial strength.</p>

    <hr className="chapter-rule" />
    <h3>The Three Financial Statements Together</h3>
    <p>The three financial statements work together to provide a complete picture of a company.</p>
    <p>The <strong>Income Statement</strong> shows profitability.<br />
    The <strong>Balance Sheet</strong> shows financial strength.<br />
    The <strong>Cash Flow Statement</strong> shows the movement of money.</p>
    <p>When analyzed together, these statements help investors evaluate the overall health of a business.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Now that we understand how to read the three major financial statements, the next step is learning how investors compare companies more efficiently.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Key Financial Ratios &mdash; How Investors Measure Business Quality and Efficiency.</strong></p>
    <p>These ratios help transform financial statements into meaningful insights for investment decisions.</p>
  </>
);

const ChapterSeven = () => (
  <>
    <p>After learning how to read the income statement, balance sheet and cash flow statement, the next step is learning how investors <strong>interpret those numbers more efficiently</strong>.</p>
    <p>Financial statements contain a large amount of information, but raw numbers alone can be difficult to compare across companies or across different time periods.</p>
    <p>This is where <strong>financial ratios</strong> become useful.</p>
    <p>Financial ratios transform financial statement data into <strong>standardized metrics</strong> that help investors evaluate:</p>
    <ul className="pl-6">
      <li>profitability</li>
      <li>efficiency</li>
      <li>financial strength</li>
      <li>growth potential</li>
    </ul>
    <p>Instead of reading hundreds of numbers, ratios help investors quickly understand how well a business is performing.</p>

    <hr className="chapter-rule" />
    <h3>Why Ratios Matter</h3>
    <p>Consider two companies that both report a profit of ₹500 crore.</p>
    <p>At first glance, they appear equally profitable.</p>
    <p>But if one company generates that profit from ₹5,000 crore in revenue while the other generates it from ₹1,500 crore in revenue, their efficiency is very different.</p>
    <p>Financial ratios allow investors to compare businesses on a <strong>common scale</strong>, making it easier to identify strong companies.</p>
    <p>They also allow investors to analyze <strong>trends over time</strong>, which often reveal more insight than single-year results.</p>

    <hr className="chapter-rule" />
    <h3>The Four Categories of Financial Ratios</h3>
    <p>For investors, financial ratios generally fall into four broad categories:</p>
    <ol className="pl-6">
      <li>Profitability Ratios</li>
      <li>Efficiency Ratios</li>
      <li>Financial Strength Ratios</li>
      <li>Valuation Ratios</li>
    </ol>
    <p>Each category helps answer a different question about the business.</p>

    <hr className="chapter-rule" />
    <h3>Profitability Ratios &mdash; How Profitable Is the Business?</h3>
    <p>Profitability ratios measure how efficiently a company converts revenue into profit.</p>
    <p>They reveal whether the company has:</p>
    <ul className="pl-6">
      <li>strong pricing power</li>
      <li>efficient operations</li>
      <li>competitive advantages</li>
    </ul>
    <p>Some of the most widely used profitability ratios include:</p>
    <ul className="pl-6">
      <li><strong>Gross Margin</strong></li>
      <li><strong>Operating Margin</strong></li>
      <li><strong>Net Profit Margin</strong></li>
    </ul>
    <p>These ratios show how much profit remains after different levels of expenses.</p>
    <p>For example, companies with strong brands or pricing power often maintain higher margins.</p>
    <p>A company such as Asian Paints has historically maintained strong margins due to its brand strength and distribution network.</p>
    <p>Consistently high margins often indicate a <strong>high-quality business model</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Efficiency Ratios &mdash; How Well Does the Business Use Its Resources?</h3>
    <p>Efficiency ratios measure how effectively a company uses its assets and capital to generate revenue and profit.</p>
    <p>Important efficiency metrics include:</p>
    <ul className="pl-6">
      <li><strong>Return on Equity (ROE)</strong></li>
      <li><strong>Return on Capital Employed (ROCE)</strong></li>
      <li><strong>Asset Turnover</strong></li>
    </ul>
    <p>These ratios help investors understand how efficiently management uses capital.</p>
    <p>For example, companies such as HDFC Bank have historically maintained strong returns on capital because their business model efficiently converts deposits into profitable lending activities.</p>
    <p>High returns on capital are often a sign of <strong>economic moats and strong management execution</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Financial Strength Ratios &mdash; How Risky Is the Business?</h3>
    <p>Financial strength ratios help investors evaluate the company&apos;s <strong>balance sheet health</strong>.</p>
    <p>These ratios measure the company&apos;s ability to meet its financial obligations.</p>
    <p>Common metrics include:</p>
    <ul className="pl-6">
      <li><strong>Debt-to-Equity Ratio</strong></li>
      <li><strong>Interest Coverage Ratio</strong></li>
      <li><strong>Current Ratio</strong></li>
    </ul>
    <p>Companies with excessive debt may face financial stress during economic downturns.</p>
    <p>Healthy companies maintain manageable debt levels and sufficient earnings to cover interest payments.</p>
    <p>For example, banks such as ICICI Bank carefully manage their balance sheets to maintain stability in lending operations.</p>

    <hr className="chapter-rule" />
    <h3>Valuation Ratios &mdash; Is the Stock Reasonably Priced?</h3>
    <p>Even a great company can become a poor investment if its stock price is too high relative to its earnings.</p>
    <p>Valuation ratios help investors compare the market price of a stock with the company&apos;s financial performance.</p>
    <p>Common valuation metrics include:</p>
    <ul className="pl-6">
      <li><strong>Price-to-Earnings (P/E) Ratio</strong></li>
      <li><strong>Price-to-Book (P/B) Ratio</strong></li>
      <li><strong>EV/EBITDA</strong></li>
    </ul>
    <p>These ratios help investors determine whether a stock appears expensive, fairly valued or undervalued relative to its fundamentals.</p>
    <p>However, valuation should always be interpreted in context.</p>
    <p>High-growth companies may trade at higher valuations because investors expect future earnings to increase.</p>

    <hr className="chapter-rule" />
    <h3>Why Ratios Should Be Used Carefully</h3>
    <p>Financial ratios are powerful tools, but they should never be used in isolation.</p>
    <p>Different industries naturally have different financial characteristics.</p>
    <p>For example:</p>
    <ul className="pl-6">
      <li>technology companies often have higher margins</li>
      <li>manufacturing companies require higher capital investment</li>
      <li>banks operate with different balance sheet structures</li>
    </ul>
    <p>Therefore, ratios should generally be compared:</p>
    <ul className="pl-6">
      <li>across companies within the same industry</li>
      <li>across multiple years for the same company</li>
    </ul>
    <p>This provides a more meaningful perspective on business performance.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Now that we understand how ratios help interpret financial statements, we will examine the most important group of ratios in greater detail.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Profitability Ratios &mdash; Measuring How Efficiently a Company Generates Profit.</strong></p>
    <p>These metrics often reveal the <strong>quality of a business model and its competitive strength</strong>.</p>
  </>
);

const ChapterEight = () => (
  <>
    <p>In the previous chapter, we introduced profitability ratios as a way to evaluate how efficiently a company converts revenue into profit.</p>
    <p>Now we will examine these margins more closely and understand <strong>what they reveal about the economics of a business</strong>.</p>
    <p>Profitability ratios show how much profit remains at different stages of the income statement. By analyzing them, investors can understand:</p>
    <ul className="pl-6">
      <li>how efficiently the company produces its products</li>
      <li>how effectively it manages operating costs</li>
      <li>how much profit ultimately remains for shareholders</li>
    </ul>
    <p>More importantly, margin trends often reveal whether a business is <strong>strengthening its competitive position or facing pressure from competition and rising costs</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Gross Margin &mdash; Product Economics</h3>
    <p>Gross margin measures the profitability of a company&apos;s product before operating expenses such as marketing or administration are considered.</p>
    <p>It focuses only on <strong>direct production costs</strong>, making it useful for evaluating the economics of the core product.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Gross Margin = (Revenue &minus; Cost of Goods Sold) &divide; Revenue</strong></p>
    <p>or</p>
    <p><strong>Gross Margin = Gross Profit &divide; Revenue</strong></p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Revenue = ₹1,000 crore<br />
    Cost of Goods Sold = ₹600 crore</p>
    <p>Gross Profit = ₹400 crore</p>
    <p>Gross Margin = 400 &divide; 1000 = <strong>40%</strong></p>
    <p>This means that after covering production costs, <strong>40% of revenue remains available to pay operating expenses and generate profit</strong>.</p>
    <p>Companies with strong brands or differentiated products often maintain higher gross margins.</p>
    <p>For example, Asian Paints has historically maintained strong gross margins because of its pricing power and strong distribution network.</p>
    <p>Stable or improving gross margins often indicate a healthy product business.</p>
    <img src="/fundamental-analysis/image2.png" alt="Gross Margin" style={imgStyle} />
    <p className="img-caption">(A snippet from Asian Paints FY 2024&ndash;2025 Annual Report, showing Gross Margin)</p>

    <hr className="chapter-rule" />
    <h3>Operating Margin &mdash; Operational Efficiency</h3>
    <p>Operating margin measures profitability after accounting for operating expenses such as:</p>
    <ul className="pl-6">
      <li>employee salaries</li>
      <li>marketing expenses</li>
      <li>logistics</li>
      <li>administrative costs</li>
    </ul>
    <p>It reflects how efficiently the company manages its <strong>core business operations</strong>.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Operating Margin = Operating Profit (EBIT) &divide; Revenue</strong></p>

    <p><strong>Example</strong></p>
    <p>Assume the company from the previous example reports:</p>
    <p>Revenue = ₹1,000 crore<br />
    Operating Profit (EBIT) = ₹200 crore</p>
    <p>Operating Margin = 200 &divide; 1000 = <strong>20%</strong></p>
    <p>This means that after covering all operating costs, the company retains <strong>20% of revenue as operating profit</strong>.</p>
    <p>Businesses that scale efficiently often see operating margins improve over time.</p>
    <p>For example, IT services companies such as Infosys benefit from scalable operations where revenue growth can outpace cost growth.</p>
    <img src="/fundamental-analysis/image8.png" alt="Operating Margin" style={imgStyle} />
    <p className="img-caption">(A snippet from the HUL FY 2024&ndash;2025 Annual Report. Sometimes the operating margin is not directly provided in annual reports, but it can be easily calculated. In this case, the EBIT figure is given; dividing EBIT by revenue gives the operating margin.)</p>

    <hr className="chapter-rule" />
    <h3>Net Profit Margin &mdash; Final Profitability</h3>
    <p>Net profit margin measures the percentage of revenue that ultimately becomes profit after <strong>all expenses, interest and taxes</strong> have been deducted.</p>
    <p>It reflects the overall financial efficiency of the business.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Net Profit Margin = Net Profit &divide; Revenue</strong></p>

    <p><strong>Example</strong></p>
    <p>Suppose the company reports:</p>
    <p>Revenue = ₹1,000 crore<br />
    Net Profit = ₹120 crore</p>
    <p>Net Profit Margin = 120 &divide; 1000 = <strong>12%</strong></p>
    <p>This means that the company converts <strong>12% of its revenue into profit for shareholders</strong>.</p>
    <p>Companies with stable net profit margins over long periods often demonstrate strong financial discipline.</p>
    <p>For example, banks such as HDFC Bank have historically maintained consistent profitability through disciplined lending and risk management.</p>
    <img src="/fundamental-analysis/image27.png" alt="Net Profit Margin" style={imgStyle} />
    <p className="img-caption">(A snippet from HUL FY 2024&ndash;2025 Annual Report, showing Net Profit Margin)</p>

    <hr className="chapter-rule" />
    <h3>Why Margin Trends Matter</h3>
    <p>While margin levels are important, investors often gain deeper insights by analyzing <strong>how margins change over time</strong>.</p>
    <p>Improving margins may indicate:</p>
    <ul className="pl-6">
      <li>stronger pricing power</li>
      <li>improving operational efficiency</li>
      <li>economies of scale</li>
    </ul>
    <p>Declining margins may suggest:</p>
    <ul className="pl-6">
      <li>rising competition</li>
      <li>increasing input costs</li>
      <li>weakening demand</li>
    </ul>
    <p>For instance, if a company&apos;s revenue grows but margins steadily decline, the business may be sacrificing profitability in order to maintain sales growth.</p>
    <p>Tracking these trends over several years helps investors understand the <strong>evolution of the business model</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Industry Context Matters</h3>
    <p>Profit margins vary significantly across industries.</p>
    <p>For example:</p>
    <ul className="pl-6">
      <li>Software companies often have high margins because their products scale easily.</li>
      <li>Manufacturing companies face higher production costs and typically operate with lower margins.</li>
      <li>Retail businesses operate with thin margins but compensate through high sales volumes.</li>
    </ul>
    <p>Because of these differences, margins should usually be compared <strong>within the same industry</strong> rather than across unrelated sectors.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Profitability ratios help investors understand <strong>how efficiently a company converts revenue into profit</strong>.</p>
    <p>But another critical question remains:</p>
    <p><strong>How efficiently does the company use its capital to generate those profits?</strong></p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Return Ratios &mdash; Understanding ROE, ROCE and Asset Turnover.</strong></p>
    <p>These are among the most important metrics investors use to identify high-quality businesses.</p>
  </>
);
const ChapterNine = () => (
  <>
    <p>In the previous chapter, we explored profitability margins and how companies convert revenue into profit.</p>
    <p>However, profitability alone does not tell the full story.</p>
    <p>Two companies may generate the same profit, but if one requires significantly more capital to generate that profit, it is actually <strong>less efficient</strong>.</p>
    <p>This is where <strong>return ratios</strong> become important.</p>
    <p>Return ratios measure how efficiently a company uses the capital invested in the business to generate profit. They help investors answer a critical question:</p>
    <p><strong>How much profit does the company generate for every rupee of capital employed?</strong></p>
    <p>High return ratios are often one of the strongest indicators of a high-quality business.</p>

    <hr className="chapter-rule" />
    <h3>Return on Equity (ROE)</h3>
    <p>Return on Equity measures how efficiently a company generates profit from the money invested by shareholders.</p>
    <p><strong>Formula</strong></p>
    <p><strong>ROE = Net Profit &divide; Shareholders&apos; Equity</strong></p>
    <p>ROE tells investors how much profit the company generates for every rupee of shareholder capital.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Net Profit = ₹150 crore<br />
    Shareholders&apos; Equity = ₹1,000 crore</p>
    <p>ROE = 150 &divide; 1000 = <strong>15%</strong></p>
    <p>This means that for every ₹100 invested by shareholders, the company generates <strong>₹15 in profit annually</strong>.</p>
    <p>Companies that consistently maintain high ROE often have strong business models or competitive advantages.</p>
    <p>For example, companies such as HDFC Bank have historically maintained strong returns on equity due to efficient lending operations and strong risk management.</p>
    <img src="/fundamental-analysis/image23.png" alt="Return on Equity" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal (Zomato) FY 2024&ndash;2025 Annual Report, showing ROE)</p>

    <hr className="chapter-rule" />
    <h3>Return on Capital Employed (ROCE)</h3>
    <p>While ROE focuses only on shareholder capital, businesses also use <strong>debt</strong> to finance operations.</p>
    <p>Return on Capital Employed (ROCE) therefore measures how efficiently the company generates profit from <strong>all capital used in the business</strong>, including both equity and debt.</p>
    <p><strong>Formula</strong></p>
    <p><strong>ROCE = EBIT &divide; Capital Employed</strong></p>
    <p>Where:</p>
    <p>Capital Employed = Total Assets &minus; Current Liabilities</p>
    <p>or</p>
    <p>Capital Employed = Equity + Long-Term Debt</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>EBIT (Operating Profit) = ₹200 crore<br />
    Capital Employed = ₹1,000 crore</p>
    <p>ROCE = 200 &divide; 1000 = <strong>20%</strong></p>
    <p>This means the company generates <strong>₹20 of operating profit for every ₹100 of capital employed in the business</strong>.</p>
    <p>Investors often prefer companies that maintain <strong>ROCE above 15&ndash;20% over long periods</strong>, as this indicates efficient capital allocation.</p>
    <p>For example, companies like Asian Paints have historically maintained strong ROCE because their brand strength and distribution network allow them to generate high profits relative to the capital invested.</p>
    <img src="/fundamental-analysis/image28.png" alt="Return on Capital Employed" style={imgStyle} />
    <p className="img-caption">(A snippet from Eternal (Zomato) FY 2024&ndash;2025 Annual Report, showing ROCE)</p>

    <hr className="chapter-rule" />
    <h3>Why ROCE Is Often Preferred Over ROE</h3>
    <p>ROE can sometimes appear artificially high if a company uses large amounts of debt.</p>
    <p>For example, if a company borrows heavily and reduces the amount of equity required, the ROE calculation may look stronger.</p>
    <p>ROCE avoids this distortion because it evaluates returns on <strong>total capital</strong>, not just equity.</p>
    <p>For this reason, many long-term investors consider ROCE one of the most reliable indicators of business quality.</p>

    <hr className="chapter-rule" />
    <h3>Asset Turnover Ratio &mdash; Efficiency of Asset Usage</h3>
    <p>While ROE and ROCE measure profit relative to capital, another useful metric evaluates how efficiently the company uses its assets to generate revenue.</p>
    <p>This metric is called the <strong>Asset Turnover Ratio</strong>.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Asset Turnover = Revenue &divide; Total Assets</strong></p>
    <p>This ratio shows how much revenue the company generates for every rupee invested in assets.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Revenue = ₹2,000 crore<br />
    Total Assets = ₹1,000 crore</p>
    <p>Asset Turnover = 2000 &divide; 1000 = <strong>2</strong></p>
    <p>This means the company generates <strong>₹2 of revenue for every ₹1 invested in assets</strong>.</p>
    <p>Higher asset turnover indicates that the company uses its assets efficiently to generate sales.</p>
    <img src="/fundamental-analysis/image21.png" alt="Asset Turnover Ratio" style={imgStyle} />
    <p className="img-caption">(A snippet from HUL FY 2024&ndash;2025 Annual Report, showing ROCE)</p>

    <hr className="chapter-rule" />
    <h3>Asset Turnover Across Industries</h3>
    <p>Asset turnover varies significantly across industries.</p>
    <p>For example:</p>
    <ul className="pl-6">
      <li>Retail businesses typically have high asset turnover because they sell large volumes of products.</li>
      <li>Manufacturing companies may have lower asset turnover due to heavy investment in factories and machinery.</li>
      <li>Technology companies often operate with relatively low physical assets.</li>
    </ul>
    <p>For instance, IT services companies such as Infosys rely more on human capital and technology rather than large physical assets.</p>
    <p>Because of these differences, asset turnover should be compared primarily among companies within the <strong>same industry</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Combining ROCE and Asset Turnover</h3>
    <p>One useful insight for investors is that <strong>ROCE is influenced by both profit margins and asset turnover</strong>.</p>
    <p>In simple terms:</p>
    <p>High ROCE can result from:</p>
    <ul className="pl-6">
      <li>high profit margins</li>
      <li>efficient asset utilization</li>
      <li>or a combination of both</li>
    </ul>
    <p>For example:</p>
    <p>A luxury brand may generate high ROCE through strong margins.<br />
    A retail chain may generate high ROCE through rapid asset turnover.</p>
    <p>Both models can create successful businesses, but they operate in very different ways.</p>

    <hr className="chapter-rule" />
    <h3>Why Return Ratios Matter</h3>
    <p>Return ratios help investors identify companies that generate strong profits without requiring excessive capital.</p>
    <p>Businesses that consistently maintain high ROE and ROCE often possess:</p>
    <ul className="pl-6">
      <li>strong competitive advantages</li>
      <li>efficient management</li>
      <li>scalable business models</li>
    </ul>
    <p>Such companies can reinvest profits at high returns, allowing shareholder wealth to compound over long periods.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Return ratios help us evaluate <strong>how efficiently companies generate profit from their capital</strong>.</p>
    <p>However, investors must also assess the <strong>financial risk of the business</strong>, particularly its debt levels.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Financial Strength Ratios &mdash; Understanding Debt, Liquidity and Balance Sheet Risk.</strong></p>
  </>
);

const ChapterTen = () => (
  <>
    <p>In the previous chapter, we explored return ratios such as <strong>ROE, ROCE and Asset Turnover</strong>, which help investors understand how efficiently a company generates profits from the capital it uses.</p>
    <p>However, profitability and efficiency alone are not enough.</p>
    <p>A company may generate strong returns but still face significant financial risk if it relies heavily on debt or struggles to meet its short-term obligations.</p>
    <p>This is why investors must also evaluate the <strong>financial strength of the balance sheet</strong>.</p>
    <p>Financial strength ratios help answer several important questions:</p>
    <ul className="pl-6">
      <li>How much debt does the company carry?</li>
      <li>Can the company comfortably pay its interest obligations?</li>
      <li>Does the company have enough liquidity to manage its short-term liabilities?</li>
    </ul>
    <p>These metrics help investors assess the <strong>financial resilience of a business</strong>, especially during economic downturns.</p>

    <hr className="chapter-rule" />
    <h3>Debt-to-Equity Ratio &mdash; Measuring Financial Leverage</h3>
    <p>The <strong>Debt-to-Equity Ratio (D/E)</strong> measures the proportion of debt used to finance the company relative to shareholder equity.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Debt-to-Equity Ratio = Total Debt &divide; Shareholders&apos; Equity</strong></p>
    <p>This ratio indicates how much the company relies on borrowed money compared to the capital invested by shareholders.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Total Debt = ₹500 crore<br />
    Shareholders&apos; Equity = ₹1,000 crore</p>
    <p>Debt-to-Equity Ratio = 500 &divide; 1000 = <strong>0.5</strong></p>
    <p>This means the company uses <strong>₹0.50 of debt for every ₹1 of shareholder capital</strong>.</p>
    <p>Lower debt-to-equity ratios generally indicate a more conservative balance sheet.</p>
    <p>However, acceptable levels of debt vary across industries.</p>
    <p>For example, capital-intensive sectors such as infrastructure or utilities may naturally carry higher debt levels, while asset-light businesses often operate with minimal borrowing. So, this ratio has to be compared with peers.</p>
    <img src="/fundamental-analysis/image17.png" alt="Debt Equity Ratio" style={imgStyle} />
    <p className="img-caption">(A snippet from Asian Paints FY 2024&ndash;2025 Annual Report, showing Debt Equity Ratio)</p>

    <hr className="chapter-rule" />
    <h3>Interest Coverage Ratio &mdash; Ability to Service Debt</h3>
    <p>While the debt-to-equity ratio shows how much debt a company has, the <strong>Interest Coverage Ratio</strong> measures whether the company can comfortably service that debt.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Interest Coverage Ratio = EBIT &divide; Interest Expense</strong></p>
    <p>This ratio shows how many times the company&apos;s operating profit covers its interest obligations.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>EBIT = ₹200 crore<br />
    Interest Expense = ₹40 crore</p>
    <p>Interest Coverage Ratio = 200 &divide; 40 = <strong>5</strong></p>
    <p>This means the company earns <strong>five times its interest obligations</strong>, providing a comfortable buffer for servicing its debt.</p>
    <p>A higher interest coverage ratio indicates stronger financial stability.</p>
    <p>If the ratio falls too low, the company may struggle to meet its interest payments during periods of declining profits.</p>
    <img src="/fundamental-analysis/image25.png" alt="Interest Coverage Ratio" style={imgStyle} />
    <p className="img-caption">(A snippet from Asian Paints FY 2024&ndash;2025 Annual Report, showing Interest Coverage Ratio)</p>

    <hr className="chapter-rule" />
    <h3>Current Ratio &mdash; Short-Term Liquidity</h3>
    <p>The <strong>Current Ratio</strong> measures a company&apos;s ability to meet its short-term obligations using its short-term assets.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Current Ratio = Current Assets &divide; Current Liabilities</strong></p>
    <p>Current assets include:</p>
    <ul className="pl-6">
      <li>cash and cash equivalents</li>
      <li>accounts receivable</li>
      <li>inventory</li>
      <li>short-term investments</li>
    </ul>
    <p>Current liabilities include:</p>
    <ul className="pl-6">
      <li>short-term borrowings</li>
      <li>accounts payable</li>
      <li>short-term obligations</li>
    </ul>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Current Assets = ₹600 crore<br />
    Current Liabilities = ₹400 crore</p>
    <p>Current Ratio = 600 &divide; 400 = <strong>1.5</strong></p>
    <p>This means the company has <strong>₹1.50 of short-term assets for every ₹1 of short-term liabilities</strong>, suggesting a comfortable liquidity position.</p>
    <p>A current ratio above 1 generally indicates that the company can meet its short-term obligations.</p>
    <p>However, excessively high current ratios may also indicate inefficient use of capital, such as excessive idle cash or inventory.</p>
    <img src="/fundamental-analysis/image45.png" alt="Current Ratio" style={imgStyle} />
    <p className="img-caption">(A snippet from Asian Paints FY 2024&ndash;2025 Annual Report, showing Current Ratio)</p>

    <hr className="chapter-rule" />
    <h3>Why Balance Sheet Strength Matters</h3>
    <p>Strong financial performance during favorable economic conditions does not guarantee resilience during downturns.</p>
    <p>Companies with weak balance sheets may face significant challenges when:</p>
    <ul className="pl-6">
      <li>economic conditions deteriorate</li>
      <li>revenues decline</li>
      <li>interest rates rise</li>
      <li>credit markets tighten</li>
    </ul>
    <p>Businesses with manageable debt levels and strong liquidity are better positioned to navigate difficult periods.</p>
    <p>For example, well-managed financial institutions such as HDFC Bank are often recognized for maintaining disciplined balance sheet management and prudent risk controls.</p>
    <p>Such financial strength allows companies to continue growing even during uncertain economic environments.</p>

    <hr className="chapter-rule" />
    <h3>Financial Strength Is About Stability</h3>
    <p>Financial strength ratios help investors evaluate the <strong>stability and resilience of a company&apos;s financial structure</strong>.</p>
    <p>Healthy companies generally exhibit:</p>
    <ul className="pl-6">
      <li>manageable debt levels</li>
      <li>strong ability to service interest obligations</li>
      <li>sufficient liquidity to meet short-term liabilities</li>
    </ul>
    <p>These characteristics reduce financial risk and provide greater flexibility for long-term growth.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>So far, we have examined:</p>
    <ul className="pl-6">
      <li>profitability ratios</li>
      <li>return ratios</li>
      <li>financial strength ratios</li>
    </ul>
    <p>The next important step is understanding <strong>how markets value businesses</strong>.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Valuation Ratios &mdash; Understanding P/E, P/B and EV/EBITDA.</strong></p>
    <p>These metrics help investors evaluate whether a stock appears expensive, fairly valued or potentially undervalued relative to its fundamentals.</p>
  </>
);
const ChapterEleven = () => (
  <>
    <p>So far, we have learned how to analyze a company&apos;s <strong>profitability, efficiency and financial strength</strong>.</p>
    <p>However, even a high-quality business may not always be a good investment.</p>
    <p>Why?</p>
    <p>Because <strong>the price you pay matters</strong>.</p>
    <p>A great company purchased at an excessively high price may deliver poor returns, while a good company purchased at a reasonable valuation may provide attractive long-term gains.</p>
    <p>This is why investors study <strong>valuation ratios</strong>, which help compare a company&apos;s stock price with its financial performance.</p>
    <p>Valuation ratios help answer an important question:</p>
    <p><strong>Is the stock price reasonable relative to the company&apos;s earnings, assets and cash flows?</strong></p>

    <hr className="chapter-rule" />
    <h3>Price-to-Earnings (P/E) Ratio</h3>
    <p>The <strong>Price-to-Earnings (P/E) ratio</strong> is one of the most widely used valuation metrics.</p>
    <p>It measures how much investors are willing to pay for each rupee of a company&apos;s earnings.</p>
    <p><strong>Formula</strong></p>
    <p><strong>P/E Ratio = Share Price &divide; Earnings Per Share (EPS)</strong></p>
    <p>or</p>
    <p><strong>P/E Ratio = Market Capitalization &divide; Net Profit</strong></p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Share Price = ₹500<br />
    Earnings Per Share (EPS) = ₹25</p>
    <p>P/E Ratio = 500 &divide; 25 = <strong>20</strong></p>
    <p>This means investors are willing to pay <strong>₹20 for every ₹1 of earnings</strong> generated by the company.</p>
    <p>Higher P/E ratios may indicate:</p>
    <ul className="pl-6">
      <li>strong growth expectations</li>
      <li>high-quality business models</li>
      <li>strong investor confidence</li>
    </ul>
    <p>However, excessively high P/E ratios may also indicate <strong>overvaluation</strong>.</p>
    <p>For example, companies with strong long-term growth histories, such as Asian Paints, have often traded at higher P/E multiples because investors expect consistent earnings growth.</p>
    <img src="/fundamental-analysis/image9.png" alt="P/E Ratio comparison" style={imgStyle} />
    <p className="img-caption">(A snippet from Screener highlighting the P/E ratio of Asian Paints and comparing it with its peer companies.)</p>

    <hr className="chapter-rule" />
    <h3>Price-to-Book (P/B) Ratio</h3>
    <p>The <strong>Price-to-Book (P/B) ratio</strong> compares a company&apos;s market value with the value of its net assets (Total Assets &ndash; Total Liabilities).</p>
    <p><strong>Formula</strong></p>
    <p><strong>P/B Ratio = Market Price per Share &divide; Book Value per Share</strong></p>
    <p>or</p>
    <p><strong>P/B Ratio = Market Capitalization &divide; Shareholders&apos; Equity</strong></p>
    <p>Book value represents the net assets of the company after deducting liabilities.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Share Price = ₹400<br />
    Book Value per Share = ₹200</p>
    <p>P/B Ratio = 400 &divide; 200 = <strong>2</strong></p>
    <p>This means the market values the company at <strong>twice the value of its net assets</strong>.</p>
    <p>The P/B ratio is particularly useful for evaluating financial institutions such as banks and insurance companies.</p>
    <p>For example, investors often analyze the P/B ratio of banks like HDFC Bank because the value of their assets and liabilities plays a central role in their business model.</p>
    <img src="/fundamental-analysis/image10.png" alt="P/B Ratio" style={imgStyle} />
    <p className="img-caption">(A snippet from moneycontrol highlighting the P/B ratio of Asian Paints)</p>

    <hr className="chapter-rule" />
    <h3>EV/EBITDA &mdash; Enterprise Value Comparison</h3>
    <p>Another commonly used valuation metric is <strong>EV/EBITDA</strong>.</p>
    <p>This ratio compares the company&apos;s total value to its EBITDA.</p>
    <p>Enterprise Value (EV) represents the total value of the company, including both equity and debt.</p>
    <p><strong>Formula</strong></p>
    <p><strong>EV = Market Capitalization + Debt &minus; Cash</strong></p>
    <p><strong>EV/EBITDA = Enterprise Value &divide; EBITDA</strong></p>
    <p>This metric is useful because it evaluates the business <strong>independent of its capital structure</strong>.</p>
    <p>In other words, it compares companies regardless of whether they are financed primarily through debt or equity.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Market Capitalization = ₹10,000 crore<br />
    Debt = ₹2,000 crore<br />
    Cash = ₹500 crore</p>
    <p>Enterprise Value = 10,000 + 2,000 &minus; 500 = <strong>₹11,500 crore</strong></p>
    <p>If EBITDA = ₹1,150 crore</p>
    <p>EV/EBITDA = 11,500 &divide; 1,150 = <strong>10</strong></p>
    <p>This means investors value the business at <strong>10 times its operating earnings</strong>.</p>
    <p>EV/EBITDA is commonly used when comparing companies within capital-intensive industries.</p>
    <img src="/fundamental-analysis/image12.png" alt="EV/EBITDA Ratio" style={imgStyle} />
    <p className="img-caption">(A snippet from Investing.com highlighting the EV/EBITDA ratio for Asian Paints.)</p>

    <p>Important Note - If you do not find any of the ratios covered in this module, they can easily be calculated using the market price and the financial information available in the company&apos;s annual report. In fact, it is a good practice to calculate these ratios yourself for the stocks you are planning to invest in. Doing so builds confidence in your analysis, especially since these ratios can sometimes vary slightly across different financial websites.</p>
    <p>When the ratios are taken directly from the annual report, recalculation is usually unnecessary unless the ratio depends on the market price. In such cases, recalculating the ratio using the latest market price will provide the most up-to-date figures.</p>

    <hr className="chapter-rule" />
    <h3>Valuation Must Be Viewed in Context</h3>
    <p>Valuation ratios should never be interpreted in isolation.</p>
    <p>Several factors influence what constitutes a reasonable valuation:</p>
    <ul className="pl-6">
      <li>growth rate of the company</li>
      <li>industry characteristics</li>
      <li>competitive advantages</li>
      <li>future earnings potential</li>
    </ul>
    <p>For example, fast-growing companies may trade at higher valuations because investors expect their profits to increase significantly in the future.</p>
    <p>On the other hand, slow-growing or cyclical companies often trade at lower valuations.</p>

    <hr className="chapter-rule" />
    <h3>Growth and Valuation Go Together</h3>
    <p>A common mistake investors make is assuming that a <strong>low P/E automatically means a stock is cheap</strong>.</p>
    <p>In reality, low valuations may reflect:</p>
    <ul className="pl-6">
      <li>weak growth prospects</li>
      <li>declining industries</li>
      <li>financial risk</li>
      <li>structural challenges in the business</li>
    </ul>
    <p>Similarly, high valuations are sometimes justified when companies possess:</p>
    <ul className="pl-6">
      <li>strong competitive advantages</li>
      <li>high return on capital</li>
      <li>long growth runways</li>
    </ul>
    <p>This is why valuation should always be considered alongside <strong>business quality and growth potential</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Valuation and Long-Term Returns</h3>
    <p>Over long periods, investment returns are typically influenced by three factors:</p>
    <ul className="pl-6">
      <li><strong>earnings growth</strong></li>
      <li><strong>dividends received</strong></li>
      <li><strong>changes in valuation multiples</strong></li>
    </ul>
    <p>Even strong earnings growth may produce modest returns if the stock was purchased at an extremely high valuation.</p>
    <p>This is why experienced investors emphasize both <strong>business quality and valuation discipline</strong>.</p>
  </>
);

const ChapterTwelve = () => (
  <>
    <p>After analyzing a company&apos;s profitability, capital efficiency, financial strength and valuation, the next question investors must ask is:</p>
    <p><strong>Is the business growing?</strong></p>
    <p>Over long periods, stock market returns are largely driven by the <strong>growth of the underlying business</strong>.</p>
    <p>If a company steadily increases its revenue, profits and earnings over many years, the value of the business tends to rise as well. As a result, the stock price often follows this growth over time.</p>
    <p>This is why long-term investors focus heavily on identifying companies that can <strong>sustain growth for extended periods</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Why Growth Matters</h3>
    <p>To understand the importance of growth, consider a simple example.</p>
    <p>Suppose a company earns ₹100 crore in profit today.</p>
    <p>If profits grow at <strong>15% annually</strong>, the profit will reach approximately:</p>
    <ul className="pl-6">
      <li>₹201 crore in 5 years</li>
      <li>₹405 crore in 10 years</li>
    </ul>
    <p>In other words, profits would <strong>quadruple in about a decade</strong>.</p>
    <p>If the market continues to value the business at a similar multiple, the stock price will tend to reflect this expansion.</p>
    <p>This is why companies that sustain strong growth for long periods often create significant wealth for shareholders.</p>

    <hr className="chapter-rule" />
    <h3>Revenue Growth &mdash; Expanding the Business</h3>
    <p>The first indicator of business expansion is <strong>revenue growth</strong>.</p>
    <p>Revenue growth reflects whether the company is:</p>
    <ul className="pl-6">
      <li>attracting more customers</li>
      <li>increasing market share</li>
      <li>expanding into new markets</li>
      <li>launching successful products</li>
    </ul>
    <p>Revenue growth is often measured using <strong>Compound Annual Growth Rate (CAGR)</strong>.</p>
    <p><strong>Formula</strong></p>
    <p><strong>Revenue CAGR = (Ending Revenue &divide; Starting Revenue) ^ (1/n) &minus; 1</strong></p>
    <p>where n represents the number of years.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company&apos;s revenue grows from:</p>
    <p>₹1,000 crore &rarr; ₹2,000 crore over 5 years.</p>
    <p>Revenue CAGR would be approximately <strong>14.9%</strong>.</p>
    <p>Consistent revenue growth over long periods often indicates a strong and expanding business.</p>
    <p>For example, companies such as Titan Company expanded their revenue significantly over time through store expansion, brand strength and rising consumer demand in the organized jewelry market.</p>
    <p>Similarly, quick-service restaurant chains like Jubilant FoodWorks (largest franchisee for Domino&apos;s Pizza in India) grew revenues by expanding store networks and benefiting from rising urban consumption.</p>
    <img src="/fundamental-analysis/image3.png" alt="Revenue CAGR" style={imgStyle} />
    <p className="img-caption">(A snippet from the Asian Paints FY 2024&ndash;25 Annual Report. Although the 5-year CAGR is 11.6%, the year-on-year growth has declined by 5.4%, indicating a potential slowdown that may warrant closer attention.)</p>

    <hr className="chapter-rule" />
    <h3>Profit Growth &mdash; Turning Sales into Earnings</h3>
    <p>While revenue growth is important, profit growth is often even more significant.</p>
    <p>Profit growth shows whether the company is able to convert expanding sales into increasing earnings.</p>
    <p>In many cases, profits may grow faster than revenue due to <strong>operating leverage</strong>.</p>
    <p>Operating leverage occurs when a company&apos;s fixed costs remain relatively stable while revenue increases. As a result, additional revenue contributes more directly to profits.</p>

    <p><strong>Example</strong></p>
    <p>Suppose a company reports:</p>
    <p>Revenue growth = 10% annually<br />
    Profit growth = 18% annually</p>
    <p>This suggests that the company is becoming more efficient as it grows, allowing profits to expand faster than sales.</p>
    <p>For example, technology services companies such as Infosys have historically benefited from operating leverage as revenue growth allowed them to spread fixed costs across larger client projects.</p>
    <p>Similarly, consumer companies like Hindustan Unilever often improve profitability over time through better supply chains, scale advantages and premium product launches.</p>
    <img src="/fundamental-analysis/image7.png" alt="PAT growth" style={imgStyle} />
    <p className="img-caption">(A snippet from the Asian Paints FY 2024&ndash;25 Annual Report, the highlighted figure represents PAT (Profit After Tax), while the previous image shows Revenue. Although revenue has declined by 5.4% year-on-year, PAT has fallen significantly more. Such a sharper decline in profits relative to revenue suggests margin compression, indicating rising costs or reduced operational efficiency.)</p>

    <hr className="chapter-rule" />
    <h3>Earnings Per Share (EPS) Growth</h3>
    <p>Investors also monitor <strong>Earnings Per Share (EPS)</strong> growth.</p>
    <p>EPS represents the profit attributable to each individual share.</p>
    <p><strong>Formula</strong></p>
    <p><strong>EPS = Net Profit &divide; Total Number of Shares</strong></p>
    <p>EPS growth is important because it reflects the actual earnings available to shareholders.</p>
    <p>If a company increases profits but continuously issues new shares, the benefit to existing shareholders may be diluted.</p>
    <p>Therefore, investors often track <strong>EPS CAGR</strong> over several years to assess the company&apos;s true earnings growth.</p>

    <p><strong>Example</strong></p>
    <p>Consider a company that reports:</p>
    <p>Net Profit = ₹1,000 crore<br />
    Shares Outstanding = 100 crore</p>
    <p>EPS = ₹10</p>
    <p>If profit grows to ₹1,500 crore but the company issues additional shares and total shares become 150 crore:</p>
    <p>New EPS = ₹10</p>
    <p>Despite profit growth, <strong>shareholder earnings did not increase</strong>.</p>
    <p>This is why EPS growth matters more than profit growth alone.</p>
    <p>Companies such as HDFC Bank have historically demonstrated consistent EPS growth due to disciplined expansion of their lending operations.</p>
    <img src="/fundamental-analysis/image19.png" alt="EPS growth" style={imgStyle} />
    <p className="img-caption">(A snippet from the Asian Paints FY 2024&ndash;25 Annual Report, highlighting the EPS growth)</p>

    <hr className="chapter-rule" />
    <h3>Sustainable vs Temporary Growth</h3>
    <p>Not all growth is equally valuable.</p>
    <p>Some companies experience temporary growth due to:</p>
    <ul className="pl-6">
      <li>short-term industry cycles</li>
      <li>one-time demand spikes</li>
      <li>acquisitions</li>
      <li>favorable commodity prices</li>
    </ul>
    <p>For example, commodity companies such as Tata Steel may experience periods of strong profit growth during favorable steel price cycles. However, such growth may not always be sustainable because commodity prices fluctuate.</p>
    <p>Sustainable growth is usually supported by:</p>
    <ul className="pl-6">
      <li>strong competitive advantages</li>
      <li>expanding industries</li>
      <li>scalable business models</li>
      <li>disciplined capital allocation</li>
    </ul>
    <p>Businesses with durable growth drivers tend to create more predictable long-term value.</p>

    <hr className="chapter-rule" />
    <h3>The Power of Compounding</h3>
    <p>Growth becomes particularly powerful when sustained over long periods due to the effects of compounding.</p>
    <p>Consider how profits grow over 10 years at different growth rates:</p>
    <p>Even small differences in growth rates can lead to dramatically different outcomes over long investment horizons.</p>
    <p>This is why identifying companies capable of sustaining high growth for long periods can significantly influence long-term investment returns.</p>

    <hr className="chapter-rule" />
    <h3>Growth and Wealth Creation</h3>
    <p>Some of the most successful companies in the market have created substantial shareholder wealth by sustaining growth over decades.</p>
    <p>For example:</p>
    <ul className="pl-6">
      <li>Asian Paints expanded consistently through brand leadership and distribution strength.</li>
      <li>HDFC Bank grew steadily through disciplined lending and risk management.</li>
      <li>Titan Company benefited from the shift toward organized jewelry retail in India.</li>
    </ul>
    <p>Their ability to grow revenues and profits steadily allowed them to compound shareholder value over long periods.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>While growth is essential, investors must also evaluate <strong>how that growth is achieved</strong>.</p>
    <p>Not all growth is equally healthy or sustainable.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Quality of Growth &mdash; Understanding Whether Growth Is Sustainable and Efficient.</strong></p>
    <p>This chapter will help investors distinguish between <strong>strong, durable growth and temporary or low-quality expansion.</strong></p>
  </>
);

const ChapterThirteen = () => (
  <>
    <p>In the previous chapter, we explored why <strong>growth is the primary driver of long-term investment returns</strong>.</p>
    <p>However, not all growth creates value.</p>
    <p>Some companies grow rapidly but destroy shareholder wealth because that growth requires excessive capital, high debt or constant dilution. Other companies grow more slowly but generate high returns on capital and strong cash flows.</p>
    <p>For investors, the key question is therefore not just:</p>
    <p><strong>&ldquo;Is the company growing?&rdquo;</strong></p>
    <p>but rather:</p>
    <p><strong>&ldquo;Is the growth sustainable and efficient?&rdquo;</strong></p>
    <p>This is what investors refer to as <strong>quality of growth</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Organic Growth vs Acquisition Growth</h3>
    <p>One of the first things investors examine is <strong>how the company is achieving growth</strong>.</p>
    <p>Growth generally comes from two sources:</p>

    <h3>Organic Growth</h3>
    <p>Organic growth occurs when a company expands its business naturally through:</p>
    <ul className="pl-6">
      <li>increasing product sales</li>
      <li>launching new products</li>
      <li>expanding into new markets</li>
      <li>improving distribution networks</li>
    </ul>
    <p>Organic growth is usually considered the <strong>most sustainable form of expansion</strong> because it reflects genuine demand for the company&apos;s products or services.</p>
    <p>For example, companies such as Asian Paints have historically grown organically by expanding their distribution network and strengthening brand presence across India.</p>

    <h3>Acquisition Growth</h3>
    <p>Companies may also grow by acquiring other businesses.</p>
    <p>Acquisitions can accelerate growth, but they introduce additional risks such as:</p>
    <ul className="pl-6">
      <li>integration challenges</li>
      <li>excessive debt</li>
      <li>overpaying for acquisitions</li>
    </ul>
    <p>For example, technology companies sometimes acquire smaller firms to gain access to new capabilities or customer bases.</p>
    <p>Acquisition-driven growth can be valuable if managed carefully, but investors often examine whether the company can <strong>sustain growth without relying heavily on acquisitions</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Margin Expansion &mdash; Improving Business Economics</h3>
    <p>Another important sign of high-quality growth is <strong>margin expansion</strong>.</p>
    <p>Margin expansion occurs when a company&apos;s profit margins increase over time as the business scales.</p>
    <p>This often happens because:</p>
    <ul className="pl-6">
      <li>fixed costs are spread across larger revenue</li>
      <li>supply chains become more efficient</li>
      <li>stronger brands allow premium pricing</li>
    </ul>
    <p>For example, consumer companies such as Hindustan Unilever have historically improved margins through strong brand portfolios and operational efficiencies.</p>
    <p>Margin expansion often signals that the company is strengthening its competitive position.</p>

    <hr className="chapter-rule" />
    <h3>Capital Efficiency &mdash; Growth Without Excessive Investment</h3>
    <p>High-quality growth often comes from companies that can expand <strong>without requiring large amounts of additional capital</strong>.</p>
    <p>This concept is closely related to the <strong>return ratios</strong> we discussed earlier, such as ROCE and ROE.</p>
    <p>For example:</p>
    <p>If a company invests ₹100 crore and generates ₹25 crore in profit annually, it produces a <strong>25% return on capital</strong>.</p>
    <p>Companies that consistently reinvest profits at high returns can grow rapidly while maintaining strong financial health.</p>
    <p>Technology and asset-light businesses often benefit from this advantage.</p>
    <p>For instance, IT services companies like Infosys can scale their services globally without requiring massive physical infrastructure investments.</p>

    <hr className="chapter-rule" />
    <h3>Cash Flow Support &mdash; Profits Backed by Cash</h3>
    <p>Another key indicator of growth quality is whether profits are supported by strong cash flows.</p>
    <p>A company may report strong earnings growth, but if operating cash flow remains weak, the growth may not be sustainable.</p>
    <p>Healthy growth usually demonstrates:</p>
    <ul className="pl-6">
      <li>rising operating cash flow</li>
      <li>consistent free cash flow generation</li>
      <li>limited reliance on borrowing</li>
    </ul>
    <p>Companies that generate strong cash flows often have greater flexibility to invest in expansion while maintaining financial stability.</p>

    <hr className="chapter-rule" />
    <h3>Dilution &mdash; Growth That Reduces Shareholder Ownership</h3>
    <p>Another important factor to watch is <strong>share dilution</strong>.</p>
    <p>Companies sometimes issue new shares to raise capital.</p>
    <p>While raising capital may help finance growth, excessive share issuance can dilute existing shareholders&apos; ownership.</p>
    <p>For example:</p>
    <p>If a company doubles its profits but also doubles its number of shares, the <strong>earnings per share may remain unchanged</strong>.</p>
    <p>This means shareholders may not benefit from the company&apos;s overall growth.</p>
    <p>This is why investors often monitor <strong>EPS growth alongside profit growth</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Sustainable Growth Drivers</h3>
    <p>High-quality growth is usually supported by strong structural drivers.</p>
    <p>These may include:</p>
    <ul className="pl-6">
      <li>expanding industries</li>
      <li>rising consumer demand</li>
      <li>demographic shifts</li>
      <li>technological adoption</li>
      <li>competitive advantages</li>
    </ul>
    <p>For example, the growth of organized retail and rising incomes helped companies such as Titan Company expand their business significantly over time.</p>
    <p>Businesses supported by long-term industry trends often sustain growth for longer periods.</p>

    <hr className="chapter-rule" />
    <h3>Signs of Weak Growth Quality</h3>
    <p>Not all growth is sustainable.</p>
    <p>Some warning signs include:</p>
    <ul className="pl-6">
      <li>rapid growth accompanied by rising debt</li>
      <li>declining profit margins despite rising revenue</li>
      <li>weak cash flow generation</li>
      <li>excessive acquisitions</li>
      <li>continuous share dilution</li>
    </ul>
    <p>Such patterns may indicate that the company&apos;s growth is <strong>less stable than it appears</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Why Quality of Growth Matters</h3>
    <p>Investors who focus only on growth rates may overlook the underlying quality of that growth.</p>
    <p>Two companies may both grow profits at 15% annually, but the one with:</p>
    <ul className="pl-6">
      <li>higher return on capital</li>
      <li>stronger cash flows</li>
      <li>minimal debt</li>
    </ul>
    <p>is likely to create far greater long-term value.</p>
    <p>High-quality growth allows companies to <strong>compound capital efficiently for many years</strong>.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>After understanding growth and the quality of growth, the next step is examining one of the most powerful concepts in investing:</p>
    <p><strong>Competitive Advantage</strong>, often referred to as <strong>economic moats</strong>.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Economic Moats &mdash; Why Some Companies Sustain Growth for Decades While Others Cannot.</strong></p>
    <p>Understanding moats helps investors identify businesses capable of maintaining profitability and growth over long periods.</p>
  </>
);
const ChapterFourteen = () => (
  <>
    <p>In the previous chapters, we explored how businesses grow and how investors evaluate the <strong>quality of that growth</strong>.</p>
    <p>However, an important question still remains:</p>
    <p><strong>What allows some companies to grow consistently for decades while others struggle to maintain profitability?</strong></p>
    <p>The answer often lies in something called a <strong>competitive advantage</strong>, commonly referred to as an <strong>economic moat</strong>.</p>
    <p>The term &ldquo;moat&rdquo; comes from medieval castles, where a moat protected the castle from attackers. In business, an economic moat refers to structural advantages that protect a company from competitors.</p>
    <p>Companies with strong moats can defend their market position, maintain profitability and continue growing even as competition increases.</p>
    <img src="/fundamental-analysis/image16.png" alt="Economic moats concept" style={imgStyle} />

    <hr className="chapter-rule" />
    <h3>Why Economic Moats Matter</h3>
    <p>Markets are naturally competitive.</p>
    <p>When a company becomes profitable, competitors often try to enter the market and capture some of that opportunity.</p>
    <p>Without a competitive advantage, profits tend to decline over time because:</p>
    <ul className="pl-6">
      <li>new competitors enter the market</li>
      <li>prices are driven lower</li>
      <li>margins shrink</li>
    </ul>
    <p>Companies with economic moats, however, are better able to <strong>defend their market position</strong>.</p>
    <p>This allows them to maintain:</p>
    <ul className="pl-6">
      <li>strong profit margins</li>
      <li>high returns on capital</li>
      <li>stable growth over long periods</li>
    </ul>
    <p>These characteristics are often associated with some of the most successful long-term investments.</p>

    <hr className="chapter-rule" />
    <h3>Types of Economic Moats</h3>
    <p>Economic moats can arise from several different sources.</p>
    <p>Understanding these sources helps investors identify companies that possess durable competitive advantages.</p>

    <h3>Brand Power</h3>
    <p>A strong brand can act as a powerful competitive advantage.</p>
    <p>When consumers trust a brand, they are often willing to pay a premium for its products, even when alternatives are available.</p>
    <p>Strong brands create customer loyalty and reduce price sensitivity.</p>
    <p>For example, companies like Nestl&eacute; India benefit from strong brand recognition across multiple food categories. Products such as packaged foods and beverages have developed deep consumer trust over many decades.</p>
    <p>Because of this brand strength, competitors often find it difficult to capture significant market share.</p>
    <img src="/fundamental-analysis/image13.png" alt="Brand power example" style={imgStyle} />
    <p className="img-caption">(The Whole Truth stands as another strong example of how powerful branding can shape consumer perception, where clarity of purpose, honest communication and a distinct identity create loyalty far beyond the product itself.)</p>

    <h3>Network Effects</h3>
    <p>Network effects occur when the value of a product or service increases as more people use it.</p>
    <p>In such cases, the company becomes stronger as its user base grows.</p>
    <p>For example, payment platforms such as Paytm benefit from network effects. As more users and merchants join the platform, it becomes increasingly convenient for others to participate.</p>
    <p>Network effects can create powerful barriers to entry because new competitors struggle to build a comparable network.</p>
    <img src="/fundamental-analysis/image1.png" alt="Network effects example" style={imgStyle} />

    <h3>Switching Costs</h3>
    <p>Switching costs arise when it becomes inconvenient, costly or risky for customers to change from one provider to another.</p>
    <p>High switching costs can lead to strong customer retention.</p>
    <p>For example, enterprise software providers such as Tata Consultancy Services often maintain long-term relationships with clients because switching to a different technology partner can disrupt operations and require significant time and effort.</p>
    <p>This makes it difficult for competitors to replace established service providers.</p>
    <img src="/fundamental-analysis/image6.png" alt="Switching costs example" style={imgStyle} />

    <h3>Cost Advantage</h3>
    <p>Some companies benefit from structural cost advantages that allow them to operate more efficiently than competitors.</p>
    <p>These advantages may arise from:</p>
    <ul className="pl-6">
      <li>economies of scale</li>
      <li>efficient supply chains</li>
      <li>access to low-cost resources</li>
      <li>superior manufacturing capabilities</li>
    </ul>
    <p>For example, companies such as DMart have developed strong cost advantages through disciplined inventory management, efficient store operations and a focus on everyday low prices.</p>
    <p>Cost advantages make it difficult for competitors to match pricing while maintaining profitability.</p>
    <img src="/fundamental-analysis/image5.png" alt="Cost advantage example" style={imgStyle} />

    <h3>Regulatory Advantages</h3>
    <p>In certain industries, regulations can create barriers to entry that protect existing companies.</p>
    <p>These barriers may include:</p>
    <ul className="pl-6">
      <li>licensing requirements</li>
      <li>strict compliance standards</li>
      <li>limited number of operating permits</li>
    </ul>
    <p>For example, companies such as Coal India operate in industries where regulatory structures and resource ownership create high entry barriers.</p>
    <p>Such environments can limit competition and allow established players to maintain strong market positions.</p>
    <img src="/fundamental-analysis/image11.png" alt="Regulatory advantages example" style={imgStyle} />

    <hr className="chapter-rule" />
    <h3>Moats and Long-Term Investing</h3>
    <p>Economic moats are one of the key reasons some companies generate strong returns for shareholders over long periods.</p>
    <p>Businesses with durable competitive advantages are more likely to:</p>
    <ul className="pl-6">
      <li>maintain pricing power</li>
      <li>defend market share</li>
      <li>sustain profitability</li>
      <li>reinvest capital at high returns</li>
    </ul>
    <p>This allows them to continue compounding value over many years.</p>
    <p>For investors, identifying companies with strong and durable moats is often one of the most important steps in fundamental analysis.</p>

    <hr className="chapter-rule" />
    <h3>Moats Can Strengthen or Erode Over Time</h3>
    <p>It is also important to recognize that economic moats are not permanent.</p>
    <p>Technological changes, shifting consumer preferences or new competitors can weaken previously strong advantages.</p>
    <p>For example, new technologies may disrupt existing business models, while changing market dynamics may reduce the strength of established brands.</p>
    <p>Investors must therefore continuously evaluate whether a company&apos;s competitive advantage remains intact.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Understanding economic moats helps investors identify businesses with durable competitive advantages.</p>
    <p>However, another equally important factor influences long-term success:</p>
    <p><strong>the industry in which the company operates.</strong></p>
    <p>Some industries naturally provide stronger growth opportunities and higher profitability than others.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Industry Structure &mdash; Understanding Why Some Industries Produce Better Investments Than Others.</strong></p>
  </>
);

const ChapterFifteen = () => (
  <>
    <p>In the previous chapter, we explored <strong>economic moats</strong> and how competitive advantages allow certain companies to sustain profitability over long periods.</p>
    <p>However, even the strongest company is influenced by the <strong>industry in which it operates</strong>.</p>
    <p>Some industries naturally support high profitability and long-term growth, while others are highly competitive, cyclical or capital intensive.</p>
    <p>Understanding industry structure helps investors answer an important question:</p>
    <p><strong>Is the company operating in an industry that supports long-term growth and profitability?</strong></p>
    <p>Even well-managed companies may struggle if the industry itself faces structural challenges.</p>

    <hr className="chapter-rule" />
    <h3>Industry Growth Matters</h3>
    <p>The long-term growth potential of an industry can significantly influence the opportunities available to companies within it.</p>
    <p>Industries that benefit from <strong>structural demand growth</strong> often provide more opportunities for companies to expand.</p>
    <p>For example, sectors such as pharmaceuticals have benefited from rising healthcare demand, aging populations and increasing medical spending.</p>
    <p>Companies like Sun Pharmaceutical Industries operate in an industry where long-term demand growth is supported by global healthcare needs.</p>
    <p>In contrast, industries facing declining demand or structural disruption may limit the growth potential of companies within them.</p>

    <hr className="chapter-rule" />
    <h3>Competitive Intensity</h3>
    <p>Another important aspect of industry structure is <strong>how intense competition is</strong>.</p>
    <p>Highly competitive industries often experience:</p>
    <ul className="pl-6">
      <li>price wars</li>
      <li>declining margins</li>
      <li>frequent new entrants</li>
    </ul>
    <p>When competition is intense and products are easily interchangeable, companies may struggle to maintain profitability.</p>
    <p>On the other hand, industries with fewer competitors and higher entry barriers often allow companies to maintain stronger margins.</p>
    <p>For example, airport infrastructure companies such as GMR Airports Infrastructure operate in an industry where large capital requirements and regulatory approvals limit the number of competitors.</p>
    <p>This creates a more stable competitive environment.</p>

    <hr className="chapter-rule" />
    <h3>Capital Intensity</h3>
    <p>Industries differ significantly in how much capital is required to operate and expand.</p>
    <p>Some sectors require substantial investment in physical infrastructure, machinery or technology.</p>
    <p>These <strong>capital-intensive industries</strong> include areas such as:</p>
    <ul className="pl-6">
      <li>power generation</li>
      <li>aviation</li>
      <li>telecommunications</li>
      <li>infrastructure</li>
    </ul>
    <p>For example, companies like NTPC require large investments in power plants and energy infrastructure.</p>
    <p>Because these industries require heavy capital expenditure, returns may fluctuate depending on demand cycles and regulatory conditions.</p>
    <p>In contrast, <strong>asset-light industries</strong> such as consulting, software services or digital platforms often require far less physical infrastructure.</p>
    <p>These businesses may scale more easily while maintaining strong returns on capital.</p>

    <hr className="chapter-rule" />
    <h3>Cyclical vs Structural Industries</h3>
    <p>Another important distinction in industry analysis is between <strong>cyclical industries</strong> and <strong>structural growth industries</strong>.</p>
    <p>Cyclical industries are closely tied to economic cycles. Their performance often rises and falls with broader economic activity.</p>
    <p>Examples include sectors such as metals, real estate and automobiles.</p>
    <p>For example, companies such as Maruti Suzuki India may experience fluctuations in demand depending on economic conditions, consumer spending and interest rates.</p>
    <p>Structural growth industries, on the other hand, benefit from long-term demand trends that persist across economic cycles.</p>
    <p>Industries driven by technological adoption, healthcare needs or digital infrastructure often demonstrate such structural growth.</p>
    <p>Understanding whether a company operates in a cyclical or structural industry helps investors set realistic expectations about growth stability.</p>

    <hr className="chapter-rule" />
    <h3>Market Leaders vs Fragmented Industries</h3>
    <p>Industry structure is also influenced by the number of competitors and the degree of market concentration.</p>
    <p>Some industries are dominated by a few large companies with significant market share.</p>
    <p>These <strong>market leaders</strong> often benefit from:</p>
    <ul className="pl-6">
      <li>strong distribution networks</li>
      <li>economies of scale</li>
      <li>brand recognition</li>
    </ul>
    <p>For example, companies such as Larsen &amp; Toubro hold strong positions in infrastructure and engineering projects due to their scale and technical expertise.</p>
    <p>Other industries may be highly fragmented, with many small competitors.</p>
    <p>Fragmented industries often experience intense competition, making it more difficult for individual companies to maintain strong margins.</p>

    <hr className="chapter-rule" />
    <h3>Entry Barriers</h3>
    <p>The ease with which new competitors can enter an industry plays a major role in determining long-term profitability.</p>
    <p>Industries with high entry barriers often maintain stronger profitability.</p>
    <p>Entry barriers may arise from:</p>
    <ul className="pl-6">
      <li>large capital requirements</li>
      <li>regulatory approvals</li>
      <li>technological expertise</li>
      <li>established distribution networks</li>
      <li>brand reputation</li>
    </ul>
    <p>For example, telecommunications companies such as Bharti Airtel operate in a sector where spectrum licensing, infrastructure costs and regulatory requirements create significant barriers to entry.</p>
    <p>These barriers limit the number of competitors and influence industry profitability.</p>

    <hr className="chapter-rule" />
    <h3>Why Industry Structure Matters for Investors</h3>
    <p>A company&apos;s success is influenced not only by its management and strategy but also by the <strong>structural characteristics of its industry</strong>.</p>
    <p>Industries with favorable structures often allow companies to:</p>
    <ul className="pl-6">
      <li>maintain stronger margins</li>
      <li>reinvest capital at attractive returns</li>
      <li>sustain growth over longer periods</li>
    </ul>
    <p>Conversely, industries characterized by intense competition or structural decline may limit even well-managed companies.</p>
    <p>For this reason, experienced investors often begin their analysis by understanding <strong>the industry before focusing on the individual company</strong>.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>After understanding industry dynamics and competitive advantages, the next important factor in fundamental analysis is evaluating <strong>the people running the business</strong>.</p>
    <p>Even companies operating in strong industries can perform poorly if management decisions are weak.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Management Quality &mdash; How Leadership and Capital Allocation Shape Long-Term Business Success.</strong></p>
  </>
);

const ChapterSixteen = () => (
  <>
    <p>So far in this module, we have explored the financial aspects of a business: profitability, growth, capital efficiency, competitive advantages and industry structure.</p>
    <p>However, there is another factor that can significantly influence a company&apos;s long-term success:</p>
    <p><strong>the quality of its management.</strong></p>
    <p>Even companies operating in attractive industries with strong competitive advantages can perform poorly if management makes poor decisions.</p>
    <p>Conversely, capable and disciplined leadership can transform businesses by allocating capital wisely, executing long-term strategies and maintaining strong governance.</p>
    <p>For investors, evaluating management quality is therefore a crucial part of fundamental analysis.</p>
    <img src="/fundamental-analysis/image22.png" alt="Management quality" style={imgStyle} />

    <hr className="chapter-rule" />
    <h3>Why Management Matters</h3>
    <p>Every major decision within a company ultimately comes from its leadership.</p>
    <p>Management determines:</p>
    <ul className="pl-6">
      <li>how capital is allocated</li>
      <li>which markets the company enters</li>
      <li>how aggressively the company expands</li>
      <li>how risks are managed</li>
      <li>how profits are reinvested</li>
    </ul>
    <p>These decisions can have lasting effects on the company&apos;s long-term performance.</p>
    <p>Companies that consistently allocate capital effectively often deliver stronger returns for shareholders.</p>

    <hr className="chapter-rule" />
    <h3>Capital Allocation &mdash; One of Management&apos;s Most Important Responsibilities</h3>
    <p>One of the most critical roles of management is deciding <strong>how the company&apos;s profits and capital should be used</strong>.</p>
    <p>Capital allocation decisions may include:</p>
    <ul className="pl-6">
      <li>reinvesting profits into the business</li>
      <li>expanding production capacity</li>
      <li>entering new markets</li>
      <li>acquiring other companies</li>
      <li>reducing debt</li>
      <li>distributing dividends to shareholders</li>
    </ul>
    <p>Effective capital allocation can accelerate long-term growth.</p>
    <p>For example, companies such as Divi&apos;s Laboratories have historically reinvested capital into expanding manufacturing capabilities and research capacity, strengthening their position in global pharmaceutical supply chains.</p>
    <p>Disciplined capital allocation often leads to sustainable long-term growth.</p>

    <hr className="chapter-rule" />
    <h3>Promoter Ownership and Alignment</h3>
    <p>Another important aspect of management evaluation is <strong>ownership structure</strong>.</p>
    <p>In many companies, promoters or founders continue to hold significant ownership stakes.</p>
    <p>When management owns a meaningful portion of the company, their financial interests are often aligned with those of shareholders.</p>
    <p>For example, companies such as Bajaj Finance have leadership teams closely aligned with long-term shareholder value creation.</p>
    <p>However, high ownership alone does not guarantee good governance. Investors must also examine how management behaves over time.</p>
    <img src="/fundamental-analysis/image4.png" alt="Promoter shareholding" style={imgStyle} />
    <p className="img-caption">(A snippet from Asian paints FY2024-25 Annual Report, highlighting promoter shareholding percentage)</p>

    <hr className="chapter-rule" />
    <h3>Corporate Governance</h3>
    <p>Corporate governance refers to the systems and practices that ensure a company operates transparently, ethically and in the interests of shareholders.</p>
    <p>Strong corporate governance typically includes:</p>
    <ul className="pl-6">
      <li>transparent financial reporting</li>
      <li>independent board oversight</li>
      <li>responsible risk management</li>
      <li>protection of minority shareholder interests</li>
    </ul>
    <p>Companies with weak governance practices may expose investors to unnecessary risks.</p>
    <p>Well-governed companies often demonstrate consistent transparency and accountability in their operations.</p>

    <hr className="chapter-rule" />
    <h3>Long-Term Strategic Vision</h3>
    <p>High-quality management teams usually focus on <strong>long-term business development rather than short-term results</strong>.</p>
    <p>This may involve:</p>
    <ul className="pl-6">
      <li>investing in research and development</li>
      <li>strengthening distribution networks</li>
      <li>building new capabilities</li>
      <li>expanding into emerging markets</li>
    </ul>
    <p>For example, companies such as Pidilite Industries have steadily expanded their product portfolio and distribution reach over many years.</p>
    <p>Such long-term strategic investments often strengthen the company&apos;s competitive position.</p>

    <hr className="chapter-rule" />
    <h3>Communication and Transparency</h3>
    <p>Investors also evaluate how management communicates with shareholders.</p>
    <p>Clear and transparent communication helps investors understand the company&apos;s strategy, risks and long-term goals.</p>
    <p>Companies that regularly provide detailed disclosures, investor presentations and thoughtful commentary on business performance often build stronger trust with shareholders.</p>
    <p>Transparent communication also helps investors assess whether management is addressing challenges proactively.</p>

    <hr className="chapter-rule" />
    <h3>Warning Signs in Management Behavior</h3>
    <p>While evaluating management, investors should remain alert to potential warning signs.</p>
    <p>These may include:</p>
    <ul className="pl-6">
      <li>frequent changes in strategy</li>
      <li>excessive acquisitions without clear integration plans</li>
      <li>poor capital allocation decisions</li>
      <li>lack of transparency in financial disclosures</li>
      <li>related-party transactions that benefit insiders</li>
    </ul>
    <p>Such patterns may indicate governance concerns that could affect long-term shareholder value.</p>

    <hr className="chapter-rule" />
    <h3>Why Management Quality Is Difficult to Measure</h3>
    <p>Unlike financial ratios, management quality cannot always be measured using simple numerical metrics.</p>
    <p>Instead, investors often evaluate management by observing:</p>
    <ul className="pl-6">
      <li>long-term track record</li>
      <li>consistency in decision-making</li>
      <li>capital allocation discipline</li>
      <li>transparency and governance practices</li>
    </ul>
    <p>Over time, the actions of management tend to reveal their effectiveness.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Understanding management quality helps investors evaluate <strong>who is running the business</strong>.</p>
    <p>However, one of the most valuable sources of insight into a company&apos;s strategy, risks and long-term vision comes directly from the company itself.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>How to Read Annual Reports &mdash; Extracting Valuable Insights from Company Disclosures.</strong></p>
    <p>Annual reports provide detailed information that can help investors better understand the business they are investing in.</p>
  </>
);
const ChapterSeventeen = () => (
  <>
    <p>So far in this module, we have explored financial statements, key ratios, growth metrics, industry dynamics and management quality.</p>
    <p>While these tools help investors evaluate businesses, one of the most valuable sources of information about a company comes directly from the company itself:</p>
    <p><strong>the annual report.</strong></p>
    <p>An annual report is a comprehensive document published by a company each year that provides detailed information about its financial performance, strategy, risks and future outlook.</p>
    <p>For investors, annual reports offer an opportunity to understand the business from the perspective of management.</p>
    <p>They often contain insights that are not visible in financial numbers alone.</p>

    <hr className="chapter-rule" />
    <h3>What Is an Annual Report?</h3>
    <p>An annual report is an official document released by publicly listed companies to communicate with shareholders.</p>
    <p>It typically includes:</p>
    <ul className="pl-6">
      <li>financial statements</li>
      <li>management commentary</li>
      <li>operational updates</li>
      <li>industry insights</li>
      <li>risk disclosures</li>
      <li>corporate governance details</li>
    </ul>
    <p>In many ways, the annual report serves as a <strong>comprehensive overview of the company&apos;s performance and strategy over the past year</strong>.</p>
    <p>For serious investors, it is one of the most important documents to study.</p>
    <img src="/fundamental-analysis/image20.png" alt="Annual Report table of contents" style={imgStyle} />
    <p className="img-caption">(A snippet of the Table of contents from Eternal&apos;s (Zomato) FY 2024-25 Annual Report)</p>

    <hr className="chapter-rule" />
    <h3>Management Discussion and Analysis (MD&amp;A)</h3>
    <p>One of the most informative sections of an annual report is the <strong>Management Discussion and Analysis</strong>, often referred to as MD&amp;A.</p>
    <p>In this section, management explains:</p>
    <ul className="pl-6">
      <li>how the business performed during the year</li>
      <li>key operational developments</li>
      <li>industry conditions</li>
      <li>opportunities and challenges</li>
      <li>strategic priorities for the future</li>
    </ul>
    <p>The MD&amp;A section provides valuable context that helps investors interpret financial results more effectively.</p>
    <p>For example, companies such as Avenue Supermarts often discuss expansion strategies, store additions and operational efficiency in their management commentary.</p>
    <p>This information helps investors understand how the company plans to grow.</p>

    <hr className="chapter-rule" />
    <h3>Business Overview</h3>
    <p>Most annual reports begin with a description of the company&apos;s business model and operations.</p>
    <p>This section typically explains:</p>
    <ul className="pl-6">
      <li>the company&apos;s core products or services</li>
      <li>key revenue segments</li>
      <li>geographic presence</li>
      <li>major customer groups</li>
    </ul>
    <p>Understanding the business overview helps investors answer a basic but critical question:</p>
    <p><strong>How does this company actually make money?</strong></p>
    <p>Companies operating across multiple segments may also provide a breakdown of revenue contributions from different divisions.</p>

    <hr className="chapter-rule" />
    <h3>Risk Factors</h3>
    <p>Another important section in the annual report outlines the <strong>key risks faced by the company</strong>.</p>
    <p>These risks may include:</p>
    <ul className="pl-6">
      <li>regulatory changes</li>
      <li>supply chain disruptions</li>
      <li>currency fluctuations</li>
      <li>technological disruption</li>
      <li>competitive pressures</li>
    </ul>
    <p>Although companies may present these risks in cautious language, they often reveal important vulnerabilities in the business.</p>
    <p>For example, pharmaceutical companies such as Dr. Reddy&apos;s Laboratories frequently highlight regulatory risks related to approvals and compliance in global markets.</p>
    <p>Understanding these risks helps investors evaluate potential challenges that may affect future performance.</p>

    <hr className="chapter-rule" />
    <h3>Corporate Governance</h3>
    <p>Annual reports also include detailed information about <strong>corporate governance practices</strong>.</p>
    <p>This section typically provides information about:</p>
    <ul className="pl-6">
      <li>the board of directors</li>
      <li>independent directors</li>
      <li>board committees</li>
      <li>executive compensation</li>
      <li>shareholder rights</li>
    </ul>
    <p>Strong governance practices often signal that the company is committed to transparency and accountability.</p>
    <p>Investors often review this section to understand the leadership structure and oversight mechanisms within the company.</p>

    <hr className="chapter-rule" />
    <h3>Financial Statements</h3>
    <p>The annual report also includes the company&apos;s complete financial statements.</p>
    <p>These typically include:</p>
    <ul className="pl-6">
      <li>Income Statement</li>
      <li>Balance Sheet</li>
      <li>Cash Flow Statement</li>
      <li>Notes to the Financial Statements</li>
    </ul>
    <p>The <strong>notes to the financial statements</strong> can be particularly informative because they explain accounting policies, segment performance and important financial details that may not be immediately visible in the primary statements.</p>
    <p>These notes often contain valuable insights about how the company operates.</p>

    <hr className="chapter-rule" />
    <h3>Reading Annual Reports Effectively</h3>
    <p>Annual reports can be lengthy, sometimes exceeding several hundred pages.</p>
    <p>Investors therefore benefit from focusing on the most informative sections.</p>
    <p>A practical approach may involve reviewing:</p>
    <ol className="pl-6">
      <li>Management Discussion and Analysis</li>
      <li>Business Overview</li>
      <li>Risk Factors</li>
      <li>Financial Statements</li>
      <li>Notes to Financial Statements</li>
    </ol>
    <p>This structured approach helps investors extract key insights without becoming overwhelmed by the volume of information.</p>

    <hr className="chapter-rule" />
    <h3>What Annual Reports Reveal</h3>
    <p>Annual reports provide insights that extend beyond financial data.</p>
    <p>They help investors understand:</p>
    <ul className="pl-6">
      <li>the company&apos;s strategy</li>
      <li>management&apos;s priorities</li>
      <li>industry challenges</li>
      <li>long-term growth opportunities</li>
    </ul>
    <p>Over time, reading annual reports can significantly improve an investor&apos;s understanding of businesses and industries.</p>
    <p>Many experienced investors consider annual reports one of the most valuable sources of information when evaluating companies.</p>
  </>
);

const ChapterEighteen = () => (
  <>
    <p>So far in this module, we have studied businesses through their <strong>financial statements, growth trends, competitive advantages, industry structure and management quality</strong>.</p>
    <p>But before investing in any stock, there is one final question every investor must ask:</p>
    <p><strong>What is this business actually worth?</strong></p>
    <p>The answer to this question is called <strong>intrinsic value</strong>.</p>
    <p>Intrinsic value represents the <strong>true economic value of a business based on its ability to generate cash flows in the future</strong>.</p>
    <p>It may be very different from the current market price of the stock.</p>
    <p>Understanding this difference is one of the most important ideas in long-term investing.</p>

    <hr className="chapter-rule" />
    <h3>Price vs Value</h3>
    <p>The stock market assigns a <strong>price</strong> to companies every day.</p>
    <p>This price fluctuates constantly based on:</p>
    <ul className="pl-6">
      <li>investor sentiment</li>
      <li>news and economic events</li>
      <li>short-term expectations</li>
      <li>market cycles</li>
    </ul>
    <p>However, the <strong>price of a stock does not always reflect the underlying value of the business</strong>.</p>
    <p>A company&apos;s intrinsic value depends on:</p>
    <ul className="pl-6">
      <li>the profits it can generate</li>
      <li>how fast those profits can grow</li>
      <li>how efficiently the company uses capital</li>
      <li>how long those profits can continue</li>
    </ul>
    <p>Over short periods, market prices can move far away from intrinsic value.<br />
    Over longer periods, prices tend to <strong>gravitate toward the underlying value of the business</strong>.</p>
    <p>This is why long-term investors focus on identifying situations where <strong>price and value diverge</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Where Intrinsic Value Comes From</h3>
    <p>At its core, the value of any business comes from the <strong>cash it can generate for its owners over time</strong>.</p>
    <p>If a company consistently produces profits and reinvests those profits effectively, the total earnings generated over many years can become extremely valuable.</p>
    <p>For example, companies such as Bajaj Finance increased their value over time because the business was able to steadily expand lending operations and grow profits year after year.</p>
    <p>The more <strong>cash a business can generate in the future</strong>, the more valuable it becomes today.</p>
    <p>This is the fundamental principle behind intrinsic value.</p>

    <hr className="chapter-rule" />
    <h3>How Intrinsic Value Is Calculated</h3>
    <p>Professional investors often estimate intrinsic value using financial models such as <strong>Discounted Cash Flow (DCF)</strong>.</p>
    <p>DCF attempts to calculate the value of a company by:</p>
    <ol className="pl-6">
      <li>Estimating future cash flows</li>
      <li>Estimating long-term growth rates</li>
      <li>Applying a discount rate to reflect time and risk</li>
      <li>Calculating the present value of those future cash flows</li>
    </ol>
    <p>While the idea is straightforward, the calculations can become <strong>very complex</strong> and depend heavily on assumptions about the future.</p>
    <p>Small changes in assumptions about growth or discount rates can produce very different valuation results.</p>
    <p>For this reason, building reliable intrinsic value models requires significant financial experience.</p>
    <p>Because of this complexity, we will <strong>not go into detailed intrinsic value calculations in this course</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Where Intrinsic Value Estimates Can Be Found</h3>
    <p>Some financial platforms provide <strong>automated intrinsic value or fair value estimates</strong> using valuation models.</p>
    <p>These may be available on platforms such as:</p>
    <ul className="pl-6">
      <li>Trendlyne</li>
      <li>Tijori Finance</li>
    </ul>
    <p>These tools attempt to estimate valuation based on growth assumptions and financial models.</p>
    <p>However, it is important to remember that <strong>intrinsic value is always an estimate</strong>, not an exact number.</p>
    <p>Different analysts using different assumptions can arrive at different valuations.</p>
    <p>Because of this uncertainty, investors often treat intrinsic value as a <strong>range rather than a precise number</strong>.</p>

    <hr className="chapter-rule" />
    <h3>A Practical Shortcut for Investors</h3>
    <p>Instead of building complex valuation models, many investors use a simpler approach to estimate whether a stock is reasonably valued.</p>
    <p>A practical shortcut is to combine:</p>
    <ul className="pl-6">
      <li><strong>earnings growth</strong></li>
      <li><strong>return on capital</strong></li>
      <li><strong>valuation multiples</strong></li>
    </ul>
    <p>For example, suppose a company earns <strong>₹40 per share</strong> today and is expected to grow profits at <strong>15% annually</strong>.</p>
    <p>If businesses of similar quality typically trade at around <strong>20&times; earnings</strong>, an investor may estimate a rough fair value as:</p>
    <p>Fair Value &asymp; EPS &times; Reasonable P/E multiple</p>
    <p>In this case:</p>
    <p>₹40 &times; 20 &asymp; ₹800</p>
    <p>This method does not produce a precise intrinsic value, but it provides a <strong>reasonable valuation reference point</strong>.</p>
    <p>Investors can then compare the market price to this estimate.</p>

    <hr className="chapter-rule" />
    <h3>Margin of Safety &mdash; Protecting Against Uncertainty</h3>
    <p>Because intrinsic value estimates involve uncertainty, investors rarely buy a stock exactly at its estimated value.</p>
    <p>Instead, they prefer to purchase stocks <strong>below intrinsic value</strong> to create a margin of safety.</p>
    <p>For example:</p>
    <p>Estimated intrinsic value = ₹800<br />
    Market price = ₹600</p>
    <p>This difference provides a <strong>margin of safety</strong> that protects the investor from possible errors in estimation or unexpected changes in the business environment.</p>
    <p>This concept was popularized by the renowned value investor <strong>Benjamin Graham</strong>.</p>
    <p>Buying with a margin of safety helps reduce investment risk.</p>

    <hr className="chapter-rule" />
    <h3>The Practical Role of Intrinsic Value</h3>
    <p>Intrinsic value helps investors answer a critical question:</p>
    <p><strong>Is the current market price reasonable relative to the value of the business?</strong></p>
    <p>Instead of focusing on short-term price movements, investors who understand intrinsic value focus on:</p>
    <ul className="pl-6">
      <li>buying strong businesses</li>
      <li>at reasonable prices</li>
      <li>and holding them as the business grows.</li>
    </ul>
    <p>Over time, if the business continues to grow profits and cash flows, the market price often reflects that growth.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Intrinsic value helps investors understand <strong>what a business may be worth</strong>.</p>
    <p>However, investors must also learn to recognize situations where financial numbers or business narratives may be misleading.</p>
    <p>In the next chapter, we will examine:</p>
    <p><strong>Red Flags in Fundamental Analysis &mdash; Identifying Warning Signs Before Investing.</strong></p>
    <p>Recognizing potential risks is just as important as identifying strong investment opportunities.</p>
  </>
);

const ChapterNineteen = () => (
  <>
    <p>Throughout this module, we have focused on identifying strong businesses with healthy financials, sustainable growth, competitive advantages and capable management.</p>
    <p>However, successful investing also requires recognizing situations where <strong>a company may appear attractive on the surface but carries hidden risks</strong>.</p>
    <p>These warning signs are often referred to as <strong>red flags</strong>.</p>
    <p>Red flags do not automatically mean that a company is a poor investment, but they signal areas that require deeper investigation.</p>
    <p>Experienced investors often spend as much time identifying potential risks as they do searching for promising opportunities.</p>

    <hr className="chapter-rule" />
    <h3>Profit Growth Without Cash Flow</h3>
    <p>One of the most important red flags occurs when a company reports strong profit growth but fails to generate corresponding operating cash flow.</p>
    <p>In a healthy business, profits should eventually translate into cash.</p>
    <p>If profits continue to rise while operating cash flow remains weak or negative, it may indicate potential issues such as:</p>
    <ul className="pl-6">
      <li>aggressive revenue recognition</li>
      <li>slow customer payments</li>
      <li>excessive inventory buildup</li>
    </ul>
    <p>For example, companies in project-based industries sometimes recognize revenue based on project milestones while actual payments are received much later.</p>
    <p>Investors should therefore compare <strong>net profit and operating cash flow trends over several years</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Rising Debt Without Clear Returns</h3>
    <p>Borrowing money is not inherently negative. Many companies use debt to fund expansion or capital investments.</p>
    <p>However, a red flag arises when debt levels increase significantly without a clear improvement in revenue, profitability or return on capital.</p>
    <p>Signs to watch for include:</p>
    <ul className="pl-6">
      <li>rapidly increasing debt levels</li>
      <li>declining interest coverage ratios</li>
      <li>heavy reliance on borrowing to sustain operations</li>
    </ul>
    <p>Companies that accumulate excessive debt may become vulnerable during economic downturns when revenues decline or interest rates rise.</p>

    <hr className="chapter-rule" />
    <h3>Continuous Equity Dilution</h3>
    <p>Companies sometimes issue new shares to raise capital.</p>
    <p>While this may help finance growth or reduce debt, frequent equity issuance can dilute the ownership of existing shareholders.</p>
    <p>If the number of shares outstanding increases significantly over time, investors should examine whether the capital raised has resulted in meaningful growth in profits and earnings per share.</p>
    <p>If profit growth is offset by continuous share dilution, shareholders may not benefit from the company&apos;s expansion.</p>

    <hr className="chapter-rule" />
    <h3>Declining Profit Margins</h3>
    <p>Margins provide insight into the underlying strength of a business.</p>
    <p>When profit margins steadily decline over several years, it may indicate:</p>
    <ul className="pl-6">
      <li>increasing competition</li>
      <li>rising input costs</li>
      <li>weakening pricing power</li>
      <li>operational inefficiencies</li>
    </ul>
    <p>While temporary margin fluctuations may occur, persistent deterioration can signal structural challenges within the business or the industry.</p>

    <hr className="chapter-rule" />
    <h3>Excessive Acquisitions</h3>
    <p>Acquisitions can sometimes accelerate growth, but frequent or poorly integrated acquisitions may introduce risks.</p>
    <p>Potential warning signs include:</p>
    <ul className="pl-6">
      <li>rapid expansion through acquisitions rather than organic growth</li>
      <li>significant goodwill accumulation on the balance sheet</li>
      <li>rising debt used to finance acquisitions</li>
    </ul>
    <p>Companies that rely heavily on acquisitions may struggle to integrate operations effectively or may overpay for purchased businesses.</p>
    <p>Investors should examine whether acquisitions are creating long-term value or simply inflating short-term growth.</p>

    <hr className="chapter-rule" />
    <h3>Promoter Pledging</h3>
    <p>In some cases, promoters may pledge their shares as collateral to obtain personal or business loans.</p>
    <p>While pledging does not necessarily indicate wrongdoing, high levels of pledged shares can create potential risks.</p>
    <p>If the share price falls significantly, lenders may require the pledged shares to be sold in the market to recover their loans.</p>
    <p>This can increase volatility and place additional pressure on the stock price.</p>
    <p>For this reason, investors often monitor promoter pledging levels when evaluating governance risk.</p>

    <hr className="chapter-rule" />
    <h3>Complex Corporate Structures</h3>
    <p>Companies with highly complex corporate structures can sometimes make it difficult for investors to fully understand their financial relationships.</p>
    <p>Examples may include:</p>
    <ul className="pl-6">
      <li>numerous subsidiaries</li>
      <li>extensive related-party transactions</li>
      <li>opaque ownership arrangements</li>
    </ul>
    <p>While complexity does not automatically imply misconduct, transparency is generally considered a positive attribute in corporate governance.</p>
    <p>Investors often prefer companies with simpler and clearer organizational structures.</p>

    <hr className="chapter-rule" />
    <h3>Sudden Changes in Strategy</h3>
    <p>Businesses evolve over time, but frequent or abrupt changes in strategic direction may signal uncertainty within management.</p>
    <p>Examples may include:</p>
    <ul className="pl-6">
      <li>rapid diversification into unrelated industries</li>
      <li>inconsistent capital allocation decisions</li>
      <li>repeated restructuring initiatives</li>
    </ul>
    <p>Stable and well-managed companies typically pursue <strong>clear and consistent long-term strategies</strong>.</p>
    <p>Investors should carefully evaluate whether strategic changes are well justified or reactive.</p>

    <hr className="chapter-rule" />
    <h3>Why Red Flags Matter</h3>
    <p>Recognizing potential warning signs helps investors avoid situations where attractive financial metrics may hide underlying problems.</p>
    <p>Many historical investment losses have occurred not because investors lacked information, but because <strong>warning signs were ignored</strong>.</p>
    <p>By identifying red flags early, investors can investigate further before committing capital.</p>
    <p>Fundamental analysis therefore involves both:</p>
    <ul className="pl-6">
      <li>identifying strong businesses</li>
      <li>avoiding companies with structural weaknesses or governance concerns</li>
    </ul>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>Understanding financial statements, growth dynamics, valuation and potential risks provides a strong foundation for evaluating businesses.</p>
    <p>However, successful investing often combines multiple analytical approaches.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>Combining Fundamental and Technical Analysis &mdash; How Investors Use Both to Improve Decision-Making.</strong></p>
    <p>This chapter will connect the concepts from this module with the technical analysis framework covered earlier.</p>
  </>
);
const ChapterTwenty = () => (
  <>
    <p>In the next module, we will explore <strong>technical analysis</strong>, which helps investors understand <strong>price behavior, trends, momentum and market psychology</strong>.</p>
    <p>In this module, we focused on <strong>fundamental analysis</strong>, which helps investors evaluate <strong>the quality of the underlying business</strong>.</p>
    <p>Many investors treat these two approaches as completely separate. Some believe only fundamentals matter, while others rely entirely on charts.</p>
    <p>In reality, many experienced investors combine both approaches because they answer <strong>different questions</strong>.</p>
    <p>Fundamental analysis helps determine:</p>
    <p><strong>What to buy.</strong></p>
    <p>Technical analysis helps determine:</p>
    <p><strong>When to buy.</strong></p>
    <p>When used together, these tools can help investors make more structured and disciplined decisions.</p>

    <hr className="chapter-rule" />
    <h3>Fundamentals Identify the Right Businesses</h3>
    <p>Fundamental analysis helps investors identify <strong>high-quality businesses</strong>.</p>
    <p>By studying financial statements, growth trends, competitive advantages, industry structure, and management quality, investors can determine whether a company is fundamentally strong.</p>
    <p>For example, companies such as Pidilite Industries have historically demonstrated strong fundamentals through:</p>
    <ul className="pl-6">
      <li>consistent revenue growth</li>
      <li>high return on capital</li>
      <li>strong brand advantages</li>
      <li>stable profit margins</li>
    </ul>
    <p>Such characteristics help investors identify businesses that may be capable of compounding value over long periods.</p>
    <p>However, even strong businesses experience <strong>price fluctuations and market cycles</strong>.</p>
    <p>This is where technical analysis becomes useful.</p>

    <hr className="chapter-rule" />
    <h3>Technical Analysis Helps with Timing</h3>
    <p>Technical analysis focuses on <strong>market behavior and price structure</strong>.</p>
    <p>Instead of analyzing financial statements, it examines:</p>
    <ul className="pl-6">
      <li>price trends</li>
      <li>support and resistance levels</li>
      <li>momentum indicators</li>
      <li>volume behavior</li>
    </ul>
    <p>These tools help investors understand <strong>how market participants are positioning themselves around a stock</strong>.</p>
    <p>For example, suppose a fundamentally strong company experiences a temporary pullback during a broader market correction.</p>
    <p>Technical analysis may help investors identify whether the stock is approaching a <strong>historical support level or a structural pullback zone</strong>.</p>
    <p>This can help improve entry timing rather than buying at extended price levels.</p>

    <hr className="chapter-rule" />
    <h3>A Simple Combined Framework</h3>
    <p>Many investors use a simple two-step approach when combining fundamentals and technical analysis.</p>

    <h3>Step 1: Identify Strong Businesses</h3>
    <p>Using fundamental analysis, investors look for companies with:</p>
    <ul className="pl-6">
      <li>strong earnings growth</li>
      <li>high return on capital</li>
      <li>manageable debt levels</li>
      <li>competitive advantages</li>
      <li>capable management</li>
    </ul>
    <p>This step helps investors build a shortlist of companies worth owning.</p>

    <h3>Step 2: Use Technical Analysis for Entry Timing</h3>
    <p>Once a fundamentally strong company is identified, investors may use technical analysis to observe:</p>
    <ul className="pl-6">
      <li>overall trend direction</li>
      <li>key support levels</li>
      <li>pullback zones</li>
      <li>volume behavior</li>
    </ul>
    <p>For example, if a stock remains in a long-term uptrend but temporarily pulls back toward support, investors may consider this a more favorable entry point.</p>
    <p>This approach helps reduce the risk of buying stocks during short-term price spikes.</p>

    <hr className="chapter-rule" />
    <h3>Why Timing Still Matters for Long-Term Investors</h3>
    <p>Some investors believe that timing does not matter for long-term investing.</p>
    <p>While long-term fundamentals are the primary driver of returns, <strong>entry price can still influence investment outcomes</strong>.</p>
    <p>Buying a strong company during periods of excessive optimism may expose investors to short-term volatility.</p>
    <p>Waiting for reasonable price levels or structural pullbacks can improve the risk-reward balance.</p>
    <p>Technical analysis helps investors remain patient rather than chasing rising prices.</p>

    <hr className="chapter-rule" />
    <h3>When Technicals Should Not Override Fundamentals</h3>
    <p>While technical analysis can help with timing, it should <strong>not replace fundamental analysis</strong> for long-term investors.</p>
    <p>A strong chart pattern cannot compensate for a weak business model.</p>
    <p>For example, if a company shows declining earnings, rising debt and deteriorating margins, a temporary technical breakout may not reflect sustainable long-term value.</p>
    <p>Fundamental strength should therefore remain the <strong>primary filter</strong> when selecting investments.</p>
    <p>Technical analysis serves as a supporting tool rather than the main decision driver.</p>

    <hr className="chapter-rule" />
    <h3>The Role of Discipline</h3>
    <p>Combining fundamentals and technical analysis can also help investors maintain discipline.</p>
    <p>Fundamental analysis builds <strong>conviction in the business</strong>, while technical analysis helps investors manage <strong>entry timing and market psychology</strong>.</p>
    <p>This combination reduces emotional decision-making and encourages structured investing.</p>
    <p>Over time, this disciplined approach can improve both risk management and long-term investment outcomes.</p>
  </>
);

const ChapterTwentyOne = () => (
  <>
    <p>Throughout this module, we have explored the key components of fundamental analysis:</p>
    <ul className="pl-6">
      <li>financial statements</li>
      <li>profitability and margins</li>
      <li>return on capital</li>
      <li>growth trends</li>
      <li>competitive advantages</li>
      <li>industry structure</li>
      <li>management quality</li>
      <li>valuation</li>
    </ul>
    <p>To see how these ideas work in practice, it is useful to analyze a <strong>real business step by step</strong>.</p>
    <p>In this chapter, we will examine a company that has historically demonstrated strong fundamentals and consistent growth:</p>
    <p>Pidilite Industries.</p>
    <p>Pidilite is widely known for its adhesive brands such as Fevicol and Fevikwik and operates primarily in the adhesives, sealants and construction chemicals markets.</p>
    <p>Over many years, the company has built a strong reputation as a <strong>high-quality compounder</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Understanding the Business Model</h3>
    <p>Pidilite operates in the <strong>adhesives and specialty chemicals industry</strong>, serving multiple sectors including construction, woodworking, packaging and consumer repair products.</p>
    <p>Its product portfolio includes:</p>
    <ul className="pl-6">
      <li>adhesives and sealants</li>
      <li>construction chemicals</li>
      <li>waterproofing solutions</li>
      <li>art and craft materials</li>
    </ul>
    <p>Many of its products are sold through well-known consumer brands that have developed strong recognition across India.</p>
    <p>Because adhesives are used in a wide range of industries and applications, demand tends to be relatively stable compared with more cyclical sectors.</p>

    <hr className="chapter-rule" />
    <h3>Competitive Advantage</h3>
    <p>One of the key strengths of Pidilite lies in its <strong>brand dominance and distribution network</strong>.</p>
    <p>Over decades, the company has built strong brand loyalty through products such as Fevicol, which has become almost synonymous with wood adhesives in India.</p>
    <p>In addition to brand strength, the company benefits from:</p>
    <ul className="pl-6">
      <li>extensive distribution across urban and rural markets</li>
      <li>strong relationships with carpenters and contractors</li>
      <li>continuous product innovation</li>
    </ul>
    <p>These advantages make it difficult for competitors to displace established products.</p>
    <p>This combination of brand strength and distribution scale contributes to the company&apos;s long-term competitive advantage.</p>

    <hr className="chapter-rule" />
    <h3>Profitability and Margins</h3>
    <p>Pidilite has historically maintained <strong>strong operating margins</strong> compared with many industrial companies.</p>
    <p>Stable margins often indicate:</p>
    <ul className="pl-6">
      <li>pricing power</li>
      <li>efficient operations</li>
      <li>strong brand positioning</li>
    </ul>
    <p>Companies that maintain consistent margins over long periods often demonstrate a resilient business model.</p>
    <p>Margin stability also allows companies to generate predictable earnings growth over time.</p>

    <hr className="chapter-rule" />
    <h3>Return on Capital</h3>
    <p>Another important indicator of business quality is <strong>return on capital employed (ROCE)</strong>.</p>
    <p>Pidilite has historically generated high returns on capital, reflecting its ability to produce strong profits relative to the capital invested in the business.</p>
    <p>High return on capital typically indicates:</p>
    <ul className="pl-6">
      <li>efficient use of capital</li>
      <li>strong competitive advantages</li>
      <li>scalable business operations</li>
    </ul>
    <p>Businesses that consistently earn high returns on capital are often able to reinvest profits and continue compounding value over long periods.</p>

    <hr className="chapter-rule" />
    <h3>Growth Trends</h3>
    <p>Over many years, Pidilite has demonstrated consistent growth in both revenue and profits.</p>
    <p>Growth has been supported by several factors:</p>
    <ul className="pl-6">
      <li>rising construction activity</li>
      <li>increasing demand for home improvement products</li>
      <li>expansion of distribution networks</li>
      <li>development of new product categories</li>
    </ul>
    <p>Because adhesives and construction chemicals are used across many industries, the company has benefited from broad-based demand.</p>
    <p>Sustained growth combined with strong profitability has contributed to long-term wealth creation for shareholders.</p>

    <hr className="chapter-rule" />
    <h3>Financial Stability</h3>
    <p>A strong balance sheet is another important characteristic of high-quality companies.</p>
    <p>Pidilite has generally maintained manageable debt levels and healthy cash flow generation.</p>
    <p>Financial stability allows companies to:</p>
    <ul className="pl-6">
      <li>invest in expansion</li>
      <li>withstand economic downturns</li>
      <li>maintain operational flexibility</li>
    </ul>
    <p>Companies with strong balance sheets are often better positioned to navigate changing market conditions.</p>

    <hr className="chapter-rule" />
    <h3>Valuation Considerations</h3>
    <p>High-quality companies often trade at <strong>premium valuations</strong> because investors recognize their strong fundamentals and long-term growth potential.</p>
    <p>As a result, investors must carefully consider valuation when investing in such businesses.</p>
    <p>Even strong companies can deliver lower returns if purchased at excessively high prices.</p>
    <p>This is where the concept of <strong>intrinsic value and margin of safety</strong> becomes important.</p>
    <p>Investors must evaluate whether the current market price reflects the long-term growth prospects of the business.</p>

    <hr className="chapter-rule" />
    <h3>Lessons from the Case Study</h3>
    <p>This example illustrates how fundamental analysis helps investors evaluate a business across multiple dimensions.</p>
    <p>A structured analysis may involve examining:</p>
    <ul className="pl-6">
      <li>the company&apos;s business model</li>
      <li>competitive advantages</li>
      <li>profitability and margins</li>
      <li>return on capital</li>
      <li>growth trends</li>
      <li>financial stability</li>
      <li>valuation</li>
    </ul>
    <p>Companies that perform well across these areas often demonstrate characteristics associated with long-term compounding businesses.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>While some businesses demonstrate stable long-term growth, others behave very differently due to the nature of their industries.</p>
    <p>In the next chapter, we will analyze a <strong>cyclical business</strong>, where earnings fluctuate significantly based on economic and industry cycles.</p>
    <p>This comparison will help illustrate why different types of businesses require different investment approaches.</p>
  </>
);

const ChapterTwentyTwo = () => (
  <>
    <p>In the previous chapter, we examined a <strong>high-quality compounder</strong>, a business capable of generating steady growth, strong margins and high returns on capital over long periods.</p>
    <p>However, not all businesses behave this way.</p>
    <p>Some industries experience <strong>large swings in profitability</strong> depending on economic conditions, commodity prices and supply-demand cycles.</p>
    <p>These businesses are known as <strong>cyclical companies</strong>.</p>
    <p>In this chapter, we will examine a company operating in a cyclical industry to understand how its financial performance differs from long-term compounders.</p>
    <p>A well-known example of a cyclical business is Tata Steel.</p>
    <p>Steel production is closely tied to economic activity, construction demand, infrastructure spending and global commodity prices.</p>
    <p>As a result, the company&apos;s earnings can fluctuate significantly across different phases of the economic cycle.</p>

    <hr className="chapter-rule" />
    <h3>Understanding the Industry</h3>
    <p>The steel industry is heavily influenced by global demand and supply dynamics.</p>
    <p>Demand for steel often rises during periods of:</p>
    <ul className="pl-6">
      <li>infrastructure expansion</li>
      <li>real estate growth</li>
      <li>industrial production</li>
      <li>economic expansion</li>
    </ul>
    <p>During these periods, steel prices tend to increase, which can significantly boost profitability for steel producers.</p>
    <p>However, when economic activity slows or supply increases faster than demand, steel prices may decline.</p>
    <p>Because steel is largely a <strong>commodity product</strong>, companies often have limited pricing power.</p>
    <p>This means that profitability can change dramatically depending on market conditions.</p>

    <hr className="chapter-rule" />
    <h3>Revenue and Profit Cycles</h3>
    <p>Cyclical companies often experience large fluctuations in revenue and profits.</p>
    <p>During strong economic phases, steel prices rise and demand increases. This can lead to significant improvements in profitability.</p>
    <p>However, when economic conditions weaken, demand may fall while production capacity remains high. This can create oversupply in the market, causing prices to decline.</p>
    <p>As a result, companies in cyclical industries may experience:</p>
    <ul className="pl-6">
      <li>rapid profit expansion during boom periods</li>
      <li>sharp profit declines during downturns</li>
    </ul>
    <p>Investors analyzing cyclical companies must therefore evaluate performance <strong>across multiple economic cycles</strong>, rather than focusing on a single year of results.</p>

    <hr className="chapter-rule" />
    <h3>Capital Intensity</h3>
    <p>Steel production requires significant capital investment.</p>
    <p>Large steel plants, furnaces and infrastructure require billions of rupees in capital expenditure.</p>
    <p>Because of this, steel companies often carry <strong>higher levels of debt</strong> compared with asset-light businesses.</p>
    <p>High capital requirements can create additional risks during economic downturns, when revenues decline but fixed costs remain significant.</p>
    <p>Investors analyzing capital-intensive industries must pay close attention to:</p>
    <ul className="pl-6">
      <li>debt levels</li>
      <li>interest coverage</li>
      <li>balance sheet strength</li>
    </ul>
    <p>These factors can determine whether the company can survive difficult periods in the cycle.</p>

    <hr className="chapter-rule" />
    <h3>Return on Capital Across Cycles</h3>
    <p>Unlike high-quality compounders, cyclical businesses may show <strong>large variations in return on capital</strong>.</p>
    <p>During boom periods, return on capital may rise significantly as profits increase.</p>
    <p>During downturns, the same company may generate much lower returns or even losses.</p>
    <p>This variability means investors must evaluate the company&apos;s performance across <strong>long time horizons</strong>, rather than relying on short-term financial metrics.</p>
    <p>A single year of strong profits does not necessarily indicate a structurally strong business.</p>

    <hr className="chapter-rule" />
    <h3>Valuation Challenges</h3>
    <p>Valuing cyclical companies can be more challenging than valuing stable compounders.</p>
    <p>When commodity prices are high, profits may appear unusually strong. This can cause valuation ratios such as the <strong>price-to-earnings (P/E) ratio</strong> to appear artificially low.</p>
    <p>However, these profits may not be sustainable if the industry cycle reverses.</p>
    <p>Conversely, during industry downturns, profits may decline sharply and valuation ratios may appear unusually high.</p>
    <p>For this reason, investors often evaluate cyclical companies using <strong>long-term average earnings or industry cycle analysis</strong> rather than relying on a single year&apos;s profits.</p>

    <hr className="chapter-rule" />
    <h3>Timing Matters More in Cyclical Industries</h3>
    <p>Because profits fluctuate significantly across cycles, <strong>timing becomes more important</strong> when investing in cyclical companies.</p>
    <p>Many cyclical stocks tend to perform best when:</p>
    <ul className="pl-6">
      <li>industry conditions begin improving</li>
      <li>commodity prices start rising</li>
      <li>demand begins recovering</li>
    </ul>
    <p>During peak industry conditions, when profits appear strongest, stock prices may already reflect optimistic expectations.</p>
    <p>Understanding industry cycles is therefore an important part of analyzing cyclical businesses.</p>

    <hr className="chapter-rule" />
    <h3>Lessons from Cyclical Businesses</h3>
    <p>Cyclical companies behave very differently from long-term compounders.</p>
    <p>Key characteristics often include:</p>
    <ul className="pl-6">
      <li>fluctuating earnings</li>
      <li>high capital requirements</li>
      <li>sensitivity to economic cycles</li>
      <li>commodity price dependence</li>
    </ul>
    <p>Because of these characteristics, investors often apply different analytical frameworks when evaluating cyclical industries.</p>
    <p>Understanding these differences helps investors set realistic expectations about long-term performance.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>So far, we have examined two different types of businesses:</p>
    <ul className="pl-6">
      <li>a long-term compounder with steady growth</li>
      <li>a cyclical company with fluctuating earnings</li>
    </ul>
    <p>In the next chapter, we will explore a <strong>turnaround case study</strong>, where a company that previously faced significant challenges improved its performance over time.</p>
    <p>Studying turnaround stories helps investors understand how businesses can recover through operational improvements, stronger management and better financial discipline.</p>
  </>
);
const ChapterTwentyThree = () => (
  <>
    <p>So far, we have examined two types of businesses:</p>
    <ul className="pl-6">
      <li>a <strong>high-quality compounder</strong> that steadily grows over time</li>
      <li>a <strong>cyclical company</strong> whose earnings fluctuate with economic cycles</li>
    </ul>
    <p>However, there is another type of situation investors often encounter in the market:</p>
    <p><strong>turnaround stories.</strong></p>
    <p>A turnaround occurs when a company that previously faced serious challenges begins to improve its performance through changes in strategy, management, operations or financial discipline.</p>
    <p>Turnaround situations can sometimes create attractive investment opportunities, but they also carry higher uncertainty compared to stable compounders.</p>
    <p>In this chapter, we will examine an example of a turnaround in the Indian banking sector:</p>
    <p>ICICI Bank.</p>

    <hr className="chapter-rule" />
    <h3>Understanding the Problem Phase</h3>
    <p>Several years ago, ICICI Bank faced challenges related to <strong>asset quality</strong>.</p>
    <p>In banking, asset quality refers to the health of the loans that banks provide to borrowers.</p>
    <p>During periods of rapid lending growth, some loans may later become <strong>non-performing assets (NPAs)</strong> if borrowers fail to repay.</p>
    <p>At one stage, ICICI Bank experienced rising levels of:</p>
    <ul className="pl-6">
      <li>non-performing loans</li>
      <li>credit losses</li>
      <li>investor concerns about risk management</li>
    </ul>
    <p>These challenges affected the bank&apos;s profitability and created uncertainty around future growth.</p>
    <p>When financial institutions face asset quality problems, investor confidence often declines, which can impact stock performance.</p>

    <hr className="chapter-rule" />
    <h3>Strategic and Management Changes</h3>
    <p>A turnaround typically requires <strong>significant changes in leadership, strategy or operational discipline</strong>.</p>
    <p>Over time, ICICI Bank implemented several steps to improve its financial position.</p>
    <p>These included:</p>
    <ul className="pl-6">
      <li>strengthening risk management practices</li>
      <li>improving loan underwriting standards</li>
      <li>focusing on retail lending growth</li>
      <li>cleaning up stressed assets on the balance sheet</li>
    </ul>
    <p>Such changes helped improve the bank&apos;s overall financial stability.</p>
    <p>Turnarounds often depend heavily on <strong>management decisions and execution</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Balance Sheet Repair</h3>
    <p>An important part of many turnaround situations is <strong>repairing the balance sheet</strong>.</p>
    <p>For banks, this may involve:</p>
    <ul className="pl-6">
      <li>recognizing and resolving bad loans</li>
      <li>improving capital adequacy</li>
      <li>strengthening credit monitoring systems</li>
    </ul>
    <p>As problem loans are addressed and credit quality improves, financial institutions can gradually restore profitability.</p>
    <p>Investors closely monitor indicators such as:</p>
    <ul className="pl-6">
      <li>non-performing asset ratios</li>
      <li>capital adequacy levels</li>
      <li>loan growth trends</li>
    </ul>
    <p>These metrics help determine whether the turnaround is progressing successfully.</p>

    <hr className="chapter-rule" />
    <h3>Improving Profitability</h3>
    <p>Once a company stabilizes its balance sheet and operational processes, profitability may begin to recover.</p>
    <p>In the case of ICICI Bank, improvements in asset quality and lending discipline contributed to a gradual recovery in profitability.</p>
    <p>Over time, stronger credit performance and controlled risk exposure helped restore investor confidence.</p>
    <p>Turnaround stories often follow a sequence:</p>
    <ol className="pl-6">
      <li>Recognition of the problem</li>
      <li>Strategic restructuring</li>
      <li>Balance sheet repair</li>
      <li>Gradual recovery in earnings</li>
    </ol>
    <p>However, this process may take several years.</p>

    <hr className="chapter-rule" />
    <h3>Risks in Turnaround Investments</h3>
    <p>Although turnaround situations can sometimes lead to strong recoveries, they also carry significant risks.</p>
    <p>Not all struggling companies successfully complete a turnaround.</p>
    <p>Some businesses may continue to face structural challenges despite attempted reforms.</p>
    <p>For this reason, investors analyzing turnaround opportunities must carefully examine whether:</p>
    <ul className="pl-6">
      <li>the underlying business remains viable</li>
      <li>management is capable of executing the recovery plan</li>
      <li>financial stability is improving</li>
    </ul>
    <p>Turnaround investments often require greater caution than investments in stable compounders.</p>

    <hr className="chapter-rule" />
    <h3>Lessons from Turnaround Stories</h3>
    <p>Turnaround case studies highlight several important lessons for investors.</p>
    <p>First, businesses can face temporary challenges even if they operate in strong industries.</p>
    <p>Second, management decisions and strategic execution play a critical role in restoring financial health.</p>
    <p>Finally, patience is often required, as turnaround processes may take multiple years to fully materialize.</p>
    <p>Studying turnaround stories helps investors understand how businesses evolve through different phases of their lifecycle.</p>

    <hr className="chapter-rule" />
    <h3>What Comes Next</h3>
    <p>In this module, we have explored financial analysis, business quality, growth drivers, valuation concepts and multiple real-world case studies.</p>
    <p>The final chapter will bring all these ideas together into a <strong>complete framework for evaluating investments</strong>.</p>
    <p>In the next chapter, we will explore:</p>
    <p><strong>The Complete Investor Framework &mdash; Bringing Fundamentals, Valuation and Discipline Together.</strong></p>
    <p>This framework will help investors apply everything learned in this module when analyzing real investment opportunities.</p>
  </>
);

const ChapterTwentyFour = () => (
  <>
    <p>Throughout this module, we have explored the core principles of <strong>fundamental analysis</strong>.</p>
    <p>We studied how to understand financial statements, evaluate business quality, analyze growth trends, identify competitive advantages, assess management decisions and estimate intrinsic value.</p>
    <p>We also examined real-world examples of different types of businesses:</p>
    <ul className="pl-6">
      <li>long-term compounders</li>
      <li>cyclical companies</li>
      <li>turnaround situations</li>
    </ul>
    <p>The purpose of these chapters was not simply to learn individual concepts, but to develop a <strong>structured framework for evaluating businesses</strong>.</p>
    <p>Successful investors rarely rely on a single metric or indicator. Instead, they combine multiple perspectives to form a complete understanding of a company.</p>
    <p>This final chapter brings together the key ideas from the module into a <strong>practical step-by-step approach</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Step 1: Understand the Business</h3>
    <p>Before analyzing numbers, investors should first understand the <strong>business model</strong>.</p>
    <p>Important questions include:</p>
    <ul className="pl-6">
      <li>What products or services does the company offer?</li>
      <li>How does the company generate revenue?</li>
      <li>Who are its customers?</li>
      <li>What industry does it operate in?</li>
    </ul>
    <p>Understanding the business model helps investors determine whether the company operates in a stable and understandable industry.</p>
    <p>If a business model is too complex to understand, it may be difficult to evaluate the company&apos;s long-term prospects.</p>

    <hr className="chapter-rule" />
    <h3>Step 2: Study the Industry</h3>
    <p>A company&apos;s success is often influenced by the industry in which it operates.</p>
    <p>Investors should examine:</p>
    <ul className="pl-6">
      <li>industry growth trends</li>
      <li>competitive intensity</li>
      <li>barriers to entry</li>
      <li>long-term demand drivers</li>
    </ul>
    <p>Some industries naturally support stronger profitability and growth than others.</p>
    <p>Understanding industry structure helps investors determine whether the company&apos;s environment is favorable for long-term success.</p>

    <hr className="chapter-rule" />
    <h3>Step 3: Evaluate Competitive Advantage</h3>
    <p>Next, investors should determine whether the company has a <strong>durable competitive advantage</strong>, often referred to as an economic moat.</p>
    <p>Competitive advantages may come from:</p>
    <ul className="pl-6">
      <li>strong brands</li>
      <li>network effects</li>
      <li>cost advantages</li>
      <li>switching costs</li>
      <li>regulatory barriers</li>
    </ul>
    <p>Companies with strong competitive advantages are often able to maintain pricing power and protect their market position over long periods.</p>
    <p>These businesses may be more likely to sustain profitability and growth.</p>

    <hr className="chapter-rule" />
    <h3>Step 4: Analyze Financial Strength</h3>
    <p>Once the business and industry are understood, investors should analyze the company&apos;s financial health.</p>
    <p>Key areas include:</p>
    <ul className="pl-6">
      <li>revenue and profit growth</li>
      <li>profit margins</li>
      <li>return on capital</li>
      <li>debt levels</li>
      <li>cash flow generation</li>
    </ul>
    <p>Financial statements help investors understand whether the company is operating efficiently and generating sustainable profits.</p>
    <p>Strong financial health often provides businesses with the flexibility to invest in future growth.</p>

    <hr className="chapter-rule" />
    <h3>Step 5: Assess Management Quality</h3>
    <p>Management plays a critical role in shaping the long-term success of a company.</p>
    <p>Investors should evaluate:</p>
    <ul className="pl-6">
      <li>capital allocation decisions</li>
      <li>strategic consistency</li>
      <li>governance practices</li>
      <li>transparency in communication</li>
    </ul>
    <p>Management teams that allocate capital effectively and maintain strong governance practices often contribute significantly to long-term value creation.</p>

    <hr className="chapter-rule" />
    <h3>Step 6: Evaluate Valuation</h3>
    <p>Even strong businesses can become poor investments if purchased at excessive prices.</p>
    <p>Investors should therefore assess valuation using tools such as:</p>
    <ul className="pl-6">
      <li>valuation ratios (P/E, EV/EBITDA)</li>
      <li>growth expectations</li>
      <li>intrinsic value estimates</li>
    </ul>
    <p>The goal is to determine whether the current market price reasonably reflects the company&apos;s long-term prospects.</p>
    <p>Investors often seek opportunities where the <strong>price is lower than the estimated intrinsic value</strong>, providing a margin of safety.</p>

    <hr className="chapter-rule" />
    <h3>Step 7: Maintain Discipline and Patience</h3>
    <p>Successful investing requires patience and discipline.</p>
    <p>Markets often experience periods of volatility and stock prices may fluctuate significantly in the short term.</p>
    <p>Long-term investors benefit from focusing on:</p>
    <ul className="pl-6">
      <li>the underlying business performance</li>
      <li>sustainable growth trends</li>
      <li>long-term value creation</li>
    </ul>
    <p>Rather than reacting to short-term price movements, disciplined investors remain focused on the fundamentals of the business.</p>

    <hr className="chapter-rule" />
    <h3>Final Thought</h3>
    <p>Successful investing is rarely about predicting short-term price movements.</p>
    <p>Instead, it involves identifying strong businesses, purchasing them at reasonable prices and allowing the power of <strong>long-term compounding</strong> to work over time.</p>
    <p>By combining careful analysis with patience and discipline, investors can build a structured approach to evaluating companies and managing investments.</p>
    <p>This framework forms the foundation for thoughtful and informed participation in the equity markets.</p>
  </>
);

const BonusChapter = () => (
  <>
    <p>One of the most exciting outcomes in investing is identifying a <strong>multi-bagger</strong>, a stock that grows several times its original value over a long period.</p>
    <p>The term &ldquo;multi-bagger&rdquo; was popularized by legendary investor <strong>Peter Lynch</strong>, referring to investments that return multiple times the initial investment.</p>
    <p>However, multi-baggers are rarely discovered through luck alone. They usually emerge from businesses that combine <strong>strong growth, competitive advantages, expanding markets and disciplined management</strong>.</p>
    <p>While no method can guarantee the discovery of multi-bagger stocks, investors can significantly improve their chances by focusing on certain structural characteristics.</p>

    <hr className="chapter-rule" />
    <h3>Sector Tailwinds</h3>
    <p>The first step in identifying potential multi-baggers is understanding <strong>which industries are experiencing strong long-term demand growth</strong>.</p>
    <p>When an industry benefits from structural tailwinds, companies operating within it may experience sustained expansion.</p>
    <p>Examples of sector tailwinds may include:</p>
    <ul className="pl-6">
      <li>rising consumption trends</li>
      <li>technological innovation</li>
      <li>infrastructure development</li>
      <li>demographic shifts</li>
      <li>regulatory changes</li>
    </ul>
    <p>For example, companies such as Dixon Technologies benefited from the growth of electronics manufacturing and government incentives encouraging domestic production.</p>
    <p>Businesses operating in industries with favorable tailwinds often have more opportunities to scale.</p>

    <hr className="chapter-rule" />
    <h3>Market Leaders in Emerging Industries</h3>
    <p>Multi-bagger opportunities frequently arise in <strong>emerging industries where market leaders are still being established</strong>.</p>
    <p>When industries are in early growth phases, companies that successfully capture market share can grow rapidly as the market expands.</p>
    <p>Investors often look for companies that demonstrate:</p>
    <ul className="pl-6">
      <li>technological leadership</li>
      <li>strong product innovation</li>
      <li>expanding distribution networks</li>
      <li>early market adoption</li>
    </ul>
    <p>For example, companies such as Zomato emerged as leaders in the rapidly growing online food delivery industry.</p>
    <p>In emerging sectors, early leaders sometimes benefit from strong network effects and customer adoption.</p>

    <hr className="chapter-rule" />
    <h3>Small-Cap vs Large-Cap Opportunities</h3>
    <p>Another important factor in identifying potential multi-baggers is <strong>company size</strong>.</p>
    <p>Large, mature companies may still grow steadily, but their ability to multiply in value several times is often limited by their already large scale.</p>
    <p>Smaller companies, particularly <strong>small-cap and mid-cap businesses</strong>, may have more room for expansion.</p>
    <p>For example, a company with a market value of ₹2,000 crore may have far more growth potential than a company already valued at ₹5 lakh crore.</p>
    <p>However, smaller companies may also carry higher risks, including:</p>
    <ul className="pl-6">
      <li>limited operating history</li>
      <li>higher volatility</li>
      <li>greater sensitivity to economic cycles</li>
    </ul>
    <p>For this reason, investors should combine growth potential with careful financial analysis.</p>

    <hr className="chapter-rule" />
    <h3>Growth Runway</h3>
    <p>A key feature of many multi-bagger companies is the presence of a <strong>long growth runway</strong>.</p>
    <p>Growth runway refers to the amount of opportunity available for a company to expand its business over time.</p>
    <p>Businesses with long runways may benefit from:</p>
    <ul className="pl-6">
      <li>low market penetration</li>
      <li>expanding customer demand</li>
      <li>international expansion opportunities</li>
      <li>scalable business models</li>
    </ul>
    <p>For example, companies such as Polycab India have benefited from expanding infrastructure development and rising demand for electrical equipment.</p>
    <p>When a company operates in a growing industry with significant room for expansion, it may be able to sustain high growth rates for many years.</p>

    <hr className="chapter-rule" />
    <h3>Combining Growth with Quality</h3>
    <p>While high growth potential is important, investors should also ensure that potential multi-bagger companies demonstrate <strong>strong business fundamentals</strong>.</p>
    <p>Important characteristics often include:</p>
    <ul className="pl-6">
      <li>consistent revenue growth</li>
      <li>improving profit margins</li>
      <li>strong return on capital</li>
      <li>manageable debt levels</li>
      <li>capable management teams</li>
    </ul>
    <p>Growth without financial discipline may lead to unstable business performance.</p>
    <p>Many successful multi-bagger investments come from companies that combine <strong>growth potential with operational strength</strong>.</p>

    <hr className="chapter-rule" />
    <h3>Patience and Long-Term Perspective</h3>
    <p>Multi-bagger investments rarely emerge overnight.</p>
    <p>In many cases, companies that eventually multiply in value take <strong>many years to deliver their full potential</strong>.</p>
    <p>During this time, stock prices may experience periods of volatility, consolidation or temporary setbacks.</p>
    <p>Investors who identify strong businesses early often benefit from <strong>long-term compounding</strong>, provided they remain patient and disciplined.</p>

    <hr className="chapter-rule" />
    <h3>Final Thought</h3>
    <p>Finding potential multi-bagger companies involves combining several elements:</p>
    <ul className="pl-6">
      <li>identifying industries with strong tailwinds</li>
      <li>recognizing emerging market leaders</li>
      <li>focusing on companies with long growth runways</li>
      <li>ensuring strong financial fundamentals</li>
    </ul>
    <p>While not every investment will become a multi-bagger, applying these principles can help investors discover businesses with <strong>the potential to create significant long-term value</strong>.</p>
    <p>Ultimately, the most powerful driver of investment success remains the ability to <strong>identify strong businesses early and allow time for growth and compounding to unfold.</strong></p>
  </>
);

/* =================================================================
   CHAPTERS ARRAY
   ================================================================= */
export const chapters = [
  {
    title: "Chapter 1: What Is Fundamental Analysis?",
    content: <ChapterOne />,
  },
  {
    title: "Chapter 2: How Businesses Actually Make Money",
    content: <ChapterTwo />,
  },
  {
    title: "Chapter 3: Where to Find Data for Fundamental Analysis",
    content: <ChapterThree />,
  },
  {
    title: "Chapter 4: The Income Statement \u2014 Understanding a Company\u2019s Profit Story",
    content: <ChapterFour />,
  },
  {
    title: "Chapter 5: The Balance Sheet \u2014 Understanding a Company\u2019s Financial Strength",
    content: <ChapterFive />,
  },
  {
    title: "Chapter 6: The Cash Flow Statement \u2014 Understanding the Movement of Cash",
    content: <ChapterSix />,
  },
  {
    title: "Chapter 7: Financial Ratios \u2014 Turning Numbers Into Insights",
    content: <ChapterSeven />,
  },
  {
    title: "Chapter 8: Profitability Ratios \u2014 Interpreting Margins in Real Businesses",
    content: <ChapterEight />,
  },
  {
    title: "Chapter 9: Return Ratios \u2014 Measuring How Efficiently Capital Is Used",
    content: <ChapterNine />,
  },
  {
    title: "Chapter 10: Financial Strength Ratios \u2014 Evaluating Balance Sheet Risk",
    content: <ChapterTen />,
  },
  {
    title: "Chapter 11: Valuation Ratios \u2014 Understanding What a Business Is Worth",
    content: <ChapterEleven />,
  },
  {
    title: "Chapter 12: Understanding Growth \u2014 The Engine of Long-Term Returns",
    content: <ChapterTwelve />,
  },
  {
    title: "Chapter 13: Quality of Growth \u2014 Understanding Whether Growth Is Sustainable",
    content: <ChapterThirteen />,
  },
  {
    title: "Chapter 14: Economic Moats \u2014 Why Some Companies Sustain Growth for Decades",
    content: <ChapterFourteen />,
  },
  {
    title: "Chapter 15: Industry Structure \u2014 Why Some Industries Produce Better Businesses",
    content: <ChapterFifteen />,
  },
  {
    title: "Chapter 16: Management Quality \u2014 The People Behind the Business",
    content: <ChapterSixteen />,
  },
  {
    title: "Chapter 17: Reading Annual Reports \u2014 Extracting Valuable Insights from Company Disclosures",
    content: <ChapterSeventeen />,
  },
  {
    title: "Chapter 18: Intrinsic Value \u2014 Estimating What a Business Is Worth",
    content: <ChapterEighteen />,
  },
  {
    title: "Chapter 19: Red Flags in Fundamental Analysis \u2014 Identifying Warning Signs",
    content: <ChapterNineteen />,
  },
  {
    title: "Chapter 20: How to Combine Fundamental and Technical Analysis",
    content: <ChapterTwenty />,
  },
  {
    title: "Chapter 21: Case Study \u2014 Analyzing a High-Quality Compounder",
    content: <ChapterTwentyOne />,
  },
  {
    title: "Chapter 22: Case Study \u2014 Understanding a Cyclical Business",
    content: <ChapterTwentyTwo />,
  },
  {
    title: "Chapter 23: Case Study \u2014 Understanding a Turnaround Story",
    content: <ChapterTwentyThree />,
  },
  {
    title: "Chapter 24: The Complete Investor Framework \u2014 Bringing Everything Together",
    content: <ChapterTwentyFour />,
  },
  {
    title: "Bonus Chapter: How to Find Potential Multi-Bagger Companies",
    content: <BonusChapter />,
  },
];
