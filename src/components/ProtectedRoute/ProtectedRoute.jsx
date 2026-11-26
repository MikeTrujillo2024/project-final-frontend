import { useContext } from "react";
import { Navigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

/**
 * Primero comprueba isCheckingToken.
 * Si está verificando, muestra «Cargando...».
 * Cuando termina, comprueba isLoggedIn.
 * Si está autenticado, muestra children; de lo contrario, redirige. * 
 */
export default function ProtectedRoute({ children }) {
  const { isLoggedIn, isCheckingToken } = useContext(CurrentUserContext);

  if (isCheckingToken) {
    return <p>Cargando...</p>;
  }

  return isLoggedIn ? children : <Navigate to="/" replace />;
}
