import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip cleaning old dist to avoid FUSE filesystem EPERM on .fuse_hidden files
  cleanDistDir: false,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
};

export default nextConfig;
