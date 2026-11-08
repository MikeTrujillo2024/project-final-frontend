import { useState } from "react";
import {
  isEmail,
  isName,
  isPass,
  validateField,
  showError,
} from "../../../utils/Validation";
export default function PopupSigin({ onSign }) {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [showPassInfo, setShowPassInfo] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [data, setData] = useState({ email: "", password: "", nameUser: "" });

  // validar email
  const handleChangeEmail = (event) => {
    const valueEmail = event.target.value;
    const result = validateField(valueEmail, isEmail);
    showError(result, setErrorEmail);
    handleChange(event);
  };

  // validar password
  const handleChangePassword = (event) => {
    const valuePassword = event.target.value;
    const resultPAss = validateField(valuePassword, isPass);
    showError(resultPAss, setErrorPass);
    handleChange(event);
  };

  //valid userName
  const handleChangeUserName = (event) => {
    const valueUser = event.target.value;
    const resultUser = validateField(valueUser, isName, 50);
    showError(resultUser, setErrorName);
    handleChange(event);
  };

  const handleChange = (valor) => {
    const { name, value } = valor.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid =
    validateField(data.email, isEmail) === "valid" &&
    validateField(data.password, isPass) === "valid" &&
    validateField(data.nameUser, isName, 50)=== "valid";
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = validateField(data.email, isEmail);
    const password = validateField(data.password, isPass);
    const name = validateField(data.nameUser, isName, 50);

    showError(email, setErrorEmail);
    showError(password, setErrorPass);
    showError(name, setErrorName);

    if (email === "valid" && password === "valid" && name === "valid") {
      console.log("todo esta perfecto");
    }
  };
  return (
    <>
      <form className="poup__form-sigin" onSubmit={handleSubmit} noValidate>
        <div className="popup__wrapper-formInput">
          <label className="poup__form-label" htmlFor="idPopupSigin">
            Correo electrónico
          </label>
          <input
            type="email"
            className="popup__form-input"
            name="email"
            value={data.email}
            id="idPopupSigin"
            onChange={handleChangeEmail}
            placeholder="Introduce tu correo electrónico"
            required
          />
          <span className="inputs_span form__input-error_active">{`${errorEmail}`}</span>
        </div>

        <div className="popup__wrapper-formInput">
          <label className="poup__form-label" htmlFor="idPopupSigin">
            Contraseña
          </label>
          <input
            type="password"
            className="popup__form-input"
            name="password"
            value={data.password}
            onChange={handleChangePassword}
            onFocus={() => setShowPassInfo(true)}
            onBlur={() => setShowPassInfo(false)}
            id="idPopupSigin"
            placeholder="Introduce tu contraseña"
            required
          />
          <span className="inputs_span form__input-error_active">{`${errorPass}`}</span>
          {showPassInfo && (
            <div className="popup__tootlstip">
              <p>La contraseña debe contener:</p>
              <ul>
                <li>Mínimo 8 caracteres.</li>
                <li>Al menos una mayúscula.</li>
                <li>Al menos una minúscula.</li>
                <li>Al menos un número.</li>
              </ul>
            </div>
          )}
        </div>
        <div className="popup__wrapper-formInput">
          <label className="poup__form-label" htmlFor="idPopupSigin">
            Nombre de usuario
          </label>
          <input
            type="email"
            className="popup__form-input"
            name="nameUser"
            value={data.nameUser}
            onChange={handleChangeUserName}
            id="idPopupSigin"
            placeholder="Introduce tu nombre de usuario"
            required
          />
          <span className="inputs_span form__input-error_active">{`${errorName}`}</span>
        </div>
        <div className="popup__button">
          <button type="submit" className="popup__button-submit" disabled={!isFormValid}>
            Iniciar sesión
          </button>
        </div>
      </form>
      <button className="popup__button-link" onClick={onSign} >
        o iniciara sesion
      </button>
    </>
  );
}
