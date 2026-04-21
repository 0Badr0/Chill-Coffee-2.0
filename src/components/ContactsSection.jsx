import SectionTitle from './SectionTitle'
import { img } from '../utils/getImage'

function ContactsSection() {
  return (
    <section id="contacts" className="section section--soft">
      <div className="container">
        <SectionTitle
          centered
          label="Контакты"
          title="Свяжитесь с нами"
          text="По вопросам сотрудничества, продукции и бренда."
        />

        <div className="contacts-grid">
          <a className="contact-card glass-card" href="mailto:chillco.rus@gmail.com">
            <span className="contact-card__icon">✉️</span>
            <h3>Email</h3>
            <p>chillco.rus@gmail.com</p>
          </a>

          <a className="contact-card glass-card" href="tel:+79886488705">
            <span className="contact-card__icon">📞</span>
            <h3>Телефон</h3>
            <p>8 988 648 87 05</p>
          </a>

          <a
            className="contact-card glass-card"
            href="https://www.instagram.com/chillcoffee_rus/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card__icon contact-card__icon--image">
              <img src={img('inst-logo.png')} alt="Instagram" />
            </span>
            <h3>Instagram бренда</h3>
            <p>@chillcoffee_rus</p>
          </a>

          <a
            className="contact-card glass-card"
            href="https://www.instagram.com/gasanov_gamzat_/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card__icon">👤</span>
            <h3>Основатель</h3>
            <p>Гасанов Гамзат</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactsSection