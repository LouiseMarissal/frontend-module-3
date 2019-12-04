import React, { useState, useEffect } from "react";
import CocktailsList from "./../components/cocktails/CocktailsList";
import axios from "axios";

export default function Home() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/cocktail")
      .then(dbRes => setCocktails(dbRes.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="title">HomePage of Mixology Loveeers</h1>
      <div className="test">
        <CocktailsList cocktails={cocktails} />
      </div>
    </div>
  );
}
