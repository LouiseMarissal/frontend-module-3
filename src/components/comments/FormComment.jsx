import React, { useState, useEffect } from "react";
import axios from "axios";

const test = [];

const AddComment = props => {
  const [message, setMessage] = useState({});
  const [finalMessage, setFinalMessage] = useState([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/comment/cocktail/" +
          props.CocktailId
      )
      .then(dbRes => {
        dbRes.data.map(res => test.push(res.message));
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
        finalMessage.push(arrayMessage);
        console.log(finalMessage);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
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
        <button className="btn">send!</button>
        {!Boolean(finalMessage.length) ? (
          <p>No message yet</p>
        ) : (
          <p>
            {test.map((ptest, i) => {
              if (ptest !== "" && ptest !== null) {
                return (
                  <li key={i}>
                    <span className="message">{ptest}</span>
                  </li>
                );
              }
            })}
            {finalMessage.map((message, i) => {
              if (message !== "" && message !== null) {
                return (
                  <li key={i}>
                    <span className="message">{message}</span>
                  </li>
                );
              }
            })}
          </p>
        )}
      </div>
    </form>
  );
};

export default AddComment;
