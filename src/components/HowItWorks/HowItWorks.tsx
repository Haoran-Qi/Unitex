import { useTranslation } from 'react-i18next'
import './HowItWorks.css'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      id: 1,
      icon: '💬',
      titleKey: 'howItWorks.steps.contact.title',
      descriptionKey: 'howItWorks.steps.contact.description',
    },
    {
      id: 2,
      icon: '✏️',
      titleKey: 'howItWorks.steps.customize.title',
      descriptionKey: 'howItWorks.steps.customize.description',
    },
    {
      id: 3,
      icon: '✓',
      titleKey: 'howItWorks.steps.confirm.title',
      descriptionKey: 'howItWorks.steps.confirm.description',
    },
    {
      id: 4,
      icon: '🏭',
      titleKey: 'howItWorks.steps.production.title',
      descriptionKey: 'howItWorks.steps.production.description',
    },
    {
      id: 5,
      icon: '🚚',
      titleKey: 'howItWorks.steps.delivery.title',
      descriptionKey: 'howItWorks.steps.delivery.description',
    },
  ]

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('howItWorks.title')}</h2>
          <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step">
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>
              <h3 className="step-title">{t(step.titleKey)}</h3>
              <p className="step-description">{t(step.descriptionKey)}</p>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg width="40" height="20" viewBox="0 0 40 20">
                    <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

