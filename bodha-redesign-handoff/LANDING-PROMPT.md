# Prompt for Claude Code: Bodha landing page revamp

Copy everything below the line into Claude Code, run from the root of the `botha` repo.

**Before you run it:**
1. Unzip this package into the repo root. You should end up with `public/landing/*` (19 image files) and a folder `bodha-redesign-handoff/` holding `design/landing-reference.html`, `design/screenshots/` and this file.
2. Fill in `CONTACT_EMAIL` below, or leave it blank and the email link will be left out.

---

## Task

Rebuild the home page (`/`) of this Next.js app to match the approved design in `bodha-redesign-handoff/design/landing-reference.html`. Before writing any code, open that file in a browser and look at the screenshots in `bodha-redesign-handoff/design/screenshots/` (`landing-desktop.png` at 1440px, `landing-mobile.png` at 390px). The reference is static HTML/CSS. Port it into this codebase's patterns rather than pasting it in.

Also:
- Hide the Venture Capital offering site-wide (details below). Hide it, don't delete it.
- Make the "For businesses" and "For individuals" buttons smooth-scroll to their sections.

`CONTACT_EMAIL:` ______  ← if blank, omit the email link in the final call-to-action section.

Follow `CLAUDE.md`. In particular: no placeholder, stub or TODO code; small focused files; one atomic commit per task; lint, test and build must pass. Work on a new branch `feat/landing-revamp`, not `main`.

## Context you need

- The home page is `app/page.tsx` (client component). It is styled by `app/landing.css`. **`app/vcfo/page.tsx` also imports `../landing.css`**, so do not delete that file or change classes that `/vcfo` uses. Put the new home-page styles in a new stylesheet, with a class prefix such as `hm-`, so nothing collides with `globals.css` or `landing.css`.
- `AppShell.tsx` renders the global `Header` on every page except `/signin`. It hides `AppFooter` on `/` because the home page renders its own footer. Keep that arrangement.
- Language support: `app/context/LanguageContext.tsx` gives you `lang` (`en` or `kn`) and `t()`, and the current home page uses an `isKn` pattern. Keep Kannada support for all new copy. Draft Kannada strings, mark them in your summary as needing review by a native speaker, and don't block on that review.
- Brand colours (already in `globals.css` as CSS variables): ink `#0d0d0d`, cream `#f5f0e8`, gold `#c9a84c`, gold-light `#e8d08a`, slate `#2a2d35`, off-white `#fdfcf9`. The design adds two darker golds for text on light backgrounds, needed for contrast: `#7d6219` for small labels and links, and `#9a7a2a` for the gold words in headlines.
- Font: the new design uses **Inter** for everything: headlines at 700 weight with `-0.035em` letter spacing, body at 400–500. Load it with `next/font/google` and apply it to the home page and the new header. Leave other pages on their current fonts for now.

## Page structure (top to bottom)

All copy is final. Take the wording exactly from the reference HTML.

1. **Header** (sticky, blurred off-white background, hairline bottom border). Replaces the current global header design.
   - Logo `public/landing/bodha-logo.png` on the left, 34px tall.
   - In the centre, one cream pill holding four links:
     - **For businesses** → `/#business`
     - **For individuals** → `/#individuals`
     - **Tools** → `/tools`
     - **About** → `/about`
   - On the right:
     - a globe icon button that toggles English/Kannada through the existing LanguageContext
     - **Log in** → `/signin` when logged out. When logged in, keep the current account dropdown (Account, referral code, Log out) and its behaviour.
     - a black rounded **Talk to us** button that scrolls to the final call-to-action section
   - "Log in" and "Talk to us" must never wrap onto two lines (`white-space: nowrap`, `flex-shrink: 0`). Between 760 and 1100px, the nav text drops to 13px.
   - Below 760px: the centre links hide, and the existing mobile menu opens from the menu button. Update the mobile menu's links to the same four, and remove Courses, Virtual CFO, Venture Capital and Insights from it.
2. **Hero:** centred H1 "Helping India **build businesses.** / Helping Indians **grow wealth.**", with the bold parts in `#9a7a2a`, font size `clamp(42px, 5.6vw, 80px)`. Then the paragraph, then two small cream pill links, **For businesses** (briefcase icon + right arrow) and **For individuals** (person icon + right arrow). Do not use down arrows. These pills are not dropdowns.
3. **Section label "For businesses & founders"** (`id="business"`): 15px, weight 600, uppercase, 3px letter spacing, colour `#7d6219`, gold underline (`text-decoration-color: #c9a84c`, thickness 2px, offset 12px). Off-white background with modest padding (64px top, 40px bottom).
4. **Company registration & GST** banner (cream). Certificates pinned to the left and right edges (`gst-left.svg`, `gst-right.svg`), 40% opacity, never behind the text. Contents:
   - H2 "From idea to incorporated."
   - sub-headline "Everything your company needs, from day one."
   - paragraph
   - a 2×2 list of ticked items
   - buttons: **Start your registration** → `/vcfo#vcfo-request`, **Learn more** → `/vcfo#vcfo-services`
5. **Websites, domains & hosting** banner (off-white). Centred text. `web-rise.svg` rises from the bottom edge, cropped by the banner. Buttons: **Get your business online** and **Learn more**. There is no websites page or form yet, so send both to the same destination as "Talk to us" and say so in your summary.
6. **Virtual CFO** banner (cream). Split layout: text on the left, and on the right an overlapping pair `cfo-left.svg` (top-left) and `cfo-right.svg` (bottom-right). Generous side padding. Buttons: **Request a Virtual CFO** → `/vcfo#vcfo-request`, **Learn more** → `/vcfo`.
7. **Section label "For individuals"** (`id="individuals"`), same style as #3.
8. **Personal Finance Program** banner (cream). Mirrored split: `pfp-left.svg` and `pfp-right.svg` on the left, text on the right. Buttons: **Enroll now** → same destination as the current home page's "Enroll Now" (sign-up), **See the curriculum** → `/modules`.
9. **Planning tools** banner (off-white, `id="tools"`). Centred text, with four small tool cards floating in the corners (`tw-sip`, `tw-budget`, `tw-networth`, `tw-tax`). Button: **Try the free tools** → `/tools`.
10. **Insights** banner (cream). Headline "Money insights, in plain language.", with the fan of article cards `insights-fan.svg` below. Button: **Read the blog** → `/blogs`.
11. **Trusted by** strip: Artan Technologies · OFFScenes · Toodex Technology · SR Enterprises, with a hairline gold divider below.
12. **Final call to action** (`id="talk"`): "Tell us where you are. / We'll take it from there." Button: **Book a discovery call**. Wire it to the existing contact flow: check `app/api/contact/route.ts`, which supports a general enquiry type. If no general contact form exists, link to `/vcfo#vcfo-request` and say so in your summary. Add the email link only if `CONTACT_EMAIL` is filled in.
13. **Footer** (ink): light logo `bodha-logo-light.png`, then links For businesses, For individuals, About, Privacy and Terms (reuse the existing `PrivacyModal` / `TermsModal`), then © year Bodha Ventures.

Layout rules:
- Banners sit edge to edge with **no gaps or white borders between them**, alternating cream and off-white as listed.
- Every illustration is decorative: `alt=""` and `aria-hidden`.
- Illustrations must never sit behind or overlap text at any width. Check 1440, 1280, 1024, 768 and 390px.
- Responsive behaviour is in the reference CSS (`@media (max-width:1100px)` and `(max-width:760px)`). Match it:
  - Registration certificates: faint and smaller on tablets; on phones they appear below the buttons, cropped to their top half.
  - Split banners: stack on phones, text first.
  - Floating tool cards: hidden below 1100px, replaced by two cards side by side under the button.
- Remove the old home-page content: course curriculum, Buffett quote, "What we stand for", services grid, testimonials, "Join the Club". Before deleting any component, confirm nothing else uses it.

## Smooth scrolling (required)

- The "For businesses" pill and header link must smooth-scroll to `#business`, the **For businesses & founders** label. The "For individuals" pill and link must scroll to `#individuals`, the **For individuals** label. "Talk to us" scrolls to `#talk`.
- On the home page, intercept the click and call `element.scrollIntoView({ behavior: "smooth", block: "start" })`. Skip the animation if `prefers-reduced-motion: reduce` is set. Update the URL hash with `history.replaceState`.
- From any other page, the header links go to `/#business` or `/#individuals`, and the page must land on that section once loaded.
- Give the target sections `scroll-margin-top` equal to the sticky header's height, so the header never covers the label.
- If you also add `scroll-behavior: smooth` in CSS, check the Next.js 16 docs on `data-scroll-behavior` so route changes don't animate oddly. Test it in the browser rather than assuming.

## Hide Venture Capital (hide, don't delete)

Keep `app/venture/` and its API handling, so it can be switched back on later. Make it unreachable and unlinked:

1. Add a single flag, e.g. `app/lib/features.ts` → `export const VENTURE_ENABLED = false;`
2. When the flag is off, redirect `/venture` to `/` with a temporary (307) redirect, in `next.config.ts` `redirects()` or `proxy.ts`, whichever fits the existing setup.
3. Remove or gate every link to `/venture`:
   - `app/components/Header.tsx` lines ~86, 125, 147, 170 (replaced by the new nav anyway)
   - `app/page.tsx`: the Venture Capital service card (~263) and footer link (~347), both replaced by the new page anyway
   - Footer lists: `app/about/page.tsx:~260`, `app/tools/page.tsx:~1726`, `app/blogs/BlogsList.tsx:~124`, `app/blogs/components/BlogFooter.tsx:~18`, `app/vcfo/page.tsx:~431`
4. Copy mentions to report to me but **not change**:
   - `app/about/page.tsx` lines ~88 and ~173 mention "our venture arm" and "venture investing". Propose replacement wording in your summary.
   - `app/components/PrivacyModal.tsx:~33` lists "Venture Capital activities" in the privacy policy. That's legal text, so leave it and flag it.
5. Leave these untouched (harmless): `type === "venture"` in `app/api/contact/route.ts`, the `ventureCapital` key in `LanguageContext.tsx`, `/venture` in `AppShell.tsx`.

## Metadata

`app/layout.tsx` currently titles the site "Bodha — The Personal Finance Program". Update the title and description, including the Open Graph and Twitter tags, to the new positioning. Suggested title: "Bodha Ventures — Company registration, GST, Virtual CFO & personal finance". Base the description on the hero paragraph. Keep the current preview image, and note in your summary that it should be redesigned.

## Acceptance checks (run them and paste the results)

```bash
npm run lint            # zero warnings
npm test
npm run build
grep -rn 'href="/venture"' app        # expect: no output
grep -rn "ventureCapital" app/components/Header.tsx   # expect: no output
npm run dev &           # then:
curl -sI http://localhost:3000/venture | head -3      # expect 307 to /
curl -s http://localhost:3000/ | grep -c 'id="business"'      # expect 1
curl -s http://localhost:3000/ | grep -c 'id="individuals"'   # expect 1
```

Then check in a real browser (Playwright is fine):
- Clicking each pill scrolls smoothly and stops with the section label just below the header.
- `/tools` → header "For businesses" lands on the business section of `/`.
- No horizontal scroll at 390px.
- No illustration overlaps text at 1440, 1280, 1024, 768 or 390px.
- "Log in" and "Talk to us" stay on one line at every width.
- Kannada toggle switches the copy.

Attach screenshots at 1440px and 390px next to `bodha-redesign-handoff/design/screenshots/` so I can compare them.

## Summary I want at the end

- What changed, file by file
- Where each button now links, with any destination you had to choose yourself
- Kannada strings needing review
- The Venture copy and privacy-policy mentions you flagged, with suggested wording
- Anything in the design you couldn't match exactly, and why
