import { useEffect, useState } from 'react'

/**
 * Returns true if the user's OS/browser has requested reduced motion.
 * Used to gate JS-driven decorative effects (custom cursor, preloader
 * animation, floating blobs) that CSS alone can't fully suppress.
 */
export const usePrefersReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mediaQuery.matches)

    const handleChange = (e) => setPrefersReduced(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReduced
}
