import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Full-screen preloader shown briefly on first load. Fades out once the
 * page has settled (or a minimum display time has elapsed), so the logo
 * doesn't just flash. Respects reduced-motion by skipping the loading
 * animation and dismissing almost immediately.
 */
const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const minDisplayTime = prefersReducedMotion ? 150 : 1100
    let timer = setTimeout(() => setIsLoading(false), minDisplayTime)

    const handleLoad = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setIsLoading(false), prefersReducedMotion ? 0 : 300)
    }

    if (document.readyState !== 'complete') {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-button/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                style={{ borderTopColor: '#C0392B' }}
              />
              <span className="font-heading text-xl font-bold text-primary">V</span>
            </div>

            <p className="font-heading text-lg md:text-xl font-semibold tracking-wide text-primary">
              VELORA <span className="text-button">AI</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
