import perro from "../../images/image_perro.png";
import NewsCard from "../../components/ComponentsMain/Cards/NewsCard";
export default function SavedNewsCards() {
const saveArticles = [
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
]

  return (
    <section className="section__cards">
      <div className="section__card-list">
        {saveArticles.map((article) =>(
          <NewsCard key={article.id}
          article={article}
          isSaved={true}
          />
        ))}
{/*         <divhh className="section__card">
          <div className="section__wrapper">
            <div className="section__wrapper-tag">
               <span className="section__tag">Naturaleza</span>
            </div>
            <div className="section__wrapper-trash">
               <button className="section__button-save"></button>
              <span className="section__tooltip">Remove from Saved</span>
            </div>
          </div>
          <img src={perro} alt="imagen cards" className="section__img" />
          <div className="section__info">
            <div className="section__date">November 4, 2020</div>
            <div className="section__title-info">
              Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf
              sdf sdfsdfs
            </div>
            <div className="section__detail">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find
            </div>
            <div className="section__footer">treehugger</div>
          </div>
        </divhh>
        <div className="section__card">
          <div className="section__wrapper">
            <div className="section__wrapper-tag">
               <span className="section__tag">Naturaleza</span>
            </div>
            <div className="section__wrapper-trash">
               <button className="section__button-save"></button>
              <span className="section__tooltip">Remove from Saved</span>
            </div>
          </div>
          <img src={perro} alt="imagen cards" className="section__img" />
          <div className="section__info">
            <div className="section__date">November 4, 2020</div>
            <div className="section__title-info">
              Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf
              sdf sdfsdfs
            </div>
            <div className="section__detail">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find
            </div>
            <div className="section__footer">treehugger</div>
          </div>
        </div>
        <div className="section__card">
          <div className="section__wrapper">
            <div className="section__wrapper-tag">
               <span className="section__tag">Naturaleza</span>
            </div>
            <div className="section__wrapper-trash">
               <button className="section__button-save"></button>
              <span className="section__tooltip">Remove from Saved</span>
            </div>
          </div>
          <img src={perro} alt="imagen cards" className="section__img" />
          <div className="section__info">
            <div className="section__date">November 4, 2020</div>
            <div className="section__title-info">
              Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf
              sdf sdfsdfs
            </div>
            <div className="section__detail">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find
            </div>
            <div className="section__footer">treehugger</div>
          </div>
        </div>
        <div className="section__card">
          <div className="section__wrapper">
            <div className="section__wrapper-tag">
               <span className="section__tag">Naturaleza</span>
            </div>
            <div className="section__wrapper-trash">
               <button className="section__button-save"></button>
              <span className="section__tooltip">Remove from Saved</span>
            </div>
          </div>
          <img src={perro} alt="imagen cards" className="section__img" />
          <div className="section__info">
            <div className="section__date">November 4, 2020</div>
            <div className="section__title-info">
              Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf
              sdf sdfsdfs
            </div>
            <div className="section__detail">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find
            </div>
            <div className="section__footer">treehugger</div>
          </div>
        </div>
        <div className="section__card">
          <div className="section__wrapper">
            <div className="section__wrapper-tag">
               <span className="section__tag">Naturaleza</span>
            </div>
            <div className="section__wrapper-trash">
               <button className="section__button-save"></button>
              <span className="section__tooltip">Remove from Saved</span>
            </div>
          </div>
          <img src={perro} alt="imagen cards" className="section__img" />
          <div className="section__info">
            <div className="section__date">November 4, 2020</div>
            <div className="section__title-info">
              Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf
              sdf sdfsdfs
            </div>
            <div className="section__detail">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find
            </div>
            <div className="section__footer">treehugger</div>
          </div>
        </div> */}
        
      </div>
    </section>
  );
}
 