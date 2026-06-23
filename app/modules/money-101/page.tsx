import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ModuleViewer from "@/app/modules/ModuleViewer";
import { chapters } from "./chapters";
import AudioPlayer from "./AudioPlayer";

import "../modules.css";
import "../module-detail.css";
import "./audio-player.css";

export const dynamic = "force-dynamic";

export default async function Money101Page() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("uid")?.value;
  if (!uid) redirect("/signin");

  return (
    <ModuleViewer
      moduleId="money-101"
      moduleNumber={1}
      moduleName="Money 101"
      completionMessage="You&apos;ve finished Money 101 &mdash; all 8 chapters. You now understand where money comes from, how to manage it, and how to start making it grow."
    >
      {chapters.map((ch, i) => (
        <div key={i}>
          <AudioPlayer src={`/money-101/audio/ch${i + 1}.mp3`} />
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
