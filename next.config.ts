/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here 
};

export default nextConfig;
*/
// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  // Add these to help with your chunk loading issues:
  webpack: (config, { isServer }) => {
    config.output.chunkLoadTimeout = 30000;
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
};

export default config;