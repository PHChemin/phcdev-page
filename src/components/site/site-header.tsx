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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div
        className={cn(
          "mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 pt-4 transition-all duration-300 md:px-6 md:pt-5",
          hidden
            ? "pointer-events-none -translate-y-3 opacity-0"
            : "pointer-events-auto translate-y-0 opacity-100",
        )}
      >
        <a
          href="#conteudo"
          className="inline-flex h-11 min-w-0 items-center rounded-full border border-border bg-background/80 px-4 text-sm font-semibold text-foreground backdrop-blur-md"
        >
          {brand}
        </a>

        <nav
          className="hidden h-11 items-center gap-1 rounded-full border border-border bg-background/80 px-1.5 backdrop-blur-md md:flex"
          aria-label="Seções"
        >
          {links.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {cta ? <div className="hidden md:block">{cta}</div> : null}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background/80 px-4 text-sm font-medium text-foreground backdrop-blur-md md:hidden"
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
                      "rounded-lg px-3 py-3 text-base",
                      active === item.id
                        ? "bg-primary text-primary-foreground"
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
    </header>
  )
}
