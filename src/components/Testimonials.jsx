import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const AUTOPLAY_MS = 6000

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = (nextIndex, dir) => {
    setDirection(dir)
    setIndex((nextIndex + testimonials.length) % testimonials.length)
  }

  const goNext = () => goTo(index + 1, 1)
  const goPrev = () => goTo(index - 1, -1)

  // Autoplay, paused on hover/focus so readers aren't rushed.
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [isPaused])

  const t = testimonials[index]

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Teams Everywhere</h2>
          <p className="text-secondary text-lg">
            Real feedback from people using Velora AI to move faster every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="relative max-w-3xl mx-auto"
        >
          <div className="relative bg-background border border-borderc rounded-xl2 shadow-card px-8 py-12 md:px-16 md:py-16 overflow-hidden">
            <Quote size={48} className="text-accent/70 mb-6" aria-hidden="true" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-button fill-button" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-primary text-xl md:text-2xl font-heading leading-relaxed mb-8">
                  &ldquo;{t.review}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-borderc">
                  <div className="w-14 h-14 rounded-full bg-button/10 text-button font-heading font-semibold flex items-center justify-center text-lg flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-secondary">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-borderc bg-white hover:border-button hover:text-button flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-button' : 'w-2 bg-borderc hover:bg-accent'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-borderc bg-white hover:border-button hover:text-button flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
