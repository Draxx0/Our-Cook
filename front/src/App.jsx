import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./app/layouts/Layout";
import MainRouter from "./app/routes/MainRouter";
import recipeServices from "./setup/services/recipe.services";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

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
    sessionStorage.getItem("token") && setIsLogged(true);
  }, []);
  console.log(isLogged);

  return (
    <BrowserRouter>
      <Layout isLogged={isLogged}>
        <MainRouter
          recipes={recipes}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
