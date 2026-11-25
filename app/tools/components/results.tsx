import type { ReactNode } from "react";

export function ResultHead({ eyebrow, value, negative = false, children }: { eyebrow: string; value: string; negative?: boolean; children?: ReactNode }) {
  return (
    <div className="tl-result-head">
      <span className="ui-eyebrow">{eyebrow}</span>
      <p className={negative ? "tl-figure is-negative" : "tl-figure"} aria-live="polite">{value}</p>
      {children}
    </div>
  );
}

export const INK = "#0d0d0d";
export const GOLD = "#c9a84c";
export const GOLD_LIGHT = "#e8d08a";
export const SLATE_LIGHT = "#b9b2a3";

// Proportional bar in brand colours. Hidden from assistive tech: the rows carry the numbers.
export function SplitBar({ parts }: { parts: { value: number; color: string }[] }) {
  const total = parts.reduce((s, p) => s + Math.max(p.value, 0), 0);
  return (
    <div className="tl-bar" aria-hidden="true">
      {total > 0 &&
        parts.map((p, i) => (
          <span key={i} style={{ width: `${(Math.max(p.value, 0) / total) * 100}%`, background: p.color }} />
        ))}
    </div>
  );
}

export type Row = { label: string; value: string; color?: string; tone?: "muted" | "good" | "bad" | "strong" };

export function Rows({ title, rows }: { title?: string; rows: Row[] }) {
  if (rows.length === 0) return null;
  return (
    <div className="tl-rows">
      {title && <h3 className="tl-rows-title">{title}</h3>}
      <dl>
        {rows.map((r) => (
          <div key={r.label} className={r.tone ? `tl-row is-${r.tone}` : "tl-row"}>
            <dt>
              {r.color && <i className="tl-dot" style={{ background: r.color }} aria-hidden="true" />}
              {r.label}
            </dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ResultNote({ children }: { children: ReactNode }) {
  return <p className="tl-note">{children}</p>;
}
