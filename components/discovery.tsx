"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AlertCircle, ArrowDown } from "lucide-react"
import { Reveal, useInView } from "@/components/reveal"

const TARGET = 1306742.32

function useCountUp(active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(TARGET)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(TARGET * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, duration])

  return value
}

const flow = [
  { value: "$500", note: "Invested" },
  { value: "2014", note: "The buy" },
  { value: "2,173,193 DOGE", note: "Forgotten" },
  { value: "2021", note: "Doge boom" },
  { value: "$1,306,742.32", note: "The balance", highlight: true },
]

export function Discovery() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const value = useCountUp(inView)

  return (
    <section
      id="discovery"
      className="scroll-mt-16 border-y border-white/10 py-20 sm:py-28"
      style={{
        background:
          "radial-gradient(75% 60% at 50% 0%, oklch(0.32 0.07 238 / 45%) 0%, transparent 70%), oklch(0.115 0.008 60)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="label-xs text-primary">09 — 10 · The Discovery</p>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            After all the Dogecoin hype, PDOG decides to buy some. He tries to create a wallet with
            his old email — <span className="text-foreground">dogdreamer90@gmail.com</span>
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 rounded-lg border border-destructive/50 bg-destructive/10 px-5 py-4 text-left">
            <AlertCircle className="size-5 shrink-0 text-destructive" aria-hidden="true" />
            <div>
              <p className="font-display text-lg leading-none uppercase sm:text-xl">
                Account already exists!
              </p>
              <p className="mt-1.5 text-[13px] text-muted-foreground">
                An account with this email address is already registered.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-10 text-center">
          <p className="font-display text-3xl text-muted-foreground sm:text-4xl">{'"?!"'}</p>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            He enters the password he has used for years. He logs in. The wallet opens.
          </p>
        </Reveal>

        {/* Wallet reveal */}
        <div ref={ref} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-white/12 bg-black/50 p-6 sm:p-9">
            <p className="label-xs text-muted-foreground">Total Balance</p>
            <p className="mt-3 font-display text-[clamp(2rem,8vw,4.25rem)] leading-none tabular-nums">
              $
              {value.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                { k: "Date", v: "July 25, 2014" },
                { k: "Amount", v: "2,173,193 DOGE" },
                { k: "Total paid", v: "$500.00" },
              ].map((row, i) => (
                <div
                  key={row.k}
                  className="bg-background/90 px-4 py-4 transition-opacity duration-700 motion-reduce:transition-none"
                  style={{
                    opacity: inView ? 1 : 0,
                    transitionDelay: `${900 + i * 220}ms`,
                  }}
                >
                  <p className="label-xs text-muted-foreground">{row.k}</p>
                  <p className="mt-2 font-display text-lg leading-none sm:text-xl">{row.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-12">
          <div className="img-scale mx-auto max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <Image
              src="/pdog/themoment.png"
              alt="Six screens showing PDOG creating a wallet, logging in and discovering his forgotten Dogecoin balance"
              width={1536}
              height={1024}
              quality={94}
              sizes="(max-width: 768px) 92vw, 900px"
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>

        {/* $500 → $1.3M flow */}
        <div className="mx-auto mt-16 max-w-sm">
          {flow.map((step, i) => (
            <Reveal key={step.value} delay={i * 90} threshold={0.6}>
              <div className="text-center">
                <p
                  className={
                    step.highlight
                      ? "font-display text-[clamp(1.6rem,6vw,2.75rem)] leading-none text-primary"
                      : "font-display text-[clamp(1.25rem,4.5vw,2rem)] leading-none"
                  }
                >
                  {step.value}
                </p>
                <p className="label-xs mt-2 text-muted-foreground">{step.note}</p>
              </div>
              {i < flow.length - 1 && (
                <ArrowDown
                  aria-hidden="true"
                  className="mx-auto my-4 size-4 text-muted-foreground/50"
                />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="font-display text-[clamp(2.25rem,9vw,5rem)] leading-none uppercase">
            He forgot.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
