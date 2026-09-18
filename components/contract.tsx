"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Copy } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BUY_URL, CONTRACT_ADDRESS, CONTRACT_PLACEHOLDER, X_URL, comingSoon } from "@/lib/pdog"

export function Contract() {
  const [copied, setCopied] = useState(false)
  const hasAddress = CONTRACT_ADDRESS.length > 0
  const shown = hasAddress ? CONTRACT_ADDRESS : CONTRACT_PLACEHOLDER

  const copy = async () => {
    if (!hasAddress) return
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contract" className="scroll-mt-16 border-t border-white/10 bg-black/30 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_0.85fr] md:gap-16">
        <div>
          <Reveal>
            <p className="label-xs text-primary">$PDOG</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,6vw,4rem)] leading-[0.94] uppercase text-balance">
              Peace is the
              <br />
              real flex
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              $PDOG is a community token built around one simple idea: stop panicking, stop
              chasing, stay peaceful. No promises, no roadmap theatre — just the most peaceful dog
              ever.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9">
              <p className="label-xs text-muted-foreground">Contract address</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                <code className="min-w-0 flex-1 truncate rounded-lg border border-white/12 bg-background/80 px-4 py-3.5 font-mono text-[13px] text-foreground/90">
                  {shown}
                </code>
                <button
                  type="button"
                  onClick={copy}
                  disabled={!hasAddress}
                  className="label-xs inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3.5 transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              {!hasAddress && (
                <p className="mt-3 text-[13px] text-muted-foreground">
                  Contract not live yet. It will be published here and on X first — never trust any
                  other source.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-3">
              {BUY_URL ? (
                <a
                  href={BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-xs inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Buy $PDOG
                </a>
              ) : (
                <span className="label-xs inline-flex cursor-default items-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-muted-foreground">
                  Buy $PDOG — Coming Soon
                </span>
              )}
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="label-xs inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Join on X
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-12">
              <p className="label-xs text-muted-foreground">Coming soon</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {comingSoon.map((item) => (
                  <li
                    key={item}
                    className="label-xs rounded-full border border-white/10 px-4 py-2 text-muted-foreground/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="img-scale overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <Image
              src="/pdog/logo-pdog.png"
              alt="PDOG floating in a pool with a crown, sunglasses and a stack of cash"
              width={1254}
              height={1254}
              quality={92}
              sizes="(max-width: 768px) 92vw, 42vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
