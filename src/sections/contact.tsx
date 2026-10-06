import { FlipButton, FlipButtonBack, FlipButtonFront } from "@/components/animate-ui/components/buttons/flip"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/site/brand-icons"
import { Cursor } from "@/components/site/cursor"
import { Reveal } from "@/components/site/reveal"
import { WhatsAppIcon } from "@/components/site/whatsapp-cta"
import { links } from "@/lib/links"

const socials = [
  { label: "Instagram", href: links.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: links.github, Icon: GithubIcon },
] as const

export function Contact() {
  return (
    <section id="contato" className="theme-navy scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-eyebrow uppercase">05 / Contato</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[1.04] font-semibold tracking-tight">
            Vamos conversar
            <Cursor className="ml-[0.1em] bg-white" />
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Conte um pouco sobre o seu projeto. A resposta vem direto de mim, pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={90} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <FlipButton asChild from="top" className="h-14 sm:min-w-60">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp">
              <FlipButtonFront className="size-full gap-3 rounded-md bg-white px-7 text-lg font-semibold text-ink shadow-none hover:bg-white">
                <WhatsAppIcon className="size-6 text-[#25d366]" />
                WhatsApp
              </FlipButtonFront>
              <FlipButtonBack className="size-full gap-3 rounded-md bg-primary px-7 text-lg font-semibold text-primary-foreground shadow-none hover:bg-primary">
                Abrir conversa
                <WhatsAppIcon className="size-6" />
              </FlipButtonBack>
            </a>
          </FlipButton>
          {socials.map(({ label, href, Icon }) => (
            <LiquidButton
              key={label}
              asChild
              size="cta"
              className="h-14 border border-white/25 text-base text-white [--liquid-button-background-color:#24427f] [--liquid-button-color:#ffffff] hover:text-ink sm:min-w-48"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="size-6" />
                {label}
              </a>
            </LiquidButton>
          ))}
        </Reveal>

      </div>
    </section>
  )
}
