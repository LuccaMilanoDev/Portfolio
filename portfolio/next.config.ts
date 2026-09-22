import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep production builds independent from a running development server.
  distDir: process.env.NODE_ENV === "development" ? ".next" : ".next-production",
};

export default nextConfig;
