import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserContext from "./../../auth/UserContext";
import APIHandler from "./../../api/APIHandler";

export default withRouter(function NavBar(props) {
  let { currentUser, setCurrentUser } = useContext(UserContext);
  const handleSignout = () =>
    APIHandler.post("auth-routes/logout").finally(() => {
      props.history.push("/");
      setCurrentUser(null);
    });

  return (
    <nav className="nav-bar black" id="navBar">
      <NavLink className="link" to="/">
        <div className="home-nav">
          <span className="mixo">MIXO</span>
          <span className="lover">Lover</span>
        </div>
      </NavLink>
      {!currentUser ? (
        <div className="sideLinkContainer">
          <NavLink className="link login" to="/Login">
            Login
          </NavLink>
          {/* <NavLink className="link" to="/Signup">
            SignUp
          </NavLink> */}
        </div>
      ) : (
        <div className="sideLinkContainer">
          <NavLink className="link" to={`/profile/` + props.user._id}>
            <img className="userProfilePicture" src={props.user.photo} />
          </NavLink>
          <div className="link" to="/logout" onClick={handleSignout}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      )}
    </nav>
  );
});
