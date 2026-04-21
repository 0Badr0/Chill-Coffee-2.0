import SectionTitle from './SectionTitle'
import { img } from '../utils/getImage'

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__text">
          <SectionTitle
            label="О продукте"
            title="Современный холодный кофе с характером"
            text="Chill-Coffee — это газированный кофейный напиток формата espresso tonic, созданный как свежая альтернатива классическим энергетикам."
          />

          <div className="about__copy">
            <p>
              Напиток сочетает бодрящий эффект эспрессо, освежающий вкус тоника и яркую вкусовую линейку.
              Это современная подача для активного образа жизни, спорта, жаркой погоды и городского ритма.
            </p>
            <p>
              Chill-Coffee — это не просто вкус, а узнаваемая визуальная подача бренда: холод, лед, энергия,
              стиль и спортивный характер.
            </p>
          </div>

          <div className="about__facts">
            <div className="fact-card">Без сахара</div>
            <div className="fact-card">350 мл</div>
            <div className="fact-card">6 месяцев хранения</div>
            <div className="fact-card">Удобный формат</div>
          </div>
        </div>

        <div className="about__media glass-card">
          <img src={img('about-poster.png')} alt="Chill Coffee poster" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection