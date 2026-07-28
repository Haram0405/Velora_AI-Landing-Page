import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-button">
      <div className="container-section text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Experience Smarter AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
        >
          Join thousands of users already thinking faster and creating smarter with Velora AI.
        </motion.p>
        <motion.a
          href="#pricing"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-white text-button font-semibold px-8 py-4 rounded-full shadow-lift hover:bg-background transition-colors duration-300"
        >
          Start Free
          <ArrowRight size={18} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  )
}

export default CTA
