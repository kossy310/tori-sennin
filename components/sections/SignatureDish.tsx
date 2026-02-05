"use client";

import { useEffect, useRef } from "react";

const PICSUM_SIGNATURE = "https://picsum.photos/800/600?random=1";

export default function SignatureDish() {
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
      id="signature"
      ref={ref}
      className="reveal-on-scroll py-16 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
          看板料理
        </h2>
        <p className="text-gold-gradient text-sm font-medium mb-10">
          Signature Dishes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[var(--gold-subtle)]/30">
            <img
              src={PICSUM_SIGNATURE}
              alt="看板料理"
              className="w-full h-full object-cover"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              鹿児島地鶏の炭火焼き
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              鹿児島県産の地鶏を炭火で丁寧に焼き上げた看板メニューです。
              皮はパリッと、身はジューシーに仕上げます。
            </p>
            <p className="text-sm text-foreground/70">
              その他、地鶏の刺身・鶏つくね・地鶏の釜飯など、地鶏を活かした料理をご用意しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
