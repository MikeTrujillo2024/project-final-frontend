import { useState } from "react";
import Header from "./Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Cards from "./Cards/Cards";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";
import SigIn from "./Popup/PopupSystem/PopupSigin";
import Signup from "./Popup/PopupSystem/PopupSignup";
function App() {
  //modal
  const [isPopupOpen, setIsPopupOpen] = useState(null);

  //sigin
  const sigInPop = {
    title: "Iniciar Sesion",
    children: <SigIn onSignUp={()=>handleOpenPopup(sigInUp)}/>,
  };

  //signup
  const sigInUp = {
    title: "Inscribirse",
    children: <Signup onSign={()=>handleOpenPopup(sigInPop)}/>
  }

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

export default App;
