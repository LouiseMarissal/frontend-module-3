import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../css/FormComment.css";

const AddComment = props => {
  const [message, setMessage] = useState({});
  const [finalMessage, setFinalMessage] = useState([]);
  const [oldMessages, oldMessage] = useState([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/comment/cocktail/" +
          props.CocktailId
      )
      .then(dbRes => {
        dbRes.data.map(res => {
          oldMessages.push(res);
          console.log(dbRes.data);
        });
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/comment", {
        message: message.message,
        created: Date.now(),
        cocktail: `${props.CocktailId}`
        // user: `${req.session.currentUser}`
      })
      .then(res => {
        const arrayMessage = [res.data.message];
        // const dateMessage = [res.data.created];
        finalMessage.push(arrayMessage);
        // const newOldMessage = oldMessages.sort((a, b) => {
        //   return b.created - a.created;
        // });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="commentaire">
      <form
        className="formComment"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="row">
          <input
            className="input"
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={() => void 0}
            placeholder="leave a comment here..."
          ></input>
          <button className="btn">comment!</button>
        </div>
        <br />
        <div className="commentaires">
          {!Boolean(oldMessages.length) ? (
            <p>No message yet</p>
          ) : (
            <p>
              {finalMessage.map((message, i) => {
                if (
                  message !== "" &&
                  message !== null &&
                  message !== undefined
                ) {
                  return (
                    <li className="listMessage" key={i}>
                      <span className="message">{message}</span>
                    </li>
                  );
                }
              })}
              {oldMessages.map((oldMessage, i) => {
                if (oldMessage !== "" && oldMessage !== undefined) {
                  return (
                    <li className="listMessage" key={i}>
                      <span className="message">
                        le {oldMessage.created.substr(0, 10)} à{" "}
                        {oldMessage.created.substr(11, 5)} <br />
                        {oldMessage.message}
                      </span>
                    </li>
                  );
                }
              })}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddComment;
