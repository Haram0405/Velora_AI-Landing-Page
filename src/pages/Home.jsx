import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Trusted from '../components/Trusted.jsx'
import Features from '../components/Features.jsx'
import ChatPreview from '../components/ChatPreview.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Pricing from '../components/Pricing.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Features />
        <ChatPreview />
        <HowItWorks />
        <WhyChoose />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default Home
