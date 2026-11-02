export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <nav className="header__navigation">
        <a className="header__link" href="/">Inicio</a>
        <button className="header__button">Iniciar Sesion</button>
      </nav>
    </header>
  );
}
