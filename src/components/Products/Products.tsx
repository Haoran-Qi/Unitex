import './Products.css'

const products = [
  {
    id: 1,
    title: 'Drapery',
    description: 'We create custom drapery designed to fit your space flawlessly. Each piece is hand-finished, ensuring graceful, tailored folds every time.',
    image: 'drapery',
  },
  {
    id: 2,
    title: 'Sheer Curtains',
    description: 'Our sheer curtains are delicately tailored to soften light and add a layer of quiet elegance to your space.',
    image: 'sheer',
  },
  {
    id: 3,
    title: 'Roman & Roller & Honeycomb Shades',
    description: 'We offer three custom shade styles that blend style, function, and effortless layering.',
    image: 'shades',
  },
  {
    id: 4,
    title: 'Zebra & Vertical Blinds',
    description: 'We offer custom Zebra and vertical blinds—designed for precise light control with a clean, modern finish.',
    image: 'blinds',
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
              <div className="product-image placeholder-image">
                <span>{product.image}</span>
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

