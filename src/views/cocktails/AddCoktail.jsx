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

    var measureArray = [...measuresFields];
    var index2 = measureArray.indexOf(e.target.value);
    measureArray.splice(index2, 1);
    setMeasuresFields(measureArray);
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
    <div className="page-container">
      <div className="container">
        <div className="add-cocktail-form-container">
          <div>
            <h1 className="h1">Create your own Cocktail</h1>
            <form
              className="addCocktailForm"
              onSubmit={handleSubmit}
              onChange={handleChangeForm}
            >
              <input
                type="text"
                name="Name"
                className="input"
                placeholder="Name"
              />
              <input
                type="text"
                name="Glass"
                className="input"
                placeholder="Glass"
              />
              <input
                type="text"
                name="Instructions"
                className="input"
                placeholder="Recipe"
              />
              <div className="measure-ingredient-container">
                <div className={`ingredient-container`}>
                  <div
                    className={`${
                      ingredientsFields.length === 0 ? "" : "yellow-border"
                    }`}
                  >
                    <h4 className="h4">Add ingredients</h4>
                    {ingredientsFields.length === 0 ? (
                      <p className="ingredientInfo">No ingredients yet!</p>
                    ) : (
                      <ul className="ingredientList">
                        {ingredientsFields.map((ingredient, i) => (
                          <li key={i} className="ingredients-list">
                            {ingredient} {measuresFields[i]}
                            <i
                              className="fas fa-minus"
                              onClick={removeIngredients}
                            ></i>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <input
                    type="text"
                    ref={ingredientsRef}
                    name="Ingredients"
                    className="input"
                    placeholder="Add Ingredient"
                  />

                  <input
                    type="text"
                    ref={measuresRef}
                    name="Measures"
                    className="input"
                    placeholder="Measure"
                  />
                </div>

                <div className="addCocktail">
                  <span className="addButton">
                    <i className="fas fa-plus" onClick={addIngredientInput}></i>
                  </span>
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

              <button className="addButton">Add!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoktail;
