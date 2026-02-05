"use client";

import { useEffect, useRef } from "react";

export default function StoreInfo() {
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

  const rows = [
    { label: "店名", value: "鳥仙人" },
    { label: "住所", value: "神奈川県相模原市緑区橋本 ○○ ○-○-○" },
    { label: "電話", value: "000-0000-0000" },
    { label: "営業時間", value: "17:00 ～ 24:00（L.O. 23:30）" },
    { label: "定休日", value: "日曜日" },
  ];

  return (
    <section
      id="store"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-[var(--cream)] border-y border-black/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          店舗情報
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Store Info
        </p>
        <dl className="max-w-xl space-y-4">
          {rows.map(({ label, value }) => (
            <div key={label} className="flex gap-4">
              <dt className="w-24 flex-shrink-0 text-foreground/70 text-sm">
                {label}
              </dt>
              <dd className="text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
