import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import NotAviable from "../../../images/notAviable.svg";
export default function NewsCard({
  article,
  isSaved,
  onSave,
  isSavedPage,
  onRemove,
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const formataDate = (date) => {
    return new Date(date).toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const cleanText = (text) => {
    return text
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };
  return (
    <article className={isSaved ? "section__card" : "cards__card"}>
      <div className={isSavedPage ? "section__wrapper" : "cards__wrapper"}>
        {isSavedPage ? (
          <>
            <div className="section__wrapper-tag">
              <span className="section__tag">{article.keyword}</span>
            </div>
            <div className="section__wrapper-trash">
              <button
                className="section__button-save"
                onClick={() => onRemove(article)}
              ></button>
              <span className="section__tooltip">Eliminar</span>
            </div>
          </>
        ) : (
          <>
            <button
              className={`cards__button-save ${isSaved ? "cards__button-save_active" : ""}`}
              onClick={() => isLoggedIn && onSave(article)}
            ></button>
            {!isLoggedIn && (
              <span className="cards__tooltip">Inicia sesión para guardar</span>
            )}
          </>
        )}
      </div>
      <a href={article.url || article.link} target="_blank" className="cards__link-image" rel="noopener noreferrer">
        <img
          src={article.urlToImage || article.image || NotAviable}
          alt={article.title}
          className={isSaved ? "section__img" : "cards__img"}
        />
        <div className={isSaved ? "section__info" : "cards__info"}>
          <time className={isSaved ? "section__date" : "cards__date"}>
            {formataDate(article.publishedAt || article.date)}
          </time>
          <h3 className={isSaved ? "section__title-info" : "cards__title-info"}>
            {article.title}
          </h3>
          <p className={isSaved ? "section__detail" : "cards__detail"}>
            {cleanText(article.description || article.text || "")}
          </p>
          <p className={isSaved ? "section__footer" : "cards__footer"}>
            {article.source.name || article.source}
          </p>
        </div>
      </a>
    </article>
  );
}
