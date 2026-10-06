import { useEffect, useRef, useState } from "react"

const LINE_HEIGHT = 28

/**
 * Régua de números de linha, como a margem de um editor de código.
 * Ocupa toda a altura do pai (que precisa ser `relative`) e só aparece em telas largas.
 * Decorativa: `aria-hidden` e sem eventos de ponteiro.
 */
export function LineGutter() {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const parent = ref.current?.parentElement
    if (!parent) return

    const update = () => setCount(Math.floor(parent.offsetHeight / LINE_HEIGHT))
    update()

    const observer = new ResizeObserver(update)
    observer.observe(parent)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-14 border-r border-[rgb(128_128_128/0.18)] select-none min-[1360px]:block"
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          style={{ height: LINE_HEIGHT, lineHeight: `${LINE_HEIGHT}px` }}
          className="pr-3 text-right font-mono text-[11px] text-[rgb(128_128_128/0.5)]"
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
}
