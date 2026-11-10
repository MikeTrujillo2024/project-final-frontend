export default function SearchForm() {
  return (
    <div className="search">
      <section className="search__wrap">
        <h1 className="search__text">¿Qué está pasando en el mundo?</h1>
        <p className="search__text--notice">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
        </p>
        <div className="search__form">
          <form noValidate>
            <input
              type="text"
              name="searchName"
              id="search__input--id"
              className="search__input"
              placeholder="Introduce un tema"
            />
            <button className="search__button" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
