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
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (currentUser) {
      Setuser({ photo: currentUser.photo, name: currentUser.name });
    }
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
    <div className="newComment">
      {console.log(currentUser)}
      <form className="formComment" onSubmit={handleSubmit}>
        {currentUser ? (
          <>
            <div className="imageAndInputContainer">
              <img className="userPhoto" src={user.photo} alt="inch" />
              <textarea
                className="inputComment"
                name="message"
                id="message"
                placeholder="leave a comment here..."
                maxLength="300"
                size="10"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btnSubmitMessage">comment!</button>
          </>
        ) : (
          <NavLink
            className="link-formComment"
            style={{
              textDecoration: "none"
            }}
            to="/Signup"
          >
            SignUp to comment !
          </NavLink>
        )}
        <br />
        <div className="comments">
          {!Boolean(oldMessages.length) ? (
            <p className="noMessageYet">No message yet</p>
          ) : (
            <div className="oneComment">
              {oldMessages
                .sort((a, b) => {
                  if (a.created > b.created) return -1;
                  else return 1;
                })
                .map((oldMessage, i) => (
                  <li className="listMessage" key={i}>
                    <div className="message">
                      <div className="nameAndPictureContainer">
                        <img
                          className="userPhoto"
                          src={oldMessage.user.photo}
                          alt="inch"
                        />
                        <div className="fullUser">
                          <span>{oldMessage.user.name}</span>
                        </div>
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
