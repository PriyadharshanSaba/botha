import ModuleViewer from "@/app/modules/ModuleViewer";
import { getSession, isChapterAllowed } from "@/app/lib/session";
import { chapters } from "./chapters";
import AudioPlayer from "./AudioPlayer";
import LockedChapter from "./LockedChapter";

import "../modules.css";
import "../module-detail.css";
import "./audio-player.css";

const MODULE_ID = "money-101";

export const dynamic = "force-dynamic";

export default async function Money101Page() {
  const session = await getSession();
  const isSignedIn = !!session;
  const hasActiveSub = session?.sub?.status === "active";

  const lockedCta = isSignedIn
    ? { href: "/plans", label: "View Plans" }
    : { href: "/signup", label: "Sign up free" };

  const lockedSub = isSignedIn
    ? "Subscribe to unlock all 8 chapters of Money 101, plus every other module on Bodha."
    : "Sign up free to keep reading. Subscribe later to unlock the full course.";

  return (
    <ModuleViewer
      moduleId={MODULE_ID}
      moduleNumber={1}
      moduleName="Money 101"
      completionMessage={
        hasActiveSub
          ? "You&apos;ve finished Money 101 &mdash; all 8 chapters. You now understand where money comes from, how to manage it, and how to start making it grow."
          : isSignedIn
          ? "You&apos;ve finished the free preview. Subscribe to unlock the remaining 6 chapters and the rest of the courses on Bodha."
          : "You&apos;ve finished the free preview. Sign up free to keep going &mdash; then subscribe to unlock the rest."
      }
    >
      {chapters.map((ch, i) => {
        if (!isChapterAllowed(MODULE_ID, i, hasActiveSub)) {
          return (
            <LockedChapter
              key={i}
              titleEn={ch.title.en}
              titleKn={ch.title.kn}
              ctaHref={lockedCta.href}
              ctaLabel={lockedCta.label}
              sub={lockedSub}
            />
          );
        }

        const audioSrc =
          i < 2
            ? `/money-101/audio/ch${i + 1}.mp3`
            : `/api/audio/money-101/${i + 1}`;

        return (
          <div key={i}>
            <AudioPlayer src={audioSrc} requireSignIn={!isSignedIn} />
            <div data-lang="en">
              <h2>{ch.title.en}</h2>
              {ch.content.en}
            </div>
            <div data-lang="kn">
              <h2>{ch.title.kn}</h2>
              {ch.content.kn}
            </div>
          </div>
        );
      })}
    </ModuleViewer>
  );
}
