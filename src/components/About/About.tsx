import './About.css'
import pic from '../../images/Aboutus.avif'

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src={pic} />
            <div className="about-image-accent"></div>
          </div>
          
          <div className="about-content">
            <h1 className="about-label">ABOUT US</h1>
            <h2 className="about-title">
              With roots in a 1970 textile school, Unitex is now led by third-generation—bringing sustainable, made-to-measure curtains to homes across Toronto.
            </h2>
            <div className="about-box">
              <a href="#services" className="about-link">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

