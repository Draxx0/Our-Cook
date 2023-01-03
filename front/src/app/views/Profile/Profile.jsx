import { useEffect, useState } from "react";
import userServices from "../../../setup/services/user.services";

const Profile = ({ users }) => {
  const [user, setUser] = useState({});
  const [newData, setNewData] = useState({});

  console.log("user", user);
  console.log("newData", newData);

  const handleNewData = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSendNewData = async (e) => {
    e.preventDefault();
    try {
      const response = await userServices.update(user._id, newData);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentUser = users.find(
      (user) => user._id === JSON.parse(sessionStorage.getItem("user"))
    );
    setUser(currentUser);
  }, []);
  return (
    <div className="profile">
      <div className="profile-header">
        <h1>Mon profile</h1>
        <p>Gérer les paramètres de votre profil</p>
      </div>

      <div className="profile-container">
        <div className="column">
          <h2>Votre photo de profil</h2>
          <div className="row profile-picture-container">
            <img src={user.profilePicture} alt="" />
            <div className="input-wrapper">
              <label htmlFor="file">Modifier</label>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                onChange={handleNewData}
              />
            </div>
          </div>
          <p className="bold">
            Ajouter votre photo. La taille recommandée est de 256x256 px.
          </p>
        </div>

        <div className="column">
          <form onSubmit={handleSendNewData}>
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={user.firstName}
                onChange={handleNewData}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                defaultValue={user.lastName}
                onChange={handleNewData}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse mail</label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={user.email}
                onChange={handleNewData}
              />
            </div>

            {newData && (
              <input
                type="submit"
                value="Enregistrer"
                className="yellow-black-button"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
