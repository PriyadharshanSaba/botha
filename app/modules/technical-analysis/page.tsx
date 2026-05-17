import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { chapters } from "./chapters";
import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function TechnicalAnalysisPage() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  return (
    <ModuleViewer
      moduleId="technical-analysis"
      moduleNumber={7}
      moduleName="Technical Analysis"
      completionMessage="You've finished Technical Analysis &mdash; all 19 chapters. You now have a complete framework: from trend structure, candlesticks, and support &amp; resistance, to volume, moving averages, RSI, MACD, Bollinger Bands, breakout &amp; pullback strategies, chart patterns, and the investor's mindset."
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
