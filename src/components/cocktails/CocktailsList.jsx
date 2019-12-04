import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from "./CocktailCard";
import "./../../css/CocktailList.css";

const List = ({ cocktails }) => {
  const [cocktailsToMap, setCocktail] = useState([]);
  useEffect(() => {
    setCocktail({ cocktails });
  }, []);
  return (
    <div className="fullcocktail">
      {cocktails.map((cocktail, i) => (
        <CocktailCard key={i} cocktail={cocktail} />
      ))}
    </div>
  );
};
export default List;
