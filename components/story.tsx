import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { chapters, type Chapter } from "@/lib/pdog"
import { cn } from "@/lib/utils"

export function ChapterBlock({ chapter, flip }: { chapter: Chapter; flip?: boolean }) {
  return (
    <article className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-14">
      <Reveal className={cn(flip && "md:order-2")}>
        <div className="img-scale overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <Image
            src={chapter.image.src}
            alt={chapter.image.alt}
            width={chapter.image.width}
            height={chapter.image.height}
            quality={92}
            sizes="(max-width: 768px) 92vw, 48vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </Reveal>

      <Reveal delay={120} className={cn(flip && "md:order-1")}>
        <p className="font-display text-5xl leading-none text-white/12 sm:text-6xl">
          {chapter.number}
        </p>
        <h3 className="mt-3 font-display text-[clamp(1.75rem,4.4vw,3rem)] leading-[0.95] uppercase text-balance">
          {chapter.title}
        </h3>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          {chapter.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {chapter.quote && (
          <p className="mt-6 border-l-2 border-primary/60 pl-4 font-display text-lg leading-snug text-foreground sm:text-xl">
            {`"${chapter.quote}"`}
          </p>
        )}
      </Reveal>
    </article>
  )
}

export function Story() {
  return (
    <section id="story" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-xs text-primary">The Story</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,6vw,4.25rem)] leading-[0.92] uppercase text-balance">
            The story of the most peaceful dog ever
          </h2>
          <div className="mt-7 grid gap-5 text-[15px] leading-relaxed text-muted-foreground md:max-w-3xl md:grid-cols-2">
            <p>
              Nobody knows exactly when PDOG was born. Nobody knows what his real name is. What we
              do know is that, for most of his life, he worked.
            </p>
            <p>
              Monday. Tuesday. Wednesday. Years passed. While everyone around him was chasing
              promotions and worrying about money, PDOG had only one dream:
              <span className="text-foreground"> peace.</span>
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28">
        {chapters.map((chapter, i) => (
          <ChapterBlock key={chapter.number} chapter={chapter} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
