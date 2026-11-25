import { ArrowCta, Gold } from "@/app/components/ui/parts";
import type { AboutCopy } from "../copy";

export default function AboutCta({ c, onContact }: { c: AboutCopy["cta"]; onContact: () => void }) {
  return (
    <section className="ab-cta">
      <div className="ab-cta-in">
        <h2 className="ab-h2 ab-h2-cta"><Gold line={c.title} /></h2>
        <p className="ab-lead">{c.body}</p>
        <div className="ui-ctas">
          <button type="button" className="ui-btn" onClick={onContact}>{c.contact}</button>
          <ArrowCta to={{ href: "/tools" }}>{c.tools}</ArrowCta>
        </div>
      </div>
    </section>
  );
}
