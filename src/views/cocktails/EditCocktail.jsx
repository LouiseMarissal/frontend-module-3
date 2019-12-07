import React, { useState, useEffect } from "react";
import axios from "axios";

const EditCocktail = () => {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/cocktail/")
      .then(res => {
        setCocktail(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = e => {
    console.log(e);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(cocktail);
    axios
      .patch(
        process.env.REACT_APP_BACKEND_URL + "/cocktail/" + cocktail._id,
        cocktail
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Edit your cocktail</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={cocktail.Name} onChange={handleChange} />
        <input type="text" value={cocktail.Glass} onChange={handleChange} />
        <input
          type="text"
          value={cocktail.Instructions}
          onChange={handleChange}
        />
        <div className="measure-ingredient-container">
          <h4>Edit ingredients</h4>
          <ul>
            {cocktail.Ingredients.map((ingredient, i) => (
              <li
                key={i}
                className="ingredients-list"
                contentEditable
                onChange={handleChange}
              >
                {ingredient}
              </li>
            ))}
          </ul>
          <h4>edit measures</h4>
          <ul>
            {cocktail.Masures.map((measure, i) => (
              <li
                key={i}
                className="measures-list"
                contentEditable
                onChange={handleChange}
              >
                {measure}
              </li>
            ))}
          </ul>
        </div>
        <button className="btn">Edit</button>
      </form>
    </div>
  );
};
export default EditCocktail;
