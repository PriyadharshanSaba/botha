"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { formatInr, netWorth } from "@/app/lib/tools/calculators";
import { CALCULATOR_COPY } from "../copy/calculators";
import CalculatorDialog, { type CalculatorProps } from "./CalculatorDialog";
import { FieldGroup, MoneyField } from "./fields";
import { GOLD, INK, ResultHead, ResultNote, Rows, SplitBar } from "./results";

const ASSET_KEYS = ["savings", "mf", "stocks", "re", "gold", "other"] as const;
const LIABILITY_KEYS = ["home", "car", "personal", "cc"] as const;

export default function NetWorthCalculator({ open, onClose, title }: CalculatorProps) {
  const { lang } = useLanguage();
  const c = CALCULATOR_COPY[lang].networth;
  const [nwAssets, setNwAssets] = useState({ savings: 0, mf: 0, stocks: 0, re: 0, gold: 0, other: 0 });
  const [nwLiabilities, setNwLiabilities] = useState({ home: 0, car: 0, personal: 0, cc: 0 });
  const r = netWorth(Object.values(nwAssets), Object.values(nwLiabilities));

  return (
    <CalculatorDialog
      open={open}
      onClose={onClose}
      num="01"
      title={title}
      subtitle={c.subtitle}
      inputs={
        <>
          <FieldGroup title={c.assets}>
            {ASSET_KEYS.map((k) => (
              <MoneyField key={k} id={`nw-${k}`} label={c.assetLabels[k]} value={nwAssets[k]} onChange={(v) => setNwAssets({ ...nwAssets, [k]: v })} />
            ))}
          </FieldGroup>
          <FieldGroup title={c.liabilities}>
            {LIABILITY_KEYS.map((k) => (
              <MoneyField key={k} id={`nw-${k}`} label={c.liabilityLabels[k]} value={nwLiabilities[k]} onChange={(v) => setNwLiabilities({ ...nwLiabilities, [k]: v })} />
            ))}
          </FieldGroup>
        </>
      }
      result={
        <>
          <ResultHead eyebrow={c.result} value={formatInr(r.net)} negative={r.net < 0} />
          <SplitBar parts={[{ value: r.assets, color: INK }, { value: r.liabilities, color: GOLD }]} />
          <Rows rows={[
            { label: c.totalAssets, value: formatInr(r.assets), color: INK },
            { label: c.totalLiabilities, value: formatInr(r.liabilities), color: GOLD },
          ]} />
          <ResultNote>{c.note}</ResultNote>
        </>
      }
    />
  );
}
