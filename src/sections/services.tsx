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
import { plans, whatsappLink, type Plan } from "@/lib/links"

const linkClass =
  "inline-flex min-h-11 items-center gap-1.5 border-b border-foreground/30 font-medium text-foreground transition-colors hover:border-primary"

function PlanAction({ action }: { action: Plan["action"] }) {
  if (action.kind === "preview") {
    return (
      <PreviewLinkCard href={action.href} src={asset(action.preview)} width={400} height={250}>
        <PreviewLinkCardTrigger target="_blank" rel="noopener noreferrer" className={linkClass}>
          {action.label}
          <ArrowUpRight className="size-4" aria-hidden />
        </PreviewLinkCardTrigger>
        <PreviewLinkCardContent target="_blank" rel="noopener noreferrer" className="p-1.5">
          <PreviewLinkCardImage alt={action.alt} className="block rounded-sm" />
        </PreviewLinkCardContent>
      </PreviewLinkCard>
    )
  }

  return (
    <a
      href={whatsappLink(action.message)}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {action.label}
      <ArrowUpRight className="size-4" aria-hidden />
    </a>
  )
}

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="01 / Serviços"
            title="O que eu faço."
            intro="Três formatos, de acordo com o que você precisa mostrar. Em cada um, o visual parte da sua marca."
          />
        </Reveal>

        <div className="mt-14 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.id}
              delay={index * 90}
              className="flex flex-col border-b border-border py-9 last:border-b-0 md:row-span-4 md:grid md:grid-rows-subgrid md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold">{plan.name}</h3>
              </div>
              <p className="mt-3 text-lg leading-snug text-foreground">{plan.tagline}</p>

              <div className="mt-6">
                <p className="font-mono text-xs tracking-[0.18em] text-eyebrow uppercase">
                  Combina com
                </p>
                <ul className="mt-4 space-y-4 text-base leading-relaxed">
                  {plan.fits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7em] h-[3px] w-3 shrink-0 bg-primary" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <PlanAction action={plan.action} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
