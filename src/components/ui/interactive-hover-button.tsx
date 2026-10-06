import { ArrowRight } from "lucide-react"
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

type InteractiveHoverButtonProps<T extends ElementType = "button"> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">

export function InteractiveHoverButton<T extends ElementType = "button">({
  as,
  children,
  className,
  ...props
}: InteractiveHoverButtonProps<T>) {
  const Comp = as ?? "button"

  return (
    <Comp
      className={cn(
        "group relative inline-flex min-h-11 w-auto cursor-pointer items-center justify-center overflow-hidden rounded-md border border-border bg-card px-6 py-2.5 text-center font-semibold text-foreground",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2 transition-all duration-300 [@media(hover:hover)]:group-hover:translate-x-3 [@media(hover:hover)]:group-hover:opacity-0">
        <span className="size-2 shrink-0 rounded-full bg-primary" />
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 z-10 flex translate-x-3 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 [@media(hover:hover)]:group-hover:translate-x-0 [@media(hover:hover)]:group-hover:opacity-100"
      >
        <span>{children}</span>
        <ArrowRight className="size-4" />
      </span>
      <span
        aria-hidden
        className="absolute inset-0 z-0 origin-left scale-x-0 bg-primary transition-transform duration-300 [@media(hover:hover)]:group-hover:scale-x-100"
      />
    </Comp>
  )
}
