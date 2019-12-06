import React from "react";
import "./../../css/CocktailCard.css";
import { Link } from "react-router-dom";

export default function CocktailCard({ cocktail }) {
  return (
    <>
      <div className="CocktailCard">
        <Link to={`/${cocktail._id}`}>
          <div>{cocktail.Name}</div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={cocktail.Image}
                  alt="cocktail-name"
                  className="photo"
                ></img>
              </div>
              <div className="flip-card-back">
                <span className="heart">
                  <i className="fas fa-heart"></i>
                </span>
                <ul>
                  <li>{cocktail.Ingredients}</li>
                </ul>
                <span className="cheers">
                  <i className="fas fa-glass-cheers"></i>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
