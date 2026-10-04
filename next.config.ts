import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this project so lockfiles above the repo
  // (e.g. in a parent downloads folder) are not picked up.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
