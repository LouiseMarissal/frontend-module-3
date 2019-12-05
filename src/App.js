import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/layout.css";
import "./css/Bars.css";
import "./css/signup-in.css";
import NavBar from "./components/Bars/NavBar";
import Home from "./views/Home";
import PageFourOhFour from "./views/PageFourOhFour";
import OneCocktail from "./views/cocktails/OneCocktail";
import Login from "./views/account/Login";
import Signup from "./views/account/Signup";
import Profile from "./views/account/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/:id" component={OneCocktail} />
        <Route path="*" component={PageFourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
