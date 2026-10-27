import Image from "next/image";
import SectionLabel from "@/app/components/ui/SectionLabel";
import type { AboutCopy } from "../copy";

const PHOTOS = ["/AHD.jpeg", "/PD.jpeg"];

export default function Team({ c }: { c: AboutCopy["team"] }) {
  return (
    <div className="ab-team-band">
      <SectionLabel id="team" className="ab-chapter">{c.label}</SectionLabel>
      <div className="ab-people">
        {c.people.map((person, i) => (
          <article key={person.name} className="ab-person">
            <Image src={PHOTOS[i]} alt={person.photoAlt} width={400} height={400} sizes="(max-width: 760px) 100vw, 200px" />
            <div className="ab-person-text">
              <span className="ui-eyebrow">{person.role}</span>
              <h3>{person.name}</h3>
              {person.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
