import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Card } from "react-bootstrap";
import axios from "axios";

const UserCocktailCard = ({ userCocktails, props }) => {
  const handleSubmit = event => {
    // event.preventDefault();

    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/cocktail/" + userCocktails._id
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <Card style={{ width: "8rem" }}>
      <Card.Img variant="top" src={userCocktails.Image} />
      <Card.Body>
        <Card.Title>{userCocktails.Name}</Card.Title>

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
      </Card.Body>
    </Card>
  );
};
export default UserCocktailCard;
