import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 静的ホスティング（Xサーバーなど）でサブディレクトリ配下に置いても
  // CSS/JS が正しく読み込まれるようにするための設定
  assetPrefix: ".",
  experimental: {
    mcpServer: true,
  },
};

export default nextConfig;
