export default function ProductSpecsSection() {
  return (
    <section className="specs-section" id="specs">
      <div className="container">
        <div className="specs-head">
          <span className="specs-kicker">Характеристики</span>
          <h2 className="specs-title">Характеристики продукта</h2>
          <p className="specs-subtitle">
            Chill Coffee — необычное сочетание холодного кофе и вкуса
            колы без сахара. Напиток создан для тех, кто ценит бодрящий эффект кофеина
            и освежающий вкус газированного напитка.
          </p>
        </div>

        <div className="specs-top-grid">
          <div className="specs-mini-card">
            <span className="specs-mini-card__label">Формат</span>
            <strong>Газированный кофейный напиток</strong>
          </div>

          <div className="specs-mini-card">
            <span className="specs-mini-card__label">Вкусовая линейка</span>
            <strong>6 оригинальных вариантов</strong>
          </div>

          <div className="specs-mini-card">
            <span className="specs-mini-card__label">Объём</span>
            <strong>350 мл</strong>
          </div>

          <div className="specs-mini-card">
            <span className="specs-mini-card__label">Количество в упаковке</span>
            <strong>6 шт</strong>
          </div>
        </div>

        <div className="specs-grid">
          <div className="specs-card">
            <h3>Основные характеристики</h3>
            <div className="specs-list">
              <div className="specs-row">
                <span>Срок годности</span>
                <strong>6 месяцев</strong>
              </div>
              <div className="specs-row">
                <span>Страна производства</span>
                <strong>Россия</strong>
              </div>
              <div className="specs-row">
                <span>Температура хранения</span>
                <strong>от 2°C до 6°C</strong>
              </div>
              <div className="specs-row">
                <span>Комплектация</span>
                <strong>6 банок</strong>
              </div>
            </div>
          </div>

          <div className="specs-card">
            <h3>Габариты упаковки</h3>
            <div className="specs-list">
              <div className="specs-row">
                <span>Длина упаковки</span>
                <strong>18 см</strong>
              </div>
              <div className="specs-row">
                <span>Высота упаковки</span>
                <strong>12 см</strong>
              </div>
              <div className="specs-row">
                <span>Ширина упаковки</span>
                <strong>12 см</strong>
              </div>
              <div className="specs-row">
                <span>Вес с упаковкой</span>
                <strong>2.2 кг</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="specs-description-card">
          <h3>Описание продукта</h3>
          <p>
            Формат cold brew обеспечивает мягкий кофейный вкус без горечи, а отсутствие
            сахара делает напиток отличным выбором для тех, кто следит за калориями.
          </p>
          <p>
            Удобный объём 350 мл подходит для работы, учёбы, дороги и тренировок.
            Chill Coffee — это альтернатива энергетикам, сладким газировкам и
            классическому кофе.
          </p>

          <h3>Состав</h3>
          <p className="specs-composition">
            Вода подготовленная, комплексная пищевая добавка «Основа Кофе», регулятор
            кислотности — лимонная кислота, красители, ароматизаторы, подсластители
            (ацесульфам калия, сукралоза, сахарин, стевиолгликозиды), кофеин, экстракт
            зелёного чая, концентрированные соки, консерванты: сорбат калия, бензоат
            натрия.
          </p>
        </div>
      </div>
    </section>
  );
}