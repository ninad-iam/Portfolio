import type { NextConfig } from "next";

// GitHub Pages serves this repo from https://ninad-iam.github.io/Portfolio,
// so CI builds need the /Portfolio prefix that local dev must not have.
const isGithubPages = Boolean(process.env.GITHUB_ACTIONS);
const basePath = isGithubPages ? "/Portfolio" : "";
// Origin only. Next resolves metadata image URLs by joining metadataBase's
// pathname with the image path, so including basePath here would double it.
const siteOrigin = isGithubPages
  ? "https://ninad-iam.github.io"
  : "http://localhost:3000";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // No trailing slash: webpack joins this with "/_next/" for asset modules,
  // and "/Portfolio/" would produce "/Portfolio//_next/...".
  assetPrefix: basePath,
  // Inlined into the server and client bundles so app code can prefix public/
  // assets and build absolute metadata URLs without re-deriving the deploy target.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin,
    NEXT_PUBLIC_SITE_URL: `${siteOrigin}${basePath}`,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
