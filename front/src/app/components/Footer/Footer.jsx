import Insta from "../../assets/icons/insta.svg";
import Fb from "../../assets/icons/fb.svg";
import Ytb from "../../assets/icons/ytb.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="social-media-container">
          <a href="/" className="media-wrapper">
            <img src={Fb} alt="" className="media-icon" />
          </a>
          <a href="/" className="media-wrapper">
            <img src={Insta} alt="" className="media-icon" />
          </a>
          <a href="/" className="media-wrapper">
            <img src={Ytb} alt="" className="media-icon" />
          </a>
        </div>

        <div className="footer-list-container">
          <div className="footer-list-item">
            <h3 className="footer-list-title">Our Cook</h3>
            <ul className="footer-list">
              <li className="footer-list-infos">45 Avenue de la République</li>
              <li className="footer-list-infos">Conçu par William FORT</li>
            </ul>
          </div>

          <div className="footer-list-item">
            <h3 className="footer-list-title">Contactez-nous</h3>
            <ul className="footer-list">
              <li className="footer-list-infos">
                <span className="medium">Par téléphone</span> <br />
                00 00 00 00
              </li>
              <li className="footer-list-infos">
              <span className="medium">Par mail</span> <br />
                write-us@our-cook-support.fr
              </li>
            </ul>
          </div>

          <div className="footer-list-item">
            <h3 className="footer-list-title">A propos</h3>
            <ul className="footer-list">
              <li className="footer-list-infos">
                <Link className="footer-list-link" to="/discover">Découvrir</Link>
              </li>

              <li className="footer-list-infos">
                <Link className="footer-list-link" to="/recipes">Recettes</Link>
              </li>

              <li className="footer-list-infos">
                <Link className="footer-list-link" to="/community">Communauté</Link>
              </li>

              <li className="footer-list-infos">
                <Link className="footer-list-link" to="/auth">Déconnexion</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
