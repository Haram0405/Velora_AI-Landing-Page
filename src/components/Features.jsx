import { motion } from 'framer-motion'
import { features } from '../data/features'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="eyebrow mb-3">What Velora Can Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">One Assistant, Every Task</h2>
          <p className="text-secondary text-lg">
            From writing to code to strategy, Velora AI adapts to what you need — precisely when you need it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group bg-background border border-borderc rounded-xl2 p-8 transition-shadow duration-300 hover:shadow-lift hover:border-accent/60"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-borderc flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon size={26} className="text-button" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
