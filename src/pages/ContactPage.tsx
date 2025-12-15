import { Header } from '../components/Header/Header'
import { Contact } from '../components/Contact/Contact'
import { BookingCTA } from '../components/BookingCTA/BookingCTA'
import { Chat } from '../components/Chat/Chat'
import { Footer } from '../components/Footer/Footer'

export function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
        <BookingCTA />
        <Chat />
      </main>
      <Footer />
    </>
  )
}