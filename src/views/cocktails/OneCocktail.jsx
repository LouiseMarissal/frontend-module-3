import React, { useState, useEffect } from "react";
import "./../../css/OneCocktail.scss";
import axios from "axios";
import { object } from "prop-types";
import FormComment from "../../components/comments/FormComment";

export default function OneCocktail(props) {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "/cocktail/" + props.match.params.id
      )
      .then(dbRes => setCocktail(dbRes.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    var searchBar = document.getElementById("searchBar");
    var navBar = document.getElementById("navBar");
    if (searchBar) {
      navBar.className = "nav-bar white";
    } else {
      navBar.className = "nav-bar regular";
    }
  }, []);

  if (cocktail.Ingredients !== undefined) {
    return (
      <>
        <div className="cocktailView">
          <div className="fullCocktailContainer">
            <div className="oneCocktail">
              <div className="title">{cocktail.Name}</div>
              <div className="imageAndInfoContainer">
                <div className="oneCocktailImageContainer">
                  <img
                    className="oneCocktailImage"
                    src={cocktail.Image}
                    alt=""
                  />
                </div>
                <div className="fullInstructions">
                  <div className="whatDoINeed">What do i need ?</div> <br />
                  <div className="fullIngredients">
                    <ul className="ingredients">
                      {cocktail.Ingredients.map((Ingredient, i) => {
                        if (Ingredient !== "" && Ingredient !== null) {
                          return (
                            <li key={i}>
                              <span className="ingredient">{Ingredient} </span>
                              <span>
                                {cocktail.Measures[i] ? (
                                  <span className="measures" key={i}>
                                    ({cocktail.Measures[i++]})
                                  </span>
                                ) : null}
                              </span>
                            </li>
                          );
                        } else return null;
                      })}
                    </ul>
                  </div>
                  <div className="howDoIMakeIt">How do i make it ?</div> <br />
                  <div className="instructions">{cocktail.Instructions}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormComment
          CocktailId={props.match.params.id}
          UserId={cocktail.UserProID}
        />
      </>
    );
  } else return null;
}
