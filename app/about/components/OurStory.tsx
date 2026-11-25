import { Gold } from "@/app/components/ui/parts";
import type { AboutCopy } from "../copy";

export default function OurStory({ c }: { c: AboutCopy["story"] }) {
  return (
    <section className="ab-story-band">
      <div className="ab-story">
        <div className="ab-story-text">
          <span className="ui-eyebrow">{c.eyebrow}</span>
          <h2 className="ab-h2"><Gold line={c.title} /></h2>
          {c.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <figure className="ab-quote">
          <span className="ab-quote-mark" aria-hidden="true">&ldquo;</span>
          <blockquote><Gold line={c.quote} /></blockquote>
          <figcaption>{c.quoteBy}</figcaption>
        </figure>
      </div>
    </section>
  );
}
