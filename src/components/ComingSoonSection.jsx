export default function ComingSoonSection() {
  const image = `${import.meta.env.BASE_URL}images/protein-bar-coming-soon.png`;

  return (
    <section className="coming-launch-section" id="coming-soon">
      <div className="container">
        <div className="coming-launch-head">
          <span className="coming-launch-kicker">Скоро в продаже</span>
          <h2 className="coming-launch-title">Новая линейка Chill Whey</h2>
          <p className="coming-launch-subtitle">
            Протеиновый кофейный батончик от Chill Coffee — удобный перекус для
            активного ритма жизни.
          </p>
        </div>

        <div className="coming-launch-card">
          <div className="coming-launch-card__media">
            <img src={image} alt="Chill Whey" />
          </div>

          <div className="coming-launch-card__content">
            <span className="coming-launch-badge">Новинка</span>

            <h3 className="coming-launch-card__title">Chill Whey</h3>

            <p className="coming-launch-card__lead">
              Протеиновый батончик с добавлением натурального кофе. Создан для тех,
              кто хочет удобный формат перекуса, современный вкус и узнаваемый стиль
              Chill Coffee.
            </p>

            <ul className="coming-launch-list">
              <li>Удобно брать с собой в дорогу, на учёбу, в офис и на тренировку</li>
              <li>Подходит для активного образа жизни</li>
              <li>Фирменный стиль Chill Coffee</li>
              <li>Скоро появится в продаже</li>
            </ul>

            <div className="coming-launch-note">
              <strong>Статус:</strong> продукт готовится к запуску. Следите за
              обновлениями на сайте и в социальных сетях бренда.
            </div>

            <div className="coming-launch-actions">
              <a className="coming-launch-btn coming-launch-btn--primary" href="#contacts">
                Связаться с нами
              </a>

              <a
                className="coming-launch-btn coming-launch-btn--ghost"
                href="https://www.instagram.com/chillcoffee_rus/"
                target="_blank"
                rel="noreferrer"
              >
                Следить за запуском
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}