# Direção de arte — Phc.Dev (One-page)

Preenchido antes de codar (skill `design-landing`). Campos que o dono não soube responder viram **hipóteses**.

## Hipóteses

- **Público real:** profissionais liberais e empreendedores de áreas convencionais (designer, papelaria, clínica, comércio local). **Não são devs.** Precisam ler rápido, entender a oferta e chamar no WhatsApp.
- **Sensação desejada:** "quem faz isso entende de tecnologia *e* tem bom gosto" — o site é a vitrine do que o cliente vai comprar, então precisa ser bonito, não só funcional.
- **Tech sem extravagância:** o ofício aparece em **estrutura e detalhe** (gutter de linhas, cursor, mono nos rótulos), nunca em jargão ou efeito pesado.
- **Faixa de preço:** não informada → a página não mostra valores; o CTA é "conversar".
- **Prova social:** ainda não há depoimentos escritos. Os trabalhos entram como prova; a seção de feedbacks fica para quando houver textos reais (não inventar).
- **E-mail:** a definir → fora da página até existir.
- **Cursor do logo:** o logo real é um **bloco azul achatado** (tipo `_`) depois de "PhcDev", não um quadrado cheio. O motivo do site usa essa mesma forma.

## Universo do tema

| Objetos | Materiais / texturas | Gestos / processos | Lugares / luz | Vocabulário |
| --- | --- | --- | --- | --- |
| Editor de código, terminal, cursor piscando | Tela escura, grade de blueprint, fio fino de 1px | Digitar, commitar, publicar (deploy) | Mesa à noite, monitor como única luz | linha, commit, build, deploy, cursor |
| Numeração de linhas (gutter) | Mono sobre fundo grafite | Rolar um arquivo longo | Tela escura com acento azul | changelog, log, README |
| Histórico do git (`git log`) | Papel técnico / folha de especificação | Revisar → aprovar → publicar | Luz fria de tela | briefing, diff, release |

**Clichê do segmento a evitar:** matrix verde, capuz de hacker, neon roxo, janelas de terminal falsas cheias de comandos, glow exagerado.

**Ideia central:** *a página inteira é um arquivo — e cada linha tem um propósito.* Uma régua de **números de linha** acompanha a rolagem (desktop), o **cursor azul** do logo aparece onde algo está "sendo escrito" (título do hero, "seu projeto aqui", etapas) e o resultado final dos trabalhos aparece **em fundo claro**: código bruto (escuro) → resultado polido (claro).

## Direções

### A — Fiel

- **Conceito:** Estúdio de software sóbrio: fundo grafite, tipografia grande, muito respiro.
- **Paleta:** `#171717` fundo · `#F2F3F6` texto · `#0F5AFE` marca · `#14306D` apoio — identidade direta.
- **Tipografia:** Poppins (títulos) · Inter (corpo) · Roboto Mono (rótulos).
- **Hero:** headline grande + CTA, grade sutil.
- **Momento assinatura:** nenhum além do preview de links.
- **Componentes do bank:** Reveal, PreviewLinkCard, SectionHeading.
- **Risco:** correto, mas poderia ser de qualquer dev.

### B — Ousada (escolhida)

- **Conceito:** "A página é um arquivo": gutter de linhas + cursor do logo como motivo + virada escuro → claro na seção de trabalhos.
- **Paleta:** `#171717` fundo (código) · `#E7E9EE` papel (resultado) · `#0F5AFE` marca · `#14306D` faixa final · `#6C9AFF` azul de texto em fundo escuro (contraste 5,8:1) · `#0B47CC` azul de texto em fundo claro (6,3:1). O azul puro `#0F5AFE` fica para botões, cursor e detalhes grandes (não passa em texto pequeno).
- **Tipografia:** Poppins 600 (títulos grandes) · Inter (corpo, escolha da marca) · Roboto Mono (rótulos, numeração, wordmark).
- **Hero:** headline em tamanho de cartaz ("Sites e apps com propósito▁") com o cursor piscando, grade blueprint que some nas bordas, um brilho navy discreto no canto; marca no header em primeiro plano.
- **Momento assinatura:** a lista de trabalhos — cada linha é uma frase tipográfica grande e, ao passar o mouse, abre a **prévia do site real** (PreviewLinkCard). Em celular a miniatura aparece embaixo da linha, já que não há hover.
- **Componentes do bank:** `PreviewLinkCard` (pedido do dono; prova que o serviço funciona), `TypingAnimation` (frase de apoio do hero), `Reveal` (entrada sem blur em página longa), `BlurFade` (só no hero), `NumberTicker` ficou de fora de propósito (não há números reais).
- **Risco:** o gutter de linhas só aparece em telas largas; se parecer ruído, dá para remover sem afetar o resto.

### C — Arriscada

- **Conceito:** A página inteira como um `README.md` renderizado: títulos `#`, listas `-`, blocos de código com o preço/escopo de cada plano.
- **Paleta:** `#0D1117`-like grafite, azul marca, verde só em diffs (+/−).
- **Tipografia:** tudo em Roboto Mono, só o hero em Poppins.
- **Hero:** um `git log` real com o histórico de entregas.
- **Momento assinatura:** o scroll "digita" o arquivo.
- **Componentes do bank:** TypingAnimation, CopyButton, GlitchText.
- **Risco:** forte demais para clientes de áreas convencionais — filtra o público errado.

## Escolhida

Direção: **B — Ousada** · Motivo: mantém a leitura fácil para quem não é de tecnologia (tipografia grande, seções claras, CTA fixo no header) e ainda entrega personalidade de dev em detalhes que não atrapalham · Data: 2026-10-06.

## Estrutura da página

1. **Hero** — marca, headline, frase de apoio, linha digitada, CTA WhatsApp + "Ver trabalhos".
2. **Serviços** (`#servicos`) — Presença · One-page · Apps mobile em três colunas separadas por fio (sem cards).
3. **Processo** (`#processo`) — "do briefing à publicação" como histórico de versões (linha vertical com blocos azuis).
4. **Trabalhos** (`#trabalhos`) — fundo claro; cards brancos horizontais (imagem/texto alternando lado) com sombra, botão, tipografia e enfeites de cada cliente; "Visitar site" abre a prévia.
5. **Sobre** (`#sobre`) — foto do Pedro numa moldura de "objeto selecionado" (borda azul, alças, marcas de corte, etiqueta) + texto e três valores.
6. **Contato** (`#contato`) — faixa navy, headline, WhatsApp (Flip Button), redes com ícones (Liquid Button).
7. **Rodapé** — logo, navegação e assinatura.

## Histórico de feedback

| Rodada | Cliente disse | O que mudou | Resultado |
| --- | --- | --- | --- |
| 1 | "Sem ideias de design; só quero o preview de link nos trabalhos. Tech, mas legível para clientes convencionais." | Primeira implementação da direção B. | Ajustar |
| 2 | Tom de vendedor; tirar menção a "amostra do plano"; nada de tecnologia/GitHub Pages; incluir site de casamento; apps sem detalhe técnico; serviços por cenário de uso; trabalhos em cards coloridos com imagem; contato com ícones e botões em destaque. | Copy reescrita em tom explicativo; serviços viraram "Combina com…"; trabalhos viraram cards com as cores de cada site e botão "Visitar site" com prévia; contato com botões Liquid e ícones; regra de conteúdo registrada em `.cursor/rules`. | Ajustar |
| 3 | Bug de quebra de linha com espaço sobrando; cards de trabalhos coloridos ruins, quer o card de serviços da Letz (imagem/texto alternando, fundo branco, detalhes nas cores do cliente); foto no Sobre com moldura tech azul; WhatsApp como Flip Button; tirar número de telefone. | Larguras máximas dos textos ampliadas; cards refeitos com identidade de cada cliente (Letz: sombra rosa deslocada, stickers, serifa pesada; Sonho: fita adesiva, pontilhado, costura tracejada, fonte Aroma Vintage; Casamento: moldura dourada fina, monograma, Great Vibes, botão em caixa alta); foto recortada (`public/pedro.webp`) com moldura de seleção; Flip Button no WhatsApp; número removido. | Aguardando |
