"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { formatInr, sip } from "@/app/lib/tools/calculators";
import { CALCULATOR_COPY } from "../copy/calculators";
import CalculatorDialog, { type CalculatorProps } from "./CalculatorDialog";
import { CheckField, MoneyField, RangeField } from "./fields";
import { GOLD, INK, ResultHead, ResultNote, Rows, SplitBar } from "./results";

export default function SipCalculator({ open, onClose, title }: CalculatorProps) {
  const { lang } = useLanguage();
  const c = CALCULATOR_COPY[lang].sip;
  const [sipAmt, setSipAmt] = useState(10000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  const [sipStepUp, setSipStepUp] = useState(false);
  const [sipStepPct, setSipStepPct] = useState(10);
  const r = sip({ amount: sipAmt, ratePct: sipRate, years: sipYears, stepUp: sipStepUp, stepPct: sipStepPct });

  return (
    <CalculatorDialog
      open={open}
      onClose={onClose}
      num="02"
      title={title}
      subtitle={c.subtitle}
      inputs={
        <>
          <MoneyField id="sip-amt" label={c.amount} value={sipAmt} onChange={setSipAmt} />
          <RangeField id="sip-rate" label={c.rate} value={sipRate} display={`${sipRate}%`} min={1} max={20} step={0.5} ends={["1%", "20%"]} onChange={setSipRate} />
          <RangeField id="sip-years" label={c.period} value={sipYears} display={c.years(sipYears)} min={1} max={40} ends={[`1 ${c.yearShort}`, `40 ${c.yearsShort}`]} onChange={setSipYears} />
          <CheckField id="sip-stepon" label={c.stepToggle} checked={sipStepUp} onChange={setSipStepUp} />
          {sipStepUp && (
            <RangeField id="sip-step" label={c.step} value={sipStepPct} display={`${sipStepPct}%`} min={1} max={25} onChange={setSipStepPct} />
          )}
        </>
      }
      result={
        <>
          <ResultHead eyebrow={c.result(sipYears)} value={formatInr(r.maturity)} />
          <SplitBar parts={[{ value: r.invested, color: INK }, { value: r.gains, color: GOLD }]} />
          <Rows rows={[
            { label: c.invested, value: formatInr(r.invested), color: INK },
            { label: c.gains, value: formatInr(r.gains), color: GOLD },
          ]} />
          <ResultNote>{c.note}</ResultNote>
        </>
      }
    />
  );
}
