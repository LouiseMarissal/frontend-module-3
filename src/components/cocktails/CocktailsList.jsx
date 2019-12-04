import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from "./CocktailCard";

const List = ({ cocktails }) => {
  const [cocktailsToMap, setCocktail] = useState([]);
  useEffect(() => {
    setCocktail({ cocktails });
  }, []);
  return (
    <div>
      <h1>Cocktail Views</h1>
      {cocktails.map((cocktail, i) => (
        <CocktailCard key={i} cocktail={cocktail} />
      ))}
    </div>
  );
};
export default List;
