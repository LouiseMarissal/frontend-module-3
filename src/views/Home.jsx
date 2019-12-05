import React, { useState, useEffect } from "react";
import CocktailsList from "./../components/cocktails/CocktailsList";
import useSearch from "../components/Bars/UseSearch";
import axios from "axios";
import "./../css/Home.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const cocktails = useSearch(query);
  const handleSearch = e => {
    setQuery(e.target.value);
    // filterCocktails(cocktails, query);
  };

  // const filterCocktails = (cocktails, query) => {
  //   cocktails.forEach((c, i) => {
  //     Object.keys(c).forEach(key => {
  //       if (c[key] !== query) {
  //         // cocktails.splice(c[i]);
  //       }
  //     });
  //   });
  // };

  return (
    <div className="fullPage">
      <h1 className="title">HomePage of Mixology Loveeers</h1>
      <input
        onChange={handleSearch}
        className="searchBar"
        placeholder="Search..."
      ></input>
      <CocktailsList cocktails={cocktails} />
    </div>
  );
}
