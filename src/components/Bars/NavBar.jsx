import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink className="link" exact to="/">
        Home
      </NavLink>
    </nav>
  );
}
