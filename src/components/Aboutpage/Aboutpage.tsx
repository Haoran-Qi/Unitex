import './Aboutpage.css'

export function Aboutpage() {
  return (
    <section id="aboutpage" className="aboutpage">
      <div className="container">
        <div className="aboutpage-grid">
            <div className="aboutpage-label-container">
                <div className="aboutpage-background-image"></div>
                <h1 className="aboutpage-label">About Us</h1>
            </div>
            <div className="aboutpage-content">
                <h1 className="aboutpage-title">The Full Story</h1>
                <p className="aboutpage-description">
                    Unitex is a Toronto-based curtain and textile brand with a rich legacy rooted in craftsmanship and care.
                </p>
                <p className="aboutpage-description">
                    Our story began in 1970, when our family opened its first textile training school—mentoring over 100 fabric professionals and laying the foundation for decades of expertise. 
                    In 1996, we transitioned into the window coverings industry, bringing our knowledge directly into homes through custom, made-to-measure solutions.
                </p>
                <p className="aboutpage-description">
                    Now proudly led by third-generation founder, Unitex carries forward the family tradition with a modern mission: delivering high-quality, health-conscious, and eco-friendly curtains at accessible prices.
                </p>
                <p className="aboutpage-description">
                    With nearly 30 years of experience and over 1,000 happy clients, we take pride in offering thoughtful service—from free on-site consultations to precise installation. 
                    At Unitex, we believe everyone deserves beautiful, sustainable design tailored to their space.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}