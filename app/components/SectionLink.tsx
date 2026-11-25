"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { scrollToSection, sectionHref, type HomeSection } from "@/app/lib/sections";

// Links to a home-page section. On the home page it smooth-scrolls in place;
// elsewhere it navigates to /#section and the home page lands on it.
export default function SectionLink({
  section,
  className,
  onNavigate,
  children,
}: {
  section: HomeSection;
  className?: string;
  onNavigate?: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onNavigate?.();
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (pathname === "/" && scrollToSection(section)) e.preventDefault();
  }

  return (
    <Link href={sectionHref(section)} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
