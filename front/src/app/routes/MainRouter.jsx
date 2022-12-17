import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";

const MainRouter = ({ recipes }) => {
  return (
    <Routes>
      <Route path="/" element={<Home recipes={recipes} />} />
    </Routes>
  );
};

export default MainRouter;
