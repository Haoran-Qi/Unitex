import { useTranslation } from 'react-i18next'
import './About.css'
import schoolImg from '../../resource/School.jpeg'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src={schoolImg} alt="Unitex Textile School" />
            <div className="about-image-accent"></div>
          </div>

          <div className="about-content">
            <span className="section-label">{t('about.label')}</span>
            <h2 className="about-title">
              {t('about.title')}
            </h2>
            <a href="#services" className="about-link">
              {t('about.link')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

