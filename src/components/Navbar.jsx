import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { useActiveSection } from '../hooks/useActiveSection.js'

const sectionIds = navLinks.map((link) => link.href)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <nav
        className={`container-section flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-3.5' : 'py-5'
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-heading text-xl md:text-2xl font-bold tracking-wide text-primary"
        >
          VELORA <span className="text-button">AI</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeId === link.href
            return (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-button rounded-full"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="btn-primary"
            aria-label="Get Started with Velora AI"
          >
            Get Started
          </a>
        </div>

        <button
          className="lg:hidden text-primary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white overflow-hidden shadow-card"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => {
                const isActive = activeId === link.href
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block py-3 font-medium border-b border-borderc/60 transition-colors duration-200 ${
                        isActive ? 'text-button' : 'text-secondary hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li className="pt-4">
                <a
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, '#pricing')}
                  className="btn-primary w-full"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
