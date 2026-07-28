import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Slim progress bar fixed to the very top of the viewport, filling left
 * to right as the user scrolls through the page. Uses a spring for a
 * smooth, non-jittery fill.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-button origin-left z-[60]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
