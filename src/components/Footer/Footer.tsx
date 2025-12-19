import { useTranslation } from 'react-i18next'
import './Footer.css'
import oekoTexImg from '../../resource/Oeko_tex.svg.png'
import mechImg from '../../resource/MECH_BlogImag.png'
import sgsImg from '../../resource/SGS.jpg'
import wechatIcon from '../../resource/wechat.png'

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
            <div className="footer-certifications">
              <div className="footer-cert-item">
                <img src={oekoTexImg} alt="Oeko-Tex Certification" />
              </div>
              <div className="footer-cert-item">
                <img src={mechImg} alt="MECH Certification" />
              </div>
              <div className="footer-cert-item">
                <img src={sgsImg} alt="SGS Certification" />
              </div>
            </div>
          </div>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6715231934973!2d-79.39857832381325!3d43.84190837109376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b12c5bfed01%3A0x4bc30e3d92b8e189!2sUnitex%20Design%20%E2%80%93%20Curtains%20%26%20Blinds!5e0!3m2!1sen!2sca!4v1766113167927!5m2!1sen!2sca"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unitex Location"
            ></iframe>
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
                <img src={wechatIcon} alt="WeChat" className="contact-icon-img" />
                <span>Unitexdesign</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
