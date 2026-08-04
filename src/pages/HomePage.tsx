import { Header } from '../components/Header/Header'
import { Gallery } from '../components/Gallery/Gallery'
import { GoogleReviews } from '../components/GoogleReviews/GoogleReviews'
import { BookingCTA } from '../components/BookingCTA/BookingCTA'
import { Products } from '../components/Products/Products'
import { HowItWorks } from '../components/HowItWorks/HowItWorks'
import { About } from '../components/About/About'
import { Services } from '../components/Services/Services'
import { Footer } from '../components/Footer/Footer'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        <GoogleReviews />
        <BookingCTA />
        <Products />
        <HowItWorks />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  )
}
