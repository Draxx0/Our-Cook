import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../../setup/services/auth.services";

const SignUp = () => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authServices.register(credentials);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Prénom"
            name="firstName"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            placeholder="Nom"
            onChange={handleChange}
          />
        </div>

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

        <input
          type="submit"
          value="Créer votre compte"
          className="black-yellow-button"
        />
      </form>
    </div>
  );
};

export default SignUp;
