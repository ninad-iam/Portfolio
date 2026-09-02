// Deployment-derived values. GitHub Pages serves this repo from a subpath
// (https://ninad-iam.github.io/Portfolio), so anything that builds a URL by
// hand has to account for that prefix. Both values are inlined at build time
// by the `env` block in next.config.ts, so they work on the server and in the
// client bundle.

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Origin with no basePath -- use for metadataBase (see next.config.ts). */
export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "http://localhost:3000";

/** Full public URL of the site root, basePath included. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Prefixes a path to a file in public/ with the deployment basePath.
 *
 * Next rewrites the URLs it generates itself (_next/* chunks, statically
 * imported assets), but never rewrites hardcoded strings. Files in public/ are
 * referenced by string, so they need the prefix applied explicitly.
 *
 * Prefer a static `import` for images -- webpack bakes the prefix into the URL,
 * which cannot drift. Use this for assets that cannot be imported, like PDFs.
 */
export function withBasePath(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
