"use client";

import { useEffect, useRef } from "react";

const items = [
  { title: "地鶏のたたき", desc: "炙りたての香りと旨味", img: "https://picsum.photos/400/300?random=10" },
  { title: "九州地酒", desc: "鹿児島・宮崎など厳選地酒", img: "https://picsum.photos/400/300?random=11" },
  { title: "季節の一品", desc: "その日だけの限定メニュー", img: "https://picsum.photos/400/300?random=12" },
];

export default function HiddenGem() {
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
      id="hidden"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-[var(--cream)] border-y border-black/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          裏名物
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Hidden Gems
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg overflow-hidden border border-black/5 shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
