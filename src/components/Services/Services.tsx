import './Services.css'
import livingRoomImg from '../../resource/_LivingRoom_show.jpeg'
import { Link } from 'react-router-dom'

export function Services() {
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
            <span className="section-label">UNITEX DESIGN</span>
            <h2 className="services-title">Curtain Design Services</h2>
            <p className="services-description">
              Unitex provides complimentary in-home curtain design consultations.
              Our expert design consultants bring a wide range of fabric swatches and full-size samples
              directly to your home, allowing you to see, touch, and experience the materials and colors
              in your space's natural lighting.
            </p>
            <p className="services-description">
              This hands-on approach ensures you make the perfect choice for your home's style and ambiance.
              Whether you need guidance on fabric selection, design coordination, or tailored solutions,
              our team offers professional recommendations to create the ideal window treatment for your space.
            </p>
            <p className="services-cta-text">
              Book your free consultation today and discover how Unitex can transform your home with
              personalized window solutions.
            </p>
            <Link to="/services" className="services-cta">
              SEE OUR SERVICES
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

