import { ArrowDown } from "lucide-react"

import { Cursor } from "@/components/site/cursor"
import { WhatsAppCta } from "@/components/site/whatsapp-cta"
import { BlurFade } from "@/components/ui/blur-fade"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { links } from "@/lib/links"

const phrases = [
  "sites para profissionais",
  "páginas para o Instagram",
  "sites de casamento",
  "aplicativos para celular",
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_25%_45%,#000,transparent)]" />
        <div className="absolute -right-40 bottom-10 size-[46rem] rounded-full bg-[radial-gradient(closest-side,rgb(20_48_109/0.75),transparent)]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-28 pb-16 md:px-8 md:pt-32">
        <BlurFade delay={0.05}>
          <p className="font-mono text-xs tracking-[0.2em] text-eyebrow uppercase md:text-sm">
            Pedro Henrique Chemin · Desenvolvimento de software
          </p>
        </BlurFade>

        <BlurFade delay={0.15} offset={10}>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,10.5vw,7rem)] leading-[1.02] font-semibold tracking-tight text-foreground">
            Sites e apps
            <br />
            com propósito
            <Cursor className="ml-[0.1em]" />
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Crio sites e aplicativos para profissionais e pequenos negócios. Cuido de todas as
            etapas, da primeira conversa à publicação.
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="mt-5 min-h-7 font-mono text-sm md:text-base" aria-hidden>
            <TypingAnimation
              prefix="> faço "
              prefixClassName="text-muted-foreground"
              words={phrases}
              loop
              pauseDelay={1800}
              startOnView={false}
              className="text-eyebrow"
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
            <WhatsAppCta label="Falar no WhatsApp" href={links.whatsapp} pulse className="sm:min-w-56" />
            <a
              href="#trabalhos"
              className="group inline-flex min-h-11 items-center justify-center gap-2 px-2 text-base font-medium text-foreground"
            >
              <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-primary">
                Ver trabalhos
              </span>
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>
        </BlurFade>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase md:px-8">
          <span>Atendimento remoto · todo o Brasil</span>
          <span className="hidden sm:inline">Presença · One-page · Apps</span>
        </div>
      </div>
    </section>
  )
}
