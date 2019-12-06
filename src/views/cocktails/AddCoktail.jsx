import React, { useState, useRef } from "react";
import axios from "axios";

const AddCoktail = props => {
  const [formValues, setFormValues] = useState({});
  const measuresRef = useRef();
  const ingredientsRef = useRef();
  const [ingredientsFields, setIngredientsFields] = useState([]);
  const [measuresFields, setMeasuresFields] = useState([]);

  // ADD ingredients in list
  const addIngredientInput = e => {
    e.preventDefault();
    let ingredients = ingredientsRef.current.value;
    const copy = [...ingredientsFields];
    copy.push(ingredients);
    ingredientsRef.current.value = "";
    setIngredientsFields(copy);
  };

  // ADD measures in list
  const addMeasureInput = e => {
    e.preventDefault();
    let measures = measuresRef.current.value;
    const copy = [...measuresFields];
    copy.push(measures);
    measuresRef.current.value = "";
    setMeasuresFields(copy);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(formValues);
    const formData = new FormData();
    for (let key in formValues) formData.append(key, formValues[key]);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/cocktail", formData)
      .then(res => {
        console.log(res);
        // props.history.push("/cocktails");
      })
      .catch(err => {
        console.log(err);
      });
    // console.log("ajouté");
  };

  const handleChangeForm = e => {
    e.preventDefault();
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
            <h3>Add ingredients</h3>
            {ingredientsFields.length === 0 ? (
              <p>No ingredients yet!</p>
            ) : (
              <ul>
                {ingredientsFields.map((ingredient, i) => (
                  <li key={i} className="ingredients-list">
                    {ingredient} <i className="fas fa-minus"></i>
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
            <i className="fas fa-plus" onClick={addIngredientInput} />
          </div>

          <div className="measure-container">
            <h3>Add Measures</h3>
            {measuresFields.length === 0 ? (
              <p>No Measures Yet!</p>
            ) : (
              <ul>
                {measuresFields.map((measure, i) => (
                  <li key={i} className="ingredients-list ">
                    <span> {measure}</span>
                    <span className="fas fa-minus"></span>
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
            <i className="fas fa-plus" onClick={addMeasureInput}></i>
          </div>
        </div>
        <input type="file" name="Image" className="input" />

        <button>Add!</button>
      </form>
    </div>
  );
};

export default AddCoktail;
