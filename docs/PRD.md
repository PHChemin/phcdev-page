# PRD — Phc.Dev (One-page)

Requisitos do site principal da marca **Phc.Dev**.

> Este site é, ao mesmo tempo, o produto e a **amostra do plano One-page**.  
> Referência de estrutura: [letzdesignstudio.com.br](https://www.letzdesignstudio.com.br/).  
> Irmão Presença (bio): [PHChemin/phcdev](https://github.com/PHChemin/phcdev).

## Identidade

| Campo | Valor |
| --- | --- |
| Nome do cliente / marca | Phc.Dev |
| Área de atuação | Desenvolvimento de software — sites estáticos e apps mobile |
| Público-alvo | Quem quer um site profissional com oferta clara (não só bio) |
| Tom de voz | Direto, técnico mas acessível; sem jargão vazio |
| Conceito | _Cada linha tem um propósito._ |
| Idioma do site | pt-BR |

## Objetivo da landing

O visitante deve entender **quem é** a Phc.Dev, **o que oferece** (Presença / One-page / Apps) e **como contratar** (WhatsApp / redes) — com scroll por seções, não uma tela só de botões.

## Escopo One-page vs Presença

| Este site (One-page) | Repo `phcdev` (Presença) |
| --- | --- |
| Várias seções com nav | Uma composição: quem é + o que faz + botões |
| Lista / cards de serviços e planos | Sem seção de serviços |
| Sobre com parágrafo | Texto curto no hero |
| Espaço para trabalhos / referências | Sem portfólio |
| Contato no fim + CTAs no hero | Os botões *são* o contato |

## Conteúdo obrigatório

- [ ] Logo Phc.Dev (`public/logo-inline.png` / wordmark)
- [ ] Hero: marca + headline + frase de apoio + CTA (WhatsApp em destaque)
- [ ] Seção **Serviços** — os 3 planos:
  - Presença
  - One-page
  - Apps mobile
- [ ] Seção **Sobre** — Pedro Henrique Chemin · Phc.Dev
- [ ] Contato — WhatsApp, Instagram, GitHub, LinkedIn
- [ ] Identidade visual Phc.Dev (cores, fontes, logos)

## Conteúdo desejável

- [ ] Nav sticky com âncoras (Serviços · Sobre · Contato — + Trabalhos se houver)
- [ ] Seção **Trabalhos** / referências (link para GitHub ou cases) — quando houver material
- [ ] Destaque de que *este site* é amostra do plano One-page (e o linktree é amostra Presença)
- [ ] 2–3 animações leves com intenção

## Conteúdo fora de escopo

- Login / área do cliente
- Carrinho / pagamento online
- CMS / painel admin
- Formulário com backend
- Blog
- Reduzir a página a um Linktree (isso é o outro repo)

## Contatos a linkar

| Canal | URL / número |
| --- | --- |
| WhatsApp | [wa.me/554288673293](https://wa.me/554288673293) |
| Instagram | [instagram.com/phc.dev](https://www.instagram.com/phc.dev) |
| GitHub | [github.com/PHChemin](https://github.com/PHChemin) |
| LinkedIn | [linkedin.com/in/phchemin](https://www.linkedin.com/in/phchemin/) |
| E-mail | _(a definir)_ |

## Domínio

| Campo | Valor |
| --- | --- |
| URL desejada | Principal da marca (ex.: `www.phcdev.com.br`) — a confirmar |
| Presença (irmão) | `linktree.phcdev.com.br` |
| Quem compra / renova o domínio | Pedro / Phc.Dev |
| Já possui domínio? | A confirmar |

## Critérios de aceite

- [ ] One-page com scroll e seções claras (não Linktree)
- [ ] Hero com marca forte + CTA WhatsApp
- [ ] Serviços Presença / One-page / Apps descritos
- [ ] Sobre + links de contato funcionando
- [ ] Mobile e desktop legíveis
- [ ] Identidade Phc.Dev aplicada (cores, fontes, logos)
- [ ] HTTPS no domínio (ou URL `*.github.io`)
- [ ] Deploy via GitHub Actions ok

## Referências

- Estrutura One-page: [letzdesignstudio.com.br](https://www.letzdesignstudio.com.br/)
- Identidade / Presença: [PHChemin/phcdev](https://github.com/PHChemin/phcdev) (`docs/`)
- UI/motion: [Originkit](https://www.originkit.dev/), [Skiper UI](https://skiper-ui.com/) — decisão em `docs/SDD.md`
