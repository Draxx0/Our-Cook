import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../../setup/services/auth.services";

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authServices.login(credentials);
      sessionStorage.setItem("token", response.data);
      navigate("/");
      console.log(response);
    } catch (error) {
     alert("Email ou mot de passe incorrect");
      console.log(error);
    }
  };
  return (
    <div className="log-in">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="monemail@gmail.com"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Connexion" className="black-yellow-button"/>
      </form>
    </div>
  );
};

export default Login;
