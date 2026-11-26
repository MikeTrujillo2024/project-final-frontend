import { useState, useEffect } from "react";
import Preloader from "../../Preloader/Preloader";
import NotFound from "../../NotFound/NotFound";
import NewsCard from "./NewsCard";
import { CARDS_PER_PAGE } from "../../../utils/constants";
export default function NewsCardList({
  articles,
  onSave,
  savedArticles,
  onRemove,
  hasSearched,
  isLoading,
  error,
}) {
  // controla la cantidad de tarjetas visibles
  const [visibleCards, setVisibleCards] = useState(3);

  const showcards = articles.slice(0, visibleCards);

  // Reinicia la cantidad de tarjetas cuando cambia la búsqueda
  useEffect(() => {
    setVisibleCards(CARDS_PER_PAGE);
  }, [articles]);

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + CARDS_PER_PAGE);
  };

  return (
    <section className="cards">
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p>{error}</p>
      ) : !hasSearched ? null : articles.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className="cards__title">
            <h2 className="cards__title-huno">Resultado de búsqueda</h2>
          </div>
          <div className="cards__card-list">
            {showcards.map((article) => (
              <NewsCard
                key={article.url}
                article={article}
                isSaved={savedArticles.some(
                  (savedArticle) =>
                    (savedArticle.link || savedArticle.url) === article.url,
                )}
                onSave={onSave}
                onRemove={onRemove}
              />
            ))}
          </div>
          {visibleCards < articles.length && (
            <div className="cards__wrapper-button">
              <button className="cards__button-more" onClick={handleShowMore}>
                Mostrar más
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
