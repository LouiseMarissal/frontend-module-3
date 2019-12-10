import React, { useState, useEffect } from "react";
import "./../../css/AddCocktail.scss";
import UserCocktailCard from "./../../components/cocktails/UserCocktailCard";
import axios from "axios";
// import "./../../css/userCocktailCard.scss";
import "./../../css/UserProfile.scss";
import { Link } from "react-router-dom";

const UserProfile = props => {
  const [userCocktails, setUserCocktails] = useState([]);
  const [user, setUser] = useState({});
  let userData = {};

  useEffect(() => {
    var searchBar = document.getElementById("searchBar");
    var navBar = document.getElementById("navBar");
    if (searchBar) {
      navBar.className = "nav-bar white";
    } else {
      navBar.className = "nav-bar regular";
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/auth-routes/profile/" +
          props.match.params.id
      )
      .then(dbRes => {
        userData = dbRes.data;
        setUser(userData);
        getUserCocktail(user);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getUserCocktail = id => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/auth-routes/profile/" +
          props.match.params.id
      )
      .then(res => {
        setUserCocktails(...userCocktails, res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/userProfile/" +
          props.match.params.id
      )
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="user-profile-container">
      <div className="UserProfileContainer">
        <div>
          <img
            src={user.photo}
            alt={user.firstName}
            className="UserPhotoProfile"
          />
        </div>
        <h3>Hello {user.firstName}!</h3>
        <h6>
          {user.companyName}: {user.barName}
        </h6>
        <div>
          <h5>Add Cocktails</h5>
          <Link
            rel="stylesheet"
            to="/add-cocktail"
            className="fas fa-plus"
          ></Link>
        </div>
      </div>

      <div className="user-cocktail-list">
        {userCocktails.map((cocktail, i) => (
          <UserCocktailCard key={i} userCocktails={cocktail} />
        ))}
      </div>
    </div>
  );
};
export default UserProfile;
