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
    title: "The Personal Finance Program — Bodha",
    description: "This course is not for people who want to gamble with their money. If you're looking for hot tips, overnight returns or the next \"100x stock\" — this isn't your place. Our program is built for people who want to build real, lasting wealth — patiently, intelligently and on solid foundations.",
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
    title: "The Personal Finance Program — Bodha",
    description: "This course is not for people who want to gamble with their money. Our program is built for people who want to build real, lasting wealth — patiently, intelligently and on solid foundations.",
    images: ["https://bodhaventures.in/preview-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
