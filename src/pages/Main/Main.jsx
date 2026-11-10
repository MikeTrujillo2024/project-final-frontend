import { useState } from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/ComponentsMain/SearchForm/SearchForm";
import Cards from "../../components/ComponentsMain/Cards/Cards";
import About from "../../components/ComponentsMain/About/About";
import Footer from "../../components/Footer/Footer";
import SigIn from "../../components/Popup/PopupSystem/PopupSigin";
import Signup from "../../components/Popup/PopupSystem/PopupSignup";
function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(null);


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
      <SearchForm />
      <Cards />
      <About />
      <Footer />
    </>
  );
}

export default Main;
