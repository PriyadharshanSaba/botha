import type { HomeCopy } from "./copy";
import { Decor, Eyebrow, Gold, PrimaryCta } from "../ui/parts";

export default function ToolsBanner({ c }: { c: HomeCopy["tools"] }) {
  return (
    <section id="tools" className="hm-banner hm-white">
      <Decor src="/landing/tw-sip.svg" className="hm-float hm-f1" />
      <Decor src="/landing/tw-budget.svg" className="hm-float hm-f2" />
      <Decor src="/landing/tw-networth.svg" className="hm-float hm-f3" />
      <Decor src="/landing/tw-tax.svg" className="hm-float hm-f4" />
      <div className="hm-banner-in hm-narrow">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h3 className="hm-h2"><Gold line={c.title} /></h3>
        <p className="hm-body">{c.body}</p>
        <div className="ui-ctas">
          <PrimaryCta to={{ href: "/tools" }}>{c.cta}</PrimaryCta>
        </div>
        <div className="hm-float-m" aria-hidden="true">
          <Decor src="/landing/tw-sip.svg" />
          <Decor src="/landing/tw-networth.svg" />
        </div>
      </div>
    </section>
  );
}
