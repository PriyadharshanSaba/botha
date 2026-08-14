import ModuleViewer from "@/app/modules/ModuleViewer";
import { requireSubscription } from "@/app/lib/session";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function Budgeting101Page() {
  await requireSubscription();

  return (
    <ModuleViewer
      moduleId="budgeting-101"
      moduleNumber={2}
      moduleName="Budgeting 101"
      completionMessage="You&apos;ve finished Budgeting 101 &mdash; all 7 chapters. You now know how to track your money, build an emergency fund, and take control of your finances."
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
