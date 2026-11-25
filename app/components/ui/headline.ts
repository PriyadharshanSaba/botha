// A headline with one gold-highlighted phrase: `pre` + <gold> + `post`.
export type Headline = { pre: string; gold: string; post: string };

export const headline = (pre: string, gold: string, post = ""): Headline => ({ pre, gold, post });
