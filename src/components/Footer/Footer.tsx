import './Footer.css'

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">U</div>
              <span className="logo-text">Unitex Curtain</span>
            </div>
            <p className="footer-tagline">
              Transform your space with Unitex—custom curtains that combine timeless design, 
              expert craftsmanship, and everyday comfort. From free measurement to final installation, 
              we make the process simple, personal, and beautiful.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Design Services</a></li>
                <li><a href="#contact">Book Online</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📞</span>
                  <span>647-897-0424</span>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <span>unitex.curtain@gmail.com</span>
                </li>
                <li>
                  <span className="contact-icon">🕒</span>
                  <span>Mon - Fri : 9am-5pm</span>
                </li>
                <li>
                  <span className="contact-icon">💬</span>
                  <span>Unitexdesign</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 by Unitex Curtain Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

