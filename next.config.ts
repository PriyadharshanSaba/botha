import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["isomorphic-dompurify", "jsdom"],
  // Ensure gated audio in `private/` ships with the API route bundle.
  // Files outside `public/` are not traced by default.
  outputFileTracingIncludes: {
    "/api/audio/money-101/[ch]": ["./private/money-101/audio/**"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://checkout.razorpay.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://api.dicebear.com",
              "connect-src 'self' https://api.razorpay.com https://lumberjack-cx.razorpay.com",
              "frame-src https://api.razorpay.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
