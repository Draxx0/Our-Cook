import { Route, Routes } from "react-router-dom";
import Login from "../views/Auth/Login";
import SignUp from "../views/Auth/SignUp";
import BecomeChef from "../views/BecomeChef/BecomeChef";
import Community from "../views/Community/Community";
import Home from "../views/Home/Home";
import Profile from "../views/Profile/Profile";
import RecipePage from "../views/RecipePage/RecipePage";
import Recipes from "../views/Recipes/Recipes";

const MainRouter = ({ users, recipes, isLogged, setIsLogged, fetchComments, comments, setComments, chefs, setChefs}) => {
  return (
    <Routes>
      <Route path="/" element={<Home recipes={recipes} isLogged={isLogged} users={users} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
      <Route path="/profile" element={<Profile users={users} />} />
      <Route path="/recipes" element={<Recipes recipes={recipes}/>} />
      <Route path="/recipe/:id" element={<RecipePage recipes={recipes} users={users} fetchComments={fetchComments} comments={comments} setComments={setComments}/>} />
      <Route path="/become-chef" element={<BecomeChef isLogged={isLogged} users={users} chefs={chefs} setChefs={setChefs} />} />
      <Route path="/community" element={<Community users={users} />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default MainRouter;
