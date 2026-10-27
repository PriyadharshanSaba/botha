import Link from "next/link";
import type { ReactNode } from "react";
import type { HomeSection } from "@/app/lib/sections";
import SectionLink from "../SectionLink";
import { ChevronRightIcon } from "../LineIcons";
import type { Headline } from "./headline";

export function Gold({ line }: { line: Headline }) {
  return (
    <>
      {line.pre}
      {line.gold && <em className="ui-gold">{line.gold}</em>}
      {line.post}
    </>
  );
}

// Decorative illustration: hidden from assistive tech and never interactive.
export function Decor({ src, className }: { src: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" aria-hidden="true" className={className} loading="lazy" decoding="async" />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="ui-eyebrow">{children}</span>;
}

type Target = { href: string; section?: never } | { section: HomeSection; href?: never };

function TargetLink({ target, className, children }: { target: Target; className: string; children: ReactNode }) {
  if (target.section) {
    return <SectionLink section={target.section} className={className}>{children}</SectionLink>;
  }
  return <Link href={target.href} className={className}>{children}</Link>;
}

export function PrimaryCta({ to, children }: { to: Target; children: ReactNode }) {
  return <TargetLink target={to} className="ui-btn">{children}</TargetLink>;
}

export function ArrowCta({ to, children }: { to: Target; children: ReactNode }) {
  return (
    <TargetLink target={to} className="ui-lnk">
      {children}
      <ChevronRightIcon />
    </TargetLink>
  );
}
