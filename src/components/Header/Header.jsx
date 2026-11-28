import { useContext, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { removeToken } from "../../utils/token";
import Popup from "../Popup/Popup";

export default function Header({ popup, onOpenPopup, sigInPopup, closePopup, setSavedArticles }) {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(CurrentUserContext);
  // menu Movil
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const navigate = useNavigate();

  function logOut(){
    removeToken();
    setIsLoggedIn(false);
    setUser(null);
    setSavedArticles([]);
    setisMenuOpen(false);
    navigate("/");
  }
  
  return (
    <header
      className={`header ${isMenuOpen ? "hader__active" : ""}  ${isSavedNews ? "header_saved-news header__news" : ""}`}
    >
      <Link to="/" className={`header__logo ${isMenuOpen ? "header__words-white" : ""} `}>NewsExplorer</Link>
      <button
        className="header__button-movil"
        onClick={() => setisMenuOpen(!isMenuOpen)}
      >
        <i
          className={`header__menu-barraOne  ${isMenuOpen ? "header__menu-barraOne--active " : "header__active_movil"} ${!isSavedNews ? "header__savedNone" : ""}`}
        ></i>
        <i
          className={`header__menu-barraTwo  ${isMenuOpen ? "header__menu-barraTwo--active" : "header__active_movil"}  ${!isSavedNews ? "header__savedNone" : ""}`}
        ></i>
      </button>
      <nav className="header__navigation">
        <Link 
          className={`header__link ${!isSavedNews ? "header__link_active " : "header__color"}`}
          to="/"
        >
          Inicio
        </Link>
        {isLoggedIn && (
          <>
            <Link
              className={`header__link ${isSavedNews ? "header__link_active header__color " : ""}`}
              to="/saved-news"
            >
              Artículos guardados
            </Link>
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
            Iniciar sesión
          </button>
        )}
      </nav>
      {isMenuOpen && (
        <div className={`header__movil  ${isSavedNews ? "header_saved-news header__news" : ""}`}>
          <nav className="header__navigation-movil">
            <Link className={`header__link ${!isSavedNews ? "header__link_active" : ""}`} to="/">
              Inicio
            </Link>
            {isLoggedIn && (
              <> 
                <Link className={`header__link ${isSavedNews ? "header__link_active" : ""}`} to="/saved-news">
                  Artículos guardados
                </Link>
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
                Iniciar sesión
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
