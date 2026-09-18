"use client"

import { useEffect, useState } from "react"
import { Menu, X as Close } from "lucide-react"
import { X_URL } from "@/lib/pdog"
import { cn } from "@/lib/utils"

const links = [
  { label: "Story", href: "#story" },
  { label: "Timeline", href: "#timeline" },
  { label: "CA", href: "#contract" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-white/10 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-xl tracking-[0.18em] text-foreground"
          aria-label="PDOG — back to top"
        >
          PDOG
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="label-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            X
          </a>
          <span
            aria-disabled="true"
            className="label-xs cursor-default text-muted-foreground/40"
          >
            Coming Soon
          </span>
          <a
            href="#contract"
            className="label-xs rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20"
          >
            $PDOG
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-background/95 px-5 py-6 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl tracking-wide"
              >
                Follow on X
              </a>
            </li>
            <li className="py-3 font-display text-2xl tracking-wide text-muted-foreground/40">
              Coming Soon
            </li>
            <li className="pt-4">
              <a
                href="#contract"
                onClick={() => setOpen(false)}
                className="label-xs inline-flex rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-primary"
              >
                $PDOG
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
