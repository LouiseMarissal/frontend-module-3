import React, { useState, useRef } from "react";
import axios from "axios";

const AddCoktail = props => {
  const [formValues, setFormValues] = useState({});
  const measuresRef = useRef();
  const ingredientsRef = useRef();
  const [ingredientsFields, setIngredientsFields] = useState([]);
  const [measuresFields, setMeasuresFields] = useState([]);

  // ADD ingredients & Measures in list
  const addIngredientInput = e => {
    // take the value from ingredients inputs
    e.preventDefault();
    let ingredients = ingredientsRef.current.value;
    const copy = [...ingredientsFields];
    copy.push(ingredients);
    ingredientsRef.current.value = "";
    //take the value from measure input
    setIngredientsFields(copy);
    let measures = measuresRef.current.value;
    const copy2 = [...measuresFields];
    copy2.push(measures);
    measuresRef.current.value = "";
    setMeasuresFields(copy2);
  };

  // Remove ingredients
  const removeIngredients = e => {
    e.preventDefault();
    var array = [...ingredientsFields];
    var index = array.indexOf(e.target.value);
    array.splice(index, 1);
    setIngredientsFields(array);
  };
  // Remove MEASURES
  const removeMeasure = e => {
    e.preventDefault();
    var array = [...measuresFields];
    var index = array.indexOf(e.target.value);
    array.splice(index, 1);
    setMeasuresFields(array);
  };
  const handleSubmit = e => {
    e.preventDefault();
    formValues.Ingredients = ingredientsFields;
    formValues.Measures = measuresFields;
    const formData = new FormData();
    for (let key in formValues) {
      if (Array.isArray(formValues[key])) {
        for (let value of formValues[key]) {
          formData.append(key, value);
        }
      } else formData.append(key, formValues[key]);
    }
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/cocktail", formData)
      .then(res => {
        console.log(res);
        // props.history.push("/cocktails");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChangeForm = e => {
    // e.preventDefault();
    if (e.target.type === "checkbox") {
      setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    } else setFormValues({ ...formValues, [e.target.name]: e.target.value });

    console.log("im changing");
  };

  return (
    <div className="add-cocktail-form">
      <h1>Create your own Cocktail</h1>
      <form
        className="form"
        onSubmit={handleSubmit}
        onChange={handleChangeForm}
      >
        <input type="text" name="Name" className="input" placeholder="Name" />
        <input type="text" name="Glass" className="input" placeholder="Glass" />
        <input
          type="text"
          name="Instructions"
          className="input"
          placeholder="Recipe"
        />
        <div className="measure-ingredient-container">
          <div className="ingredient-container">
            <h4>Add ingredients</h4>
            {ingredientsFields.length === 0 ? (
              <p>No ingredients yet!</p>
            ) : (
              <ul>
                {ingredientsFields.map((ingredient, i) => (
                  <li key={i} className="ingredients-list">
                    {ingredient}{" "}
                    <i className="fas fa-minus" onClick={removeIngredients}></i>
                  </li>
                ))}
              </ul>
            )}
            <input
              type="text"
              ref={ingredientsRef}
              name="Ingredients"
              className="input"
              placeholder="Add Ingredient"
            />
          </div>

          <div className="measure-container">
            <h4>Add Measures</h4>
            {measuresFields.length === 0 ? (
              <p>No Measures Yet!</p>
            ) : (
              <ul>
                {measuresFields.map((measure, i) => (
                  <li key={i} className="ingredients-list">
                    <span> {measure}</span>
                    <span
                      className="fas fa-minus"
                      onClick={removeMeasure}
                    ></span>
                  </li>
                ))}
              </ul>
            )}
            <input
              type="text"
              ref={measuresRef}
              name="Measures"
              className="input"
              placeholder="Measure"
            />
            <i className="fas fa-plus" onClick={addIngredientInput}></i>
          </div>
        </div>
        <div className="is-alcoholic">
          <label htmlFor="Alcoholic">Contains Alcohol ?</label>
          <input
            type="checkbox"
            name="Alcoholic"
            id="Alcoholic"
            className="input"
          />
        </div>
        <input type="file" name="Image" className="input" />

        <button className="btn">Add!</button>
      </form>
    </div>
  );
};

export default AddCoktail;
