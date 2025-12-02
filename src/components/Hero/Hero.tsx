import { useTranslation } from 'react-i18next'
import './Hero.css'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-image placeholder-image">
          <span>Hero Image</span>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <h1 className="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <a href="#contact" className="hero-cta">
          {t('hero.cta')}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <span>{t('hero.scroll')}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
