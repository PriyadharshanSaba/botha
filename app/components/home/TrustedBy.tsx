import { TRUSTED_BY } from "./copy";

export default function TrustedBy({ label }: { label: string }) {
  return (
    <section className="hm-wrap hm-trusted">
      <div className="hm-trusted-in">
        <h2 className="ui-eyebrow hm-trusted-label">{label}</h2>
        <ul className="hm-trusted-list">
          {TRUSTED_BY.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </section>
  );
}
