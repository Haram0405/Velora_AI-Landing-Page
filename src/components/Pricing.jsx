import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '../data/pricing'

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-section">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="eyebrow mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-secondary text-lg">
            Choose the plan that fits how you work. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={plan.highlighted ? { y: -10 } : { y: -10, scale: 1.02 }}
              className={`relative rounded-xl2 p-8 flex flex-col h-full transition-shadow duration-300 ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-lift lg:scale-105 z-10'
                  : 'bg-white border border-borderc shadow-card hover:shadow-lift hover:border-accent/60'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-button text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className={`text-xl font-semibold mb-1 ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/60' : 'text-secondary'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-white/60' : 'text-secondary'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      className={plan.highlighted ? 'text-accent flex-shrink-0 mt-0.5' : 'text-button flex-shrink-0 mt-0.5'}
                      aria-hidden="true"
                    />
                    <span className={plan.highlighted ? 'text-white/85' : 'text-secondary'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#footer"
                className={
                  plan.highlighted
                    ? 'inline-flex items-center justify-center bg-button hover:bg-button-hover text-white font-medium px-6 py-3.5 rounded-full transition-colors duration-300 w-full'
                    : 'inline-flex items-center justify-center border border-borderc hover:border-primary text-primary font-medium px-6 py-3.5 rounded-full transition-colors duration-300 w-full'
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
