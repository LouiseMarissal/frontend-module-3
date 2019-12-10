import React, { useState, useEffect } from "react";
import "./../../css/CocktailCard.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CocktailCard({ cocktail, cocktailsFav }) {
  const [like, setLike] = useState([]);

  // const loadUserFavs = () => {
  //   console.log(process.env.REACT_APP_BACKEND_URL + "/cocktail/userFav");
  //   axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/cocktail/userFav")
  //     .then(dbRes => {
  //       const fav = dbRes;
  //       fav.map((id, i) => {
  //         let likeId = document.getElementById(id);
  //         if (likeId) {
  //           likeId.className = "fas fa-glass-cheers cheersOrange";
  //           console.log(likeId);
  //         }
  //       });
  //     })
  //     .catch(dbErr => console.log(dbErr));
  // };

  useEffect(() => {
    if (cocktailsFav) {
      cocktailsFav.map((cocktailFav, i) => {
        var thisCocktailId = cocktail._id;
        var cocktailId = document.getElementById(thisCocktailId);
        var cocktailFavId = cocktailFav._id;
        if (
          thisCocktailId === cocktailFavId &&
          cocktailId.className.includes("fa-glass-cheers")
        ) {
          cocktailId.className =
            "fas fa-glass-cheers is-rotating cheers cheersOrange";
        }
      });
    }
    setLike(cocktail.Like);
  }, []);

  const handleClickLike = e => {
    const id = cocktail._id;
    if (e.target.className === "fas fa-glass-cheers cheers") {
      addLike(id);
      e.target.className =
        "fas fa-glass-cheers is-rotating cheers cheersOrange";
    } else {
      removeLike(id);
      e.target.className = "fas fa-glass-cheers cheers";
    }
  };

  const addLike = id => {
    let newValue = 0;
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + "/cocktail/addLike/" + id, {
        cocktail
      })
      .then(dbRes => {
        newValue = dbRes.data.Like;
        setLike(newValue);
      })
      .catch(dbErr => console.log(dbErr));
  };

  const removeLike = id => {
    let newValue = 0;
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + "/cocktail/removeLike/" + id, {
        cocktail
      })
      .then(dbRes => {
        newValue = dbRes.data.Like;
        setLike(newValue);
      })
      .catch(dbErr => console.log(dbErr));
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
                  id={cocktail._id}
                  onClick={handleClickLike}
                ></i>
                <span className="likeCounter">{like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
