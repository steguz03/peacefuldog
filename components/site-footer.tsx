import { X_URL } from "@/lib/pdog"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl leading-none tracking-[0.12em] uppercase">
              Peaceful Dog
            </p>
            <p className="mt-3 text-[15px] text-muted-foreground">
              No thoughts. No stress. Just peace.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
            <a
              href="#story"
              className="label-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Story
            </a>
            <a
              href="#timeline"
              className="label-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Timeline
            </a>
            <a
              href="#contract"
              className="label-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Contract
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="label-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              X
            </a>
          </nav>
        </div>

        <p className="mt-12 max-w-2xl text-[12px] leading-relaxed text-muted-foreground/60">
          $PDOG is a meme token created for entertainment and community purposes only. It has no
          intrinsic value, offers no financial return and is not an investment. Nothing on this site
          is financial advice. Always verify the contract address before buying.
        </p>
      </div>
    </footer>
  )
}
