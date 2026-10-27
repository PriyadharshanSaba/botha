// Site-wide feature switches. Flip a flag here to bring a hidden offering back.

// Venture Capital is hidden: /venture redirects home and every link to it is gated.
// The page and its /api/contact handling stay in place for when this is switched on.
export const VENTURE_ENABLED = false;
export const VENTURE_PATH = "/venture";

type Redirect = { source: string; destination: string; permanent: boolean };

// Temporary (307) so browsers and crawlers don't cache it once Venture returns.
export function ventureRedirects(enabled: boolean = VENTURE_ENABLED): Redirect[] {
  if (enabled) return [];
  return [{ source: `${VENTURE_PATH}/:path*`, destination: "/", permanent: false }];
}
