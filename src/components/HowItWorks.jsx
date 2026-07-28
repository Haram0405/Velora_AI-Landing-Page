import { motion } from 'framer-motion'
import { steps } from '../data/howItWorks'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="eyebrow mb-3">The Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-secondary text-lg">
            Three simple steps between your question and a smart, ready-to-use answer.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[16.6%] right-[16.6%] h-px bg-borderc" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-button flex items-center justify-center mb-6 shadow-card">
                  <Icon size={26} className="text-button" aria-hidden="true" />
                </div>
                <span className="font-heading text-sm font-semibold text-accent mb-2 tracking-widest">
                  STEP {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
