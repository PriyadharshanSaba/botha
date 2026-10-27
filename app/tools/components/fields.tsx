import type { ReactNode } from "react";

export function FieldGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="tl-group">
      <legend className="tl-group-title">{title}</legend>
      {children}
    </fieldset>
  );
}

// Rupee amount. An empty box reads as zero, as in the original calculators.
export function MoneyField({
  id,
  label,
  value,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
}) {
  return (
    <div className="tl-field">
      <label className="tl-label" htmlFor={id}>{label}</label>
      <div className="tl-money">
        <span aria-hidden="true">₹</span>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          placeholder="0"
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          aria-describedby={hint ? `${id}-hint` : undefined}
        />
      </div>
      {hint && <p id={`${id}-hint`} className="tl-hint">{hint}</p>}
    </div>
  );
}

export function RangeField({
  id,
  label,
  value,
  display,
  min,
  max,
  step = 1,
  ends,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step?: number;
  ends?: [string, string];
  onChange: (value: number) => void;
}) {
  return (
    <div className="tl-field">
      <label className="tl-label tl-label-row" htmlFor={id}>
        {label}
        <span className="tl-val">{display}</span>
      </label>
      <input
        id={id}
        type="range"
        className="tl-range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {ends && (
        <div className="tl-ends" aria-hidden="true">
          <span>{ends[0]}</span>
          <span>{ends[1]}</span>
        </div>
      )}
    </div>
  );
}

export function CheckField({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="tl-check" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

// Live check that a set of percentages adds up to 100.
export function TotalCheck({ ok, children }: { ok: boolean; children: ReactNode }) {
  return <p className={ok ? "tl-total is-ok" : "tl-total is-off"} role="status">{children}</p>;
}
