import './Services.css'
import pic from '../../images/livingroom.avif'

export function Services() {
  return (
    <section id="services" className="services">
      <div className="services-background">
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
            <a href="#contact" className="services-cta">
              SEE OUR SERVICES
            </a>
          </div>

          <div className="services-image">
              <img src={pic} />
          </div>
        </div>
      </div>
    </section>
  )
}

