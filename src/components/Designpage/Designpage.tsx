import './Designpage.css'

export function Designpage() {
  return (
    <section id="designpage" className="designpage">
        <div className="container">
            <div className="designpage-grid">
                <div className="designpage-label">
                    <h1>Design Services</h1>
                    <p>Unitex provides complimentary in-home curtain design consultations.</p>
                    <p>Our expert design consultants bring a wide range of fabric swatches and full-size samples directly to your home, allowing you to see, touch, and experience the materials and colors in your space’s natural lighting. 
                        This hands-on approach ensures you make the perfect choice for your home’s style and ambiance. 
                        Whether you need guidance on fabric selection, design coordination, or tailored solutions, our team offers professional recommendations to create the ideal curtain treatment for your space.</p>
                    <p>Book your free consultation today and discover how Unitex can transform your home with personalized curtain solutions.</p>
                </div>
                
                <div className="designpage-right-grid">
                <div className="designpage-item">
                    <h3>1 | Free In-Home Curtain Design Consultation</h3>
                    <p>Unitex offers complimentary in-home window measurement and curtain design services in the Greater Toronto Area.</p>
                    <p>During the appointment, we will review your windows, discuss the best options and styles for your space, and provide an on-the-spot estimate. 
                        There’s no obligation to decide on the day — you can place your order whenever you’re ready.
                        A professional check measure service is available separately for an additional fee.</p>
                    <p>How to schedule the In-Home Consultation?<br />
                       After your purchase, we will send an email to select your preferred date and time for the consultation.</p>
                       <p>Important Notes:</p>
                       <ul className="designpage-dot "> 
                        <li>App Functions</li> 
                        <li>App Functions</li>
                       </ul>
                </div>
                <div className="designpage-item">
                    <h3>2 | Free Curtain Installation Service</h3>
                    <p>Unitex offers free installation services for all curtain purchases within the Greater Toronto Area.</p>
                    <p>Our skilled installation team will ensure your curtains are installed with precision, providing a flawless finish. 
                       This service is completely free, offering you a hassle-free experience from purchase to installation. 
                       We are committed to delivering the highest quality service, ensuring your space is transformed to perfection.</p>
                </div>
          
                <div className="designpage-item">
                    <h3>3 | 5-Year Warranty</h3>
                    <p>Unitex offers a 5-year warranty on all curtain products.</p>
                    <p>We stand behind the quality of our curtains and ensure they are made to last. 
                        With our 5-year warranty, you can enjoy peace of mind knowing that your investment is protected for years to come.</p>
                </div>
          
                <div className="designpage-item">
                    <h3>4 | ​Smart Curtain Solutions</h3>
                    <p>We offer smart curtain services, with motorized curtains that can be integrated with smart home devices such as HomeKit, Amazon Alexa, Google Assistant, and more. Create a fully automated curtain system for your entire home, enhancing both convenience and modern living.</p>
                </div>
            </div>
        </div>
        </div>
    </section>     
  )
}