import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

const cropMarks = [
  "-top-4 -left-4 border-t border-l",
  "-top-4 -right-4 border-t border-r",
  "-bottom-4 -left-4 border-b border-l",
  "-bottom-4 -right-4 border-b border-r",
] as const

const handles = [
  "top-0 left-0",
  "top-0 left-1/2",
  "top-0 left-full",
  "top-1/2 left-0",
  "top-1/2 left-full",
  "top-full left-0",
  "top-full left-1/2",
  "top-full left-full",
] as const

type SelectionFrameProps = {
  children: ReactNode
  /** Nome exibido na etiqueta, como uma camada selecionada num editor. */
  label: string
  /** Texto do canto inferior (ex.: dimensões). */
  meta?: string
  className?: string
}

/** Moldura de "objeto selecionado": borda azul, alças nos cantos e etiqueta. */
export function SelectionFrame({ children, label, meta, className }: SelectionFrameProps) {
  return (
    <figure className={cn("group/frame relative", className)}>
      <div className="relative">
        {children}
        {cropMarks.map((position) => (
          <span
            key={position}
            aria-hidden
            className={cn("pointer-events-none absolute size-5 border-primary/60", position)}
          />
        ))}
        <span aria-hidden className="pointer-events-none absolute inset-0 border border-primary" />
        {handles.map((position) => (
          <span
            key={position}
            aria-hidden
            className={cn(
              "pointer-events-none absolute size-2.5 -translate-x-1/2 -translate-y-1/2 border border-primary bg-background transition-transform duration-300 group-hover/frame:scale-125",
              position,
            )}
          />
        ))}
      </div>

      <figcaption className="pointer-events-none absolute -top-9 left-0 flex items-center gap-2 font-mono text-xs">
        <span className="bg-primary px-2 py-1 text-primary-foreground">{label}</span>      </figcaption>
      {meta ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 bg-primary px-2 py-1 font-mono text-[11px] text-primary-foreground"
        >
          {meta}
        </span>
      ) : null}
    </figure>
  )
}
