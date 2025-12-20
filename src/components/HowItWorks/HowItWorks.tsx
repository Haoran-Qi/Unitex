import './HowItWorks.css'
import { useTranslation } from 'react-i18next'

const steps = [
  {
    id: 1,
    index: 'contact',
    icon: '💬',
    title: 'Get In Touch',
    description: 'Fill out a quick form to get started!',
  },
  {
    id: 2,
    index: 'customize',
    icon: '✏️',
    title: 'Customize',
    description: 'We will follow up with all the options and help you customize the project to your needs.',
  },
  {
    id: 3,
    index: 'confirm',
    icon: '✓',
    title: 'Say Yes!',
    description: 'Once all the details are agreed upon and measurements are checked, we press go!',
  },
  {
    id: 4,
    index: 'production',
    icon: '🏭',
    title: 'Production',
    description: 'Our team will create your custom project to meet our specifications.',
  },
  {
    id: 5,
    index: 'delivery',
    icon: '🚚',
    title: 'Deliver & Install',
    description: "This is our favourite part! We will schedule an installation service or delivery. We hope you enjoy!",
  },
]

export function HowItWorks() {

  const { t } = useTranslation()

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t('howItWorks.title')}
          </h2>
          <p className="section-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step">
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>
              <h3 className="step-title">
                {t('howItWorks.steps.'+step.index+'.title')}
              </h3>
              <p className="step-description">
                {t('howItWorks.steps.'+step.index+'.description')}
              </p>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg width="40" height="20" viewBox="0 0 40 20">
                    <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="currentColor" strokeWidth="2" fill="none"/>
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

