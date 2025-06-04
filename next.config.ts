import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		webpackMemoryOptimizations: true,
		optimizeCss: true,
		cssChunking: true,
		optimizeServerReact: true,
	},
	compress: true,
	poweredByHeader: false,
	// generateEtags:false,
	trailingSlash: false,
	/* config options here */
};

export default nextConfig;
