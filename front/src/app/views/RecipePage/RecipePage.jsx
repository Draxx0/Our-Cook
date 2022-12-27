import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import commentsServices from "../../../setup/services/comment.services";
import moment from "moment";
import "moment/locale/fr";
import Clock from "../../assets/icons/clock.png";
import Star from "../../assets/icons/star.png";

const RecipePage = ({ recipes, users }) => {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [currentRecipeTime, setCurrentRecipeTime] = useState(0);
  const [author, setAuthor] = useState({});
  const { id } = useParams();

  const getCurrentRecipe = async () => {
    const currentRecipe = await recipes.find((recipe) => recipe._id === id);
    const author = users.find((user) => user._id === currentRecipe.chef.user);
    setCurrentRecipeTime(currentRecipe.time * 60 * 1000);
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
          <div className="row spaceBtwn">
            <h1 className="recipe-title">
              {currentRecipe.title} - {currentRecipe.calorie} kcal
            </h1>

            <span className="recipe-time">
              {convertMsToTime(currentRecipeTime)}{" "}
              <img src={Clock} alt="Icone d'horloge" />
            </span>
          </div>

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

          
          <span className="recipe-category">
            Type de mets : {currentRecipe.category}
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
        <div className="recipe-ingredients">
          <h2 className="recipe-section-title">Ingrédients</h2>
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

        <div className="recipe-steps">
          <h2 className="recipe-section-title">Etapes à suivre</h2>
          <ul>
            {currentRecipe.steps?.map((step, index) => (
              <li key={step._id}>
                {index + 1}.{" "}
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
            Commentaires sur la recette {currentRecipe.title}
          </h2>

          <div className="recipe-comments-grid">
            {comments
              .filter((comment) => comment.recipe._id === id)
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
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
