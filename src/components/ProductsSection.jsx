import SectionTitle from './SectionTitle'
import { products } from '../data/products'
import { img } from '../utils/getImage'

function ProductsSection() {
  return (
    <section id="products" className="section">
      <div className="container">
        <SectionTitle
          centered
          label="Линейка"
          title="Наши вкусы"
          text="Каждый вкус Chill-Coffee — это отдельное настроение, но единый бодрящий характер бренда."
        />

        <div className="products-grid">
          {products.map((product) => (
            <article key={product.title} className="product-card glass-card">
              <div className="product-card__image-wrap">
                <img src={img(product.image)} alt={product.title} className="product-card__image" />
              </div>

              <div className="product-card__body">
                <h3>{product.title}</h3>
                <p className="product-card__subtitle">{product.subtitle}</p>
                <p className="product-card__description">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection