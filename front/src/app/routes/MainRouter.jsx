import { Route, Routes } from "react-router-dom";
import Login from "../views/Auth/Login";
import SignUp from "../views/Auth/SignUp";
import Home from "../views/Home/Home";
import Profile from "../views/Profile/Profile";

const MainRouter = ({ recipes, isLogged, setIsLogged }) => {
  return (
    <Routes>
      <Route path="/" element={<Home recipes={recipes} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default MainRouter;
