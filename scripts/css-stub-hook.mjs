/**
 * Node loader hook used by scripts/migrate-blogs-to-db.ts.
 *
 * Maps any `*.css` import to an empty ES module so the migration script
 * can dynamic-import folder-based blog components (which top-level
 * `import "...css"` for runtime styling) from a plain Node context that
 * doesn't understand CSS.
 */

export const resolve = async (specifier, context, nextResolve) => {
  if (specifier.endsWith(".css")) {
    return {
      url: "data:text/javascript,",
      shortCircuit: true,
      format: "module",
    };
  }
  const r = await nextResolve(specifier, context);
  if (process.env.STUB_DEBUG) console.error("[resolve]", specifier, "→", r?.url);
  return r;
};
