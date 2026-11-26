export default function PopupErrorMessage({message, onBack}) {
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
