# Bodha website redesign: handoff for Claude Code

This package holds the approved designs for the **home page**, the **/tools page** (including the calculator popup) and the **/about page**, plus the illustrations they use.

## What's in here

```
public/landing/                         ← illustrations and logos used by all three pages (copy into the repo as-is)
bodha-redesign-handoff/
  README.md                             ← this file: the brief for /tools and /about
  LANDING-PROMPT.md                     ← the earlier brief for the home page (do this first if it isn't done yet)
  design/
    landing-reference.html              ← approved home page
    tools-reference.html                ← approved /tools page
    tools-calculator-reference.html     ← approved calculator popup (works: drag the sliders)
    about-reference.html                ← approved /about page
    screenshots/                        ← full-page captures, desktop 1440px and mobile 390px
```

Unzip into the root of the `botha` repo. The reference HTML files open in any browser. The About page photos load from the repo's existing `public/AHD.jpeg` and `public/PD.jpeg`.

**Order of work:** if the home page from `LANDING-PROMPT.md` isn't built yet, do it first. It creates the shared header, footer, Inter font setup and the Venture Capital hiding. This brief builds on all of that.

---

## Prompt to paste into Claude Code

Redesign `/tools` and `/about` to match `bodha-redesign-handoff/design/tools-reference.html`, `tools-calculator-reference.html` and `about-reference.html`. Open each reference in a browser and look at the screenshots in `bodha-redesign-handoff/design/screenshots/` before writing code. The references are static HTML/CSS: port them into this codebase's patterns rather than pasting them in.

Follow `CLAUDE.md`: no placeholder, stub or TODO code; small focused files; one atomic commit per task; lint, test and build must pass. Work on a branch, not `main`.

### Shared rules (same as the home page)

- **Reuse what the home-page work created:** the new `Header` (sticky, cream pill nav, globe language toggle, Log in, Talk to us), the dark footer, Inter via `next/font`, the colour tokens, and the section-label style (15px uppercase, `#7d6219`, gold underline).
- **Don't duplicate:** if any of these are still inline in the home page, extract them into shared components first.
- **Active nav state:** the header pill matching the current page gets an active style (white background, soft shadow, `aria-current="page"`). On /tools that's **Tools**; on /about it's **About**.
- **Colours:** ink `#0d0d0d`, cream `#f5f0e8`, off-white `#fdfcf9`, gold `#c9a84c` (decoration only), `#7d6219` for small gold text and links, `#9a7a2a` for gold words in headlines.
- **Layout:** sections sit edge to edge, alternating off-white and cream, with no gaps between them. Illustrations are decorative (`alt=""`, `aria-hidden`).
- **Kannada:** keep it for all new copy. Draft the strings and list them in your summary for review by a native speaker.
- **Responsive:** must work at 1440, 1280, 1024, 768 and 390px, with no horizontal scroll and no text overlapping images. Breakpoints are in each reference's CSS (1100px and 760px).
- **Stylesheets:** do not break other pages. `app/landing.css` is still imported by `/vcfo`, so leave it alone. Give each page its own new stylesheet with a unique class prefix.

### /tools (`app/tools/page.tsx`, `app/tools/tools.css`)

**Keep all calculator logic exactly as it is:** state, formulas, the subscription check (`subscribed`), the Net Worth Tracker import modal, and the Excel downloads at `/api/download/mutual-fund-tool` and `/api/download/stock-valuation`. This is a visual redesign only. The file is ~1,800 lines, so split it as you go: a component per calculator modal, a `ToolCard` component, and a shared `CalculatorDialog` shell.

Page structure (copy is final, take it from the reference):

1. **Hero:**
   - eyebrow "Planning tools"
   - H1 "Free tools for **real decisions.**"
   - paragraph
   - two small pills, *Free calculators →* (`#free`) and *With the program →* (`#program`), which smooth-scroll like the home page does
   - Remove the old breadcrumb, the "6 tools free" badge and the scrolling marquee.
2. **"Free calculators"** section label (`id="free"`), then a 3-column grid of six cards (2 columns below 1100px, 1 column below 760px).
   - **Card anatomy:** cream art area 210px tall with the illustration slightly tilted; then the number (01–06), name, one-line description and tags (the first tag is a black "Free" pill); then a footer with "Open calculator" and a black round arrow.
   - **Behaviour:** the whole card is one button that opens that tool's dialog.
   - **Illustrations** (in `public/landing/`):

| # | Tool | Image |
|---|---|---|
| 01 | Net Worth Calculator | `tw-nwcalc.svg` |
| 02 | SIP Calculator | `tw-sip.svg` |
| 03 | Budget Planner | `tw-budget.svg` |
| 04 | Goal-Based SIP Planner | `tw-goal.svg` |
| 05 | Tax Estimator | `tw-tax.svg` |
| 06 | Rebalancing Calculator | `tw-rebalance.svg` |

3. **"With the Personal Finance Program"** band (cream, `id="program"`): one line of intro, then three cards.
   - **Cards:**
     - 07 Net Worth Tracker (`tw-networth.svg`)
     - 08 Mutual Fund Comparing Tool (`tw-mfcompare.svg`)
     - 09 Indian Stock Valuation Dashboard (`tw-stockval.svg`)
   - **Logged out or not subscribed:** footer shows a lock, "Included with the program" and "Get access" → `/plans`.
   - **Subscribed:** the footer becomes "Open tracker" or "Download (.xlsx)", wired to the existing behaviour.
   - **Below the cards:** "See the program" (→ the program/sign-up page the home page uses) and "What's in the ten modules" (→ `/modules`).
4. **Disclaimer:** keep the full legal text, in a quiet bordered box with an info icon near the bottom, instead of the current loud banner near the top.
5. **Footer:** the shared footer.

**Calculator dialog** (see `tools-calculator-reference.html`, SIP shown as the example). Apply the same shell to every calculator.

- **Desktop layout:** 960px wide, rounded 28px, two columns. Inputs on the left on off-white; results on the right on cream.
- **Header:** eyebrow "Tool 0X · Free", title, one-line subtitle. Round close button top-right.
- **Inputs:**
  - money fields with a ₹ prefix
  - range sliders that show the current value next to the label (`accent-color: #9a7a2a`)
  - checkboxes styled as in the reference
- **Live results:** results update as the user types or drags. Remove the "Calculate" buttons, and use the same formulas already in the code.
- **Result panel:**
  - eyebrow, plus the main figure at 48px bold with tabular numbers
  - a two-colour bar (ink and gold) where it makes sense
  - a breakdown with rows and colour dots
  - a short "this is an estimate" note
  - a card linking to the Personal Finance Program
- **Accessibility:** `role="dialog"`, `aria-modal`, a labelled title, focus moved into the dialog and trapped there, Esc closes it, focus returns to the card that opened it, and `aria-live="polite"` on the main result.
- **Phones (under 760px):** the dialog becomes a full-screen sheet, with inputs first and results below.

**Tax Estimator:** the current tool says "FY 2025-26", but it is now FY 2026-27. Do not change the tax slabs yourself. Remove the year from the card copy (already done in the design) and **flag in your summary** that the slabs and year need checking against the current rules.

### /about (`app/about/page.tsx`, `app/about/about.css`)

Copy is final (take it from the reference). Sections:

1. **Hero:** eyebrow "About Bodha", H1 "A firm built to **educate** and support.", one-line paragraph. Remove the breadcrumb and the dotted background.
2. **Our story** (cream band, two columns): three short paragraphs on the left, and a white quote card on the right: "We built the firm we wished existed when **we** were on the other side." These paragraphs **replace** the old copy, which mentioned the venture arm.
3. **What we do:** section label, then two cards.
   - **For businesses & founders** (cream): tags Company registration, GST & compliance, Virtual CFO, Websites & hosting. Links to `/#business`.
   - **For individuals** (white with a border): tags Personal Finance Program, Free planning tools, Net Worth Tracker, Weekly insights. Links to `/#individuals`.
   - **Tags:** a 2×2 grid of equal-size tags with gold dots.
4. **The people behind Bodha** (cream band, `id="team"`): two cards, each with the photo (200px, rounded) beside a role eyebrow, name and two short paragraphs. Use the existing `/AHD.jpeg` and `/PD.jpeg`, and the condensed bios exactly as in the reference.
5. **What we stand for:** six values in a 3-column grid (2 below 1100px, 1 below 760px). Each value has a small icon tile, a title and one line. Use inline stroke SVG icons as in the reference, or the existing `SketchIcon` if it has close equivalents.
6. **Final call to action:** "Work with people who **genuinely care.**", one line, then "Get in touch", which opens the **existing** contact modal on this page (`setShowContact`), and "Try the free tools" → `/tools`.
7. **Footer:** the shared footer.

**Removed on purpose:**
- the stats block (98% retention, 4.9★, 10+ services, 0 missed deadlines)
- the long bios
- "The Bodha difference" section
- all mentions of venture investing

Don't bring these back.

### Acceptance checks (run them and paste the results)

```bash
npm run lint && npm test && npm run build
grep -rn "venture" app/about/page.tsx -i        # expect: only "Bodha Ventures" brand mentions, if any
grep -n "98\|4.9" app/about/page.tsx            # expect: no stats left
```

Then in a browser (Playwright is fine), at 1440px and 390px:
- **/tools:** each of the six cards opens its dialog. Results update live and match the old calculator for the same inputs (check SIP: ₹10,000/month, 12%, 15 years → ₹50,45,760).
- **Dialog behaviour:** Esc closes it and focus returns to the card.
- **Locked cards:** they show "Get access" when logged out, and open or download correctly for a subscribed test user.
- **Pills:** "Free calculators" and "With the program" smooth-scroll to their sections.
- **/about:** "Get in touch" opens the contact modal, and the "What we do" cards land on the right home-page sections.
- **Header:** the active pill is correct on each page, and "Log in" and "Talk to us" never wrap.

Save screenshots next to `bodha-redesign-handoff/design/screenshots/` with a `-built` suffix so they can be compared with the design.

### Summary I want at the end

- What changed, file by file, including how `app/tools/page.tsx` was split up
- Any calculator whose output changed for the same inputs (there should be none)
- Kannada strings needing review
- The Tax Estimator year and slabs flag
- Anything in the design you couldn't match exactly, and why
