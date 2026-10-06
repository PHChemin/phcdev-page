import { cn } from "@/lib/utils"

type CursorProps = {
  className?: string
  /** Pisca como no editor. Desligue quando o cursor for só um marcador. */
  blink?: boolean
}

/**
 * O cursor do logo da Phc.Dev: um bloco azul achatado, apoiado na linha de base (como um `_`).
 * Dimensões em `em`, então acompanha o tamanho do texto ao redor.
 */
export function Cursor({ className, blink = true }: CursorProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "ml-[0.08em] inline-block h-[0.1em] w-[0.5em] bg-primary align-baseline",
        blink && "animate-blink-cursor",
        className,
      )}
    />
  )
}
