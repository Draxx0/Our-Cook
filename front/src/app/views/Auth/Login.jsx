import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../../setup/services/auth.services";

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authServices.login(credentials);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      alert("Email ou mot de passe incorrect");
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="log-in">
      <div className="overlay"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <span className="auth-logo">Our Cook</span>
        <div className="form-group">
          <label htmlFor="email">Votre email</label>
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
          <label htmlFor="password">Votre mot de passe</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="***********"
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Connexion"
          className="black-yellow-button"
        />
      </form>
    </div>
  );
};

export default Login;
