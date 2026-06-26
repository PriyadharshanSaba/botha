import ModuleViewer from "@/app/modules/ModuleViewer";
import { requireSubscription } from "@/app/lib/session";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function StockMarketPage() {
  await requireSubscription();

  return (
    <ModuleViewer
      moduleId="stock-market"
      moduleNumber={3}
      moduleName="Stock Market 101"
      completionMessage="You've finished Stock Market 101 — all 8 chapters. You now understand how the market works, who the players are, and the language every investor speaks."
    >
      {chapters.map((ch, i) => (
        <div key={i}>
          <div data-lang="en">
            <h2>{ch.title.en}</h2>
            {ch.content.en}
          </div>
          <div data-lang="kn">
            <h2>{ch.title.kn}</h2>
            {ch.content.kn}
          </div>
        </div>
      ))}
    </ModuleViewer>
  );
}
