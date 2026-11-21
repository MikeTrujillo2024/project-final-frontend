export default function popupErrorMessage({message, onBack}) {
  return (
    <div>
      <p>{message}</p>
      <button
        className="popup__button-submit"
        onClick={onBack}
      >
        Volver al registro
      </button>
    </div>
  );
}
