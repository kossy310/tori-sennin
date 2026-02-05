"use client";

import { useEffect, useRef } from "react";

const PICSUM_MAP = "https://picsum.photos/600/400?random=30";

export default function Access() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.target.classList.toggle("is-visible", e.isIntersecting)
        );
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="access"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          アクセス
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Access
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              神奈川県橋本駅より徒歩○分。○○線・○○線 橋本駅 ○口からすぐ。
            </p>
            <p className="text-sm text-foreground/70">
              ※ 住所・地図は店舗情報にてご確認ください。
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[var(--cream)] border border-black/5">
            <img
              src={PICSUM_MAP}
              alt="地図"
              className="w-full h-full object-cover"
              width={600}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
