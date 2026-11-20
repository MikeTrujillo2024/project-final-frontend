import { useState } from "react";
export default function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // creamos onsubmit para que cuando el usuario haga click en el boton de buscar, se ejecute la funcion handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = searchValue.trim();
    if (!keyword.trim()) {
      setErrorMessage("Por favor, introduzca una palabra clave");
      return;
    }

    setErrorMessage("");
    onSearch(keyword);
  };
  return (
    <div className="search">
      <section className="search__wrap">
        <h1 className="search__text">¿Qué está pasando en el mundo?</h1>
        <p className="search__text--notice">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
        </p>
        <div className="search__form" noValidate onSubmit={handleSubmit}>
          <form noValidate onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchName"
              id="search__input--id"
              value={searchValue}
              onChange={(e) => {setSearchValue(e.target.value); setErrorMessage("")}}
              className="search__input"
              placeholder="Introduce un tema"
            />
            {errorMessage && (
              <span className="search__form-error">{errorMessage}</span>
            )}
            <button className="search__button" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
