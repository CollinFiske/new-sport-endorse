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
  
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Disable static imports for better production handling
    unoptimized: false,
  },
  
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