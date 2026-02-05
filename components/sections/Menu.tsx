"use client";

import { useEffect, useRef } from "react";

const PICSUM_MENU = "https://picsum.photos/900/400?random=40";
const sampleItems = [
  { category: "地鶏", items: ["炭火焼き", "刺身", "たたき", "つくね", "釜飯"] },
  { category: "九州の味", items: ["地酒", "焼酎", "揚げ物", "サラダ", "煮物"] },
  { category: "ドリンク", items: ["ビール", "ハイボール", "ワイン", "ソフトドリンク"] },
];

export default function Menu() {
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
      id="menu"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-[var(--cream)] border-y border-black/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          メニュー
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Menu
        </p>
        <div className="aspect-[21/9] rounded-lg overflow-hidden mb-10 bg-[var(--gold-subtle)]/20 border border-black/5">
          <img
            src={PICSUM_MENU}
            alt="メニュー"
            className="w-full h-full object-cover"
            width={900}
            height={400}
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {sampleItems.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4 pb-2 border-b border-[var(--gold-subtle)]">
                {cat.category}
              </h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-foreground/60">
          ※ メニュー・価格は変更になる場合がございます。詳細は店頭でご確認ください。
        </p>
      </div>
    </section>
  );
}
