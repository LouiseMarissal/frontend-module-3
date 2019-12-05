import React from "react";
import "./../../css/CocktailCard.css";
import { Link } from "react-router-dom";

export default function CocktailCard({ cocktail }) {
  return (
    <>
      <div className="CocktailCard">
        <div className="titre">{cocktail.Name}</div>
        <Link to={`/${cocktail._id}`}>{cocktail.Name}</Link>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="photo" src={cocktail.Image}></img>
            </div>
            <div className="flip-card-back">
              <span className="heart">
                <i className="fas fa-heart"></i>
              </span>
              <ul>
                <li>{cocktail.Ingredient1}</li>
                <li>{cocktail.Ingredient2}</li>
                <li>{cocktail.Ingredient3}</li>
              </ul>
              <span className="cheers">
                <i className="fas fa-glass-cheers"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
