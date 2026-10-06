---
name: design-landing
description: Fluxo de direção de arte e implementação visual de landings de clientes neste template (Vite + React + Tailwind). Transforma o tema do cliente em conceito visual, propõe direções contrastantes, implementa e verifica com prints. Usar ao personalizar o template para um cliente, criar ou refazer o visual de uma landing, quando o usuário pedir "seja criativo", ou ao aplicar feedback visual do cliente.
---

# Design de landing para cliente

Objetivo: um site que **só poderia ser deste cliente**. Criativo, mas nascido do tema — não decoração aplicada por cima.

O cliente quase nunca sabe responder perguntas visuais. Isso é normal: **não bloqueie esperando respostas**. Infira a partir do segmento, público, região e faixa de preço, declare as hipóteses e proponha. O processo é tentativa e erro com o cliente; o trabalho aqui é tornar cada tentativa intencional e fácil de ajustar.

## Fluxo

```
- [ ] 1. Ler contexto e listar lacunas
- [ ] 2. Garimpar o universo do tema
- [ ] 3. Propor 3 direções em docs/ART_DIRECTION.md
- [ ] 4. Implementar a direção escolhida
- [ ] 5. Verificar com prints e criticar
- [ ] 6. Entregar com apostas explícitas
```

### 1. Ler contexto

Ler `docs/CLIENT_BRIEF.md`, `docs/PRD.md`, `docs/ART_DIRECTION.md` (se já houver), `docs/REFERENCES.md` e `docs/UI_GUIDANCE.md`.

Campo vazio não é bloqueio. Para cada lacuna relevante, escreva uma hipótese curta ("Público provável: mães 30–45 do bairro, buscam confiança → tom acolhedor, nada de luxo frio"). Só pergunte ao usuário o que for impossível inferir e mudaria tudo (ex.: o nome da marca).

### 2. Garimpar o universo do tema

Antes de pensar em cor ou componente, liste o **mundo concreto** do cliente — 5 a 10 itens por linha:

- **Objetos e ferramentas** do ofício
- **Materiais e texturas** (papel, aço, farinha, couro, azulejo…)
- **Gestos e processos** (sovar, costurar, medir, polir…)
- **Lugares e luz** (balcão às 6h, consultório com janela, oficina com néon…)
- **Vocabulário e jargão** do segmento e da região
- **O que o cliente faz diferente** dos concorrentes

Escolha **uma ideia central** que vire o conceito. Ex.: confeitaria artesanal → "receita de família anotada à mão". Daí saem tipografia, textura, movimento e microcopy.

Para pontos de partida por segmento, ver [theme-translation.md](theme-translation.md). São sementes, não receitas — a direção ousada deve subverter ao menos um clichê do segmento.

### 3. Propor 3 direções

Preencher `docs/ART_DIRECTION.md` com três direções **realmente diferentes** entre si (não três tons da mesma ideia):

| Direção | Papel |
| --- | --- |
| **Fiel** | O que o segmento espera, feito com capricho. Baixo risco. |
| **Ousada** | Um passo além: um elemento inesperado, mas ainda óbvio para o público. **Recomendação padrão.** |
| **Arriscada** | Aposta forte de conceito. Pode não passar, mas mostra ao cliente o que é possível e destrava a conversa. |

Cada direção precisa de: conceito em uma frase, paleta (hex + por quê), par tipográfico (Google Fonts), o que ocupa o hero, **momento assinatura** (uma coisa memorável), 2–3 componentes do bank com o motivo, e qual é o risco.

Se o usuário pediu para implementar direto, siga a recomendada e registre as outras duas como alternativas. Caso contrário, apresente as três (prefira `AskQuestion`) e espere a escolha.

### 4. Implementar

Ordem:

1. Tokens em `src/styles/main.css` (`@theme` e `:root`) e fontes no `index.html`.
2. Hero primeiro, até estar forte. Depois as seções.
3. Componentes: escolher pelo clima em `src/components/README.md` (seção "Escolha por clima"). Ajustar cor, velocidade e densidade ao conceito — efeito com valores default denuncia template.
4. Microcopy no tom da marca (botões, eyebrows, rodapé). Texto genérico ("Saiba mais", "Nossos serviços") desperdiça a chance de reforçar o conceito.

### 5. Verificar com prints

Não entregue sem olhar. Rodar `npm run dev` (porta padrão 5173) e usar o navegador do Cursor para tirar prints em **390px** (mobile) e **1440px** (desktop): primeiro viewport e página inteira.

Criticar com estes testes:

- **Teste da marca coberta:** escondendo nome e logo, dá para adivinhar o segmento? Se não, falta tema.
- **Teste da troca:** trocando só os textos, serviria para outro cliente? Se sim, está genérico — reforçar o conceito.
- **Teste do momento assinatura:** existe uma coisa que o visitante lembraria? Ela aparece no primeiro viewport ou logo depois?
- **Teste do ruído:** algum efeito está ali só porque existe no bank? Remover.
- Checklist de `docs/UI_GUIDANCE.md` (contraste, CTA no polegar, sem chips no hero).

Corrigir e tirar novos prints. Pelo menos uma rodada de ajuste antes de entregar.

### 6. Entregar

Resumo curto com: conceito escolhido, prints (mobile e desktop), **o que é aposta** e merece validação com o cliente, e as alternativas prontas caso ele não goste.

## Iterando com feedback do cliente

Feedback de cliente costuma ser vago ("achei sem graça", "quero mais moderno"). Traduza para mudanças concretas usando [theme-translation.md](theme-translation.md) (seção "Traduzindo feedback").

- Feedback vago → mude **uma ou duas variáveis** por rodada (ex.: só tipografia), para descobrir o que ele realmente sente.
- "Não gostei" sem motivo → mostre uma das direções alternativas em vez de remendar a atual.
- Registre cada rodada no "Histórico de feedback" de `docs/ART_DIRECTION.md`: o que ele disse, o que foi mudado, se aprovou.
- Quando algo aprovado funcionar bem, sugerir ao usuário registrar em `docs/REFERENCES.md`.

## Onde arriscar e onde não

| Pode arriscar | Não negociar |
| --- | --- |
| Paleta, par tipográfico, composição do hero | Legibilidade e contraste |
| Textura, ilustração, grafismo do segmento | Contato (WhatsApp/e-mail) visível e funcionando |
| Movimento e micro-interações com conceito | Mobile usável com o polegar |
| Microcopy com personalidade | `prefers-reduced-motion` respeitado |
| Layout fora do padrão "hero + 3 cards" | Performance (sem vídeo pesado, imagens otimizadas) |
