import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="home-nav">
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className="link" to="/login">
          Login
        </NavLink>
        <NavLink className="link" to="/signup">
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
