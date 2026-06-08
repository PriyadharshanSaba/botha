"use client";

import { useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";

export interface OtpInputApi {
  otp6: string[];
  value: string;
  reset: () => void;
  inputProps: (index: number, idPrefix?: string) => {
    id: string;
    value: string;
    maxLength: number;
    inputMode: "numeric";
    pattern: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onInput: (e: FormEvent<HTMLInputElement>) => void;
    onPaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  };
}

export function useOtpInput(): OtpInputApi {
  const [otp6, setOtp6] = useState(["", "", "", "", "", ""]);

  function reset() {
    setOtp6(["", "", "", "", "", ""]);
  }

  function changeAt(index: number, value: string, idPrefix: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp6];
    next[index] = value;
    setOtp6(next);
    if (value && index < next.length - 1) {
      document.getElementById(`${idPrefix}-${index + 1}`)?.focus();
    }
  }

  function keyDownAt(
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
    idPrefix: string
  ) {
    if (e.key === "Backspace" && !otp6[index] && index > 0) {
      const next = [...otp6];
      next[index - 1] = "";
      setOtp6(next);
      document.getElementById(`${idPrefix}-${index - 1}`)?.focus();
    }
  }

  function inputAt(
    e: FormEvent<HTMLInputElement>,
    index: number,
    idPrefix: string
  ) {
    const inputType = (e.nativeEvent as InputEvent).inputType;
    if (inputType === "deleteContentBackward" && !otp6[index] && index > 0) {
      const next = [...otp6];
      next[index - 1] = "";
      setOtp6(next);
      document.getElementById(`${idPrefix}-${index - 1}`)?.focus();
    }
  }

  function pasteAt(
    e: ClipboardEvent<HTMLInputElement>,
    index: number,
    idPrefix: string
  ) {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!digits) return;
    const next = [...otp6];
    for (let i = 0; i < digits.length; i++) {
      if (index + i < next.length) next[index + i] = digits[i];
    }
    setOtp6(next);
    document.getElementById(
      `${idPrefix}-${Math.min(index + digits.length, next.length - 1)}`
    )?.focus();
  }

  return {
    otp6,
    value: otp6.join(""),
    reset,
    inputProps: (index, idPrefix = "otp") => ({
      id: `${idPrefix}-${index}`,
      value: otp6[index],
      maxLength: 1,
      inputMode: "numeric",
      pattern: "[0-9]*",
      onChange: (e) => changeAt(index, e.target.value, idPrefix),
      onKeyDown: (e) => keyDownAt(e, index, idPrefix),
      onInput: (e) => inputAt(e, index, idPrefix),
      onPaste: (e) => pasteAt(e, index, idPrefix),
    }),
  };
}
