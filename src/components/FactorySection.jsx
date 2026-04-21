import { img } from '../utils/getImage'

function FactorySection() {
  return (
    <section className="factory-section">
      <div className="container">
        <div className="factory-banner-card">
          <img
            src={img('factory-banner.png')}
            alt='Произведено на заводе "Berdinberg"'
            className="factory-banner-image"
          />
        </div>
      </div>
    </section>
  )
}

export default FactorySection