import React from "react";
import { Link } from "react-router-dom";
const UserCocktailCard = ({ userCocktails }) => {
  return (
    <div className="card" style={{ width: "8rem" }}>
      <img
        className="card-img-top"
        src={userCocktails.Image}
        alt={userCocktails.Name}
      />
      <div className="card-body">
        <h5 className="card-title">{userCocktails.Name}</h5>

        {/* <Link
          className="cocktailName btn btn-primary"
          to={`/edit-cocktail/${userCocktails._id}`}
        >
          Edit
        </Link> */}
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link
              class="dropdown-item"
              to={`/edit-cocktail/${userCocktails._id}`}
            >
              Edit
            </Link>
            <Link class="dropdown-item" to={`/cocktail/${userCocktails._id}`}>
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCocktailCard;
