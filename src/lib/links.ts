/** Contatos e conteúdo da Phc.Dev. Pages é estático: contato só via links. */
export const whatsappNumber = "554288673293"
export const whatsappDisplay = "+55 42 8867-3293"

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const links = {
  whatsapp: whatsappLink("Olá, Pedro! Vi o site da Phc.Dev e quero conversar sobre um projeto."),
  instagram: "https://www.instagram.com/phc.dev",
  github: "https://github.com/PHChemin",
  linkedin: "https://www.linkedin.com/in/phchemin/",
} as const

export const nav = [
  { href: "#servicos", id: "servicos", label: "Serviços" },
  { href: "#processo", id: "processo", label: "Processo" },
  { href: "#trabalhos", id: "trabalhos", label: "Trabalhos" },
  { href: "#sobre", id: "sobre", label: "Sobre" },
  { href: "#contato", id: "contato", label: "Contato" },
] as const

export type Plan = {
  id: string
  name: string
  tagline: string
  /** Situações reais em que o serviço faz sentido para o cliente. */
  fits: readonly string[]
  action:
    | { kind: "preview"; label: string; href: string; preview: string; alt: string }
    | { kind: "whatsapp"; label: string; message: string }
}

export const plans: readonly Plan[] = [
  {
    id: "presenca",
    name: "Presença",
    tagline: "Uma página com os seus links principais.",
    fits: [
      "Quem divulga o trabalho no Instagram e quer reunir catálogo, loja e WhatsApp em um só endereço.",
      "Papelarias, confeitarias, salões e prestadores de serviço que atendem pelo celular.",
      "Profissionais que precisam de um cartão de visita digital, simples e fácil de compartilhar.",
    ],
    action: {
      kind: "preview",
      label: "Ver um exemplo",
      href: "https://linktree.phcdev.com.br/",
      preview: "previews/linktree.webp",
      alt: "Prévia de uma página Presença",
    },
  },
  {
    id: "one-page",
    name: "One-page",
    tagline: "Uma página completa para apresentar o seu trabalho.",
    fits: [
      "Profissionais que mostram portfólio, como designers, fotógrafos e arquitetos.",
      "Clínicas, consultórios e escritórios que precisam explicar bem o que oferecem.",
      "Negócios que querem um endereço próprio e uma apresentação mais completa que a rede social.",
    ],
    action: {
      kind: "preview",
      label: "Ver um exemplo",
      href: "https://www.letzdesignstudio.com.br/",
      preview: "previews/letz.webp",
      alt: "Prévia de um site One-page",
    },
  },
  {
    id: "apps",
    name: "Apps mobile",
    tagline: "Um aplicativo para o celular do seu público.",
    fits: [
      "Quem tem uma ideia que funcionaria melhor como aplicativo.",
      "Negócios que querem oferecer catálogo, pedidos ou agendamentos pelo celular.",
      "Equipes que precisam organizar uma rotina interna.",
    ],
    action: {
      kind: "whatsapp",
      label: "Conversar sobre um app",
      message: "Olá, Pedro! Vi o site da Phc.Dev e quero conversar sobre um aplicativo.",
    },
  },
]

export const steps = [
  {
    label: "conversa",
    title: "Entendo o seu negócio",
    text: "Conversamos pelo WhatsApp sobre o que você faz, para quem e o que a página precisa mostrar.",
  },
  {
    label: "visual",
    title: "Defino o visual",
    text: "Cores, tipografia e estilo saem da sua marca e do seu público.",
  },
  {
    label: "desenvolvimento",
    title: "Construo o projeto",
    text: "Monto cada parte com o seu conteúdo e acompanho com você até ficar do jeito certo.",
  },
  {
    label: "publicação",
    title: "Coloco no ar",
    text: "O projeto fica disponível no endereço que você escolher, pronto para celular e computador.",
  },
] as const

export type Work = {
  /** Identidade do cliente aplicada aos detalhes do card (fonte, sombra, botões). */
  brand: "letz" | "sonho" | "casamento"
  name: string
  kind: string
  description: string
  host: string
  href: string
  preview: string
}

export const works: readonly Work[] = [
  {
    brand: "letz",
    name: "Letz Studio",
    kind: "Designer gráfica",
    description:
      "Site completo para apresentar serviços de design: pacotes, templates, trabalhos no Behance e depoimentos de clientes.",
    host: "letzdesignstudio.com.br",
    href: "https://www.letzdesignstudio.com.br/",
    preview: "previews/letz.webp",
  },
  {
    brand: "sonho",
    name: "Sonho de Papel",
    kind: "Papelaria criativa",
    description:
      "Uma página com cara de scrapbook que reúne catálogo, loja na Shopee e WhatsApp em um só link para o Instagram.",
    host: "sonhodepapelartes.com.br",
    href: "https://www.sonhodepapelartes.com.br/",
    preview: "previews/sonho.webp",
  },
  {
    brand: "casamento",
    name: "Helena & Rafael",
    kind: "Site de casamento · demonstração",
    description:
      "Projeto conceito para casais: história, programação do dia, traje, hospedagem, lista de presentes e confirmação de presença.",
    host: "casamento.phcdev.com.br",
    href: "https://casamento.phcdev.com.br/",
    preview: "previews/casamento.webp",
  },
]

export const values = [
  {
    label: "atendimento direto",
    text: "Você conversa sempre comigo, do primeiro contato à entrega.",
  },
  {
    label: "sob medida",
    text: "Cada projeto é pensado para o seu negócio e a sua forma de trabalhar.",
  },
  {
    label: "remoto",
    text: "Atendo clientes de todo o Brasil, com acompanhamento pelo WhatsApp.",
  },
] as const
