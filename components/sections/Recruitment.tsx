"use client";

import { useEffect, useRef } from "react";

export default function Recruitment() {
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
      id="recruitment"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-[var(--cream)] border-t border-black/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          求人募集
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Recruitment
        </p>
        <p className="text-foreground/80 leading-relaxed mb-8 max-w-xl">
          鳥仙人では一緒に働くスタッフを募集しています。飲食未経験の方も歓迎です。まずはお気軽にお問い合わせください。
        </p>
        <a
          href="mailto:recruit@example.com"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[var(--gold-from)] text-foreground font-medium hover:bg-[var(--gold-subtle)]/30 transition-colors"
        >
          採用へのお問い合わせ
        </a>
      </div>
    </section>
  );
}
