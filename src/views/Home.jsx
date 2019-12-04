import React from "react";
import CocktailList from "../components/cocktails/CocktailsList";
import SearchBar from "../components/Bars/SearchBar";

export default function Home() {
  return (
    <div className="mainPage">
      <h1 className="title">HomePage of Mixology Loveeers</h1>
      <SearchBar />
      <CocktailList />
    </div>
  );
}
