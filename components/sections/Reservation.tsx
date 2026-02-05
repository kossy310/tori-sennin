"use client";

import { useEffect, useRef } from "react";

export default function Reservation() {
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
      id="reservation"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          予約
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Reservation
        </p>
        <p className="text-foreground/80 leading-relaxed mb-8 max-w-xl">
          ご予約はお電話または予約サイトにて承っております。少人数から宴会までお気軽にご相談ください。
        </p>
        <a
          href="tel:000-0000-0000"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold-gradient text-white font-medium hover:opacity-90 transition-opacity"
        >
          電話で予約
        </a>
      </div>
    </section>
  );
}
