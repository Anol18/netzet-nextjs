import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
    optimizeCss: true,
    cssChunking: true,
    optimizeServerReact: true,
  },
  images: {
    minimumCacheTTL: 31536000,
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  // generateEtags:false,
  trailingSlash: false,
  /* config options here */
};

export default nextConfig;
