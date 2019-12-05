import React, { useState, useEffect } from "react";
import "./../../css/OneCocktail.css";
import axios from "axios";

export default function OneCocktail(props) {
  console.log(props.match.params.id);
  const [cocktail, setCocktail] = useState([]);
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "/cocktail/" + props.match.params.id
      )
      .then(dbRes => setCocktail(dbRes.data))
      .catch(err => console.log(err));
  }, []);
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
            <ul className="Ingredients">
              <li>
                <span className="ingredient">{cocktail.Ingredient1} :</span>
                <span className="mesure"> {cocktail.Measure1}</span>
              </li>
              <li>
                <span className="ingredient">{cocktail.Ingredient2} :</span>
                <span className="mesure"> {cocktail.Measure2}</span>
              </li>
              <li>
                <span className="ingredient">{cocktail.Ingredient3} :</span>
                <span className="mesure"> {cocktail.Measure3}</span>
              </li>
              <li>
                <span className="ingredient">{cocktail.Ingredient4} :</span>
                <span className="mesure"> {cocktail.Measure4}</span>
              </li>
            </ul>
            <br />
            <div className="how">How do i make it ?</div> <br />
            <div className="instructions">{cocktail.Instructions}</div>
          </div>
        </div>
      </div>
    </>
  );
}
