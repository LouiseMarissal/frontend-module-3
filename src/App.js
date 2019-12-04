import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Bars/NavBar";
import Home from "./views/Home";
import PageFourOhFour from "./views/PageFourOhFour";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageFourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
