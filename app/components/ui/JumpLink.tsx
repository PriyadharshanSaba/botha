"use client";

import type { MouseEvent, ReactNode } from "react";
import { scrollToId } from "@/app/lib/sections";
import { ArrowRightIcon, ChevronRightIcon } from "../LineIcons";

// Smooth-scrolls to an element on the current page. "pill" is the cream jump pill,
// "button" the black call-to-action and "link" the gold arrow link.
export default function JumpLink({
  targetId,
  icon,
  variant = "pill",
  children,
}: {
  targetId: string;
  icon?: ReactNode;
  variant?: "pill" | "button" | "link";
  children: ReactNode;
}) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (scrollToId(targetId)) e.preventDefault();
  }

  const className = variant === "button" ? "ui-btn" : variant === "link" ? "ui-lnk" : "ui-jump";
  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {icon}
      {children}
      {variant === "pill" && <ArrowRightIcon />}
      {variant === "link" && <ChevronRightIcon />}
    </a>
  );
}
