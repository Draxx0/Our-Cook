import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./app/layouts/Layout";
import MainRouter from "./app/routes/MainRouter";
import userServices from "./setup/services/user.services";
import recipeServices from "./setup/services/recipe.services";
import commentsServices from "./setup/services/comment.services";
import chefService from "./setup/services/chef.services";

function App() {
  const [users, setUsers] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [comments, setComments] = useState([]);
  const [chefs, setChefs] = useState([])
  const [isLogged, setIsLogged] = useState(false);

  const fetchRecipes = async () => {
    try {
      const response = await recipeServices.findAll();
      setRecipes(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await commentsServices.findAll();
      setComments(response);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchChefs = async () => {
    try {
      const response = await chefService.findAll()
      setChefs(response)
    } catch (error) {
      console.log(error);
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await userServices.findAll();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(chefs);
  useEffect(() => {
    fetchRecipes();
    fetchUsers();
    fetchComments();
    fetchChefs();
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
          comments={comments}
          setComments={setComments}
          fetchComments={fetchComments}
          chefs={chefs}
          setChefs={setChefs}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
