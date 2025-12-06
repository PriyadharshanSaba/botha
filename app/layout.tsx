// app/layout.tsx
import "./globals.css";
import React from "react";
import AppShell from "./AppShell";

export const metadata = {
  title: "Botha",
  description: "Botha — finance education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
