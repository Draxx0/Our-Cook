import { useEffect, useState } from "react";
import search from "../../assets/icons/search.png";
import RegularHeart from "../../assets/icons/regular-heart.svg";
import FillHeart from "../../assets/icons/fill-heart.svg";
import Star from "../../assets/icons/star.png";
import { useNavigate } from "react-router-dom";

const Recipes = ({ recipes }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const navigate = useNavigate();

  const handleFilterByName = (e) => {
    const filterByName = e.target.value;
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(filterByName.toLowerCase())
    );
    setFilteredRecipes(filteredRecipes);
  };

  const handleFilterByCategory = (e) => {
    const filterByCategory = e.target.value;
    if (filterByCategory === "default") {
      setFilteredRecipes(recipes);
    } else {
      const filteredRecipes = recipes.filter(
        (recipe) => recipe.category === filterByCategory
      );
      setFilteredRecipes(filteredRecipes);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="recipes">
      <div className="recipes-header">
        <div className="overlay"></div>
        <h1 className="recipes-title">
          Retrouvez ici toutes les recettes présente sur Our Cook
        </h1>
      </div>

      <div className="recipes-main">
        <div className="filters-container">
          <div className="filter-title">
            <input
              type="text"
              name="filterByName"
              id="filterByName"
              onChange={(e) => handleFilterByName(e)}
              placeholder="Que recherchez-vous ?"
            />
            <img src={search} alt="" />
          </div>

          <div className="filter-category">
            <h3>Filtrer</h3>
            <select
              name="category"
              id="category"
              onChange={(e) => handleFilterByCategory(e)}
            >
              <option value="default">Toutes les catégories</option>
              <option value="Entree">Entrée</option>
              <option value="Plat">Plat</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
        </div>

        <div className="recipes-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="recipe-item"
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
                    </>
                  )}
                </p>
              </div>
            ))
          ) : (
            <p className="no-recipe">
              Aucune recette ne correspond à votre recherche
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
