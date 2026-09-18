"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X as Close } from "lucide-react"
import { gallery } from "@/lib/pdog"

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const step = useCallback((dir: number) => {
    setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length))
  }, [])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [index, close, step])

  const active = index === null ? null : gallery[index]

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="label-xs text-primary">Archive</p>
        <h2 className="mt-4 font-display text-[clamp(1.5rem,4.5vw,2.5rem)] leading-none uppercase">
          The PDOG files
        </h2>
      </div>

      <div className="mt-8 overflow-x-auto pb-4">
        <ul className="flex w-max gap-3 px-5 sm:px-8">
          {gallery.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block overflow-hidden rounded-lg border border-white/10 bg-black/40"
                aria-label={`Open image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  quality={80}
                  sizes="320px"
                  className="h-36 w-auto object-contain opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 sm:h-44"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 rounded-full border border-white/20 p-2.5 text-white/80 transition-colors hover:bg-white/10"
            aria-label="Close image viewer"
          >
            <Close className="size-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className="absolute left-3 rounded-full border border-white/20 p-2.5 text-white/80 transition-colors hover:bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className="absolute right-3 rounded-full border border-white/20 p-2.5 text-white/80 transition-colors hover:bg-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="size-5" />
          </button>

          <Image
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            quality={96}
            sizes="92vw"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-[92vw] object-contain"
          />
        </div>
      )}
    </section>
  )
}
