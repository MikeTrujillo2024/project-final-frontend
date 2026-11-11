import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";
import Popup from "../Popup/Popup";

export default function Header({ popup, onOpenPopup, sigInPopup, closePopup }) {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(CurrentUserContext);
  // menu Movil
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const navigate = useNavigate();

  function logOut(){
    setIsLoggedIn(false);
    setUser(null);
    setisMenuOpen(false);
    navigate("/");
  }
  
  return (
    <header
      className={`header ${isMenuOpen ? "hader_active" : ""}  ${isSavedNews ? "header_saved-news header__news" : ""}`}
    >
      <div className={`header__logo ${isMenuOpen ? "header__words-white" : ""} `}>NewsExplorer</div>
      <button
        className="header__button-movil"
        onClick={() => setisMenuOpen(!isMenuOpen)}
      >
        <i
          className={`header__menu-barraOne  ${isMenuOpen ? "header__menu-barraOne--acttive " : "header__active_movil"} ${!isSavedNews ? "header__savedNone" : ""}`}
        ></i>
        <i
          className={`header__menu-barraTwo  ${isMenuOpen ? "header__menu-barraTwo--acttive" : "header__active_movil"}  ${!isSavedNews ? "header__savedNone" : ""}`}
        ></i>
      </button>
      <nav className="header__navigation">
        <a
          className={`header__link ${!isSavedNews ? "header__link_active " : "header__color"}`}
          href="/"
        >
          Inicio
        </a>
        {isLoggedIn && (
          <>
            <a
              className={`header__link ${isSavedNews ? "header__link_active header__color " : ""}`}
              href="/saved-news"
            >
              Artículos guardados
            </a>
            <button
              className={`header__button header__button-user ${isSavedNews ? "header__button_news" : ""}`}
              onClick={logOut}
            >
              {user}
            </button>
          </>
        )}
        {!isLoggedIn && (
          <button
            className="header__button"
            onClick={() => onOpenPopup(sigInPopup)}
          >
            Iniciar Sesion
          </button>
        )}
      </nav>
      {isMenuOpen && (
        <div className={`header__movil  ${isSavedNews ? "header_saved-news header__news" : ""}`}>
          <nav className="header__navigation-movil">
            <a className={`header__link ${!isSavedNews ? "header__link_active" : ""}`} href="/">
              Inicio
            </a>
            {isLoggedIn && (
              <> 
                <a className={`header__link ${isSavedNews ? "header__link_active" : ""}`} href="/saved-news">
                  Artículos guardados
                </a>
                <button className="header__button header__button-user"
                  onClick={logOut}>
                  {user}
                </button>
              </>
            )}
            {!isLoggedIn && (
              <button
                className="header__button"
                onClick={() => onOpenPopup(sigInPopup)}
              >
                Iniciar Sesion
              </button>
            )}
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
