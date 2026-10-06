# Software Design Document — Phc.Dev (One-page)

Visão técnica do site principal Phc.Dev (vitrine do plano **One-page**).

## Stack

| Camada | Escolha | Motivo |
| --- | --- | --- |
| UI | React 19 + TypeScript | Seções, motion e composição moderna |
| Estilo | Tailwind CSS v4 + shadcn tokens | Tokens `@theme`, identidade Phc.Dev |
| Motion | Magic UI + Originkit + handmade | Banco local; Originkit pré-baixado no template |
| Build | Vite 7 | Dev rápido, `dist/` estático para Pages |
| Deploy | GitHub Pages + Actions | Hospedagem sem mensalidade |
| Contato | Links externos (wa.me, redes) | Sem backend |

## Arquitetura

```
src/ (React + TS)
  → npm run build
  → dist/ (HTML/CSS/JS/assets)
  → GitHub Actions → Pages
```

## Estrutura de pastas

```
/
├── index.html
├── components.json            # shadcn + @magicui
├── originkit.components.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx                # One-page (hero + seções)
│   ├── styles/main.css        # tokens Phc.Dev
│   ├── lib/                   # utils, links, hooks
│   ├── hooks/
│   └── components/
│       ├── ui/                # shadcn + Magic UI + Aceternity
│       ├── animate-ui/        # Animate UI (components + primitives)
│       ├── originkit/         # bank Originkit
│       ├── site/              # peças de landing (header, CTA, seções)
│       └── handmade/          # efeitos próprios
├── public/
│   ├── logo-inline.png
│   └── logo-icon.png
├── docs/                      # brief, PRD, direção de arte, referências
├── .cursor/
│   ├── rules/                 # regras do projeto
│   └── skills/design-landing/ # fluxo de direção de arte
└── .github/workflows/deploy.yml
```

## Relação com o repo Presença

| Repo | Papel |
| --- | --- |
| [PHChemin/phcdev](https://github.com/PHChemin/phcdev) | Amostra **Presença** (bio/Linktree) |
| Este (`phcdev-page`) | Amostra **One-page** (seções, estilo Letz) |

Mesma identidade (cores, logos, tom). Escopos de conteúdo diferentes — não duplicar o layout Presença aqui.

## Originkit / Magic UI / Animate UI

- Magic UI / shadcn / Aceternity / Animate UI: `npx shadcn@latest add @magicui/<nome>` (registries em `components.json`)
- Originkit: `npx originkit login` → `npx originkit add <nome>`
- Preferir componentes já versionados em `src/components/`
- Skiper UI: **não adotado** por enquanto

## Regras de design técnico

1. Site 100% estático após o build.
2. `base: './'` no Vite — funciona em `*.github.io/repo` e domínio custom.
3. Conteúdo One-page em `App.tsx` (ou seções extraídas): hero, serviços, sobre, contato (+ trabalhos se houver).
4. Animações com intenção (2–3), sem poluir.
5. Contato só via links — sem formulário server-side.

## Domínio

Ver `DEPLOY.md`. URL principal da marca (não o subdomínio `linktree.`).

## Extensões futuras (opcional)

- React Router → lembrar fallback SPA no Pages (`404.html`)
- Formulário → Formspree / similar
- Host alternativo → Cloudflare Pages consome o mesmo `dist/`
