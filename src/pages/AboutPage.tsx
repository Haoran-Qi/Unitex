import { Header } from '../components/Header/Header'
import { Aboutpage } from '../components/Aboutpage/Aboutpage'
import { About } from '../components/About/About'
import { Footer } from '../components/Footer/Footer'


export function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Aboutpage />
      </main>
      <Footer />
    </>
  )
}