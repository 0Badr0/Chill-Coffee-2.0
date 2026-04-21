import { img } from '../utils/getImage'

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(8,8,10,.72), rgba(8,8,10,.45)), url(${img('hero-group.png')})`,
      }}
    >
      <div className="container hero__content">
        <div className="hero__panel">
          <p className="hero__label">Cold Espresso Tonic</p>
          <h1>CHILL-COFFEE</h1>
          <p className="hero__text">
            Холодный газированный кофейный напиток без сахара.
            Яркий вкус, освежающий эффект и бодрящий ритм для тех, кто любит движение.
          </p>

          <div className="hero__chips">
            <span>Без сахара</span>
            <span>350 мл</span>
            <span>6 вкусов</span>
            <span>Espresso Tonic</span>
          </div>

          <div className="hero__actions">
            <a href="#products" className="btn btn--primary">Смотреть вкусы</a>
            <a href="#buy" className="btn btn--ghost">Где купить</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero