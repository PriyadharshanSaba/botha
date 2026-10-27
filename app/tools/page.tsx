"use client";

import "./tools-page.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import BrandPage from "../components/ui/BrandPage";
import SectionLabel from "../components/ui/SectionLabel";
import { TOOLS_PAGE_COPY, type ToolId } from "./copy/toolsPage";
import { CALCULATOR_COPY } from "./copy/calculators";
import ToolsHero from "./components/ToolsHero";
import ToolCard from "./components/ToolCard";
import ProgramTools from "./components/ProgramTools";
import Disclaimer from "./components/Disclaimer";
import NetWorthCalculator from "./components/NetWorthCalculator";
import SipCalculator from "./components/SipCalculator";
import BudgetPlanner from "./components/BudgetPlanner";
import GoalPlanner from "./components/GoalPlanner";
import TaxEstimator from "./components/TaxEstimator";
import RebalanceCalculator from "./components/RebalanceCalculator";
import NetWorthTrackerDialog from "./components/NetWorthTrackerDialog";
import { useNetWorthTracker } from "./components/useNetWorthTracker";

const FREE_TOOLS: { id: ToolId; num: string; image: string; tilt: "l" | "r" }[] = [
  { id: "networth", num: "01", image: "/landing/tw-nwcalc.svg", tilt: "l" },
  { id: "sip", num: "02", image: "/landing/tw-sip.svg", tilt: "r" },
  { id: "budget", num: "03", image: "/landing/tw-budget.svg", tilt: "l" },
  { id: "goal", num: "04", image: "/landing/tw-goal.svg", tilt: "r" },
  { id: "tax", num: "05", image: "/landing/tw-tax.svg", tilt: "l" },
  { id: "rebalance", num: "06", image: "/landing/tw-rebalance.svg", tilt: "r" },
];

const CALCULATORS = {
  networth: NetWorthCalculator,
  sip: SipCalculator,
  budget: BudgetPlanner,
  goal: GoalPlanner,
  tax: TaxEstimator,
  rebalance: RebalanceCalculator,
};

type ModalId = ToolId | "tracker";

export default function ToolsPage() {
  const { lang } = useLanguage();
  const c = TOOLS_PAGE_COPY[lang];
  const shell = CALCULATOR_COPY[lang].shell;
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalId | null>(null);
  const tracker = useNetWorthTracker();

  /* ── auth check ── */
  useEffect(() => {
    fetch("/api/me").then((r) => r.json()).then((d) => {
      setSubscribed(d.subscribed ?? false);
    });
  }, []);

  const close = () => setActiveModal(null);

  return (
    <BrandPage className="tl-page">
      <ToolsHero c={c} />

      <SectionLabel id="free">{c.freeLabel}</SectionLabel>
      <div className="tl-grid tl-grid-free">
        {FREE_TOOLS.map((tool) => (
          <ToolCard
            key={tool.id}
            num={tool.num}
            {...c.tools[tool.id]}
            freeLabel={c.free}
            image={tool.image}
            tilt={tool.tilt}
            action={{ kind: "open", label: c.openCalculator, onOpen: () => setActiveModal(tool.id) }}
          />
        ))}
      </div>

      <ProgramTools c={c} subscribed={subscribed} onOpenTracker={() => setActiveModal("tracker")} />
      <Disclaimer c={c} />

      {FREE_TOOLS.map((tool) => {
        const Calculator = CALCULATORS[tool.id];
        return <Calculator key={tool.id} open={activeModal === tool.id} onClose={close} title={c.tools[tool.id].name} />;
      })}
      <NetWorthTrackerDialog
        open={activeModal === "tracker"}
        onClose={close}
        title={c.memberTools.tracker.name}
        eyebrow={shell.memberTool("07")}
        closeLabel={shell.closeTracker}
        tracker={tracker}
      />
    </BrandPage>
  );
}
