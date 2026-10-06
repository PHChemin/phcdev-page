import { useEffect, useState } from "react"

/** Highlights the nav item whose section currently crosses the viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState("")
  const key = ids.join("\0")

  useEffect(() => {
    const elements = key
      .split("\0")
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const id = visible[0]?.target.id
        if (id) setActive(id)
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
