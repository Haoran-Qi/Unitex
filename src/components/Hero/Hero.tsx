import { useTranslation } from 'react-i18next'
import './Hero.css'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>  
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <a href="#contact" className="hero-cta">
          {t('hero.cta')}
        </a>
      </div>     
    </section>
  )
}