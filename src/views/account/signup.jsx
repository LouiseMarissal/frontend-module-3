import React, { useState, useEffect } from "react";
import axios from "axios";

// PRO USER
const Signup = props => {
  const [newUser, setNewUser] = useState([]);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/auth-routes")
      .then(res => {
        console.log(newUser);
        props.history.push("/auth-routes");
      })
      .catch(err => {
        console.log(err);
      });
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("i have been submitted");
  };

  const handleChange = e => {
    console.log("i'm changing");
  };
  console.log(props);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <h1>Register</h1>
        <input className="input" name="firstName" placeholder="First Name" />
        <input className="input" name="name" placeholder="Name" />
        <input className="input" name="email" placeholder="name@email.fr" />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="******"
        />
        <input name="photo" type="file" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
