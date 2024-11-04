import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  experimental: {
    ppr: true,
    dynamicIO: true
  }
};

export default nextConfig;
