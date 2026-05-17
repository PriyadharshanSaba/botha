import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function TaxationForInvestorsPage() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  return (
    <ModuleViewer
      moduleId="taxation-for-investors"
      moduleNumber={9}
      moduleName="Taxation for Investors"
      completionMessage={
        "You\u2019ve finished Taxation for Investors \u2014 all " +
        chapters.length +
        " chapters. You now understand how capital gains, mutual fund income, dividends, interest and tax loss harvesting work under the Indian tax system \u2014 and how to apply that knowledge to keep more of what you earn."
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
