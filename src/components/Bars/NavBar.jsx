import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
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
        <NavLink className="link" to="/profile/5dee1baa0c0f7a1fcdef5f9a2">
          Profile
        </NavLink>
      </div>
    </nav>
  );
}
