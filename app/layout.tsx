// app/layout.tsx
import "./globals.css";
import React from "react";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import AppShell from "./AppShell";

export const metadata = {
  title: "Bodha Ventures — Company registration, GST, Virtual CFO & personal finance",
  description: "From registering your company to making your first investment, Bodha Ventures takes care of the hard parts and explains every decision in plain language.",
  icons: {
    icon: "/logo-favicon.png",
  },
  openGraph: {
    title: "Bodha Ventures — Company registration, GST, Virtual CFO & personal finance",
    description: "From registering your company to making your first investment, Bodha Ventures takes care of the hard parts and explains every decision in plain language.",
    url: "https://bodhaventures.in",
    siteName: "Bodha Ventures",
    images: [
      {
        url: "https://bodhaventures.in/preview-image.png?v=2",
        width: 1200,
        height: 703,
        alt: "Bodha Ventures",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodha Ventures — Company registration, GST, Virtual CFO & personal finance",
    description: "From registering your company to making your first investment, Bodha Ventures takes care of the hard parts and explains every decision in plain language.",
    images: ["https://bodhaventures.in/preview-image.png?v=2"],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Server-side login check from cookie — avoids client-side flash while /api/me resolves.
  const initialLoggedIn = (await cookies()).has("uid");

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppShell initialLoggedIn={initialLoggedIn}>
          {children}
        </AppShell>
        <Analytics />
      </body>
    </html>
  );
}
