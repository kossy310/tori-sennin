"use client";

import { useState, useCallback } from "react";

const navItems = [
  { href: "#about", label: "鳥仙人とは" },
  { href: "#signature", label: "看板料理" },
  { href: "#hidden", label: "裏名物" },
  { href: "#interior", label: "内装" },
  { href: "#menu", label: "メニュー" },
  { href: "#access", label: "アクセス" },
  { href: "#store", label: "店舗情報" },
  { href: "#reservation", label: "予約" },
  { href: "#recruitment", label: "求人募集" },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      smoothScroll(e, href);
      setOpen(false);
    },
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight"
        >
          鳥仙人
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground hover:bg-black/5 rounded transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label="メニュー"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t border-black/5 bg-white animate-fade-up-soft"
          style={{ animationDuration: "0.3s" }}
        >
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2.5 text-foreground hover:bg-black/5 rounded px-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
