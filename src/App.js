import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Bars/NavBar";
import Home from "./views/Home";
import PageFourOhFour from "./views/PageFourOhFour";
import Login from "./views/account/Login";
import Signup from "./views/account/Signup";
import Profile from "./views/account/UserProfile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={PageFourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
