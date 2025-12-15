import { Header } from '../components/Header/Header'
import { Bookpage } from '../components/Bookpage/Bookpage'
import { Footer } from '../components/Footer/Footer'


export function BookPage() {
  return (
    <>
      <Header />
      <main>
        <Bookpage />
      </main>
      <Footer />
    </>
  )
}