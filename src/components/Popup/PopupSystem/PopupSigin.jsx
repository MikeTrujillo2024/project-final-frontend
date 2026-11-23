import { useState, useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { getArticle } from "../../../utils/ArticlesApi";
import {
  isEmail,
  isPass,
  validateField,
  showError,
} from "../../../utils/Validation";
import { login, getCurrentUser } from "../../../utils/auth";
import { setToken } from "../../../utils/token";

export default function PopupSigin({ onSignUp, onClose, setSavedArticles }) {
  const { setIsLoggedIn,setUser } = useContext(CurrentUserContext);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showPassInfo, setShowPassInfo] = useState(false);
  const [data, setData] = useState({ email__Sigin: "", password__Sigin: "" });

  //validamos email
  const handleChangeEmail = (event) => {
    const valueEmail = event.target.value;
    const result = validateField(valueEmail, isEmail);
    showError(result, setErrorEmail);

    handleChange(event);
  };
  //validamos password
  const handlePassword = (event) => {
    const valuePassword = event.target.value;
    const resultPass = validateField(valuePassword, isPass);
    showError(resultPass, setErrorPassword);

    handleChange(event);
  };

  //siempre que todos los inputs sean validos
  const isFormValid =
    validateField(data.email__Sigin, isEmail) === "valid" &&
    validateField(data.password__Sigin, isPass) === "valid";

  const handleChange = (valor) => {
    const { name, value } = valor.target;
    setData((preData) => ({ ...preData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = validateField(data.email__Sigin, isEmail);
    const pass = validateField(data.password__Sigin, isPass);

    showError(email, setErrorEmail);
    showError(pass, setErrorPassword);

    if (email === "valid" && pass === "valid") {
      try {
        const response = await login({
          email: data.email__Sigin,
          password: data.password__Sigin,
        });

        setToken(response.token);

        const userResponse = await getCurrentUser(response.token);
        setIsLoggedIn(true);
        setUser(userResponse.data.name);
        const articlesResponse = await getArticle(response.token);
        setSavedArticles(articlesResponse.data);

        onClose();
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
      }
    }
  };
  return (
    <>
      <form className="poup__form-sigin" onSubmit={handleSubmit} noValidate>
        <div className="popup__wrapper-formInput">
          <label className="poup__form-label" htmlFor="popup__sigin-email">
            Correo electrónico
          </label>
          <input
            type="email"
            className="popup__form-input"
            name="email__Sigin"
            value={data.email__Sigin}
            onChange={handleChangeEmail}
            id="popup__sigin-email"
            placeholder="Introduce tu correo electrónico"
            required
          />
          <span className="inputs_span form__input-error_active">{`${errorEmail}`}</span>
        </div>
        <div className="popup__wrapper-formInput">
          <label className="poup__form-label" htmlFor="popup__sigin-password">
            Contraseña
          </label>
          <input
            type="password"
            className="popup__form-input"
            name="password__Sigin"
            value={data.password__Sigin}
            onChange={handlePassword}
            onFocus={() => setShowPassInfo(true)}
            onBlur={() => setShowPassInfo(false)}
            id="popup__sigin-password"
            placeholder="Introduce tu contraseña"
            required
          />
          <span className="inputs_span form__input-error_active">{`${errorPassword}`}</span>
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
        <div className="popup__button">
          <button
            type="submit"
            className="popup__button-submit"
            disabled={!isFormValid}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      <button className="popup__button-link" onClick={onSignUp}>
        o inscribirse
      </button>
    </>
  );
}
