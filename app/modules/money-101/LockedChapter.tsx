import Link from "next/link";
import React from "react";

type Props = {
  titleEn: string;
  titleKn: string;
  ctaHref?: string;
  ctaLabel?: string;
  headline?: string;
  sub?: string;
};

function LockBadge() {
  return (
    <span className="locked-badge" aria-hidden>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
      Subscribers only
    </span>
  );
}

function Body({
  headline,
  sub,
  ctaHref,
  ctaLabel,
}: {
  headline: string;
  sub: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="locked-chapter-body">
      <div className="locked-chapter-icon" aria-hidden>
        <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      </div>
      <h3 className="locked-chapter-headline">{headline}</h3>
      <p className="locked-chapter-sub">{sub}</p>
      <Link href={ctaHref} className="locked-chapter-cta">{ctaLabel} &rarr;</Link>
    </div>
  );
}

export default function LockedChapter({
  titleEn,
  titleKn,
  ctaHref = "/plans",
  ctaLabel = "View Plans",
  headline = "This chapter is part of the full course.",
  sub = "Subscribe to unlock all 8 chapters of Money 101, plus every other module on Bodha.",
}: Props) {
  return (
    <div>
      <div data-lang="en">
        <h2>
          {titleEn} <LockBadge />
        </h2>
        <Body headline={headline} sub={sub} ctaHref={ctaHref} ctaLabel={ctaLabel} />
      </div>
      <div data-lang="kn">
        <h2>
          {titleKn} <LockBadge />
        </h2>
        <Body headline={headline} sub={sub} ctaHref={ctaHref} ctaLabel={ctaLabel} />
      </div>
    </div>
  );
}
