import React, { useEffect, useState } from "react";
import { Dropdown, Card } from "react-bootstrap";
import "./../../css/userCocktailCard.scss";
import axios from "axios";

const LikeCocktail = ({ likedCocktail, props }) => {
  //   const [userCocktail, setUserCocktails] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/cocktail")
      .then(res => {
        setCocktails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Card style={{ width: "8rem" }} className="user-cocktail-list">
      <Card.Img variant="top" src={likedCocktail.Image} />
      <Card.Body>
        <Card.Title>{likedCocktail.Name}</Card.Title>

        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="Manage"
            style={{
              backgroundColor: "#ffb200",
              border: "none",
              padding: "none"
            }}
          >
            more..
          </Dropdown.Toggle>
          <i
            className="fas fa-glass-cheers"
            onClick={() => props(likedCocktail._id)}
          ></i>
          <Dropdown.Menu>
            <Dropdown.Item href={`/one-cocktail/${likedCocktail._id}`}>
              Show Cart
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
};
export default LikeCocktail;
