"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { EMPTY_TAX_INPUT, formatInr, houseProperty, incomeTax, type TaxInput } from "@/app/lib/tools/calculators";
import { CALCULATOR_COPY } from "../copy/calculators";
import CalculatorDialog, { type CalculatorProps } from "./CalculatorDialog";
import { FieldGroup, MoneyField } from "./fields";
import { ResultHead, ResultNote, Rows, type Row } from "./results";

export default function TaxEstimator({ open, onClose, title }: CalculatorProps) {
  const { lang } = useLanguage();
  const c = CALCULATOR_COPY[lang].tax;
  const [input, setInput] = useState<TaxInput>(EMPTY_TAX_INPUT);
  const r = incomeTax(input);
  const hp = houseProperty(input.rentGross, input.muniTax, input.homeLoanInt);

  const field = (key: keyof TaxInput, label: string, hint?: string) => (
    <MoneyField id={`tax-${key}`} label={label} value={input[key]} hint={hint} onChange={(v) => setInput({ ...input, [key]: v })} />
  );

  const breakdown: Row[] = [{ label: c.slabTax, value: formatInr(r.slabTax) }];
  if (r.rebate87a > 0) breakdown.push({ label: c.rebate, value: `−${formatInr(r.rebate87a)}`, tone: "good" });
  if (r.marginalReliefRebate > 0) breakdown.push({ label: c.reliefRebate, value: formatInr(r.marginalReliefRebate), tone: "muted" });

  const totals: Row[] = [];
  if (r.surcharge > 0) totals.push({ label: c.surcharge, value: formatInr(r.surcharge) });
  if (r.marginalReliefSurcharge > 0) totals.push({ label: c.reliefSurcharge, value: `−${formatInr(r.marginalReliefSurcharge)}`, tone: "muted" });
  totals.push({ label: c.cess, value: formatInr(r.cess) });

  return (
    <CalculatorDialog
      open={open}
      onClose={onClose}
      num="05"
      title={title}
      subtitle={c.subtitle}
      inputs={
        <>
          <FieldGroup title={c.heads.salary}>{field("salary", c.salary, c.salaryHint)}</FieldGroup>
          <FieldGroup title={c.heads.business}>{field("business", c.business)}</FieldGroup>
          <FieldGroup title={c.heads.property}>
            {field("rentGross", c.rent)}
            {field("muniTax", c.muni)}
            {field("homeLoanInt", c.homeLoan)}
            {(input.rentGross > 0 || input.muniTax > 0 || input.homeLoanInt > 0) && (
              <p className="tl-hint">{c.propertyHint(formatInr(hp.nav), formatInr(hp.stdDed30), formatInr(hp.net))}</p>
            )}
          </FieldGroup>
          <FieldGroup title={c.heads.gains}>
            {field("stcgEq", c.stcgEq)}
            {field("stcgDebt", c.stcgDebt)}
            {field("ltcgEq", c.ltcgEq)}
            {field("ltcgDebtPre", c.ltcgDebtPre)}
            {field("ltcgDebtPost", c.ltcgDebtPost)}
          </FieldGroup>
          <FieldGroup title={c.heads.other}>
            {field("interest", c.interest)}
            {field("dividends", c.dividends)}
            {field("otherInc", c.otherInc)}
          </FieldGroup>
        </>
      }
      result={
        <>
          <ResultHead eyebrow={c.result} value={formatInr(r.totalTax)}>
            <p className="tl-figure-sub">{c.effectiveRate(r.effectiveRate.toFixed(2))}</p>
          </ResultHead>
          <Rows title={c.incomeSummary} rows={[
            { label: c.salaryNet, value: formatInr(r.salaryNet) },
            { label: c.businessNet, value: formatInr(r.businessNet) },
            { label: c.hpNet, value: formatInr(r.hpNet) },
            { label: c.otherNet, value: formatInr(r.otherNet) },
            { label: c.totalNormal, value: formatInr(r.totalNormal), tone: "strong" },
          ]} />
          <Rows title={c.breakdown} rows={breakdown} />
          <Rows title={c.gainsTax} rows={[
            { label: c.stcgEqTax, value: formatInr(r.stcgEqTax) },
            { label: c.stcgDebtTax, value: c.inSlab, tone: "muted" },
            { label: c.ltcgEqTax, value: formatInr(r.ltcgEqTax) },
            { label: c.ltcgDebtPreTax, value: formatInr(r.ltcgDebtPreTax) },
            { label: c.ltcgDebtPostTax, value: c.inSlab, tone: "muted" },
          ]} />
          <Rows title={c.totals} rows={totals} />
          <ResultNote>{c.note}</ResultNote>
        </>
      }
    />
  );
}
