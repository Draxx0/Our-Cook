import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Sass/main.scss";

const Navbar = () => {
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
  }, []);
  return (
    <nav className={windowScroll && "scroll-nav"}>
      <div className="nav-wrapper">
        <span className="nav-logo">Our Cook</span>
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
            <Link to="/auth" className="nav-link">
              Déconnexion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
