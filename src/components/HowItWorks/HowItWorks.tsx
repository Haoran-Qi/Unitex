import './HowItWorks.css'

const steps = [
  {
    id: 1,
    icon: '💬',
    title: 'Get In Touch',
    description: 'Fill out a quick form to get started!',
  },
  {
    id: 2,
    icon: '✏️',
    title: 'Customize',
    description: 'We will follow up with all the options and help you customize the project to your needs.',
  },
  {
    id: 3,
    icon: '✓',
    title: 'Say Yes!',
    description: 'Once all the details are agreed upon and measurements are checked, we press go!',
  },
  {
    id: 4,
    icon: '🏭',
    title: 'Production',
    description: 'Our team will create your custom project to meet our specifications.',
  },
  {
    id: 5,
    icon: '🚚',
    title: 'Deliver & Install',
    description: "This is our favourite part! We will schedule an installation service or delivery. We hope you enjoy!",
  },
]

export function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">HOW IT WORKS</h2>
          <br />
          <p className="section-subtitle">Make it Custom</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step">
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

