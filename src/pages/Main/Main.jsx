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

function Main({
  savedArticles,
  setSavedArticles,
  handleSaveArticle,
  handleRemoveArticle,
  searchKeyword,
  articles,
  hasSearched,
  isLoading,
  error,
  onSearch,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const [, setIsRegisterSuccess] = useState(false);

  //sigin
  const sigInPop = {
    title: "Iniciar sesión",
    children: (
      <SigIn
        onSignUp={() => handleOpenPopup(sigInUp)}
        onClose={handleClosePopup}
        setSavedArticles={setSavedArticles}
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
          onBack={() => handleOpenPopup(sigInUp)}
        />
      ),
    });
  }

  //cerrar popup
  function handleClosePopup() {
    setIsPopupOpen(null);
  }
  return (
    <>
      <Header
        popup={isPopupOpen}
        onOpenPopup={handleOpenPopup} // abrir el popup
        sigInPopup={sigInPop}
        closePopup={handleClosePopup}
        setSavedArticles={setSavedArticles}
      />

      <SearchForm onSearch={onSearch} />
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
