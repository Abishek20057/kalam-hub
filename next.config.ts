import type { NextConfig } from "next";

/**
 * KalamHub — Next.js Configuration
 *
 * Image domains are intentionally empty for now (Phase 1 uses local/placeholder
 * images only). Add Supabase Storage / CDN domains here in Phase 5 when dynamic
 * content (project thumbnails, team photos, activity images) goes live.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // Phase 5: add Supabase Storage / CDN pattern here, e.g.
      // { protocol: "https", hostname: "*.supabase.co" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  typescript: {
    // Never silently ignore type errors in CI/build.
    ignoreBuildErrors: false,
  },

  
};

export default nextConfig;
