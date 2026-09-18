import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { ChapterBlock } from "@/components/story"
import { finalChapter } from "@/lib/pdog"

export function Philosophy() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <ChapterBlock chapter={finalChapter} />
      </section>

      <section id="philosophy" className="scroll-mt-16 pb-20 sm:pb-28">
        <Reveal>
          <div className="img-scale relative w-full overflow-hidden border-y border-white/10 bg-black">
            <Image
              src="/pdog/wallpaper-real-pdog.png"
              alt="The real PDOG sitting calmly in clear water beside a garden"
              width={2172}
              height={724}
              quality={95}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>

        <div className="mx-auto max-w-4xl px-5 pt-16 text-center sm:px-8 sm:pt-20">
          <Reveal>
            <p className="label-xs text-primary">PDOG&apos;s Philosophy</p>
            <p className="mt-7 font-display text-[clamp(1.75rem,5.5vw,3.5rem)] leading-[1.02] uppercase text-balance">
              Everyone is trying to get rich.
              <br />
              <span className="text-primary">PDOG is trying to get some peace.</span>
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-10 font-display text-[clamp(1.25rem,3.5vw,2rem)] leading-tight text-muted-foreground uppercase">
              No thoughts.
              <br />
              No stress.
              <br />
              Just peace.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-14 border-t border-white/10 pt-14">
              <p className="font-display text-[clamp(1.5rem,4.5vw,2.75rem)] leading-tight uppercase">
                How did PDOG get rich?
              </p>
              <p className="mt-4 font-display text-[clamp(2.25rem,9vw,5rem)] leading-none text-primary uppercase">
                He forgot.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
