import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Footer.css'
import icon1 from '../../resource/Oeko_tex_-_umbrella_brand_-_11_2022.svg.png'
import icon2 from '../../resource/071420_MECH_BlogImage_03.png'
import icon3 from '../../resource/v2-cdb7f7cd361e2cd08085f92096e18425_720w.jpg'


const icons = [
  {
    id:1 ,
    image:icon1,
  },
  {
    id:2 ,
    image:icon2,
  },
  {
    id:3 ,
    image:icon3,
  }
]



export function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
            <div className="footer-logo">
              {icons.map((icon, index) => (
              <div className="logo-icon">
                <img src={icon.image}/>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('footer.company')}</h4>
              <ul>
                <li><Link to="/">{t('header.nav.home')}</Link></li>
                <li><Link to="/about">{t('header.nav.about')}</Link></li>
                <li><Link to="/services">{t('header.nav.services')}</Link></li>
                <li><Link to="/book">{t('header.nav.book')}</Link></li>
                <li><Link to="/contact">{t('header.nav.contact')}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>{t('footer.contact_info')}</h4>
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
                  <span>{t('footer.hours')}</span>
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
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
