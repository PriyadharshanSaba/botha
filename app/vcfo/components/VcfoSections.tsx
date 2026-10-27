import { Gold, Eyebrow } from "@/app/components/ui/parts";
import JumpLink from "@/app/components/ui/JumpLink";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { Decor } from "@/app/components/ui/parts";
import type { VcfoCopy } from "../copy";

export function VcfoHero({ c }: { c: VcfoCopy["hero"] }) {
  return (
    <section className="vc-hero">
      <div className="vc-split">
        <div className="vc-hero-in">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="vc-h1"><Gold line={c.title} /></h1>
          <p className="vc-lead">{c.body}</p>
          <div className="ui-ctas vc-ctas">
            <JumpLink targetId="request" variant="button">{c.cta}</JumpLink>
            <JumpLink targetId="included" variant="link">{c.included}</JumpLink>
          </div>
        </div>
        <div className="vc-cluster" aria-hidden="true">
          <Decor src="/landing/cfo-left.svg" className="vc-c1" />
          <Decor src="/landing/cfo-right.svg" className="vc-c2" />
        </div>
      </div>
    </section>
  );
}

export function Included({ label, services }: { label: string; services: VcfoCopy["services"] }) {
  return (
    <>
      <SectionLabel id="included">{label}</SectionLabel>
      <ul className="vc-services">
        {services.map((s, i) => (
          <li key={s.name} className="vc-svc">
            <span className="vc-svc-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <span className="vc-svc-tag">{s.tag}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function HowItWorks({ label, steps }: { label: string; steps: VcfoCopy["steps"] }) {
  return (
    <section className="vc-how">
      <SectionLabel>{label}</SectionLabel>
      <ol className="vc-steps">
        {steps.map((s, i) => (
          <li key={s.title} className="vc-step">
            <div className="vc-step-head">
              <span className="vc-step-num">{i + 1}</span>
              <span className="vc-step-line" aria-hidden="true" />
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
