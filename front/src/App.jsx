import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./app/layouts/Layout";
import MainRouter from "./app/routes/MainRouter";
import userServices from "./setup/services/user.services";
import recipeServices from "./setup/services/recipe.services";

function App() {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const fetchRecipes = async () => {
    try {
      const response = await recipeServices.findAll();
      setRecipes(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await userServices.findAll();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
    fetchUsers();
    sessionStorage.getItem("token") && setIsLogged(true);
  }, []);

  return (
    <BrowserRouter>
      <Layout isLogged={isLogged}>
        <MainRouter
          users={users}
          recipes={recipes}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
