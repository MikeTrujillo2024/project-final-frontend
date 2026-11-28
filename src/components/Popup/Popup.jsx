import {useEffect} from "react";
export default function Popup(props) {  
  const { title, children, closePopup } = props;

  useEffect(() => {
  function handleEsc(event) {
    if (event.key === "Escape") {
      closePopup();
    }
  }

  document.addEventListener("keydown", handleEsc);

  return () => {
    document.removeEventListener("keydown", handleEsc);
  };
}, [closePopup]);
  return (
    <div className="popup" onClick={closePopup}>
      <div className="popup__wrap " onClick={(e) => e.stopPropagation()}>
        <div className="popup__cross">
          <button 
            type="button" className="popup__cancel"
            onClick={closePopup}>
            +
          </button>
        </div>

        <div className="popup__container">
          <fieldset className="popup__content">
            <h3 className="popup__content-title">{title}</h3>
            {children}
          </fieldset>
        </div>
      </div>
    </div>
  );
}
