import ModuleViewer from "@/app/modules/ModuleViewer";
import { requireSubscription } from "@/app/lib/session";
import { chapters } from "./chapters";
import { chaptersKn } from "./chapters-kn";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function ChoosingTheRightFundPage() {
  await requireSubscription();

  return (
    <ModuleViewer
      moduleId="choosing-the-right-fund"
      moduleNumber={5}
      moduleName="Choosing the Right Fund"
      completionMessage="You&apos;ve finished Choosing the Right Fund &mdash; all 17 chapters. You now have a complete framework: from setting your goal to evaluating CAGR, alpha, beta, Sortino, capture ratios, expense ratios, and more."
    >
      {chapters.map((ch, i) => (
        <div key={i}>
          <div data-lang="en">
            <h2>{ch.title}</h2>
            {ch.content}
          </div>
          <div data-lang="kn">
            <h2>{chaptersKn[i].title}</h2>
            {chaptersKn[i].content}
          </div>
        </div>
      ))}
    </ModuleViewer>
  );
}
