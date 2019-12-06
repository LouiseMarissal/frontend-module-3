import React, { useState } from "react";
import CocktailsList from "./../components/cocktails/CocktailsList";
import useSearch from "../components/Bars/UseSearch";
import filter from "../components/Bars/Filters";
import "./../css/Home.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState(true);
  const cocktails = useSearch(query);
  const handleSearch = e => {
    setQuery(e.target.value);
  };

  const isChecked = e => {
    setChecked(!checked);
    console.log(checked);
  };
  return (
    <div className="fullPage">
      <h1 className="title">HomePage of Mixology Loveeers</h1>
      <input
        onChange={handleSearch}
        className="searchBar"
        placeholder="Search..."
      ></input>
      <label htmlFor="Alcoholic">Contains Alcohol ?</label>
      <input
        onChange={isChecked}
        type="checkbox"
        name="Alcoholic"
        id="Alcoholic"
        className="input"
      />
      <CocktailsList cocktails={cocktails} />
    </div>
  );
}
