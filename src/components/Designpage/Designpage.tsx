import { useTranslation } from 'react-i18next'
import './Designpage.css'

export function Designpage() {
    const { t } = useTranslation()

    return (
        <section id="designpage" className="designpage">
            <div className="container">
                <div className="designpage-grid">
                    <div className="designpage-label">
                        <h1>{t('designpage.title')}</h1>
                        <p>{t('designpage.intro1')}</p>
                        <p>{t('designpage.intro2')}</p>
                        <p>{t('designpage.intro3')}</p>
                    </div>

                    <div className="designpage-right-grid">
                        <div className="designpage-item">
                            <h3><span className="service-number">1 | </span>{t('designpage.service1.title').replace('1 | ', '')}</h3>
                            <p>{t('designpage.service1.description1')}</p>
                            <p>{t('designpage.service1.description2')}</p>
                            <p>{t('designpage.service1.description3')}<br />
                                {t('designpage.service1.description4')}</p>
                            <p>{t('designpage.service1.notes_title')}</p>
                            <ul className="designpage-dot ">
                                <li>{t('designpage.service1.note1')}</li>
                                <li>{t('designpage.service1.note2')}</li>
                            </ul>
                        </div>
                        <div className="designpage-item">
                            <h3><span className="service-number">2 | </span>{t('designpage.service2.title').replace('2 | ', '')}</h3>
                            <p>{t('designpage.service2.description1')}</p>
                            <p>{t('designpage.service2.description2')}</p>
                        </div>

                        <div className="designpage-item">
                            <h3><span className="service-number">3 | </span>{t('designpage.service3.title').replace('3 | ', '')}</h3>
                            <p>{t('designpage.service3.description1')}</p>
                            <p>{t('designpage.service3.description2')}</p>
                        </div>

                        <div className="designpage-item">
                            <h3><span className="service-number">4 | </span>{t('designpage.service4.title').replace('4 | ', '')}</h3>
                            <p>{t('designpage.service4.description1')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}