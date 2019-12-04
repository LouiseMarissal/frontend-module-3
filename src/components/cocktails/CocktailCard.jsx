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
              <div>
                <span>
                  <i className="fas fa-heart"></i>
                </span>
                <span>{cocktail.Ingredient1}</span>
                <span>{cocktail.Ingredient2}</span>
                <span>{cocktail.Ingredient3}</span>
                <span>
                  <i className="fas fa-glass-cheers"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
