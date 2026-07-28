import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, so the Navbar can highlight the matching link. Falls back
 * gracefully if a section id isn't found in the DOM yet.
 */
export const useActiveSection = (sectionIds = []) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most visible right now.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(`#${visible[0].target.id}`)
        }
      },
      {
        // Bias the trigger zone toward the upper-middle of the viewport
        // so a section is marked active once it's meaningfully on screen.
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
