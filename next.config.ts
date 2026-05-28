import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [66, 68, 72, 75]
  }
};

export default nextConfig;
