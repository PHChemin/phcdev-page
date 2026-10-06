# UI Guidance — Phc.Dev (One-page)

Diretrizes visuais para o site principal. Leia junto com `PRD.md`.

> Estrutura de seções: inspirada em [Letz Studio](https://www.letzdesignstudio.com.br/).  
> Identidade (cores/tipografia/logo): herdada do briefing Phc.Dev / repo [phcdev](https://github.com/PHChemin/phcdev).  
> Direção de arte: `docs/ART_DIRECTION.md`. Processo completo (do tema aos prints): skill `.cursor/skills/design-landing/`.

## Conceito

**Cada linha tem um propósito.**  
Estética de terminal/código com acabamento limpo e futurista — contraste entre “código bruto” e “resultado polido”. Não cartoon, não sticker.

## Criatividade alinhada ao tema

O site deve **só poder ser da Phc.Dev**. Criatividade aqui não é somar efeitos — é tirar a forma do próprio ofício.

1. **Conceito antes de componente** — a ideia central vem do mundo do código (terminal, commit, diff, build, deploy). Cor, fonte, textura, movimento e microcopy saem dela.
2. **Use um suporte do ofício como estrutura** — terminal, editor, changelog, `README`. Isso dá personalidade sem cair em cards genéricos.
3. **Um momento assinatura** — uma coisa memorável por página, de preferência no primeiro viewport. Só uma.
4. **Subverta um clichê do segmento** — o clichê de dev é “matrix verde / hacker de capuz / neon roxo”. Fazer outra coisa de propósito.
5. **Personalize os efeitos** — cor, velocidade e densidade ajustadas ao conceito. Efeito com valores default denuncia template.
6. **Microcopy com voz** — botões e títulos no tom da marca, não “Saiba mais” / “Nossos serviços”.

## Princípios de composição (sempre)

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

- Prefira componentes já em `src/components/` — escolha pela seção “Escolha por clima” do README da pasta (clima **Tech / dev / moderno**).
- Não sobrecarregue a página com todo o bank — escolha 2–4 efeitos.
- Contato = botões/links claros. Sem formulário server-side neste stack.

## Checklist antes de entregar

Verificar com prints reais (390px e 1440px), não de cabeça.

- [ ] Teste da marca coberta: sem nome/logo, dá para perceber que é um dev/estúdio de software
- [ ] Teste da troca: trocando só os textos, **não** serviria para outro cliente
- [ ] Momento assinatura presente e visível cedo
- [ ] Nenhum efeito só porque existe no bank
- [ ] Tokens de cor/fonte Phc.Dev em `main.css`
- [ ] Logos reais no header/favicon
- [ ] Hero sem cards/overlays soltos
- [ ] Seções com uma função cada
- [ ] Contraste legível
- [ ] Mobile: nav e CTAs usáveis com o polegar
- [ ] Site legível como amostra do plano One-page
