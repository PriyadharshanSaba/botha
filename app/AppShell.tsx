"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import { LanguageProvider } from "./context/LanguageContext";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // middleware already handles protection!
  const showHeader = pathname !== "/" && pathname !== "/signin" && pathname !== "/about" && pathname !== "/vcfo" && pathname !== "/venture" && pathname !== "/tools";

  return (
    <LanguageProvider>
      {showHeader && <Header />}
      {children}
    </LanguageProvider>
  );
}
