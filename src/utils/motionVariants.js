// Shared Framer Motion variants for consistent, staggered scroll-reveal
// animations across every section. Import and spread into motion props.

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Wrap a group of children with this to stagger their entrance.
// Pass `staggerContainer(0.12)` as the `variants` prop on the parent,
// and `fadeUp` (or similar) on each child.
export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// Common viewport config so every section reveals once, slightly before
// it's fully in view.
export const viewportOnce = { once: true, amount: 0.2 }
