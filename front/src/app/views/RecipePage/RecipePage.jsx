import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import commentsServices from "../../../setup/services/comment.services";
import moment from "moment";
import "moment/locale/fr";
import Clock from "../../assets/icons/clock.png";
import Star from "../../assets/icons/star.png";
import Broccoli from "../../assets/icons/Broccoli.png";
import Pastry from "../../assets/icons/pastrybag.png";
import People from "../../assets/icons/people.png";
import Utensils from "../../assets/icons/utensils.png";
import utensils from "../../functions/utensilsImgImport";

const RecipePage = ({ recipes, users }) => {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [totalTime, setCurrentTotalTime] = useState(0);
  const [preparationTime, setCurrentPreparationTime] = useState(0);
  const [cookingTime, setCurrentCookingTime] = useState(0);
  const [author, setAuthor] = useState({});
  const { id } = useParams();
  const Test = utensils.filter((utensil) => {
    return utensil.includes("Couteau");
  });

  const getCurrentRecipe = async () => {
    const currentRecipe = await recipes.find((recipe) => recipe._id === id);
    const author = users.find((user) => user._id === currentRecipe.chef.user);
    setCurrentPreparationTime(currentRecipe.preparationTime * 60 * 1000);
    setCurrentCookingTime(currentRecipe.cookingTime * 60 * 1000);
    setCurrentTotalTime(
      currentRecipe.preparationTime * 60 * 1000 +
        currentRecipe.cookingTime * 60 * 1000
    );
    setAuthor(author);
    setCurrentRecipe(currentRecipe);
  };

  const getComments = async () => {
    const comments = await commentsServices.findAll();
    setComments(comments);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    hours = hours % 24;

    return `${padTo2Digits(hours)}h${padTo2Digits(minutes)}`;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getCurrentRecipe();
    getComments();
  }, []);
  return (
    <div className="recipe-page">
      <div className="recipe-header">
        <div className="left-recipe">
          <img
            src={currentRecipe.imageUrl}
            alt="Aperçu de la recette"
            className="recipe-img"
          />
        </div>
        <div className="right-recipe">
          <h1 className="recipe-title">
            {currentRecipe.title} - {currentRecipe.calorie} kcal -{" "}
            {currentRecipe.category}
          </h1>

          <span className="recipe-time">
            Temps total : {convertMsToTime(totalTime)}{" "}
            <img src={Clock} alt="Icone d'horloge" />
          </span>

          <span className="recipe-stars">
            {currentRecipe.stars !== null ? (
              <>
                <img src={Star} alt="Icone d'étoile" />{" "}
                {currentRecipe.stars?.toFixed(1)}
              </>
            ) : (
              <>Non noté</>
            )}
          </span>

          <p className="recipe-description">{currentRecipe.description}</p>

          <div className="recipe-author">
            <h3 className="author-name">
              Une recette du Chef(fe){" "}
              <span className="colored bold">
                {author.firstName + " " + author.lastName}
              </span>{" "}
              -{" "}
              <span className="active-from">
                Actif depuis le{" "}
                {moment(currentRecipe.chef?.createdAt)
                  .locale("fr")
                  .format("DD MMMM YYYY")}
              </span>
            </h3>
            <div className="row alignCenter">
              <Link
                className="yellow-black-button"
                to={`/chefs/${currentRecipe}`}
              >
                Voir ses recettes
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-main">
        <div className="recipe-time-container">
          <div className="row spaceBtwn">
            <span className="recipe-time">
              Temps de préparation : {convertMsToTime(preparationTime)}{" "}
              <img src={Clock} alt="Icone d'horloge" />
            </span>
            <span className="recipe-time">
              Temps de cuisson : {convertMsToTime(cookingTime)}{" "}
              <img src={Clock} alt="Icone d'horloge" />
            </span>

            <span className="recipe-time">
              Nombre de personnes : {currentRecipe.numberOfPeople}{" "}
              <img src={People} alt="Icone d'un homme" />
            </span>
          </div>
        </div>
        <div className="recipe-ingredients">
          <h2 className="recipe-section-title">
            <img src={Broccoli} alt="Icone Broccoli" /> Ingrédients
          </h2>
          <ul>
            {currentRecipe.ingredients?.map((ingredient) => (
              <li key={ingredient._id}>
                {ingredient.name.charAt(0).toUpperCase() +
                  ingredient.name.slice(1)}{" "}
                - {ingredient.quantity}
              </li>
            ))}
          </ul>
        </div>

        {currentRecipe.utensils?.length > 0 && (
          <div className="recipe-utensils">
            <h2 className="recipe-section-title">
              <img src={Utensils} alt="Icone de ustensiles de cuisine" />{" "}
              Ustensiles
            </h2>
            <div className="utensils-grid">
              {currentRecipe.utensils?.map((utensil) => (
                <div className="utensil" key={utensil._id}>
                  <img
                    src={utensils.filter((utensilImg) => {
                      return utensilImg.includes(utensil.name);
                    })}
                    alt={utensil.name}
                  />
                  <p>{utensil.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="recipe-steps">
          <h2 className="recipe-section-title">
            <img src={Pastry} alt="Icone de poche à douille" /> Etapes à suivre
          </h2>
          <ul>
            {currentRecipe.steps?.map((step, index) => (
              <li key={step._id}>
                <p className="step-text">Étape {index + 1} </p>
                {step.name.charAt(0).toUpperCase() + step.name.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe-add-comment">
          <h2 className="recipe-section-title">Laisser votre avis</h2>

          <form className="recipe-comment-form">
            <input
              type="text"
              placeholder="Votre note entre 0 et 5"
              id="stars"
              name="stars"
            />
            <textarea
              name="description"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Votre commentaire"
            ></textarea>
            <button type="submit" className="yellow-black-button">
              Envoyer
            </button>
          </form>
        </div>

        <div className="recipe-comments">
          <h2 className="recipe-section-title">
            Commentaires sur la recette <span className="colored bold">{currentRecipe.title}</span>
          </h2>

          {comments.length > 0 ? (
            <div className="recipe-comments-grid">
              {comments
                .filter((comment) => comment.recipe?._id === id)
                .map((comment) => (
                  <div className="recipe-comment" key={comment._id}>
                    <span className="comment-stars">
                      <img src={Star} alt="" /> {comment.stars}
                    </span>
                    <span className="comment-author">
                      {users.find((user) => user._id === comment.user._id)
                        .firstName +
                        " " +
                        users.find((user) => user._id === comment.user._id)
                          .lastName}
                    </span>
                    <p className="comment-description">{comment.description}</p>
                  </div>
                ))}
            </div>
          ) : (
            <p className="no-comment">Aucun commentaire pour le moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
