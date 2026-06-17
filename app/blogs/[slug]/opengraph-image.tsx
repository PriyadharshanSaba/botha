/**
 * Dynamic OG / Twitter card for /blogs/[slug].
 *
 * Next 16 auto-attaches this image to the route's openGraph + twitter
 * metadata (the `summary_large_image` declaration in page.tsx's
 * generateMetadata is what makes Twitter render it large).
 *
 * Layout (editorial): left text column with kicker/title/deck, gold
 * vertical rule, right meta column with date + read time. Fonts pulled
 * from Google Fonts at first request and cached in-process for the
 * lifetime of the lambda.
 */

import { ImageResponse } from "next/og";
import { db } from "@/app/lib/db";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bodha Ventures";

const BG = "#0a0a0a";
const FG = "#f5f1e8";
const DIM = "#8a8377";
const GOLD = "#c9a04a";
const SITE = "bodhaventures.in";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)";

type LoadedFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 500 | 600;
  style: "normal";
};

let cachedFonts: Promise<LoadedFont[]> | null = null;

function loadFonts(): Promise<LoadedFont[]> {
  if (cachedFonts) return cachedFonts;
  const families: { name: string; query: string; weight: 400 | 500 | 600 }[] = [
    { name: "Fraunces", query: "Fraunces:opsz,wght@9..144,600", weight: 600 },
    { name: "DM Sans", query: "DM+Sans:wght@500", weight: 500 },
    { name: "DM Sans", query: "DM+Sans:wght@400", weight: 400 },
  ];
  cachedFonts = Promise.all(
    families.map(async (f) => {
      const cssUrl = `https://fonts.googleapis.com/css2?family=${f.query}&display=swap`;
      const css = await fetch(cssUrl, { headers: { "User-Agent": UA } }).then(
        (r) => r.text()
      );
      const match = css.match(/src:\s*url\((https:\/\/[^)]+\.woff2)\)/);
      if (!match) throw new Error(`woff2 url not found for ${f.query}`);
      const data = await fetch(match[1]).then((r) => r.arrayBuffer());
      return { name: f.name, data, weight: f.weight, style: "normal" as const };
    })
  );
  return cachedFonts;
}

function clip(s: string, max: number): string {
  if (!s) return "";
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + "…";
}

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  let slug = "";
  try {
    ({ slug } = await params);
    const post = await db.getBlogBySlug(slug).catch((e) => {
      console.error("[og] db.getBlogBySlug failed:", e);
      return null;
    });

    const title = clip(post?.title || "Bodha Ventures", 110);
    const deck = clip(post?.deck || "Markets · Macro · India", 180);
    const kicker = (post?.kicker || "Markets · Macro · India").toUpperCase();
    const dateLabel = (post?.dateLabel || "").toUpperCase();
    const readTime = (post?.readTime || "").toUpperCase();
    const brand = (post?.topbarBrand || "Bodha Ventures").toUpperCase();

    let fonts: LoadedFont[] = [];
    try {
      fonts = await loadFonts();
    } catch (e) {
      console.error("[og] loadFonts failed, falling back to system fonts:", e);
      cachedFonts = null;
    }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: BG,
          color: FG,
          padding: "56px 64px",
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 64,
            right: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: 3,
            color: DIM,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: FG, fontWeight: 500 }}>{brand}</span>
            <span
              style={{
                display: "flex",
                width: 36,
                height: 2,
                background: GOLD,
                marginLeft: 18,
              }}
            />
          </div>
          <div style={{ display: "flex" }}>{kicker}</div>
        </div>

        {/* LEFT col */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 600,
              color: FG,
              letterSpacing: -1,
              marginBottom: 28,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: DIM,
            }}
          >
            {deck}
          </div>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            display: "flex",
            width: 1,
            background: GOLD,
            opacity: 0.45,
            margin: "130px 0",
          }}
        />

        {/* RIGHT col */}
        <div
          style={{
            width: 220,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 32,
            fontSize: 16,
            letterSpacing: 2,
            color: DIM,
          }}
        >
          {dateLabel ? (
            <div
              style={{
                display: "flex",
                color: FG,
                fontWeight: 500,
                marginBottom: 14,
              }}
            >
              {dateLabel}
            </div>
          ) : null}
          {readTime ? <div style={{ display: "flex" }}>{readTime}</div> : null}
        </div>

        {/* FOOTER */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 64,
            right: 64,
            display: "flex",
            fontSize: 15,
            color: DIM,
            letterSpacing: 1.5,
          }}
        >
          {SITE}/blogs/{slug}
        </div>
      </div>
    ),
    {
      ...size,
      ...(fonts.length > 0 ? { fonts } : {}),
    }
  );
  } catch (err) {
    console.error("[og] image render crashed:", err);
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: BG,
            color: FG,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            letterSpacing: 2,
          }}
        >
          {SITE.toUpperCase()}
        </div>
      ),
      size
    );
  }
}
