import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function GettingStartedPage() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  return (
    <ModuleViewer
      moduleId="getting-started"
      moduleNumber={10}
      moduleName="Getting Started"
      completionMessage={
        "You\u2019ve finished Getting Started \u2014 all " +
        chapters.length +
        " chapters. You now have a clear roadmap: from opening your first accounts and building a monthly investing plan, to reviewing your portfolio and avoiding common mistakes."
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
