import { useState } from "react";
import Popup from "../Popup/Popup";
export default function Header({ popup, onOpenPopup, sigInPopup, closePopup }) {
  // menu Movil
  const [isMenuOpen, setisMenuOpen] = useState(false);
  
  return (
    <header className={`header ${isMenuOpen ? "hader_active" : ""}`}>
      <div className="header__logo">NewsExplorer</div>
      <button
        className="header__button-movil"
        onClick={() => setisMenuOpen(!isMenuOpen)}
      >
        <i className={`header__menu-barraOne  ${isMenuOpen ? "header__menu-barraOne--acttive" : ""}`}></i>
        <i className={`header__menu-barraTwo  ${isMenuOpen ? "header__menu-barraTwo--acttive" : ""}`}></i>
      </button>
      <nav className="header__navigation">
        <a className="header__link" href="/">
          Inicio
        </a>
        <button
          className="header__button"
          onClick={() => onOpenPopup(sigInPopup)}
        >
          Iniciar Sesion
        </button>
      </nav>
      {isMenuOpen && (
        <div className="header__movil">
          <nav className="header__navigation-movil">
            <a className="header__link-movil" href="/">
              Inicio
            </a>
            <button
              className="header__btn-movil"
              onClick={() => onOpenPopup(sigInPopup)}
            >
              Iniciar Sesion
            </button>
          </nav>
        </div>
      )}
      {popup && (
        <Popup title={popup.title} closePopup={closePopup}>
          {popup.children}
        </Popup>
      )}
    </header>
  );
}
