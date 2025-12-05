// app/layout.tsx
import "./globals.css";
import React from "react";
import HeaderWrapper from "./HeaderWrapper";

export const metadata = {
  title: "Botha",
  description: "Botha — finance education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderWrapper>
          {children}
        </HeaderWrapper>
      </body>
    </html>
  );
}
