import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./app/layouts/Layout";
import MainRouter from "./app/routes/MainRouter";
import recipeServices from "./services/recipe.services";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await recipeServices.findAll();
      setRecipes(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <MainRouter recipes={recipes} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
