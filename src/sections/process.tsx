import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { steps } from "@/lib/links"

export function Process() {
  return (
    <section id="processo" className="scroll-mt-16 border-t border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.2fr] md:gap-20 md:px-8">
        <Reveal>
          <div className="md:sticky md:top-28">
            <SectionHeading
              eyebrow="02 / Processo"
              title="Como o trabalho acontece."
              intro="Do primeiro contato à publicação, o atendimento é feito por mim. Você sempre sabe em que etapa está."
            />
          </div>
        </Reveal>

        <ol className="relative">
          <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-border" />
          {steps.map((step, index) => (
            <Reveal as="li" key={step.label} delay={index * 80} className="relative pb-12 pl-10 last:pb-0">
              <span aria-hidden className="absolute top-[0.55rem] left-0 size-[11px] bg-primary" />
              <p className="font-mono text-xs tracking-[0.2em] text-eyebrow uppercase">
                {String(index + 1).padStart(2, "0")} · {step.label}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{step.title}</h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
