import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
            <div className="contact-label-container">
                <h1 className="contact-label">Contact</h1>
            </div>
            <div className="contact-content">
                <p className="contact-description">
                    Interested in an estimate? Click below to fill out the questionnaire:
                </p>
                <p className="contact-description">
                    Our studio hours are M-F 9-5, but sometimes the team is out on an install or consult. 
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}