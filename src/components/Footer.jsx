import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const footerNav = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Resources: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#footer' },
  ],
}

const socialLinks = [
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaGithub, label: 'GitHub', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
]

const Footer = () => {
  const handleClick = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer" className="bg-primary text-white pt-20 pb-10">
      <div className="container-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="lg:col-span-2"
          >
            <p className="font-heading text-2xl font-bold mb-4">
              VELORA <span className="text-button">AI</span>
            </p>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              Think Faster. Create Smarter. Velora AI is your intelligent assistant for writing,
              coding, analysis, and everyday productivity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-button flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerNav).map(([section, links]) => (
            <motion.div
              key={section}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              <h4 className="font-semibold mb-5">{section}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Velora AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
