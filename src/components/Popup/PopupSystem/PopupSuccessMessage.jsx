export default function popupSuccessMessage({
  setIsRegisterSuccess,
  onLogin}) {
  return (
    <div className="poup__form-sigin">
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
