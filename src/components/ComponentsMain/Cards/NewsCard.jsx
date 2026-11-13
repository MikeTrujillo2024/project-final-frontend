export default function NewsCard({ article, isSaved }) {
  return (
    <div className={isSaved ? "section__card" : "cards__card"} >
      <div className={isSaved ? "section__wrapper" : "cards__wrapper"}>
        {isSaved ? (
          <>
           <div className="section__wrapper-tag">
               <span className="section__tag">{article.keyword}</span>
            </div>
            <div className="section__wrapper-trash">
               <button className="section__button-save"></button>
              <span className="section__tooltip">Remove from Saved</span>
            </div>
          </>
        ) : (
          <>
            <button className="cards__button-save"></button>
            <span className="cards__tooltip">Sign in to save articles</span>
          </>
        )}
      </div>
      <img src={article.image} alt="imagen cards" className={isSaved ? "section__img" :"cards__img"} />
      <div className={isSaved ? "section__info" : "cards__info"}>
        <div className={isSaved ? "section__date":"cards__date"}>{article.date}</div>
        <div className={isSaved ? "section__title-info":"cards__title-info"}>{article.title}</div>
        <div className={isSaved ? "section__datail":"cards__datail"}>{article.text}</div>
        <div className={isSaved ? "section__footer":"cards__footer"}>{article.source}</div>
      </div>
    </div>
  );
}
