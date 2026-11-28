import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { getToken, removeToken } from "./utils/token";
import { getCurrentUser } from "./utils/auth";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
import { getArticle, saveArticle, deleteArticle } from "./utils/ArticlesApi";
import {getNews} from "./utils/NewsApi";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [isCheckingToken, setIsCheckingToken] = useState(true);

  //usamos para mostrar los datos guardados
  const [savedArticles, setSavedArticles] = useState([]);

  // guardamos los datos del formulario de busqueda en el estado searchValue
  const [searchKeyword, setSearchKeyword] = useState("");
  // usamos para mostrar articulos desde el principio
  const [articles, setArticles] = useState([]);
  //estado que indique si el usuario ya realizó una búsqueda.
  const [hasSearched, setHasSearched] = useState(false);

  //controlar preloader
  const [isLoading, setIsLoading] = useState(false);

  //Este estado guardará el mensaje que queremos mostrar cuando falle la petición.
  const [error, setError] = useState("");

  // verificar si el token es valido
  useEffect(() => {
    const token = getToken();

    if(!token){
      setIsCheckingToken(false);
      return;
    }

      getCurrentUser(token)
        .then((response) => {
          setUser(response.data.name);
          setIsLoggedIn(true);

          return getArticle(token);
        })
        .then((response) => {
          setSavedArticles(response.data);
        })
        .catch(() => {
          removeToken();
          setIsLoggedIn(false);
          setUser(null);
        })
        .finally(() => {
      setIsCheckingToken(false);
    });
  }, []);

//buscamos por searchForm
  const handleSearch = async (keyword) => {
    setHasSearched(true);
    setSearchKeyword(keyword);
    setError("");
    setIsLoading(true);

    try {
      const articles = await getNews(keyword);
      setArticles(articles);
    } catch (error) {
      if (error.status === 401) {
        console.error("API key inválido o no autorizado");
      } else if (error.status === 429) {
        console.error("Se excedió el límite de solicitudes");
      } else if (error.status >= 500) {
        console.error("Error interno del servidor");
      }
      setError(
        "Lo sentimos, algo ha salido mal durante la solicitud, Es posible que haya un problema de conexion o que el servidor no funcione, por favor intentelo más tarde",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // handler para guardar articulos
  const handleSaveArticle = async (article) => {
    //debemos saber si ya esta guardado en la card
    const alreadySaved = savedArticles.some(
      (savedArticle) => savedArticle.link === article.url,
    );

    if (!alreadySaved) {
      const token = getToken();

      try {
        const articleToSave = {
          keyword: article.keyword,
          title: article.title,
          text: article.content,
          date: article.publishedAt,
          source: article.source.name,
          link: article.url,
          image: article.urlToImage,
        };
        const response = await saveArticle(articleToSave, token);
        setSavedArticles((prevArticles) => [...prevArticles, response.data]);
      } catch (error) {
        console.error("Error al guardar:", error.message);
      }
    }
  };

  //handler para eliminar articulo
  const handleRemoveArticle = async (article) => {
    const token = getToken();
    try {
      await deleteArticle(article._id, token);

      setSavedArticles((prevArticles) =>
        prevArticles.filter(
          (savedArticle) => savedArticle._id !== article._id,
        ),
      );
    } catch (error) {
      console.error("Error al eliminar:", error.message);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isCheckingToken,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Main
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              handleSaveArticle={handleSaveArticle}
              handleRemoveArticle={handleRemoveArticle}
              searchKeyword={searchKeyword}
              articles={articles}
              hasSearched={hasSearched}
              isLoading={isLoading}
              error={error}
              onSearch={handleSearch}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute>
              <SavedNews
                savedArticles={savedArticles}
                handleRemoveArticle={handleRemoveArticle}
                setSavedArticles={setSavedArticles}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
