import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/css')],
    prependData: `@use "variables" as *; @use "mixins" as *; @use "colors" as *;`,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  env: {
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    ST_API: process.env.ST_API,
    HTTP_API_KEY: process.env.HTTP_API_KEY,
  },
};

export default nextConfig;
