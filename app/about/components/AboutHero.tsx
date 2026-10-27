import { Gold } from "@/app/components/ui/parts";
import type { AboutCopy } from "../copy";

export default function AboutHero({ c }: { c: AboutCopy["hero"] }) {
  return (
    <section className="ab-hero">
      <div className="ab-hero-in">
        <span className="ui-eyebrow">{c.eyebrow}</span>
        <h1 className="ab-h1"><Gold line={c.title} /></h1>
        <p className="ab-lead">{c.body}</p>
      </div>
    </section>
  );
}
