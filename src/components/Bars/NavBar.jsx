import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="home-nav">
        <NavLink className="link" to="/">
          <span className="mixo">MIXO</span>
          <span className="lover">Lover</span>
        </NavLink>
      </div>
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
