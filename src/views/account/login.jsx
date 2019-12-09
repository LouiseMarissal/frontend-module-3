import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    var searchBar = document.getElementById("searchBar");
    var navBar = document.getElementById("navBar");
    if (searchBar) {
      navBar.className = "nav-bar white";
    } else {
      navBar.className = "nav-bar black";
    }
  }, []);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/auth-routes/signin", {
        formValues
      })
      .then(dbRes => console.log("login succesfull"))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
        <h1>Nice to see you back !</h1>
        <input className="input" name="email" placeholder="example@email.fr" />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="*****"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
