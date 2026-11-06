export default function PopupSigin({  onSignUp }) {
  return (
    <>
    <form className="poup__form-sigin">
      <div className="popup__wrapper-formInput">
        <label class="poup__form-label" for="idPopupSigin">
          Correo electrónico
        </label>
        <input
          type="email"
          className="popup__form-input"
          name="email__Sigin"
          id="idPopupSigin"
          placeholder="Introduce tu correo electrónico"
          required
        />
      </div>
      <div className="popup__wrapper-formInput">
        <label class="poup__form-label" for="idPopupSigin">
         Contraseña
        </label>
        <input
          type="email"
          className="popup__form-input"
          name="email__Sigin"
          id="idPopupSigin"
          placeholder="Introduce tu contraseña"
          required
        />
      </div>
      <div className="popup__button">
        <button type="submit" className="popup__button-submit">Iniciar sesión</button>
      </div>
    </form>
      <button className="popup__button-link" onClick={onSignUp}>o inscribirse</button>
    </>
  );
}
