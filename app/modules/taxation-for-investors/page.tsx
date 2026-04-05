"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

const imgStyle: React.CSSProperties = {
  display: "block",
  margin: "28px auto",
  maxWidth: "100%",
  borderRadius: 12,
  border: "1px solid rgba(201,168,76,0.15)",
};

// ============================================================
//  ALL CHAPTER CONTENT - module-level to avoid Turbopack bug
// ============================================================
const chapters: { title: string; content: React.ReactNode }[] = [

    // ==============================
    // CHAPTER 1
    // ==============================
    {
      title: "Chapter 1: Understanding the Income Tax System in India",
      content: (
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
    },

    // ==============================
    // CHAPTER 2
    // ==============================
    {
      title: "Chapter 2: Capital Gains - The Foundation of Investment Taxation",
      content: (
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
    },

    // ==============================
    // CHAPTER 3
    // ==============================
    {
      title: "Chapter 3: Taxation of Equity Investments",
      content: (
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
    },

    // ==============================
    // CHAPTER 4
    // ==============================
    {
      title: "Chapter 4: Taxation of Mutual Funds",
      content: (
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
    },

    // ==============================
    // CHAPTER 5
    // ==============================
    {
      title: "Chapter 5: Growth vs IDCW - Tax Impact and Compounding",
      content: (
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
    },

    // ==============================
    // CHAPTER 6
    // ==============================
    {
      title: "Chapter 6: Dividend Taxation",
      content: (
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
    },

    // ==============================
    // CHAPTER 7
    // ==============================
    {
      title: "Chapter 7: Interest Income and Fixed Income Taxation",
      content: (
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
    },

    // ==============================
    // CHAPTER 8
    // ==============================
    {
      title: "Chapter 8: Tax Loss Harvesting",
      content: (
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
    },

    // ==============================
    // CHAPTER 9
    // ==============================
    {
      title: "Chapter 9: Practical Tax Tips for Investors",
      content: (
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
    },
];

export default function TaxationForInvestorsPage() {
  const { t } = useLanguage();

  // ============================================================
  // STATE & PARAMS
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const chapterFromURL = searchParams.get("chapter");

  const [chapterIndex, setChapterIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const moduleId = "taxation-for-investors";

  const current = chapters[chapterIndex];

  useEffect(() => {
    async function loadProgress() {
      const chapter = chapterFromURL;

      if (chapter) {
        setChapterIndex(Number(chapter));
        setIsLoading(false);
        return;
      }

      const res = await fetch("/api/modules", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.moduleId === moduleId) {
          setChapterIndex(data.chapterNumber ?? 0);
        }
      }

      setIsLoading(false);
    }

    loadProgress();
  }, []);

  async function saveProgress(chapterNumber: number) {
    await fetch("/api/modules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, chapterNumber }),
    });
  }

  if (isComplete) {
    return (
      <main className="container module-detail-container">
        <div className="module-progress-header">
          <div className="progress-wrap">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>
            <span className="progress-label">
              {chapters.length} of {chapters.length} {t("chapters")}
            </span>
          </div>
          <div className="chapter-dots">
            {chapters.map((_, i) => (
              <button
                key={i}
                className="chapter-dot done"
                onClick={() => { setIsComplete(false); setChapterIndex(i); saveProgress(i); }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="complete-body">
        <div className="complete-inner">
          <div className="complete-icon">🎓</div>
          <div className="complete-title">
            Module 9<br /><em>Complete.</em>
          </div>
          <p className="complete-sub">
            You&apos;ve finished Taxation for Investors &mdash; all 9 chapters. You now understand how capital gains, mutual fund income, dividends, interest and tax loss harvesting work under the Indian tax system &mdash; and how to apply that knowledge to keep more of what you earn.
          </p>
          <button className="complete-btn" onClick={() => router.push("/modules")}>
            ← Back to All Modules
          </button>
        </div>
      </div>
      </main>
    );
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
            {chapterIndex + 1} of {chapters.length} {t("chapters")}
          </span>
        </div>
        <div className="chapter-dots">
          {chapters.map((_, i) => {
            const dotIdx = i;
            return (
              <button
                key={dotIdx}
                className={[
                  "chapter-dot",
                  chapterIndex > dotIdx ? "done" : "",
                  chapterIndex === dotIdx ? "active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  setChapterIndex(dotIdx);
                  saveProgress(dotIdx);
                }}
              >
                {dotIdx + 1}
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
      <div className="chapter-nav">
        <button
          className="nav-btn prev"
          onClick={async () => {
            setChapterIndex((i) => {
              const newIndex = Math.max(0, i - 1);
              saveProgress(newIndex);
              return newIndex;
            });
          }}
          disabled={chapterIndex === 0}
        >
          ← {t("previous")}
        </button>

          <span className="nav-chapter-info">
            {`${chapterIndex + 1} / ${chapters.length}`}
          </span>
          <span className="nav-divider" />
        <button
          className="nav-btn next"
          onClick={async () => {
            if (chapterIndex === chapters.length - 1) {
              await saveProgress(chapterIndex);
              setIsComplete(true);
            } else {
              setChapterIndex((i) => {
                const newIndex = Math.min(chapters.length - 1, i + 1);
                saveProgress(newIndex);
                return newIndex;
              });
            }
          }}
        >
          {chapterIndex === chapters.length - 1 ? "Finish ✓" : `${t("next")} →`}
        </button>
      </div>

    </main>
  );
}
