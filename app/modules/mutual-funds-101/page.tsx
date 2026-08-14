import ModuleViewer from "@/app/modules/ModuleViewer";
import { requireSubscription } from "@/app/lib/session";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function MutualFunds101Page() {
  await requireSubscription();

  return (
    <ModuleViewer
      moduleId="mutual-funds-101"
      moduleNumber={4}
      moduleName="Introduction to Mutual Funds"
      completionMessage="You've finished Introduction to Mutual Funds — all 5 chapters. You now understand what mutual funds are, why they matter, the different types, how SIPs work, and how to take your first step."
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
