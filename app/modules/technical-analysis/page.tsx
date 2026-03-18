"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useEffect } from "react";

import "../modules.css";
import "../module-detail.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function TechnicalAnalysisPage() {
  const { t } = useLanguage();
  // ============================================================
  // ALL CHAPTER CONTENT
  // ============================================================
  const chapters = [
    {
      title: "Chapter 1: What Is Technical Analysis (And What It Is Not)",
      content: (
        <>
          <p>Before we dive into indicators and patterns, we need clarity on what Technical Analysis (TA) truly is. It is often misunderstood. Some see it as speculation. Others think it is prediction. In reality, it is neither magic nor guesswork - it is a structured way of reading price behavior.</p>
          <p>Technical Analysis is the study of price and volume to understand how market participants are behaving. It focuses on probability, trend, and momentum - not on calculating intrinsic value.</p>
          <p>At a practical level, technical analysis helps you understand: where the market is likely trending, whether momentum is strengthening or weakening, where buyers and sellers are active, and when risk is increasing.</p>
          <p>It does not replace fundamentals. It complements them.</p>
          <hr className="chapter-rule" />
          <h3>The Three Foundational Principles</h3>
          <p><strong>1. Price Discounts Everything</strong> - All known information (earnings, news, expectations, macro developments) is already reflected in price. Charts reflect collective interpretation of information, not just raw data.</p>
          <p><strong>2. Price Moves in Trends</strong> - Markets move in phases: uptrends (higher highs, higher lows), downtrends (lower highs, lower lows), and sideways consolidation. Identifying the dominant trend is the first step in any technical approach.</p>
          <p><strong>3. History Repeats Because Human Behavior Repeats</strong> - Markets evolve, but fear and greed do not. Panic selling and euphoric buying have existed for decades and charts visually capture these emotional cycles.</p>
          <hr className="chapter-rule" />
          <h3>Technical vs Fundamental Analysis</h3>
          <p>Fundamental analysis studies earnings growth, profitability, debt levels and business quality. Technical analysis studies price structure, momentum, volume and trend behavior.</p>
          <p>The intelligent framework is: <strong>fundamentals tell you what to buy, technicals tell you when to buy.</strong></p>
          <p>For example, you may identify a fundamentally strong company. Instead of buying at an overheated peak, you wait for a pullback to support, a breakout from consolidation, or momentum indicators cooling. That is not trading - that is disciplined investing.</p>
          <hr className="chapter-rule" />
          <h3>Where This Module Fits: Investing vs Trading</h3>
          <p>In long-term investing, the holding period is measured in years and the primary goal is compounding wealth. Here, technical analysis is not used for constant buying and selling, but for improving entry timing, avoiding euphoric peaks and managing risk during volatile phases. It acts as a support tool to strengthen long-term conviction.</p>
          <p>In position-based investing, the holding period typically ranges from a few weeks to several months, with the objective of riding medium-term trends. In this approach, technical analysis plays a larger role in identifying breakouts, pullbacks, and momentum shifts.</p>
          <p>This module includes concepts that are useful for both investors and position-based participants. However, our primary focus will be on investors who want better timing, improved entry discipline, and stronger structural clarity - rather than aggressive short-term trading strategies.</p>
          <hr className="chapter-rule" />
          <h3>What Technical Analysis Is Not</h3>
          <p>Technical analysis is not a guarantee of profit, a tool to predict exact price levels, a replacement for sound risk management, or a shortcut to quick or effortless wealth. It is a probability framework. It helps improve decision-making and increase your edge over time - but success still depends on discipline, patience, and proper risk control.</p>
          <blockquote className="pull-quote">The goal is not to predict every market move but to build a repeatable decision-making framework that improves your timing and reduces avoidable mistakes.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 2: Charts - The Foundation of Price Analysis",
      content: (
        <>
          <p>A chart is simply a visual representation of price movement over time. The horizontal axis represents time. The vertical axis represents price. Everything in technical analysis is built on how price is displayed. Different chart types present the same data in different formats. Choosing the right one improves clarity.</p>
          <hr className="chapter-rule" />
          <h3>1. Line Chart - The Simplest Form</h3>
          <p>A line chart connects the closing prices over time with a single continuous line. Because it focuses only on closing prices and ignores intraday highs and lows, it removes a lot of short-term noise. This makes it very useful when you simply want to understand the overall direction of a stock or index.</p>
          <p>Line charts are especially helpful for beginners and long-term investors. If your goal is to identify the primary trend rather than analyze daily fluctuations, a line chart gives you clean clarity. However, it does not show detailed price behavior within each period - you won&apos;t see how volatile a day was or where buyers and sellers fought, only where price finally closed.</p>
          <hr className="chapter-rule" />
          <h3>2. Bar Chart - OHLC</h3>
          <p>A bar chart becomes powerful once you understand OHLC - Open, High, Low, Close. In NSE-listed stocks: <strong>Open</strong> is the first traded price at 9:15 AM. <strong>High</strong> is the highest price during the session. <strong>Low</strong> is the lowest price. <strong>Close</strong> is the final price at 3:30 PM.</p>
          <p>Each bar represents this entire day&apos;s battle between buyers and sellers. On a bar chart, the vertical bar spans the High-to-Low range. A small horizontal tick on the left marks the Open; a tick on the right marks the Close. Even without colors, the relative position of open and close tells you whether the session was broadly bullish (close above open) or bearish (close below open).</p>
          <p>In Indian markets, gap openings are common due to global cues (US markets, SGX Nifty, crude oil, global news). So the Open can be significantly different from the previous day&apos;s Close. That gap itself carries information.</p>
          <p>When you move to weekly or monthly charts, the meaning of OHLC remains the same but the time period expands. Each bar now summarizes a much larger period of market activity, giving you a broader and more stable view of trend and capital flow.</p>
          <hr className="chapter-rule" />
          <h3>3. Candlestick Chart - Most Popular Format</h3>
          <p>Candlestick charts display the same OHLC data but in a much more visual and intuitive format. Instead of simple vertical lines with ticks, candlesticks use a rectangular &quot;body&quot; to represent the difference between the open and close.</p>
          <p>If the close is above the open, the candle is typically shown in green (bullish), indicating buyers were in control. If the close is below the open, it is shown in red (bearish), indicating selling pressure. The thin lines above and below the body - called wicks (or shadows) - represent the highest and lowest prices reached during that period.</p>
          <p>This structure allows you to instantly understand who controlled the session, how strong the move was, whether there was rejection at higher or lower levels, and how volatile the period was. Because candlesticks combine clarity with detail, they have become the most widely used chart format in modern technical analysis.</p>
          <blockquote className="pull-quote">Different chart types present the same data differently. Line charts show direction. Bar charts show OHLC detail. Candlesticks show all of it - visually and intuitively.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 3: Market Structure & Trend Theory",
      content: (
        <>
          <p>Trend is the foundation of technical analysis. Price does not move randomly all the time - it usually moves in a direction: upward, downward, or sideways. That overall direction is called the trend. Everything else in technical analysis is built on identifying and respecting that direction.</p>
          <p>Indicators are secondary. Trend structure is primary. If you misread the trend, you may buy too early in a falling market, sell too quickly in a rising market, or mistake temporary movements for major reversals.</p>
          <hr className="chapter-rule" />
          <h3>1. Higher Highs and Higher Lows - Uptrend</h3>
          <p>In an uptrend, price makes a new high, pulls back, but does not fall below the previous major low. Then it moves up again and makes another higher high. This sequence shows that buyers are consistently willing to step in at higher prices. On a chart, you will see a staircase-like pattern moving upward.</p>
          <p>As long as higher lows remain intact, the uptrend is healthy. Once a higher low breaks decisively, the structure begins to weaken. For investors, pullbacks to higher lows are often opportunities rather than threats - buying near higher lows improves risk-reward and aligns you with the direction of strength.</p>
          <hr className="chapter-rule" />
          <h3>2. Lower Highs and Lower Lows - Downtrend</h3>
          <p>In a downtrend, price falls to a new low, attempts to rally, but fails to cross the previous high. It then falls again to a lower low. This indicates sellers are in control and price is consistently being pushed lower. Each rally fails at a lower level than the previous one - sellers are stepping in earlier on every bounce.</p>
          <p>In this phase, rallies are often selling opportunities, buying aggressively carries higher risk, and &quot;cheap&quot; prices can become cheaper. For long-term investors, structural downtrends require caution - waiting for signs of stabilization helps protect capital, and capital protection is the first rule of compounding.</p>
          <hr className="chapter-rule" />
          <h3>3. Sideways Range - Consolidation</h3>
          <p>Sometimes price moves within a defined range - forming a sideways market or consolidation phase. There are no clear higher highs or lower lows. Price oscillates between support and resistance. This phase reflects indecision - buyers and sellers are temporarily balanced.</p>
          <p>Consolidation is important because it often precedes a larger move. A breakout above resistance may signal a new uptrend; a breakdown below support may signal continuation downward. Sideways phases are frequently accumulation zones (strong hands buying quietly) or distribution zones (large players gradually exiting).</p>
          <hr className="chapter-rule" />
          <h3>Dow Theory - The Origin of Trend Analysis</h3>
          <p>Modern technical analysis is strongly influenced by Dow Theory. Developed from the work of Charles Dow, it identified three types of trends: the <strong>Primary Trend</strong> (long-term direction, lasting months or years), the <strong>Secondary Trend</strong> (temporary corrections or rallies against the primary trend), and <strong>Minor Trends</strong> (short-term daily noise).</p>
          <p>Think of it like waves in the ocean. The primary trend is the tide. Secondary trends are waves. Minor trends are ripples. For investors, the primary trend is what matters most. Not every fall is a crash. Not every rise is a recovery. When you align your decisions with the primary trend, you reduce emotional reactions and make more structured, disciplined decisions.</p>
          <hr className="chapter-rule" />
          <h3>The Four Market Phases</h3>
          <p>Markets move in cycles through four broad phases. In the <strong>Accumulation</strong> phase, after a prolonged decline, selling pressure reduces and smart money begins buying quietly while news sentiment remains negative. In the <strong>Markup Phase</strong>, price breaks above the range, public participation increases, and higher highs and higher lows form. In the <strong>Distribution</strong> phase, price stalls near highs, smart money gradually exits, and volatility increases. In the <strong>Markdown Phase</strong>, support breaks, lower highs and lower lows form, and panic selling follows.</p>
          <p>Understanding these phases helps investors avoid one of the most common mistakes - buying heavily during distribution peaks. When you can recognize where the market stands in its cycle, you stop reacting emotionally and start acting structurally.</p>
          <blockquote className="pull-quote">Trend first. Indicators second. Trend gives context. Indicators give timing.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 4: Candlestick Charts - Deep Dive",
      content: (
        <>
          <p>Candlesticks are not just visual tools on a chart. They are compressed stories of what happened during a specific time period - whether that period is a day, a week, or even a month. Within a single candle, you can see the entire battle between buyers and sellers: the opening sentiment, the highest optimism, the deepest fear, and where the market finally settled.</p>
          <p>Every candle quietly answers three important questions: Who was in control - buyers or sellers? How strong was that control? Was there rejection at certain price levels?</p>
          <hr className="chapter-rule" />
          <h3>The Body - Measuring Conviction</h3>
          <p>The body of a candlestick represents the distance between the open and the close. A <strong>large body</strong> signals strong conviction - one side controlled the session decisively. A <strong>small body</strong> reflects hesitation or balance - price may have moved during the session but ultimately closed near where it opened.</p>
          <p>If a candle closes significantly higher than it opened, buyers clearly dominated the session. The stronger and cleaner the body, the stronger the buying pressure. If a candle closes much lower than it opened, sellers controlled the session. For investors, a large bullish body near support can indicate renewed strength; a large bearish body near resistance can signal emerging supply.</p>
          <hr className="chapter-rule" />
          <h3>The Wicks - Measuring Rejection</h3>
          <p>The thin lines above and below the body are called wicks. While the body shows conviction, the wicks reveal rejection - where price attempted to move but failed to sustain.</p>
          <p>A <strong>long lower wick</strong> tells a clear story: sellers pushed the price down during the session, but buyers stepped in and absorbed that selling pressure, driving price back up before the close. This suggests demand emerging at lower levels. A <strong>long upper wick</strong> tells the opposite: buyers pushed price higher, but sellers entered aggressively at higher levels and price failed to sustain the highs. This suggests supply emerging above.</p>
          <p>In simple terms: the body shows control. The wicks show resistance and rejection.</p>
          <hr className="chapter-rule" />
          <h3>Strong vs Weak Candles</h3>
          <p>Color alone does not determine strength - structure does. A <strong>strong bullish candle</strong> typically closes near its high, has a large body, and shows little to no upper wick. A <strong>weak bullish candle</strong> has a long upper wick and closes noticeably below its high - buyers pushed price up, but sellers stepped in before the close.</p>
          <p>The key lesson: context matters more than color. A green candle in a downtrend may just be a temporary bounce. A red candle in an uptrend may simply be a healthy pullback. Strength is defined by location, structure and surrounding trend - not appearance alone.</p>
          <hr className="chapter-rule" />
          <h3>Single-Candle Patterns: Hammer &amp; Shooting Star</h3>
          <p>A <strong>Hammer</strong> has a small body, a long lower wick, little to no upper wick, and typically appears after a decline. It tells this story: sellers pushed price down significantly, but buyers stepped in aggressively and drove it back up before the close. When this appears after a pullback or near support, it can indicate potential buyer strength and returning demand.</p>
          <p>A <strong>Shooting Star</strong> has a small body, a long upper wick, little to no lower wick, and typically appears near recent highs. Buyers pushed price higher, but sellers entered strongly and forced it back down before the close. When this appears near resistance or after a strong rally, it can indicate potential supply entering the market and short-term exhaustion.</p>
          <hr className="chapter-rule" />
          <h3>Single-Candle Patterns: Doji &amp; Marubozu</h3>
          <p>A <strong>Doji</strong> has a very small body where open and close are nearly equal. It reflects indecision - neither buyers nor sellers gained clear control. After a strong rally, a doji may indicate momentum slowing. After a sharp decline, it may signal stabilization. On its own, it does not confirm reversal - it simply signals balance or hesitation.</p>
          <p>A <strong>Marubozu</strong> is one of the strongest single-candle signals of conviction. It has a large body with little to no upper or lower wick - price moved strongly in one direction and stayed there. A bullish Marubozu (opens near low, closes near high) often appears during strong breakouts or markup phases. A bearish Marubozu (opens near high, closes near low) appears during breakdowns or panic-driven selling. Unlike candles with long wicks that show conflict, a Marubozu shows clarity and dominance. However, context still matters - structure determines sustainability.</p>
          <blockquote className="pull-quote">These candles are not guarantees of reversal or continuation. They are signals of shifting pressure. Their meaning depends entirely on the broader trend, their location (support or resistance), and what follows in the next session.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 5: Multi-Candle Patterns",
      content: (
        <>
          <p>Single candles show pressure within one session. Multi-candle patterns, however, show pressure shifting over multiple sessions - revealing a transition from selling to buying or from buying to selling. That transition is important. One candle can be noise; when two or three candles form a structured sequence, it shows developing conviction and a change in control that unfolds over time.</p>
          <p>In simple terms: single candle = snapshot. Multi-candle pattern = developing narrative. But even here, the hierarchy matters: Trend first. Structure second. Patterns third. Patterns without trend and structure are random shapes. Patterns within structure become probability signals.</p>
          <hr className="chapter-rule" />
          <h3>Bullish Engulfing - Demand Overpowers Supply</h3>
          <p>Structure: First candle is a small bearish body. Second candle is a larger bullish body that completely engulfs the real body of the first candle. On Day 1, sellers are in control. On Day 2, buyers step in with force, absorb the remaining selling pressure, and push price strongly upward - closing above the entire body of the previous session. This represents a clear shift in momentum and signals that demand has taken control decisively.</p>
          <p>A bullish engulfing pattern is most meaningful when it appears near a strong support level, after a pullback within a broader uptrend, at the end of a corrective phase, or near a higher low in an existing bullish structure. For investors, aligned with trend and support, it becomes a high-probability signal of renewed upward momentum.</p>
          <hr className="chapter-rule" />
          <h3>Bearish Engulfing - Supply Overpowers Demand</h3>
          <p>Structure: First candle is a small bullish body. Second candle is a larger bearish body that completely engulfs the real body of the first candle. On Day 1, buyers appear in control. On Day 2, sellers enter aggressively, absorb buying pressure, and push price down strongly - closing below the entire body of the previous candle. This signals a sharp shift in momentum and suggests supply has emerged decisively.</p>
          <p>A bearish engulfing pattern carries more weight near a well-defined resistance level, after an extended rally, in late-stage uptrends, or within distribution zones. For investors it signals caution - a potential pullback, a pause in momentum, or increased short-term risk.</p>
          <hr className="chapter-rule" />
          <h3>Morning Star - Structured Reversal</h3>
          <p>Structure: First candle is a large bearish body. Second candle is a small indecision candle (doji or small body). Third candle is a large bullish body. The pattern tells a clear story: strong selling dominates initially; then comes hesitation as selling pressure slows; finally, strong buying emerges and pushes price higher. This reflects a gradual shift from supply to demand.</p>
          <p>Unlike a single hammer (which shows rejection within one session), the Morning Star builds confirmation across multiple sessions. Morning Star patterns are most meaningful after extended declines, near major support levels, or at the end of corrective phases - where they can signal the beginning of structural stabilization or reversal.</p>
          <hr className="chapter-rule" />
          <h3>Evening Star - Structured Exhaustion</h3>
          <p>Structure: First candle is a large bullish body. Second candle is a small indecision candle. Third candle is a large bearish body. The pattern unfolds in stages: strong buying dominates initially; then comes hesitation as buyers slow down; finally, strong selling emerges and pushes price lower. This sequence reflects exhaustion near highs - buying momentum weakens, uncertainty appears, and sellers begin taking control.</p>
          <p>Evening Star patterns are most meaningful near well-defined resistance levels, after extended rallies, in late-stage uptrends, or within potential distribution zones. For investors, it often signals a possible pullback, a pause in the uptrend, or increasing short-term risk.</p>
          <blockquote className="pull-quote">Patterns are visual summaries of shifting pressure between buyers and sellers. If you understand the behavior - dominance, hesitation, reversal, confirmation - you can interpret most patterns without memorizing dozens of formations.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 6: Support and Resistance",
      content: (
        <>
          <p>If trend gives direction and candlesticks show behavior, then Support &amp; Resistance define location - and in markets, location often matters more than anything else. A bullish pattern in the middle of nowhere carries little weight. The same pattern near a major support zone carries significance.</p>
          <hr className="chapter-rule" />
          <h3>What Is Support?</h3>
          <p>Support is a price level where buying interest becomes strong enough to prevent further decline. It is the area where demand consistently absorbs supply - a zone where buyers have historically stepped in and defended price. On a chart, support is typically visible where price repeatedly stops falling, buyers step in aggressively, long lower wicks appear, and price reverses upward multiple times.</p>
          <p>It is important to understand that support is not a single exact line. Support is a <strong>zone</strong> - an area of interest where buying pressure tends to increase. When plotting support, zoom out first to weekly or daily timeframes, mark levels where price has reacted two or more times, draw a horizontal zone (not a thin line), and observe whether buyers step in again when price revisits that zone.</p>
          <p>Buying near support improves structure and risk control because it replaces emotion with logic. When you enter near support, risk is defined - if price decisively breaks below that support zone, the structure weakens and gives you a clear signal. It also reduces emotional decision-making: support is typically where fear increases, headlines may be negative, and momentum may look weak. That is precisely why disciplined investors prepare at those levels instead of reacting late.</p>
          <hr className="chapter-rule" />
          <h3>What Is Resistance?</h3>
          <p>Resistance is a price level where selling pressure becomes strong enough to prevent further rise. It is the area where supply consistently absorbs demand - a zone where sellers have historically stepped in and capped price advances. On a chart, resistance is visible where price repeatedly fails to move higher, upper wicks appear near similar levels, and rallies stall or reverse downward.</p>
          <p>Like support, resistance is a zone, not a precise line. Plot it by zooming out first, looking for multiple rejections at similar levels, drawing a zone (not a thin line), and observing momentum and volume when price revisits resistance. Buying aggressively near resistance increases risk - upside may be limited, probability of pullback increases, and risk-reward becomes unfavorable. Patience becomes a strategic advantage: instead of chasing strength into resistance, disciplined investors wait for a healthy pullback toward support or a decisive breakout with strong volume.</p>
          <hr className="chapter-rule" />
          <h3>Why Support &amp; Resistance Exist</h3>
          <p>These levels form because of human memory, institutional positioning, psychological anchoring, and past transaction clusters. Markets are made of participants - and participants remember prices. If a large number of investors bought a stock at ₹1,000 and price later falls back to ₹1,000, many of them may step in again, creating demand concentration. Similarly, investors who bought at ₹1,500 and saw price fall sharply may sell when price revisits ₹1,500 just to &quot;get their money back,&quot; creating supply concentration. In essence, charts reflect collective memory and positioning.</p>
          <hr className="chapter-rule" />
          <h3>Role Reversal - Old Resistance Becomes New Support</h3>
          <p>One of the strongest principles in technical analysis: <strong>old resistance becomes new support; old support becomes new resistance.</strong> When a stock repeatedly struggles near ₹1,200 and then decisively breaks above it with strong momentum, the sellers who were defending ₹1,200 have been absorbed. When price later pulls back toward ₹1,200, buyers often step in near that same level - the old ceiling becomes a floor. Role reversal often provides high-probability entries because trend is confirmed (breakout occurred), location is logical (pullback to prior resistance), and risk is defined (below the level).</p>
          <hr className="chapter-rule" />
          <h3>Psychological Levels &amp; Breakouts vs Fake Breakouts</h3>
          <p>Round numbers like ₹100, ₹500, ₹1,000, ₹2,000 and index levels like 20,000 or 25,000 attract disproportionate attention. They are easy to remember and anchor to, drawing stop-loss orders, target bookings, breakout entries, and large institutional orders. These psychological levels often act as temporary support or resistance because of collective attention - not technical calculation.</p>
          <p>Not every breakout is real. A <strong>valid breakout</strong> typically shows a decisive close above resistance (not just an intraday spike), a strong body candle with minimal upper wick, expansion in volume, and follow-through in the next session. A <strong>false breakout</strong> shows a long upper wick above resistance, weak close back near or below the breakout level, immediate reversal, and low volume. For investors, patience is critical - wait for strong close, confirmation, or a retest of the breakout level before acting. Breakouts reward discipline. Fake breakouts punish impatience.</p>
          <blockquote className="pull-quote">Support and resistance are zones of probability - areas where fear increases, greed increases, and decisions cluster. Patterns become far more powerful at these levels. A bullish pattern at major support is meaningful. The same pattern in the middle of a range is not.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 7: Volume - The Truth Behind Price Moves",
      content: (
        <>
          <p>Price tells you what is happening. Volume tells you how serious it is. A price move without volume is like a speech without conviction - it may sound impressive, but few people are truly listening or responding. Such moves are often fragile and prone to reversal. A price move with strong volume reflects commitment - it suggests a large number of participants, often including institutions, are involved.</p>
          <p>Volume measures participation and participation reveals intent. Price shows direction. Volume shows the strength behind that direction.</p>
          <hr className="chapter-rule" />
          <h3>Why Volume Matters</h3>
          <p>Not all price movements carry equal weight. A stock rising 3% on very low volume does not carry the same significance as a 3% move backed by heavy trading activity. A 5% rally on low volume may simply reflect short-term buying or limited liquidity - such rallies often fade because they lack broad conviction. In contrast, a 5% rally on very high volume suggests aggressive accumulation and significant capital, often institutional money, entering the stock.</p>
          <p>Volume helps answer critical questions: Are institutions participating or is this retail-driven noise? Is the move sustainable or likely to reverse? Is this breakout genuine or just a temporary spike? Strong trends are usually supported by strong volume - sustained uptrends often show expanding volume during rallies and lighter volume during pullbacks.</p>
          <hr className="chapter-rule" />
          <h3>Volume During Breakouts</h3>
          <p>When price breaks above a well-defined resistance level, the real question is not just whether price broke the level - it&apos;s whether the market accepted the breakout. Volume provides that answer. Breakouts require new buyers. For price to move into higher territory and sustain there, fresh demand must enter the market. A high-volume breakout indicates broad participation, institutional interest, and willingness to transact at higher prices. A low-volume breakout suggests limited conviction and higher probability of reversal.</p>
          <p>For investors, instead of reacting to the first breakout candle, wait for a strong close above resistance, noticeable expansion in volume, and follow-through in subsequent sessions. Volume confirmation improves probability and reduces emotional chasing.</p>
          <hr className="chapter-rule" />
          <h3>Volume During Pullbacks</h3>
          <p>In a healthy uptrend, the ideal volume behavior is: pullbacks occur on declining volume, rallies resume with increasing volume. When price pulls back on lower volume, it suggests selling pressure is limited - the correction is often a pause, not a shift in control. When the uptrend resumes and volume expands again, it shows buyers stepping back in with conviction.</p>
          <p>However, if a pullback occurs on heavy volume, caution is required. High-volume declines can signal institutions reducing positions, distribution near highs, or early signs of structural weakness. Light volume on declines = normal correction. Heavy volume on declines = investigate further.</p>
          <hr className="chapter-rule" />
          <h3>Volume Spikes &amp; Accumulation vs Distribution</h3>
          <p>Sudden volume spikes are rarely random - they usually signal that something important is happening. However, a spike alone does not tell you whether the move is bullish or bearish. The key question is: &quot;Where is volume high and what is price doing there?&quot; A volume spike near support with a long lower wick may signal capitulation and a potential turning point. A volume spike near highs with a bearish engulfing candle may indicate distribution and caution.</p>
          <p>During <strong>accumulation</strong>, price moves sideways within a range, volume gradually increases, and strong hands quietly build positions. During <strong>distribution</strong>, price stalls near highs, rallies become weaker, and volume increases on down days - institutions gradually reduce exposure into retail optimism. Volume reveals what price alone cannot. Understanding this distinction helps investors avoid buying late-stage rallies and recognize early-stage positioning.</p>
          <blockquote className="pull-quote">Volume is not a standalone trigger - it is a confirmation tool. Structure tells you where to focus. Candlesticks show behavior. Volume confirms conviction. When all three align, probability improves.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 8: Moving Averages",
      content: (
        <>
          <p>If support and resistance define horizontal battle zones, moving averages help you understand trend direction and dynamic structure. They smooth out price action, reduce noise, and help you see the bigger picture.</p>
          <hr className="chapter-rule" />
          <h3>What Is a Moving Average?</h3>
          <p>A moving average (MA) is the average closing price of a stock calculated over a specific number of periods. For example, a 20-day MA is the average closing price of the last 20 trading days. Each day, a new closing price is added and the oldest one drops out. Because the data set keeps updating, the average &quot;moves&quot; forward over time - hence the name moving average. You do not need to calculate these manually; they are all built into charting platforms.</p>
          <p>The primary purpose is to smooth price fluctuations. If the moving average is rising, the broader trend is upward. If it is falling, the broader trend is downward. If it is flat, the market may be consolidating. In simple terms, a moving average filters chaos and highlights structure.</p>
          <hr className="chapter-rule" />
          <h3>Most Important Moving Averages for Investors</h3>
          <p>Most investors focus on three key moving averages representing different layers of trend: the <strong>20-day MA</strong> (short-term trend - reacts quickly, helps identify short-term momentum and minor pullbacks), the <strong>50-day MA</strong> (medium-term trend - widely used by institutions, price often pulls back toward the 50 DMA and resumes higher in healthy uptrends), and the <strong>200-day MA</strong> (long-term trend - most important for long-term investors, reflects roughly one year of trading sessions).</p>
          <p>The 200 DMA is widely tracked in Indian markets by both institutions and retail participants, making it self-reinforcing. When price trades above a rising 200 DMA, the long-term trend is considered positive and pullbacks are more likely to be corrections within an uptrend. When price falls below the 200 DMA, caution increases and long-term structure may be weakening. However, a single close below the 200 DMA does not automatically signal disaster - what matters is sustained behavior and slope.</p>
          <hr className="chapter-rule" />
          <h3>Dynamic Support &amp; Resistance</h3>
          <p>Unlike horizontal support and resistance, moving averages are dynamic - they move with price over time. In strong uptrends, moving averages often act as dynamic support. Pullbacks toward a rising 50 DMA often find buyers and the uptrend resumes. This behavior signals trend strength. In weak structures, moving averages often act as dynamic resistance - rallies stall near the falling average and sellers step in.</p>
          <p>For investors, this concept is extremely practical. Buying near a rising moving average in an uptrend improves structure. Buying near a falling moving average in a downtrend increases risk. Dynamic support and resistance keep you aligned with trend - not fighting against it.</p>
          <hr className="chapter-rule" />
          <h3>Moving Average Crossovers &amp; Slope</h3>
          <p>A crossover occurs when a shorter-term MA crosses above or below a longer-term MA. When the 50 DMA crosses above the 200 DMA, it is called a <strong>Golden Cross</strong> - often viewed as a long-term bullish confirmation. When the 50 DMA crosses below the 200 DMA, it is called a <strong>Death Cross</strong> - signaling potential long-term weakness.</p>
          <p>However, moving average crossovers are <strong>lagging indicators</strong> - they confirm trends after they have already begun. Use crossovers for trend alignment and structural confirmation, not for exact entry timing or predicting reversals.</p>
          <p>Slope matters as much as location. A rising 200 DMA signals long-term strength - capital is flowing in and pullbacks tend to occur within a broader bullish structure. A flat 200 DMA signals consolidation. A falling 200 DMA signals structural weakness - even short-term rallies may face pressure. Slope reflects momentum in capital movement. For investors, slope helps answer a deeper question: are you investing with the broader flow of money or against it?</p>
          <blockquote className="pull-quote">Moving averages are not magic. Their value lies in structure, not prediction - helping you align with the prevailing trend, avoid fighting broader momentum, and identify healthier pullbacks within uptrends.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 9: RSI - Understanding Momentum & Overbought/Oversold Conditions",
      content: (
        <>
          <p>If trend tells you where price is moving, RSI tells you how strong that movement is. RSI does not measure price directly - it measures momentum. And momentum often shifts before price does.</p>
          <hr className="chapter-rule" />
          <h3>What Is RSI?</h3>
          <p>RSI stands for Relative Strength Index. It is a momentum oscillator that measures the speed and magnitude of recent price movements. RSI moves between 0 and 100. Traditionally, RSI above 70 is considered overbought and RSI below 30 is considered oversold. However, these numbers are not rigid signals - they are reference zones. You do not need to manually calculate RSI; charting platforms do it instantly.</p>
          <p>In strong uptrends, RSI can remain above 60&ndash;70 for extended periods because sustained buying pressure keeps momentum elevated. In strong downtrends, RSI can remain below 40&ndash;30 due to persistent selling pressure. RSI is not a buy/sell switch - it is a momentum gauge that helps you understand whether price is moving with strength, losing momentum, or reaching extremes.</p>
          <hr className="chapter-rule" />
          <h3>What &quot;Overbought&quot; and &quot;Oversold&quot; Actually Mean</h3>
          <p><strong>Overbought does NOT mean &quot;sell immediately.&quot; Oversold does NOT mean &quot;buy immediately.&quot;</strong> These terms describe momentum conditions, not guaranteed reversals. In powerful uptrends, RSI can stay above 60&ndash;70 for extended periods - selling purely because RSI is overbought can mean exiting strong trends too early. In strong downtrends, RSI near 30 often reflects persistent weakness - buying simply because RSI is oversold can mean catching falling knives.</p>
          <hr className="chapter-rule" />
          <h3>RSI Ranges in Uptrends vs Downtrends</h3>
          <p>In healthy uptrends, RSI often stays between 40&ndash;80. Pullbacks frequently find support near 40&ndash;50 and RSI rarely drops below 30. If RSI repeatedly holds above 40 during pullbacks, it confirms underlying strength. In sustained downtrends, RSI often stays between 20&ndash;60. Rallies frequently stall near 50&ndash;60 and RSI rarely crosses above 70. Understanding these shifting ranges is far more important than mechanically reacting to 70 and 30. In uptrends, RSI lives in a higher range. In downtrends, it lives in a lower range.</p>
          <hr className="chapter-rule" />
          <h3>RSI Divergence - Early Warning Signal</h3>
          <p><strong>Divergence</strong> occurs when price and momentum stop moving in sync. In a healthy trend, higher price highs should be accompanied by higher RSI highs. When this relationship breaks, it signals that momentum may be weakening beneath the surface.</p>
          <p><strong>Bullish divergence</strong> occurs when price makes a lower low but RSI makes a higher low. This means sellers pushed price to a new low, but the strength of selling has reduced - suggesting selling pressure may be exhausting. Bullish divergence often appears near major support levels or after extended declines.</p>
          <p><strong>Bearish divergence</strong> occurs when price makes a higher high but RSI makes a lower high. Buyers pushed price to a new high, but underlying momentum failed to confirm the strength - suggesting buying pressure may be weakening. Bearish divergence often appears near resistance levels or after extended rallies.</p>
          <p>Important: divergence signals weakening momentum. Structure confirms whether the shift becomes a reversal. Divergence without structural confirmation can persist for weeks - price can continue rising even with bearish divergence. It is an early warning, not a trigger.</p>
          <blockquote className="pull-quote">Trend first. Support &amp; resistance second. RSI for refinement. RSI measures momentum - momentum shifts can precede price shifts, but structure always carries more weight.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 10: Bollinger Bands - Understanding Volatility & Expansion Phases",
      content: (
        <>
          <p>Markets do not move at a constant speed - they alternate between quiet consolidation and explosive expansion. Bollinger Bands help you visualize this volatility cycle.</p>
          <hr className="chapter-rule" />
          <h3>What Are Bollinger Bands?</h3>
          <p>Bollinger Bands consist of three lines: the <strong>Middle Band</strong> (20-period moving average), the <strong>Upper Band</strong> (Middle Band + 2 standard deviations), and the <strong>Lower Band</strong> (Middle Band − 2 standard deviations). The middle band represents the average price. The upper and lower bands represent statistical boundaries around that average - capturing roughly 95% of normal price action.</p>
          <p>Volatility refers to how much and how quickly price fluctuates. When volatility increases, bands widen. When volatility decreases, bands contract. This dynamic adjustment is what makes Bollinger Bands useful. They are not about direction - they are about volatility and positioning relative to the mean.</p>
          <hr className="chapter-rule" />
          <h3>The Bollinger Squeeze - Compression Before Expansion</h3>
          <p>A squeeze occurs when the distance between the upper and lower bands becomes unusually tight - reflecting a period where price movement has narrowed significantly. During these phases, price often moves within a tight range, candles become smaller, and market participation appears muted. This is not weakness or strength - it is equilibrium. But equilibrium in markets rarely lasts. Low volatility environments tend to transition into high volatility environments. The longer the compression, the more meaningful the eventual expansion can become.</p>
          <p>The squeeze signals that the market is building pressure - but it does not tell you which direction that pressure will resolve. To determine direction, you must analyze the prevailing trend, nearby support or resistance levels, and volume behavior during the breakout. A squeeze is a volatility alert: &quot;Pay attention. A move is coming.&quot; Structure tells you which side has the advantage.</p>
          <hr className="chapter-rule" />
          <h3>Price Touching the Bands - A Common Misconception</h3>
          <p>A very common misconception: price touches the upper band → sell; price touches the lower band → buy. This is overly simplistic and often costly. A band touch does not automatically mean reversal. In strong uptrends, price can &quot;walk the upper band&quot; for extended periods - repeated touches signal strength, not exhaustion. In strong downtrends, price can ride the lower band repeatedly - attempting to buy every lower-band touch in a weak structure can lead to repeated losses. Band interaction must always be interpreted within trend context.</p>
          <hr className="chapter-rule" />
          <h3>Mean Reversion vs Trend Continuation</h3>
          <p>In <strong>range-bound markets</strong> (mean reversion), price tends to oscillate between the upper and lower bands, moves toward one band often reverse toward the middle band, and the 20-period moving average acts as a gravity center. Upper band touches may lead to pullbacks; lower band touches may lead to rebounds. In <strong>trending markets</strong> (trend continuation), price may repeatedly ride the outer band, pullbacks often find support at the middle band, and band expansions accompany directional movement. In strong uptrends, the upper band acts as a pathway and the middle band becomes dynamic support. In strong downtrends, the lower band becomes the dominant boundary.</p>
          <p>Misreading the regime leads to wrong decisions. If you apply mean-reversion logic during a strong trend, you will constantly fight momentum. Bollinger Bands help you interpret which regime you are in.</p>
          <blockquote className="pull-quote">Bollinger Bands measure volatility. RSI measures momentum. Moving averages measure trend. Each tool answers a different question. When volatility expansion, momentum strength, and trend alignment agree, probability improves.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 11: MACD - Measuring Momentum Acceleration & Shift",
      content: (
        <>
          <p>If RSI measures momentum strength, MACD measures momentum acceleration and change. RSI tells you if momentum is stretched. MACD tells you when momentum is shifting. That distinction matters.</p>
          <hr className="chapter-rule" />
          <h3>What Is MACD?</h3>
          <p>MACD stands for Moving Average Convergence Divergence. It measures the distance between two moving averages and tracks how that distance expands or contracts over time. MACD consists of three components: the <strong>MACD Line</strong>, the <strong>Signal Line</strong>, and the <strong>Histogram</strong>. MACD uses Exponential Moving Averages (EMA) - which give more weight to recent prices and react faster than simple moving averages. Because EMAs respond faster, MACD is more sensitive to momentum changes.</p>
          <p>Quick calculation insight (for the curious): MACD Line = 12 EMA minus 26 EMA. Signal Line = 9-period EMA of the MACD Line. The histogram visualizes the gap between these two lines. When the gap widens → momentum is accelerating. When the gap narrows → momentum is slowing. MACD tracks the rate at which momentum is changing, not just the direction price is moving.</p>
          <hr className="chapter-rule" />
          <h3>What the Histogram Shows</h3>
          <p>When the histogram <strong>expands upward</strong>, the gap between the MACD line and signal line increases - upward momentum is strengthening and buyers are becoming more aggressive. When the histogram <strong>begins to shrink</strong>, momentum is still positive but the pace of buying is slowing - the move may be losing force. When the histogram <strong>flips below zero</strong>, downward momentum is increasing. Shrinking histogram does not mean reversal - it means deceleration. MACD highlights transitions in force.</p>
          <hr className="chapter-rule" />
          <h3>Signal Line Crossovers &amp; The Zero Line</h3>
          <p>A <strong>bullish crossover</strong> occurs when the MACD line crosses above the signal line and the histogram turns positive. This indicates recent upward momentum is strengthening faster than before. Bullish crossovers become more meaningful after a corrective phase, near support, or alongside strengthening price structure. A <strong>bearish crossover</strong> occurs when the MACD line crosses below the signal line and the histogram turns negative - downward momentum is increasing. Not all crossovers are meaningful - in sideways or choppy markets, MACD lines may cross repeatedly without producing sustained moves.</p>
          <p>The <strong>zero line</strong> represents the point where the two underlying EMAs are equal. MACD above zero means shorter-term price action is stronger than the longer-term average - broader momentum bias is positive. MACD below zero means shorter-term action is weaker - broader momentum bias is negative. A bullish crossover above the zero line suggests upward momentum is strengthening within an already positive environment, tending to produce more sustained moves. A bullish crossover below zero may simply represent a short-term bounce within a broader weak structure.</p>
          <blockquote className="pull-quote">For investors, MACD is not meant to generate frequent buy and sell signals. Its real value lies in identifying momentum acceleration within trends, early signs of slowing momentum, confirmation during breakouts, and risk during late-stage rallies.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 12: Breakouts & Pullback Strategies - Structured Entry Models",
      content: (
        <>
          <p>Technical analysis becomes powerful only when it translates into action. This chapter answers one practical question: When should an investor actually enter? There are two primary structured entry models - entering strength (Breakouts) and entering controlled weakness within strength (Pullbacks). Both are valid, but both require discipline and structure.</p>
          <hr className="chapter-rule" />
          <h3>Part 1: Breakouts - Entering Strength</h3>
          <p>A breakout occurs when price moves beyond a well-defined level that previously acted as resistance or support and sustains that move. It represents a shift in control. For example, suppose a stock trades between ₹200 and ₹240 for several weeks. Every time price approaches ₹240, sellers emerge, upper wicks form, and price pulls back. If price later closes strongly at ₹255 with follow-through and rising participation, that is not random movement - that is supply absorption and the market accepting higher prices.</p>
          <p>High-probability breakouts typically show: a strong closing price near the candle high, clear expansion in range, acceleration in participation, no immediate rejection, and a clean prior resistance level. A decisive close at ₹1,650 with continuation is a breakout. A move to ₹1,620 intraday that closes back at ₹1,590 is hesitation, not breakout. Commitment matters.</p>
          <hr className="chapter-rule" />
          <h3>Retest Entries - The Investor&apos;s Advantage</h3>
          <p>Many investors chase breakouts. Professionals often wait. After a breakout, price may pull back toward the prior resistance, that level may act as support, and buyers step in. This is called role reversal. For example, if a stock breaks above ₹1,000, instead of buying immediately at ₹1,050, you wait. Price revisits ₹1,000, holds, and forms a bullish structure. That retest provides: defined risk, a clear invalidation level (the price level where your trade idea is proven wrong), and better entry efficiency. Patience improves structure.</p>
          <hr className="chapter-rule" />
          <h3>Part 2: Pullback Strategy - Entering Controlled Weakness</h3>
          <p>Breakouts initiate trends. Pullbacks sustain them. In strong trends, healthy pullbacks are typically gradual, controlled, lacking aggressive selling, and occurring near prior support. For example, if L&amp;T is in a steady uptrend and after rallying from ₹2,800 to ₹3,200 it retraces slowly toward ₹3,050 without sharp breakdown - if buyers stabilize price near that prior breakout level, that reflects continuation, not weakness.</p>
          <p>Not all declines are buying opportunities. Caution is warranted if prior higher lows are broken, declines accelerate, participation expands on the downside, or structure shifts. Investors do not need perfect entries - consider staged entries: initial allocation on breakout confirmation, additional allocation on retest, final allocation on controlled pullback. This reduces timing pressure and respects uncertainty.</p>
          <hr className="chapter-rule" />
          <h3>Breakout vs Pullback - When to Choose What</h3>
          <p>Use <strong>Breakouts</strong> when a stock is emerging from long consolidation, market conditions are strong, and participation expands. Use <strong>Pullbacks</strong> when the trend is already established, you missed the initial breakout, and structure remains intact. Breakouts capture expansion. Pullbacks capture continuation. They are not competing strategies - they are complementary tools within trend.</p>
          <blockquote className="pull-quote">Breakouts reward discipline. Pullbacks reward patience. Both demand structure. Neither rewards impulsive action.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 13: Chart Patterns - Psychology on Display",
      content: (
        <>
          <p>Chart patterns are not magic shapes - they are visual representations of accumulation, distribution, indecision, trend continuation, and trend exhaustion. Every pattern tells a story about supply and demand. Your job is not to memorize shapes but to understand what participants are doing.</p>
          <hr className="chapter-rule" />
          <h3>Double Top &amp; Double Bottom</h3>
          <p>A <strong>Double Top</strong> signals exhaustion at highs. Price rallies to resistance, pulls back, rallies again to a similar level, fails to break decisively, then breaks the prior swing low. This reflects supply persistence: buyers attempted twice, sellers defended twice, demand weakened. Double tops signal distribution - but only after breakdown confirmation.</p>
          <p>A <strong>Double Bottom</strong> signals demand returning. Price falls to support, bounces, revisits the same support, holds, then breaks above the intermediate high. This reflects sellers exhausted and buyers stepping in aggressively. Double bottoms signal strength - but only after the breakout.</p>
          <hr className="chapter-rule" />
          <h3>Head &amp; Shoulders - Gradual Shift in Control</h3>
          <p>This is a distribution pattern. Structure: a higher high (Head), two smaller highs (Shoulders), neckline support, and breakdown below neckline. It signals trend transition. The psychology: buyers were strong (first shoulder), buyers tried again but made a higher peak (head), buyers failed to sustain (second shoulder), then sellers gained control (neckline breakdown). For investors, neckline breakdown is the confirmation - not the pattern shape itself.</p>
          <hr className="chapter-rule" />
          <h3>Cup &amp; Handle - Institutional Accumulation</h3>
          <p>Structure: a rounded bottom (slow accumulation), gradual recovery, shallow pullback (handle), and breakout above prior high. This pattern reflects patience. The &quot;cup&quot; reflects selling pressure drying up and accumulation over time. The &quot;handle&quot; reflects a final shakeout with weak holders exiting. Breakout signals continuation. This is powerful for long-term investors - strong compounders often form long rounded bases before strong expansions.</p>
          <hr className="chapter-rule" />
          <h3>Triangles &amp; Flags</h3>
          <p>Triangles reflect narrowing price movement - compression before expansion. An <strong>Ascending Triangle</strong> has higher lows while resistance remains flat, reflecting rising demand pressing against supply (bullish bias). A <strong>Descending Triangle</strong> has a flat support with falling resistance (bearish bias). A <strong>Symmetrical Triangle</strong> has both trendlines converging (neutral compression before direction is decided). The key is the direction of the breakout.</p>
          <p><strong>Flags</strong> occur after sharp moves - a strong impulsive move followed by short consolidation, then a break in the direction of the prior move. Early buyers take profits, new buyers step in, and the trend resumes. Flags are pauses, not reversals.</p>
          <hr className="chapter-rule" />
          <h3>Pattern Targets, Failure Signals &amp; What Actually Matters</h3>
          <p>Many chart patterns have projected price targets (e.g., the height of the pattern projected in the direction of breakout). Treat these as guidelines, not guarantees. More valuable than targets is observing how a pattern behaves after the breakout. Failed breakouts often lead to sharp moves in the opposite direction - traders who bought expecting continuation rush to exit, and sellers gain momentum. Experienced participants pay as much attention to failed patterns as to successful ones.</p>
          <p>For a pattern to have meaningful probability, it should align with the broader trend, key support or resistance levels, volume behavior, and momentum confirmation. A bullish pattern within a strong uptrend near prior support has very different probability compared to the same pattern inside a broader downtrend. The hierarchy remains simple: Structure first. Pattern second.</p>
          <blockquote className="pull-quote">If you understand rejection, accumulation, compression, and exhaustion, you can interpret almost any chart formation. The shapes may vary. The psychology remains the same.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 14: Multi-Timeframe Analysis - Seeing the Bigger Picture",
      content: (
        <>
          <p>One of the most common mistakes in technical analysis is focusing on a single timeframe. A chart can look bullish on a weekly chart, neutral on a daily chart, and bearish on a 15-minute chart. None of these are wrong - they are simply showing different time horizons of market behavior. Multi-timeframe analysis allows investors to understand the larger trend, avoid reacting to short-term noise, improve entry timing, and align decisions with structural direction.</p>
          <hr className="chapter-rule" />
          <h3>The Investor&apos;s Timeframe Framework</h3>
          <p>For investors, a simple structure works best: <strong>Weekly Chart → Trend. Daily Chart → Structure. Intraday → Mostly ignore.</strong></p>
          <p>The <strong>weekly chart</strong> shows the primary trend. It helps answer: Is the stock in a structural uptrend? Is accumulation occurring? Are higher highs and higher lows intact? Because each candle represents an entire week, it filters much of the day-to-day volatility. Weekly structure gives investors conviction.</p>
          <p>The <strong>daily chart</strong> helps refine entries once the weekly trend is clear. It identifies pullbacks toward support, breakouts from consolidation, retest entries, and momentum shifts. For example, Titan may be trending strongly on the weekly chart, but the daily chart might show a controlled pullback toward a prior breakout level - that daily pullback provides a structured entry opportunity within the weekly trend.</p>
          <p><strong>Intraday charts</strong> (5-minute, 15-minute, hourly) are designed for traders. For long-term investors, these movements rarely change the structural story. Watching them too closely often creates unnecessary anxiety - a fundamentally strong stock may appear &quot;weak&quot; on a 15-minute chart even while continuing a healthy weekly uptrend.</p>
          <hr className="chapter-rule" />
          <h3>The Alignment Principle &amp; Practical Workflow</h3>
          <p>The most powerful setups occur when multiple timeframes align. If the weekly chart shows an uptrend and the daily chart forms a consolidation breakout, the move is supported by both structural and tactical signals. When timeframes align, conviction improves.</p>
          <p>A simple workflow: <strong>Step 1</strong> - Check the weekly chart to identify the primary trend. <strong>Step 2</strong> - Mark major support and resistance levels. <strong>Step 3</strong> - Switch to the daily chart to look for pullbacks, consolidation, or breakouts. <strong>Step 4</strong> - Confirm with volume and momentum tools. This approach prevents emotional decisions and keeps analysis structured.</p>
          <blockquote className="pull-quote">The weekly chart tells you where the market wants to go. The daily chart tells you when to participate. When these two align, investors gain clarity. Without timeframe alignment, even good analysis can lead to poor decisions.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 15: Risk Management for Investors - Protecting Capital While Compounding Wealth",
      content: (
        <>
          <p>Most investors spend enormous time trying to identify the next great stock. Very few spend equal time thinking about how much capital they should allocate, when their thesis might be wrong, and how to protect their portfolio during difficult market phases. Yet over long periods, risk management often determines the difference between investors who compound wealth steadily and those who experience repeated large drawdowns.</p>
          <p>Risk management is not about avoiding losses entirely - losses are a natural part of investing. The real objective is to ensure that no single mistake damages the portfolio significantly, capital remains available for future opportunities, and strong investments are allowed to compound over time.</p>
          <hr className="chapter-rule" />
          <h3>Never Let One Idea Dominate Your Portfolio</h3>
          <p>Even the most promising companies can face unexpected setbacks - industries change, management decisions go wrong, regulation shifts, market cycles turn. Because of this uncertainty, avoid concentrating excessive capital in a single position. A structured allocation framework helps: core positions at 10&ndash;20% allocation, high-conviction opportunities at 5&ndash;10%, and smaller exploratory positions at 2&ndash;5%. Diversification is not about owning dozens of random stocks - it is about ensuring that no single mistake can cause irreversible damage.</p>
          <hr className="chapter-rule" />
          <h3>Structural Invalidation &amp; Gradual Position Building</h3>
          <p>Long-term investors do not rely on tight stop-losses the way traders do. However, they should still define structural levels that challenge their investment thesis - breakdowns of major support, failure of long-term trend structure, or significant deterioration in business fundamentals. Risk management means recognizing when structural change invalidates the original idea, not reacting to every price fluctuation.</p>
          <p>Instead of deploying entire capital immediately, build positions gradually as conviction strengthens: initial allocation after identifying the opportunity, additional allocation during healthy pullbacks, and further additions when the business and trend continue to strengthen. This reduces timing pressure and allows investors to learn more about the company while already invested.</p>
          <hr className="chapter-rule" />
          <h3>Volatility vs Real Risk &amp; Letting Winners Compound</h3>
          <p>Market volatility often creates emotional pressure. But volatility does not always represent real risk. True investment risk arises when the underlying business deteriorates, the competitive position weakens, or management credibility erodes. Short-term price fluctuations alone should not drive long-term decisions.</p>
          <p>One of the most common mistakes investors make is selling successful investments too early. Strong companies can compound for many years. If the business continues to execute well and the long-term structure remains intact, allowing winners to grow can have a profound impact on overall portfolio performance. Long-term wealth creation often comes from a small number of exceptional investments held patiently. Risk management is not only about limiting downside - it is also about avoiding unnecessary interruption of compounding.</p>
          <blockquote className="pull-quote">Successful investing is not about predicting every market move correctly. It is about building a portfolio that can survive inevitable mistakes, endure market volatility, and allow great businesses to compound over time.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 16: Case Studies - Real Indian Market Examples",
      content: (
        <>
          <p>Theory becomes powerful only when you see it play out in real markets. The following case studies illustrate how the concepts from this module appear in long-term charts of Indian stocks and market indices. The objective is not to identify perfect textbook setups, but to understand how markets actually behave over time.</p>
          <hr className="chapter-rule" />
          <h3>Case Study 1: Long-Term Trend Compounding - Titan Company</h3>
          <p>Titan is one of the strongest long-term compounders in the Indian market. From approximately ₹4 in 1999 to north of ₹4,000 today, the stock displayed a consistent structure over many years: higher highs, higher lows, and healthy consolidations between rallies. Instead of moving vertically, it repeatedly moved through cycles - uptrend phase, consolidation, breakout, new uptrend. These pauses were not signs of weakness - they represented institutional accumulation and booking of prior gains. Investors who focused on the broader trend rather than short-term volatility were able to stay invested through multiple phases of consolidation. Strong long-term trends often include several corrections and sideways phases before continuing higher.</p>
          <hr className="chapter-rule" />
          <h3>Case Study 2: Breakout After Long Consolidation - Larsen &amp; Toubro</h3>
          <p>For several years, L&amp;T traded within a broad range - price repeatedly tested resistance, volatility gradually contracted, and volume began increasing near the upper range. This type of long consolidation often reflects institutional accumulation. Eventually, price broke above the long-standing resistance zone with strong momentum. Once the breakout occurred, prior resistance turned into support, pullbacks held above the breakout level, and the long-term trend accelerated. Multi-year consolidations can precede powerful structural moves.</p>
          <hr className="chapter-rule" />
          <h3>Case Study 3: Support Holding During Corrections - ICICI Bank</h3>
          <p>Even strong companies experience periods of volatility. ICICI Bank has seen multiple corrections during its broader uptrend. During these phases, price declined toward prior support zones, volume often decreased during pullbacks, and buyers returned near key structural levels. These corrections often looked concerning on short-term charts, but on monthly charts the long-term trend structure remained intact. This demonstrates why investors should observe the primary trend before reacting to short-term volatility.</p>
          <hr className="chapter-rule" />
          <h3>Case Study 4: Bollinger Band Compression - Adani Ports</h3>
          <p>At several points, Adani Ports entered periods of low volatility consolidation. Bollinger Bands narrowed significantly, price moved sideways within a tight range, and volume gradually built. This compression indicated that volatility was declining and energy was building. Eventually, price broke out of the consolidation zone with expanding volume, and the move that followed was significantly stronger than the preceding range. Periods of low volatility often precede volatility expansion.</p>
          <hr className="chapter-rule" />
          <h3>Case Study 5: Market-Wide Structural Shifts - NIFTY 50</h3>
          <p>During the 2020 global market crash, indices broke multiple support levels, volatility expanded dramatically, and fear dominated sentiment. However, after the panic phase subsided, markets began forming higher lows again. Volume and momentum gradually improved. Investors who observed structural recovery rather than reacting to headlines were able to recognize the beginning of a new uptrend. Markets often turn before sentiment improves. Not every fall is a crash - and not every crash is permanent.</p>
          <blockquote className="pull-quote">Across different stocks and market conditions, the same patterns repeatedly appear: strong companies rarely move in straight lines, consolidations often precede large moves, support levels frequently attract buyers, and momentum indicators highlight periods of exhaustion. Successful investors focus on the broader structure rather than short-term fluctuations.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 17: Common Technical Mistakes Investors Make",
      content: (
        <>
          <p>Technical analysis can be a powerful tool when used correctly. It helps improve entry timing, identify structural risk, and understand how the market is responding to a company&apos;s story. However, many investors misuse technical tools. Instead of gaining clarity, they create confusion, overcomplicate charts, or react emotionally to short-term movements.</p>
          <hr className="chapter-rule" />
          <h3>Common Mistake 1: Indicator Overload</h3>
          <p>One of the most frequent mistakes is placing too many indicators on a chart. New investors often add RSI, MACD, Bollinger Bands, multiple moving averages, stochastic indicators, and additional oscillators simultaneously. Instead of improving analysis, this creates conflicting signals and cluttered charts. A few well-understood tools are far more effective. For investors, a simple framework is usually sufficient: trend structure, support and resistance, volume behavior, and one or two momentum indicators. Simplicity improves clarity.</p>
          <hr className="chapter-rule" />
          <h3>Common Mistake 2: Ignoring Broader Trend &amp; Treating Indicators as Switches</h3>
          <p>Many investors focus too much on short-term signals while ignoring the larger trend. A stock may show a bearish candlestick pattern on a daily chart while the weekly chart still shows a strong uptrend. Without observing the larger timeframe, investors may misinterpret normal pullbacks as major trend changes. Always start with the broader trend before analyzing smaller movements.</p>
          <p>Another common mistake is treating indicators mechanically - buying whenever RSI reaches 30, selling whenever RSI reaches 70, acting immediately on every MACD crossover. Markets are more nuanced. RSI above 70 during a strong uptrend often reflects strength, not immediate weakness. Indicators should always be interpreted alongside trend structure, support and resistance, and volume behavior.</p>
          <hr className="chapter-rule" />
          <h3>Common Mistake 3: Overreacting to Volatility &amp; Ignoring Volume</h3>
          <p>Long-term investors sometimes fall into the trap of watching very short timeframes. Intraday charts can show dramatic fluctuations caused by short-term speculation, algorithmic trading, and news reactions that rarely change the long-term investment story. Watching every fluctuation creates unnecessary anxiety and leads to emotional decisions. For long-term investors: weekly charts provide structural clarity, daily charts help refine entries, and lower timeframes are usually noise.</p>
          <p>Breakouts that occur with weak participation may fail quickly. A breakout with strong volume suggests genuine demand. A breakout with weak volume may indicate temporary enthusiasm rather than sustained buying. Volume provides important context behind price movements.</p>
          <hr className="chapter-rule" />
          <h3>Common Mistake 4: Misinterpreting Consolidation &amp; Ignoring Fundamentals</h3>
          <p>Strong companies rarely move in straight lines. After large rallies, stocks often enter consolidation phases where prices move sideways for extended periods. Many investors mistakenly interpret this as weakness. In reality, consolidation often represents the market booking prior gains before the next move. Understanding this behavior helps investors remain patient during normal pauses.</p>
          <p>Technical analysis should not replace fundamental analysis. A technically strong chart cannot compensate for a fundamentally weak company. The most powerful approach combines both: fundamentals identify strong businesses; technicals help determine favorable entry points.</p>
          <blockquote className="pull-quote">Tools are meant to simplify decisions, not complicate them. Three well-understood tools applied consistently outperform ten poorly-understood ones applied randomly.</blockquote>
        </>
      ),
    },
    {
      title: "Chapter 18: Combining Fundamentals & Technicals - A Practical Investment Framework",
      content: (
        <>
          <p>Throughout this module, we explored how technical analysis helps investors understand market behavior. But technical analysis works best when it complements - not replaces - fundamental analysis. Fundamentals answer: What should I buy? Technical analysis answers: When should I buy? When both align, investors gain clarity in both conviction and timing.</p>
          <hr className="chapter-rule" />
          <h3>The Complete Framework</h3>
          <p><strong>Step 1 - Start with fundamentals.</strong> Before looking at charts, evaluate the business itself. Is the company financially strong? Does it have a sustainable competitive advantage? Is management credible? Does the business have long-term growth potential? Technical analysis cannot turn a weak business into a good investment.</p>
          <p><strong>Step 2 - Identify the long-term trend.</strong> Using weekly charts, determine whether the stock is in a long-term uptrend, moving sideways in consolidation, or in structural decline. Stocks in healthy uptrends show higher highs, higher lows, and strong recoveries from pullbacks.</p>
          <p><strong>Step 3 - Locate key support and resistance.</strong> Identify important price zones - prior breakout levels, consolidation zones, major support levels, historical resistance. These zones often represent areas where institutional activity previously occurred. Buying near support generally improves risk control compared to chasing extended rallies.</p>
          <p><strong>Step 4 - Observe volume behavior.</strong> Watch for breakouts with strong volume, pullbacks with declining volume, and sudden volume spikes near key levels. Volume confirmation strengthens the reliability of price movements.</p>
          <p><strong>Step 5 - Use indicators for confirmation, not prediction.</strong> RSI showing whether momentum is strengthening or cooling, MACD revealing momentum shifts, and Bollinger Bands identifying volatility expansion or compression - these tools confirm what price structure already suggests. They are supportive tools, not decision makers.</p>
          <p><strong>Step 6 - Wait for structured entries.</strong> Rather than buying randomly, wait for pullbacks toward support, consolidation breakouts, or retests of previous breakout levels. Timing does not need to be perfect - it simply needs to be disciplined.</p>
          <p><strong>Step 7 - Manage risk through portfolio discipline.</strong> Avoid excessive concentration, build positions gradually, and reassess when structural conditions change.</p>
          <hr className="chapter-rule" />
          <h3>The Complete Investor Checklist</h3>
          <p>Before making an investment decision, ask: Is the business fundamentally strong? Is the long-term trend positive? Is the stock near support or breaking out of consolidation? Does volume support the move? Do momentum indicators align with the structure? Does the position fit within portfolio risk limits? If most of these conditions align, the investment idea becomes more structured.</p>
          <hr className="chapter-rule" />
          <h3>The Investor&apos;s Mindset - What Actually Builds Wealth</h3>
          <p>After studying charts, indicators and market structure, it is easy to believe that investing success comes from analytical skill alone. But over long periods, the greatest determinant of investment success is not intelligence - it is mindset. Markets will always fluctuate. Prices will rise, fall, consolidate and surprise even the most experienced participants.</p>
          <p>Successful investing requires a few enduring principles: <strong>Patience</strong> (great businesses and strong trends take time to unfold), <strong>Discipline</strong> (following a structured process instead of reacting emotionally), <strong>Humility</strong> (accepting that markets are uncertain and mistakes will occur), and <strong>Consistency</strong> (applying the same framework across different market environments).</p>
          <p>Charts, indicators and analysis tools provide structure - they help investors avoid impulsive decisions and interpret market behavior more clearly. But tools alone do not create wealth. Wealth is built through consistent decisions made over many years, guided by sound principles and steady temperament. The real edge lies in something simpler: the ability to stay rational when markets become emotional.</p>
          <p>Over time, the investors who succeed are rarely those who predict every move correctly. They are the ones who stay invested in strong businesses, manage risk thoughtfully, remain patient through volatility, and allow compounding to work quietly over time. In the end, investing is not just a financial skill - it is a discipline of judgment, patience and perspective.</p>
          <blockquote className="pull-quote">Technical analysis helps you understand how the market behaves. Fundamental analysis helps you understand what you own. Together, they provide clarity. But the real edge lies in the ability to stay rational when markets become emotional.</blockquote>
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
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const moduleId = "technical-analysis";

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
            Module 7<br /><em>Complete.</em>
          </div>
          <p className="complete-sub">
            You&apos;ve finished Technical Analysis &mdash; all 18 chapters. You now have a complete framework: from trend structure, candlesticks, and support &amp; resistance, to volume, moving averages, RSI, MACD, Bollinger Bands, breakout &amp; pullback strategies, chart patterns, and the investor&apos;s mindset.
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
                className={["chapter-dot", chapterIndex > dotIdx ? "done" : "", chapterIndex === dotIdx ? "active" : ""].filter(Boolean).join(" ")}
                onClick={() => { setChapterIndex(dotIdx); saveProgress(dotIdx); }}
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
