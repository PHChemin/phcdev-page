# UI Guidance

Diretrizes visuais para landings deste esqueleto. Leia junto com o `PRD.md` e o `ART_DIRECTION.md` do cliente.
O processo completo (do tema aos prints) está na skill `.cursor/skills/design-landing/`.

## Criatividade alinhada ao tema

O site deve **só poder ser deste cliente**. Criatividade aqui não é somar efeitos — é tirar a forma do próprio ofício.

1. **Conceito antes de componente** — uma ideia central vinda do mundo do cliente (ex.: "ficha de ordem de serviço" para uma oficina). Cor, fonte, textura, movimento e microcopy saem dela.
2. **Use um suporte físico do segmento como estrutura** — cardápio, receita, prancha técnica, caderno, etiqueta. Isso dá personalidade sem cair em cards genéricos.
3. **Um momento assinatura** — uma coisa memorável por página, de preferência no primeiro viewport. Só uma.
4. **Subverta um clichê do segmento** — saiba qual é o clichê (balança na advocacia, cérebro na psicologia) e faça outra coisa de propósito.
5. **Personalize os efeitos** — cor, velocidade e densidade ajustadas ao conceito. Efeito com valores default denuncia template.
6. **Microcopy com voz** — botões e títulos no tom da marca, não "Saiba mais" / "Nossos serviços".
7. **Cliente não sabe responder? Proponha.** Hipóteses explícitas + direções contrastantes para ele reagir.

## Princípios de composição (sempre)

1. **Uma composição no primeiro viewport** — marca + 1 headline + 1 frase + 1 grupo de CTA + visual dominante.
2. **Marca em primeiro plano** — se remover o nav, ainda dá para saber de quem é o site.
3. **Hero full-bleed** — fundo/efeito de borda a borda; sem cards flutuando no hero.
4. **Uma função por seção** — um título, uma frase de apoio.
5. **Poucos cards** — só se forem necessários para interação.
6. **Movimento com intenção** — 2–3 animações com propósito (BlurFade, TypingAnimation, Particles…), não ruído.

## Tipografia

- Defina display ≠ corpo em `@theme` (`src/styles/main.css`); fontes no `index.html`.
- A fonte de display é a maior alavanca de personalidade — escolha pelo conceito, não pela moda.
- Evite stacks default como face principal de marca: Inter, Roboto, Arial, system-ui.
- O demo usa Syne + DM Sans + IBM Plex Mono — troque por cliente.

## Cor e clima

- Ajuste `--color-brand`, `--primary` e tokens shadcn em `main.css`.
- Tire a paleta do mundo do cliente (fachada, uniforme, materiais do ofício), não de uma paleta pronta.
- Evitar clichês: roxo/indigo genérico; cream + serif + terracotta "AI default"; glow; pills demais.

## Kits de UI

- Prefira componentes já em `src/components/` — escolha pela seção "Escolha por clima" do README da pasta.
- Não sobrecarregue a página com todo o bank — escolha 2–4 efeitos.

## Contato

Botões claros para WhatsApp / e-mail / rede. Sem formulário server-side neste stack.

## Checklist antes de entregar

Verificar com prints reais (390px e 1440px), não de cabeça.

- [ ] Teste da marca coberta: sem nome/logo, dá para adivinhar o segmento
- [ ] Teste da troca: trocando só os textos, **não** serviria para outro cliente
- [ ] Momento assinatura presente e visível cedo
- [ ] Tokens de cor/fonte ajustados ao cliente
- [ ] Placeholders de texto/links removidos
- [ ] Contraste legível
- [ ] Mobile: CTAs usáveis com o polegar
- [ ] Sem chips/overlays decorativos soltos no hero
- [ ] Nenhum efeito só porque existe no bank
