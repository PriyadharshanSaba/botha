import type { HomeCopy } from "./copy";
import { Decor, Eyebrow, Gold, PrimaryCta } from "../ui/parts";

export default function InsightsBanner({ c }: { c: HomeCopy["insights"] }) {
  return (
    <section className="hm-banner hm-cream">
      <div className="hm-banner-in">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h3 className="hm-h2"><Gold line={c.title} /></h3>
        <p className="hm-body hm-narrow">{c.body}</p>
        <div className="ui-ctas">
          <PrimaryCta to={{ href: "/blogs" }}>{c.cta}</PrimaryCta>
        </div>
      </div>
      <div className="hm-fan" aria-hidden="true">
        <Decor src="/landing/insights-fan.svg" />
      </div>
    </section>
  );
}
