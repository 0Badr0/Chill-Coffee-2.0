function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#home" className="brand">
          <span className="brand__title">Chill Coffee</span>
          <span className="brand__subtitle">Espresso Tonic</span>
        </a>

        <nav className="nav">
          <a href="#about">О продукте</a>
          <a href="#products">Товары</a>
          <a href="#advantages">Особенности</a>
          <a href="#buy">Где купить</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
    </header>
  )
}

export default Header