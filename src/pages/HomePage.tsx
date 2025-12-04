import { Header } from '../components/Header/Header'
import { Gallery } from '../components/Gallery/Gallery'
import { Hero } from '../components/Hero/Hero'
import { Products } from '../components/Products/Products'
import { HowItWorks } from '../components/HowItWorks/HowItWorks'
import { About } from '../components/About/About'
import { Testimonials } from '../components/Testimonials/Testimonials'
import { Services } from '../components/Services/Services'
import { Footer } from '../components/Footer/Footer'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        <Hero />
        <Products />
        <HowItWorks />
        <About />
        <Testimonials />
        <Services />
      </main>
      <Footer />
    </>
  )
}
