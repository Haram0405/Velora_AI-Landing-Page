import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faq'

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-borderc">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-primary text-base md:text-lg">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-button"
        >
          <ChevronDown size={20} aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-secondary leading-relaxed pb-6 pr-8">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-section max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-secondary text-lg">Everything you need to know about Velora AI.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
