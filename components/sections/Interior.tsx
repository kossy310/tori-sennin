"use client";

import { useEffect, useRef } from "react";

const PICSUM_INTERIOR = "https://picsum.photos/1200/500?random=20";

export default function Interior() {
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
      id="interior"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          内装
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Interior
        </p>
        <div className="aspect-video md:aspect-[21/9] rounded-lg overflow-hidden bg-[var(--gold-subtle)]/20 border border-black/5">
          <img
            src={PICSUM_INTERIOR}
            alt="店内の様子"
            className="w-full h-full object-cover"
            width={1200}
            height={500}
            loading="lazy"
          />
        </div>
        <p className="mt-6 text-foreground/80 leading-relaxed max-w-2xl">
          落ち着いた空間で、少人数から大人数までご利用いただけます。カウンター席・テーブル席をご用意しています。
        </p>
      </div>
    </section>
  );
}
