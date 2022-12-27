import { Route, Routes } from "react-router-dom";
import Login from "../views/Auth/Login";
import SignUp from "../views/Auth/SignUp";
import BecomeChef from "../views/BecomeChef/BecomeChef";
import Home from "../views/Home/Home";
import Profile from "../views/Profile/Profile";
import RecipePage from "../views/RecipePage/RecipePage";
import Recipes from "../views/Recipes/Recipes";

const MainRouter = ({ users, recipes, isLogged, setIsLogged }) => {
  return (
    <Routes>
      <Route path="/" element={<Home recipes={recipes} isLogged={isLogged} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recipes" element={<Recipes recipes={recipes}/>} />
      <Route path="/recipe/:id" element={<RecipePage recipes={recipes} users={users} />} />
      <Route path="/become-chef" element={<BecomeChef isLogged={isLogged}/>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default MainRouter;
