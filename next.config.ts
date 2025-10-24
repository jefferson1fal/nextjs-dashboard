import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // PPR merged into cacheComponents in newer canary
  cacheComponents: true,
};

export default nextConfig;
