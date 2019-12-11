import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./../../auth/UserContext";

export default function NavBar(props) {
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;
  return (
    <nav className="nav-bar black" id="navBar">
      <NavLink className="link" to="/">
        <div className="home-nav">
          <span className="mixo">MIXO</span>
          <span className="lover">Lover</span>
        </div>
      </NavLink>
      <div className="sideLinkContainer">
        <NavLink className="link" to="/Login">
          Login
        </NavLink>
        <NavLink className="link" to="/Signup">
          SignUp
        </NavLink>
        {/* If loggedIn */}

        <NavLink className="link" to={`/profile/` + props.user._id}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
}
