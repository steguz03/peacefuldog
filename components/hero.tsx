"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { X_URL } from "@/lib/pdog"

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = imageRef.current
    if (!el) return

    let frame = 0
    const update = () => {
      frame = 0
      const y = Math.min(window.scrollY, 900)
      el.style.transform = `translate3d(0, ${y * -0.06}px, 0) scale(${1 + y * 0.00008})`
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 55% at 75% 25%, oklch(0.42 0.06 55 / 55%) 0%, transparent 70%), radial-gradient(50% 45% at 10% 80%, oklch(0.38 0.07 238 / 35%) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-14">
        <div className="reveal" data-visible="true">
          <p className="label-xs text-primary">The Most Peaceful Dog Ever</p>

          <h1 className="mt-5 font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.86] tracking-tight text-balance uppercase">
            Peaceful
            <br />
            Dog
          </h1>

          <p className="mt-5 font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-none text-primary">
            $PDOG
          </p>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            He bought Dogecoin in 2014.
            <br />
            He forgot about it.
            <br />
            <span className="text-foreground">Then Dogecoin found him again.</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#story"
              className="label-xs inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              Read the Story
              <ArrowDown className="size-3.5" />
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="label-xs inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-foreground transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
            >
              Follow on X
            </a>
          </div>
        </div>

        <div ref={imageRef} className="will-change-transform">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
            <Image
              src="/pdog/pdog-hero.png"
              alt="PDOG wearing a crown and sunglasses, relaxing above the sea at sunset"
              width={1254}
              height={1254}
              quality={95}
              priority
              sizes="(max-width: 768px) 92vw, 46vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
