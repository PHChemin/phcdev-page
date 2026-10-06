import { useEffect, useState } from "react"

/** Tracks the painted page background, not only the `.dark` class. */
export function useDarkBackground() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const sync = () => setDark(backgroundIsDark())
    sync()

    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })

    const scheme = window.matchMedia("(prefers-color-scheme: dark)")
    scheme.addEventListener("change", sync)
    return () => {
      observer.disconnect()
      scheme.removeEventListener("change", sync)
    }
  }, [])

  return dark
}

/** True when the page background is dark, regardless of the `.dark` class. */
export function backgroundIsDark(): boolean {
  if (typeof document === "undefined") return true

  const root = document.documentElement
  if (root.classList.contains("dark")) return true
  if (root.classList.contains("light")) return false

  const painted =
    getComputedStyle(document.body).backgroundColor ||
    getComputedStyle(root).backgroundColor
  const rgb = parseRgb(painted)
  if (!rgb) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255
  return luminance < 0.55
}

function parseRgb(color: string): { r: number; g: number; b: number } | null {
  const rgb = color.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/)
  if (rgb) {
    return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]) }
  }

  const srgb = color.match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/)
  if (srgb) {
    return {
      r: Number(srgb[1]) * 255,
      g: Number(srgb[2]) * 255,
      b: Number(srgb[3]) * 255,
    }
  }

  return null
}
