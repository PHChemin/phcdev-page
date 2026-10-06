import { useEffect, useRef, useState, type ReactNode } from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { useActiveSection } from "@/lib/use-active-section"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export type SiteNavItem = {
  href: string
  id: string
  label: string
}

type SiteHeaderProps = {
  brand: ReactNode
  links: readonly SiteNavItem[]
  cta?: ReactNode
  /** Hide the bar while scrolling down and show it again on the way up. */
  hideOnScroll?: boolean
  menuLabel?: string
  menuDescription?: string
}

function useScrollHidden(enabled: boolean) {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    if (!enabled) return
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      if (y < 48) setHidden(false)
      else if (delta > 6) setHidden(true)
      else if (delta < -6) setHidden(false)
      lastY.current = y
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [enabled])

  return enabled && hidden
}

export function SiteHeader({
  brand,
  links,
  cta,
  hideOnScroll = true,
  menuLabel = "Menu",
  menuDescription = "Navegue pelas seções",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map((item) => item.id))
  const hidden = useScrollHidden(hideOnScroll)

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={cn(
          "border-b border-border bg-background/85 backdrop-blur-md transition-transform duration-300",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
          <a
            href="#conteudo"
            className="inline-flex h-11 min-w-0 items-center text-foreground"
          >
            {brand}
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Seções">
            {links.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-[3px] bg-primary transition-all duration-300",
                      isActive ? "w-4" : "w-0",
                    )}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            {cta ? <div className="hidden md:block">{cta}</div> : null}

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-3.5 text-sm font-medium text-foreground md:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-4" aria-hidden />
                {menuLabel}
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100%,20rem)]">
                <SheetHeader>
                  <SheetTitle>{menuLabel}</SheetTitle>
                  <SheetDescription>{menuDescription}</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-3" aria-label="Seções">
                  {links.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        aria-current={active === item.id ? "true" : undefined}
                        className={cn(
                          "flex min-h-12 items-center rounded-md px-3 text-base",
                          active === item.id
                            ? "bg-secondary text-foreground"
                            : "text-foreground hover:bg-muted",
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                {cta ? (
                  <SheetFooter>
                    <SheetClose asChild>{cta}</SheetClose>
                  </SheetFooter>
                ) : null}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
