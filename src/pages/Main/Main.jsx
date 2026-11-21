import { useState } from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/ComponentsMain/SearchForm/SearchForm";
import NewsCardList from "../../components/ComponentsMain/Cards/NewsCardList";
import About from "../../components/ComponentsMain/About/About";
import Footer from "../../components/Footer/Footer";
import SigIn from "../../components/Popup/PopupSystem/PopupSigin";
import Signup from "../../components/Popup/PopupSystem/PopupSignup";
import MessageSuccessPopup from "../../components/Popup/PopupSystem/PopupSuccessMessage";
import MessageErrorPopup from "../../components/Popup/PopupSystem/PopupErrorMessage";
import { getNews } from "../../utils/NewsApi";
function Main({
  savedArticles,
  setSavedArticles,
  handleSaveArticle,
  handleRemoveArticle,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  // guardamos los datos del formulario de busqueda en el estado searchValue
  const [searchKeyword, setSearchKeyword] = useState("");
  // usamos para mostrar articulos desde el principio
  const [articles, setArticles] = useState([]);

  //estado que indique si el usuario ya realizó una búsqueda.
  const [hasSearched, setHasSearched] = useState(false);

  //controlar preloader
  const [isLoading, setIsLoading] = useState(false);

  //Este estado guardará el mensaje que queremos mostrar cuando falle la petición.
  const [error, setError] = useState("");

  // estado que conservará los datos aunque cambiemos temporalmente el contenido del popup.
  /*   const [dataSignup, setDataSignup] = useState({
    email: "",
    password: "",
    nameUser: "",
  }); */

  //buscamos por searchForm
  const handleSearch = async (keyword) => {
    setHasSearched(true);
    setSearchKeyword(keyword);
    setError("");
    setIsLoading(true);

    try {
      const articles = await getNews(keyword);
      setArticles(articles);
    } catch (error) {
      if (!error.status) {
        console.error("Error de conexión:", error.message);
      }

      console.error("Error al buscar noticias:", error);

      if (error.status === 401) {
        console.error("API key inválido o no autorizado");
      } else if (error.status === 429) {
        console.error("Se escedió el límite de solicitudes");
      } else if (error.status >= 500) {
        console.error("Error interno del servidor");
      }

      setError(
        "Lo sentimos, algo ha salido mal durante la solicitud, Es posible que haya un problema de conexion o que el servidor ni funcione, por favor intentelo más tarde",
      );
    } finally {
      setIsLoading(false);
    }
  };

  //sigin
  const sigInPop = {
    title: "Iniciar Sesion",
    children: (
      <SigIn
        onSignUp={() => handleOpenPopup(sigInUp)}
        onClose={handelClosePopup}
      />
    ),
  };

  //signup
  const sigInUp = {
    title: "Inscribirse",
    children: (
      <Signup
        onSign={() => handleOpenPopup(sigInPop)}
        onSuccess={handleShowLogin}
        onError={handleShowError}
      />
    ),
  };

  // abrir popup
  function handleOpenPopup(popup) {
    setIsPopupOpen(popup);
  }

  function handleShowLogin() {
    setIsRegisterSuccess(true);
    setIsPopupOpen({
      title: "¡El registro se ha completado con éxito!",
      children: (
        <MessageSuccessPopup
          setIsRegisterSuccess={setIsRegisterSuccess}
          onLogin={() => handleOpenPopup(sigInPop)}
        />
      ),
    });
  }

  function handleShowError(message) {
    setIsPopupOpen({
      title: "No se pudo completar el registro",
      children: (
        <MessageErrorPopup
          message={message}
          onBack={() => -handleOpenPopup(sigInUp)}
        />
      ),
    });
  }

  //cerrar popup
  function handelClosePopup() {
    setIsPopupOpen(null);
  }
  return (
    <>
      <Header
        popup={isPopupOpen}
        onOpenPopup={handleOpenPopup} // abrir el popup
        sigInPopup={sigInPop}
        closePopup={handelClosePopup}
      />

      <SearchForm onSearch={handleSearch} />
      <NewsCardList
        articles={articles}
        savedArticles={savedArticles}
        onSave={(article) =>
          handleSaveArticle({ ...article, keyword: searchKeyword })
        }
        onRemove={handleRemoveArticle}
        hasSearched={hasSearched}
        isLoading={isLoading}
        error={error}
      />
      <About />
      <Footer />
    </>
  );
}

export default Main;
