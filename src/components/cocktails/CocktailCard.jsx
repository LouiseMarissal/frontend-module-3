import React from "react";
import "./../../css/CocktailCard.css";

export default function CocktailCard({ cocktail }) {
  return (
    <>
      <div className="CocktailCard">
        <div className="titre">{cocktail.Name}</div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="photo" src={cocktail.Image}></img>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>{cocktail.Ingredient1}</li>
                <li>{cocktail.Ingredient2}</li>
                <li>{cocktail.Ingredient3}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
