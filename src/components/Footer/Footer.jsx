import Facebook from "../../images/facebook.png";
import Github from "../../images/github.png";
export default function Footer(){
    return(
        <div className="footer">
           <div className="footer__copyright">&copy; 2026 Supersite, Powered by News API</div>
           <div className="footer__redesSociales">
                <ul className="footer__redesSociales-lista">
                    <li>
                        Inicio
                    </li>
                    <li>
                        Practicum
                    </li>
                    <li>
                        <a href="http://"><img src={Facebook} alt="imagen facebook" className="footer__redesSociales-img"  /></a>
                    </li>
                    <li>
                        <a href="http://"><img src={Github} alt="imagen github" className="footer__redesSociales-img"  /></a>
                    </li>
                </ul>
            </div> 
        </div>
    );
}