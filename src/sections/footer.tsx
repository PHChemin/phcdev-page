import { links, nav } from "@/lib/links"
import { asset } from "@/lib/asset"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <img src={asset("logo-wordmark.png")} alt="Phc.Dev" width={900} height={189} className="h-6 w-auto" />
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {nav.map((item) => (
            <a key={item.id} href={item.href} className="inline-flex min-h-8 items-center hover:text-foreground">
              {item.label}
            </a>
          ))}
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center hover:text-foreground">
            Instagram
          </a>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-4 font-mono text-xs text-muted-foreground md:px-8">
          © {year} Phc.Dev · cada linha tem um propósito.
        </p>
      </div>
    </footer>
  )
}
