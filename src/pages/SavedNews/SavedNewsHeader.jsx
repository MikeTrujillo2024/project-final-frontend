 export default function SavedNewHeader({savedArticles}) {
    const keyword = [...new Set(savedArticles.map((article) => article.keyword))];
  return (
  <section className="section">
    <div className="section__wrapp">
        <div className="section__title">
            Artículos guardadosd
        </div>
        <div className="section__articles">
            Elise, tienes {savedArticles.length} artículos guardados
        </div>
        <div className="section__keyWord">
            Por palabras clave:<strong>{keyword.join(", ")}</strong> 
        </div>
    </div>  
  </section>
  );
}
