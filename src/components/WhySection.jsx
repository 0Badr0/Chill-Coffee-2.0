import SectionTitle from './SectionTitle'
import { img } from '../utils/getImage'

function WhySection() {
  return (
    <section id="advantages" className="section section--soft">
      <div className="container why">
        <div className="why__media glass-card">
          <img src={img('why-image.png')} alt="Почему выбрать Chill Coffee" />
        </div>

        <div className="why__text">
          <SectionTitle
            label="Почему именно мы"
            title="Почему выбирают Chill Coffee"
            text="Бренд сочетает натуральную бодрость, яркую визуальную подачу и вкусы, которые легко запоминаются."
          />

          <ul className="why__list">
            <li>Натуральный кофе с эспрессо-тоником</li>
            <li>Без добавления сахара</li>
            <li>Свежий и охлаждающий вкус</li>
            <li>6 оригинальных вкусов в линейке</li>
            <li>Современная упаковка и яркий стиль</li>
            <li>Подходит для активного ритма жизни</li>
          </ul>

          <div className="quote-box">
            <p>
              «Chill-Coffee — это формат бодрости нового времени: легко пить, удобно брать с собой
              и приятно ассоциировать с сильным брендом».
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySection