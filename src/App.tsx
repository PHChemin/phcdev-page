import Typewriter from '@/components/originkit/ui/typewriter'
import ClickEffects from '@/components/handmade/click-effects'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { Particles } from '@/components/ui/particles'
import { RetroGrid } from '@/components/ui/retro-grid'
import { ShimmerButton } from '@/components/ui/shimmer-button'

/** Replace with client links before delivery. */
const SECONDARY = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/SEU_USUARIO',
  },
  {
    label: 'E-mail',
    href: 'mailto:contato@cliente.com.br',
  },
] as const

const BRAND = '#0f6b5c'

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>

      <ClickEffects color={BRAND} effectSize={80} duration={0.4} />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <RetroGrid
          className="opacity-35 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
          angle={65}
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
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-lg flex-col items-center justify-center px-6 py-16 text-center"
      >
        <BlurFade delay={0.05} inView>
          <p className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Nome da Marca
          </p>
        </BlurFade>

        <BlurFade delay={0.12} inView>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Subtítulo / cidade
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView className="mt-4 w-full">
          <h1 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
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
          className="mt-6 flex min-h-[1.75rem] w-full justify-center"
        >
          <Typewriter
            prefix="> "
            texts={[
              'serviço principal',
              'segundo diferencial',
              'chamada para contato',
            ]}
            color="#9ca3af"
            typedColor={BRAND}
            cursorColor={BRAND}
            cursorChar="|"
            deleteSpeed={0.06}
            font={{
              fontFamily: 'IBM Plex Mono, ui-monospace, monospace',
              fontSize: 14,
              lineHeight: '1.5em',
            }}
            style={{ justifyContent: 'center' }}
          />
        </BlurFade>

        <nav
          className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-3"
          aria-label="Contato"
        >
          <BlurFade delay={0.48} inView>
            <ShimmerButton
              className="w-full rounded-md shadow-none"
              borderRadius="8px"
              background={BRAND}
              shimmerColor="#FFFFFF"
              shimmerDuration="2.4s"
              onClick={() =>
                window.open(
                  'https://wa.me/5500000000000?text=' +
                    encodeURIComponent(
                      'Olá! Vim pelo site e gostaria de mais informações.',
                    ),
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            >
              WhatsApp
            </ShimmerButton>
          </BlurFade>

          {SECONDARY.map(({ label, href }, i) => (
            <BlurFade key={label} delay={0.55 + i * 0.06} inView>
              <InteractiveHoverButton
                className="w-full rounded-md border-border bg-card/60 text-foreground"
                onClick={() =>
                  window.open(href, '_blank', 'noopener,noreferrer')
                }
              >
                {label}
              </InteractiveHoverButton>
            </BlurFade>
          ))}
        </nav>
      </main>

      <footer className="relative z-10 pb-6 text-center text-xs text-muted-foreground">
        <p>
          <span className="font-mono text-paper/60">Nome da Marca</span> · {year}
        </p>
      </footer>
    </div>
  )
}
