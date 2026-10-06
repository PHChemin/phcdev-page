import { ArrowUpRight, Mail, MessageCircle, Sparkles, Timer } from "lucide-react"

import { CopyButton } from "@/components/animate-ui/components/buttons/copy"
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/components/buttons/flip"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple"
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel"
import {
  PreviewLinkCard,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
  PreviewLinkCardTrigger,
} from "@/components/animate-ui/components/radix/preview-link-card"
import ClickEffects from "@/components/handmade/click-effects"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { SiteHeader } from "@/components/site/site-header"
import { WhatsAppCta } from "@/components/site/whatsapp-cta"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Particles } from "@/components/ui/particles"
import { RetroGrid } from "@/components/ui/retro-grid"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { contactEmail, links, nav, services, stats, works } from "@/lib/links"

const BRAND = "#0f6b5c"

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>

      <ClickEffects color={BRAND} effectSize={80} duration={0.4} />

      <SiteHeader
        brand={<span className="font-display tracking-tight">Nome da Marca</span>}
        links={nav}
        cta={<WhatsAppCta size="md" className="rounded-full" />}
      />

      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <RetroGrid
            className="opacity-35 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
            angle={65}
            darkLineColor={BRAND}
            lightLineColor={BRAND}
          />
          <Particles
            className="absolute inset-0"
            quantity={90}
            ease={70}
            size={0.6}
            color={BRAND}
            staticity={40}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />
        </div>

        <main
          id="conteudo"
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-lg flex-col items-center justify-center px-6 py-28 text-center"
        >
          <BlurFade delay={0.05} inView>
            <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Nome da Marca
            </p>
          </BlurFade>

          <BlurFade delay={0.12} inView>
            <p className="mt-3 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
              Subtítulo / cidade
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView className="mt-4 w-full">
            <h1 className="font-display text-3xl leading-tight font-semibold md:text-4xl">
              <AnimatedGradientText
                colorFrom="#F4F5F7"
                colorTo={BRAND}
                speed={1.2}
                className="font-display text-3xl font-semibold md:text-4xl"
              >
                Headline do cliente aqui.
              </AnimatedGradientText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3} inView className="mt-5 w-full max-w-md">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Frase de apoio em uma ou duas linhas. Troque pelos textos do brief.
            </p>
          </BlurFade>

          <BlurFade
            delay={0.38}
            inView
            className="mt-6 flex min-h-7 w-full justify-center"
          >
            <TypingAnimation
              prefix="> "
              prefixClassName="text-muted-foreground"
              words={[
                "serviço principal",
                "segundo diferencial",
                "chamada para contato",
              ]}
              loop
              startOnView={false}
              className="font-mono text-sm text-primary"
            />
          </BlurFade>

          <nav
            className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-3"
            aria-label="Contato"
          >
            <BlurFade delay={0.48} inView>
              <WhatsAppCta className="w-full" />
            </BlurFade>
            <BlurFade delay={0.55} inView>
              <InteractiveHoverButton
                as="a"
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Instagram
              </InteractiveHoverButton>
            </BlurFade>
            <BlurFade delay={0.62} inView>
              <InteractiveHoverButton as="a" href={links.email} className="w-full">
                E-mail
              </InteractiveHoverButton>
            </BlurFade>
          </nav>
        </main>
      </section>

      <Marquee pauseOnHover className="border-y border-border py-4 [--duration:28s]">
        {services.map((service) => (
          <span
            key={service.title}
            className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase"
          >
            {service.title}
          </span>
        ))}
      </Marquee>

      <section id="servicos" className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="O que entra no primeiro scroll depois do hero."
            intro="Um bloco por assunto. Troque os textos e, se fizer sentido, um efeito do bank."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = [Sparkles, Timer, MessageCircle][index] ?? Sparkles
            return (
              <Reveal key={service.title} delay={index * 80}>
                <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6">
                  <Icon className="size-5 text-primary" aria-hidden />
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section id="trabalhos" className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <SectionHeading
            eyebrow="Trabalhos"
            title="Portfólio em carrossel."
            intro="Cada slide aceita qualquer conteúdo: foto, vídeo ou card. As setas do teclado também navegam."
          />
        </Reveal>
        <Reveal className="mt-12" delay={80}>
          <MotionCarousel
            ariaLabel="Trabalhos"
            options={{ loop: true }}
            showDotLabel={false}
            getDotLabel={(index) => works[index]?.title ?? `Slide ${index + 1}`}
            slides={works.map((work) => (
              <div className="flex size-full flex-col justify-end bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_60%)] p-6">
                <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {work.tag}
                </p>
                <p className="mt-1 font-display text-2xl font-semibold">{work.title}</p>
              </div>
            ))}
          />
        </Reveal>
        <Reveal className="mt-10 flex justify-center" delay={120}>
          <RippleButton asChild size="cta">
            <a href="#contato">
              Quero um projeto assim
              <RippleButtonRipples />
            </a>
          </RippleButton>
        </Reveal>
      </section>

      <section id="sobre" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Sobre"
              title="Números que o cliente quer mostrar."
              intro="O ticker espera entrar na tela. O locale padrão é pt-BR."
            />
          </Reveal>
          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div>
                  <dt className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-mono text-5xl font-semibold text-foreground">
                    <NumberTicker value={stat.value} />
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Contato"
            title="A conversa continua no WhatsApp."
            intro="Pages é estático: o botão é um link, não um formulário."
          />
        </Reveal>
        <Reveal className="mt-8" delay={80}>
          <WhatsAppCta />
        </Reveal>
        <Reveal
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          delay={120}
        >
          <FlipButton asChild variant="outline" size="cta" from="bottom">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              <FlipButtonFront>Instagram</FlipButtonFront>
              <FlipButtonBack variant="default">@SEU_USUARIO</FlipButtonBack>
            </a>
          </FlipButton>
          <LiquidButton asChild size="cta">
            <a href={links.email}>
              <Mail aria-hidden />
              E-mail
            </a>
          </LiquidButton>
        </Reveal>
        <Reveal
          className="mt-6 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground"
          delay={160}
        >
          <span>{contactEmail}</span>
          <CopyButton
            content={contactEmail}
            variant="ghost"
            size="lg"
            label="Copiar e-mail"
            copiedLabel="E-mail copiado"
          />
        </Reveal>
        <Reveal className="mt-10 text-sm text-muted-foreground" delay={200}>
          <p>
            Veja também o{" "}
            <PreviewLinkCard href={links.portfolio} colorScheme="dark">
              <PreviewLinkCardTrigger
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-foreground underline underline-offset-4"
              >
                portfólio completo
                <ArrowUpRight className="size-3.5" aria-hidden />
              </PreviewLinkCardTrigger>
              <PreviewLinkCardContent target="_blank" rel="noopener noreferrer">
                <PreviewLinkCardImage alt="Prévia do portfólio" />
              </PreviewLinkCardContent>
            </PreviewLinkCard>
            .
          </p>
        </Reveal>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        <p>
          <span className="font-mono">Nome da Marca</span> · {year}
        </p>
      </footer>
    </div>
  )
}
