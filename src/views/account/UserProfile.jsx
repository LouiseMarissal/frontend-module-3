import React, { useState, useEffect, useRef } from "react";
import "./../../css/AddCocktail.scss";
import UserCocktailCard from "./../../components/cocktails/UserCocktailCard";
import axios from "axios";
import "./../../css/UserProfile.scss";
import { Link } from "react-router-dom";

const UserProfile = props => {
  const [userCocktails, setUserCocktails] = useState([]);
  const [user, setUser] = useState({});
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const userData = useRef();

  // get UserProfile infos
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/userProfile/" +
          props.match.params.id
      )
      .then(res => {
        setFavorites(res.data.favorites);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // update state of cocktail
  useEffect(id => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/cocktail/")
      .then(res => {
        const copy = cocktails.filter(c => c._id !== id);
        setCocktails(copy);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // get userID to match with cocktails
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/cocktail/userpro-cocktail/" +
          props.match.params.id,
        {
          withCredentials: true
        }
      )
      .then(dbRes => {
        setUserCocktails(dbRes.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Delete userPro cocktail
  const handleDelete = id => {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + "/cocktail/" + id)
      .then(res => {
        const copy = userCocktails.filter(c => c._id !== id);
        setUserCocktails(copy);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    var searchBar = document.getElementById("searchBar");
    var navBar = document.getElementById("navBar");
    if (searchBar) {
      navBar.className = "nav-bar white";
    } else {
      navBar.className = "nav-bar regular";
    }
  }, []);
  return (
    <div className="user-profile-container">
      <div className="UserProfileContainer">
        <div className="userCardContainer">
          <div className="userCard">
            <div className="userImage">
              <div className="user">
                <img
                  ref={userData}
                  src={user.photo}
                  alt={user.firstName}
                  className="UserPhotoProfile"
                />

                <div>
                  <h5>Add Cocktails</h5>
                  <Link
                    rel="stylesheet"
                    to="/add-cocktail"
                    className="fas fa-plus"
                  ></Link>
                </div>
              </div>
              <div>
                <h3>Hello {user.firstName}!</h3>
                <h6>
                  {user.companyName}: {user.barName}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={userData}>
        <h5>My Cocktails</h5>
        <div className="user-cocktail-list">
          {userCocktails.length === 0 ? (
            <p>You don't have any cocktails yet!</p>
          ) : (
            userCocktails.map((cocktail, i) => (
              <UserCocktailCard
                key={i}
                userCocktails={cocktail}
                props={handleDelete}
              />
            ))
          )}
        </div>
      </div>

      <div>
        <h5>My Favorites Cocktails</h5>
        <div className="user-cocktail-list">
          {favorites.length === 0 ? (
            <p>You don't have any favorites yet !</p>
          ) : (
            favorites.map((f, i) => (
              <UserCocktailCard key={i} userCocktails={f} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
