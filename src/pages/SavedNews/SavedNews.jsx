import { useState } from "react";
import Header from "../../components/Header/Header";
import SigIn from "../../components/Popup/PopupSystem/PopupSigin";
import Signup from "../../components/Popup/PopupSystem/PopupSignup";
function SavedNews() {
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
           
          />

        </>
  );
}

export default SavedNews;
