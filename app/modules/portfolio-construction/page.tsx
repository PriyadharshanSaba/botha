import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function PortfolioConstructionPage() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  return (
    <ModuleViewer
      moduleId="portfolio-construction"
      moduleNumber={8}
      moduleName="Portfolio Construction & Wealth Strategy"
      completionMessage={
        "You\u2019ve finished Portfolio Construction & Wealth Strategy \u2014 all " +
        chapters.length +
        " chapters. From net worth thinking to behavioral finance, you now have a clear framework to build and manage your wealth."
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
