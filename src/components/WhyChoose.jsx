import { motion } from 'framer-motion'
import { whyChooseItems } from '../data/whyChoose'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

const WhyChoose = () => {
  return (
    <section className="section-padding bg-section">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="eyebrow mb-3">The Advantage</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Velora</h2>
          <p className="text-secondary text-lg">
            Built for people who need reliable, thoughtful AI assistance without the friction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-xl2 p-8 border border-borderc shadow-card transition-shadow duration-300 hover:shadow-lift hover:border-accent/60"
              >
                <div className="w-12 h-12 rounded-xl bg-section flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon size={22} className="text-button" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
