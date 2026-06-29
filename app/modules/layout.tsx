import { Suspense } from "react";

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <main className="module-loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Loading&hellip;</p>
        </main>
      }
    >
      {children}
    </Suspense>
  );
}
