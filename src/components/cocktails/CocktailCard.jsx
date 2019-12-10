import React, { useState, useEffect } from "react";
import "./../../css/CocktailCard.css";
import { Link } from "react-router-dom";

export default function CocktailCard({ cocktail }) {
  const [favorite, setFavorite] = useState([]);
  const [like, setLike] = useState([]);

  // const handleClickFav = e => {
  //   if (e.target.className === "fas fa-heart heart")
  //     e.target.className = "fas fa-heart heartOrange";
  //   else e.target.className = "fas fa-heart heart";
  // };

  const handleClickLike = e => {
    if (e.target.className === "fas fa-glass-cheers cheers")
      e.target.className =
        "fas fa-glass-cheers is-rotating cheers cheersOrange";
    else e.target.className = "fas fa-glass-cheers cheers";
  };

  return (
    <>
      <div className="CocktailCard">
        <Link className="cocktailName" to={`/one-cocktail/${cocktail._id}`}>
          {cocktail.Name}
        </Link>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${cocktail.Image})`
                }}
                className="photo"
              ></div>
            </div>
            <div className="flip-card-back">
              {/* <i className="fas fa-heart heart" onClick={handleClickFav}></i> */}
              <ul>
                {cocktail.Ingredients.map((i, index) =>
                  i != "" && i != null && i && "/n" ? (
                    <li key={index} className="ingredient">
                      {i}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
              <div className="likeContainer">
                <i
                  className="fas fa-glass-cheers cheers"
                  onClick={handleClickLike}
                ></i>
                <span className="likeCounter">{cocktail.Like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
