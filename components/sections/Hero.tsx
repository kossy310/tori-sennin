"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.target.classList.toggle("is-visible", e.isIntersecting),
        );
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="reveal-on-scroll relative min-h-[100vh] min-h-[100dvh] flex flex-col justify-center border-b border-black/5 overflow-hidden"
    >
      {/* 全画面レスポンシブ背景 */}
      <div
        className="absolute inset-0 bg-[var(--cream)] bg-cover bg-center bg-no-repeat"
        style={{
          // 静的ホスティングでサブディレクトリ配下に配置しても動作するように相対パスにする
          backgroundImage: "url('./hero/mv_jidori.webp')",
        }}
        aria-hidden
      />
      {/* テキスト可読用オーバーレイ */}
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm text-white/90 mb-4 tracking-wider animate-fade-up-soft opacity-0 drop-shadow-md">
          橋本駅居酒屋
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 animate-fade-up-soft opacity-0 animate-fade-up-soft-delay-1 drop-shadow-md">
          鳥仙人
        </h1>
        <p className="text-[var(--gold-subtle)] font-medium text-lg md:text-xl mb-8 animate-fade-up-soft opacity-0 animate-fade-up-soft-delay-2 drop-shadow-md">
          鹿児島地鶏と九州の味
        </p>
        <p className="max-w-xl text-white/95 leading-relaxed animate-fade-up-soft opacity-0 animate-fade-up-soft-delay-3 drop-shadow-sm">
          鹿児島産の地鶏をメインに、九州の食材を活かした料理と地酒でおもてなしする居酒屋です。
          橋本駅から徒歩圏内、仕事帰りの一杯や少人数の宴会にどうぞ。
        </p>
      </div>
    </section>
  );
}
