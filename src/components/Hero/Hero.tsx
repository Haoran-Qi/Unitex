import './Hero.css'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-image placeholder-image">
          <span>Hero Image</span>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <p className="hero-tagline">Free In-Home Measurement & Design in the Greater Toronto Area!</p>
        <h1 className="hero-title">
          Request Your Custom Drapery & Window Blinds Consultation Today!
        </h1>
        <p className="hero-subtitle">
          Not sure where to start? Fill out the form and we can take it from there.
        </p>
        <a href="#contact" className="hero-cta">
          Start Now
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

