# UI Guidance — Phc.Dev (One-page)

Diretrizes visuais para o site principal. Leia junto com `PRD.md`.

> Estrutura de seções: inspirada em [Letz Studio](https://www.letzdesignstudio.com.br/).  
> Identidade (cores/tipografia/logo): herdada do briefing Phc.Dev / repo [phcdev](https://github.com/PHChemin/phcdev).

## Conceito

**Cada linha tem um propósito.**  
Estética de terminal/código com acabamento limpo e futurista — contraste entre “código bruto” e “resultado polido”. Não cartoon, não sticker.

## Princípios (sempre)

1. **Uma composição no primeiro viewport** — marca + 1 headline + 1 frase + 1 grupo de CTA + visual dominante. Sem dashboard.
2. **Marca em primeiro plano** — logo Phc.Dev com cursor quadrado; reconhecível sem o nav.
3. **Hero full-bleed** — fundo/efeito de borda a borda; sem cards flutuando no hero.
4. **Uma função por seção** — um título, uma frase de apoio.
5. **Cara de programador** — grid/blueprint sutil, mono no wordmark, acentos retangulares (cursor).
6. **Movimento com intenção** — 2–3 animações leves (fade, typewriter, particles…), não ruído.
7. **Mobile-first** — CTAs com área de toque confortável.

## Tipografia

| Uso | Fonte | Observação |
| --- | --- | --- |
| Logo / wordmark | **Roboto Mono** | Base monoespaçada; reforça identidade dev |
| Títulos (H1–H3) | **Poppins** | Geométrica, limpa |
| Corpo / UI | **Inter** | Legibilidade — escolha explícita da marca (exceção consciente ao “evitar Inter genérico”) |

Carregar via Google Fonts em `index.html`. Tokens em `src/styles/main.css`:

```css
--font-mono: "Roboto Mono", ui-monospace, monospace;
--font-display: "Poppins", system-ui, sans-serif;
--font-sans: "Inter", system-ui, sans-serif;
```

## Paleta de cores

### Paleta principal

| Token sugerido | Hex | Uso |
| --- | --- | --- |
| `brand` | `#0F5AFE` | CTAs, links ativos, cursor do logo, destaques |
| `navy` | `#14306D` | Fundos secundários, blocos, profundidade |
| `ink` | `#171717` | Fundo principal (dark), texto em fundos claros |
| `paper` | `#E7E9EE` | Fundos claros, bordas suaves |
| `white` | `#FFFFFF` | Texto em fundo escuro, superfícies de contraste |

### Tons de contraste

| Token sugerido | Hex | Uso |
| --- | --- | --- |
| `muted` | `#626772` | Texto secundário, bordas, estados discretos |

### Mapeamento sugerido no `@theme`

```css
--color-ink: #171717;
--color-ink-muted: #626772;
--color-paper: #E7E9EE;
--color-paper-deep: #14306D;
--color-accent: #0F5AFE;
--color-accent-hover: #0d4ed8;
--color-surface: #FFFFFF;
--color-navy: #14306D;
```

**Clima geral:** dark mode predominante (`ink` + `navy`), texto `white`/`paper`, acentos `brand`.

Evitar clichês: roxo/indigo genérico; cream + serif + terracotta “AI default”; glow excessivo; pills demais.

## Logo

| Variante | Arquivo | Uso |
| --- | --- | --- |
| Inline (wordmark) | `public/logo-inline.png` | Header, hero, footer |
| Ícone | `public/logo-icon.png` | Favicon, OG image, espaços compactos |

Regras:

- Cursor entre “Phc” e “Dev” é **quadrado**, não circular.
- Em fundo escuro: texto claro + cursor azul (`#0F5AFE`).
- Em fundo claro (`paper`): texto escuro + cursor azul.
- Não distorcer proporções; reservar respiro ao redor.

## Estrutura de página (One-page)

Inspirada em Letz — adaptar ao tom Phc.Dev (mais técnico, menos “♥”):

```
┌─────────────────────────────┐
│  Nav (âncoras)              │
├─────────────────────────────┤
│  HERO (full-bleed)          │
│  Logo · Headline · CTA WA   │
├─────────────────────────────┤
│  SERVIÇOS                   │
│  Presença · One-page · Apps │
├─────────────────────────────┤
│  SOBRE                      │
│  Pedro · Phc.Dev            │
├─────────────────────────────┤
│  TRABALHOS (opcional)       │
├─────────────────────────────┤
│  CONTATO                    │
│  WA · Instagram · GitHub…   │
└─────────────────────────────┘
```

**Não fazer:** layout Presença (só botões empilhados sem seções). Isso é o outro repo.

## Kits de UI

- Prefira componentes já em `src/components/` (Magic UI, Originkit, handmade).
- Não sobrecarregue a página com todo o bank — escolha 2–4 efeitos.
- Contato = botões/links claros. Sem formulário server-side neste stack.

## Checklist antes de entregar

- [ ] Tokens de cor/fonte Phc.Dev em `main.css`
- [ ] Logos reais no header/favicon
- [ ] Hero sem cards/overlays soltos
- [ ] Seções com uma função cada
- [ ] Contraste legível
- [ ] Mobile: nav e CTAs usáveis com o polegar
- [ ] Site legível como amostra do plano One-page
