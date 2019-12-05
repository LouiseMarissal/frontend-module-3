import React, { useState } from "react";
import axios from "axios";

const AddCoktail = props => {
  const [formValues, setFormValues] = useState({});

  console.log(props);
  axios
    .post(process.env.REACT_APP_BACKEND_URL + "/cocktail", formValues)
    .then(res => {
      props.history.push("/cocktails");
    })
    .catch(err => {
      console.log(err);
    });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("i've been submitted");
  };
  const handleChange = e => {
    console.log("im changing");
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-cocktail-form">
      <h1>Create your own Cocktail</h1>
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="Name" className="input" placeholder="Name" />
        <input type="text" name="Glass" className="input" placeholder="Glass" />
        <input
          type="text"
          name="Instructions"
          className="input"
          placeholder="Recipe"
        />
        <div className="is-alcoholic">
          <label htmlFor="Alcoholic">Contains Alcohol ?</label>
          <input
            type="checkbox"
            name="Alcoholic"
            id="Alcoholic"
            className="input"
          />
        </div>
        <div className="measure-ingredient-container">
          <div className="ingredient-container">
            <input
              type="text"
              name="Ingredient1"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient2"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient3"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient4"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient5"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient6"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient7"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient8"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient9"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient10"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient11"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient12"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient13"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient14"
              className="input"
              placeholder="Ingredient"
            />
            <input
              type="text"
              name="Ingredient15"
              className="input"
              placeholder="Ingredient"
            />
          </div>
          <div className="measure-container">
            <input
              type="text"
              name="Measure1"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure2"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure3"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure4"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure5"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure6"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure7"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure8"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure9"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure10"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure11"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure12"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure13"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure14"
              className="input"
              placeholder="Measure"
            />
            <input
              type="text"
              name="Measure15"
              className="input"
              placeholder="Measure"
            />
          </div>
        </div>
        <input type="file" name="Image" className="input" />

        <button>Add!</button>
      </form>
    </div>
  );
};

export default AddCoktail;
