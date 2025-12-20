import './Services.css'
import livingRoomImg from '../../resource/_LivingRoom_show.jpeg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Services() {

  const { t } = useTranslation()

  return (
    <section id="services" className="services">
      <div className="services-background">
        <div className="placeholder-image services-placeholder">
          <span>Services Background Image</span>
        </div>
        <div className="services-overlay"></div>
      </div>

      <div className="container">
        <div className="services-grid">
          <div className="services-content">
            <span className="section-label">
              {t('services.label')}
            </span>
            <h2 className="services-title">
              {t('services.title')}
            </h2>
            <p className="services-description">
              {t('services.description1')}
            </p>
            <p className="services-description">
              {t('services.description2')}
            </p>
            <p className="services-cta-text">
              {t('services.cta_text')}
            </p>
            <Link to="/services" className="services-cta">
              {t('services.cta_button')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="services-image">
            <img src={livingRoomImg} alt="Living Room with Curtains" />
          </div>
        </div>
      </div>
    </section>
  )
}

