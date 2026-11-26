import NewsCard from "../../components/ComponentsMain/Cards/NewsCard";
export default function SavedNewsCards({ savedArticles, handleRemoveArticle }) {


  return (
    <section className="section__cards">
      <div className="section__card-list">
        {savedArticles.length === 0 ? (
          <p className="section__empty">
            No has guardado ningún artículo todavía
          </p>
        ) : (
          savedArticles.map((article) => (
            <NewsCard
              key={article._id}
              article={article}
              isSaved={true}
              isSavedPage={true}
              onRemove={handleRemoveArticle}
            />
          ))
        )}
      </div>
    </section>
  );
}
