import React, { useState, useEffect } from "react";
import "./../../css/AddCocktail.css";
import UserCocktailCard from "./../../components/cocktails/UserCocktailCard";
import axios from "axios";
import "./../../css/userCocktailCard.css";

const UserProfile = props => {
  const [userCocktails, setUserCocktails] = useState([]);
  const [user, setUser] = useState({});
  let userData = {};

  useEffect(() => {
    // console.log("Debut", user);
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
        // console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // console.log("ICI", props.match.params.id);
  const getUserCocktail = id => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/auth-routes/profile/" +
          props.match.params.id
      )
      .then(res => {
        setUserCocktails(...userCocktails, res.data);
        console.log("yatata", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log("usercokctails", userCocktails);

  return (
    <div className="user-cocktail-list">
      {userCocktails.map((cocktail, i) => (
        <UserCocktailCard key={i} userCocktails={cocktail} />
      ))}
    </div>
  );
};
export default UserProfile;
