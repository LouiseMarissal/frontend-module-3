import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./../../css/FormComment.css";
import UserContext from "../../auth/UserContext";
import { link } from "fs";
import { NavLink } from "react-router-dom";

const AddComment = props => {
  const [message, setMessage] = useState({});
  const [oldMessages, setOldMessages] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [user, Setuser] = useState({});

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/comment/cocktail/" +
          props.CocktailId
      )
      .then(dbRes => {
        if (dbRes.data.length) {
          setOldMessages(dbRes.data);
          Setuser({ photo: currentUser.photo, name: currentUser.name });
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setMessage({ ...message, [e.target.name]: e.target.value });
    Setuser({ photo: currentUser.photo, name: currentUser.name });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createComment();
  };

  function createComment() {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/comment", {
        message: message.message,
        created: new Date(),
        cocktail: `${props.CocktailId}`,
        user: user
      })
      .then(res => {
        setOldMessages([...oldMessages, res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="commentaire">
      {console.log(currentUser)}
      <form className="formComment" onSubmit={handleSubmit}>
        {currentUser ? (
          <div className="row">
            <img className="userPhoto" src={user.photo} alt="inch" />
            <input
              className="input"
              name="message"
              id="message"
              placeholder="leave a comment here..."
              onChange={handleChange}
            ></input>
            <button className="btn">comment!</button>
          </div>
        ) : (
          <NavLink className="link" to="/Signup">
            SignUp to comment !
          </NavLink>
        )}
        <br />
        <div className="commentaires">
          {!Boolean(oldMessages.length) ? (
            <p>No message yet</p>
          ) : (
            <div>
              {oldMessages
                .sort((a, b) => {
                  if (a.created > b.created) return -1;
                  else return 1;
                })
                .map((oldMessage, i) => (
                  <li className="listMessage" key={i}>
                    <div className="message">
                      <img
                        className="userPhoto"
                        src={oldMessage.user.photo}
                        alt="inch"
                      />
                      <div className="fullUser">
                        <span>{oldMessage.user.name}</span>
                      </div>
                      <span className="dateMessage">
                        le {oldMessage.created.substr(0, 10)} à{" "}
                        {oldMessage.created.substr(11, 5)}{" "}
                      </span>

                      <span className="contentMessage">
                        {oldMessage.message}
                      </span>
                    </div>
                  </li>
                ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddComment;
