import SectionTitle from './SectionTitle'
import { img } from '../utils/getImage'

function BuySection() {
  return (
    <section id="buy" className="section section--soft">
      <div className="container">
        <SectionTitle
          centered
          label="Покупка"
          title="Где купить Chill Coffee"
          text="Выбирай удобную площадку для заказа продукции и переходи по ссылке."
        />

        <div className="buy-grid">
          <a
            className="buy-card buy-card--wb"
            href="https://www.wildberries.ru/catalog/806674616/detail.aspx?size=1206559156"
            target="_blank"
            rel="noreferrer"
          >
            <span className="buy-card__icon buy-card__icon--image">
              <img src={img('wb.png')} alt="Wildberries" />
            </span>
            <h3>Wildberries</h3>
            <p>Перейти к товару</p>
          </a>

          <a
            className="buy-card buy-card--ozon"
            href="https://www.ozon.ru/product/napitok-kofeynyy-toniziruyushchiy-gazirovannyy-vishnya-3553449771/?from=share_ios&perehod=smm_share_button_productpage_link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="buy-card__icon buy-card__icon--image">
              <img src={img('ozon.png')} alt="Ozon" />
            </span>
            <h3>Ozon</h3>
            <p>Перейти к товару</p>
          </a>

          <a
            className="buy-card buy-card--site"
            href="https://chill-coffee.ru/#produkciya"
            target="_blank"
            rel="noreferrer"
          >
            <span className="buy-card__icon buy-card__icon--image">
              <img src={img('logo-orig.png')} alt="Chill Coffee" />
            </span>
            <h3>Официальный сайт</h3>
            <p>Смотреть продукцию</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BuySection