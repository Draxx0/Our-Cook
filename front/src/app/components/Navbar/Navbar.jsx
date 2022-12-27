import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Sass/main.scss";

const Navbar = ({ isLogged }) => {
  const [windowScroll, setWindowScroll] = useState(false);

  const detectScroll = () => {
    if (window.scrollY > 0) {
      setWindowScroll(true);
    } else {
      setWindowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
  }, [isLogged]);
  return (
    <nav className={windowScroll ? "scroll-nav" : ""}>
      <div className="nav-wrapper">
        <Link to="/" className="nav-logo">
          Our Cook
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/discover" className="nav-link">
              Découvrir
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-link">
              Recettes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/community" className="nav-link">
              Communauté
            </Link>
          </li>
          <li className="nav-item">
            {isLogged ? (
              <Link
                to="/login"
                onClick={() => sessionStorage.clear()}
                className="nav-link"
              >
                Déconnexion
              </Link>
            ) : (
              <Link to="/login" className="nav-link">
                Connexion
              </Link>
            )}
          </li>
          {!isLogged && (
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Créer un compte
              </Link>
            </li>
          )}
          {isLogged && (
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profil
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
