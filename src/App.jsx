import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";
import Main from "./pages/Main/Main";
import SavedNews from "./pages/SavedNews/SavedNews";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

    //usamos para mostrar los datos guardados
  const [savedArticles, setSavedArticles] = useState(() => {
    return JSON.parse(localStorage.getItem("articles")) || [];
  });


  // handler para guardar articulos
  const handleSaveArticle = (article) => {
    //debemos saber si ya esta guardado ela card
    const alreadySaved = savedArticles.some(
      (savedArticle) => savedArticle.id === article.id,
    );

    if (!alreadySaved) {
      setSavedArticles([...savedArticles, article]);
      console.log("Artículo guardado:", article);
    }
  };

  //handler para eliminar articulo
  const handleRemoveArticle = (article) => {
    const updateArticles = savedArticles.filter(
      (savedArticle) => savedArticle.id !== article.id,
    );

    setSavedArticles(updateArticles);
  };


  //guardamos los datos en localstorage
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(savedArticles));
  }, [savedArticles]);

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
          element={<SavedNews 
            savedArticles={savedArticles}
            handleRemoveArticle={handleRemoveArticle} />}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
