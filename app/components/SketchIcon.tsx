import React from "react";

/**
 * SketchIcon — monoline, hand-drawn-style icons rendered as inline SVG.
 *
 * All icons live in a 24x24 viewBox and use stroke="currentColor" so the
 * caller controls colour via CSS `color`. Strokes are deliberately slightly
 * looped/curved where straight lines would normally go, to keep the
 * notebook-sketch feel.
 */

export type SketchIconName =
  // services / landing
  | "trophy"
  | "briefcase"
  | "rocket"
  | "wrench"
  | "pencil"
  | "books"
  // values / philosophy
  | "target"
  | "shield-check"
  | "chart-up"
  | "partnership"
  | "magnifier"
  | "gear"
  | "hard-hat"
  | "sprout"
  | "lock"
  | "bolt"
  // dashboards / business
  | "bar-chart"
  | "building"
  | "check-circle"
  | "grad-cap"
  | "download"
  | "scales"
  | "calendar"
  | "receipt"
  | "phone"
  | "brain"
  | "flame"
  | "map"
  | "chat"
  | "coins"
  | "clipboard"
  | "factory"
  | "refresh"
  | "siren"
  | "scissors"
  | "chart-down"
  | "cloud"
  | "warn"
  | "satellite"
  | "car"
  | "cigarette"
  | "cookie"
  | "flask";

type Props = {
  name: SketchIconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const ICONS: Record<SketchIconName, React.ReactNode> = {
  /* --- services (landing services-grid) --- */
  trophy: (
    <>
      <path d="M7.5 5.5 Q7.5 5 8 5 L16 5 Q16.5 5 16.5 5.5 Q16.5 11 12 13 Q7.5 11 7.5 5.5 Z" />
      <path d="M7.5 7 Q4.5 7 4.5 9 Q4.5 11 7 11.5" />
      <path d="M16.5 7 Q19.5 7 19.5 9 Q19.5 11 17 11.5" />
      <path d="M10.5 13 L10.5 16.5 L13.5 16.5 L13.5 13" />
      <path d="M9 18 Q9 17.5 9.25 17.5 L14.75 17.5 Q15 17.5 15 18" />
      <path d="M9.5 16.5 L14.5 16.5" />
    </>
  ),
  briefcase: (
    <>
      <path d="M9.5 7 Q9.5 5.5 12 5.5 Q14.5 5.5 14.5 7" />
      <path d="M5.5 7 L18.5 7 Q19.5 7 19.5 8 L19.5 17 Q19.5 18 18.5 18 L5.5 18 Q4.5 18 4.5 17 L4.5 8 Q4.5 7 5.5 7 Z" />
      <path d="M4.5 11.5 L11 11.5 M13 11.5 L19.5 11.5" />
      <path d="M11 11 L13 11 L13 12.5 L11 12.5 Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3 Q9.5 6.5 9.5 12 L9.5 16.5 L14.5 16.5 L14.5 12 Q14.5 6.5 12 3 Z" />
      <circle cx="12" cy="10" r="1.4" />
      <path d="M9.5 13.5 L6.5 16.5 L6.5 18 L9.5 16.5" />
      <path d="M14.5 13.5 L17.5 16.5 L17.5 18 L14.5 16.5" />
      <path d="M10.5 16.5 Q11 19 12 20 Q13 19 13.5 16.5" />
    </>
  ),
  wrench: (
    <>
      <path d="M7.5 4 Q4.5 5 4.5 8 Q4.5 11 7.5 11 L9.5 9 L16.5 16 Q17.5 18 16.5 19 Q15.5 20 13.5 19 L6.5 12 L4.5 11" />
      <circle cx="16.5" cy="17.5" r="1" />
    </>
  ),
  pencil: (
    <>
      <path d="M4 20 L6.5 15 L9 17.5 Z" />
      <path d="M6.5 15 L15.5 6 L18 8.5 L9 17.5" />
      <path d="M14 7.5 L16.5 10" />
      <path d="M15.5 6 L17 4.5 L19.5 7 L18 8.5" />
      <path d="M5 19 L4 20" />
    </>
  ),
  books: (
    <>
      <path d="M3 5 Q12 4 12 7 Q12 4 21 5 L21 19 Q12 18 12 21 Q12 18 3 19 Z" />
      <path d="M12 7 L12 21" />
      <path d="M5 9 L9 8.5 M15 8.5 L19 9" />
      <path d="M5 13 L9 12.5 M15 12.5 L19 13" />
    </>
  ),

  /* --- philosophy / values --- */
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3 L20 6 Q20 14 12 21 Q4 14 4 6 Z" />
      <path d="M8.5 11.5 L11 14 L15.5 9" />
    </>
  ),
  "chart-up": (
    <>
      <path d="M4 4 L4 20 L20 20" />
      <path d="M7 16 L11 12 L14 14 L19 8" />
      <path d="M16 8 L19 8 L19 11" />
    </>
  ),
  partnership: (
    <>
      <circle cx="9" cy="12" r="4.5" />
      <circle cx="15" cy="12" r="4.5" />
    </>
  ),
  magnifier: (
    <>
      <circle cx="10" cy="10" r="5" />
      <path d="M13.7 13.7 L19 19" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3 L12 5 M12 19 L12 21 M3 12 L5 12 M19 12 L21 12 M5.6 5.6 L7 7 M17 17 L18.4 18.4 M5.6 18.4 L7 17 M17 7 L18.4 5.6" />
    </>
  ),
  "hard-hat": (
    <>
      <path d="M4 17 Q4 11 12 11 Q20 11 20 17 Z" />
      <path d="M9 11 L9 7 L15 7 L15 11" />
      <path d="M3.5 18.5 L20.5 18.5" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21 L12 12" />
      <path d="M12 12 Q6 11 6 6 Q12 7 12 12" />
      <path d="M12 14 Q18 13 18 8 Q12 9 12 14" />
    </>
  ),
  lock: (
    <>
      <path d="M6.5 11 L17.5 11 Q18 11 18 11.5 L18 19.5 Q18 20 17.5 20 L6.5 20 Q6 20 6 19.5 L6 11.5 Q6 11 6.5 11 Z" />
      <path d="M9 11 L9 8 Q9 5 12 5 Q15 5 15 8 L15 11" />
      <circle cx="12" cy="14.5" r="1" />
      <path d="M12 14.5 L12 17" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 3 L5 13 L11 13 L10 21 L19 11 L13 11 L14 3 Z" />
    </>
  ),

  /* --- business / dashboards --- */
  "bar-chart": (
    <>
      <path d="M4 4 L4 20 L20 20" />
      <path d="M7 13 L9.5 13 L9.5 19 L7 19 Z" />
      <path d="M11.5 9 L14 9 L14 19 L11.5 19 Z" />
      <path d="M16 6 L18.5 6 L18.5 19 L16 19 Z" />
    </>
  ),
  building: (
    <>
      <path d="M5 4 L19 4 L19 21 L5 21 Z" />
      <path d="M8 7 L10 7 M14 7 L16 7" />
      <path d="M8 11 L10 11 M14 11 L16 11" />
      <path d="M8 15 L10 15 M14 15 L16 15" />
      <path d="M10 21 L10 17 L14 17 L14 21" />
    </>
  ),
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 12 L11 15.5 L16.5 9.5" />
    </>
  ),
  "grad-cap": (
    <>
      <path d="M3 9 L12 5 L21 9 L12 13 L3 9 Z" />
      <path d="M7 11 L7 16.5 Q12 18.5 17 16.5 L17 11" />
      <path d="M21 9 L21 15" />
      <circle cx="21" cy="16" r="0.7" />
    </>
  ),
  download: (
    <>
      <path d="M12 3 L12 15" />
      <path d="M7 10 L12 15 L17 10" />
      <path d="M4 17 L4 20 Q4 20.5 4.5 20.5 L19.5 20.5 Q20 20.5 20 20 L20 17" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4 L12 20" />
      <path d="M7 20 L17 20" />
      <path d="M5 7 L19 6" />
      <path d="M5 7 L2.5 13 Q5 14.5 7.5 13 Z" />
      <path d="M19 6 L16.5 12 Q19 13.5 21.5 12 Z" />
    </>
  ),
  calendar: (
    <>
      <path d="M4.5 6 L19.5 6 Q20 6 20 6.5 L20 19.5 Q20 20 19.5 20 L4.5 20 Q4 20 4 19.5 L4 6.5 Q4 6 4.5 6 Z" />
      <path d="M8 4 L8 8 M16 4 L16 8" />
      <path d="M4 10 L20 10" />
      <circle cx="9" cy="14" r="0.8" />
      <circle cx="13" cy="14" r="0.8" />
      <circle cx="17" cy="14" r="0.8" />
      <circle cx="9" cy="17" r="0.8" />
      <circle cx="13" cy="17" r="0.8" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3 L18 3 L18 21 L15.5 19.5 L13 21 L10.5 19.5 L8 21 L5.5 19.5 L4 21 L4 4 Z M6 3 L4 4" />
      <path d="M7.5 8 L16 8 M7.5 11.5 L16 11.5 M7.5 15 L13 15" />
    </>
  ),
  phone: (
    <>
      <path d="M5.5 4 L9 4 Q9.5 4 9.6 4.5 L10.5 8 Q10.6 8.5 10.2 8.8 L8.5 10 Q9.5 13 12 15.5 Q14.5 17 15.5 17.5 L16.7 15.8 Q17 15.4 17.5 15.5 L21 16.4 Q21.5 16.5 21.5 17 L21.5 20 Q21.5 20.5 21 20.5 Q11 20.5 5.5 15 Q5.5 9 5.5 4 Z" />
    </>
  ),
  brain: (
    <>
      <path d="M12 4 Q9 4 8.5 6 Q6 6 6 9 Q4 10 5 12 Q4 14 6 15 Q6 18 9 18 Q9.5 20 12 20" />
      <path d="M12 4 Q15 4 15.5 6 Q18 6 18 9 Q20 10 19 12 Q20 14 18 15 Q18 18 15 18 Q14.5 20 12 20" />
      <path d="M12 4 L12 20" />
      <path d="M8.5 9 Q10 10 11 9 M13 9 Q14 10 15.5 9" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3 Q14 7 16 9 Q19 12 18 16 Q17 20 12 21 Q7 20 6 16 Q5 12 8 9 Q9 11 9.5 11 Q11 9 10 6 Q11 4 12 3 Z" />
      <path d="M12 14 Q13.5 15 13.5 17 Q13 19 12 19 Q11 19 10.5 17 Q10.5 15 12 14 Z" />
    </>
  ),
  map: (
    <>
      <path d="M3 6 L9 4 L15 6 L21 4 L21 18 L15 20 L9 18 L3 20 Z" />
      <path d="M9 4 L9 18" />
      <path d="M15 6 L15 20" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5 L18 5 Q19 5 19 6 L19 15 Q19 16 18 16 L11 16 L7 20 L7 16 L5 16 Q4 16 4 15 Z" />
      <circle cx="9" cy="10.5" r="0.7" />
      <circle cx="12" cy="10.5" r="0.7" />
      <circle cx="15" cy="10.5" r="0.7" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="8" rx="5" ry="2.5" />
      <path d="M4 8 L4 11 Q4 13.5 9 13.5 Q14 13.5 14 11 L14 8" />
      <path d="M4 11 L4 14 Q4 16.5 9 16.5 Q14 16.5 14 14 L14 11" />
      <ellipse cx="15" cy="15" rx="5" ry="2.5" />
      <path d="M10 15 L10 18 Q10 20.5 15 20.5 Q20 20.5 20 18 L20 15" />
    </>
  ),
  clipboard: (
    <>
      <path d="M6 5 L9 5 Q9 3.5 12 3.5 Q15 3.5 15 5 L18 5 Q18.5 5 18.5 5.5 L18.5 20 Q18.5 20.5 18 20.5 L6 20.5 Q5.5 20.5 5.5 20 L5.5 5.5 Q5.5 5 6 5 Z" />
      <path d="M9 5 Q9 6.5 9.5 6.5 L14.5 6.5 Q15 6.5 15 5" />
      <path d="M8 11 L16 11 M8 14 L16 14 M8 17 L13 17" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20 L3 12 L9 14 L9 10 L15 13 L15 8 L21 11 L21 20 Z" />
      <path d="M6 17 L6 18 M11 17 L11 18 M17 17 L17 18" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 12 Q4 6 10 5 Q15 4.5 18 9" />
      <path d="M18 4 L18 9 L13 9" />
      <path d="M20 12 Q20 18 14 19 Q9 19.5 6 15" />
      <path d="M6 20 L6 15 L11 15" />
    </>
  ),
  siren: (
    <>
      <path d="M5 18 L19 18 L19 14 Q19 8 12 8 Q5 8 5 14 Z" />
      <path d="M12 4 L12 7" />
      <path d="M5 6 L7 7.5 M19 6 L17 7.5" />
      <path d="M3 18 L21 18 L21 20 L3 20 Z" />
      <path d="M9 12 Q11 11 13 13 Q14 14 15 13.5" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <path d="M8.5 8.5 L20 19" />
      <path d="M8.5 15.5 L20 5" />
    </>
  ),
  "chart-down": (
    <>
      <path d="M4 4 L4 20 L20 20" />
      <path d="M7 9 L11 13 L14 11 L19 17" />
      <path d="M19 14 L19 17 L16 17" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 17 Q3 17 3 13.5 Q3 11 5.5 10.5 Q5.5 7 9 7 Q11.5 7 12.5 8.5 Q14 7.5 16 8.5 Q18.5 9.5 18 12.5 Q21 13 20.5 16 Q20 17 18 17 Z" />
    </>
  ),
  warn: (
    <>
      <path d="M12 4 L21 19 Q21.5 20 20.5 20 L3.5 20 Q2.5 20 3 19 Z" />
      <path d="M12 10 L12 15" />
      <circle cx="12" cy="17.5" r="0.8" />
    </>
  ),
  satellite: (
    <>
      <path d="M4 12 L8 8 L12 12 L8 16 Z" />
      <path d="M9 11 L12 8 Q14 6 16 8 Q18 10 16 12 L13 15" />
      <path d="M14 14 Q17 18 21 17" />
      <path d="M11 12 Q14 14 14 17" />
    </>
  ),
  car: (
    <>
      <path d="M3 16 L3 13 Q3 12 4 12 L5 12 L7 7.5 Q7.5 7 8 7 L16 7 Q16.5 7 17 7.5 L19 12 L20 12 Q21 12 21 13 L21 16 Q21 17 20 17 L4 17 Q3 17 3 16 Z" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
      <path d="M5 12 L19 12" />
    </>
  ),
  cigarette: (
    <>
      <path d="M3 14 L18 14 L18 17 L3 17 Z" />
      <path d="M15 14 L15 17" />
      <path d="M19 9 Q19 10 19.5 11 Q20 12 19.5 13" />
      <path d="M21 9 Q21 10 21.5 11" />
    </>
  ),
  cookie: (
    <>
      <path d="M12 3 Q19 3 20.5 9 Q22 14 18 18 Q14 22 9 20 Q4 18 3 13 Q2.5 8 6 5 Q9 3 12 3 Z" />
      <circle cx="9" cy="9" r="0.9" />
      <circle cx="14" cy="11" r="0.9" />
      <circle cx="10" cy="14" r="0.9" />
      <circle cx="15" cy="16" r="0.9" />
      <circle cx="7" cy="12" r="0.6" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3 L15 3" />
      <path d="M10 3 L10 9 L5.5 18 Q5 19.5 6.5 19.5 L17.5 19.5 Q19 19.5 18.5 18 L14 9 L14 3" />
      <path d="M7.5 14 L16.5 14" />
      <circle cx="10" cy="16.5" r="0.6" />
      <circle cx="13" cy="17.5" r="0.6" />
    </>
  ),
};

export default function SketchIcon({
  name,
  size = 24,
  strokeWidth = 1.5,
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
