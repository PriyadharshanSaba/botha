// app/layout.tsx
import "./globals.css";
import React from "react";
import AppShell from "./AppShell";

export const metadata = {
  title: "Bodha — The Personal Finance Program",
  description: "This course is not for people who want to gamble with their money. Our program is built for people who want to build real, lasting wealth — patiently, intelligently and on solid foundations.",
  icons: {
    icon: "/logo-favicon.png",
  },
  openGraph: {
    title: "Bodha — The Personal Finance Program by Bodha Ventures",
    description: "Not for people chasing hot tips or 100x stocks. Built for those who want real, lasting wealth — patiently and intelligently.",
    url: "https://bodhaventures.in",
    siteName: "Bodha",
    images: [
      {
        url: "https://bodhaventures.in/preview-image.png",
        width: 1200,
        height: 630,
        alt: "Bodha — The Personal Finance Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodha — The Personal Finance Program by Bodha Ventures",
    description: "Not for people chasing hot tips or 100x stocks. Built for those who want real, lasting wealth — patiently and intelligently.",
    images: ["https://bodhaventures.in/preview-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
