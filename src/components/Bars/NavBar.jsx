import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink className="link" to="/">
        <div className="home-nav">
          <span className="mixo">MIXO</span>
          <span className="lover">Lover</span>
        </div>
      </NavLink>
      <div>
        <NavLink className="link" to="/Login">
          Login
        </NavLink>
        <NavLink className="link" to="/Signup">
          SignUp
        </NavLink>
        {/* If loggedIn */}
        <NavLink className="link" to="/profile">
          Profile
        </NavLink>
      </div>
    </nav>
  );
}
