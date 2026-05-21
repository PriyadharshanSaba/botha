import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { chapters } from "./chapters";

import "../modules.css";
import "../module-detail.css";

export const dynamic = "force-dynamic";

export default async function ChoosingTheRightFundPage() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  return (
    <ModuleViewer
      moduleId="choosing-the-right-fund"
      moduleNumber={5}
      moduleName="Choosing the Right Fund"
      completionMessage="You&apos;ve finished Choosing the Right Fund &mdash; all 17 chapters. You now have a complete framework: from setting your goal to evaluating CAGR, alpha, beta, Sortino, capture ratios, expense ratios, and more."
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
