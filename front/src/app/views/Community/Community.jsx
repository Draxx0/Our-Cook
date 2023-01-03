import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import articleServices from "../../../setup/services/article.services";
import Comment from "../../assets/icons/comment.png";

const Community = ({ users }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const handleFilter = (e) => {
    const id = e.target.id;
    const filter = articles.filter((article) => {
      return article.tag === id;
    });
    setFilteredArticles(filter);
  };

  const getArticles = async () => {
    const response = await articleServices.findAll();
    setArticles(response);
    setFilteredArticles(response);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getArticles();
  }, []);

  return (
    <div className="community">
      <div className="community-header">
        <div className="overlay"></div>
        <h1 className="community-title">
          Poster vos questions concernant la cuisine en général, la communauté
          Our Cook vous répondra à coup sûr !
        </h1>
      </div>

      <div className="community-main">
        <div className="left-community-main">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => {
              return (
                <div className="article-container" key={article._id}>
                  <div className="article">
                    <div className="user">
                      <span>
                        {users
                          .filter((user) => user._id === article.user)
                          .map((user) => user.firstName + " " + user.lastName)}
                      </span>
                      <img
                        src={users
                          .filter((user) => user._id === article.user)
                          .map((user) => user.profilePicture)}
                        alt="Profil de l'autheur"
                        className="article-author"
                      />
                    </div>
                    <div className="column">
                      <h2>{article.title}</h2>
                      <p>{article.description}</p>
                    </div>

                    <div className="article-comments-section">
                      <div className="users-pp">
                        <div className="row">
                          {article.articleComments.slice(-3).map((comment) => {
                            return (
                              <img
                                src={users
                                  .filter((user) => user._id === comment.user)
                                  .map((user) => user.profilePicture)}
                                alt="Profil d'utilisateur"
                                key={comment._id}
                                className="user-profil"
                              />
                            );
                          })}
                        </div>
                      </div>
                      {article.articleComments?.length > 0 ? (
                        <div className="comments row alignCenter">
                          <img src={Comment} alt="" />
                          <span>
                            {article.articleComments.length} Commentaires
                          </span>
                        </div>
                      ) : (
                        <div className="no-comments">
                          <p>Aucun commentaires</p>
                        </div>
                      )}
                    </div>

                    <div className="tag row alignCenter">
                      <div
                        className={
                          article.tag === "Articles"
                            ? "green-tag"
                            : article.tag === "Questions"
                            ? "yellow-tag"
                            : article.tag === "Annonces"
                            ? "blue-tag"
                            : "purple-tag"
                        }
                      ></div>
                      <p className="tag-name">{article.tag}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-articles">
              <h1>Aucune discussion pour le moment</h1>
            </div>
          )}
        </div>

        <div className="right-community-main">
          <Link to="/" className="yellow-black-button">
            Créer une discussion
          </Link>

          <div className="row" onClick={() => setFilteredArticles(articles)}>
            <img src={Comment} alt="" />
            <p>Toutes les discussions</p>
          </div>

          <div className="bar"></div>

          <div className="column">
            <div className="row">
              <div className="green-tag"></div>
              <p id="Articles" onClick={(e) => handleFilter(e)}>
                Articles
              </p>
            </div>

            <div className="row">
              <div className="yellow-tag"></div>
              <p id="Question" onClick={(e) => handleFilter(e)}>
                Questions
              </p>
            </div>

            <div className="row">
              <div className="blue-tag"></div>
              <p id="Annonces" onClick={(e) => handleFilter(e)}>
                Annonces
              </p>
            </div>

            <div className="row">
              <div className="purple-tag"></div>
              <p id="Cours" onClick={(e) => handleFilter(e)}>
                Cours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
