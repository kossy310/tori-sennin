export default function Footer() {
  return (
    <footer className="bg-[var(--cream)] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="font-serif text-2xl font-semibold text-foreground mb-4">
              鳥仙人
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              神奈川県橋本駅周辺で、鹿児島地鶏と九州の味をお届けする居酒屋です。
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#store"
              className="text-sm text-foreground/90 hover:text-foreground transition-colors"
            >
              店舗情報
            </a>
            <a
              href="#reservation"
              className="text-sm text-foreground/90 hover:text-foreground transition-colors"
            >
              予約
            </a>
            <a
              href="#recruitment"
              className="text-sm text-foreground/90 hover:text-foreground transition-colors"
            >
              求人募集
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/90 hover:text-foreground transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="mt-10 pt-6 border-t border-black/5 text-xs text-foreground/60">
          © 鳥仙人. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
