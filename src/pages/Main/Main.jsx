import { useState } from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/ComponentsMain/SearchForm/SearchForm";
import NewsCardList from "../../components/ComponentsMain/Cards/NewsCardList";
import About from "../../components/ComponentsMain/About/About";
import Footer from "../../components/Footer/Footer";
import SigIn from "../../components/Popup/PopupSystem/PopupSigin";
import Signup from "../../components/Popup/PopupSystem/PopupSignup";
import Articles from "../../utils/MockArticles";
function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(null);

  // guardamos los datos del formulario de busqueda en el estado searchValue
  const [searchKeyword, setSearchKeyword] = useState("");
  const [articles, setArticles] = useState(Articles);

 
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    const normalizeKeyword = keyword.toLowerCase();

    const filteredArticles = Articles.filter(
      (article) =>
        article.title.toLowerCase().includes(normalizeKeyword) ||
        article.text.toLowerCase().includes(normalizeKeyword),
    );
    setArticles(filteredArticles);
  };
  //sigin
  const sigInPop = {
    title: "Iniciar Sesion",
    children: <SigIn onSignUp={() => handleOpenPopup(sigInUp)} />,
  };

  //signup
  const sigInUp = {
    title: "Inscribirse",
    children: <Signup onSign={() => handleOpenPopup(sigInPop)} />,
  };

  // abrir popup
  function handleOpenPopup(popup) {
    setIsPopupOpen(popup);
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
      <NewsCardList articles={articles} />
      <About />
      <Footer />
    </>
  );
}

export default Main;
