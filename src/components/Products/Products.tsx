import './Products.css'
import draperyImg from '../../resource/_Ma_show.jpeg'
import sheerImg from '../../resource/S-fold_sheer.jpeg'
import shadesImg from '../../resource/Roma.jpeg'
import blindsImg from '../../resource/_Zeba_show1.jpeg'

const products = [
  {
    id: 1,
    title: 'Drapery',
    description: 'We create custom drapery designed to fit your space flawlessly. Each piece is hand-finished, ensuring graceful, tailored folds every time.',
    image: draperyImg,
  },
  {
    id: 2,
    title: 'Sheer Curtains',
    description: 'Our sheer curtains are delicately tailored to soften light and add a layer of quiet elegance to your space.',
    image: sheerImg,
  },
  {
    id: 3,
    title: 'Roman & Roller & Honeycomb Shades',
    description: 'We offer three custom shade styles that blend style, function, and effortless layering.',
    image: shadesImg,
  },
  {
    id: 4,
    title: 'Zebra & Vertical Blinds',
    description: 'We offer custom Zebra and vertical blinds—designed for precise light control with a clean, modern finish.',
    image: blindsImg,
  },
]

export function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Curtain</span>
          <h2 className="section-title">What We Make</h2>
          <p className="section-subtitle">(and we are really good at it!)</p>
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
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

