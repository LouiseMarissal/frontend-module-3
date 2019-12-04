import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink className="link" exact to="/">
        Home
      </NavLink>
      <NavLink className="link" exact to="/login">
        Login
      </NavLink>
      <NavLink className="link" exact to="/signup">
        SignUp
      </NavLink>
      <NavLink className="link" exact to="/profile">
        Profile
      </NavLink>
    </nav>
  );
}
