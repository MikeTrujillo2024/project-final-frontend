export default function PopupSuccessMessage({
  setIsRegisterSuccess,
  onLogin}) {
  return (
    <div className="popup__form-sigin">
      <button
        className="popup__button-submitSuccess"
        onClick={() => {
          setIsRegisterSuccess(false);
          onLogin();
        }}
      >
        Iniciar sesión
      </button>
    </div>
  );
}
