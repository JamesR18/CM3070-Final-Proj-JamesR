import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during build to avoid issues with generated Prisma files
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip type checking during build if needed (can be enabled later)
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
