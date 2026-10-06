import { LineGutter } from "@/components/site/line-gutter"
import { SiteHeader } from "@/components/site/site-header"
import { WhatsAppCta } from "@/components/site/whatsapp-cta"
import { asset } from "@/lib/asset"
import { nav } from "@/lib/links"
import { About } from "@/sections/about"
import { Contact } from "@/sections/contact"
import { Footer } from "@/sections/footer"
import { Hero } from "@/sections/hero"
import { Process } from "@/sections/process"
import { Services } from "@/sections/services"
import { Works } from "@/sections/works"

export default function App() {
  return (
    <div className="relative bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>

      <LineGutter />

      <SiteHeader
        brand={
          <img src={asset("logo-wordmark.png")} alt="Phc.Dev" width={900} height={189} className="h-6 w-auto" />
        }
        links={nav}
        cta={<WhatsAppCta size="md" label="Fale comigo" />}
      />

      <main id="conteudo">
        <Hero />
        <Services />
        <Process />
        <Works />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
