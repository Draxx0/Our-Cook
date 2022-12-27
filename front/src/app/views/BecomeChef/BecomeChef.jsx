import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BecomeChef = ({ isLogged }) => {
  const [chefData, setChefData] = useState({});

  const handleGetChefData = (e) => {
    const { name, value } = e.target;
    setChefData({ ...chefData, [name]: value });
  };

  const handleSendChefData = (e) => {
    e.preventDefault();
    console.log(chefData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="become-chef">
      <div className="become-chef-header">
        <div className="overlay"></div>
        <div className="text-container">
          <h1>Devenir l'un de nos nombreux Chef(fe)</h1>

          <p>
            Vous êtes intéréssé à l'idée de partager votre passions, peut être
            même votre métier à des millions d'utilisateur ? Alors ce status est
            fait pour vous. Qu'est ce qu'offre le status de Chef(fe) ? Le Status
            de Chef vous permettra de créer vos propres recettes à partagé avec
            toute la communauté d'Our Cook, vous aurez accès à une nouvelle
            partie de votre profil celle de "Chef(fe)" Vous y découvrirez vos
            recettes ainsi que leur avis.
          </p>
        </div>
      </div>

      <div className="become-chef-main">
        <h2 className="faq">Foire aux questions.</h2>
        <div className="column">
          <h2>Devenir l'un de nos chef(fe), les prérequis ?</h2>

          <div className="text-container">
            <p>
              Afin d'acquérir le status de Chef(fe) il vous sera demandé de
              remplir un petit formulaire concernant vos motivations, qu'est ce
              qu'il vous pousse à partager votre passions/métier avec la
              communauté d'Our Cook.
            </p>

            <p>
              Il vous sera également de posséder un compte Our Cook. (
              {isLogged ? (
                " Vous en possedez déjà un "
              ) : (
                <div>
                  <Link className="bold colored" to="/signup">
                    Créer un compte
                  </Link>{" "}
                  ou{" "}
                  <Link className="bold colored" to="/login">
                    Se connecter
                  </Link>
                </div>
              )}
              )
            </p>
          </div>
        </div>

        <div className="column">
          <h2>
            Qu'est-ce qui change entre mon status d'utilisateur et de Chef(fe) ?
          </h2>

          <div className="text-container">
            <p>
              En tant que Che(fe) vous pourrez poster vos recettes, les
              modifier, les supprimer. L'utilisateur lui consulte, commente,
              aime ou n'aime pas une recette, il agis comme votre publique celui
              qui donne son avis sur votre travail.
            </p>
          </div>
        </div>

        <div className="column">
          <h2>
            En tant que Chef(fe) pourrais-je toujours consulter les recettes des
            autres chef(fe)s, et donner mon avis sur celle-ci ?
          </h2>

          <div className="text-container">
            <p>
              Bien sur, votre status change mais pas vos droits. Vous pourrez
              toujours donner votre avis sur les recettes des vos collègues,
              voyez le status de Chef(fe) comme un simple plus.
            </p>
          </div>
        </div>

        <div className="column">
          <h2>Remplir le formulaire</h2>
          <form
            className="become-chef-form"
            onSubmit={(e) => handleSendChefData(e)}
          >
            <div className="form-group">
              <label>
                Etes vous un professionnel dans le domaine de la cuisine ou
                faites vous cela par passion ?
              </label>
              <select
                name="pro-amateur-question"
                onChange={(e) => handleGetChefData(e)}
              >
                <option value="default" disabled>
                  Je suis un
                </option>
                <option value="pro">Professionnel</option>
                <option value="amateur">Amateur</option>
              </select>
            </div>

            {chefData["pro-amateur-question"] === "amateur" && (
              <div className="form-group">
                <label>A quelle fréquence cuisinez vous ?</label>
                <select
                  name="cook-frequency-question"
                  onChange={(e) => handleGetChefData(e)}
                >
                  <option value="default" disabled>
                    Je cuisine
                  </option>
                  <option value="pro">1 fois / semaine</option>
                  <option value="amateur">2 fois / semaine</option>
                  <option value="amateur">3 fois / semaine</option>
                  <option value="amateur">+3 fois / semaine</option>
                  <option value="amateur">Tous les jours</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label>
                Qu'est ce qui vous motive à l'idée de devenir Chef(fe) ?
              </label>
              <textarea
                name="motivation-question"
                cols="30"
                rows="10"
                placeholder="Votre réponse ici"
              ></textarea>
            </div>

            <button type="submit" className="yellow-black-button">
              Envoyer ma réponse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeChef;
