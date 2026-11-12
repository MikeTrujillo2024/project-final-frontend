import { useState } from "react";
import Preloader from "../../Preloader/Preloader";
import articles from "../../../utils/MockArticles";
import NotFound from "../../NotFound/NotFound";
export default function Card() {
  // muestra el preloader mientras se cargan las tarjetas
  const [isLoading, setIsLoading] = useState(false);
  // controla la cantidad de tarjetas visibles
  const [visibleCards, setVisibleCards] = useState(3);

  const showcards = articles.slice(0, visibleCards);


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
              <div className="cards__card" key={article.id}>
                <div className="cards__wrapper">
                  <button className="cards__button-save"></button>
                  <span className="cards__tooltip">
                    Sign in to save articles
                  </span>
                </div>
                <img
                  src={article.image}
                  alt="imagen cards"
                  className="cards__img"
                />
                <div className="cards__info">
                  <div className="cards__date">{article.date}</div>
                  <div className="cards__title-info">{article.title}</div>
                  <div className="cards__datail">{article.text}</div>
                  <div className="cards__footer">{article.source}</div>
                </div>
              </div>
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
