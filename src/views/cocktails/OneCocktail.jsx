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
          <img className="OneCocktailImage" src={cocktail.Image} alt="" />
          <div className="FullInstructions">
            <div className="what">What do i need ?</div> <br />
            <ul className="Ingredients">
            {/* {for (var i=1; i<15; i++) {
              if(Object.key(cocktail) === `Ingredient${i}`) {

              }
            }} */}
              <li>
                {cocktail.Ingredient1} : {cocktail.Measure1}
              </li>
              <li>
                {cocktail.Ingredient2} : {cocktail.Measure2}
              </li>
              <li>
                {cocktail.Ingredient3} : {cocktail.Measure3}
              </li>
              <li>
                {cocktail.Ingredient4} : {cocktail.Measure4}
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
