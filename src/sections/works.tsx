import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import {
  PreviewLinkCard,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
  PreviewLinkCardTrigger,
} from "@/components/animate-ui/components/radix/preview-link-card"
import { asset } from "@/lib/asset"
import { works, type Work } from "@/lib/links"
import { cn } from "@/lib/utils"

/**
 * Cada card fica branco para manter o visual da Phc.Dev,
 * mas sombra, botão, tipografia e enfeites vêm da identidade do cliente.
 */
const brandStyles: Record<
  Work["brand"],
  { card: string; figure: string; frame: string; eyebrow: string; title: string; button: string }
> = {
  letz: {
    card: "rounded-[1.75rem] border-2 border-[#181818]/10 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#fc549c]",
    figure: "bg-[#fff0f5]",
    frame: "rounded-xl ring-1 ring-[#181818]/10 shadow-[4px_4px_0_0_#181818]",
    eyebrow: "text-[#c92f74]",
    title: "font-letz text-[2.6rem] leading-none font-extrabold tracking-tight text-[#181818] md:text-6xl",
    button:
      "rounded-full border-2 border-[#181818] bg-white text-[#181818] shadow-[3px_3px_0_0_#181818] hover:border-[#fc549c] hover:bg-[#fc549c] hover:text-white",
  },
  sonho: {
    card: "rounded-[1.75rem] border border-[#f05f83]/25 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgb(240_95_131/0.6)]",
    figure: "bg-[#fff8f3]",
    frame:
      "rounded-2xl shadow-[0_6px_0_0_#efc2cd] outline-[1.5px] outline-offset-[-7px] outline-dashed outline-[#3a3737]/25",
    eyebrow: "text-[#c23a62]",
    title: "font-sonho text-[2.6rem] leading-none font-normal text-[#f05f83] md:text-6xl",
    button:
      "rounded-2xl bg-[#f5d77a] text-[#3a3737] shadow-[0_4px_0_0_#efc2cd] hover:bg-[#f05f83] hover:text-white",
  },
  casamento: {
    card: "rounded-[1.75rem] border border-[#3f4c3a]/15 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-30px_rgb(36_48_38/0.6)]",
    figure: "bg-[#f7f4ee]",
    frame: "rounded-none ring-1 ring-[#c4a36a]/50 shadow-[0_20px_40px_-24px_rgb(36_48_38/0.55)]",
    eyebrow: "text-[#6e552c]",
    title: "font-casamento text-5xl leading-none font-normal text-[#3f4c3a] md:text-7xl",
    button:
      "rounded-none border border-[#3f4c3a]/70 bg-white text-xs tracking-[0.22em] text-[#3f4c3a] uppercase hover:bg-[#3f4c3a] hover:text-[#f7f4ee]",
  },
}

/** Enfeites que cada marca usa no próprio site. A Letz não usa mais adesivos. */
function BrandDecor({ brand }: { brand: Work["brand"] }) {
  if (brand === "letz") return null

  if (brand === "sonho") {
    return (
      <>
        <span
          aria-hidden
          className="pointer-events-none absolute top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-3 bg-[#f5d77a]/85 shadow-sm md:top-6"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 bottom-4 z-10 h-5 w-16 rotate-[-28deg] bg-[#e3f3c8] shadow-sm md:right-6 md:bottom-7"
        />
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="pointer-events-none absolute bottom-3 left-4 z-10 size-6 text-[#f05f83] md:bottom-6 md:left-7"
          fill="currentColor"
        >
          <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 5 6.4 5c2 0 3.6 1.2 4.6 2.8C12 6.2 13.6 5 15.6 5 19 5 21.1 8.4 19.6 11.8 17.5 16.4 12 21 12 21z" />
        </svg>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(240_95_131/0.22)_1px,transparent_1.5px)] [background-size:18px_18px]"
        />
      </>
    )
  }

  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-3 border border-[#c4a36a]/55 md:inset-4"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-1 left-1/2 z-10 -translate-x-1/2 bg-[#f7f4ee] px-3 font-casamento text-2xl leading-none text-[#6e552c] md:top-1.5"
      >
        H&R
      </span>
    </>
  )
}

function WorkCard({ work, index }: { work: Work; index: number }) {
  const style = brandStyles[work.brand]
  const reverse = index % 2 === 1

  return (
    <article
      className={cn(
        "group/work grid overflow-hidden bg-white text-[#171717] transition-[transform,box-shadow] duration-300 md:grid-cols-2",
        style.card,
      )}
    >
      <figure
        className={cn(
          "relative isolate flex items-center justify-center px-6 py-10 md:px-10 md:py-14",
          style.figure,
          reverse && "md:order-2",
        )}
      >
        <BrandDecor brand={work.brand} />
        <a
          href={work.href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className={cn("relative block aspect-[16/10] w-full overflow-hidden bg-white", style.frame)}
        >
          <img
            src={asset(work.preview)}
            alt=""
            width={960}
            height={600}
            loading="lazy"
            className="size-full object-cover object-top transition-transform duration-700 group-hover/work:scale-[1.03]"
          />
        </a>
      </figure>

      <div className={cn("flex flex-col justify-center px-6 py-8 md:px-10 md:py-12", reverse && "md:order-1")}>
        <p className={cn("font-mono text-xs tracking-[0.18em] uppercase", style.eyebrow)}>
          {String(index + 1).padStart(2, "0")} · {work.kind}
        </p>
        <h3 className={cn("mt-4", style.title)}>{work.name}</h3>
        <p className="mt-5 text-base leading-relaxed text-[#4b505b] md:text-lg">{work.description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <PreviewLinkCard href={work.href} src={asset(work.preview)} width={400} height={250}>
            <PreviewLinkCardTrigger
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex min-h-11 items-center gap-2 px-5 text-sm font-semibold transition-all duration-300",
                style.button,
              )}
            >
              Visitar site
              <ArrowUpRight className="size-4" aria-hidden />
            </PreviewLinkCardTrigger>
            <PreviewLinkCardContent target="_blank" rel="noopener noreferrer" className="p-1.5">
              <PreviewLinkCardImage alt={`Prévia do site ${work.name}`} className="block rounded-sm" />
            </PreviewLinkCardContent>
          </PreviewLinkCard>
          <span className="font-mono text-xs text-[#626772]">{work.host}</span>
        </div>
      </div>
    </article>
  )
}

export function Works() {
  return (
    <section id="trabalhos" className="theme-paper scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Trabalhos"
            title="Trabalhos realizados."
            intro="Alguns dos sites que criei. Cada projeto nasce da identidade do próprio cliente, por isso nenhum se parece com o outro."
          />
        </Reveal>

        <ul className="mt-14 flex list-none flex-col gap-8 p-0 md:gap-10">
          {works.map((work, index) => (
            <Reveal as="li" key={work.name} delay={60}>
              <WorkCard work={work} index={index} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
