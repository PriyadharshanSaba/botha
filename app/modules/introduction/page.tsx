import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { getSession } from "@/app/lib/session";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function IntroductionPage() {
  const session = await getSession();
  const hasActiveSub = session?.sub?.status === "active";
  if (hasActiveSub) {
    redirect("/modules");
  }

  return (
    <ModuleViewer
      moduleId="introduction"
      moduleNumber={0}
      moduleName="Introduction"
      completionMessage={
        "You’ve finished the Introduction — five excerpts from across the curriculum. " +
        "Subscribe to unlock the full course, from Money 101 through every module on Bodha."
      }
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
