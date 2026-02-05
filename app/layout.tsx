import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "橋本駅居酒屋「鳥仙人」｜鹿児島地鶏と九州の味",
  description:
    "神奈川県橋本の居酒屋「鳥仙人」。鹿児島地鶏をはじめ九州の食材を活かした料理と地酒でおもてなし。看板料理・裏名物・メニュー・アクセス・予約は公式サイトで。",
  openGraph: {
    title: "橋本駅居酒屋「鳥仙人」",
    description: "鹿児島地鶏メインの居酒屋。橋本駅周辺。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
