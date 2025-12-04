import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Header.css'
import logoImg from '../../resource/U.png'

type Language = 'en' | 'zh'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const languages = [
    { code: 'en' as Language, label: 'English', flag: '🇨🇦' },
    { code: 'zh' as Language, label: '中文', flag: '🇨🇳' },
  ]

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  const navLinks = [
    { path: '/', labelKey: 'header.nav.home' },
    { path: '/about', labelKey: 'header.nav.about' },
    { path: '/services', labelKey: 'header.nav.services' },
    { path: '/book', labelKey: 'header.nav.book' },
    { path: '/contact', labelKey: 'header.nav.contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleLanguageSelect = (code: Language) => {
    i18n.changeLanguage(code)
    setIsLangOpen(false)
  }

  return (
    <header className="header">
      <div className="header-banner" style={{ fontFamily: 'adobe-caslon-w01-smbd,serif', fontSize: '16px' }}>
        <span className="banner-text">
          {t('header.banner')}
        </span>
        <div className="language-selector">
          <button 
            className="lang-dropdown-btn"
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="Select language"
          >
            <span>{currentLang.flag} {currentLang.label}</span>
            <span className={`lang-arrow ${isLangOpen ? 'lang-arrow--open' : ''}`}>▼</span>
          </button>
          {isLangOpen && (
            <div className="lang-dropdown">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`lang-option ${i18n.language === lang.code ? 'lang-option--active' : ''}`}
                  onClick={() => handleLanguageSelect(lang.code)}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Unitex" className="logo-icon" />
          <span className="logo-text">Unitex Design</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <ul className="nav-list" style={{ 
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#000',
            letterSpacing: '0.05em',
            fontFamily: 'adobe-caslon-w01-smbd,serif',
            fontSize: '18px'
          }}>
            {navLinks.map((link) => (
              <li key={link.labelKey}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'nav-link--active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
