import { useState, useEffect } from "react";
import Preloader from "../../Preloader/Preloader";
import NotFound from "../../NotFound/NotFound";
import NewsCard from "./NewsCard";
export default function NewsCardList({ articles, onSave, savedArticles, onRemove }) {
  // muestra el preloader mientras se cargan las tarjetas
  const [isLoading, setIsLoading] = useState(false);
  // controla la cantidad de tarjetas visibles
  const [visibleCards, setVisibleCards] = useState(3);

  const showcards = articles.slice(0, visibleCards);

  useEffect(() => {
    setVisibleCards(3);
  }, [articles]);

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <section className="cards">
      {isLoading ? (
        <Preloader />
      ) : articles.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className="cards__title">
            <h2 className="cards__title-huno">Search Results</h2>
          </div>
          <div className="cards__card-list">
            {showcards.map((article) => (
              <NewsCard 
              key={article.id} 
              article={article} 
              isSaved={savedArticles.some((savedArticle) =>savedArticle.id === article.id)} 
              onSave={onSave}
              onRemove={onRemove}/>
            ))}
          </div>
          {visibleCards < articles.length && (
            <div className="cards__wrapper-button">
              <button className="cards__button-more" onClick={handleShowMore}>
                Show more
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
