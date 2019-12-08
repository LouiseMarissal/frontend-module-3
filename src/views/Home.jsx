import React, { useState, useEffect } from "react";
import CocktailsList from "./../components/cocktails/CocktailsList";
import useSearch from "../components/Bars/UseSearch";
import filter from "../components/Bars/Filters";
import "./../css/Home.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState(true);
  const cocktails = useSearch(query);
  const [myOffset, setOffset] = useState(1);
  const [cocktailsDisplayed, setCocktailsDisplayed] = useState([]);
  const handleSearch = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log("here ?");
    const copy = [...cocktails];
    const elements = copy.splice(0, 20);
    console.log(elements.length, "heeeere");
    setCocktailsDisplayed(elements);
  }, [cocktails]);

  const handleScroll = e => {
    var offset = window.innerHeight + e.target.scrollTop;
    var height = e.target.scrollHeight;
    if (offset > height - 1) {
      const copy = [...cocktails];
      const elements = copy.splice(myOffset * 20, 20);
      setCocktailsDisplayed([...cocktailsDisplayed, ...elements]);
      setOffset(off => off + 1);
    }
  };
  return (
    <div className="fullpage-overflow">
      <div className="fullPage" onScroll={handleScroll}>
        <div className="fullPageHeader">
          <h1 className="title">HomePage of Mixology Loveeers</h1>
          <input
            onChange={handleSearch}
            className="searchBarHome"
            placeholder="Search..."
          ></input>
        </div>
        <div className="blurEffect"></div>
        <CocktailsList
          cocktails={cocktails.length < 18 ? cocktails : cocktailsDisplayed}
        />
      </div>
    </div>
  );
}
