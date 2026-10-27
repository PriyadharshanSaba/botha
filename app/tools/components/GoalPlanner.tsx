"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { formatInr, goalSip } from "@/app/lib/tools/calculators";
import { CALCULATOR_COPY } from "../copy/calculators";
import CalculatorDialog, { type CalculatorProps } from "./CalculatorDialog";
import { MoneyField, RangeField } from "./fields";
import { GOLD, INK, ResultHead, ResultNote, Rows, SplitBar } from "./results";

export default function GoalPlanner({ open, onClose, title }: CalculatorProps) {
  const { lang } = useLanguage();
  const c = CALCULATOR_COPY[lang].goal;
  const [goalTarget, setGoalTarget] = useState(5000000);
  const [goalYears, setGoalYears] = useState(10);
  const [goalRate, setGoalRate] = useState(12);
  const [goalExisting, setGoalExisting] = useState(0);
  const r = goalSip({ target: goalTarget, years: goalYears, ratePct: goalRate, existing: goalExisting });

  return (
    <CalculatorDialog
      open={open}
      onClose={onClose}
      num="04"
      title={title}
      subtitle={c.subtitle}
      inputs={
        <>
          <MoneyField id="goal-target" label={c.target} value={goalTarget} onChange={setGoalTarget} />
          <RangeField id="goal-years" label={c.horizon} value={goalYears} display={c.years(goalYears)} min={1} max={40} onChange={setGoalYears} />
          <RangeField id="goal-rate" label={c.rate} value={goalRate} display={`${goalRate}%`} min={1} max={20} step={0.5} ends={["1%", "20%"]} onChange={setGoalRate} />
          <MoneyField id="goal-existing" label={c.existing} value={goalExisting} onChange={setGoalExisting} />
        </>
      }
      result={
        <>
          <ResultHead eyebrow={c.result} value={formatInr(r.sip)} />
          <SplitBar parts={[{ value: r.fvExisting, color: INK }, { value: r.sipCorpus, color: GOLD }]} />
          <Rows rows={[
            { label: c.fvExisting, value: formatInr(r.fvExisting), color: INK },
            { label: c.sipCorpus, value: formatInr(r.sipCorpus), color: GOLD },
            { label: c.gap, value: formatInr(r.gap) },
            { label: c.totalInvested, value: formatInr(r.totalInvested) },
            { label: c.totalCorpus, value: formatInr(r.totalCorpus), tone: "strong" },
          ]} />
          <ResultNote>{c.note}</ResultNote>
        </>
      }
    />
  );
}
