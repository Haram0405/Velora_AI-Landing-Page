import { motion } from 'framer-motion'

const companies = ['NovaTech', 'Cloudify', 'PixelLab', 'OpenSoft', 'CodeNest', 'Innova']
const loopCompanies = [...companies, ...companies]

const Trusted = () => {
  return (
    <section className="py-16 bg-background border-y border-borderc/70">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-secondary text-sm md:text-base font-medium tracking-wide mb-10"
      >
        Trusted by innovative teams
      </motion.p>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-16">
          {loopCompanies.map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="font-heading text-2xl md:text-3xl font-semibold text-primary/30 select-none whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trusted
