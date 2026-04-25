export default function PartnersSection() {
  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="partners-header">
          <p className="section-eyebrow">СОТРУДНИЧЕСТВО</p>
          <h2 className="partners-title">Партнёрам</h2>
          <p className="partners-subtitle">
            Мы открыты к сотрудничеству с дистрибьюторами, магазинами,
            маркетплейсами, кофейнями, фитнес-клубами и другими партнёрами.
          </p>
        </div>

        <div className="partners-grid">
          <div className="partner-card">
            <h3>Для дистрибьюторов</h3>
            <p>
              Расширяйте ассортимент современным кофейным напитком
              с ярким позиционированием и узнаваемым брендом.
            </p>
          </div>

          <div className="partner-card">
            <h3>Для магазинов и сетей</h3>
            <p>
              Chill Coffee — заметный продукт на полке, который хорошо
              подходит для импульсных покупок и современной аудитории.
            </p>
          </div>

          <div className="partner-card">
            <h3>Для HoReCa и фитнес-площадок</h3>
            <p>
              Продукт отлично вписывается в кофейни, бары, залы,
              клубы и точки с активной молодой аудиторией.
            </p>
          </div>
        </div>

        <div className="partners-cta">
          <div className="partners-cta-box">
            <h3>Хотите сотрудничать с нами?</h3>
            <p>
              Напишите нам на почту, и мы обсудим условия сотрудничества,
              поставки и размещение продукции.
            </p>

            <div className="partners-actions">
              <a
                href="mailto:chillco.rus@gmail.com"
                className="partners-btn primary"
              >
                Написать на почту
              </a>

              <a
                href="https://www.instagram.com/chillcoffee_rus/"
                target="_blank"
                rel="noreferrer"
                className="partners-btn secondary"
              >
                Instagram бренда
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}