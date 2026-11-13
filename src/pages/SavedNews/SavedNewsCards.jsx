import perro from "../../images/image_perro.png";
import NewsCard from "../../components/ComponentsMain/Cards/NewsCard";
export default function SavedNewsCards({savedArticles, handleRemoveArticle}) {

/* const saveArticles = [
  {
    id: 1,
    image: perro,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book...",
    source: "treehugger",
    keyword: "Naturaleza",
  },
  {
    id: 2,
    image: perro,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book...",
    source: "treehugger",
    keyword: "Naturaleza",
  },
  {
    id: 3,
    image: perro,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book...",
    source: "treehugger",
    keyword: "Naturaleza",
  },
  {
    id: 4,
    image: perro,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book...",
    source: "treehugger",
    keyword: "Tecnologia",
  },
  {
    id: 5,
    image: perro,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: "Ever since I read Richard Louv's influential book...",
    source: "treehugger",
    keyword: "Naturaleza",
  },
] */

  return (
    <section className="section__cards">
      <div className="section__card-list">
        {savedArticles.map((article) =>(
          <NewsCard key={article.id}
          article={article}
          isSaved={true}
          onRemove={handleRemoveArticle}
          />
        ))}
        
      </div>
    </section>
  );
}
 