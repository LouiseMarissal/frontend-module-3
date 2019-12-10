import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

const UserCocktailCard = ({ userCocktails, props }) => {
  const handleSubmit = event => {
    // event.preventDefault();

    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/cocktails/" + userCocktails._id
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
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
            Manage
          </Dropdown.Toggle>
          <i className="fas fa-trash-alt" onClick={handleSubmit}></i>
          <Dropdown.Menu>
            <Dropdown.Item href={`/edit-cocktail/${userCocktails._id}`}>
              Edit Cocktails
            </Dropdown.Item>
            <Dropdown.Item href={`/one-cocktail/${userCocktails._id}`}>
              Show Cart
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default UserCocktailCard;
