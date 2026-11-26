import NorFoundImage from "../../images/not-found_v1.svg"
export default function NotFound() {
  return (
    <div className="not__found">
        <img src={NorFoundImage} alt="Sin resultados" className="not__found-img"/>
      <h2 className="not__found-title">No se ha encontrado nada</h2>
      <p className="not__found-description">Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda.</p>
    </div>
  );
}
