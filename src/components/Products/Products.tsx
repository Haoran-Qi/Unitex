import { useTranslation } from 'react-i18next'
import './Products.css'
import draperyImg from '../../resource/_Ma_show.jpeg'
import sheerImg from '../../resource/S-fold_sheer.jpeg'
import shadesImg from '../../resource/Roma.jpeg'
import blindsImg from '../../resource/_Zeba_show1.jpeg'

export function Products() {
  const { t } = useTranslation()

  const products = [
    {
      id: 1,
      titleKey: 'products.items.drapery.title',
      descriptionKey: 'products.items.drapery.description',
      image: draperyImg,
    },
    {
      id: 2,
      titleKey: 'products.items.sheer.title',
      descriptionKey: 'products.items.sheer.description',
      image: sheerImg,
    },
    {
      id: 3,
      titleKey: 'products.items.shades.title',
      descriptionKey: 'products.items.shades.description',
      image: shadesImg,
    },
    {
      id: 4,
      titleKey: 'products.items.blinds.title',
      descriptionKey: 'products.items.blinds.description',
      image: blindsImg,
    },
  ]

  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('products.label')}</span>
          <h2 className="section-title">{t('products.title')}</h2>
          <p className="section-subtitle">{t('products.subtitle')}</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={t(product.titleKey)}
                  className={product.id === 2 ? 'flipped' : ''}
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">{t(product.titleKey)}</h3>
                <p className="product-description">{t(product.descriptionKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

