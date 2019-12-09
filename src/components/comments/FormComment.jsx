import React, { useState } from "react";
import axios from "axios";

const AddComment = props => {
  const [message, setMessage] = useState({});
  const [finalMessage, setFinalMessage] = useState();

  const handleChange = e => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(props);
    setFinalMessage(message.message);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/comment", {
        message: message.message,
        created: Date.now(),
        cocktail: `${props.CocktailId}`
      })
      .then(res => {
        console.log(res.data);
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
        {finalMessage == undefined ? (
          <p>No message yet</p>
        ) : (
          <p>{finalMessage}</p>
        )}
      </div>
    </form>
  );
};

export default AddComment;
