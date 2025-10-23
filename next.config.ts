import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // PPR merged into cacheComponents in newer canary
    // @ts-expect-error: experimental flag may not be in current type defs
    cacheComponents: true,
  },
};

export default nextConfig;
