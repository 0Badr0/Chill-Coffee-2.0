import SectionTitle from './SectionTitle'
import { ambassadors } from '../data/ambassadors'
import { img } from '../utils/getImage'

function AmbassadorsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          centered
          label="Амбассадоры"
          title="Лица бренда"
          text="Chill-Coffee — это энергия, спорт, характер и современный стиль жизни."
        />

        <div className="ambassadors-grid">
          {ambassadors.map((person) => (
            <article key={person.name} className="ambassador-card glass-card">
              <div className="ambassador-card__media">
                <img src={img(person.image)} alt={person.name} />
                <div className="ambassador-card__overlay">
                  <p>{person.phrase}</p>
                </div>
              </div>

              <div className="ambassador-card__body">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AmbassadorsSection