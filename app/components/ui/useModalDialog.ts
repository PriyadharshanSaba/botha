"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

// checkVisibility also rules out content inside a closed <details>, which offsetParent misses.
function isVisible(el: HTMLElement): boolean {
  return typeof el.checkVisibility === "function" ? el.checkVisibility() : el.offsetParent !== null;
}

function focusableIn(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => isVisible(el) || el === document.activeElement);
}

// Modal behaviour for a dialog element: moves focus in and keeps it there, closes on Esc,
// locks page scroll, and returns focus to whatever opened it.
// `escapeEnabled` lets a nested modal take Esc for itself.
export function useModalDialog(
  dialogRef: RefObject<HTMLElement | null>,
  open: boolean,
  onClose: () => void,
  escapeEnabled = true,
) {
  const onCloseRef = useRef(onClose);
  const escapeRef = useRef(escapeEnabled);
  useEffect(() => {
    onCloseRef.current = onClose;
    escapeRef.current = escapeEnabled;
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const items = focusableIn(dialog);
    const initial =
      dialog.querySelector<HTMLElement>("[data-autofocus]") ??
      items.find((el) => el.matches("input, select, textarea")) ??
      items[0] ??
      dialog;
    initial.focus({ preventScroll: true });

    function handleKey(e: KeyboardEvent) {
      if (!dialog) return;
      if (e.key === "Escape" && escapeRef.current) {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusableIn(dialog);
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !dialog.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, [dialogRef, open]);
}
