import React, { useState, useEffect } from "react";
import "./../../css/OneCocktail.css";
import axios from "axios";
import { object } from "prop-types";

export default function OneCocktail(props) {
  const [cocktail, setCocktail] = useState([]);
  // if (cocktail.Ingredients !== undefined) {
  //   // console.log(cocktail.Ingredients);
  //   // console.log(typeof cocktail.Ingredients);
  //   // let test = Array.from(cocktail.Ingredients);
  //   // console.log(test[0]);
  // }
  console.log(cocktail.Ingredients);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "/cocktail/" + props.match.params.id
      )
      .then(dbRes => setCocktail(dbRes.data))
      .catch(err => console.log(err));
  }, []);
  if (cocktail.Ingredients !== undefined) {
    return (
      <>
        <div className="CocktailCard">
          <div className="titre">{cocktail.Name}</div>
          <div className="onecocktail">
            <div>
              <img className="OneCocktailImage" src={cocktail.Image} alt="" />
            </div>
            <div className="test"></div>
            <div className="FullInstructions">
              <div className="what">What do i need ?</div> <br />
              <div className="full-ingredients">
                <ul className="Ingredients">
                  {cocktail.Ingredients.map((Ingredient, i) => {
                    if (Ingredient !== "" && Ingredient !== null) {
                      return (
                        <li className="ingredient">
                          {Ingredient} ({cocktail.Measures[i++]})
                        </li>
                      );
                    } else return null;
                  })}
                </ul>
                {/* <ul className="Measures">
                  {cocktail.Measures.map((Measure, i) => {
                    if (Measure !== "" && Measure !== null) {
                      return <li className="measure">({Measure})</li>;
                    } else return null;
                  })}
                </ul> */}
              </div>
              <div className="how">How do i make it ?</div> <br />
              <div className="instructions">{cocktail.Instructions}</div>
            </div>
          </div>
        </div>
      </>
    );
  } else return null;
}
