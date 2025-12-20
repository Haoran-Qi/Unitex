import './Aboutpage.css'
import { useTranslation } from 'react-i18next'

export function Aboutpage() {

  const { t } = useTranslation()

  return (
    <section id="aboutpage" className="aboutpage">
      <div className="container">
        <div className="aboutpage-grid">
            <div className="aboutpage-label-container">
                <div className="aboutpage-background-image"></div>
                <h1 className="aboutpage-label">
                  {t('aboutpage.label')}
                </h1>
            </div>
            <div className="aboutpage-content">
                <h1 className="aboutpage-title">
                  {t('aboutpage.title')}
                </h1>
                <p className="aboutpage-description">
                  {t('aboutpage.description1')}
                </p>
                <p className="aboutpage-description">
                  {t('aboutpage.description2')}
                </p>
                <p className="aboutpage-description">
                  {t('aboutpage.description3')}
                </p>
                <p className="aboutpage-description">
                  {t('aboutpage.description4')}
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}