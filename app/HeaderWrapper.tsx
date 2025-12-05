"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // hide header ONLY on the login page
  const hideHeader = pathname === "/";

  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  );
}
