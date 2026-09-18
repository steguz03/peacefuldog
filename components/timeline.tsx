"use client"

import { useInView } from "@/components/reveal"
import { timeline } from "@/lib/pdog"
import { cn } from "@/lib/utils"

export function Timeline() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)

  return (
    <section id="timeline" className="scroll-mt-16 border-y border-white/10 bg-black/25 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="label-xs text-primary">Timeline</p>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,5vw,3rem)] leading-none uppercase">
          Eleven years, one forgotten wallet
        </h2>

        <div ref={ref} className="relative mt-12 pl-8">
          <div
            aria-hidden="true"
            className="absolute top-1 bottom-1 left-[5px] w-px origin-top bg-gradient-to-b from-primary/70 via-white/25 to-transparent transition-transform duration-[1600ms] ease-out motion-reduce:transition-none"
            style={{ transform: inView ? "scaleY(1)" : "scaleY(0)" }}
          />

          <ol className="space-y-7">
            {timeline.map((item, i) => {
              const last = i === timeline.length - 1
              return (
                <li
                  key={`${item.year}-${item.label}`}
                  className="relative transition-all duration-700 ease-out motion-reduce:transition-none"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateX(14px)",
                    transitionDelay: `${200 + i * 110}ms`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-2 -left-8 size-[11px] rounded-full border",
                      last
                        ? "border-primary bg-primary shadow-[0_0_18px_2px_oklch(0.72_0.13_238/45%)]"
                        : "border-white/40 bg-background",
                    )}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    {item.year && (
                      <span
                        className={cn(
                          "font-display text-xl leading-none sm:text-2xl",
                          last ? "text-primary" : "text-foreground",
                        )}
                      >
                        {item.year}
                      </span>
                    )}
                    <span className="label-xs text-muted-foreground">{item.label}</span>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
