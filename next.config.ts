import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    mcpServer: true,
  },
  // github pagesにデプロイする場合は以下の設定を追加
  distDir: "docs", // 書き出し先を 'out' から 'docs' に変更
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
