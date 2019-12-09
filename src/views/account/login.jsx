import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    var searchBar = document.getElementById("searchBar");
    var navBar = document.getElementById("navBar");
    if (searchBar) {
      navBar.className = "nav-bar white";
    } else {
      navBar.className = "nav-bar black";
    }
  }, []);
  return (
    <div>
      <form className="form">
        <h1>Nice to see you back !</h1>
        <input className="input" name="email" placeholder="example@email.fr" />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="*****"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
