import './Products.css'
import draperyImg from '../../resource/_Ma_show.jpeg'
import sheerImg from '../../resource/S-fold_sheer.jpeg'
import shadesImg from '../../resource/Roma.jpeg'
import blindsImg from '../../resource/_Zeba_show1.jpeg'
import { useTranslation } from 'react-i18next'

const products = [
  {
    id: 1,
    title: 'drapery',
    description: 'We create custom drapery designed to fit your space flawlessly. Each piece is hand-finished, ensuring graceful, tailored folds every time.',
    image: draperyImg,
  },
  {
    id: 2,
    title: 'sheer',
    description: 'Our sheer curtains are delicately tailored to soften light and add a layer of quiet elegance to your space.',
    image: sheerImg,
  },
  {
    id: 3,
    title: 'shades',
    description: 'We offer three custom shade styles that blend style, function, and effortless layering.',
    image: shadesImg,
  },
  {
    id: 4,
    title: 'blinds',
    description: 'We offer custom Zebra and vertical blinds—designed for precise light control with a clean, modern finish.',
    image: blindsImg,
  },
]

export function Products() {

  const { t } = useTranslation()

  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            {t('products.label')}
          </span>
          <h2 className="section-title">
            {t('products.title')}
          </h2>
          <p className="section-subtitle">
            {t('products.subtitle')}
          </p>
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
                  alt={product.title}
                  className={product.id === 2 ? 'flipped' : ''}
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  {t('products.items.'+ product.title +'.title')}

                </h3>
                <p className="product-description">
                  {t('products.items.'+ product.title +'.description')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

