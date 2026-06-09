// app/components/TestimonialAvatar.tsx
"use client";

import { useState } from "react";

interface Props {
  name: string;
  initial: string;
  className?: string;
}

/**
 * DiceBear "open-peeps" sketch avatar with a same-seed deterministic portrait.
 * Falls back to the initial letter on load failure (or any rendering issue).
 */
export default function TestimonialAvatar({ name, initial, className }: Props) {
  const [failed, setFailed] = useState(false);
  const seed = encodeURIComponent(name);
  const url = `https://api.dicebear.com/9.x/open-peeps/svg?seed=${seed}&backgroundColor=c9a84c`;

  return (
    <div className={className}>
      {failed ? (
        <span className="testimonial-avatar-initial">{initial}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt=""
          onError={() => setFailed(true)}
          className="testimonial-avatar-img"
        />
      )}
    </div>
  );
}
