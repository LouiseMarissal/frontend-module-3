import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const UserCocktailCard = ({ userCocktails }) => {
  // const [userCocktails, setUserCocktails] = useState({});
  // const [userProID, setUserProID] = useState({});

  // useEffect(id => {
  //   axios
  //     .get(process.env.REACT_APP_BACKEND_URL + "/profile/" + id, userProID)
  //     .then(dbRes => {
  //       setUserProID(dbRes.data);
  //       // getUserCocktail(userProID);
  //       console.log("ICI", dbRes.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={userCocktails.Image}
        alt={userCocktails.Name}
      />
      <div className="card-body">
        <h5 className="card-title">{userCocktails.Name}</h5>
        <p className="card-text">{userCocktails.Instructions}</p>
        <div className="measure-ingredient-user">
          <ul className="ing-list">
            <p>Ingredients</p>
            {userCocktails.Ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <ul className="meas-list">
            <p>Measure</p>
            {userCocktails.Measures.map((measure, i) => (
              <li key={i}>{measure}</li>
            ))}
          </ul>
        </div>
        <p>Recipe</p>
        <p>{userCocktails.Instructions}</p>

        <Link
          className="cocktailName btn btn-primary"
          to={`/edit-cocktail/${userCocktails._id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};
export default UserCocktailCard;
