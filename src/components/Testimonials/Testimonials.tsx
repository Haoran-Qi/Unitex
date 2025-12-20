import './Testimonials.css'
import { useTranslation } from 'react-i18next'

const testimonials = [
  {
    id: 1,
    index: 'emily',
    name: 'Emily R.',
    location: 'Toronto, ON',
    quote: 'I was blown away by the quality and fit of our new curtains. The Unitex team made the whole process—from consultation to installation—so easy and stress-free. Highly recommend!',
  },
  {
    id: 2,
    index: 'claire',
    name: 'Claire M.',
    location: 'Mississauga, ON',
    quote: "I've worked with other curtain companies before, but Unitex stands out. Beautiful fabrics, friendly service, and they really listened to what I wanted. My living room feels completely transformed!",
  },
  {
    id: 3,
    index: 'jason',
    name: 'Jason T.',
    location: 'North York, ON',
    quote: 'Professional, punctual, and the result exceeded my expectations. The curtains look custom (because they are), and the price was very reasonable. Great experience all around.',
  },
]

export function Testimonials() {

  const { t } = useTranslation()

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-quote">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>
              <h3 className="testimonial-author">{t('testimonials.reviews.'+testimonial.index+'.name')} | {t('testimonials.reviews.'+testimonial.index+'.location')}</h3>
              <p className="testimonial-text">{t('testimonials.reviews.'+testimonial.index+'.quote')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

