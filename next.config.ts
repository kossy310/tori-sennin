import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    mcpServer: true,
  },
};

export default nextConfig;
