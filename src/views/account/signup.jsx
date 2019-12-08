import React, { useState, useEffect } from "react";
import axios from "axios";

// PRO USER
const Signup = props => {
  const [formValues, setFormValues] = useState({});
  const [formProDisplay, setFormProDisplay] = useState(false);

  const postAxios = () => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/auth-routes/signup",
        formValues
      )
      .then(res => {
        console.log("user successfully added to database");
      })
      .catch(err => {
        console.log(err, "gros con");
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formProDisplay) {
      setFormValues({ ...formValues, isPro: true, role: "pro" });
    } else {
      setFormValues({ ...formValues, isPro: false, role: "user" });
    }
    postAxios();
  };

  const handleClick = e => {
    var isPro = e.target;
    setFormValues({ ...formValues, isPro: true });
    setFormProDisplay(formValues);
  };

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <h1>Register</h1>
        <input
          className="input"
          name="firstName"
          placeholder="First Name"
          value="John"
          required
        />
        <input
          className="input"
          value="Do"
          name="name"
          placeholder="Last name"
          required
        />
        <input
          className="input"
          value="john@do.com"
          name="email"
          type="email"
          placeholder="name@email.fr"
          required
        />
        <input
          className="input"
          value="1234"
          name="password"
          type="password"
          placeholder="******"
          required
        />
        <input name="photo" type="file" />
        {/* mettre un ternary ici pour afficher le reste du forme au click du "isPro" */}
        <label htmlFor="isPro">I am a real pro fullStack bartender</label>
        <input type="checkbox" id="isPro" onClick={handleClick} />
        {formProDisplay ? (
          <>
            <input
              name="companyName"
              className="input"
              placeholder="Your company's name"
              required
            />
            <input
              name="barName"
              className="input"
              placeholder="Your bar's name"
            />
          </>
        ) : (
          ""
        )}
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
