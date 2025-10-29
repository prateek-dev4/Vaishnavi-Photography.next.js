import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    unoptimized: process.env.NODE_ENV === 'development',
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    };

    // Optimize production builds
    if (!dev && !isServer) {
      // Enable module concatenation
      config.optimization.concatenateModules = true;
      
      // Enable tree shaking
      config.optimization.usedExports = true;
      
      // Split chunks optimization
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Enable page caching
  generateEtags: true,
  // Compress responses
  compress: true,
  // Increase performance for static pages
  poweredByHeader: false,
  // Progressive Web App optimization
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;