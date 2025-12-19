import { useTranslation } from 'react-i18next'
import './Projectpage.css'

export function Projectpage() {
    const { t } = useTranslation()

    return (
        <section id="projectpage" className="projectpage">
            <div className="container">
                <div className="projectpage-header">
                    <h1>{t('header.nav.projects')}</h1>
                    <p>Explore some of our recent handcrafted curtain and window treatment installations in the Toronto area.</p>
                </div>

                <div className="projects-placeholder">
                    <p>Project gallery is coming soon...</p>
                </div>
            </div>
        </section>
    )
}
