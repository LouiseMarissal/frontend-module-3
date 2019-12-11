import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../css/FormComment.css";

const AddComment = props => {
  const [message, setMessage] = useState({});
  const [finalMessage, setFinalMessage] = useState({});
  const [oldMessages, setOldMessages] = useState([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/comment/cocktail/" +
          props.CocktailId
      )
      .then(dbRes => {
        setOldMessages(dbRes.data);
      })
      .catch(err => console.log(err));
  });

  const handleChange = e => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFinalMessage({
      message: message.message,
      created: Date.now(),
      cocktail: `${props.CocktailId}`
    });
  };

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/comment", finalMessage)
      .then(res => {
        console.log(res);
        setOldMessages([...oldMessages, res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [finalMessage]);

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
              {oldMessages.map((oldMessage, i) => {
                if (
                  oldMessage.message !== "" &&
                  oldMessage.message !== undefined &&
                  oldMessage.message !== null
                ) {
                  return (
                    <li className="listMessage" key={i}>
                      <span className="message">
                        le {oldMessage.created.substr(0, 10)} à{" "}
                        {oldMessage.created.substr(11, 5)} <br />
                        {oldMessage.message}
                      </span>
                    </li>
                  );
                } else return null;
              })}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddComment;
