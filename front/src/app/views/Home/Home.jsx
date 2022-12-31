import "../../Sass/main.scss";
import HeaderImg from "../../assets/images/header-img.png";
import Selection from "../../assets/icons/selection.png";
import Spoon from "../../assets/icons/spoon.png";
import Eat from "../../assets/icons/eat.png";
import Familly from "../../assets/images/familly.jpg";
import { Link } from "react-router-dom";
import RegularHeart from "../../assets/icons/regular-heart.svg";
import FillHeart from "../../assets/icons/fill-heart.svg";
import Star from "../../assets/icons/star.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ recipes, isLogged }) => {
  const [lastThreeRecipes, setLastThreeRecipes] = useState([]);
  const navigate = useNavigate();
  console.log(recipes);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lastThreeRecipes = recipes.slice(-3);
    setLastThreeRecipes(lastThreeRecipes);
  }, [recipes]);

  return (
    <>
      <header>
        <h1 className="slogan">
          Découvrez une nouvelle
          <br />
          façon de cuisiner
        </h1>
        <img src={HeaderImg} alt="" className="header-img" />
      </header>

      <section id="presentation">
        <h2 className="presentation-title">
          Our Cook, la plateforme de partage culinaire
        </h2>

        <div className="presentation-container">
          <div className="presentation-item">
            <div className="circle">
              <img src={Selection} alt="" />
            </div>
            <p className="presentation-text">
              Séléctionner une recette parmis plus de 300 créations & revisite.
            </p>
          </div>

          <div className="presentation-item">
            <div className="circle">
              <img src={Spoon} alt="" />
            </div>
            <p className="presentation-text">
              Reproduiser en suivant les conseils de nos chefs avisée.
            </p>
          </div>

          <div className="presentation-item">
            <div className="circle">
              <img src={Eat} alt="" />
            </div>
            <p className="presentation-text">
              Déguster votre nouveau chef d'oeuvre, seul ou en famille !
            </p>
          </div>
        </div>
      </section>

      <section id="become-chef">
        <div className="left-container">
          <div className="become-chef-container">
            <h2 className="become-chef-title">Créer vos propres recettes</h2>
            <div className="become-chef-text-container">
              <p className="become-chef-text">
                Vous êtes un as de la cuisine ? c’est vous que l’on appelle pour
                préparer un repas de famille, d’affaire ?!
              </p>
              <p className="become-chef-text">
                Alors ce status est fait pour vous, contribuer à l’ajout de
                nouvelles pépites culinaires et rend la cuisine encore plus
                appétissante !
              </p>
            </div>
            <Link
              to={!isLogged ? "/login" : "/become-chef"}
              className="yellow-black-button"
            >
              Devenir chef
            </Link>
          </div>
        </div>
        <div className="right-container">
          <img src={Familly} alt="" />
        </div>
      </section>

      <section id="last-recipes">
        <h2 className="last-recipes-title">Dernières recettes</h2>

        <div className="last-recipes-grid">
          {lastThreeRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="last-recipes-item"
              onClick={() => navigate(`/recipe/${recipe._id}`)}
            >
              <div className="recipe-img-wrapper">
                <img src={recipe.imageUrl} alt="" className="recipe-img" />
                <div className="favorite">
                  <img
                    src={recipe.isFavorite ? FillHeart : RegularHeart}
                    alt="heart"
                  />
                </div>
              </div>
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-star">
                {recipe.stars === null ? (
                  "Non notée"
                ) : (
                  <>
                    <img src={Star} alt="" />
                    {recipe.stars}
                    <p>{recipe.comments.length}</p>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
