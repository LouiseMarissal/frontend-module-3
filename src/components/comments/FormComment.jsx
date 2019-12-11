import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./../../css/FormComment.css";
import UserContext from "../../auth/UserContext";

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
        console.log(dbRes);
        if (dbRes.data.length) {
          setOldMessages(dbRes.data);
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
      <form className="formComment" onSubmit={handleSubmit}>
        <div className="row">
          <input
            className="input"
            name="message"
            id="message"
            placeholder="leave a comment here..."
            onChange={handleChange}
          ></input>
          <button className="btn">comment!</button>
        </div>
        <br />
        <div className="commentaires">
          {!Boolean(oldMessages.length) ? (
            <p>No message yet</p>
          ) : (
            <p>
              {oldMessages
                .sort((a, b) => {
                  if (a.created > b.created) return -1;
                  else return 1;
                })
                .map((oldMessage, i) => (
                  <li className="listMessage" key={i}>
                    <span className="message">
                      <img
                        className="userPhoto"
                        src={oldMessage.user.photo}
                        alt="inch"
                      />
                      le {oldMessage.created.substr(0, 10)} à{" "}
                      {oldMessage.created.substr(11, 5)} <br />
                      {oldMessage.message}
                    </span>
                  </li>
                ))}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddComment;
