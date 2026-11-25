"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { formatInr, rebalance } from "@/app/lib/tools/calculators";
import { CALCULATOR_COPY } from "../copy/calculators";
import CalculatorDialog, { type CalculatorProps } from "./CalculatorDialog";
import { FieldGroup, MoneyField, RangeField, TotalCheck } from "./fields";
import { GOLD, GOLD_LIGHT, INK, ResultHead, ResultNote, Rows, SLATE_LIGHT } from "./results";

const ASSET_COLORS = [INK, GOLD, GOLD_LIGHT, "#9a7a2a", "#5b5f6a", SLATE_LIGHT];

export default function RebalanceCalculator({ open, onClose, title }: CalculatorProps) {
  const { lang } = useLanguage();
  const c = CALCULATOR_COPY[lang].rebalance;
  const [rebalCurrent, setRebalCurrent] = useState([0, 0, 0, 0, 0, 0]);
  const [rebalTarget, setRebalTarget] = useState([60, 20, 5, 10, 5, 0]);
  const total = rebalCurrent.reduce((s, v) => s + Number(v), 0);
  const targetSum = rebalTarget.reduce((s, v) => s + Number(v), 0);
  const r = rebalance(rebalCurrent, rebalTarget);

  const setAt = (list: number[], set: (next: number[]) => void, i: number, v: number) => {
    const next = [...list];
    next[i] = v;
    set(next);
  };

  return (
    <CalculatorDialog
      open={open}
      onClose={onClose}
      num="06"
      title={title}
      subtitle={c.subtitle}
      inputs={
        <>
          <FieldGroup title={c.current}>
            {c.assetLabels.map((label, i) => (
              <MoneyField key={i} id={`reb-cur-${i}`} label={label} value={rebalCurrent[i]} onChange={(v) => setAt(rebalCurrent, setRebalCurrent, i, v)} />
            ))}
            <p className="tl-hint tl-hint-strong">{c.portfolioTotal(formatInr(total))}</p>
          </FieldGroup>
          <FieldGroup title={c.target}>
            {c.assetLabels.map((label, i) => (
              <RangeField key={i} id={`reb-tgt-${i}`} label={label} value={rebalTarget[i]} display={`${rebalTarget[i]}%`} min={0} max={100} onChange={(v) => setAt(rebalTarget, setRebalTarget, i, v)} />
            ))}
            <TotalCheck ok={targetSum === 100}>{targetSum === 100 ? c.targetOk : c.targetTotal(targetSum)}</TotalCheck>
          </FieldGroup>
        </>
      }
      result={
        r ? (
          <>
            <ResultHead eyebrow={c.result} value={formatInr(r.total)} />
            <Rows rows={[
              ...(r.toSell > 0 ? [{ label: c.toSell, value: formatInr(r.toSell), tone: "bad" as const }] : []),
              ...(r.toBuy > 0 ? [{ label: c.toBuy, value: formatInr(r.toBuy), tone: "good" as const }] : []),
            ]} />
            <Rows title={c.perAsset} rows={r.diffs.map((d, i) => ({
              label: c.assetLabels[i],
              color: ASSET_COLORS[i],
              value: d.action === "BUY" ? c.buy(formatInr(d.diff)) : d.action === "SELL" ? c.sell(formatInr(Math.abs(d.diff))) : c.onTarget,
              tone: d.action === "BUY" ? "good" : d.action === "SELL" ? "bad" : "muted",
            }))} />
            <ResultNote>{c.note}</ResultNote>
          </>
        ) : (
          <>
            <ResultHead eyebrow={c.result} value={formatInr(0)} />
            <p className="tl-empty">{c.empty}</p>
          </>
        )
      }
    />
  );
}
