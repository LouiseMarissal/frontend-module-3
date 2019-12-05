import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OneCocktail(props) {
  console.log(props.match.params.id);
  const [cocktail, setCocktails] = useState([]);
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "/cocktail/" + props.match.params.id
      )
      .then(dbRes => setCocktails(dbRes.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <div className="CocktailCard">
        <div className="titre">{cocktail.Name}</div>
        <div className="onecocktail">
          <img src={cocktail.Image} alt="" />
          <span>What did i need ?</span> <br />
          <span>{cocktail.Ingredient1}</span> <br />
          <span>{cocktail.Ingredient2}</span> <br />
          <span>{cocktail.Ingredient3}</span> <br />
          <span>{cocktail.Ingredient4}</span>
        </div>
        <div>{cocktail.Instructions}</div>
      </div>
    </>
  );
}
