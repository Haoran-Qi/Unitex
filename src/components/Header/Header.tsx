import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logoImg from '../../resource/U.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Design Services' },
    { path: '/book', label: 'Book Online' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="header-banner" style={{ fontFamily: 'adobe-caslon-w01-smbd,serif', fontSize: '16px' }}>
        Free In-Home Measurement & Design in the Greater Toronto Area! Book Now!
      </div>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Unitex" className="logo-icon" />
          <span className="logo-text">Unitex Curtain</span>
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
              <li key={link.label}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'nav-link--active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
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
