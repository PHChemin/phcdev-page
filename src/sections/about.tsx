import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { SelectionFrame } from "@/components/site/selection-frame"
import { asset } from "@/lib/asset"
import { values } from "@/lib/links"

export function About() {
  return (
    <section id="sobre" className="relative isolate scroll-mt-16 overflow-hidden py-24 md:py-32">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_right,black,transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20">
          <Reveal className="mx-auto w-full max-w-[20rem] pt-8 md:max-w-none">
            <SelectionFrame label="pedro-chemin.jpg" meta="Pedro · Phc.Dev">
              <img
                src={asset("pedro.webp")}
                alt="Pedro Henrique Chemin, criador da Phc.Dev"
                width={720}
                height={960}
                loading="lazy"
                className="block aspect-[3/4] w-full object-cover"
              />
            </SelectionFrame>
          </Reveal>

          <Reveal delay={90}>
            <SectionHeading eyebrow="04 / Sobre" title="Quem está por trás da Phc.Dev." />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                <strong className="font-semibold text-foreground">Sou o Pedro Henrique Chemin</strong>,
                desenvolvedor. Crio sites e aplicativos para profissionais e pequenos negócios que
                querem apresentar bem o seu trabalho.
              </p>
              <p>
                Cuido de todas as etapas: conversa, visual, desenvolvimento e publicação. O
                atendimento é feito diretamente por mim, de forma remota, para todo o Brasil.
              </p>
            </div>

            <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3 sm:gap-8">
              {values.map((item) => (
                <div key={item.label}>
                  <dt className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-eyebrow uppercase">
                    <span aria-hidden className="h-[3px] w-3 bg-primary" />
                    {item.label}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-foreground/90">{item.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
