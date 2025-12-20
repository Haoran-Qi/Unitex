import './Designpage.css'
import { useTranslation } from 'react-i18next'

export function Designpage() {

  const { t } = useTranslation()

  return (
    <section id="designpage" className="designpage">
        <div className="container">
            <div className="designpage-grid">
                <div className="designpage-label">
                    <h1>
                    {t('designpage.label')}
                    </h1>
                    <p>
                    {t('designpage.labeldescription1')}
                    </p>
                    <p>
                    {t('designpage.labeldescription2')}    
                    </p>
                    <p>
                    {t('designpage.labeldescription3')}
                    </p>
                </div>
                
                <div className="designpage-right-grid">
                <div className="designpage-item">
                    <h3>{t('designpage.items.consult.label')}</h3>
                    <p>{t('designpage.items.consult.description1')}</p>
                    <p>{t('designpage.items.consult.description2')}</p>
                    <p>{t('designpage.items.consult.description3')}<br />
                       {t('designpage.items.consult.description4')}</p>
                       <p>{t('designpage.items.consult.notes')}</p>
                       <ul className="designpage-dot "> 
                        <li>{t('designpage.items.consult.notescont')}</li> 
                        <li>{t('designpage.items.consult.notescont')}</li>
                       </ul>
                </div>
                <div className="designpage-item">
                    <h3>{t('designpage.items.install.label')}</h3>
                    <p>{t('designpage.items.install.description1')}</p>
                    <p>{t('designpage.items.install.description2')}</p>
                </div>
          
                <div className="designpage-item">
                    <h3>{t('designpage.items.warranty.label')}</h3>
                    <p>{t('designpage.items.warranty.description1')}</p>
                    <p>{t('designpage.items.warranty.description2')}</p>
                </div>
          
                <div className="designpage-item">
                    <h3>{t('designpage.items.solutions.label')}</h3>
                    <p>{t('designpage.items.solutions.description')}</p>
                </div>
            </div>
        </div>
        </div>
    </section>     
  )
}