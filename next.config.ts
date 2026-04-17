import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'victorymed.com' },
      { protocol: 'https', hostname: 'www.priviahealth.com' },
    ],
  },
};

export default nextConfig;
