# Component bank

Inventário do que já vem no template. Amplie aos poucos; no cliente, prefira o que já está aqui.

## Escolha por clima

Escolha pelo conceito do cliente (`docs/ART_DIRECTION.md`), não pelo que é mais vistoso. 2–4 por página, com cor, velocidade e densidade ajustadas — valores default denunciam template.

| Clima | Combina | Evitar |
| --- | --- | --- |
| Tech / dev / moderno | TypingAnimation, Particles, RetroGrid, DotPattern, GlitchText, NumberTicker, CopyButton | Confetti, MotionCarousel de depoimentos fofos |
| Artesanal / acolhedor / comida | BlurFade, Reveal, Marquee (produtos), MotionCarousel, ClickEffects `icon` ou `confetti` | GlitchText, RetroGrid, Particles com brilho |
| Premium / elegante | Reveal, BlurFade lento, ParallaxHeroImages, Lens (detalhe de produto), StickyScroll, PreviewLinkCard | ShimmerButton, AnimatedGradientText, confetti, Marquee rápido |
| Divertido / jovem / festivo | ClickEffects `confetti`, LiquidButton, FlipButton, RippleButton, Marquee, AnimatedGradientText | Excesso de sobriedade: só Reveal deixa sem graça |
| Sério / institucional (advocacia, saúde, contábil) | Reveal, SectionHeading, NumberTicker (anos, clientes), StickyScroll (etapas), Accordion (FAQ) | GlitchText, confetti, ShimmerButton, Particles |
| Visual / portfólio (foto, arquitetura, interiores) | ParallaxHeroImages, MotionCarousel, Lens, BentoGrid, Carousel | Efeito de fundo competindo com as fotos |

Os climas se misturam: uma barbearia pode ser "artesanal + sério"; um dev pode ser "tech + divertido". A coluna "Evitar" é um padrão, não uma proibição — quebrar de propósito, quando vier do conceito, é exatamente a direção ousada.

## Originkit (`originkit/ui/`) — bank no template

| Component | File | Notes |
| --- | --- | --- |
| GlitchText | `glitch-text.tsx` | Disponível; não usado no demo |

Cresça este banco no template (`npx originkit add …`) para não gastar a cota free em projetos.

## Magic UI / shadcn / Aceternity (`ui/`)

| Component | File | Source |
| --- | --- | --- |
| Button | `button.tsx` | shadcn/ui |
| Accordion | `accordion.tsx` | shadcn/ui |
| Sheet | `sheet.tsx` | shadcn/ui |
| Carousel | `carousel.tsx` | shadcn/ui (Embla) |
| Particles | `particles.tsx` | Magic UI |
| RetroGrid | `retro-grid.tsx` | Magic UI |
| ShimmerButton | `shimmer-button.tsx` | Magic UI |
| InteractiveHoverButton | `interactive-hover-button.tsx` | Magic UI |
| AnimatedGradientText | `animated-gradient-text.tsx` | Magic UI |
| BlurFade | `blur-fade.tsx` | Magic UI |
| TypingAnimation | `typing-animation.tsx` | Magic UI — digitação do demo; aceita `prefix` |
| DotPattern | `dot-pattern.tsx` | Magic UI |
| Marquee | `marquee.tsx` | Magic UI |
| Dock | `dock.tsx` | Magic UI |
| BentoGrid / BentoCard | `bento-grid.tsx` | Magic UI |
| NumberTicker | `number-ticker.tsx` | Magic UI |
| Lens | `lens.tsx` | Magic UI |
| MagicCard | `magic-card.tsx` | Magic UI |
| StickyScroll | `sticky-scroll-reveal.tsx` | Aceternity UI |
| ParallaxHeroImages | `parallax-hero-images.tsx` | Aceternity UI |

Mais sob demanda:

```bash
npx shadcn@latest add @magicui/<nome>
npx shadcn@latest add @aceternity/<nome>
npx shadcn@latest add <nome>
```

Registries em `components.json`: `@magicui`, `@aceternity`, `@animate-ui`.

## Animate UI (`animate-ui/`)

Instalados via registry. `components/` é o que se usa; `primitives/` é a base sem estilo.
Os arquivos foram ajustados (tokens do tema, a11y, pt-BR) — reinstalar sobrescreve.

| Component | File | Notes |
| --- | --- | --- |
| CopyButton | `components/buttons/copy.tsx` | Ícone copiar → check; `label`/`copiedLabel` para leitor de tela |
| FlipButton | `components/buttons/flip.tsx` | Gira para a face de trás no hover/foco; o verso é `aria-hidden` |
| LiquidButton | `components/buttons/liquid.tsx` | Preenchimento “líquido” no hover; tamanho `cta` |
| RippleButton | `components/buttons/ripple.tsx` | Onda no clique (centralizada via teclado); tamanho `cta` |
| MotionCarousel | `components/community/motion-carousel.tsx` | Embla + slides com escala e dots em pílula; aceita qualquer `ReactNode` |
| PreviewLinkCard | `components/radix/preview-link-card.tsx` | Prévia do link no hover (Radix HoverCard) |

Todos aceitam `asChild` para virar `<a>`. O app inteiro está dentro de `<MotionConfig reducedMotion="user">` (`main.tsx`).

PreviewLinkCard: sem `src`, a imagem vem do screenshot da API do microlink (cota free limitada e depende de serviço externo). Em produção, gere o print e passe `src="/previews/site.webp"`. Só aparece com mouse — no toque vale o link.

Carrosséis: `ui/carousel.tsx` (shadcn, neutro, para grade de itens) e `MotionCarousel` (slide em destaque, para portfólio/depoimentos).

```bash
npx shadcn@latest add @animate-ui/components-buttons-<nome>
npx shadcn@latest add @animate-ui/components-radix-<nome>
```

## Site (`site/`)

Peças que se repetem em landing com seções. O demo em `App.tsx` usa todas.

| Component | File | Notes |
| --- | --- | --- |
| SiteHeader | `site-header.tsx` | Âncoras, seção ativa, esconde ao rolar, menu no Sheet |
| WhatsAppCta | `whatsapp-cta.tsx` | Link real para `wa.me` |
| SectionHeading | `section-heading.tsx` | Eyebrow, título e frase |
| Reveal | `reveal.tsx` | Entrada no scroll, sem blur |

## Handmade (`handmade/`)

| Component | File |
| --- | --- |
| ClickEffects | `click-effects.tsx` |

`ClickEffects` desenha em um canvas fixo sobre a página e só anima enquanto há partículas. Variantes:

| `variant` | Efeito | Duração padrão |
| --- | --- | --- |
| `burst` | Partículas redondas que se espalham (padrão) | 0.4s |
| `sparks` | Traços curtos que saem do ponto do clique | 0.35s |
| `confetti` | Papeizinhos que giram e caem com gravidade | 1.2s |
| `icon` | Três ícones que sobem e somem; troque com `icon="★"` ou um emoji | 0.9s |

`colors={[...]}` sorteia uma cor por partícula (substitui `color`). Com emoji, a cor não se aplica.

```tsx
<ClickEffects variant="confetti" colors={[BRAND, "#f4f5f7", "#e0b04a"]} />
<ClickEffects variant="icon" icon="🧁" />
```

## Util

- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)
- `src/lib/links.ts` — URLs, nav e textos de exemplo do demo
- `src/lib/use-active-section.ts` — seção visível para o header
- `src/lib/theme.ts` — detecta fundo escuro sem depender da classe `.dark`
- `src/lib/use-prefers-reduced-motion.ts`
