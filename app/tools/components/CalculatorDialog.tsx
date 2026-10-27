"use client";

import Link from "next/link";
import { useId, useRef, type ReactNode } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useModalDialog } from "@/app/components/ui/useModalDialog";
import { ChevronRightIcon, CloseIcon } from "@/app/components/LineIcons";
import { CALCULATOR_COPY } from "../copy/calculators";
import { PROGRAM_HREF } from "./links";

// Shared shell for every free calculator: inputs on the left, live results on the right.
// It stays mounted while closed so each calculator keeps its numbers between openings.
export default function CalculatorDialog({
  open,
  onClose,
  num,
  title,
  subtitle,
  inputs,
  result,
}: {
  open: boolean;
  onClose: () => void;
  num: string;
  title: string;
  subtitle: string;
  inputs: ReactNode;
  result: ReactNode;
}) {
  const { lang } = useLanguage();
  const c = CALCULATOR_COPY[lang].shell;
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalDialog(dialogRef, open, onClose);

  return (
    <div className="tl-overlay" hidden={!open} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="tl-dialog" tabIndex={-1}>
        <button type="button" className="tl-close" aria-label={c.close} onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="tl-dialog-inputs">
          <div className="tl-dialog-head">
            <span className="ui-eyebrow">{c.tool(num)}</span>
            <h2 id={titleId} className="tl-dialog-title">{title}</h2>
            <p className="tl-dialog-sub">{subtitle}</p>
          </div>
          {inputs}
        </div>
        <div className="tl-dialog-result">
          {result}
          <div className="tl-program-card">
            <span className="tl-program-title">{c.programTitle}</span>
            <Link href={PROGRAM_HREF} className="ui-lnk">
              {c.programLink}
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export type CalculatorProps = { open: boolean; onClose: () => void; title: string };
