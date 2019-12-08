import React, { useState, useEffect } from "react";
import "./../../css/AddCocktail.scss";

import CocktailCard from "./../../components/cocktails/CocktailCard";
import axios from "axios";

const UserProfile = props => {
  const [cocktails, setCocktails] = useState({});
  const [_userProID, setUserProID] = useState(null);

  // useeffect
  // user en session
  // setuserproid

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "/profile/" + props.match.params.id
      )
      .then(dbRes => {
        setUserProID(dbRes.data);
        console.log("user id", _userProID);
        getUserCocktail(_userProID);
      })
      .catch(err => {
        console.log(err);
      });
  }, [_userProID, props.match.params.id]);

  const getUserCocktail = id => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL, "/userCocktail/" + id)
      .then(res => {
        setCocktails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log("COCKTAILS", cocktails);
  return (
    <div>
      <CocktailCard />
    </div>
  );
};
export default UserProfile;
