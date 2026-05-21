import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { chapters } from "./chapters";
import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function FundamentalAnalysisPage() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  return (
    <ModuleViewer
      moduleId="fundamental-analysis"
      moduleNumber={6}
      moduleName="Fundamental Analysis"
      completionMessage="You've finished Fundamental Analysis &mdash; all 25 chapters. You now have a complete framework: from reading financial statements and understanding ratios, to evaluating moats, management quality, intrinsic value, and combining fundamentals with technicals."
    >
      {chapters.map((ch, i) => (
        <div key={i}>
          <h2>{ch.title}</h2>
          {ch.content}
        </div>
      ))}
    </ModuleViewer>
  );
}
