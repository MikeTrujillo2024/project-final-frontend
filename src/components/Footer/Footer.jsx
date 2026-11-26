import { Link } from "react-router-dom";
import Facebook from "../../images/facebook.svg";
import Github from "../../images/github.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2026 Supersite, Powered by News API
      </p>
      <nav className="footer__redesSociales">
        <ul className="footer__redesSociales-lista">
          <li>
            <Link to="/" className="footer__link">Inicio</Link>
          </li>
          <li>
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Tripleten
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/miguel.fernandez.476264"
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar Facebook"
            >
              <img
                src={Facebook}
                alt="imagen facebook"
                className="footer__redesSociales-img"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MikeTrujillo2024"
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar GitHub"
            >
              <img
                src={Github}
                alt="imagen github"
                className="footer__redesSociales-img"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
