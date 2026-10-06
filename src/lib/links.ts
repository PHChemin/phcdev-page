/** Placeholder contact URLs. Replace before delivery. */
export const contactEmail = "contato@cliente.com.br"

export const links = {
  whatsapp:
    "https://wa.me/5500000000000?text=" +
    encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações."),
  instagram: "https://www.instagram.com/SEU_USUARIO",
  email: `mailto:${contactEmail}`,
  portfolio: "https://example.com",
} as const

export const nav = [
  { href: "#servicos", id: "servicos", label: "Serviços" },
  { href: "#trabalhos", id: "trabalhos", label: "Trabalhos" },
  { href: "#sobre", id: "sobre", label: "Sobre" },
  { href: "#contato", id: "contato", label: "Contato" },
] as const

export const services = [
  {
    title: "Serviço principal",
    text: "Uma frase sobre o que o cliente entrega e para quem.",
  },
  {
    title: "Segundo diferencial",
    text: "O que muda na prática quando a pessoa escolhe esta marca.",
  },
  {
    title: "Como começar",
    text: "O próximo passo é uma conversa — sem formulário neste stack.",
  },
] as const

export const works = [
  { title: "Projeto um", tag: "Identidade" },
  { title: "Projeto dois", tag: "Site" },
  { title: "Projeto três", tag: "Campanha" },
  { title: "Projeto quatro", tag: "Fotografia" },
  { title: "Projeto cinco", tag: "Evento" },
] as const

export const stats = [
  { value: 12, label: "anos de ofício" },
  { value: 80, label: "projetos entregues" },
  { value: 4, label: "cidades atendidas" },
] as const
