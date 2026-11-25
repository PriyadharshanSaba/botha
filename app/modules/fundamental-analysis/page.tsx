import ModuleViewer from "@/app/modules/ModuleViewer";
import { requireSubscription } from "@/app/lib/session";
import { chapters } from "./chapters";
import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function FundamentalAnalysisPage() {
  await requireSubscription();

  return (
    <ModuleViewer
      moduleId="fundamental-analysis"
      moduleNumber={6}
      moduleName="Fundamental Analysis"
      completionMessage="You've finished Fundamental Analysis &mdash; all 25 chapters. You now have a complete framework: from reading financial statements and understanding ratios, to evaluating moats, management quality, intrinsic value, and combining fundamentals with technicals."
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
