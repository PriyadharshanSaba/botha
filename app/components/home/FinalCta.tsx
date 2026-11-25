import type { HomeCopy } from "./copy";
import { Gold, PrimaryCta } from "../ui/parts";

// "Talk to us" target. The discovery call is booked on /meet (Google Calendar slots).
export default function FinalCta({ c }: { c: HomeCopy["talk"] }) {
  return (
    <section id="talk" className="hm-wrap hm-talk-section">
      <div className="hm-talk-in">
        <h2 className="hm-h2 hm-h2-talk">
          <Gold line={c.lines[0]} />
          <br />
          <Gold line={c.lines[1]} />
        </h2>
        <div className="ui-ctas">
          <PrimaryCta to={{ href: "/meet" }}>{c.cta}</PrimaryCta>
        </div>
      </div>
    </section>
  );
}
