import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './BookingCTA.css'

export function BookingCTA() {
  const { t } = useTranslation()

  return (
    <section className="booking-cta">
      <div className="booking-cta-container">
        <h2 className="booking-cta-title">
          {t('booking.title')}
        </h2>
        <p className="booking-cta-subtitle">
          {t('booking.subtitle')}
        </p>
        <Link to="/book" className="booking-cta-button">
          {t('booking.button')}
        </Link>
      </div>
    </section>
  )
}

