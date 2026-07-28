import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'

/**
 * Custom animated cursor: a small solid dot that tracks the pointer
 * precisely, plus a larger ring that trails behind with a soft spring.
 * Automatically disabled on touch devices and when the user prefers
 * reduced motion, so it never interferes with mobile/tablet use.
 */
const CustomCursor = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 500, damping: 40, mass: 0.5 })
  const ringY = useSpring(dotY, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(hasFinePointer && !prefersReducedMotion)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const target = e.target
      const interactive = target.closest(
        'a, button, input, textarea, [role="button"], .cursor-pointer'
      )
      setIsPointer(Boolean(interactive))
    }

    const handleLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [enabled, dotX, dotY, isVisible])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-button"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-button/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isPointer ? 46 : 32,
          height: isPointer ? 46 : 32,
          backgroundColor: isPointer ? 'rgba(192, 57, 43, 0.08)' : 'rgba(192, 57, 43, 0)',
        }}
        transition={{
          width: { duration: 0.25, ease: 'easeOut' },
          height: { duration: 0.25, ease: 'easeOut' },
          backgroundColor: { duration: 0.25, ease: 'easeOut' },
          opacity: { duration: 0.2 },
        }}
      />
    </div>
  )
}

export default CustomCursor
