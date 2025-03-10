import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/css')],
  },
  images: {
    domains: [],
  },
  env: {
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    ST_API: process.env.ST_API,
    HTTP_API_KEY: process.env.HTTP_API_KEY,
  },
  async redirects() {
    return [];
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
