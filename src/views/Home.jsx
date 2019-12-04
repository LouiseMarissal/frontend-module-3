import React, { useState, useEffect } from "react";
import CocktailsList from "./../components/cocktails/CocktailsList";
import SearchBar from "./../components/Bars/SearchBar";
import axios from "axios";

import "./../css/Home.css";

export default function Home() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/cocktail")
      .then(dbRes => setCocktails(dbRes.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="fullPage">
      <h1 className="title">HomePage of Mixology Loveeers</h1>
      <SearchBar />
      <CocktailsList cocktails={cocktails} />
    </div>
  );
}
