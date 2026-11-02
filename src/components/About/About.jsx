import imageMike from "../../images/mike.jpg";
export default function About() {
  return (
    <div className="about">
      <div className="about__image-wrapper">
        <img src={imageMike} alt="Imagen del autor" className="about__image" />
      </div>
      <div className="about__text-wrapper">
        <h2 className="about__text-title">Acerca del autor</h2>
        <p className="about__text-autor">
          ¡Hola! Soy Miguel Ángel Fernández Trujillo.
        </p>
        <p className="about__text-autor">
          Me gusta el desarrollo web y todo lo que podemos crear con la
          programación. He trabajado con tecnologías como HTML, CSS, JavaScript,
          React, Node.js, Express, MongoDB, PHP y MySQL.
        </p>
        <p className="about__text-autor">
          En este camino he aprendido nuevas formas de organizar mi código,
          crear aplicaciones y trabajar con diferentes tipos de bases de datos.
          También he descubierto que siempre hay algo nuevo por aprender y
          mejorar.
        </p>
        <p className="about__text-autor">
          Actualmente sigo desarrollando proyectos y disfrutando el proceso de
          aprender y construir cosas nuevas.
        </p>
      </div>
    </div>
  );
}
