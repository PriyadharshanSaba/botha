"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { budget, formatInr } from "@/app/lib/tools/calculators";
import { CALCULATOR_COPY } from "../copy/calculators";
import CalculatorDialog, { type CalculatorProps } from "./CalculatorDialog";
import { MoneyField, RangeField, TotalCheck } from "./fields";
import { GOLD, GOLD_LIGHT, INK, ResultHead, ResultNote, Rows, SplitBar } from "./results";

export default function BudgetPlanner({ open, onClose, title }: CalculatorProps) {
  const { lang } = useLanguage();
  const c = CALCULATOR_COPY[lang].budget;
  const [budgetIncome, setBudgetIncome] = useState(100000);
  const [budgetNeeds, setBudgetNeeds] = useState(50);
  const [budgetWants, setBudgetWants] = useState(30);
  const [budgetSavings, setBudgetSavings] = useState(20);
  const [budgetSipPct, setBudgetSipPct] = useState(70);
  const r = budget({ income: budgetIncome, needsPct: budgetNeeds, wantsPct: budgetWants, savingsPct: budgetSavings, sipPct: budgetSipPct });

  return (
    <CalculatorDialog
      open={open}
      onClose={onClose}
      num="03"
      title={title}
      subtitle={c.subtitle}
      inputs={
        <>
          <MoneyField id="budget-income" label={c.income} value={budgetIncome} onChange={setBudgetIncome} />
          <RangeField id="budget-needs" label={c.needs} value={budgetNeeds} display={`${budgetNeeds}%`} min={0} max={100} onChange={setBudgetNeeds} />
          <RangeField id="budget-wants" label={c.wants} value={budgetWants} display={`${budgetWants}%`} min={0} max={100} onChange={setBudgetWants} />
          <RangeField id="budget-savings" label={c.savings} value={budgetSavings} display={`${budgetSavings}%`} min={0} max={100} onChange={setBudgetSavings} />
          <TotalCheck ok={r.totalPct === 100}>{r.totalPct === 100 ? c.totalOk : c.total(r.totalPct)}</TotalCheck>
          <RangeField id="budget-sip" label={c.sipShare} value={budgetSipPct} display={`${budgetSipPct}%`} min={10} max={100} ends={["10%", "100%"]} onChange={setBudgetSipPct} />
        </>
      }
      result={
        <>
          <ResultHead eyebrow={c.result} value={formatInr(r.sip)} />
          <SplitBar parts={[{ value: r.needs, color: INK }, { value: r.wants, color: GOLD }, { value: r.savings, color: GOLD_LIGHT }]} />
          <Rows rows={[
            { label: `${c.needs} (${budgetNeeds}%)`, value: formatInr(r.needs), color: INK },
            { label: `${c.wants} (${budgetWants}%)`, value: formatInr(r.wants), color: GOLD },
            { label: `${c.savings} (${budgetSavings}%)`, value: formatInr(r.savings), color: GOLD_LIGHT },
          ]} />
          <ResultNote>{c.note}</ResultNote>
        </>
      }
    />
  );
}
