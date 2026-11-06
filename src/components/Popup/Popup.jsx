export default function Popup(props) {
  const { title, children, closePopup } = props;
  return (
    <div className="popup">
      <div className="popup__wrap">
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
