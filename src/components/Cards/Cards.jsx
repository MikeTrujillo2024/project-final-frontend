import perro from "../../images/image_perro.png";
import montana from "../../images/image_Montana.png";
import cirvo from "../../images/image_ciervo.png";
export default function Card() {
  return (
    <section className="cards">
      <div className="cards__title">
        <h2 className="cards__title-huno">Search Results</h2>
      </div>
      <div className="cards__card-list">
        <div className="cards__card">
          <div className="cards__wrapper">
            <button className="cards__button-save"></button>
            <span className="cards__tooltip">Sign in to save articles</span>
          </div>
          <img src={perro} alt="imagen cards" className="cards__img" />
          <div className="cards__info">
            <div className="cards__date">
                November 4, 2020
            </div>
            <div className="cards__title-info">
                Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf sdf sdfsdfs
            </div>
            <div className="cards__datail">
                Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find
            </div>
            <div className="cards__footer">
                treehugger
            </div>
          </div>
        </div>
        <div className="cards__card">
          <div className="cards__wrapper">
            <button className="cards__button-save"></button>
            <span className="cards__tooltip">Sign in to save articles</span>
          </div>
          <img src={montana} alt="imagen cards" className="cards__img" />
          <div className="cards__info">
            <div className="cards__date">
                November 4, 2020
            </div>
            <div className="cards__title-info">
                Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf sdf sdfsdfs
            </div>
            <div className="cards__datail">
                Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find
            </div>
            <div className="cards__footer">
                treehugger
            </div>
          </div>
        </div>
        <div className="cards__card">
          <div className="cards__wrapper">
            <button className="cards__button-save"></button>
            <span className="cards__tooltip">Sign in to save articles</span>
          </div>
          <img src={cirvo} alt="imagen cards" className="cards__img" />
          <div className="cards__info">
            <div className="cards__date">
                November 4, 2020
            </div>
            <div className="cards__title-info">
                Everyone Needs a Special 'Sit Spot' in Naturevf sdfsdf sdfsdf sdf sdf sdfsdfs
            </div>
            <div className="cards__datail">
                Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find
            </div>
            <div className="cards__footer">
                treehugger
            </div>
          </div>
        </div>
      </div>
        <div className="cards__wrapper-button">
        <button className="cards__button-more">Show more</button>
        </div>
    </section>
  );
}
