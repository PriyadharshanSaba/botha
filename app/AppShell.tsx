"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // middleware already handles protection!
  const showHeader = pathname !== "/";

  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
}
