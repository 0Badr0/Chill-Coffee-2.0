import { img } from '../utils/getImage'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={img('logo-orig.png')} alt="Chill Coffee logo" />
          <div>
            <strong>Chill Coffee</strong>
            <p>Espresso Tonic</p>
          </div>
        </div>

        <p>© 2026 Chill-Coffee. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer