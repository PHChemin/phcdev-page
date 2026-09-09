# Component bank

Inventário do que já vem no template. Amplie aos poucos; no cliente, prefira o que já está aqui.

## Originkit (`originkit/ui/`) — bank no template

| Component | File | Notes |
| --- | --- | --- |
| Typewriter | `typewriter.tsx` | Usado no demo `App.tsx` |
| GlitchText | `glitch-text.tsx` | Disponível; não usado no demo |

Cresça este banco no template (`npx originkit add …`) para não gastar a cota free em projetos.

## Magic UI / shadcn (`ui/`)

| Component | File | Source |
| --- | --- | --- |
| Button | `button.tsx` | shadcn/ui |
| Particles | `particles.tsx` | Magic UI |
| RetroGrid | `retro-grid.tsx` | Magic UI |
| ShimmerButton | `shimmer-button.tsx` | Magic UI |
| InteractiveHoverButton | `interactive-hover-button.tsx` | Magic UI |
| AnimatedGradientText | `animated-gradient-text.tsx` | Magic UI |
| BlurFade | `blur-fade.tsx` | Magic UI |
| TypingAnimation | `typing-animation.tsx` | Magic UI (stock) |
| DotPattern | `dot-pattern.tsx` | Magic UI (stock) |

Mais sob demanda:

```bash
npx shadcn@latest add @magicui/<nome>
```

## Handmade (`handmade/`)

| Component | File |
| --- | --- |
| ClickEffects | `click-effects.tsx` |

## Util

- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)
