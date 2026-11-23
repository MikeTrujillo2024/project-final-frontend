import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { getToken, removeToken } from "./utils/token";
import { getCurrentUser } from "./utils/auth";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
import { getArticle, saveArticle, deleteArticle } from "./utils/ArticlesApi";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  //usamos para mostrar los datos guardados
  const [savedArticles, setSavedArticles] = useState([]);
  // verificar si el token es valido
  useEffect(() => {
    const token = getToken();

    if (token) {
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
        });
    }
  }, []);

  // handler para guardar articulos
  const handleSaveArticle = async (article) => {
    //debemos saber si ya esta guardado en la card
    const alreadySaved = savedArticles.some(
      (savedArticle) => savedArticle.url === article.url,
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
      console.log("Artículo eliminado:", article._id);
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
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
