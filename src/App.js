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
import Signup from "./views/account/signup";
import Profile from "./views/account/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCoktail from "./views/cocktails/AddCoktail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile/" component={Profile} />
        
        <Route path="one-cocktail/:id" component={OneCocktail} />
        <Route path="/add-cocktail" component={AddCoktail} />

        <Route path="*" component={PageFourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
