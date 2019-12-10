import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item to={`/edit-cocktail/${userCocktails._id}`}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default UserCocktailCard;
